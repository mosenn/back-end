import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

import { editPost, userPost } from "../../api/post";
import { uploadRegisterImage } from "../../api/users";
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

//*ckeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Toast from "../../components/toast/Toast";

const Editpost = () => {
  const { userPosts, setUserPosts } = useGlobalContext();
  const { id } = useParams();
  const post = userPosts.find((p: any) => {
    return p._id === id;
  });
  console.log(post, "post with id");
  //*---------------------------------------------------- States
  // TODO Refactor State to global state
  const [uploadAnimation, setUploadAnimation] = useState(false);
  const [uploadMessage, setuploadMessage] = useState("upload Thumbnail post");
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(false);
  const [uploadBtnDisabel, setUploadBtnDisabel] = useState(true);
  const [postValue, setPostValue] = useState({
    title: post?.title,
    summery: post?.summery,
    cover: post?.cover,
    content: post?.content,
  });
  const [toast, setToast] = useState(false);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  //* -------------------------------------- Functions
  // console.log(post, "post in edit componet");
  const takeUserPost = async () => {
    const response: {} | any = await userPost();
    // console.log(response);
    setUserPosts(response?.data);
  };
  useEffect(() => {
    takeUserPost();
  }, []);
  //*handleOnchange
  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "cover") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setDisabelSubmitForm(true);
        setUploadBtnDisabel(false);
        setPostValue({ ...postValue, cover: file });
      }
    } else {
      setPostValue({ ...postValue, [e.target.name]: e.target.value });
    }
    console.log("Regiser State in onChange func", postValue);
  };
  console.log(postValue, "in onchange");
  //* handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postValue, "POST VALUE IN SUBMIT FUNCTION");
    setPostValue({ ...postValue, content: content });
    console.log(postValue, "POST VALUE");
    const res: {} | any = await editPost(post?._id as string, postValue);
    console.log(res, "response edit post in submit");

    console.log("Response editPost", post);
    if (res?.status === 200) {
      //* can set loading then navigate to home page
      setToast(true);
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
  };
  // console.log(postValue, "Out side submit function");
  //  TODO  Refactor to Global function
  //* upload image
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
    <div>
      {toast && <Toast text="post is edit ✌" toast={toast} />}
      <h1>{post?._id}</h1>
      <h1> EDIT POST</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={postValue.title}
          type="text"
          placeholder={post?.title}
          name="title"
          onChange={handleOnChange}
        />

        <input
          value={postValue.summery}
          style={{ color: "red", border: "2px solid red" }}
          type="text"
          placeholder={post?.summery}
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
        {/* CK Editor */}
        <CKEditor
          editor={ClassicEditor}
          data={postValue?.content}
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPostValue({ ...postValue, content: data });
          }}
        />
        {/* <textarea name="" id="" value={post?.content}></textarea> */}
        <button
          className="bg-blue-500 hover:bg-blue-300 w-[99%] rounded p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
        >
          Edit POST
        </button>
      </form>
    </div>
  );
};

export default Editpost;
