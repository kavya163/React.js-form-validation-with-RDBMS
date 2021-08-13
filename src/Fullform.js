import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  //setting state objects
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    formError: { firstname: "", lastname: "", email: "", password: "" },
    firstNameValid: false,
    lastNameValid: false,
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
    let firstNameValid = this.state.firstname;
    let lastNameValid = this.state.lastname;
    let passwordValid = this.state.password;
    let emailValid = this.state.emailValid;
    let formError = this.state.formError;

    switch (a) {
      case "firstname":
        firstNameValid = b.length > 1;
        formError.firstname = firstNameValid
          ? ""
          : "Firstname should contain atleast 2 characters";
        console.log(b);
        break;
      case "lastname":
        lastNameValid = b.length >0;
        formError.lastname = lastNameValid
          ? ""
          : "Lastname should be filled out";
        break;
      case "password":
        passwordValid = b.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        formError.password = passwordValid
          ? ""
          : "Password must contain a uppercase, lowercase, number and atleast 8 characters";
        console.log(b);
        break;
      case "email":
        emailValid =
          b.length > 1 && b.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formError.email = emailValid ? "" : "Email must contain @ and .";
        break;
      default:
        break;
    }
    this.setState(
      {
        formError: formError,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        passwordValid: passwordValid,
        emailValid: emailValid,
      },
      this.fullValidation
    );
  }

  //validating full form
  // fullValidation() {
  //   this.setState({
  //     formValid:
  //       this.state.FirstNameValid &&
  //       this.state.LastNameValid &&
  //       this.state.passwordValid &&
  //       this.state.emailValid,
  //   });
  // }


  alertmsg = () => {
    alert("Thank you!! Your information has been submitted.");
  };

  //render function returns a form where all the fields like email, password, username contain
  render() {
    return (
      <div className="form">
        <form onSubmit={this.alertmsg}>
          <h2>Welcome!</h2>
          <p>First Name:</p>
          <input
            type="text"
            name="firstname"
            placeholder="enter your first name"
            value={this.state.firstname}
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            //reuired field
            required
          />
          {this.state.formError.firstname && (
            <p>{this.state.formError.firstname}</p>
          )}

          <p>Last Name:</p>
          <input
            type="text"
            name="lastname"
            placeholder="enter your lastname"
            value={this.state.lastname}
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            //reuired field
            required
          />
          {this.state.formError.lastname && (
            <p>{this.state.formError.lastname}</p>
          )}

          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={this.state.email}
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            title="email must contain @ and ."
            //reuired field
            required
          />
          {this.state.formError.email && <p>{this.state.formError.email}</p>}

          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={this.state.password}
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            title="password must contain atleast 1 Uppercase, 1 number,lowercase and 8 characters or more."
            //reuired field
            required
          />

          {this.state.formError.password && (
            <p>{this.state.formError.password}</p>
          )}
          <br></br>
          {/* submit button is disabled until all the form field validation elements are true. */}
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
