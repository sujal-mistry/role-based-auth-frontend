import * as React from "react";
import axios from "axios";

const useRegisterPage = () => {
  const [otp, setOtp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const registerCustomer = React.useCallback(
    async ({ firstName, lastName, password, email }) => {
      try {
        let body = {
          first_name: firstName,
          last_name: lastName,
          password: password,
          email: email,
          is_admin: 0,
        };
        await axios
          .post("http://localhost:3030/user/registration", body)
          .then(function (response) {
            let resp_message = response.data.message;
            let resp_status = response.data.status;

            if (resp_status === 200) {
              setOtp(true);
              alert(resp_message);
              setLoading(false);
              return false;
            } else {
              alert(resp_message);
              setLoading(false);
            }
          })
          .catch(function (error) {
            setLoading(false);
            console.log("error ===>", error);
          });
      } catch (error) {
        setLoading(false);
        console.log("error ===>", error);
      }
    },
    []
  );

  const validate_otp = React.useCallback(async ({ otp, email }) => {
    try {
      let body = {
        email: email,
        otp: otp,
      };
      await axios
        .post("http://localhost:3030/validate/otp", body)
        .then(function (response) {
          let resp_message = response.data.message;
          let resp_status = response.data.status;

          if (resp_status === 200) {
            setOtp(true);
            alert(resp_message);
            setLoading(false);
            return true;
          } else {
            alert(resp_message);
            setLoading(false);
          }
        })
        .catch(function (error) {
          setLoading(false);
          console.log("error ===>", error);
        });
    } catch (error) {
      setLoading(false);
      console.log("error ===>", error);
    }
  }, []);

  return {
    registerCustomer,
    otp,
    validate_otp,
    loading,
    setLoading,
  };
};

export default useRegisterPage;
