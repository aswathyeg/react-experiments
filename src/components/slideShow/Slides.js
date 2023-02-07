import React, { useEffect, useState } from "react";

const Slides = ({ slides, restart, previous, next, currentSlide }) => {
  // useEffect(() => {});
  return (
    <div>
      <button onClick={previous} disabled={currentSlide === 0}>
        Previous
      </button>
      <button onClick={next} disabled={currentSlide === slides.length}>
        Next
      </button>
      <button onClick={restart} disabled={currentSlide === 0}>
        Restart
      </button>
      <div>{slides[currentSlide] && slides[currentSlide].title}</div>
      <div>{slides[currentSlide] && slides[currentSlide].text}</div>
    </div>
  );
};

export default Slides;
