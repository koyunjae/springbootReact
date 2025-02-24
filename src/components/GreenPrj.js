import axios from "axios";
import React, { useEffect, useState } from "react";

const init = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const GreenPrj = ({ pno }) => {
  const [data, setData] = useState(init);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [num, setNum] = useState(1);
  const clickhand = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/products/list?size=${size}&page=${page}`
      );
      console.log(res.data);
      setData(res.data);
    };
    f();
  }, [num]);

  return (
    <div>
      {data.dtoList.map((i) => {
        return <p> {i.pno}</p>;
      })}
      <div>
        페이지
        <input
          type="Number"
          name="page"
          onChange={(e) => setPage(e.target.value)}
          value={page}
        />
      </div>
      <div>
        페이지당 데이터 갯수
        <input
          type="Number"
          name="size"
          onChange={(e) => setSize(e.target.value)}
          value={size}
        />
      </div>
      <button onClick={clickhand}>확인</button>
    </div>
  );
};
//localhost:8080/api/products/list?szie=12&page=3
export default GreenPrj;
