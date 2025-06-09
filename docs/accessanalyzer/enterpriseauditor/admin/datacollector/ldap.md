# LDAP Data Collector

The LDAP Data Collector uses LDAP to query Active Directory returning the specified objects and attributes. For example, a query can be configured to return all user objects at the selected level. Another query can be configured to return a master list of all user objects found within the target domain. Wildcards and LDAP filters can be applied to the query configurations.

The LDAP Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution. While the data collector is available with all Access Analyzer license options, the Active Directory Solution is only available with a special Access Analyzer license. See the [Active Directory Solution](/docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/overview.md) topic for additional information.

Protocols

- LDAP

Ports

- TCP 389

Permissions

- Member of the Domain Administrators group

## LDAP Query Configuration

The LDAP Data Collector is configured through the LDAP template form. The LDAP template form has the following configuration options:

![LDAP template form](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/templateform.png)

- Connect to the server – Use the default domain controller entered in the box, or enter an alternate server
- Naming context – Select a directory partition from the drop-down list: __Default Context__, __Configuration Context__, or __Schema Context__
- Connect – Connects to the domain specified. The root folder of the domain is displayed in the left pane of the window.

  __NOTE:__ Before clicking __Connect__, the server port must be configured. To configure the server port, click __Options__ to open the Options window and configure the server port as described in the Options Window section.
- Options – Opens the Options window to configure connection options and multi-value results options. See the [Options Window](#options-window) topic for additional information.
- List of attributes – Table in the upper right corner lists attributes for the object selected in the left pane
- Root path – The Root path textbox is populated with the path to the highlighted attributes to be collected
- LDAP filter – The LDAP filter textbox shows the filters applied to the objects. Click the ellipses (__…__) to open the Filter Options window. See the [Filter Options Window](#filter-options-window) topic for additional information.

The button bar provides additional options for selecting objects and attributes. See the [Button Bar](#button-bar) topic for additional information.

### Options Window

The Options window contains configure connection options and multi-value results options. Click the __Options__ button located in the upper right corner of the LDAP template form to open it.

![Options Window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/options.png)

- Connect Securely with TL/SSL – Connect using TLS/SSL. If the checkbox is selected, the server port defaults to ```636```.
- Ignore Certificate Errors – Ignores certificate errors during connection when encrypted communication is enabled
- Server Port

  - If the Connect Securely with TLS/SSL option is selected, use Server Port ```686```
  - If the Connect Securely with TLS/SSL option is not selected, use Server Port ```389```
- Authentication Type

  - Negotiate – Default authentication type
  - Simple
- TreeView Node Limit – Typically set to 500
- Multi-valued attributes – Indicates how multi-valued properties are returned

  - Concatenated – All values are listed in one cell using the delimiter specified

    - Delimiter – Symbol used to separate values in the cell
  - First Value Only – Only the first value is listed in the cell

### Filter Options Window

The Filter Options window is where to add filters to the query. Click the ellipses (__…__) button located to the right of the __LDAP filter__ box in the LDAP template form to open this window.

![filteroptions](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/filteroptions.png)

- Extract all objects (no filter) – No filters applied
- Extract only objects of the following classes – Applies class filter for selected classes

  - Users
  - Groups
  - Contacts
  - Computers
  - Printers
  - Shared Folders
- Custom Filter – Applies a custom filter configured in the Custom Filter window. See the [Custom Filter Window](#custom-filter-window) topic for additional information.

#### Custom Filter Window

The Custom Filter window provides options for creating a complex filter.

![Custom Filter window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/customfilter.png)

Select a __Field__ and __Condition__ from the drop-down lists. Enter a __Value__ for the condition. Click __Add__ to add the filter to the Filter Lines table.

- Filter Lines will be combined with a logical – Select the __AND__ or __OR__ option. __AND__ is selected by default.
- Edit Raw Filter – Opens the Raw Filter Edit window

  ![Raw Filter Edit window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/rawfilteredit.png)

  Enter the entire LDAP filter in the textbox. Click __Verify__ to confirm the filter, and then __OK__ to add it to the custom filter list.
- Clear Filter – Deletes the selected filter

Click __OK__ to save the changes and close the Custom Filter window.

### Button Bar

The button bar provides several options for configuring the query.

![buttonbar](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/buttonbar.png)

| Button | Name | Description |
| --- | --- | --- |
| ![Include sublevels button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/sublevels.png) | Include sublevels | Include sublevel folders of the selected folder. |
| ![Org wildcard button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/orgwildcard.png) | Org wildcard | Search for the attribute across multiple domains. |
| ![Wildcard the level button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/wildcard.png) | Wildcard the level | Search everything on the selected level. |
| ![Unwildcard all levels button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/unwildcard.png) | Unwildcard all levels | Removes the wildcard and returns the search scope to the selected domain. |
| ![Include a HostName Tag button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/includehostname.png) | Include a HostName Tag | Replaces the OU with a HostName Tag. |
| ![Remove all HostName Tags button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/removehostname.png) | Remove all HostName Tags | Removes the HostName Tag. |
| ![Add Security Properties for Selected Key button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/addsecurityproperties.png) | Add Security Properties for Selected Key | Adds the list of security properties. |
| ![Select Highlighted Attributes button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/addattributes.png) | Select Highlighted Attributes | Adds the highlighted attributes to the list. |
| ![Delete the Highlighted Selected Attributes button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/deleteattributes.png) | Delete the Highlighted Selected Attributes | Deletes the highlighted attributes from the list. |
| ![Find the Root Path in the Directory Objects button](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/rootpath.png) | Find the Root Path in the Directory Objects | Returns the root path to the selected root. |
