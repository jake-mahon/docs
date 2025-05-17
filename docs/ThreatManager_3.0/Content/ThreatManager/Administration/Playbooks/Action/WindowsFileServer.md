---
sidebar_position: 2495
title: Windows File System Target Actions
---

# Windows File System Target Actions

The following actions target Windows File System.

## Delete File

This action deletes the file associated with the threat.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/DeleteFIle.png)

* Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the [Integrations Interface](../../Configuration/Integrations/Overview "Integrations Interface"). If not specified, the action will be run as the credentials of the Action Service.

## Revert Permission Change

The Revert Permission Change action reverts a permission change on an Active Directory Object.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/RevertPermissionChange.png)

* Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the Integrations Interface. If not specified, the action will be run as the credentials of the Action Service.

See the [Integrations Interface](../../Configuration/Integrations/Overview "Integrations Interface") topic for additional information.

## Save File Hash

This action saves the file hash to the properties of the threat.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/SaveFileHash.png)

* Credential – Select a credential profile that contains valid Active Directory credentials. Credential profiles are configured on the [Integrations Interface](../../Configuration/Integrations/Overview "Integrations Interface"). If not specified, the action will be run as the credentials of the Action Service.