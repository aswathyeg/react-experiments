import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return <div>{data && data.map((item) => <p>{item.title}</p>)}</div>;
}
