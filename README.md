# React.js-form-validation-with-RDBMS

## Introduction

A React.js application hosted on AWS Amplify with AWS RDS as the database. In this application, user information is captured, validated, and sent to AWS via REST API end point Gateway to process the user submitted request, and then creates an user entry in the database. AWS Lambda is invoked by the AWS API Gateway, which invokes a connection to the database to store the user information and creates a response which is then sent back to the web browser. 

Steps:

1. User completes a form .
2. Submitted data is validated on client side.
3. Verified data is sent to AWS API Gateway via REST API end point.
4. AWS Lambda function is invoked.
5. Databsase conenction is created and data from the response is processed and stored in the database.
6. Response from Lambda is send back to browser.


### You can view output here --> https://main.d2zby7bmb7wakv.amplifyapp.com/


## Testcases:
### Positive:
* (First name.isValid) && (Last name.isValid) && (E-mail.isValid) &&(Password.isValid) == true

### Negative:
* (First name.isNull) && (Last name.isNull) && (E-mail.isNull) &&(Password.isNull) == false
* (First name.isValid) && (Last name.isNull) && (E-mail.isNull) &&(Password.isNull) == false
* (First name.isNull) && (Last name.isValid) && (E-mail.isNull) &&(Password.isNull) == false
* (First name.isNull) && (Last name.isNull) && (E-mail.isValid) &&(Password.isNull) == false
* (First name.isNull) && (Last name.isNull) && (E-mail.isNull) &&(Password.isValid) == false
* (First name.isValid) && (Last name.isValid) && (E-mail.isNull) &&(Password.isNull) == false
* (First name.isValid) && (Last name.isNull) && (E-mail.isValid) &&(Password.isNull) == false
* (First name.isValid) && (Last name.isNull) && (E-mail.isNull) &&(Password.isValid) == false
* (First name.isNull) && (Last name.isValid) && (E-mail.isValid) &&(Password.isNull) == false
* (First name.isNull) && (Last name.isValid) && (E-mail.isNull) &&(Password.isValid) == false
* (First name.isNull) && (Last name.isNull) && (E-mail.isValid) &&(Password.isValid) == false
* (First name.isValid) && (Last name.isValid) && (E-mail.isValid) &&(Password.isNull) == false
* (First name.isValid) && (Last name.isValid) && (E-mail.isNull) &&(Password.isValid) == false

 
 We will cover the unit and integration testing. 
 
## UNIT TESTING:
Unit testing is where the small unit of a program (a function or procedure) is tested. It may or may not take some input parameters and may or may not return some values.

The code generally has the following methods:
- handlingOnChange()
- validation(a, b)
- handleButtonClicked()
- render()


For example, Consider handlingOnchange() function of the class Form, which sets the current state to the state objects(state. username, state. password,..).


<img width="333" alt="Screen Shot 2021-08-13 at 12 49 23 PM" src="https://user-images.githubusercontent.com/67653721/129411367-9d9ec3c9-ce61-407a-b9b6-8aa3b41e0a45.png">


In Unit testing, 
1. Check whether the variables are defined appropriately and adequately stored. 
2. Then we should also check whether the constants are stored in their specific path. 

Consider the validation(a, b) function of the class Form, which checks the regex validation for every field and returns the error.

<img width="498" alt="Screen Shot 2021-08-13 at 12 51 17 PM" src="https://user-images.githubusercontent.com/67653721/129411593-b5cea245-6c9f-49a3-be02-5f48782c0bda.png">

In Unit testing,
1. Our motive should be to check whether the switch cases and exception conditions work. 
2. Then we should also check multiple error messages work when multiple conditions occur.


Consider, handleButtonClicked() function of the class Form, which checks the length of each field and returns an error if the length is zero.
<img width="500" alt="Screen Shot 2021-08-13 at 12 53 28 PM" src="https://user-images.githubusercontent.com/67653721/129411868-039f591a-3ed5-416d-8618-1eb147a7e8e9.png">


In Unit testing,
1. Our motive should be to check whether the if cases and exception conditions work correctly.
2. To also check, does it returns the specific error.
3. Then we should also check multiple error messages work when multiple conditions occur.

Consider, render() function of the class Form, which contains the main form.
<img width="470" alt="Screen Shot 2021-08-13 at 12 54 52 PM" src="https://user-images.githubusercontent.com/67653721/129411906-944850f1-99ca-46f9-8c90-92ab1c0db410.png">

In Unit testing,
1. Our motive should be to check whether the onChange attribute calls the handlingOnChange function.
2. To check whether the error message displayed correctly
3. Then we should also check after submit button is enabled, appears a thank you page or not.



## INTEGRATION TESTING:
Integration testing is where individual units are tested together to check whether all the units interact as expected.

* Verify mandatory input parameters
* Verify optional input parameters
* Create a new user account.
* Verify the user is entering their first name.
* Verify the user is entering their last name.
* Verify the user is entering their email address.
* Verify the user is entering their password.
* Verify the user is creating a valid first name.
* Verify the user is creating a valid last name.
* Verify the user is creating a strong password.
* Verify the user is creating a valid email.
* Check whether it throws an exception or errors for specific fields.
* Check if the data is appropriately structured.
* Check if data fields have the correct format.
* Check if the values of computed fields are correctly calculated.
* Check if null values are accepted where they should be not.
* Check if data is written correctly to the table when the user creates it through the app (e.g., creates/ updates profile info).
* Check app behavior when the database server is not working.
