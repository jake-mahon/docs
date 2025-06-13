# DropboxAccess: Scan Options

Use the Scan Options page to authorize Enterprise Auditor to generate an Access Token allowing the DropboxAccess Data Collector to access and scan an organization’s Dropbox environment. The Access Token is used as the credential in the Connection Profile.

__NOTE:__ The Access Token needs to be generated only once, prior to the first execution of any job in which the DropboxAccess Data Collector is used in a query.

The Scan Options page is a wizard page for the following categories:

- Scan Dropbox Access
- Scan for Sensitive Content

Follow the steps to create the Access Token:

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/scanoptions.png)

__Step 1 –__ Click the __Authorize__ button to access the Dropbox Authentication page.

![Dropbox Log in page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/scanoptionsdropboxlogin.png)

__Step 2 –__ On the Dropbox Authentication page, log in as the Team Administrator.

![Copy Access Token](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/scanoptionsaccesstoken.png)

__Step 3 –__ Once the Access Token has been generated, click __Copy to Clipboard__. Click __Next__ to finish choosing the configuration options or click __Cancel__ to close the Dropbox Access Auditor Data Collector Wizard.

Create a Connection Profile using this access token as the credential. See the [Custom Dropbox Connection Profile & Host List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/configurejob.md) topic for additional information on configuring the Dropbox credential.

_Remember,_ assign this Connection Profile to the job group or job where the host assignment for the Dropbox environment to be targeted has been assigned.
