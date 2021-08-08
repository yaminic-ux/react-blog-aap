import React, { useState, useEffect } from "react";
//import { row, col } from "react-bootstrap";

const SingleUser = (props) => {
    const [user, setUser] = useState({
        first_name: "",
        last_name : "",
        email : "",
        avatar : ""
    });

const [error, setError] = useState("");

useEffect(() => {
    const userId = props.match.params.id;
    fetch(`https://reqres.in/api/users/${userId}`)
    .then((res) => {
            return res.json();
        })
        .then((result) => {
            if (Object.keys(result).length === 0 && result.constructor === Object) {
                setError("An Error Accoured while fetching user.");
            } else {
                setUser({
                    ...user,
                    first_name: result.data.first_name,
                    last_name: result.data.last_name,
                    email: result.data.email,
                    avatar: result.data.avatar,
                });
                setError("");
            }
        })
        .catch((e) => {
            setError(e.message);
        });
}, [props]);

const ShowCard = () => {
    if (user.email) {
        return (
            <div
              className='wrapper'
              style={{ borderBottom: "1px solid gray", marginBottom:"20px", paddingBottom: "30px" }}>
              <img src={user.avatar} />
              <p>{user.email}</p>
              <span>
                {user.first_name}
                {user.last_name}
              </span>
            </div>
        );
    } else {
        return "";
    }
};
  return (
      <ShowCard />
  );
};
export default SingleUser;