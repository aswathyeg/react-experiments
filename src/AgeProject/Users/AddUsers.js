import React from 'react';

const AddUsers = () => {
    return (
        <div>
            <div>
                <label>Username</label>

                {/* should be self closing */}
                <input type="text" />
            </div>
            <div>

                <label>Age(Years)</label>

                <input type="text" />
            </div>

        </div>
    )
}
export default AddUsers;