import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{border: "solid"}}>
      <p>hot reloading 테스트</p>
      <p>버튼 클릭해서 카운트 증가후 다른 컴포넌트 소스 수정해보기!!</p>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  );
};
