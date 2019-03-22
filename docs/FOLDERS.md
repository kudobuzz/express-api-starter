   # Folders

+-- [api/](#api)   
|  +-- [common/](#api/common)   
+-- [config/](#config)  
+-- [docs/](#docs)  
+-- [events/](#events)  
+-- [lib/](#lib)  
+-- [scripts/](#scripts)  
+-- [services/](#services)  
+-- [models/](#models)   
+-- [tests/](#tests)    
+-- [workers/](#workers)  
+-- [.editorconfig](#.editorconfig)  
+-- [.env.sample](#.env.sample)  
+-- [.gitignore](#.gitignore)  
+-- [.npmrc](#.npmrc)  
+-- [CONTRIBUTION.md](#.CONTRIBUTION.md)  
+-- [Dockerfile](#Dockerfile)  
+-- [package.json](#package.json)  
+-- [README.md](#README.md)

## api
Contains:
 1. Actions, scripts that interact with the services in [services](#services) folder.
 2. Endpoints, exposing the service to other services.
 3. Handles the validations and assertions of the requests

### api/common
This folder contains all the logic that is shared across multiple files in the parent folder ([api](#api)).
Here you also have middlewares like the express middleware that has access to the request and response objects.


## config
This is where configurations are loaded, configurations could be loaded from the environment variables either in production or in development based on where the service has been spawned.
configs are grouped into components which allows you to manouver when you require the use of a service for example the mongodb url and many more.

i.e.

The process.env files is in the config files 
 when an app starts it enables you to test if all the variables are available if not it throws an error hence one can never deploy an app with missing variables.


## docs
All the docs for this service should be here.

## events
This is where all the events handlers should be located. Events are very ideal for queue related operations.


## lib
Contains the wrappers to external libraries and utilities.
These are the helpful functions that accelerate the workflow and are often offered as packages and can be installed with npm.


## scripts
This contains all scripts that are run once, E.g. Migration scripts, indice creators, administrative scripts, local test utilites or any build configs.

## services
This is where all the business logic code should be located.
for example encrypting and decrypting a token as well as communication with the models

## tests
This contains test configurations.  
Often classified in subfolders 
- test/setup.js
:handles how to setup tests 
- test/utils.js
 :To test the utilities 

- test/fixtures/ 
   : This is a fixed state to allow the app  to be tested, this enables you to also clean up the code.

## models
This should contain the schemas ,it also contains all the details for the app to operate efficiently 
This could be basic data required when changing states , when tasks are completesd succesfully.


## workers
Should contain anything that needs to run outside of the main process E.g. cron jobs used to run scheduled tasks


## Other files
These other files include:

- #### .editorconfig

    These are are editor configurations, just to make development smooth and standard across the board.

- #### .env.sample

    Has the samples for environment variable.   
    A `.env` file __must__ be created based on the variables in the _.env.sample_ file.  
    **Note:** `.env` file **should only** be used in development.

- #### .gitignore 

    Outlines all the files and/or files that should be ignored by git commits.

- #### .npmrc

    This contains `npm`'s global configurations.

- #### CONTRIBUTION.md  

    Your contribution is welcomed. You can submit a PR with the changes you think might be helpful in this express-api-starter detailing the changes and the reasons.

- #### Dockerfile

    Contains docker related [settings](https://docs.docker.com/)

- #### package.json   

    Has all npm/yarn related stuff. Dependancies, run scripts E.t.c, this file will be created automatically when `npm init` or `yarn init` is run during the initialization of the project.

- #### README.md
    Explains stuff :)


These files are in the root folder relative to the service

## __Note__:
Tests are highly encouraged. Idealy, tests should be localised within a folder, they should be as close to the code/file being tested as possible, Tests could be in a `tests` folder where it makes sense, E.g. If the tests are many.   
Also, custom folders can be added as subfolders of any of the listed folders where necessary.