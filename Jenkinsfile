#!groovy
import groovy.json.JsonSlurperClassic
node {

    def BUILD_NUMBER=env.BUILD_NUMBER
    def RUN_ARTIFACT_DIR="tests/${BUILD_NUMBER}"
    def SFDC_USERNAME

    def HUB_ORG=env.HUB_ORG_DH
    def SFDC_HOST = env.SFDC_HOST_DH
    def JWT_KEY_CRED_ID = env.JWT_CRED_ID_DH
    def CONNECTED_APP_CONSUMER_KEY=env.CONNECTED_APP_CONSUMER_KEY_DH

    println 'KEY IS' 
    println JWT_KEY_CRED_ID
    println HUB_ORG
    println SFDC_HOST
    println CONNECTED_APP_CONSUMER_KEY
    def toolbelt = tool 'toolbelt'
	
    properties([parameters([choice(choices: 'DEV\nQA1\nQA2\nSTAGING\nPROD', description: 'Select Environment for deployment', name: 'ENV')])])
	def environment = "${params.ENV}"
    echo "selected environment:: ${environment}"
	
	
	def props = readProperties  file:'jenkins.properties'
	def CONNECTED_APP_CONSUMER_KEY1= props['${environment}']
	
	echo "CONNECTED_APP_CONSUMER_KEY=${CONNECTED_APP_CONSUMER_KEY1}"

	
    stage('checkout source') {
        // when running in multi-branch job, one must issue this command
        checkout scm
    }

    withCredentials([file(credentialsId: JWT_KEY_CRED_ID, variable: 'jwt_key_file')]) {
        stage('Deploye Code') {
            if (isUnix()) {
                rc = sh returnStatus: true, script: "${toolbelt} force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile ${jwt_key_file} --setdefaultdevhubusername --instanceurl ${SFDC_HOST}"
            }else{
                 rc = bat returnStatus: true, script: "\"${toolbelt}\" force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile \"${jwt_key_file}\" --setdefaultdevhubusername --instanceurl ${SFDC_HOST}"
            }
            if (rc != 0) { error 'hub org authorization failed' }

			println rc
			
			// need to pull out assigned username
			if (isUnix()) {
				rmsg = sh returnStdout: true, script: "${toolbelt} force:mdapi:deploy -d build/readiness-app/. -u ${HUB_ORG}"
			}else{
			   println('-->Creating package structure for readiness-app...')
			   rmsg = bat returnStdout: true, script: "\"${toolbelt}\" force:source:convert -r readiness-app/force-app --outputdir build/readiness-app"
			   println('SUCCESS:: Package structure for readiness-app Created!!')
			   println('-->Creating package structure for einstein-app...')
			   rmsg = bat returnStdout: true, script: "\"${toolbelt}\"  force:source:convert -r einstein-app --outputdir build/einstein-app"
			   println('SUCCESS:: Package structure for einstein-app Created!!')
			   println('Deploying readiness-app to the org')
			   rmsg = bat returnStdout: true, script: "\"${toolbelt}\" force:mdapi:deploy -d build/readiness-app/. -u ${HUB_ORG}"
			   deploymsg = bat returnStdout: true, script: "\"${toolbelt}\" force:mdapi:deploy:report -u ${HUB_ORG}"
			   
			}
			  
            printf rmsg
            println('*****NICE inContact CI Job*****')
            println(rmsg)
	    println(deploymsg)
	     emailext ( 
		       subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
		       body: """SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':
			 Check console output at '${env.BUILD_URL}${env.JOB_NAME} [${env.BUILD_NUMBER}]'""",
		       to: 'keshav.kishor@nice.com'
		     )
        }
    }
}
