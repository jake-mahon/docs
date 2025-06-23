# What is Documented?

There are four outcomes for customizations Platform Governance for NetSuite finds in the system:

- Captured and Documented
- Partially Documented
- Not Documented
- Agent Tracking

## Captured and Documented in the Customization Record

The following critical metadata related to your account customizations is captured:

- Accounting/Setting Lists
- Custom Records and Custom Record Fields
- Custom Fields (for example, Body, Item, Entity, Column, Item Number and Other Field)
- Mass Updates (except for mass update schedule information)
- Saved Searches (fields, criteria, joins with scripts/workflows and formulas)
- Unlocked and Unencrypted Script Records (for example, Client, User Event, Scheduled, Suitelets and
  Workflow Action)
- Locked Script Records (however related dependencies can not be established)
- NetSuite Preferences (Accounting Preferences, Company Preferences etc.)
- Integrations
- Forms (Entry and Transaction)
- Script Deployments
- Script Library
- SuiteCommerce Advanced folder files and all custom SS, SSP and JS files
- User Permission Overrides
- User Roles
- User Role Assignments
- Workflows

## Partially Documented in the Customization Record

The following NetSuite objects are partially documented. They are not fully documented for one or
more of the following reasons:

- Record types do not have a NetSuite API that exposes the full customization data
- Records are standard objects which cannot be changed

| Object                | Category         | Description                                                                                                                                                                              | Change Impact                                                                           | Change Tracking                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Report         | Other            | Custom Reports are documented including the report name, type and the date the report was last modified.                                                                                 | Changing these can impact what data is shown on the report.                             | Example: Change to Report Layout - detects the Date Last Modified in the Analytics Audit Log was changed and creates a change log. - Change Log indicates when the Report was updated. - You need to look at the Custom Report itself: 1. Open **Customize the Custom Report** 2. Click **More Options** 3. Open **Audit Trail** tab. |
| PDF Template          | Other            | PDF Templates are document including the template name, type and the date the template was last modified.                                                                                | Changing these can impact email templates and other areas where PDF templates are used. | TBD                                                                                                                                                                                                                                                                                                                                   |
| Standard Column Field | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |
| Standard Report       | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |
| Standard Sub List     | Standard Objects | Customization records are created only for Standard objects that are in use by scripted objects such as Workflows or Scripts. These are tracked to identify the automation dependencies. | No risk since there is no way to change standard objects in NetSuite.                   | If a standard object is added to or removed from a customization, a change log will be created for that customization.                                                                                                                                                                                                                |

## Not Documented in the Customization Record

These record types do not have a NetSuite API to enable Platform Governance for NetSuite to capture
customization data.

| Object                 | Category                    | Description                                                                                                                                                                                  | Change Impact                                                               |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Custom Sub List        | Other                       | This is the sublist that is displayed on the form.                                                                                                                                           | Changing this can change what appears on a form.                            |
| HTML File              | Web Related                 | Files that are part of the web site if the customer is using the Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                          | Changing these can change the pages of the website.                         |
| Integration            | External System/Integration | Information relating to integrations to external systems are not documented.                                                                                                                 | Changes to objects in NetSuite could impact functionality in other systems. |
| Item/Category Template | Web Related                 | Applies to companies that use SiteBuilder.                                                                                                                                                   | Changing these can change the functionality of the website.                 |
| JavaScript File        | Web Related                 | These are JavaScript files in the file cabinet that are often used for automation on websites. Applies to customers using Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced. | Changing these can change the functionality of the website.                 |
| Layout                 | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    | Changing these can change the functionality of the website.                 |
| Scorecard Report       | Other                       | Applies to dashboard objects.                                                                                                                                                                | Changing this will change what is displayed on the dashboard.               |
| Scriptlet              | Deprecated                  | These object types have been deprecated by NetSuite and are no longer in use.                                                                                                                | If still in use, changes to these objects can impact system functionality.  |
| Web Tag                | Web Related                 | Applies to companies that use SiteBuilder                                                                                                                                                    | Changing these can change the functionality of the website.                 |
| Web Site               | Web Related                 | The metadata that defines the web site for customers using the Netsuite eCommerce modules, SiteBuilder or SuiteCommerce Advanced.                                                            | Changing this can impact website functionality.                             |

## Agent Tracking

Agent is part of the Enterprise Compliance package. Agent provides controls for financial changes
that do not represent configuration changes, such as changes to item account settings and violations
of standard policies. You can monitor, manage, remedy and block critical changes to financially
relevant fields, records and settings.

Creation or modification of:

- Accounts
- Departments
- Items, item accounts and BOM
- Classes
- Locations
- Subsidiaries
- Vendors
- Tax Codes and Groups
- Recognition and Amortization Templates
- Landed Cost Settings
- many other key records and critical settings

Critical Transaction Events, including:

- Administrator created transactions
- Self-approved transactions (such as estimates, journal entries, vendor payments)
- Transaction modifications out of period
- Incomplete or improperly completed records
- Any other searchable transaction event

# What is a Spider?

The Spider searches your account and creates the documentation for your customizations. The spider
includes dependencies for saved searches in standard and custom fields. Here are items documented by
the spider:

|                          |                            |                                   |
| ------------------------ | -------------------------- | --------------------------------- |
| Custom Entity Fields     | Mass Updates               | User Roles                        |
| Custom CRM Fields        | Suitelet                   | Custom Report                     |
| Custom Body Fields       | RESTlet                    | Bundle                            |
| Custom Column Fields     | User Event Script          | Online Customer Form              |
| Custom Item Fields       | Scheduled Script           | Custom Record Forms               |
| Custom Item Options      | Client Script              | Group                             |
| Item Number Fields       | Mass Update Script         | Subsidiary                        |
| Other Fields             | Portlet Script             | Department                        |
| Custom Lists             | Custom Workflow Action     | Class                             |
| Custom Records           | Bundle Installation Script | Location                          |
| Custom Record Fields     | Map/Reduce Script          | Custom Segment                    |
| Custom Entry Forms       | Plug-In                    | Email Template                    |
| Custom Transaction Forms | Script Deployments         | Custom Advanced PDF/HTML Template |
| Searches                 | Workflow                   |                                   |

There are three ways to use the Spider:

> Manual Spider
>
> AutoSpider
>
> ReSpider Now

## Manual Spider

Creates the initial documentation of your account. It has the ability to fully document your account
by Spidering all the customization records as well doing a full update on the records in your
account (every customization). The initial manual Spider is run during as part of the installation
process: [Running the Spider](/docs/platgovnetsuite/installation-and-setup/running-the-spider.md).

When running the spider, you must keep the window open for the spider to continue working. Do not
change roles or accounts during spidering. NetSuite security standards require an active
Administrator login to execute some of the spider’s tasks.

You can specify specific record types to focus the spider:

## AutoSpider

The AutoSpider monitors your account on an ongoing basis to see if customization changes have
occurred. This is a light scan of the data to determine if there were any changes. If changes are
detected, you are reminded to ReSpider your account.

Best practice is to run the AutoSpider regularly. If the AutoSpider is not run, your Change Logs
will be missing the **Changed by** and **Actual Change Date** fields. When the Change Log is newly
created, the fields contain **Pending AutoSpider**. If too many days go by, the fields change to
**Could not be determined**.

### AutoSpider Portlet

The AutoSpider Portlet is set up as part of the installation process:
[Setting Up the AutoSpider and Alerts](/docs/platgovnetsuite/installation-and-setup/auto-spider-alerts.md).

The **AutoSpider Portlet** is required to update certain object types in NetSuite. Once triggered
through the dashboard portlet, it picks up all changes on custom objects and triggers the scheduled
scripts to reflect them in the Customization records, going back two days. The AutoSpider portlet is
required in order to update these object types:

- Bundle
- Custom Report
- Entry Form
- Mass Update
- Online Customer Form
- Record
- Transaction Form
- Custom Advanced PDF/HTML Template

## ReSpider Now

The **ReSpider Now** feature is used to document or update documentation for a specific
customization or a specific set of customizations on demand. Once you are finished adding your
new/updated objects to your customization record or change request, simply click **ReSpider Now** on
your form, and your documentation is updated in real time. Here is an example of a customization
record with the **ReSpider Now** option:

![ReSpiderNow](/img/product_docs/platgovnetsuite/respider_now.webp)

Proposed customizations do not work for custom forms and custom reports, since they do not have
Script IDs. NetSuite is currently working on this, but it is still in development. For searches,
**ReSpider Now** uses the permissions of the current logged in user. If the user does not have the
correct permission set, the search shows as private.
