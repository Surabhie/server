const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')



var app = express();



/* BaseUrl:localhost:3000/api/v1/users/ */

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, email, password , mobileNumber.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
         * @apiGroup users
         * @apiVersion  1.0.0
         * @api {post} /api/v1/users/signup api for Registering User.
         *
         * @apiParam {string} firstName First Name of the user. (body params) (required)
         * @apiParam {string} lastname Last Name of the user. (body params) (required)
         * @apiParam {string} userName userName of the user. (body params) (required)
         
         * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
         
         * @apiParam {string} email email of the user. (body params) (required)
         * @apiParam {string} password password of the user. (body params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
    
    
    {
        "error": false,
        "message": "User created",
        "status": 200,
        "data": {
            "userId": "4WnDKcs-",
            "firstName": "Tara",
            "lastName": "Sharma",
            "mobileNumber": "985645555",
            "status": "offline",
            "email": "sharmatara651@gmail.com",
            "validationToken": "",
            "emailVerified": "No",
            "createdOn": "2019-09-21T08:26:54.000Z",
            "_id": "5d85decea0c3fc24b87dac0f",
            "__v": 0
        }
    }
    
    */

    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
{
    "error": false,
    "message": "Login Successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImxnZ09CUU5JIiwiaWF0IjoxNTcwNjA4NTI3MDg3LCJleHAiOjE1NzA2OTQ5MjcsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6Ik1lZXROZXN0QXBwIiwiZGF0YSI6eyJ1c2VySWQiOiJLSXZUc0lYYiIsImZpcnN0TmFtZSI6Im5pa2lzaGEiLCJsYXN0TmFtZSI6Im1pdHRhbCIsIm1vYmlsZU51bWJlciI6IiIsInN0YXR1cyI6Im9mZmxpbmUiLCJlbWFpbCI6Im5pa2lzaGFAZ21haWwuY29tIiwidmFsaWRhdGlvblRva2VuIjoiIiwiZW1haWxWZXJpZmllZCI6Ik5vIn19.mV6-iDi2JrSGn_sGiShsO9xGxKCeYITfEiIoAx06oSg",
        "userDetails": {
            "userId": "KIvTsIXb",
            "firstName": "nikisha",
            "lastName": "mittal",
            "mobileNumber": "",
            "status": "offline",
            "email": "nikisha@gmail.com",
            "validationToken": "",
            "emailVerified": "No"
        }
    }
}

*/

    // params: userId.
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);
    /**
       * @apiGroup users
       * @apiVersion  1.0.0
       * @api {put} /api/v1/users/:userId/edit api for Updating User Details.
       *
       * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
       * @apiParam {string} userId userId of the user. (query params) (required)
       * @apiParam {string} firstName First Name of the user. (body params) (optional)
       * @apiParam {string} lastname Last Name of the user. (body params) (optional)
       * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (optional)
       *
       * @apiSuccess {object} myResponse shows error status, message, http status code, result.
       * 
       * @apiSuccessExample {object} Success-Response:
      
      {
      "error": false,
      "message": "User details Updated",
      "status": 200,
      "data": "None"
  }
  Then in view all response changed as below
  
  {
      "error": false,
      "message": "All User Details Found",
      "status": 200,
      "data": [
          {
              "userId": "JFrVCJxJ",
              "firstName": "Mihika",
              "lastName": "Shah",
              "mobileNumber": "985645666",
              "status": "offline",
              "password": "rohitsharma02*",
              "email": "rohits021988@gmail.com",
              "validationToken": "",
              "emailVerified": "No",
              "createdOn": "2019-09-20T16:51:41.000Z"
          }
      ]
  }
      
      
      
      
      
      
      
      
      
      */





    // params: userId.
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/delete api to Delete User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:

{
    "error": false,
    "message": "Deleted the user successfully",
    "status": 200,
    "data": {
        "userId": "3OKdMQSG",
        "firstName": "Surabhie",
        "lastName": "undefined",
        "mobileNumber": "",
        "status": "offline",
        "password": "",
        "email": "guesss18@gmail.com",
        "validationToken": "",
        "emailVerified": "No",
        "createdOn": "2019-09-20T17:09:31.000Z",
        "_id": "5d8507cbbaad8d2f34676d08",
        "__v": 0
    }
} */









    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);

    /**
        * @apiGroup users
        * @apiVersion  1.0.0
        * @api {get} /api/v1/users/view/all api for Getting all users.
        *
        * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
        * 
        * @apiSuccess {object} myResponse shows error status, message, http status code, result.
        * 
        * @apiSuccessExample {object} Success-Response:
   
   
   {
       "error": false,
       "message": "All User Details Found",
       "status": 200,
       "data": [
           {
               "userId": "4WnDKcs-",
               "firstName": "Tara",
               "lastName": "Sharma",
               "mobileNumber": "985645555",
               "status": "offline",
               "password": "$2b$10$Gt.5ol2vSXwCNAxlz0e4eOq3pu62XZgoTAVMpr0qs.1RBUQwMfkp2",
               "email": "sharmatara651@gmail.com",
               "validationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IjlpRTR1Xzd2YiIsImlhdCI6MTU2OTE1NzMxOTY5MSwiZXhwIjoxNTY5MjQzNzE5LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJNZWV0TmVzdEFwcCIsImRhdGEiOnsidXNlcklkIjoiNFduREtjcy0iLCJmaXJzdE5hbWUiOiJUYXJhIiwibGFzdE5hbWUiOiJTaGFybWEiLCJtb2JpbGVOdW1iZXIiOiI5ODU2NDU1NTUiLCJzdGF0dXMiOiJvZmZsaW5lIiwicGFzc3dvcmQiOiIkMmIkMTAkR3QuNW9sMnZTWHdDTkF4bHowZTRlT3EzcHU2MlhaZ29UQVZNcHIwcXMuMVJCVVF3TWZrcDIiLCJlbWFpbCI6InNoYXJtYXRhcmE2NTFAZ21haWwuY29tIiwidmFsaWRhdGlvblRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnFkM1JwWkNJNklrUjRkMlJyY0Vwaklpd2lhV0YwSWpveE5UWTVNVFUzTWpFME5URTBMQ0psZUhBaU9qRTFOamt5TkRNMk1UUXNJbk4xWWlJNkltRjFkR2hVYjJ0bGJpSXNJbWx6Y3lJNklrMWxaWFJPWlhOMFFYQndJaXdpWkdGMFlTSTZleUoxYzJWeVNXUWlPaUkwVjI1RVMyTnpMU0lzSW1acGNuTjBUbUZ0WlNJNklsUmhjbUVpTENKc1lYTjBUbUZ0WlNJNklsTm9ZWEp0WVNJc0ltMXZZbWxzWlU1MWJXSmxjaUk2SWprNE5UWTBOVFUxTlNJc0luTjBZWFIxY3lJNkltOW1abXhwYm1VaUxDSndZWE56ZDI5eVpDSTZJaVF5WWlReE1DUkhkQzQxYjJ3eWRsTllkME5PUVhoc2VqQmxOR1ZQY1ROd2RUWXlXRnBuYjFSQlZrMXdjakJ4Y3k0eFVrSlZVWGROWm10d01pSXNJbVZ0WVdsc0lqb2ljMmhoY20xaGRHRnlZVFkxTVVCbmJXRnBiQzVqYjIwaUxDSjJZV3hwWkdGMGFXOXVWRzlyWlc0aU9pSWlMQ0psYldGcGJGWmxjbWxtYVdWa0lqb2lUbThpTENKamNtVmhkR1ZrVDI0aU9pSXlNREU1TFRBNUxUSXhWREE0T2pJMk9qVTBMakF3TUZvaUxDSmZhV1FpT2lJMVpEZzFaR1ZqWldFd1l6Tm1ZekkwWWpnM1pHRmpNR1lpTENKZlgzWWlPakI5ZlEuU2ZNZHBxWnZWZ0VwS2c2Yk1xUG9EeVlqUXduZVZncEFqQW5WQ0V3NEJ0ayIsImVtYWlsVmVyaWZpZWQiOiJObyIsImNyZWF0ZWRPbiI6IjIwMTktMDktMjFUMDg6MjY6NTQuMDAwWiIsIl9pZCI6IjVkODVkZWNlYTBjM2ZjMjRiODdkYWMwZiIsIl9fdiI6MH19.ND5yHEWJ8XuA5do0sPZbzKDGvKj3HvgD9Zk-slSCc8U",
               "emailVerified": "No",
               "createdOn": "2019-09-21T08:26:54.000Z"
           },
           {
               "userId": "u28YkBXN",
               "firstName": "Riya",
               "lastName": "Verma",
               "mobileNumber": "9856458885",
               "status": "offline",
               "password": "$2b$10$IVc5iJ.7ahjQ.4D.1Kp31uJUUV6fZA9HzF5i.QHCpIFoKAPCHrUtG",
               "email": "rohits021988@gmail.com",
               "validationToken": "",
               "emailVerified": "No",
               "createdOn": "2019-09-21T13:51:15.000Z"
           }
       ] ..
   
   
   
   {
       "error": true,
       "message": "No User Found",
       "status": 404,
       "data": null
   }
   
   
   }*/



    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    /**
        * @apiGroup users
        * @apiVersion  1.0.0
        * @api {get} /api/v1/users/:userId/details api for getting user details.
        *
        * @apiParam {string} userId userId of the user. (query params) (required)
        * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
   
        * @apiSuccess {object} myResponse shows error status, message, http status code, result.
        * 
        * @apiSuccessExample {object} Success-Response:
    {
       "error": false,
       "message": "User Details Found",
       "status": 200,
       "data": {
           "userId": "KIvTsIXb",
           "firstName": "nikisha",
           "lastName": "mittal",
           "mobileNumber": "",
           "status": "offline",
           "email": "nikisha@gmail.com",
           "validationToken": "",
           "emailVerified": "No",
           "createdOn": "2019-10-08T18:10:05.000Z"
       }
   }
   } */




    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
    /**
   * @apiGroup users
   * @apiVersion  1.0.0
   * @api {post} /api/v1/users/:userId/logout api to logout from application.
   *
   * @apiParam {string} userId userId of the user. (query params) (required)
   * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
     {
  "error": false,
  "message": "Logged Out Successfully",
  "status": 200,
  "data": null
}
  */


    /* BaseUrl:localhost:3000/api/v1/users/socialSignup */
    app.post(`${baseUrl}/socialSignup`, userController.socialSignIn);



    // params: email.
    app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
       {
    "error": false,
    "message": "Instruction for password reset has been sent successfully",
    "status": 200,
    "data": "None"
  }    
    */

    // params: validationToken,password.
    app.put(`${baseUrl}/updatePassword`, userController.updatePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */

    // params: userId, oldPassword,newPassword.
    app.post(`${baseUrl}/changePassword`, auth.isAuthorized, userController.changePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/changePassword api for Changing Password.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} oldPassword old Password of the user. (body params) (required)
     * @apiParam {string} newPassword new Password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
        }
    */



}


