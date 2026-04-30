"use client";
import React, { useState } from "react";

function TodoSection() {
  const [userInput, setUserInput] = useState(""); // const userInput=""
  const [todo, setTodo] = useState([]); // const todo=[] ['hello', 'hello hello 2', 'hello how areyou ', 'hello']
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  //   const [counter,setCounter]=useState(0)
  // userInput= user type kray ga
  //   console.log("userInput",userInput)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput == "") {
      alert("Please enter a todo item");
      return;
    }
    console.log("handle submit is working");
    // todo.push(userInput)
    // let newTodo = [...todo, userInput];
    // console.log("🚀 ~ handleSubmit ~ newTodo:", newTodo);
    setTodo([...todo, userInput]); // todo=newTodo
    setUserInput("");
  };

  const handleClearInput = () => {
    setUserInput("");
  };

  const handleDelete = (index) => {
    console.log("🚀 ~ handleDelete ~ index:", index);
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    console.log("🚀 ~ handleDelete ~ newTodo:", newTodo);
    setTodo(newTodo);
  };

  const handleEdit = (index, value) => {
    setIsEdit(true);
    setEditIndex(index);
    console.log("🚀 ~ handleEdit ~ index,value:", index, value);
    setUserInput(value); /// userInput="hello"
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // let fruit=["mango","orange","pineapple"]
    // fruit[2]="banana"
    // console.log("fruit",fruit)
    let newTodo = [...todo];
    newTodo[editIndex] = userInput;
    console.log("newtodo", newTodo);
    setTodo(newTodo);

    setUserInput("");
    setIsEdit(false);
    setEditIndex(null);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-amber-500">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="input"
            value={userInput}
            className="bg-red-800 p-3 rounded text-white"
            onChange={(event) => {
              setUserInput(event.target.value); // userInput=hello
            }}
          />
          {/* <button type="submit" className={`${isEdit ? "bg-blue-500" : "bg-green-500"} text-white p-2 rounded`}>
           {!isEdit ? "Submit" : "Update"}
          </button> */}
          {!isEdit ? (
            <button
              type="submit"
              className={`bg-green-500 text-white p-2 rounded`}
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              className={`bg-blue-500 text-white p-2 rounded`}
              onClick={handleUpdate}
            >
              Update
            </button>
          )}

          <button
            type="button"
            onClick={handleClearInput}
            className="bg-red-500 text-white p-2 rounded"
          >
            Clear
          </button>
        </form>
      </div>
      <div>
        <ul className="list ">
          {todo.map((element, index) => {
            return (
              <li key={index}>
                <span>
                  {index}-----{element}
                </span>{" "}
                <button
                  className="bg-red-500 text-white p-1 rounded"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  X
                </button>
                <button
                  className="bg-purple-500 text-white p-1 rounded"
                  onClick={() => {
                    handleEdit(index, element);
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoSection;
