# RESTy in React - Hooks

Implementation of the RESTy application in React with functional components and hooks rather than state.

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/RESTy-with-hooks/pull/1)
- [Netlify Deployment](https://heuristic-ardinghelli-88ea2d.netlify.com)
- [Travis](https://travis-ci.com/401-advanced-javascript-cdk/RESTy-with-hooks)

### Modules

#### `app.js`

Renders Header, Footer, Form, and Response Components.  Uses State hooks for the response from the server and has a method for sending the players inputs to the API with superagent.  User's input and API results are saved to history with another useState hook.

#### `header.js`

Renders a simple header.

#### `footer.js`

Renders a simple footer.

#### `form.js`

Has a useState hook to control user inputs.  Renders a form to collect the url, HTTP method, and JSON data from the user and sends them to the App component with a prop method.

#### `response.js`

Renders a div that contains the headers and response body from props.

#### Operation

Go to the client deployment [here](https://heuristic-ardinghelli-88ea2d.netlify.com).  The user can input the url, method, and a JSON body, and the response from the server will be displayed after submitting.