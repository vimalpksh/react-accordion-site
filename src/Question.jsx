import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question" onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4>{question.title}</h4>
        <button className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p>{question.info}</p> : null}
    </div>
  );
};

export default Question;
