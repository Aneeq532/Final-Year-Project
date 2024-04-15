import React from 'react';
// import TrackingID from './Student/TrackingID';
// import MenuBar from "./MenuBar/SideMenuBar";
import TitleBar from './MenuBar/TitleBar';
// import NotificationPage from './MenuBar/NotificationPage';
// import Form from "./MenuBar/Form";
// import CHome from "./Chairperson/CHome";
// import PerInfoEdit from "./Student/PerInfoEdit";
// import Message from "./Student/Message";
import SideMenuBar from "./MenuBar/SideMenuBar";
// import Accept from "./Admin/Accept";
// import StdContact from "./Chairperson/StdContact";
import EditProfile from "./Chairperson/EditProfile";


function App() {
  return (
    <div className="container mx-auto d-flex justify-content-center"> 
      <TitleBar/>
      {/* <Form/> */}
      {/* <Accept/> */}
      {/* <StdContact/>     Iss ko Middle me lana ha */}
      {/* <HAdmin/> */}
      {/* <CHome/> */}
      <EditProfile/>
      <SideMenuBar/>
      {/* <TrackingID/> */}
      {/* <CHome/> */}
      {/* <Message/>     To Much working remaining on this */}


      
    </div>

  );
}

export default App;
