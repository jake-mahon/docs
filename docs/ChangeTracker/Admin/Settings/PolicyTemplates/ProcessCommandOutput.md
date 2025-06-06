---
id: processcommandoutput
title: 'Policy Templates: Process/Command Output'
---

# Policy Templates: Process/Command Output

Where required, Netwrix Change Tracker can also execute commands on the endpoint device. Note that commands must be pre-approved for usage. All standard commands employed within Change Tracker Compliance Reports and the built-in Policy Templates are pre-approved but if you add any new commands these may require Admin approval. See the [Allowed Commands](/Admin/Settings/AllowedCommands.md "Allowed Commands") topic for additional information.

cmd /C %systemroot%\system32\inetsrv\appcmd list VDIR /text:VDIR.NAME

![ProcessCommandOutput](/img/changetracker/admin/ProcessCommandOutput.png "ProcessCommandOutput")

![ProcessCommandOutputCredentials](/img/changetracker/admin/ProcessCommandOutputCredentials.png "ProcessCommandOutputCredentials")

- **Use of RegEx** – Whether using Agent-based or Agentless Command Output Trackers, a Regular Expression can be applied to the command output to filter/match specific keywords/patterns. Note that any device-offered RegEx capabilities e.g. egrep on Linux, can still be used instead of or to complement the Agent regex applied.

The Agent will only trust a signed **Configuration Template** issued from its assigned Hub. Please contact [Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support") for additional information.