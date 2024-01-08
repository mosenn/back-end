const yup = require("yup");

const userRegisterValid = yup.object().shape({
  username: yup.string().trim().required().min(3, "username character +3 "),

  password: yup
    .string()
    .trim()
    .required("pasword 8 charcter a-A-2-@")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "pasword 8 charcter a-A-2-@"
    )
    .min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "passwords is not match")
    .trim()
    .min(8, "passwords is not match"),
  pic: yup.string(),
});

module.exports = userRegisterValid;
