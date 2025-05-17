---
sidebar_position: 2492
title: Tag Threat Actions
---

# Tag Threat Actions

The following action targets Threat Manager.

### Tag Object

This action adds tags to objects associated with a threat.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/TagObject.png)

* Tags – Select the tags to be applied to the object.
* Action – Specify whether to add or remove tags. If not specified, the tag will be added.
* Objects – Select which objects to tag. If not specified, the user who triggered the threat will be used.

### Manage Blocking Policy

This action adds or removes a user from a blocking policy.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/ManageBlockingPolicy.png)

* Users – The users to have their RDP Session ended. If not specified, the user who triggered the threat will be used. Select the users from the drop-down list.
* Credential – The domain credential used to run the action. Domain credentials are populated by credential profiles that are created on the Integrations page. If not specified, the action will be run under the credentials of the action. Select the credentials from the drop-down list.
* Policy Name - The name of the Threat Prevention blocking policy.
* Operation - Whether to add or remove the user from the blocking policy.