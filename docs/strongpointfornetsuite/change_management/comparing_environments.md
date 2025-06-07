# Comparing Environments

Compare Environments is a powerful tool to locate customization differences between accounts. It is a best practice to compare accounts by type (this is a mandatory field). You can compare up to 1000 records. If there are more than 1000 records, it compares the first 1000 and sends you a notification that there were more than 1000 records to compare and to restrict the comparison.

- [Set up TBA Credentials](#Set-up-TBACredentials)
- [Run Compare Environments](#Run-Compare-Environments)
- [Determining What to Compare](#Determining-What-to-Compare)
- [Viewing Differences Between Environments](#Viewing-Differences-Between-Environments)

## Set up TBA Credentials

Your TBA Credentials only need to be set up once. These are the credentials you need to run Compare Environments and to use the __Change Account__ feature on a Change Requests.

1. Open __Strongpoint__ > __Change Management Tools__ > __Compare Environments__

   ![Set up your TBA Credentials](/static/img/product_docs/strongpointfornetsuite/change_management/tba_cred_1.png)
2. Click New (__+__) beside the __Source__ field.

   ![TBA Credentials](/static/img/product_docs/strongpointfornetsuite/change_management/tba_cred_2.png)
3. Enter the information for the environment:

   - __Name__ enter the environment name.
   - __Account ID__ enter the account ID. If it is a Sandbox account, make sure __\_SB1__ is appended. Do not use -sb1.
   - __Consumer Key__ enter the consumer key.
   - __Consumer Secret__ enter the consumer secret.
   - __Token ID__ enter your token ID.
   - __Token Secret__ enter your token secret.
4. Click __Save__. Your credentials are now saved for the environment.

Repeat this process for all environments you use for environment compare or looking up customizations with the __Change Account__ feature on a Change Request. Refer to [Creating a Change Request](/docs/product_docs/strongpointfornetsuite/change_management/creating_change_request.md).

## Run Compare Environments

The tool is also available as a __Run Compare__ button within a Change Request.

Token-based authentication (TBA) is required by NetSuite. Follow the steps in the __Set Up TBA Credentials__ section the first time you use this feature.

1. Open __Strongpoint__ > __Change Management Tools__ > __Compare Environments__

   ![Compare Environments](/static/img/product_docs/strongpointfornetsuite/change_management/comp_env.png)
2. Enter the information for the target account and source accounts. Tokens are persistent between your sessions.

Here are the field and filter options.

Only administrators can view the Consumer Key, Consumer Secret, Token ID and Token Secret information.  
This information is generated when you create your Integration Record with the Token-Based Authentication option enabled. If you lose or forget these credentials, you must reset them to obtain new values.

### Fields

- __Name__: Enter a name to use as a reference if you export the results of the comparison.
- __Source__: Select source environment.
- __Target__: Select target environment.

Once you enter the source and targets, the following information is populated:

- __Account ID Source__: ID for the source environment account .
- __Source Consumer Key__: Consumer Key of the Integration Record from the source account.
- __Source Consumer Secret__: Consumer Secret of the Integration Record from the source account.
- __Source Token ID__:Token ID of the Integration Record from the source account.
- __Source Token Secret__:Token Secret of the Integration Record from the source account.
- __Account ID Target__: ID for the Target environment account.
- __Target Consumer Key__: Consumer Key of the Integration Record from the Target account.
- __Target Consumer Secret__: Consumer Secret of the Integration Record from the Target account.
- __Target Token ID__: Token ID of the Integration Record from the Target account.
- __Target Token Secret__: Token Secret of the Integration Record from the Target account.

### Filters

- __Customization Type__: Compares all the object types in one account to another. For example, compare all entity fields between two accounts. If this field is blank, everything is compared. This filter is advised for a sandbox refresh or when deploying by record type.
- __Change Request No__.: Compares the customizations within a specific change request. If you clicked Run Compare from a Change Request, the number is automatically populated. This filter is advised when deploying a bundle of changes from one account to another.
- __Get Items from Search__: Compares objects identified by the criteria in a Customization Saved Search. Create the Saved Search prior to running the comparison. Within the Saved Search, you must have the __Script ID__ in the __Results__ column. This filter is advised when comparing changes in a bundle or other criteria that you can use for a saved search.
- __Comparison Type__: This a mandatory field. There are two predefined comparison types.
  - __Target Newer Than Source__ looks for any objects that were changed in production after changes were made in the sandbox. This makes you aware if something may be overwritten or lost in your target environment before the deployment.
  - __Diff__ looks for any differences between the environments.
- __Change After__: Compares objects in the account with a Change Log record dated on or after the date specified. This filter is used to restrict the comparison. This is only available for Comparison Type __Target Newer Than Source__.
- __Quick Add__: Add individual customization records you want to compare.
- __Include Children__: Check to include Children in your comparison.
- __Display Non-Material Changes Results__: Check to include non-material changes between the environments. This does not affect functionality. __Non-Material Object Changes__ are changes detected in the object definition not caused by human intervention and do not have any functional impact. Examples include NetSuite internal IDs, object XML structure or JSON representation or reordering values in a list.
- __Exclude Managed Bundle/App Components__: Check to exclude all Managed Bundle or App customizations from the results.
- __Bundle/App Filter Mode__: Select __Include__ or __Exclude__ if you are going to use the __Bundles/Apps to Include/Exclude__ option.
- __Bundles/Apps to Include/Exclude__: Add bundle or App internal IDs to include/exclude (based on the __Bundle/App Filter Mode__) in the comparison. You can set multiple bundles/apps to be included/excluded, separating them with commas.

When using filters, it is recommended that you only use one filter at a time. An exception is using __Customization Type__ and __Get Items from Search__ together.

## Determining What to Compare

### Pre-Deployment

If you are migrating new objects, they will not exist in your target account.

To determine what to compare pre-deployment:

1. Create a __New Change Request__ in Production (so it survives any Refreshes).
2. Attach the __Customization Record(s)__ to the Change Request.
3. Wait for Approval (if required).
4. On the __Change Request__ open __Deployment Validation__ > __Run Compare Tool__
5. Select the environments for the __Target__ and __Source__ Accounts.
6. Set the __Comparison Type__ to __Target Newer than Source__.
7. Set the __Change After Date__. (Set the date from when you want the comparison to start.)
8. Click __Compare__.

### Post-Deployment

To determine what to compare post-deployment:

1. Use the __Change Request__ from the pre-deployment or create a new one.
2. If creating a new one, attach the __Customization Record(s)__ to the Change Request.
3. On the __Change Request__ go to > __Deployment Validation__ > __Run Compare Tool__
4. Select the environments for the __Target__ and __Source__ Accounts.
5. Set the __Comparison Type__ to __Diff__.
6. Click __Compare__.

### Communicating Results

An __Environment Compare Log__ is created, and automatically linked to the Change Request for reference. The log can be shared if there are issues.

If there are issues, the Deployment Engineer can make changes and re-run the Environment Comparison to ensure the environments are synchronized.

## Viewing Differences Between Environments

Environment comparison can be used on any Customization Type, including Body Fields.

1. Open __Strongpoint__ > __Change Management Tools__ > __Compare Environments__.
2. Enter the __Name__, select the __Source__ and __Target__ environments and all the required credential information.
3. Select __Body Field__ for the __Customization Type__.
4. Select __Diff__ for the __Comparison Type__.
5. Add one or more searches in __Quick Add__. For example, __Cash Register__ and __Special Scheme Code__.
6. Click __Compare__.

### Search Exists in Both Environments

In this example, __Cash Register__ appears in both environments.

On the __Source__ tab:

![Source target](/static/img/product_docs/strongpointfornetsuite/change_management/comp_env_source.png)

On the __Target__ tab:

![compare_accounts_-_target_ss](/static/img/product_docs/strongpointfornetsuite/change_management/compare_accounts_-_target_ss.png)

On the __Diff__ tab:

![compare_accounts_-_diff_ss](/static/img/product_docs/strongpointfornetsuite/change_management/compare_accounts_-_diff_ss.png)

### Search Exists in Only One Environment

In this example, __Special Scheme Code__ body field only exists in the __Target__ environment.

On the __Diff__ tab:

![compare_accounts_-_diff_only_one_ss](/static/img/product_docs/strongpointfornetsuite/change_management/compare_accounts_-_diff_only_one_ss.png)
