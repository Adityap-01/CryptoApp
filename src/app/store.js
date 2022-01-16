
// configureStore - A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup
// A store holds the whole state tree of your application. It's just an object with a few methods on it. 
import { configureStore } from '@reduxjs/toolkit';
import {crptoApi, cryptoApi} from '../services/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]:cryptoApi.reducer,
  },
});