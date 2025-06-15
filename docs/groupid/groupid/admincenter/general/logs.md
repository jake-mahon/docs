# Get Logs

Directory Manager generates logs for its services, clients, and Windows events, which are saved at different locations on the network. Rather than locating these log files in their respective folders, you can collect and dump your required logs to a desired location.

What do you want to do?

- Get Log Files

## Get Log Files

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __GroupID Settings__ page, click the __Logs__ tab.
3. On the __Logs__ tab:

- On the __Applications__ card, select the check boxes for the Directory Manager services and portals that you want to fetch the logs for. To select all options, select the __Select All__ check box on the card.  
  Each application has a _file logging_ level set for it. Log files generated against file logging will be fetched.

  - For applications deployed in native IIS, logs will be fetched from the Directory Manager server.
  - For applications deployed in remote IIS, logs will be fetched from the remote IS machine.
  - For applications deployed in Docker, logs will be fetched from the machine running Docker daemon.

- On the __Tools & Management Shell__ card, select the check boxes for Management Shell and the Directory Manager tools that you want to fetch the logs for. To select all options, select the __Select All__ check box on the card. Logs will be fetched from the local machine. If you have not used Management Shell or a tool on the machine, its respective logs will not be available.
- On selecting the __Event Viewer__ check box on the __Event Viewer__ card, the __Logs__ button is enabled. Click it to launch the __Select Event Viewer Logs__ dialog box, that displays all logs maintained by Windows Event Viewer on the local machine. Select the check boxes for the required logs and click __OK__.

4. Click __Download__.  
   Directory Manager creates a zipped file containing the selected logs and saves it to the download location set in browser settings.

__See Also__

- [Event Logging](../identitystore/history/eventlogging.md)
- For a Portal -
  [Manage Log Settings](../portal/server/log.md)
