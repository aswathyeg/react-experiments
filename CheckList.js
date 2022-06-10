import React, { useState } from 'react';
const CheckList = () => {
    const INITIAL_LIST = {
        "Organize closet": [
            { "Donate old clothes and shoes": false },
            { "Buy new shelf": false },
            { "Put in shelf by color": false },

        ],
        "Finish homework": [
            { "Finish math homework": false },
            { "Finish science homework": false },
            { "Finish Reactjs homework": false },

        ],
        "Achieve nirvana": [
            { "Meditate a little": false },
            { "Gain some wisdom": false },

        ]
    }
    const [list,setList] = useState(INITIAL_LIST);

    return (
        <div>

        </div>
    )

}
export default CheckList;