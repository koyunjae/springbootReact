import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";

const GreenList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const greenData = async () => {
      const res = await axios.get("http://localhost:8080/green/list");
      console.log(res.data);
      setData(res.data);
    };
    greenData();
  }, []);

  return (
    <BasicLayout>
      <div className="p-4 w-full bg-orange-200 ">
        <div className="text-3xl font-extrabold">Green List Page Component</div>

        {data.map((i) => {
          const ex = "상품명 " + i.name + "명 " + i.total + "상 " + i.vat;
          return <p>{ex}</p>;
        })}
      </div>
    </BasicLayout>
  );
};

export default GreenList;
