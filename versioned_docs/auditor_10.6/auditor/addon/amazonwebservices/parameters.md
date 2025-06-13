# Define Parameters

Before running or scheduling the add-on, you must define connection details: Auditor Server host, user credentials, etc. Most parameters are optional, the script uses the default values unless parameters are explicitly defined. You can skip or define parameters depending on your execution scenario and security policies. See the [Choose Appropriate Execution Scenario](/versioned_docs/auditor_10.6/auditor/addon/amazonwebservices/deployment.md)  topic for additional information.

First, provide a path to your add-on followed by script parameters with their values. Each parameter is preceded with a dash; a space separates a parameter name from its value. You can skip some parameters— the script uses a default value unless a parameter is explicitly defined. If necessary, modify the parameters as required.

| Parameter or switch | Default value | Description |
| --- | --- | --- |
| AWSSDKInstallPath | 'C:\Program Files (x86)\AWS SDK for .NET' | Assumes that AWS SDK for .NET is installed by its default path.  To specify another location, provide a path in single quotes (e.g., '_C:\Program Files (x86)\My SDKs\AWS SDK for .NET_'). |
| ImportAllEvents | — | By deafult, only events with processed details will be imported. To import all events, set the switch during the add-on execution.  __NOTE:__ Importing all events makes audit data less human-readable. |
| NetwrixAuditorHost | localhost:9699 | Assumes that the add-on runs on the computer hosting Auditor Server and uses default port __9699__.  If you want to run the add- on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer,WKS.enterprise.local_).  To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_). |
| NetwrixAuditorUserName | Current user credentials | Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor Server, specify the account name in the _DOMAIN\username_ format.  __NOTE:__ The account must be assigned the __Contributor__ role in Auditor. |
| NetwrixAuditorPassword | Current user credentials | Unless specified, the script runs with the current user credentials. Provide a different password if necessary. |
| NetwrixAuditorPlan | — | Unless specified, data is written to the __Netwrix_ Auditor_API__ database and is not associated with a specific monitoring plan.  Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan.  __NOTE:__ If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the __Netwrix API__ data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the __Audit Database__. |

## Update In-Script Parameters

__Step 1 –__ Right-click a script and select __Edit__. __Windows PowerShell ISE__ will start.

__Step 2 –__ Navigate to the following lines:

$RegionEndpoint = "your AWS region endpoint"

$AccessKeyID = "your AWS access key ID"

$SecretAccessKey = "your AWS secret access key"

__Step 3 –__ Update the following parameters:

| Parameter | Description |
| --- | --- |
| RegionEndpoint | Provide an endpoint for your region, e.g., us-east-1 (N. Virginia).  __NOTE:__ If you use more than one region in your environment, run the script several times with different region endpoints.  See the [AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) article for additional information. |
| AccessKeyID | Provide an AWS access key ID for your account.  Access key is used to run requests to AWS SDK, CLIs, and API. |
| SecretAccessKey | Provide an AWS secret access key that works with your access key ID. |

__Step 4 –__ Save the script.
