# File: Target Files

The Target Files page provides filters to scope the data collection. This can provide better search results for the specific folder or file. It is a wizard page for all of the categories.

![File Search Wizard Target Files page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/inifile/targetfiles.png)

Within the Target files configuration page, select the desired method to refine the query.

__NOTE:__ Some options are grayed out depending on the option selected.

Where is the file or folder?

This section supplies options for using a fixed path (wildcards and system variables) or registry lookup values that are supported by the data collector. This header is available for all Category selections.

For either option, enter the path in the text box or click the browse button (__…__) to select from the popup windows.

__CAUTION:__ When selecting a __Fixed path__, avoid using file paths from network drives or from the network neighborhoods which begin with ```\\```.

- Fixed path – Specify a specific path to the target files. Use the following format: ```drive\filepath``` (for example, ```C:\WINNT\System32```). The browse button (__…__) opens the Remote Folder Explorer window.

  __NOTE:__ Further information for the Fixed path option is provided by clicking the tooltip button (__?__).

- System environment variables – Supply a traditional system root or previously defined variable that maps to a physical path within the file system. This is typically used when the system root is installed on a secondary volume. The following are variables that can be entered at the beginning of the file path:

  - ```%SYSTEMROOT%\Temp``` – Expands to ```C:\WINNT\Temp``` on some target hosts
  - ```%WibnDir%\System32``` – Expands to ```C:\WINDOWS\System32``` on some target hosts
  - ```%ProgramFiles%``` – Expands to ```C:\Program Files``` on some target hosts

- Registry Lookup – Find registry keys and values that exist on a target host in the environment. Click the browse button (__…__) to open the Access Analyzer Registry Browser window.

  - Access Analyzer Registry – Connect to a host, then select a registry key and path to be used for the lookup by the query

    - Registry Value – This value is automatically populated from the registry key
    - Levels – After a registry path has been selected, the Levels slider can be used to truncate the path for the key value in the Adjust Path dialog box
    - Current Value – Displays the type of data each registry value contains
    - Query 32-bit View – Select this checkbox to query a 32-bit view
    - Query 64-bit View – Select this checkbox to query a 64-bit view

      When a __Fixed path__ or __Registry Lookup__ is mapped, select options to better refine the search. Select one, none, or both.
- Include network drives – Includes all mapped shared drives in the network in the query

  __CAUTION:__ Including subfolders may result in hundreds of thousands of files being returned depending on the environment being targeted.
- Include subfolders – Searches all subfolders within the environment

What is the file or folder name?

The options in this section limit the search to folders or files with a specified name against the targeted host. When the __I am looking for folders__ option is selected, more options become available for further refinement.

__NOTE:__ The __I am looking for folders__ option and it's associated options are unavailable (grayed out) when the __Calculate Group Size (Files Only)__ category is selected.

- I am looking for files – Identifies files that exist on the target location and returning property information on these files
- I am looking for folders – Identifies folders that exist on the target location and returning property information on these folders

  - Include root folder in results – Returns all information within the root folder
  - Only include root folder – Returns information only for the root folder. This checkbox is enabled when the __Include root folder in results__ checkbox is selected.
- With this name – Specific name of a file or folder. A wildcard is used to match any file or folder to a specific naming convention. When searching for multiple objects, use a semicolon (```;```) to separate the objects in the list.

Last Modification Time Filter

Last Modification Time Filter is an additional filtration clause. It filters the information provided in the __Where is the file or folder__ and __What is the file or folder name__ criteria by a specific time frames. The following options are available:

- None – No time filter is applied. This option is selected by default.
- Between – Manually enter start and end dates in the following format (```MM/DD/YYYY```) or use the dropdown calendar to set the date. By default, the date range is set for the current day. Select __Today__ to set the filter to the current date or __Clear__ to reset the dates to a blank box.
- Most recent file – Filter the selected criteria by the most recent files since last modification
- Oldest file – Filter the __With this name__ and selected fixed path or registry value by the oldest files available
- In the last – Filter the selected criteria for the specified number of desired __days__ or __hours__

File Size Filter

The File Size Filter option is only available when the __Calculate Group Size (Files Only)__ category is selected. Select an option to activate the filter and narrow the query.

- None – No file size filter is applied. This option is selected by default.
- Below – Filter to files smaller than the specified values

  - Enter the number in the first text box and then select the size (__Bytes__, __Kb__, __Mb__, or __Gb__) from the dropdown menu
- Above – Filter to files larger than the specified values

  - Enter the number in the first text box and then select the size (__Bytes__, __Kb__, __Mb__, or __Gb__) from the dropdown menu
