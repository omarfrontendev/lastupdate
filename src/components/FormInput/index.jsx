import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./.module.scss";
import {
  EmailIcon,
  PasswordIcon,
  UserMobileIcon,
  UserNameIcon,
} from "../../UI/icons";

export default function FormInput({
  placeholder,
  name,
  icon,
  input,
  meta: { touched, error, warning },
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.form__input__wrapper}>
      {touched &&
        ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span className={styles.warning}>{warning}</span>))}
      <div
        className={`${styles.input__control} d-flex align-items-center justify-content-between`}
      >
        <span className={styles.input__icon}>
          {(() => {
            switch (icon) {
              case "user":
                return <UserNameIcon />;
              case "email":
                return <EmailIcon />;
              case "mobile":
                return <UserMobileIcon />;
              case "password":
                return <PasswordIcon />;
              default:
                return null;
            }
          })()}
        </span>

        <input
          {...input}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          type={showPassword ? "text" : input.type}
        />

        {input.type === "password" && (
          <button
            type="button"
            className={styles.show__pass__btn}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? (
              <AiOutlineEye className={styles.pass__icon} />
            ) : (
              <AiOutlineEyeInvisible className={styles.pass__icon} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning },
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );
