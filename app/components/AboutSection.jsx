// app/components/AboutSection.js
export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/2">
          <img src="/images/about.jpg" alt="About" className="w-full rounded" />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4">
            Why Choose NatureNest?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            With thousands of happy customers and glowing reviews, we take pride
            in offering exceptional plant care, guidance, and reliable delivery
            services.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center">
              <i className="ri-checkbox-fill text-green-700 mr-2"></i>
              Timely and reliable delivery every time.
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-fill text-green-700 mr-2"></i>
              Hassle-free returns with a full refund guarantee.
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-fill text-green-700 mr-2"></i>
              Complimentary plant care visits post-purchase.
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-fill text-green-700 mr-2"></i>
              Comprehensive care guides for every plant.
            </li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center text-green-700 hover:underline"
          >
            Buy Now <i className="ri-arrow-right-down-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
