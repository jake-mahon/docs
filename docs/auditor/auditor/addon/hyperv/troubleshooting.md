# Maintenance and Troubleshooting

If you cannot see collected data in Auditor, check the following:

- Add-on account has sufficient rights to access SCVMM and Auditor.
- In Netwrix Auditor settings, go to the __Integrations__ section and make sure the __Leverage Integration API__ is switched to __ON__. Check the communication port number – default is __9699__.
- If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
- Verify the parameters you provided in __settings.xml__.

## Monitor Several SCVMM

Follow the steps If you need to monitor more than one SCVMM:

__Step 1 –__ Deploy one more add-on instance to the server where the first add-on instance is already installed. Be sure to use a different installation folder.

__Step 2 –__ Open the __settings.xml__ file and configure the new add-on instance to work with the second SCVMM server.

__Step 3 –__ Open the __install.ps1__ file for the new add-on for edit.

__Step 4 –__ Modify the default scheduled task name:

```$name = "NetwrixAuditor Add-on for Microsoft SCVMM"```

__Step 5 –__ Save and then launch the updated __install.ps1__ file.

## Modify Task Schedule

Follow the steps if you need to modify the task schedule:

__Step 1 –__ Open __install.ps1__ for edit.

__Step 2 –__ Modify the default scheduled task schedule:

```$task.Triggers.Repetition.Interval = "PT15M"```

__Step 3 –__ Save and then launch the updated __install.ps1__ file.

Alternatively, you can use __Windows Task Scheduler__.

- If the solution was deployed using the third scenario (that is, SCVMM server and add-on are running on different machines), then the following error may be written in the solution log:

The WinRM client cannot process the request.

See the [Deployment Scenarios](deployment.md)topic for additional information.

If the authentication scheme is different from Kerberos, or if the client computer is not joined to a domain, then HTTPS transport must be used or the destination machine must be added to the __TrustedHosts__ list. To configure this list, use __winrm.cmd__.

Computers included in the __TrustedHosts__ list might not be authenticated. To get more information about their settings, you can run the following command:

```winrm help config```

For details on remote troubleshooting and authentication issues, see the following Microsoft article: [about_Remote_Troubleshooting](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-6).

To work around, add the remote SCVMM server to the __TrustedHosts__ list on the machine were the add-on runs. For that, use the following commands:

```winrm quickconfig```

```Set-Item WSMan:\localhost\Client\TrustedHosts -Value "ServerNameOrIP"```

here:

```ServerNameOrIP``` – SCVMM server name or IP address.
