# Create and Assign Profiles

This guide shows how to create in the XML configuration profiles and the appropriate rules to assign
these profiles automatically.

## Create a Profile

Here is the xml configuration to create a profile in Identity Manager. See the
[ Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional
information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Profile Identifier="User" DisplayName_L1="Basic User" DisplayName_L2="Utilisateur de base" />
```

## Automatically Assign Profiles

To automatically assign profiles it is necessary to manipulate the ProfileRuleContext and
ProfileRule. See the
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and
[Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topics for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User:Records" IsAppliedToRoot="false">  <ProfileRule Profile="User" /></ProfileRuleContext>
```

## Configure the Set InternalUserProfiles Task

The Identity Manager-Set-InternalUserProfiles task is mandatory to automatically assign the profile.
The task can be selected from the Job provisioning list. See the
[ Set Internal User Profiles Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >    <TaskEntityType EntityType="Referentiel_User"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </SetInternalUserProfilesTask>
```

Here the TaskEntityType is the reference to connect to Identity Manager and the ResourceType is the
same as in the ProfileRuleContext. Once this configuration is done you can add the task in the job
which provisions the Connector AD.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Job Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning" DisplayName_L2="AD - Provisioning" Agent="Local">    ...
<SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >       <TaskEntityType EntityType="Referentiel_User"/>       <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    </SetInternalUserProfilesTask>  </Job>
```

# Restrict Users' Rights

This guide shows how to define rules to limit users' access rights, which is possible via several
elements.

## Overview

Each UI element can be accessed only by the users who have a profile with the appropriate access
rights.

All of this page's examples are based on the following access rights to view the `Directory_User`
entity type:

```

<AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_Directory_User" DisplayName_L1="Administrator_Resources_Directory_User">  <Entry Permission="/Custom/Resources/Directory_User/View" CanExecute="true"/>  <Entry Permission="/Custom/Resources/Directory_User/ViewOwnedResources" CanExecute="true" />  <Entry Permission="/Custom/Resources/Directory_User/ViewTargetResources" CanExecute="true" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="Directory_UserRecord" Identifier="Administrator_Resources_Directory_UserRecord" DisplayName_L1="Administrator_Resources_Directory_UserRecord">  <Entry Permission="/" /></AccessControlRule>

```

## Assign a Profile Based on Users' Dimensions

Assign a profile based on users' dimensions by proceeding as follows:

1. Create the appropriate dimensions.

   > The following example states two user criteria as dimensions: users' organizations and titles:
   >
   > ```
   >
   > <Dimension Identifier="Organization0" DisplayName_L1="Department" DisplayName_L2="D�partement" EntityType="Directory_Organization" ColumnMapping="0" IsHierarchical="true" ParentProperty="Parent" /><Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" EntityType="Directory_Title" ColumnMapping="1" />
   >
   > ```

   See the [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
   additional information.

2. Write profile rules and profile rule contexts to make the previously created dimensions act as
   filters in rules meant to assign profiles to users.

   > The following examples creates a rule assigning the `Manager` profile to specific users based
   > on their organizations and titles, now that they both exist as dimensions:
   >
   > ```
   >
   > <ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User.Records" IsAppliedToRoot="false">  <ProfileRule Profile="Manager" Dimension0Binding="Organization.Id" Dimension0Binding="Title.Id"/></ProfileRuleContext>
   >
   > ```

   The profile rule context must use a
   [Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)to
   define the entity type that contains the dimension information.

   See the [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
   additional information.

## Limit an Entity's Visibility

Limit an entity's visibility by proceeding as follows:

1. Create at least one property group to gather a set of entity properties together.

   > For example:
   >
   > ```
   >
   > <AccessControlPropertyGroup Identifier="Directory_User_Sensitive" DisplayName_L1="User - Sensitive Properties" />
   >
   > ```

   See the [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
   additional information.

2. Create an access control entity type to list all the properties whose visibility must be
   restricted, and link them to a visibility group.

   > For example:
   >
   > ```
   >
   > <AccessControlEntityType Identifier="Directory_UserRecord">  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="StartDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EndDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="VIP" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="Leave" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="BirthDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="BirthName" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="ContractStartDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="ContractEndDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EmployeeType" /></AccessControlEntityType>
   >
   > ```

   As a result, all the properties listed in the access control entity type are hidden from users
   by default when they have the usual permissions written above. See the
   [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
   additional information.

   To be able to see these properties, a user must have these permissions with a full access.

   > For example to give access to all properties:
   >
   > ```
   >
   > <AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_Directory_User" DisplayName_L1="Administrator_Resources_Directory_User">  <Entry Permission="/Custom/Resources/Directory_User/View" CanExecute="true" FullAccessProperties="true" />  <Entry Permission="/Custom/Resources/Directory_User/ViewOwnedResources" CanExecute="true" />  <Entry Permission="/Custom/Resources/Directory_User/ViewTargetResources" CanExecute="true" /></AccessControlRule>
   >
   > ```
   >
   > And to give access only to a property group:
   >
   > ```
   >
   > <AccessControlRule Profile="Administrator" EntityType="Directory_UserRecord" Identifier="Administrator_Resources_Directory_UserRecord" DisplayName_L1="Administrator_Resources_Directory_UserRecord"><Entry Permission="/" PropertyGroup="Directory_User_Sensitive" /></AccessControlRule>
   >
   > ```

   When there is not any profile with a full access, then the visibility restriction is lifted and
   all users can access the properties.

## Limit a Profile's Permissions

Limit a profile's permissions by using filters in the access control rule that give permissions to
the profile.

> For example to limit permissions based on a hardcoded value:
>
> ```
>
> <AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_Directory_User" DisplayName_L1="Administrator_Resources_Directory_User">
>
>   <Filter Binding="Directory_User.Records.EmployeeType.Category.Identifier" Value="External" />
>
>   <Entry Permission=.../></AccessControlRule>
>
> ```
>
> And based on a dimension:
>
> ```
>
> <AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_Directory_User" DisplayName_L1="Administrator_Resources_Directory_User">
>
>   <Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" />
>
>   <Entry Permission=.../></AccessControlRule>
>
> ```

See the [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
additional information.

# Profiles & Permissions

Identity Manager handles its own accesses through permissions grouped into profiles.
