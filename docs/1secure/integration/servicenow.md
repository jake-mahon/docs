# ServiceNow

ServiceNow is a flexible platform for Managed Service Providers that provides integrated services. Integrated with Netwrix 1Secure, ServiceNow allows to deliver an alert as a ticket or a work note for help desk or tech services. Once a ticket is created, it is assigned to an IT agent to be resolved.

In ServiceNow, you can create a profile for your Managed Service Provider and then implement the delivery settings in Netwrix 1Secure. The tickets shall be delivered to specific assigned work group.

Image keys:

| Icon | Description |
| --- | --- |
| ![alerts_editicon](../../../static/img/product_docs/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the settings of the integration type. |
| ![servicenowicon](../../../static/img/product_docs/1secure/integration/servicenowicon.webp) | ServiceNow Icon. Click the ServiceNow icon to make the settings for ServiceNow. |
| ![deletebutton](../../../static/img/product_docs/1secure/integration/deletebutton.webp) | Bin Icon. Click the Bin icon to delete the ServiceNow integration |

## Add a ServiceNow Integration System

Follow the steps to add a ServiceNow integration system.

__Step 1 –__ Go to Configuration > __Integrations__ and click the __Add__ icon to add the system.

![integrationtypewindowservicenow](../../../static/img/product_docs/1secure/integration/integrationtypewindowservicenow.webp)

__Step 2 –__ In the displayed Integration type window, click __ServiceNow__ and click __Next__.

![servicenowconnection](../../../static/img/product_docs/changetracker/changetracker/integration/itsm/servicenowconnection.webp)

__Step 3 –__ In the Configure connection window, specify the required boxes - Server Name, Username, and Password.

__NOTE:__ First, you need to configure your account at [https://www.servicenow.com/](https://www.servicenow.com/). See the [https://docs.servicenow.com/en-US/bundle/vancouver-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html](https://docs.servicenow.com/en-US/bundle/vancouver-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html) help page for an additional information.

View Fields Here:

- Server Name – The root url of your ServiceNow instance (https.//intance.service-now.com)
- Username - Username you create at [https://www.servicenow.com](https://www.servicenow.com/)/
- Password – Password you set up when creating a service account at [https://www.servicenow.com/ ](https://www.servicenow.com/)

__Step 4 –__ Click __Finish__.

The ServiceNow profile is added now. The status displays "Ok" in green.

![servicenowstatus](../../../static/img/product_docs/1secure/integration/servicenowstatus.webp)

Click the __Edit__ icon or the __Bin__ icon to edit or delete the integration.

## Manage Delivery Settings

Follow the steps to manage delivery settings for ServiceNow.

__Step 1 –__ Navigate to __Configuration__ > __Alerts__.

__Step 2 –__ Click the Service Now icon\* under Delivery Settings. The ServiceNow Delivery Settings panel displays.

![alerts_servicenowdeliverysettings](../../../static/img/product_docs/1secure/integration/alerts_servicenowdeliverysettings.webp)

__Step 3 –__ Specify the Assignment Group, which should receive the tickets.

__Step 4 –__ Toggle on the __Enabled__ field to enable the ServiceNow delivery.

__Step 5 –__ Specify the required parameters, such as impact, severity, and urgency of raised tickets.

__Step 6 –__ Optionally, toggle on the __Work Notes__ field to assign alerts detail to Work notes column in ServiceNow. See the [https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html) topic for additional information.

__Step 7 –__ Optionally, toggle on the __Comments__ field to specify the alerts detail in the Comments column in ServiceNow.

__Step 8 –__ Click __Save__.

__NOTE:__ The user account configured for the integration must have the Information technology infrastructure library (ITIL) role assigned to it in ServiceNow. Users without this role are unable to assign urgency/severity to an incident.

See the [https://www.servicenow.com/products/itsm/what-is-itil.htm](https://www.servicenow.com/products/itsm/what-is-itil.html) article for additional information.
