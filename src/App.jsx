import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [state, setState] = useState([]);
  const loadingArr = Array.from({ length: 30 });
  const [api, setApi] = useState("posts")
  async function getData() {
    return await fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }
  useEffect(() => {
    getData();
  }, [api]);
  console.log(state);
  return (
    <>
      <div className="container">
        <h1 className="text-center text-red-700 text-3xl mt-20">Hello world</h1>
        <div className="flex gap-5 items-center justify-center mt-4 ">
          <button className="border rounded-lg p-3 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white transition " onClick={() => setApi("comments")}>Comments</button>
          <button className="border rounded-lg p-3 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white transition " onClick={() => setApi("posts")}>Posts</button>
          <button className="border rounded-lg p-3 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white transition " onClick={() => setApi("albums")}>Albums</button>
          <button className="border rounded-lg p-3 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white transition " onClick={() => setApi("todos")}>Todos</button>
          <button className="border rounded-lg p-3 text-blue-600 border-blue-600  hover:bg-blue-600 hover:text-white transition " onClick={() => setApi("users")}>Users</button>

        </div>
        <div className="flex flex-wrap gap-8 mt-6">
          {state.length
            ? state.map((el) => <Posts key={el.id} {...el} />)
            : loadingArr.map((el, id) => (
                <Skeleton key={id} width={320} height={384} />
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
