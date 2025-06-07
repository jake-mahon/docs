# Multi-Environment Change Management

Multi-Environment Change Management helps you manage changes between your Production and Development/Testing accounts. The design is based on:

- Changes to production accounts go through appropriate development and testing in separate NetSuite accounts to ensure that the performance and data in production are not compromised.
- Documenting the process of transitioning changes through these accounts is critical to ensure that the process is followed to manage the risks associated with changes in NetSuite.
- Change Requests and Deployment Records, along with Environment Comparison enable the documentation and validation of this process to ensure changes are deployed properly and can be reported for audits.

Platform Governance for NetSuite must be deployed on the target environment. You need to have a least the Strongpoint Developer Role to perform a Change Request Push.

## Create a Master Change Request in Production

A best practice is to create change requests in your production account so that they are not lost, they have an audit trail and approvals can be shown.

1. Open __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__.
2. Enter all required fields and additional approver(s).
3. Click Pending Approval. Wait until the Change Request is approved.
4. Open __Strongpoint__ > __Change Management Tools__ > __ITGC Change Request__.
5. Click __Edit__ on the appropriate Change Request.
6. Open the __Sync Tool__ tab on the Change Request.
7. Set the __Target__ environment (where the Change Request will be pushed).
8. Set the Target login credentials: __Target Email and Target Password__.
9. Set the __Account ID Target__ (this is automatically loaded upon selecting Target account).
10. Set the __Account Target Role__.
11. Click __Push__.
![push_change_request](/static/img/product_docs/strongpointfornetsuite/change_management/push_change_request.png)
  

## Update the Change Request in Testing/Development

1. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__
2. Click __Edit__ on the Change Request that came from Production.

- Attach __customizations created/updated__.

  ![multi_env_1](/static/img/product_docs/strongpointfornetsuite/change_management/multi_env_1.png)
- __Stage__: __Deployment Record__
- __Set Approval Status__: __Approved__ (this is optional)

  ![multi_env_2](/static/img/product_docs/strongpointfornetsuite/change_management/multi_env_2.png)

3. Open the __Sync Tool__ tab.
4. __Push__ the updated Change Request back into Production. This adds a related deployment record to the Master Change Request in Production.

## Run Pre-Deployment Environment Comparison

1. Run __Strongpoint__ > __Change Management Tools__ > __Compare Environments__
2. Enter the login credentials of the __Target__ and __Source__ Accounts.
3. Set the __Comparison Type__ to __Target Newer than Source__.
4. Click the __Compare__ button.  
   Refer to [Comparing Environments](/docs/product_docs/strongpointfornetsuite/change_management/comparing_environments.md) for more details.

## Create the Deployment Record

Once you have compared your environments, get the deployment record approved. When your deployment record is approved, deploy the customizations listed on the change request.

In your Production environment:

1. Open __Strongpoint__ > __Change Management Tools__ > __Change Request__
2. __Edit__ your __master__ Change Request.
3. Open __Related Change Records__ tab.
4. Open __Change Request__ tab.
5. Click __Edit__ (deployment record).

   ![multi_env_3](/static/img/product_docs/strongpointfornetsuite/change_management/multi_env_3.png)
6. Push the Change Request from Production to Development/Testing.
7. Install any customizations in Development/Testing.

## Run Post-Deployment Environment Comparison

1. Run __Strongpoint__ > __Change Management Tools__ > __Compare Environments__
2. Enter the login credentials of the __Target__ and __Source__ Accounts.
3. Set the __Comparison Type__ to __Target Newer than Source__.
4. Click the __Compare__ button.  
   Refer to [Comparing Environments](/docs/product_docs/strongpointfornetsuite/change_management/comparing_environments.md) for more details.

## Completing the Process

If testing fails, continue to update the Change Request on Testing/Development and comparing the environments until test passes. Once testing passes:

1. Edit the Change Request in Testing/Development.

   - Set __Approval Status__: __Approved__
   - Set __Stage__: __Deployment__
2. Push the Change Request back to Production.
3. Set the (Master) Change Request Status to __Completed__.
