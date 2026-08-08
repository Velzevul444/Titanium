import React, { useRef, useEffect } from 'react';
import AtomIcon from './AtomIcon.jsx';
import RUser from "./RUser.jsx";
import CreateNote from "./CreateNote.jsx";
import TreeNote from "./TreeNote";
import AllCores from "./test";

const MiniApp = () => {

const [Cors, setCores] = React.useState([]);

  return (
    <>
      <AllCores Cors={Cors} />
      <TreeNote />
      <CreateNote Cors={Cors} setCors={setCores} />
      <RUser />
      <AtomIcon/>
    </>
  )
}

export default MiniApp
