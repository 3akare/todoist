import { TodoList, TodoHolder } from "@/app/components";

export default function Home() {
  return (
    <TodoHolder child={<TodoList></TodoList>}/>
  );
}
