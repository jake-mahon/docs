---
sidebar_position: 5268
title: FS_Deletions Job
---

# FS\_Deletions Job

The FS\_Deletions job is designed to report on deletion activity event information from targeted file servers.

## Analysis Tasks for the FS\_Deletions Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Forensics** > **FS\_Deletions** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_Deletions Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/Forensics/DeletionsAnalysis.png "Analysis Tasks for the FS_Deletions Job")

The following analysis tasks are selected by default:

* 1. Create deletions view – Creates the SA\_FSAC\_DeletesView view accessible under the job’s Results node
* 2. Last 30 Days – Creates the SA\_FS\_Deletions\_Last30Days table accessible under the job’s Results node
* 3. Trend – Creates the SA\_FS\_Deletions\_TrendOverTime table accessible under the job’s Results node
* 4. Create view to alert - Past 24 hours – Creates the SA\_FS\_Deletions\_Notification\_NOTIFICATION table accessible under the job’s Results node
* 6. Raw Details – Creates the SA\_FS\_Deletions\_Details view accessible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before enabling it. The following analysis task is deselected by default:

* 5. Notify on large number of deletes – Alerts when large number of deletions have occurred

  * Add recipients, notification subject, and email content
  * See the [Configure the Notification Analysis Task](#_Notification_Analysis_Task "Configure the Notification Analysis Task") topic for additional information

In addition to the tables and views created by the analysis tasks, the FS\_Deletions job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| File and Folder Deletions  (Deletion Events) | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None | This report is comprised of two elements:   * Line Chart– Displays the last 30 Days * Table – Provides details on deletions |

### Configure the Notification Analysis Task

A Notification analysis task sends email notification to recipients when the job is executed. It requires the global **Notification** settings to be configured (**Settings** > **Notifications**) for SMTP server information, but it uses the recipient list provided through the analysis task. Follow the steps to configure a notification analysis task.

**Step 1 –** Navigate to the job’s **Configure** node and select **Analysis**.

**Step 2 –** In the Analysis Selection view, select the Notification analysis task and click **Analysis Configuration** . The Notification Data Analysis Module wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Notification Data Analysis Module wizard SMTP page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/Forensics/NotificationSMTP.png "Notification Data Analysis Module wizard SMTP page")

**Step 3 –** Navigate to the SMTP page of the wizard.

![Recipients section](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/Forensics/NotificationSMTPRecipients.png "Recipients section")

**Step 4 –** In the Recipients section, provide the email addresses or distribution lists (fully qualified address) for those who are to receive this notification. Multiple addresses can be provided. You can use the following options:

* Add – Add an email address to the E-mail field
* Remove – Remove an email address from the Recipients list
* Combine multiple messages into single message – Sends one email for all objects in the record set instead of one email per object to all recipients

  ***RECOMMENDED:*** Leave the **Combine multiple messages into single message** option selected.

![Message section](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/Forensics/NotificationSMTPMessage.png "Message section")

**Step 5 –** In the Message section, edit the **Subject**. It is not recommended to remove any parameters. Then, customize the email content in the textbox to provide an explanation of the notification to the recipients.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save any setting modifications or click **Cancel** if no changes were made. The Notification Data Analysis Module wizard closes.

**Step 7 –** This Notification analysis task is now configured to send emails to the provided recipient list. In the Analysis Selection view, select this task so that notifications can be sent automatically during the execution of the job.

*Remember,* all of the analysis tasks should remain in the default order indicated by the numbering. Do not deselect any of the SQLscripting analysis tasks.

Once the Notification analysis task is configured and enabled alerts are sent when the trigger has been identified by this job.