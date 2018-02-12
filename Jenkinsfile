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
      // //set cloud foundry vars
      // cfHome = tool 'cf';
      // withCredentials([usernamePassword(credentialsId: 'derek_ross', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
      //     sh 'cf login -a https://api.sys.px-prd01.cf.t-mobile.com -o CTRevolution-prd -u "${USERNAME}" -p "${PASSWORD}"'
      // }
      // if(branch == 'develop'){
      //     sh 'cf push -f pcf/dev/manifest.yml'
      // }
      // if(branch.startsWith('release')){
      //     sh 'cf push -f pcf/prod/manifest.yml'
      // }
  }
}
