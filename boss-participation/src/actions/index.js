import axiosWithAuth from "../utils/AxiosWithAuth";

export const getActivities = () => dispatch => {
  dispatch({ type: "GET_ACTIVITIES" });

  axiosWithAuth()
    .get("/activities")
    .then(response => {
      dispatch({ type: "SUCCESS", payload: response.data });
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "FAILURE", payload: "Something went wrong." });
    });
};

export const addActivity = activity => dispatch => {
  dispatch({ type: "GET_CAMPAIGNS" });

  axiosWithAuth()
    .post("/activities", activity)
    .then(response => {
      window.location.href = "/dashboard";
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "FAILURE", payload: "Something went wrong." });
    });
};

export const updateActivity = (activity, id) => dispatch => {
  dispatch({ type: "UPDATING" });

  axiosWithAuth()
    .put(`/activities/${id}`, activity)
    .then(response => {
      dispatch({ type: "SUCCESS", payload: "" });
      window.location.href = "/dashboard";
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "FAILURE", payload: "Something went wrong." });
    });
};

export const deleteActivity = id => dispatch => {
  dispatch({ type: "UPDATING" });

  axiosWithAuth()
    .delete(`/activities/${id}`)
    .then(response => {
      dispatch({ type: "SUCCESS", payload: "" });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: "FAILURE", payload: "Something went wrong." });
    });
};

export const addPoints = points => dispatch => {
  dispatch({ type: "ADD_POINTS", payload: points });
};

export const setUserName = username => dispatch => {
  dispatch({ type: "SET_USERNAME", payload: username });
};

export const setUserInfo = userInfo => dispatch => {
  console.log("userInfo", userInfo);

  dispatch({ type: "SET_USER_INFO", payload: userInfo });
};
