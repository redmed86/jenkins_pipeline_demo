#!/usr/bin/env groovy
node('mesos'){
  def branch = "${env.BRANCH_NAME}"

  stage ('Checkout') {
    //checkout the ctsupport.bot project
    checkout scm
    echo "BRANCH: " + branch
  }

  stage ('Build') {
    // def nodeHome = tool "nodejs-7.9.0"
    // env.PATH = "${nodeHome}/bin:${env.PATH}"
    // sh 'npm install'
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
