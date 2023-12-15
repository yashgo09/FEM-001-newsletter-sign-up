"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function validateEmail(email) {
  const regex = /\w+@\w+\.\w+/;

  return regex.test(email);
}

export default function EmailForm() {
  const emailRef = useRef(null);
  // const
  const [emailIsValid, setEmaiIsValid] = useState(true);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateEmail(emailRef.current.value)) {
      setEmaiIsValid(false);
      return;
    }

    setEmaiIsValid(true);
    router.push(`/thank-you?email=${emailRef.current.value}`);
  };

  return (
    <form action="/">
      <div className={`email-input ${emailIsValid ? "" : "email-input--invalid"}`}>
        <div className="label-wrapper">
          <label htmlFor="email">Email address</label>
          <em className="error" aria-hidden={emailIsValid ? "true" : "false"}>
            Valid email required
          </em>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
          ref={emailRef}
        />
      </div>
      <button className="btn" onClick={handleClick}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
