import api from '../../utils/api';

const ActionType = {
    RECEVE_USERS: 'RECEIVE_USERS',
  };

  function receiveUsersActionCreator(users) {
    return {
      type: ActionType.RECEVE_USERS,
      payload: {
        users,
      },
    };
  }
function asyncRegisterUser({ name, email, password }) {
    return async () => {
      
      try {
        await api.register({name, email , password });
      } catch (error) {
        alert(error.message);
      }      
    };
  }

  
export {
    ActionType,    
    asyncRegisterUser,
    receiveUsersActionCreator
  };
  