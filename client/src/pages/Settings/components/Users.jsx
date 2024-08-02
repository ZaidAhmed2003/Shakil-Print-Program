import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./../../../components/Button";
import AddUser from "./AddUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/shakilprint/users",
      );
      setUsers(response.data); // Assuming the response is an array of users
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/shakilprint/users/${id}`);
      alert("User Deleted");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting User", error);
      alert("Failed to delete User");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium">Users</h2>
        <Button size="small">Add User</Button>
      </div>
      <div className="mb-4 w-full">
        <table className="w-full border-separate rounded-lg border text-center">
          <thead className="">
            <tr>
              <th className="border-b-2 px-2 py-4">username</th>
              <th className="border-b-2 px-2 py-4">password</th>
              <th className="border-b-2 px-2 py-4">role</th>
              <th className="border-b-2 px-2 py-4">actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="border-b px-2 py-4">{user.username}</td>
                <td className="border-b px-2 py-4">{user.password}</td>
                <td className="border-b px-2 py-4">{user.role}</td>
                <td className="border-b px-2 py-4">
                  <div className="flex items-center justify-center gap-4">
                    <button>Edit</button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUser fetchUsers={fetchUsers}   />
    </div>
  );
};

export default Users;
