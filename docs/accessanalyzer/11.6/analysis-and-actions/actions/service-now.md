# ServiceNow Action: Authentication

The Authentication page implements signing into a ServiceNow account.

A ServiceNow account must be set up and configured to determine which incidents will be visible on
the Incident Creation page.

![ServiceNow Action Module wizard Authentication page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/authentication.webp)

Use the following options to log into a ServiceNow account:

- Select the **Use global ServiceNow credentials** to access the ServiceNow credentials entered into
  the Enterprise Auditor console’s global setting
- To break inheritance, deselect the checkbox and enter information into the following fields:

  - Instance – Domain name for the ServiceNow account
  - User Name/Password – Specify the credentials to access the ServiceNow account

**NOTE:** ServiceNow accounts must have an administrator role to modify incidents on the
configuration page.

# ServiceNow Action: Description

The Description page provides details on the incidents entered into a field on the Incident Creation
page. A description of the incident and related comments are included with the incident’s report to
provide additional feedback to the system administrator, and may be saved to a template.

![ServiceNow Action Module wizard Description page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/servicenow/description.webp)

Create a report using the following options:

- Short Description – Displays entered words or phrases used to summarize the incident
- Insert Field – Use the drop-down menu to select a field (column) from the source table

  - Click the **blue down arrow** to insert the item into the Short Description section
  - Click the **blue up arrow** to insert the item in to the Comments section
  - Click the file icon with the magnifying glass to preview the sourced table for values. The
    default is 1000 rows.

    ![Sample Source Data window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/servicenow/samplesourcedata.webp)

- Click the **Clear Template** button to remove content from the Short Description section and
  Comments section
- Comments – Displays entered information that may be helpful to resolve an incident
- Load from Template – Displays preconfigured Short Description and Comments section by name of
  template

  - Click the **Save to Template** link to preserve the Short Description and Comments sections
    for later use under a template name.

    ![Save ServiceNow Template window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/servicenow/savetemplate.webp)

    Enter a name for the template, and click **OK**.

# ServiceNow Action: Incident Creation

The Incident Creation page is available once the ServiceNow credentials are approved. Incidents on
this page belong to two fields: Mandatory and Optional. The type of field and its incidents are
chosen within ServiceNow’s configuration page. Selecting a field and entering a value will include
the incident within ServiceNow’s incident report.

![ServiceNow Action Module wizard New Incident page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/servicenow/incidentcreation.webp)

At the New Incident field list section, enter the fields for which incident to include on
ServiceNow’s incident report. The ServiceNow account entered on the Authentication page determines
which incidents are available within the fields on the Incidents Creation page and are adjusted in
ServiceNow.

Fields with a drop-down menu have a set of preconfigured options to select. Fields with ellipsis
choose members from a preconfigured list.

# ServiceNow Action Module

The ServiceNow Action Module is primarily intended to allow for the automated creation of ServiceNow
incidents from data collected by the Netwrix suite of data security tools. By facilitating
communication between tools like Enterprise Auditor and ServiceNow’s incident management capability,
security risks in an organization’s environment can not only be identified, but presented to admins,
managers, and other stakeholders in a familiar way, with respect to chains of command and approval
as dictated by employee relationships and business workflows implemented in ServiceNow.

When account lockouts occur, the Active Directory Inventory Data Collector makes that information
available. From the Enterprise Auditor console, the ServiceNow Action Module transmits customized
information regarding the locked out accounts directly to those responsible for account management,
alerting them of the issue and requesting that appropriate action is taken to re-enable user
accounts before effected users are aware of the problem.

This section describes the following pages in the configuration wizard.

## Dependencies

The ServiceNow Action Module requires an active ServiceNow account with:

- Import Multiple Web Service Plugin
- Web Service Import Sets
- System Web Service plugins enabled
- An instance of Enterprise Auditor with the Stealthbits ServiceNow Action Module enabled

## Permissions

The following permissions are required to utilize Enterprise Auditor’s ServiceNow Action Module:

- ServiceNow admin account – An Administrator Role by an organization’s ServiceNow administrator
- The **Settings** > **ServiceNow** node at the global level can be configured with a credential
  provisioned to create incidents as Callers in the **Assigned to** field, and any other ServiceNow
  incident field that references the sys_user table.

## Connecting ServiceNow with Enterprise Auditor

The following instructions can only be performed with a ServiceNow admin account and access to the
ServiceNow Action Module XML file.

![ServiceNow Action Module XML file in Windows file explorer](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/servicenow/actionmodulexmlfile.webp)

**Step 1 –** Navigate to the file path …\STEALTHbits\StealthAUDIT\Actions to access the
`STEALTHbits SN Action Module v1.0_merged_rev2.0` file to use on ServiceNow’s website.

**Step 2 –** Visit servicenow.com, sign into the administrator account, expand **System Update
Sets**, and click on **Retrieved Update Sets**.

**Step 3 –** Under **Related Links**, click on **Import Update Set from XML**.

**Step 4 –** Attach the `STEALTHbits SN Action Module v1.0_merged_rev2.0` file, and then click
**Upload**.

**Step 5 –** After the file is uploaded, click on the **STEALTHbits SN Action Module** within the
list of updated sets.

**Step 6 –** Click on the **Preview Update Set** button. Wait until the update set preview is
finished and then click **Commit Update Set**. Then, close the Update Set Commit window.

**Step 7 –** On the navigation page, expand **System Definitions** and click **Plugins**. Then click
on the **Insert Multiple Web Service plugin**

**Step 8 –** Under **Related Links**, click on **Activate/Upgrade** and click **Activate** on the
Activate Plugin window. When the Activation is complete, click **Close** to close the window.

**Step 9 –** Click **Reload** on the System Plugin page and confirm the Status is Active.

Enterprise Auditor is now connected with the ServiceNow platform.

## Source Table Configuration

Individual action modules, including the ServiceNow Action Module, may have their own column
requirements. To take action on a resource, the source table must contain columns with RowGUID
values to uniquely identify them.

## Configuration

The ServiceNow Action module is configured through the ServiceNow Action Module Wizard, which
contains the following wizard pages:

- Welcome
- [ServiceNow Action: Authentication](/docs/accessanalyzer/11.6/analysis-and-actions/actions/service-now.md)
- [ServiceNow Action: Incident Creation](/docs/accessanalyzer/11.6/analysis-and-actions/actions/service-now.md)
- [ServiceNow Action: Description](/docs/accessanalyzer/11.6/analysis-and-actions/actions/service-now.md)
- [ServiceNow Action: Summary](/docs/accessanalyzer/11.6/analysis-and-actions/actions/service-now.md)

**NOTE:** Not all pages may be accessible unless the user has a configured ServiceNow account.

The Welcome page displays first in the ServiceNow Action Module Wizard. Review the introductory and
caution information about the ServiceNow Action Module.

![ServiceNow Action Module wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.

# ServiceNow Action: Summary

The Summary page displays a summary of the configured query.

![ServiceNow Action Module wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the ServiceNow Action Module Wizard to ensure that no accidental clicks
are saved.
