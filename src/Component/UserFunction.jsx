import React, { useEffect, useState } from "react";
import axios from "axios";
const UserFunction = (props) => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <h1>function</h1>
    </div>
  );
};

export default UserFunction;
