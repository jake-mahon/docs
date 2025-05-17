---
sidebar_position: 7102
title: Upgrade-Group
---

# Upgrade-Group

The Upgrade-Group commandlet upgrades managed (Smart Groups and Dynasties) and non-managed Groups of GroupID 10 to Directory Manager 11.1 version. Before running this commandlet, make sure the configurations and history have been upgraded through the Directory Manager Upgrade wizard, only then this commandlet will upgrade the specified groups and their history successfully. See the [Upgrade to Directory Manager 11](../../Install/Upgrade/Upgrade "Upgrade to GroupID 11") topic for additional information on upgrade.

## Syntax

```
Upgrade-Group    
[-IdentityStoreId ]   
[-SearchContainer ]   
[-SearchContainerScopeList ]   
[-Identity ]   
[-GroupType ]  
[-KeepUserHistory]    
[-SecurityToken ]   
[-Credential ]   
[]
```
## Required Parameters

* None

Example 1:

By default, this commandlet upgrades group from the connected identity store, in case , you want to upgrade group(s) from an OU of another identity store, specify the id of that identity store in the *IdentityStoreId* parameter and OU in the *SearchContainer* parameter.

The following commandlet upgrades groups of an identity store having id 2 and from the *Jobs* container in that identity store.

```
Upgrade-Group -IdentityStoreId "2" SearchContainer "OU=Jobs,DC=Demo1,DC=com" 
```
Example 2:

If you want to upgrade groups from a parent OU only, use the *SearchContainerScopeList* and *SearchContainern* parameters. The *SearchContainerScopeList* parameter with value 1 indicates that the commandlet will not look into the nested OUs but the parent OU only.

The following commandlet upgrades dynasties residing in the *Jobs* OU from their parent OU only. If *SearchContainerScopeList* parameter is not specified then this commandlet upgrades dynasties from the parent OU as well as from its child OUs as well.

```
Upgrade-Group -SearchContainerScopeList "1" -SearchContainer "GIDsmart1""OU=Jobs,DC=Demo1,DC=com" GroupType "3"
```
NOTE: The group types 4 and 5 which are for middle and leaf dynasties are not supported in this commandlet. See the [Parameters](../Parameters/Parameters "Parameters") topic for additional information on the supported parameters. See the [Parameters](../Parameters/Parameters "Parameters") topic to get information about the parameters which you can use in the Directory Manager Management Shell commandlets.