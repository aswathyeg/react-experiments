import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props:any) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="red" />;
}
export default BlueDatePicker;