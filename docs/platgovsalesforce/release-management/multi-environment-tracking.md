---
title: Multiple Environment Deployment Tracking
sidebar_label: Multi-Environment Tracking
description: Manage changes across production, development, and testing environments with push/pull change requests and cross-environment deployment tracking.
---

# Multiple Environment Deployments

Multiple Environment Deployment Tracking helps you manage changes between your Production and
Development/Testing .

With multiple environment deployment tracking, you can push, pull and access your change requests in
all your environments that have Platform Governance for Salesforce installed. This alleviates the
risk of breaking your production account. By documenting and validating the change process through
change requests, deployment records and environment comparison, multiple environment deployment
tracking enables you to access change requests in any environment where Platform Governance for
Salesforce is installed, and to deploy changes and promote code from one environment to another.

## Push/Pull Change Requests

1. Open **Change Requests** and locate the completed change request to push/pull.

   ![Open Completed Change Request](/img/product_docs/platgovsalesforce/release_management/push_pullcr-1.webp)

2. Edit the change request and add all necessary details.

   ![Edit the Change Request](/img/product_docs/platgovsalesforce/release_management/push_pull_cr.webp)

3. Click on **Sync CR**.

   ![Sync the Change Request](/img/product_docs/platgovsalesforce/release_management/push_pull_sync_cr.webp)

4. Choose a **Saved Environment**, where you are planning to push or pull the Change Request.
5. Add your **Credentials**.

   ![Enter Credentials](/img/product_docs/platgovsalesforce/release_management/push_pull_popup.webp)

6. Click on **Test Connection** to make sure your credentials are correct. If your credentials are
   not correct, you can click on **Save Credentials** and edit.

### Push the Change Request

To push a change request into another environment:

1. Click **Push**.
2. Click **Push CR**.

   ![pushcr](/img/product_docs/platgovsalesforce/release_management/pushcr.webp)

Your Change Request is pushed to your selected environment.

### Pull the Change Request

To pull a change request from the selected environment:

1. Select **Pull**
2. Click on **Get Change Requests**

   ![pullcr](/img/product_docs/platgovsalesforce/release_management/pullcr.webp)

3. Add the change requests you want to pull from the selected environment.

   ![pullchangerequest](/img/product_docs/platgovsalesforce/release_management/pullchangerequest.webp)

4. Click **Pull Change Request.**

The parent change request is the one you pull from and when the change request is pulled, it becomes
a child of the original change request.

# Multiple Environment Deployment Tracking

A best practice is to create change requests in your production account so that they are not lost,
they have an audit trail and approvals can be shown.

Here is the overall process flow for multiple deployment tracking:

> Create the Change Request
>
> Push the Change Request
>
> Push the Updated Change Back into Production
>
> Create the Deployment Record
>
> Create the Deployment Record
>
> Deploy the Changes
>
> Complete the Process

## Create the Change Request

1. In your Production environment, open **Change Requests** > **New Change Request**
2. Enter the relevant fields, including:

   - **Change Request Name**: Enter a meaningful name.
   - Select the **Change Type**.
   - **Change Overview**: Enter a meaningful description.
   - Add **Customizations**. If you add **Proposed Customizations** they do not show up on the
     change log as they do not exist in both environments.
   - Add **Additional Approver(s)**.

3. **Save** the change request.
4. Click **Submit for Approval**

## Push the Change Request

Once the change request is approved:

1. Click on **Sync CR**.

   ![Sync the Change Request](/img/product_docs/platgovsalesforce/release_management/push_pull_sync_cr.webp)

2. Choose a **Saved Environment**. (Where you plan on developing/testing solutions and/or
   customizations.)
3. Add your **Credentials**.

   ![Enter your credentials](/img/product_docs/platgovsalesforce/release_management/push_pull_popup.webp)

4. Click on **Test Connection** to make sure your credentials are correct. If your credentials are
   not correct,click on **Save Credentials** and edit.
5. Make the necessary changes on your change request in your development/testing environment and
   **Save**.

## Push the Updated Change Back into Production

1. On the updated change request, click **Sync CR**.
2. Choose a **Production** environment.
3. Add your **Credentials**.
4. Click **Test Connection** to make sure your credentials are correct. If your credentials are not
   correct, click on **Save Credentials** and edit.
5. Click **Push**.
6. Click **Push CR**.

![pushcr](/img/product_docs/platgovsalesforce/release_management/pushcr.webp)

After the push, the Change Request in Production has a related deployment record.

## Create the Deployment Record

1. Open the **Related Lists** tab on your change request.
2. Click on **Run Compare Tool**. Refer to
   [Compare Environments](/docs/platgovsalesforce/tools-and-utilities/comparison-tools.md) for more information.

   ![Run the Compare Environment tool](/img/product_docs/platgovsalesforce/release_management/apex_enviro_comparison.webp)

3. Click **Deploy** in the change request tool bar. **Deploy** is only available for approved change
   requests.
4. Enter your environments and credentials and **Test Connections**.
5. **Save** the deployment record.
6. Click **Submit for Approval**.

## Deploy the Changes

These steps can be completed after the deployment record is approved.

1. Open **Change Requests** and select the approved deployment record.
2. Click **Deploy Changes**

   ![Deploy the Approved Changes](/img/product_docs/platgovsalesforce/release_management/deployment_tool-2.webp)

3. Click **Retrieve Selected Customizations**

   ![Retrieve the Selected Customizations](/img/product_docs/platgovsalesforce/release_management/deployment_tool-3.webp)

   This creates a package to:

   - **Check Dependencies**: Use to check what has been referenced.
   - **Validate Customizations**: Use to check the deployment is going to work. It simulates your
     deployment.
   - **Deploy Retrieved Customizations**: Use to deploy your customizations when you are ready to
     proceed.

4. Check your dependencies and validate your customizations.
5. Click **Deploy Retrieved Customizations** to start the deployment. This may take some time, since
   it runs the test cases into the target environment.

   ![Run the Deployment](/img/product_docs/platgovsalesforce/release_management/deployment_tool-4.webp)

6. Run the Compare Tool to verify all changes moved correctly.

## Complete the Process

When the deployment process is finished:

1. Check the [Deployment Logs](/docs/platgovsalesforce/release-management/deployments.md).
2. Fix any errors and repeat the deployment if needed.
3. Once the deployment is successful, open the change request and set the status to **Completed**.

   ![Complete the Process](/img/product_docs/platgovsalesforce/release_management/deployment_tool-5.webp)
