import React, { useState } from "react";
import styles from "../Components/FormValid.module.css";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function FormValid() {
  const [formStatus, setFormStatus] = useState({
    isValid: false,
    showMsg: false,
  });
  const [name, setName] = useState({ val: "", visited: false, hasErr: false });
  const [email, setEmail] = useState({
    val: "",
    visited: false,
    hasErr: false,
  });
  const [adress, setAdress] = useState({
    val: "",
    visited: false,
    hasErr: false,
  });
  //   change handlers
  const nameChangeHandler = (e) => {
    setName({ ...name, val: e.target.value, hasErr: e.target.value === "" });
    setFormStatus({
      ...formStatus,
      showMsg: false,
    });
  };
  const emailChangeHandler = (e) => {
    setEmail({
      ...email,
      val: e.target.value,
      hasErr: !validateEmail(e.target.value),
    });
    setFormStatus({
      ...formStatus,
      showMsg: false,
    });
  };
  const adressChangeHandler = (e) => {
    setAdress({
      ...adress,
      val: e.target.value,
      hasErr: e.target.value === "",
    });
    setFormStatus({
      ...formStatus,
      showMsg: false,
    });
  };

  //focus handlers
  const nameFocusHandler = () => {
    setName({ ...name, visited: true });
  };

  const emailFocusHandler = () => {
    setEmail({ ...email, visited: true });
  };

  const adressFocusHandler = () => {
    setAdress({ ...adress, visited: true });
  };

  const validationHandler = () => {
    if (name.val === "" && name.visited) {
      setName({ ...name, hasErr: true });
    }
    if (!validateEmail(email.val) && email.visited) {
      setEmail({ ...email, hasErr: true });
    }
    if (adress.val === "" && adress.visited) {
      setAdress({ ...adress, hasErr: true });
    }

    setFormStatus({
      isValid: !name.hasErr && !email.hasErr && !adress.hasErr,
      showMsg: true,
    });
  };
  return (
    <form autoComplete="off">
      <div className={styles.row}>
        <div className={`${styles.inputRow} formRow`}>
          <label
            htmlFor="first_name"
            className={name.hasErr ? styles.hasError : ""}
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            value={name.val}
            onChange={nameChangeHandler}
            onFocus={nameFocusHandler}
          />
        </div>
        <div className={`${styles.inputRow} formRow`}>
          <label
            htmlFor="email"
            className={email.hasErr ? styles.hasError : ""}
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            value={email.val}
            onChange={emailChangeHandler}
            onFocus={emailFocusHandler}
          />
        </div>
        <div className={`${styles.inputRow} formRow`}>
          <label
            htmlFor="adress"
            className={adress.hasErr ? styles.hasError : ""}
          >
            Address
          </label>
          <textarea
            id="adress"
            className="materialize-textarea"
            value={adress.val}
            onChange={adressChangeHandler}
            onFocus={adressFocusHandler}
          ></textarea>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.btn} onClick={validationHandler}>
          Validate
        </div>
        {formStatus.isValid && formStatus.showMsg && <div>Form is valid</div>}
        {!formStatus.isValid && formStatus.showMsg && (
          <div>Form has errors </div>
        )}
      </div>
    </form>
  );
}

export default FormValid;
