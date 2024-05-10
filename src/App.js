import React, {useState}  from 'react';
import TitleBar from './MenuBar/TitleBar';
import SideMenuBar from "./MenuBar/SideMenuBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
// -------------------------------Chairperson Dashboard Files--------------------------------------?
import NotificationPage from './MenuBar/NotificationPage';
import CHome from './Chairperson/CHome';
import StdContact from './Chairperson/StdContact';
import ProfileDetails from './Chairperson/ProfileDetails';
import ProfileEdit from './Chairperson/ProfileEdit';
import StudentSidebar from './Student/StudentSidebar'
// import Message from './Student/Message';
import SHome from './Student/SHome';
import TrackingID from './Student/TrackingID';
import SNotiPage from './Student/SNotiPage';
import ContactCP from './Student/ContactCP';
import PerInfoEdit from './Student/PerInfoEdit';
import SProfileDetails from './Student/SProfileDetails';
import Stepper from './Student/Stepper';
// -------------------------------Student Dashboard Files--------------------------------------?
import Accept from './Admin/Accept'
import HAdmin from './Admin/HAdmin'
import AdminMenu from './Admin/AdminMenu'
// -------------------------------Focalperson Dashboard Files--------------------------------------?
import HFocal from './FocalPerson/HFocal';
import FSideBar from './FocalPerson/FSideBar';
import FocalMessageBox from './FocalPerson/FocalMessageBox';
import NotificationFocal from './FocalPerson/NotificationFocal';


function App() {
  const [userRole] = useState('FocalPerson');
  return (
    <BrowserRouter> 

      <div className="container mx-auto d-flex justify-content-center">
        <TitleBar/>
 
         {userRole === 'Chairperson' && <SideMenuBar />}
        {userRole === 'student' && <StudentSidebar />}
        {userRole === 'Admin' && <AdminMenu />}
        {userRole === 'FocalPerson' && <FSideBar />}

    <Routes>
        {/* // -------------------------------Chairperson Dashboard Files--------------------------------------? */}
         <Route path='/Chairperson/CHome' element={<CHome/>}/>
        <Route path='/MenuBar/NotificationPage' element={<NotificationPage/>}/>
        <Route path='/Chairperson/StdContact' element={<StdContact/>}/>
        <Route path='/Chairperson/ProfileDetails' element={<ProfileDetails/>}/>
        <Route path='/Chairperson/ProfileEdit' element={<ProfileEdit/>}/>
      {/* // -------------------------------Student Dashboard Files--------------------------------------? */}
        {/* <Route path='/Student/StudentSidebar' element={<StudentSidebar/>}/> */}
        <Route path='/Student/SHome' element={<SHome/>}/>
        <Route path='/Student/TrackingID' element={<TrackingID/>}/>
        <Route path='/MenuBar/SideMenuBar' element={<SideMenuBar/>}/>
        <Route path='/Student/SNotiPage' element={<SNotiPage/>}/>
        <Route path='/Student/ContactCP' element={<ContactCP/>}/>
        <Route path='/Student/TrackingID' element={<TrackingID/>}/>
        <Route path='/Student/SProfileDetails' element={<SProfileDetails/>}/>
        <Route path='/Student/PerInfoEdit' element={<PerInfoEdit/>}/>
        <Route path='/Student/Stepper' element={<Stepper/>}/>
        {/* // -------------------------------A Dashboard Files--------------------------------------? */}
      <Route path='/Admin/HAdmin' element={<HAdmin/>}/>
      <Route path='/Admin/Accept' element={<Accept/>}/>
      {/* // -------------------------------Focal Person Dashboard Files--------------------------------------?     */}
      <Route path='/FocalPerson/HFocal' element={<HFocal/>}/>
      <Route path='/FocalPerson/FocalMessageBox' element={<FocalMessageBox/>}/>
      <Route path='/FocalPerson/NotificationFocal' element={<NotificationFocal/>}/>
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
