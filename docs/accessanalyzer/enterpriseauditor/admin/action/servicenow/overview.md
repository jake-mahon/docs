# ServiceNow Action Module

The ServiceNow Action Module is primarily intended to allow for the automated creation of ServiceNow incidents from data collected by the Netwrix suite of data security tools. By facilitating communication between tools like Access Analyzer and ServiceNow’s incident management capability, security risks in an organization’s environment can not only be identified, but presented to admins, managers, and other stakeholders in a familiar way, with respect to chains of command and approval as dictated by employee relationships and business workflows implemented in ServiceNow.

When account lockouts occur, the Active Directory Inventory Data Collector makes that information available. From the Access Analyzer console, the ServiceNow Action Module transmits customized information regarding the locked out accounts directly to those responsible for account management, alerting them of the issue and requesting that appropriate action is taken to re-enable user accounts before effected users are aware of the problem.

This section describes the following pages in the configuration wizard.

## Dependencies

The ServiceNow Action Module requires an active ServiceNow account with:

- Import Multiple Web Service Plugin
- Web Service Import Sets
- System Web Service plugins enabled
- An instance of Access Analyzer with the Stealthbits ServiceNow Action Module enabled

## Permissions

The following permissions are required to utilize Access Analyzer’s ServiceNow Action Module:

- ServiceNow admin account – An Administrator Role by an organization’s ServiceNow administrator
- The __Settings__ > __ServiceNow__ node at the global level can be configured with a credential provisioned to create incidents as Callers in the __Assigned to__ field, and any other ServiceNow incident field that references the sys\_user table.

## Connecting ServiceNow

The following instructions can only be performed with a ServiceNow admin account and access to the ServiceNow Action Module XML file.

![ServiceNow Action Module XML file in Windows file explorer](/img/product_docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/actionmodulexmlfile.png)

__Step 1 –__ Navigate to the file path …\STEALTHbits\StealthAUDIT\Actions to access the ```STEALTHbits SN Action Module v1.0_merged_rev2.0``` file to use on ServiceNow’s website.

__Step 2 –__ Visit servicenow.com, sign into the administrator account, expand __System Update Sets__, and click on __Retrieved Update Sets__.

__Step 3 –__ Under __Related Links__, click on __Import Update Set from XML__.

__Step 4 –__ Attach the ```STEALTHbits SN Action Module v1.0_merged_rev2.0``` file, and then click __Upload__.

__Step 5 –__ After the file is uploaded, click on the __STEALTHbits SN Action Module__ within the list of updated sets.

__Step 6 –__ Click on the __Preview Update Set__ button. Wait until the update set preview is finished and then click __Commit Update Set__. Then, close the Update Set Commit window.

__Step 7 –__ On the navigation page, expand __System Definitions__ and click __Plugins__. Then click on the __Insert Multiple Web Service plugin__

__Step 8 –__ Under __Related Links__, click on __Activate/Upgrade__ and click __Activate__ on the Activate Plugin window. When the Activation is complete, click __Close__ to close the window.

__Step 9 –__ Click __Reload__ on the System Plugin page and confirm the Status is Active.

Access Analyzer is now connected with the ServiceNow platform.

## Source Table Configuration

Individual action modules, including the ServiceNow Action Module, may have their own column requirements. To take action on a resource, the source table must contain columns with RowGUID values to uniquely identify them.

## Configuration

The ServiceNow Action module is configured through the ServiceNow Action Module Wizard, which contains the following wizard pages:

- Welcome
- [ServiceNow Action: Authentication](/docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/authentication.md)
- [ServiceNow Action: Incident Creation](/docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/incidentcreation.md)
- [ServiceNow Action: Description](/docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/description.md)
- [ServiceNow Action: Summary](/docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/summary.md)

__NOTE:__ Not all pages may be accessible unless the user has a configured ServiceNow account.

The Welcome page displays first in the ServiceNow Action Module Wizard. Review the introductory and caution information about the ServiceNow Action Module.

![ServiceNow Action Module wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

To proceed, click __Next__ or use the Steps navigation pane to open another page in the wizard.
