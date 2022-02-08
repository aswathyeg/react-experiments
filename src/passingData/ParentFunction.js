
//passing data from parent to child via props
import React from 'react';
export default function ParentFunction() {
    const data = 'Data from parent';
    return (
        <div>
            <ChildFunction parentData={data} />
        </div>
    )
}
function ChildFunction(props) {
    const data = props.parentData;
    return (
        <div>
            {data}
        </div>
    )

}