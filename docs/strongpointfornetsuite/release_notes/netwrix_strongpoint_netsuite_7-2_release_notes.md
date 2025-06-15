# Core 7.2

Netwrix Strongpoint for NetSuite 7.2 Release Notes

## Core 7.2

December 22, 2023

__New:__ __Strongpoint Integration API__

Strongpoint is excited to release an [Integration API](../api/api_overview.md) to enable your developers to support your ticketing systems! Customers enthusiastically embraced our Strongpoint pre-built integrations for Jira, ServiceNow and Zendesk. The API makes this integration functionality available to everyone. Integrating your systems with your Strongpoint account helps you make the most of your change management and ticketing strategies.

Here are the API highlights:

- __Customizations__ can be retrieved from your NetSuite account and can be added and removed from your Change Requests.
- __Change Requests__ can be created, updated, retrieved and deleted.
- __ERD__ and __Impact Analysis__ tools are available.
- API commands are documented in the [Integration API](../api/api_overview.md) section of this guide.
- API commands are available in [Postman](http://postman.com/), where you can try them out and test them. There are Postman links in this guide.

__New: Strongpoint Reset Schedule Deployments Suitelet for Sandbox Refresh__

NetSuite has removed the scheduled status on scripts after a sandbox is refreshed. This stops the Strongpoint scripts required for environment compares, change requests built to push to production, and other activities. This suitelet enables you to automatically reset all of your Strongpoint scripts. If you have scheduled custom scripts in your sandbox, you must manually set the status after a sandbox refresh.

1. Open your Sandbox.
2. Open __Customization__ > __Scripting__ > __Scripts__.
3. Set the Filter __Type__ to __Suitelet__ and the __Bundle ID__ to __294336__.

   ![Find the Suitelet](../../../static/img/product_docs/strongpointfornetsuite/release_notes/scripts.webp)
4. Click __View__ by the __Strongpoint Reset Schedule Deployments__ suitelet.
5. Open the __Deployments__ tab.

   ![Open the Deployment tab](../../../static/img/product_docs/strongpointfornetsuite/release_notes/script_deploy_tab.webp)
6. Click the Suitelet name: __Strongpoint Reset Schedule Deployments__.
7. Click on the Script __URL__.

   ![Click the Script URL](../../../static/img/product_docs/strongpointfornetsuite/release_notes/script_deploy_url.webp)

## SoD 1.6.3

December 19, 2023

- Changed the format of the __Reason for Exemption__ column on the __Strongpoint SoD Change Requests (List)__ report to __Formula Text__. Due to NetSuite 2023.2 changes, HTML tags were displaying in the report. Refer to NetSuite Release 2023.2 Support for more details on the NetSuite change.
- Improved handling of inline edits on Employee names. Making an inline name change does not affect open SoD Exemptions for the employee.

__NetSuite Release 2023.2 Support__

The Strongpoint Searches have been updated to support NetSuite's change of __Formula (Text) Fields__ to the new __Formula (HTML) Fields__. This is a NetSuite security enhancement.

If you have custom searches, you must update them to support the NetSuite change. To view the list of saved searches in your account that contain code in __Formula(Text)__ fields, open:   
__Lists__ > __Search__ > __Saved Searches with HTML in Formula(Text)__

![Run the Saved Search to view changes](../../../static/img/product_docs/strongpointfornetsuite/release_notes/formulahtml.webp)
