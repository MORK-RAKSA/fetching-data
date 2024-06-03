/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers, User } from "../../utils/FetchUser";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Retrieve cached users and page number from localStorage
    const cachedUsers = localStorage.getItem("users");
    const cachedPage = localStorage.getItem("page");

    if (cachedUsers && cachedPage) {
      setUsers(JSON.parse(cachedUsers));
      setPage(Number(cachedPage));
    } else {
      fetchAndSetUsers(page);
    }
  }, []);

  const fetchAndSetUsers = async (page: number) => {
    try {
      const data = await fetchUsers(page);

      if (data.length < 10) {
        setHasMore(false);
      }
      const updatedUsers = page === 1 ? data : [...users, ...data];
      setUsers(updatedUsers);
      // Cache the updated users and page number in localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("page", page.toString());
    } catch (e) {
      console.error("Error fetching users:", e);
    }
  };

  // Function to load more users when the button is clicked
  const loadMoreUsers = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchAndSetUsers(nextPage);
  };

  // Display a loading state while users are being fetched
  if (users.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-80 py-10 mb-10">
        {/* Display loading skeletons */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-800 rounded-lg shadow-sm"
          >
            <div className="h-40"></div>
            <div className="p-4">
              <div className="w-3/4 h-4 rounded-lg animate-pulse bg-gray-500 mb-2"></div>
              <div className="w-1/2 h-4 rounded-lg animate-pulse bg-gray-500"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Display the list of users
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-80 py-10">
        {users.map((user) => (
          <Link
            legacyBehavior
            key={user.id}
            href={`/detailsInClient/${user.id}`}
          >
            <a className="flex flex-col items-center justify-center py-6 rounded-lg shadow-sm hover:bg-blue-950 transition-all duration-500">
              <Image
                width={140}
                height={140}
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
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreUsers}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            More Items
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
