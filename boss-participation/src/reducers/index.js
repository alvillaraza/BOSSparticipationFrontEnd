const initialState = {
  isLoading: false,
  error: "",
  activities: [],
  isUpdating: false,
  username: "",
  userInformation: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return {
        ...state,
        isLoading: true
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        activities: action.payload,
        isUpdating: false
      };

    case "FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isUpdating: false
      };

    case "UPDATING":
      return {
        ...state,
        isUpdating: true
      };

    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      };

    case "SET_USER_INFO":
      console.log("3. SET_USER_INFO", action.type, action.payload);
      return {
        ...state,
        userInformation: action.payload
      };

    default:
      return state;
  }
};
