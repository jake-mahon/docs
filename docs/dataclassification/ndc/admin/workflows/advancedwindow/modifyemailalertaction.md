# Modify Email Alert action settings

To modify Email Alert action settings using the __Advanced__ interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to configure email alert for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select __Email Alert__ section in the Action Type list.

Specify the following settings:

| Field | Setting to specify |
| --- | --- |
| __Email Address__ | Specify email recipients. You can enter multiple static email addresses.  __NOTE:__ Dynamic configurations will use the '_Document Modified/Created By_' metadata value, looking up the user's email address from Active Directory where appropriate. |
| __SMTP Config__ | Choose a preconfigured SMTP server to use when sending the email. This also defines who the email will show as being sent from. For more information, see [Email Alert](/docs/product_docs/dataclassification/ndc/admin/workflows/actions/emailalert.md) section. |
| __Subject__ | Specify the template for email subject.  The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_).  __TIP:__ To get the list of available fields, click the __details__ link. |
| __Email Body Template__ | Specify the template for email body.  The template can contain dynamic values that will be obtained from the crawled content (e.g. _[cs:PageUrl]_).  __TIP:__ To get the list of available fields, click the __details__ link. |
