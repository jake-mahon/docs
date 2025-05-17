---
sidebar_position: 1407
title: Creating a Ticket and Change Request for ServiceNow
---

# Creating a Ticket and Change Request for ServiceNow

The [ServiceNow integration](servicenow_install_configure_netsuite "Install and Configure ServiceNow in NetSuite") must be installed and configured prior to use.

1. Open **ServiceNow**.
2. Select **Manage** > **Instance**.
3. Enter your ServiceNow **User Name** and **Password**.
4. Click **Change** > **Create New** in the menu to begin a new ticket.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_create_new.png)
5. Open the **Strongpoint NetSuite** tab.
6. Click **Select Account** from the menu bar.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_menu_bar.png)
7. Enter your NetSuite credentials. You must set up Token-based authentication.  
   Check if you are using a **Sandbox Account**. Click **Connect**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_sp_login.png)
8. Click **Select Customizations**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_select_customizations.png)
9. Enter one or more filters and click **Lookup Customization** to bring up a matching list. For example, entering **test** brings up the list of customizations containing *test*.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_select_customizations_add.png)
10. Check one or more customizations. Click **Add Customization**.
11. Click **Add Proposed Customization** to add a new customization:

    ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_add_proposed_customization.png "Add a Proposed Customization")

    1. Select the customization **Type**.
    2. Enter a Script ID for the proposed customization.
    3. Click **Add Proposed Customization**.
12. Click **Impact Analysis** in the menu bar. The impact analysis runs and displays any warnings.

    ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_impact_analysis.png)
      
     Click on the links to open the record in NetSuite for further research.

    ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_impact_analysis_NS.png)
13. Click **ERD** in the menu bar. The list is populated with the customizations added to the ticket. Select a customization to view the ERDs as needed.

    ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_erd.png)
14. Click **Submit**. The list of change requests is displayed.
15. Once the change request is moved to the Authorize state, click **Push Deployment Record** in the menu bar to complete the change request.