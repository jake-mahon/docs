# AD\_PasswordExpirationNotification Job

The AD\_PasswordExpirationNotification Job determines when Active Directory user passwords are about to expire and can be configured to send notifications to users prior to password expiration. It is available through the Instant Job Library under the Active Directory library. See the [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md) section for instructions to add this instant job into the Jobs tree. Since this job does not require a host to target, select Local host on the Hosts page of the Instant Job Wizard.

![AD_PasswordExpirationNotification job in the Jobs tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

Runtime Details:

- Dependencies – The .Active Directory Inventory Job Group must be successfully run before running this job
- Target Hosts – None
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported

The AD\_PasswordExpirationNotification Job runs analysis tasks that generate tables and configure password expiration notifications. It also generates a report on passwords expiring within a specified parameter, by default within 15 days. If desired, notifications of password expiration can be configured to send to a help desk email (through an analysis task) and to the user (through an action task).

## Analysis Tasks for the AD\_PasswordExpirationNotification Job

Navigate to the __Jobs__ > __AD\_PasswordExpirationNotification__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Default Analysis Tasks for the Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/analysistasks.png)

The default analysis tasks are:

- 1. User Password Information – Creates the PasswordExpirationNotification\_Details table accessible under the job’s Results node
  - Contains a configurable parameter for the number of days until a password expires to be identified
  - See the [Customizable Analysis Tasks for the AD\_PasswordExpirationNotification Job](#Customizable-Analysis-Tasks-for-the-AD_PasswordExpirationNotification-Job) topic for additional information.
- 2. Domain Summary – Creates an interim processing table in the database for use by downstream analysis and report generation
- 3. Passwords Set to Expire Within 15 Days – Creates the PasswordExpirationNotification\_ExpiresWithin15Days table accessible under the job’s Results node
- 4. Notification Data Table – Creates the PasswordExpirationNotification\_ExpiresWithin15Days\_UserNotifications table accessible under the job’s Results node
- 5. Help Desk Notification – Sends notification of users with passwords set to expire in X days
  - See the [Notification Analysis Task in the AD\_PasswordExpirationNotification Job](#Notification-Analysis-Task-in-the-AD_PasswordExpirationNotification-Job) topic for additional information.

## Action for the AD\_PasswordExpirationNotification Job

Navigate to the __Jobs__ > __AD\_PasswordExpirationNotification__ > __Configure__ node and select __Actions__ to view the action modules.

__CAUTION:__ This action is enabled by default.

![Default Action Tasks for the Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/actiontasks.png)

The default actions are:

- 1. User Notification – Uses the SendMail Action Module to send notifications to users on password expiration
  - Requires the Notification Actions license feature
  - See the [Action Task in the AD\_PasswordExpirationNotification Job](#Action-Task-in-the-AD_PasswordExpirationNotification-Job) topic for additional information.

In addition to the tables created by the analysis and action tasks, the AD\_PasswordExpirationNotification Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Passwords Expiring Within 15 Days | This report displays users accounts with passwords set to expire within 15 days. | None | This report is comprised of one element:   - Table – Displays details on passwords expiring within 15 days |

## Customizable Analysis Tasks for the AD\_PasswordExpirationNotification Job

Customizable parameters enable Enterprise Auditor users to set the values used to classify user and group objects during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__CAUTION:__ Do not change the table names or report name to align with a different value supplied for this parameter. Modifying the table names will result in analysis and report errors downstream. Only the report title and descriptions can be modified within the report configuration.

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| 1. User Password Information | @pswLen | 15 | Number of days left until a password expires, should be set according to an organizations policy. |

The parameters that can be customized are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__Step 1 –__ Navigate to the __AD\_PasswordExpirationNotification__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__Step 2 –__ In the Analysis Selection view, select the __1. User Password Information__ Analysis Task and click on __Analysis Configuration__. The SQL Script Editor opens.

![1. User Password Information Analysis Task in SQL Script Editor](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/customizeanalysistask.png)

__Step 3 –__ In the parameters section at the bottom of the editor, find the Value column. Double-click on the current value and change as desired.

__CAUTION:__ Do not change any parameters where the Value states __Created during execution__.

__Step 4 –__ Click __Save and Close__ to finalize the customization and close the SQL Script Editor.

The new value will be applied to the next job execution.

## Notification Analysis Task in the AD\_PasswordExpirationNotification Job

The Notification Analysis Task can be used to send a single email to specified recipients containing a list of all users whose passwords will expire in the specified number of days, that is the users listed in the PasswordExpirationNotification\_ExpiresWithin15Days table. The analysis is enabled by default. Therefore, when the job is executed the following message is sent to the specified recipient, such as the organization’s help desk, with information from the associated table:

_Subject:_ Users with Passwords About To Expire

Support Team,

Heads-up.  The following users are facing password expiration in seven days or less:

__[[ -- Password for [User] ([NTAccount]) expires in [DaysUntilExpiration] days__

__]__

Thank you,

Netwrix

__CAUTION:__ Do not modify the tags, highlighted in bold text above.

The Subject or message body can be modified, for example to replace ```Netwrix``` with the organization’s name. Follow the steps to configure the 5. Help Desk Notification Analysis Task.

__Step 1 –__ Navigate to the __AD\_PasswordExpirationNotification__ > __Configure__ node and select __Analysis__ to view the Analysis tasks.

__Step 2 –__ In the Analysis Selection view, select the __5. Help Desk Notification Analysis Task__ and click on __Analysis Configuration__. The Notification Data Analysis Module opens.

![SMTP properties page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/smtpproperties.png)

__Step 3 –__ Use the __Next__ button to navigate to the SMTP properties page. Do not make changes to the preceding pages. The email configuration takes place on the SMTP page. Provide the recipients’ email addresses, Message Subject, and add the notification email content.

![SMTP properties add email recipients](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/smtppropertiesrecipients.png)

In the Recipients section, provide the email addresses in the text box or distribution lists in the E-mail field (fully qualified address) for those who are to receive this notification, for example the organization’s Help Desk. Multiple addresses can be input by adding a semicolon (;) and space between entries.

Use the __Add__ and __Remove__ buttons to add or remove the address in the E-mail field from the Recipients list. There is an option to __Combine multiple messages into single message__, which is checked by default so that it sends one email for all users in the record set instead of one email per user.

![Message section of SMTP properties page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/smtppropertiesmessage.png)

In the Message section, the __Subject__ should be configured. Then set the email content in the text box as desired.

__Step 4 –__ To save these configuration changes, use the __Next__ button to navigate to the Summary page. Do not make changes to any other pages. Click __Finish__. The Notification Data Analysis Module window closes.

![Analyis Tasks view](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/analysistaskshelpdesknotification.png)

__Step 5 –__ This notification analysis task is now configured to send emails. In the Analysis Selection view, ensure the 5. Help Desk Notification Analysis Task is checked so that notifications can be sent automatically during the execution of the AD\_PasswordExpirationNotification Job.

The recipients added in Step 3 receive a notification when the AD\_PasswordExpirationNotification Job is executed.

## Action Task in the AD\_PasswordExpirationNotification Job

The 1. User Notification Action Task uses the SendMail Action Module to send users notification of password expiration. It targets the SMTP Address Column of the users whose passwords are going to expire within the desired number of days, that is the users listed in the PasswordExpirationNotification\_ExpiresWithin15Days\_UserNotifications table. The action is enabled by default. Therefore, when the job is executed the following message is sent to all users in the associated table:

_Subject:_ Attention __[User]__ - Your Password Expires in __[DaysUntilExpiration]__ Days

Hello __[User]__,

The password for the account __[NTAccount]__ expires on __[ExpirationDate]__. Please change the password prior to the expiration date.  If account profiles are used on mobile devices, please remember to update the password on each device used.

Thank you,

Netwrix

__CAUTION:__ Do not change the recipient for the action task. While the tags can be moved, do not remove or modify the tags, which are highlighted in bold text above.

The subject or message body can be modified, for example to replace ```Netwrix``` with the organization’s name. Follow the steps to modify the Subject or message body within the 1. User Notification Action Task.

__NOTE:__ It is necessary for the PasswordExpirationNotification\_ExpiresWithin15Days\_UserNotifications table to exist in the database before this action task can be modified.

__Step 1 –__ Navigate to the __AD\_PasswordExpirationNotification__ > __Configure__ node and select __Actions__.

__Step 2 –__ In the Action Selection view, select the __1. User Notification__ Action Task and click on __Action Properties__ to view the actions.

__CAUTION:__ Do not modify the action task properties.

__Step 3 –__ In the Action Properties view, the action properties and a preview of the users from the associated table are displayed. Click __Configure Action__. The Send Mail Action Module Wizard opens.

![Send Mail Action Module Wizard Message page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/actionwizardmessage.png)

__Step 4 –__ Click __Next__ to navigate to the Message page. Modify the message __Subject__ and email content as desired.

__Step 5 –__ Click __Next__ and then __Finish__ to save the changes. The Send Mail Action Module Wizard closes.

__Step 6 –__ Click __Save__ on the Action Properties view.

When the action task is enabled, it executes as part of the job. Optionally, the action task can be manually executed.
