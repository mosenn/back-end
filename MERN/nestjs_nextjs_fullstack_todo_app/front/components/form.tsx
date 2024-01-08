"use client";

import { useFoundPath } from "@/app/hooks/foundLocationForm";
import { register } from "@/app/libs/user/register";
import { login } from "@/app/libs/user/login";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";

const Form = () => {
  const { active } = useFoundPath();
  console.log(active, "active");
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const route = useRouter();
  // react query
  const queryCL = useQueryClient();

  //* user register mutation
  const mutationRegisterUser = useMutation(register, {
    onSuccess: () => {
      queryCL.invalidateQueries("users");
    },
  });

  const mutationLoginUser = useMutation(login, {
    onSuccess: () => {
      queryCL.invalidateQueries("users");
    },
  });
  // change handlere
  const onChangeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //submit handlere
  const onSubmitHandlere = (e: any) => {
    e.preventDefault();
    console.log(values);
    // call api send value to back end
    active
      ? mutationRegisterUser.mutate({ ...values })
      : mutationLoginUser.mutate({ ...values });
    route.push("/");
  };
  return (
    <div>
      <form action="" onSubmit={onSubmitHandlere}>
        <input
          onChange={onChangeHandler}
          type="text"
          name="email"
          id=""
          placeholder="email"
        />
        <input
          onChange={onChangeHandler}
          type="text"
          name="password"
          id=""
          placeholder="password"
        />
        {/* if location address is login dont be rende this input */}
        {active && (
          <input
            onChange={onChangeHandler}
            type="text"
            name="confirmPassword"
            id=""
            placeholder="confirmPassword"
          />
        )}

        {/* diffrent page most be change text button login and register */}

        <button> {active ? "reigser" : "login"}</button>
      </form>
    </div>
  );
};

export default Form;
