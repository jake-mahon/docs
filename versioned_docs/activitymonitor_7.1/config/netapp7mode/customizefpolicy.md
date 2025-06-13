# Customize FPolicy Policy Name

There may be situations when FPolicy needs to be named something other than StealthAUDIT. In those cases it is necessary to manually add a parameter to the Activity Monitor agent’s ```sbtfilemon.ini``` file. After the monitoring agent has been deployed, follow the steps.

__Step 1 –__ Open to the ```sbtfilemon.ini``` file on the agent server in a text editor:

…\STEALTHbits\StealthAUDIT\FSAC

__Step 2 –__ Add the following parameter:

```
FPOLICY_POLICY_NAME=[POLICY_NAME]
```

Example:

```
FPOLICY_POLICY_NAME=EnterpriseAuditor
```

__Step 3 –__ Save and close the ```sbtfilemon.ini``` file.

When the Activity Agent is configured to monitor a NetApp device, it looks for the FPolicy named in the parameter.
