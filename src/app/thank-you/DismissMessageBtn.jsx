"use client";

import { useRouter } from "next/navigation";

export default function DismissMessageBtn() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button className="btn btn--dismiss-message" onClick={handleClick}>
      Dismiss Message
    </button>
  );
}
