
export interface User {
  id: string;
  username: string;
  img: string;
  detail: string;
  address: string;
  phone: string;
  job: string;
}

const fetchUsers = async (page: number): Promise<User[]> => {
  try {
    const response = await fetch(
      `https://6645712ab8925626f891e22f.mockapi.io/api/v1/users?page=${page}&limit=12`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const fetchUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(
      `https://6645712ab8925626f891e22f.mockapi.io/api/v1/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export { fetchUsers, fetchUserById };
