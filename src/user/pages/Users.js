import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Yakhyo",
      image:
        "https://yakhyo.netlify.app/static/media/me-glasses.eb1522aa.png",
      places: 3,
    },
    {
      id: "u2",
      name: "Umar",
      image:
        "https://yakhyo.netlify.app/static/media/me-glasses.eb1522aa.png",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
