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
  const loadData = async (id) => {
    console.log(id);
    await axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((response) => {
        console.log("=======>>", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    const id = getId();
    setId(id);
    loadData(id);
  }, []);

  const getId = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    // console.log("clg-->", data[0].id);
    return data[0].id;
  };

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/api/remove/${id}`)
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
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }} onClick={sorting}>
              date
              {sort == "ase" ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </th>
            <th style={{ textAlign: "center" }}>name</th>
            <th style={{ textAlign: "center" }}>Intake Calorie</th>
            <th style={{ textAlign: "center" }}>Target Intake Calorie</th>
            <th style={{ textAlign: "center" }}>Burn Calorie</th>
            <th style={{ textAlign: "center" }}>Target Burn Calorie</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.intakecalorie}</td>
                <td>{item.targetincalorie}</td>
                <td>{item.burncalorie}</td>
                <td>{item.targetburncalorie}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn1 btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn1 btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>

                  {/* <Link to={`/view/${item.id}`}>
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
