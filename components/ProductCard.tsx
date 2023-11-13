import CarouselProducts from "./CarouselProducts";

type DataImage = {
  id: number;
  image: string;
};

type DataProps = {
  id: number,  
  title: string;
  description: string;
  images: DataImage[];
};

export const ProductCard: React.FC<{
  data: DataProps;
}> = ({ data }) => {
  return (
    <div className="flex flex-col w-[350px] sm:w-[400px] min-h-[500px] bg-green-120 rounded-2xl">
      <div>
        <CarouselProducts data={data.images} />
      </div>
      <div className="flex flex-col justify-center items-center py-12 px-6 text-center">
        <h3 className="bold-32 text-white">{data.title}</h3>
        <p className="regular-16 text-white mt-6">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
