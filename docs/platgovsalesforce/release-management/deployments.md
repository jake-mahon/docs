# Deployments

Your deployments can be documented across your test environment(s) to your production
environment(s). Each step in the deployment process complies with your policies and a comprehensive
approval process. Deployments are blocked if approvals are not complete. A full audit trail of the
entire deployment process is maintained.The process is:

> Create a Change Request
>
> Create a Deployment Record
>
> Deploy the Changes
>
> Complete the Process

## Create a Change Request

1. Open **Change Requests** > **New Change Request**
2. Enter a meaningful **Name** and **Change Overview**
3. Modify the **Change Type** as needed. Add any other supporting information, change sets, package
   manifests, or customizations.
4. **Save** the change request.
5. Click **Submit for Approval**

## Create a Deployment Record

These steps can be completed after the change request is approved.

1. Open **Change Requests** and select the approved change request.
2. Click **Deploy** in the tool bar. **Deploy** is only available for approved change requests.

   ![Deploy Button in Tool Bar](/img/product_docs/platgovsalesforce/release_management/deploy.webp)

3. Select the **Source** (from) environment and **Target** (to) environment.
4. Enter your credentials for both environments.

   ![Deployment Tool](/img/product_docs/platgovsalesforce/release_management/deployment_tool.webp)

5. Click **Test Connection** for both environments to ensure your credentials are correct. If your
   credentials are not correct, you can click on **Save Credentials** and edit.
6. Click **Run Scan** on both environments to ensure the customizations on the change request are up
   to date.
7. **Save** the Deployment Record.
8. Click **Submit for Approval**

   ![Submit Deployment Record for Approval](/img/product_docs/platgovsalesforce/release_management/deploy.webp)

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

## Complete the Process

When the deployment process is finished:

1. Check the [Deployment Logs](/docs/platgovsalesforce/release-management/deployments.md).
2. Fix any errors and repeat the deployment if needed.
3. Once the deployment is successful, open the change request and set the status to **Completed**.

   ![Complete the Process](/img/product_docs/platgovsalesforce/release_management/deployment_tool-5.webp)

# Deployment Logs

The deployment log is attached to the Deployment Record on the **Related Lists** tab. You can also
access the logs from **Strongpoint** > **Reports** > **Release and Deployment**.

Deployment logs have these sections:

> Deployment Log Detail
>
> Customizations
>
> Deployed Components and Apex Test Information
>
> Deployment Error Messages
>
> Notes and Attachments
>
> Deployment Components

## Sample Deployment Log

![Successful deployment log example](/img/product_docs/platgovsalesforce/release_management/deployment_log.webp)

## Deployment Log Detail

> **Deployment Log Name**: Name of the Deployment Record.
>
> **Change Request**: Link to the change request associated with the deployment record.
>
> **Start Date**: Date deployment was started.
>
> **Owner**: Link to the Deployment Owner. Click **Change** to edit the owner information.
>
> **Status**: Current status of the deployment. Double click to edit. Status options are:
>
> - Pending
> - InProgress
> - Succeeded
> - SucceededPartial
> - Failed
> - Canceling
> - Canceled
> - Retrieve In Progress
> - Retrieve Completed
> - Retrieve Failed
> - Validation In Progress
> - Validation Completed
> - Validation Failed
> - Rollback In Progress
> - Rollback Partial
> - Rollback Completed
> - Rollback Failed
>
> **Deployment Status**: Green Flag for Succeeded Red Flag for Failed.
>
> **Retrieve Status**: Green Flag for Succeeded Red Flag for Failed.
>
> **Completed Date**: Date deployment was completed.
>
> **State Detail**: Component being deployed or the Apex test class running.

## Customizations

Links to the customizations attached to the deployment record. The link open the customization
record.

## Deployed Components and Apex Test Information

> **Components Total**: Number of components in the deployment.
>
> **Components Deployed**: Number of components deployed in the deployment process.
>
> **Component Errors**:Number of components generating errors during the deployment.
>
> **# of Tests Total**: Number of Apex tests for the deployment.
>
> **# of Tests Completed**: Number of Apex tests completed for the deployment.
>
> **# of Test Errors**: Number of Apex tests generating errors during the deployment.

## Deployment Error Messages

> **Deploy Error Messages**: Lists the components and generated errors.
>
> **Tests Error Message**: Lists the test failures.
>
> **Retrieve Error Message**: Lists the error message if a retrieve fails.
>
> **Created By**: Link to user who created the deployment log.
>
> **Last Modified By**: Link to user who last modified the deployment log.

## Notes and Attachments

Attachments are generated during the deployment for validation and auditing. Use **New Note** to
create a deployment note, or **Attach File** to add a file to the deployment log. Notes and
attachments can be edited, viewed or deleted.

## Deployment Components

Deployment Components are generated during the deployment. Use **New Deployment Component** to add a
deployment component to the deployment log. Deployment Components Name and Customization are links
to the individual component or customization records. Deployment Components can be edited or
deleted.
