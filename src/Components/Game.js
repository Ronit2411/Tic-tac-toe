import React, { useEffect, useState } from "react";

const Game = () => {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [winner, setWinner] = useState(0);
  const lines = [
    [0, 1, 2],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [0, 4, 8],
  ];
  const [gameValue, setGameValue] = useState(initialState);
  const [player, setPlayer] = useState(1);

  const handleClick = (index) => {
    const newArr = [...gameValue];
    if (gameValue[index] === "" && winner === 0) {
      if (player === 1) {
        newArr.splice(index, 1, "X");
        setPlayer(2);
      } else {
        newArr.splice(index, 1, "O");
        setPlayer(1);
      }
      setGameValue(newArr);
      for (let i = 0; i < lines.length; i++) {
        if (
          newArr[lines[i][0]] !== "" &&
          newArr[lines[i][0]] === newArr[lines[i][1]] &&
          newArr[lines[i][0]] === newArr[lines[i][2]]
        ) {
          setWinner(1);
          return
        }
      }
    }
    if (newArr.every((item) => item !== "")) {
      setWinner(2);
    }
  };

  return (
    <>
      <div className="  w-[300px] h-[300px] bg-[#34495e] text-white mx-auto my-0  rounded-[10px] border-[6px] border-solid border-[#2c3e50] grid grid-cols-3">
        {gameValue.map((item, index) => {
          return (
            <button
              id="1"
              className=" w-[97px] h-[97px] font-[bold] text-[2rem]  flex justify-center items-center rounded-sm border-[6px] border-solid border-[#2c3e50]"
              value={"1"}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          );
        })}
      </div>

      {winner === 1 ? (
        <div className="text-[2em]">
          <h1>Winner: Player {player === 1 ? "2" : "1"}</h1>
        </div>
      ) : winner === 2 ? (
        <div className="text-[2em]">
          <h1>Match Drawn</h1>
        </div>
      ) : (
        ""
      )}
      <div className="mt-4 ml-24">
        <button
          className="@apply font-[bold] text-[2em] p-2 bg-[#34495e] text-white  rounded-sm border-[6px] border-solid border-[#2c3e50]"
          onClick={() => {
            setGameValue(initialState);
            setWinner(0);
            setPlayer(1);
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default Game;
