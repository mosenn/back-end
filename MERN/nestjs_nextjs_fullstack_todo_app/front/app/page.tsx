"use client";
import Link from "next/link";
import { useIsUserLogin } from "./hooks/checkUserIsLogin";
export default function Home() {
  const { data } = useIsUserLogin();
  if (data) {
    console.log(data, "data in home ");
  }
  return (
    <>
      <header>
        <menu>
          <nav className=" flex justify-center">
            <ul className="flex border border-gray-100 rounded-lg w-[50%] text-lg  justify-evenly p-2 m-2">
              <li>
                <Link href="/register" className="hover:text-blue-500">
                  register
                </Link>
              </li>

              <li>
                <Link href="/login" className="hover:text-blue-500">
                  login
                </Link>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
      <h1>home page</h1>

      <h1 className="text-lg">{data && data?.data?.data?.email}</h1>
    </>
  );
}
