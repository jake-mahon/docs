# AccessControlPermission

AccessControlPermission identifies the access permissions to a specific Usercube feature.

The permissions have a filesystem like structure. The **/** is the root permission. There can be
nested permissions like _/a/b/c_. Like for files, access rights can be inherited from the parent
permissions.

The available permissions are built automatically by the product. There are predefined permissions
for all the features provided with the product. The other permissions are generated from the
configured Entity Types, Workflows and Reports.

Each connected user has access to all the permissions from the Profile Rules he belongs to.

## Properties

| Property                              | Details                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| BlockInheritance default value: false | **Type** Boolean **Description** Disable the possibility to inherit descendants permissions. |
| Identifier required                   | **Type** String **Description** Identifier of the permission.                                |

# AccessControlPropertyGroup

AccessControlPropertyGroup is used to hide properties based on the connected users profiles and
scopes of responsibility. It allows applying visibility rules on groups of entity properties.

The AccessControlPropertyGroup on itself is only a marker. The groups are assigned to properties by
using Access Control Entity Type and Access Control Entity Property.

A group can contain properties from several entity types by adding as many AccessControlEntityType
as needed.

An Access Control Rule can then define the profiles and the scopes of responsibility allowed to view
the properties in the two groups.

When an API call is performed on a resource, the values of the properties that belong to
AccessControlPropertyGroup will not be returned unless the calling user has the right permissions.

## Examples

The following example shows two property groups. The first one for HR sensitive properties like the
start and exit dates. The other one contains administration properties like the login or the
compliance grace period.

```

<AccessControlPropertyGroup Identifier="Directory_User_Sensitive" DisplayName_L1="User - Sensitive Properties" /><AccessControlPropertyGroup Identifier="Directory_User_Technical" DisplayName_L1="User - Technical Properties" /><AccessControlEntityType Identifier="Directory_UserRecord">  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EmployeeType" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="VIP" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="StartDate" />  <Property VisibilityGroup="Directory_User_Sensitive" Identifier="EndDate" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="Login" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="HasUnusedAccess" />  <Property VisibilityGroup="Directory_User_Technical" Identifier="GracePeriod" /></AccessControlEntityType>

```

Here, the Administrator profile is given access to all the properties. The Manager profile can view
all the HR sensitive fields for people in his department.

```

<AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Resources_User" DisplayName_L1="Administrator_Resources_User">  <Entry Permission="/Custom/Resources/Directory_User/View" FullAccessProperties="true" CanExecute="true" />  <Entry Permission="/" PropertyGroup="Directory_User_Sensitive" />  <Entry Permission="/" PropertyGroup="Directory_User_Technical" /></AccessControlRule><AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Manager_Resources_User" DisplayName_L1="Manager_Resources_User">  <Filter Binding="MainRecord.Department.Id" Dimension="Department" />  <Entry Permission="/" PropertyGroup="Directory_User_Sensitive" /></AccessControlRule>

```

## Properties

| Property                | Details                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the group in language 1 (up to 16). |
| Identifier required     | **Type** String **Description** Identifier of the group.                            |

# AccessControlRule

An access control rule gives to a profile a set of permissions on a data set represented by an
entity type.

The rule contains filters to restrict its application, and entries to grant or deny the permissions.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Administrator" EntityType="Resource" Identifier="Administrator_Resource" DisplayName_L1="Administrator_Resource">  <Entry Permission="/Connectors/SynchronizeSession" CanExecute="true" />  <Entry Permission="/Connectors/ProvisioningSession" CanExecute="true" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="Connector" Identifier="Administrator_Connector" DisplayName_L1="Administrator_Connector">  <Entry Permission="/Connectors/Connector/Query" CanExecute="true" />  <Entry Permission="/" /></AccessControlRule><AccessControlRule Profile="Administrator" EntityType="WorkflowInstance" Identifier="Administrator_WorkflowInstance" DisplayName_L1="Administrator_WorkflowInstance">  <Entry Permission="/Workflows/WorkflowInstanceData/Query" CanExecute="true" />  <Entry Permission="/Workflows/WorkflowInstance/Query" CanExecute="true" />  <Entry Permission="/" /></AccessControlRule>

```

## Properties

| Property                | Type   | Description                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required | String | Display name of the access control rule in language 1 (up to 16).                                                                                                                                                                                                                                                      |
| EntityType required     | Int64  | Identifier of the entity type that forms the data set on which the rule's permissions are applied. **NOTE:** The entity type can be part of the custom entity model, e.g. `Directory_User` or `AD_Entry`, or part of the built-in entity model, e.g. `AssignedSingleRole` or `Workflows` or `AccessCertificationItem`. |
| Identifier required     | String | Unique identifier of the access control.                                                                                                                                                                                                                                                                               |
| Profile required        | Int64  | The id of the profile to which the permissions will be given.                                                                                                                                                                                                                                                          |

## Child Element: Entry

AccessControlEntry grants or denies a permission to a user. Access Control Entries are part of an
Access Control Rule that defines the users scope of responsibility in the Usercube UI/Workflows.

**NOTE:** If your configuration contains an access control entry with `Permission="/"` and
`CanExecute="true"` then an error will occur during the configuration deployment, as a profile
should not possess such a big permission.

### Properties

| Property                                  | Type    | Description                                                                                                                |
| ----------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| CanExecute default value: false           | Boolean | Gives permission to execute permission.                                                                                    |
| FullAccessProperties default value: false | Boolean | Gives full access to all properties.                                                                                       |
| IsPostCondition default value: true       | Boolean | If true, the rule is evaluated on the entity after modification.                                                           |
| IsPreCondition default value: true        | Boolean | If true, the rule is evaluated on the entity before modification.                                                          |
| Notify default value: true                | Boolean | True to send notification emails to the rule's recipient profile when executing tasks related to the specified Permission. |
| Permission required                       | Int64   | Linked Permission.                                                                                                         |
| Priority default value: 0                 | Int32   | When a user has several contexts giving him access to the same right, the one with the highest priority is elected.        |
| PropertyGroup optional                    | Int64   | Gives the right to read for the PropertyGroup.                                                                             |

## Child Element: Filter

An access control filter restricts the application of the access control rule to a given subset of
the data set. The rule will give the specified permissions to the profile only on the parts of the
rule's data set for which the filter's condition is met.

_Remember,_ the ViewHistory permission (/Custom/Resources/Entity_Type/ViewHistory) does not work if
a filter is added.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Administrator_LDAP_Entry_History__" DisplayName_L1="Administrator_LDAP_Entry_History_">
    <Entry Permission="/Custom/Resources/Directory_User/ViewHistory" CanExecute="true" />
  </AccessControlRule>
```

This condition is actually a comparison expression between two elements:

- The value of a property which is originating from an entity targeted by the rule
- A comparison value that can be constant, or originating from the user profile

![Access Control Filter Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/accesscontrolfilter_schema.webp)

### Examples

Filter on a constant value

The following example gives to the `Administrator` profile certain permissions on user data, but
only concerning users working in the marketing department.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Administrator" EntityType="Directory_User" Identifier="Administrator_Directory_User_Marketing" DisplayName_L1="Administrator_Directory_User_Marketing">
  <Filter Binding="MainOrganization.Code" Value="Marketing" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on users from
`Directory_User` whose `Code` of `MainOrganization` is `Marketing`.

Filter on the account of the current user

The following example gives to the `Manager` profile certain permissions on user data, but only
concerning users from the team managed by the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Manager" EntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Managers" DisplayName_L1="Directory_UserRecord_Managers">
  <Filter Binding="Manager.Id" CurrentUser="true" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on the users'
records from `Directory_UserRecord` whose `Id` of `Manager` is the identifier of the account used by
the current user to authenticate to Usercube.

Filter on the context(s) of the assigned profile(s) of the current user

The following example gives to the `Manager` profile certain permissions on user data, but only
concerning users working in the same department as the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Profile="Manager" EntityType="Directory_User" Identifier="Manager_MainDepartment_Directory_UserRecord" DisplayName_L1="Administrator_MainDepartment_Directory_UserRecord">
  <Filter Binding="MainDepartment.Id" Dimension="Department" />
  <Entry Permission="..." ... />  ...
</AccessControlRule><Dimension Identifier="Department" DisplayName_L1="Department" EntityType="Directory_Department" ColumnMapping="3" />

```

Technically speaking, the filter here says that the rule's permissions apply only on the users from
`Directory_User` whose `Id` of `MainDepartment` is the same identifier as the value set for the
`Department` dimension of the current user, in at least one of their assigned profiles.

For example, Timothy Callahan is here assigned the `Manager` profile with the `Department` dimension
set to `Treasury/Chief Economist`.

![Matching Assigned Profile](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/assignedprofile_example_v603.webp)

Thus, with the previous access control rule, Timothy Callahan will get certain permissions on users
whose main department is `Treasury/Chief Economist`.

The following example gives to the `RoleOfficerByCategory` profile certain permissions on assigned
single roles, but only concerning the roles of a category assigned to the current user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="SingleRole.Category.Id" Category="true" />
  <Entry Permission="..." ... />  ...
</AccessControlRule>

```

Technically speaking, the filter here says that the rule's permissions apply only on the assigned
single roles whose `Id` of the `Category` of the `SingleRole` is the same identifier as the value
set for the `Category` property of the current user, in at least one of their assigned profiles.

Multiple filters

The following example gives to the `RoleOfficerByCategory` profile the permission to review the
roles of users from `Directory_User`, but only the roles of a category assigned to the current user,
and whose assignment is stated as pending the first approval out of 1, 2 or 3.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_8" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="8" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_9" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="9" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="RoleOfficerByCategory_AssignedSingleRole_ReviewRoles_Directory_User_11" DisplayName_L1="Role Officer - Review Roles" EntityType="AssignedSingleRole" Profile="RoleOfficerByCategory">
  <Filter Binding="Role.Category.Id" Category="true" />  <Filter Binding="WorkflowState" Value="11" />
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>
```

Technically speaking, the filter here says that the rule's permissions apply only on the assigned
single roles:

- Whose `Id` of the `Category` of the `SingleRole` is the same identifier as the value set for the
  `Category` property of the current user, in at least one of their assigned profiles, and
- Whose `WorkflowState` is set to 8 or 9 or 11, which mean respectively pending approval 1/1, 1/2
  and 1/3.

### Properties

| Property                           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | Int64                       | Binding of the property whose value is to be checked to restrict the application of the rule's permissions. **NOTE:** The binding must be based on the entity type defined in the access control rule.                                                                                                                                                                                                                            |
| Category default value: false      | Boolean                     | True to compare the value specified by the binding to the categories of the current user's assigned profiles.                                                                                                                                                                                                                                                                                                                     |
| CompositeRole default value: false | Boolean                     | True to compare the value specified by the binding to the composite roles of the current user's assigned profiles. See the [ AssignedProfile ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md) topic for additional information.                                                                                                                                    |
| CurrentUser default value: false   | Boolean                     | True to compare the value specified by the binding to the identifier of the account used by the current user to authenticate to Usercube. **NOTE:** The current user is the owner of the profile, allowed by the access control rule to perform an action and/or receive a notification. `CurrentUser` is tightly linked to the configuration of the `SelectUserByIdentityQueryHandlerSetting`.                                   |
| Dimension optional                 | Int64                       | Identifier of the dimension whose value(s), from the user's assigned profiles, are to be compared to the value specified by the binding. See [ Dimension ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md) and [ AssignedProfile ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md) topics for additional information. |
| Group optional                     | String                      | Group that the filter is part of. The access control rule filters the permissions by using the union (OR) of all filter groups, and the intersection (AND) of all filters within a group. **NOTE:** When not specified, the filter is part of the default group.                                                                                                                                                                  |
| Operator default value: 0          | AccessControlFilterOperator | Comparison operator. 0 - Equals. 1 - NotEquals.                                                                                                                                                                                                                                                                                                                                                                                   |
| ResourceType default value: false  | Boolean                     | True to compare the value specified by the binding to the resource types of the current user's assigned profiles. See the [ AssignedProfile ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md) topic for additional information.                                                                                                                                     |
| SingleRole default value: false    | Boolean                     | True to compare the value specified by the binding to the single roles of the current user's assigned profiles. See the [ AssignedProfile ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md) topic for additional information.                                                                                                                                       |
| Value optional                     | String                      | Hard coded value to be compared to the value specified by the binding.                                                                                                                                                                                                                                                                                                                                                            |

# AssignedProfile

An assigned profile allows or denies to a user a scope of responsibility in Usercube.

Each assigned profile gives one profile and one profile context to a user. A user can have up to 10
assigned profiles.

For a given user, all the assigned profiles are matched against all the configured access control
rules to compute the user's permissions in Usercube.

An assigned profile can be assigned explicitly to someone, or generated automatically based on
users' data via profile rules.

## Properties

| Property                          | Details                                                                                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AccessState default value: 0      | **Type** AccessState **Description** Access state ("None"=0, "Requested"=4, "PendingApproval"=8, "PendingApproval1"=9, "PendingApproval2"=10, "Approved"=16, "Declined"=17 and "PolicyApproved"=18). |
| Context required                  | **Type** Int64 **Description** Identifier of the context.                                                                                                                                            |
| Email optional                    | **Type** String **Description** If specified, email address used for notification instead of the user's address.                                                                                     |
| EndDate default value: 20790606   | **Type** DateTime **Description** Assignment end date.                                                                                                                                               |
| IsDenied default value: false     | **Type** Boolean **Description** Profile denied to the user.                                                                                                                                         |
| Profile required                  | **Type** Int64 **Description** Identifier of the profile.                                                                                                                                            |
| StartDate default value: 19000101 | **Type** DateTime **Description** Assignment start date.                                                                                                                                             |
| User required                     | **Type** Int64 **Description** Identifier of the user.                                                                                                                                               |

# Access Control

- #### [AccessControlPermission](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [AccessControlPropertyGroup](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [AccessControlRule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [AssignedProfile](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [OpenIdClient](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [Profile](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [ProfileContext](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
- #### [ProfileRuleContext](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)

# OpenIdClient

OpenIdClient declares an Open Id Connect clientId/secret to call the Usercube API. All the
configurations need at least one clientId used by all the jobs on the agent side to call the server.

Only the hashed secret is kept in the configuration. The clear version is only known by the API
callers.

The secret must be strong enough to protect access to the API.

The good practice is generating a random secret, for example a 32 characters string, from a tool
like KeePass. Each clientId must have it's own secret. The tool
[Usercube-New-OpenIDSecret](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)
can be used to generate secrets and their hashes.

Each clientId must have a scope of responsibility. The _Profile_ and _ContextId_ properties assign a
required Profile and an optional Profile Context.

## Examples

The following code declares a clientId with the Administrator profile.

```

<OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />

```

The following code example declares a clientId with the RoleOfficerByCategory profile, restricted to
the profile context defined below. The ContextId property must reference the Id of an existing
Profile Context. Profile contexts don't have identifiers, so to avoid recalculation of the
ProfileContext's Id property on configuration deployment, the Id should be declared manually as
below. To be valid, it must be lower or equal to -2.

```

<OpenIdClient Identifier="RoleOfficerByCategory" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="Role Officer by Category" Profile="RoleOfficerByCategory" ContextId="-2" /><ProfileContext Id="-2" Category="IT Administration" D0="ORG0003" />

```

## Properties

| Property                | Details                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Context optional        | **Type** Int64 **Description** Id of the ProfileContext used to further restrict the client scope of responsibility |
| DisplayName_L1 required | **Type** String **Description** Name that will be Displayed on the screen                                           |
| ExpirationDate optional | **Type** DateTime **Description** After this date, the client is no longer usable                                   |
| HashedSecret required   | **Type** String **Description** HashedPassword of client                                                            |
| Identifier required     | **Type** String **Description** Client login name and name                                                          |
| Profile required        | **Type** Int64 **Description** Profile linked with the client                                                       |

# Profile

Profile defines a user profile linked to permissions in Usercube. Profiles work with Access Control
Rule and Profile Rule to describe who can do what.

## Examples

```

<Profile Identifier="Administrator" DisplayName_L1="Administrator"/>

```

## Properties

| Property                         | Details                                                                                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional          | **Type** String **Description** Display name of the profile in language 1 (up to 16).                                                                                             |
| Identifier required              | **Type** String **Description** Profile identifier                                                                                                                                |
| IsComponent default value: false | **Type** Boolean **Description** If true, assess the profile as being a component profile. That means it can be used to build a new profile through the composite profile method. |

# ProfileContext

ProfileContext contains the dimensions values used to define the connected users scope of
responsibility. They are stored as part of Assigned Profiles and are evaluated within Access Control
Rule filters.

## Examples

The following code example declares a new profile context based on a category and a dimension.
Profile contexts don't have identifiers, so to avoid recalculation of the ProfileContext Id property
on configuration deployment, the Id should be declared manually as below. To be valid, it must be
lower or equal to -2.

```

<ProfileContext Id="-2" Category="IT Administration" D0="ORG0003" />

```

## Properties

| Property                         | Details                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Category optional                | **Type** Int64 **Description** Category in which the assignment is restricted.                                                 |
| CompositeRole optional           | **Type** Int64 **Description** CompositeRole in which the assignment is restricted.                                            |
| D0 optional                      | **Type** Int64 **Description** Dimension 0 Id, specifies the scope in which the assignment is restricted. Going from 0 to 127. |
| IsAutomatic default value: false | **Type** Boolean **Description** Context automatically created by task Usercube-Set-InternalUserProfiles.                      |
| ResourceType optional            | **Type** Int64 **Description** ResourceType in which the assignment is restricted.                                             |
| SingleRole optional              | **Type** Int64 **Description** SingleRole in which the assignment is restricted.                                               |

# ProfileRuleContext

Defines the context in which the rule will be evaluated.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_User" IsAppliedToRoot="false"><ProfileRule Profile="Administrator" SubExpression="c#:user:return user.Organization.Code_Organisation == "SRV46";" B0="Organization:Code"/></ProfileRuleContext>
```

## Properties

| Property                            | Type    | Description                                                                                            |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| EntityType optional                 | Int64   | When ResourceType is not used, identifier of the entity type from which the expressions are evaluated. |
| IsAppliedToRoot default value: true | Boolean | The dimensions are queried from the user's information.                                                |
| ResourceType optional               | Int64   | The resourceType of the assignedResourcetypes on which the rule is going to be applied on.             |
| RootBinding optional                | Int64   | Binding to apply on the user resource before executing the root expression(cf Profile Rule).           |
| SubBinding optional                 | Int64   | Binding to apply on the user resource before executing the sub expression(cf Profile Rule).            |

## Child Element: ProfileRule

Defines the rule to assign a profile to user when matched.

### Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User:ManagedOrganizations" IsAppliedToRoot="false">    <ProfileRule Profile="Manager" B0="Directory_Organization:Id" /></ProfileRuleContext>
```

### Properties

| Property                      | Type    | Description                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B0 optional                   | Int64   | Represents the first dimension binding definition. The 127 other dimension bindings can be referred to by 127 more parameters from B1 to B3V following the base32hex convention. See the [ Base32 Parameter Names ](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/index.md) topic for additional information. |
| IsDenied default value: false | Boolean | Profile denied to the user when matched.                                                                                                                                                                                                                                                                                          |
| Profile required              | Int64   | Identifier of the profile rule.                                                                                                                                                                                                                                                                                                   |
| RootExpression optional       | String  | C# expression to apply on the source entity type of the context resource type. See the [ Expressions ](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md) topic for additional information.                                                                                                        |
| SubExpression optional        | String  | C# expression to apply on the target entity type of the context resource type. See the [ Expressions ](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md) topic for additional information.                                                                                                        |
