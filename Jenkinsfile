pipeline {
    agent {
        docker {
            'alpine'
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