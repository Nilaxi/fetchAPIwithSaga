import {call, put, takeEvery} from "redux-saga/effects";
import fetchGetUsers from "../fetchGetUsers";
 
function* handleGetUsers(){
    try{
        const users = yield call(fetchGetUsers);
        console.log(users);
        yield put({type : "GET_USER_SUCCESS",payload:users});
        }catch(err){
        yield put({type : "GET_USER_FAILED",payload:err});
        }
       
    }
export default function* watcherUserSaga(){
    yield takeEvery("GET_USERS_REQUESTED",handleGetUsers);
}
