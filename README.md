# Take Home Assignment

**Summary** 
Signup workflow for a Take home assignment.

### Link to Application
https://propelx-signup.herokuapp.com/

**Usage :**
```sh
    $ cd signupprocess
    $ yarn global add serve
    $ serve -s build
```

##### Server Interface :

We have 2 options to implement the sign up wizard.

1. Have a single Server call at the end of the sign up and save the entire results of the Survey.
2. Save the intermediate steps to the server.

The main disadvantage with <1> is the user can not save intermediate progress. This can partly be addressed by storing intermediate results to HTML5 Local Storage. However, the user still wont be able to continue the survey on a different device or browser.
The nice usability advantage with <2> is , if a user were to complete only say 4 out of 6 steps , we can send a email reminder with a link to Page 5 directly and that email link can now be clicked on a different device ( or browser) and the user can continue where it was left off.

One disadvantage with <2> is , if we need to move questions around pages , the partial results stored will no longer be valid for the new flow. In this case , we will have to version the APIs anytime the flow changes.

##### Server Interface Design :
The API design is as follows:

Each page will submit a POST request to save the intermediate survey information.

POST /v1/survey/page1
Input:
{
"investorType":"user",
"accredited": true
}
Output:
Good case: 200 OK 
Bad cases: 401 Unauthorized ( Missing Token/Session Cookie)
400 Bad request ( ex: if investorType is not one of the valid choices, if the user tries to  bypass client side validation.)

POST /v1/survey/page2
Input:
{
"intersetedTechnologies":["foodAndAgriculture", "lifeSciences"],
"sectors": ["spaceExploration" , "connectedDevices"],
"angelInvestments":10
}

Output:
Good case: 200 OK 
Bad cases: 401 Unauthorized ( Missing Token/Session Cookie)
400 Bad request ( ex: if intersetedTechnologies is not one of the valid choices)

In order to support the functionality where the user can continue a partially completed survey at a later point, we need GET API that returns the right page in the wizard to load ( this will be used to load the appropriate React route):
GET /v1/survey/status

Output: 200 OK
{
"link" : "page3"
}

Note: If we need to support a back button or an option to re-visit the survey, we need GET APIs that return back similar data.

##### Handling errors/failures:

**Missing/Bad Input:**
We will have validations against missing /bad input  both on the client side ( to prevent the network overhead and for immediate feedback) and the server side ( to prevent user from calling the API directly,  bypassing client side validations)

**Poor Connectivity/ API Call Failures:**
If the request to server fails or times out,  we can automatically retry N times( say 3) and then display a message (like GMail does) that says "Not connected. Connecting in 10s… Try Now" so that the tab,  unless closed , will automatically try to save the state back to the server as soon as the client side connectivity or server side issues are resolved. 

**Warn when the user tries to navigate from the page without saving**
We can warn if the user tries to navigate away from the page without saving the input.

**Additional Notes**
- Sign up pages has some basic validations. Except for the required condition on the First Name field, all other validations are commented. This is for the easy and quick navigation.
- Similar validations can easily be extended for other pages as well.

