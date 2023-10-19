import { TodoCard, fetchData } from "@/app/components";
import plus from "../../public/plus.svg";
import Link from "next/link";
import Image from "next/image";

const TodoList = async () => {
  const data = await fetchData("", 0);
  // const task = data.tasks;
  const task = data;
  return (
    <>
      <main>
        <section>
          <h1>Inbox</h1>
        </section>
        <section className="grid gap-1 grid-cols-fluid justify-items-center items-center max-sm:place-items-center">
          {task &&
            task.map((data) => {
              return <TodoCard key={data.id} todo={data} />;
            })}
          {!task && (
            <h1 className="text-3xl">
              Create a{" "}
              <Link
                href={"/create"}
                className="text-primary border-b-transparent border-b hover:border-b-primary"
              >
                Task
              </Link>
            </h1>
          )}
          <div className="fixed bottom-4 flex items-center justify-center w-full md:hidden">
            <Link href={"/create"}>
              <div className="relative flex justify-center items-center w-14 h-14 bg-primary rounded-full shadow-md">
                <Image
                  src={plus}
                  width={30}
                  height={30}
                  alt="create new task"
                ></Image>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default TodoList;
