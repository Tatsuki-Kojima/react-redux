import { Button, ButtonGroup } from "@mui/material";
import { useReducer } from "react";
// import "./Redux.css"

interface NumberState {
    counter: number,
    action: string,
    prevCount: number,
}

const initState: NumberState = {
    counter: 0,
    prevCount: null,
    action: null,
}

function ReducerFunction(countState: NumberState, action: string) {
    switch (action) {
        case "add":
            countState = {
                counter: countState.counter + 1,
                prevCount: countState.counter,
                action: "add",
            }
            break;
        case "declease":
            countState = {
                counter: countState.counter - 1,
                prevCount: countState.counter,
                action: "declease",
            }
            break;
        case "reset":
            countState = {
                counter: initState.counter,
                prevCount: countState.counter,
                action: "reset",
            }
            break;
        default:
            break;
    }
    return countState;
}

export function Counter() {
    const [state, dispatch] = useReducer(ReducerFunction, initState);

    return (
        <div className="CounterBox">
            <div className="CounterItem">counter :{state.counter}</div>
            <div className="CounterItem">action :{state.action}</div>

            <ButtonGroup className="CounterItem">
                <Button onClick={() => dispatch("add")}>add</Button>
                <Button onClick={() => dispatch("declease")}>declease</Button>
                <Button onClick={() => dispatch("reset")}>reset</Button>
                {/* ReducerFunction関数内のdefaultに遷移する */}
                <Button onClick={() => dispatch("marge")}>marge</Button>
            </ButtonGroup>

            <div className="CounterItem">prevCounter :{state.prevCount}</div>
        </div>
    )
}
