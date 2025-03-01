// app/components/StepsSection.js
export default function StepsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-yellow-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Simple Steps to Begin <br /> Your Green Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Select Your Plant",
              description:
                "Explore our wide range of plant varieties tailored to every need.",
            },
            {
              number: "02",
              title: "Place Your Order",
              description:
                "Confirm your selection, and we'll take care of the rest.",
            },
            {
              number: "03",
              title: "Get Plants Delivered",
              description:
                "Sit back and relax as we deliver your plant directly to your doorstep.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
