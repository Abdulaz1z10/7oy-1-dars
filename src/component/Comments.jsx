import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(1)

  const Count_number = 10
  const lastIndex = count * Count_number;
  const firstIndex = lastIndex - Count_number;
  const records = comments.slice(firstIndex, lastIndex);
  const result = Math.ceil(comments.length / Count_number);
  const numbers = [...Array(result + 1).keys()].slice(1)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
        console.log(response);
        setComments(response.data);
        console.log(response.data);
      });
  }, []);

  const count1 =()=>{
    if(count > 1){
        setCount(prev => prev - 1)
    }
  }
  const count2 =()=>{
    setCount(prev => prev + 1)
  }

  return (
    <div className="container">
        <button className="btn btn-success" onClick={count1}>-</button>
        <span className="fs-4">{count}</span>
        <button className="btn btn-success" onClick={count2}>+</button>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-hover table-striped mt-5">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Id</th>
                <th>Body</th>
                <th>Email</th>
                <th>PostId</th>
              </tr>
            </thead>
            <tbody>
              {records?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.body}</td>
                    <td>{item.email}</td>
                    <td>{item.postId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
