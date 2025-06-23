---
title: send mail
sidebar_label: send mail
description: Documentation for send mail functionality in Access Analyzer including configuration and usage information.
---

# SendMail Action: Message

Use the Message page to specify the text of the email.

![Send Mail Action Module Wizard Message page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/message.webp)

Use the following fields to specify the text of the email:

- Subject – Specify a subject for the email. The contents of this field displays as the subject line
  of the delivered email. Enter text directly and optionally use the Insert field to insert one or
  more data fields. This is a required field.
- Insert Field – Inserts a data field into the subject or body of the email. The drop-down menu
  displays a list of available fields. Once a selection displays in the field, click on the blue Up
  and Down arrows to insert the field into the body or the subject, respectively. This field is
  optional.
- Show sample input source data – To display a table of sample source data, click the icon next to
  the blue arrows.
- Show dialog to set SMTP options – To override the global SMTP settings, click the icon next to the
  blue arrows to display the SMTP Options dialog box
- Preview – Displays the Message Preview window containing a preview of the current SendMail. Click
  **Send** to send a single message to the addresses in the Recipient field in the Message Preview
  window. The Preview button is active only if the Recipients field is populated on the Properties
  page of the Send Mail Action Module Wizard. See the
  [Messages Preview Window](#messages-preview-window) topic for additional information.
- Clear Template – Clears any content from the Subject and Text Entry box
- Load from template – Accesses a list of message templates. This field is optional. The following
  templates are available:

  - Active Directory Cleanup
  - Distribution List Cleanup
  - Mailbox Cleanup
  - Open Shares Lockdown
  - Public Folder Cleanup
  - Sensitive Group Review
  - Shared Folder Cleanup
  - Unauthorized Software Cleanup

- Message templates include sample email text describing the reason for the message and the next
  steps requested of, or required by, the user. They may also include dynamic content taken from the
  specified table, for example the user name.

  - Save to template – Saves the current email subject and content to a template. If an existing
    template name appears in the Load from template field, clicking this button updates that
    template. If the Load from template field is empty or contains a name other than one of the
    existing templates, clicking this button opens the Save SendMail Template window and saves the
    changes to a new template. Templates reside locally on the host computer as XML files, in the
    `Actions/SM_Templates` folder.

## Text Entry Box

The Text Entry box allows you to compose a message. A Microsoft Word-style editor provides
formatting options including the ability to insert dynamic text from the specified table (such as a
username) through the Insert field option. Use the editor to personalize the content and appearance
of each message.

Example:

Assume the source table includes a column containing the names of intended recipients. Place the
cursor in the greeting section of the email. Next, select that field from the Insert field drop-down
list and click the down arrow to insert a dynamic field. The column name appears in the Text Entry
box, enclosed by brackets:

Dear [ProbableOwner];

You are approaching your Mailbox storage quota. Please clean up any unneeded items.

Thank you,

The Messaging Team

## Messages Preview Window

The Messages Preview window displays a preview of the email, including any dynamic fields. This
window displays after clicking the **Preview** button.

![Messages preview window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/survey/messagespreview.webp)

- Blue arrow buttons – Click to view other recipients
- Send – Sends a single message to the addresses in the Recipients field

# SendMail Action Module

Use this action module to send dynamic and static content from selected audit data to targeted
audiences.

The SendMail Action Module has multiple uses, for example:

- Send notifications of important IT initiatives or planned service outages
- In combination with other Enterprise Auditor action modules such as Survey, create an end-to-end
  workflow to contact clients and solicit feedback for use in the decision-making process

**CAUTION:** This module sends one or more electronic messages to a selected audience. Prior to
executing the action, ensure the audience consists of only the desired members.

## Source Table Configuration

All data tables used in Enterprise Auditor action modules require the presence of certain data
columns. In addition, individual action modules including SendMail may have their own column
requirements. The SendMail Action Module requires a column containing well-formatted email addresses
(for example, `hfinn@netwrix.com`) for your recipients.

## Configuration

The SendMail Action module is configured through the SendMail Action Module Wizard, which contains
the following wizard pages:

- Welcome
- [SendMail Action: Properties](/docs/accessanalyzer/11.6/analysis-and-actions/actions/send-mail.md)
- [SendMail Action: Message](/docs/accessanalyzer/11.6/analysis-and-actions/actions/send-mail.md)
- [SendMail Action: Summary](/docs/accessanalyzer/11.6/analysis-and-actions/actions/send-mail.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard.

![Send Mail Action Module Wizard Welcome page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overview.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.

# SendMail Action: Properties

Use the Properties page to specify the recipients of the email.

![Send Mail Action Module Wizard Properties page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/properties.webp)

Use the following fields to specify the recipient information:

- Recipient column – Use the drop-down menu to specify the column from the data table containing
  intended recipients, for example a column containing email addresses
- Recipient type – Use the drop-down menu to specify the data type of the Recipient column, for
  example SMTP mail address
- Carbon copy (CC) – Optionally, specify one or more additional email addresses to receive a
  carbon-copy of the SendMail message, for example an address not included in the source table.

  - Use the following email address – Enter one or more additional email addresses. Separate
    multiple addresses with a semi-colon and a space.
  - Use a column from the table – Use the drop-down menu to specify a column from the data table

- Combine multiple messages into a single message when all recipients are the same – Select this
  checkbox to send only one message to each recipient as a result of this action (even recipients
  who appear more than once in the job results)

# SendMail Action: Summary

The Summary page displays the SendMail configuration.

![Send Mail Action Module Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Send Mail Action Module Wizard to ensure that no accidental clicks are
saved.

To view the status of executed SendMail actions, see the
[Viewing the Status of SendMail Actions](/docs/accessanalyzer/11.6/analysis-and-actions/actions/send-mail.md)
for additional information.

# Viewing the Status of SendMail Actions

Follow the steps to view the status of an executed SendMail action:

![Analysis Properties page for SendMail View Status Analysis task](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusanalysisproperties.webp)

**Step 1 –** Create a new SQLViewCreation analysis and choose **Configure Analysis**. The View and
Table Creation Analysis Module wizard opens.

![Input Source wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusinputsource.webp)

**Step 2 –** On the Input Source page, choose the original source table for the SendMail action as
the first table and `tablename_ActionStatus` as the second table. For example, if the source table
is `MailEnabledPF`, then select `MailEnabledPF_ActionStatus` as the second table.

![Join Columns wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusjoincolumns.webp)

**Step 3 –** For **Table 1 join property**, specify the column recipient of the SendMail action. For
example, if sent to SMTP address, specify **SMTPaddress** as the column. For **Table 2 join
property**, select **srcRowKey**. Leave everything else at the default settings.

![Result Columns wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusresultcolumns.webp)

**Step 4 –** On the Results Columns page, select the columns to return from each table. Leave all
other settings at their default.

![Result Type wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusresulttype.webp)

**Step 5 –** On the Result Type page, leave it as a table and provide a descriptive name, for
example `SendMailStatus`.

![Results Sample wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/sendmail/viewstatusresultsample.webp)

**Step 6 –** Click through the rest of the options. On the Result Sample page, click **Show
Preview** to display the columns selected within the Columns page. Click **Summary** to navigate to
the Summary page and click **Finish** to exit the wizard.

This analysis now reports the status of the SendMail action.
