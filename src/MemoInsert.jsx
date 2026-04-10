import { useState } from "react";
import Button from "./Button";

function MemoInsert({ onInsert }) { //이벤트를 전달할떈 on**형태로 전달
    const[text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }
    function handleClick() {
        onInsert(text);
        setText("");
        console.log(text);
    }
    return (
        <div>
            <input type="text" placeholder="메모를 입력하세요" value={text} onChange={handleChange} />
            <Button onClick={handleClick} background ="#32bb00" text="추가"/>
        </div>
    );
}
export default MemoInsert;