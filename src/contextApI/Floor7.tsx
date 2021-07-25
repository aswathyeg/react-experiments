import React, { Fragment } from "react";
import context from "./context";
//import "./styles.css";

function Floor7() {
    return (
        <context.Consumer>
            {context => (
                <Fragment>PackageContext
                    <p>
                        <strong>Recipient Name: </strong>
                        {context.data.recipientName}
                    </p>
                    <p>
                        <strong>Package: </strong>
                        {context.data.package}
                    </p>
                    <p>
                        <strong>Delivery Status: </strong>
                        {context.data.deliveryStatus}
                    </p>
                    <button onClick={context.updateDeliveryStatus}>
                        Update Delivery Status
          </button>
                </Fragment>
            )}

        </context.Consumer>
    )

}
export default Floor7;