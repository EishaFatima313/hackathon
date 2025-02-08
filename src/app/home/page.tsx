import NikeBanner from "../../components/NikeBanner/NikeBanner";
import ProductCard from "../../components/ProductCard/ProductCard";

const HomePage = () => {
  interface Product {
    image: string;
    title: string;
    price: string;
  }

  const products: Product[] = [
    {
      image: "/shoe1.png",
      title: "Nike Air Max",
      price: "$120"
    },
    {
      image: "/shoe2.png",
      title: "Adidas Ultraboost",
      price: "$150"
    },
    {
      image: "/shoe3.png",
      title: "Puma RS-X",
      price: "$110"
    },
  ];

  return (
    <main>
      <NikeBanner />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
