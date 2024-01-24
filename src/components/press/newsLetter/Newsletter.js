import React from "react";

function Newsletter() {
  return (
    <>
      <div className="subscribeNewsletter">
        <h3>Join our Free Newsletter and</h3>
        <p className="newwsletter_content">
          Get insider info on new arrivals, early access, and everything fine.
        </p>
        <div className="form-group input_newsletter">
          <input type="text" name="" id="" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
