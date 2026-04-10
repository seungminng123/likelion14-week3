import styled from "styled-components";
import Button from "./Button";

const MemoItem = styled.div`
    background-color: #fffcf0;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
`;
    

function MemoList({memos,onRemove}) {
    return (
        <div>
            {memos.map((memo) => (
                <MemoItem key={memo.id}>
                    {memo.content}
                    <Button onClick={() => onRemove(memo.id)} background="#ff4c4c" text ="삭제"/>
                </MemoItem>
            ))}
        </div>
    );
}

export default MemoList;