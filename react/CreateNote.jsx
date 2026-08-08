import React, {useRef, useState} from "react";

const CreateNote = () => {

	const textareaRef = useRef(null);

	const handleInput = (e) => {
		const textarea = e.target;
		const maxHeight = 580;

		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + 'px';

		if (textarea.scrollHeight >= maxHeight) {
			textarea.style.overflowY = 'auto';
		} else {
			textarea.style.overflowY = 'hidden';
		}
	};
	const [positionRight, setPositionRight] = useState(false);
	const position = () => {
		setPositionRight(!positionRight);
	}

	return (<>
		<button
			style={{left: positionRight ? "4% " : "30%"}}
			className={"ButtonRight"}
			onClick={() => position()}
		></button>
		<div id="note" style={{left: positionRight ? "-11% " : "15%"}}>
			<button className={"CreateNewNote"}>Create new note</button>
			<textarea
				className="NameNote"
				placeholder="Enter name note"
			/>
			<textarea
				ref={textareaRef}
				className="WriteNote"
				placeholder="Write note"
				onInput={handleInput}
			/>
		</div>
	</>)
}
export default CreateNote