import { useState } from 'react';

const Quiz = ({ questions }) => {

    const [currentQuestion, setCurrenQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleClick = (currentQuestion, index) => {
        if (questions[currentQuestion].correct == index) {
            setScore(score + 1);
        }
        setCurrenQuestion(currentQuestion + 1);

    }

    return (
        <div style={{ margin: "auto", width: "30%" }}>

            <h1>Quiz_1</h1>
            {currentQuestion < questions.length && (
                <>
                    <h3>{questions[currentQuestion].question}</h3>

                    {questions[currentQuestion].answers.map((answer, index) => (
                        <p onClick={()=>handleClick(currentQuestion, index)}>{answer}</p>))}
                </>
            )}
            {currentQuestion >= questions.length && (
                <p>
                    { `You scored: ${(score / questions.length) * 100}%`}
                </p>


            )

            }

        </div>
    )

}
export default Quiz;
