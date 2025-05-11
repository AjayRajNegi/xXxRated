import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("../pages/Home/Home"));
const Product = lazy(() => import("../pages/Products/Product"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const About = lazy(() => import("../pages/About/About"));

// OUD Components
const WhiteOud = lazy(
  () => import("../components/ProductPages/Categories/OUD/WhiteOud"),
);
const RedOud = lazy(
  () => import("../components/ProductPages/Categories/OUD/RedOud"),
);
const BlueOud = lazy(
  () => import("../components/ProductPages/Categories/OUD/BlueOud"),
);
const GreenOud = lazy(
  () => import("../components/ProductPages/Categories/OUD/GreenOud"),
);
const BlackOud = lazy(
  () => import("../components/ProductPages/Categories/OUD/BlackOud"),
);
const ComboO = lazy(
  () => import("../components/ProductPages/Categories/OUD/ComboO"),
);

// EDP Components
const Legend = lazy(
  () => import("../components/ProductPages/Categories/EDP/Legend"),
);
const Softly = lazy(
  () => import("../components/ProductPages/Categories/EDP/Softly"),
);
const Whisky = lazy(
  () => import("../components/ProductPages/Categories/EDP/Whisky"),
);

// Gas Components
const ForeplayG = lazy(
  () => import("../components/ProductPages/Categories/Gas/ForeplayG"),
);
const IntimateG = lazy(
  () => import("../components/ProductPages/Categories/Gas/IntimateG"),
);
const NaughtyG = lazy(
  () => import("../components/ProductPages/Categories/Gas/NaughtyG"),
);
const PleasureG = lazy(
  () => import("../components/ProductPages/Categories/Gas/PleasureG"),
);
const SensualG = lazy(
  () => import("../components/ProductPages/Categories/Gas/SensualG"),
);

// NoGas Components
const BoldN = lazy(
  () => import("../components/ProductPages/Categories/NoGas/BoldN"),
);
const ClimaxN = lazy(
  () => import("../components/ProductPages/Categories/NoGas/ClimaxN"),
);
const DirtyN = lazy(
  () => import("../components/ProductPages/Categories/NoGas/DirtyN"),
);
const HardN = lazy(
  () => import("../components/ProductPages/Categories/NoGas/HardN"),
);
const ComboN = lazy(
  () => import("../components/ProductPages/Categories/NoGas/ComboN"),
);

// Zipline Components
const BlueZ = lazy(
  () => import("../components/ProductPages/Categories/Zipline/BlueZ"),
);
const BlackZ = lazy(
  () => import("../components/ProductPages/Categories/Zipline/BlackZ"),
);
const WhiteZ = lazy(
  () => import("../components/ProductPages/Categories/Zipline/WhiteZ"),
);
const ComboZ = lazy(
  () => import("../components/ProductPages/Categories/Zipline/ComboZ"),
);

// Hotshot Components
const Hotshot = lazy(
  () => import("../components/ProductPages/Categories/Hotshot/Hotshot"),
);
const HotshotM = lazy(
  () => import("../components/ProductPages/Categories/Hotshot/HotshotM"),
);

// Pocket Components
const Pocket = lazy(
  () => import("../components/ProductPages/Categories/Pocket/Pocket"),
);
const BoldP = lazy(
  () => import("../components/ProductPages/Categories/Pocket/BoldP"),
);
const ClimaxP = lazy(
  () => import("../components/ProductPages/Categories/Pocket/ClimaxP"),
);
const DirtyP = lazy(
  () => import("../components/ProductPages/Categories/Pocket/DirtyP"),
);
const HardP = lazy(
  () => import("../components/ProductPages/Categories/Pocket/HardP"),
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/oud",
    children: [
      {
        path: "white",
        element: <WhiteOud />,
      },
      {
        path: "red",
        element: <RedOud />,
      },
      {
        path: "blue",
        element: <BlueOud />,
      },
      {
        path: "green",
        element: <GreenOud />,
      },
      {
        path: "black",
        element: <BlackOud />,
      },
      {
        path: "combo",
        element: <ComboO />,
      },
    ],
  },
  {
    path: "/edp",
    children: [
      {
        path: "",
        element: <Legend />,
      },
      {
        path: "whisky",
        element: <Whisky />,
      },
      {
        path: "softly",
        element: <Softly />,
      },
    ],
  },
  {
    path: "/gas",
    children: [
      {
        path: "foreplay",
        element: <ForeplayG />,
      },
      {
        path: "intimate",
        element: <IntimateG />,
      },
      {
        path: "naughty",
        element: <NaughtyG />,
      },
      {
        path: "pleasure",
        element: <PleasureG />,
      },
      {
        path: "sensual",
        element: <SensualG />,
      },
    ],
  },
  {
    path: "/nogas",
    children: [
      {
        path: "bold",
        element: <BoldN />,
      },
      {
        path: "climax",
        element: <ClimaxN />,
      },
      {
        path: "dirty",
        element: <DirtyN />,
      },
      {
        path: "hard",
        element: <HardN />,
      },
      {
        path: "combo",
        element: <ComboN />,
      },
    ],
  },
  {
    path: "/zipline",
    children: [
      {
        path: "white",
        element: <WhiteZ />,
      },
      {
        path: "blue",
        element: <BlueZ />,
      },
      {
        path: "black",
        element: <BlackZ />,
      },
      {
        path: "combo",
        element: <ComboZ />,
      },
    ],
  },
  {
    path: "/hotshot",
    children: [
      {
        path: "",
        element: <Hotshot />,
      },
      {
        path: "m",
        element: <HotshotM />,
      },
    ],
  },
  {
    path: "/pocket",
    children: [
      {
        path: "",
        element: <Pocket />,
      },
      {
        path: "bold",
        element: <BoldP />,
      },
      {
        path: "climax",
        element: <ClimaxP />,
      },
      {
        path: "dirty",
        element: <DirtyP />,
      },
      {
        path: "hard",
        element: <HardP />,
      },
    ],
  },
];
