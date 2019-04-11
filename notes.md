# server testing

- In the package.json file, 'cross-env' (in the 'scripts') sets an .env variable in your system across ALL platforms

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser
