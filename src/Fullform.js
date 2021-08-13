import React, { Component } from "react";
import "./form.css";
import axios from "axios";

class Form extends Component {
  //setting state objects
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    formError: { firstname: "", lastname: "", email: "", password: "" },
    firstNameValid: true,
    lastNameValid: true,
    passwordValid: true,
    emailValid: true,
    formValid: true,
    formSubmission: false,
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
        lastNameValid = b.length > 0;
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
  }

  alertmsg = () => {
    const api =
      "hhttps://b9f9p3sbll.execute-api.us-east-1.amazonaws.com/development";
    const data = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .get(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Thanks for submitting your information");
  };

  handleButtonClicked() {
    var fname = true;
    var lname = true;
    var eError = true;
    var pError = true;

    var fSubmit = this.state.formSubmission;

    if (this.state.lastname.length <= 0) {
      console.log("Inside Last Name");
      lname = false;
      fSubmit = false;
    }
    if (this.state.firstname.length <= 0) {
      console.log("Inside First Name");
      fname = false;
      fSubmit = false;
    }
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      eError = false;
      fSubmit = false;
    }
    if (
      !this.state.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    ) {
      pError = false;
      fSubmit = false;
    }

    this.setState({
      firstNameValid: fname,
      lastNameValid: lname,
      emailValid: eError,
      passwordValid: pError,
      formError: {
        firstname: fname ? "" : "Please enter valid First Name",
        lastname: lname ? "" : "Please enter valid Last Name",
        email: eError ? "" : "Please check your Email",
        password: pError ? "" : "Please check your Password",
      },
      formSubmission: fSubmit,
    });
  }

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
          {this.state.firstNameValid ? null : (
            <p>{this.state.formError.firstname}</p>
          )}

          <p>Last Name:</p>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            value={this.state.lastname}
            //when the boxfield gets triggered it calls the handlingOnchange
            onChange={this.handlingOnChange}
            //reuired field
            required
          />
          {this.state.lastNameValid ? null : (
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
          <button
            type="submit"
            onClick={this.handleButtonClicked.bind(this)}
            disabled={this.state.formSubmission}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
