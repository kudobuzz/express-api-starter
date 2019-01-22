# Folders

+-- [api/](#api)   
|  +-- [common/](#api/common)   
+-- [config/](#config)  
+-- [docs/](#docs)  
+-- [events/](#events)  
+-- [lib/](#lib)  
+-- [scripts/](#scripts)  
+-- [services/](#services)  
|  +-- [models/](#services/models)   
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

### api/common
This folder contains all the logic that is shared across multiple files in the parent folder ([api](#api)).

## config
This is where configurations are loaded, configurations could be loaded from the environment variables either in production or in development based on where the service has been spawned.

## docs
All the docs for this service should be here.

## events
This is where all the events handlers should be located. Events are very ideal for queue related operations.

## lib
Contains the wrappers to external libraries.

## scripts
This contains all scripts that are run once, E.g. Migration scripts, indice creators, administrative scripts, local test utitlites or any build configs.

## services
This is where all the business code should be located.

### services/models
This should contain the schemas

## workers
Should contain anything that needs to run outside of the main process E.g. cron jobs

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