# server testing

- In the package.json file, 'cross-env' (in the 'scripts') sets an .env variable in your system across ALL platforms
- 'yarn server' connects to the development's database

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser


## Three Ways to Handle Asynchronous Calls with Testing:

1) RETURN the promise and give it back to Jest. Jest will wait until the promise is resolved BEFORE executing all the tests.

2) Use 'async'.

3) Use 'done'.




