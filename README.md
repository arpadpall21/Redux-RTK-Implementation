# Redux RTK demo

## Description
- Redux maintains a centralized store in front-end applications, Redux is a little bit messy so the Redux guys came up with RTK (Redux Tool Kit) which intends to be the 'way' we should develop Redux apps
- This is a functional demo that demonstrates RTK's useful features 

## Setup
- Run `npm install` to install packages
- Run `npm start` to start the dev server, the demo is available on http://localhost:3000

## Usage
- Use the 'Control Component' to output text and modify colors in the 'Display Component' (the data is dispatched to the redux store and then retrieved from it)
- The 'Request API Component' fetches the data from a resource and then displays it (supporting awesome loading & error states in generated react hooks)
