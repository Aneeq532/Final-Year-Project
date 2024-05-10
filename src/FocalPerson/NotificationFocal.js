import React from "react";
import {
  Button,
  // Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const LongDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        className="px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-700 focus:outline-none"
        onClick={handleOpen}
      >
        View More
      </button>
      {open && ( // Only render the dialog if 'open' is true
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white shadow-md rounded-lg px-6 py-8 w-1/2 max-h-[40vh] overflow-y-auto">
            {" "}
            {/* max-h-[40vh] limits height */}
            <DialogHeader>Details</DialogHeader>
            <DialogBody className="h-[15rem] overflow-scroll ">
              <Typography className="font-normal">
                {/* Your long text content here */}
                Fess has paid but not updated: Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the releaseof
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
                <br />
                <strong>Applicant Details</strong> <br />
                First Name : Aneeq
                <br />
                Last Name : Sohail
                <br />
                Faculty : FICT
                <br />
                Department : Software eng.
                <br />
                Semster : 7th
                <br />
                Problem : Fees issues
                <br />
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="red" onClick={handleOpen}>
                Reject
              </Button>
              <Button variant="text" color="green" onClick={handleOpen}>
                confirm
              </Button>
            </DialogFooter>
          </div>
        </div>
      )}
    </>
  );
};

const NotificationFocal = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickVerified = () => {
    setOpenDialog(true); // Show the dialog on button click
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div
      className="container mx-auto p flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div className="bg-white shadow-md rounded-lg px-6 py-8 w-1/2">
        <h2 className="text-xl font-medium mb-4">Notification</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="w-1/4 py-2">Tracking ID</th>
              <th className="w-2/4 py-2">Applicant Details</th>
              <th className="w-1/4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2">92</td>
              <td className="py-2">
                <div className="flex items-center">
                  <span className="mr-2">Aneeq Sohail</span>
                  <span className="text-gray-400 text-sm">
                    (FICT - Software Eng.)
                  </span>
                </div>
              </td>
              <td className="py-2">
                <div className="flex justify-end space-x-2">
                  <button className="px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-700 focus:outline-none">
                    Reject
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-700 focus:outline-none">
                    Accept
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-500 text-white font-bold rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
                    onClick={handleClickVerified} // Trigger dialog
                  >
                    View
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {openDialog && (
          <LongDialog open={openDialog} handler={handleDialogClose} />
        )}
      </div>
    </div>
  );
};

export default NotificationFocal;
