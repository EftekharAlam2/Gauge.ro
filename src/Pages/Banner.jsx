const Banner = () => {
  return (
    <section className="bg-[#1c1c3a] py-10">
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
            <h2 className="text-3xl font-bold mb-4">
              Banner the Magic of Video Game Toys
            </h2>
            <p className="text-lg mb-6">
              Immerse yourself in the world of video game toys and collectibles.
              From action figures to plush toys, we have a wide range of
              merchandise that celebrates your favorite video games.
            </p>
            <p className="text-lg mb-6">
              Whether you are a casual fan or a hardcore collector, our curated
              collection is sure to delight you. Explore the characters, iconic
              moments, and artistry that make video game toys so special.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
