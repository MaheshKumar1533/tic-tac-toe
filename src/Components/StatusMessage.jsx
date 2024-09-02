/* eslint-disable react/prop-types */

const StatusMessage = ({ player, winner, squares }) => {
	const statusMessage = (p, w, s) => {
		if (w)
			return (
				<>
					Winner is{" "}
					<span
						className={winner == "X" ? "text-green" : "text-orange"}
					>
						{w}
					</span>
				</>
			);
		if (w == null && s.every((element) => element != null)) return "Match Draw";
		else
			return (
				<>
					Next Player is{" "}
					<span className={p == "X" ? "text-green" : "text-orange"}>
						{p}
					</span>
				</>
			);
	};
	return (
		<h2 className="status-message">
			{statusMessage(player, winner, squares)}
		</h2>
	);
};

export default StatusMessage;
