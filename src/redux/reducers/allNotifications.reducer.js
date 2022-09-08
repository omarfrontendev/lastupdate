const allNotificationsReducer = (notifications = [], action) => {
  switch (action.type) {
    case "GET__ALL__NOTIFICATIONS":
      return [...action?.payload];
    case "CLEAR__ALL__Notifications":
      return [...action?.payload];
    default:
      return [...notifications];
  }
};

export default allNotificationsReducer;
