import Image from "next/image";
import illustrationImg from "../../public/illustration-sign-up-mobile.svg";
import illustrationImgDesktop from "../../public/illustration-sign-up-desktop.svg";
import EmailForm from "./EmailForm";

export const metadata = {
  title: "Newsletter Sign Up",
  description:
    "Subscribe to our newsletter to get latest information about us and stay connected to us. It just takes a few minutes.",
};

export default function Page() {
  return (
    <main className="main main--newsletter">
      <div className="image">
        <Image className="image__mobile" src={illustrationImg} alt="Sign Up Illustration" />
        <Image className="image__desktop" src={illustrationImgDesktop} alt="Sign Up Illustration" />
      </div>
      <div className="content">
        <h1>Stay updated!</h1>
        <p className="content__para">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="benefits">
          <li className="benefits__item">Product discovery and building what matters</li>
          <li className="benefits__item">Measuring to ensure updates are a success</li>
          <li className="benefits__item">And much more!</li>
        </ul>
        <EmailForm />
      </div>
    </main>

    // 😁 I actually stashed it and not I don't know if I will use it or not. SO I will keep it till the project is completed.

    // <div className="container">
    //   <div className="image-container"></div>
    //   <div className="text-container">
    //     <h1>Stay updated!</h1>
    //     <p>Join 60,000+ product managers receiving monthly updates on:</p>
    //     <ul className="newsletter-benefits">
    //       <li className="newletter-benefits__item">Product discovery and building what matters</li>
    //       <li className="newletter-benefits__item">Measuring to ensure updates are a success</li>
    //       <li className="newletter-benefits__item">And much more!</li>
    //     </ul>
    //   </div>
    // </div>
  );
}
