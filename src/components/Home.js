import React, { Fragment } from "react";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  const history = useNavigate();
  const handleUpdate = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };
  const handleDELETE = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };
  const tableStyle = {
    border: "1px solid black",
  };
  const rowStyle = {
    border: "1px solid black",
    color: "maroon",
  };
  const theadStyle = {
    color: "red",
    border: "1px solid black",
  };
  return (
    <Fragment>
      <div>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr style={rowStyle}>
              <th style={rowStyle}>Id</th>
              <th style={rowStyle}>Name</th>
              <th style={rowStyle}>Age</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <button onClick={() => handleDELETE(item.id)}>
                          delete
                        </button>
                        <Link to={"/Edit"}>
                          <button
                            onClick={() =>
                              handleUpdate(item.id, item.name, item.age)
                            }
                          >
                            edit
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "no data "}
          </tbody>
        </table>
        <Link to="/create">
          <button>create</button>
        </Link>
      </div>
    </Fragment>
  );
};
