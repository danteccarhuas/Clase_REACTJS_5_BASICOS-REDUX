const redux = require('redux');

//1
const createStore = redux.createStore;

//state inicial
const stateInicial = {
    usuarios: []
}

//2
//Reducer
//state y accion
const reducerPrincipal = (state = stateInicial, action) => {
    if(action.type === 'AGREGAR_USUARIO'){
        return {
            ...state,
            usuarios: action.nombre
        }
    }
    if(action.type === 'MOSTRAR_USUARIOS'){
        return {
            ...state
        }
    }
    return state;
}

//3
//create store y store (contiene el state del aplicacion)
//3 parametros, reducer(param 1): es el que cambia el state,state inicial(param 2),applymiddleware(param 3)
const store = createStore(reducerPrincipal);
console.log(store.getState());

//Suscribe o suscripcion
store.subscribe(() => {
    console.log('Algo cambio...', store.getState());
});


//Dispatch: es la forma de cambiar el state
store.dispatch({type: 'AGREGAR_USUARIO', nombre: 'Dante'});
store.dispatch({type: 'MOSTRAR_USUARIOS'});
console.log(store.getState());