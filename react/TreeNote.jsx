import React, {useState} from "react";
const TreeNote = () => {


	const [NewCore, setNewElectron] = useState(true);
	const choice = () => {
			setNewElectron(!NewCore);
	}

	const [PutColor, setPutColor] = useState("true");
	const SColor = () => {
		setPutColor(!PutColor);
	}


	return (
		<div className="treeNote">
			<div style={{ border: NewCore ? "2px solid white" : "none" }} className={"NewCore"} onClick={() => choice()}>New core</div>
			<div style={{ border: NewCore ? "none" : "2px solid white" }} className={"NewElectron"} onClick={() => choice()}>New electron</div>
			<div className={"NewBond"}>Bond notes</div>
			<div className={"SetColor"} onClick={() => SColor()}>Set color to note </div>
			{PutColor && (
				<input type={"color"} className={"PutColor"} />
			)}
		</div>
	)
}
export default TreeNote;