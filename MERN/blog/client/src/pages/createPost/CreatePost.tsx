import e from "cors";
import React, { useState, useTransition } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../../api/post";
import { uploadRegisterImage } from "../../api/users";
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/toast/Toast";

import UserCheckingLogin from "../../hooks/UserCheckingLogin";
//TODO if post is create navigate to homepage

//TODO if user is not be login ,
//* createPost page must be not open redirect to other page
//*or show someting for first login then can create post .

const CreatePost = () => {
  // TODO Refactor State to global state
  const [uploadAnimation, setUploadAnimation] = useState(false);
  const [uploadMessage, setuploadMessage] = useState("upload Thumbnail post");
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);
  const [uploadBtnDisabel, setUploadBtnDisabel] = useState(true);
  const [toast, setToast] = useState(false);
  const [postValue, setPostValue] = useState({
    title: "",
    summery: "",
    cover: {},
    content: "",
  });
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cover") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setUploadBtnDisabel(false);
        setPostValue({ ...postValue, cover: file });
      }
    } else {
      setPostValue({ ...postValue, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", postValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postValue);
    setPostValue({ ...postValue, content: content });
    console.log(postValue, "POST VALUE");
    if (postValue) {
      setDisabelSubmitForm(false);
    }
    const post: {} | any = await createPost(postValue);
    console.log("Response Create Post", post);
    if (post?.status === 201) {
      setToast(true);
      //* can set loading then navigate to home page
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
  };

  //  TODO  Refactor to Global function
  const Uploadimage = async () => {
    setUploadAnimation(true);
    const res = await uploadRegisterImage(postValue.cover);
    console.log("response upload pic in submit func", res);
    if (res.status === 200) {
      setTimeout(() => {
        setUploadAnimation(false);
        setuploadMessage("upload is done ✔");
        setDisabelSubmitForm(false);
      }, 3000);
      setPostValue({
        ...postValue,
        cover: res.data.secure_url,
      });
    }
    if (res?.response?.status === 400) {
      console.log("error");
      setUploadAnimation(false);
      setuploadMessage("upload is fail ☹");
    }
    console.log("register state in uplpad image btn", postValue);
  };
  return (
    <UserCheckingLogin>
      <div>
        <h1> create Post </h1>
        {toast && <Toast text="post is create 😎" toast={toast} />}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="summery"
            name="summery"
            onChange={handleOnChange}
          />

          <input
            type="file"
            name="cover"
            id="cover-input"
            onChange={handleOnChange}
          />
          <Button
            icon=""
            disabled={uploadBtnDisabel}
            text={
              uploadAnimation ? (
                <Loading size={35} color={"#ECF0F3"} />
              ) : (
                uploadMessage
              )
            }
            className={
              "bg-blue-500 hover:bg-blue-300 w-[96%]   md:w-[180px] md:-translate-x-1 lg:w-[250px] rounded p-3 text-zinc-50 font-semibold"
            }
            type="button"
            onClick={Uploadimage}
          ></Button>

          <ReactQuill
            theme="snow"
            value={postValue.content}
            onChange={(value) => setPostValue({ ...postValue, content: value })}
          />
          <button
            className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
            type="submit"
            disabled={disabelSubmitForm}
          >
            create post
          </button>
        </form>
      </div>
    </UserCheckingLogin>
  );
};

export default CreatePost;
