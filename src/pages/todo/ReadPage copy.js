import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const { tno } = useParams();
  const [data, setData] = useState([]);
  console.log(tno);

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(`http://localhost:8080/todo/read?tno=${tno}`);
      setData(res.data);
    };
    f();
  }, [tno]);

  return (
    <div className="text-3xl font-extrabold">
      Todo Read Page Component {tno}
      {data.map((i) => (
        <div>
          {i.tno},{i.work}
        </div>
      ))}
    </div>
  );
};

export default ReadPage;
