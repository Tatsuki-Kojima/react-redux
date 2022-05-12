// useMemo関数の学習のために用いた。

import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

export function RefContainer() {
    const defalutText = "";

    // TextField Component用
    // useRefは .current を用いてget, setが可能
    const fieldText = useRef(defalutText);
    // 確定後の値表示用
    const [collectText, setCollectText] = useState(defalutText);

    return (
        <div>
            <TextField label="text field" defaultValue={defalutText}
                // TextFieldのEventから入力後の値を取得している
                onChange={(changeEvent) => fieldText.current = changeEvent.target.value} />
            <Button variant="outlined"
                onClick={() => setCollectText(fieldText.current)}>Collect</Button>
            <div>FieldText: {collectText}</div>
        </div >
    );
}
