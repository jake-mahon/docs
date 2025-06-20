# AccessCertificationCampaignPolicy

This object defines sets of reviewers. Campaigns are created for one of the defined set only. The
default policy always exists.

## Properties

| Property                | Details                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the campaign policy in language 1 (up to 16). |
| Identifier required     | **Type** String **Description** Policy identifier                                             |

# AccessCertificationDataFilter

When running an Access Certification Campaign, this object defines the scope of assignments of
entitlements to certify for a given Access Certification Campaign. It filters based on the specific
entitlements attributes.

## Properties

| Property                                               | Details                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Campaign required                                      | **Type** Int64 **Description** The associated campaign.                                                                                                                                                                                                                                                      |
| Category optional                                      | **Type** Int64 **Description** Specifies the category targeted by the filter.                                                                                                                                                                                                                                |
| IncludeCompositeRoles default value: false             | **Type** Boolean **Description** `true` to include the composite roles in the certification.                                                                                                                                                                                                                 |
| IncludeDeniedPermissions default value: true           | **Type** Boolean **Description** Filters items with denied permissions from Access Certification Campaign.                                                                                                                                                                                                   |
| IncludeDoubleValidation default value: true            | **Type** Boolean **Description** `true` to include the assignments of entitlements with two validations in the certification.                                                                                                                                                                                |
| IncludeManualAssignmentNotAllowed default value: true  | **Type** Boolean **Description** `true` to include in the certification the resources that cannot be requested manually, i.e. those from [resource types](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) with `ApprovalWorkflowType` set to `ManualAssignmentNotAllowed`. |
| IncludeNestedCategories default value: false           | **Type** Boolean **Description** When a category is used as filter, all its nested categories are also included in the campaign.                                                                                                                                                                             |
| IncludeNoValidation default value: true                | **Type** Boolean **Description** `true` to include the assignments of entitlements without validation in the certification.                                                                                                                                                                                  |
| IncludeResourceNavigations default value: false        | **Type** Boolean **Description** `true` to include the resource navigations in the certification.                                                                                                                                                                                                            |
| IncludeResourceScalars default value: false            | **Type** Boolean **Description** `true` to include the resource scalars in the certification.                                                                                                                                                                                                                |
| IncludeResourceTypes default value: false              | **Type** Boolean **Description** `true` to include the resource types in the certification.                                                                                                                                                                                                                  |
| IncludeSimpleValidation default value: true            | **Type** Boolean **Description** `true` to include the assignments of entitlements with one validation in the certification.                                                                                                                                                                                 |
| IncludeSingleRoles default value: false                | **Type** Boolean **Description** `true` to include the single roles in the certification.                                                                                                                                                                                                                    |
| IncludeTripleValidation default value: true            | **Type** Boolean **Description** `true` to include the assignments of entitlements with three validations in the certification.                                                                                                                                                                              |
| IncludeWorkflowStateApproved default value: true       | **Type** Boolean **Description** `true` to include the manually approved assignments of entitlements in the certification.                                                                                                                                                                                   |
| IncludeWorkflowStateFound default value: true          | **Type** Boolean **Description** `true` to include the reconciled assignments of entitlements in the certification.                                                                                                                                                                                          |
| IncludeWorkflowStateHistory default value: true        | **Type** Boolean **Description** `true` to include the preexisting approved assignments of entitlements in the certification.                                                                                                                                                                                |
| IncludeWorkflowStatePolicyApproved default value: true | **Type** Boolean **Description** `true` to include the automatically approved assignments of entitlements in the certification.                                                                                                                                                                              |
| LatestCertifiedLimitDate optional                      | **Type** DateTime **Description** If specified, only assignments of entitlements not certified since.                                                                                                                                                                                                        |
| ResourceType optional                                  | **Type** Int64 **Description** Specifies the resource type targeted by the filter.                                                                                                                                                                                                                           |
| Tags optional                                          | **Type** String **Description** Tags of the roles targeted by the campaign filter. The tag separator is ¤.                                                                                                                                                                                                   |
| TargetedRisk optional                                  | **Type** Int64 **Description** If set, filters on the owner risk.                                                                                                                                                                                                                                            |

# AccessCertificationOwnerFilter

When running an Access Certification Campaign, this object defines the scope of assignments of
entitlements to certify for a given Access Certification Campaign. It filters based on the
attributes of entitlements owner.

## Properties

| Property                                  | Details                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Campaign required                         | **Type** Int64 **Description** The associated campaign.                                                                                                                                                                                                                                                                                  |
| D0 optional                               | **Type** Int64 **Description** Identifier of the dimension 0 (up to 3V in the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)) that filters the owners targeted by the access certification campaign.                                                                                   |
| IndividualOwner optional                  | **Type** Int64 **Description** If set, filters on the owner.                                                                                                                                                                                                                                                                             |
| L0 default value: false                   | **Type** Boolean **Description** `true` to include all the hierarchy beneath the dimension 0. **Note:** this setting can be used only if the corresponding [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) was declared with `IsHierarchical` set to `true` and with a `ParentProperty`. |
| MinimalRiskScore optional                 | **Type** Int32 **Description** If set, filters only owners above given risk.                                                                                                                                                                                                                                                             |
| OwnerLastModificationDate optional        | **Type** DateTime **Description** Date such that the identities to be certified will be those for which the value of the `OwnerLastModificationDateBinding` property was modified since then. **Note:** must be set together with `OwnerLastModificationDateBinding`.                                                                    |
| OwnerLastModificationDateBinding optional | **Type** Int64 **Description** Binding of the property whose owner will be part of the campaign's targets, if the property's value was modified since `OwnerLastModificationDate`. **Note:** must be set together with `OwnerLastModificationDate`. **Note:** the properties calculated by Identity Manager cannot be used.              |
| TargetedRisk optional                     | **Type** Int64 **Description** If set, filters on the owner risk.                                                                                                                                                                                                                                                                        |

# Access Certification

- [ AccessCertificationCampaignPolicy ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ AccessCertificationDataFilter ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ AccessCertificationOwnerFilter ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# AccessControlPermission

AccessControlPermission identifies the access permissions to a specific Identity Manager feature.

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

# Access Control Rule

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
Access Control Rule that defines the users scope of responsibility in the Identity Manager
UI/Workflows.

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

![Access Control Filter Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/accesscontrolfilter_schema.webp)

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
the current user to authenticate to Identity Manager.

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

![Matching Assigned Profile](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/assignedprofile_example_v603.webp)

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

| Property                           | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | Int64                       | Binding of the property whose value is to be checked to restrict the application of the rule's permissions. **NOTE:** The binding must be based on the entity type defined in the access control rule.                                                                                                                                                                                                  |
| Category default value: false      | Boolean                     | True to compare the value specified by the binding to the categories of the current user's assigned profiles.                                                                                                                                                                                                                                                                                           |
| CompositeRole default value: false | Boolean                     | True to compare the value specified by the binding to the composite roles of the current user's assigned profiles. See the [ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                     |
| CurrentUser default value: false   | Boolean                     | True to compare the value specified by the binding to the identifier of the account used by the current user to authenticate to Identity Manager. **NOTE:** The current user is the owner of the profile, allowed by the access control rule to perform an action and/or receive a notification. `CurrentUser` is tightly linked to the configuration of the `SelectUserByIdentityQueryHandlerSetting`. |
| Dimension optional                 | Int64                       | Identifier of the dimension whose value(s), from the user's assigned profiles, are to be compared to the value specified by the binding. See [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and [ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topics for additional information.              |
| Group optional                     | String                      | Group that the filter is part of. The access control rule filters the permissions by using the union (OR) of all filter groups, and the intersection (AND) of all filters within a group. **NOTE:** When not specified, the filter is part of the default group.                                                                                                                                        |
| Operator default value: 0          | AccessControlFilterOperator | Comparison operator. 0 - Equals. 1 - NotEquals.                                                                                                                                                                                                                                                                                                                                                         |
| ResourceType default value: false  | Boolean                     | True to compare the value specified by the binding to the resource types of the current user's assigned profiles. See the [ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                      |
| SingleRole default value: false    | Boolean                     | True to compare the value specified by the binding to the single roles of the current user's assigned profiles. See the [ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                        |
| Value optional                     | String                      | Hard coded value to be compared to the value specified by the binding.                                                                                                                                                                                                                                                                                                                                  |

# Assigned Profile

An assigned profile allows or denies to a user a scope of responsibility in Identity Manager.

Each assigned profile gives one profile and one profile context to a user. A user can have up to 10
assigned profiles.

For a given user, all the assigned profiles are matched against all the configured access control
rules to compute the user's permissions in Identity Manager.

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

- [ AccessControlPermission ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ AccessControlPropertyGroup ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Profile Context ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# OpenIdClient

OpenIdClient declares an OpenID Connect clientId/secret to call the Identity Manager API. All the
configurations need at least one clientId used by all the jobs on the agent side to call the server.

Only the hashed secret is kept in the configuration. The clear version is only known by the API
callers.

The secret must be strong enough to protect access to the API.

The good practice is generating a random secret, for example a 32 characters string, from a tool
like KeePass. Each clientId must have it's own secret. The tool
[ Usercube-New-OpenIDSecret ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) can be
used to generate secrets and their hashes.

Each clientId must have a scope of responsibility. The _Profile_ and _ContextId_ properties assign a
required Profile and an optional Profile Context.

## Examples

The following code declares a clientId with the Administrator profile.

                    ```

<OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />

````


The following code example declares a clientId with the RoleOfficerByCategory profile, restricted to the profile context defined below. The ContextId property must reference the Id of an existing Profile Context. Profile contexts don't have identifiers, so to avoid recalculation of the ProfileContext's Id property on configuration deployment, the Id should be declared manually as below. To be valid, it must be lower or equal to -2.

                    ```

<OpenIdClient Identifier="RoleOfficerByCategory" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" DisplayName_L1="Role Officer by Category" Profile="RoleOfficerByCategory" ContextId="-2" /><ProfileContext Id="-2" Category="IT Administration" D0="ORG0003" />

````

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

Profile defines a user profile linked to permissions in Identity Manager. Profiles work with Access
Control Rule and Profile Rule to describe who can do what.

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

# Profile Context

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
| IsAutomatic default value: false | **Type** Boolean **Description** Context automatically created by task Identity Manager-Set-InternalUserProfiles.              |
| ResourceType optional            | **Type** Int64 **Description** ResourceType in which the assignment is restricted.                                             |
| SingleRole optional              | **Type** Int64 **Description** SingleRole in which the assignment is restricted.                                               |

# Profile Rule Context

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

| Property                      | Type    | Description                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B0 optional                   | Int64   | Represents the first dimension binding definition. The 127 other dimension bindings can be referred to by 127 more parameters from B1 to B3V following the base32hex convention. See the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional information. |
| IsDenied default value: false | Boolean | Profile denied to the user when matched.                                                                                                                                                                                                                                                                                    |
| Profile required              | Int64   | Identifier of the profile rule.                                                                                                                                                                                                                                                                                             |
| RootExpression optional       | String  | C# expression to apply on the source entity type of the context resource type. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                          |
| SubExpression optional        | String  | C# expression to apply on the target entity type of the context resource type. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                          |

# Business Intelligence

- [ Universe ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Universe

Universes constitute the basis for the configuration of a new model that we will call universe
model. Users can then exploit it, through the Query module and/or Power BI, to generate graphic
reports.

## Examples

##### Basic universe

The following example builds a universe called `Universe1`:

```

<Universe Identifier="Universe1" DisplayName_L1="Universe 1" >

    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" /></Universe>

```

![Universe - Basic Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexampledisplaynames.webp)

When getting Identity Manager data in
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/access-governance/reporting/power-bi-integration.md),
we see the following:

![Universe (Display Names)](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnamedisplayname.webp)

##### Basic universe with identifiers instead of display names

The following example builds a universe called `Universe1` with identifiers as labels instead of
display names:

```

<Universe Identifier="Universe1" DisplayName_L1="Universe 1" ColumnNamesMode="Identifier" >    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" />    </Universe>

```

![Universe - Basic Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexample.webp)

When getting Identity Manager data in
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/access-governance/reporting/power-bi-integration.md),
we see the following:

![Universe (Identifiers)](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnameidentifier.webp)

## Properties

| Property                                   | Details                                                                                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColumnNamesMode default value: DisplayName | **Type** UniverseColumnNamesMode **Description** Type of label to be displayed as the column names in Power BI, for this universe. `0` - DisplayName: display name of entity instances. `1` - Identifier: identifier of entity instances. |
| DisplayName_L1 optional                    | **Type** String **Description** Display name of the universe in language 1 (up to 16).                                                                                                                                                    |
| Identifier required                        | **Type** String **Description** Identifier of the universe.                                                                                                                                                                               |

## Child Element: Association Instance

An association instance represents, within a Universe, the occurrence in the model of an
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Properties

| Property                   | Details                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Association required       | **Type** Int64 **Description** Identifier of the entity association, in Identity Manager's entity model, that corresponds to the association instance.                                                                                                                                      |
| Direction default value: 0 | **Type** Direction **Description** Direction of the association between the two entity instances. It must be the same direction as between the two entity types specified in these entity instances. `0` - Both directions. `1` - From the instance 1 to 2. `2` - From the instance 2 to 1. |
| Instance1 required         | **Type** Int64 **Description** Identifier of the entity instance number one.                                                                                                                                                                                                                |
| Instance2 required         | **Type** Int64 **Description** Identifier of the entity instance number two.                                                                                                                                                                                                                |

## Child Element: Entity Instance

An entity instance represents, within a Universe, the occurrence in the model of an
[ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Properties

| Property                      | Details                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 optional       | **Type** String **Description** Display name of the entity instance in language 1 (up to 16).                                              |
| EntityType required           | **Type** Int64 **Description** Identifier of the entity type, in Identity Manager's entity model, that corresponds to the entity instance. |
| FilterEntityProperty optional | **Type** Int64 **Description** Entity property used as filter (FilterProperty must be a navigation property to EntityProperty)             |
| FilterEntityType optional     | **Type** Int64 **Description** Entity type used as filter (FilterProperty must be a navigation property to EntityType)                     |
| FilterProperty optional       | **Type** Int64 **Description** Property used to filter entity type's instance.                                                             |
| FilterResourceType optional   | **Type** Int64 **Description** Resource type used as filter (FilterProperty must be a navigation property to ResourceType)                 |
| FilterValue optional          | **Type** String **Description** Constant value used as filter.                                                                             |
| Identifier required           | **Type** String **Description** Identifier of the entity instance.                                                                         |
| IsHidden default value: false | **Type** Boolean **Description** `true` if the entity instance is to be hidden in Power BI.                                                |

# Configuration

- [Scaffoldings](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)

# Agent

Contains all the running agents.

## Properties

| Property                | Details                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the agent in language 1 (up to 16).    |
| Identifier required     | **Type** String **Description** Agent Identifier.                                      |
| State default value: 0  | **Type** Int32 **Description** Agent Status ("Unknown"=0, "Online"=1 and "Offline"=2). |
| URI optional            | **Type** String **Description** Agent URI.                                             |

# Connection

A connection represents a link between a [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and a connection
package.

## Examples

The following example creates a connection for the previously created connector `AD`, using the
package `Usercube.AD@0000001` with only the export task and not the fulfill task.

```

<Connection Connector="AD" DisplayName_L1="Connection Active Directory" Identifier="ADExportFulfillment" Package="Usercube.AD@0000001" DeactivationExportFulfill="Fulfill"/>

```

We will need to configure the connection settings in the `appsettings.agent.json` file, by adding a
`ADExportFulfillment` part in the `Connections` section, for example:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADExportFulfillment": {
      "Servers": [
        {
          "Server": "contoso.server.com",
          "BaseDN": "DC=contoso,DC=com"
        }
      ],
      "AuthType": "Basic",
      "Login": "Contoso",
      "Password": "ContOso$123456789",
      "Filter": "(objectclass=*)",
      "EnableSSL": "true"
    },
    ...
  }
}
```

Details about these settings can be found in Identity Manager's
[References: Connectors](/docs/identitymanager/6.2/integration/connectors/connector-catalog/index.md).

## Properties

| Property                                   | Details                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector required                         | **Type** Int64 **Description** Identifier of the linked connector. **Note:** a connection can be used by one and only one connector.                                                                                                                                                                                                |
| DeactivationExportFulfill default value: 0 | **Type** DeactivationExportFulfill **Description** For a connection having a package which implements both export and fulfill, this option can deactivate either the export or the fulfill part. `0` - **None**: keeps both parts. `1` - **Export**: deactivates export. `2` - **Fulfill**: deactivates fulfill.                    |
| DisplayName_L1 required                    | **Type** String **Description** Display name of the connection in language 1 (up to 16).                                                                                                                                                                                                                                            |
| Identifier required                        | **Type** String **Description** Unique identifier of the connection. It must start with a letter followed by up to 441 characters, chosen from the following set: point, dash, letter, or number. **Warning:** identifiers are case insensitive, for example the identifiers `adexport` and `ADEXPORT` cannot exist simultaneously. |
| Package required                           | **Type** Enumeration **Description** Identifier of the linked connection package which defines the connection's capabilities and technologies to export and/or fulfill data.                                                                                                                                                        |

## Child Element: Transformation

A connection transformation is optional, but can be needed to adjust the Excel files, output of
[ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) from Excel export connections, before
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). The
following operations are possible:

- filtering out given rows;
- adding/removing days from specific date properties;
- merging columns together.

### Examples

#### Edit dates

The following example sets all users' end dates to the end of the day instead of the morning. This
way, the end dates of users' permissions will be managed more easily.

Technically speaking, Identity Manager implements a sort of extra-task between the export and
prepare-synchronization tasks of HR synchronization. The CSV files produced by the export task of
the connection `Directory` are to be transformed: Identity Manager will add 1 day to all dates
between 1900 and 2100, contained in the `ContractEndDate`, `PositionEndDate` and `EndDate` columns
of the `Directory_UserRecord` table.

This date edition goes the other way around when loading data back to your systems: if Identity
Manager adds a few days when synchronizing, then it removes the same few days when using the
synchronized data.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="ContractEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="PositionEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="EndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />
</Connection>

```

#### Filter out rows

The following example filters the CSV files produced by the export of the `Directory` connection, in
order to keep only German sites, i.e. the rows where `Identifier` starts with `DE_`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="WhereValue" Table="Directory_Site" Column="Identifier" WhereOperator="StartsWith" WhereValue="DE_" />
</Connection>

```

#### Merge columns together

Consider the situation where users' organizations are defined in 4 levels.

The following example merges the `Company`, `Subsidiary`, `Department` and `Team` columns of the
`Directory_UserRecord` table, output of the export of the `Directory` connection, in order to
concatenate the 4 properties into a single `FullOrganization` property.

Setting `RemoveEmpty` to `true` means that rather than having an organization such as
`Contoso//HR/Payroll`, we will have `Contoso/HR/Payroll`.

Setting `RemoveDuplicates` to `true` means that rather than having an organization such as
`Contoso/Contoso/HR/Payroll`, we will have `Contoso/HR/Payroll`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="FullOranization" InputColumn="Company" InputColumn2="Subsidiary" InputColumn3="Department" InputColumn4="Team" ConcatSeparator="/" RemoveEmpty="true" RemoveDuplicates="true" />
</Connection>

```

### Properties

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedDays optional        | **Type** Float **Description** Number of days to add to the date column to be transformed, specified in `Column`, when the transformation type is `TransformDate`. The value can be negative, for example `-0.5` removes 12 hours from the date.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Column optional           | **Type** String **Description** Column (case-sensitive) used as input of the filtering and the date editing transformations, and as output of the merging transformation. When defining an output, `Column` can be an existing column or a column to be created.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ConcatSeparator optional  | **Type** String **Description** Separator used between the concatenated values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| DatePattern optional      | **Type** String **Description** Format of the transformed dates to be stored when the original object is not a date, when the transformation type is `TransformDate`. **Note:** for example we could need this property when using CSV files which store everything as strings, including dates.                                                                                                                                                                                                                                                                                                                                                                                            |
| InputColumn optional      | **Type** String **Description** Column (case-sensitive) used as input when the transformation type is `TransformDate`, and as part of the input when the transformation type is `ConcatColumns`. **Note:** required for `ConcatColumns`. **Note:** when not specified for `TransformDate`, `Column` is used as input.                                                                                                                                                                                                                                                                                                                                                                       |
| InputColumn2 optional     | **Type** String **Description** Second (up to fifth) input column (case-sensitive) when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MaxYear optional          | **Type** Int32 **Description** Year after which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MinYear optional          | **Type** Int32 **Description** Year before which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| RemoveDuplicates optional | **Type** Boolean **Description** `true` to keep only one of two identical and successive values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RemoveEmpty optional      | **Type** Boolean **Description** `true` to ignore empty values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SortValues optional       | **Type** Boolean **Description** `true` to sort the concatenated values by alphabetical order, when the transformation type is `ConcatColumns`. **Note:** concatenated values are sorted after duplicates are removed, when relevant.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Table optional            | **Type** String **Description** Table on which the transformation is to be applied. **Note:** must be of the format `<connectionIdentifier>_<datasetName>` (case-sensitive).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Type required             | **Type** ConnectionTransformationType **Description** Type of the transformation: **ConcatColumns**: concatenates `InputColumn` columns into `Column` with a separator defined in `ConcatSeparator`, potentially with additional transformation options among `RemoveDuplicates`, `RemoveEmpty`, `SortValues`. **TransformDate**: adds or removes a given number of days defined in `AddedDays` to/from the date stored in `InputColumn` or `Column`, only for dates between `MinYear` and `MaxYear`, in order to be stored in `Column` in the format defined by `DatePattern`. **WhereValue**: filters the rows based on a comparison with the `WhereOperator` and `WhereValue` arguments. |
| WhereOperator optional    | **Type** ConnectionTransformationWhereValueOperator **Description** Operator of the comparison that filters out rows from the CSV file(s), when the transformation type is `WhereValue`: `Equals`; `NotEquals`; `Contains`; `CotContains`; `StartsWith`; `EndsWith`; `Regex`.                                                                                                                                                                                                                                                                                                                                                                                                               |
| WhereValue optional       | **Type** String **Description** Value (case-sensitive) that the content of `Column` will be compared to, when the transformation type is `WhereValue`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Connection Table

A ConnectionTable, linked to its ConnectionColumns, represents a potential Export output.

## Properties

| Property             | Details                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| Connection required  | **Type** Int64 **Description** The Id of the Connection having the ConnectionTable. |
| DisplayName optional | **Type** String **Description** The name displayed for the ConnectionTable.         |
| Identifier required  | **Type** String **Description** The identifier of the ConnectionTable.              |
| Path optional        | **Type** String **Description** Path to the schema of the ConnectionTable.          |

## Child Element: Column

Connection columns correspond to the attributes existing in a specific external system and retrieved
through its schema. They are linked to a connection table which can hold several connection columns.
Connection columns provide an assistance to the input of properties in entity types to ensure that
the attribute names are valid.

### Properties

| Property                           | Details                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName optional               | **Type** String **Description** Name displayed for the column.                                                                                                                                                             |
| ForeignColumn optional             | **Type** Int64 **Description** Defines the id of the foreign key if provided by the system.                                                                                                                                |
| Identifier required                | **Type** String **Description** Identifier of the column.                                                                                                                                                                  |
| IsMultivalued default value: false | **Type** Boolean **Description** Defines if the attribute is multi-valued.                                                                                                                                                 |
| KeyType default value: 0           | **Type** ConnectionColumnKeyType **Description** Defines the key type of the column. - 0: not a key - 1: primary key - 2: unique key                                                                                       |
| Path optional                      | **Type** String **Description** Allows to regroup columns based on a criteria. For example, for an LDAP system, the path is the value of the attribute objectClass.                                                        |
| ValueLength default value: 0       | **Type** Int32 **Description** Maximum length of the attribute value.                                                                                                                                                      |
| ValueType default value: 0         | **Type** ConnectionColumnValueType **Description** Defines the format of the attribute value. - 0: String - 1: Bytes - 2: Int32 - 3: Int64 - 4: DateTime - 5: Bool - 6: Guid - 7: Double - 8: Binary - 9: Byte - 10: Int16 |

# Connector

Connectors provide the means by which Identity Manager communicates with managed platforms,
applications and systems. They describe how the data from these systems are mapped to the
[Entity Model](/docs/identitymanager/6.2/reference/entity-model.md).

A connector in most case represents an application model. It is composed of entities and
associations.

> For example we can define an HR connector, with the following entities: Person, Department,
> Function, Location, etc. and with the following associations: Person-Department, Person-Site,
> Person-Manager(Person), etc.

A connector is used to synchronize each of its entities and associations in Identity Manager's
physical model. A connector is defined with:

- [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md);
- [ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md);
- [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
  [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to link the entity types and
  associations to the corresponding files and columns containing the exported data from the managed
  system.

## Examples

The following example creates a `HR` connector on the agent called `Local` previously declared by an
[ Agent ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) element.

We create the right [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to use the connector as a
[ CSV ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/database-connectors.md)aiming to export HR CSV files into
new CSV files in Identity Manager's format.

The [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) model the resources as `HR_Person` or
`HR_Organization`, defining properties.

The [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) link the entity types to the source
files.

The [ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) creates a link between the two
entity types.

The [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) links the association to
the source files.

```

  <Connector Identifier="HR" DisplayName_L1="HR" Agent="Local" />  <Connection Connector="HR" DisplayName_L1="HR Organization" Package="Usercube.CSV.Complete@0000001" Identifier="HROrganizations"/>  <Connection Connector="HR" DisplayName_L1="HR Person" Package="Usercube.CSV.Complete@0000001" Identifier="HRPeople"/>  <EntityType Identifier="HR_Person" DisplayName_L1="HR - User">    <Property Identifier="Managed_organizations" DisplayName_L1="Managed organizations" Type="Int64" />    <Property Identifier="Assistant_of_organizations" DisplayName_L1="Assistant of organizations" Type="Int64" />    <Property Identifier="Employee_Id" DisplayName_L1="Employee Id" IsKey="true" TargetColumnIndex="0" Type="String" />    <Property Identifier="First_name" DisplayName_L1="First name" TargetColumnIndex="7" Type="String" />    <Property Identifier="Last_name" DisplayName_L1="Last name" TargetColumnIndex="8" Type="String" />    <Property Identifier="Birth_date" DisplayName_L1="Birth date" TargetColumnIndex="9" Type="String" />    <Property Identifier="Birth_name" DisplayName_L1="Birth name" TargetColumnIndex="13" Type="String" />    <Property Identifier="Personal_title" DisplayName_L1="Personal title" TargetColumnIndex="12" Type="String" />    <Property Identifier="Start_date" DisplayName_L1="Start date" TargetColumnIndex="10" Type="String" />    <Property Identifier="End_date" DisplayName_L1="End date" TargetColumnIndex="14" Type="String" />    <Property Identifier="VIP" DisplayName_L1="VIP" TargetColumnIndex="15" Type="String" />    <Property Identifier="Leave" DisplayName_L1="Leave" TargetColumnIndex="16" Type="String" />    <Property Identifier="Title_name" DisplayName_L1="Title name" TargetColumnIndex="1" Type="String" />    <Property Identifier="Location_name" DisplayName_L1="Site name" TargetColumnIndex="4" Type="String" />    <Property Identifier="Organization_name" DisplayName_L1="Organization name" TargetColumnIndex="2" Type="String" />    <Property Identifier="Organization" DisplayName_L1="Organization" TargetColumnIndex="131" Type="Int64" />  </EntityType>   <EntityType Identifier="HR_Organization" DisplayName_L1="HR - Department">    <Property Identifier="Identifier" DisplayName_L1="Code" IsKey="true" TargetColumnIndex="0" Type="String" />    <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="1" Type="String" />    <Property Identifier="Name_fr" DisplayName_L1="Name (fr)" TargetColumnIndex="3" Type="String" />    <Property Identifier="Name_de" DisplayName_L1="Name (de)" TargetColumnIndex="4" Type="String" />    <Property Identifier="Phone_number" DisplayName_L1="Phone number" TargetColumnIndex="5" Type="String" />    <Property Identifier="Fax_number" DisplayName_L1="Fax number" TargetColumnIndex="6" Type="String" />    <Property Identifier="Organization_type" DisplayName_L1="Organization type" TargetColumnIndex="7" Type="String" />    <Property Identifier="Location" DisplayName_L1="Site" TargetColumnIndex="8" Type="String" />    <Property Identifier="Parent_organization" DisplayName_L1="Parent organization" TargetColumnIndex="129" Type="Int64" />    <Property Identifier="Manager" DisplayName_L1="Manager" TargetColumnIndex="128" Type="Int64" />    <Property Identifier="Assistant" DisplayName_L1="Assistant" TargetColumnIndex="130" Type="Int64" />    <Property Identifier="Persons" DisplayName_L1="Persons" Type="Int64" />  </EntityType>  <EntityTypeMapping Identifier="HR_Person" Connector="HR" ConnectionTable="hr_people">    <Property Identifier="Employee_Id" ConnectionColumn="Employee Id" IsPrimaryKey="true" />    <Property Identifier="First_name" ConnectionColumn="First name" />    <Property Identifier="Last_name" ConnectionColumn="Last name" />    <Property Identifier="Birth_date" ConnectionColumn="Birth date" />    <Property Identifier="Birth_name" ConnectionColumn="Birth name" />    <Property Identifier="Personal_title" ConnectionColumn="Personal title" />    <Property Identifier="Start_date" ConnectionColumn="Start date" />    <Property Identifier="End_date" ConnectionColumn="End date" />    <Property Identifier="VIP" ConnectionColumn="VIP" />    <Property Identifier="Leave" ConnectionColumn="Leave" />    <Property Identifier="Title_name" ConnectionColumn="Title name" />    <Property Identifier="Location_name" ConnectionColumn="Location name" />    <Property Identifier="Organization_name" ConnectionColumn="Organization name" />  </EntityTypeMapping>  <EntityTypeMapping Identifier="HR_Organization" Connector="HR" ConnectionTable="hr_organizations">    <Property Identifier="Identifier" ConnectionColumn="Identifier" IsPrimaryKey="true" />    <Property Identifier="Name" ConnectionColumn="Name" />    <Property Identifier="Name_fr" ConnectionColumn="Name (fr)" />    <Property Identifier="Name_de" ConnectionColumn="Name (de)" />    <Property Identifier="Phone_number" ConnectionColumn="Phone number" />    <Property Identifier="Fax_number" ConnectionColumn="Fax number" />    <Property Identifier="Organization_type" ConnectionColumn="Organization type" />    <Property Identifier="Location" ConnectionColumn="Location" />  </EntityTypeMapping>  <EntityAssociation Identifier="HR_Person_Organization" DisplayName_L1="Organization" IsProperty1Collection="true" Property1="HR_Organization:Persons" Property2="HR_Person:Organization" />  <EntityAssociationMapping Identifier="HR_Person_Organization" Column1="Organization" Column2="Employee Id" Connector="HR" ConnectionTable="hr_people" EntityPropertyMapping1="HR_Organization:Identifier" EntityPropertyMapping2="HR_Person:Employee_Id" />

```

## Properties

| Property                                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent optional                                  | **Type** Int64 **Description** Identifier of the agent where the connector's tasks are launched.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CompleteJob default value: 0                    | **Type** JobIntegrationRule **Description** Indicates how the connector should be used in the complete job (scaffolding): `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the complete job, setting that connector to `Used` for the complete job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding.          |
| DisplayName_L1 required                         | **Type** String **Description** Connector DisplayName.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Identifier required                             | **Type** String **Description** Connector Identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| IncrementalJob default value: 0                 | **Type** JobIntegrationRule **Description** Indicates how the connector should be used in the incremental job (scaffolding): `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the incremental job, setting that connector to `Used` for the incremental job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding. |
| IsDeactivated default value: false              | **Type** Boolean **Description** Indicates that the export and the provisioning are deactivated for this connector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaximumDeletedLines default value: 100          | **Type** Int32 **Description** Deleted lines threshold. Sets the maximum number of resources that can be removed from the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| MaximumInsertedLines default value: 100         | **Type** Int32 **Description** Inserted lines threshold. Sets the maximum number of resources that can be added into the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MaximumLinkDeletedLines default value: 1000     | **Type** Int32 **Description** Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                |
| MaximumLinkInsertedLines default value: 1000    | **Type** Int32 **Description** Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| MaximumUpdatedLines default value: 100          | **Type** Int32 **Description** Updated lines threshold. Sets the maximum number of resources that can be modified within the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MaxLinkPercentageDeletedLines default value: 5  | **Type** Int32 **Description** Deleted association links threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| MaxLinkPercentageInsertedLines default value: 5 | **Type** Int32 **Description** Inserted association links threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| MaxPercentageDeletedLines default value: 5      | **Type** Int32 **Description** Deleted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| MaxPercentageInsertedLines default value: 5     | **Type** Int32 **Description** Inserted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaxPercentageUpdatedLines default value: 5      | **Type** Int32 **Description** Updated lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Entity Association Mapping

Contains all the [ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that can be
materialized in the Identity Manager physical model. An association mapping can be established
between two properties of the same entity type mapping or between two properties of different entity
type mappings having the same connector. See the [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic to learn
how to configure an EntityAssociationMapping.

## Properties

| Property                                    | Details                                                                                                                                                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C0 optional                                 | **Type** String **Description** In a ServiceNow connector, generic column used during provisioning to map the property to be provisioned (target property from the entity association mapping). This column stores the name of the table in ServiceNow in which the property exists. |
| Column1 required                            | **Type** String **Description** The column of EntityPropertyMapping1 in the association data source.                                                                                                                                                                                 |
| Column2 required                            | **Type** String **Description** The column of EntityPropertyMapping2 in the association data source.                                                                                                                                                                                 |
| ConnectionTable optional                    | **Type** String **Description** Association data source containing Column1 and Column2. Example: ConnectionTable="datasource"                                                                                                                                                        |
| Connector required                          | **Type** Int64 **Description** Id of the connector to which it is linked.                                                                                                                                                                                                            |
| EntityPropertyMapping1 required             | **Type** Int64 **Description** The ID of mapping of the property use to establish the association. The property must be a unique key.                                                                                                                                                |
| EntityPropertyMapping2 required             | **Type** Int64 **Description** The ID of mapping of the property use to establish the association. The property must be a unique key.                                                                                                                                                |
| MaximumDeletedLines default value: 0        | **Type** Int32 **Description** Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the entity type when running the synchronization job.                                                                                  |
| MaximumInsertedLines default value: 0       | **Type** Int32 **Description** Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the entity type when running the synchronization job.                                                                                   |
| MaxPercentageDeletedLines default value: 0  | **Type** Int32 **Description** Deleted association links threshold in percent.                                                                                                                                                                                                       |
| MaxPercentageInsertedLines default value: 0 | **Type** Int32 **Description** Inserted association links threshold in percent.                                                                                                                                                                                                      |

# Entity Type Mapping

An entity type mapping links a given [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
properties with the source columns of the corresponding managed system. The entity type mapping
specifies the related [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and the path to the CSV source file which
contains, or will contain, the data exported from the managed system. Each of its Entity Type
Mapping properties will define the corresponding source column and specific options.

An entity type mapping shares the same identifier as its related entity type.

See the example of a whole [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) containing an entity type mapping.

## Properties

| Property                                    | Details                                                                                                                                                                                                                                              |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C0 optional                                 | **Type** String **Description** In a Microsoft Entra ID connector (formerly Microsoft Azure AD), generic column used to map the entities to be exported. By default, Identity Manager exports: `user`; `group`; `directoryRole`; `servicePrincipal`. |
| ConnectionTable optional                    | **Type** String **Description** Name of the CSV file which contains, or will contain, the exported data from the corresponding entity type.                                                                                                          |
| Connector optional                          | **Type** Int64 **Description** Identifier of the related connector.                                                                                                                                                                                  |
| MaximumDeletedLines default value: 0        | **Type** Int32 **Description** Deleted lines threshold. Sets the maximum number of resources that can be removed from the entity type when running the synchronization job.                                                                          |
| MaximumInsertedLines default value: 0       | **Type** Int32 **Description** Inserted lines threshold. Sets the maximum number of resources that can be added into the entity type when running the synchronization job.                                                                           |
| MaximumUpdatedLines default value: 0        | **Type** Int32 **Description** Updated lines threshold. Sets the maximum number of resources that can be modified within the entity type when running the synchronization job.                                                                       |
| MaxPercentageDeletedLines default value: 0  | **Type** Int32 **Description** Deleted lines threshold in percent.                                                                                                                                                                                   |
| MaxPercentageInsertedLines default value: 0 | **Type** Int32 **Description** Inserted lines threshold in percent.                                                                                                                                                                                  |
| MaxPercentageUpdatedLines default value: 0  | **Type** Int32 **Description** Updated lines threshold in percent.                                                                                                                                                                                   |

## Child Element: Property

Contains all the [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties that can be
synchronized into Identity Manager physical model. Each mapping share the same id as its
corresponding property in the entity type.

### Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConnectionColumn optional         | **Type** String **Description** Specifies the corresponding column in the entity type data source.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Format optional                   | **Type** String **Description** The format of the attribute in the external system. Ex: 1601date for LDAP Date.                                                                                                                                                                                                                                                                                                                                                                                            |
| IsPrimaryKey default value: false | **Type** Boolean **Description** `true` if the property is designated to be the unique and immutable key that uniquely identifies any resource from the entity type, during synchronization. Each entity type mapping must have a primary key. It prevents duplicates and null resources.                                                                                                                                                                                                                  |
| IsUniqueKey default value: false  | **Type** Boolean **Description** `true` if the property is designated to be one of the unique keys that uniquely identify any resource from the entity type in an association/navigation, during synchronization. Each entity type mapping can have up to three unique keys, in addition to the mapping key that already acts as such. **Note:** AD synchronization requires the `dn` property to have either `IsUniqueKey` or `EntityType` > `Property` > `IsKey` set to `true` (key property in the UI). |

# Connectors

- [ Agent ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Connection Table ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Password Reset Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Password Reset Settings

This set of password reset settings contains the configuration to perform password reset operations
such as change, reset, etc.

## Examples

The following example declares a password reset settings.

```

    <PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
        BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
        NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
        NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
        Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
        AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" />

```

### Password length and counts

The following example makes Identity Manager generate a password with at least 12 characters in
total, at least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

<PasswordResetSettings AutoGenerate="true" GeneratedLength="12" GeneratedLowerCaseCharsCount="8" GeneratedUpperCaseCharsCount="4" GeneratedDigitCharsCount="2" GeneratedSymbolCharsCount="2"/>

```

As the total of all counts (16) is greater than the length (12), the password length will be the
count total (16).

The following example makes Identity Manager generate a password with at least 12 characters in
total, at least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

<PasswordResetSettings AutoGenerate="true" GeneratedLength="8" GeneratedLowerCaseCharsCount="1" GeneratedUpperCaseCharsCount="1" GeneratedDigitCharsCount="1" GeneratedSymbolCharsCount="1"/>

```

As the total of all counts (4) is lower than the length (8), the password will be generated with 8
characters, among them 1 lowercase character, 1 uppercase character, 1 digit, 1 symbol, and 4 more
random characters.

The generated password's strength can also be checked via a regular expression (regex) through
`StrengthCheck`. Thus, the following example makes Identity Manager generate a password with at
least 9 characters including at least one digit, one lowercase letter, one uppercase and one special
character.

```

<PasswordResetSettings AutoGenerate="true" StrengthCheck="'^..........*$','^.*[0-9].*$', '^.*[a-z].*$', '^.*[A-Z].*$', '^.*[^A-Za-z0-9].*$'"/>

```

## Properties

| Property                                      | Details                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoGenerate default value: false             | **Type** Boolean **Description** `true` to make Identity Manager generate the password automatically.                                                                                                                                                                                                                               |
| BeneficiaryEmailBinding optional              | **Type** Int64 **Description** Binding to the email address property whose password is to be reset.                                                                                                                                                                                                                                 |
| BeneficiaryFullNameBinding optional           | **Type** Int64 **Description** Binding to the full name property of the user(s) whose password is to be reset.                                                                                                                                                                                                                      |
| DefaultPassword optional                      | **Type** String **Description** Default password to set when `AutoGenerate` is set to `false`.                                                                                                                                                                                                                                      |
| DisableNotifications default value: false     | **Type** Boolean **Description** `true` to disable the mailing of notifications concerning password reset.                                                                                                                                                                                                                          |
| GeneratedDigitCharsCount default value: 2     | **Type** Int32 **Description** Number of digit characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                       |
| GeneratedLength default value: 12             | **Type** Int32 **Description** Length of the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                                           |
| GeneratedLowerCaseCharsCount default value: 6 | **Type** Int32 **Description** Number of lower case characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                  |
| GeneratedSymbolCharsCount default value: 2    | **Type** Int32 **Description** Number of symbol characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                      |
| GeneratedUpperCaseCharsCount default value: 2 | **Type** Int32 **Description** Number of upper case characters in the password generated by Identity Manager when `AutoGenerate` is set to `true`.                                                                                                                                                                                  |
| Identifier required                           | **Type** String **Description** Identifier of the set of password reset settings.                                                                                                                                                                                                                                                   |
| Mode default value: 0                         | **Type** Int64 **Description** Mode used by the password reset service. `0` - Disabled. `1` - One-Way. `2` - Two-Way.                                                                                                                                                                                                               |
| MustChange default value: false               | **Type** Boolean **Description** `true` to force users to modify their passwords on the first login.                                                                                                                                                                                                                                |
| NotificationCC optional                       | **Type** String **Description** Email address to set as CC recipient of all password reset notifications.                                                                                                                                                                                                                           |
| NotifiedEmailBinding optional                 | **Type** Int64 **Description** Binding to the email address property of the person to be notified.                                                                                                                                                                                                                                  |
| NotifiedFullNameBinding optional              | **Type** Int64 **Description** Binding to the full name property of the person to be notified.                                                                                                                                                                                                                                      |
| StrengthCheck optional                        | **Type** String **Description** Regular expression (regex) that generated passwords must match, when `AutoGenerate` is set to `true`. **Note:** the strength of passwords set manually by users can be configured via [ Password Tests Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). |

# Easy Vista Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EasyVistaResourceTypeMapping Identifier="Badge_User_NominativeUser" Connection="EasyVistaManual" TicketSynchroIsNotAvailable="true" RecipientId="EVEmployeeId" CatalogCode="42" UrgencyId="1" ImpactId="2" SeverityId="3" Title="C:/identitymanagerDemo/Conf/EasyVista/TitleTemplate.txt" Description="C:/identitymanagerDemo/Conf/EasyVista/DescriptionTemplate.txt" />
```

## Properties

| Property                                         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CatalogCode required                             | String  | Code of the catalog. It is possible to define three catalog codes, one for each provisioning action (add, modify, delete) by separating them with ¤, for example 42¤25¤43.                                                                                                                                                                                                              |
| Connection required                              | String  | Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                             |
| RecipientId required                             | String  | Identifier of the ticket's recipient.                                                                                                                                                                                                                                                                                                                                                   |
| Description optional                             | String  | File path of the template used for the generation of the ticket description.                                                                                                                                                                                                                                                                                                            |
| ImpactId optional                                | String  | [Impact](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#impact) of the ticket.                                                                                                                                                                                                                                        |
| SeverityId optional                              | String  | [Severity level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#severity-level) of the ticket.                                                                                                                                                                                                                        |
| TicketSynchroIsNotAvailable default value: false | Boolean | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information. |
| Title optional                                   | String  | File path of the template used for the generation of the ticket title.                                                                                                                                                                                                                                                                                                                  |
| UrgencyId optional                               | String  | [Urgency level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#urgency-level) of the ticket.                                                                                                                                                                                                                          |

# Resource Type Mappings

A resource type mapping links resources sharing the same intent and the same authorization system
with the source columns of the corresponding managed system. The mapping specifies the related
connector and the path to the CSV source file which contains, or will contain, the data exported
from the managed system.

Here is a list of ResourceType Mapings:

- [Azure AD Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Microsoft Entra ID in Identity Manager, for
  provisioning purposes.

- [Easy Vista Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Easy Vista in Identity Manager, for provisioning
  purposes.

- [Ldap Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Ldap in Identity Manager, for provisioning
  purposes.

- [Manual Provisioning Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Manual Provisioning in Identity Manager, for
  provisioning purposes.

- [Okta Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Okta in Identity Manager, for provisioning
  purposes.

- [Sap Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Sap in Identity Manager, for provisioning
  purposes.

- [Scim Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Scim in Identity Manager, for provisioning
  purposes.

- [Service Now Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Service Now in Identity Manager, for provisioning
  purposes.

- [Share Point Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The set of parameters to map the properties of Share Point in Identity Manager, for provisioning
  purposes.

# Ldap Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<LdapResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="ToManager" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">  <Property Property="dn" IsDNProperty="true" />  <Property Property="parentdn" IsParentProperty="true" />  <Property Property="cn" IsRDNProperty="true" />  <Property Property="userAccountControl" IsUserAccountControlProperty="true" />  <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  <Property Property="Categories" MultiValueSeparator=";" /></LdapResourceTypeMapping>
```

### Multiple default object classes

The following example configures a whole set of settings for the LDAP_Entry_NominativeUser resource
type, including several default object classes.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceTypeMapping Identifier="LDAP_Entry_NominativeUser" DefaultObjectClass="inetOrgPerson
organizationalPerson" ... />
```

## Properties

| Property                                 | Type    | Description                                                                                                                                                      |
| ---------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | String  | Identifier of the corresponding connection.                                                                                                                      |
| DefaultObjectClass required              | String  | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc. Multiple default object classes are separated with <br/>. |
| RDNAttributeIdentifier required          | String  | Identifier of the RDN attribute used by the provisioner.                                                                                                         |
| PasswordResetSetting optional            | String  | Identifier of the corresponding password reset setting.                                                                                                          |
| UsePermissiveModify default value: false | Boolean | True to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid).      |
| UseTreeDelete default value: false       | Boolean | True to use the control option that enables deleting all the sub-trees within a directory via a single deletion request.                                         |

# Manual Provisioning Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ManualProvisioningResourceTypeMapping Identifier="Access_Badge_Nominative" Connection="AccessManual" TicketSynchroIsNotAvailable="true"/>
```

## Properties

| Property                             | Type    | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                  | String  | Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                             |
| TicketSynchroIsNotAvailable optional | Boolean | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information. |

# Azure AD Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AzureADResourceTypeMapping Identifier="EntraID_DirectoryObject_Guest" Connection="EntraIDExportFulfillment" DefaultObjectClass="users" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://demo.usercube.com" PasswordResetSetting="ToSponsor">  <Property Property="objectid" IsDNProperty="true" />  <Property Property="groups" DataSourceBacklinkColumnName="member" />  <Property Property="displayName" IsDisplayNameProperty="true" />  <Property Property="mail" IsMailProperty="true" /></AzureADResourceTypeMapping>
```

## Properties

| Property                                 | Type           | Description                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | String         | Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                            |
| DefaultObjectClass required              | String         | Default object class used by the provisioner, for example: person, organizationalPerson, or user, etc. Multiple default object classes are separated by: &#xA;.                                                                                                                                                                        |
| InvitationCustomizedMessageBody optional | String         | Message that will replace Azure's default message in the invitation. Only used when InvitationMode is set to MicrosoftInvitation.                                                                                                                                                                                                      |
| InvitationMessageLanguage optional       | String         | Language of the invitation's message. When not specified, the message is in English. Only used when InvitationMode is set to MicrosoftInvitation.                                                                                                                                                                                      |
| InvitationMode default value: None       | InvitationMode | Mode of the invitation email sent during the creation of a guest Microsoft Entra ID account. None — nothing is sent. MicrosoftInvitation — an invitation email is sent to another person to initiate the external user's guest account in Microsoft Entra ID according to the related password reset setting (one-way, two-way, etc.). |
| InvitationRedirectUrl optional           | String         | URL that will be displayed in the invitation email. Required when InvitationMode is set to MicrosoftInvitation.                                                                                                                                                                                                                        |
| PasswordResetSetting optional            | String         | Identifier of the corresponding password reset setting. Required when InvitationMode is set to None and DefaultObjectClass set to users.                                                                                                                                                                                               |

# Okta Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Properties

| Property                      | Type   | Description                                                                   |
| ----------------------------- | ------ | ----------------------------------------------------------------------------- |
| Connection required           | String | Identifier of the corresponding connection.                                   |
| DefaultObjectClass optional   | String | Default object class used by the provisioner, for example users, groups, etc. |
| PasswordResetSetting optional | String | Identifier of the corresponding password reset setting.                       |

# Sap Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SapResourceTypeMapping Identifier="SAP_User_NominativeUser" Connection="SAPConnection" PasswordResetSetting="ToSelf" DefaultObjectClass="sapuser">  <Property Property="sapid" IsDNProperty="true" />  <Property Property="roles" DataSourceBacklinkColumnName="member" /></SapResourceTypeMapping>
```

## Properties

| Property                      | Type   | Description                                                                                                                                                  |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection required           | String | Identifier of the corresponding connection.                                                                                                                  |
| DefaultObjectClass optional   | String | Default object class used by the provisioner, for example person, organizationalPerson, user, etc. Multiple default object classes are separated with <br/>. |
| PasswordResetSetting optional | String | Identifier of the corresponding password reset setting.                                                                                                      |

# Scim Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScimResourceTypeMapping Identifier="CyberArk_Shadow_NominativeUser" DefaultObjectClass="Users" Connection="SCIMCyberArkExportFulfillment">    <Property Property="CyberArk_id" IsDNProperty="true" /></ScimResourceTypeMapping>
```

## Properties

| Property                    | Type   | Description                                                                                                                                                      |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required         | String | Identifier of the corresponding connection.                                                                                                                      |
| DefaultObjectClass optional | String | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc. Multiple default object classes are separated with <br/>. |

# Service Now Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

Any resource type linked to a ServiceNow connection must be configured with a set of parameters to
map the properties in Identity Manager with those in ServiceNow, for provisioning purposes.

Below is an example of an incident ticket in ServiceNow, where relevant properties (from Identity
Manager's perspective) are emphasized:

![ServiceNow Ticket Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/servicenowresourcetypemapping/servicenow_example.webp)

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ServiceNowResourceTypeMapping Identifier="ServiceNow_Entry_NominativeUser" Connection="ServiceNowExportFulfillment" PasswordResetSetting="ToSelf" DefaultObjectClass="sys_user">
  <Property Property="sys_id" IsDNProperty="true" />
</ServiceNowResourceTypeMapping>
```

## Properties

| Property                                         | Type          | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                              | String        | Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                                             |
| DefaultObjectClass optional                      | String        | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc. Multiple default object classes are separated with <br/>.                                                                                                                                                                                                                        |
| PasswordResetSetting optional                    | String        | Identifier of the corresponding password reset setting.                                                                                                                                                                                                                                                                                                                                 |
| TicketAdditionalInformation optional             | String        | Information to add at the end of the description for all tickets created for this resource type. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                        |
| TicketCallerId optional                          | String        | Attribute that corresponds to the identifier of the "caller" person in ServiceNow. Required when using the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                                 |
| TicketCategory optional                          | String        | Category in which new tickets will be created in ServiceNow for this resource type. **NOTE:** Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                           |
| TicketImpact default value: Low                  | TicketImpact  | Impact of the ticket in ServiceNow: Low; Medium; or High. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                                                               |
| TicketSubCategory optional                       | String        | Subcategory in which new tickets will be created in ServiceNow for this resource type. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                                  |
| TicketSynchroIsNotAvailable default value: false | Boolean       | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified. Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information. |
| TicketUrgency default value: Low                 | TicketUrgency | Urgency of the ticket in ServiceNow: Low; Medium; High. **NOTE:** Only used with the package for tickets. See the [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.                                                                                                                                       |

# Share Point Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
Usercube/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/servicenowresourcetypemapping/index.html
```

# XML Configuration Schema

## Overview

The XML configuration schema shows some similarities with the database schema but they are not the
same.

## Family Entity Listing

- [ Access Certification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Connectors ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Configuration ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ User Interface ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Jobs ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Metadata ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Notifications ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Provisioning ](/docs/identitymanager/6.2/identity-management/provisioning/index.md)
- [ Reporting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Resources ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Access Certification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Business Intelligence ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Workflows ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

# Jobs

A job is defined via the `Job` tag to orchestrate tasks together, in order to perform specific
actions.

All [ Tasks ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) types are child elements of jobs.

- [ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Tasks ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Job

A job is a succession of tasks, to be launched and potentially scheduled.

After launching a job, its progress information will be inserted in the UJ_Job Instances table.

## Examples

The following example creates a job made of two tasks that apply role mappings, the first for the AD
connector, the second for SAP. Launching this job means launching both tasks successively.

The launch order is induced by the reading from top to bottom of all tasks in the job.

                    ```

<Job Identifier="ApplyRoleMappings" DisplayName_L1="10: Generate Roles/Rules" >
<BuildRoleModelTask Identifier="AD_ApplyRoleMappings" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" />
<BuildRoleModelTask Identifier="SAP_ApplyRoleMappings" Connector="SAP" DisplayName_L1="SAP - Generate Roles/Rules" /></Job>

````


### Task override

An existing task can be called with an ```Override``` suffix in order to launch the task, but with slight changes in its properties. Then the override task must be configured with the identifier of the original task and the properties that differ from the original task.

Suppose that after configuring a synchronization job in complete mode, we want to configure the exact same one in incremental mode.

As the incremental mode is configured via ```Dirty``` set to ```1```, this property is the only one to change to switch from complete mode to incremental mode.

The following example creates a task ```UpdateClassification``` to be used in the AD synchronization job in complete mode. Then, instead of creating a second task for the incremental mode, we choose to configure the incremental job as follows.

                    ```

<UpdateClassificationTask Identifier="UpdateClassification" DisplayName_L1="AD - Users Classification">  <TaskEntityType EntityType="AD_Entry"/></UpdateClassificationTask><Job Identifier="AD_Synchronization_Delta" DisplayName_L1="10: AD - Synchronization (delta)" Agent="Local">  ...
  <UpdateClassificationTaskOverride Identifier="UpdateClassification" Dirty="1">
</Job>

````

### Dependent tasks

The following example creates a job where the task `Microsoft Entra ID - Data Collect` is launched
after `Microsoft Entra ID - Extraction` only if `Microsoft Entra ID - Extraction` produces an output
and does not end up blocked or in an error state.

                    ```

<Job Identifier="AzureAD_Synchronization" DisplayName_L1="10: Microsoft Entra ID (formerly Microsoft Azure AD) - Synchronization" Agent="Local">
<ExportTask Identifier="AzureAD_Synchro" Agent="Local" Connection="AzureAD_Export_Fulfillment" OpenIdClient="Job" DisplayName_L1="Microsoft Entra ID - Extraction" ContinueOnError="1"/>
<PrepareSynchronizationTask Type="Changes" DisplayName_L1="Microsoft Entra ID - Data Collect" Connector="AzureAD" Agent="Local" OpenIdClient="Job">
<TaskDependsOnTask ParentTask="AzureAD_Synchro"/> </PrepareSynchronizationTask> ... </Job>

````


Most synchronization tasks are dependant on one another like this. This way, an error in a synchronization task will cut short the rest of the synchronization tasks. But it does not stop the other tasks in the job, for example the synchronization of another connector, or tasks that are independent from synchronization.

### Complete job

The following example shows a typical configuration of the complete job.

                    ```

<Job Identifier="SynchroAllConnectorComplete" DisplayName_L1="Synchronization Daily (Complete Mode)" Agent="Local">  <Step Identifier="ExportADWithIgnoreCookie"/>  <Step Identifier="AD_PrepareSynchronizationComplete"/>  <Step Identifier="AD_Synchronization"/>  <Step Identifier="Export_AzureADWithIgnoreCookie"/>  <Step Identifier="AzureAD_PrepareSynchronization"/>  <Step Identifier="AzureAD_Synchronization"/>  <Step Identifier="Export_LDAPEntry"/>  <Step Identifier="Export_LDAPMember"/>  <Step Identifier="LDAP_PrepareSynchronization"/>  <Step Identifier="LDAP_Synchronization"/>  <Step Identifier="SAB_PrepareSynchronization"/>  <Step Identifier="SAB_Synchronization"/>  <Step Identifier="HR_PrepareSynchronization"/>  <Step Identifier="HR_Synchronization"/>  <Step Identifier="Directory_PrepareSynchronizationChange"/>  <Step Identifier="Directory_SynchronizationChange"/>  <Step Identifier="Job_Recertification_Start"/>  <Step Identifier="Recertification_MarkDirty"/>  <Step Identifier="ComputeRoleModelSynchroDaily"/>  <Step Identifier="LDAP_Provisioning"/>  <Step Identifier="AzureAD_Provisioning"/>  <Step Identifier="AD_Fulfill"/>  <Step Identifier="LDAP_Fulfill"/>  <Step Identifier="AzureAD_Fulfill"/>  <Step Identifier="AD_Fulfill"/>  <Step Identifier="Fulfill_Workflow_Directory"/>  <Step Identifier="All_ComputeAllAssignedProfiles"/></Job>

````

## Properties

| Property                                 | Details                                                                                                                                                                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent optional                           | **Type** Int64 **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the job is to be launched on the server. **Warning:** all tasks in the job must be launched on the same agent or on the server. |
| CronTabExpression optional               | **Type** String **Description** Scheduling expressed using the [crontab syntax](https://docs.microsoft.com/azure/azure-functions/functions-bindings-timer?tabs=csharp#crontab-syntax).                                                                  |
| CronTimeZone default value: 0            | **Type** CronTimeZone **Description** Time zone used to compute the next occurrences according to the given cron expression. `0` - UTC `1` - ServerTime                                                                                                 |
| DisplayName_L1 required                  | **Type** String **Description** Display name of the job in language 1 (up to 16).                                                                                                                                                                       |
| Identifier required                      | **Type** String **Description** Unique identifier of the job.                                                                                                                                                                                           |
| IsConnectorJob default value: false      | **Type** Boolean **Description** Indicates that the job is specific to the connector configuration screen.                                                                                                                                              |
| IsIncremental default value: false       | **Type** Boolean **Description** Defines if a job is in incremental mode.                                                                                                                                                                               |
| IsInitializationJob default value: false | **Type** Boolean **Description** Indicates that the job is an initialization job.                                                                                                                                                                       |
| LogLevel default value: None             | **Type** LogLevel **Description** Level of details that will be displayed in the logger. Possible values are: `0` - Trace `1` - Debug `2` - Information `3` - Warning `4` - Error `5` - Critical `6` - None                                             |
| UserStartDenied default value: false     | **Type** Boolean **Description** `true` to deny the manual launch of the job.                                                                                                                                                                           |

## Child Element: Step

A step is simply an easy way to use an existing task in a job.

A job can be configured with as many steps as needed.

### Examples

The basic example of a job is equivalent to the following:

                    ```

<BuildRoleModelTask Identifier="AD_ApplyRoleMappings" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" /><BuildRoleModelTask Identifier="SAP_ApplyRoleMappings" Connector="SAP" DisplayName_L1="SAP - Generate Roles/Rules" /><Job Identifier="AD_Synchronization_Delta" DisplayName_L1="10: AD - Syncronization (delta)" Agent="Local">
<Step Identifier="AD_ApplyRoleMappings"> <Step Identifier="SAP_ApplyRoleMappings"></Job>

````


### Properties

| Property | Details |
| --- | --- |
| Level   default value: -1 | __Type__    Int32   __Description__   Grouping level of the tasks within the job. When executing a job, Identity Manager will launch simultaneously the tasks of a same ```Level```. Level-2 tasks are not launched before all level-1 tasks are achieved. |
| Task   required | __Type__    Int64   __Description__   Id of the task |
````

# Activity Instance Actor Task

Update all the actors of the workflows instances.

An activity Instance can have at most 20 actors.

## Examples

```

<ActivityInstanceActorTask Agent="Local" OpenIdClient="Job" DisplayName_L1="Update Actors for workflows instances"/>

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |

# Create Database Views Task

Generates entity model SQL views in the Identity Manager database. All views are prefixed by `zz_`.
This tool deletes all views starting by `zz_` and creates views from the entity model described in
the running configuration.

For every **EntityType**, a matching SQL view is created from the UR_Resource table.

## Examples

```

  <CreateDatabaseViewsTask Identifier="Create_Database_Views" Agent="Local" OpenIdClient="Job" DisplayName_L1="Create Database Views"/>

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |

# Export Task

Runs the specified connection's export.

## Examples

```

<ExportTask Identifier="AD_Export" Agent="Local" Connection="ADExportFulfillment" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)"/>

```

## Properties

| Property                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required                        | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                                                                                                                                                                                                                                               |
| DisplayName_L1 required               | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                      |
| OpenIdClient required                 | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                                                                                                                                                                         |
| Connection optional                   | **Type** String **Description** Identifier of the Connection in the appsettings.agent.json.                                                                                                                                                                                                                                                                                                                                             |
| ContinueOnError default value: false  | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                                                                                                                                                                          |
| Identifier optional                   | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                                                                                          |
| IgnoreCookieFile default value: false | **Type** Boolean **Description** Ignore the Cookie Files                                                                                                                                                                                                                                                                                                                                                                                |
| InitMode default value: false         | **Type** Boolean **Description** `true` to prevent Identity Manager from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: `UP_AssignedSingleRoles`, `UP_AssignedCompositeRoles`, `UP_AssignedResourceTypes`, `UP_AssignedResourceScalars`, `UP_AssignedResourceNavigations`, `UP_AssignedResourceBinaries` for `ComputeRoleModelTask` and only `UR_Resources` for `FulfillTask`. |

# Fulfill Task

Retrieves provisioning orders from the informed connector generated by
GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is possible to
launch it with a list of TaskResourceTypes.

## Examples

The following example reads all provisioning order concerning the `ServiceNow` connector to make the
changes in ServiceNow.

```

<FulfillTask Identifier="FulfillTestServiceNowConnector" Agent="Local" DisplayName_L1="Fulfill ServiceNow" OpenIdClient="Job" Connector="ServiceNow"/>

```

The following example reads all provisioning order concerning the `ServiceNow_Entry_NominativeUser`
resource type to make the changes in ServiceNow.

```

<FulfillTask Identifier="FulfillTestServiceNowWithResourceType" Agent="Local" DisplayName_L1="Fulfill ServiceNow" OpenIdClient="Job" >  <TaskResourceType ResourceType="ServiceNow_Entry_NominativeUser"/></FulfillTask>

```

### Ignore Archiving

While archiving data for audits is part of the main purposes of Identity Manager, some elements can
be prevented from being archived, for example during Identity Manager's installation and
initialization.

The following example reads all provisioning orders concerning the `InternalResources` connector to
open manual provisioning tickets in Identity Manager, without archiving the values prior to the
changes on resources.

```

<FulfillTask Identifier="FulfillInternalResources" Agent="Local" DisplayName_L1="Fulfill Internal Resources" OpenIdClient="Job" Connector="InternalResources" IgnoreHistorization="true" />

```

## Properties

| Property                                 | Details                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                  | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                |
| Agent optional                           | **Type** String **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the task is to be launched on the server. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| BatchSize default value: 0               | **Type** Int32 **Description** Block size for batch calculation.                                                                                                                                                                                                  |
| Connection optional                      | **Type** String **Description** Identifier of the Connection in the appsettings.agent.json.                                                                                                                                                                       |
| Connector optional                       | **Type** String **Description** Identifier of the connector involved in the task.                                                                                                                                                                                 |
| ContinueOnError default value: false     | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                    |
| Dirty optional                           | **Type** Boolean **Description** Option to tag resources inserted or updated by the internalResource with Dirty=true.                                                                                                                                             |
| Identifier optional                      | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                    |
| IgnoreHistorization default value: false | **Type** Boolean **Description** `true` to prevent Identity Manager from archiving the changes (resource creation, update, deletion) performed by the task for the `InternalResources` connector. The impacted table is `UR_Resources`.                           |
| OpenIdClient optional                    | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                   |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Details                                                |
| --------------------- | ------------------------------------------------------ |
| ResourceType required | **Type** Int64 **Description** Linked resourceType id. |

# Agent Tasks

- [ Activity Instance Actor Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Update the Actors for the workflows instances.

- [ Create Database Views Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Generates entity model SQL views in the Identity Manager database.

- [ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Runs the specified connection's export.

- [ Fulfill Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves provisioning orders from the informed connector generated by
  GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is
  possible to launch it with a list of TaskResourceTypes.

- [ Invoke Api Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Tool to launch any Identity Manager API.

- [ Invoke Aspects Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Call specific api in Identity Manager.

- [ Invoke Expression Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Launches on agent side a powershell script given as input.

- [Invoke Sql Command Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
  collection.

- [ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Cleanses exported CSV files.

# Invoke Api Task

Tool to launch any Identity Manager API.

## Examples

```

  <InvokeApiTask Agent="Local" ApiUrl="/api/Job/TaskResourceType?api-version=1.0&squery=select ResourceTypeId where JobId=1&path=/Jobs/TaskResourceType/Query&QueryRootEntityType=TaskResourceType" DisplayName_L1="Invoke Api" HttpCommand="Get" Identifier="InvokeApi" OpenIdClient="Job"/>

```

## Properties

| Property                | Details                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| ApiUrl required         | **Type** String **Description** The Identity Manager Api relative url. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Connection string to the Database                        |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| HttpCommand required    | **Type** HttpCommand **Description** Defines the ApiCommand (_Get_, _Put_, _Post_, or _Delete_)                                                                                           |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                           |
| Body optional           | **Type** String **Description** Path of the SQL file                                                                                                                                      |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                            |

# Invoke Aspects Task

Call specific api in Identity Manager.

## Properties

| Property                | Details                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required          | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                                                                                                                                                                                          |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                                 |
| OpenIdClient required   | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                                                                                                                    |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                                     |
| OutputPath optional     | **Type** String **Description** Path to save file. _Alternative definition_: If _TaskType_ is: - ProvisioningPolicyTask: Path to save the LDIF file, - CollectorTask: Path of the working directory, - CollectorChangesTask: Path of the working directory, - CollectorADDirSyncTask: Path of the working directory, - ProvisionerDownloadTask: Path of the destination directory, |

# Invoke Expression Task

Launches on agent side a powershell script given as input.

## Examples

```

  <InvokeExpressionTask Identifier="MyScript" DisplayName_L1="My Script" Agent="Local" InputPath="C:/Scripts/myScript.ps1" OpenIdClient="Job"/>

```

## Properties

| Property                             | Details                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required              | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                           |
| Agent optional                       | **Type** String **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the task is to be launched on the server. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                            |
| ContinueOnError default value: false | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                               |
| Identifier optional                  | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                               |
| InputPath optional                   | **Type** String **Description** Defines the input path. Alternative definition: If _TaskType_ is: - ProvisionerWorkflowTask: Path of the JSON file, - ConfigurationTask: Directory of the configuration to import, - ApiCallTask: Path of the JSON file, - SqlCmdTask: Path of the SQL file, |
| OpenIdClient optional                | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                              |

# Invoke Sql Command Task

Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
collection.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<InvokeSqlCommandTask Identifier="SQL_Command" DisplayName_L1="SQL Command" SQLCommand="SELECT id FROM uj_jobs" Agent="Local" OpenIdClient="Job" DatabaseIdentifier="UsercubeDemo" />
```

**NOTE:** The database Identifier attribute has a specific location where the connection strings for
the database identifiers need to be defined. See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)topic
for additional information.

## Properties

| Property                               | Type    | Description                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                | String  | Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                             |
| Agent optional                         | String  | Identifier of the agent on which the job will be launched. **NOTE:** When not specified, the task is to be launched on the server. _Remember,_ all jobs containing the task must be launched on the same agent or on the server.                                                                                                               |
| ContinueOnError default value: false   | Boolean | True if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                                                                                                                    |
| DatabaseIdentifier optional            | String  | Identifier of the Database to connect to                                                                                                                                                                                                                                                                                                       |
| Encoding optional                      | String  | Encoding for the output files. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                                   |
| Identifier optional                    | String  | Unique identifier of the task.                                                                                                                                                                                                                                                                                                                 |
| IsNotAQuery default value: false       | Boolean | To know if the SQL command is a query or not.                                                                                                                                                                                                                                                                                                  |
| IsolationLevel optional                | String  | Specifies the transaction locking behavior for the database connection.                                                                                                                                                                                                                                                                        |
| OpenIdClient optional                  | String  | Connection client for the task.                                                                                                                                                                                                                                                                                                                |
| OutputPath optional                    | String  | Path to save file. Alternative definition: If TaskType is: - ProvisioningPolicyTask: Path to save the LDIF file, - CollectorTask: Path of the working directory, - CollectorChangesTask: Path of the working directory, - CollectorADDirSyncTask: Path of the working directory, - ProvisionerDownloadTask: Path of the destination directory, |
| Provider optional                      | String  | The database provider.                                                                                                                                                                                                                                                                                                                         |
| ProviderAssemblyQualifiedName optional | String  | Database provider assembly qualified name.                                                                                                                                                                                                                                                                                                     |
| SQLCommand optional                    | String  | SQL Command to execute.                                                                                                                                                                                                                                                                                                                        |
| SQLInputFile optional                  | String  | Path of the SQL file.                                                                                                                                                                                                                                                                                                                          |
| Timeout default value: 0               | Int32   | Specify the timeout if the query need more 30 sec.                                                                                                                                                                                                                                                                                             |

# Prepare Synchronization Task

## View Behavior Details

The task reads files from the source directory, usually the temp
folder >[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
folder.

### Cleanse data

The following actions are performed on the _CSV source files_:

1. Remove columns that are not used in
   [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) or
   [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
2. Remove entries that have a null primary key.
3. Remove duplicates.
4. Sort entries according to the primary key.

The result of the _Prepare-Synchronization_ is stored in the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)directory
as three files:

- For every entity type of the relevant _Connector_ involved in an
  [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)> or an
  [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), a
  `.sorted.csv` file is generated, containing the final, cleansed and sorted result.
- Duplicates are kept in a separate `.duplicates.csv` file.
- Null primary key entries are kept in a separate `.nullpk.csv` file.

All files produced by the task are in the work folder > Collect directory.

### Compute changes

In _incremental_ mode, changes might need to be computed by the _Agent_:

- If the Export step has provided computed changes, no further process is required. The changes will
  be sent as-is to the server.
- If the Export step has provided a full extract of the managed systems, the
  _Prepare-Synchronization_ step computes changes. This computation is based on the result of the
  last data cleansing, generated by the previous _Prepare-Synchronization_, and stored in the
  `previous` folder in the
  [Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)directory.

For _incremental_ mode, it is recommended, whenever possible, to use managed systems to compute
changes. Dedicated workstations and knowledge of the inner data organization allow managed systems
to compute changes with performance that Identity Manager can't match. Using managed systems for
these operations avoids generating heavy files and alleviates Identity Manager's processing load.

The result is a set of clean lists of changes stored as a `.sorted.delta` file containing a
_command_ column. The _command_ column can take the following values:

- _insert_
- _update_
- _delete_
- _merge_

These values are instructions for the _Synchronization_ step to apply the changes to the database.

The `.sorted` file (that is, the **original** clean export file, **not** the changes) is stored in
the `previous` folder inside the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)directory.
It will be used as a reference for the next _incremental_ Prepare-Synchronization to compute the
changes, if needed.

Tampering with the `previous` folder content would result in false changes leading to false
computation. It would result in data corruption in the Identity Manager database. To restore the
Identity Manager database and reflect the managed system data updates, a _complete\_\_Sync Up_ would
be required.

### Prepare the server

At the beginning of every _Prepare-Synchronization_ process, the _Server_ is notified via HTTP.

Upon receiving the notification, the server creates a directory on its host environment, identified
by a unique GUID, to contain `.sorted` or `.sorted.delta` files that will be sent by the agent.

This is designed to prevent network errors that would cause an _incremental_ database update to
happen more than once.

This means that several _Export_ and _Prepare-Synchronization_ tasks can be executed simultaneously.
These tasks will be processed by the server one at a time, in the right order.

Any notification of a _complete_ Prepare-Synchronization would cancel the previous non-processed
_incremental_ Prepare-Synchronizations. As a _complete_ Prepare-Synchronization reloads the whole
database, it renders _incremental_ changes computation moot.

### Send clean exports

`.sorted` or `.sorted.delta` files are sent over HTTP to the _Server_ for the last step.

## Examples

```

<PrepareSynchronizationTask
    Identifier="HR_PrepareSynchronization"
    DisplayName_L1="HR PrepareSynchronization"
    OpenIdClient="Job"
    Connector="HR"
    Agent="Local"
    SynchronizationMode="Initial"
/>

```

## Properties

| Property                     | Details                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent required               | **Type** String **Description** Identifier of the agent on which the job will be launched. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| Connector required           | **Type** String **Description** Identifier of the connector involved in the task.                                                                                                         |
| DisplayName_L1 required      | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                        |
| OpenIdClient required        | **Type** String **Description** Connection client for the task.                                                                                                                           |
| SynchronizationMode required | **Type** DataCollectType **Description** Synchronization mode for collect and synchronization Task. List of Modes: - Initial = 0, - Complete = 1, - Incremental = 2                       |
| ColumnName optional          | **Type** String **Description** If there is a delta in the synchronization, specifies the column name which stores the command                                                            |
| Identifier optional          | **Type** String **Description** Unique identifier of the task.                                                                                                                            |
| Type default value: None     | **Type** PrepareSynchronizationType **Description** Define the type of PrepareSynchronization to launch the correct executable in job.                                                    |
| WorkingDirectory optional    | **Type** String **Description** Path of the working directory                                                                                                                             |

# Tasks

- [Agent Tasks](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

- [ Activity Instance Actor Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Update the Actors for the workflows instances.

- [ Create Database Views Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Generates entity model SQL views in the Identity Manager database.

- [ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Runs the specified connection's export.

- [ Fulfill Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves provisioning orders from the informed connector generated by
  GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is
  possible to launch it with a list of TaskResourceTypes.

- [ Invoke Api Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Tool to launch any Identity Manager API.

- [ Invoke Aspects Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Call specific api in Identity Manager.

- [ Invoke Expression Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Launches on agent side a powershell script given as input.

- [Invoke Sql Command Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
  collection.

- [ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Cleanses exported CSV files.

- [ Server Tasks ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

- [ Build Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Applies the role naming rules, i.e. generates single roles and navigation rules based on
  resources matching a given pattern.

- [ Compute Correlation Keys Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute
  Role Model to match the resources.

- [ Compute Risk Scores Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Update risk score with the risk settings.

- [ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The Compute Role Model will calculate the role model of all whose EntityTypes sources are
  included in the list of EntityTypes given in the start of this job.

- [ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  From a folder, retrieves all configuration xml files to calculate the configuration items to
  insert, update or delete.

- [ Fulfill Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves provisioning orders from the informed connector generated by
  GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is
  possible to launch it with a list of TaskResourceTypes.

- [Generate Provisioning Orders Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The provisioning task will recover all resources whose provisioningState is at 1 to build a list
  of JSON files containing all provisioning orders.

- [ Get Role Mining Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Role mining is the process of analyzing user-to-resource mapping data to determine or modify
  user permissions for role-based access control (RBAC) in an enterprise. In a business setting,
  roles are defined according to job competency, authority and responsibility.

- [ Get Role Mining Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Invoke Expression Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Launches on agent side a powershell script given as input.

- [ Invoke Sql Command Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
  collection.

- [ Maintain Indexes Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Index maintenance and statistics update for all database tables.

- [ Manage Configuration Indexes Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Manage indexes for items from configuration.

- [ Process Access Certification Items Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Process decisions on access certification items.

- [ Reset Valid From Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Initialize historization tables by setting each entity's first record `ValidFrom` value to
  0001-01-01 00:00:00.00.

- [ Save Pre-Existing Access Rights Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  During an initial installation of Identity Manager, data normally provided by Identity Manager
  or through a derogation in the User Interface is already present in the application system.

- [ Send Access Certification Notification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Notify assigned users having pending access certification items in campaign marked with
  `NotificationNeeded`.

- [ Send Notifications Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Task that sends a notification to each configured recipient.

- [ Send Role Model Notifications Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Task that sends a notification to all users who have pending roles to review, only for roles
  with a simple approval workflow, i.e. pending the validation 1 out of 1.

- [ Set Access Certification Reviewer Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Assign access certification items to users according to their profiles and the access control
  rules.

- [ Set Internal User Profiles Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Will execute the profile rules of the different resource types given in parameters to create,
  modify or delete profiles in automatic mode.

- [ Set Recently Modified Flag Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  When synchronizing in full or incremental mode, it is possible to optimize the compute
  performance of the role model by taking into account only the changes made by the
  synchronization.

- [ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves the files generated by the prepare-synchronization task to insert the data into the
  Identity Manager database.

- [ Update Access Certification Campaign Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`.

- [ Update Classification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Classifies a list of resources that are part of the resourceType data targets as an argument to
  this job.

- [ Update Entity Property Expressions Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Calculates either for all entities or for a list of entities the expressions and inserts the
  values in the database.

# Build Role Model Task

Applies the [ Role Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), also named
[ Create Roles in Bulk ](/docs/identitymanager/6.2/reference/index.md),
i.e. generates single roles and navigation rules based on resources matching a given pattern.

> For example, this task can transform AD groups with a special naming convention into roles.

## Examples

The following example applies all role naming rules linked to the AD connector.

```

<BuildRoleModelTask Identifier="AD_ApplyRoleNamingRules" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" />

```

## Properties

| Property                | Details                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16).                                     |
| Connector optional      | **Type** String **Description** Identifier of the connector whose role mappings / role naming rules are to be applied. |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                                                         |

# Compute Correlation Keys Task

The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute Role
Model to match the resources.

## Examples

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" AllEntityType="true" />

```

## Properties

| Property                           | Details                                                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required            | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                   |
| AllEntityType default value: false | **Type** Boolean **Description** Launch to all entityTypes for the expression task. _Alternative definition_: If _TaskType_ is: - TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSize default value: 0         | **Type** Int32 **Description** Block size for batch calculation.                                                                                                                     |
| Dirty default value: false         | **Type** Boolean **Description** Initiate use only dirty resources.                                                                                                                  |
| Identifier optional                | **Type** String **Description** Unique identifier of the task.                                                                                                                       |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Compute Risk Scores Task

Update risk score with the risk settings.

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Dirty default value: false | **Type** Boolean **Description** Initiate use only dirty resources.                |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Compute Role Model Task

This task applies all rules in the role model of all
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) whose source entity types are
specified as child elements of the task.

## Behavior Details

### Property creation/update

If the resource or property needs to be created or changed, the policy inserts a new line in one of
the following 3 tables:

- Assigned resource types
- Assigned resource scalars
- Assigned resource navigation

Their provisioning state will therefore increase to either 1 or 5.

If the resource already exists in the database, then the policy checks whether the existing value is
the same as the computed value. If the existing value is the same as the computed value, then the
provisioning state goes to 4.

### Notifications

Executing the `ComputeRoleModelTask` will modify some roles' workflow states, and it will send a
notification for each of these roles being:

- pending approval (1/1, 1/2, 2/2, 1/3, 2/3, 3/3);
- blocked because of a risk.

## Examples

The following example applies all rules in the role model concerning the entity types `HR_Service`,
`HR_Category`, `HR_Site` and `HR_Person`.

```

<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model">    <TaskEntityType EntityType="HR_Service"/>    <TaskEntityType EntityType="HR_Category"/>    <TaskEntityType EntityType="HR_Site"/>    <TaskEntityType EntityType="HR_Person"/></ComputeRoleModelTask>

```

### Ignore Archiving

While archiving data for audits is part of the main purposes of Identity Manager, some elements can
be prevented from being archived, for example during Identity Manager's installation and
initialization.

The following example is similar to the previous one, except that the values prior to the changes on
assigned single roles, composite roles, resource types, scalar or navigation properties, or
binaries, will not be stored in the database.

```

<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model" IgnoreHistorization="true">    <TaskEntityType EntityType="HR_Service"/>    <TaskEntityType EntityType="HR_Category"/>    <TaskEntityType EntityType="HR_Site"/>    <TaskEntityType EntityType="HR_Person"/></ComputeRoleModelTask>

```

## Properties

| Property                                              | Details                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required                               | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                 |
| BatchInsertSize default value: 0                      | **Type** Int32 **Description** Defines the batch insert size.                                                                                                                                                                                                                                                                                                      |
| BatchSelectSize default value: 0                      | **Type** Int32 **Description** Defines the batch select size.                                                                                                                                                                                                                                                                                                      |
| BlockAllResourceTypeProvisioning default value: false | **Type** Boolean **Description** `true` to force an additional mandatory review (on the **Provisioning Review** screen) of all provisioning orders for all resource types, no matter whether the resource types' `BlockProvisioning` boolean is set to `true` or `false`.                                                                                          |
| BlockProvisioning default value: false                | **Type** Boolean **Description** `true` to block the provisioning policy orders.                                                                                                                                                                                                                                                                                   |
| Dirty default value: false                            | **Type** Boolean **Description** Initiate use only dirty resources.                                                                                                                                                                                                                                                                                                |
| Identifier optional                                   | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                     |
| IgnoreHistorization default value: false              | **Type** Boolean **Description** `true` to prevent Identity Manager from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: `UP_AssignedSingleRoles`, `UP_AssignedCompositeRoles`, `UP_AssignedResourceTypes`, `UP_AssignedResourceScalars`, `UP_AssignedResourceNavigations`, `UP_AssignedResourceBinaries`. |
| LdifFilePath optional                                 | **Type** String **Description** Path to save the ldif file                                                                                                                                                                                                                                                                                                         |
| UseLdif default value: false                          | **Type** Boolean **Description** to simulate or not into a ldif file                                                                                                                                                                                                                                                                                               |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Deploy Configuration Task

From a folder, retrieves all configuration xml files to calculate the configuration items to insert,
update or delete.

## Examples

```

  <DeployConfigurationTask Identifier="Configuration" DisplayName_L1="Configuration" ConfigurationDirectory="C:/identitymanager/Conf"/>

```

## Properties

| Property                        | Details                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ConfigurationDirectory required | **Type** String **Description** Directory of the configuration to import                                                  |
| DisplayName_L1 required         | **Type** String **Description** Display name of the task in language 1 (up to 16).                                        |
| GeneratedCodeNamespace optional | **Type** String **Description** The namespace of the generated code (entities + writer).                                  |
| GeneratedCodePath optional      | **Type** String **Description** The path of the generated code (entities + writer).                                       |
| GeneratedFile optional          | **Type** String **Description** The path of the xml file in which all the configuration is generated by the scaffoldings. |
| Identifier optional             | **Type** String **Description** Unique identifier of the task.                                                            |

# Fulfill Task

Retrieves provisioning orders from the informed connector generated by
GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is possible to
launch it with a list of TaskResourceTypes.

## Examples

The following example reads all provisioning order concerning the `ServiceNow` connector to make the
changes in ServiceNow.

```

<FulfillTask Identifier="FulfillTestServiceNowConnector" Agent="Local" DisplayName_L1="Fulfill ServiceNow" OpenIdClient="Job" Connector="ServiceNow"/>

```

The following example reads all provisioning order concerning the `ServiceNow_Entry_NominativeUser`
resource type to make the changes in ServiceNow.

```

<FulfillTask Identifier="FulfillTestServiceNowWithResourceType" Agent="Local" DisplayName_L1="Fulfill ServiceNow" OpenIdClient="Job" >  <TaskResourceType ResourceType="ServiceNow_Entry_NominativeUser"/></FulfillTask>

```

### Ignore Archiving

While archiving data for audits is part of the main purposes of Identity Manager, some elements can
be prevented from being archived, for example during Identity Manager's installation and
initialization.

The following example reads all provisioning orders concerning the `InternalResources` connector to
open manual provisioning tickets in Identity Manager, without archiving the values prior to the
changes on resources.

```

<FulfillTask Identifier="FulfillInternalResources" Agent="Local" DisplayName_L1="Fulfill Internal Resources" OpenIdClient="Job" Connector="InternalResources" IgnoreHistorization="true" />

```

## Properties

| Property                                 | Details                                                                                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                  | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                |
| Agent optional                           | **Type** String **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the task is to be launched on the server. **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| BatchSize default value: 0               | **Type** Int32 **Description** Block size for batch calculation.                                                                                                                                                                                                  |
| Connection optional                      | **Type** String **Description** Identifier of the Connection in the appsettings.agent.json.                                                                                                                                                                       |
| Connector optional                       | **Type** String **Description** Identifier of the connector involved in the task.                                                                                                                                                                                 |
| ContinueOnError default value: false     | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                    |
| Dirty optional                           | **Type** Boolean **Description** Option to tag resources inserted or updated by the internalResource with Dirty=true.                                                                                                                                             |
| Identifier optional                      | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                    |
| IgnoreHistorization default value: false | **Type** Boolean **Description** `true` to prevent Identity Manager from archiving the changes (resource creation, update, deletion) performed by the task for the `InternalResources` connector. The impacted table is `UR_Resources`.                           |
| OpenIdClient optional                    | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                   |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Details                                                |
| --------------------- | ------------------------------------------------------ |
| ResourceType required | **Type** Int64 **Description** Linked resourceType id. |

# Generate Provisioning Orders Task

In the Assigned resource types, Assigned resource scalars, and Assigned resource navigation the
provisioning task will recover all resources whose provisioningState is at 1 to build a list of JSON
files containing all provisioning orders. This task can be started either with a connector or with a
resourceType list. Then changes the provisioningState of the resources concerned to 2.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<GenerateProvisioningOrdersTask Identifier="SAB_GenerateProvisioningOrder" DisplayName_L1="SAB GenerateProvisioningOrder">  <TaskResourceType ResourceType="Compte_SAB_Guest"/></GenerateProvisioningOrdersTask>
```

## Properties

| Property                               | Type    | Description                                        |
| -------------------------------------- | ------- | -------------------------------------------------- |
| DisplayName_L1 required                | String  | Display name of the task in language 1 (up to 16). |
| BatchInsertSize default value: 0       | Int32   | Specifies the number of orders by file.            |
| BatchSelectSize default value: 0       | Int32   | Defines the batch select size.                     |
| Connector optional                     | String  | Identifier of the connector involved in the task.  |
| ForceProvisioning default value: false | Boolean | True to block the provisioning policy orders.      |
| Identifier optional                    | String  | Unique identifier of the task.                     |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Type  | Description             |
| --------------------- | ----- | ----------------------- |
| ResourceType required | Int64 | Linked resourceType id. |

# Get Role Mining Task

Role mining is the process of analyzing user-to-resource mapping data to determine or modify user
permissions for role-based access control (RBAC) in an enterprise. In a business setting, roles are
defined according to job competency, authority and responsibility. The ultimate intent of role
mining is to achieve optimal security administration based on the role each individual plays within
the organization. This executable allows to highlight the RoleMining table as well as the different
rules to be applied in the role model so that it is optimal at the time T. The xml file contains 2
sql requests to link roles, dimensions and Owners to extract a table containing the grouping of
SingleRoles and CompositesRoles and set it up in the system.

## Examples

```

<GetRoleMiningTask DisplayName_L1="Apply Mining Rules">  <TaskEntityType EntityType="Directory_User"/></GetRoleMiningTask>

```

## Properties

| Property                         | Details                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required          | **Type** String **Description** Display name of the task in language 1 (up to 16).                                           |
| AllEntities default value: false | **Type** Boolean **Description** Apply role mining on all entities (otherwise list the entity types with the TaskEntityType) |
| Identifier optional              | **Type** String **Description** Unique identifier of the task.                                                               |
| IsSimulated default value: false | **Type** Boolean **Description** Apply results of role mining in simulation or not                                           |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Server Tasks

- [ Build Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Applies the role naming rules, i.e. generates single roles and navigation rules based on
  resources matching a given pattern.

- [ Compute Correlation Keys Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute
  Role Model to match the resources.

- [ Compute Risk Scores Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Update risk score with the risk settings.

- [ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The Compute Role Model will calculate the role model of all whose EntityTypes sources are
  included in the list of EntityTypes given in the start of this job.

- [ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  From a folder, retrieves all configuration xml files to calculate the configuration items to
  insert, update or delete.

- [ Fulfill Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves provisioning orders from the informed connector generated by
  GenerateProvisioningOrdersTask to make changes in a system. Instead of a connector it is
  possible to launch it with a list of TaskResourceTypes.

- [Generate Provisioning Orders Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  The provisioning task will recover all resources whose provisioningState is at 1 to build a list
  of JSON files containing all provisioning orders.

- [ Get Role Mining Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Role mining is the process of analyzing user-to-resource mapping data to determine or modify
  user permissions for role-based access control (RBAC) in an enterprise. In a business setting,
  roles are defined according to job competency, authority and responsibility.

- [ Invoke Expression Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Launches on agent side a powershell script given as input.

- [ Invoke Sql Command Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
  collection.

- [ Maintain Indexes Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Index maintenance and statistics update for all database tables.

- [ Manage Configuration Indexes Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Manage indexes for items from configuration.

- [ Process Access Certification Items Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Process decisions on access certification items.

- [ Reset Valid From Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Initialize historization tables by setting each entity's first record `ValidFrom` value to
  0001-01-01 00:00:00.00.

- [ Save Pre-Existing Access Rights Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  During an initial installation of Identity Manager, data normally provided by Identity Manager
  or through a derogation in the User Interface is already present in the application system.

- [ Send Access Certification Notification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Notify assigned users having pending access certification items in campaign marked with
  `NotificationNeeded`.

- [ Send Notifications Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Task that sends a notification to each configured recipient.

- [ Send Role Model Notifications Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Task that sends a notification to all users who have pending roles to review, only for roles
  with a <u>simple</u> approval workflow, i.e. pending the validation 1 out of 1.

- [ Set Access Certification Reviewer Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Assign access certification items to users according to their profiles and the access control
  rules.

- [ Set Internal User Profiles Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Will execute the profile rules of the different resource types given in parameters to create,
  modify or delete profiles in automatic mode.

- [ Set Recently Modified Flag Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  When synchronizing in full or incremental mode, it is possible to optimize the compute
  performance of the role model by taking into account only the changes made by the
  synchronization.

- [ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Retrieves the files generated by the prepare-synchronization task to insert the data into the
  Identity Manager database.

- [ Update Access Certification Campaign Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`.

- [ Update Classification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Classifies a list of resources that are part of the resourceType data targets as an argument to
  this job.

- [ Update Entity Property Expressions Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Calculates either for all entities or for a list of entities the expressions and inserts the
  values in the database.

# Invoke Expression Task

Launches on agent side a powershell script given as input.

## Examples

```

  <InvokeExpressionTask Identifier="MyScript" DisplayName_L1="My Script" Agent="Local" InputPath="C:/Scripts/myScript.ps1" OpenIdClient="Job"/>

```

## Properties

| Property                             | Details                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required              | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                           |
| Agent optional                       | **Type** String **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the task is to be launched on the server. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                            |
| ContinueOnError default value: false | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                               |
| Identifier optional                  | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                               |
| InputPath optional                   | **Type** String **Description** Defines the input path. Alternative definition: If _TaskType_ is: - ProvisionerWorkflowTask: Path of the JSON file, - ConfigurationTask: Directory of the configuration to import, - ApiCallTask: Path of the JSON file, - SqlCmdTask: Path of the SQL file, |
| OpenIdClient optional                | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                              |

# Invoke Sql Command Task

Takes as input an SQL file or an SQL command to output several CSV files that can be used by the
collection.

## Examples

```

<InvokeSqlCommandTask Identifier="SQL_Command" DisplayName_L1="SQL Command" SQLCommand="SELECT id FROM uj_jobs" Agent="Local" OpenIdClient="Job" DatabaseIdentifier="UsercubeDemo" />

```

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                                 |
| Agent optional                         | **Type** String **Description** Identifier of the agent on which the job will be launched. **Note:** when not specified, the task is to be launched on the server. **Warning:** all jobs containing the task must be launched on the same agent or on the server.                                                                                                                  |
| ContinueOnError default value: false   | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                                                                                                                                                                                     |
| DatabaseIdentifier optional            | **Type** String **Description** Identifier of the Database to connect to                                                                                                                                                                                                                                                                                                           |
| Encoding optional                      | **Type** String **Description** Encoding for the output files. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                                       |
| Identifier optional                    | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                                     |
| IsNotAQuery default value: false       | **Type** Boolean **Description** To know if the SQL command is a query or not                                                                                                                                                                                                                                                                                                      |
| IsolationLevel optional                | **Type** String **Description** Specifies the transaction locking behavior for the database connection.                                                                                                                                                                                                                                                                            |
| OpenIdClient optional                  | **Type** String **Description** Connection client for the task.                                                                                                                                                                                                                                                                                                                    |
| OutputPath optional                    | **Type** String **Description** Path to save file. _Alternative definition_: If _TaskType_ is: - ProvisioningPolicyTask: Path to save the LDIF file, - CollectorTask: Path of the working directory, - CollectorChangesTask: Path of the working directory, - CollectorADDirSyncTask: Path of the working directory, - ProvisionerDownloadTask: Path of the destination directory, |
| Provider optional                      | **Type** String **Description** Database provider                                                                                                                                                                                                                                                                                                                                  |
| ProviderAssemblyQualifiedName optional | **Type** String **Description** Database provider assembly qualified name                                                                                                                                                                                                                                                                                                          |
| SQLCommand optional                    | **Type** String **Description** SQL Command to execute                                                                                                                                                                                                                                                                                                                             |
| SQLInputFile optional                  | **Type** String **Description** Path of the SQL file                                                                                                                                                                                                                                                                                                                               |
| Timeout default value: 0               | **Type** Int32 **Description** Specify the timeout if the query need more 30 sec                                                                                                                                                                                                                                                                                                   |

# Maintain Indexes Task

Maintain indexes and update statistics for all database tables. Also cleans up data inconsistencies.

## Examples

```

  <MaintainIndexesTask Identifier="IndexMaintenance" DisplayName_L1="Index and Statistics maintenance />

```

## Properties

| Property                                  | Details                                                                                                                                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                   | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                           |
| AllIndexes default value: false           | **Type** Boolean **Description** Defines whether all indexes should be rebuilt without checking average fragmentation percent.                                                                                               |
| ContinueOnError default value: false      | **Type** Boolean **Description** `true` if the execution of the Task returning an error should not stop the job machine state.                                                                                               |
| Identifier optional                       | **Type** String **Description** Unique identifier of the task.                                                                                                                                                               |
| NoNormalizationCheck default value: false | **Type** Boolean **Description** Prevent the cleanup of the database inconsistencies (foreign keys, forbidden values�).                                                                                                      |
| Offline default value: false              | **Type** Boolean **Description** Defines whether the indexes should be rebuilt offline.                                                                                                                                      |
| PageCount default value: 0                | **Type** Int32 **Description** Defines the min page count that an index should have to be maintained. Below this threshold the index will be ignored. Default value is 1000.                                                 |
| RebuildThreshold default value: 0         | **Type** Int32 **Description** Defines the min index fragmentation threshold for which an index rebuild is triggered otherwise the index will simply be reorganized. Must be between 30 and 90 percent. Default value is 30. |
| ReorganizeThreshold default value: 0      | **Type** Int32 **Description** Defines the min average fragmentation that an index should have to be maintained. Below this threshold the index will be ignored. Default value is 5.                                         |
| UpdateStatsThreshold default value: 0     | **Type** Int32 **Description** Specifies the minimum percentage of modification that should trigger an index statistic update. Default value is 10%                                                                          |

# Manage Configuration Indexes Task

Manage indexes for configuration items with the
tool[ Identity Manager-Manage-Configuration Dependent Indexes ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md).

## Examples

```
<ManageConfigurationIndexesTask Identifier="ManageIndexes" DisplayName_L1="Manage configuration indexes"/>
```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Process Access Certification Items Task

Launch the deprovisioning of declined entitlement assignments for all AccessCertificationItems
having a state of _PendingProcessing_ (3). Once completed, the new state of all processed items is
_Applied_ (4).

## Examples

```

  <ProcessAccessCertificationItemsTask Identifier="ProcessAccessCertificationItems" DisplayName_L1="Process access certification items decisions"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Reset Valid From Task

Initialize historization tables by setting each entity's first record `ValidFrom` value to
0001-01-01 00:00:00.00.

## Examples

```

<ResetValidFromTask Identifier="ResetValidFrom" DisplayName_L1="Initialize historization" />

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Save Pre-Existing Access Rights Task

During an initial installation of Identity Manager, data normally provided by Identity Manager or
through a derogation in the User Interface is already present in the application system. Loaded
during initialization, this data has the automatic flag and is all with provisioningstate to blocked
or to pending. This Tool updates the data that are in this case and that are in the present or in
the past. This update affects the following properties:

- Workflowstate
- consolidatedworkflowfoundstate
- consolidatedworkflowblockedstate
- consolidatedworkflowblockedcount
- consolidatedworkflowfoundcount
- provisioningState

## Examples

```

  <SavePreExistingAccessRightsTask DisplayName_L1="Pre Existing Assignment Default" Identifier="Pre_Existing_Assignment_Default" />

```

## Properties

| Property                               | Details                                                                                                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required                | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                       |
| AssignedResourceNavigationSQL optional | **Type** String **Description** The sql to find all AssignedResourceNavigation for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Database provider                   |
| AssignedResourceScalarSQL optional     | **Type** String **Description** The sql to find all AssignedResourceScalar for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: SQL Command to execute                  |
| AssignedResourceTypeSQL optional       | **Type** String **Description** The sql to find all AssignedResourceType for update. _Alternative definition_: If _TaskType_ is: - SqlCmdTask: Database provider assembly qualified name |
| Identifier optional                    | **Type** String **Description** Unique identifier of the task.                                                                                                                           |

# Send Access Certification Notification Task

Notify assigned users having pending access certification items in campaign marked with
`NotificationNeeded`.

## Examples

```

  <SendAccessCertificationNotificationTask Identifier="SendAccessCertificationNotification" DisplayName_L1="Notify users having pending access certification items"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Send Notifications Task

Task that sends all the custom notifications defined by the
[ Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) XML tag.

## Examples

The following example, included in a job potentially scheduled periodically, will send all custom
notifications defined via `Notification` such as the example below. The task will send the
notifications concerning the `Directory_User` entity type.

```

<SendNotificationsTask Identifier="SendNotifications" DisplayName_L1="Send notifications">	<TaskEntityType EntityType="Directory_User" /></SendNotificationsTask>

Knowing that we have for example:
<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Send Role Model Notifications Task

Task that sends a notification to all users who have pending roles to review, only for roles with a
simple approval workflow, i.e. pending the validation 1 out of 1.

## Examples

The following example sends a notification to all users who have pending roles to review, whose
owners are part of `Directory_User`. This is only about roles that need one (and only one)
validation.

```

<SendRoleModelNotificationsTask DisplayName_L1="Send reminder notifications for role review 1/1">  <TaskEntityType EntityType="Directory_User"/></SendRoleModelNotificationsTask>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Set Access Certification Reviewer Task

Assign access certification items to users according to their profiles and the access control rules.

## Examples

```

  <SetAccessCertificationReviewerTask Identifier="SetAccessCertificationReviewer" DisplayName_L1="Assign access certification items"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Set Internal User Profiles Task

Will execute the profile rules of the different resource types given in parameters to create, modify
or delete profiles in automatic mode.

It is necessary to set up [ Profile Context ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) as
well as [Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to be able to
use this job.

## Examples

```

  <SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >    <TaskEntityType EntityType="Referentiel_User"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </SetInternalUserProfilesTask>

```

## Properties

| Property                         | Details                                                                            |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required          | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchInsertSize default value: 0 | **Type** Int32 **Description** Defines the batch insert size.                      |
| BatchSelectSize default value: 0 | **Type** Int32 **Description** Defines the batch select size.                      |
| Identifier optional              | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Details                                                |
| --------------------- | ------------------------------------------------------ |
| ResourceType required | **Type** Int64 **Description** Linked resourceType id. |

# Set Recently Modified Flag Task

When synchronizing in full or incremental mode, it is possible to optimize the compute performance
of the role model by taking into account only the changes made by the synchronization. This
optimization is based on the `dirty` property of the entity
[ Resource ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). The task
[ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) with option `dirty` set to `true` will
treat only resources marked as dirty.

This task is used to set the `dirty` flag on all resources based on
[ Resources ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)Change, Resource Link Change and Resource File Change
entities. After this, it clears this changes tables.

This task works correctly only if **previous synchronization tasks have not cleared the change
tables** (option `DoNotDeleteChanges` set to `true`).

## Examples

```

  <SetRecentlyModifiedFlagTask Identifier="Update_Dirty" DisplayName_L1="Update Dirty"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Synchronize Task

Retrieves the files generated by the
[ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md) to
insert the data into the Identity Manager database.

For more information on how the Synchronization works, see
[ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md).

Collection must be done by the
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Examples

```

  <SynchronizeTask Identifier="HR_Synchronization" Connector="HR" DisplayName_L1="HR Synchro"/>

```

## Properties

| Property                                  | Details                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| Connector required                        | **Type** String **Description** Identifier of the connector involved in the task.           |
| DisplayName_L1 required                   | **Type** String **Description** Display name of the task in language 1 (up to 16).          |
| DoNotDeleteChanges default value: false   | **Type** Boolean **Description** Do not delete change in the change tables.                 |
| ForceSynchronization default value: false | **Type** Boolean **Description** Force the synchronization                                  |
| Identifier optional                       | **Type** String **Description** Unique identifier of the task.                              |
| Orphans default value: false              | **Type** Boolean **Description** Save orphans in a CSV output file                          |
| Type default value: None                  | **Type** PrepareSynchronizationType **Description** Define type of prepare synchronization. |

# Update Access Certification Campaign Task

Starts or stops the access certification campaigns according to their `StartDate` and `EndDate`. The
task also computes the Access Certification Items to certify (applying Access Certification Data
Filter and Access Certification Owner Filter), and fill the database with them.

## Examples

```

  <<UpdateAccessCertificationCampaignTask Identifier="UpdateAccessCertificationCampaign" DisplayName_L1="Starts/Stops access certification campaigns"/>

```

## Properties

| Property                | Details                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional     | **Type** String **Description** Unique identifier of the task.                     |

# Update Classification Task

Classifies a list of resources that are part of the resourceType data targets as an argument to this
job.

You must set up the ResourceClassificationRule on resourceTypes to be able to use this job.

## Examples

```

  <UpdateClassificationTask Identifier="UpdateClassification" DisplayName_L1="Update Classification">    <TaskEntityType EntityType="Referentiel_User"/>  </UpdateClassificationTask>

```

## Properties

| Property                   | Details                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type** Int32 **Description** Block size for batch calculation.                   |
| Dirty default value: false | **Type** Boolean **Description** Initiate use only dirty resources.                |
| Identifier optional        | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Update Entity Property Expressions Task

Calculates either for all entities or for a list of entities the expressions and inserts the values
in the database.

## Examples

```

<UpdateEntityPropertyExpressionsTask Identifier="ComputeAllProperties" DisplayName_L1="Compute All Properties " AllEntityType="true"/>

```

## Properties

| Property                           | Details                                                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required            | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                   |
| AllEntityType default value: false | **Type** Boolean **Description** Launch to all entityTypes for the expression task. _Alternative definition_: If _TaskType_ is: - TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSelectSize default value: 0   | **Type** Int32 **Description** Defines the batch select size.                                                                                                                        |
| BatchUpdateSize default value: 0   | **Type** Int32 **Description** Defines the batch update size.                                                                                                                        |
| Dirty default value: false         | **Type** Boolean **Description** Initiate use only dirty resources.                                                                                                                  |
| Identifier optional                | **Type** String **Description** Unique identifier of the task.                                                                                                                       |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |

# Access Control Entity Type

## Child Element: Property

An AccessControlEntityProperty assigns an entity property to a visibility group. See Access Control
Property Group for more details.

### Properties

| Property                 | Details                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| VisibilityGroup optional | **Type** Int64 **Description** The VisibilityGroup that controls access to the property. |

# Binding

Identity Manager metadata provides a simple and consistent way to present and interact with
metadata. A binding is a path of scalar/navigation properties used to configure a set of property
keys.

## Child Element: Property

# Dimension

A dimension is an [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) used to define an organizational filter
for the Identity Manager role model.

## Examples

The following XML fragment defines the dimension `Organization0`. The dimension values are of
`Directory_Organization` type. The `ColumnMapping` attribute specifies the column (0 to 127) used to
store the dimension value in the assignment rule tables.

```

<Dimension Identifier="Organization0" DisplayName_L1="Department" EntityType="Directory_Organization" ColumnMapping="0" />

```

Some types of entities can be organized in a hierarchical tree structure. Thus, for example,
organizational units form a tree structure modeled by a `Parent` navigation property that links the
entity type to itself. It is possible to use the hierarchical aspect of a dimension in an assignment
rule criterion. For example, the assignment must be extended to the whole subunits of a department.
Such a dimension must be declared as a hierarchical dimension by specifying the attribute
`IsHierarchical="true"`.

```

<Dimension Identifier="Organization0" DisplayName_L1="Department" EntityType="Directory_Organization" ColumnMapping="0" IsHierarchical="true" ParentProperty="Parent" /><EntityType Identifier="Directory_Organization" DisplayName_L1="Department">...
	<Property Identifier="Path" DisplayName_L1="Path" Type="String" TargetColumnIndex="6" />	<Property Identifier="Parent" DisplayName_L1="Parent Department" Type="ForeignKey" TargetColumnIndex="128" />...
</EntityType>

```

The attribute `ParentProperty` specifies the navigational property defining the hierarchy (`Parent`
is the navigation property that links the `Directory_Organization` type to itself).

## Properties

| Property                                      | Details                                                                                                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColumnMapping required                        | **Type** Int32 **Description** Specifies the corresponding column in the role model rules.                                                                       |
| DisplayName_L1 optional                       | **Type** String **Description** Display name of the dimension in language 1 (up to 16).                                                                          |
| EntityType required                           | **Type** Int64 **Description** References the linked entity type.                                                                                                |
| Identifier required                           | **Type** String **Description** Unique identifier of the dimension.                                                                                              |
| IsExcludedFromRoleMining default value: false | **Type** Boolean **Description** `true` to exclude the dimension from role mining. It means that the dimension is not used as a criteria in the generated rules. |
| IsHierarchical default value: false           | **Type** Boolean **Description** `true` to define a hierarchical dimension. **Note:** Cannot be used without `ParentProperty`.                                   |
| ParentProperty optional                       | **Type** Int64 **Description** Specifies the navigational property defining the hierarchy.                                                                       |

# Entity Association

An entity association is used to model an association in Identity Manager's metadata. See the
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)topic for additional information on a whole
connector with its entity properties and associations.

## Examples

The following example associates one title (as a property from the entity type
`Directory_UserRecord`) with several user records (as a property from the entity type
`Directory_Title`).

```

<EntityAssociation Identifier="Directory_UserRecord_Title_User_Records" IsProperty2Collection="true"
    Property1="Directory_UserRecord:Title" Property2="Directory_Title:UserRecords" />

```

### Many-to-many association

The following example associates SAB users with groups, with the possibility to link one group to
several users, and one user to several groups.

```

<EntityAssociation Identifier="SAB_Group_User" DisplayName_L1="User" IsProperty1Collection="true" IsProperty2Collection="true" Property1="SAB_Group:User" Property2="SAB_User:Group" />

```

## Properties

| Property                                   | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional                    | **Type** String **Description** Display name of the association in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                          |
| Identifier required                        | **Type** String **Description** Unique identifier of the association. It must be unique to the entity model scope.                                                                                                                                                                                                                                                                                                                                                                                 |
| IsProperty1Collection default value: false | **Type** Boolean **Description** `true` to define a many-to-one association.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| IsProperty2Collection default value: false | **Type** Boolean **Description** `true` to define a one-to-many association.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Property1 required                         | **Type** Int64 **Description** Defines the first navigation property. A navigation property can be mono-valued or multi-valued (with its corresponding `IsPropertyCollection` set to `true`). Mono-valued navigation properties may be optimized (with a `TargetColumnIndex`) or not (without `TargetColumnIndex`). See more details under the TargetColumnIndex section of the [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties page. |
| Property2 required                         | **Type** Int64 **Description** Defines the second navigation property.                                                                                                                                                                                                                                                                                                                                                                                                                             |

# Entity Property Expression

An entity property expression is a property computed from a binding and/or C# or literal
expressions. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.

## Examples

The following example computes the record display name.

```

<EntityPropertyExpression Identifier="Directory_UserRecord_InternalDisplayName" Expression="C#:person:return person.LastName + " " + person.FirstName;"
    EntityType="Directory_UserRecord" Property="InternalDisplayName" />

```

## Properties

| Property                  | Details                                                                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding optional          | **Type** Int64 **Description** References the binding used to compute the result.                                                                                                                                                       |
| EntityType required       | **Type** Int64 **Description** Identifier of the referenced entity type                                                                                                                                                                 |
| Expression optional       | **Type** String **Description** References the C# or literal expression used to compute the result. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. |
| Identifier required       | **Type** String **Description** Unique identifier of the expression.                                                                                                                                                                    |
| Priority default value: 0 | **Type** Int32 **Description** Specifies the execution priority.                                                                                                                                                                        |
| Property required         | **Type** Int64 **Description** Identifier of the referenced entity property                                                                                                                                                             |
| PropertyCriteria optional | **Type** Int64 **Description** References the property criteria used to compute navigation properties.                                                                                                                                  |

# Entity Type

Represents a conceptual model of a business object, such as a person entity or an organization
entity. See the [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)topic for additional information
on how to configure define an EntityType.

## Properties

| Property                | Details                                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | **Type** String **Description** Display name of the entity type in language 1 (up to 16).                                                                                                                                                                       |
| Identifier required     | **Type** String **Description** Unique identifier of the entity type. It must is be unique to the _entity model_ scope. Cannot be a [ Reserved identifiers ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md).                             |
| LicenseTag optional     | **Type** String **Description** Value of the `Tag` parameter of the license key (in `appsettings.json`) linked to the entity type. All the features allowed by the license key are enabled for this entity type, otherwise only default features are available. |
| TableName optional      | **Type** String **Description** Represents the table name of hard coded entity types. Exclusively reserved to Identity Manager connector for Power BI.                                                                                                          |

## Child Element: Property

An entity property represents a property of an Entity Type. See the
[Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information on how to
configure/define an EntityProperty.

### Examples

#### Populate navigational property from non primary key

Some configuration elements will be linked to an entity whose id is not known at configuration time.
In this case, another key must be used. On each entity type property, the `IsKey` attribute
specifies that the property can be used as a key during configuration import.

For example, the _Code_ property of the _Title_ entity type is marked as a key.

```

<EntityType Identifier="Title" DisplayName_L1="Title">    <Property Identifier="Code" Type="String" IsKey="true" TargetColumnIndex="4" />    ...
</EntityType>

```

All _Title_ instances will be replicated from a managed system. So, at configuration time, Identity
Manager's internal primary key for this _Title_ is not known.

We hence cannot write a _SingleRoleRule_ with a Dimension criteria based on _Title_ as the primary
key.

We can however, use a non-primary key, that is known in advance, because it depends on the managed
system's data and not on Identity Manager.

For example, the below `Dimension1` attribute references a _Title_ entity by its _Code_ value.

```

<SingleRoleRule Role="InternetAccess" Dimension1="TITLE0000" Policy="Default" />

```

#### Changing the multiplicity of a property

It is sometimes necessary to change the multiplicity of a property (Scalar property to Navigation
property or vice-versa). As long as the property was not used in any workflow, this can be properly
handled by `Deploy-Configuration.exe`. If it _was_ used in one or more workflows, foreign key
conflicts (in UW_Changes database table) may occur, preventing the configuration from being
deployed. To solve this problem, references to this property must be manually cleaned up with SQL
queries directly in the database before deploying the configuration.

### Properties

| Property                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional               | **Type** String **Description** Display name of the property in language 1 (up to 16). **Note:** cannot be "Id".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FlexibleComparisonExpression optional | **Type** String **Description** Expression used to transform the query input value for comparison using a flexible operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| GroupByProperty optional              | **Type** Int64 **Description** Property used to regroup navigation resources (resources used in navigation rules) by value. When defined, the Evaluate policy will enforce that one and only one item of a group can be assigned to an identity on a given date range. **Warning:** whenever the value of this property changes for a resource used in the defined navigation rules, the server needs to be restarted in order for the changes to be taken into account.                                                                                                                                                                                                                                                                                                                                                                                                   |
| HistoryPrecision default value: 0     | **Type** Int32 **Description** Defines the number of minutes to wait, after a property change, before triggering the record history mechanism.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Identifier required                   | **Type** String **Description** Unique identifier of the property. It must be unique to the parent entity type scope. Cannot be a [ Reserved identifiers ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) and can only contain numbers (except the first character) and letters without accents. **Note:** cannot be "Id".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| IsKey default value: false            | **Type** Boolean **Description** `true` if the property is designated to be one of the keys that uniquely identify any resource from the entity type in the configuration. Each entity type must have at least one key. **Note:** AD synchronization requires the `dn` property to have either `IsKey` or `EntityTypeMapping` > `Property` > `IsUniqueKey` set to `true` (key property in the UI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Language optional                     | **Type** Int64 **Description** Language associated to the property if it is localized (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| NeutralProperty optional              | **Type** Int64 **Description** Neutral property associated to the property if it is localized (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| TargetColumnIndex default value: -1   | **Type** Int32 **Description** Specifies the corresponding column in the resource entity. `0` to `3`: scalar property whose value exceeds 443 characters. `4` to `127`: scalar property whose value does not exceed 443 characters (or optimized mono-valued navigation property : see note). `128` to `152`: optimized mono-valued navigation property only. `-1`: non-optimized mono or multi-valued navigation property (stored in `UR_ResourceLink`), or binary (stored in `UR_ResourceLink`). **Note:** optimized mono-valued navigation properties should have their `TargetColumnIndex` between 128 and 152 included to be fully optimized. However, if all are already taken, `TargetColumnIndex` from 0 to 127 included (usually for scalar properties) may also be used. In this case the first available `TargetColumnIndex` in ascending order should be used. |
| Type default value: 0                 | **Type** EntityPropertyType **Description** Property type. `0` - **String**. `1` - **Bytes**. `2` - **Int32**. `3` - **Int64**. `4` - **DateTime**. `5` - **Bool**. `6` - **Guid**. `7` - **Double**. `8` - **Binary**. `9` - **Byte**. `10` - **Int16**. `12` - **ForeignKey**: indicates a navigation property, i.e. a property related to an association between entities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Metadata

- [ Access Control Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Binding ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Entity Property Expression ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Language ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Language

Represents a configuration entity used to create multilingual application.

## Examples

The following example declares a new language.

```

<Language Code="en-US" IndicatorNumber="1" />

```

## Properties

| Property                 | Details                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------ |
| Code required            | **Type** String **Description** Unique identifier of the language (fr-FR, en-US...). |
| IndicatorNumber required | **Type** Int32 **Description** Defines the default language.                         |
| JsonPath optional        | **Type** String **Description** The original translations file path                  |

# App Display Setting

This setting is used to customize the application display.

## Examples

Here are some examples of display settings that can be customized:

### Set colors, logos and names

The following example sets:

- Netwrix Identity Manager (formerly Usercube) as name of the application visible on the tabs;
- The logo to be displayed in the top left corner;
- The favicon to be displayed on the tabs;
- The **banner color**, **banner gradient color**, **banner selected tab color**, **banner text
  color**, **primary color** and **secondary color**.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AppDisplaySetting ApplicationName="Netwrix Usercube" LogoFile="logo.webp" FaviconFile="favicon.ico" BannerColor="#512E5F" BannerGradientColor="#76D7C4" BannerSelectedTabColor="#E74C3C" BannerTextColor="#F1C40F" PrimaryColor="#0E6655" SecondaryColor="#85C1E9" />
```

Colors, logo and name customization:

![AppDisplay - Basic Screen](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen2_v603.webp)

Display colors customization:

![AppDisplay - Authentication](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen1_v603.webp)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

![AppDisplay - Without Counters](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_counters_v603.webp)

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AppDisplaySetting DisableProvisioningCounters="true" />
```

![AppDisplay - Without Counters](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_nocounters_v603.webp)

### Features

The feature **Only allow approving and refusing on access certifications items** gives the
administrator the option to limit the user's option to either **Approve** or **Deny** the Access
Certification items while making the **More** button unavailable.

![allowapprovingdenyingaccesscertificationitems](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/allowapprovingdenyingaccesscertificationitems.webp)

The following example disables the **More** button that is usually visible on certification screen:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessCertificationOnlyApproveDeny="true"/> 
```

If the feature **Only allow approving and denying on access certification items** is set to **Yes**,
the **More** button is disabled.

![accesscertificationonlyapprovedeny-disabled](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedeny-disabled.webp)

See the
[Configure Global Settings](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Properties

| Property                                          | Type    | Description                                                                                                                                                                                     |
| ------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApplicationName (optional)                        | String  | Name of the application, visible on the application's tabs.                                                                                                                                     |
| AccessCertificationOnlyApproveDeny (optional)     | Boolean | True to hide the **More** button on the access certification screens, only allowing **Approve** and **Deny** actions. The default value is **false**.                                           |
| BannerColor (optional)                            | String  | HEX code of the color for the banner, i.e. the header displaying logo and navigation bar.                                                                                                       |
| BannerGradientColor (optional)                    | String  | HEX code of the color for the banner's gradient to be visible at the middle of the banner.                                                                                                      |
| BannerSelectedTabColor (optional)                 | String  | HEX code of the color for the line that emphasizes the selected tab.                                                                                                                            |
| BannerTextColor (optional)                        | String  | HEX code of the color for the banner's text.                                                                                                                                                    |
| DisableProvisioningCounters (default value: false | String  | True to disable the counters related to the administration screens: **Role Review**, **Provisioning Review**, **Role Reconciliation**, **Resource Reconciliation** and **Manual Provisioning**. |
| FaviconFile (optional)                            | String  | Path of the favicon to be displayed in the application's tabs.                                                                                                                                  |
| FaviconMimeType (optional)                        | String  | Mime type of the favicon.                                                                                                                                                                       |
| FullNameSeparator (default value: �)              | String  | Separator of the full name.                                                                                                                                                                     |
| Identifier (default value: AppDisplay)            | String  | Unique identifier of the setting.                                                                                                                                                               |
| LogoFile (optional)                               | String  | Path of the logo to be displayed in the top left corner.                                                                                                                                        |
| LogoMimeType (optional)                           | String  | Mime type of the logo.                                                                                                                                                                          |
| Preview (optional)                                | String  | Documentation unavailable.                                                                                                                                                                      |
| PrimaryColor (optional)                           | String  | HEX code of the color for the highlighted buttons.                                                                                                                                              |
| SecondaryColor (optional)                         | String  | HEX code of the color for the background of the authentication screen.                                                                                                                          |

# Configuration Version Setting

Used to track the current configuration version.

## Examples

```

    <ConfigurationVersionSetting Version="5.0.0" Description="Demo Usercube" />

```

## Properties

| Property                                       | Details                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Description optional                           | **Type** String **Description** Detailed description of the version. |
| Identifier default value: ConfigurationVersion | **Type** String **Description** Unique identifier of the setting.    |
| Misc optional                                  | **Type** String **Description** Misc.                                |
| Version optional                               | **Type** String **Description** Version of the configuration.        |

# Custom Link 1 Setting

Used to display a given static HTML file to a custom URL address.

## Properties

| Property                              | Details                                                                                                         |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Path_L1 required                      | **Type** String **Description** The path (relative to the configuration root) to the HTML file for language L1. |
| Url required                          | **Type** String **Description** The URL from which the custom HTML should be displayed. Must start with an �/'. |
| Identifier default value: CustomLink1 | **Type** String **Description** Unique identifier of the setting.                                               |

# Custom Link 2 Setting

Used to display a given static HTML file to a custom URL address.

## Properties

| Property                              | Details                                                                                                         |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Path_L1 required                      | **Type** String **Description** The path (relative to the configuration root) to the HTML file for language L1. |
| Url required                          | **Type** String **Description** The url from which the custom HTML should be displayed. Must start with an �/'. |
| Identifier default value: CustomLink2 | **Type** String **Description** Unique identifier of the setting.                                               |

# Dashboard Item Number Setting

Used to customize the number of links to display on each section on the Dashboard. If no value is
defined, the default value is 3. The value must be greater than 0 and less than or equal to 5.

## Properties

| Property                                      | Details                                                                                                                                                                                |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier default value: DashboardItemNumber | **Type** String **Description** Unique identifier of the setting.                                                                                                                      |
| ManualProvisioningSection optional            | **Type** String **Description** Number of links to display in the Manual Provisioning section. The default value is 3. The value must be greater than 0 and less than or equal to 5.   |
| MyTasksSection optional                       | **Type** String **Description** Number of links to display in the My Tasks section. The default value is 3. The value must be greater than 0 and less than or equal to 5.              |
| ProvisioningReviewSection optional            | **Type** String **Description** Number of links to display in the Provisioning Review section. The default value is 3. The value must be greater than 0 and less than or equal to 5.   |
| ResourceReconciliationSection optional        | **Type** String **Description** Number of links to display in the Reconciliation Review section. The default value is 3. The value must be greater than 0 and less than or equal to 5. |
| RoleReconciliationSection optional            | **Type** String **Description** Number of links to display in the Role Reconciliation section. The default value is 3. The value must be greater than 0 and less than or equal to 5.   |
| RoleReviewSection optional                    | **Type** String **Description** Number of links to display in the Role Review section. The default value is 3. The value must be greater than 0 and less than or equal to 5.           |

# Settings

- [App Display Setting](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  This setting is used to customize the application display.

- [ Configuration Version Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Used to track the current configuration version.

- [ Custom Link 1 Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Used to display a given static HTML file to a custom URL address.

- [ Custom Link 2 Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Used to display a given static HTML file to a custom URL address.

- [ Dashboard Item Number Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Used to customize the number of links to display on each section on the Dashboard. If no value
  is defined, the default value is 3. The value must be greater than 0 and less than or equal
  to 5.

- [ Mail Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Password Generation Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Password Tests Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  This setting enables a check on the passwords set manually by users.

- [ Scheduling Clean Database Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  If the default value for the Task CleanDataBase needs to be overridden.

- [ Select All Performed by Association Query Handler Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  This setting enables task delegation to a group of people.

- [Select Personas by Filter Query Handler Setting](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  This setting is used to filter the entity type used by authentication mechanism.

- [ Select User by Identity Query Handler Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  This attribute matches an end-user with a resource from the unified resource repository.

# Mail Setting

## Examples

The following example indicates that notifications for users from `Directory_User` are to be sent to
the email addresses contained by the `Email` property.

```

<MailSetting MailProperty="Directory_User:Email"/>

```

## Properties

| Property                               | Details                                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier default value: MailSettings | **Type** String **Description** Unique identifier of the setting.                                                                                                              |
| LanguageCode optional                  | **Type** String **Description** Language code for the notifications sent by server-side tasks, using the ISO 639-1 standard. For example, "en-US" represents American English. |
| MailProperty optional                  | **Type** String **Description** Property whose values are to be used by Identity Manager to send emails.                                                                       |

# Password Generation Setting

## Properties

| Property                                            | Details                                                                 |
| --------------------------------------------------- | ----------------------------------------------------------------------- |
| AllowedSymbolChars required                         | **Type** String **Description** The documentation is not yet available. |
| Identifier default value: PasswordGenerationSetting | **Type** String **Description** Unique identifier of the setting.       |

# Password Tests Setting

This setting enables a check on the passwords set manually by users.

The strength of passwords generated by Identity Manager can be configured via
[ Password Reset Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) StrengthCheck.

## Examples

The following example encourages users to choose a strong password with at least 9 characters
including at least one digit, one lowercase letter, one uppercase and one special character.

```

<PasswordTestsSetting PasswordRegex="'^..........*$','^.*[0-9].*$', '^.*[a-z].*$', '^.*[A-Z].*$', '^.*[^A-Za-z0-9].*$'"/>

```

## Properties

| Property                                | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier default value: PasswordTests | **Type** String **Description** Unique identifier of the setting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| PasswordRegex optional                  | **Type** String **Description** Regular expression(s) (regex) that users' passwords must match to be acceptable when set manually. When setting several regex, passwords must match all of them to be considered strong, and 70% to be considered average. Below that, a password is considered weak and cannot be confirmed. **Default value:**`'^..*$', '^...*$', '^....*$', '^.....*$', '^......*$', '^.......*$', '^........*$', '^.........*$', '^..........*$', '^.*[0-9].*$', '^.*[a-z].*$', '^.*[A-Z].*$', '^.*[^A-Za-z0-9].*$'` |

# Scheduling Clean Database Setting

If the default value for the Task CleanDataBase needs to be overridden.

## Examples

```

    <SchedulingCleanDataBaseSetting Timeout="2" CronTabExpression="* */2 * * *"/>

```

## Properties

| Property                                          | Details                                                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| CronTabExpression optional                        | **Type** String **Description** Define the cron to launch the CleanDatabase Job.                    |
| Identifier default value: SchedulingCleanDataBase | **Type** String **Description** Unique identifier of the setting.                                   |
| Timeout optional                                  | **Type** String **Description** Defines the maximum time a Job or Task can wait after the last run. |

# Select All Performed by Association Query Handler Setting

This setting enables task delegation to a group of people.

## Examples

```

        <SelectAllPerformedByAssociationQueryHandlerSetting RootEntityType="AD_Entry" Binding="member" />

```

## Properties

| Property                                                              | Details                                                                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Binding optional                                                      | **Type** String **Description** Defines the binding used to get the list of identities to delegate to. |
| Identifier default value: SelectAllPerformedByAssociationQueryHandler | **Type** String **Description** Unique identifier of the setting.                                      |
| RootEntityType optional                                               | **Type** String **Description** Indicates the entity type on which the delegation is applied.          |

# Select Personas by Filter Query Handler Setting

This setting is used to filter the entity type used by authentication mechanism.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <SelectPersonasByFilterQueryHandlerSetting ResourceDisplayNameProperty="AD_Entry:displayName" PersonTypeFilterProperty="AD_Entry:objectCategory" PersonTypeFilter="Person" />
```

## Properties

| Property                                                     | Type   | Description                                                                                                   |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| Identifier default value: SelectPersonasByFilterQueryHandler | String | Unique identifier of the setting.                                                                             |
| MailProperty optional                                        | String | Defines the mail property. **NOTE:** Required to receive the email for two-way password reset, when relevant. |
| OwnerPhotoTagProperty optional                               | String | Defines the photo tag property.                                                                               |
| PersonTypeFilter optional                                    | String | Defines the value of the property `PersonTypeFilterProperty` that needs to be matched to get elements.        |
| PersonTypeFilterProperty optional                            | String | Defines the filter property.                                                                                  |
| PhotoProperty optional                                       | String | Defines the photo property.                                                                                   |
| ResourceDisplayNameProperty optional                         | String | Represents the display property.                                                                              |

# Select User by Identity Query Handler Setting

This attribute matches an end-user with a resource from the central repository.

Authorization mechanisms within Identity Manager rely on assigning a profile to a resource that
stands for the end-user digital identity.

To that end, end-user authentication credentials are linked to such an identity using the following
pattern:

1. authentication credentials are retrieved;
2. authentication credentials are trimmed using the `AfterToken` and/or `BeforeToken` attributes;
3. the trimmed result is matched against the `ResourceIdentityProperty` of resources with the entity
   type specified by `OwnerEntityType`;
4. the matching resource is used to find a profile and authorization for that digital identity.

After modifying the authentication mode via `SelectUserByIdentityQueryHandlerSetting`, Identity
Manager server must be restarted. On a SaaS environment, contact your Identity Manager
administrator.

## Examples

The following example links the authentication credentials of an end-user to its matching resource
of EntityType **Directory_User**.

In this example, authentication has been set up using
[ End-User Authentication](/docs/identitymanager/6.2/administration/server-configuration/authentication.md).
In that case, the login used by the end-user is in the form `DOMAIN/userName`.

The **AfterToken** attribute parses the `DOMAIN/userName` string into `userName`.

The parsed result `userName` is compared with `AD_Entry:sAMAccountName` property value of
**Directory_User** resources.

The matching **Directory_User** resource is the resource that stands for the end-user identity
within Identity Manager.

```

<SelectUserByIdentityQueryHandlerSetting
    ResourceIdentityProperty="AD_Entry:sAMAccountName"
    ResourceDisplayNameProperty="AD_Entry:displayName"
    OwnerPhotoTagProperty="Directory_User:PhotoTag"
    OwnerEntityType="Directory_User"
    AfterToken="\"/>

```

## Properties

| Property                                                   | Details                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AfterToken optional                                        | **Type** String **Description** Second character used to trim the authentication login. The trimmed result is the content of the authentication login between `AfterToken` and `BeforeToken`. If `BeforeToken` is empty, trimmed result is everything after `AfterToken`. If `AfterToken` is empty, trimmed result is everything before `BeforeToken`. |
| BeforeToken optional                                       | **Type** String **Description** First character used to trim the authentication login. The trimmed result is the content of the authentication login between `AfterToken` and `BeforeToken`. If `BeforeToken` is empty, trimmed result is everything after `AfterToken`. If `AfterToken` is empty, trimmed result is everything before `BeforeToken`.  |
| Identifier default value: SelectUserByIdentityQueryHandler | **Type** String **Description** Unique identifier of the setting.                                                                                                                                                                                                                                                                                      |
| OwnerEntityType optional                                   | **Type** String **Description** Entity type of the resources used to store digital identities within Identity Manager.                                                                                                                                                                                                                                 |
| OwnerPhotoTagProperty optional                             | **Type** String **Description** Photo property for Identity Manager users.                                                                                                                                                                                                                                                                             |
| ResourceDisplayNameProperty optional                       | **Type** String **Description** Property used for displaying login data at the top right of the application.                                                                                                                                                                                                                                           |
| ResourceIdentityProperty optional                          | **Type** String **Description** Identity-resource property supposed to match the authentication login used by the end-user.                                                                                                                                                                                                                            |

# Notifications

- [ Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Notifications (Typed) ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Notification Template](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Notification

A notification can be configured to be sent to a given user on a regular basis at specified times,
through the [ Send Notifications Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) as
part of a job.

## Examples

The following example defines a notification to inform/remind managers of the arrival of new
employees in their team.

The notification is built based on:

- the template `Notification.cshtml`;
- the styles `Notification.css`;
- the subject defined by `TitleExpression`.

The notification is sent for each new user, i.e. each user whose contract start date is in the
future. The notification is sent to the new user's manager(s).

The notification will be sent again as a reminder after 7 days, by the next `SendNotificationsTask`.

```

<Notification Identifier="New_Directory_User" OwnerEntityType="Directory_User" RazorTemplate="./Template/Notification.cshtml" CssTemplate="./Template/Notification.css" TitleExpression="C#:user:return &quot;New Employee&quot;;" QueryFilterExpression="C#:user:return $&quot;join MainRecord r where r.ContractStartDate > \&quot;{DateTime.UtcNow.ToString(&quot;yyyy-MM-ddTHH:mm:ssZ&quot;)}\&quot;&quot;;" RecipientMailBinding="Directory_User:MainRecord.Organization.Manager.MainRecord.Email" ReminderInterval="10080" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with `<Notification.../>`.                                                                     |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                                                 |
| OwnerEntityType required          | **Type** Int64 **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression` and `QueryFilterExpression`.                                                                                                                                                 |
| QueryFilterExpression optional    | **Type** String **Description** C# expression that returns a Identity Manager Squery in order to define the sending condition of the notification. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** required when creating a customized notification with `<Notification.../>`.                                                           |
| RecipientMailBinding optional     | **Type** Int64 **Description** Binding of the property that corresponds to the email addresses that will receive the notification.                                                                                                                                                                                                                     |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                                             |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                    |

# Access Certification Notification

Reminder notification concerning access certification.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for access certification (on resources from `Directory_User`) and have
not yet performed the action. The email's content and styles are those from the original
notification, but the subject is overridden by `TitleExpression` here.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<AccessCertificationNotification Identifier="AccessCertification_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/AccessCertification_Reminder.cshtml" CssTemplate="./Templates/AccessCertification_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending access certification items to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                |

# Notifications (Typed)

- [ Access Certification Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Reminder notification concerning access certification.

- [ Manual Provisioning Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Reminder notification concerning manual provisioning.

- [ Provisioning Review Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Reminder notification concerning provisioning review.

- [Role Policy Notification](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Reminder notification concerning role model tasks.

- [ Role Review Notification ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

  Reminder notification concerning role review.

# Manual Provisioning Notification

Reminder notification concerning manual provisioning.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for manual provisioning (on resources from `Directory_User`) and have not
yet performed the action. The email's content and styles are those from the original notification,
but the subject is overridden by `TitleExpression` here.

```

<ManualProvisioningNotification Identifier="ManualProvisioning_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to manually provision&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<ManualProvisioningNotification Identifier="ManualProvisioning_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/ManualProvisioning_Reminder.cshtml" CssTemplate="./Templates/ManualProvisioning_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to manually provision&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                |

# Provisioning Review Notification

Reminder notification concerning provisioning review.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for provisioning review (on resources from `Directory_User`) and have not
yet performed the action. The email's content and styles are those from the original notification,
but the subject is overridden by `TitleExpression` here.

```

<ProvisioningReviewNotification Identifier="ProvisioningReview_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<ProvisioningReviewNotification Identifier="ProvisioningReview_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/ProvisioningReview_Reminder.cshtml" CssTemplate="./Templates/ProvisioningReview_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have pending resources to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                |

# Role Policy Notification

Reminder notification concerning role model tasks.

## Properties

| Property            | Type   | Description                            |
| ------------------- | ------ | -------------------------------------- |
| Identifier optional | String | Unique identifier of the notification. |

# Role Review Notification

Reminder notification concerning role review.

## Examples

The following example sends after 2 days a reminder notification to users who were already notified
by the native notification for role review (on resources from `Directory_User`) and have not yet
performed the action. The email's content and styles are those from the original notification, but
the subject is overridden by `TitleExpression` here.

```

<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" TitleExpression="C#:user:return &quot;Reminder: You have pending roles to review&quot;;" ReminderInterval="2880" />

```

The following example sends the exact same notification as the previous example, but with different
templates for the content and the styles.

```

<RoleReviewNotification Identifier="RoleReview_Directory_User_Reminder" OwnerEntityType="Directory_User" RazorTemplate="./Templates/RoleReview_Reminder.cshtml" CssTemplate="./Templates/RoleReview_Reminder.css" TitleExpression="C#:user:return &quot;Reminder: You have access pending roles to review&quot;;" ReminderInterval="2880" />

```

## Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required               | **Type** String **Description** Unique identifier of the notification.                                                                                                                                                                                                                                                             |
| OwnerEntityType required          | **Type** String **Description** Identifier of the entity type that represents the population affected by the notification, and the variable type used in `TitleExpression`.                                                                                                                                                        |
| CssTemplate optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification.           |
| RazorTemplate optional            | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template. **Note:** the path must be relative to the configuration folder, and the file must be inside it. **Note:** when no template is specified, the reminder notification will use the same template as the original notification. |
| ReminderInterval default value: 0 | **Type** Int32 **Description** Time period (in minutes) after which a reminder of the original notification should be sent. **Note:** the notification reminder will be sent by the first `SendNotificationsTask` after the reminder interval is exceeded.                                                                         |
| TitleExpression optional          | **Type** String **Description** C# expression that defines the email's subject. The expression's variable type is defined in `OwnerEntityType`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                |

# Notification Template

A notification template is used to overwrite the subject and/or body of a native notification with
personalized templates.

Identity Manager natively sends notifications for usual cases.

These native notifications are based on cshtml templates available inside the `Runtime` folder. If
the provided templates do not meet your exact needs, then they can be replaced by personalized
notification templates. See the
[ Native Notifications ](/docs/identitymanager/6.2/administration/notifications/native-notifications.md)topic for additional information.

## Examples

The following example overwrites the template of the notification provided by Identity Manager for
role review.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<NotificationTemplate Identifier="WorkflowReviewRolesSummary" SubjectTemplate_L1="./Templates/Notification_RoleReview_Subject.cshtml" BodyTemplate_L1="./Templates/Notification_RoleReview_Body.cshtml" />
```

The following example defines a template for the notification's subject.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
// WorkflowReviewRolesSummary_Subject.cshtml
@using Usercube.Application.DeltaProvisioning.Notification
@model WorkflowReviewRolesSummary
Review Roles - @(@Model.AssignedCompositeRoles.Any() ? @Model.AssignedCompositeRoles.FirstOrDefault().Owner.FullName : @Model.AssignedSingleRoles.FirstOrDefault().Owner.FullName)
```

## Properties

| Property                    | Type   | Description                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BodyTemplate_L1 optional    | String | Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                        |
| Identifier required         | String | Identifier of the native notification to adjust, among: - `BlockedProvisioningInformations` - `OneWayPasswordReset` - `PendingAccessCertificationModel` - `PerformManualProvisioningSummary` - `RolePolicySummary` - `RunJobNotification` - `TwoWayPasswordReset` - `WorkflowReviewProvisioningSummary` - `WorkflowReviewRolesSummary` |
| SubjectTemplate_L1 optional | String | Path to the Razor cshtml file that defines the email's subject template in language 1 (up to 16). **NOTE:** The path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                     |

# Automation Rule

Automation rules make automatic decisions instead of the reviewer on assignments that still need to
be reviewed after a given waiting period.

There are distinct types of automation rules:

- A composite role automation rule targets the assigned composite roles corresponding to a given
  composite role.

  `CompositeRoleAutomationRule` is equivalent to `AutomationRule` with its `Type` set to
  `CompositeRole`, and requires specifying the `CompositeRole` property;

- A single role automation rule targets the assigned single roles corresponding to a given single
  role.

  `SingleRoleAutomationRule` is equivalent to `AutomationRule` with its `Type` set to
  `SingleRole`, and requires specifying the `SingleRole` property;

- A resource type automation rule targets the assigned resource types corresponding to a given
  resource type.

  `ResourceTypeAutomationRule` is equivalent to `AutomationRule` with its `Type` set to
  `ResourceType`, and requires specifying the `ResourceType` property;

- A category automation rule targets the assigned roles and resource types corresponding to a given
  category and a given entity type.

  `CategoryAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `Category`,
  and requires specifying the `Category` and `EntityType` properties;

- A policy automation rule targets the assigned roles and resource types corresponding to a given
  policy and a given entity type.

  `PolicyAutomationRule` is equivalent to `AutomationRule` with its `Type` set to `Policy`, and
  requires specifying the `Policy` and `EntityType` properties.

_Remember,_ Netwrix recommends always using the typed syntax.

For example, you should always use `SingleRoleAutomationRule`, rather than `AutomationRule` with
`Type` set to `CompositeRole`.

All these rules target the assignments which have a specific workflow state which is specified in
the rule.

Automation rules can also specify dimensions.

One assignment should be involved in the decision of only one automation rule. However, one
assignment can easily be targeted by several automation rules. In this case, the Provisioning Policy
algorithm prioritizes the most specific rule.

For example, considering an assigned composite role, Identity Manager's algorithm prioritizes a
composite role automation rule, before a category automation rule, before a policy automation rule.

After this prioritization, when an assignment is still targeted by several rules due to dimensions,
then Identity Manager prioritizes a rule implying a decline decision.

## Examples

In the following example, the two first rules are equivalent (except for the workflow state's
value), but the second one shows the preferred syntax.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    This rule approves all the assignments of the "FCT0070" composite role, which are waiting for the first of two required approvals for more than one hour:
    <AutomationRule Type="CompositeRole" CompositeRole="FCT0070" WorkflowState="PendingApproval1" HoursToWait="1"  Decision="Approve"/>
    This rule approves all the assignments of the "FCT0070" composite role, which are waiting for the second of two required approvals for more than one hour:
    <CompositeRoleAutomationRule CompositeRole="FCT0070" WorkflowState="PendingApproval2" HoursToWait="1" Decision="Approve"/>
    This rule approves all the assignments of the "BO028" single role, which are waiting for their required approval for more than one hour:
    <SingleRoleAutomationRule SingleRole="BO028" WorkflowState="PendingApproval" HoursToWait="1" Decision="Approve"/>
    This rule approves all the assignments of the "SAB_User_NominativeUser" resource type, which are waiting for their required approval for more than one hour:
    <ResourceTypeAutomationRule ResourceType="SAB_User_NominativeUser" WorkflowState="PendingApproval" HoursToWait="1" Decision="Approve"/>
    This rule declines all the assignments to the entity type "Directory_User" concerning the "IT Administration" category, which are waiting for the first of two required approvals for more than one hour:
    <CategoryAutomationRule Category="IT Administration" WorkflowState="PendingApproval1" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>
    This rule declines all the assignments to the entity type "Directory_User" concerning the "Default" policy, which are found during a synchronization without a linked automatic rule, for more than one hour:
    <PolicyAutomationRule Policy="Default" WorkflowState="Found" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>
    This rule declines all the assignments to the entity type "Directory_User" concerning the "Default" policy, which are found during the first synchronization without a linked automatic rule, for more than one hour:
    <PolicyAutomationRule Policy="Default" WorkflowState="Historic" HoursToWait="1" Decision="Decline" EntityType="Directory_User"/>

```

## Properties

| Property                       | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category optional              | Int64                  | Identifier of the category targeted by the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CompositeRole optional         | Int64                  | Identifier of the composite role targeted by the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| D0 optional                    | Int64                  | Value of the dimension 0 (up to 127) that filters the assignments targeted by the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Decision default value: 0      | AutomationRuleDecision | Decision to apply on the targeted assignments. 0 - Approve. 1 - Decline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| EntityType required            | Int64                  | Identifier of the entity type targeted by the rule. This property should not be specified when writing an automation rule among the following: composite role automation rule; single role automation rule; resource type automation rule. These rules imply the entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| HoursToWait default value: -1  | Int32                  | Waiting period (in hours) from the most recent change in the workflow state of the assignments, before the decision can be applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| L0 default value: false        | Boolean                | True to indicate that the rules targets the assignments with not only the dimension 0 (up to 127), but also this dimension's child elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Policy optional                | Int64                  | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ResourceType optional          | Int64                  | Identifier of the resource type targeted by the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| SingleRole optional            | Int64                  | Identifier of the single role targeted by the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Type required                  | AutomationRuleType     | Object type targeted by the rule. 0 - CompositeRole. 1 - SingleRole. 2 - ResourceType. 4 - Category. 5 - Policy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| WorkflowState default value: 0 | WorkflowState          | Workflow state of the assignments targeted by the rule. `0` - **None**: used for Identity Manager's internal computation. `1` - **Non-conforming**: the assignment is not supported by a rule. ![Workflow State: Non-conforming](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/1_nonconforming_v603.webp) `3` - **Pre-existing**: the assignment is not supported by a rule, and it existed before the production launch. ![Workflow State: Pre-existing](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/3_preexisting_v603.webp) `4` - **Requested**: the assignment is requested via a workflow, but not yet added. **NOTE:** Usually displayed in workflows' summaries. ![Workflow State: Pending Approval - Requested](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/4_requested_v603.webp) `5` - **Calculated - Missing Parameters**: the assignment was done by a rule which does not specify at least one required parameter for the role. ![Workflow State: Calculated - Missing Parameters](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/5_calculatedmissingparameters_v603.webp) `8` - **Pending Approval**: the assignment must be reviewed manually by a knowledgeable user. ![Workflow State: Pending Approval](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/8_pendingapproval_v603.webp) `9` - **Pending Approval 1 of 2**: the assignment is pending the first approval on a two-step workflow. `10` - **Pending Approval 2 of 2**: the assignment is pending the second approval on a two-step workflow. `11` - **Pending Approval 1 of 3**: the assignment is pending the first approval on a three-step workflow. `12` - **Pending Approval 2 of 3**: the assignment is pending the second approval on a three-step workflow. `13` - **Pending Approval 3 of 3**: the assignment is pending the third approval on a three-step workflow. `16` - **Approved**: the assignment has completed all approval steps. ![Workflow State: Approved](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/16_approved_v603.webp) `17` - **Declined**: the assignment is explicitly declined during one of the approval steps. ![Workflow State: Declined](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/17_declined_v603.webp) `18` - **Calculated**: the assignment is given by one of Identity Manager's rules. ![Workflow State: Calculated](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/18_calculated_v603.webp) `19` - **Inactive**: the assignment has expired and is not yet removed. Does not appear in the UI. `20` - **Cancellation**: the assignment is inferred by a role that was declined. See the [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md) topic for additional information. ![Workflow State: Cancellation](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/20_cancellation_v603.webp) `21` - **Suggested**: the assignment comes from a rule of type `Suggested` and appears among suggested permissions in the owner's permission basket. See the [Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information. ![Workflow State: Suggested](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/21_suggested_v603.webp) `22` - **Suggested**: the assignment comes from a rule of type `Automatic but with Validation` and appears among suggested permissions for a pre-existing user. See the [Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information. _Remember,_ the states `21` and `22` are both displayed in the UI as **Suggested** but they do not mean the exact same thing. `23` - **Automatic but with Validation**: the assignment comes from a rule of type `Automatic but with Validation` and appears in a new user's permission basket. See the [Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information. `24` - **Approved - Questioned**: the assignment was approved manually, then a change has been made in the assignment's source data via one of Identity Manager's workflows that should change the assignment but the manual approval is authoritative. See the [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information. ![Workflow State: Approved - Questioned](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/24_approvedquestioned_v603.webp) `25` - **Pending Approval - Risk**: the assignment must be reviewed due to a risk. ![Workflow State: Pending Approval (Risk)](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/25_pendingapprovalrisk_v603.webp) `26` - **Blocked**: the assignment is blocked due to a risk of type `Blocking`. Does not appear in the UI. `27` - **Prolonged**: the assignment has expired but it was set with a grace period. See the [Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information. ![Workflow State: Prolonged](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/27_prolonged_v603.webp) `116` - **Approved - Risk**: the assignment is approved despite a risk. ![Workflow State: Approved (Risk)](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/16_approved_v603.webp) `118` - **Given by a Role**: the assignment comes from the assignment of a role. For example, when a user is assigned a SAP entitlement without having a SAP account, the account is created automatically with this state. ![Workflow State: Given by a Role](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/automationrule/118_givenbyarole_v603.webp) **Found** - Will match assignments not supported by a rule. ![Workflow State: Non-conforming](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/1_nonconforming_v603.webp) **Historic** - Will match assignments not supported by a rule, which existed before the production launch. ![Workflow State: Pre-existing](/img/product_docs/identitymanager/identitymanager/integration-guide/role-assignment/evaluate-policy/3_preexisting_v603.webp) |

# Category

A category is a classification of Composite Roles, Single Roles or/and
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). It can be used to group multiple roles of the same
context.

## Examples

The following example declares a new category called "Shares - Public".

```

    <Category Policy="Default" Identifier="Shares - Public" DisplayName_L1="Shares - Public" />

```

## Properties

| Property                         | Details                                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description_L1 optional          | **Type** String **Description** Describe this category in detail.                                                                                                     |
| DisplayName_L1 required          | **Type** String **Description** Display name of the category in language 1 (up to 16).                                                                                |
| Identifier required              | **Type** String **Description** Unique identifier of the category.                                                                                                    |
| IsCollapsed default value: false | **Type** Boolean **Description** Defines if the category must be collapsed by default in the permission list of a resource (View Permissions popup and roles basket). |
| Parent optional                  | **Type** Int64 **Description** Represents the parent category definition.                                                                                             |
| Policy required                  | **Type** Int64 **Description** Identifier of the policy that the category is part of.                                                                                 |

# Composite Role

Defines basic information about a composite role. Composite roles identify affiliations or job
functions by which users can be grouped. A composite role is a business role comprehensible by
managers. It provides a layer of abstraction above existing entitlements, technical roles and single
roles.

Roles can be used to:

- Grant various types and levels of access.
- Restrict access to sensitive information assets by grouping entitlements in a form that is
  meaningful to the business.
- Grant the minimum privileges required by an individual to perform their job.

Roles can be requested manually, or they can be configured to be assigned automatically via a
[Composite Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). To further control access, roles can be
related via required, inherited, or permitted relationships.

## Examples

The following example declares a new composite role.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <CompositeRole Identifier="HR_Accounting" DisplayName_L1="HR:accounting" Category="HR" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default"/>

```

## Properties

| Property                                                                                   | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ApprovalWorkflowType default value: 0                                                      | ProvisioningPolicyApprovalWorkflow             | Number of validations required to assign manually the composite role (from `None` to `Three`). The value `ManualAssignmentNotAllowed` is used when a manual assignment cannot be performed.                                                                                                                                                                                                                                                                                                                                          |
| Category optional                                                                          | Int64                                          | Identifier of the category that the role is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CommentActivationOnApproveInReview default value: Inherited                                | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                                        |
| CommentActivationOnDeclineInReview default value: Inherited                                | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                                         |
| CommentActivationOnDeleteGapInReconciliation default value: Inherited                      | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                       |
| CommentActivationOnKeepGapInReconciliation default value: Inherited                        | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                         |
| Description_L1 optional                                                                    | String                                         | Detailed description of the single role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DisplayName_L1 required                                                                    | String                                         | Display name of the composite role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| EntityType required                                                                        | Int64                                          | Identifier of the entity type whose resources can receive the composite role.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| GracePeriod optional                                                                       | Int32                                          | Duration (in minutes) for which a lost automatic composite role is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. If it is not defined, the value is inherited from the policy.                                                   |
| HideOnSimplifiedView default value: false                                                  | Boolean                                        | `true` to show the role in a user's basket only in advanced view and not simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                                                                        | String                                         | Unique identifier of the composite role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ImplicitApproval default value: 0                                                          | Byte                                           | Indicates if the validation steps of the composite role can be skipped. `0` - Inherited: implicit approval value in the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions.                                                                                                                                                                                                                                       |
| ManualAssignmentEndDateLockedToContextMode default value: ExplicitNotContextBoundByDefault | ManualAssignmentEndDateLockedToContextModeRole | The values are: 0 - ExplicitNotContextBoundByDefault — By default, the assignment's end date will not be context bound in order to encourage the manual entry of an end date 1 - ExplicitContextBoundByDefault — By default, the assignment's end date will be context bound and therefore locked, but a manual date can be entered. 2 - Never — The assignment's end date will never be locked and needs to be specified manually 3 - Always — The assignment's end date is always locked according to the applicable context rule. |
| MaxDuration optional                                                                       | Int32                                          | Duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it.                                                                        |
| Policy required                                                                            | Int64                                          | Identifier of the policy that the role is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ProlongationWithoutApproval default value: 0                                               | ProlongationWithoutApproval                    | Indicates whether the role can be extended without any validation. `0` - Inherited: gets the value from the policy. `1` - Enabled. `2` - Disabled.                                                                                                                                                                                                                                                                                                                                                                                   |
| R0 default value: false                                                                    | Boolean                                        | `true` to set the dimension 0 (up to 3V following the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)) as a required parameter when assigning the role.                                                                                                                                                                                                                                                                                                                             |
| Tags optional                                                                              | String                                         | Tags of the roles targeted by the campaign filter. The tag separator is ¤.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

# Composite Role Rule

A composite role rule assigns a composite role to users who match given criteria.

## Examples

The following example declares a new rule to give the composite role `"HR_Accounting"` to all the
`"FCT0008"` users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Policy="Default" />
    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Type="Suggested" Policy="Default" />

```

## Properties

| Property                      | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D0 optional                   | Int64    | Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the composite role to users whose country is `France`.                                                                                                                                                                                                                                                                                 |
| IsDenied default value: false | Boolean  | `true` to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| L0 default value: false       | Boolean  | `true` to activate inheritance for `D0` (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ParentRole optional           | Int64    | Identifier of a composite role that users must have to trigger the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Policy required               | Int64    | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Priority default value: 0     | Int32    | Priority of the rule over the others. The highest priority is defined by the smallest number. This enables, for example, overriding "deny rules" that have a lower priority (higher number).                                                                                                                                                                                                                                                                                                                             |
| Role required                 | Int64    | Identifier of the composite role to be assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Type default value: 0         | RuleType | Type of the rule. `0` - Required — the role is automatically assigned to users matching the criteria. `1` - RequestedAutomatically — the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - Suggested — the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |

# Context

A context is the result of the combination of all identity-related entities, for example personal
data, contracts or positions, so that all dimension values contained in a given context are valid
for a given user on a given period of time.

Contexts define the resources' scopes of responsibility. They are used during provisioning to
simplify the application of the role model's rules based on dimensions.

See the
[ Identity Lifecycle: Joiners, Movers and Leavers ](/docs/identitymanager/6.2/identity-management/user-lifecycle/index.md)
for additional information about context generation.

## Properties

| Property                       | Details                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Automatic default value: false | **Type** Boolean **Description** Specifies the automatic assignments.                                                                 |
| D0 optional                    | **Type** Int64 **Description** Dimension0 identifier, specifies the scope in which the assignment is restricted. Going from 0 to 127. |

# Context Rule

A context rule configures, for the identities of a given entity type, the generation of contexts
which are used in provisioning to simplify the application of the role model's rules.

A context rule should be created for each entity type for which we want to assign entitlements
automatically based on users' attributes.

Without a context rule, automatic entitlements (assigned via the role model's rules):

- cannot be assigned based on users' attributes;
- don't have specific start and end dates, so they are valid from the resource creation until its
  deletion.

See the
[ Identity Lifecycle: Joiners, Movers and Leavers ](/docs/identitymanager/6.2/identity-management/user-lifecycle/index.md)
for additional information about context generation.

A context rule can be configured with [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in situations
where a user needs to be modeled by several contexts over time or simultaneously.

Without record sections, a context rule can generate only one context per user. This means that
users cannot have more than one contract, or position, at a time, and that data changes cannot be
anticipated.

## Examples

The following example generates contexts, i.e. sets of dimension-value pairs, for users from
`Directory_User` as resources of `Directory_User:Records`.

Both the start and end dates of the future contexts are defined with C# expressions based on users'
contract and position start/end dates.

All contexts are to be made of the properties specified by the bindings `B0` to `B7`.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### ExcludeExpression

The following example is similar to the previous one, except that we choose to exclude users
declared as "draft" from the role model and provisioning calculations.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

This option can exclude workers who are not validated yet, or who have left the company, for
example.

### RiskFactorType

The following example is similar to the previous one, except that we force the final risk score of a
user to be the maximum value of all their risk scores.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" RiskFactorType="Max"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### Role mining

Context rules also contain some parameters for
[ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md).

Users are distributed in a hypercube made of all dimensions, like in the following table (left) when
we have only 2 dimensions, where for example `1`, `2`, `3`, etc. are users' possible locations, and
`A`, `B`, `C`, etc. are users' possible departments in the company. When considering one dimension
and sorting the dimension values per user percentage, we get the following table (right).

![Role Mining Tables](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/contextrule/contextrules_rolemining.webp)

The tables here represent a simple situation with few dimensions. But the higher the number of
dimensions, the more complex are role mining's computations. This is known as the curse of
dimensionality.

The following example is similar to the first one, except that we customize some role mining
parameters which help tackle the curse of dimensionality:

- `MinIdentitiesCount` establishes that the role mining's engine will generate a role assignment
  rule only when the rule is applicable to at least 5 users;
- `ReductionOutlierPercentage` establishes that the role mining's engine will consider the last 2.0%
  dimension values (from `Y` to `Z` in the table above) to be grouped together in a single category
  "Others".

  The definition of the outlier percentage is particularly useful when managing, for example a
  services company with thousands of distinct organizations, where many organizations contain only
  one or two users. We can safely choose to group into a single fictitious organization the 2% of
  all users that involve the smallest organizations.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" SourceEntityType="Directory_User" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" MinIdentitiesCount="5" ReductionOutlierPercentage="2.0"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

### Certification items

Unlike `ResourcesStartBinding` and `ResourcesEndBinding`, `ResourcesStartExpression` and
`ResourcesEndExpression` cannot be used to define the resources to include in the related
certification campaigns. Thus, when needing to define which resources to include with more than
start/end bindings, add a comparison based on `ResourceCertificationComparisonBinding`,
`ResourceCertificationComparisonOperator` and `ResourceCertificationComparisonValue`.

The following example includes in certification campaigns only the resources that have their
`IsActivePosition` property set to `1`.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" Policy="Default" ResourcesBinding="Records" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" SourceEntityType="Directory_User" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" RiskFactorType="Max" ResourceCertificationComparisonBinding="Directory_UserRecord:IsActivePosition" ResourceCertificationComparisonOperator="Equal" ResourceCertificationComparisonValue="1"
    B0="Directory_UserRecord:Organization"
    B1="Directory_UserRecord:Title"
    B2="Directory_UserRecord:Site"
    B3="Directory_UserRecord:Site.Region.Country"
    B4="Directory_UserRecord:UserType.Category"
    B5="Directory_UserRecord:Organization.Type"
    B6="Directory_UserRecord:Subsidiary"
    B7="Directory_UserRecord:ExternalCompany"
/>

```

**Note:** must be configured together with the other `ResourceCertificationComparison` properties.

**Note:** when not specified, certification items are defined by `ResourcesStartBinding` and
`ResourcesStartBinding`.

## Properties

| Property                                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B0 optional                                      | **Type** Int64 **Description** Binding of the dimension 0 (up to 3V in [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)). The dimension can then be used in rules to filter the rules' targets.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| DisplayName_L1 required                          | **Type** String **Description** Display name of the context rule in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ExcludeExpression optional                       | **Type** String **Description** C# expression that defines the resources to exclude from context generation, because they should not be part of the role model and provisioning calculations. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                   |
| Identifier required                              | **Type** String **Description** Unique identifier of the context rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MinIdentitiesCount default value: 0              | **Type** Int32 **Description** Minimum number of identities to take into account to generate a rule by the role mining engine.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Policy required                                  | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ReductionOutlierPercentage default value: 0.0    | **Type** Float **Description** Proportion of identities that are grouped together by role mining to aggregate all the small entities in one "other" category. This is used to speed up the mining process as the number of groups can be greatly reduced.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ResourceCertificationComparisonBinding optional  | **Type** Int64 **Description** Binding of the property whose value is to be compared to `ResourceCertificationComparisonValue` in order to specify the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included.                                                                                  |
| ResourceCertificationComparisonOperator optional | **Type** QueryComparisonOperator **Description** Operator of the comparison that specifies the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included.                                                                                                                                          |
| ResourceCertificationComparisonValue optional    | **Type** String **Description** Value to be compared to the value of `ResourcesCertificationComparisonBinding` in order to specify the resources to include in the related certification campaigns. **Note:** must be configured together with the other `ResourceCertificationComparison...` properties. **Note:** when not specified, certification items are defined by `ResourcesStartBinding` and `ResourcesStartBinding`. And when they are not specified either, there is no filtering, so all valid resources (those with `ValidTo` later than today's date) are included.                                                                                                  |
| ResourcesBinding optional                        | **Type** Int64 **Description** Binding that represents the entity type of the contexts to be created from the `SourceEntityType`. It can also be defined via `ResourcesExpression`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ResourcesEndBinding optional                     | **Type** Int64 **Description** Binding of the date property among those from `ResourcesBinding` which specifies the end of validity for all [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties of the context. It can also be defined via `ResourcesEndExpression`. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).                                                                                                                              |
| ResourcesEndExpression optional                  | **Type** String **Description** Expression based on the `ResourcesBinding` entity type that defines the end of validity for all [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties of the context. It can also be defined via `ResourcesEndBinding`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).         |
| ResourcesExpression optional                     | **Type** String **Description** Expression based on `SourceEntityType` that defines the entity type of the contexts to be created. It can also be defined via `ResourcesBinding`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                               |
| ResourcesStartBinding optional                   | **Type** Int64 **Description** Binding of the date property among those from `ResourcesBinding` which specifies the beginning of validity for all [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties of the context. It can also be defined via `ResourcesStartExpression`. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).                                                                                                                      |
| ResourcesStartExpression optional                | **Type** String **Description** Expression based on the `ResourcesBinding` entity type that defines the beginning of validity for all [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) properties of the context. It can also be defined via `ResourcesStartBinding`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. **Note:** a context rule's start and end dates are ignored when the related identities are also configured with [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). |
| RiskFactorType optional                          | **Type** RiskFactorType **Description** Operator used to aggregate a user's risk scores together to compute the user's global risk score. `0` - **None**. `1` - **Max**: a user's final risk score is the maximum value among all their risk scores. `2` - **Average**: a user's final risk score is the average value of all their risk scores.                                                                                                                                                                                                                                                                                                                                    |
| SourceEntityType required                        | **Type** Int64 **Description** Identifier of the entity type of the parent resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

# Indirect Resource Rule

An indirect resource rule is a link between a resource and its indirect groups, equivalent in
another system and the indirect groups of the equivalent in the other system.

## Examples

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<IndirectResourceRule
    ResourceType="AzureAD_DirectoryObject_NominativeUser"
    Property="memberOf"
    Correspondence="SharePointObject"
    CorrespondenceMembershipProperty="Group"
    Entitlement="Entitlement"
    />
```

## Properties

| Property                                  | Details                                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Correspondence optional                   | **Type** Int64 **Description** Property used to link the resource with an associated resource in another system, like Microsoft Entra ID (formerly Microsoft Azure AD) or SharePoint groups.                                                                                                         |
| CorrespondenceMembershipProperty optional | **Type** Int64 **Description** Same as Property but for the associated resource found in the external system.                                                                                                                                                                                        |
| Entitlement optional                      | **Type** Int64 **Description** Property used if the assignment is not given by the property in the external system. In the example, the assignment that we are looking for is not whether a user is in a group. Instead, it is the entitlement(s) given by the groups of which the user is a member. |
| Property required                         | **Type** Int64 **Description** Resource property for membership. Example: if our entity is a group, the group(s) it belongs to.                                                                                                                                                                      |
| ResourceType required                     | **Type** Int64 **Description** Represents the Id of the ResourceType you want to use the rule on.                                                                                                                                                                                                    |

# Mining Rule

After roles are assigned to users, Identity Manager can use mining rules to perform role mining.
Role mining means that Identity Manager analyzes existing assignments in order to suggest
[Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which will assign
[ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to certain users matching given criteria.

The [ Build Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) replaces the
existing single role rules in the specified rule policy with the new generated ones.

## Examples

The following example set of mining rules targets the roles owned by users from `Directory_User`.
These mining rules are part of the `Default` policy while the role assignment rules are to be
generated to be part of the `Mining` policy.

The following rules have a different impact whether they are applied individually, or all together.
Indeed, during role mining, the first mining rule of type `Required` applies to given roles with a
given precision, then the second mining rule applies to a larger group of roles but only to those
still with no linked single role rules.

- The first rule will generate required rules (i.e. automatic assignments) for sensitive assignments
  that require 2 or 3 validations, with a high precision (via `PrecisionMinPercentage` and
  `FalsePositiveMaxPercentage`).

  ```

    <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" IncludeNoValidation="false" IncludeSimpleValidation="false" FalsePositiveMaxPercentage="0.03"  PrecisionMinPercentage="97.0" RuleType="0" Priority="10" />

  ```

- The second rule will generate required rules (i.e. automatic assignments) for all assignments,
  with a lower precision.

  ```

    <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" FalsePositiveMaxPercentage="0.05" PrecisionMinPercentage="95.0" RuleType="0" Priority="1" />

  ```

- The third rule will generate suggested rules (i.e. assignments listed as suggested in users'
  permission baskets) for all assignments, with an even lower precision.

  ```

    <MiningRule EntityType="Directory_User" RulePolicy="Mining" Policy="Default" FalsePositiveMaxPercentage="20.0" PrecisionMinPercentage="80.0" RuleType="2" Priority="1" />

  ```

## Properties

| Property                                      | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Category optional                             | **Type** Int64 **Description** Identifier of the category containing the roles targeted by role mining's analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| EntityType required                           | **Type** Int64 **Description** Identifier of the entity type that represents the owners of the roles targeted by role mining's entitlement analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ExcludeRole default value: false              | **Type** Boolean **Description** `true` to ignore the specified roles during the mining process triggered by the next mining rules (in terms of priority).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| FalsePositiveMaxPercentage default value: 0.0 | **Type** Float **Description** Maximum authorized percentage of false positive assignments, i.e. roles that are assigned to users who should not have them. Netwrix Identity Manager (formerly Usercube) recommends around 1%, to be lowered when working on a sensitive application and/or a large user population, and vice versa.                                                                                                                                                                                                                                                                                                               |
| IncludeDoubleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring two validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| IncludeNoValidation default value: true       | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring zero validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| IncludeSimpleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring one validation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| IncludeTripleValidation default value: true   | **Type** Boolean **Description** `true` to include in role mining's analysis the roles requiring three validations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Policy required                               | **Type** Int64 **Description** Identifier of the policy that the mining rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PrecisionMinPercentage default value: 100.0   | **Type** Float **Description** Minimum authorized percentage of correct role assignments, considering both the roles that are assigned to users who should have them, and the roles that are not assigned to users who should not have them. NETWRIX recommends around 99.5%, to be lowered when working on a sensitive application and/or a large user population, and vice versa.                                                                                                                                                                                                                                                                |
| Priority default value: 0                     | **Type** Int32 **Description** Priority order of the mining rule. Identity Manager applies mining rules one after the other in descending order. **Info:** a mining rule can generate single role rules only for the single roles that were not already associated with a single role rule by another mining rule during the same role mining task.                                                                                                                                                                                                                                                                                                |
| RulePolicy optional                           | **Type** Int64 **Description** Identifier of the policy that the generated single role rules are to be part of. **Note:** NETWRIX recommends using a policy dedicated to role mining in order not to remove existing assignment rules.                                                                                                                                                                                                                                                                                                                                                                                                             |
| RuleType default value: 0                     | **Type** Int32 **Description** Represents the type of the generated single role rules. `0` - **Required**: the role is automatically assigned to users matching the criteria. `1` - **RequestedAutomatically**: the role is listed in the permission basket of new workers. These assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - **Suggested**: the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request. Suggested assignments must be selected manually to be requested, and will go through the validation process. |

# Policy

A policy is a next generation access control (NGAC) which works by assigning permissions to users
based on their roles within an organization, and other dimensions and attributes. A policy is a
sub-group of the role model, containing roles and rules, that allows an administrator to manage the
access specific to their applications.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Policy Identifier="Default" DisplayName_L1="Default Policy" IsProvisioningEnabled="true" />
```

All `ResourceType`, `SingleRole`, `CompositeRole` and `Category` must belong to a Policy. This is
done by specifying the `Policy` attribute. See the [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
[ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), [ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
[ Category ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topics for additional information.

```
<Category Policy="Default" Identifier="AD" DisplayName_L1="Active Directory" />
```

## Properties

| Property                                                                                   | Type                                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CommentActivationOnApproveInReview default value: Optional                                 | CommentActivation                          | Indicates if a comment is enabled when reviewing a role request associated with the policy, and deciding to approve it. 0 - Disabled. 1 - Optional. 2 - Required.                                                                                                                                                                                                                                                                                                                                                                    |
| CommentActivationOnDeclineInReview default value: Required                                 | CommentActivation                          | Indicates if a comment is enabled when reviewing a role request associated with the policy, and deciding to refuse it. 0 - Disabled. 1 - Optional. 2 - Required.                                                                                                                                                                                                                                                                                                                                                                     |
| CommentActivationOnDeleteGapInReconciliation default value: Optional                       | CommentActivation                          | Indicates if a comment is enabled when reviewing a non-conforming role assignment associated with the policy, and deciding to delete it. 0 - Disabled. 1 - Optional. 2 - Required.                                                                                                                                                                                                                                                                                                                                                   |
| CommentActivationOnKeepGapInReconciliation default value: Required                         | CommentActivation                          | Indicates if a comment is enabled when reviewing a non-conforming role assignment associated with the policy, and deciding to keep it. 0 - Disabled. 1 - Optional. 2 - Required.                                                                                                                                                                                                                                                                                                                                                     |
| D0 optional                                                                                | Int64                                      | Value of the dimension 0 (up to 127) that filters the access to the policy and its roles.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| DisplayName_L1 required                                                                    | String                                     | Display name of the policy in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| GracePeriod default value: 0                                                               | Int32                                      | Duration (in minutes) for which a lost automatic entitlement associated with this policy is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. This value can be overwritten for each composite role and single role.                 |
| HasImplicitApproval default value: false                                                   | Boolean                                    | True to skip the approval circuit when the requester has the appropriate review permissions. This value can be overwritten for each policy object (composite role, single role, resource type).                                                                                                                                                                                                                                                                                                                                      |
| Identifier required                                                                        | String                                     | Unique identifier of the policy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| IsExternal default value: false                                                            | Boolean                                    | True to indicate that the policy's roles are outside Identity Manager's scope. The roles are managed by an external source, and Identity Manager cannot add, update nor delete any role.                                                                                                                                                                                                                                                                                                                                             |
| IsProvisioningEnabled default value: false                                                 | Boolean                                    | True to enable the provisioning policy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| IsSimulationEnabled default value: false                                                   | Boolean                                    | True to enable the provisioning policy simulation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ManualAssignmentEndDateLockedToContextMode default value: ExplicitNotContextBoundByDefault | ManualAssignmentEndDateLockedToContextMode | The values are: 0 - ExplicitNotContextBoundByDefault — By default, the assignment's end date will not be context bound in order to encourage the manual entry of an end date 1 - ExplicitContextBoundByDefault — By default, the assignment's end date will be context bound and therefore locked, but a manual date can be entered. 2 - Never — The assignment's end date will never be locked and needs to be specified manually 3 - Always — The assignment's end date is always locked according to the applicable context rule. |
| MaxDuration default value: 0                                                               | Int32                                      | Duration (in minutes) after which the assignments induced by the policy will be automatically revoked, if no earlier end date is specified. It impacts only the assignments which are performed after the maximum duration is set. Pre-existing assignments are not impacted.                                                                                                                                                                                                                                                        |
| ProlongationWithoutApproval default value: false                                           | Boolean                                    | True to allow the policy's roles to be extended without any validation.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Record Section

Record sections shape identity data for a given entity type, by grouping properties into sections,
for example personal data, contract or position.

Record sections impact the generation of identities' contexts which contain users' dimension values
valid on a given period of time. The aim is to simplify the application of the role model' rules for
provisioning.

Thanks to this data organization in sections, the identities of a given entity type can be modeled
by more than one context over time, even simultaneously. This means that users can have more than
one contract, or position, at a time, and that data changes can be anticipated.

See the
[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md)for
additional information on identity modeling.

**Configuration recommendations:**

As record sections cannot be configured without a [ Context Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), Netwrix
Identity Manager (formerly Usercube)recommends starting with the configuration of the context rule
before configuring record sections.

Netwrix Identity Manager (formerly Usercube)recommends defining at least two record sections: a
default section for the properties shared by all records, and another section for a given set of
properties which differentiate between records. The default section must contain zero properties,
the shared properties are those that are not defined in the other section(s).

For example, to model several positions for a single user, we configure the default record section
to contain the properties shared by all positions such as personal data, and we configure the
position section to contain the properties specific to each position. Similar to the position
section, we can also typically configure a section for contracts.

## Examples

The following example models users from the `Directory_User` entity type with three sets of
properties: user properties, contract properties and position properties. All created records will
be resources from the `Directory_UserRecord` entity type.

The properties from the contract (or position) section are the properties specific to each contract
(or position). The properties from `Directory_User` that are not specified in the record sections
are the properties shared between all records, here user properties.

Each section must be defined with start and end dates, so that Identity Manager's engine is able to
combine all periods of validity and apply the rules with the right input at any time.

```

Default section:
<RecordSection Identifier="Directory_UserRecord_Default" DisplayName_L1="User Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="StartDate" EndProperty="EndDate"> ...
</RecordSection>

Contract section:
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="ContractStartDate" EndProperty="ContractEndDate"> ...
  <Property Property="UserType"/>  <Property Property="ExternalCompany"/>  <Property Property="Subsidiary"/></RecordSection>

Position section:
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="PositionStartDate" EndProperty="PositionEndDate"> ...
  <Property Property="PositionIdentifier" />  <Property Property="JobTitle" />  <Property Property="OfficeNumber" />  <Property Property="Organization" />  <Property Property="Site"/>  <Property Property="Title" />  <Property Property="Office" />  <Property Property="Manager" />  <Property Property="IGAManager" />  <Property Property="EffectiveIGAManager" />  <Property Property="IsMainPosition" /></RecordSection>

```

### InstanceKeyExpression

The following example computes a unique key for each record section instance. This way, we can
distinguish between contracts thanks to their identifiers, same for positions, and between user
property sets thanks to a C# expression based on the start date.

```

Default section:
<RecordSection Identifier="Directory_UserRecord_Default" DisplayName_L1="User Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="StartDate" EndProperty="EndDate" InstanceKeyExpression="C#:record:return record.StartDate.HasValue ? record.StartDate.Value.ToString("yyyyMMdd") : string.Empty;"></RecordSection>

Contract section:
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="ContractStartDate" EndProperty="ContractEndDate" InstanceKeyExpression="C#:record:return record.ContractIdentifier;">  <Property Property="UserType"/>  ...
</RecordSection>

Position section:
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="PositionStartDate" EndProperty="PositionEndDate" InstanceKeyExpression="C#:record:return record.PositionIdentifier;">  <Property Property="PositionIdentifier" />  ...
</RecordSection>

```

An instance key is required when we need to uniquely identify a context, i.e. when we may have
several simultaneous contexts.

For example, an instance key is required for the position section when users can have overlapping
positions.

### IsDefaultBoundariesSection

The following example uses the contract start/end dates as default boundaries in users'
[validity period](/docs/identitymanager/6.2/identity-management/user-lifecycle/onboarding-offboarding.md#period-of-validity),
instead of those from the default section. It may be because, for example, HR services do not enter
an end date for the personal data of users on permanent contracts. So we prefer to use the start and
end dates of their contracts.

```

Contract section:
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="ContractStartDate" EndProperty="ContractEndDate" IsDefaultBoundariesSection="true">  <Property Property="UserType"/>  ...
</RecordSection>

```

### Context extension

There can be some time gap where no context is defined, for example a time gap with a position but
no contract or vice versa. Identity Manager offers the possibility to choose whether an existing
context is to be extended to the period without context. And in case we decide to use another
context and extend its values, which context should it be?

![Schema - ExtensionKind](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/recordsection/recordsection_extensionkind.webp)

Here, we decide to extend an existing contract to the gap, for example because users' email
addresses are built using the contract type to add `-ext` for external users. And we decide to not
extend the position.

In the following example, the contract section uses `SortKeyExpression` to establish between
existing contracts a priority order that will determine which contract should be extended to the
gap. Based on this C# expression that returns a value `A`, `B` or `C`, the `ExtendedSortKey`
considers as extendable only the contract(s) whose expression returns `C`.

The position section uses `ExtensionKind` set to `None` to block the extension mechanism.

```

Contract section:
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="ContractStartDate" EndProperty="ContractEndDate" SortKeyExpression="C#:record:return record.Main.GetValueOrDefault() && record.UserType.Id == -018 ? "C" : (!record.Main.GetValueOrDefault() && record.UserType.Id == -018 ? "B" : "A");" ExtendedSortKey="C">  <Property Property="UserType"/>  ...
</RecordSection>

Position section:
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="PositionStartDate" EndProperty="PositionEndDate" ExtensionKind="None">  <Property Property="PositionIdentifier" />  ...
</RecordSection>

```

When not specifying any sort key nor extended sort key, Identity Manager will select a context to
extend to the gap. However, it may not be functionally the most meaningful context.

## Properties

| Property                                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BoundaryKind default value: 0                   | **Type** RecordBoundaryKind **Description** Defines how the section dates are computed for a resource, when the current start/end dates are null. `0` - None: start date and end date are equal respectively to the minimum value of `StartProperty` and maximum value of `EndProperty` when comparing the default sections of all records. `1` - Kept: start and end dates are equal respectively to the default start date (1900/01/01 00:00:00) and end date (2079/06/06 00:00:00). **Info:** the boundary has no effect on the default section which is the reference to compute the default dates in other sections. When the default section's start/end dates are null, then they equal the default start/end dates. |
| DisplayName_L1 required                         | **Type** String **Description** Display name of the section in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| EndProperty optional                            | **Type** Int64 **Description** Date property among those from the `ResourceEntityType` which specifies the end of validity for all the Record Section of the section. It cannot be a property computed by an `EntityPropertyExpression`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ExtendedSortKey optional                        | **Type** String **Description** Value used as a threshold for `SortKeyExpression` values to determine whether the Record Section property values of a given record section can be extended from a context where the values are defined to another context where no properties from the section are defined. This extension is enabled only when the value of `SortKeyExpression` of the section is higher (with an ordinal comparison) than `ExtendedSortKey`.                                                                                                                                                                                                                                                              |
| ExtensionKind default value: 0                  | **Type** RecordExtensionKind **Description** Defines whether the section's property values can be extended (copied) from a context where the properties are defined to another context where no properties from the section are defined. `0` - Default: the section's property values can be extended. `4` - None: the section's property values cannot be extended.                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                             | **Type** String **Description** Unique identifier of the section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| InstanceKeyExpression optional                  | **Type** String **Description** Expression returning a key to uniquely identify a context, i.e. distinguish between job positions for example when users can have several concurrent positions, or between contracts. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                   |
| IsDefaultBoundariesSection default value: false | **Type** Boolean **Description** `true` to use the start/end dates of this section as the default boundaries, i.e. the start/end dates of users' validity period. When no section has `IsDefaultBoundaries` set to `true`, the default section (the one without properties) is automatically selected.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ResourceEntityType required                     | **Type** Int64 **Description** Identifier of the entity type of the multiple records to be created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| SortKeyExpression optional                      | **Type** String **Description** C# expression used to compute a value for each record, to be used as a priority, following an ordinal comparison. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. When a record section has `ExtensionKind` set to `Default` and a priority value higher than `ExtendedSortKey`, then the record property values can be extended from a context where the values are defined to another context where no properties from the section are defined.                                                                                                                                                       |
| SourceEntityType required                       | **Type** Int64 **Description** Identifier of the entity type of the parent resource.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| StartProperty optional                          | **Type** Int64 **Description** Date property among those from the `ResourceEntityType` which specifies the beginning of validity for all he Record Section properties of the section. It cannot be a property computed by an `EntityPropertyExpression`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Child Element: Property

A record section is a set of record properties which belong to the resource entity type.

### Examples

In the following example, the position section gathers the properties `Organization`, `Location` and
`Title`, while the default section gathers all the other properties from `Directory_UserRecord`.

The property `Location` can be extended from a context where the location is defined to a context
where it is not. The two other properties cannot be extended.

See the Record Section topic for additional information.

```

Default section:
<RecordSection Identifier="Directory_UserRecord_Default" DisplayName_L1="Contract Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="ContractStartDate" EndProperty="ContractEndDate">
</RecordSection>

Position section:
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" SourceEntityType="Directory_User" ResourceEntityType="Directory_UserRecord" StartProperty="StartDate" EndProperty="EndDate">
    <Property Property="Organization" ExtensionKind="None" />    <Property Property="Location"/>    <Property Property="Title" ExtensionKind="None" />
</RecordSection>

```

### Properties

| Property                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExtensionKind default value: 0  | **Type** RecordExtensionKind **Description** Defines whether the property value can be extended (copied) from a context where the section properties are defined to another context where no properties from the section are defined. `0` - Default: the property value can be extended. `4` - None: the property value cannot be extended. **Note:** a property value can be extended only if the section is extendable too. |
| IsExcluded default value: false | **Type** Boolean **Description** Excludes the given property from the section. This is used only in the default section to remove properties such as the RecordIdentifier that are always different between all the records and that are thus not interesting for the provisioning rules.                                                                                                                                     |
| Property required               | **Type** Int64 **Description** Identifier of the property from the record section's `ResourceEntityType` that is to be part of the section.                                                                                                                                                                                                                                                                                   |

# Resource Classification Rule

In Identity Manager, this type of rule is used to classify the resources based on a C# expression.

## Examples

The following example declares a rule to classify the Active Directory accounts based on the dn
values.

```

    <ResourceClassificationRule ResourceType="AD_Entry_TechnicalEntry" Policy="Default" ResourceTypeIdentificationConfidenceLevel="100"
        TargetExpression="C#:resource:return resource.dn.Contains(",CN=Roles,");" />

```

## Properties

| Property                                                   | Details                                                                                                                                                                                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy required                                            | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                             |
| ResourceType required                                      | **Type** Int64 **Description** Represents the resource type definition.                                                                                                                                                       |
| ResourceTypeIdentificationConfidenceLevel default value: 0 | **Type** Int32 **Description** Defines the confidence level used to match the resources.                                                                                                                                      |
| SourceMatchedConfidenceLevel default value: false          | **Type** Boolean **Description** Defines the confidence level used to match the sources.                                                                                                                                      |
| TargetExpression optional                                  | **Type** String **Description** Defines the C# expression used to classify the resources. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. |

# Resource Correlation Rule

A correlation rule is used to
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
the resources, i.e. link resources to their owners.

## Examples

#### Correlation based on unchanged attributes

The following example creates an Active Directory correlation rule based on the mail property:

```

    <ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Directory_UserRecord:Mail" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="AD_Entry:mail" />

```

#### Correlation based on attributes changed by a function

The following example copies the previous example (based on unchanged attributes), but using a
predefined function (`ToLower`) in source and target bindings' expressions, to compare the email
attributes:

```

<ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Mail" TargetExpression="ToLower" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="mail" SourceExpression="ToLower" />

```

A list of [Predefined functions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) is available.

#### Correlation based on attributes within a C# expression

The following example creates an Active Directory correlation rule based on the comparison between
the AD's simplified display name and an expression from the external system:

```

<ResourceCorrelationRule ResourceType="AD_Entry_NominativeUser" TargetBinding="displayName" TargetExpression="Simplify" Policy="Default" SourceMatchedConfidenceLevel="80" SourceExpression="C#:person:return (person.LastName + person.FirstName).Simplify();" />

```

This example also uses a confidence rate equals to 80%.

## Properties

| Property                                      | Details                                                                                                                                                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy required                               | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                  |
| ResourceType required                         | **Type** Int64 **Description** Identifier of the resource type.                                                                                                                                                                    |
| SourceBinding optional                        | **Type** Int64 **Description** Binding property from the source system.                                                                                                                                                            |
| SourceExpression optional                     | **Type** String **Description** Binding expression based on properties from the source system. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. |
| SourceMatchedConfidenceLevel default value: 0 | **Type** Int32 **Description** Defines the correlation confidence rate of this rule. If the value is less than 100, we process a manual review step to confirm the choice.                                                         |
| TargetBinding optional                        | **Type** Int64 **Description** Binding property from the target system.                                                                                                                                                            |
| TargetExpression optional                     | **Type** String **Description** Binding expression based on properties from the target system. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. |

# Resource Type

In Identity Manager, a resource type is a conceptual model used to categorize resources. It groups
together, with a meaningful name, resources sharing the same intent and the same authorization
system. Resource types are assigned directly to a resource rather than mapped to a role. A resource
type can be assigned manually, or configured to be assigned automatically via a resource type rule.

## Examples

The following example declares a new resource type to provision the LDAP service accounts:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="LDAP_Entry_ServiceEntry" DisplayName_L1="LDAP Entry (service)" Policy="Default" TargetEntityType="LDAP_Entry" Category="LDAP" SourceEntityType="Directory_Application" />
```

### ArgumentsExpression

This option is used for provisioning orders to compute useful arguments.

Most standard situations use only one workflow per action type on a resource (addition, update,
deletion). But in some more complex situations (like using multi records), several workflows are
available for one type of action. As the configuration JSON file of an InternalWorkflow connection
cannot contain expressions, a resource type can be configured with the ArgumentsExpression attribute
to explicit the arguments of provisioning orders, based on conditions and variables. See the
[InternalWorkflow](/docs/identitymanager/6.2/integration/workflows/index.md),
[ Compute a Resource Type's Provisioning Arguments ](/docs/identitymanager/6.2/identity-management/provisioning/provisioning-configuration.md),
and [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topics for additional information.

The following example computes the identifier of the workflow to launch, based on the provisioning
order as a variable (the returned value depends here mostly on the type of change):

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="HR_Person_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" SourceEntityType="HR_Person" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
    
  if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone() {
    return null;
  }
  var arguments = new System.Collections.Generic.Dictionary<string, string>();
  var workflowIdentifier = "Directory_User_UpdateFromHR";
  if ((provisioningOrder.ChangeType.IsAdded()) || (provisioningOrder.HasChanged("Employee_Id") {
    workflowIdentifier = "Directory_User_StartInternalByHR";
  }
  else if (provisioningOrder.ChangeType.IsDeleted()) {
    workflowIdentifier = "Directory_User_DeleteFromHR";
  }
  arguments.Add("WorkflowIdentifier", workflowIdentifier);
  return arguments;" />
```

#### ResourceIdToCopy

Now consider a record creation for a given identity, inside a multi-record organization. Suppose
that records are defined by their position and location, while other properties are the same for all
records (usually the identity's personal data like the name and birth date). When creating a new
record for an existing identity, you will want to copy an existing record from the database to
modify only the values specific to the new record.

The following example computes the identifier of the record to copy, if the identity has already
any:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="HR_Person_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" SourceEntityType="HR_Person" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone() {
  return null;
}
var arguments = new System.Collections.Generic.Dictionary<string, string>();
if (provisioningOrder.TryGetScalar("EmployeeId", out var employeeId) && (employeeId != null)) {  
  var resources = queryHandler.Select<Directory_UserRecord>("Select Id Where EmployeeId="\" + employeeId.ToString() + "\"");
  if (resources.Any()) {
    arguments.Add("ResourceIdToCopy", resources.FirstOrDefault().Id.ToString());
  }
}  
return arguments;" />
```

### DependsOn

This option is used to configure another resource type as prerequisite for this resource type.

For example, a Microsoft Exchange account requires the email address of a related Active Directory
account.

In this case, we want to configure the Exchange Account resource type so that a user cannot own an
Exchange account when they do not own an AD account.

The following example is meant to perform an automatic check to prevent the execution of any
provisioning order for the creation of an Exchange account when the user does not own an AD
nominative account.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="Exchange" DisplayName_L1="Exchange Account" Policy="Default" TargetEntityType="Exchange" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="ManualAssignmentNotAllowed" DependsOn="AD_Entry_NominativeUser">
```

### DependsOnOwnerProperty

This option is used to configure a property as prerequisite for the resource type.

Consider an Active Directory administrator account which should be able to perform manual
provisioning to ServiceNow. Then it requires the random identifier computed by ServiceNow.

In this case, we want to configure the AD_Entry_AdministrationUser resource type so that a user
cannot own an AD administrator account when they do not have an identifier in ServiceNow.

**NOTE:** The DependsOnOwnerProperty of a resource type should only refer to scalar values that are
part of the properties of the SourceEntityType.

The following example is meant to perform an automatic check to prevent the execution of any
provisioning order for the creation of an AD administrator account when the user does not have an
identifier in ServiceNow.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_AdministrationUser" DisplayName_L1="AD User (Administration)" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="ManualAssignmentNotAllowed" DependsOnOwnerProperty="ServiceNow:identifier">
```

### DiscardManualAssignments

This option is used to set Identity Manager as authoritative following a manual change in a managed
system.

Suppose a resource type managing the provisioning of Active Directory nominative accounts based on
users data in Identity Manager (Directory_User). Suppose a scalar rule that provisions the AD's sn
property based on users' last names.

The following scenario is about a user named Cedric Blanc, whose AD's sn property is set by the
scalar rule to Blanc.

![Example - State 0](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state0_v602.webp)

Let's see what happens when the user's name is changed manually directly in the AD.

Suppose that we change in the AD the last name to White. As the scalar rule computes the sn value
based on the user's data which still states the last name Blanc, such a change induces a difference
between the value calculated by the rule and the actual value in the AD. This difference is spotted
by the next synchronization, triggering a non-conforming assignment on the Resource Reconciliation
page.

![Example - State 1](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state1_v602.webp)

![Example - Step 1](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_step1_v602.webp)

![Example - Step 2](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_step2_v602.webp)

Once this manual new value is confirmed, the property is stated as **Approved**.

![Example - State 2](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state2_v602.webp)

Now suppose that the user's last name is changed to Black via Identity Manager's workflows. As the
source data is changed, the scalar rule computes a new value for sn. There are two options:

- The default configuration (DiscardManualAssignments set to false) considers manual assignments,
  i.e. changes made directly in the managed system, as authoritative. So there will be no
  provisioning of the newly computed value for sn. The current sn value that was written manually in
  the AD stays as is, no matter the changes in the source data (here the user's last name). Identity
  Manager only states the property's value as Questioned.

  ![Example - State 3](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state3_v602.webp)

  **NOTE:** No change in the source data can affect the property's value. However, any manual
  change made in the managed system will trigger a non-conforming assignment. Then, reconciling
  the property by choosing to keep Identity Manager's suggested value will make the property's
  value go back to Calculated and thus follow the changes in the source data.

  **NOTE:** If DiscardManualAssignments is changed from False to True, then the state of the
  property's value does not matter. Identity Manager applies the rules of the role model, and
  generates a provisioning order to overwrite the manual change White with the newly computed
  value Black.

  ![Example - State 4](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state4_v602.webp)

In this scenario for Cedric Blanc, these behaviors can be summed up like the following:

![Schema for DiscardManualAssignments](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_schema.webp)

### Correlate Multiple Resources

With the **Correlation Multiple Resources** option, Identity Manager can link a single owner to
several existing target objects of the same resource type. This setting can be used in conjunction
with the **Suggest all resources** option to fine tune the behavior.

Below, we illustrate the different scenarios that are possible, taking into consideration whether a
resource type has previously been correlated to the owner or not.

![suggestallcorrelations-nnn](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nnn.webp)

- The value for both **Correlate Multiple Resources** and **Suggest All Correlations** is **No**
  there is no Resource already correlated so the first match with the highest confidence rate is
  **Correlated** if it is \>100 or **Suggested** if it is \ `<100`. As for all other matches with
  lower confidence rate they will be ignored.

  ![suggestallcorrelations-nnn2](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nnn2.webp)

  If there are no Resources to be correlated with a confidence rate `>100`, the ones below with
  confidence rate below 100 are Suggested or Ignored.

  ![suggestallcorrelations-nny](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nny.webp)

- The value for both **Correlate Multiple Resources** and **Suggest All Correlations** is **No**
  there is one Resource already correlated so due to this all future correlations will be ignored.

  ![suggestallcorrelations-nyn](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nyn.webp)

- The value for **Correlate Multiple Resources** is **No**, **Suggest All Correlations** is **Yes**
  there is no Resource already correlated so all Resource Types will be **Suggested**.

  ![suggestallcorrelations-nyy](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nyy.webp)

- The value for **Correlate Multiple Resources** is **No**, **Suggest All Correlations** **Yes**
  there is one Resource already correlated so the Resource Types that have a confidence rate `>100`
  will be **Suggested**. As for all other matches with lower confidence rate they will be ignored.

  ![suggestallcorrelations-ynn](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-ynn.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **No**,
  and there is no Resource already correlated so Resource Types that have a confidence rate `>100`
  will be **Correlated** and the ones `<100` will be **Suggested** if there are no higher matches
  otherwise they will be ignored.

  ![suggestallcorrelations-ynn2](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-ynn2.webp)

  If there are no Resources to be correlated with a confidence rate `>100`, the ones with
  confidence rate below 100 are Suggested.

  ![suggestallcorrelations-yny](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-yny.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **No**
  there is one Resource already correlated so the matches with confidence rate `>100` will be
  **Correlated** and the ones `<100` will be ignored.

  ![suggestallcorrelations-yyny](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-yyny.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **Yes**
  one Resource could be already correlated or not so the matches with confidence rate `>100` will be
  **Correlated** and the ones `<100` will be **Suggested**.

## Properties

| Property                                                                                   | Type                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AllowAdd default value: true                                                               | Boolean                                    | Enables Identity Manager to automatically create new resources in the managed system when their owners are given the right entitlements. Otherwise, resource managers must create resources manually directly in the managed system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| AllowRemove default value: true                                                            | Boolean                                    | Enables Identity Manager to automatically deprovision resources in the managed system when their owners are deprived of the right entitlements. Otherwise, Identity Manager is able to delete resources in the managed system only with a manual approval on the Resource Reconciliation screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ApprovalWorkflowType default value: 0                                                      | ProvisioningPolicyApprovalWorkflow         | Indicates the number of validation to give to a role given manually (from None to Three). The value ManualAssignmentNotAllowed is used when a manual assignment cannot be performed. **NOTE:** Netwrix recommends using ManualAssignmentNotAllowed for all resource types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ArgumentsExpression optional                                                               | String                                     | **NOTE:** C# expression used to compute the arguments of provisioning orders, for example a workflow identifier, in a situation where it is not obvious. The aim is to enable an InternalWorkflow connector to fulfill correctly a virtual managed system by launching the right workflows based on a given provisioning order. This expression must return a dictionary of string. **NOTE:** ArgumentsExpression is useful only when provisioning via the following packages: Active Directory, Apache Directory, Generic LDAP, Open LDAP, Oracle LDAP, Red Hat Directory Server and Workflow.                                                                                                                                                                                                                                                                         |
| BlockProvisioning default value: true                                                      | Boolean                                    | True to block the provisioning policy orders.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Category optional                                                                          | Int64                                      | Resource type category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CorrelateMultipleResources default value: false                                            | Boolean                                    | True to extend the QueryRule/CorrelationRule to match as many target resources as possible (no blocking like this is normally the case).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DependsOn optional                                                                         | Int64                                      | Identifier of another resource type that must be provisioned for a given identity before the current resource type can be provisioned for said identity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DependsOnOwnerProperty optional                                                            | Int64                                      | Identifier of one of the owner properties that must be filled before the current resource type can be provisioned for said identity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description_L1 optional                                                                    | String                                     | Describe this resource type in detail.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DiscardManualAssignments default value: false                                              | Boolean                                    | True to always allow the provisioning of a new property value, i.e. re-computed by a provisioning rule after a change in the source data, no matter the property's current workflow state. Set to false, any manual change of a property's value made directly in the target system will be "protected" (only after the change is approved in Identity Manager in Resource Reconciliation). It means that a future change in the source data will not trigger the provisioning of the new value to the target system. Instead, Identity Manager will keep the value of the manual change, and state the value as **Questioned**. This option should be set to true when: \* using multiple authoritative sources and the latest value should be provisioned; \* a source system is not often synchronized to Identity Manager but should stay the authoritative source. |
| DisplayName_L1 required                                                                    | String                                     | Display name of the resource type in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| FulfillHoursAheadOfTime default value: 0                                                   | Int32                                      | Anticipate resource fulfill order hours ahead of they start time. It is helpful for manual fulfillment and/or long fulfillment process. It differs from TimeOffset because the start date of the resource to fulfill is not impacted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HideOnSimplifiedView default value: false                                                  | Boolean                                    | True to hide this resource type in the basket simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Identifier required                                                                        | String                                     | Unique identifier of the resource type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ImplicitApproval default value: 0                                                          | Byte                                       | Indicates if the validation steps of the resource type can be skipped. 0 - Inherited: implicit approval value in the associated policy. 1 - Explicit: all the workflow steps must be approved. 2 - Implicit: the workflow steps can be skipped if the requester has enough permissions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ManualAssignmentEndDateLockedToContextMode default value: ExplicitNotContextBoundByDefault | ManualAssignmentEndDateLockedToContextMode | The values are: 0 - ExplicitNotContextBoundByDefault — By default, the assignment's end date will not be context bound in order to encourage the manual entry of an end date 1 - ExplicitContextBoundByDefault — By default, the assignment's end date will be context bound and therefore locked, but a manual date can be entered. 2 - Never — The assignment's end date will never be locked and needs to be specified manually 3 - Always — The assignment's end date is always locked according to the applicable context rule.                                                                                                                                                                                                                                                                                                                                    |
| MaximumDelete default value: 0                                                             | Int32                                      | Deleted lines threshold. Sets the maximum number of resources that can be removed from the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MaximumDeletePercent default value: 30                                                     | Int32                                      | Deleted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MaximumInsert default value: 0                                                             | Int32                                      | Inserted lines threshold. Sets the maximum number of resources that can be added into the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaximumInsertPercent default value: 30                                                     | Int32                                      | Inserted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| MaximumUpdate default value: 0                                                             | Int32                                      | Updated lines threshold. Sets the maximum number of resources that can be modified within the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MaximumUpdatePercent default value: 30                                                     | Int32                                      | Updated lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| P0 default value: false                                                                    | Boolean                                    | True to indicate that the resource type is parametrized, i.e. there is at least one type rule configured to assign the resource type based on the dimension 0 (up to 3V following the base32hex convention). See the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Policy required                                                                            | Int64                                      | Identifier of the policy that the resource type is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ProlongationWithoutApproval default value: 0                                               | ProlongationWithoutApproval                | Indicates whether the resource type can be extended without any validation. 0 - Inherited: gets the value from the policy. 1 - Enabled. 2 - Disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| R0 default value: false                                                                    | Boolean                                    | True to set the dimension 0 (up to 3V following the base32hex convention) as a required parameter when assigning the resource type. See the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| RemoveOrphans default value: false                                                         | Boolean                                    | True to authorize the deprovisioning of this resource when it does not have an owner. Can only be true when AllowRemove property is also true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| SourceEntityType required                                                                  | Int64                                      | Identifier of the source entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| SuggestAllCorrelations optionalAttribute                                                   | Boolean                                    | Allows correlation suggestions for rules with a confidence rate below 100, even if other correlations with a confidence rate above 100 have been found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TargetEntityType required                                                                  | Int64                                      | Identifier of the target entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TransmittedStateValidityPeriod default value: 0                                            | Int32                                      | Time period (in minutes) after which fulfillment orders in Transmitted/Executed states are automatically set in Error state. **_RECOMMENDED:_** - when provisioning automatically, then set 1, 2 or 3 times the period between two synchronizations. - when provisioning manually and synchronizing regularly, then set around 15 days. - when provisioning manually with few synchronizations, then don't set it.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Child Element: BinaryRule

A ResourceBinaryRule allows to specify the file that must be set to an assigned resource binary
property. It is defined by a child element `<BinaryRule>` of the `<ResourceType>` element. The
source file should already be synchronized and stored inside and reference as an EntityType
property.

### Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <ResourceType Identifier="AD_Entry_To_Directory_User" ...>    ...
    <BinaryRule Property="Photo" Binding="thumbnailPhoto" />  </ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding optional                           | Int64               | Defines the binding expression to get the file property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                          | Int64               | Identifier of the property used to represent the file on the target EntityType.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| SingleRole optional                        | Int64               | Identifier of the single role. The single role must be assigned to the owner so that the file can be provisioned on the resource. See the [ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| TimeOffsetAfterReference default value: 0  | Int32               | Defines the offset after reference (in minutes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| TimeOffsetBeforeReference default value: 0 | Int32               | Defines the offset before reference (in minutes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. **NOTE:** in a situation with several binary rules, the order of application is: After, then Before, then Around, then Default. Each rule is able to overwrite those previously applied in case they overlap. _Remember,_ two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: NavigationRule

A navigation rule computes the value of a given navigation property for target resources, based on
the properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system. Contrary to query rules, navigation rules assign
resources regardless of the attributes of source resources.

A navigation rule is defined by the child element `<NavigationRule>` of the `<ResourceType>`
element.

**NOTE:** Both navigation and query rules compute navigation properties. The value of one navigation
property should be computed by either navigation or query rules, not both.

See the
[ Compute a Navigation Property ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

### Examples

Computation based on other properties

The following example declares a new rule to give the SG_APP_SharePoint_HR_Owner group to all users
who had the SharePoint_HR_Owner role.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<NavigationRule Property="memberOf" Resource="SG_APP_SharePoint_HR_Owner" SingleRole="SharePoint_HR_Owner" Policy="Default" />
```

The following rule will set users' Active Directory nominative account in the
CN=SG_APP_DL-INTERNET-Restricted,OU=Applications,DC=acme,DC=internal group for people having the
DL-INTERNET-Restricted role.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser">    ...
    <NavigationRule Property="memberOf" Resource="CN=SG_APP_DL-INTERNET-Restricted,OU=Applications,DC=acme,DC=internal" SingleRole="DL-INTERNET-Restricted" />
</ResourceType>
```

Parametrized roles

The role catalog can be optimized by reducing the number of roles, by configuring parametrized
roles. See the
[Configure a Parametrized Role](/docs/identitymanager/6.2/reference/index.md)topic
for additional information.

This optimization will simplify the functional understanding of the role catalog, and speed up
Identity Manager's calculations.

Supposing that the 10th dimension (dimension A following the base32hex convention) is created for
time slots, the following example creates a single role Access/A_Brune_HR for all time slots. Each
time-slot-related entitlement will be assigned to users by configuring one navigation rule per
entitlement, using the dimension as a required parameter. See the
[ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
[ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)topics for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SingleRole Identifier="Access/A_Brune_HR" DisplayName_L1="Zone - Brune - HR" DisplayName_L2="Zone - Brune - RH" Category="Access" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" RA="1" /><ResourceType ... >    <NavigationRule Property="TimeSlot" Resource="TS_5/7_8/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_8/24" />    <NavigationRule Property="TimeSlot" Resource="TS_5/7_12/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_12/24" />    <NavigationRule Property="TimeSlot" Resource="TS_7/7_24/24" SingleRole="Access/A_Brune_HR" DA="TS_7/7_24/24" /></ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D0 optional                                | Int64               | Value to match for the dimension D0 (up to D127) to trigger the rule. For example, considering that D0 corresponds to users' countries, then set D0 to France to compute the navigation property for users whose country is France. **NOTE:** Specifying at least one dimension makes the linked role parametrized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| IsDenied default value: false              | Boolean             | True to forbid the resource assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| L0 default value: false                    | Boolean             | True to activate inheritance for D0 (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Property required                          | Int64               | Identifier of the navigation property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Resource required                          | Int64               | Identifier of the resource to be assigned as a value of the impacted navigation property. Said resource must be part of the entity type that the navigation property points to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SingleRole optional                        | Int64               | Identifier of a single role, which users must have to trigger the property computation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TimeOffsetReference default value: 0       | TimeOffsetReference | _Remember,_ Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several navigation rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap, for mono-valued properties. _Remember,_ two offsets of the same mode should never overlap for mono-valued properties. Overlapping rules on a multi-valued property do not conflict with each other, Identity Manager stores all computed values. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: QueryRule

A query rule computes the value of a given navigation property for target resources, based on the
properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system. Contrary to navigation rules, query rules assign
resources to target resources according to a query via a C# expression with conditions, based on the
attributes of the source resources. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for
additional information.

A query rule is defined by the child element `<QueryRule>` of the `<ResourceType>` element.

Both navigation and query rules compute navigation properties. The value of one navigation property
should be computed by either navigation or query rules, not both.

See the
[ Compute a Navigation Property ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

### Examples

Computation based on other properties

The following example declares a new rule to compute the parent distinguished name for guest users.
Here we do not use source properties, but a literal expression for all guest users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_Guest">    ...
    <QueryRule Property="parentdn" Policy="Default" TargetBinding="AD_Entry:dn" SourceExpression="C#:resource:return "OU=Guests,DC=acme,DC=internal";" TargetMatchedConfidenceLevel="100" />
</ResourceType>
```

### Properties

| Property                                      | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy required                               | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                             | Int64               | Identifier of the navigation property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| SourceBinding optional                        | Int64               | Binding of the property from the source entity type to be compared with the target binding/expression, in order to find a matching resource to be the value of Property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SourceExpression optional                     | String              | C# expression to compare with the target binding/expression in order to compute the value of Property with the matching resource. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| TargetBinding optional                        | Int64               | Binding of the property from the entity type pointed by Property, which will be the value of Property if it matches the source binding/expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TargetExpression optional                     | String              | C# expression to compare with the source binding/expression in order to compute the value of Property with the matching resource.See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. **_RECOMMENDED:_** The TargetExpression must contain at least one target property, it cannot be a literal expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TargetMatchedConfidenceLevel default value: 0 | Int32               | Percentage rate expressing the confidence in the rule according to data quality and sensitivity. Identity Manager considers the rules in descending order of confidence rate, the first matching rule is applied. 0 to 99: imposes that a resource manager reviews the property computation on the Resource Reconciliation page. 100 to 150: computes the property automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TimeOffsetAfterReference default value: 0     | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TimeOffsetBeforeReference default value: 0    | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| TimeOffsetReference default value: 0          | TimeOffsetReference | TypeDescriptionOffset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several query rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap, for mono-valued properties. two offsets of the same mode should never overlap for mono-valued properties. Overlapping rules on a multi-valued property do not conflict with each other, Identity Manager stores all computed values. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: ScalarRule

A scalar rule computes the value of a given scalar property for target resources, based on the
properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system.

A scalar rule is defined by the child element `<ScalarRule>` of the `<ResourceType>` element.

See the
[Compute a Scalar Property](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

### Examples

Computation based on other properties

The following example shows two scalar rules. The first one computes users' emails based on AD
values. The other one contains a C# expression to compute AccountExpires.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="Bot">    ...
    <ScalarRule Property="Mail" Binding="AD_Entry:mail" Policy="Default" />  
    <ScalarRule Property="accountExpires" Expression="C#:person:return !person.EndDate.HasValue ? null : person.EndDate.Value.ToSince1601DateString();" />
</ResourceType>
```

The next example computes the firstName property of a App1_Account from the resource type
App1_Standard_Account, indicating that it must be equal to the firstName of the source resource.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">    ...
    <ScalarRule Property="firstName" Binding="User:FirstName" />
</ResourceType>
```

Computation via a literal expression

The following example translates to "the userAccountControl property of a App1_Account of resource
type App1_Standard_Account must be equal to 66048. It uses a literal expression. See the
[Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="Bot">    ...
    <ScalarRule Property="userAccountControl" Expression="Literal:66048" />
</ResourceType>
```

Binding

The Binding attribute complies with the binding expression syntax or the calculation expression
syntax. So, it can use the C# language to specify a more complex binding. See the
[ Bindings ](/docs/identitymanager/6.2/development/configuration-toolkit/bindings.md) and [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topics for
additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="email" Binding="C#:user:user.firstName+"."+user.lastName+"@acme.com"" />
```

IsMapped

Consider a system that we want to connect to Identity Manager, let's call it SYST, using a title
property. Consider also that SYST needs to be provisioned with the value of title, but does not
allow any other system to retrieve the said value.

In this case, we set `IsMapped` to false so that Identity Manager sends the adequate provisioning
order when needed, and then is able to change the provisioning state to **Executed** without
synchronization. See the [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md)
[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional
information.

The following example computes users' title in a given managed system, based on Identity Manager's
`PersonalTitle` property without ever retrieving the value:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="title" Binding="PersonalTitle" IsMapped="false" />
```

TimeOffset

A scalar rule is applied according to reference start and end dates (configured through record
sections and context rules), usually users' arrival and departure days. It means that, for a user
matching the rule's criteria, a property is to be computed, by default, from the user's arrival day
until their departure day. See the [ Record Section ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
[ Context Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topics for additional information.

![Schema - Default Application Period](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetdefault.webp)

A time offset adjusts the period for which the rule applies and computes a property's value.

The following example impacts the property for the activation of nominative AD accounts:

- The first rule deactivates the account from its creation, i.e. 1 month before the user's arrival
  day, until the arrival day;
- The second rule activates the account from the user's arrival day until their departure;
- The third rule deactivates the account from the user's departure day and until its deletion, i.e.
  6 months after the departure day.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="None">    <ScalarRule Property="accountEnabled" Expression="C#:person:return &quot;false&quot;;" TimeOffsetReference="Before" TimeOffsetBeforeReference="-43200" TimeOffsetAfterReference="0" />    <ScalarRule Property="accountEnabled" Expression="C#:person:return person.Leave.GetValueOrDefault() ? &quot;false&quot; : &quot;true&quot;;" TimeOffsetReference="Around" TimeOffsetBeforeReference="0" TimeOffsetAfterReference="0" />    <ScalarRule Property="accountEnabled" Expression="C#:person:return &quot;false&quot;;" TimeOffsetReference="After" TimeOffsetBeforeReference="0" TimeOffsetAfterReference="259200" />    ...
</ResourceType>
```

![Schema - Offset Application Period](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetexample.webp)

If the time period of property computation exceeds the limits of the period of resource type
assignment, then the period of resource type assignment is extended accordingly.

Note that the rules are applied in a specific order according to their offset reference: After,
Before, Around and Default. Each rule overwrites pre-existing values. Thus in case of overlapping
rules, Default-offset rules overwrite the values of Around-offset rules, which overwrite the values
of Before-offset rules, which overwrite the values of After-offset rules. We could have the
following:

![Schema - Overlapping Offsets](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetoverlap.webp)

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding optional                           | Int64               | Defines the binding expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ComparisonType default value: 0            | ComparisonType      | Defines the comparison type for the computed value, when Identity Manager retrieves it from the managed system during synchronization, and compares it to the value stored in Identity Manager's database. 0 - CaseSensitive: compares words exactly as they are. 1 - IgnoreCase: ignores the difference between upper and lower case. 2 - IgnoreDiacritics: considers all letters with diacritics (é, à, ç) to be equivalent to their base letters (e, a, c...). 3 - Simplified: ignores diacritics, case and characters which are not letters. 4 - Approximate: does the same as Simplified but also ignores some spelling mistakes. Some letters are considered equivalent (Z and S, Y and I, W and V, K and C, SS and C). All H can be missing. A T, D or S can be missing at the very end. Finally, it ignores all duplicate letters (other than SS). There is no comparison for unmapped properties (IsMapped set to false).                                   |
| Expression optional                        | String              | Expression used to compute the target property specified in Property. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. _Remember,_ for C# expressions, Identity Manager provides an implicit variable called "assignment" that contains basic information about the linked assigned resource type, i.e. StartDate, EndDate and ParametersValues.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| IsMapped default value: true               | Boolean             | True to use the scalar rule's computation to both provision the managed system and synchronize the property back to Identity Manager, thus both create and update. Otherwise, the scalar rule's computation is used only to provision the managed system and the property will be ignored during synchronization, thus create only. This way the property can never be displayed as non-conforming. IsMapped is usually set to false in order to adapt the configuration to the constraints of the managed system, when Identity Manager does not retrieve and/or update the property value.                                                                                                                                                                                                                                                                                                                                                                         |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                          | Int64               | Identifier of the scalar property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SingleRole optional                        | Int64               | Identifier of a single role that users must have to trigger the property computation. _Remember,_ scalar rules must not be dependent on dimensions or role as far as possible as, according to Identity Manager, a good rights policy must be based on group membership and not on mono-valued properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. **NOTE:** in a situation with several scalar rules, the order of application is: After, then Before, then Around, then Default. Each rule is able to overwrite those previously applied in case they overlap. _Remember,_ two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: TypeRule

A resource type rule assigns resources to given users if they match specific criteria. These
resources are to be provisioned, i.e. written to the managed system.

A resource type rule is defined by the child element `<TypeRule>` of the `<ResourceType>` element.

**NOTE:** The specification of several resource type rules for one resource type implies the union
of all rules, i.e. the combination of all rules (and all sets of criteria) with an OR operator.

### Examples

With a dimension criterion

The following rule will assign an App1_Standard_Account resource (resource of type App1_Account) to
any User whose organization dimension (dimension binded to column 0) identifier is Marketing.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">
    <TypeRule D0="Marketing">
    ...
</ResourceType>
```

With a single role criterion

In addition to dimensions, a single role can be used as a criterion for a rule.

The following rule will assign an App1_Standard_Account resource to all User whose organization
dimension identifier is Marketing and having the single role Multimedia_Designer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">
    <TypeRule D0="Marketing" SingleRole="Multimedia_Designer">
    ...
</ResourceType>
```

Without any criterion

Di and SingleRole conditions are not mandatory. A type rule with no condition entails the creation
of an AssignedResourceType, and hence of a target resource (from the target entity type), for every
source resource (from the source entity type). See the AssignedResourceType topic for additional
information.

The following example declares a new rule to give the resource type "AD_Entry_NominativeUser" to all
users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" Type="Suggested" ApprovalWorkflowType="None">
    <TypeRule Policy="Default" />
    ...
</ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D0 optional                                | Int64               | Value to match for the dimension D0 (up to D127) to trigger the rule. For example, considering that D0 corresponds to users' countries, then set D0 to France to assign the resource type to users whose country is France. **NOTE:** specifying at least one dimension makes the linked resource type parametrized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| IsDenied default value: false              | Boolean             | True to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| L0 default value: false                    | Boolean             | True to activate inheritance for D0 (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SingleRole optional                        | Int64               | Identifier of a single role, which users must have to trigger the resource type assignment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: no offset. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several resource type rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap. two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |
| Type default value: 0                      | RuleType            | Represents the type of the rule. 0 - Required: the resource type is automatically assigned to users matching the criteria. 1 - Requested Automatically: the resource type is listed in the permission basket of new workers. These assignments can still be modified. For existing workers, the rule's type is Suggested. 2 - Suggested: the resource type is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request. Suggested assignments must be selected manually to be requested, and will go through the validation process.                                                                                                                                                                                                                                                                                                                          |

# Risk

A risk defines a security threat triggered by the assignment of one or more entitlements to an
identity. A risk is linked to risk rules, each of which can trigger the risk.

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description_L1 optional                | **Type** String **Description** Message that describes the risk. It will be displayed during the manual request of a risk-triggering entitlement.                                                                                                                                                                                                                                                                                                       |
| DisplayName_L1 required                | **Type** String **Description** Display name of the risk in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                      |
| EntityType required                    | **Type** Int64 **Description** Identifier of the entity type targeted by the risk.                                                                                                                                                                                                                                                                                                                                                                      |
| ExemptionPolicy default value: Warning | **Type** RiskExemptionPolicy **Description** Behavior of Identity Manager during the manual request of a risk-triggering entitlement. `0` - Warning: a message is displayed and the request can be continued or cancelled. `1` - Blocking: a message is displayed and the whole request must be cancelled. `2` - Approval required: the request will need an additional approval. A message is displayed and the request can be continued or cancelled. |
| Identifier required                    | **Type** String **Description** Identifier of the risk.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Level default value: 0                 | **Type** Byte **Description** Risk score on a scale from 0 to 100. The higher the level, the higher the risk.                                                                                                                                                                                                                                                                                                                                           |
| Policy required                        | **Type** Int64 **Description** Identifier of the policy in which the risk exists.                                                                                                                                                                                                                                                                                                                                                                       |
| Remediation_L1 optional                | **Type** String **Description** Message that describes the way to solve the risk. It will be displayed during the manual request of a risk-triggering entitlement.                                                                                                                                                                                                                                                                                      |
| RiskType default value: SoD            | **Type** RiskType **Description** Nature of the situation described by the risk. `0` - Segregation of Duties: threat due to the conjunction of two or more entitlements for an identity. A risk rule must contain at least two rule items. `1` - High Privileges: threat due to the assignment of one or more highly sensitive entitlements. A risk rule must contain at least one rule item.                                                           |

## Child Element: Rule

A risk rule is a set of risk rule items. The intersection of all rule items triggers the assignment
of a risk to an identity, depending on the identity's entitlements.

## Child Element: Item

A risk rule item is a filter that identify risk-triggering resources. The intersection of all rule
items in a risk rule triggers the associated risk.

### Properties

| Property              | Details                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Property required     | **Type** Int64 **Description** Property (scalar or navigation) that represents the risk-triggering entitlement.          |
| Resource optional     | **Type** Int64 **Description** Identifier of the resource assigned to `Property`, if navigation, that triggers the risk. |
| ResourceType required | **Type** Int64 **Description** Identifier of the resource type targeted by the risk analysis.                            |

# Role Mapping

Defines a naming rule to create a single role in a specific category based on a property. A
navigation rule will also be created by the naming rule, giving the property to the target user when
the created single role is assigned to this user.

## Examples

### Additional condition

The following example uses `WhereExpression` to condition the application of the rule.

NETWRIX recommends using this property only when the properties from the rule items do not suffice.

Here the naming convention says that we should create a single role for each group (`memberOf`
value) whose `dn` starts with `SG_`and whose dn's second part (between two `_`) is made of three
characters.

```

<RoleMapping Identifier="AD_dn" Policy="Default" Property="AD_Entry:memberOf" ResourceType="AD_Entry_NominativeUser" WhereExpression="C#:resource:return resource.dn?.Split('_')[1].Length == 3;" >    <Rule>        <Item Property="AD_Entry:dn" Operator="StartWith" Value="SG_"/>    </Rule></RoleMapping>

```

## Properties

| Property                                                              | Details                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApprovalRequired default value: false                                 | **Type** Boolean **Description** Indicates that the generated role must be approved before being used by a policy.                                                                                                                                                                                                        |
| ApprovalWorkflowType default value: None                              | **Type** ProvisioningPolicyApprovalWorkflow **Description** Indicates the number of validation to give to a manual role (from 0 to 3 inclusive). The value 4 is used when a manual assignment cannot be performed.                                                                                                        |
| Category optional                                                     | **Type** Int64 **Description** Identifier of the category.                                                                                                                                                                                                                                                                |
| CategoryDisplayNameBinding optional                                   | **Type** Int64 **Description** Defines the binding used to compute the category display name.                                                                                                                                                                                                                             |
| CategoryDisplayNameExpression optional                                | **Type** String **Description** References the C# or literal expression used to compute the category display name. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                    |
| CategoryIdentifierBinding optional                                    | **Type** Int64 **Description** Binding used to compute the category identifier.                                                                                                                                                                                                                                           |
| CategoryIdentifierExpression optional                                 | **Type** String **Description** C# or literal expression used to compute the category identifier. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                     |
| CommentActivationOnApproveInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                     |
| CommentActivationOnDeclineInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                      |
| CommentActivationOnDeleteGapInReconciliation default value: Inherited | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                    |
| CommentActivationOnKeepGapInReconciliation default value: Inherited   | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                      |
| DisplayNameBinding optional                                           | **Type** Int64 **Description** Defines the binding used to compute the role display name.                                                                                                                                                                                                                                 |
| DisplayNameExpression optional                                        | **Type** String **Description** References the C# or literal expression used to compute the role display name. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                        |
| HideOnSimplifiedView default value: false                             | **Type** Boolean **Description** `true` to hide this role in the basket simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                              |
| Identifier required                                                   | **Type** String **Description** Identifier of the role mapping.                                                                                                                                                                                                                                                           |
| IdentifierBinding optional                                            | **Type** Int64 **Description** Binding used to compute the role identifier.                                                                                                                                                                                                                                               |
| IdentifierExpression optional                                         | **Type** String **Description** C# or literal expression used to compute the role identifier. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                         |
| ImplicitApproval default value: 0                                     | **Type** Byte **Description** Indicates if the validation steps of the single role can be skipped. `0` - Inherited: implicit approval value in the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions. |
| ParentCategoryIdentifierBinding optional                              | **Type** Int64 **Description** Defines the binding used to compute the parent category.                                                                                                                                                                                                                                   |
| ParentCategoryIdentifierExpression optional                           | **Type** String **Description** References the C# or literal expression used to compute the parent category. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                          |
| Policy required                                                       | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                         |
| Property required                                                     | **Type** Int64 **Description** Property on which the naming rule will be applied.                                                                                                                                                                                                                                         |
| ResourceType required                                                 | **Type** Int64 **Description** Resource type on which the naming rule will be applied.                                                                                                                                                                                                                                    |
| RolePolicy optional                                                   | **Type** Int64 **Description** Identifier of the policy used for the roles created by the naming rule.                                                                                                                                                                                                                    |
| WhereExpression optional                                              | **Type** String **Description** C# expression returning a boolean, used to condition the application of the naming convention. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                        |

## Child Element: Rule

Represent the sets of conditions which will determine the enforcement of the naming rule.

## Child Element: Item

Represents one of the conditions used to determine the enforcement of the naming rule.

### Properties

| Property                  | Details                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Operator default value: 0 | **Type** QueryComparisonOperator **Description** Operator used in the condition for the naming rule enforcement. |
| Property required         | **Type** Int64 **Description** Property on which the condition for the naming rule enforcement is based.         |
| Value optional            | **Type** String **Description** Value used in the condition for the naming rule enforcement.                     |

# Single Role

A single role is a way to represent an entitlement that is to be assigned to an identity. It brings
a layer of abstraction through a user-friendly name, close to the business view.

Roles can be used to:

- grant accesses of various types and levels;
- restrict access to sensitive information assets, by grouping entitlements in a form that is
  meaningful from a business point of view;
- grant the minimum privileges required by an individual to perform their job.

Roles can be requested manually, or they can be configured to be assigned automatically via
[Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) depending on identities' attributes.

## Examples

The following example declares a new single role in the default policy; in the category `Internet`;
for resources from `Directory_User` with one approval needed.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

[Copy](<javascript:void(0);>)

```
  <SingleRole Identifier="DL-INTERNET-ALL" DisplayName_L1="Unlimited Internet access"
        Category="Internet" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />
```

### Parameterized roles

The role catalog can be optimized by reducing the number of roles, by configuring parameterized
roles.

This optimization will simplify the functional understanding of the role catalog, and speed up
Identity Manager's calculations.

Supposing that the 10th [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) (dimension A following the
[ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)) is created for time slots, the
following example creates a single role `Access/A_Brune_HR` for all time slots. Each
time-slot-related entitlement will be assigned to users by configuring one navigation rule per
entitlement, using the dimension as a required parameter.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

[Copy](<javascript:void(0);>)

```

<SingleRole Identifier="Access/A_Brune_HR" DisplayName_L1="Zone - Brune - HR" DisplayName_L2="Zone - Brune - RH" Category="Access" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" RA="1" />
<ResourceType ... >
    <NavigationRule Property="TimeSlot" Resource="TS_5/7_8/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_8/24" />
    <NavigationRule Property="TimeSlot" Resource="TS_5/7_12/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_12/24" />
    <NavigationRule Property="TimeSlot" Resource="TS_7/7_24/24" SingleRole="Access/A_Brune_HR" DA="TS_7/7_24/24" />
</ResourceType>

```

## Properties

| Property                                                                                   | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ApprovalWorkflowType default value: 0                                                      | ProvisioningPolicyApprovalWorkflow             | Number of validations required to assign manually the single role (from `None` to `Three`). The value `ManualAssignmentNotAllowed` is used when a manual assignment cannot be performed.                                                                                                                                                                                                                                                                                                                                             |
| Category optional                                                                          | Int64                                          | Identifier of the category that the role is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CommentActivationOnApproveInReview default value: Inherited                                | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                                     |
| CommentActivationOnDeclineInReview default value: Inherited                                | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                                      |
| CommentActivationOnDeleteGapInReconciliation default value: Inherited                      | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                    |
| CommentActivationOnKeepGapInReconciliation default value: Inherited                        | CommentActivationWithInherited                 | Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                                                                                      |
| D0 optional                                                                                | Int64                                          | Value that will be set for the dimension 0 (up to 3V following the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)) for all users with the role.                                                                                                                                                                                                                                                                                                                                    |
| Description_L1 optional                                                                    | String                                         | Detailed description of the single role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DisplayName_L1 required                                                                    | String                                         | Display name of the single role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| EntityType required                                                                        | Int64                                          | Identifier of the entity type whose resources can receive the single role.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| GracePeriod optional                                                                       | Int32                                          | Duration (in minutes) for which a lost automatic single role is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. If it is not defined, the value is inherited from the policy.                                                      |
| HideOnSimplifiedView default value: false                                                  | Boolean                                        | `true` to show the role in a user's basket only in advanced view and not simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                                                                        | String                                         | Identifier of the single role.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ImplicitApproval default value: 0                                                          | Byte                                           | Indicates whether the validation steps of the single role can be skipped. `0` - Inherited: implicit approval value from the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions.                                                                                                                                                                                                                                   |
| ManualAssignmentEndDateLockedToContextMode default value: ExplicitNotContextBoundByDefault | ManualAssignmentEndDateLockedToContextModeRole | The values are: 0 - ExplicitNotContextBoundByDefault — By default, the assignment's end date will not be context bound in order to encourage the manual entry of an end date 1 - ExplicitContextBoundByDefault — By default, the assignment's end date will be context bound and therefore locked, but a manual date can be entered. 2 - Never — The assignment's end date will never be locked and needs to be specified manually 3 - Always — The assignment's end date is always locked according to the applicable context rule. |
| MaxDuration optional                                                                       | Int32                                          | Duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it.                                                                        |
| Policy required                                                                            | Int64                                          | Identifier of the policy in which the role exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ProlongationWithoutApproval default value: 0                                               | ProlongationWithoutApproval                    | Indicates whether the role can be extended without any validation. `0` - Inherited: gets the value from the policy. `1` - Enabled. `2` - Disabled.                                                                                                                                                                                                                                                                                                                                                                                   |
| R0 default value: false                                                                    | Boolean                                        | `true` to set the dimension 0 (up to 3V following the [ Base32 Parameter Names ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md)) as a required parameter when assigning the role.                                                                                                                                                                                                                                                                                                                             |
| State default value: Manual                                                                | RoleState                                      | Mark that differentiates the roles analyzed in the role mining process. `0` - Manual: the role was created manually. `1` - Generated: the role was generated by a role mapping rule.                                                                                                                                                                                                                                                                                                                                                 |
| Tags optional                                                                              | String                                         | Label(s) that can later be used to filter the target roles of access certification campaigns. The tag separator is ¤.                                                                                                                                                                                                                                                                                                                                                                                                                |

# Single Role Rule

A single role rule assigns a single role to users who match given criteria.

## Examples

The following example declares a new rule to give the single role to all the `"FCT0000"` users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Policy="Default" />
    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Type="Suggested" Policy="Default" />

```

## Properties

| Property                      | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CompositeRole optional        | Int64    | Identifier of a [ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that users must have to trigger the rule.                                                                                                                                                                                                                                                                                                                                                           |
| D0 optional                   | Int64    | Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the single role to users whose country is `France`.                                                                                                                                                                                                                                                                                    |
| IsDenied default value: false | Boolean  | `true` to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| L0 default value: false       | Boolean  | `true` to activate inheritance for `D0` (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Policy required               | Int64    | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Priority default value: 0     | Int32    | Priority of the rule over the others. The highest priority is defined by the smallest number. This enables, for example, overriding "deny rules" that have a lower priority (higher number).                                                                                                                                                                                                                                                                                                                             |
| Role required                 | Int64    | Identifier of the single role to be assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Type default value: 0         | RuleType | Type of the rule. `0` - Required — the role is automatically assigned to users matching the criteria. `1` - RequestedAutomatically — the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - Suggested — the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |

# Reporting

- [ Report Query ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Report Query

Allows the user to define queries to generate a report in a CSV file. When creating a new
ReportQuery it is recommended to also create the linked
[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Examples

```

  <ReportQuery Identifier="SingleRoles" ReturnedEntityType="SingleRole" Query="select Identifier, DisplayName" DisplayName_L1="Single Roles" />  <ReportQuery Identifier="ResourceTypes" ReturnedEntityType="ResourceType" Query="select Identifier, DisplayName" DisplayName_L1="Resource Types" />  <ReportQuery Identifier="PersonRecords" ReturnedEntityType="PersonRecord" Query="join Person Person join PersonalTitle PersonalTitle join EmployeeType EmployeeType select InternalDisplayName, PersonalTitle.DisplayName, LastName, FirstName, DisplayedCR, Login, DisplayedFonction, DisplayedEDS, EmployeeType.DisplayName, EmployeeType.Category" DisplayName_L1="Users" />

    <ReportQuery Identifier="SGS_Report" ReturnedEntityType="SGS_User" Query="join UserMetier metier join UserDepartement dpt join ResourceAssignedResourceTypes art join art.Owner of type Person person join person.Records personRecord join personRecord.EmployeeType employeeType join personRecord.Organization eds join personRecord.Fonction fonction join personRecord.Company cr select IDUser,NomPrenomUserSgs, metier.IDMetier, dpt.IDDepartement, person.Identifier, personRecord.FirstName, personRecord.LastName,employeeType.DisplayName,eds.DisplayName,fonction.DisplayName,cr.DisplayName" DisplayName_L1="SGS Accounts" />

    <ReportQuery Identifier="AD_Report" ReturnedEntityType="AD_Entry" Query="join memberOf memberof join ResourceAssignedResourceTypes art join art.Owner of type Person person join person.Records personRecord join personRecord.EmployeeType employeeType join personRecord.Organization eds join personRecord.Fonction fonction join personRecord.Company cr select sAMAccountName,memberof.dn, person.Identifier, personRecord.FirstName, personRecord.LastName, employeeType.DisplayName, eds.DisplayName, fonction.DisplayName,cr.DisplayName" DisplayName_L1="AD Entries" />

```

## Properties

| Property                    | Details                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required     | **Type** String **Description** Display name of the report query in language 1 (up to 16).                      |
| Identifier required         | **Type** String **Description** Report query Identifier.                                                        |
| Query required              | **Type** String **Description** The report query written following Identity Manager EBNF Grammar rules.         |
| ReturnedEntityType required | **Type** Int64 **Description** Returned Entity Type ID. The entity type can be seen as the FROM of a sql query. |

# Resources

- [ Resource ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Resource

The `<Resource>` element also allows the definition of a resource entity directly from within the
configuration. Such element must specify:

- the entity type using the `Type` attribute
- a unique `Id`
- property values using corresponding column names as attributes

When inserting resource-identity in the resource table this way, the Id attribute must be a positive
integer. Negative Ids are reserved for Identity Manager's engine.

## Examples

The following sample inserts two entities of type `User`: John Smith and Anthony Baker. John Smith
is the manager of Anthony Baker.

The `User`**Entity Type** is defined as follows:

```

  <EntityType Identifier="User">    <Property Identifier="FirstName" Type="String" TargetColumnIndex="4" />    <Property Identifier="LastName" Type="String" TargetColumnIndex="5" />    <Property Identifier="Manager" Type="String" TargetColumnIndex="128" />  </EntityType>

```

The two new resources are inserted in the database using the `<Resource>` tag.

They are assigned the ids `300` and `301`, they are positive integers (since User type resources are
resource-identity) and not yet used in the **UR_Resource** table.

The `User` resource properties (FirstName, LastName and Manager) are matched to a **UR_Resource**
table column, such as `C4`, `C5` or `I40` according to their data column index, in the above
**Entity Type** definition.

- FirstName: index 4 => column C4
- LastName: index 5 => column C5
- Manager: index 128 => column I40

```

<Resource Type="User" Id="300" C4="John" C5="Smith" /><Resource Type="User" Id="301" C4="Anthony" C5="Baker" I40="-300" />

```

Most encountered use cases in real life is populating very tiny datasets like employee categories
(Internal, External) or personal titles (Mr, Ms). Identities are almost never insert this way. This
contrived example aims at illustrating the method.

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C0 optional                | **Type** String **Description** A column of storage. Going from 0 to 127.                                                                                                                                                                                                          |
| Dirty default value: false | **Type** Boolean **Description** Flag set by the Identity Manager-Set-RecentlyModifiedFlag task.                                                                                                                                                                                   |
| DisplayName_L1 optional    | **Type** String **Description** Display name of the resource in language 1 (up to 16).                                                                                                                                                                                             |
| I40 optional               | **Type** Int64 **Description** This columns are used to store the id of an linked entity. When an entity type has a mono-valued association we usually use this columns to store the information. By default there are 10 columns for the storage of the mono-valued associations. |
| Type required              | **Type** Int64 **Description** The type of the resource. References the internal id of an EntityType.                                                                                                                                                                              |

# Display Entity Association

Entity referencing the Entity Association that can be displayed in the Identity Manager interface.
An association can be established between two properties of the same display entity type.

## Properties

| Property                            | Details                                                              |
| ----------------------------------- | -------------------------------------------------------------------- |
| IsHierarchical default value: false | **Type** Boolean **Description** Is hierarchical entity association. |

# Display Entity Type

The `<DisplayEntityType>` element sets information about how an entity type is to be displayed by
the UI.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <DisplayEntityType PluralDisplayName_L1="Companies" IconCode="Suitcase" Identifier="Directory_Company">        <Property DisplayOrder="-1" IsRequired="true" Identifier="Identifier" />        <Property IsRequired="true" Identifier="DisplayName" />        <Property OutputType="BasicCollection" Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" />        <Property OutputType="BasicCollection" Identifier="Guests" />    </DisplayEntityType>
```

### Zoom on Priority

The Priority property controls the order in which entity types are displayed in the entity type
selection dropdown of the following administration screens:

- Role Review
- Provisioning Review
- Role Reconciliation
- Resource Reconciliation
- My Tasks (also known as Workflow Management)
- Workflow Overview
- Access Rules

By default, the entity type with the highest priority is selected first. The end user can later
change the selection using the top-left dropdown.

![Change Selection](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displayentitytype/ui_displaypriorities_changeselection_v521beta.webp)

Priorities are integer values, positive or negative. The most important priority is assigned to the
lowest value.

Entity Types with the same priority are sorted by `Identifier`, in the alphabetical order, where
relevant.

Entity Types for which a priority isn't set by a `<DisplayEntityType>` configuration element are
assigned an equally less important priority than the least important priority set by a
`<DisplayEntityType>` element.

Example

This example shows how to define priorities between the main Entity Types of the organizational
model. The highest priority is assigned to `Directory_User` and the lowest priority to
`Directory_Application`. All other entity types are assigned an equally low priority, below
`Directory_Application`. In the dropdown they will be sorted by alphabetical order.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Guest" Priority="1" />  <DisplayEntityType Identifier="Directory_Bot" Priority="2" />  <DisplayEntityType Identifier="Directory_Application" Priority="3" />

```

#### Priorities for workflows

The dropdown in My Tasks (also known as Workflow Management) and Workflow Overview screens is
related to workflows, not to entity types per se.

In Identity Manager, each workflow is associated with a workflow-entity type.

To configure the priority order for elements in the dropdown in these screens, the user should
remember to take the workflow-entity types in the `<DisplayEntityType` elements, not just the
entities themselves.

Example

Let's take the following organizational model:

- A Directory_User entity type for employee
- A Directory_Guest entity type for contractors and the like

When workflows are defined to handle resources for these entity types, the following workflow-entity
types are created too:

- Workflow_Directory_User
- Workflow_Directory_Guest

The order in which Directory_User and Directory_Guest appear in the role review dropdown is
configured like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Guest" Priority="1" />

```

But the order in which "Workflow for Directory_User" and "Workflow for Directory_Guest" appear in
the My Tasks screen is configured like this:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
dashboard.xml
  <DisplayEntityType Identifier="Directory_Workflow_User" Priority="0" />  <DisplayEntityType Identifier="Directory_Workflow_Guest" Priority="1" />

```

## Properties

| Property                            | Type    | Description                                                                                                                                                                                                                                         |
| ----------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutocompleteBinding optional        | Int64   | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker).                                                                                                                          |
| Color optional                      | String  | Defines the color used when displaying this entity type (it must be a 6 digit hexadecimal value, preceded by a #).                                                                                                                                  |
| D0IsActive default value: false     | Boolean | Is dimension0 active for this entity type (D0IsActive to D3VIsActive following the base32hex convention.                                                                                                                                            |
| HideRoles default value: false      | Boolean | True to skip the **Access Permissions** step (the one containing the roles) in the default forms for this entity type.                                                                                                                              |
| IconCode optional                   | String  | Defines the icode code ("People", "MapPin", "Suitcase"...).                                                                                                                                                                                         |
| IsHierarchical default value: false | Boolean | Is hierarchical entity type.                                                                                                                                                                                                                        |
| MinSearchLength optional            | Int32   | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the AutocompleteBinding must be defined).                                                                               |
| PluralDisplayName_L1 optional       | String  | Display name of the entity type in plural in language 1 (up to 16).                                                                                                                                                                                 |
| Priority default value: 2147483647  | Int32   | Sets the display priority of the Entity Type in the administration screens dropdown and the dashboard. A priority is an integer value, positive or negative. The highest priority is assigned to the lowest number. See the Priority section above. |

## Child Element: Property

Entity referencing the Entity properties (with which it share the same ID) that can be displayed in
the Identity Manager interface.

### Properties

| Property                        | Type        | Description                                                                                                                                                                                                                       |
| ------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedMinutes optional           | Int32       | Add minutes to the date field with this property. Can be overwritten in every form control, display table column or tile item that displays the property.                                                                         |
| AutocompleteBinding optional    | Int64       | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker if the input type of the display property is a picker).                                                  |
| DisplayOrder default value: 0   | Int32       | Defines the property display order.                                                                                                                                                                                               |
| DisplayTable optional           | Int64       | Identifier of the display table.                                                                                                                                                                                                  |
| Format optional                 | String      | Defines a formatting method on the property values (`ParseSince1601Date`, `ToStringUserAccountControl`, `FormatDate` and `ParseBoolean`).                                                                                         |
| Group optional                  | Int64       | Identifier of the display property group, i.e. the fieldset, that the property is part of in the default UI form.                                                                                                                 |
| IconCode optional               | String      | Defines the icon code.                                                                                                                                                                                                            |
| InputType default value: Auto   | Enumeration | Identifier of the input type. See the [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                  |
| IsHidden default value: false   | Boolean     | Property is hidden.                                                                                                                                                                                                               |
| IsReadOnly default value: false | Boolean     | Property is ReadOnly.                                                                                                                                                                                                             |
| IsRequired default value: false | Boolean     | Property is required.                                                                                                                                                                                                             |
| MinSearchLength optional        | Int32       | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the input type of the display property must be a picker and the AutocompleteBinding must be defined). |
| NavigationBinding optional      | Int64       | Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection.                                                                                                       |
| OutputType default value: Auto  | Enumeration | Identifier of the output type.                                                                                                                                                                                                    |
| PlaceHolderText_L1 optional     | String      | Property place holder text.                                                                                                                                                                                                       |
| Tile optional                   | Int64       | Identifier of the tile.                                                                                                                                                                                                           |
| ToolTipText_L1 optional         | String      | Property tool tip text.                                                                                                                                                                                                           |

# Display Property Group

A display property group bundles a list of entity properties together in a fieldset in the UI.

## Examples

The following example will group a specific set of properties together, when displaying AD entries.

```

<DisplayPropertyGroup Identifier="AD_General" DisplayName_L1="General" />

Knowing that we have the following properties:
<DisplayEntityType Identifier="AD_Entry">    <Property Identifier="displayName" Group="AD_General" DisplayOrder="100" />    <Property Identifier="givenName" Group="AD_General" DisplayOrder="101" />    <Property Identifier="initials" Group="AD_General" DisplayOrder="102" />    <Property Identifier="sn" Group="AD_General" DisplayOrder="103" />    <Property Identifier="description" Group="AD_General" DisplayOrder="104" />    <Property Identifier="thumbnailPhoto" Group="AD_General" DisplayOrder="105" />    <Property Identifier="telephoneNumber" Group="AD_General" DisplayOrder="106" />    <Property Identifier="mobile" Group="AD_General" DisplayOrder="107" />    <Property Identifier="mail" Group="AD_General" DisplayOrder="108" />    ...
</DisplayEntityType>

```

![Display Property Group - Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displaypropertygroup/displaypropertygroup_example_v603.webp)

Any property without a value is not displayed.

## Properties

| Property                | Details                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | **Type** String **Description** Display name of the fieldset in language 1 (up to 16). |
| Identifier required     | **Type** String **Description** Unique identifier of the property group.               |

# Display Table

A table displays a collections of entity type data grouped into rows.

See the [Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md)topic for
additional information.

## Examples

Below there are a few examples of display tables.

DisplayTableDesignElement table

The following example displays sites as a table.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="Directory_Site" EntityType="Directory_Site" DisplayTableDesignElement="table" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="Country" />    <Column DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="State" />    <Column DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="8" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to Table](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_table_v602.webp)

DisplayTableDesignElement list

The following example displays users as a list.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="Directory_User" EntityType="Directory_User" DisplayTableDesignElement="list" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" ColumnSize="6" IsDisplayInSummaryView="true" SortBinding="MainRecord.LastName" Tile="Directory_User_Tile1" />    <Column ColumnSize="3" IsDisplayInSummaryView="true" Tile="Directory_User_Tile2" SortBinding="MainRecord.FirstName" />    <Column ColumnSize="3" Tile="Directory_User_Tile3" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to List](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_list_v602.webp)

_Remember,_ for resources to be displayed as a list, the display table must also be configured with
tiles.

DisplayTableDesignElement resourcetable

The following example displays AD entries as a table, with an "Owner/Type" column.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<DisplayTable Identifier="AD_Entry" EntityType="AD_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="5" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" /></DisplayTable>
```

![Example - DisplayTableDesignElement Set to ResourceTable](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_resourcetable_v602.webp)

## Properties

Here is a list of properties of display tables.

| Property                                 | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayTableDesignElement required       | Enumeration | Design of the display table. -1 - table: resources are displayed in a table. -2 - list: resources are displayed in a list. -3 - resourcetable: resources are displayed in a table containing an "Owner/Type" column. -4 - adaptable: resources are displayed in a table with an "Owner/Type" column only if the entity type is the target of a resource type, otherwise the table is without said column. |
| EntityType required                      | Int64       | Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                        |
| HomonymEntityLink optional               | Int64       | Defines the homonym display table.                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                      | String      | Unique identifier of the table.                                                                                                                                                                                                                                                                                                                                                                           |
| IsEntityTypeDefault default value: false | Boolean     | Default display table used in the application.                                                                                                                                                                                                                                                                                                                                                            |
| LinesPerPage default value: 15           | Int32       | Defines the maximum lines per page.                                                                                                                                                                                                                                                                                                                                                                       |
| ParentProperty optional                  | Int64       | Property to navigate to the parent level when the table displays a tree of values (for example Organization.ParentOrganization).                                                                                                                                                                                                                                                                          |

## Child Element: Column

Contains all the display table columns.

### Example

Here is an example of a column child element.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userAccountControl" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />    <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
```

### Properties

Here is a list of properties of column child element.

| Property                                     | Type                    | Description                                                                                                                                                              |
| -------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AddedMinutes optional                        | Int32                   | Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property.          |
| CanBeFiltered default value: false           | Boolean                 | Can filter the column data.                                                                                                                                              |
| ColumnSize default value: 1                  | Int32                   | Defines the column size.                                                                                                                                                 |
| DefaultSortPriority optional                 | Int32                   | Defines the default sort priority.                                                                                                                                       |
| DisplayBinding optional                      | Int64                   | Represents the linked binding path to a scalar property.                                                                                                                 |
| DisplayName_L1 optional                      | String                  | Display name of the column in language 1 (up to 16).                                                                                                                     |
| IsDisplayInDropDownList default value: false | Boolean                 | Is a drop down list column.                                                                                                                                              |
| IsDisplayInSummaryView default value: false  | Boolean                 | Is a summary view column.                                                                                                                                                |
| IsResizable default value: false             | Boolean                 | Is resizable column.                                                                                                                                                     |
| IsSortable default value: false              | Boolean                 | Is sortable column.                                                                                                                                                      |
| OptimizedDisplayBinding optional             | Int64                   | Optimized Binding allows DisplayTables to be faster displayed. If it is filled in, it takes priority over the DisplayBinding located in the DisplayTableColumn.          |
| OptimizedSortBinding optional                | Int64                   | An optimized sort binding allows display tables to be faster displayed. If it is filled in, it takes priority over the sort binding located in the display table column. |
| SearchOperator default value: 0              | QueryComparisonOperator | Defines the search operator (Equal, NotEqual, Contain, StartWith).                                                                                                       |
| SortBinding optional                         | Int64                   | Represents the sort binding path to a scalar property.                                                                                                                   |
| Tile optional                                | Int64                   | Identifier of the tile.                                                                                                                                                  |

# Form

A form contains a set of input fields (called controls) to be filled by a user, in a structured way.
A form must have a form type to be displayed and used in the UI. A form without a type can be called
in another form.

## Examples

The following example shows a form called `Directory_UserRecord_View` that involves resources from
the entity type `Directory_UserRecord` to collect personal data and contract information via some
structured fields to fill.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">        <Control Binding="EmployeeId" />        <Control Binding="ContractStartDate" />        <Control Binding="ContractEndDate" />        ...
    </Control>
</Form>
```

### Display settings

The display settings allow you to adjust the display.

Hide the "Access Permissions" tab

When `HideRoles` is set to `true`, then the **Access Permissions** tab is not accessible.

![Access Permissions](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_hideroles_v603.webp)

Adjust the request type

When `WorkflowRequestType` is set to `Self`, then the finalization step looks like:

![WorkflowRequestType = Self](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypeself_v603.webp)

When `WorkflowRequestType` is set to `Helpdesk`, then the finalization step looks like:

![WorkflowRequestType = Helpdesk](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_requesttypehelpdesk_v603.webp)

Display records in a table

![RecordTable Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/form_recordtable_v603.webp)

InputType display

The InputType represents the type of research property, attribute which supports only a predefined
set of values listed below:

![inputtypeattachment](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypeattachment.webp)

- Attachment — represents a control for adding an attachment
- Auto — takes by default the type of the EntityType property

  ![inputtypecheckbox](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecheckbox.webp)

- Checkbox — a boolean control which supports one of the two states

  ![inputtypecombobox](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecombobox.webp)

- Combobox — a dropdown which supports single selection

  ![inputtypecomboboxmultiselection](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypecomboboxmultiselection.webp)

- ComboboxMultiSelection — a dropdown which supports multiple selection

  ![inputtypedate](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypedate.webp)

- Date — Date control
- Hidden — Hides the input

  ![inputtypeimage](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypeimage.webp)

- Image - Control to show / upload image
- Inherited —Control to get the InputType of the associated display entity property (when nothing is
  specified in a Control of a Form, it's the default value).

  ![inputtypepicker](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypepicker.webp)

- Picker — Opens a grid to select a resource

  ![inputtypetext](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypetext.webp)

- Text — Displays a single-line of text

  ![inputtypetextarea](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/user-interface/form/inputtypetextarea.webp)

- TextArea — A textbox which supports carriage return character.

## Properties

| Property                                     | Type                | Description                                                                                                                                                                                                                            |
| -------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity optional                            | Int64               | Defines the linked activity template.                                                                                                                                                                                                  |
| ActivityState optional                       | Enumeration         | Defines the linked activity state template.                                                                                                                                                                                            |
| AddRowLabel_L1 optional                      | String              | Defines the "add row" button label when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                                  |
| EntityType required                          | Int64               | Represents the linked entity type.                                                                                                                                                                                                     |
| FormTitle_L1 optional                        | String              | Title of the form in language 1 (up to 16).                                                                                                                                                                                            |
| FormType default value: Auto                 | FormType            | Represents the linked form type.                                                                                                                                                                                                       |
| HideRecordAddButton default value: false     | Boolean             | True to hide the button used to add a new record.                                                                                                                                                                                      |
| HideRecordRemoveButton default value: false  | Boolean             | True to hide the button used to remove an existing record.                                                                                                                                                                             |
| HideRoles default value: false               | Boolean             | True to hide the **Access Permissions** tab.                                                                                                                                                                                           |
| Identifier required                          | String              | Unique identifier of the form.                                                                                                                                                                                                         |
| IsDefaultSelfForm default value: false       | Boolean             | Entity type default self form.                                                                                                                                                                                                         |
| IsDefaultViewForm default value: false       | Boolean             | Entity type default view form.                                                                                                                                                                                                         |
| IsDeleteForm default value: false            | Boolean             | Is a delete form.                                                                                                                                                                                                                      |
| MainProperty optional                        | Int64               | Represents the form main property.                                                                                                                                                                                                     |
| MainPropertyLabel_L1 optional                | String              | Defines the main property label text.                                                                                                                                                                                                  |
| Menu optional                                | Int64               | Defines the linked menu item.                                                                                                                                                                                                          |
| RecordEndProperty optional                   | Int64               | Defines the workflow end date property. If not specified, the property EndDate of the record entity type is considered as RecordEndProperty.                                                                                           |
| RecordFilter default value: CurrentAndFuture | RecordFilter        | Defines the record display option. 0 - Current: shows current positions. 1 - CurrentAndFuture: shows current and future positions. Recommended. 2 - All: shows past, present and future positions. Not recommended for clarity issues. |
| RecordProperty optional                      | Int64               | Defines the workflow record property.                                                                                                                                                                                                  |
| RecordSortProperty optional                  | Int64               | Defines the workflow sort property.                                                                                                                                                                                                    |
| RecordStartProperty optional                 | Int64               | Defines the workflow start date property. If not specified, the property StartDate of the record entity type is considered as RecordStartProperty.                                                                                     |
| RecordTable optional                         | Int64               | Identifier of the display table to be used to display resources' records in a workflow.                                                                                                                                                |
| RemoveRowLabel_L1 optional                   | String              | Defines the "remove row" button label when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                               |
| TableTitle_L1 optional                       | String              | Defines the table title when using WorkflowUpdateSeveralRecordsEntityForm.                                                                                                                                                             |
| WorkflowRequestType default value: 0         | WorkflowRequestType | Type of the request of the related workflow. 0 - None. 1 - Self. 2 - Helpdesk. 3 - Administration.                                                                                                                                     |

## Child Element: Control

A form control is an input field to be filled by a user. Controls can be inserted in other controls
in order to display the form fields in a structured way.

### Examples

The following example shows a form called `Directory_UserRecord_View` that collects first personal
data via some controls, and then calls another form `Workflow_Directory_User_AddRecord_Base` to
collect record information. In this example is a tree control which defines the relationships
between a worker and their managers (N+1 to N+3). The aim is to display in the form (in the UI) the
organization chart made of the worker and their managers.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" />            <Control Binding="FirstName" />        </Control>        <Control Binding="Mail" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Contract" OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddRecord_Base" />    </Control>
    </Form>
```

### Properties

| Property                            | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedMinutes optional               | Int32       | Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property.                                                                                                                                                                                                                                                                                                      |
| Binding optional                    | Int64       | Identifier of the binding property. **NOTE:** When displaying an organization chart, this binding is meant to represent the first manager level (N+1). In this case, it must be a mono-valued navigation.                                                                                                                                                                                                                                                            |
| Binding2 optional                   | Int64       | Identifier of the binding property used to represent the second manager level (N+2) in the organization chart. It must be a mono-valued navigation. Cannot be used when Binding is not defined.                                                                                                                                                                                                                                                                      |
| Binding3 optional                   | Int64       | Identifier of the binding property used to represent the third manager level (N+3) in the organization chart. It must be a mono-valued navigation. Cannot be used when Binding2 is not defined.                                                                                                                                                                                                                                                                      |
| ColumnSize optional                 | Int32       | Defines the control column size.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| DefaultValueBinding optional        | Int64       | Automatically sets the value in the control depending on this binding and the selected value in another corresponding picker. It's only available for controls with picker. For example: `<Control Binding="Location" DefaultValueBinding="Organization.Manager.MainLocation" />` After a selection of an organization in another picker in the form, the field location will be automatically set by the main location of the manager of the selected organization. |
| DisplayName_L1 optional             | String      | Display name of the control in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                |
| DisplayTable optional               | Int64       | Identifier of the table.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| EmbeddedForm optional               | Int64       | Identifier of the form to insert in the control. With this method, one form can be imported to several forms. _Remember,_ it can be used only with `OutputType` set to `TransformImport`.                                                                                                                                                                                                                                                                            |
| EntityType optional                 | Int64       | Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ExtensionIdentifier optional        | String      | This property is used to extend the Identity Manager UI.                                                                                                                                                                                                                                                                                                                                                                                                             |
| FilterBinding1 optional             | Int64       | Coupled with LinkedBinding1, it allows filtering on a list of items. FilterBinding1 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                                |
| FilterBinding2 optional             | Int64       | Coupled with LinkedBinding2, it allows filtering on a list of items. FilterBinding2 defines the binding that determines the search value. Linked filters are only available for controls with the `Picker`InputType.                                                                                                                                                                                                                                                 |
| HomonymEntityLink optional          | Int64       | Defines the homonym form control.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| InputType default value: Inherited  | Enumeration | Input type of the control.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| IsReadOnly optional                 | Boolean     | Is a read only form control.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| IsRequired optional                 | Boolean     | Is a required form control.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| LinkedBinding1 optional             | Int64       | Coupled with FilterBinding1, it allows filtering on a list of items. LinkedBinding1 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                         |
| LinkedBinding2 optional             | Int64       | Coupled with FilterBinding2, it allows filtering a list of items. LinkedBinding2 defines the binding on which the search will be carried out. Linked filters are only available for controls with the `Picker` InputType.                                                                                                                                                                                                                                            |
| Name optional                       | String      | Identifies the control inside the Form. This is used for translation files when a control cannot be identified by its binding such as for FieldSet.                                                                                                                                                                                                                                                                                                                  |
| NavigationBinding optional          | Int64       | Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection. If not defined, the one defined in DisplayEntityProperty is used.                                                                                                                                                                                                                                                                        |
| OutputType default value: Inherited | Enumeration | Output type of the control.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ParentControl optional              | Int64       | Defines the parent form control.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| PlaceHolderText_L1 optional         | String      | Defines the place holder text.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Tile optional                       | Int64       | Identifier of the tile.                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# User Interface

- [ Display Entity Association ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Display Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Display Property Group ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Indicator ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [Search Bar](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
- [ Tile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Indicator

An Indicator displays a banner alongside the resource information whenever it meets a specific
criteria.

More precisely, an indicator displays the appropriate banner whenever the _Binding_ matches the
_Item Value_ according to the _Comparison operator_, as can be seen on the example below.

The banner is displayed wherever the associated resource appears.

For example, if we create an indicator pointing out the risk score of a user, the banner will show
on the left-side of the user [ Tile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and the user [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). If we
create an indicator pointing out whether an AD account is unused or disabled, the banner will show
on the left-side of the AD Entries tile and form.

One entity can show several banners, one for several different properties. They appear one above the
other if there are four banners or less, one next to the other if there are more.

One indicator can posess several items, that define the information for the banner to be displayed.
The indicators order is important because the banner will get the information of the first item
matching the observed property.

## Examples

The following example entails the display of a red banner for a user with a high risk score and an
orange banner for a user with a medium risk.

The XML file below states that if the risk score is greater than 75, only the indicator "High risk"
will be displayed and not "Medium risk". If it is lower than 75 and greater than 30, the indicator
will be "Medium risk". If it is lower than 30, there will be no indicator.

```

  <Indicator EntityType="Directory_User" Binding="RiskScore" ComparisonOperator="GreaterThanOrEqual" Order="0">    <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />    <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />  </Indicator>

```

Note that if you write the "Medium risk" item before the "High risk" one, even if the score if
greater than 75, the banner will be orange according to the first item:

```

  <Indicator EntityType="Directory_User" Binding="RiskScore" ComparisonOperator="GreaterThanOrEqual" Order="0">      <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />      <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />  </Indicator>

```

## Properties

| Property                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Binding optional            | **Type** Int64 **Description** Defines the binding path to a scalar property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ComparisonOperator required | **Type** QueryComparisonOperator **Description** Defines how to compare the given binding to an indicator item value. All possible values: - Auto: The SearchOperator is calculated by the engine according to the type of element. - NotEqual: finds the elements that are not equal to the desired value. - Equal: finds the elements that are strictly equal to the desired value. - Contain: finds the elements that contain the desired value. - StartWith: finds the elements that start with the desired value. - EndWith: finds the elements that end with the desired value. - NotContain: finds the elements that do not contain the desired value. - NotStartWith: finds the elements that do not start with the desired value. - NotEndWith: finds the elements that do not end with the desired value. - GreaterThan: finds the elements that are greater than the desired value. - LessThan: finds the elements that are less than the desired value. - GreaterThanOrEqual: finds the elements that are greater than or equal to the desired value. - LessThanOrEqual: finds the elements that are less than or equal to the desired value. - Flexible\*: The Flexible search operators transform the desired value according to the FlexibleComparisonExpression defined in Property then search. The flexible operators are: - FlexibleEqual. - FlexibleContain. - FlexibleStartWith. - FlexibleEndWith. |
| EntityType required         | **Type** Int64 **Description** Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| OptimizedBinding optional   | **Type** Int64 **Description** Optimized Binding allows Indicators to be faster displayed. If it is filled in, it takes priority over the Binding located in the Indicator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Order required              | **Type** Int32 **Description** Defines the order in which the banners are displayed. If there is no order needed, its value is zero for all indicators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Child Element: Item

Defines the banner to be displayed information.

### Examples

```

        <Item Value="75" Color="#9D0E0E" DisplayName_L1="High risk" />        <Item Value="30" Color="#E37C14" DisplayName_L1="Medium risk" />

```

### Properties

| Property                | Details                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Color required          | **Type** String **Description** Defines the color of the item.                                          |
| DisplayName_L1 optional | **Type** String **Description** Display name of the banner in language 1 (up to 16).                    |
| Value optional          | **Type** String **Description** Defines the value with which the indicator binding will be compared to. |

# Menu Item

A menu item displays grouped navigation actions.

## Examples

```

    <MenuItem Identifier="View_AD_Entry" DisplayName_L1="AD Entry">        <MenuItem Identifier="View_AD_Entry_ResetPassword" DisplayName_L1="Reset Password" IconCode="Edit" Workflow="AD_Entry_ResetPassword" />    </MenuItem>

```

## Properties

| Property                                | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 optional                 | **Type** String **Description** Display name of the menu item in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| EntityType optional                     | **Type** Int64 **Description** Represents the linked entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| IconCode optional                       | **Type** String **Description** Code of one of [Microsoft's fabric icons](https://uifabricicons.azurewebsites.net/) to be displayed with the menu item. **Note:** on Microsoft page, see the icons' codes by moving the mouse over the icons, or using the detailed view.                                                                                                                                                                                                                                                 |
| Identifier required                     | **Type** String **Description** Unique identifier of the item.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| IsExpandedByDefault default value: true | **Type** Boolean **Description** Is an expanded by default menu item.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| IsSelfForm default value: false         | **Type** Boolean **Description** Is a self form menu item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ParentMenuItem optional                 | **Type** Int64 **Description** Defines the parent menu item. Five ParentMenuItem are hard coded: - Dashboard: Allow to display MenuItem in dashboard (Home page) - Nav: Allow to display MenuItem in navigation section (the left part in dashboard) - UserMenu: Allow to display MenuItem in links list on click on user account in the top right corner - Reports: Define all the reports downloadable in the application - Top: Allow to display MenuItem in top bar of the application, between "Home" and "My tasks" |
| ReportQuery optional                    | **Type** Int64 **Description** Represents the linked report query.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| URI optional                            | **Type** String **Description** Represents the menu URI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Workflow optional                       | **Type** Int64 **Description** Represents the linked workflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Search Bar

The SearchBar is an element of the user interface that allows you to search from a list of
properties of an EntityType.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SearchBar EntityType="Directory_User" Menu="Menu_Search_Directory_User" SearchBarDesignElement="Inline">    <Criterion Binding1="MainRecord.EmployeeId" PlaceHolderText_L1="Employee Id"  InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.LastName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.FirstName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.Organization" PlaceHolderText_L1="Department"  InputType="Auto" ColumnSize="2" /></SearchBar>
```

## Properties

| Property                        | Type        | Description                                                                                                                                                                       |
| ------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EntityType required             | Int64       | References the linked entity type.                                                                                                                                                |
| Menu optional                   | Int64       | References the linked Menu. Each Menu Item of this Menu is a link to an entity's workflow displayed under the search bar on the visualization page of the entity's resource list. |
| SearchBarDesignElement required | Enumeration | Defines the type of the searchBar (Block,Inline).                                                                                                                                 |
| SearchedBinding optional        | Int64       | Defines the binding on which the search will be applied.                                                                                                                          |
| SearchedEntityType required     | Int64       | Defines the entity type on which the search will be applied.                                                                                                                      |

## Child Element: Criterion

A SearchBarCriteria defines a search criterion on a given property. See the Search Bar topic for
additional information.

### Properties

| Property                                     | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColumnSize required                          | Int32                   | Size of the insertion or selection element of the property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| DefaultValue optional                        | String                  | Basic filter on the properties on the value or values entered in parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DisplayName_L1 optional                      | String                  | Display name of the criteria in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| InputType required                           | Enumeration             | Type of the research property, supports only a predefined set of values listed below: - Attachment - Auto - Checkbox - Combobox - ComboboxMultiSelection - Date - Hidden - Image - Inherited - Picker - Text - TextArea See the [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| IsVisibleInAdvancedView default value: false | Boolean                 | True to make the property visible in the advanced search but not in the main search properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Operator default value: 0                    | QueryComparisonOperator | Defines how to do the research. All possible values: - Auto — The SearchOperator is calculated by the engine according to the type of element - NotEqual — finds the elements that are not equal to the desired value - Equal — finds the elements that are strictly equal to the desired value - Contain — finds the elements that contain the desired value - StartWith — finds the elements that start with the desired value - EndWith — finds the elements that end with the desired value - NotContain — finds the elements that do not contain the desired value - NotStartWith — finds the elements that do not start with the desired value - NotEndWith — finds the elements that do not end with the desired value - GreaterThan — finds the elements that are greater than the desired value - LessThan — finds the elements that are less than the desired value - GreaterThanOrEqual — finds the elements that are greater than or equal to the desired value - LessThanOrEqual — finds the elements that are less than or equal to the desired value - Flexible\* — The Flexible search operators transform the desired value according to the FlexibleComparisonExpression defined in Property then search. The flexible operators are: - FlexibleEqual - FlexibleContain - FlexibleStartWith - FlexibleEndWith |
| OptimizedBinding1 optional                   | Int64                   | Represents the first optimized binding definition. An optimized binding allows searches to be faster displayed. If it is filled in, it takes priority over the binding located in the search bar criterion column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| PlaceHolderText_L1 optional                  | String                  | Overloads the DisplayName of the search property with this string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ToolTipText_L1 optional                      | String                  | Text displayed in the tool tip.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Tile

A tile displays customizable data in one block. This block is displayed in display table. There are
two types of tiles: multilines with optional icons and multilines with photo (or failing this, the
initials of a defined data).

## Examples

```

    <Tile Identifier="Referentiel_User_Tile1" DisplayName_L1="Collaborateur : pr�nom, nom" EntityType="Referentiel_User" TileDesignElement="picture-text">        <Item Binding="MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />        <Item Binding="MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />        <Item Binding="Id" LineNumber="5" />    </Tile>    <Tile Identifier="Referentiel_User_Tile2" DisplayName_L1="Collaborateur : organisation, site" EntityType="Referentiel_User" TileDesignElement="inline data-icon">        <Item Binding="MainRecord.Site.Label" LineNumber="1" />        <Item Binding="MainRecord.Service.Label" LineNumber="2" />    </Tile>

```

## Properties

| Property                   | Details                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required    | **Type** String **Description** Display name of the tile in language 1 (up to 16).                      |
| EntityType required        | **Type** Int64 **Description** Identifier of the entity type.                                           |
| Identifier required        | **Type** String **Description** Unique identifier of the tile.                                          |
| TileDesignElement required | **Type** Enumeration **Description** Defines the design element ("inline data-icon" or "picture-text"). |

## Child Element: Item

One data to display in a tile.

### Examples

```

    <Item Binding="MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />    <Item Binding="MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />    <Item Binding="MainRecord.EmployeeId" LineDisplayOrderIndicator="2" LineNumber="3" />

```

### Properties

| Property                           | Details                                                                                                                                                                                                                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedMinutes optional              | **Type** Int32 **Description** Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property.                                                                              |
| Binding required                   | **Type** Int64 **Description** Defines the binding path to a scalar property.                                                                                                                                                                                               |
| LineDisplayOrderIndicator required | **Type** Int32 **Description** Defines the display position of the data in the row.                                                                                                                                                                                         |
| LineNumber required                | **Type** Int32 **Description** Defines the number of the line in which the data is displayed. When the tileDesignElement of the tile is "picture-text", four lines are customizable, and 2 lines are hard coded: - 5: id of the resource to navigate on click - 6: photoTag |
| OptimizedBinding optional          | **Type** Int64 **Description** Optimized Binding allows DisplayTables to be faster displayed. If it is filled in, it takes priority over the binding located in the TileItem.                                                                                               |
