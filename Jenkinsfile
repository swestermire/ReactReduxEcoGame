pipeline {
    agent {
        docker {
            image 'node:6.11.0'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}