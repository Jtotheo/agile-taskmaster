import { React, useState } from "react";
import { TaskCreator } from "./TaskCreator";

export function Columns(props) {
  const [columnName, setColumnName] = useState("");
  const [columns, setColumns] = useState([]);

  // Function updates the input field by updating the columnName-state
  function handleChange(ev) {
    setColumnName(ev.target.value);
    console.log(columnName);
  }

  // Function updates the columns array based off the columnName-state
  function createColumn() {
    if (columnName) {
      setColumns([...columns, columnName]);
      setColumnName("");
    }
  }

  // Functions to allow other divs to be dropped on the columns
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  // Function that deletes the column, and updates the state of the columns-array
  function deleteEl(i) {
    let answer = prompt(
      "If you wish to delete the column as well as contained tasks, type 'delete'. If you only wish to delete the column please move the tasks to another column first."
    );
    if (answer) {
      if (answer.toLocaleLowerCase() === "delete") {
        let updatedArr = columns.filter((el, ind) => {
          if (ind !== i) {
            return el;
          }
          return "";
        });
        setColumns(updatedArr);
      }
    }
  }
  // Variable that accepts the returned result from mapping the "columns"-state array, with the HTML-elements
  const column = columns.map((el, ind) => {
    return (
      <div
        className="column"
        key={el + ind}
        onDragOver={allowDrop}
        onDrop={drop}
      >
        <h3 className="columnHeader">{el}</h3>
        <button
          className="columnDeleteButt"
          onClick={() => {
            deleteEl(ind);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  // Component returns HTML- elements, after conditions have been met
  return (
    <>
      <div className="inputFieldsContainer">
        <div className="containerInput">
          {columns.length === 0 ? (
            <p className="instructions">
              Welcome to the agile taskmaster! Please begin by adding one or
              more columns where you will place your task cards .
            </p>
          ) : (
            ""
          )}
          {columns.length <= 4 ? (
            <div className="inputfieldColumn">
              <input
                className="inputField"
                value={columnName}
                onChange={handleChange}
                placeholder="Heading"
              ></input>
              <button className="createContainerButton" onClick={createColumn}>
                Create task column
              </button>
            </div>
          ) : (
            <div>Max number of columns used</div>
          )}
        </div>
        {columns.length > 0 ? <TaskCreator /> : ""}
      </div>
      <div className="columnContainer">{column}</div>
    </>
  );
}
