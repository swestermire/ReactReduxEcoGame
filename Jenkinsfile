pipeline {
    agent {
        docker "node:6.11.0"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}