const initialstate = {
    counter : 0
}

const reducer = (state = initialstate , action) => {
    switch(action.type){
        case 'INC':
            var c = state.counter + action.payload;
            return {counter : c}
        case 'DEC':
            var c = state.counter - action.payload;
            return {counter : c}    
    }
    return state;
}

export default reducer;