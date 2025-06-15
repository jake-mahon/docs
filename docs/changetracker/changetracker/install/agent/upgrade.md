# Upgrade from Agent App to Gen 7 Agent

If you are currently using an Agent App (Version 1.0.0.x) and you wish to upgrade to use the Gen 7 Agent instead, the procedure is straightforward but as with any software upgrade, there may be additional steps required depending on your individual circumstances.

The high-level overview of upgrading agents in Gen 7:

__Step 1 –__ Stop Agent App service (you may choose to uninstall the program at this stage).

__Step 2 –__ Run installer for Gen 7 Agent to install.

- Hub details, Agent username and password are required;
- Thumbprint may be required if using a private certificate on your Hub server.

__CAUTION:__  Do not set either a __Nameprefix__ or __Namesuffix__ for the Agent name – if the Gen 7 Agent registers with the same Host Name as the Agent App is using, the Gen 7 Agent will simply assume the identity of the Agent App and therefore event and report continuity will be ensured.

__Step 3 –__ Once the Gen 7 Agent is operational you can then remove the Agent App (if you didn’t already do this in step 1).

__Step 4 –__ Stop the NNT Agent App Service.

- __For Windows__ – Either use the MS Services Console Run > services.msc or use Command Line as Administrator: ```sc stop NNTAgentService```

![UpgradeAgentWindowsCommandPrompt](../../../../../static/img/product_docs/changetracker/changetracker/install/agent/upgradeagentwindowscommandprompt.webp)

- __For Linux__ – Use: ```service nntagent stop```

__Step 5 –__ Install Gen 7 Agent. Review the following for additional information:

- __Windows__ – See the [Gen 7 Agent for Windows](../../requirements/gen7agentwindows.md) topic for additional information.

- __Linux__ – See the [Installing Gen 7 Agent for Linux](linuxos.md) topic for additional information.

__Step 6 –__ Uninstall old Agent App.

- __Windows__ – Using __NNTAgent.exe__ from command line:

C:\Windows\system32&gt; C:\ProgramData\{2443C4AA-A2DC-4926-9D6B-2D3D8AAE6006}\NNTAgent.exe /s MODIFY=FALSE REMOVE=TRUE UNINSTALL=YES

- __Linux__ – from terminal:

rpm -ev nnt-mono nnt-agent

- __Debian__ - from terminal:

  # apt-get remove nnt-agent

  # apt-get remove nnt-mono

  You’ll then want to remove the Gen 7 Agent files which will be found at:

  # rm -fr /opt/nnt

  # rm -fr /opt/mono
- MAC OSX – from terminal:

  sudo pkgutil –-forget MonoFramework-MDK-4.6.1.3.macos10.xamarin.universal.pkg

  sudo pkgutil --forget nnt-gen7agent-7.0.0.19-34-x64.pkg

  You’ll then want to remove the Gen 7 Agent files which will be found at:

  # rm -fr /var/nnt

  # rm -fr /opt/nnt

  # rm -fr /opt/mono

__NOTE:__ Please contact [Netwrix Support](https://www.netwrix.com/support.html) if you need help at any stage or if you are experiencing issues.
