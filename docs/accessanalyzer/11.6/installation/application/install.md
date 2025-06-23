---
title: Installation: install
sidebar_label: install
description: Installation guide for install including system requirements, setup procedures, and configuration options.
---

# Installation & Configuration Overview

This section provides instructions for installing Enterprise Auditor and the initial configuration
required when first launching the Enterprise Auditor Console. It also includes additional
information, such as how to secure the Enterprise Auditor Database, and configuring the Web Console
for viewing reports outside of the Enterprise Auditor Console.

Prior to installing Enterprise Auditor, please ensure that all of the prerequisites have been met.
See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for more information.

## Binaries

There are a variety of Enterprise Auditor binaries based on the organizational auditing objectives.
Your Netwrix Representative will provide the appropriate binaries.

- Enterprise Auditor binary – Core installation package

  - Includes data collectors, analysis modules, and action modules
  - An organization’s license key, needed during installation, controls which components are laid
    down during installation
  - Installs the Web Console

- File System Proxy binary – Installation package for the File System Proxy Scanning option

  - See the
    [File System Proxy Service Installation](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
    topic for additional information.

- Activity Monitor binary – Installation package for monitoring Windows and NAS device file system
  activity

  - See the Installation topic of the
    [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
    for additional information.

- Sensitive Data Discovery Add-on binary – Installation package for File System and/or SharePoint
  Sensitive Data Discovery Add-on

  - See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
    topic for additional information.

- SharePoint Agent binary – Installation package for the SharePoint Agent (optional for Access
  Auditing of SharePoint farms)

  - See the
    [SharePoint Agent Installation](/docs/accessanalyzer/11.6/installation/sharepoint-agent/install.md)
    topic for additional information.

- Enterprise Auditor MAPI CDO binary – One of two installation package needed to enable the Exchange
  Solution

  - See the
    [StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/11.6/configuration-guides/stealthaudit/configuration.md)
    topic for additional information.

- Enterprise Auditor Reporting Services binary – Installation package for Survey Action Module
  Reporting Service
- Netwrix Access Information Center binary – Installation package for the Netwrix Access Information
  Center

  - Customers who are logged in to the Netwrix Customer Portal can download the latest version of
    their software products from the My Products page:
    [https://www.netwrix.com/my_products.html](https://www.netwrix.com/my_products.html). See the
    [Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
    topic for information on how to register for a Customer Portal account.
  - See the
    [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
    for additional information.

## License Key

Your Netwrix Representative will provide the necessary license key. The Enterprise Auditor license
key (`StealthAUDIT.lic`) is needed for the Enterprise Auditor Core Installation. See the
[Enterprise Auditor Core Installation](/docs/accessanalyzer/11.6/installation/application/install.md)
topic for additional information.

To grant access to additional Solution sets in an existing Enterprise Auditor installation, a new
license key is required. To update the Enterprise Auditor license key without installing a new
version of the Enterprise Auditor Console, see the
[Update License Key](/docs/accessanalyzer/11.6/installation/application/license.md)
topic for instructions.

# Enterprise Auditor Core Installation

Save the organization’s Enterprise Auditor license key, received from your Netwrix Sales
Representative, to the server where Enterprise Auditor is to be installed. Then follow the steps to
install Enterprise Auditor.

**NOTE:** The process explained in this topic assumes that both the downloaded binary and the
license (.lic) file are located on the server which will become the Enterprise Auditor Console.

**CAUTION:** If User Account Control (UAC) is enabled on the server, ensure the installation package
is run in Administrative/privilege mode.

**Step 1 –** Run the **Netwrixaccessanalyzer.exe** executable to open the Enterprise Auditor
Setup Wizard.

![Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![ End User License Agreement](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.webp)

**Step 3 –** On the End-User License Agreement page, read the End User License Agreement, then check
the **I accept the terms in the License Agreement** box and click **Next**.

![Destinations Folder page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/destination.webp)

**Step 4 –** On the Destination Folder page, click **Change** to select the folder location to
install Enterprise Auditor. The default destination folder is
`C:\Program Files (x86)\STEALTHbits\StealthAUDIT\`. Click **Next** to continue.

|                                                                                                          |     |                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![License File page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/license.webp) |     | ![License File page with mapped file](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/licensemapped.webp) |
| Default License File Page                                                                                |     | Mapped License File                                                                                                                  |

**Step 5 –** On the License File page, click **Browse** and navigate to your **StealthAUDIT.lic**
file. When the path to the file is visible in the textbox, click **Next**.

**NOTE:** The license file must be stored on the Enterprise Auditor Console server before the
installation begins.

![License Features page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/licensefeatures.webp)

**Step 6 –** The License Features page displays a list of all features covered by the imported
license. It also displays the name of the organization which owns the license, the expiration date,
and the host limit. These are the features that will be installed. Click **Next**.

![Ready to install Netwrix Access Governance page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.webp)

**Step 7 –** On the Ready to install Enterprise Auditor page, click **Install** to begin the
installation.

![Setup Wizard Completed page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/sensitivedatadiscovery/completed.webp)

**Step 8 –** When the installation has completed, click **Finish** to exit the wizard.

The Enterprise Auditor Console has been installed, and two desktop icons have been created:
Enterprise Auditor and Published Reports. Launch the Enterprise Auditor application to complete the
initial configuration.
