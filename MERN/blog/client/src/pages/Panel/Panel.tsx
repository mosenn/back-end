import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUserPost, userPost } from "../../api/post";
import { format } from "date-fns";
import { useGlobalContext } from "../../context/context";
import Toast from "../../components/toast/Toast";
import UserCheckingLogin from "../../hooks/UserCheckingLogin";
interface userPostType {
  _id: string;
  title: string;
  cover: string;
  createdAt: number;
}
const Panel = () => {
  const { setUserPosts, userPosts } = useGlobalContext();

  const [toast, setToast] = useState(false);
  // const [postUser, setPostUser] = useState([]);
  //* global function for take userPost for update and panel (done ✔)
  const takeUserPost = async () => {
    const response: {} | any = await userPost();
    console.log(response);
    setUserPosts(response?.data);
  };
  //*TODO  befor call delete  can show pop up box for tell are you sure for delete ?
  //*TODO then user say that Yes in the box , called deletePostUser function
  const deletePostUser = async (id: string) => {
    const response: {} | any = await deleteUserPost(id);
    console.log("response delete post", response);
    if (response?.status === 200) {
      const newUserPosts = userPosts.filter((post: any) => post._id !== id);
      console.log("newUserPosts", newUserPosts);
      setUserPosts(newUserPosts);
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };

  useEffect(() => {
    takeUserPost();
  }, []);

  return (
    <div>
      <UserCheckingLogin>
        <h1>Panel</h1>

        <Link to="/createpost">Create Post</Link>
        {userPosts?.length > 0 &&
          userPosts.map((post: userPostType) => {
            return (
              <section
                key={post._id}
                className=" flex flex-col justify-center items-center   w-[100%]"
              >
                <div className="border w-[100%] md:w-[80%] mt-3 ">
                  <section>
                    <div className="flex justify-around  items-center p-2 m-3 md:relative">
                      <figure className="md:w-[15%] flex justify-center">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-[50px] h-[50px] rounded-full"
                        />
                      </figure>
                      <p className="md:w-[15%] text-center">{post.title}</p>

                      <p className="md:w-[15%] text-center">
                        {format(new Date(post.createdAt), "yyyy-MM-dd")}
                      </p>
                      {/* Buttons in tablet scope */}
                      <div className="  hidden md:flex  justify-evenly ml-[50px] w-[fit-content]   items-center ">
                        {toast && (
                          <Toast
                            text="  your post is delete 👀 "
                            toast={toast}
                          />
                        )}
                        <button
                          className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                          type="button"
                          onClick={() => {
                            deletePostUser(post._id);
                          }}
                        >
                          delete
                        </button>
                        <Link
                          to={`/editpost/${post._id}`}
                          className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center"
                        >
                          edit
                        </Link>
                        <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                          priview
                        </button>
                      </div>
                    </div>
                    {/* Buttons in mobile scope */}
                    <div className="flex md:hidden justify-around items-center p-2 m-3">
                      <button
                        className="font-semibold m-3 w-[70px] h-[25px] flex justify-center items-center  bg-red-300 p-3 rounded-[5px]"
                        type="button"
                        onClick={() => {
                          deletePostUser(post._id);
                        }}
                      >
                        delete
                      </button>
                      <button className="m-3  font-semibold bg-green-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        edit
                      </button>
                      <button className="m-3 font-semibold bg-blue-300 p-3 rounded-[5px] w-[70px] h-[25px] flex justify-center items-center">
                        preview
                      </button>
                    </div>
                  </section>
                </div>
              </section>
            );
          })}
      </UserCheckingLogin>
    </div>
  );
};

export default Panel;
