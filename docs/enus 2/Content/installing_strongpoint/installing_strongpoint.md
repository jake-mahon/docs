---
sidebar_position: 2853
title: Install Platform Governance for Salesforce
---

# Install Platform Governance for Salesforce

Platform Governance for Salesforce is installed with package installation file sent to you by our customer success team. To install:

1. Click on the install URL, if installing in the sandbox, replace the initial portion of the URL with [http://test.salesforce.com](http://test.salesforce.com "http://test.salesforce.com")
2. Select **Install for Admins Only**
3. Click **Install**
![](../Resources/Images/Install1.JPG)

:::note
The installation runs in the background. An email notification is sent to you when the installation is complete.
:::

## Configure Platform Governance for Salesforce

The following items are needed:

* Create a **Connected App** to generate and extract the Salesforce **Consumer Key** and the Salesforce **Consumer Secret Key**
* Your Salesforce **username**, **password** and **authentication token**

1. Open Salesforce **Setup** > **Apps** > **App Manager**
2. Click **New Connected App**
3. Select **Create a Connected App** and click **Continue**
4. Under **Basic Information** enter the required fields:

* **Connected App Name**: **Netwrix Platform Governance**
* **API Name**: **Netwrix\_Platform\_Governance**
* **Contact E-mail**

5. Click **API (Enable OAuth Settings)** to expand the section.
6. Set **Call Back URL** to **[https://localhost.com](https://localhost.com "https://localhost.com")**
7. Set **Selected OAuth Scopes** to **Full access (full)**

   ![](../Resources/Images/Connected_App.png "Setting for Connected App")

   :::note
The Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows should not be checked.
   :::
8. Click **Save**. **Netwrix Platform Governance**is now listed under **Custom Apps**.
9. Click on **Netwrix Platform Governance**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/configure-1.png)
10. Click **Manage Consumer Details**. You must verify your identity before you can proceed.
11. Copy the **Consumer Key** and the **Consumer Secret Key**.
12. Open the Salesforce App Launcher.
13. Locate and select **Netwrix Lightning**.
14. Click **I Accept** for the EULA.

**Next Step:** [Using the Getting Started Wizard](using_getting_started_wizard "Open the Using the Getting Started Wizard topic")