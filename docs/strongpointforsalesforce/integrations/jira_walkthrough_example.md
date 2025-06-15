# Jira Walkthrough Example

This walkthrough is one example based on our test account. You must [install and configure](jira_integration.md) the Platform Governance for Salesforce Salesforce Jira integration, including setting up the __[Jira Statuses](jira_integration.md)__ prior to using this walkthrough.

The walkthrough demonstrates these steps:

- Create a Jira Ticket
- Connect to the App
- Add Customizations
- Perform Risk Assessment
- Ready for Development
- Deploy Changes and Complete the Ticket

## Create a Jira Ticket

1. Login in to your Jira account.
2. Open a Project.
3. Click __Create__ (__+__).

   ![Create a Jira ticket](../../../static/img/product_docs/strongpointfornetsuite/integrations/jira_example_create_issue.webp)
4. Enter your information on the __Create issue__ form:

   - __Project__: Select your Project. __NS & SF Jira Demo (SJD)__ is selected for this example.
   - __Issue Type__: Select your Jira type. __Task__ is selected for this example.
   - __Summary__: Add a name
   - __Description__ (optional)
5. Click __Create__.
6. Alerts and notifications may occur during this walkthrough, and are not included in these steps. For example, override alert, notifications for approvers, and notification for the change request.

## Connect to the App

1. Open the __Comments__ tab and select __Strongpoint Salesforce__.

   ![Accessing the Strongpoint Salesforce app](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_comments_open_app.webp)
2. There are two ways to connect: __Login User__ or __Connected App__ tabs.

   ![Connection options](../../../static/img/product_docs/strongpointforsalesforce/integrations/connection_options.webp)

### Connected App

Use the __Connected App__ tab if you set up the connected app using the procedure: [Access Data with API Integration](jira_integration.md#access-data-with-apiintegration)

1. Open the __Connected App__ tab.

   ![Using the connected app](../../../static/img/product_docs/strongpointforsalesforce/integrations/connection_options_app.webp)
2. Enter the __Consumer Key__ and __Consumer Secret__.
3. Click __Is Sandbox account?__ if you are logging in to a sandbox.
4. Click __Connect__. If this is the first time you are using the connected app, you are prompted to select your username. The connected app is configured for you. Once finished, click __Close__ on the confirmation screen. The Strongpoint form is displayed. Your connection persists unless you click __Change Account__ on the integration page.

If the configuration fails, an error message is displayed. For example,

> __error=redirect_uri_mismatch__
>
> - The 10 minutes timing slot from Salesforce is not completed yet. Please wait
> - If the error persists, check the [Callback URL](jira_integration.md).
>
>   - You may have left a space between the two Callback URLs
>   - You may have an error in the newly added Callback URL it should be:  
>     __https://spjira.my.salesforce-sites.com/SpHandleJiraAuth__

### Login User

Enter your Salesforce __Username__, __Password__ and __Security Token__. If you are using MFA or SSO: use your SSO Password. The Security token is the changing 6 digit code from your SSO or MFA app.

![Enter your Jira credentials](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_credentials.webp)

If you do not have your security token, you can use these steps to reset your token:

1. Log in to your Salesforce account.
2. Open __View Profile__ > __Settings__.  
   ![Open your Salesforce Profile settings](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_settings.webp)
3. Select __Reset My Security Token__ from the menu.
4. Click __Reset Security Token__. Check your email for your new token.
5. Click __Sandbox Account?__ if you are using your sandbox.
6. Click __Connect__. If the connection is successful, the form is displayed (see Add Customizations section). The __Synchronized with__ status displays the org you are logged into for Salesforce.

You cannot login if you do not have the __appropriate role permissions to create a change request__.

If you do not enter the correct credentials, an error is displayed. After six unsuccessful consecutive attempts to login, your account is suspended for 30 minutes.

## Add Customizations

Once you have logged in, the form is displayed.

![Connection details for the ticket](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_connection.webp)

- __Synchronized with__ displays the connected Org. Click __Change Account__ if you need to switch Orgs.
- __Policy__ is blank until Customizations have been added. The Policy is determined by the Customization with the strictest policy.
- __Change Level Req__ is blank until Customizations have been added. If there are multiple change levels, the most stringent one is applied.
- __Select Customizations__ is where you specify the Customizations you are changing or adding. If the Customization exists in your account, it is added to the __Select Customizations__ list. __Add Proposed Customizations__ are added to the __Proposed Customizations__ list. You can delete added Customizations with the ![delete](../../../static/img/product_docs/strongpointfornetsuite/integrations/delete.webp) icon.
- __View DRD__ and __Impact Analysis__ are tools to Perform Risk Assessment.
- __Push__ creates the Change Request in Salesforce. __Push__ is also used to manually update your Change Request if you are not using the [Automatic Synchronization](jira_integration.md) feature.

### Add Existing Customizations by Name or API Name

1. Enter all or part of a Name in __Add customization__ for __Existing Customizations__. This example uses __maintenance__ as the search string.
2. Click __+__ to search for matching Customizations. Hover over __View__ to display the __Type__ and __API Name__ for a Customization.

   ![Add an existing customization](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_customization_add.webp)
3. Select one or more Customizations. This example uses __Maintenance Type (Parent: Account)__, a customization in the _Strongpoint Demo Org_.
4. Click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list.

   ![Add an existing customization](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_add_existing.webp)
5. Enter an __API Name__ in __Add customization__ for __Existing Customizations__ and click __+__. This example uses __UpsellOpportunities__, an API in the _Strongpoint Demo Org_.
6. The __API Name__ is displayed. Select it, and click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list. This example shows __UpsellOpportunities (ApexClass)__, an API in the _Strongpoint Demo Org_.

   ![Add an existing customization by API Name](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_add_existing_api.webp)

### Add Proposed Customizations

In this procedure, we are adding a new Customization.

1. Enter a new, valid API Name in the __Add Customization__ for __Proposed Customizations__ field. For this example, enter __CustomerPriorities__.
2. Click (__+__) to add it. If the API Name is valid, and does not match an existing API Name, the new Customization is added to the __Proposed Customizations__ list.

   ![Add a proposed customization](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_proposed.webp)

### Create the Change Request

Using the Platform Governance for Salesforce Jira integration, your Change Requests are created automatically when you add a Customization. To setup or update the status mapping, refer to setting up the __[Jira Statuses](jira_integration.md)__ procedure.

1. Change the Jira status of your ticket to match the status set up for __CR In Progress__. For example, __In Progress__. Refer to setting up the __[Jira Statuses](jira_integration.md)__ procedure.
2. Click __Push__ to create the Change Request if you are not using the [Automatic Synchronization](jira_integration.md) feature. The change request is created in Salesforce with the __In Progress__ status.
3. Expand the __Change Request__ field on the right. The status is now __None/In Progress__. There is a link to open the Change Request in Salesforce.

   ![Change Request is In Progress](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_in_progress_status.webp)

Note the __Policy__ and __Change Level Req__ reflect the most stringent requirement for your selected customizations, in this example, __Change Request__.

![Policy and Change Level Req have been updated](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_policy.webp)

## Perform Risk Assessment

### Impact Analysis

The impact analysis tool reviews your customizations for dependencies or risks. Click __Impact Analysis__ to run the tool. Here is an example report showing the Customizations that __Cannot be Safely Deleted or Modified__ tab:

![Impact analysis report](../../../static/img/product_docs/strongpointfornetsuite/integrations/jira_example_impact_analysis.webp)

Before proceeding with your changes, review each warning to ensure your change does not break something. Dependencies can easily be reviewed with the DRD tool.

### View DRD

The [Dependency Relationship Diagram](../tools/viewing_drd.md) (DRD) tool graphically displays your Customizations and all dependencies.

1. Click __View DRD__.
2. When the diagram opens, you can explore the dependencies to evaluate the effect of your intended changes.

![Use the DRD to explore dependencies](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_drd.webp)

## Ready for Development

Once you have resolved any risk or conflicts, your changes are ready for development:

1. Change the Jira status of your ticket to match the status set up for __CR Pending Approval__. For example, __Selected for Development__.
2. Click __Push__ if you are not using [Automatic Synchronization](jira_integration.md) to push status changes.
3. Expand the __Change Request__ field on the right. The status is now __Pending Approval / In Progress__. There is a link to open the Change Request in Salesforce.

   ![Change Request in Pending Approval](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_pending_approval_status.webp)
4. Click the __Go To Record__ link to view the Change Request.

   ![Change Request is In Progress / Pending Approval](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_pending_approval_change_request.webp)

## Deploy Changes and Complete the Ticket

When development is done, and the Change Request is approved according to your policy, the Jira ticket is ready to be updated.

1. Expand the __Change Request__ field on the right. The status is __Approved / In Progress__.

   ![Change Request is approved](../../../static/img/product_docs/strongpointforsalesforce/integrations/jira_example_approved_status.webp)
2. Change the Jira status of your ticket to match the status set up for __CR Approved__. For example, __Ready for Deployment__.
3. Click __Push__ if you are not using [Automatic Synchronization](jira_integration.md) to push status changes.
4. Once your deployment and verification activities are complete, change the Jira status of your ticket to match the status set up __CR Complete__. For example, __Done__.

If you open the Change Request in Salesforce:

- All Customizations added from Jira are displayed.
- __Change Overview__ is set to the Jira ticket description.
- __Change Type__ is __Jira__, and __External Change Request Number__ is the Ticket number.
- Change Request shows as __Completed__.
- __External Created By__: is the user that created the Jira ticket
  .
- __External last Modified by__: is the last user who modified the Jira ticket.

  ![user_guide_example](../../../static/img/product_docs/strongpointforsalesforce/integrations/user_guide_example.webp)
