import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getLikes, getSave } from "../../api/userIntraction";
import { getAllPostComments } from "../../api/comment";
import { blogPostData } from "../../types/BlogTypeData";

// interface propsPost {
//   _id: string;
//   cover: string;
//   title: string;
//   createdAt: number;
//   summery: string;
//   comments: [];
//   author: {
//     username: string;
//   };
// }
const Post = ({ _id, cover, title, createdAt, author, summery }: blogPostData) => {

  const [dataLikes, setDataLikes] = useState<[] | any>([]);
  const [saveData, setSaveData] = useState<[] | any>([]);
  const [comments, setComments] = useState<[] | any>([]);

  
  //* take likes
  const takeAllLikes = async () => {
    if (_id) {
      const likes = await getLikes(_id as string);
      setDataLikes(likes);
      console.log("Likes in post for homepage", likes.data);
      //* if page is refresh set agin data to setLike
      const checkIntractionUser = likes.data.find((i: any) => {
        return i;
      });
      console.log(
        checkIntractionUser,
        "checkIntractionUser in post for homepage"
      );
      // console.log(checkLiked, "checkLiked");
    }
  };
  //* take save
  const takeSaves = async () => {
    try {
      if (_id) {
        const saves = await getSave(_id as string);
        setSaveData(saves);
      }
    } catch (err) {
      console.log("takeSaves error in detail", err);
      return err;
    }
  };
  //* take comments
  const takeAllComments = async () => {
    if (_id) {
      const comments = await getAllPostComments(_id as string);
      /** change setComents to global state for show comments number in homepage*/
      setComments(comments.data);
    }
  };
  useEffect(() => {
    takeAllLikes();
    takeSaves();
    takeAllComments();
  }, []);
  // console.log(dataLikes, "data like in home pages");
  // console.log("length", dataLikes?.data.length);
  // console.log(saveData, "save data in home page");
  // console.log(saveData?.data?.length, "save data length");
  console.log(comments, "comment data ");
  console.log(comments?.length, "comment data length");
  return (
    <div
      key={_id}
      className="border  lg:p-0 lg:m-0 flex flex-col items-center   m-2  text-left"
    >
      <h2 className=" text-inherit  font-semibold">{title.substring(0, 34)}</h2>
      <figure className="flex flex-col items-center">
        <img
          className="w-72 object-cover h-[250px] lg:w-96 md:w-[70%] rounded-s"
          src={cover}
          alt={title}
        />
        <figcaption className="p-3 md:w-[60%] w-72 lg:w-96 lg:justify-between flex mt-2 justify-between text-gray-400">
          <p>{author.username}</p>
          <p>{format(new Date(createdAt), "yyyy-MM-dd")}</p>
          {dataLikes.data && <p>Likes : {dataLikes?.data.length}</p>}
          {saveData.data && <p>saves : {saveData?.data.length}</p>}
          {comments && <p> comment : {comments.length}</p>}
        </figcaption>
      </figure>
      <div>
        <p
          // dangerouslySetInnerHTML={{ __html: blog.content }}
          className="w-72 md:text-left md:w-[250px] lg:w-96 text-left mt-1 mb-1 p-2 md:p-0 "
        >
          {summery.substring(0, 200)}...
        </p>
        <div className=" mt-3 mb-2 w-[100%] flex justify-start">
          <Link
            className="bg-blue-500 w-[100%] md:w-[40%]   flex justify-center  rounded p-3  text-zinc-50 font-semibold"
            to={`detail/${_id}`}
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
