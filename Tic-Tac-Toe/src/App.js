import { useState } from "react";
let winner = '';

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{ value }</button>;
}

function Winner() {
  return <p className="winner">{winner}</p>
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));  
  const players = {'X': 'Player 1', 'O': 'Player 2'};
  const winning = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [2, 4, 6]];

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (!nextSquares[i]) {
      (xIsNext) ? nextSquares[i] = "X": nextSquares[i] = "O";
      setSquares(nextSquares); 
      setXIsNext(!xIsNext);

    }
    winning.forEach((combination) => {
      let [boxOne, boxTwo, bowThree] = [nextSquares[combination[0]], nextSquares[combination[1]], nextSquares[combination[2]]]
      if (![boxOne, boxTwo, bowThree].some((value) => !value)) {
        if (boxOne === boxTwo && boxTwo === bowThree) {
          winner = `Winner is ${ players[nextSquares[i]] }`
        }
      }      
    })    
  }
  
  return (    
    <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    <Winner />
  </>
  );
}
