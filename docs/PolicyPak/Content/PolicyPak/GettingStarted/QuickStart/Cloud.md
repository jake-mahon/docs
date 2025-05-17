---
sidebar_position: 3463
title: Endpoint Policy Manager Cloud Delivery Quick Start
---

# Endpoint Policy Manager Cloud Delivery Quick Start

For an overview of delivery via PolicyPak Cloud, see the [Endpoint Policy Manager Cloud: QuickStart](../../Video/Cloud/QuickStart "Endpoint Policy Manager Cloud: QuickStart") video .

Follow the steps below to carry out the Endpoint Policy Manager cloud delivery:

**Step 1 –** Install the Endpoint Policy Manager Cloud Client on an example endpoint

Log on to [cloud.policypak.com](http://cloud.policypak.com/ "cloud.Endpoint Policy Manager.com") with the credentials provided to you via email from Netwrix sales. In the Company tab download the PolicyPak Cloud Client MSI for your PolicyPak Cloud tenant.

Install it by hand on a few Windows 10 or Windows 11 endpoints. Alternatively, use your software deployment tool (like Intune) to deliver the CSE to a few endpoints. See the [Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.](../../Video/Cloud/MDM "Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.") video of using Intune to bootstrap the PolicyPak cloud client install.

The Endpoint Policy Manager Cloud Client automatically installs the PolicyPak CSE at the same time.

**NOTE:** Each time you install the Endpoint Policy Manager Cloud Client you will consume one of your 10 example licenses

**Step 2 –** (optional, recommended): Install the Endpoint Policy Manager Admin Console on a management machine with the GPMC pre-installed

In the download, find the **Admin Console MSI**. Install it by hand on your machine. Your machine needs to also have the GPMC pre-installed from Microsoft. We recommend you have both the Endpoint Policy Manager Admin Console and the GPMC installed on a “fake DC” exclusively for editing purposes. See the [How to create a DC for editing purposes](../../Video/Cloud/TestLab/CreateDC "How to create a DC for editing purposes") video for details and how to do this.

**NOTE:** If you bypass this step, you can still use the Endpoint Policy Manager in-cloud editors, but some options may not be available to you for editing without an on-prem editor station.

**Step 3 –** Start creating policies using Endpoint Policy Manager Cloud

If you want to make Microsoft Group Policy settings via Endpoint Policy Manager Cloud, see the [Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](../../Video/Cloud/Deploy/GroupPolicySettings "Endpoint Policy Manager Cloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud")video.

If you want to make Endpoint Policy Manager specific settings (like Endpoint Policy Manager Least Privilege Manager, etc.) via Endpoint Policy Manager Cloud, see the [Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)](../../Video/Cloud/Deploy/PolicyPakSettings)") video.