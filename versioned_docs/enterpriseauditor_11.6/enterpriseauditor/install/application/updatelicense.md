# Update License Key

It is necessary to install a new license key for an existing Enterprise Auditor installation due to the following:

- To renew a Enterprise Auditor license that is due to expire
- To grant access to additional Solutions

In these situations it is possible to update the license file without going through the full installation process.

## Install a New License File

Follow the steps to update the Enterprise Auditor license key without installing a new version of the Enterprise Auditor Console.

__Step 1 –__ Ensure the new ```StealthAUDIT.lic``` license file is stored locally on the Enterprise Auditor Console server in order to be referenced during the installation process.

![Windows Control Panel Uninstall or change a program window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/controlpaneluninstall.png)

__Step 2 –__ From Programs and Features (__Control Panel__ > __Programs__ > __Programs and Features__), select the Enterprise Auditor application and click __Change__.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 3 –__ On the Welcome page, click __Next__.

![Setup Wizard Change, Repair, or Remove Installation page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/change.png)

__Step 4 –__ On the Change, Repair, or Remove Installation page, click __Change__.

|  |  |  |
| --- | --- | --- |
| ![License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.png) |  | ![License File page with mapped file](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/licensemapped.png) |
| Default License File Page |  | Mapped License File |

__Step 5 –__ On the License File page, click __Browse__ and navigate to the __StealthAUDIT.lic__ file. It must be stored on the Enterprise Auditor Console server before the installation begins. When the path to the file is visible in the text box, click __Next__. The license will be imported.

![License Features page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/licensefeatures.png)

__Step 6 –__ The License Features page displays a list of all features covered by the imported license. It also displays the name of the organization which owns the license, the expiration date, and the host limit. These are the features that will be installed. Click __Next__.

![Setup Wizard Ready to change page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.png)

__Step 7 –__ On the Ready to Change Enterprise Auditor page, click __Change__ to begin the update.

![Setup Wizard Completed page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 8 –__ When the installation has completed, click __Finish__ to exit the wizard.

The new license file has been imported. If the license granted access to any additional solutions, they will now be accessible from within the Enterprise Auditor Console.
