# Additional Configuration to Review Changes Made via Exchange Server

If you have an on-premises Exchange server in your Active Directory domain, consider that some changes can be made through this Exchange server. To be able to audit and report who made those changes, make sure that the account used for data collection meets one of the following requirements:

- Membership in the Organization Management or Records Management group

OR

- The Audit Logs management role (see the [Assign Management Roles](/docs/auditor/auditor/configuration/exchange/permissions.md#assign-management-roles) topic for additional information)

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the [Exchange Administrator Audit Logging Settings](/docs/auditor/auditor/configuration/exchange/auditlog.md) topic for additional information.

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY\_LOCAL\_MACHINE\System\CurrentControlSet\Services\EventLog\Security_ registry key on the domain controllers in the target domain. See the Assign Permission to Read the Registry Key topic for additional information.
- Membership in one of the following groups: Administrators, Print Operators, or Server Operators
- Read/Write share permission and Full control security permission on the logs backup folder.

## Considerations for gMSA Account

If you are using gMSA for data collection, consider that AAL event data collection from your on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with _domain\\Exchange\_server\_name$_ instead of the initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

## Configure Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group. Follow the steps:

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>` > Domains > `<domain_name>`__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies > Windows Settings > Security Settings > Local Policies.__

__Step 4 –__ On the right, double-click the __User Rights Assignment__ policy.

__Step 5 –__ Locate the __Manage auditing and security log__ policy and double-click it.

__Step 6 –__ In the Manage auditing and security log Properties__anage auditing and security log Properties__ dialog, click __Add User or Group__, specify the user that you want to define this policy for.

__Step 7 –__ Run the following command to update group policy: ```gpupdate /force```

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.

## Grant Permissions for Deleted Objects Container

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group. Follow the steps:

__Step 1 –__ Log on to any domain controller in the target domain with a user account that is a member of the __Domain Admins__ group.

__Step 2 –__ Navigate to __Start > Run__ and type __cmd__.

__Step 3 –__ Input the following command: ```dsacls <deleted_object_dn> /takeownership```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object.

For example: ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership```

__Step 4 –__ To grant permission to view objects in the Deleted Objects container to a user or a group, type the following command:

```dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object and``` user_or_group``` is the user or group for whom the permission applies, and ```Permissions``` is the permission to grant.

For example, ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP```

In this example, the user CORP\jsmith has been granted __List Contents__ and __Read Property__ permissions for the __Deleted Objects__ container in the __corp.local__ domain. These permissions let this user view the contents of the __Deleted Objects__ container, but do not let this user make any changes to objects in this container. These permissions are equivalent to the default permissions that are granted to the __Domain Admins__ group.

## Define Log On As a Batch Job Policy

On monitoring plan creation, the Log on as a batch job policy is automatically defined for the Data Processing Account as a local security policy. However, if you have the "Deny a log on as a batch job" policy defined locally or on the domain level, the local "Log on as a batch job" policy will be reset. In this case, redefine the "Deny log on as a batch job" policy through the "Local Security Policy" console on your computer or on the domain level through the Group Policy Management console.

You can configure this policy via the Local Security Policy snap-in or using the Group Policy Management console.

### Configure the Log On As a Batch Job policy via Local Security Policy Snap-in

Follow the steps to configure the Log On As a Batch Job policy via Local Security Policy snap-in.

__Step 1 –__ On any domain controller in the target domain, open the Local Security Policy snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

__Step 2 –__ In the Local Security Policy snap-in, navigate to __Security Settings__ > __Local Policies > User Rights Assignment__ and locate the __Log on as a batch job__ policy.

![manualconfig_ws_logonasbatch](/img/product_docs/1secure/admin/datacollection/activedirectory/manualconfig_ws_logonasbatch.webp)

__Step 3 –__ Double-click the __Log on as a batch job__ policy, and click __Add User or Group__. Specify the account that you want to define this policy for.

### Configure the Log On As a Batch Job Policy Using the Group Policy Management Console

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group. Follow the steps:

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below) > Group Policy Management.

__Step 2 –__ In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` > Domain Controllers. Right-click the effective domain controllers policy (by default, it is the _Default Domain Controllers Policy_), and select Edit.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

__Step 4 –__ On the right, double-click the User Rights Assignment policy.

__Step 5 –__ Locate the Log on as a batch job policy and double-click it.

__Step 6 –__ In the Log on as a batch job Properties dialog, click Add User or Group and specify the user that you want to define this policy for.

__Step 7 –__ Navigate to Start > Run and type cmd. Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.

## Assign Permission to Read the Registry Key

This permission is required only if the account selected for data collection is not a member of the Domain Admins group.

This permission should be assigned on each domain controller in the audited domain, so if your domain contains multiple domain controllers, it is recommended to assign permissions through Group Policy, or automatically using [Audit Configuration Assistant](/docs/auditor/auditor/tools/auditconfigurationassistant.md).

To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management console.

Assign Permission Via the Registry Editor Snap-in

Follow the steps to assign permission via the Registry Editor snap-in:

__Step 1 –__ On your target server, open Registry Editor: navigate to __Start > Run__ and type _"regedit"_.

__Step 2 –__ In the left pane, navigate to _HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControl Set\Services\EventLog\Security_.

__Step 3 –__ Right-click the __Security__ node and select __Permissions__ from the pop-up menu.

__Step 4 –__ Click __Add__ and enter the name of the user that you want to grant permissions to.

__Step 5 –__ Check __Allow__ next to the __Read__ permission.

__Step 6 –__ For auditing Logon Activity, you also need to assign the Read permission to the _HKEY\_LOCAL\_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

To assign permission using the Group Policy Management console

Assign Permission Using the Group Policy Management Console

Follow the steps to assign permission using the Group Policy Management console:

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below) > Group Policy Management.

__Step 2 –__ In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` > Domain Controllers. Right-click the effective domain controllers policy (by default, it is the _Default Domain Controllers Policy_), and select Edit .

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Registry.

__Step 4 –__ Right-click in the pane and select Add Key.

__Step 5 –__ Navigate to ```HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv``` and click OK.

__Step 6 –__ Click Add and enter the name of the user that you want to grant permissions to and press Enter.

__Step 7 –__ Check Allow next to the _"Read"_ permission and click OK

__Step 8 –__ In the pop-up window, select Propagate inheritable permissions to all subkeys and click OK.

__Step 9 –__ Repeat the steps 4-8 for keys below:

- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg```;
- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security```.

__Step 10 –__ Close the Group Policy Management console.

__Step 11 –__ Navigate to Start > Run and type __cmd__. Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 12 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 13 –__ Ensure that new GPO settings were applied to the domain controllers.
