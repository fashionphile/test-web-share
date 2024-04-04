import React, { useEffect, useRef } from "react";

const ProductPage = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log("Inside useEffect", buttonRef);
    if (navigator.share && buttonRef) {
      console.log("Sharing allowed", navigator.share);
      // Enable the Web Share API button
      buttonRef.current.addEventListener("click", () => {
        console.log("Button clicked");
        navigator
          .share({
            title: "Awesome Content",
            text: "Check out this awesome content!",
            url: window.location.href,
          })
          .then(() => console.log("Shared successfully"))
          .catch((error) => console.error("Sharing failed:", error));
      });
    } else {
      console.log("Sharing not allowed");
    }
  }, [buttonRef]);

  return (
    <div>
      <div>Web Share API</div>
      <button ref={buttonRef}>Share content</button>
    </div>
  );
};

export default ProductPage;
