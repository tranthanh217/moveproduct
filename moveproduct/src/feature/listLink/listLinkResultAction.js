import { GET_RESULT } from '../../actions/actionType';
const axios = require('axios');

export const getListResult = (e) =>{
    var list = [];
    let url = `http://localhost:3000/listresult?_page=${e}&_limit=2`;
    axios.get(url)
    .then(function (response) {
        // var list = response.data;
        // list.concat(response.data);
        // console.log('asd',response.data);
        // response.data.map((item) => list.push(item))
    })
    .catch(function (error) {
        console.log(error);
    });
    return{
        type: GET_RESULT,
        payload: list
      }
} 