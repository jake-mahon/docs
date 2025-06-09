# Zendesk Walkthrough Example

This walkthrough is one example based on our test account. You must [install and configure](/docs/strongpointfornetsuite/integrations/zendesk_integration.md) the Zendesk integration, prior to using this walkthrough.

Alerts and notifications may occur during this walkthrough, and are not included in these steps. For example, override alert, notifications for approvers, and notification for the change request.

The walkthrough demonstrates these steps:

- [Create a Zendesk Ticket](#Create-a-Zendesk-Ticket)
- [Create the Change Request](#Create-the-Change-Request)

## Create a Zendesk Ticket

1. Login in to your Zendesk dashboard.
2. Open your __Views__.

   ![Open the Zendesk Views](/img/product_docs/strongpointfornetsuite/integrations/zendesk_views.png)
3. Click __+ Add__ > __Ticket__.

   ![Add a ticket](/img/product_docs/strongpointfornetsuite/integrations/zendesk_add_ticket.png)
4. Enter your information for the __Ticket__:

   - __Requester__: start typing the name of the requester. Matching names are displayed. Click __+ Add user__ to add a new user.
   - __Select Assignee__: assignees are added as users or groups.  
     - Click __take it__ to assign it to yourself.  
     - Start typing a user name and pick from one of the matches. User names are listed by group.  
     - Expand the drop down and open a group. Select a user or assign it to the group.
   - __Followers__: add users to follow this ticket.  
     - Click __follow__ to add yourself.  
     - Start typing a user name and pick from one of the matches.
   - __Tags__: enter any tags, separated by commas.
5. Enter the ticket __Subject__ and details. You can set either __Public reply__ and send email to other users, or select __Internal note__ to add the info to the ticket without sending email. You can also __Apply macro__ if applicable.

The app information is not available until the ticket is created.

6. Click __Submit as New__.

   ![New ticket in the Ticket view](/img/product_docs/strongpointfornetsuite/integrations/zendesk_ticket_view.png)

## Create the Change Request

Open your new Zendesk ticket. __Test Ticket__ in this example.

If you do not see the app, make sure the Apps are toggled on using the Apps icon ![Zendesk Apps visibility icon](/img/product_docs/strongpointfornetsuite/integrations/zendesk_apps_icon.png) and verify you are a member of a group or role [authorized to access the app](/docs/strongpointfornetsuite/integrations/zendesk_integration.md#authorized-to-access-the-app).

![The Strongpoint app is available after you create the ticket.](/img/product_docs/strongpointfornetsuite/integrations/zendesk_strongpoint_app_ticket.png)

### Use Bundles for the Scope of Change

Specify a Bundle to use a bundle for the scope of change. This is optional.

1. Expand the drop down.
2. Enter the Bundle ID.
3. Click + to add the bundle. 232111 in this example. You can remove a bundle using the drop down toggle.

   ![Specify an optional Bundle ID](/img/product_docs/strongpointfornetsuite/integrations/zendesk_bundleid.png)

Once you have made a change, the __Request Approval__ button is available if you are a member of a group with the [Set up Approvals](/docs/strongpointfornetsuite/integrations/zendesk_integration.md#Set-up-Approvals) permission.

![Request Approval button appears when a change has been made.](/img/product_docs/strongpointfornetsuite/integrations/zendesk_request_approval.png)

### Add Existing Customizations

Existing Customizations can be added to the change request with the __Look up Customization__ feature.

1. Click __Look up Customization__.

   ![Add customizations to the Change Request](/img/product_docs/strongpointfornetsuite/integrations/zendesk_lookup_customization.png)
2. Enter the search information in one or more of the available filters. For example, enter __new__ for __Name__ and select __Body Field__ for __Type__ to search for all body fields containing the word __new__.
3. Click __Lookup__.
4. Select one or more customizations to attach to the change request.

   ![Select one or more customizations.](/img/product_docs/strongpointfornetsuite/integrations/zendesk_select_customizations.png)
5. Click __Add selected Customizations__.

There is an options menu available for each added customization. Options include __Remove__ and __ERD__. Selecting __ERD__ launches the [Entity Relationship Diagram](/docs/strongpointfornetsuite/customizations/using_erd.md) for the customization.

### Add Proposed Customizations

1. Enter all or part of a Name in __Add Customizations__. For this example, enter __new__.
2. Click __+__ to search for matching Customizations. __View__ displays the __Type__ and __Script ID__ for a Customization.

   ![Add a Customization by Name](/img/product_docs/strongpointfornetsuite/integrations/jira_example_add_name.png)
3. Select one or more Customizations. For this example, select __New Opportunities Created (Search)__.
4. Click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list.

   ![New Opportunities Created (Search) added to Existing Customizations](/img/product_docs/strongpointfornetsuite/integrations/jira_example_new_opp.png)
5. Enter the Script ID __custentity\_fmt\_cust\_credit\_on\_hold__ in __Add Customizations__ and click __+__.
6. The __Set Customer Credit on Hold (Entity Field)__ is displayed. Select it, and click __Add Selected Customizations__. The selected Customization is added to the __Existing Customizations__ list. Notice that the __Change Level Required__ has changed from __Log Changes Only__ to __Full Software Development Lifecycle__, which is the policy for the __Set Customer Credit on Hold__ field.

   ![Add a Customization by Script ID](/img/product_docs/strongpointfornetsuite/integrations/jira_example_scriptid.png)

- __Impact Analysis__ and __View ERD__ are tools to [Zendesk Walkthrough Example](#Zendesk-Walkthrough-Example).
