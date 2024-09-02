/* eslint-disable no-unused-vars */
import Board from "./Components/Board";
import StatusMessage from "./Components/StatusMessage";
import { calculateWinner } from "./Components/calculateWinner";
import { useState } from "react";
import History from "./Components/History";
function App() {
	const [gameState, changeGameState] = useState([
		{ squares: Array(9).fill(null), isNextX: true },
	]);
	const [currentGameState, changeCurrentGameState] = useState(0);
	const player = gameState[currentGameState].isNextX ? "X" : "O";
	const winner = calculateWinner(gameState[currentGameState].squares);
	const onSquareClick = (clickedSquare) => {
		if (gameState[currentGameState].squares[clickedSquare] || winner)
			return;
		changeGameState((history) => {
			if (currentGameState != history.length - 1) {
				history = history.slice(0, currentGameState + 1);
			}
			console.log(currentGameState);
			console.log(history.length);
			var currentState = history[currentGameState];
			const changedState = currentState.squares.map((value, idx) => {
				return clickedSquare === idx ? player : value;
			});
			history.push({
				squares: changedState,
				isNextX: !currentState.isNextX,
			});
			console.log(history);
			return history;
		});
		changeCurrentGameState((gameState) => {
			return gameState + 1;
		});
	};

	const changeToCustomGameState = (customGameState) => {
		changeCurrentGameState((currentState) => customGameState);
	};
	const reset = () => {
		changeCurrentGameState((currentState) => 0);
		changeGameState((history) => [
			{ squares: Array(9).fill(null), isNextX: true },
		]);
	};
	return (
		<>
			<div className="app">
				<h1 className="">
					TIC <span className="text-orange">TAC</span> TOE
				</h1>
				<StatusMessage
					player={player}
					winner={winner}
					squares={gameState[currentGameState].squares}
				/>
				<Board
					squares={gameState[currentGameState].squares}
					onSquareClick={onSquareClick}
				/>
				<button
					className={`btn-reset ${winner != null ? "active" : ""}`}
					onClick={reset}
				>
					Reset
				</button>
				<h2>History</h2>
				<History
					gameState={gameState}
					changeToCustomGameState={changeToCustomGameState}
					currentGameState={currentGameState}
				/>
			</div>
		</>
	);
}

export default App;
