/* eslint-disable react/prop-types */
const History = ({ gameState, changeToCustomGameState, currentGameState }) => {
	return (
		<div className="history-wrapper">
			<ul className="history">
				{gameState.map((item, idx) => {
					return (
						<li key={idx}>
							<button
								className={`btn-move ${ idx=== currentGameState ?'active' : ''}`}
								onClick={() => changeToCustomGameState(idx)}
							>
								{idx == 0 ? "Game Start" : `Go to move #${idx}`}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default History;
