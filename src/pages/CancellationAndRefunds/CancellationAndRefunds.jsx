import Container from "../../components/shared/Container";
import PagesHero from "../../components/shared/PagesHero";

const refundData = [
  {time: "Up to 3 hours", charge: "100% of fare", refund: "0% of fare"},
  {time: "Up to 6 hours", charge: "75% of fare", refund: "25% of fare"},
  {time: "Up to 12 hours", charge: "50% of fare", refund: "50% of fare"},
  {time: "Up to 24 hours", charge: "25% of fare", refund: "75% of fare"},
  {
    time: "More than 24 hours",
    charge: "$30 fee",
    refund: "Full refund minus $30",
  },
];

const CancellationAndRefunds = () => {
  return (
    <section className="pb-20">
      <PagesHero
        title={`Refund Policy`}
        description={`   At Silver Taxi Pro, we strive to provide a reliable and
                comfortable travel experience for all our customers. Refunds, if
                applicable, are subject to the terms of your booking and the
                notice provided prior to the scheduled journey. The type of
                vehicle reserved may vary based on availability at the time of
                travel. Silver Taxi Pro reserves the right to determine
                eligibility for refunds in accordance with our booking and
                cancellation policies.`}
      />

      <Container>
        <div className="py-10 md:py-20">
          <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
            Refund Policy
          </h2>
          <p className="text-xs md:text-lg text-gray-color">
            Plans can change, and we understand. This policy explains how
            cancellations and refunds are handled.
          </p>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl mt-4">
              Cancellations
            </h2>
            <p className="text-xs md:text-lg text-gray-color">
              If you need to cancel or change a booking, please notify us as
              early as possible. Refunds depend on how much notice is given
              before your scheduled pickup.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Refund and Cancellation Charges
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Time before journey
                    </th>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Cancellation charge
                    </th>
                    <th className="px-4 py-4 border-b border-gray-300">
                      Refund amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {refundData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.time}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.charge}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-300">
                        {item.refund}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Refund Process
            </h2>
            <ul className="text-xs md:text-lg text-gray-color">
              <li>Refunds are returned to the original payment method.</li>
              <li>Processing may take 3–10 business days.</li>
              <li>
                For international payments, any bank fees may be deducted.
              </li>
              <li>Online payment surcharges are non-refundable.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold mb-4 font-playfair text-primary text-2xl md:text-4xl">
              Exceptions
            </h2>
            <p className="text-xs md:text-lg text-gray-color">
              Refunds will not be given if:
            </p>
            <ul className="text-xs md:text-lg text-gray-color">
              <li>You cancel less than 3 hours before the trip.</li>
              <li>
                Incorrect booking details are provided (e.g., wrong date or
                flight number).
              </li>
              <li>You do not show up at the pickup point.</li>
              <li>You leave the pickup point without informing us.</li>
            </ul>
          </section>

          <p className="text-xs md:text-lg text-gray-color">
            These Refund Policies were updated on 29/08/2025.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CancellationAndRefunds;
