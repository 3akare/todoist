import { TodoCard, fetchData } from "@/app/components";
import Link from "next/link";

const TodoList = async () => {
  const data = await fetchData("", 0);
  const task = data.tasks
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
              Create a 
              <Link
                href={"/create"}
                className="text-primary border-b-transparent border-b hover:border-b-primary"
              >
                Task
              </Link>
            </h1>
          )}
        </section>
      </main>
    </>
  );
};

export default TodoList;
