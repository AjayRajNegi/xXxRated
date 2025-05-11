import { lazy, Suspense, ComponentType } from "react";
import { RouteObject } from "react-router-dom";

// Error Boundary Component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div className="error-boundary">{children}</div>;
};

// Loading Component
const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
  </div>
);

// Lazy Load Wrapper
export const lazyLoad = (
  importFunc: () => Promise<{ default: ComponentType<any> }>,
) => {
  const LazyComponent = lazy(importFunc);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

// Helper to convert routes to lazy loaded routes
export const lazyLoadRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    if (route.element) {
      const Component = route.element as ComponentType;
      return {
        ...route,
        element: lazyLoad(() => import(`../components/${Component.name}`)),
      };
    }
    if (route.children) {
      return {
        ...route,
        children: lazyLoadRoutes(route.children),
      };
    }
    return route;
  });
};
