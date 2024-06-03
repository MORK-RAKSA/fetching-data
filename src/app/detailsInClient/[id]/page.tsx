"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { fetchUserById, User  } from "@/app/components/utils/FetchUser"

const Page = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await fetchUserById(params.id);
      setUser(fetchedUser);
      checkIfFavorite(fetchedUser);
      
    };

    fetchUser();
  }, [params.id]);

  const checkIfFavorite = (user: User | null) => {
    if (!user) return;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: User) => fav.id === user.id));
  };

  const toggleFavorite = () => {
    if (!user) return;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav: User) => fav.id !== user.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(user);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="max-w-sm rounded-xl shadow-lg overflow-hidden p-6 bg-white w-[600px] h-[700px] ">
          <div className="bg-gray-300 h-[350px] w-[338px] rounded-xl mb-4 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-300 rounded-md animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-5/6"></div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-2/3"></div>
            <div className="bg-gray-300 h-10 w-full rounded-xl mb-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-sm rounded-2xl shadow-2xl shadow-slate-500 overflow-hidden p-4 bg-white">
        <Image
          width={600}
          height={600}
          className="w-full rounded-lg drop-shadow-md shadow-red-100"
          src={user.img}
          alt={user.username}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-blue-500 mb-2">{`${user.username} - ID: ${user.id}`}</div>
          <p className="text-gray-700 text-base">{user.detail}</p>
        </div>
        <hr style={{ border: "1px solid gray" }} />
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-600">Address: {user.address}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Job: {user.job}</p>
        </div>
        <div className="flex items-center  justify-center mt-4">
          <button
            className="transition duration-300 ease-in-out justify-center items-center w-full bg-blue-500 p-2 rounded-lg text-white font-bold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <FontAwesomeIcon
            icon={isFavorite ? solidHeart : regularHeart}
            onClick={toggleFavorite}
            className={`transition duration-300 ease-in-out mt-4 ml-4 cursor-pointer text-3xl hover:text-red-500 ${
              isFavorite ? "text-red-500" : "text-gray-300"
            }`}
          />{"  "}
        </div>
      </div>
    </div>
  );
};

export default Page;
