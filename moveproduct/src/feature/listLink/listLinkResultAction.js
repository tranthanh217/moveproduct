import { GET_RESULT } from "../../actions/actionType";
const axios = require("axios");

export const getListResult = (e) => {
  // var list = [];
  let url = `http://localhost:3000/listresult?_page=${e}&_limit=2`;
  // let data=getFromApi();
  return axios
    .get(url)
    .then(function (response) {
      // response.data.map((item) => list.push(item));
      console.log("aaa",response.data)
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
  // return {
  //   type: GET_RESULT,
  //   payload: list,
  // };
};
