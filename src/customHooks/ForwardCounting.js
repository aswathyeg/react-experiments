import React, { useEffect, useState } from "react";
import Card from "./Card";
import UseCounter from "../hooks/UseCounter";
const ForwardCounting = () => {
  const counter = UseCounter();

  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
};
export default ForwardCounting;
