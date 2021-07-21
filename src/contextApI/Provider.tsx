import React, { useState } from "react";
import PackageContext from "./context";

const Provider = (props:any) => {
  const [state, setState] = useState({
    companyName: "DHL Delivery Package",
    recipientName: "Mr John Doe",
    package: "MacBook Pro retina Display (20Kg)",
    deliveryStatus: "Delivery In Progress..."

  });
  return (
   <PackageContext.Provider
      value={{
        data: state,
        updateDeliveryStatus: () => {
          setState({ ...state, deliveryStatus: "Delivered" });
        }
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
