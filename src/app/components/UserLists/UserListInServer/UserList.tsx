// pages/UserList.tsx

import React from 'react';
import { fetchUsers, User } from '../../utils/FetchUser';
import Link from 'next/link';
import Image from 'next/image';

interface UserListProps {
  users: User[];
  hasMore: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, hasMore }) => {
  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-80 py-10">
        {users.map((user) => (
          <Link legacyBehavior key={user.id} href={`/detailsInClient/${user.id}`}>
            <a className="flex flex-col items-center justify-center py-6 rounded-lg shadow-sm hover:bg-blue-950 transition-all duration-500">
              <Image
                width={140}
                height={140}
                src={user.img}
                alt={user.username}
                className="rounded-full mx-auto hover:border-white-500 hover:border-2 transition-all duration-100"
              />
              <h2 className="mt-4 text-lg font-semibold text-blue-500">{user.username}</h2>
            </a>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Link legacyBehavior href={`/UserList?page=${2}`}>
            <a className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300">
              More Items
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const page = parseInt(context.query.page || '1', 10);
    const users = await fetchUsers(page);
    const hasMore = users.length === 12;

    return {
      props: {
        users,
        hasMore,
      },
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
        hasMore: false,
      },
    };
  }
}

export default UserList;
