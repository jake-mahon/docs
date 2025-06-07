# Dashboard

Flashlight comes with a comprehensive dashboard with everything to manage your account at your fingertips. The dashboard provides key tools and reports to enable you to take full control of your account and action problematic areas as required.

These are the Dashboard portlets:

- [Spider Status](#Spider-Status)
- [Reminders](#Reminders)
- [Resources](#Resources)
- [Chart](#Chart)
- [Key Tools](#Key-Tools)
- [ERD Generator](#ERDGenerator)
- [Last Spider Run Summary](#Last-Spider-Run-Summary)
- [Search Form](#Search-Form)

## Spider Status

Displays the current status of the Spider (Not Started, In Progress, Completed) and the number of days since the spider was last run. It is recommended to run the Spider every week so your account documentation is up-to-date.

![Spider Status](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/spider_status.png)

## Reminders

Reminders are key system warnings and metrics that Flashlight has detected in your account over the last week since the Spider was run last run. You can click on each metric to drill-into the details and take corrective action where needed.

![Reminders](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/reminders_800x88.png)

The reminders have colors associated with them depending on the nature of the reminder. Reminders highlighted in green represent new and modified customizations in your account since the spider was last run.

- __New customizations__: Summarizes the customizations that were documented since the last Spider run. Many customizations can be created on a daily basis, this tool helps keep track of what's new on your account.
- __Customizations Updated__: Summarizes the customizations that have been modified recently. As you tailor your account to meet the business needs of your organization it is very common to generate hundreds of changes to Fields, Automations or Records. This tool helps keep track of the changes to your customizations.

### Reminders with Red Highlight

Reminders highlighted in red represent a potential security or stability problem in the account which should be reviewed.

- __Deleted Customizations this Week__: Summarizes Customizations that have been recently deleted from the system. This enables you to easily spot undesired removals and resolve them quickly.
- __Script Errors from Yesterday__: Summarizes script errors that occurred in the past day, enabling you to take immediate action to resolve any potential operational risks associated with these errors.
- __New Critical API Risks__: Summarizes the Scripts and Workflows that can potentially risk sending your organization's data to an external system or entity. This includes Scripts and Workflows that use the email API, HTTP requests or REST connections.
- __Critical Role Changes__: Summarizes changes to NetSuite Standard roles.
- __Record Deletion Risk Role Changes__: Summarizes changes to NetSuite roles that allow employees to delete company data.
- __Undelivered Email Errors__: Summarizes Script errors from the NetSuite logs associated with email failures.
- __New Employee Permission Changes__: Summarizes changes to Employee permissions, ensuring you have full visibility into who has granted access to the account.
- __Critical Permission Changes__: Summarizes changes to permissions that allow employees to modify Business Processes, Workflows, and Scripts. Critical permissions are defined as the ability to create, modify or delete customizations and critical configuration within the account such as the listed before.
- __Deleted Records__: Summarizes all records that have been deleted from the system.

### Reminders with Yellow Highlight

Reminders highlighted in yellow represent areas of the account that do not adhere to NetSuite best practices. It is recommended to regularly review these reports and take corrective action so that your customizations are aligned with NetSuite best practices.

- __New Public Saved Searches used in Scripts__: Summarizes Saved Searches that are actively used by one or more Scripts. This tools help you understand new searches that can be seen and potentially edited by anyone in the organization and shouldn’t be modified without proper review from IT.
- __New Customizations with Poor Script IDs__: Summarizes recently created customizations with default Script IDs. These are customizations that do not follow NetSuite best practices and can impact the maintainability of the customizations in your account. This can be a problem when you move dependent customizations (for example, a field referenced by script) between your environments because referenced Script IDs may not match across the accounts.
- __New Customizations with Missing Descriptions__: Summarizes customizations that do not have any associated Description text
- __New Customizations with Missing Help__: Summarizes customizations that do not have any associated Help text.
- __New Customizations with Missing Active Owners__: Summarizes customizations that do not have active employees as the Owner. This happens when an employee departs from your organization. It is a standard best practice to reassign an active employee to these records.

### Reminders with No Highlight

Informational reminders do not have any highlighted color. Flashlight provides these reminders for added visibility into your account.

- __​New Scripts__: Summarizes new Scripts that have been created. This is a powerful tool to use when there are script conflicts, as it helps your developers understand newly introduced scripts that are potentially interfering with existing scripts.
- __New Customizations used by Workflows__: Summarizes new customizations that are actively used by a one or more Workflows.
- __New Employee Saved Searches__: Summarizes new Saved Searches that query Employee records
- __New Employees with Standard Operational Roles__: When new users are onboarded into NetSuite they can be automatically assigned default role permissions. This reminder displays the number of Employees with standard operational roles.
- __New Employees Logging In From New IP Address__: Identifies users that have logged into the account from a different IP address. This mitigates the risk of your account being unintentionally shared with others or hacked.
- __New Workflows__: Summarizes new Workflows that have been created in your account. It is very common to have several Workflows associated with a single record. This is a powerful tool to use when there are workflow conflicts or bugs in your system due to newly introduced Workflows. This helps developers understand the newly introduced workflows that are potentially interfering with other customizations in the account.
- __New Customizations Used by Scripts__: Summarizes new critical customizations that are used by automations, such as getting/setting field values, creating/modifying records, and reading searches. All new scripted Records are displayed in this report.
- __New Public Saved Searches__: Summarizes new Saved Searches that are publicly available in your account
- __New Transactions Saved Searches__: Summarizes new Saved Searches that query the Transactions (Sales, Purchases, General Ledger).
- __New Customer Saved Searches__: Shows the number of Saved Searches created in the account in the past week.
- __New Employees with Unused Logins__: Summarizes the number of Employees in the account that have access but have not logged in.

NOTE:  If a reminder from the list does not have any detected records, it does not appear on the dashboard.

## Resources

Links to key resources to help you learn to use Flashlight.

![Resources](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/resources.png)

## Chart

Visually displays insights into your customizations. There are 3 visualizations: new customizations by type, new searches and reports by type, and customizations updated by type. Hover over the segments in the chart for additional details.

### New Customizations by Type

This chart summarizes the newly created customizations by Object Type. Hover over each segment in the chart to understand how many customizations have been created for the selected Object Type. This does not include customizations from Saved Searches and Reports. Click on a segment in the chart to drill into the details and see the list of specific customizations for the selected Object Type. This allows you to easily understand what customizations have been created over a given time period.

![New Customizations by Type](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/new_customizations_by_type.png)

### New Searches and Reports by Type

This chart summarizes the newly created Saved Searches and Reports by Object Type. Hover over each segment in the chart to understand how many Saved Searches and Reports have been created for the selected Object Type. Click on a segment in the chart to drill into the details and see the list of specific customizations for the selected Object Type. This allows you to easily understand what Saved Searches and Reports have been created over a given time period.

![New Searches and Reports by Type](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/new_searches_by_type.png)

### Customizations Updated by Type

This chart summarizes the newly created customizations by Object Type. Hover over each segment in the chart to understand how many customizations have been created for the selected Object Type. This does not include customizations from Saved Searches and Reports. Click on a segment in the chart to drill into the details and see the list of specific customizations for the selected Object Type. This allows you to easily understand what customizations have been created over a given time period.

![Customizations Updated by Type](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/customizations_updated_by_type.png)

## Key Tools

Links to useful Flashlight tools to give you more value out of your documentation.

![Key Tools](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/key_tools.png)

- __ERD__: Explore your customizations with Flashlight’s visual ERD and understand how customizations relate to each other.
- __Customization Impact Search__: Understand how your customizations are impacted by changes to other customizations.
- __Standard Field Impact Search__: Understand how your customizations are impacted by changes to standard NetSuite fields.
- __SQL Library__: Locate formulas used across the Saved Searches in your account.

## ERD Generator

A shortcut to open the ERD for the entered __Name__ or __ScriptID__.

## Last Spider Run Summary

Displays all the key data about your customizations for full visibility and control over your account. The metrics are organized into two sections: __Documentation Summary__ and __Users Summary__.

![summary_800x207](/static/img/product_docs/strongpointnetsuiteflashlight/getting_started/summary_800x207.png)

### Documentation Summary

The Documentation Summary section includes all the metrics related to your account documentation:

__Customizations__: Displays the total number of customizations that exist in the account

__Deleted Customizations__: Displays the total number of deleted customizations from the account

__List dependencies__: Displays the total number of Lists that are used by other customizations in the account

__Search Dependencies__: Displays the total number of Saved Searches used by other customizations in the account

__Sourcing Dependencies__: Displays the total number of data sources used by other customizations in the account.

__Critical API risks__: Displays the total number of Scripts and Workflows that can potentially risk sending your organization's data to an external system or entity. This includes Scripts and Workflow that use the email API, HTTP requests or REST connections.

__Customizations with Poor Script IDs__: Displays the total number of customizations with default Script IDs. These are customizations that do not follow NetSuite best practices and can impact the maintainability of the customizations in your account. This can also be a problem when you move dependent customizations (eg. fields referenced by script) between your environments because referenced Script IDs may not match across the accounts.

__Customizations with Missing Descriptions__: Displays the total number of customizations with no associated Description text

__Customizations Updated__: Displays the total number of modified customizations. As you tailor your account to meet the business needs of your organization it is very common to generate hundreds of changes to Fields, Automations or Records. This tool helps keep track of the changes to your customizations.

__Total Dependencies__: Displays the total number of customizations used by other customizations in the account

__Workflow Dependencies__: Displays the total number of Workflows used by other customizations in the account

__Script dependencies__: Displays the total number of Scripts used by other customizations in the account

__Form Dependencies__: Displays the total number of Forms used by other customizations in the account

__Customizations Used by Scripts__: Displays the total number of customizations used by automations, such as getting/setting field values, creating/modifying records, and reading searches.

__Customizations with Missing Help__: Displays the total number of customizations with no associated Help text.

__Customizations with Missing Active Owners__: Displays the total number of customizations that do not have an active employee as the Owner. This happens when an employee departs from your organization. It is a standard best practice to reassign the underlying record to an active employee.

### Users Summary

The Users Summary section summarizes key metrics related to your Employees. Flashlight is not just a solution for Documentation, it also provides key information needed to manage your employee roles and permissions, thereby enabling you to evaluating security-related risks to your organization. It contains the following metrics:

__Employees with Standard Operational Roles__: Displays the total number of Employees with standard operational roles. When new users are onboarded into NetSuite they can be automatically assigned default role permissions.

__New Employees Logging In From New IP Address__: Identifies users that have logged into the account from a different IP address. This mitigates the risk of your account being unintentionally shared with others or hacked.

__Critical Role Changes__: Displays the total number of changes to NetSuite Standard roles.

__Employees with Unused Logins__: Displays the total number of Employees that have access into the account but they have not logged in.

__Employee Permission Changes__: Displays the total number of changes to Employee permissions, ensuring you have full visibility into who has granted access to the account.

__Critical Permission Changes__: Displays the total number of changes to permissions that allow employees to modify Business Processes, Workflows, and Scripts. Critical permissions are defined as the ability to create, modify or delete customizations and critical configuration within the account such as the listed before.

## Search Form

A shortcut to the Customization Quick Search. You can search by __Name__ or __ScriptID__.
