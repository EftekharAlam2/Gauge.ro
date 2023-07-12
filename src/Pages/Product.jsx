import { BsFillCheckCircleFill } from "react-icons/bs";

const Product = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="container mx-auto"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="lg:flex-grow lg:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-start lg:mx-auto">
            <div className="flex justify-center pl-12 pr-6 py-3 lg:max-w-fit w-fit mt-10 bg-white rounded-full shadow-lg relative mx-auto">
              <div className="mt-1 pr-2">
                <BsFillCheckCircleFill />
              </div>
              <div className="text-left font-bold">
                Customers’ Needs Above All Else
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335"
              alt=""
              className="object-cover relative object-center rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 px-4 cursor-pointer w-full sm:pr-4 max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
