---
title: Email Alert
sidebar_label: Email Notifications
description: This action sends an email to the list of provided email address(es). When running the Workflow wizard and having selected Email Alert as an action, you will...
---

# Email Alert

This action sends an email to the list of provided email address(es). When running the Workflow
wizard and having selected **Email Alert** as an action, you will be prompted to configure the
related settings.

![wizard_action_email_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/wizard_action_email_thumb_0_0.webp)

In the case where the Workflow is configured against a SharePoint source / group (or, the generic
“All Sources” for SharePoint) the action will optionally support a dynamic recipient selection
against either the creator or last modifier of the document (provided by the SharePoint document
metadata).

Specify the following:

| Field                              | Settings to specify                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specific recipients                | Specify email address to send the alert to. To enter multiple recipient, click **+** on the right.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Who should the email be sent from? | Specify email sender and SMTP server settings. You can select a pre-configured SMTP server (if any), or specify new connection parameters by clicking the + on the right — then in the **Email Server Details** dialog enter the following: - Host—Enter your SMTP server address. It can be your company's Exchange server or any public mail server (e.g., Gmail, Yahoo). - Port—Specify your SMTP server port number. - Use SSL—Select this checkbox if your SMTP server requires SSL to be enabled. - From Email—Enter the address that will appear in the From field. - Username—Enter a user name for the SMTP authentication. - Password—Enter a password for the SMTP authentication. **NOTE:** It is recommended to use Test Configuration Settings option. The system will send a test message to the specified email address and inform you if any problems are detected. |

![action_email_smtp_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/action_email_smtp_thumb_0_0.webp)

When finished, slick **Save** to close the dialog and return to email action settings.

| Field               | Settings to specify                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email Subject       | Specify the template for email subject. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** You can select the corresponding fields from **Add a Merge Field** list on the right. |
| Email Body Template | Specify the template for email body. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** You can select the corresponding fields from **Add a Merge Field** list on the right.    |

To modify action settings for the certain workflow, select the workflow and use the Advanced UI
window, as described in the
[Modify Email Alert action settings](/docs/dataclassification/5.6.2/workflows-automation/workflow-actions/email-notifications.md)
section.

# Modify Email Alert action settings

To modify Email Alert action settings using the **Advanced** interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to
   configure email alert for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select **Email Alert** section in the Action Type list.

Specify the following settings:

| Field                   | Setting to specify                                                                                                                                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Email Address**       | Specify email recipients. You can enter multiple static email addresses. **NOTE:** Dynamic configurations will use the '_Document Modified/Created By_' metadata value, looking up the user's email address from Active Directory where appropriate.                          |
| **SMTP Config**         | Choose a preconfigured SMTP server to use when sending the email. This also defines who the email will show as being sent from. For more information, see [Email Alert](/docs/dataclassification/5.6.2/workflows-automation/workflow-actions/email-notifications.md) section. |
| **Subject**             | Specify the template for email subject. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** To get the list of available fields, click the **details** link.                                               |
| **Email Body Template** | Specify the template for email body. The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_). **TIP:** To get the list of available fields, click the **details** link.                                                  |
