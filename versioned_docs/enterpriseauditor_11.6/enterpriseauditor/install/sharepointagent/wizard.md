# Installing the SharePoint Agent

The installer will prompt for credentials which are used to set the identity that the SharePoint Access Auditor Agent service runs as. The agent service does no additional impersonation, so this is the account used to connect to and enumerate SharePoint. The service account credentials provided need to be a member of the Log on as a service local policy. Additionally, the credentials provided for Step 5 should also be a part of the Connection Profile used by the SharePoint Solution within the Enterprise Auditor Console. See the [SharePoint Scan Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/solutions/sharepoint/scanoptions.md) topic for detailed permission information.

__NOTE:__ If utilizing the SharePoint Agent to scan for Sensitive Data, the 64-bit ```SensitiveDataAddon.msi``` needs to be installed after the SharePoint Agent has been installed on the SharePoint server. See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md) topic for additional information.

Follow the steps to install the SharePoint Agent on the application server which hosts the Central Administration component of the targeted SharePoint farms.

__Step 1 –__ Run the ```SharePointAgent.exe``` executable to open the Netwrix Enterprise Auditor SharePoint Agent Setup Wizard.

![SharePoint Agent Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![SharePoint Agent Setup Wizard End-User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 3 –__ On the End-User License Agreement page, select the __I accept the terms in the License Agreement__ checkbox and click __Next__.

![SharePoint Agent Setup Wizard Destination Folder page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/destination.png)

__Step 4 –__ On the Destination Folder page, click __Next__ to install to the default folder or click __Change__ to select a different location.

![SharePoint Agent Setup Wizard Configure Service Security page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/configureservice.png)

__Step 5 –__ On the Configure Service Security page, enter the __User Name__ and __Password__ for the SharePoint Service Account. Click __Next__.

![SharePoint Agent Setup Wizard Ready to install page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.png)

__Step 6 –__ On the Ready to install Netwrix Enterprise Auditor SharePoint Agent page, click __Install__ to start the installation.

![SharePoint Agent Setup Wizard Completed page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 7 –__ When the installation has completed, click __Finish__ to exit the wizard.

Now that the SharePoint Agent has been installed on the appropriate application server, it can be used by the SharePoint Solution. See the [SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/overview.md) topic for instructions on enabling agent service scans on the Agent Settings page.
