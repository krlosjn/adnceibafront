pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
    disableConcurrentBuilds()
  }
  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK8_Centos'
    gradle 'Gradle5.0_Centos'
  }
  //Aquí comienzan los “items” del Pipeline
  stages {
      stage('Checkout') {
      steps {
        echo '------------>Checkout<------------'
        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/master']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            gitTool: 'Default',
            submoduleCfg: [],
            userRemoteConfigs: [[
            credentialsId: '0ee40853-b086-421b-a1cc-4387f2598986',
            url:'https://github.com/krlosjn/adnceibafront.git'
            ]]
        ])
      }
      }
    stage('NPM Install') {
      steps {
        withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
          sh 'npm install'
        }
      }
    }

    stage('Test') {
      steps {
        echo '------------>Test<------------'
        sh 'npm run test -- --watch=false --browsers ChromeHeadless'
      }
    }
    stage('Test end-to-end') {
      steps {
        echo '------------>Testing Protractor<------------'
        sh 'npm run e2e'
      }
    }

    stage('Static Code Analysis') {
      steps {
          echo '------------>Análisis de código estático<------------'
          withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner"
          }
      }
    }

    stage('Build') {
      steps {
        echo '------------>Build<------------'
        sh 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
