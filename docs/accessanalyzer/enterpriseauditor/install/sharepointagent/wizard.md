# Installing the SharePoint Agent

The installer will prompt for credentials which are used to set the identity that the SharePoint Access Auditor Agent service runs as. The agent service does no additional impersonation, so this is the account used to connect to and enumerate SharePoint. The service account credentials provided need to be a member of the Log on as a service local policy. Additionally, the credentials provided for Step 5 should also be a part of the Connection Profile used by the SharePoint Solution within the Access Analyzer Console. See the [SharePoint Scan Options](/docs/accessanalyzer/enterpriseauditor/requirements/solutions/sharepoint/scanoptions.md) topic for detailed permission information.

Follow the steps to install the SharePoint Agent on the application server which hosts the Central Administration component of the targeted SharePoint farms.

__Step 1 –__ Run the ```SharePointAgent.exe``` executable to open the Netwrix Access Analyzer (formerly Enterprise Auditor) SharePoint Agent Setup Wizard.

![SharePoint Agent Setup Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![SharePoint Agent Setup Wizard End-User License Agreement page](/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

__Step 3 –__ On the End-User License Agreement page, select the __I accept the terms in the License Agreement__ checkbox and click __Next__.

![SharePoint Agent Setup Wizard Destination Folder page](/img/product_docs/accessanalyzer/enterpriseauditor/install/filesystemproxy/destination.webp)

__Step 4 –__ On the Destination Folder page, click __Next__ to install to the default folder or click __Change__ to select a different location.

![SharePoint Agent Setup Wizard Configure Service Security page](/img/product_docs/accessanalyzer/enterpriseauditor/install/filesystemproxy/configureservice.webp)

__Step 5 –__ On the Configure Service Security page, enter the __User Name__ and __Password__ for the SharePoint Service Account. Click __Next__.

![SharePoint Agent Setup Wizard Ready to install page](/img/product_docs/activitymonitor/activitymonitor/install/ready.webp)

__Step 6 –__ On the Ready to install Netwrix Access Analyzer (formerly Enterprise Auditor) SharePoint Agent page, click __Install__ to start the installation.

![SharePoint Agent Setup Wizard Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

__Step 7 –__ When the installation has completed, click __Finish__ to exit the wizard.

Now that the SharePoint Agent has been installed on the appropriate application server, it can be used by the SharePoint Solution. See the [SharePoint Solution](/docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/overview.md) topic for instructions on enabling agent service scans on the Agent Settings page.
