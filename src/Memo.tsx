// useMemo関数の学習のために用いた。

import { Button } from "@mui/material";
import { useMemo, useState } from "react";

interface MemoState {
    text: string,
    count: number,
}

function AddState(state: MemoState) {
    return {
        text: state.text,
        count: state.count + 1
    };
}

// 乗算して返す
function Square(state: MemoState) {
    if (state.text === "nonmemo")
        Heavy();
    return state.count * state.count;
}

// NonMemo用の重い処理
function Heavy() {
    let i = 0;
    while (i < 10000000) i++;
    return;
}

//表示の際に効果を発揮
// 同じ関数内に2種の値を置いて
// 関数呼び出し時には値を再取得している
export function MemoContainer() {
    const [memoState, setMemoState] = useState({ text: "memo", count: 0 });
    const [nonMemoState, setNonMemoState] = useState({ text: "nonmemo", count: 0 });

    const resultMemo = () => setMemoState(AddState(memoState));
    const resultNonMemo = () => setNonMemoState(AddState(nonMemoState));

    const SquareMemo = useMemo(() => Square(memoState), [memoState]);
    const SquareNonMemo = useMemo(() => Square(nonMemoState), [nonMemoState]);

    return (
        <div>
            <div>Memo :{memoState.count}</div>
            <div>NonMemo: {nonMemoState.count}</div>
            <Button variant="outlined" onClick={resultMemo}>Add-Memo</Button>
            <Button variant="outlined" onClick={resultNonMemo}>Add-Non-Memo</Button>
            <div>MemoSquare: {SquareMemo}</div>
            <div>NonMemoSquare: {SquareNonMemo}</div>
        </div>
    );
}