import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./addedit.css";
import axios from "axios";

const AddEdit = () => {
  const [state, setState] = useState({
    t_intakecalorie: "",
    intakecalorie: "",
    t_burncalorie: "",
    burncalorie: "",
  });
  // const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:5000/findone/${id}`)
      .then((response) => {
        console.log(response);
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !state.t_intakecalorie ||
      !state.intakecalorie ||
      !state.t_burncalorie ||
      !state.burncalorie
    ) {
      alert("Enter Value");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {})
          .then(() => {
            setState({ name: "", food: "", calorie: "", quantity: "" });
          })
          .catch((err) => console.log(err.response.data));
        alert("Added successful");
      } else {
        axios
          .put(`http://localhost:5000/update/${id}`, state)
          .then(() => {
            setState({
              t_intakecalorie: "",
              intakecalorie: "",
              t_burncalorie: "",
              burncalorie: "",
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center">Edit Data</h2>
      </div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="t_intakecalorie">Target Calorie</label>
          <br />
          <input
            type="number"
            className="input"
            id="t_intakecalorie"
            name="t_intakecalorie"
            placeholder="Your target calorie intake.."
            value={state.t_intakecalorie || ""}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="intakecalorie">Calorie Intake</label>
          <br />
          <input
            type="number"
            className="input"
            id="intakecalorie"
            name="intakecalorie"
            placeholder="Your intake calorie.."
            value={state.intakecalorie || ""}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="t_burncalorie">Target Burn Calorie</label>
          <br />
          <input
            type="number"
            id="t_burncalorie"
            name="t_burncalorie"
            className="input"
            placeholder="Your target burn calorie.."
            value={state.t_burncalorie || ""}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="burncalorie">Burn Calorie</label>
          <br />
          <input
            type="number"
            className="input"
            id="burncalorie"
            name="burncalorie"
            placeholder="Your burn calorie.."
            value={state.burncalorie || ""}
            onChange={handleInputChange}
          />
        </div>

        <Link to="/api/update"></Link>
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/home">
          <input type="button" value="Go back" />
        </Link>
      </form>
    </div>
  );
};
export default AddEdit;
