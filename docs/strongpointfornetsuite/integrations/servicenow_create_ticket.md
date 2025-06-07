# Creating a Ticket and Change Request for ServiceNow

The [ServiceNow integration](/docs/product_docs/strongpointfornetsuite/integrations/servicenow_install_configure_netsuite.md) must be installed and configured prior to use.

1. Open __ServiceNow__.
2. Select __Manage__ > __Instance__.
3. Enter your ServiceNow __User Name__ and __Password__.
4. Click __Change__ > __Create New__ in the menu to begin a new ticket.

   ![servicenow_create_new](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_create_new.png)
5. Open the __Strongpoint NetSuite__ tab.
6. Click __Select Account__ from the menu bar.

   ![servicenow_menu_bar](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_menu_bar.png)
7. Enter your NetSuite credentials. You must set up Token-based authentication.  
   Check if you are using a __Sandbox Account__. Click __Connect__.

   ![servicenow_sp_login](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_sp_login.png)
8. Click __Select Customizations__.

   ![servicenow_select_customizations](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_select_customizations.png)
9. Enter one or more filters and click __Lookup Customization__ to bring up a matching list. For example, entering __test__ brings up the list of customizations containing _test_.

   ![servicenow_select_customizations_add](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_select_customizations_add.png)
10. Check one or more customizations. Click __Add Customization__.
11. Click __Add Proposed Customization__ to add a new customization:

    ![Add a Proposed Customization](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_add_proposed_customization.png)

    1. Select the customization __Type__.
    2. Enter a Script ID for the proposed customization.
    3. Click __Add Proposed Customization__.
12. Click __Impact Analysis__ in the menu bar. The impact analysis runs and displays any warnings.

    ![servicenow_impact_analysis](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_impact_analysis.png)
      
     Click on the links to open the record in NetSuite for further research.

    ![servicenow_impact_analysis_ns](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_impact_analysis_ns.png)
13. Click __ERD__ in the menu bar. The list is populated with the customizations added to the ticket. Select a customization to view the ERDs as needed.

    ![servicenow_erd](/static/img/product_docs/strongpointfornetsuite/integrations/servicenow_erd.png)
14. Click __Submit__. The list of change requests is displayed.
15. Once the change request is moved to the Authorize state, click __Push Deployment Record__ in the menu bar to complete the change request.
