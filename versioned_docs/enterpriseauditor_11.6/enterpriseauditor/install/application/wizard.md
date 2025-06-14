# Enterprise Auditor Core Installation

Save the organization’s Enterprise Auditor license key, received from your Netwrix Sales Representative, to the server where Enterprise Auditor is to be installed. Then follow the steps to install Enterprise Auditor.

__NOTE:__ The process explained in this topic assumes that both the downloaded binary and the license (.lic) file are located on the server which will become the Enterprise Auditor Console.

__CAUTION:__ If User Account Control (UAC) is enabled on the server, ensure the installation package is run in Administrative/privilege mode.

__Step 1 –__ Run the __NetwrixEnterpriseAuditor.exe__ executable to open the Enterprise Auditor Setup Wizard.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![ End User License Agreement](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 3 –__ On the End-User License Agreement page, read the End User License Agreement, then check the __I accept the terms in the License Agreement__ box and click __Next__.

![Destinations Folder page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/destination.png)

__Step 4 –__ On the Destination Folder page, click __Change__ to select the folder location to install Enterprise Auditor. The default destination folder is ```C:\Program Files (x86)\STEALTHbits\StealthAUDIT\```. Click __Next__ to continue.

|  |  |  |
| --- | --- | --- |
| ![License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.png) |  | ![License File page with mapped file](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/licensemapped.png) |
| Default License File Page |  | Mapped License File |

__Step 5 –__ On the License File page, click __Browse__ and navigate to your __StealthAUDIT.lic__ file. When the path to the file is visible in the textbox, click __Next__.

__NOTE:__ The license file must be stored on the Enterprise Auditor Console server before the installation begins.

![License Features page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/licensefeatures.png)

__Step 6 –__ The License Features page displays a list of all features covered by the imported license. It also displays the name of the organization which owns the license, the expiration date, and the host limit. These are the features that will be installed. Click __Next__.

![Ready to install Netwrix Access Governance page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.png)

__Step 7 –__ On the Ready to install Enterprise Auditor page, click __Install__ to begin the installation.

![Setup Wizard Completed page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 8 –__ When the installation has completed, click __Finish__ to exit the wizard.

The Enterprise Auditor Console has been installed, and two desktop icons have been created: Enterprise Auditor and Published Reports. Launch the Enterprise Auditor application to complete the initial configuration.
