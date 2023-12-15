import Image from "next/image";
import successImg from "@/../public/icon-success.svg";
import DismissMessageBtn from "./DismissMessageBtn";

export const metadata = {
  title: "Thanks for Subscribing to the Newsletter!",
  description:
    "We are very excited to send you our newsletters every week. Hope you will like them.",
};

export default function ThankyouPage({ searchParams }) {
  return (
    <main className="main main--thankyou">
      <Image src={successImg} alt="Success Image" />
      <h1 className="thankyou-message">
        Thanks for
        <br />
        subscribing!
      </h1>
      <p className="thankyou-text">
        A confirmation email has been sent to <b>{searchParams.email}</b>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <DismissMessageBtn />
    </main>
  );
}
