---
sidebar_position: 6822
title: Execute PS Script
---

# Execute PS Script

The Execute PS script right-click option in the Recent Events tab of a policy opens a Windows Explorer window to the scripts folder within the Threat Preventionfile system.

…\ Netwrix\Netwrix Threat Prevention\SIWinConsole\scripts

You can execute Windows PowerShell scripts stored in this folder for the selected event. Select a script to execute it.

An example script has been placed in this folder. The example PowerShell script creates or appends the *si\_eventdata.txt* file on the C:\ drive. The example script also contains all the parameters needed for working with the selected event data.

**NOTE:** For a PowerShell script to reference the selected event data, it is necessary to use the *$helper.[class]* with the data parameter. This is Threat Prevention specific. For example:

```
$sw.WriteLine(("EventName: " + $helper.EventName))
```
See the [Default PowerShell 4.0 Script](../Actions/PowerShell#_Default_PowerShell_4.0 "Default PowerShell 4.0 Script") topic for the full example script.