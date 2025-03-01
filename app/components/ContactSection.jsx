// app/components/ContactSection.js
export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">
              Reach Out To Us
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Call us</h3>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="ri-phone-line mr-2"></i>+880 1234567890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Send Mail</h3>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="ri-mail-line mr-2"></i>natureNest@gmail.com
              </p>
            </div>
          </div>
          <form className="md:w-1/2 bg-white dark:bg-gray-900 p-6 rounded shadow">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded hover:bg-green-600 flex items-center justify-center"
            >
              Submit <i className="ri-arrow-right-up-line ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
