---
sidebar_position: 7233
title: gMSA for Active Directory
---

# gMSA for Active Directory

Directory Manager enables you to use a Group Managed Service Account (gMSA) to connect an Active Directory identity store to the identity provider. To ensure that the gMSA can be configured and used effectively, verify the following:

* General Checks
* Required Permissions
* Allowed Principals

## General Checks

* Run the following cmdlet in Windows PowerShell on the Directory Manager server to verify the gMSA status as either *true* or *false*.

  ```
Test-ADServiceAccount -Identity 
  ```
* In case a gMSA is configured for GroupIDAppPool11 or as a service account for identity store make sure the account name follows the format:  
  FQDN\$)

## Required Permissions

* The gMSA must have full permissions on the Directory Manager installation folder.
* It must be a member of the local administrator group (Administrators) on the Directory Manager server.
* It must be a member of the local IIS group (IIS\_IUSRS) on the Directory Manager server.

## Allowed Principals

* The following principals must be allowed to retrieve the managed password for the gMSA that you use to connect an identity store to an identity provider:

  * Directory Manager server (type: Computer)
  * The account configured for the Directory Manager app pool (type: Service Account)
* If any of these principals are not allowed to retrieve the managed password for the gMSA, do the following depending on the scenario:

  * If a group is mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the New-ADServiceAccount cmdlet, add the missing principal (Directory Manager server and/or app pool account) to the group.  
    Both these principals must
    be enlisted directly or indirectly in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter.
  * If an individual principals are mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the New-ADServiceAccount cmdlet, use the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the Set-ADServiceAccount
    cmdlet to add the missing principals (Directory Manager server and/or app pool account).

NOTE: Restart the Directory Manager server if you apply any of the above.

**See Also**

* [Manage an Identity Store](../../AdminCenter/IdentityStore/Manage "Manage an Identity Store")