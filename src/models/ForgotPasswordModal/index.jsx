import React from "react";
import SubmitBtn from "../../components/SubmitBtn";
import FormInput from "../../components/FormInput";
import validators from "../../validators";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { forgotPassword } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { forgotPassword };

const ForgotPasswordModal = function ({ forgotPassword }) {
  const onSubmitHandler = async (values) => {
    await forgotPassword(values.email);
  };

  return (
    <div className={"forgot__password__area__modal"}>
      <Form onSubmit={onSubmitHandler}>
        {({ handleSubmit, submitting }) => (
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column p-4"
            style={{ rowGap: "20px" }}
          >
            <Field
              component={FormInput}
              placeholder="Email Address"
              icon={"email"}
              type="email"
              name="email"
              validate={validators.composeValidators(
                validators.required("Email")
              )}
            />
            <SubmitBtn solidStyle={false} type="submit" disabled={submitting}>
              Send Reset Password
            </SubmitBtn>
          </form>
        )}
      </Form>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordModal);
