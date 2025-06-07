# User Activity

__NOTE:__ Prior to configuring your monitoring plan, please read and complete the instructions in the following topics:

- [Protocols and Ports Required](/docs/product_docs/auditor/auditor/requirements/ports.md) – To ensure successful data collection and activity monitoring configure necessary protocols and ports for inbound and outbound connections
- [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to audit your IT systems

- [User Activity](/docs/product_docs/auditor/auditor/configuration/useractivity/overview.md) – Configure data source as required to be monitored

Complete the following fields:

| Option | Description |
| --- | --- |
| General |  |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data. |
| Notify users about activity monitoring | You can enable the message that will be displayed when a user logs in and specify the message text. |
| Record video of user activity within sessions | - If disabled, only user session events will be collected (regardless of whether the user is idle or not). - If enabled, the product will both collect user session events and record video of user activity.   By default, this option is disabled. |
| Video Recording For these settings to become effective, enable video recording on the  General tab. |  |
| Adjust video quality | Optimize video file by adjusting the following:   - File size and video quality - Save video in grayscale - CPU load and Video smoothness. |
| Adjust video duration | Limit video file length by adjusting the following:   - Recording lasts for <...> minutes—Video recording will be stopped after the selected time period. - User has been idle for <...> minutes—Video recording will be stopped if a user is considered inactive during the selected time period.  If the Record video of user activity within sessions option is enabled, the User Sessions report shows active time calculated without including user idle period. Mind that a computer is considered to be idle by Windows if there has not been user interaction via the mouse or keyboard for a given time and if the hard drives and processors have been idle more than 90% of that time. - Free disk space is less than <...> MB—Video recording will be stopped when upon reaching selected disk space limit. - Consider user activity — Select one of the following:    - Stop if user has been idle for <...> minutes. Select if you want video recording for a user to be stopped after the specified time period.   - Continue video recording regardless of the user idle state. When selected, Netwrix Auditor continues video recording for idle users. |
| Set a retention period to clear stale videos | When the selected retention period is over, Netwrix Auditor deletes your video recordings. |
| Users |  |
| Specify users to track their activity | Select the users whose activity should be recorded. You can select __All users__ or create a list of __Specific users or user groups__. Certain users can also be added to __Exceptions__ list. |
| Applications |  |
| Specify applications you want to track | Select the applications that you want to monitor. You can select All applications or create a list of Specific applications. Certain applications can also be added to Exceptions list. |
| Monitored Computers |  |
| For a newly created monitoring plan for User Activity, the list of monitored computers is empty. Add items to your monitoring plan and wait until Netwrix Auditor retrieves all computers within these items. See [Add Items for Monitoring](/docs/product_docs/auditor/auditor/admin/monitoringplans/datasources.md#Add-Items-for-Monitoring)for more information. The list contains computer name, its current status and last activity time. |  |

Review your data source settings and click __Add__ to go back to your plan. The newly created data source will appear in the __Data source__ list. As a next step, click __Add item__ to specify an object for monitoring. See the [Add Items for Monitoring](/docs/product_docs/auditor/auditor/admin/monitoringplans/datasources.md#Add-Items-for-Monitoring) topic for additional information.

## How to Include/Exclude Applications

To create a list of application to include in / exclude from monitoring, you will need to provide:

- Title — application title as shown on top of the application window, for example, __MonthlyReport.docx - Word__.

  - Title can also be found in the "_What_" column of related Netwrix Auditor reports and search results, for example, in the __User Sessions__ report.
- Description — as shown in the Description column on theDetails tab of Windows Task Manager.

  - Using Description can help to filter out several components of a single application — for example, all executables having _TeamViewer 14_ description belong to the same app (see the screenshot above).

To create a list of inclusions / exclusions for applications:

__Step 1 –__ Click Add on the right of the list.

__Step 2 –__ Enter application title and description you have identified.

Wildcards (\*?) are supported and applied as follows:

- _\* - Notepad_ (the "Title" filter) will exclude all Notepad windows.
- _colo?r \*_ (the "Title" filter) will exclude all application window titles containing "_color_" or "_colour_".

Same logic applies to the inclusion rules.

Example

To exclude the Notepad application window with "_Document1_" open, add the following filter values:

- In the Title filter enter "_Document1.txt - Notepad_":

  ![uavr_source_example_1](/static/img/product_docs/auditor/auditor/admin/monitoringplans/useractivity/uavr_source_example_1.png)
- In the Description filter, enter the corresponding value, here it will be "_Notepad_".

[![uavr_source_example_2_thumb_0_0](/static/img/product_docs/auditor/auditor/admin/monitoringplans/useractivity/uavr_source_example_2_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/monitoringplans/uavr_source_example_2.png)

## Computer

For evaluation purposes, Netwrix recommends selecting Computer as an item for a monitoring plan. Once the product is configured to collect data from the specified items, audit settings (including Core and Compression services installation) will be applied to all computers within AD Container or IP Range.

Complete the following fields:

| Option | Description |
| --- | --- |
| General |  |
| Specify a computer | Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network. |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select account type you want to use and enter credentials. The following choices are available:   - User/password. The account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) topic for additional information. - Group Managed Service Account (gMSA). You should specify only the account name in the domain\account$ format. See the [Use Group Managed Service Account (gMSA)](/docs/product_docs/auditor/auditor/requirements/gmsa.md) topic for additional information. |

## IP Range

Complete the following fields:

| Option | Description |
| --- | --- |
| General |  |
| Specify IP range | Specify an IP range for the audited computers.  To exclude computers from within the specified range, click __Exclude__. Enter the IP subrange you want to exclude, and click __Add__. |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select __Custom account__ and enter credentials. The credentials are case sensitive.  A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) topic for additional information. |

## AD Container

Complete the following fields:

| Option | Description |
| --- | --- |
| General |  |
| Specify AD container | Specify a whole AD domain, OU or container. Click __Browse__ to select from the list of containers in your network. You can also:   - Select a particular computer type to be audited within the chosen AD container: __Domain controllers, Servers (excluding domain controllers)__, or __Workstations__. - Click __Exclude__ to specify AD domains, OUs, and containers you do not want to audit. In the Exclude Containers dialog, click Add and specify an object.   The list of containers does not include child domains of trusted domains. Use other options __(Computer, IP range__ to specify the target computers. |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select __Custom account__ and enter credentials. The credentials are case sensitive.  If using a group Managed Service Account (gMSA), you can specify only the account name in the _domain\account$_ format. Password field can be empty.  A custom account must be granted the same permissions and access rights as the default account used for data collection. See the[Data Collecting Account](/docs/product_docs/auditor/auditor/admin/monitoringplans/dataaccounts.md) topic for additional information. |
