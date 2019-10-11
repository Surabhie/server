const express = require('express');
const router = express.Router();
const issueController = require("./../controllers/issueController");
const notificationController = require("../controllers/notificationController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
const multer = require('./../middlewares/multer');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issue`;


    app.post(`${baseUrl}/create`, multer.upload.single('image'), issueController.createIssue);
    /**
    * @api {post} /api/v1/issue/create Create issue
    * @apiVersion 0.0.1
    * @apiGroup issue
    *
    * @apiParam {String} title Title of the issue. (body) (required)
    * @apiParam {String} status Status of the issue. (body) (required)
    * @apiParam {Array} reporter Array containing UserName and UserId of user. (body) (required)
    * @apiParam {String} description Description of issue. (body) (required)
    * @apiParam {Array} assignee Array containing UserName and UserId of user. (body) (required)
    * @apiParam {String} screenshot The Screenshot of issue. (file) (required)
    *
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
    *		"error": false,
    *		"message": "Issue Created successfully",
    *		"status": 200,
    *		"data":[
    *                {
    *                    "title": "String",
    *                    "createdOn": "Date",
    *                    "status": "String",
    *                    "reporter": Object.type(Array),
    *                    "assignee": Object.type(Array),
    *                    "description": "String",
    *                    "screenshot": "String",
    *                }
    *               ]
    *   }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed to create new Issue",
    *   "status": 500,
    *   "data": null
    * }
    */

    app.get(`${baseUrl}/all`, auth.isAuthorized, issueController.getAllIssue);
    /**
 * @api {get} /api/v1/issue/all Get all issue
 * @apiVersion 0.0.1
 * @apiGroup issue
 *
 * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
 * @apiParam {String} pageIndex The Pageindex the page number. (Send pageIndex as query params)
 * @apiParam {String} pageSize The Pagesize for no of results per page. (Send pageSize as query params)
 * @apiParam {String} sort The Sort for Sortby and 1 or -1 for sort order. (Send sort as query params)
 * 
 * @apiSuccessExample {json} Success-Response:
 *    
 *   {
   "error": false,
   "message": "All Issue Details Found",
   "status": 200,
   "data": [
       {
           "title": "Error fix",
           "status": "backlog",
           "reporter": [
               {
                   "name": "Tara Sharma",
                   "userId": "4WnDKcs-"
               }
           ],
           "description": "Fix the bug",
           "screenshot": "1569354469798_500.jpg",
           "assignee": [
               {
                   "name": "Riya Verma",
                   "userId": "u28YkBXN"
               }
           ],
           "watching": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               },
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "comments": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t",
                   "comment": "Look into the issue asap"
               }
           ],
           "createdOn": "2019-09-24T19:47:49.000Z",
           "modifiedOn": "2019-09-24T14:35:35.969Z",
           "issueId": "jv-YZrcN"
       },
       {
           "title": "Check issue",
           "status": "in-test",
           "reporter": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               }
           ],
           "description": "Check the issue properly. And solve it soon.",
           "screenshot": "1570120488009_bg.jpg",
           "assignee": [
               {
                   "name": "tara sharma",
                   "userId": "8t2o2Dlk"
               }
           ],
           "watching": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "comments": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a",
                   "comment": "This is a bug"
               },
               {
                   "name": "Tara Sharma",
                   "userId": "4WnDKcs-",
                   "comment": "Okay ,let me check and revert."
               }
           ],
           "createdOn": "2019-09-25T20:29:40.000Z",
           "modifiedOn": "2019-09-25T17:32:55.722Z",
           "issueId": "stp2C3NZ"
       },
       {
           "title": "Bug fixer",
           "status": "in-progress",
           "reporter": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "description": "<blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><b>Bug causes error.</b>Record bugs easily, and track them based on desired criteria. Create custom views for your issue tracker tool so as to focus on bugs that are the most time sensitive. See how many bugs have been logged, if they've been resolved, and more with reports.</blockquote>",
           "screenshot": "1569834620269_fix.jpg",
           "assignee": null,
           "watching": [],
           "comments": [
               {
                   "name": "surabhie j",
                   "userId": "JKQYk28D",
                   "comment": "Looking into the issue"
               }
           ],
           "createdOn": "2019-09-30T09:10:20.000Z",
           "modifiedOn": "2019-09-30T08:38:49.827Z",
           "issueId": "bvrE7RgQ"
       },
       {
           "title": "Lets fix",
           "status": "in-progress",
           "reporter": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               }
           ],
           "description": "Tough bug",
           "screenshot": "1569869596226_bug.jpg",
           "assignee": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "watching": [
               {
                   "name": "surabhie j",
                   "userId": "JKQYk28D"
               }
           ],
           "comments": [],
           "createdOn": "2019-09-30T18:53:16.000Z",
           "modifiedOn": "2019-09-30T18:16:56.836Z",
           "issueId": "vx4HhPCD"
       },
       {
           "title": "Trial Test",
           "status": "in-test",
           "reporter": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               }
           ],
           "description": "Description is a trial",
           "screenshot": "1570135576020_fixed.jpg",
           "assignee": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "watching": [],
           "comments": [],
           "createdOn": "2019-10-03T20:46:16.000Z",
           "modifiedOn": "2019-10-03T15:55:00.921Z",
           "issueId": "8SxcwFl8"
       },
       {
           "title": "Page Trial",
           "status": "in-progress",
           "reporter": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               }
           ],
           "description": "Page size trial",
           "screenshot": "1570390066384_stars.png",
           "assignee": [
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "watching": [],
           "comments": [],
           "createdOn": "2019-10-06T19:27:46.000Z",
           "modifiedOn": "2019-10-06T10:26:36.278Z",
           "issueId": "C2-qVAzg"
       }
   ],
   "count": 6
}
 * @apiErrorExample {json} Error-Response:
 *
 * {
 *   "error": true,
 *   "message": "Failed To Find Issue Details",
 *   "status": 500,
 *   "data": null
 * }
 */

    app.get(`${baseUrl}/:description/search`, auth.isAuthorized, issueController.searchIssue);
    /**
      * @api {get} /api/v1/issue/:description/search Search issue
      * @apiVersion 0.0.1
      * @apiGroup issue
      *
      * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
      * @apiParam {String} description The String or part of string that is to be find. (params)
      * 
      * @apiSuccessExample {json} Success-Response:
      *    
      *   {
        "error": false,
        "message": "All Issue Details Found",
        "status": 200,
        "data": [
            {
                "title": "Bug Issue in the Laptop",
                "status": "in-progress",
                "reporter": [
                    {
                        "name": "mukesh shah",
                        "userId": "Fh2Q5kGi"
                    }
                ],
                "description": "Laptop not working due to slow processing.",
                "screenshot": "1570560952753_Background.jpg",
                "assignee": [
                    {
                        "name": "nikisha mittal",
                        "userId": "KIvTsIXb"
                    }
                ],
                "watching": [
                    {
                        "name": "Surabhie undefined",
                        "userId": "1MuZH8sb"
                    }
                ],
                "comments": [
                    {
                        "name": "Surabhie undefined",
                        "userId": "1MuZH8sb",
                        "comment": "Hello Nikisha , I also looked into this issue. let me know if you need any help."
                    },
                    {
                        "name": "mukesh shah",
                        "userId": "Fh2Q5kGi",
                        "comment": "Yes,please look into the issue asap"
                    },
                    {
                        "name": "Surabhie undefined",
                        "userId": "1MuZH8sb",
                        "comment": "Surely ,Mukesh we are looking into this .Dont worry .."
                    }
                ],
                "createdOn": "2019-10-08T18:55:52.000Z",
                "modifiedOn": "2019-10-08T14:08:01.242Z",
                "issueId": "97jUzDim"
            }
        ],
        "count": 2
    }
      * @apiErrorExample {json} Error-Response:
      *
      * {
      *   "error": true,
      *   "message": "Failed To Find Issue Details",
      *   "status": 500,
      *   "data": null
      * }
      */


    app.get(`${baseUrl}/:issueId/view`, auth.isAuthorized, issueController.getIssueDetailsById);
    /**
  * @api {get} /api/v1/issue/:issueId/view Get issue by Id
  * @apiVersion 0.0.1
  * @apiGroup issue
  *
  * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
  * @apiParam {String} issueId The issueId of the issue. (params)
  * 
  * @apiSuccessExample {json} Success-Response:
  *  {
    "error": false,
    "message": "Issue Details Found",
    "status": 200,
    "data": {
        "title": "Bug Issue in the Laptop",
        "status": "in-progress",
        "reporter": [
            {
                "name": "mukesh shah",
                "userId": "Fh2Q5kGi"
            }
        ],
        "description": "Laptop not working due to slow processing.",
        "screenshot": "1570560952753_Background.jpg",
        "assignee": [
            {
                "name": "nikisha mittal",
                "userId": "KIvTsIXb"
            }
        ],
        "watching": [
            {
                "name": "Surabhie undefined",
                "userId": "1MuZH8sb"
            }
        ],
        "comments": [
            {
                "name": "Surabhie undefined",
                "userId": "1MuZH8sb",
                "comment": "Hello Nikisha , I also looked into this issue. let me know if you need any help."
            },
            {
                "name": "mukesh shah",
                "userId": "Fh2Q5kGi",
                "comment": "Yes,please look into the issue asap"
            },
            {
                "name": "Surabhie undefined",
                "userId": "1MuZH8sb",
                "comment": "Surely ,Mukesh we are looking into this .Dont worry .."
            }
        ],
        "createdOn": "2019-10-08T18:55:52.000Z",
        "modifiedOn": "2019-10-08T14:08:01.242Z",
        "issueId": "97jUzDim"
    }
}
  * @apiErrorExample {json} Error-Response:
  *
  * {
  *   "error": true,
  *   "message": "Failed To Find Issue Details",
  *   "status": 500,
  *   "data": null
  * }
  */


    app.post(`${baseUrl}/:issueId/addComment`, auth.isAuthorized, issueController.addComment);

    /**
    * @api {post} /api/v1/issue/:issueId/addComment Add comment
    * @apiVersion 0.0.1
    * @apiGroup issue
    *
    * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {String} issueId The issueId of the issue. (params)
    * @apiParam {Array} comment The Comment array containing UserName, UserId and Comment. (body)
    * 
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
    *		"error": false,
    *		"message": "Successfully Posted comment",
    *		"status": 200,
    *   }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed To Posted comment",
    *   "status": 500,
    *   "data": null
    * }
    */


    app.post(`${baseUrl}/:issueId/addAssignee`, auth.isAuthorized, issueController.addAssignee);

    /**
    * @api {post} /api/v1/issue/:issueId/addAssignee Add assignee
    * @apiVersion 0.0.1
    * @apiGroup issue
    *
    * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {String} issueId The issueId of the issue. (params)
    * @apiParam {Array} assignee The Assignee array containing UserName and UserId. (body)
    * 
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
    *		"error": false,
    *		"message": "Successfully Added Assignee",
    *		"status": 200,
    *   }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed to add Assignee",
    *   "status": 500,
    *   "data": null
    * }
    */


    app.post(`${baseUrl}/:issueId/addWatchee`, auth.isAuthorized, issueController.addWatchee);

    /**
    * @api {post} /api/v1/issue/:issueId/addWatchee Add as watching
    * @apiVersion 0.0.1
    * @apiGroup issue
    *
    * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {String} issueId The issueId of the issue. (params)
    * @apiParam {Array} watching The Warching array containing UserName and UserId . (body)
    * 
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
    *		"error": false,
    *		"message": "Successfully Add as Watching",
    *		"status": 200,
    *   }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed To Add as Watching",
    *   "status": 500,
    *   "data": null
    * }
    */

    app.post(`${baseUrl}/:issueId/delete`, auth.isAuthorized, issueController.deleteIssue);

    /**
     * @api {post} /api/v1/issue/:issueId/delete Delete issue by Id
     * @apiVersion 0.0.1
     * @apiGroup issue
     *
     * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
     * @apiParam {String} issueId The issueId of the issue. (params)
     * @apiParam {String} previous The name of screenshot to be deleted. (body) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
     *    
     *  {
       "error": false,
       "message": "Deleted the Issue successfully",
       "status": 200,
       "data": {
           "title": "Error fix",
           "status": "backlog",
           "reporter": [
               {
                   "name": "Tara Sharma",
                   "userId": "4WnDKcs-"
               }
           ],
           "description": "Fix the bug",
           "screenshot": "1569354469798_500.jpg",
           "assignee": [
               {
                   "name": "Riya Verma",
                   "userId": "u28YkBXN"
               }
           ],
           "watching": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t"
               },
               {
                   "name": "Surabhie undefined",
                   "userId": "bvl_RZ1a"
               }
           ],
           "comments": [
               {
                   "name": "mukesh shah",
                   "userId": "BIO6Zj6t",
                   "comment": "Look into the issue asap"
               }
           ],
           "createdOn": "2019-09-24T19:47:49.000Z",
           "modifiedOn": "2019-09-24T14:35:35.969Z",
           "issueId": "jv-YZrcN"
       }
   }
     * @apiErrorExample {json} Error-Response:
     *
     * {
     *   "error": true,
     *   "message": "Failed To Delete Issue",
     *   "status": 500,
     *   "data": null
     * } 
     * 
     * ...
     * 
     * 
     * {
       "error": true,
       "message": "No Issue Found",
       "status": 404,
       "data": null
   }
     */

    app.post(`${baseUrl}/:issueId/edit`, multer.upload.single('image'), issueController.editIssue);

    /**
    * @api {post} /api/v1/issue/:issueId/edit Edit issue
    * @apiVersion 0.0.1
    * @apiGroup issue
    *
    * @apiParam {String} title Title of the issue. (body) (required)
    * @apiParam {String} status Status of the issue. (body) (required)
    * @apiParam {Array} reporter Array containing UserName and UserId of user. (body) (required)
    * @apiParam {String} description Description of issue. (body) (required)
    * @apiParam {Array} assignee Array containing UserName and UserId of user. (body) (required)
    * @apiParam {String} screenshot The Screenshot of issue. (file) (required)
    * @apiParam {String} previous The name of screenshot to be replaced of issue. (body) (required)
    *
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
    *		"error": false,
    *		"message": "Issue Details Updated",
    *		"status": 200,
    *	
    *   }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed To Edit Issue Details",
    *   "status": 500,
    *   "data": null
    * }
    */

    app.get(`${baseUrl}/:userId/notification`, auth.isAuthorized, notificationController.getNotifyById);
    /**
    * @api {get} /api/v1/issue/:userId/notification Get notifications
    * @apiVersion 0.0.1
    * @apiGroup notification
    *
    * @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {String} userId The userId of user. (params) (required)
    *
    * @apiSuccessExample {json} Success-Response:
    *    
    *   {
      "error": false,
      "message": "Notify Details Found",
      "status": 200,
      "data": [
          {
              "senderName": "Surabhie undefined",
              "senderId": "1MuZH8sb",
              "receiverName": "mukesh shah",
              "receiverId": "Fh2Q5kGi",
              "issueId": "97jUzDim",
              "message": "Surabhie undefined has Commented Surely ,Mukesh we are looking into this .Dont worry .. on Bug Issue in the Laptop",
              "seen": false,
              "notifyId": "vZ25-Z7Qm",
              "createdOn": "2019-10-08T19:13:02.800Z"
          }
      ]
  }
  
  {
      "error": false,
      "message": "Notify Details Found",
      "status": 200,
      "data": [
          {
              "senderName": "Surabhie undefined",
              "senderId": "1MuZH8sb",
              "receiverName": "Surabhie undefined",
              "receiverId": "1MuZH8sb",
              "issueId": "97jUzDim",
              "message": "Surabhie undefined has Commented Surely ,Mukesh we are looking into this .Dont worry .. on Bug Issue in the Laptop",
              "seen": false,
              "notifyId": "nBisbeZO",
              "createdOn": "2019-10-08T19:13:02.733Z"
          },
          {
              "senderName": "mukesh shah",
              "senderId": "Fh2Q5kGi",
              "receiverName": "Surabhie undefined",
              "receiverId": "1MuZH8sb",
              "issueId": "97jUzDim",
              "message": "mukesh shah has Edited Bug Issue in the Laptop",
              "seen": false,
              "notifyId": "SNXsrDG8h",
              "createdOn": "2019-10-08T19:09:10.807Z"
          },
          {
              "senderName": "mukesh shah",
              "senderId": "Fh2Q5kGi",
              "receiverName": "Surabhie undefined",
              "receiverId": "1MuZH8sb",
              "issueId": "97jUzDim",
              "message": "mukesh shah has Edited Bug Issue in the Laptop",
              "seen": false,
              "notifyId": "BXGIRmMZ",
              "createdOn": "2019-10-08T19:09:10.792Z"
          }
      ]
  }
    * @apiErrorExample {json} Error-Response:
    *
    * {
    *   "error": true,
    *   "message": "Failed To Find Notify Details",
    *   "status": 500,
    *   "data": null
    * }
    */

}