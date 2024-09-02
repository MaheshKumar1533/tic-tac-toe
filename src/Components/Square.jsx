/* eslint-disable react/prop-types */

const Square = ({ value, onSquareClick }) => {
	return (
		<button
			type="button"
			className="square"
			value={value}
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
};
export default Square;
