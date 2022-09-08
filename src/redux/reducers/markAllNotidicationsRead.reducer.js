const allNotificationsReadReducer = (notifications = [], action) => {
  switch (action.type) {
    case "ALL__NOTIFICATIONS__READ":
      return [...action?.payload];
    case "CLEAR__ALL__NOTIFICATIONS__READ":
      return [...action?.payload];
    default:
      return [...notifications];
  }
};

export default allNotificationsReadReducer;
