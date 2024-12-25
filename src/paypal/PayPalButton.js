import React, { useEffect } from "react";

const PayPalButton = ({ totalAmount }) => {
  useEffect(() => {
    // Check if PayPal buttons have already been rendered
    if (!document.getElementById("paypal-button-container").hasChildNodes()) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount, // Set the amount you want to charge
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              // Handle successful transaction here
              localStorage.clear();
              window.location.reload();
              alert("Thank you for your puchase.");
            });
          },
          onError: (err) => {
            console.error(err);
            // Handle errors here
          },
        })
        .render("#paypal-button-container");
    }
    console.log(totalAmount);
  }, []);

  return (
    <div className="container-paypal" style={{ padding: "24px" }}>
      <h4 style={{ padding: "8px" }}>PayPal Payment</h4>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default PayPalButton;
