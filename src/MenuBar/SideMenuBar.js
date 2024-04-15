import React from 'react';
import { Card, Typography, List, ListItem, ListItemPrefix, } from "@material-tailwind/react";
import { HomeIcon, BellIcon, UserCircleIcon, Cog6ToothIcon, EyeIcon, PowerIcon } from "@heroicons/react/24/solid";

// DefaultSidebar component
function SideMenuBar() {
  return (
    <Card
      className={`sticky-sidebar h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#597DFF]`} // Background color set to #597DFF
    >
      {/* Sidebar Title */}
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Student Name
        </Typography>
      </div>

      {/* Menu Items List */}
      <List className="space-y-2"> {/* Added space-y-2 class for spacing between list items */}
        <ListItem>
          {/* Icon */}
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          {/* Menu Item Text */}
          Home
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BellIcon className="h-5 w-5" />
          </ListItemPrefix>
          Notification
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Contact CP
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <EyeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Tracking
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

export default SideMenuBar;
