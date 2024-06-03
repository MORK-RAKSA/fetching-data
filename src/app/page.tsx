/* eslint-disable @next/next/no-img-element */
// ? this is a server side page

// import { fetchUsers } from "../api/users";
import UserListInServer from "./components/UserLists/UserListInClient/UserList";
import UserListInClient from "./components/UserLists/UserListInClient/UserList";
// import Link from "next/link";

import Link from "next/link";

// "use server";


// interface User {
//   id: string;
//   name: string;
//   img: string;
// }

export default async function Home() {
  // let users: User[] = [];
  // try {
  //   users = await fetchUsers();
  // } catch (error) {
  //   console.error("Failed to fetch users:", error);
  // }

  return (
    <div className="container-fluid mx-auto  px-4 py-8 position: relative;">
      {/* <h1 className="text-5xl font-bold mb-4 p-10 position: sticky top-0 bg-black text-blue-600 rounded-xl shadow-2xl shadow-blue-950">
        Card List
      </h1>
      <Link legacyBehavior href="./FavoriteList">
        <a href="">Home</a>
      </Link> */}
      {/* <UserListInServer users={[]} hasMore={false}/> */}
      <UserListInClient />
    </div>
  );
}

//? this is i use client for event scroll

// "use client";

// import { useEffect, useState } from "react";
// import { fetchUsers } from "../api/users";
// import UserListInServer from "./components/UserListInServer/UserList"; // server side
// import UserListInClient from "./components/UserListInClient/UserList"; // client side
// import Image from "next/image";

// interface User {
//   id: string;
//   name: string;
//   img: string;
// }

// export default function Home() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedUsers = await fetchUsers();
//         setUsers(fetchedUsers);
//       } catch (error) {
//         console.error("Failed to fetch users:", error);
//       }
//     };

//     fetchData();

//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <nav
//         className={`text-2xl font-bold mb-4 p-10 flex items-center ${
//           isScrolled ? "shadow-2xl shadow-blue-950 text-blue-100" : ""
//         } sticky top-0 bg-black text-blue-600 rounded-xl transition-all duration-500 ease-in-out`}
//       >
//         {/* <img className="mr-10" src="https://picsum.photos/id/237/50/50" alt="" width={50} height={50}/> */}
//         <a href="" className="mr-10">Home</a>
//         <a href="">About</a>
//       </nav>
//       <UserListInClient />
//       {/* <UserListInServer users={users} />   */}
//     </div>
//   );
// }
