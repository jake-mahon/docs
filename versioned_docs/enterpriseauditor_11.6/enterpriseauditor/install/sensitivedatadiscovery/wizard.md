# Installing the Sensitive Data Discovery Add-On

Remember, the following additional considerations:

- File System Considerations:
  - To run the __FileSystem__ Job Group in Applet Mode or Proxy Mode with Applet, the targeted file servers also need .NET Framework 4.7.2 or later to be installed in order for Sensitive Data Discovery collections to successfully occur.
  - To run the __FileSystem__ Job Group in File System Proxy Mode as a Service, the Sensitive Data Discovery Add-On (32-bit ```SensitiveDataAddon.msi```) also needs to be installed on the proxy server. The proxy server also requires the .NET Framework 4.7.2 or later. The Enterprise Auditor license file will need to be accessible locally for this installation. See the [File System Proxy as a Service Overview](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/overview.md) topic for additional information.
- SharePoint Consideration – To use the SharePoint Agent to scan for sensitive data, the Sensitive Data Discovery Add-On (64-bit ```SensitiveDataAddon.msi```) will also need to be installed on the application server which hosts the Central Administration component of the targeted SharePoint farms after the Enterprise Auditor SharePoint Agent has been installed on that server. The SharePoint server also requires .NET Framework 4.7.2 or later. The Enterprise Auditor license file will need to be accessible locally for this installation. See the [SharePoint Agent Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sharepointagent/overview.md) topic for additional information.

__NOTE:__ Before running the installation package, please close the Enterprise Auditor application.

The Enterprise Auditor license file is needed during installation. It can be imported from the Enterprise Auditor installation directory when the add-on is installed on the Enterprise Auditor Console server. Follow the steps to install the Sensitive Data Discovery Add-On.

__Step 1 –__ Run the ```SensitiveDataAddon.exe``` executable.

_Remember,_

- Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive Data Discovery Add-On on the Enterprise Auditor Console Server.
- Install the Sensitive Data Add-on – FSAA & SPAA Agentless (or x86) version of the Sensitive Data Discovery Add-On on the File System Proxy server when using the File System Proxy Mode as a Service scan mode.
- Install the Sensitive Data Add-on – SPAA Agent (or x64) version of the Sensitive Data Discovery Add-On on the SharePoint server hosting the SharePoint Agent.
  - Select the SPAA Agent for SP 2013 and newer

![SDD Add-on Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![SDD Add-on Setup Wizard End-User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 3 –__ Check the __I accept the terms in the License Agreement__ box and click __Next__.

![SDD Add-on Setup Wizard License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.png)

__Step 4 –__ Click __Browse__ to select the license file to use for installation. By default, this will target the license key within the Enterprise Auditor installation directory. If installing on the SharePoint Agent server or the File System Proxy server, use the Browse button to navigate to the license file. Click __Next__.

__NOTE:__ The Enterprise Auditor license file needs to be locally accessible during the installation process.

![SDD Add-on Setup Wizard Ready to install page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.png)

__Step 5 –__ Click __Install__ to begin the installation.

![Completed the SDD Add-on Setup Wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 6 –__ When the installation has completed, click __Finish__ to exit the wizard.

The Enterprise Auditor Console is now ready to run Sensitive Data Discovery jobs for the following solutions, according to the organization’s license:

- AWS
- Dropbox
- Exchange
- File System
- PostgreSQL
- MongoDB
- MySQL
- Oracle
- SharePoint
- SQL

Prior to job execution, ensure the desired criteria have been properly configured for each job. See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md) topic for additional information.
