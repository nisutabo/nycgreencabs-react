export function manageRides (
  state = {
    locations: []
  },
  action
){
  switch(action.type) {
    case 'GET_LOCATIONS':
    return {
      locations: action.payload
    }

  default:
  return state;

  }
}
