import { Text } from "@geist-ui/core";
import { useStore } from "./hooks/store";

function App() {
  const { increase, counter } = useStore();

  return (
    <>
      <Text h1 className="font-bold">
        Start our Geist journey.
      </Text>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increase}>count is {counter}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
