# Assign Permission To Read the Registry Key

This permission is required only if the account selected for data collection is not a member of the Domain Admins group. This permission should be assigned on each domain controller in the audited domain, so if your domain contains multiple domain controllers, it is recommended to assign permissions through Group Policy, or automatically using [Audit Configuration Assistant](/docs/auditor/auditor/tools/auditconfigurationassistant.md). To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management console. See the [Permissions for Group Policy Auditing
](/docs/auditor/auditor/configuration/grouppolicy/permissions.md)topic for additional information.

## Assign Permission Via the Registry Editor Snap-in

Follow the steps to assign permission via the Registry Editor snap-in.

__Step 1 –__ On your target server, open Registry Editor: navigate to __Start > Run__ and type _"regedit"_.

__Step 2 –__ In the left pane, navigate to _HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControl Set\Services\EventLog\Security_.

__Step 3 –__ Right-click the __Security__ node and select __Permissions__ from the pop-up menu.

__Step 4 –__ Click __Add__ and enter the name of the user that you want to grant permissions to.

__Step 5 –__ Check __Allow__ next to the __Read__ permission.

__Step 6 –__ For auditing Logon Activity, you also need to assign the Read permission to the _HKEY\_LOCAL\_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

## Assign Permission Using the Group Policy Management Console

Follow the steps to assign permission using the Group Policy Management console.

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below) > Group Policy Management.

__Step 2 –__ In the left pane, navigate to Forest: <forest name> > Domains > <domain name> > Domain Controllers. Right-click the effective domain controllers policy (by default, it is the _Default Domain Controllers Policy_), and select Edit .

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Registry.

__Step 4 –__ Right-click in the pane and select Add Key.

__Step 5 –__ Navigate to ```HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv``` and click OK.

__Step 6 –__ Click Add and enter the name of the user that you want to grant permissions to and press Enter.

__Step 7 –__ Check Allow next to the _Read_ permission and click OK

__Step 8 –__ In the pop-up window, select Propagate inheritable permissions to all subkeys and click OK.

__Step 9 –__ Repeat the steps 4-8 for keys below:

- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg```;
- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security```.

__Step 10 –__ Close Group Policy Management console.

__Step 11 –__ Navigate to Start > Run and type ```cmd```. Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 12 –__ Type ```repadmin/syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 13 –__ Ensure that new GPO settings were applied to the domain controllers.
