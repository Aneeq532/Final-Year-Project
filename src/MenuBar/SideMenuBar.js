import React from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HomeIcon, BellIcon, UserCircleIcon, Cog6ToothIcon,  PowerIcon } from "@heroicons/react/24/solid";
import './SideBarStyle.css';
import { Link } from 'react-router-dom'; // Import Link

function SideMenuBar() {
  return (
    <Card className={`sticky-sidebar sticky-menubar h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#219EBC]`} >
      {/* Sidebar Title */}
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          DASHBOARD
        </Typography>
      </div>

      {/* Menu Items List */}
      <List className="space-y-5 text-lg"> 
        <ListItem> 
          <Link to="./Chairperson/CHome"> {/* Link for Home */}
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home 
          </Link>
        </ListItem>

        <ListItem>
          <Link to="./MenuBar/NotificationPage"> {/* Link for Notifications */}
            <ListItemPrefix>
              <BellIcon className="h-5 w-5" />
            </ListItemPrefix>
            Notification
          </Link>
        </ListItem>

        <ListItem>
          <Link to="./Chairperson/StdContact"> 
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact Student
          </Link>
         </ListItem>

        {/* <ListItem> */}
          {/* <Link to="/tracking"> Link for Tracking */}
            {/* <ListItemPrefix> */}
              {/* <EyeIcon className="h-5 w-5" /> */}
            {/* </ListItemPrefix> */}
            {/* Tracking */}
          {/* </Link> */}
        {/* </ListItem> */}

        <ListItem>
          <Link to="./Chairperson/ProfileDetails"> {/* Link for Settings */}
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/logout"> {/* Link for Log Out */}
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </Link>
        </ListItem>
      </List>
    </Card>
  );
}

export default SideMenuBar;
