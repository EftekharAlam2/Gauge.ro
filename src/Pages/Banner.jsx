import "./banner.css";

const Banner = () => {
  return (
    <section className="bg-[#1c1c3a] py-10 rounded-b-2xl">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img
              src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
              alt=""
              className="cursor-pointer w-3/4 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="xl:mb-2 mt-10 md:leading-tight mb-4 text-[#fff] text-4xl md:text-6xl text-center font-semibold ">
              Gauge Water Purifier <br />
              <span className="md:text-6xl font-bold md:font-semibold gradient-text ">
                Puts An End
              </span>{" "}
              To RO Service Pain
            </h2>
            <p className="mt-5 mb-12 px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center font-normal text-normal md:text-lg max-w-2xl text-[#6b6b6b]">
              Fully automatic water purifier provides the highest water savings
              while ensuring a seamless service experience.
            </p>
            <div className="flex flex-col justify-center items-center mx-auto relative">
              <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold">
                Take a product Tour
              </button>
              <p className="leading-relaxed text-center font-medium text-base mt-4 text-[#b5b5b5]">
                Experience Convenience Like Never Before With Our Smart Water
                Purifier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
