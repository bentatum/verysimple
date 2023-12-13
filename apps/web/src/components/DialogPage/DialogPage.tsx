"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@verysimple/react";
import ComponentPage from "../ComponentPage";
import { useState } from "react";

const InteractiveDemo = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        Click to open
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>Dialog Content</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DialogPage = () => {
  return (
    <ComponentPage
      pageTitle="Dialog"
      propsList={[
        {
          name: "open",
          description: "The open state of the dialog.",
        },
        {
          name: "onClose",
          description: "The function to call when the dialog is closed.",
        },
      ]}
      InteractiveDemo={InteractiveDemo}
      codeSnippet={`
        <div className="flex space-x-4 mb-8">
            <Dialog open={true} title="Dialog Title" content="Dialog Content" actions={<Button>Close</Button>} />
        </div>
    `}
    />
  );
};

export default DialogPage;
