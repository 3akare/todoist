import { TodoCard, Dialog, OpenDialog } from "@/app/components";
import plus from "../../public/plus.svg";
import Link from "next/link";
import Image from "next/image";

const TodoList = ({data}) => {
  return (
    <main>
      <section>
        <h1>Inbox</h1>
      </section>
      <section className="grid gap-1 grid-cols-fluid justify-items-center items-center max-sm:place-items-center">
        {data[0]?.tasks.map((item) => {
          return <TodoCard key={item.id} todo={item} />;
        })}
        {!data && (
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
