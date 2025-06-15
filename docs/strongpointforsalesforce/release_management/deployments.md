# Deployments

Your deployments can be documented across your test environment(s) to your production environment(s). Each step in the deployment process complies with your policies and a comprehensive approval process. Deployments are blocked if approvals are not complete. A full audit trail of the entire deployment process is maintained.The process is:

> Create a Change Request
>
> Create a Deployment Record
>
> Deploy the Changes
>
> Complete the Process

## Create a Change Request

1. Open __Change Requests__ > __New Change Request__
2. Enter a meaningful __Name__ and __Change Overview__
3. Modify the __Change Type__ as needed. Add any other supporting information, change sets, package manifests, or customizations.
4. __Save__ the change request.
5. Click __Submit for Approval__

## Create a Deployment Record

These steps can be completed after the change request is approved.

1. Open __Change Requests__ and select the approved change request.
2. Click __Deploy__ in the tool bar. __Deploy__ is only available for approved change requests.

   ![Deploy Button in Tool Bar](../../../static/img/product_docs/strongpointforsalesforce/release_management/deploy.webp)
3. Select the __Source__ (from) environment and __Target__ (to) environment.
4. Enter your credentials for both environments.

   ![Deployment Tool](../../../static/img/product_docs/strongpointforsalesforce/release_management/deployment_tool.webp)
5. Click __Test Connection__ for both environments to ensure your credentials are correct. If your credentials are not correct, you can click on __Save Credentials__ and edit.
6. Click __Run Scan__ on both environments to ensure the customizations on the change request are up to date.
7. __Save__ the Deployment Record.
8. Click __Submit for Approval__

   ![Submit Deployment Record for Approval](../../../static/img/product_docs/strongpointforsalesforce/release_management/deploy.webp)

## Deploy the Changes

These steps can be completed after the deployment record is approved.

1. Open __Change Requests__ and select the approved deployment record.
2. Click __Deploy Changes__

   ![Deploy the Approved Changes](../../../static/img/product_docs/strongpointforsalesforce/release_management/deployment_tool-2.webp)
3. Click __Retrieve Selected Customizations__

   ![Retrieve the Selected Customizations](../../../static/img/product_docs/strongpointforsalesforce/release_management/deployment_tool-3.webp)
     
   This creates a package to:

   - __Check Dependencies__: Use to check what has been referenced.
   - __Validate Customizations__: Use to check the deployment is going to work. It simulates your deployment.
   - __Deploy Retrieved Customizations__: Use to deploy your customizations when you are ready to proceed.
4. Check your dependencies and validate your customizations.
5. Click __Deploy Retrieved Customizations__ to start the deployment. This may take some time, since it runs the test cases into the target environment.

   ![Run the Deployment](../../../static/img/product_docs/strongpointforsalesforce/release_management/deployment_tool-4.webp)

## Complete the Process

When the deployment process is finished:

1. Check the [Deployment Logs](deployment_logs.md).
2. Fix any errors and repeat the deployment if needed.
3. Once the deployment is successful, open the change request and set the status to __Completed__.

   ![Complete the Process](../../../static/img/product_docs/strongpointforsalesforce/release_management/deployment_tool-5.webp)
