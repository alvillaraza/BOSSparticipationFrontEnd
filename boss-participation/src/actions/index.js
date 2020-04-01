import axiosWithAuth from '../utils/AxiosWithAuth';

export const getActivities = () => dispatch => {
  dispatch({ type: 'GET_ACTIVITIES' });

  axiosWithAuth().get('/activities')
    .then(response => {
      dispatch({ type: 'SUCCESS', payload: response.data });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error)
      dispatch({type: 'FAILURE', payload: 'Something went wrong.'})
  })
}

export const addActivity = activity => dispatch => {
  dispatch({ type: 'GET_CAMPAIGNS' });
  
  axiosWithAuth().post('/activities', activity)
    .then(response => {
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.log(error)
      dispatch({type: 'FAILURE', payload: 'Something went wrong.'})
  })
}