// app/components/HomeSection.js
export default function HomeSection() {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 bg-gray-100 dark:bg-gray-800 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-300 mb-4">
            Transforming Your Space <br /> Into a Green Haven
          </h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Whether you're an expert or just starting your plant journey, we
            provide everything you need to nurture and expand your green
            collection.
          </p>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded hover:bg-green-600"
          >
            Discover More <i className="ri-arrow-right-down-line ml-2"></i>
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/home.png" alt="Home" className="w-full" />
        </div>
      </div>
      {/* Social Links (visible on larger screens) */}
      <div className="hidden md:block absolute top-32 right-4">
        <span className="block text-green-700 transform rotate-90 mb-4">
          Follow Us
        </span>
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green-700"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green-700"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green-700"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
