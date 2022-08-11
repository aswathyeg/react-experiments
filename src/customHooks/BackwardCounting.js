import React, { useEffect, useState } from "react";
import Card from "./Card";
import useCounter from "../hooks/UseCounter";
const BackwardCounting = () => {
  const counter = useCounter(false);
  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
};
export default BackwardCounting;
