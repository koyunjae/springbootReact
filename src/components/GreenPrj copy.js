import axios from "axios";
import React, { useEffect, useState } from "react";
const init = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
};

const GreenPrj = () => {
  const [data, setData] = useState(init);
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  return (
    <div>
      pno = {data.pno} <br />
      pnae = {data.pname}
      <br />
      pdesc = {data.pdesc}
      <br />
      price = {data.price}
      <br />
      <div>
        현제 페이지
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
      <button
        onClick={() => {
          const f = async () => {
            const res = await axios.get(
              `http://localhost:8080/api/prodects/list?size=${size}&page=${page}`
            );
            console.log(res.data);
            setData(res.data);
          };

          f();
        }}
      >
        확인
      </button>
    </div>
  );
};
//localhost:8080/api/products/list?szie=12&page=3
export default GreenPrj;
