# Multiple Environment Deployments

Multiple Environment Deployment Tracking helps you manage changes between your Production and Development/Testing .

With multiple environment deployment tracking, you can push, pull and access your change requests in all your environments that have Platform Governance for Salesforce installed. This alleviates the risk of breaking your production account. By documenting and validating the change process through change requests, deployment records and environment comparison, multiple environment deployment tracking enables you to access change requests in any environment where Platform Governance for Salesforce is installed, and to deploy changes and promote code from one environment to another.

## Push/Pull Change Requests

1. Open __Change Requests__ and locate the completed change request to push/pull.

   ![Open Completed Change Request](/img/product_docs/strongpointforsalesforce/release_management/push_pullcr-1.png)
2. Edit the change request and add all necessary details.

   ![Edit the Change Request](/img/product_docs/strongpointforsalesforce/release_management/push_pull_cr.png)
3. Click on __Sync CR__.

   ![Sync the Change Request](/img/product_docs/strongpointforsalesforce/release_management/push_pull_sync_cr.png)
4. Choose a __Saved Environment__, where you are planning to push or pull the Change Request.
5. Add your __Credentials__.

   ![Enter Credentials](/img/product_docs/strongpointforsalesforce/release_management/push_pull_popup.png)
6. Click on __Test Connection__ to make sure your credentials are correct. If your credentials are not correct, you can click on __Save Credentials__ and edit.

### Push the Change Request

To push a change request into another environment:

1. Click __Push__.
2. Click  __Push CR__.

   ![pushcr](/img/product_docs/strongpointforsalesforce/release_management/pushcr.png)

Your Change Request is pushed to your selected environment.

### Pull the Change Request

To pull a change request from the selected environment:

1. Select __Pull__
2. Click on __Get Change Requests__

   ![pullcr](/img/product_docs/strongpointforsalesforce/release_management/pullcr.png)
3. Add the change requests you want to pull from the selected environment.

   ![pullchangerequest](/img/product_docs/strongpointforsalesforce/release_management/pullchangerequest.png)
4. Click __Pull Change Request.__

The parent change request is the one you pull from and when the change request is pulled, it becomes a child of the original change request.
