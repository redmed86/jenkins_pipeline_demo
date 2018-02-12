#!/usr/bin/env groovy
node{
  def branch = "${env.BRANCH_NAME}"

  stage ('Checkout') {
    //checkout the ctsupport.bot project
    checkout scm
    echo "You are building the following branch: " + branch
  }

  stage ('Build') {
    echo 'This is where your build code goes.  You can build maven, nodejs, docker, go, or anyother project that you can build with a cli.'
  }

  stage ('Deploy') {
      echo "This is where your deploy code would go. You can run a script or interact with a plugin for this step!"
  }

  stage('Custom Test Script Execution'){
    sh './testScript.sh'
  }
  //sh "curl -X POST http://cmjenkins1.internal.t-mobile.com:8080/job/EQRE-E2E/view/Notifications/job/Notification_DLAB01/build?token=edpcatesting -d '{\"callback\":\"${env.BUILD_URL}input/Async-input/proceedEmpty\"}'"

  input 'Waiting for test results'
}
