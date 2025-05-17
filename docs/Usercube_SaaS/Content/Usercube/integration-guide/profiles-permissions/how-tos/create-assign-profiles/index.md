---
sidebar_position: 352
title: Create and Assign Profiles
---

# Create and Assign Profiles

This guide shows how to create in the XML configuration profiles and the appropriate rules to assign these profiles automatically.

## Create a Profile

Here is the xml configuration to create a profile in Identity Manager. See the [Profile](../../../toolkit/xml-configuration/access-control/profile/index "Profile") topic for additional information.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Automatically Assign Profiles

To automatically assign profiles it is necessary to manipulate the ProfileRuleContext and ProfileRule. See the [Access Control Rule](../../../toolkit/xml-configuration/access-control/accesscontrolrule/index "AccessControlRule") and [Profile Rule Context](../../../toolkit/xml-configuration/access-control/profilerulecontext/index "ProfileRuleContext") topics for additional information.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
```
## Configure the Set InternalUserProfiles Task

The Identity Manager-Set-InternalUserProfiles task is mandatory to automatically assign the profile. The task can be selected from the Job provisioning list. See the [Set Internal User Profiles Task](../../../toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index "SetInternalUserProfilesTask") topic for additional information.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
          
```
Here the TaskEntityType is the reference to connect to Identity Manager and the ResourceType is the same as in the ProfileRuleContext.
Once this configuration is done you can add the task in the job which provisions the Connector AD.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
    ...  
                    
```