const yup = require("yup");

const validUser = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email()
    .required("email cant be empty")
    .matches(
      /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/g,
      "set gmail like that: exmapel@gmail.com"
    ),
  password: yup
    .string()
    .trim()
    .required("password cant be empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password do not match")
    .trim()
    .required("repeat password"),
  pic: yup.string().required("upload image or chose avatar"),
});

module.exports = validUser;
