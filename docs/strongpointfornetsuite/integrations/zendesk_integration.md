# Zendesk

Platform Governance for NetSuite's Change Management capabilities are integrated with Zendesk, one of the most popular customer service and issue ticketing systems. Customers are able to look for and include NetSuite Customizations, assess impacts for requested changes, and push Zendesk change tickets into a Change Request. This enables easy management of changes, seamless tracking of compliant changes and automating the reconciliation of change logs during an audit.

User benefits include:

- Avoid duplicate effort of creating tickets in two different systems.
- Pull Customizations into Zendesk for scope of changes.
- Specify Bundle ID as
- Perform impact analysis assessment.
- Approve requests in either Zendesk or NetSuite.
- Automatic ticket reconciliation between Zendesk and NetSuite.
- Enable automatic synchronization of Zendesk and NetSuite change tickets.

To set up the Zendesk integration:

1. [Install the Netsuite Bundle](#Install-the-Netsuite-Bundle)
2. [Install the App](#Install-the-App)
3. [Set up Approvals](#Set-up-Approvals)

## Install the Netsuite Bundle

1. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__
2. Search for bundle __402177__
3. Click on __Strongpoint Zendesk Integration__ in the search results.
4. Click __Install__ when the Bundle Details opens.
5. Click __Install Bundle__ on the __Preview Bundle__ Install page.

## Install the App

Here are the steps to install the Zendesk app. You must have __Admin__ privileges to install the app.

1. Open your Zendesk dashboard.
2. Click the __Admin__ icon in the left panel.
3. Navigate to __Apps__ > __Marketplace__.

   ![Open the Zendesk Marketplace](/img/product_docs/strongpointfornetsuite/integrations/zendesk_admin_marketplace.webp)
4. Search for __Strongpoint__.
5. Click __Strongpoint for NetSuite__ when it is displayed.

   ![Strongpoint for NetSuite app in the Marketplace](/img/product_docs/strongpointfornetsuite/integrations/zendesk_strongpoint.webp)
6. Click __Install__. When installation is complete, you are prompted to sign in to your Zendesk dashboard to continue.
7. Click the __Admin__ icon in the left panel.
8. Navigate to __Apps__ > __Manage__.

   ![Configure the Strongpoint Zendesk app](/img/product_docs/strongpointfornetsuite/integrations/zendesk_configure_app.webp)
9. Hover on the __Strongpoint for NetSuite__ tile to access the __Settings__ menu.

   ![Hover to access the Settings](/img/product_docs/strongpointfornetsuite/integrations/zendesk_configure_app_menu.webp)
10. Click __Change settings__.

    ![Set up the Strongpoint for NetSuite Zendesk app](/img/product_docs/strongpointfornetsuite/integrations/zendesk_change_settings.webp)

    - __Title__: the name associated with the app. The default is __Strongpoint for NetSuite__.
    - Account ID: enter the NetSuite account ID. The __Account ID__ must be a lowercase string. For example, __tstdrv1724328__.

      Account ID must be entered in lower case.
    - __Consumer Key__: Enter the Consumer Key of the Integration Record from your NetSuite account.
    - __Consumer Secret__: Enter the Consumer Secret of the Integration Record from your NetSuite account.
    - __Token ID__: Enter the Token ID of the Integration Record from your NetSuite account.
    - __Token Secret__: Enter the Token Secret of the Integration Record from your NetSuite account.

    Token-based authentication (TBA) is required by NetSuite. Refer to the NetSuite help: [TBA Setup Requirements](https://netsuite.custhelp.com/app/answers/detail/a_id/51000/kw/tba) for details if you have not yet set up TBA.  
    Only administrators can view the __Consumer Key__, __Consumer Secret__, __Token ID__ and __Token Secret__ information.  
    This information is generated when you create your Integration Record with the Token-Based Authentication option enabled. If you lose or forget these credentials, you must reset them to obtain new values.

    - __Enable role restrictions__: Check this option to restrict access to the app based on roles. Enter the roles allowed to access the app.
    - __Enable group restrictions__: Check this option to restrict access to the app based on group membership. Enter the groups allowed to access the app.
11. Click __Install__. The keys, secrets, and token information is hidden when it is saved.

## Set up Approvals

After you install the Zendesk app, set up the approvals.

1. Click the new __Strongpoint for NetSuite__ icon in the left panel. The __Group Configurations__ page opens.
2. Enter the group and approval information:

   - __Allow these Zendesk groups to request approval__ one or more groups who can request approval for a change request. Select a group from the drop down list. Click __+__. Repeat as needed.
   - __Allow these Zendesk groups to approve__ one or more groups who can approve a change request. Select a group from the drop down list. Click __+__. Repeat as needed.
   - __Approval process__ select the approval process to use. __Strongpoint Approval in Zendesk__, __Strongpoint Approval in NetSuite__, __No Appoval Needed__, or __Not set__.

__Next Step:__ [ Zendesk Walkthrough Example](/docs/strongpointfornetsuite/integrations/zendesk_walkthrough_example.md)
