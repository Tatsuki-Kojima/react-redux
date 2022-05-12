import './App.css';
import { Counter } from "./Redux.tsx";
import { MemoCounter } from "./Memo.tsx"

function App() {
  return (
    <>
      <Counter />
      <MemoCounter />
    </>
  );
}

export default App;