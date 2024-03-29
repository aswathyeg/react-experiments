import React, { useEffect, useState } from "react";
import Card from "./Card";
import useCounter from "../hooks/UseCounter";
const ForwardCounting = () => {
  const counter = useCounter();

  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
};
export default ForwardCounting;
