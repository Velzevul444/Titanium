const Electron = ({rotation = 0}) => {
	return (
		<div
			className={"Electron "}
			style={{transform: `rotate(${rotation}deg)`}}
		>
			<div className={"center"}></div>
			<div
				className={"electron"}
				id={"e1"}
			></div>
			<div className={"orbit"}></div>

		</div>
	)
}
export default Electron;