import * as React from "react";
import { Stack, Typography } from "@mui/material";

const RoleBasedGuard = () => {
  return (
    <>
      <Stack
        spacing={2.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h5">
          You don't have permission to visit this page!.
        </Typography>
      </Stack>
    </>
  );
};

export default RoleBasedGuard;
