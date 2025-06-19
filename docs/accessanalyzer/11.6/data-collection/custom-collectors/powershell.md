# PowerShell: Edit Query

The Edit Query page provides a screen to edit the query to execute. Users can import PowerShell
script as well as use an input table to create and edit the PowerShell script.

![PowerShell Data Collector Wizard Edit Query page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/editquery.webp)

The options on the Edit Query page are:

- Open – Click to import and open a PowerShell script
- Script Editor – Input PowerShell script to use for the configured job
- Parameters – The Parameters tab located on the right-hand side of the Edit Query page is used to
  bring up the Parameters window. See the [Parameters](#parameters) topic for additional
  information.
- Use table input for PowerShell script – select the checkbox to bring up the Input options for the
  PowerShell script. See the [Input Options](#input-options) topic for additional information.

## Parameters

Add, edit, and delete parameters for the PowerShell data collector using the Parameters window.

![Parameters Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/editqueryparameters.webp)

The options in the Parameters Window are:

- Add – Add a parameter by opening the Add/Edit Variable Window. See the
  [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.
- Edit – Edit the selected parameter by opening the Add/Edit Variable Window. See the
  [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.
- Delete – Delete a parameter

**NOTE:** Only user created parameters can be edited or deleted. Pre-configured parameters cannot be
edited or deleted.

### Add/Edit Variable Window

Use the Add/Edit Variable Window to add and edit parameters for the PowerShell Data Collector.

![Add/Edit Variable Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/editqueryvariable.webp)

The options in the Add/Edit Variable window are:

- Name – Enter or edit the name for the custom parameter
- Description – (Optional) Enter or edit the description for the custom parameter
- Type – Select the Type from the dropdown list. The options are:

  - String
  - List
  - Filepath
  - Boolean
  - Long
  - Double

- Value – Enter or edit the value for the custom parameter

## Input Options

When the Use table input for PowerShell script option is selected on the Edit Query page, additional
options display to define the source for input data.

![Edit Query page input options](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/editqueryinput.webp)

The input options are:

- Please select name – Select the input table to be used from the drop-down menu
- Filter nulls – Excludes values that are null from input
- Filter duplicates – Excludes any values that are duplicate from input
- Text Box – Displays an example of how the input can be used in a PowerShell script
- Columns – Displays the columns in the selected input table. If applicable, select the checkbox to
  include the column in the input.
- Input Data – Preview how the input data will look in the Input Data tab

![Text Box and the Columns tab populated with information](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/editqueryinputtable.webp)

Selecting an input table in the **Please select name** dropdown populates the Text Box and the
Columns tab with information.

# PowerShell: Options

The Options page provides the option to execute the script remotely on the target host.

![PowerShell Data Collector Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

The configurable options are:

- Execute remotely – Remotely executes the script on the target host. If this checkbox is not
  selected, the script will be executed from the Enterprise Auditor Console server.
- Use impersonation within server executable – Executes the script with the job credentials

For cmdlets requiring explicit credentials, a single credential set from the job's Connection
Profile can be referenced using `Get-Credential` or the `$JobCredential` variable, a `PSCredential`
type object. All credentials from the job’s Connection Profile may be accessed via the
`$JobCredentials` array.

# PowerShell Data Collector

The PowerShell Data Collector provides PowerShell script exit from Enterprise Auditor. It has
configuration options for creating and configuring a PowerShell query. This data collector is a core
component of Enterprise Auditor and is available with all Enterprise Auditor licenses.

Protocols

- PowerShell

Ports

- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the Local Administrators group

## PowerShell Query Configuration

The PowerShell Data Collector is configured through the PowerShell Data Collector Wizard, which
contains the following pages:

- Welcome
- [PowerShell: Edit Query](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
- [PowerShell: Options](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
- [PowerShell: Sample Server](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
- [PowerShell: Results](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
- [PowerShell: Summary](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)

![PowerShell Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.

# PowerShell: Results

The Results page provides configuration settings for the Properties to return and ROWKEY's
components.

![PowerShell Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

The Results page options are:

- Properties to return – List of available properties which can be gathered for the PowerShell query
- ROWKEY's components – List of available properties based on which ROWKEY will be built

# PowerShell: Sample Server

The Sample Server page provides a box to select a server to generate the result columns.

![PowerShell Data Collector Wizard Select Server page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/powershell/selectserver.webp)

The Select Server page options are:

- Server name – Server to be used during configuration
- Validate – Validates the script results and retrieves result columns. Validation must be run in
  order to populate and enable the Results page.

The server selected here replaces any `[SAHOSTNAME]` tokens in the PowerShell script. During
execution, the `[SAHOSTNAME]` tokens are replaced in turn by each host in the host list. If no
`[SAHOSTHAME]` tokens exist in the PowerShell script, then the server name and the hosts in the host
list have no effect.

# PowerShell: Summary

The Summary page summarizes the selected configurations from the previous pages in the PowerShell
Data Collector Wizard.

![PowerShell Data Collector Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the PowerShell Data Collector Wizard ensuring that no accidental clicks
are saved.
