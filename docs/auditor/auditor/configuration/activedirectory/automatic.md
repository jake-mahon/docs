# Active Directory: Automatic Configuration

This is a recommended method of applying Active Directory audit settings required by Auditor to monitor your AD domain. With this approach, the program will check your current audit settings at each data collection session and adjust them if necessary.

To adjust audit settings automatically, do any of the following:

- When creating a new monitoring plan, at the first step of the wizard select the __Adjust audit settings automatically__ option. See the [Create a New Monitoring Plan](/docs/product_docs/auditor/auditor/admin/monitoringplans/create.md) topic for additional information.

[![mp_wizard_step1_ad_thumb_0_0](/static/img/product_docs/auditor/auditor/configuration/activedirectory/mp_wizard_step1_ad_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/monitoringplans/mp_wizard_step1_ad.png)

- For the existing monitoring plan, modify data collection settings for Active Directory data source, selecting __Adjust audit settings automatically__ option.   
  See the [Manage Data Sources](/docs/product_docs/auditor/auditor/admin/monitoringplans/datasource.md) and [Active Directory](/docs/product_docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md) topics for additional information.
- For both new and existing monitoring plans, you can click __Launch Audit Configuration Assistant__ (in the wizard step or in the plan settings, respectively) to launch a special tool that can detect current infrastructure settings and adjust them as needed for monitoring. See the [Audit Configuration Assistant](/docs/product_docs/auditor/auditor/tools/auditconfigurationassistant.md) topic for additional information.

If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed. For a full list of audit settings required for Netwrix Auditor to collect comprehensive audit data and instructions on how to configure them, refer to the [Active Directory](/docs/product_docs/auditor/auditor/configuration/activedirectory/overview.md) topic.

See also:

- [Active Directory](/docs/product_docs/auditor/auditor/configuration/activedirectory/overview.md)
- [Audit Configuration Assistant](/docs/product_docs/auditor/auditor/tools/auditconfigurationassistant.md)
- [Active Directory: Manual Configuration](/docs/product_docs/auditor/auditor/configuration/activedirectory/manual.md)
