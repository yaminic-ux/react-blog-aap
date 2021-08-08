import React, { useState, useEffect } from "react";
import { container } from "react-bootstrap";

//import { row, col } from "react-bootstrap";

const Userslist = () => {
  const [items, setusers] = useState([]);
  const [pageno, setpage] = useState(1);
  const [loadmorevisible, setLoadmorevisible] = useState(false);

  const fetchdata = () => {
    fetch(`https://reqres.in/api/users?page=${pageno}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setusers([...items, ...data.data]);
        if (data.total_pages == data.page) {
          setLoadmorevisible(false);
        } else {
          setLoadmorevisible(true);
        }
        setpage(pageno + 1);
      })
      .catch((error) => console.log(error));
    //.then((items) => console.log(items));
  };

  const showLoadMore = () => {
    if (loadmorevisible == true) {
      return <button onClick={fetchdata}>Load more</button>;
    } else {
      return "";
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      {items.length &&
        items.map((n) => {
          return (
            <div
              id={n.id}
              className='wrapper'
              style={{ borderBottom: "1px solid gray", marginBottom:"20px", paddingBottom: "30px" }}>
              <img src={n.avatar} />
              <p>{n.email}</p>
              <span>
                {n.first_name}
                {n.last_name}
              </span>
            </div>
          );
        })}
      {showLoadMore()}
    </div>
  );
};

export default Userslist;
