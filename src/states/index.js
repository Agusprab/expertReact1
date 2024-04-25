import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        threads : threadsReducer
    },
  });
  
  export default store;
  