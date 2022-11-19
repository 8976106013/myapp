import React, { useEffect, useState } from "react";

import { getUser } from "./apiCall/apiCall";

const List = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    console.log("hello");
    const resp = await getUser();
   console.log(resp);
    setUserData(resp);

  };
 
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {userData &&
        userData.map((data, index) => {
          return (
            <div className="card text-left mb-3" key={index}>
              <div className="card-body">
                <h4 className="card-title">{data?.name}</h4>
                <p className="card-text">{data?.email}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default List;