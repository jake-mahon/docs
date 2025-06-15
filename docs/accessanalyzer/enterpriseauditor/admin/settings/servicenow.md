# ServiceNow

The ServiceNow® node is for configuring the settings needed to integrate with ServiceNow. These settings are exclusive to the Access Analyzer integration with ServiceNow and are used by the ServiceNow Action Module. See the [ServiceNow Action Module](../action/servicenow/overview.md) topic for additional information.

![ServiceNow node](../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/servicenow.webp)

Provide ServiceNow authentication information to your ServiceNow instance.

- Instance – The ServiceNow instance, for example ```example.service-now.com```
- User Name and Password – The __Settings__ > __ServiceNow__ node at the global level can be configured with a credential provisioned to create incidents as Callers in the __Assigned to__ field, and any other ServiceNow incident field that references the __sys_user__ table.

The __Cancel__ and __Save__ buttons are in the lower-right corner of the ServiceNow view. These buttons become enabled when modifications are made to the ServiceNow global settings. Whenever changes are made at the global level, click __Save__ and then __OK__ to confirm the changes. Otherwise, click __Cancel__ if no changes were intended.

## Update ServiceNow Authentication Credentials

Follow the steps to update the ServiceNow authentication credentials.

__Step 1 –__ In the ServiceNow Authentication section, enter a new __Password__ for the user account.

__Step 2 –__ Click __Save__.

The credentials have been updated for ServiceNow authentication.
