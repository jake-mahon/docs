---
sidebar_position: 1410
title: Zendesk  Walkthrough Example
---

# Zendesk Walkthrough Example

This walkthrough is one example based on our test account. You must [install and configure](zendesk_integration "Open the Strongpoint Zendesk installation topic.") the Zendesk integration, prior to using this walkthrough.

:::note
Alerts and notifications may occur during this walkthrough, and are not included in these steps. For example, override alert, notifications for approvers, and notification for the change request.
:::

The walkthrough demonstrates these steps:

* [Create a Zendesk Ticket](#Create)
* [Create the Change Request](#ChangeRequest "Create the Change Request")

## Create a Zendesk Ticket

1. Login in to your Zendesk dashboard.
2. Open your **Views**.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_views.png "Open the Zendesk Views")
3. Click **+ Add** > **Ticket**.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_add_ticket.png "Add a ticket")
4. Enter your information for the **Ticket**:

   * **Requester**: start typing the name of the requester. Matching names are displayed. Click **+ Add user** to add a new user.
   * **Select Assignee**: assignees are added as users or groups.  
     - Click **take it** to assign it to yourself.  
     - Start typing a user name and pick from one of the matches. User names are listed by group.  
     - Expand the drop down and open a group. Select a user or assign it to the group.
   * **Followers**: add users to follow this ticket.  
     - Click **follow** to add yourself.  
     - Start typing a user name and pick from one of the matches.
   * **Tags**: enter any tags, separated by commas.
5. Enter the ticket **Subject** and details. You can set either **Public reply** and send email to other users, or select **Internal note** to add the info to the ticket without sending email. You can also **Apply macro** if applicable.

:::note
:::

The app information is not available until the ticket is created.

6. Click **Submit as New**.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_ticket_view.png "New ticket in the Ticket view")

## Create the Change Request

Open your new Zendesk ticket. **Test Ticket** in this example.

:::note
If you do not see the app, make sure the Apps are toggled on using the Apps icon and verify you are a member of a group or role authorized to access the app.
:::

![](../../../../static/images/enus/Content/Resources/Images/zendesk_strongpoint_app_ticket.png "The Strongpoint app is available after you create the ticket.")

### Use Bundles for the Scope of Change

Specify a Bundle to use a bundle for the scope of change. This is optional.

1. Expand the drop down.
2. Enter the Bundle ID.
3. Click + to add the bundle. 232111 in this example. You can remove a bundle using the drop down toggle.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_bundleID.png "Specify an optional Bundle ID")

Once you have made a change, the **Request Approval** button is available if you are a member of a group with the [Set up Approvals](zendesk_integration#Setting "Open the set up approvals section") permission.

![](../../../../static/images/enus/Content/Resources/Images/zendesk_request_approval.png "Request Approval button appears when a change has been made.")

### Add Existing Customizations

Existing Customizations can be added to the change request with the **Look up Customization** feature.

1. Click **Look up Customization**.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_lookup_customization.png "Add customizations to the Change Request")
2. Enter the search information in one or more of the available filters. For example, enter **new** for **Name** and select **Body Field** for **Type** to search for all body fields containing the word **new**.
3. Click **Lookup**.
4. Select one or more customizations to attach to the change request.

   ![](../../../../static/images/enus/Content/Resources/Images/zendesk_select_customizations.png "Select one or more customizations.")
5. Click **Add selected Customizations**.

There is an options menu available for each added customization. Options include **Remove** and **ERD**. Selecting **ERD** launches the [Entity Relationship Diagram](../customizations/using_erd "Open the Using the ERD topic") for the customization.

### Add Proposed Customizations

1. Enter all or part of a Name in **Add Customizations**. For this example, enter **new**.
2. Click **+** to search for matching Customizations. **View** displays the **Type** and **Script ID** for a Customization.

   ![](../../../../static/images/enus/Content/Resources/Images/jira_example_add_name.png "Add a Customization by Name")
3. Select one or more Customizations. For this example, select **New Opportunities Created (Search)**.
4. Click **Add Selected Customizations**. The selected Customization is added to the **Existing Customizations** list.

   ![](../Resources/Images/jira_example_new_opp.png "New Opportunities Created (Search) added to Existing Customizations")
5. Enter the Script ID **custentity\_fmt\_cust\_credit\_on\_hold** in **Add Customizations** and click **+**.
6. The **Set Customer Credit on Hold (Entity Field)** is displayed. Select it, and click **Add Selected Customizations**. The selected Customization is added to the **Existing Customizations** list. Notice that the **Change Level Required** has changed from **Log Changes Only** to **Full Software Development Lifecycle**, which is the policy for the **Set Customer Credit on Hold** field.

   ![](../../../../static/images/enus/Content/Resources/Images/jira_example_scriptID.png "Add a Customization by Script ID")

* **Impact Analysis** and **View ERD** are tools to [Zendesk Walkthrough Example](#RiskAssessment).