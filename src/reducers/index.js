const sampleReducer = (state=0, action)=>{
  console.log('calling to reducer');
  switch( action.type ){
    case 'SUMAR':
      return state + 1;
    case 'RESTAR':
      return state - 1;
    default:
        return state;
  }
};

export default sampleReducer;