# Registry Data Collector

The Registry Data Collector queries the registry and returns keys, key values, and permissions on the keys. The data in the native tables returned by the Registry Data Collector is dependent upon the query configuration. For example, a query could be configured to only show permissions on registry keys in a 32-bit view. Another query could be configured to show a listing of all keys and key values in a 64-bit view. Wildcards can also be used in query configurations.

The Registry Data Collector is a core component of Enterprise Auditor, but it has been preconfigured within both the Active Directory Solution and the Windows Solution. While the data collector is available with all Enterprise Auditor license options, these solutions are only available with a special Enterprise Auditor licenses. See the following topics for additional information:

- [Active Directory Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/overview.md)
- [Windows Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/overview.md)

Protocols

- Remote Registry
- RPC

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Local Administrators group

## Registry Query Configuration

The Registry Data Collector is configured through the Registry Browser window.

![Registry Browser window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/browser.png)

The configurable options are:

- Sample Host – The host to connect to. If this box is left blank, the connection is to the local host.
- 64-bit view – The default view is 32-bit. Select the __64-bit view__ checkbox to switch to a 64-bit view.
- Connect – Connect to host’s registry. If no host is specified in the Sample Host box, the connection is to the local host’s registry.
- Query 32-bit view – Select this checkbox to query the 32-bit view of the registry
- Query 64-bit view – Select this checkbox to query the 64-bit view of the registry
- Name – The key value. Key values can be added to the Selected Properties list by pressing the __ctrl__ key, selecting the keys to add, and then clicking the __Add currently selected value__ button.
- Type – The key value type
- Data – The key value path
- Root Path – The path to the selected key
- Enumerate child nodes – Select this checkbox to do a recursive search of all child nodes

The button bar provides additional options for selecting keys. See the [Button Bar](#button-bar) topic for additional information.

### Button Bar

The button bar is located right above the Selected Properties window. The button bar enables users to do the following:

![Button Bar](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/buttonbar.png)

| Icon | Name |
| --- | --- |
| ![Select all peer keys for this node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/selectall.png) | Select all peer keys for this node |
| ![Add name of currently selected key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/addname.png) | Add name of currently selected key |
| ![Add full path of the currently selected key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/addpath.png) | Add full path of the currently selected key |
| ![Add last write date/time of currently selected key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adddatetime.png) | Add last write date/time of currently selected key |
| ![Add security properties for selected key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/addproperties.png) | Add security properties for selected key |
| ![Enumerate all values for this key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/enumeratevalues.png) | Enumerate all values for this key |
| ![Add currently selected value](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/addvalue.png) | Add currently selected value |
| ![Delete properties from selection](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/search/query/delete.png) | Delete properties from selection |
| ![Go to selected key](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/goto.png) | Go to selected key |
