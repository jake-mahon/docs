---
sidebar_position: 2812
title: Multiple Environment Deployment Tracking
---

# Multiple Environment Deployment Tracking

A best practice is to create change requests in your production account so that they are not lost, they have an audit trail and approvals can be shown.

Here is the overall process flow for multiple deployment tracking:

> [Create the Change Request](#Create)
>
> [Push the Change Request](#Push)
>
> [Push the Updated Change Back into Production](#Push2)
>
> [Create the Deployment Record](#Create2)
>
> [Create the Deployment Record](#Create2)
>
> [Deploy the Changes](#Deploy)
>
> [Complete the Process](#Complete)

## Create the Change Request

1. In your Production environment, open **Change Requests** > **New Change Request**
2. Enter the relevant fields, including:

   * **Change Request Name**: Enter a meaningful name.
   * Select the **Change Type**.
   * **Change Overview**: Enter a meaningful description.
   * Add **Customizations**. If you add **Proposed Customizations** they do not show up on the change log as they do not exist in both environments.
   * Add **Additional Approver(s)**.
3. **Save** the change request.
4. Click **Submit for Approval**

## Push the Change Request

Once the change request is approved:

1. Click on **Sync CR**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/push_pull_sync_cr.png "Sync the Change Request")
2. Choose a **Saved Environment**. (Where you plan on developing/testing solutions and/or customizations.)
3. Add your **Credentials**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/push_pull_popup.png "Enter your credentials")
4. Click on **Test Connection** to make sure your credentials are correct. If your credentials are not correct,click on **Save Credentials** and edit.
5. Make the necessary changes on your change request in your development/testing environment and **Save**.

## Push the Updated Change Back into Production

1. On the updated change request, click **Sync CR**.
2. Choose a **Production** environment.
3. Add your **Credentials**.
4. Click **Test Connection** to make sure your credentials are correct. If your credentials are not correct, click on **Save Credentials** and edit.
5. Click **Push**.
6. Click **Push CR**.

![](../../../../static/images/enus 2/Content/Resources/Images/pushcr.png)

After the push, the Change Request in Production has a related deployment record.

## Create the Deployment Record

1. Open the **Related Lists** tab on your change request.
2. Click on **Run Compare Tool**. Refer to [Compare Environments](../tools/environment_comparison "Open Compare Environments topic") for more information.

   ![](../../../../static/images/enus 2/Content/Resources/Images/apex_enviro_comparison.png "Run the Compare Environment tool")
3. Click **Deploy** in the change request tool bar. **Deploy** is only available for approved change requests.
4. Enter your environments and credentials and **Test Connections**.
5. **Save** the deployment record.
6. Click **Submit for Approval**.

## Deploy the Changes

These steps can be completed after the deployment record is approved.

1. Open **Change Requests** and select the approved deployment record.
2. Click **Deploy Changes**

   ![](../../../../static/images/enus 2/Content/Resources/Images/deployment_tool-2.png "Deploy the Approved Changes")
3. Click **Retrieve Selected Customizations**

   ![](../../../../static/images/enus 2/Content/Resources/Images/deployment_tool-3.png "Retrieve the Selected Customizations")

   This creates a package to:

   * **Check Dependencies**: Use to check what has been referenced.
   * **Validate Customizations**: Use to check the deployment is going to work. It simulates your deployment.
   * **Deploy Retrieved Customizations**: Use to deploy your customizations when you are ready to proceed.
4. Check your dependencies and validate your customizations.
5. Click **Deploy Retrieved Customizations** to start the deployment. This may take some time, since it runs the test cases into the target environment.

   ![](../../../../static/images/enus 2/Content/Resources/Images/deployment_tool-4.png "Run the Deployment")
6. Run the Compare Tool to verify all changes moved correctly.

## Complete the Process

When the deployment process is finished:

1. Check the [Deployment Logs](deployment_logs "Open Deployment Logs topic").
2. Fix any errors and repeat the deployment if needed.
3. Once the deployment is successful, open the change request and set the status to **Completed**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/deployment_tool-5.png "Complete the Process")