---
sidebar_position: 6645
title: First Launch
---

# First Launch

Once Threat Prevention is installed, the Administration Console administrator is the only user who can launch it for the first time.

Follow the steps to launch Threat Prevention for the first time.

**Step 1 –** On first launch, the Netwrix Threat Prevention Licensing Configuration window is displayed to the first Administration Console administrator, showing a license key warning:

* Product license will expire in  days. Please contact your Netwrix representative for a new license.

This warning always displays when the organization’s license is within 14 days of expiring. Click **OK**. See the [Import the License](LicenseImport "Import the License") topic for licensing the product.

![Import Templates dialog box](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ImportTemplates.png "Import Templates dialog box")

**Step 2 –** On the Import Templates dialog box, you can choose to import policy templates now or later.

In Threat Prevention, many policy templates are pre-configured for the most common policy types, so that you can quickly configure a policy. See the [Templates Interface](../Admin/Templates/Overview "Navigates to the Templates Interface policy center topic. ") topic for details.

* Click **Yes** on the Import Templates dialog box to import all the templates into the Administration Console now. Once complete, the templates are available to all Administration Console users.
* On clicking **No**, the Import Templates dialog box appears asking, “Do you want to be prompted again next time this application loads?”

You can import the policy templates any time later. See the [Import Templates](../Admin/Templates/Folder/Overview#Import "Import Templates") topic for additional information.

![Install Agent dialog box](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/InstallAgent.png "Install Agent dialog box")

**Step 3 –** On the Install Agents dialog box, you can choose to install the Agent on servers now or later.

The Agent is responsible for monitoring the events as configured in policies. The Agent must be deployed on all the servers where these events occur. Use the Administration Console to deploy and manage the Agent.

* Click **Yes** on the Install Agents dialog box to launch the **Deploy Agents** wizard. See the [Deploy Agents](../Admin/Agents/Deploy/Overview "Deploy Agents") topic for additional information.
* Click **No** if you do not want to install the Agents now. To install Agents later, see the [Agents Interface](../Admin/Agents/Overview "Navigates to the Agents Interface. ") topic.

See the [Getting Started](../GettingStarted "Getting Started") topic for the next steps.