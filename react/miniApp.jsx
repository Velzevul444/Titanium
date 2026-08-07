import React, { useRef, useEffect } from 'react';
import AtomIcon from './AtomIcon.jsx';
import RUser from "./RUser.jsx";
import CreateNote from "./CreateNote.jsx";
import TreeNote from "./TreeNote";

const MiniApp = () => {



  return (
    <>
      <TreeNote />
      <CreateNote />
      <RUser />
      <AtomIcon/>
    </>
  )
}

export default MiniApp
