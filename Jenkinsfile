node(){
    stage('Cloning Git') {
        checkout scm
    }
        
    stage('Install dependencies') {
            sh 'npm install'
            echo "Modules installed"
        }
        
    stage('Build') {
            sh 'pm2 stop all'
            sh 'pm2 start index.js'
            echo "Build completed"
        }
        
}
