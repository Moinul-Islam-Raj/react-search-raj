import { useEffect, useState } from "react";

interface Props {
  keys: string;
  imgSrc?: string;
}

const Counter = ({ keys, imgSrc = "./vite.svg" }: Props) => {
  const [count, setCount] = useState(Number(localStorage.getItem(keys)) || 0);
  useEffect(() => {
    localStorage.setItem(keys, `${count}`);
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "10px",
        gap: "5px",
      }}
    >
      <p className="btn btn-primary" style={{ margin: "0" }}>
        <img src={imgSrc} alt="logo" />
        {count}
      </p>
      <button
        className="btn btn-success"
        onClick={() => setCount((c) => c + 1)}
      >
        Add
      </button>
      <button className="btn btn-danger" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
