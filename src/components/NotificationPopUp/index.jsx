import React, { useRef, useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import { PickALogo } from "../../UI/icons";
import { connect } from "react-redux";
import _ from "lodash";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function NotificationPopUp({ serverResponse }) {
  const ref = useRef();
  useEffect(() => {
    if (!_.isEmpty(serverResponse) && serverResponse.message) {
      new bootstrap.Toast(ref.current).show();
    }
  }, [serverResponse]);
  return (
    <>
      {!_.isEmpty(serverResponse) && (
        <div className="d-none d-lg-block">
          <div
            className="position-fixed bottom-0 end-0 p-2"
            style={{ zIndex: "10001", width: "320px", fontSize: "Rubik" }}
          >
            <div
              ref={ref}
              id="liveToast"
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-bs-delay="2500"
            >
              <div className="toast-header">
                <PickALogo />
                {/* <img src={logo} className="rounded me-auto" alt="logo" /> */}
                <div className="ms-auto">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div
                className={`toast-body text-white bg-${
                  serverResponse.success ? "success" : "danger"
                }`}
              >
                {serverResponse.message}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});
