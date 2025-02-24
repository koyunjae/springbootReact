import axios from "axios";
import React, { useEffect } from "react";

const Prj = ({ v }) => {
  useEffect(() => {
    const f = async () => {
      const res = await axios.get("http://localhost:8080/api/products/3");
      console.log(res.data);
    };
    f();
  }, []);

  return (
    <div>
      Prj, {v}
      
    </div>
  );
};
//localhost:8080/api/products/list?szie=12&page=3
export default Prj;
