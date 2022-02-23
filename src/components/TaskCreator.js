import { React, useState } from "react";

export function TaskCreator(props) {
  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("");
  const [auth, setAuth] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [taskCol, setTaskCol] = useState(["red"]);

  // Functions updates the input fields by updating the respective states
  function handleChangeUpp(e) {
    setTask(e.target.value);
  }
  function handleChangSub(e) {
    setSubject(e.target.value);
  }
  function handleChangeAuth(e) {
    setAuth(e.target.value);
  }
  // Function updates the "tasklist"-state array, as well as creating an element in the "taskCol"-state array,
  // so that colors will change only for the individual task card.
  function handleClick() {
    if (task) {
      setTasklist([
        ...tasklist,
        {
          title: task ? task : "",
          subject: subject ? subject : "",
          auth: auth ? auth : "",
        },
      ]);
      setTask("");
      setSubject("");
      setAuth("");
      setTaskCol([...taskCol, "red"]);
    }
  }

  //  Function deletes element after confirming with prompt.
  function removeElement(el) {
    let answer = prompt("If you wish to delete the task, type 'delete'");
    if (answer) {
      if (answer.toLocaleLowerCase() === "delete") {
        el.remove();
      }
    }
  }

  // Function to make the tasks draggable
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  // Functions updates the className of the individual task card div, by changing the proper element in the "taskCol" state array.
  function updateTaskColArr(arr, ind, col) {
    let newArr = [...arr];
    newArr[ind] = col;
    return newArr;
  }

  function changeCardColor(ind) {
    console.log(taskCol, taskCol[ind]);
    if (taskCol[ind] === "red") {
      return setTaskCol(updateTaskColArr(taskCol, ind, "yellow"));
    } else if (taskCol[ind] === "yellow") {
      return setTaskCol(updateTaskColArr(taskCol, ind, "green"));
    } else {
      return setTaskCol(updateTaskColArr(taskCol, ind, "red"));
    }
  }
  // Variable that accepts the returned result of mapping the "tasklist" state array, with the correct HTML-elements.
  let card = tasklist.map((el, ind) => {
    return (
      <div
        key={ind}
        id={ind}
        // Classname of the card is derived from the "taskCol" state array, so background color changes when "changeColorButton"
        // is clicked.
        className={`card ${taskCol[ind]}`}
        draggable="true"
        onDragStart={drag}
      >
        <button
          className="deleteButtonCard"
          onClick={() => removeElement(document.getElementById(`${ind}`))}
        >
          Delete
        </button>
        <button
          className="changeColorButton"
          onClick={() => changeCardColor(ind)}
        >
          Change color
        </button>
        <div className="taskInfo">
          <h3>{el.title}</h3>
          <p>{el.subject}</p>
          <p>{el.auth}</p>
        </div>
      </div>
    );
  });
  // Component returns HTML- elements, after conditions have been met
  return (
    <>
      <div className="taskInput">
        {tasklist.length === 0 ? (
          <p className="instructions">
            Now create a taskcard, and drag it to the appropriate container!
          </p>
        ) : tasklist.length === 1 ? (
          <p className="instructions">
            Drag and drop your card in the appropriate container, after which,
            you may create a new task card.
          </p>
        ) : tasklist.length === 2 ? (
          <p className="instructions">
            You can delete either the column, or the task card, by clicking the
            delete button in the upper left corners!
          </p>
        ) : (
          ""
        )}
        <div className="inputfieldTask">
          <input
            className="inputField"
            type="text"
            placeholder="Task"
            value={task}
            onChange={handleChangeUpp}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={handleChangSub}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Responsible"
            value={auth}
            onChange={handleChangeAuth}
          />
          <button className="inputFieldButton" onClick={handleClick}>
            Create task
          </button>
        </div>
      </div>

      <div>{card}</div>
    </>
  );
}
