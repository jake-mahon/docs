# Audit Configuration Assistant

Auditor Audit Configuration Assistant utility helps you to assess your environment readiness to being monitored with the product and automatically adjust the audit settings with the requirements.

It checks current settings of your Active Directory and Group Policies against those required for monitoring of selected data sources: Group Policy settings, auditing entries for directory partitions, and admin audit log settings of Exchange server. Assessment results are reported on the screen and can be downloaded as a PDF file.

You can instruct the utility to automatically apply the required settings.

For that, you should ensure that the account you plan to use for accessing the target domain has the necessary rights.

__Audit Configuration Assistant__ is a part of Netwrix Auditor product setup. It is installed together with the Auditor client and can be launched from the __Start__ __menu__ __>____Netwrix Auditor____>____Netwrix Auditor Audit Configuration Assistant__. Alternatively, you can launch this utility from the monitoring plan wizard for Active Directory data source. See the [Launch Audit Configuration Assistant](#Launch-Audit-Configuration-Assistant) section for additional information.

Currently, the utility supports Active Directory and Logon Activity data sources.

## Prerequisites

When working with the utility, you will need to provide an account with the rights required to access the AD audit entries and other settings. Thus, the account should be a member of the following groups:

- _Domain Admins_ — to access audit policies and audit entries on the domain controllers
- _Enterprise Admins_ — to configure audit entries for AD partitions
- _Organization Management_ or _Records Management_ (in Exchange organization) — to configure admin audit log settings

You can create a dedicated account for the assessment purposes, include it in these groups for the assessment period, and after finishing, remove it from these privileged groups.

## Usage

To assess and adjust the audit settings with Audit Configuration Assistant, take the following steps:

1. [Launch Audit Configuration Assistant](#Launch-Audit-Configuration-Assistant)
2. [Start Assessment](#Start-Assessment)
3. [View Results](#View-Results)
4. [Complete the process](#Complete-the-process)

## Launch Audit Configuration Assistant

Audit Configuration Assistant is a part of Netwrix Auditor product setup. It is installed together with Netwrix Auditor client and can be launched from the __Start__ menu.

Select __Netwrix Auditor__→__Netwrix Auditor Audit Configuration Assistant__.

- If the utility is installed on the same machine as Netwrix Auditor server, you will be taken to the __Welcome__ step.
- If the utility is installed on the remote machine together with Netwrix Auditor client, the initial window will allow you to enter the settings to connect to Netwrix Auditor Server. Specify the following:

| Setting | Description |
| --- | --- |
| Host | Enter the name or IP address of Netwrix Auditor Server to connect to. |
| Use specified credentials | If not selected, then your current Windows credentials will be used to access Netwrix Auditor Server.  Select this option if you want to use other credentials |
| User | Enter user account in the _domain\name_ format. |
| Password | Enter account password. |

After you click __Connect__, the connection with Netwrix Auditor Server will be established, and you will be taken to the __Welcome__ step.

Alternatively, you can launch this utility by clicking the corresponding link:

- From [Create a New Monitoring Plan](/docs/product_docs/auditor/auditor/admin/monitoringplans/create.md) for Active Directory data source.
- From the [Active Directory](/docs/product_docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md) within the plan.
- From the [Logon Activity](/docs/product_docs/auditor/auditor/admin/monitoringplans/logonactivity/overview.md) source properties.

## Start Assessment

Follow the steps to start assessment.

__Step 1 –__ Specify the monitoring scope —select what you plan to monitor with Netwrix Auditor. You can select both __Active Directory__ and __Logon Activity__, or any of them.

![audit_cfg_assist_creds](/static/img/product_docs/auditor/auditor/tools/audit_cfg_assist_creds.png)

__Step 2 –__ If you launched __Audit Configuration Assistant__ from the __Start__ menu (not from the monitoring plan settings), enter the name of Active Directory domain you want to assess.

__Step 3 –__ Enter credentials that will be used to access the audit setting of that domain. This account must be included in the following groups:

- _Domain Admins_ — to access audit policies and audit entries on the domain controllers
- _Enterprise Admins_ — to configure audit entries for AD partitions
- _Organization Management_ or _Records Management_ (in Exchange organization) — to configure admin audit log settings

__Step 4 –__ Click __Start assessment__.

## View Results

At this step, you will be presented the results of the environment readiness assessment, including:

- the list of current and required settings for each entity
- the list of issues (if any) that occurred during the assessment

[![assessment_results_thumb_0_0](/static/img/product_docs/auditor/auditor/tools/assessment_results_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/other/assessment_results.png)

Follow the steps to view results.

__Step 1 –__ Examine the report.

__Step 2 –__ If some issues occurred due to the lack of access rights during the assessment, you can click __Back__ and modify the settings provided at the previous step.

__Step 3 –__  If you need to save this report (for example, to get your manager's approval), click __Export to PDF__.

__Step 4 –__  When ready, you can automatically adjust audit settings with the requirements — for that, click __Apply required settings__.

## Complete the process

After you click __Apply required settings__, the utility will proceed with modifying your current audit settings. Operation progress will be reported in the bottom of the window.

__Step 1 –__ Wait for the process to complete.

__Step 2 –__ Review the results. Successfully applied settings will be reported with a green tick; those that did not manage to apply will be with the yellow warning sign and explanatory text.

__Step 3 –__ You can click __Start over__ to get to the [Start Assessment](#Start-Assessment), fix the issues and perform the procedure again, or click __Finish__.
