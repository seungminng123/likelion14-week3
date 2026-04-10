import styled from "styled-components";
import { useState } from "react";
import MemoInsert from './MemoInsert';
import MemoList from './MemoList';


const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
`
const Card = styled.div`
  background: ${(props) => props.background || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  height: 600px;
`;

function App() {
    const [memos, setMemos] = useState([]);

    function handleInsert(text){
        const newMemo = {
            id: Date.now(), //고유값 설정함
            content: text, //실제내용
        };
        setMemos([newMemo,...memos]);
    }
    
    function handleRemove(id){
        setMemos(memos.filter(memo => memo.id !== id)); //id가 같은 애는 빼고 나머지만 남김
    }
    return (
        <Container>
            <Card background="#fff4b8" textColor="#5c4a3e">  
                <h2>MemoList</h2>

                <MemoInsert onInsert={handleInsert} />

                <MemoList
                    memos ={memos}
                    onRemove={handleRemove}
                />
            </Card>
        </Container>
    );
}

export default App;