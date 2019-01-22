# Node.js Boilerplate

This is the boiler plate that should be used for all Node.js services codebase.

Click [here](docs/FOLDERS.md) to go through details for each folder.

## Scripts
1. `npm run lint`  
    This runs linting on the service code.

2. `npm run test`  
    Runs all tests present in the service.
    Tests **MUST** have `.test.js` extension.

Other scripts can be added as needed.

**Note**:  
`npm run lint` is automatically run on staged files before git push.  
All commit messages are linted upon commit.   
Also, the code is made pretty (by prettier) when files are staged in git.  

**Commit guidelines:**  
[Here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#submit) is a detailed guidline.
