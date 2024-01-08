import { useParams } from "react-router-dom";
import { posts } from "../../api/post";
import { useEffect, useState } from "react";
import { postUserComments, getAllPostComments } from "../../api/comment";
import { useGlobalContext } from "../../context/context";
import Button from "../../components/button/Button";
import "./detail.css";
import {
  getLikes,
  getSave,
  postLike,
  postSave,
} from "../../api/userIntraction";
import { PiHeartStraight, PiHeartStraightFill } from "react-icons/pi";
import { AiFillTag, AiOutlineTag } from "react-icons/ai";

import Toast from "../../components/toast/Toast";
interface Post {
  _id: string;
  title: string;
  content: string;
  cover: string;
  createdAt: number;
  summery: string;
  username: string;
  author: {
    username: string;
    pic: string;
  };
}
interface likeData {
  createdAt: string;
  liked: boolean;
  post: string;
  saved: boolean;
  updatedAt: string;
  user: {
    _id: string;
    username: string;
    pic: string;
  };
  __v: number;
  _id: string;
}
interface LikeResponse {
  data: likeData[];
  status: number;
  statusText: string;

  config: any;
}

const Detail = () => {
  const { userInfoOnline } = useGlobalContext();
  //* States
  const [disabelSubmitForm, setDisabelSubmitForm] = useState(true);
  const [postData, setPostData] = useState<Post[]>([]);
  const [comments, setComments] = useState([]);
  const [Commentvalue, setCommentValue] = useState({
    comment: "",
  });

  const [toast, setToast] = useState(false);
  const [authInteractionUser, setAuthIntractionUser] = useState("");
  //** global state dataLike for show likes in home page */
  const [dataLike, setDataLike] = useState<LikeResponse>({
    data: [],
    status: 0,
    statusText: "",
    config: {},
  });
  //** global state saveData for show save in home page */
  const [saveData, setSaveData] = useState<[] | any>([]);
  const [like, setLike] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  //*  Functions
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue({ ...Commentvalue, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  const takePost = async () => {
    const response: [] | any = await posts();
    // console.log(response);
    setPostData(response?.data);
  };

  const pos = postData.find((p: Post) => {
    return p?._id === id;
  });
  //* takecomments
  const takeAllComments = async () => {
    if (pos?._id) {
      const comments = await getAllPostComments(pos?._id as string);
      console.log("comments", comments);
      /** change setComents to global state for show comments number in homepage*/
      setComments(comments.data);
    }
  };
  //* send comment
  const sendComment = async () => {
    if (Commentvalue && pos?._id) {
      const response = await postUserComments(
        Commentvalue,
        userInfoOnline.id,
        pos?._id as string
      );
    } else {
      //*Todo set toast message for user can send empty comment
      console.log("is empty");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Commentvalue.comment.trim() !== "") {
      await sendComment();
      await takeAllComments();
      setCommentValue({ comment: " " });
    }
  };

  //*Take Likes For Post With User
  const takeAllLikes = async () => {
    if (pos?._id) {
      const likes = await getLikes(pos?._id as string);
      setDataLike(likes);
      console.log("Likes in detail", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(checkIntractionUser, "checkIntractionUser");
      // console.log(checkLiked, "checkLiked");
      checkIntractionUser?.liked && setLike(checkIntractionUser?.liked);
    }
  };

  //*Take saved For Post With User
  const takeSaves = async () => {
    try {
      if (pos?._id) {
        const saves = await getSave(pos?._id as string);
        setSaveData(saves);
        const checkIntractionUser = saves?.data.find((s: any) => {
          return s;
        });
        checkIntractionUser?.saved && setSave(checkIntractionUser?.saved);
      }
    } catch (err) {
      console.log("takeSaves error in detail", err);
      return err;
    }
  };
  //*Post - set like and unlike
  const interactionLikeBtn = async () => {
    try {
      const like: {} | any = await postLike(pos?._id as string);
      // console.log(like, "like data in btn");
      // console.log(like?.data?.liked?.liked, "in btn");
      //* now have realTime like and print user in ui if like or unlike
      setLike(like?.data?.liked?.liked);
      takeAllLikes();
    } catch (error: any) {
      console.error(error?.message);
      setToast(true);
      setAuthIntractionUser(error?.message);
      setTimeout(() => {
        setToast(false);
      }, 7000);
    }
  };
  //* Post -  set save and unsave
  const interactionSavedBtn = async () => {
    try {
      const save: {} | any = await postSave(pos?._id as string);
      console.log(save);
      setSave(save?.data?.saved?.saved);
      takeSaves();
    } catch (error: any) {
      console.log("saved btn error in detail", error);
      console.error(error?.message);
      setToast(true);
      setAuthIntractionUser(error?.message);
      setTimeout(() => {
        setToast(false);
      }, 7000);
    }
  };
  console.log(like, "like in 180");
  useEffect(() => {
    takePost();
    // console.log(like, "in useefect");
  }, []);

  useEffect(() => {
    takeAllComments();
    takeAllLikes();
    takeSaves();
    if (userInfoOnline.id) {
      setDisabelSubmitForm(false);
    }
  }, [pos]);

  // console.log("liked true data", dataLike);
  // console.log("Like IS", like);

  return (
    <div className="w-[100%]">
      <h1 className="text-4xl m-2 p-2">{pos?.title}</h1>
      <figure className="md:flex justify-center">
        <img
          className=" md:mb-4 md:w-[90%] md:object-cover md:bg-center  md:h-[200px] p-3 rounded-[14px]"
          src={pos?.cover}
          alt={pos?.title}
        />
      </figure>
      <div className=" md:p-3 m-3 flex justify-center items-start">
        <p className=" summary text-xl p-3 leading-9 md:w-[92%]">
          {" "}
          {pos?.summery}
        </p>
      </div>
      <div className="container">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: pos ? pos?.content : "" }}
        />
      </div>
      <div className="flex" id="like">
        <img
          className="w-[50px]"
          src={pos?.author.pic}
          alt={pos?.author.username}
        />
        <p>author : {pos?.author.username}</p>
      </div>
      {/* //*Todo move this in to new component */}
      {/* try to map likes and user */}
      {dataLike.data &&
        dataLike.data?.map((items: any) => {
          const { user } = items;
          // console.log(user, liked, "in map");
          return (
            <div key={user._id}>
              <p>{user.username}</p>
              <img className="w-[20px]" src={user.pic} alt="" />
            </div>
          );
        })}

      <div className="relative">
        {/* Like button */}
        <button className="ml-5" type="button" onClick={interactionLikeBtn}>
          {like ? (
            <PiHeartStraightFill size="1.5rem" color="red" />
          ) : (
            <PiHeartStraight size="1.5rem" />
          )}
          {dataLike.data && <p>{dataLike.data.length}</p>}
        </button>
        {/* save button */}

        <button onClick={interactionSavedBtn}>
          {save ? <AiFillTag size="1.5rem" /> : <AiOutlineTag size="1.5rem" />}
          {saveData.data && <p>{saveData.data.length}</p>}
        </button>
      </div>
      {toast && <Toast text={authInteractionUser} toast={true} />}
      {/* {toast && <Toast text={save?.message} toast={true} />} */}
      {/* show comment */}
      <div className="flex flex-col m-3 justify-center align-cneter">
        {comments &&
          comments.map(
            (com: {
              author: { pic: string; username: string };
              _id: string;
              comment: string;
            }) => {
              // console.log(com, "this is com in map");
              return (
                <div
                  key={com._id}
                  className=" mt-3  rounded-md  border border-zinc-200  flex-col"
                >
                  <div className="flex p-1 m-1  w-[fit-content]">
                    <img src={com?.author?.pic} alt="" className="w-[35px]" />
                    <p className="ml-2">{com?.author?.username}</p>
                  </div>
                  <p className="m-3">{com.comment}</p>
                </div>
              );
            }
          )}
      </div>
      {/* form for send comment */}
      <form action="" onSubmit={handleSubmit} className="p-1 m-1 ">
        <input
          className="rounded-md p-3 h-[90px] w-[100%] border"
          name="comment"
          placeholder="write your comment"
          value={Commentvalue.comment}
          onChange={handleOnchange}
        ></input>
        {/* send comment btn */}
        <Button
          text={"send comment"}
          className="bg-blue-500 hover:bg-blue-300 w-[100%] rounded-md mt-2 md:w-60 p-3 text-zinc-50 font-semibold"
          type="submit"
          disabled={disabelSubmitForm}
          icon=""
        ></Button>
      </form>
    </div>
  );
};

export default Detail;
