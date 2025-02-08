import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={"/shoe1.png"}
        alt={title}
        width={300}
        height={200}
        objectFit="cover" // Ensures the image covers the space well
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{price}</p>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

