import { Foo } from "@/components/Foo";
import { Loader } from "@/components/Loader";

export default async function TodoListPage() {
  const data = await getData();

  console.log("====data", data);
  return (
    <>
      <h1>Todo list</h1>
      <Loader />
      <Foo />
    </>
  );
}

async function getData() {
  const res = await fetch("http://localhost:8000/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
