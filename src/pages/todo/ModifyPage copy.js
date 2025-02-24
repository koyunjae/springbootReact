import React from "react";
import { useNavigate } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = (tno) => {
  const navigate = useNavigate();

  const moveToRead = () => {
    navigate({ pathname: `/todo/read/${tno}` });
  };
  const moveToList = () => {
    navigate({ pathname: `/todo/list` });
  };
  const moveToAdd = () => {
    navigate({ pathname: `/todo/add` });
  };

  return (
    <div className="text-3xl font-extrabold">
      Todo Modify Page
      <hr />
      <button onClick={moveToList}>조회페이지로 이동</button>
      <hr />
      <button onClick={moveToAdd}>수정페이지로 이동</button>
      <ModifyComponent tno={tno} />
    </div>
  );
};

export default ModifyPage;
