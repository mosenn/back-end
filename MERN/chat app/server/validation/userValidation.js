const yup = require("yup");

const validUser = yup.object().shape({
  name: yup.string().trim().required("set name"),
  email: yup
    .string()
    .trim()
    .email("set like that: chatapp@gmail.com")
    .required("set email"),
  password: yup.string().trim().required("set password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords do not match")
    .trim()
    .required("set confirm password"),
  // pic: yup.string().required("upload picture for profile"),
});

module.exports = validUser;
