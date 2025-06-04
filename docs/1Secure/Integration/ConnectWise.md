---
id: connectwise
title: ConnectWise
---

# ConnectWise

ConnectWise is a flexible platform for Managed Service Providers that provides integrated services. Integrated with Netwrix 1Secure, ConnectWise allows to deliver an alert as a ticket for help desk or tech services. In ConnectWise, you can create a Company and match with the Organization in Netwrix 1Secure. The tickets are delivered under the name of that company.

Image keys:

| Icon | Description |
| --- | --- |
|  | Bin Icon. Click the Bin icon to delete the ConnectWise integration |

## Add a ConnectWise Company in a System

Follow the steps to add a ConnectWise company in Netwrix 1Secure.

**Step 1 –** Go to **Configuration** \> **Integrations** and click the **Add** icon to add the ConnectWise company.

![Integration Type pane](/img/1secure/integration/IntegrationTypeWindowConnectWise.png "Integration Type pane")

**Step 2 –** Click **ConnectWise** and then click **Next**.

![Configure connection pane](/img/1secure/integration/IntegrationConfigureConnectionConnectWise.png "Configure connection pane")

**Step 3 –** In the Configure Connection window, enter information in the required fields.

- Company URL – Enter when setting the public keys for the company at https://www.connectwise.com/
- Company ID – Company ID at [https://www.connectwise.com/](https://www.connectwise.com/ "https://www.connectwise.com/")
- Pubic key – Public key you specify at [https://www.connectwise.com/](https://www.connectwise.com/ "https://www.connectwise.com/")
- Private key – Private key you specify at [https://www.connectwise.com/](https://www.connectwise.com/ "https://www.connectwise.com/")

**Step 4 –** Click *Finish*.

The ConnectWise company is added now. The status displays "Ok" in green.

![Integrations List](/img/1secure/integration/ConnectWise.png "Integrations List")

Use the Edit icon or the Bin icon to edit or delete the integration.

Also, when you add a new organization, you can specify your ConnectWise company from the start. See the [Add Organizations](../Admin/Organizations/AddOrganizations.md "Add Organizations") topic for additional information.

**Step 1 –** Navigate to Configuration > Alerts.

**Step 3 –** Toggle on the Enabled button to enable the ConnectWise delivery.

**Step 4 –** Set the default priority of raised tickets.

**Step 5 –** Provide the corresponding ConnectWise Company ID for the required organization.

**Step 6 –** Click **Save**.

## ConnectWise Manage Permissions

Netwrix has built a ready-to-use add-on that automates incident management, automatically creating service tickets for security alerts triggered by Netwrix 1Secure.

- System – Table Setup – Inquire Level = All
- Companies – Company Maintenance – Add(all), Inquire(all)
- Companies – Manage Attachments – Add(all), Inquire(all)
- Service Desk – Service Tickets – Add(all), Inquire(all)