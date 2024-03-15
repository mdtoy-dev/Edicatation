import React, { useState, useEffect } from "react";

const MathGame = () => {
  const [equation, setEquation] = useState({
    leftOperand: null,
    rightOperand: null,
    result: null,
    operator: null,
    emptyOperandIndex: null,
  });

  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    generateEquation();
  }, []);

  const generateEquation = () => {
    const operators = ["+", "-", "*", "/"];
    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];
    const leftOperand = getRandomNumber(0, 20);
    const rightOperand = getRandomNumber(0, 20);
    const result = calculateResult(randomOperator, leftOperand, rightOperand);
    const emptyOperandIndex = Math.floor(Math.random() * 2);

    setEquation({
      leftOperand: emptyOperandIndex === 0 ? null : leftOperand,
      rightOperand: emptyOperandIndex === 1 ? null : rightOperand,
      result: result,
      operator: randomOperator,
      emptyOperandIndex: emptyOperandIndex,
    });
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calculateResult = (operator, leftOperand, rightOperand) => {
    switch (operator) {
      case "+":
        return leftOperand + rightOperand;
      case "-":
        return leftOperand - rightOperand;
      case "*":
        return leftOperand * rightOperand;
      case "/":
        return Math.floor(leftOperand / rightOperand);
      default:
        return 0;
    }
  };

  useEffect(() => {
    checkIsCorrect();
  }, [equation]);

  const handleDragStart = (e, number) => {
    e.dataTransfer.setData("text/plain", number.toString());
  };

  const handleDrop = (e, operandType) => {
    e.preventDefault();
    const number = parseInt(e.dataTransfer.getData("text/plain"));
    if (!isNaN(number) && number >= 0 && number <= 20) {
      setEquation((prevEquation) => ({
        ...prevEquation,
        [operandType]: number,
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkIsCorrect = () => {
    const { leftOperand, rightOperand, result, operator } = equation;
    if (
      leftOperand !== null &&
      rightOperand !== null &&
      result !== null &&
      operator !== null
    ) {
      const correct =
        eval(`${leftOperand} ${operator} ${rightOperand}`) === result;
      setIsCorrect(correct);
    }
  };

  const handleGenerateNewEquation = () => {
    generateEquation();
    setIsCorrect(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500 text-black">
      <div className="flex items-center mb-8">
        <div
          className={`w-20 h-20 flex justify-center items-center mr-2 rounded-lg shadow-md ${
            equation.emptyOperandIndex === 0
              ? "bg-yellow-200 text-center hover:scale-105"
              : "bg-white"
          }`}
          onDrop={(e) => handleDrop(e, "leftOperand")}
          onDragOver={handleDragOver}
        >
          {equation.leftOperand === null ? "Drop number" : equation.leftOperand}
        </div>
        <span className="mx-4 text-3xl">{equation.operator}</span>
        <div
          className={`w-20 h-20 flex justify-center items-center mr-2 rounded-lg shadow-md ${
            equation.emptyOperandIndex === 1
              ? "bg-yellow-200 text-center hover:scale-105"
              : "bg-white"
          }`}
          onDrop={(e) => handleDrop(e, "rightOperand")}
          onDragOver={handleDragOver}
        >
          {equation.rightOperand === null
            ? "Drop number"
            : equation.rightOperand}
        </div>
        <span className="mx-4 text-3xl">=</span>
        <div className="w-20 h-20 flex justify-center items-center mr-2 rounded-lg shadow-md bg-white">
          {equation.result === null ? "Drop number" : equation.result}
        </div>
      </div>

      {isCorrect && (
        <div className="text-white font-bold text-lg mb-4">Correct!</div>
      )}

      <div className="flex flex-wrap justify-center items-center max-w-xl">
        {[...Array(21).keys()].map((number) => (
          <div
            key={number}
            id={`number${number}`}
            draggable={true}
            className="w-16 h-16 flex justify-center hover:scale-105 items-center m-2 rounded-lg shadow-md bg-white hover:bg-yellow-200 cursor-pointer transition duration-300 ease-in-out"
            onDragStart={(e) => handleDragStart(e, number)}
          >
            {number}
          </div>
        ))}
        <button
          className="bg-green-400 hover:bg-green-500 mt-10 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out mb-8"
          onClick={handleGenerateNewEquation}
        >
          Generate New Equation
        </button>
      </div>
    </div>
  );
};

export default MathGame;
