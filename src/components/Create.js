import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Employees from "./Employees";
export const Create = () => {
  const [name, Setname] = useState("");
  const [age, Setage] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuid();
    let a = name,
      b = age;
    Employees.push({ id: uniqueId, name: a, age: b });
    console.log(Employees);
    alert("submitted");
    history("/");
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          placeholder={"enter name"}
          required
          onChange={(e) => Setname(e.target.value)}
        />
        <br></br>
        <label>Age</label>
        <br></br>
        <input
          type="number"
          placeholder={"enter age"}
          required
          onChange={(e) => Setage(e.target.value)}
        />
        <br></br>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          submit
        </button>
      </form>
    </div>
  );
};
