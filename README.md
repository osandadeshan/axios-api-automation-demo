# Axios API Automation Demo
## Introduction
Axios is a promise based HTTP client for the browser and node.js.

## Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](http://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## How to use?

**Pre-requisites:**
1. [Node.js](http://nodejs.org/)
	  * Install at least v12.16.1 or higher as this is the oldest active LTS version.
	  * Only releases that are or will become an LTS release are officially supported.
2. [VSCode](https://code.visualstudio.com/download)
3. [Allure](https://docs.qameta.io/allure/#_installing_a_commandline)

**Steps:**
1. Clone this project.
2. Open the project in VSCode.
3. Open the terminal in VSCode.
4. Execute ***`npm install`*** to install the node modules.
5. Execute ***`npm test`*** to run the tests.
6. Execute ***`npm run report`*** to generate the allure report.

## References
* [Axios GitHub Documentation](https://github.com/axios/axios/blob/master/README.md)
