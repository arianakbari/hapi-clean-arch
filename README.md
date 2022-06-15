# A test app using Hapi.js

The entire domain layer is organized into the `domain` folder. It has no dependency on Hapi.js or any other framework.

![Class Digram](/diagram.jpg)

For running the app in development create the `.env` file and add
`[PORT, HOST]` environment variables to this file or use the defaults.
Run `npm run dev` to start development server.

Testing is available in this app, but I did not write tests for every function and scenario due to time constraints, but I did write a few to illustrate the concept.
