---
sidebar_position: 1675
title: Monitoring Plans
---

Filter: 

* All Files

Submit Search

# Monitoring Plans

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in the following topics:

* [Protocols and Ports Required](../../Requirements/Ports "Protocols and Ports Required") – To ensure successful data collection and activity monitoring configure necessary protocols and ports for inbound and outbound connections
* [Data Collecting Account](DataAccounts "Data Collecting Account") – Configure data collecting accounts as required to audit your IT systems

* [Supported Data Sources](../../Requirements/SupportedDataSources "Supported Data Sources") – Configure data source as required to be monitored

To start auditing your environment and analyzing user behavior with Netwrix Auditor, create a monitoring plan.

A monitoring plan defines data collection, notification, and storage settings.

To start collecting data, and add items to its scope.

Follow the steps to collect data from your environment.

**Step 1 –** Create a monitoring plan with the wizard. Select the data source when you start the monitoring plan wizard, and its initial settings are configured at the wizard steps. See the [Create a New Monitoring Plan](Create "Create a New Plan") topic for additional information.

**Step 2 –** Fine-tune data source settings, if necessary: use the data source properties to modify data collection settings, customize the monitoring scope, and more.

**Step 3 –** Add items to be monitored. An item is a specific object you want to audit, e.g., a VMware server or a SharePoint farm. As soon as the item is added, to the monitoring plan, Auditor starts collecting data from it. See the [Add Items for Monitoring](DataSources#Add "Add Items for Monitoring") topic for additional information.

**Step 4 –**  To view and modify your plans, in the main Auditor window click the Monitoring Plans tile, then expand the All Monitoring Plans tree.

| To.. | Do.. |
| --- | --- |
| See how data collection goes on | Click on a plan name. You will see all data sources included in the plan and data collection status for each data source. |
| Start data collection manually | 1. Select a plan and click Edit. 2. In the monitoring plan window, click Update in the right pane.   Data collection will be started (status for the data sources will be displayed as *Working*).  Do the same if you need to generate Activity Summary with the latest changes. |
| View collected data | 1. Select a plan and click Edit. 2. In the right pane, go to the Intelligence section (in the bottom) and click Search.   The search page will appear, displaying the collected data filtered out accordingly (i.e. provided by this monitoring plan). |
| Modify plan settings, add or delete data sources, add or delete items | Select a plan and click Edit. On the page that opens, review your plan settings. Then follow the instructions described in these sections:   * [Add Items for Monitoring](DataSource "Add Items for Monitoring") * [Fine-Tune Your Plan and Edit Settings](FineTune "Fine-Tune Your Plan and Edit Settings") |
| Assign roles | Click Delegate to review current delegations and assign roles. You can delegate control over a monitoring plan to another administrator, or grant read access—Reviewer role—to the data collected by this plan.  To simplify delegation, you can further organize the monitoring plans into folders.  See the [Role-Based Access and Delegation](Delegation "Role-based access and delegation") topic for additional information. |

## Using historical data

For many data sources, you can instruct Netwrix Auditor to collect state-in-time data along with event data. For that, Netwrix Auditor uses state-in-time snapshots of the relevant system (for example, see [VMware](VMware/Overview "VMware Plans")).

To keep users up-to-date on actual system state, Auditor updates the latest snapshot on the regular basis. Thus, only the latest snapshot is available for ongoing reporting in the product.

However, you may need to generate reports based on the historical data. For that, you must import the historical snapshots to the database.

To import snapshots, you must be assigned the *Global administrator* or the *Global reviewer* role.

Follow the steps to import historical snapshots.

**Step 1 –** Select the monitoring plan you need.

**Step 2 –** Select the required data source and click **Edit data source** on the right to open its properties.

**Step 3 –** Click **General** on the left.

**Step 4 –** In the **Manage historical snapshots** section, click **Manage**.

**Step 5 –** In the **Manage Snapshots** window, select the snapshots that you want to import — use the arrows to move the selected snapshots to the **Snapshots available for reporting** list. When finished, click **OK**.

See the [Role-Based Access and Delegation](Delegation "Role-Based Access and Delegation") topic for additional information.