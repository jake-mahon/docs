# Access Analyzer Core Installation

Save the organization’s Access Analyzer license key, received from your Netwrix Sales Representative, to the server where Access Analyzer is to be installed. Then follow the steps to install Access Analyzer.

__NOTE:__ The process explained in this topic assumes that both the downloaded binary and the license (.lic) file are located on the server which will become the Access Analyzer Console.

__CAUTION:__ If User Account Control (UAC) is enabled on the server, ensure the installation package is run in Administrative/privilege mode.

__Step 1 –__ Run the __NetwrixEnterpriseAuditor.exe__ executable to open the Access Analyzer Setup Wizard.

![Setup Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

__Step 2 –__ On the Welcome page, click __Next__ to begin the installation.

![ End User License Agreement](/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

__Step 3 –__ On the End-User License Agreement page, read the End User License Agreement, then check the __I accept the terms in the License Agreement__ box and click __Next__.

![Destinations Folder page](/img/product_docs/accessanalyzer/enterpriseauditor/install/filesystemproxy/destination.webp)

__Step 4 –__ On the Destination Folder page, click __Change__ to select the folder location to install Access Analyzer. The default destination folder is ```C:\Program Files (x86)\STEALTHbits\StealthAUDIT\```. Click __Next__ to continue.

|  |  |  |
| --- | --- | --- |
| ![License File page](/img/product_docs/activitymonitor/activitymonitor/install/agent/license.webp) |  | ![License File page with mapped file](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/licensemapped.webp) |
| Default License File Page |  | Mapped License File |

__Step 5 –__ On the License File page, click __Browse__ and navigate to your __StealthAUDIT.lic__ file. When the path to the file is visible in the textbox, click __Next__.

__NOTE:__ The license file must be stored on the Access Analyzer Console server before the installation begins.

![License Features page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/licensefeatures.webp)

__Step 6 –__ The License Features page displays a list of all features covered by the imported license. It also displays the name of the organization which owns the license, the expiration date, and the host limit. These are the features that will be installed. Click __Next__.

![Ready to install Netwrix Access Governance page](/img/product_docs/activitymonitor/activitymonitor/install/ready.webp)

__Step 7 –__ On the Ready to install Access Analyzer page, click __Install__ to begin the installation.

![Setup Wizard Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

__Step 8 –__ When the installation has completed, click __Finish__ to exit the wizard.

The Access Analyzer Console has been installed, and two desktop icons have been created: Access Analyzer and Published Reports. Launch the Access Analyzer application to complete the initial configuration.
