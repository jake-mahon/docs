# Policy Templates: Process/Command Output

Where required, Netwrix Change Tracker can also execute commands on the endpoint device. Note that commands must be pre-approved for usage. All standard commands employed within Change Tracker Compliance Reports and the built-in Policy Templates are pre-approved but if you add any new commands these may require Admin approval. See the [Allowed Commands](/docs/changetracker/changetracker/admin/settings/allowedcommands.md) topic for additional information.

- __Agent-Based Monitoring__ – Where an Agent is being used for monitoring the commands will be executed directly by the Agent and the initial baseline stored in the local Agent database, with any subsequent changes detected being reported back to the Hub. The commands will be run using whichever service account has been assigned to it. When run on Windows any commands are run from the standard Windows\System32 shell and therefore may require a full executable path to be specified e.g.

cmd /C %systemroot%\system32\inetsrv\appcmd list VDIR /text:VDIR.NAME

![ProcessCommandOutput](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/processcommandoutput.png)

- Commands will be executed indirectly by the __Master Proxy Agent__ being used and the initial baseline stored in the __Proxy Agent__ database, with any subsequent changes detected being reported back to the Hub. The commands will be run using whichever service account has been used in the assigned __Credentials__.

![ProcessCommandOutputCredentials](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/processcommandoutputcredentials.png)

- __Use of RegEx__ – Whether using Agent-based or Agentless Command Output Trackers, a Regular Expression can be applied to the command output to filter/match specific keywords/patterns. Note that any device-offered RegEx capabilities e.g. egrep on Linux, can still be used instead of or to complement the Agent regex applied.

The Agent will only trust a signed __Configuration Template__ issued from its assigned Hub. Please contact [Netwrix Support](https://www.netwrix.com/support.html) for additional information.
