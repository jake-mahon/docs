---
title: Microsoft Intune Agent Deployment
sidebar_label: Intune
description: Step-by-step guide for deploying Endpoint Protector agents through Microsoft Intune MDM for Windows and macOS endpoints.
---

# Microsoft Intune

This guide describes the steps needed to deploy Netwrix Endpoint Protector to multiple endpoints
using the MSI application in Microsoft Intune. Microsoft Intune is a cloud-based service focusing on
mobile device management (MDM) and mobile application management (MAM).

**NOTE:** This document serves as an optional reference for Microsoft Intune (currently known as
Microsoft Endpoint Manager). It is not regularly updated and may not align with the current version
of the product. Please refer to the official resources for the most up-to-date information.

# macOS Deployment

To deploy the Endpoint Protector package for macOS using Intune, follow these steps:

**Step 1 –** Open and log in to Endpoint Protector.

**Step 2 –** Go to the System Configuration, Client Software and download the macOS Endpoint
Protector package.

![Downloading the macOS Endpoint Protector package](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/packagedownload.webp)

**Step 3 –** Convert the Endpoint Protector client to an .intunemac file – for more information and
procedure, visit the Microsoft Docs portal;

**Step 4 –** Go to the Microsoft Endpoint Manager admin center and sign in

**Step 5 –** Go to Apps from the left-hand side menu, and on the Apps Overview page, select the
macOS platform;

**Step 6 –** On the macOS apps page, click Add, select the Line of business app type, and then click
**Select**.

![macOS configurations on the Apps Overview page](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/macappsoverview.webp)

**Step 7 –** Click Select app package file and from the right-hand side, select the Endpoint
Protector intunemac file, Upload and click **OK.**

![Information about the app package file](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/macaddapp.webp)

**Step 8 –** On the App information page, fill in the mandatory fields and then click **Next**.

- Name – add Endpoint Protector Client
- Description – add Endpoint Protector Client
- Publisher – add Netwrix Ltd.

![Completing Mandatory Fileds under App inforamtion page](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/appinformation.webp)

**Step 9 –** On the Assignments page, in the Required section, select the group for which you want
to deploy the Endpoint Protector client and then click **Next**.

![Selecting the group for which you want to deploy the Endpoint Protector client](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/macassignments.webp)

**Step 10 –** On the Review + create page, click Create - this will start the Endpoint Protector
package upload.

![Inititating the Endpoint Protector package Download](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/macreviewpage.webp)

**Step 11 –** Go to Devices from the left-hand menu, select macOS, Shell scripts and then click
**Add**.

**NOTE:** Please contact the Customer Support department to provide the script.

![Adding scripts on shell scripts page](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/shellscripts.webp)

**Step 12 –** On the Add script page, fill in the mandatory information and then click **Next**.

- Name (mandatory) – add a name for the script (Post install script)
- Description – add a description for the script

![Completing mandatory inforamtion for Shell Scripts](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/addscript.webp)

**Step 13 –** On the Script settings tab, add the following information and then click Next:

- Upload and select the New Jamf PostInstall script from your computer
- Set the Run script as sign-in user setting to No

![Adding inforamtion on the script settings page](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/scriptsettings.webp)

**Step 14 –** On the Assignments tab, include the groups you prefer (Add groups, all users, or all
devices) and then click **Next**.

![Including the groups you prefer](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/includegroups.webp)

**Step 15 –** On the Review + add tab, you can view the script information and click **Add**.

![Viewing the script information](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/scriptinformation.webp)

# Windows Deployment

To deploy the Endpoint Protector MSI package for Windows using Intune, follow these steps:

**Step 1 –** Open and log in to Endpoint Protector;

**Step 2 –** Go to the System Configuration, Client Software and download the Windows Endpoint
Protector MSI package;

![Downloading the Windows Endpoint Protector MSI Package](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/msipackagedownload.webp)

**CAUTION:** When deploying the .msi package, delete the information contained in the brackets as
well as the underscore that precedes it - EPPClientSetup.5.6.3.1_x86_64.msi

![A black text on a white background

Description automatically
generated](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/msipackage.webp)

**Step 3 –** Go to the Microsoft Endpoint Manager admin center and sign in;

**Step 4 –** Go to Apps from the left-hand side menu, and on the Apps Overview page, select the
Windows platform;

![Apps Overview Page](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/appsoverview.webp)

**Step 5 –** On the Windows App page, click Add, select the Line of business app type, and then
click Select;

![Selecting the Line of business app type](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/apptype.webp)

**Step 6 –** Click Select app package file and from the right-hand side, select the Endpoint
Protector MSI file and click OK;

![Selecting Endpoint Protector Package file ](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/apppackagefile.webp)

**Step 7 –** On the App information page, fill in the mandatory fields and then click Next:

- Name – add Endpoint Protector and optional, the package version (Endpoint Protector 5.7.3.6)
- Description – click Edit Description and add installation details
- Publisher – add NetwrixLtd.
- Command-line argument – add the following command line in the text box

  - WSIP="EPP_server_IP" WSPORT="443" /q REBOOT=ReallySuppress

![App information page to add information. ](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/addapp.webp)

**Step 8 –** On the Assignments page, in the Requirement section, select the group for which you
want to deploy the Endpoint Protector client and then click Next;

![Selecting the group for which you want to deploy the Endpoint Protector Client](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/assignmentspage.webp)

**Step 9 –** On the Review + create page, click Create - this will start the Endpoint Protector MSI
package upload.

![Initiating the Endpoint Protector Package MSI upload](/img/product_docs/endpointprotector/endpointprotector/install/agent/intune/reviewpage.webp)
