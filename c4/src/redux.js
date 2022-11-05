
// creating initial state

const init = {
    counter : 0,
}

// creating action

const ADDCOUNTER  = "ADDCOUNTER";

// creating reducer

const counterReducer=(state,action)=>{
    switch(action.type)
    {
        case ADDCOUNTER : return {counter :state.counter+action.payload}
        default : return state
    }
}

// cost [state,dispatch] = useReducer(counterReducer,init)

class Store{
    constructor(counterReducer,init)
    {
        this.state = init,
        this.reducer = counterReducer
    }
    getState()
    {
        return this.state
    }
    dispatch(action)
    {
      this.state=this.reducer(this.state,action)
   
    }

}

const store = new Store(counterReducer,init);


console.log(store.getState())
store.dispatch({type: ADDCOUNTER, payload:1})
console.log(store.getState())
store.dispatch({type: ADDCOUNTER, payload:1})
store.dispatch({type: ADDCOUNTER, payload:6})
console.log(store.getState())
