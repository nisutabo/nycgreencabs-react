const URL = 'http://localhost:3000'


export const getLocations = () => {
  return (dispatch) => {
    return fetch(`${URL}/locations`)
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'GET_LOCATIONS',
        payload: result
      })
    })
  }
}
