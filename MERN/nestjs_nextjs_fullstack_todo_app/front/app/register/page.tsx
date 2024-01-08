import Form from "@/components/form";
import React from "react";
import { register } from "../libs/user/register";
import { useQuery } from "react-query";

const Register = () => {

  return (
    <div>
      Register page
      <Form />
    </div>
  );
};

export default Register;
