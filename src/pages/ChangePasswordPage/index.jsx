import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import styles from "./.module.scss";
import LoadWrapper from "../../components/LoadWrapper";
import validators from "../../validators";
import SubmitBtn from "../../components/SubmitBtn";
import FormInput from "../../components/FormInput";
import { Form, Field } from "react-final-form";

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

const formElements = [
  {
    type: "password",
    icon: "password",
    name: "password",
    placeholder: "Current Password",
    validate: validators.composeValidators(
      validators.required("Password"),
      validators.minLength("Password", 6)
    ),
  },
  {
    type: "password",
    icon: "password",
    name: "new_password",
    placeholder: "New Password",
    validate: validators.composeValidators(
      validators.required("New Password"),
      validators.minLength("New Password", 6)
    ),
  },
  {
    type: "password",
    icon: "password",
    name: "password_confirm",
    placeholder: "Confirm Password",
    validate: validators.composeValidators(
      validators.required("Password Confirmation"),
      validators.minLength("Password Confirmation", 6)
    ),
  },
];

export const ChangePasswordPage = (props) => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = (values) => alert(values);

  return (
    <div className={styles.change__password__page}>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <Helmet>
            <title>Pick • a | Change Password</title>
          </Helmet>
          <div className={styles.form__wrapper}>
            <p className={styles.form__title}>Change Password</p>
            <Form onSubmit={handleSubmit}>
              {({ handleSubmit, submitting }) => (
                <form
                  style={{ maxWidth: "527px" }}
                  id="user__change__pass__form"
                  //   className={styles.form__sign}
                  onSubmit={handleSubmit}
                >
                  <div
                    className={`${styles.inputs__container} d-flex flex-column`}
                  >
                    {formElements.map((item, i) => (
                      <Field
                        key={i}
                        component={FormInput}
                        placeholder={item.placeholder}
                        icon={item.icon}
                        type={item.type}
                        name={item.name}
                        validate={item.validate}
                      />
                    ))}
                  </div>
                  <div className="pt-4">
                    <SubmitBtn
                      smBorder={true}
                      solidStyle={true}
                      type="submit"
                      disabled={submitting}
                    >
                      Change
                    </SubmitBtn>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);
