/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "@/components/utils/FetchUser";

const page: React.FC = () => {
    const [favorites, setFavorites] = useState<User[]>([]);
    useEffect(()=> {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(favorites);
    },[])

  if (favorites.length === 0) { 
    return (
      <div>
        <div className="container-fluid p-10 mx-auto mt-5 text-center text-lg font-medium text-gray-500 shadow-lg shadow-gray-900 position-sticky top-0">
          No favorite users found
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4 position-fixed ml-10 right-0"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <h1 className="container-fluid p-10 mx-auto mt-5 text-center text-lg font-medium text-gray-500 shadow-lg shadow-gray-900 position-sticky top-0">
        Here my favorite users
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {favorites.map((user) => (
          <Link
            legacyBehavior
            key={user.id}
            href={`/detailsInClient/${user.id}`}
          >
            <a className="flex flex-col items-center justify-center p-8 rounded-lg shadow-sm hover:bg-blue-950 transition-all duration-500">
              <Image
                width={120}
                height={120}
                src={user.img}
                alt={user.username}
                className="rounded-full mx-auto hover:border-white-500 hover:border-2 transition-all duration-100"
              />
              <h2 className="mt-4 text-lg font-semibold text-blue-500">
                {user.username}
              </h2>
            </a>
          </Link>
        ))}
      </div>
      {/* <button
        className="fixed bottom-1 right-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
        onClick={() => window.history.back()}
      >
        Back
      </button> */}
    </div>
  );
};

export default page;
