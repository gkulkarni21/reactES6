export default function courseReducer(state = [], action) { //setting initial state using default parameters feature
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, //explode new instance of current state
      Object.assign({}, action.course) //add new value to it
    ]; //use of spread (...) operator. It means "Take new instance of state array and using object.assign add a new value of course to it to create new state object"
      break;
    default:
      return state;
  }
}
