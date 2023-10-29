"use client";
import { TodoCard, Dialog, OpenDialog } from "@/app/components";
import plus from "../../public/plus.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

const TodoList = ({ data }) => {
  const [numVisibleTasks, setNumVisibleTasks] = useState(0);

  function updateNumVisibleTasks() {
    const newNumVisibleTasks = data[0]?.tasks.filter(
      (item) => !item.completed && item.view
    ).length;
    setNumVisibleTasks(newNumVisibleTasks);
  }

  useEffect(() => {
    updateNumVisibleTasks();
  }, [data]);

  const tasks = data[0]?.tasks.map((item) => {
    if (item.view) {
      return <TodoCard key={item.id} todo={item} />;
    }
  });

  return (
    <main>
      <section>
        <h1>Inbox</h1>
      </section>
      <section className="grid gap-1 grid-cols-fluid justify-items-center items-center max-sm:place-items-center">
        {numVisibleTasks === 0 && (
          <h1 className="text-3xl absolute">
            Create a{" "}
            <span
              onClick={() => dialogControl.showModal()}
              className="text-primary border-b-transparent border-b hover:border-b-primary cursor-pointer"
            >
              Task
            </span>
          </h1>
        )}
        {tasks}
        <Dialog />
        <div className="fixed bottom-12 flex items-center justify-center w-full md:hidden z-[100]">
          <OpenDialog>
            <Image
              src={plus}
              width={30}
              height={30}
              alt="create new task"
              className="cursor-pointer"
            />
          </OpenDialog>
        </div>
        <div className="h-32 invisible"></div>
      </section>
    </main>
  );
};

export default TodoList;
