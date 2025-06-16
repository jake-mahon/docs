# Survey Action Module

Use this action module to create surveys and make them available to targeted recipients via email.
For example, a survey can solicit feedback from clients or poll employees on company issues.

The Survey Action Module Wizard builds customizable, web-based surveys containing questions created
by the user. Once the survey is defined, a list of recipients can then be specified. When executing
the action, the process simultaneously sends an email to the recipients containing a link to the
survey and creates a web page to host the survey.

**CAUTION:** This module sends one or more electronic messages to a selected audience. Prior to
executing the action, ensure the audience consists of only the desired members. Netwrix recommends
using this and all other Enterprise Auditor actions with caution.

## Survey Action Source Table Configuration

All data tables used in Enterprise Auditor action modules require the presence of certain data
columns. In addition, individual action modules including Survey may have their own column
requirements. The Survey action module requires a column containing well-formatted email addresses
(for example, `hfinn@netwrix.com`) for your recipients.

## Survey Action Module Wizard

The Survey action module is configured through the Survey Action Module Wizard, which contains the
following wizard pages:

- Welcome
- [Survey: Template](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/template.md)
  (Legacy feature)
- [Survey: Introduction](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/introduction.md)
- [Survey: Questions](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/questions.md)
- [Survey HTML Style](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/htmlstyle.md)
- [Survey: Web Server](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/webserver.md)
- [Survey: Mail – Properties](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/mailproperties.md)
- [Survey: Mail – Message](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/mailmessage.md)
- [Survey: Test Survey](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/testsurvey.md)
- [Survey: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/summary.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard.

![Survey Action Module Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
