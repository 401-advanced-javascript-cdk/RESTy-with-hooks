# RESTy in React

Implementation of the RESTy application in React.

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/RESTy/pull/1)
- [Netlify Deployment](https://ecstatic-shannon-58a208.netlify.com)
- [Travis](https://travis-ci.com/401-advanced-javascript-cdk/RESTy)

### Modules

#### `app.js`

Renders Header, Footer, Form, and Response Components.  Holds state for response from the server and has a method for sending the players inputs to the API with superagent.

#### `header.js`

Renders a simple header.

#### `footer.js`

Renders a simple footer.

#### `form.js`

Holds view state to control user inputs.  Renders a form to collect the url, HTTP method, and JSON data from the user and sends them to the App component with a prop method.

#### `response.js`

Renders a div that contains the headers and response from props.

#### Operation

Go to the client deployment [here](https://ecstatic-shannon-58a208.netlify.com).  The user can input the url, method, and a JDON body, and the response from the server will be displayed after submitting.