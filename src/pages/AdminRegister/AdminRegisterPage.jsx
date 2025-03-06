import * as React from "react";
import Button from "@mui/material/Button";
import { Grid2, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import validator from "validator";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import Joi from "joi";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useAdminRegisterPage from "./useAdminRegisterPage";

const authSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),

  otp: Joi.string().optional().allow(""),
});

const otpSchema = Joi.object({
  email: Joi.string().required(),
  otp: Joi.string().required(),

  firstName: Joi.string().optional().allow(""),
  lastName: Joi.string().optional().allow(""),
  password: Joi.string().optional().allow(""),
});

const AdminRegisterPage = () => {
  const [passwordError, setPasswordError] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const [schema, setSchema] = React.useState(authSchema);

  const { registerCustomer, otp, validate_otp, loading, setLoading } =
    useAdminRegisterPage();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      otp: "",
    },
  });

  React.useEffect(() => {
    if (otp) {
      setSchema(otpSchema);
    } else {
      setSchema(authSchema);
    }
  }, [otp]);

  const onSubmit = React.useCallback(
    async (data) => {
      if (
        validator.isStrongPassword(data.password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setLoading(true);
        if (!otp) {
          await registerCustomer(data);
          setPasswordError(false);
          return;
        } else {
          await validate_otp(data);
          setPasswordError(false);
          return;
        }
      } else {
        setPasswordError(true);
      }
    },
    [otp, registerCustomer, setLoading, validate_otp]
  );

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

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
          Admin Registration Page
        </Typography>

        <Grid2 size={6}>
          <TextField
            disabled={otp}
            name="firstName"
            label="First Name"
            {...register("firstName")}
            fullWidth
          />
        </Grid2>
        <Grid2 size={6}>
          <TextField
            disabled={otp}
            name="lastName"
            label="Last Name"
            {...register("lastName")}
            fullWidth
          />
        </Grid2>
        <Grid2 size={6}>
          <TextField
            disabled={otp}
            name="email"
            label="Email"
            {...register("email")}
            fullWidth
          />
        </Grid2>
        <Grid2 size={6}>
          <TextField
            disabled={otp}
            name="password"
            label="Password"
            type={showPass ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            error={passwordError}
            helperText={
              passwordError
                ? "Password must be 8 characters long and should have at least one uppercase and lowercase letter, one number and any special character"
                : null
            }
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

        {otp ? (
          <Grid2 size={6}>
            <TextField
              name="otp"
              label="Enter OTP"
              {...register("otp")}
              fullWidth
            />
          </Grid2>
        ) : null}

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
          {otp ? "Verify OTP" : "Sign-Up"}
        </Button>
      </Grid2>
    </Stack>
  );
};

export default AdminRegisterPage;
