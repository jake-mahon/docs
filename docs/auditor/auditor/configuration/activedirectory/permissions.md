# Permissions for Active Directory Auditing

Before you start creating a monitoring plan to audit your Active Directory, plan for the account that will be used for data collection – it should meet the requirements listed in this topic. Then you will provide this account in the monitoring plan wizard (or in the monitored item settings).

## Account Requirements

The account used for data collection must meet the following requirements:

- Member of the Domain Admins group on the target server.

  __NOTE:__ This covers all the required permissions below and is a mandatory setting if you want to use network traffic compression for data collection.
- Local Admin on the Netwrix Auditor server.
- The combination of the following rights and permissions if you plan to disable network traffic compression for your monitoring plan or, for some reasons, do not want to add this account to the Domain Admins group:

  - The "Manage auditing and security log" policy must be defined for this account.   
    See the [Configure the Manage Auditing and Security Log Policy](#Configure-the-Manage-Auditing-and-Security-Log-Policy) topic for additional information.
  - If you plan to process the Active Directory Deleted Objects container, Read permission on
    this container are required. See the [Grant Permissions for the Deleted Objects Container](#Grant-Permissions-for-the-Deleted-Objects-Container) topic for additional information.

If the account selected for data collection is not a member of the Domain Admins group, see the [Assign Permission To Read the Registry Key](/docs/auditor/auditor/configuration/activedirectory/permissionsregistrykeys.md) topic.

## Additional Configuration to Review Changes Made via Exchange Server

If you have an on-premises Exchange server in your Active Directory domain, consider that some changes can be made via that Exchange server. To be able to audit and report who made those changes, you should make sure that the account used for data collection has any of the following:

- Membership in the __Organization Management__ or __Records Management__ group.

- The __Audit Logs__ management role (see the [Assign Management Roles](/docs/auditor/auditor/configuration/exchange/permissions.md#Assign-Management-Roles) topic for additional information).

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the [Exchange Administrator Audit Logging Settings](/docs/auditor/auditor/configuration/exchange/auditlog.md) topic for additional information.

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is enabled for the domain controller event logs:

- Permissions to access the HKEY\_LOCAL\_MACHINE\System\CurrentControlSet\Services\EventLog\Security registry key on the domain controllers in the target domain. See the [Assign Permission To Read the Registry Key](/docs/auditor/auditor/configuration/activedirectory/permissionsregistrykeys.md) topic for additional information.
- Membership in one of the following groups: __Administrators__, __Print Operators__, __Server Operators__.
- Read/Write share permission and Full control security permission on the logs backup folder.

## Considerations for gMSA Account

If you are using gMSA for data collection, consider that AAL event data collection from your on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with _`domain\Exchange_server_name$`_ instead of the initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

### Target Domain

If you plan to use network traffic compression for data processing, consider the following:

- If network traffic compression will be _enabled_, then the account must belong to the Domain Admins group.
- If network traffic compression will be _disabled_, and the account you plan to use for data collection is not a member of the Domain Admins group, then the  __Manage auditing and security log__ policy must be defined for this account.   
  See the [Configure the Manage Auditing and Security Log Policy](#Configure-the-Manage-Auditing-and-Security-Log-Policy) topic for more information.

If you need to process Active Directory __Deleted Objects__ container, consider the following:

- Read permission on
  this container is required. See the [Grant Permissions for the Deleted Objects Container](#Grant-Permissions-for-the-Deleted-Objects-Container) topic for additional information.
- Grant this permission only if the account you plan to use for data collection is not a member of the Domain Admins group.

If auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY\_LOCAL\_MACHINE\System\CurrentControlSet\Services\EventLog\Security_ registry key on the domain controllers in the target domain. See the [Assign Permission To Read the Registry Key](/docs/auditor/auditor/configuration/windowsserver/permissionsregistrykeys.md) topic for additional information.
- Membership in any of the following groups: Administrators, Print Operators, Server Operators
- Read/Write share permission and Full control security permission on the logs backup folder.

__NOTE:__ Grant these permissions only if the account you plan to use for data collection is not a member of the __Domain Admins__ group.

If you have an on-premises Exchange server in your Active Directory domain, consider that some changes can be made via that Exchange server. To be able to audit and report who made those changes, you should make sure that the account used for data collection has any of the following:

- Membership in the __Organization Management__ or __Records Management__ group.
- The __Audit Logs__ management role (see the [Assigning Management Roles](/docs/auditor/auditor/configuration/exchange/auditlogsrole.md) topic for additional information).

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the [Exchange Administrator Audit Logging Settings](/docs/auditor/auditor/configuration/exchange/auditlog.md) topic for additional information.

If you are using gMSA for data collection, consider that AAL event data collection from your on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with _`domain\Exchange_server_name$`_ instead of the initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

## Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

Follow the steps to configure the Manage Auditing and Security Log Policy.

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>` > Domains > `<domain_name>`__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies > Windows Settings > Security Settings > Local Policies.__

__Step 4 –__ On the right, double-click the __User Rights Assignment__ policy.

__Step 5 –__ Locate the __Manage auditing and security log__ policy and double-click it.

__Step 6 –__ In the __Manage auditing and security log Properties__ dialog, click __Add User or Group__, specify the user that you want to define this policy for.

__Step 7 –__ Run the following command to update group policy: ```gpupdate /force```

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.

## Grant Permissions for the Deleted Objects Container

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

Follow the steps to grant permissions for the Deleted Objects Container.

__Step 1 –__ Log on to any domain controller in the target domain with a user account that is a member of the __Domain Admins__ group.

__Step 2 –__ Navigate to __Start > Run__ and type _"cmd"_.

__Step 3 –__ Input the following command: ```dsacls <deleted_object_dn> /takeownership```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object.

For example: ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership```

__Step 4 –__ To grant permission to view objects in the __Deleted Objects__ container to a user or a group, type the following command:

```dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>```

where ```deleted_object_dn``` is the distinguished name of the deleted directory object and``` user_or_group``` is the user or group for whom the permission applies, and ```Permissions``` is the permission to grant.

For example, ```dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP```

In this example, the user CORP\jsmith has been granted __List Contents__ and __Read Property__ permissions for the __Deleted Objects__ container in the __corp.local__ domain. These permissions let this user view the contents of the __Deleted Objects__ container, but do not let this user make any changes to objects in this container. These permissions are equivalent to the default permissions that are granted to the __Domain Admins__ group.

## Define the Log On As a Service Policy

On the Logon Activity monitoring plan creation, the Log on as a service policy is automatically defined for the Data Processing Account as a local security policy. However, if you have the Deny log on as a service policy defined locally or on the domain level, the local Log on as a service policy will be reset. In this case, redefine the Deny log on as a service policy through the Local Security Policy console on your computer or on the domain level through the Group Policy Management console.

Follow the steps to define the Log On As a Service policy.

__Step 1 –__ On the computer where Auditor Server is installed, open the __Local Security Policy__ snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

__Step 2 –__ Navigate to __Security Settings > Local Policies > User Rights Assignment__ and locate the __Log on as a service__ policy.

__Step 3 –__ Double-click the __Log on as a service__ policy, and click __Add User or Group__.

__Step 4 –__ Specify the account that you want to define this policy for.

## Define the Log On As a Batch Job Policy

When you create a Logon Activity monitoring plan, the Log on as a batch job policy is automatically defined for the Data Processing Account as a local security policy. However, if you have the Deny log on as a batch job policy defined locally or on the domain level, the local Log on as a batch job policy will be reset. In this case, redefine the Deny log on as a batch job policy through the Local Security Policy console on your computer or on the domain level through the Group Policy Management console.

You can configure this policy via the __Local Security Policy__ snap-in or using the Group Policy Management console.

### Configure the Log On As a Batch Job policy via Local Security Policy Snap-in

Follow the steps to configure the Log On As a Batch Job policy via Local Security Policy snap-in.

__Step 1 –__ On any domain controller in the target domain, open the __Local Security Policy__ snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

__Step 2 –__ In the __Local Security Policy__ snap-in, navigate to __Security Settings__ > __Local Policies > User Rights Assignment__ and locate the __Log on as a batch job__ policy.

![manualconfig_ws_logonasbatch](/img/product_docs/1secure/admin/datacollection/activedirectory/manualconfig_ws_logonasbatch.png)

__Step 3 –__ Double-click the __Log on as a batch job__ policy, and click __Add User or Group__. Specify the account that you want to define this policy for.

### Configure the Log On As a Batch Job Policy Using the Group Policy Management Console

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

Follow the steps to configure the Log On As a Batch Job policy using the Group Policy Management Console.

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below) > Group Policy Management.

__Step 2 –__ In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` > Domain Controllers. Right-click the effective domain controllers policy (by default, it is the Default Domain Controllers Policy), and select Edit.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

__Step 4 –__ On the right, double-click the User Rights Assignment policy.

__Step 5 –__ Locate the Log on as a batch job policy and double-click it.

__Step 6 –__ In the Log on as a batch job Properties dialog, click Add User or Group and specify the user that you want to define this policy for.

__Step 7 –__ Navigate to Start > Run and type ```cmd```. Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.
