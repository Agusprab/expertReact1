import api from '../../utils/api';
import {receiveThreadsActionCreator} from '../threads/action';
import {receiveUsersActionCreator} from '../users/action';

function asyncPopulateThreadsAndUsers() {
    return async (dispatch) => {
        try{
            const users = await api.getAllUsers();
            dispatch(receiveUsersActionCreator(users))
            const threads = await api.getAllThreads();
            dispatch(receiveThreadsActionCreator(threads));
        }catch(error){
            alert(error.message);
        }
    };
}


export { asyncPopulateThreadsAndUsers }