
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './country'; // Importa el reducer con la sintaxis de desestructuración

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
