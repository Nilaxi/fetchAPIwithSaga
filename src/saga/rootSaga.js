import { all} from "redux-saga/effects"
import watcherUserSaga from "./usersaga"


export default function* rootSaga(){
    yield all([watcherUserSaga()])
}