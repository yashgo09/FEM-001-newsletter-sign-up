import Image from "next/image";
import illustrationImg from "../../public/illustration-sign-up-mobile.svg";
import illustrationImgDesktop from "../../public/illustration-sign-up-desktop.svg";

export default function Page() {
  return (
    <main>
      {/* <div className="image"> */}
      <Image src={illustrationImg} alt="Newsletter Image" className="illustration" />
      {/* <Image src={illustrationImgDesktop} /> */}
      {/* </div> */}
      <div className="content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="benefits">
          <li className="benefits__item">Product discovery and building what matters</li>
          <li className="benefits__item">Measuring to ensure updates are a success</li>
          <li className="benefits__item">And much more!</li>
        </ul>
        <div className="email-input">
          <div className="label-wrapper">
            <label htmlFor="email">Email address</label>
            <em className="error" aria-hidden="true">
              Valid email required
            </em>
          </div>
          <input type="email" name="email" id="email" placeholder="email@company.com" />
        </div>
        <button className="btn" type="submit">
          Subscribe to monthly newsletter
        </button>
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
