import { Navbar, Navigation } from "../../components/Index";

const Product = () => {
  return (
    <div className="">
      <div className="h-max">
        <Navbar />
        <Navigation />
      </div>
      <div className="product h-screen bg-red-200 pt-2 md:pt-16">
        Product
        <h1>asdf</h1>
      </div>
    </div>
  );
};

export default Product;
