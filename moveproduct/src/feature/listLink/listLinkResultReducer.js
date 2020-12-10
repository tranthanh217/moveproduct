import { GET_RESULT} from '../../actions/actionType';
const listResult=[];

export default function getListResultReducers(state = listResult,action){
    switch(action.type){
        case GET_RESULT:
            let listadd = [];
            action.payload.map((list)=> (
                listadd.push(list)
            ));
            return (listadd);
        default:
            return state;
    }
}