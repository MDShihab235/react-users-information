import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async function () {
    try {
      const { data } = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const handleUserDetails = (user) => {
    const userDetail = [user];
    setUserDetails(userDetail);
  };

  return (
    <>
      <h1 className="users-information">Users Information</h1>
      {loading ? (
        <Loader />
      ) : (
        <main className="main-section">
          <div>
            {users.map((user) => (
              <User
                key={user.Bio}
                user={user}
                handleUserDetails={handleUserDetails}
              />
            ))}
          </div>
          <div>
            <UserDetails key={userDetails.id} userDetails={userDetails} />
          </div>
        </main>
      )}
    </>
  );
}

export default App;
