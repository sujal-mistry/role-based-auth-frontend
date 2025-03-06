import * as React from "react";
import Button from "@mui/material/Button";
import { Grid2, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import Joi from "joi";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useAdminLogin from "./useAdminLogin";

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const AdminLogin = () => {
  const [showPass, setShowPass] = React.useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const { loading, setLoading, admin_login } = useAdminLogin();

  const onSubmit = React.useCallback(
    async (data) => {
      setLoading(true);
      await admin_login(data);
      return;
    },
    [admin_login, setLoading]
  );

  return (
    <Stack
      spacing={2.5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid2
        container
        spacing={2}
        width={"50%"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Typography variant="h5" gutterBottom>
          Admin Login Page
        </Typography>

        <Grid2 size={6}>
          <TextField
            name="email"
            label="Email"
            {...register("email")}
            fullWidth
          />
        </Grid2>

        <Grid2 size={6}>
          <TextField
            name="password"
            label="Password"
            type={showPass ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid2>

        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
          // fullWidth
          size="large"
        >
          {"Sign-In"}
        </Button>
      </Grid2>
    </Stack>
  );
};

export default AdminLogin;
