---
id: servicenow
title: ServiceNow
---

# ServiceNow

ServiceNow is a flexible platform for Managed Service Providers that provides integrated services. Integrated with Netwrix 1Secure, ServiceNow allows to deliver an alert as a ticket or a work note for help desk or tech services. Once a ticket is created, it is assigned to an IT agent to be resolved.

Image keys:

| Icon | Description |
| --- | --- |
|  | Bin Icon. Click the Bin icon to delete the ServiceNow integration |

## Add a ServiceNow Integration System

Follow the steps to add a ServiceNow integration system.

**Step 1 –** Go to Configuration > **Integrations** and click the **Add** icon to add the system.

![](/img/1secure/integration/IntegrationTypeWindowServiceNow.png)

**Step 2 –** In the displayed Integration type window, click **ServiceNow** and click **Next**.

![](/img/1secure/integration/ServiceNowConnection.png)

**Step 3 –** In the Configure connection window, specify the required boxes - Server Name, Username, and Password.

View Fields Here:

- Server Name – The root url of your ServiceNow instance (https.//intance.service-now.com)
- Username - Username you create at [https://www.servicenow.com](https://www.servicenow.com/ "https://www.servicenow.com")/

**Step 4 –** Click **Finish**.

The ServiceNow profile is added now. The status displays "Ok" in green.

![](/img/1secure/integration/ServiceNowStatus.png)

Click the **Edit** icon or the **Bin** icon to edit or delete the integration.

**Step 1 –** Navigate to **Configuration** \> **Alerts**.

**Step 3 –** Specify the Assignment Group, which should receive the tickets.

**Step 4 –** Toggle on the **Enabled** field to enable the ServiceNow delivery.

**Step 5 –** Specify the required parameters, such as impact, severity, and urgency of raised tickets.

**Step 6 –** Optionally, toggle on the **Work Notes** field to assign alerts detail to Work notes column in ServiceNow. See the [https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html "https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html") topic for additional information.

**Step 7 –** Optionally, toggle on the **Comments** field to specify the alerts detail in the Comments column in ServiceNow.

**Step 8 –** Click **Save**.

See the [https://www.servicenow.com/products/itsm/what-is-itil.htm](https://www.servicenow.com/products/itsm/what-is-itil.html "https://www.servicenow.com/products/itsm/what-is-itil.htm") article for additional information.