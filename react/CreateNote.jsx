import React, {useRef} from "react";

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
	return (<>
		<div id="note">
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