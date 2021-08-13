import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  //setting state objects
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    formError: { password: "" },
    passwordValid: false,
    emailValid: false,
    formValid: false,
  };

  // handlingOnChange sets the current state to the state objects(state.username , state.password,..)
  handlingOnChange = (event) => {
    const a = event.target.name;
    const b = event.target.value;
    this.setState({ [a]: b }, () => {
      this.validation(a, b);
    });
  };

  //validating fields
  validation(a, b) {
    let passwordValid = this.state.password;
    let emailValid = this.state.emailValid;
    let formError = this.state.formError;

    switch (a) {
      case "password":
        passwordValid = b.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        formError.password = passwordValid
          ? ""
          : "must contain atleast 8 characters";
        break;
      case "email":
        emailValid = b.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formError.email = emailValid ? "" : "must contain @ and .";
        break;
      default:
        break;
    }
    this.setState(
      {
        formError: formError,
        passwordValid: passwordValid,
        emailValid: emailValid,
      },
      this.fullValidation
    );
  }

  //validating full form
  fullValidation() {
    this.setState({
      formValid: this.state.passwordValid && this.state.emailValid,
    });
  }

  alertmsg = () => {
    alert("Thank you!! Your information has been submitted.");
  };

  //render function returns a form where all the fields like email, password, username contain
  render() {
    return (
      <div className="form">
        <form onSubmit={this.alertmsg}>
          <h2>Log in</h2>
          <p>First Name:</p>
          <input
            type="text"
            name="firstname"
            placeholder="enter your first name"
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            //reuired field
            required
          />

          <p>Last Name:</p>
          <input
            type="text"
            name="lastname"
            placeholder="enter your lastname"
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            //reuired field
            required
          />

          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            title="email must contain @ and ."
            //reuired field
            required
          />

          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            title="password must contain atleast 1 Uppercase, 1 number,lowercase and 8 characters or more."
            //reuired field
            required
          />
          <br></br>
          {/* submit button is disabled until all the form field validation elements are true. */}
          <button type="submit" disabled={!this.state.formValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
