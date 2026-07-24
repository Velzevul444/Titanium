import React, { useRef } from 'react';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"

        stroke-linecap="round"
        stroke-linejoin="round"
        className="User"
        onClick={()=> console.log('clicked')}>

        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle
          cx="12"
          cy="7"
          r="4"
        />
      </svg>
    </>
  )
}

export default MiniApp
