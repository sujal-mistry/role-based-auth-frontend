import * as React from "react";
import axios from "axios";
const useAdminLogin = () => {
  const [loading, setLoading] = React.useState(false);

  const admin_login = React.useCallback(
    async ({ firstName, lastName, password, email }) => {
      try {
        let body = {
          first_name: firstName,
          last_name: lastName,
          password: password,
          email: email,
          is_admin: 1,
        };
        await axios
          .post("http://localhost:3030/admin/login", body)
          .then(function (response) {
            let resp_message = response.data.message;
            let resp_status = response.data.status;

            if (resp_status === 200) {
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

  return {
    loading,
    setLoading,
    admin_login,
  };
};

export default useAdminLogin;
