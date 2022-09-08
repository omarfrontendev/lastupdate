import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import bootstrap from "bootstrap/dist/js/bootstrap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export const AuthGuard = ({ loggedUser, children }) => {
  const [loaded, setloaded] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setloaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      if (isEmpty(loggedUser)) {
        if (!opened) {
          new bootstrap.Modal(
            document.getElementById("member__area__modal"),
            {}
          ).show();
          setOpened(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  if (!isEmpty(loggedUser)) {
    return children;
    // } else {
    // return <>YOU HAVE TO LOGIN FIRST</>;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
