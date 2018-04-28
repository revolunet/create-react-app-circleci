# create-react-app + circleci workflows [![CircleCI](https://circleci.com/gh/revolunet/create-react-app-circleci.svg?style=svg)](https://circleci.com/gh/revolunet/create-react-app-circleci)

Build, test and deploy your ReactJS application to GitHub pages

Continuous integration/deployment workflows with CircleCI

![workflow](./workflow.png)

In Circle CI :
 - Add a checkout key with write access to the repo
 - AddEnvironnements variables to configure on circleci :
   - `GH_NAME` : committer who publish the build on gh-pages
   - `GH_EMAIL` : committer github email address