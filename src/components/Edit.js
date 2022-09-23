import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Employees from "./Employees";

export const Edit = () => {
  const history = useNavigate();
  const [name, Setname] = useState("");
  const [age, Setage] = useState("");
  const [id, Setid] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    let a = Employees[index];
    a.id = id;
    a.name = name;
    a.age = age;
    history("/");
  };
  useEffect(() => {
    Setid(localStorage.getItem("id"));
    Setname(localStorage.getItem("name"));
    Setage(localStorage.getItem("age"));
  }, []);
  var index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);
  return (
    <div>
      <form>
        <label>Id</label>
        <br></br>
        <input value={id} required onChange={(e) => Setid(e.target.value)} />
        <br></br>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          placeholder={"enter name"}
          value={name}
          required
          onChange={(e) => Setname(e.target.value)}
        />
        <br></br>
        <label>Age</label>
        <br></br>
        <input
          type="number"
          placeholder={"enter age"}
          value={age}
          required
          onChange={(e) => Setage(e.target.value)}
        />
        <br></br>
        <button onClick={(e) => handleUpdate(e)}>update</button>
      </form>
    </div>
  );
};
