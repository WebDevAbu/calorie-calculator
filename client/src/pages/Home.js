import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Home = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("des");
  const [id, setId] = useState(0);
  const loadData = async () => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log("id---->", data._id);
    await axios
      .get(`http://localhost:5000/finduser/${data._id}`)
      .then((response) => {
        console.log("=======>>", response);
        setData(response.data.user_details);
      })
      .catch((err) => {
        console.log("error------------>>>>");
        console.log("error", err);
      });
  };
  useEffect(() => {
    // const id = getId();
    // setId(id);
    loadData();
  }, []);

  // const getId = () => {

  //   console.log("clg-->", data._id);
  //   // return data[0]._id;
  // };

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/remove/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("error", err);
      });
    loadData(id);
    // toast.success("Contact Deleted Successfully");
    // setTimeout(() => loadData(), 500);
  };

  const sorting = () => {
    axios
      .get(`http://localhost:5000/get/sorting/${sort}`, { id: 123 })
      .then((res) => {
        console.log(res.data);
        sort == "ase" ? setSort("des") : setSort("ase");
        return setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="today">
        <Link to="/today">
          <button className="btn1 btn-contact">Add Today's Plan</button>
        </Link>
      </div>
      <table className="styled-table">
        <thead>
          {data.length > 0 ? (
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }} onClick={sorting}>
                date
                {sort == "ase" ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </th>
              <th style={{ textAlign: "center" }}>Intake Calorie</th>
              <th style={{ textAlign: "center" }}>Target Intake Calorie</th>
              <th style={{ textAlign: "center" }}>Burn Calorie</th>
              <th style={{ textAlign: "center" }}>Target Burn Calorie</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          ) : (
            <h3>Empty Data</h3>
          )}
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={val.id}>
                <th scope="row">{index + 1}</th>
                <td>{val.date}</td>
                <td>{val.intakecalorie}</td>
                <td>{val.t_intakecalorie}</td>
                <td>{val.burncalorie}</td>
                <td>{val.t_burncalorie}</td>
                <td>
                  <Link to={`/update/${val._id}`}>
                    <button className="btn1 btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn1 btn-delete"
                    onClick={() => deleteContact(val._id)}
                  >
                    Delete
                  </button>

                  {/* <Link to={`/view/${val.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
