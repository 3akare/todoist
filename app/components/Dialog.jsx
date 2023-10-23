"use client";
import React, { useState } from "react";
import { Priority } from "./index";

const Dialog = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const priorityArray = ["high", "moderate", "low"];
  const handleChange = (event) => {
    setData((oldData) => {
      return { ...oldData, [event.target.id]: event.target.value };
    });
  };

  const handleClick = (event) => {
    setData((oldData) => {
      return { ...oldData, priority: event.target.id };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({ priority: "", description: "", title: "" });
  };

  return (
    <dialog
      id="dialogControl"
      className="w-[90%] outline outline-border rounded-md outline-1 max-w-2xl"
    >
      <form
        className="container mx-auto flex flex-col items-start justify-center w-full p-2 space-y-4 max-w-3xl "
        onSubmit={handleSubmit}
        name="taskForm"
      >
        <label htmlFor="title" className="hidden">
          title
        </label>
        <input
          type="text"
          placeholder="Task Name"
          id="title"
          className="indent-1 focus-within:outline-none focus-visible:outline-none w-full h-14 text-xl"
          value={data.title}
          onChange={handleChange}
          autoFocus
          required
        />
        <label htmlFor="description" className="hidden">
          description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="w-full resize-none indent-2 focus-within:outline-none focus-visible:outline-none font-light text-sm"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-3">
            {priorityArray.map((item) => {
              return (
                <Priority
                  key={item}
                  handleClick={handleClick}
                  priority={item}
                  current={data.priority}
                />
              );
            })}
          </div>
          <div>
            {data.description.length !== 0 && data.title.length !== 0 ? (
              <button
                className="w-8 h-8 rounded-md bg-primary text-secondary"
                onClick={() => {
                  dialogControl.close();
                }}
              >
                send
              </button>
            ) : (
              <div
                className="w-8 h-8 rounded-md bg-secondary outline-[1px] outline-primary outline text-primary"
                onClick={() => {
                  setData({ priority: "", description: "", title: "" });
                  dialogControl.close();
                }}
              >
                close
              </div>
            )}
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default Dialog;