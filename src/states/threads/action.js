import api from '../../utils/api';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',    
}

function receiveThreadsActionCreator(threads) {
    return {
        type : ActionType.RECEIVE_THREADS,
        payload : {
            threads
        }
    }
}

function addThreadActionCreator(thread) {
    return {
        type : ActionType.ADD_THREAD,
        payload : {
            thread
        }
    }
}

function asyncAddThread({ title, category, body }) {
    return async (dispatch) => {
        try{
            const thread = await api.createThread({ title, category, body });
            dispatch(addThreadActionCreator(thread));
        } catch (error) {
            alert(error.message);
        }
    }
}


export{
    receiveThreadsActionCreator,
    addThreadActionCreator,
    asyncAddThread,
    ActionType
}