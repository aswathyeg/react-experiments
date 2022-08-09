import React, { useEffect, useState } from "react";
import Card from "./Card";
import UseCounter from "../hooks/UseCounter";
const BackwardCounting = () => {
  const counter = UseCounter(false);
  return (
    <div>
      <Card>{counter}</Card>
    </div>
  );
};
export default BackwardCounting;
