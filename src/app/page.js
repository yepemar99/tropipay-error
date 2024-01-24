"use client";
import { tpp } from "@/tropipay";

export default function Home() {
  const payload = {
    reference: "my-paylink-1",
    concept: "Bicycle",
    favorite: "true",
    amount: 3000,
    currency: "EUR",
    description: "Two wheels",
    singleUse: "true",
    reasonId: 4,
    expirationDays: 1,
    lang: "es",
    urlSuccess: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
    urlFailed: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
    urlNotification:
      "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
    serviceDate: "2021-08-20",
    client: {
      name: "John",
      lastName: "McClane",
      address: "Ave. Guadí 232, Barcelona, Barcelona",
      phone: "+34645553333",
      email: "client@email.com",
      countryId: 1,
      termsAndConditions: "true",
    },
    directPayment: "true",
  };

  const handleSendPayment = async () => {
    try {
      const paylink = await tpp.paymentCards.create(payload);
      console.log("resp", paylink);
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <div className="container">
      <div>
        <button onClick={handleSendPayment}>Create Payment</button>
      </div>
    </div>
  );
}
