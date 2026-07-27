import React, { useRef, } from 'react';
import AtomIcon from './AtomIcon.jsx';
import RUser from "./RUser";

const MiniApp = () => {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>

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
      <RUser />
      <AtomIcon/>
    </>
  )
}

export default MiniApp
