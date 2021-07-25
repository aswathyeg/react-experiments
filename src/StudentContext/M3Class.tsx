import React, { Fragment } from 'react';
import Context from "./context";
function M3Class() {
    return(
        <Context.Consumer>
        {context=>(
            <Fragment>
StudentDetails
                    <p>
                        <strong>Student Name: </strong>
                        {context.data.name}
                    </p>
                    <p>
                        <strong>Phone: </strong>
                        {context.data.phone}
                    </p>
                    <p>
                        <strong>AttendanceStatus: </strong>
                        {context.data.isPresent}
                    </p>
                    <button onClick={context.updateDetails}>
                        Update Attendance
          </button>
            </Fragment>
        )}
   
    </Context.Consumer>
    )
    
}
export default M3Class;