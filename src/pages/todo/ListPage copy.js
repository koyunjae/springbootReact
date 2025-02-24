import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") || 1;
  const size = queryParams.get("size") || 10;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/todo/list");
      setData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 w-full bg-orange-200 ">
      <div className="text-3xl font-extrabold">Todo List Page Component</div>
      <div>{page}</div>
      <div>{size}</div>
      <p>
        {data.map((i) => (
          <div>
            <span>{i.work}</span> &nbsp; &nbsp; &nbsp;
            <span>{i.name}</span>
            <br />
          </div>
        ))}
      </p>
    </div>
  );
};

export default ListPage;
