---
sidebar_position: 1432
title: Redeploy Scripts After Sandbox Refresh
---

# Redeploy Scripts After Sandbox Refresh

NetSuite has removed the scheduled status on scripts after a sandbox is refreshed. This stops the scripts required for environment compares, change requests built to push to production, and other activities. This suitelet enables you to automatically reset all of your Platform Governance for NetSuite scripts. If you have scheduled custom scripts in your sandbox, you must manually set the status after a sandbox refresh.

1. Open your Sandbox.
2. Open **Customization** > **Scripting** > **Scripts**.
3. Set the Filter **Type** to **Suitelet** and the **Bundle ID** to **294336**.

   ![](../../../../static/images/enus/Content/Resources/Images/scripts.png "Find the Suitelet")
4. Click **View** by the **Strongpoint Reset Schedule Deployments** suitelet.
5. Open the **Deployments** tab.

   ![](../../../../static/images/enus/Content/Resources/Images/script_deploy_tab.png "Open the Deployment tab")
6. Click the Suitelet name: **Strongpoint Reset Schedule Deployments**.
7. Click on the Script **URL**.

   ![](../../../../static/images/enus/Content/Resources/Images/script_deploy_url.png "Click the Script URL")