import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../actions/userAction";
import axios from "axios";
import "../App.css";

const FlippingCard = ({ user }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={
              user.avatar ||
              "https://ksi.com/wp-content/uploads/2022/04/Lorna.png"
            }
            alt={user.name}
            className="user-avatar"
          />
        </div>
        <div className="flip-card-back">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(setUsers(response.data));
      } catch (err) {
        console.log("Error fetching user data:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="user-list-container">
      <h1 className="user-list-header">Meet Our Users</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            <div className="user-card">
              <FlippingCard user={user} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
