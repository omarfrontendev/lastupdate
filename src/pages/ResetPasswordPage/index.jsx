import React from "react";
import FormInput from "../../components/FormInput";
import SubmitBtn from "../../components/SubmitBtn";
import styles from "./.module.scss";
import validators from "../../validators";
import { Form, Field } from "react-final-form";

export default function ResetPasswordPage() {
  const formElements = [
    {
      type: "password",
      icon: "password",
      name: "password",
      placeholder: "Password",
      validate: validators.composeValidators(
        validators.required("Password"),
        validators.minLength("Password", 6)
      ),
    },
    {
      type: "password",
      icon: "password",
      name: "password_confirmation",
      placeholder: "Confirm Password",
      validate: validators.composeValidators(
        validators.required("Password Confirmation"),
        validators.minLength("Password Confirmation", 6)
      ),
    },
  ];

  const onSubmitHandler = async (values) => {
    alert(values);
  };

  return (
    <div className={styles.reset__pass__wrapper}>
      <div className={styles.reset__pass__title}>Reset Password</div>

      <Form onSubmit={onSubmitHandler}>
        {({ handleSubmit, submitting }) => (
          <form
            className={styles.reset__pass__container}
            onSubmit={handleSubmit}
            // className="d-flex flex-column p-4"
            // style={{ rowGap: "20px" }}
          >
            <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
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
            <SubmitBtn solidStyle={true} type="submit" disabled={submitting}>
              Change
            </SubmitBtn>
          </form>
        )}
      </Form>
      {/* <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.reset__pass__container}
      >
        <div className={styles.reset__pass__title}>Reset Password</div>
        <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
          {inputsResource.map((input) => (
            <FormInput
              type={input?.type}
              placeholder={input?.placeholder}
              id={input?.id}
              value={data[input?.id] || ""}
              setValue={setData}
              data={data}
            />
          ))}
        </div>
        <button type="submit" className={styles.submit__btn}>
          Change
        </button>
      </form> */}
    </div>
  );
}

// import React from "react";
// import FormInput from "../../components/FormInput";
// import styles from "./.module.scss";
// import SubmitBtn from "../../components/SubmitBtn";
// import { connect } from "react-redux";
// import validators from "../../validators";

// const mapStateToProps = (state) => state;
// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(function ResetPasswordPage() {
//   const formElements = [
//
//   ];

//   return (
//     <div className={styles.reset__pass__wrapper}>
//       {/* <form
//         onSubmit={(e) => e.preventDefault()}
//         className={styles.reset__pass__container}
//       >
//         <div className={styles.reset__pass__title}>Reset Password</div>
//         <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
//           {inputsResource.map((input) => (
//           <FormInput
//           type={input?.type}
//           placeholder={input?.placeholder}
//           id={input?.id}
//           />
//           ))}
//         </div>
//         <button type="submit" className={styles.submit__btn}>
//           Change
//         </button>
//       </form> */}

//       <div className={styles.reset__pass__container}>
//         <div className={styles.reset__pass__title}>
//           Reset Password
//           <div className={`${styles.reset__pass__inputs} d-flex flex-column`}>
//             <Form onSubmit={onSubmitHandler}>
//               {({ handleSubmit, submitting }) => (
//                 <form
//                   onSubmit={handleSubmit}
//                   className="d-flex flex-column p-4"
//                   style={{ rowGap: "20px" }}
//                 >
//                   {formElements.map((item, i) => (
//                     <Field
//                       key={i}
//                       component={FormInput}
//                       placeholder={item.placeholder}
//                       icon={item.icon}
//                       type={item.type}
//                       name={item.name}
//                       validate={item.validate}
//                     />
//                   ))}
//                   <SubmitBtn
//                     solidStyle={false}
//                     type="submit"
//                     disabled={submitting}
//                   >
//                     Change
//                   </SubmitBtn>
//                 </form>
//               )}
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });
