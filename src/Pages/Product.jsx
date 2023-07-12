import { BsFillCheckCircleFill } from "react-icons/bs";

const Product = () => {
  return (
    <section className="bg-gray-100 py-10" id="second-section">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="container mx-auto"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="lg:flex-grow lg:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-start lg:mx-auto">
            <div className="flex justify-center pl-12 pr-6 py-3 lg:max-w-fit w-fit mt-10 bg-white rounded-full shadow-lg relative mx-auto">
              <div className="mt-1 pr-2">
                <BsFillCheckCircleFill />
              </div>
              <div className="text-left font-bold">
                Customers’ Needs Above All Else
              </div>
            </div>
            <div className="mx-4 md:pr-10">
              <div className="md:mt-28 lg:pr-16">
                <div className=" py-6">
                  <h1 className="text-black lg:text-4xl text-3xl font-semibold text-capitalize font-jakarta-sans leading-10">
                    Take Control
                    <br className="block" />{" "}
                    <span className="text-[#ff5f55]">
                      Monitor Usage & Change Filters
                    </span>{" "}
                    <span className="block mt-2 text-black">
                      No Technician Needed
                    </span>
                  </h1>
                </div>
              </div>
              <p className="mb-6 text-[#6b6b6b]">
                We have crafted a product that addresses the real frustrations
                of a customer. The first step is to ensure there are zero
                service delays.
              </p>
              <div className="flex mb-4 relative">
                <div className="mt-1 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                      fill="#39C69B"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl  lg:w-full  mb-3 font-bold font-plusJakartaSans capitalize text-gray-800 ">
                    Smart Water Purifier With Self Servicing Capability
                  </h2>
                  <p className="font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600  lg:pr-0">
                    Say goodbye to the hassle of scheduling a technician for
                    purifier maintenance with our self-replacing filters.
                  </p>
                </div>
              </div>
              <div className="flex mb-4 relative">
                <div className="mt-1 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                      fill="#39C69B"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl  lg:w-full  mb-3 font-bold font-plusJakartaSans capitalize text-gray-800 ">
                    Compensation For Service Delays
                  </h2>
                  <p className="font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600  lg:pr-0">
                    You are entitled to a compensation of{" "}
                    <span className="font-semibold">100 Rs/Day</span> if service
                    is delayed for more than 24 hours.
                  </p>
                </div>
              </div>
              <button className="rounded-full bg-blue-500 w-fit  lg:px-12 px-10 lg:py-5 py-5 flex m-auto mt-6 md:mt-8 md:mb-14 text-white font-bold mx-auto">
                Next: Smart Water Conservation
              </button>
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
