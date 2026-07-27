import Electron from './Electron';


const AtomIcon = ({ isActive }) => {
  return (<div className={"Atom"}>
      <Electron rotation={0}/>
      <Electron rotation={60}/>
      <Electron rotation={120}/>
    </div>

  );
};

export default AtomIcon;