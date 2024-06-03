/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface User {
  id: string;
  username: string;
  img: string;
  detail: string;
  address: string;
  phone: string;
  job: string;
}

interface PageProps {
  user: User | null;
}

const Page: React.FC<PageProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black-100">
        <div className="max-w-sm rounded-2xl shadow-2xl shadow-slate-400 overflow-hidden p-1 bg-white">
          <img className="w-full" src="https://placehold.co/600x600" alt="Loading..." />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-blue-500 mb-2">Loading...</div>
            <p className="text-gray-700 text-base">Loading... <br /><br /><br /></p>
          </div>
          <hr style={{ border: "1px solid violet" }} />
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-600">Address: Loading...</p>
            <p className="text-gray-600">Phone: Loading...</p>
            <p className="text-gray-600">Job: Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div className="max-w-sm rounded-2xl box-shadow-2xl shadow-slate-500 overflow-hidden p-4 bg-white">
        <img className="w-full rounded-lg drop-shadow-md shadow-red-100" src={user.img} alt={user.username} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-blue-500 mb-2">{user.username}</div>
          <p className="text-gray-700 text-base">{user.detail}</p>
        </div>
        <hr style={{ border: "1px solid gray" }} />
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-600">Address: {user.address}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Job: {user.job}</p>
        </div>
      </div>
    </div>
  );
}

export async function page(context: { params: { id: string } }) {
  const { id } = context.params;
  
  try {
    const response = await fetch( 
      `https://6645712ab8925626f891e22f.mockapi.io/api/v1/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user: User = await response.json();
    return { props: { user } };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { props: { user: null } };
  }
}

export default Page;

