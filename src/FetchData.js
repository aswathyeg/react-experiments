import React, { useEffect, useState } from "react";
const FetchData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data &&
        data.map((items) => {
          return <p key={items.id}> {items.title}</p>;
        })}
    </div>
  );
};
export default FetchData;
