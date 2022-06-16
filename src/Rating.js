import React,{useState} from 'react';
const Rating = ( ) =>{
  // const QUESTIONS = [
  //   {
  //     question: "What is 2*(4+4)?",
  //     answers: ["2", "4", "8", "16"],
  //     correct: 3,
  //   },
  //   {
  //     question: "What is 9*9?",
  //     answers: ["18", "81", "80", "79"],
  //     correct: 1,
  //   },
  //   {
  //     question: "Who was the first president of the United States?",
  //     answers: [
  //       "George Washington",
  //       "John Adams",
  //       "John Quincy Adams",
  //       "Thomas Jefferson",
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     question: "What state is Philadelphia in?",
  //     answers: [
  //       "Commonwealth of Pennsylvania",
  //       "New Jersey",
  //       "New York",
  //       "Massachusetts",
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     question: "What are the two major political parties in the United States?",
  //     answers: [
  //       "Democratic Party & Republican Party",
  //       "Green Party & Red Party",
  //       "Bull Party & Moose Party",
  //       "Hamilton Party & Burr Party",
  //     ],
  //     correct: 0,
  //   },
  // ];

    const EMPTY_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  const FULL_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

    const starIds = [1,2,3,4,5];
    const [hovered, setHovered] = useState(0);
    const [clicked, setClicked] = useState(0);
  
   const getImg =(id)=>{
        return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR;  

    }
    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
          }}
        >
          {starIds.map((id) => (
            <img
              src={getImg(id)}
              onMouseEnter={() => {
                setHovered(id);
                if (id < clicked) setClicked(0);
              }}
              onClick={() => setClicked(id)}
              onMouseOut={() => setHovered(0)}
              width={60}
              height={60}
            />
          ))}
        </div>
      );
    };
    


export default Rating;