// app/components/ProductsSection.js
export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: "Spathiphyllum Kochii",
      price: "$11.99",
      image: "/images/product1.png",
    },
    {
      id: 2,
      title: "Dracaena Terminalis",
      price: "$8.99",
      image: "/images/product2.png",
    },
    {
      id: 3,
      title: "Dracaena Trifasciata",
      price: "$9.99",
      image: "/images/product3.png",
    },
    {
      id: 4,
      title: "Chamaedorea Elegans",
      price: "$12.99",
      image: "/images/product4.png",
    },
    {
      id: 5,
      title: "Assorted Succulent Plant",
      price: "$14.99",
      image: "/images/product5.png",
    },
    {
      id: 6,
      title: "Succulent Plant",
      price: "$7.99",
      image: "/images/product6.png",
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4">
          Explore Our <br /> Premium Plant Collection
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Browse through our curated selection of vibrant, healthy plants and
          find the perfect addition to your space.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 p-4 rounded shadow relative"
            >
              <div className="absolute top-0 left-0 w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full -mt-10 -ml-10"></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <span className="block mb-4 text-green-700">{product.price}</span>
              <button className="absolute bottom-4 right-4 bg-green-700 text-white p-2 rounded">
                <i className="ri-shopping-bag-line"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
