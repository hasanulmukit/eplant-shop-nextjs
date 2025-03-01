// app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
        <div>
          <a
            href="#"
            className="flex items-center text-xl font-bold text-green-700 dark:text-green-300 mb-4"
          >
            <i className="ri-leaf-line mr-2"></i> NatureNest
          </a>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-l"
            />
            <button className="bg-green-700 text-white p-2 rounded-r">
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Address</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>69/a - Mirpur</li>
            <li>Dhaka - 1415</li>
            <li>123-456-789</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-700 dark:text-white">
            <li>+880 1231231230</li>
            <li className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/" className="text-green-700">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-green-700">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" className="text-green-700">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">
            We accept all kinds of payment
          </h3>
          <div className="flex space-x-2">
            <img src="/images/pay1.png" alt="Payment 1" className="w-8" />
            <img src="/images/pay2.png" alt="Payment 2" className="w-8" />
            <img src="/images/pay3.png" alt="Payment 3" className="w-8" />
            <img src="/images/pay4.png" alt="Payment 4" className="w-8" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} NatureNest. All rights reserved.
      </div>
    </footer>
  );
}
