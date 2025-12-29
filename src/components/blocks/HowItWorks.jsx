import orderImg from "../../assets/Foods/how_1.svg";
import enjoyImg from "../../assets/Foods/how_2.svg";
import deliveryImg from "../../assets/Foods/how_3.svg";

const HowItWorks = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Easy Order */}
          <div className="bg-background shadow-md rounded-xl p-6 py-2 text-center">
            <img
              src={orderImg}
              alt="Easy Order"
              className="mx-auto mb-4 w-28"
            />
            <h3 className="text-lg font-semibold">Easly Order</h3>
            <p className="text-sm text-gray-500 mt-2">
              Faucibus ante, in porttitor tellus blandit est. Phasellus
              tincidunt metus lectus sollicitudin.
            </p>
          </div>

          {/* Enjoy Food (centered card) */}
          <div className="bg-background shadow-md rounded-xl p-6 text-center">
            <img
              src={enjoyImg}
              alt="Enjoy Food"
              className="mx-auto mb-4 w-28"
            />
            <h3 className="text-lg font-semibold">Enjoy Food</h3>
            <p className="text-sm text-gray-500 mt-2">
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, a feugiat eros.
            </p>
          </div>

          {/* Quick Delivery */}
          <div className="bg-background shadow-md rounded-xl p-6 text-center">
            <img
              src={deliveryImg}
              alt="Quick Delivery"
              className="mx-auto mb-4 w-28"
            />
            <h3 className="text-lg font-semibold">Quick Delivery</h3>
            <p className="text-sm text-gray-500 mt-2">
              Maecenas pulvinar, risus in facilisis dignissim, quam nisi
              hendrerit nulla id vestibulum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
