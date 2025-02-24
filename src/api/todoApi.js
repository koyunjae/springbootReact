import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, {
    params: { page, size },
  });
  return res.data;
};

export const postAdd = async (todoObj) => {
  const res = await axios.post(`${prefix}/test`, todoObj);

  return res.data;
};
// AddComponent에서 postAdd를 호출해서 성공하면 then (성공함수 호출)

export const deleteOne = async (tno) => {
  const res = await axios.delete(`${prefix}/${tno}`);
  return res.data;
};

export const putOne = async (todo) => {
  const res = await axios.put(`${prefix}/${todo.tno}`, todo);
  return res.data;
};
