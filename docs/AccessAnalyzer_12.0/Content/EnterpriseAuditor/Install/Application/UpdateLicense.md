---
sidebar_position: 6259
title: Update License Key
---

# Update License Key

It is necessary to install a new license key for an existing Access Analyzer installation due to the following:

* To renew a Access Analyzer license that is due to expire
* To grant access to additional Solutions
* To enable Sensitive Data Discovery

In these situations it is possible to update the license file without going through the full installation process.

## Install a New License File

Follow the steps to update the Access Analyzer license key without installing a new version of the Access Analyzer Console.

**Step 1 –** Ensure the new `StealthAUDIT.lic` license file is stored locally on the Access Analyzer Console server in order to be referenced during the installation process.

![Windows Control Panel Uninstall or change a program window](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/ControlPanelUninstall.png "Windows Control Panel Uninstall or change a program window")

**Step 2 –** From Programs and Features (**Control Panel** > **Programs** > **Programs and Features**), select the Access Analyzer application and click **Change**.

![Setup Wizard Welcome page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/UpdateLicense/Welcome.png "Setup Wizard Welcome page")

**Step 3 –** On the Welcome page, click **Next**.

![Setup Wizard Change, Repair, or Remove Installation page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/UpdateLicense/Change.png "Setup Wizard Change, Repair, or Remove Installation page")

**Step 4 –** On the Change, Repair, or Remove Installation page, click **Change**.

|  |  |  |
| --- | --- | --- |

| License File page |  | License File page with mapped file |
| Default License File Page |  | Mapped License File |

**Step 5 –** On the License File page, click **Browse** and navigate to the **StealthAUDIT.lic** file. It must be stored on the Access Analyzer Console server before the installation begins. When the path to the file is visible in the text box, click **Next**. The license will be imported.

![License Features page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Core/LicenseFeatures.png "License Features page")

**Step 6 –** The License Features page displays a list of all features covered by the imported license. It also displays the name of the organization which owns the license, the expiration date, and the host limit. These are the features that will be installed. Click **Next**.

![Setup Wizard Ready to change page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/UpdateLicense/Ready.png "Setup Wizard Ready to change page")

**Step 7 –** On the Ready to Change Access Analyzer page, click **Change** to begin the update.

![Setup Wizard Completed page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Core/Completed.png "Setup Wizard Completed page")

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The new license file has been imported. If the license granted access to any additional solutions, they will now be accessible from within the Access Analyzer Console. If the new license added Sensitive Data Discovery, the necessary components for Sensitive Data Discovery have been installed.