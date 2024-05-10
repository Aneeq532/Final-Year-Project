import React from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { HomeIcon, BellIcon, UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import './FSideBar.css';
import { Link } from 'react-router-dom'; // Import Link

function FSideBar() {
  return (
    <Card className={`sticky-sidebar sticky-menubar h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#219EBC]`} >
      {/* Sidebar Title */}
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Focal-Person DASHBOARD
        </Typography>
      </div>

      {/* Menu Items List */}
      <List className="space-y-5 text-lg"> 
        <ListItem> 
          <Link to="./FocalPerson/HFocal"> {/* Link for Home */}
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home 
          </Link>
        </ListItem>

        <ListItem>
          <Link to="./FocalPerson/NotificationFocal"> {/* Link for Notifications */}
            <ListItemPrefix>
              <BellIcon className="h-5 w-5" />
            </ListItemPrefix>
            Notification
          </Link>
        </ListItem>

        <ListItem>
          <Link to="./FocalPerson/FocalMessageBox"> {/* Link for Contact CP */}
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contact
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/"> {/* Link for Log Out */}
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

export default FSideBar;
