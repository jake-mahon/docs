---
sidebar_position: 3458
title: MDM / Intune Delivery Quick Start
---

# MDM / Intune Delivery Quick Start

For a video overview of MDM delivery via Intune, see the [Endpoint Policy Manager and Microsoft Intune](../../Video/MDM/MicrosoftIntune "Endpoint Policy Manager and Microsoft Intune"). The installation steps are below.

**Step 1 –** Install the Endpoint Policy Manager Client on an example endpoint.

In the download, find the **Client Side Extensions (CSE)** folder. Install it by hand on a few Windows 10 or Windows 11 endpoints. Alternatively, use your software deployment tool (like Intune) to deliver the CSE to a few endpoints.

**Step 2 –** Install the Endpoint Policy Manager Admin Console on a management machine with the GPMC pre-installed

In the download, find the **Admin Console MSI** and install it manually on your machine. Your machine needs to also have the GPMC pre-installed from Microsoft. It is recommended that you have both the Endpoint Policy Manager Admin Console and the GPMC installed on a “fake DC” exclusively for editing purposes. See the [How to create a DC for editing purposes](../../Video/Cloud/TestLab/CreateDC "How to create a DC for editing purposes") video for details and how to do this.

**Step 3 –** Install your license key or rename your example endpoint to have computer in the name.

**NOTE:** If you got a license file back from the Netwrix sales team, you can import it to enable computers in the locations (scope) you requested. Alternatively, you can merely rename an endpoint have the word Computer in the name, and the computer will act fully licensed.

Follow the [Endpoint Policy Manager and MDM walk before you run](../../Video/MDM/TestSample "Endpoint Policy Manager and MDM walk before you run") video to install an MDM license file.

Check the [What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?](../../License/Trial "How can I get started in an Endpoint Policy Manager trial fastest, without running the License Request Tool?") topic to see how to rename a computer or perform alternative licensing.