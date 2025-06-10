# Update License Key

It is necessary to install a new license key for an existing Access Analyzer installation due to the following:

- To renew a Access Analyzer license that is due to expire
- To grant access to additional Solutions
- To enable Sensitive Data Discovery

In these situations it is possible to update the license file without going through the full installation process.

## Install a New License File

Follow the steps to update the Access Analyzer license key without installing a new version of the Access Analyzer Console.

__Step 1 –__ Ensure the new ```StealthAUDIT.lic``` license file is stored locally on the Access Analyzer Console server in order to be referenced during the installation process.

![Windows Control Panel Uninstall or change a program window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/controlpaneluninstall.webp)

__Step 2 –__ From Programs and Features (__Control Panel__ > __Programs__ > __Programs and Features__), select the Access Analyzer application and click __Change__.

![Setup Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

__Step 3 –__ On the Welcome page, click __Next__.

![Setup Wizard Change, Repair, or Remove Installation page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/change.webp)

__Step 4 –__ On the Change, Repair, or Remove Installation page, click __Change__.

|  |  |  |
| --- | --- | --- |
| ![License File page](/img/product_docs/activitymonitor/activitymonitor/install/agent/license.webp) |  | ![License File page with mapped file](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/licensemapped.webp) |
| Default License File Page |  | Mapped License File |

__Step 5 –__ On the License File page, click __Browse__ and navigate to the __StealthAUDIT.lic__ file. It must be stored on the Access Analyzer Console server before the installation begins. When the path to the file is visible in the text box, click __Next__. The license will be imported.

![License Features page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/licensefeatures.webp)

__Step 6 –__ The License Features page displays a list of all features covered by the imported license. It also displays the name of the organization which owns the license, the expiration date, and the host limit. These are the features that will be installed. Click __Next__.

![Setup Wizard Ready to change page](/img/product_docs/activitymonitor/activitymonitor/install/ready.webp)

__Step 7 –__ On the Ready to Change Access Analyzer page, click __Change__ to begin the update.

![Setup Wizard Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

__Step 8 –__ When the installation has completed, click __Finish__ to exit the wizard.

The new license file has been imported. If the license granted access to any additional solutions, they will now be accessible from within the Access Analyzer Console. If the new license added Sensitive Data Discovery, the necessary components for Sensitive Data Discovery have been installed.
