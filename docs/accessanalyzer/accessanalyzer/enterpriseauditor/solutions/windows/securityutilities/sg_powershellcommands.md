# SG\_PowerShellCommands Job

The SG\_PowerShellCommands job lists suspicious PowerShell commands on all targeted hosts. The list of commands considered can be customized by configuring the Check PowerShell Log query.

## Queries for the SG\_PowerShellCommands Job

The SG\_PowerShellCommands job uses the SmartLog Data Collector for the following queries:

__CAUTION:__ The Check PowerShell Operations log query is preconfigured for this job. Never modify the query.

![Queries for the SG_PowerShellCommands Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/powershellcommandsqueries.png)

The queries for the SG\_PowerShellCommands job are:

- Check PowerShell log – Checks the PowerShell log

  - (Optional) This query can be configured. See the [Configure the Check PowerShell log Query](#Configure-the-Check-PowerShell-log-Query) topic for additional information.
- Check PowerShell Operations log – Checks the PowerShell Operational log

### Configure the Check PowerShell log Query

The Check PowerShell log query has been preconfigured to run with the default settings. However, the new criteria can optionally be added on the Criteria page in the Smart Log Data Collector Wizard.

__Step 1 –__ Navigate to the __Jobs__ > __Windows__ > __Security Utilities__ > __SG\_PowerShellCommands__ > __Configure__ node and select __Queries__. Select the __Check PowerShell log__ query.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__  Select the __Data Source__ tab, and click __Configure__. The Smart Log Data Collector Wizard opens.

__Step 4 –__ If the __Criteria__ tab is grayed out, click __Next__ through the windows until the tab is accessible.

![Smart Log Data Collector Wizard Criteria page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/smartlogdcwizardcriteria.png)

__Step 5 –__ On the Criteria page, click the __press the button to add a new condition__ box.

__Step 6 –__ Enter the desired conditions.

__Step 7 –__ Click __Next__ to navigate to the Summary page and click __Finish__.

The Check PowerShell log query has now been saved with the new conditions.

## Analysis Tasks for the SG\_PowerShellCommands Job

View the analysis tasks by navigating to the __Windows__ > __Security Utilities__ > __SG\_PowerShellCommands__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_PowerShellCommands Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/powershellcommandsanalysis.png)

The default analysis tasks are:

- List PowerShell command details – Creates an interim processing table in the database for use by downstream analysis and report generation
- Summarize PowerShell commands – Creates the SA\_PowerShellCommands\_HostSummary table accessible under the job’s Results node

The optional analysis tasks is:

- Notify on suspicious commands – Enable this analysis task and the select Analysis Configuration to open the Notification Data Analysis Module Wizard to configure it to send notifications on suspicious commands. See the [Configure the Notify on Suspicious Commands Analysis Task](#Configure-the-Notify-on-Suspicious-Commands-Analysis-Task) topic for additional information.

In addition to the tables and views created by the analysis tasks, the EX\_DeliveryTimes job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Suspicious PowerShell Commands | This report highlights instances where suspicious PowerShell commands have been found in a host's PowerShell log. | None | This report is comprised of three elements:   - Bar Chart – Displays suspicious commands by host - Table – Provides details on suspicious commands by host - Table – Provides command details |

### Configure the Notify on Suspicious Commands Analysis Task

Follow these steps to configure the notification analysis task.

__Step 1 –__ Navigate to the __Jobs__ > __Windows__ > __Security Utilities__ > __SG\_PowerShellCommands__ > __Configure__ node and select __Analysis__.

__Step 2 –__ In the Analysis Selection view, select the __Notify on suspicious commands__ analysis task and click __Analysis Configuration__. The Notification Data Analysis Module opens.

![Notification Data Analysis Module wizard SMTP properties page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/powershellcommandsnotifysmtp.png)

__Step 3 –__ Use the __Next__ button to navigate to the SMTP page. Do not make changes to the preceding pages.

![Recipients section](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/powershellcommandsnotifyrecipients.png)

__Step 4 –__ In the Recipients section, provide the email addresses or distribution lists (fully qualified address) for those who are to receive this notification. Multiple addresses can be provided. You can use the following options:

- Add – Add an email address to the E-mail field
- Remove – Remove an email address from the Recipients list
- Combine multiple messages into single message – Sends one email for all objects in the record set instead of one email per object to all recipients

![Message section](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/powershellcommandsnotifymessage.png)

__Step 5 –__ In the Message section, edit the __Subject__. It is not recommended to remove any parameters. Then, customize the email content in the textbox to provide an explanation of the notification to the recipients.

__Step 6 –__ To save these configuration changes, use the __Next__ to navigate to the Summary page. Do not make changes to any other pages. Click __Finish__. The Notification Data Analysis Module window closes.

__Step 7 –__ This notification analysis task is now configured to send emails. In the Analysis Selection view, select this task so that notifications can be sent automatically during the execution of the SG\_PowerShellCommands job.

The Notify on suspicious commands analysis task is now configured to send notifications.
