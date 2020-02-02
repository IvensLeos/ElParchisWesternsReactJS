import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import {
   CardElement,
   CardNumberElement,
   CardExpiryElement,
   CardCvcElement,
   Elements,
   useStripe,
   useElements
} from "@stripe/react-stripe-js";

import "../styles/Stripe.css";

const handleBlur = () => {
   console.log("[blur]");
};
const handleChange = change => {
   console.log("[change]", change);
};
const handleClick = () => {
   console.log("[click]");
};
const handleFocus = () => {
   console.log("[focus]");
};
const handleReady = () => {
   console.log("[ready]");
};

const createOptions = (fontSize, padding) => {
   return {
      style: {
         base: {
            fontSize,
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
               color: "#aab7c4"
            },
            padding
         },
         invalid: {
            color: "#9e2146"
         }
      }
   };
};

const CardForm = ({ fontSize }) => {
   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      const payload = await stripe.createPaymentMethod({
         type: "card",
         card: elements.getElement(CardElement)
      });
      console.log("[PaymentMethod]", payload);
   };

   return (
      <form onSubmit={handleSubmit} className="DemoWrapper">
         <h2>CardElement</h2>
         <label>
            Card details
        <CardElement
               onBlur={handleBlur}
               onChange={handleChange}
               onFocus={handleFocus}
               onReady={handleReady}
               options={createOptions(fontSize)}
            />
         </label>
         <button type="submit" disabled={!stripe}>
            Pay
      </button>
      </form>
   );
};

const SplitForm = ({ fontSize }) => {
   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      const payload = await stripe.createPaymentMethod({
         type: "card",
         card: elements.getElement(CardNumberElement)
      });
      console.log("[PaymentMethod]", payload);
   };

   return (
      <form onSubmit={handleSubmit} className="DemoWrapper">
         <h2>Split Card Elements</h2>
         <label>
            Card number
        <CardNumberElement
               onBlur={handleBlur}
               onChange={handleChange}
               onFocus={handleFocus}
               onReady={handleReady}
               options={createOptions(fontSize)}
            />
         </label>
         <label>
            Expiration date
        <CardExpiryElement
               onBlur={handleBlur}
               onChange={handleChange}
               onFocus={handleFocus}
               onReady={handleReady}
               options={createOptions(fontSize)}
            />
         </label>
         <label>
            CVC
        <CardCvcElement
               onBlur={handleBlur}
               onChange={handleChange}
               onFocus={handleFocus}
               onReady={handleReady}
               options={createOptions(fontSize)}
            />
         </label>
         <button type="submit" disabled={!stripe}>
            Pay
      </button>
      </form>
   );
};


const stripePromise = loadStripe("pk_test_mV6etXc4I0aogrW8MaStXgHe006EdkmpJE");

const StripeCard = () => {
   const getElementFontSize = () => (window.innerWidth < 450 ? "16px" : "18px");
   const [elementFontSize, setElementFontSize] = useState(getElementFontSize);

   useEffect(() => {
      const onResize = () => {
         setElementFontSize(getElementFontSize());
      };

      window.addEventListener("resize", onResize);

      return () => {
         window.removeEventListener("resize", onResize);
      };
   });

   return (
      <div className="Checkout">
         <h1>Available Elements</h1>
         {/* We are using separate <Elements> providers here to get around 
      the restrictions on using the Card and Split Card Elements 
      in the same Elements group. In a real world app you probably 
      only need one <Elements> provider. */}
         <Elements stripe={stripePromise}>
            <CardForm  />
         </Elements>
         <Elements stripe={stripePromise}>
            <SplitForm/>
         </Elements>
      </div>
   );
};

export default StripeCard