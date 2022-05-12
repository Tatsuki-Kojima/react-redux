import './App.css';
import { ReducerContainer } from "./Redux.tsx";
import { MemoContainer } from "./Memo.tsx"
import { RefContainer } from "./Ref.tsx"

function Container(props) {
  return (
    <div className="Container">
      {props.children}
    </div>
  );
}

function Wrappaer(props) {
  return (<div className='Wrapper'>
    {props.children}
  </div>)
}

function App() {
  return (
    <Wrappaer>
      <Container>
        <ReducerContainer />
      </Container>

      <Container>
        <MemoContainer />
      </Container>

      <Container>
        <RefContainer />
      </Container>
    </Wrappaer>
  );
}

export default App;