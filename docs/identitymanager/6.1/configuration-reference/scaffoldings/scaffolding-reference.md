# AccessReviewAdministrationAccessControlRules

Scaffolding to generate the rights to administrate campaign creation.

Gives access to a shortcut on the dashboard to access this page.

![Access Certification Campaigns](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

## Examples

```

  <AccessReviewAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_AccessCertificationCampaign_AccessCertificationCampaign" DisplayName_L1="Administrator_AccessCertificationCampaign_AccessCertificationCampaign" EntityType="AccessCertificationCampaign" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Delete" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Process" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_AccessCertificationCampaign_AccessCertificationCampaignPolicy" DisplayName_L1="Administrator_AccessCertificationCampaign_AccessCertificationCampaignPolicy" EntityType="AccessCertificationCampaignPolicy" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_AccessCertificationCampaign_Category" DisplayName_L1="Administrator_AccessCertificationCampaign_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_AccessCertificationCampaign_EntityProperty" DisplayName_L1="Administrator_AccessCertificationCampaign_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_AccessCertificationCampaign_Policy" DisplayName_L1="Administrator_AccessCertificationCampaign_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_AccessCertificationCampaign_ResourceType" DisplayName_L1="Administrator_AccessCertificationCampaign_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Query" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_AccessAuthorization_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Access_AccessAuthorization" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Access_Area" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Application_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Bot_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Country" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Guest_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_JobCategory_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_JobCategory" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_PresenceState_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Region_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Region" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Site" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Title" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserRecord_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserType_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserType" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_Country_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_Country" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_ExternalCompany_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_ExternalCompany" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_OrganizationType_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_OrganizationType" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_Organization_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_Site_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_Site" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_Subsidiary_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_Subsidiary" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_Title_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_Title" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_User_AccessCertification_AccessCertificationCampaign" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Create" />  <Entry CanExecute="true" Permission="/AccessCertification/AccessCertificationCampaign/Update" /></AccessControlRule>

```

# AccessReviews

- #### [AccessReviewAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to administrate campaign creation.

# AccessControlRules

Scaffoldings for access control give some permissions, by allowing the corresponding API calls.

- #### [AccessReviews](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Connectors](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
- #### [Jobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
- #### [Monitoring](/docs/identitymanager/6.1/configuration-reference/xml-configuration/monitoring-config.md)
- #### [Profiles](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Queries](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Resources](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [RoleModels](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Simulations](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [UserInterfaces](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Workflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

# AssignProfileAccessControlRules

Gives to a given profile the rights to create, update, delete and query any assigned profile, from
the **Assigned Profiles** screen.

![Assigned Profiles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-assignment/home_assignedprofiles_v602.webp)

## Examples

The following example gives to the `Administrator` profile the rights to create, update, delete and
query assigned profiles.

```

  <AssignProfileAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Access_Area_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedProfile_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="AssignedProfile" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Create" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Delete" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Query" />  <Entry CanExecute="true" Permission="/AccessControl/AssignedProfile/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Category" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_CompositeRole_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="CompositeRole" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Profile_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Profile" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Resource_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Resource" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_Setting_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="Setting" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRole_AccessControl_AssignedProfile" DisplayName_L1="Administrator - Management Profiles" DisplayName_L2="Administrator - Gestion des profils" EntityType="SingleRole" Profile="Administrator">  <Entry Permission="/AccessControl/AssignedProfile" /></AccessControlRule>

```

# Profiles

- #### [AssignProfileAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives to a given profile the rights to create, update, delete and query any assigned
  profile.- ####
  [OpenIdClientAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [ProfileAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives to a given profile the rights to create, update and delete profiles.

# OpenIdClientAdministrationAccessControlRules

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

# ProfileAdministrationAccessControlRules

Gives to a given profile the rights to create, update and delete profiles.

Profiles are listed on the **Profiles** screen, from **Settings** in the **Configuration** section.

![Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

![Profiles](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/profileadministrationaccesscontrolrules/accesscontrol_profiles_v603.webp)

[See more details on profiles' APIs](/docs/identitymanager/6.1/api-reference/server-api/access-control.md).

## Examples

The following example gives to the `Administrator` profile the rights to create, update and delete
profiles.

```

  <ProfileAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Profile_AccessControl_Profile" DisplayName_L1="Administrator - Profile Configuration" DisplayName_L2="Administrator - Configuration des profils" EntityType="Profile" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessControl/Profile/Create" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Delete" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Update" /></AccessControlRule>

```

# Queries

- #### [ManageSettingAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the access control rule which gives to a profile the permission to query, create,
  update and delete settings from the UM_Settings table.- ####
  [ReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the report view.- ####
  [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to apply a report for a profile on a given entity.- ####
  [UniverseAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates an access control rule which gives a profile the permission to access the query page
  and run queries.

# ManageSettingAccessControlRule

Generates the access control rule which gives to a profile the permission to query, create, update
and delete settings from the UM_Settings table.

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

# ReportAccessControlRules

Generates the rights to access the report view.

Gives access to a shortcut on the navigation to access this page.

![Reports](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/home_reports_v602.webp)

## Examples

```

  <ReportAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ReportQuery" DisplayName_L1="Administrator - Report_ReportQuery" DisplayName_L2="Administrator - Rapport_ReportQuery" EntityType="ReportQuery" Profile="Administrator">  <Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" /></AccessControlRule>

```

# TargetResourceReportAccessControlRules

Generates the right to apply a report for a profile on a given entity.

The existence of a report for this entity must exist in order to use this scaffolding. A scaffolding
allows to generate a default report for an entity:
[Entity reports](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

## Examples

```

  <TargetResourceReportAccessControlRules EntityType="LDAP_Entry" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ReportQuery_Custom_Reports_Resources_Resources_LDAP_Entry" DisplayName_L1="Administrator_ReportQuery_Custom_Reports_Resources_Resources_LDAP_Entry" EntityType="LDAP_Entry" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Reports/Resources_LDAP_Entry/View" /></AccessControlRule>

```

# UniverseAccessControlRules

Generates an access control rule which gives a profile the permission to access the query page and
run queries.

## Examples

The following example gives the permission to access the query page to the administrator profile.

```

  <UniverseAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_DataQuery_Universe" DisplayName_L1="Administrator_DataQuery_Universe" EntityType="Universe" Profile="Administrator">  <Entry CanExecute="true" Permission="/Universes/UniverseData/Query" /></AccessControlRule>

```

# CreateResourceIncrementalAccessControlRules

Generates the access control rule which gives to a profile the permission to query the resources
modified incrementally

## Examples

```

  <CreateResourceIncrementalAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Resource_Incremental" DisplayName_L1="Administrator Resource Incremental Query" EntityType="Resource" Profile="Administrator">  <Entry CanExecute="true" Permission="/Resources/Incremental/Query" /></AccessControlRule>

```

# Resources

- #### [CreateResourceIncrementalAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the access control rule which gives to a profile the permission to query the resources
  modified incrementally- ####
  [ResourceApiAdministration](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to create/update/delete/query resources from a given entity type, for
  a given profile.- ####
  [ResourcePickerControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the reading right of the resource picker.- ####
  [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to view an entity type's resources.- ####
  [ViewHistoryResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates an access control rule giving to the specified profile the permission to browse the
  resources history of the specified entity type.

# ResourceApiAdministration

Generates the permissions to create/update/delete/query resources from a given entity type, for a
given profile.

## Examples

The following example gives the `Administrator` profile the rights to create, update, delete and
query resources from `Directory_User`.

```

<ResourceApiAdministration EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="AdministratorResourceApi_Administration_Directory_User" DisplayName_L1="AdministratorResourceApi_Administration_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Create" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Delete" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Query" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Update" /></AccessControlRule>

```

# ResourcePickerControlRules

Creates the reading right of the resource picker.

## Examples

```

  <ResourcePickerControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="AdministratorAdministrator_Resource_Custom_Workflows" DisplayName_L1="Administrator - Resources Picker - " DisplayName_L2="Administrator - Picker de ressources" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule>

```

# ViewAccessControlRules

Generates the permissions to view an entity type's resources.

## Examples

The following example gives to the `Administrator` profile the permissions to access the page that
displays the resources of the `Directory_UserType` entity type, as well as its source resources.

```

  <ViewAccessControlRules EntityType="Directory_UserType" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_AssignedCompositeRole_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedCompositeRole_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceNavigation_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceScalar_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceScalar_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceType_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedResourceType_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedResourceType" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedSingleRole_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_AssignedSingleRole_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Category_Custom_Resources_Directory_UserType" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_Custom_Resources_Directory_UserType_ViewTargetResources" DisplayName_L1="Administrator_Category_Custom_Resources_Directory_UserType_ViewTargetResources" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Resources_Directory_UserType" EntityType="Directory_UserType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_UserType" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/ViewTargetResources" />  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Directory_UserType/View" />  <Entry Permission="/Custom/Resources" />  <Entry Permission="/Custom/Workflows" />  <Entry Permission="/Universes/UniverseData/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Policy_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_Policy_Custom_Resources_Directory_UserType" EntityType="Policy" Profile="Administrator">  <Entry Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_Custom_Resources_Directory_UserType" DisplayName_L1="Administrator_ResourceType_Custom_Resources_Directory_UserType" EntityType="ResourceType" Profile="Administrator">  <Entry FullAccessProperties="true" Permission="/Custom/Resources/Directory_UserType/View" /></AccessControlRule>

```

# ViewHistoryResourceTemplate

Generates an access control rule giving to the specified profile the permission to browse the
resources history of the specified entity type.

## Examples

```

  <ViewHistoryResourceTemplate EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Directory_User_View_History_Directory_User" DisplayName_L1="Administrator_Directory_User_View_History_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" /></AccessControlRule>

```

# BasketRulesControlRules

Generates the permissions to execute the different requests to display the information in the rights
basket.

## Examples

```

  <BasketRulesControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedCompositeRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedCompositeRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedCompositeRole" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceNavigation" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceNavigation" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceScalar" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceScalar" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceType" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedResourceType" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedSingleRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_AssignedSingleRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_AssignedSingleRole" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Category" DisplayName_L1="Workforce/Workflows/Update Personal Data_Category" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Category" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_CompositeRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_CompositeRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_CompositeRole" EntityType="CompositeRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Connector" DisplayName_L1="Workforce/Workflows/Update Personal Data_Connector" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Connector" EntityType="Connector" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_EntityProperty" DisplayName_L1="Workforce/Workflows/Update Personal Data_EntityProperty" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Policy" DisplayName_L1="Workforce/Workflows/Update Personal Data_Policy" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_Policy" EntityType="Policy" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_ResourceType" DisplayName_L1="Workforce/Workflows/Update Personal Data_ResourceType" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule><AccessControlRule Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_SingleRole" DisplayName_L1="Workforce/Workflows/Update Personal Data_SingleRole" DisplayName_L2="Workforce/Workflows/Directory_User_UpdatePersonalData/Request_SingleRole" EntityType="SingleRole" Profile="Administrator">  <Entry Permission="/Custom/Workflows" /></AccessControlRule>

```

# BulkPerformManualProvisioningAccessControlRules

The following example assigns permissions to the `Administrator` profile, allowing the simultaneous
review of multiple manual provisioning items for the `Directory_User` entity type.

```

  <BulkPerformManualProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>

```

The scaffolding generates the following scaffoldings:

- [PerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="BulkPerformManualProvisioning_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass review manual provisioning items for Directory_User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/BulkPerformManualProvisioning/Directory_User" /></AccessControlRule><PerformManualProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

# BulkResourceReconciliationAccessControlRules

The following example assigns to the Administrator profile the rights to reconcile simultaneously
several resources from the Directory_User entity type.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

[Copy](<javascript:void(0);>)

```
<BulkResourceReconciliationAccessControlRules Profile="Administrator" EntityType="Directory_User"/>
```

The scaffolding generates the following scaffoldings:

- ReconciliateResourcesAccessControlRules: Generates the permissions to access the resource
  reconciliation pages for a given entity type and profile. See the
  [ ReconciliateResourcesAccessControlRules ](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  topic for additional information.

## Properties

| Property            | Type   | Description                                                |
| ------------------- | ------ | ---------------------------------------------------------- |
| EntityType required | String | Identifier of the entity type involved in the scaffolding. |
| Profile required    | String | Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="BulkResourceReconciliationAccessControlRules_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Bulk reconciliate resources AssignedResourceBinary User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/MassReconciliateResources/Directory_User" /></AccessControlRule><ReconciliateResourcesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>
```

# BulkReviewProvisioningAccessControlRules

The following example assigns permissions to the `Administrator` profile, allowing the simultaneous
review of multiple pending provisioning orders for the `Directory_User` entity type.

```

  <BulkReviewProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>

```

The scaffolding generates the following scaffoldings:

- [ReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="BulkReviewProvisioning_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass reconciliate resources AssignedResourceBinary User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/BulkReviewProvisioning/Directory_User" /></AccessControlRule><ReviewProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

# BulkRoleReconciliationAccessControlRules

Generates the permissions to perform bulk validations on the **Role Reconciliation** page.

The scaffolding generates the following scaffoldings:

- [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

# GovernanceRolesAccessControlRules

Generates the rights to access the role review pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

![Role Review](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/governancerolesaccesscontrolrules/home_rolereview_v523.webp)

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

# RoleModels

- #### [BasketRulesControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to execute the different requests to display the information in the
  rights basket.- ####
  [BulkPerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Perform Manual Provisioning\*\*
  page.- ####
  [BulkResourceReconciliationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Resource Reconciliation\*\*
  page.- ####
  [BulkReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Provisioning Review\*\* page
  (only for errored orders).- ####
  [BulkRoleReconciliationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Role Reconciliation\*\*
  page.- ####
  [GovernanceRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the governance review pages for a given entity type and
  profile.- ####
  [PerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.- ####
  [ReconciliateResourcesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the resource reconciliation pages for a given entity type
  and profile.- ####
  [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.- ####
  [RedundantAssignmentAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the \*\*Redundant Assignment\*\* page, to analyze and remove
  redundant assignments.- ####
  [ReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.- ####
  [ReviewRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the role review pages for a given entity type and
  profile.- ####
  [RisksAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [RoleAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the configuration pages and create, update, delete the
  elements of the role model.- ####
  [RoleNamingAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to configure and launch the automatic creation of roles and rules
  based on naming conventions.

# PerformManualProvisioningAccessControlRules

Generates the rights to access the access manual provisioning pages for a given entity type and
profile.

Gives access to a shortcut on the dashboard to access this page.

![Manual Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

The connector connected to the entity type must have the manual type as the provisioning type,
otherwise the information of the entity type cannot be displayed on this screen.

## Examples

```

  <PerformManualProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceNavigation" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceScalar_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceScalar" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_AssignedResourceType_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceType" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Application_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Bot_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Guest_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_PresenceState_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserRecord_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_AssignedResourceType_ManualProvisioningReview" DisplayName_L1="Administrator - Manual Provisioning for AssignedResourceType" DisplayName_L2="Administrator - Provisioning manuel de AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedResourceType/ManualProvisioningReview" /></AccessControlRule><AccessControlRule Identifier="Administrator_Resource_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Manual Provisioning for Resource" DisplayName_L2="Administrator - Provisioning manuel de Resource" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Administrator_Workflow_Directory_User_Custom_ProvisioningPolicy_PerformManualProvisioning_Directory_User" DisplayName_L1="Administrator - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/PerformManualProvisioning/Directory_User" /></AccessControlRule>

```

# ReconciliateResourcesAccessControlRules

Generates the right to access the reconcile resources pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

Also create the rights to view the TargetEntityTypes of all ResourceTypes whose source is the
EntityType to be filled in the Scaffolding.

![Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

## Examples

```

  <ReconciliateResourcesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_AD_Entry_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_AD_Entry_Custom_Resources_TargetResourceView" EntityType="AD_Entry" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/AD_Entry/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Access_AccessAuthorization_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_Access_AccessAuthorization_Custom_Resources_TargetResourceView" EntityType="Access_AccessAuthorization" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Access_AccessAuthorization/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Access_Badge_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_Access_Badge_Custom_Resources_TargetResourceView" EntityType="Access_Badge" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Access_Badge/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_AssignedResourceBinary_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for AssignedResourceBinary" DisplayName_L2="Administrator - R�conciliation de AssignedResourceBinary" EntityType="AssignedResourceBinary" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_AssignedResourceNavigation_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for AssignedResourceNavigation" DisplayName_L2="Administrator - R�conciliation de AssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_AssignedResourceScalar_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for AssignedResourceScalar" DisplayName_L2="Administrator - R�conciliation de AssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_AssignedResourceType_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for AssignedResourceType" DisplayName_L2="Administrator - R�conciliation de AssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedResourceType/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_MicrosoftEntraID_DirectoryObject_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_MicrosoftEntraID_DirectoryObject_Custom_Resources_TargetResourceView" EntityType="MicrosoftEntraID_DirectoryObject" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/AzureAD_DirectoryObject/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Category_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for Category" DisplayName_L2="Administrator - R�conciliation de Category" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_Application_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_Bot_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_Guest_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_Organization_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_PresenceState_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Directory_UserRecord_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_EntityProperty_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for EntityProperty" DisplayName_L2="Administrator - R�conciliation de EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_LDAP_Entry_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_LDAP_Entry_Custom_Resources_TargetResourceView" EntityType="LDAP_Entry" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/LDAP_Entry/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_ResourceType_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for ResourceType" DisplayName_L2="Administrator - R�conciliation de ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Resource_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Reconciliate for Resource" DisplayName_L2="Administrator - R�conciliation de Resource" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_SAB_User_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_SAB_User_Custom_Resources_TargetResourceView" EntityType="SAB_User" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/SAB_User/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_SAP_User_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReconciliateResources_SAP_User_Custom_Resources_TargetResourceView" EntityType="SAP_User" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/SAP_User/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateResources_Workflow_Directory_User_Custom_ProvisioningPolicy_ReconciliateResources_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Resources - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateResources/Directory_User" /></AccessControlRule>

```

# ReconciliateRolesAccessControlRules

Generates the rights to access the access reconcile roles pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

![Role Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/home_rolereconciliation_v523.webp)

## Examples

```

  <ReconciliateRolesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedCompositeRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedResourceType_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_AssignedSingleRole_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Reconciliate Roles" DisplayName_L2="Administrator - R�conciliation des r�les" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedSingleRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Application_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Bot_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Guest_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_Organization_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_PresenceState_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Directory_UserRecord_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReconciliateRoles_Workflow_Directory_User_Custom_ProvisioningPolicy_ReconciliateRoles_Directory_User" DisplayName_L1="Workforce/Administration/Reconciliate Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReconciliateRoles/Directory_User" /></AccessControlRule>

```

# RedundantAssignmentAccessControlRule

Generates the permissions to access the **Redundant Assignment** page, to analyze and remove
redundant assignments.

Gives access to a shortcut on the dashboard to access this page.

![Redundant Assignments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/home_redundantassignments_v602.webp)

## Examples

The following example gives to the `Administrator` profile the permissions to access the **Redundant
Assignment** page and perform redundant-assignment related actions.

```

  <RedundantAssignmentAccessControlRule Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_RedundantAssignment" DisplayName_L1="Administrator_RedundantAssignment" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RedundantAssignment" /></AccessControlRule>

```

# ReviewProvisioningAccessControlRules

Generates the right to access the review provisioning pages for a given entity type and profile.
Also create the rights to view the TargetEntityTypes of all ResourceTypes whose source is the
EntityType to be filled in the Scaffolding.

Gives access to a shortcut on the dashboard to access this page.

![Provisioning Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/home_provisioningreview_v523.webp)

## Examples

```

  <ReviewProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_AD_Entry_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_AD_Entry_Custom_Resources_TargetResourceView" EntityType="AD_Entry" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/AD_Entry/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Access_AccessAuthorization_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_Access_AccessAuthorization_Custom_Resources_TargetResourceView" EntityType="Access_AccessAuthorization" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Access_AccessAuthorization/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Access_Badge_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_Access_Badge_Custom_Resources_TargetResourceView" EntityType="Access_Badge" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/Access_Badge/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_AssignedResourceBinary_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="AssignedResourceBinary" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_AssignedResourceNavigation_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_AssignedResourceScalar_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_AssignedResourceType_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedResourceType/Comment" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedResourceType/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_MicrosoftEntraID_DirectoryObject_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_MicrosoftEntraID_DirectoryObject_Custom_Resources_TargetResourceView" EntityType="MicrosoftEntraID_DirectoryObject" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/AzureAD_DirectoryObject/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Category_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Category" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_Application_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_Bot_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_Guest_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_Organization_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_PresenceState_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Directory_UserRecord_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_EntityProperty_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_LDAP_Entry_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_LDAP_Entry_Custom_Resources_TargetResourceView" EntityType="LDAP_Entry" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/LDAP_Entry/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_ResourceType_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Resource_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Resource" Profile="Administrator">  <Entry Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_SAB_User_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_SAB_User_Custom_Resources_TargetResourceView" EntityType="SAB_User" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/SAB_User/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_SAP_User_Custom_Resources_TargetResourceView" DisplayName_L1="Workforce/Administration/Directory_User_ReviewProvisioning_SAP_User_Custom_Resources_TargetResourceView" EntityType="SAP_User" Profile="Administrator">  <Entry CanExecute="true" FullAccessProperties="true" Permission="/Custom/Resources/SAP_User/View" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewProvisioning_Workflow_Directory_User_Custom_ProvisioningPolicy_ReviewProvisioning_Directory_User" DisplayName_L1="Workforce/Administration/Review Provisioning - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewProvisioning/Directory_User" /></AccessControlRule>

```

# ReviewRolesAccessControlRules

Generates the rights to access the access roles review pages for a given entity type and profile.

Gives access to a shortcut on the dashboard to access this page.

![Role Review](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/governancerolesaccesscontrolrules/home_rolereview_v523.webp)

## Examples

```

  <ReviewRolesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_AssignedCompositeRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Roles " DisplayName_L2="Administrator - Revue des r�les " EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedCompositeRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_AssignedSingleRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Roles " DisplayName_L2="Administrator - Revue des r�les " EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AssignedSingleRole/Comment" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Application_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Bot_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Guest_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_Organization_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_PresenceState_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Directory_UserRecord_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule><AccessControlRule Identifier="Workforce/Administration/Directory_User_ReviewRoles_Workflow_Directory_User_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Workforce/Administration/Review Roles - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>

```

# RisksAdministrationAccessControlRules

## Examples

```

  <RisksAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Category" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_EntityProperty" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_EntityType" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_EntityType" EntityType="EntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_IdentifiedRisk" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_IdentifiedRisk" EntityType="IdentifiedRisk" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/IdentifiedRisk/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Policy" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Resource" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Resource" EntityType="Resource" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Create" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_ResourceType" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_Risk" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_Risk" EntityType="Risk" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/IdentifiedRisk/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_RiskRule" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_RiskRule" EntityType="RiskRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule><AccessControlRule Identifier="Administrator_ProvisioningPolicy_Risk_RiskRuleItem" DisplayName_L1="Administrator_ProvisioningPolicy_Risk_RiskRuleItem" EntityType="RiskRuleItem" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Risk" /></AccessControlRule>

```

# RoleAdministrationAccessControlRules

Generates the rights to access the access configuration pages and create, update, delete for:

- Policies
- ResourceTypes
- SingleRoles
- CompositeRoles
- ResourceNavigationRules
- ResourceScalarRule
- ResourceCorrelationRule
- CompositeRoleRule
- ResourceTypeRule
- SingleRoleRule
- ContextRule
- Categories

Gives access to a shortcut on the dashboard to access this page.

![Configuration Section](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules/home_configuration_v603.webp)

## Examples

```

  <RoleAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_Area_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Access_Area" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Access_TimeSlot_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Access_TimeSlot" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_AutomationRule_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="AutomationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/AutomationRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Category_ProvisioningPolicy_Category" DisplayName_L1="Administrator - Management for Category" DisplayName_L2="Administrator - Gestion des Category" EntityType="Category" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Category/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_CompositeRoleRule_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_CompositeRole_ProvisioningPolicy_CompositeRole" DisplayName_L1="Administrator - Management for CompositeRole" DisplayName_L2="Administrator - Gestion des CompositeRole" EntityType="CompositeRole" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ContextRule_ProvisioningPolicy_ContextRule" DisplayName_L1="Administrator - Management for ContextRule" DisplayName_L2="Administrator - Gestion des ContextRule" EntityType="ContextRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Country_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Country" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_ExternalCompany_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_ExternalCompany" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_OrganizationType_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_OrganizationType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Organization_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Organization" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Site_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Site" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Subsidiary_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Subsidiary" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_Title_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_Title" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_UserCategory_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_UserCategory" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_CompositeRoleRule" DisplayName_L1="Administrator - Management for CompositeRoleRule" DisplayName_L2="Administrator - Gestion des CompositeRoleRule" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/Policy" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Directory_User_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="Directory_User" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/SingleRoleRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_AutomationRule" DisplayName_L1="Administrator - Management for AutomationRule" DisplayName_L2="Administrator - Gestion des AutomationRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_EntityProperty" DisplayName_L1="Administrator - Management for EntityProperty" DisplayName_L2="Administrator - Gestion des EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceClassificationRule" DisplayName_L1="Administrator - Management for ResourceClassificationRule" DisplayName_L2="Administrator - Gestion des ResourceClassificationRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceCorrelationRule" DisplayName_L1="Administrator - Management for ResourceCorrelationRule" DisplayName_L2="Administrator - Gestion des ResourceCorrelationRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceQueryRule" DisplayName_L1="Administrator - Management for ResourceQueryRule" DisplayName_L2="Administrator - Gestion des ResourceQueryRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_EntityProperty_ProvisioningPolicy_ResourceScalarRule" DisplayName_L1="Administrator - Management for ResourceScalarRule" DisplayName_L2="Administrator - Gestion des ResourceScalarRule" EntityType="EntityProperty" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_Policy_ProvisioningPolicy_Policy" DisplayName_L1="Administrator - Management for Policy" DisplayName_L2="Administrator - Gestion des Policy" EntityType="Policy" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />  <Entry Permission="/ProvisioningPolicy/Category/Create" />  <Entry Permission="/ProvisioningPolicy/Category/Delete" />  <Entry Permission="/ProvisioningPolicy/Category/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRole/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceType/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRole/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceClassificationRule_ProvisioningPolicy_ResourceClassificationRule" DisplayName_L1="Administrator - Management for ResourceClassificationRule" DisplayName_L2="Administrator - Gestion des ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceCorrelationRule_ProvisioningPolicy_ResourceCorrelationRule" DisplayName_L1="Administrator - Management for ResourceCorrelationRule" DisplayName_L2="Administrator - Gestion des ResourceCorrelationRule" EntityType="ResourceCorrelationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/Metadata/Binding/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceNavigationRule_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceQueryRule_ProvisioningPolicy_ResourceQueryRule" DisplayName_L1="Administrator - Management for ResourceQueryRule" DisplayName_L2="Administrator - Gestion des ResourceQueryRule" EntityType="ResourceQueryRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceScalarRule_ProvisioningPolicy_ResourceScalarRule" DisplayName_L1="Administrator - Management for ResourceScalarRule" DisplayName_L2="Administrator - Gestion des ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceTypeRule_ProvisioningPolicy_ResourceTypeRule" DisplayName_L1="Administrator - Management for ResourceTypeRule" DisplayName_L2="Administrator - Gestion des ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_ProvisioningPolicy_ResourceType" DisplayName_L1="Administrator - Management for ResourceType" DisplayName_L2="Administrator - Gestion des ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Resource_ProvisioningPolicy_ResourceNavigationRule" DisplayName_L1="Administrator - Management for ResourceNavigationRule" DisplayName_L2="Administrator - Gestion des ResourceNavigationRule" EntityType="Resource" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRoleRule_ProvisioningPolicy_SingleRoleRule" DisplayName_L1="Administrator - Management for SingleRoleRule" DisplayName_L2="Administrator - Gestion des SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRole_ProvisioningPolicy_SingleRole" DisplayName_L1="Administrator - Management for SingleRole" DisplayName_L2="Administrator - Gestion des SingleRole" EntityType="SingleRole" Profile="Administrator">  <Entry Permission="/ProvisioningPolicy/AutomationRule/Create" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/AutomationRule/Update" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/CompositeRoleRule/Update" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Create" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ContextRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceClassificationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceCorrelationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceNavigationRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceQueryRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceScalarRule/Update" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Create" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Delete" />  <Entry Permission="/ProvisioningPolicy/ResourceTypeRule/Update" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Update" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Create" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Delete" />  <Entry Permission="/ProvisioningPolicy/SingleRoleRule/Update" /></AccessControlRule>

```

# RoleNamingAccessControlRules

Generates the permissions to configure and launch the automatic creation of roles and rules based on
naming conventions.

## Examples

```

  <RoleNamingAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_RoleMapping_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrator_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_CreateUpdateDelete" DisplayName_L1="Administrator_RoleMapping" DisplayName_L2="Administrator_RoleMapping" EntityType="RoleMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_EntityProperty" DisplayName_L1="Administrator_EntityProperty" DisplayName_L2="Administrator_EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_RoleMapping_ResourceType" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrator_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RoleMapping/Update" /></AccessControlRule>

```

# Simulations

- #### [PolicySimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [RoleAndSimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

# PolicySimulationControlRules

## Examples

```

  <PolicySimulationControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="PolicySimulation_Administrator_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrator_Category" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_CompositeRole" DisplayName_L1="Administrator_CompositeRole" DisplayName_L2="Administrator_CompositeRole" EntityType="CompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_CompositeRoleRule" DisplayName_L1="Administrator_CompositeRoleRule" DisplayName_L2="Administrator_CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_PolicySimulation" DisplayName_L1="Administrator_PolicySimulation" DisplayName_L2="Administrator_PolicySimulation" EntityType="PolicySimulation" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_ResourceClassificationRule" DisplayName_L1="Administrator_ResourceClassificationRule" DisplayName_L2="Administrator_ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_ResourceNavigationRule" DisplayName_L1="Administrator_ResourceNavigationRule" DisplayName_L2="Administrator_ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_ResourceScalarRule" DisplayName_L1="Administrator_ResourceScalarRule" DisplayName_L2="Administrator_ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_ResourceTypeRule" DisplayName_L1="Administrator_ResourceTypeRule" DisplayName_L2="Administrator_ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_SingleRole" DisplayName_L1="Administrator_SingleRole" DisplayName_L2="Administrator_SingleRole" EntityType="SingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule><AccessControlRule Identifier="PolicySimulation_Administrator_SingleRoleRule" DisplayName_L1="Administrator_SingleRoleRule" DisplayName_L2="Administrator_SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Create" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Delete" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Query" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Start" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/PolicySimulation/Update" /></AccessControlRule>

```

# RoleAndSimulationControlRules

## Examples

```

  <RoleAndSimulationControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_CompositeRoleRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_CompositeRoleRule" DisplayName_L2="Administrator_CompositeRoleRule" EntityType="CompositeRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRoleRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_CompositeRole_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_CompositeRole" DisplayName_L2="Administrator_CompositeRole" EntityType="CompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/CompositeRole/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ContextRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ContextRule" DisplayName_L2="Administrator_ContextRule" EntityType="ContextRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ContextRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_Policy_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrator_Policy" EntityType="Policy" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/Policy/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceBinaryRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceBinaryRule" DisplayName_L2="Administrator_ResourceBinaryRule" EntityType="ResourceBinaryRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceBinaryRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceClassificationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceClassificationRule" DisplayName_L2="Administrator_ResourceClassificationRule" EntityType="ResourceClassificationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceClassificationRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceCorrelationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceCorrelationRule" DisplayName_L2="Administrator_ResourceCorrelationRule" EntityType="ResourceCorrelationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceCorrelationRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceNavigationRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceNavigationRule" DisplayName_L2="Administrator_ResourceNavigationRule" EntityType="ResourceNavigationRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceNavigationRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceQueryRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceQueryRule" DisplayName_L2="Administrator_ResourceQueryRule" EntityType="ResourceQueryRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceQueryRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceScalarRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceScalarRule" DisplayName_L2="Administrator_ResourceScalarRule" EntityType="ResourceScalarRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceScalarRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceTypeRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceTypeRule" DisplayName_L2="Administrator_ResourceTypeRule" EntityType="ResourceTypeRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceTypeRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_ResourceType_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrator_ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/ResourceType/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRoleRule_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_SingleRoleRule" DisplayName_L2="Administrator_SingleRoleRule" EntityType="SingleRoleRule" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRoleRule/UpdateSimulation" /></AccessControlRule><AccessControlRule Identifier="Administrator_SingleRole_CreateUpdateDeleteSimulation" DisplayName_L1="Administrator_SingleRole" DisplayName_L2="Administrator_SingleRole" EntityType="SingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/CreateSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/DeleteSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/RevertSimulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/Simulation" />  <Entry CanExecute="true" Permission="/ProvisioningPolicy/SingleRole/UpdateSimulation" /></AccessControlRule>

```

# UserInterfaces

- #### [ManageAccounts](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [SearchBarPageAccessControl](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives access rights to the different navigation elements of the SearchBars of the pages of the
  role model.

# ManageAccounts

Gives access to the **Manage Accounts** buttons for the users of a given entity type.

![ManageAccounts Button](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/userinterfaces/manageaccounts/accesscontrol_manageaccounts_v603.webp)

The scaffolding gives access to the button, but you need to get the permissions on said accounts in
order to see anything once you click on the button.

## Examples

The following example gives the `Administrator` profile access to the **Manage Accounts** button for
users from `Directory_User`.

```

<ManageAccounts EntityType="Directory_User" Profile="Administrator"/>

In order to see AD accounts once clicking on the button:
<AccessControlRule Profile="HELPDESK" EntityType="AD_Entry" Identifier="HELPDESK_PWR_AD_Entry" DisplayName_L1="HELPDESK_PWR_AD_Entry">  <Entry Permission="/Custom/Resources/AD_Entry/View" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ResetPassword" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/IndirectResetPassword" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ToggleLock" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ChangePassword" CanExecute="true" /></AccessControlRule>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ManageAccounts_ManageAccounts_Directory_User" DisplayName_L1="Workforce/Administration/Directory_User_ManageAccounts_ManageAccounts_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ManageAccounts/Directory_User" /></AccessControlRule>

```

# SearchBarPageAccessControl

The Scaffolding giving access to the different views of the pages of the role model do not give
access rights to the different navigation elements of the SearchBars of these pages. This
Scaffolding allows you to give these rights per page, profile and EntityType.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Child Elements

- [SearchBarPage](#searchbarpage) (optional) Adds right for a search bar in a specific page

### SearchBarPage

| Property                          | Details                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SearchBarPage default value: None | **Type** SearchBarPageType **Description** For the scaffolding arguments `SearchBarPage` and `SearchBarPageAccessControl`, location of the search bar. `0` - None. `1` - ReviewRoles. `2` - ReconciliateRoles. `3` - ReviewProvisioning. `4` - PerformManualProvisioning. `5` - ReconciliateResources. `6` - WorkflowOverview. |

# ConnectorMappings

This scaffolding allows the user to generate the mapping of an entity in a given connector.

The identifiers of the connector and the entity type must be provided to the scaffolding through the
attributes `Connector` and `EntityType` to make the link between these two elements and create the
mapping. This scaffolding needs to have an argument to know the location of the file to be retrieved
during the collection. This file must be a CSV file with "Command" as the first column and then the
rest of the columns for scalar and mono-navigation properties. This file must be named after the
entity type. If there are multi-valued navigation properties, it is necessary to create a file with
"Command" as first property and the key of the two entities to link. This file must be named after
the identifier of the starting entity type + "\_" + the identifier of the navigation property.

If you are using a CSV connector with files in incremental mode, you must specify the attribute
`IsIncremental` to `true`.

## Examples

```

  <ConnectorMappings Connector="Directory" EntityType="Directory_UserRecord" IsIncremental="true" Package="Usercube.Excel@0000001"/>

```

## Properties

| Property               | Details                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector required     | **Type** String **Description** Identifier of the connector involved in the job to be generated.                                                |
| EntityType required    | **Type** String **Description** Identifier of the entity type involved in the scaffolding.                                                      |
| IsIncremental optional | **Type** Boolean **Description** `true` to perform an incremental synchronization.                                                              |
| Package optional       | **Type** ConnectionPackage **Description** For a `ConnectorMappings` scaffolding, identifier of the package for the connection to be generated. |

## Child Elements

- [ExcludedProperty](#excludedproperty) (optional) to ignore a given property of the specified
  entity type.
- [MappingPath](#mappingpath) (optional) Define the path for csv EntityType mapping

### ExcludedProperty

| Property          | Details                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Property required | **Type** String **Description** Property of the specified entity type that is to be ignored for the generation of entity instances and association instances. |

A scaffolding does not use filters, but a part of the entity model can be excluded with the
`ExcludedProperty` argument.

The following example generates a universe `U8_Users` based on the entity type `Directory_User`,
like our U1 but without the `Guests` property:

```

<Universe Identifier="U8_Users" DisplayName_L1="U8 - Users" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U8_Users" EntityType="Directory_User" >
    <ExcludedProperty Property="Guests"/>
</UniverseDataModel>

```

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (ExcludedProperty)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_excluded.webp)

### MappingPath

| Property                           | Details                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| IsIncremental default value: false | **Type** Boolean **Description** Defines if the CSV connector files uses the incremental mode |

## Generated XML

Our example generates the following configuration:

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" /><EntityTypeMapping Identifier="Directory_UserRecord" ConnectionTable="Directory_UserRecord" Connector="Directory">  <Property Identifier="BirthDate" ConnectionColumn="BirthDate" />  <Property Identifier="BirthName" ConnectionColumn="BirthName" />  <Property Identifier="ContractEndDate" ConnectionColumn="ContractEndDate" />  <Property Identifier="ContractStartDate" ConnectionColumn="ContractStartDate" />  <Property Identifier="Email" ConnectionColumn="Email" />  <Property Identifier="EmailAliases" ConnectionColumn="EmailAliases" />  <Property Identifier="EmployeeId" ConnectionColumn="EmployeeId" />  <Property Identifier="EndDate" ConnectionColumn="EndDate" />  <Property Identifier="FirstName" ConnectionColumn="FirstName" />  <Property Identifier="LastName" ConnectionColumn="LastName" />  <Property Identifier="Login" ConnectionColumn="Login" />  <Property Identifier="MobileNumber" ConnectionColumn="MobileNumber" />  <Property Identifier="PhoneNumber" ConnectionColumn="PhoneNumber" />  <Property Identifier="PositionEndDate" ConnectionColumn="PositionEndDate" />  <Property Identifier="PositionIdentifier" ConnectionColumn="PositionIdentifier" IsPrimaryKey="true" />  <Property Identifier="PositionStartDate" ConnectionColumn="PositionStartDate" />  <Property Identifier="StartDate" ConnectionColumn="StartDate" />  <Property Identifier="Suspended" ConnectionColumn="Suspended" />  <Property Identifier="VIP" ConnectionColumn="VIP" /></EntityTypeMapping><EntityAssociationMapping Identifier="Directory_UserRecord_ExternalCompany" Column1="PositionIdentifier" Column2="ExternalCompany" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_ExternalCompany:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_IGAManager" Column1="PositionIdentifier" Column2="IGAManager" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Manager" Column1="PositionIdentifier" Column2="Manager" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Organization" Column1="PositionIdentifier" Column2="Organization" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Organization:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_PersonalTitle" Column1="PositionIdentifier" Column2="PersonalTitle" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_PersonalTitle:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Site" Column1="PositionIdentifier" Column2="Site" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Site:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Subsidiary" Column1="PositionIdentifier" Column2="Subsidiary" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Subsidiary:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_Title_User_Records" Column1="PositionIdentifier" Column2="Title" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_Title:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_User" Column1="PositionIdentifier" Column2="User" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_User:Identifier" /><EntityAssociationMapping Identifier="Directory_UserRecord_UserType" Column1="PositionIdentifier" Column2="UserType" ConnectionTable="Directory_UserRecord" Connector="Directory" EntityPropertyMapping1="Directory_UserRecord:PositionIdentifier" EntityPropertyMapping2="Directory_UserType:Identifier" />

```

# EntityTypeDisplayName

Creates a default expression to compute the display names of an entity type's resources.

## Examples

The following example assigns a default display name to each resource in `Directory_Country`, when
no display name is defined.

```

<EntityTypeDisplayName EntityType="Directory_Country"/>

```

### Property

The following example assigns the `DisplayName` property as a default display name to each resource
in `Directory_Country`, when no display name is defined.

```

<EntityTypeDisplayName EntityType="Directory_Country" Property="DisplayName"/>

```

## Properties

| Property            | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Property optional   | **Type** String **Description** Property of the specified entity type, that will be used as display name for the entity type's resources. **Note:** when not specified, the display name is the first string property of the entity type that contains "name" (case insensitively), in ascending order of `TargetColumnIndex`. When there is no such property, the display name is the first string property of the entity type that is a key property, i.e. `isKey` set to `true`. When there is no key property either, the display name is the first property of the entity type. |

## Generated XML

Our example generates the following configuration:

```

<EntityPropertyExpression Identifier="Directory_Country_InternalDisplayName_L1" Binding="Directory_Country:DisplayName_enUS" EntityType="Directory_Country" Property="InternalDisplayName_L1" /><EntityPropertyExpression Identifier="Directory_Country_InternalDisplayName_L2" Binding="Directory_Country:DisplayName_frFR" EntityType="Directory_Country" Property="InternalDisplayName_L2" />

```

# EntityTypeDisplayTable

Displays all resources of a given entity type in a table.

When the entity type contains fewer than 4 scalar properties, all properties will be displayed in
the table. Otherwise, the only scalar property displayed in the table is the internal display name.

## Examples

```

  <EntityTypeDisplayTable EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<DisplayTable Identifier="Directory_Country" DisplayTableDesignElement="table" EntityType="Directory_Country" IsEntityTypeDefault="true">  <Column CanBeFiltered="true" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="Identifier" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="ISOCode" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" /></DisplayTable>

```

# EntityTypeDisplayTableAdaptable

Displays all resources of a given entity type in an adaptable table.

When the entity type contains fewer than 4 scalar properties, all properties will be displayed in
the table. Otherwise, the only scalar property displayed in the table is the internal display name.

## Examples

The following example displays the resources of the `Directory_Country` entity type in an adaptable
table.

```

  <EntityTypeDisplayTableAdaptable EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<DisplayTable Identifier="Directory_Country" DisplayTableDesignElement="adaptable" EntityType="Directory_Country" IsEntityTypeDefault="true">  <Column CanBeFiltered="true" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="Identifier" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="ISOCode" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" /></DisplayTable>

```

# EntityTypeDisplayTargetResourceTable

Creates a displaytable for the given entity. If there are less than 4 scalar properties, the
scaffolding adds all the properties in the table otherwise there is only the internaldisplayname.
The design element for this displaytable is resourcetable.

## Examples

```

  <EntityTypeDisplayTargetResourceTable EntityType="SAB_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<DisplayTable Identifier="SAB_User" DisplayTableDesignElement="resourcetable" EntityType="SAB_User" IsEntityTypeDefault="true">  <Column CanBeFiltered="true" DisplayBinding="InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" /></DisplayTable>

```

# EntityTypeMenuItem

Creates a menu item for the entity type, and for its connector if the entity type has an entity type
mapping.

You can create menu items this way in the menu items `Nav`, `Top` and `Dashboard`.

When choosing `Nav`, it creates the connector's menu item under the `Nav_Connectors` menu item if
you have it, otherwise it creates the connector's menu item under `Nav`. When choosing `Top`, no
menu item is created for the entity type's connector.

If the entity type already has a menu item in the given section (`Nav`, `Top` or `Dashboard`), the
scaffolding does not create any more menu item in this section. If the entity type has no menu item
in the given section, but the connector's menu item already exists in this section, the scaffolding
creates only a menu item for the entity type, under the menu item of its connector.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Child Elements

- [MenuItemLocalization](#menuitemlocalization) (optional) Localization for the created menu items.

### MenuItemLocalization

| Property                         | Details                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| OnDashboard default value: false | **Type** Boolean **Description** Generic column used to store information for internal use.                                                 |
| OnNav default value: false       | **Type** Boolean **Description** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| OnTop default value: false       | **Type** Boolean **Description** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |

# EntityTypeSearchBar

Creates the search bar for the entity without criteria.

## Examples

```

  <EntityTypeSearchBar EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<SearchBar EntityType="Directory_Country" Menu="Search_Directory_Country" SearchBarDesignElement="Inline" />

```

# Entity Types

- #### [ConnectorMappings](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the mapping of an entity in a given connector.- ####
  [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Computes a default value for resources' internal display names.- ####
  [EntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a display table for the given entity.- ####
  [EntityTypeDisplayTableAdaptable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates an adaptable display table for a given entity type.- ####
  [EntityTypeDisplayTargetResourceTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a displaytable for the given entity.- ####
  [EntityTypeMenuItem](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a menu item for the entity type, and for its connector if the entity type has an entity
  type mapping.- ####
  [EntityTypeSearchBar](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the search bar for the entity without criteria.- ####
  [TargetResourceReportMenus](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the Item menu for the entity's report so that it is displayed in the report view.

# TargetResourceReportMenus

Creates the Item menu for the entity's report so that it is displayed in the report view.

## Examples

```

  <TargetResourceReportMenus EntityType="LDAP_Entry"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="Reports_Resources_LDAP_Entry" DisplayName_L1="LDAP - Entry" ParentMenuItem="Reports" ReportQuery="Resources_LDAP_Entry" />

```

# EntityTypes

- #### [Entity Types](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [Workflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

# Scaffoldings

Usercube provides a list of scaffoldings to act as configuration shortcuts: a scaffolding is an XML
element that will generate a complex XML fragment.

Available scaffoldings are described below.

To understand scaffoldings' generated configuration, Usercube's executable
[`Usercube-Export-Configuration`](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
can be launched with the `--export-scaffolding` option to export into XML files the configuration
items generated by scaffoldings.

Remember that these exported files are meant for viewing and understanding purposes, not for using
their content in your own configuration.

## References

- #### [AccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [AccessReviews](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [AccessReviewAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to administrate campaign creation.
- #### [Connectors](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)

- #### [ConnectorResourceTypeAccessControl](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
  Gives the rights to create and update resource types, generate provisioning orders and fulfill
  from the connector screen.- ####
  [SettingsAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
  Generates the permissions to configure the Workforce Core Solution module and connector
  settings.
- #### [Jobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

- #### [GetJobLogAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the permissions to read task and job instances logs in UI for a given profile.- ####
  [JobAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Scaffolding to access the job administration page.- ####
  [JobTaskAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates all permissions for JobStep entity.- ####
  [PendingAssignedResourceTypesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the access control rules which give to a profile the permissions to call the API
  Pending AssignedResourceTypes.- ####
  [ProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.- ####
  [ResourceChangesViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the access control rules which gives to a profile the permissions to call the API
  ResourceChange, ResourceFileChange and ResourceLinkChange.- ####
  [ResourceTypeMappingControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generate rights to launch agent fulfillment.- ####
  [RunJobAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the permissions to launch jobs from UI for a given profile.- ####
  [RunJobNotificationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates access control to send notification when job finish with an error state.- ####
  [RunJobRepairAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning
  or a synchronization for a given profile.- ####
  [RunJobRepairNotificationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates access control to send notification when a relaunch job finish with an error
  state.- ####
  [SynchronizationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates rights to launch synchronization task.- ####
  [TaskAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates all rights to have the access to job administration page.- ####
  [TaskInstanceAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates access control to update the task instances.- ####
  [WorkflowFulfillmentControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  Generates the execution rights to launch Fulfillment workflow for a given profile.
- #### [Monitoring](/docs/identitymanager/6.1/configuration-reference/xml-configuration/monitoring-config.md)

- #### [MonitoringAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/monitoring-config.md)
  Generates the access control rule which gives to a profile the permission to query the
  monitoring screen.
- #### [Profiles](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [AssignProfileAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives to a given profile the rights to create, update, delete and query any assigned
  profile.- ####
  [OpenIdClientAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [ProfileAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives to a given profile the rights to create, update and delete profiles.
- #### [Queries](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [ManageSettingAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the access control rule which gives to a profile the permission to query, create,
  update and delete settings from the UM_Settings table.- ####
  [ReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the report view.- ####
  [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to apply a report for a profile on a given entity.- ####
  [UniverseAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates an access control rule which gives a profile the permission to access the query page
  and run queries.
- #### [Resources](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [CreateResourceIncrementalAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the access control rule which gives to a profile the permission to query the resources
  modified incrementally- ####
  [ResourceApiAdministration](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to create/update/delete/query resources from a given entity type, for
  a given profile.- ####
  [ResourcePickerControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the reading right of the resource picker.- ####
  [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to view an entity type's resources.- ####
  [ViewHistoryResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates an access control rule giving to the specified profile the permission to browse the
  resources history of the specified entity type.
- #### [RoleModels](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [BasketRulesControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to execute the different requests to display the information in the
  rights basket.- ####
  [BulkPerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Perform Manual Provisioning\*\*
  page.- ####
  [BulkResourceReconciliationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Resource Reconciliation\*\*
  page.- ####
  [BulkReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Provisioning Review\*\* page
  (only for errored orders).- ####
  [BulkRoleReconciliationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to perform bulk validations on the \*\*Role Reconciliation\*\*
  page.- ####
  [GovernanceRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the governance review pages for a given entity type and
  profile.- ####
  [PerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.- ####
  [ReconciliateResourcesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the resource reconciliation pages for a given entity type
  and profile.- ####
  [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.- ####
  [RedundantAssignmentAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the \*\*Redundant Assignment\*\* page, to analyze and remove
  redundant assignments.- ####
  [ReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.- ####
  [ReviewRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the role review pages for a given entity type and
  profile.- ####
  [RisksAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [RoleAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to access the configuration pages and create, update, delete the
  elements of the role model.- ####
  [RoleNamingAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to configure and launch the automatic creation of roles and rules
  based on naming conventions.
- #### [Simulations](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [PolicySimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [RoleAndSimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [UserInterfaces](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [ManageAccounts](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [SearchBarPageAccessControl](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives access rights to the different navigation elements of the SearchBars of the pages of the
  role model.
- #### [Workflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

- #### [CreateUpdateDeleteAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Generates execution rights for the create, update, delete workflows.- ####
  [UpdateResourcesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Generates the permissions to access the task page and visualize the workflows to be executed for
  a given entity type and profile.- ####
  [WorkflowConfigurationControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowOverviewControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Generates the permissions to access the workflow supervision page.
- #### [EntityTypes](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [Entity Types](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [ConnectorMappings](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the mapping of an entity in a given connector.- ####
  [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Computes a default value for resources' internal display names.- ####
  [EntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a display table for the given entity.- ####
  [EntityTypeDisplayTableAdaptable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates an adaptable display table for a given entity type.- ####
  [EntityTypeDisplayTargetResourceTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a displaytable for the given entity.- ####
  [EntityTypeMenuItem](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a menu item for the entity type, and for its connector if the entity type has an entity
  type mapping.- ####
  [EntityTypeSearchBar](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the search bar for the entity without criteria.- ####
  [TargetResourceReportMenus](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the Item menu for the entity's report so that it is displayed in the report view.
- #### [Workflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

- #### [CreateUpdateDeleteMenus](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Creates creation, update and delete menus for an entity.- ####
  [CreateUpdateDeleteWorkflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [UpdateResourcesMenus](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [UpdateResourcesWorkflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowActorsNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowEntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Creates an entity that will be the source of all workflows that manipulate the given
  entity.- ####
  [WorkflowEntityTypeDisplayEntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowEntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

  Creates the display table of the workflow entity of the starting entity.- ####
  [WorkflowEntityTypeSearchBar](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)
  Creates the search bar of the workflow entity of the starting entity.- ####
  [WorkflowPerformerNotification](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md)

- #### [Jobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

- #### [CleanDatabaseJob](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates the job to clean old tasks and jobs instances with state InProgress

- #### [CreateAccessCertificationJob](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates the AccessCertification Job.

- #### [CreateAgentSynchroComplete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates for the given agent the synchronization job of all connectors present in the agent in
  Complete mode.

- #### [CreateAgentSynchroIncremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates for the given agent the synchronization job of all connectors present in the agent in
  incremental mode.

- #### [CreateConnectorsJobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates all jobs by connector to launched task in the connector page.

- #### [CreateConnectorSynchroComplete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates for the given connector the synchronization in complete mode.

- #### [CreateConnectorSynchroIncremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates for the given connector the synchronization job in incremental mode.

- #### [CreateInitializationJob](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

  Creates the Initialization Job for the given agent.

- #### [Optimizations](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [OptimizeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Optimizes all elements found in the given displayTable.

- #### [queries](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [TargetResourceReport](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates a ReportQuery with default Query taking all the properties of the entity.

- #### [UniverseDataModel](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates, within a universe, entity instances and association instances based on a predefined
  template.

- #### [Templates](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [ConnectorsAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Gives the permissions to manage the connector pages.

- #### [CreateAdministratorProfile](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates the profile administrator and all default access control rules.

- #### [CreateUpdateDeleteTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates the three types of workflow for the given entity as well as the execution rights for the
  given profile.

- #### [EntityReportDefault](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates all configuration items to add a ReportQuery for an EntityType and profile.

- #### [JobExecutionAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Assigns a set of rights to a given profile to execute any job, and view all job instances, task
  instances and logs.

- #### [JobViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.

- #### [SimulationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Generates the permissions to configure and launch simulations.

- #### [UpdateResourcesTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [ViewSourceResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates the display table, fills in the internal display name of the entity, and gives the
  rights to see the permissions and sources of the entity for a given profile.

- #### [ViewTargetResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates the entity view (designElement = resourceTable), the report and the rights for a given
  profile.

- #### [ViewTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Creates the view for the given entity as well as the rights for the given profile.

- #### [ViewTemplateAdaptable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Implements a default display name for the resources of a given entity type, displays the
  resources in an adaptable table, and give the permissions to view the resources.

- #### [Workforce](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

- #### [BootstrapModule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)

  Generates the default settings required to start using Usercube and the Workforce Core Solution
  module.

- #### [WorkforceModule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the workforce repository based on the data filled in the Workforce Core Solution
  module.

# Optimizations

- #### [OptimizeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Optimizes all elements found in the given displayTable.

# OptimizeDisplayTable

This scaffolding optimizes the given display table by replacing its tiles navigation properties by
scalar (pre-computed, via expressions) properties. This ultimately improves the performances of the
SQL queries used to fetch the data displayed in the corresponding table.

In order to optimize the display table, this scaffolding will create the following elements if they
don't exist.

- An
  [Entity Property](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
  for each tile item that uses a navigation binding. This will be used to hold the computed
  expression.
- An
  [Entity Property Expression](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
  to evaluate the binding expression used by the optimizable tile item.

Then, the scaffolding will link the display table tile elements to the newly created scalar
properties.

This scaffolding has a downside which is that the displayed data is less dynamic than a normal
display table, since it requires computing the expression (via jobs) ahead of time.

## Examples

The following example optimized the DisplayTable `Directory_User`

```

  <OptimizeDisplayTable DisplayTableIdentifier="Directory_User" />

```

## Properties

| Property                        | Details                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------- |
| DisplayTableIdentifier required | **Type** String **Description** The identifier of the display table to optimize |

## Generated XML

Our example generates the following configuration:

```

<EntityType Identifier="Directory_Organization" DisplayName_L1="Department" DisplayName_L2="D�partement">  <Property Identifier="Op_Directory_Users" DisplayName_L1="Op_Directory_Users" Type="ForeignKey" /></EntityType><EntityType Identifier="Directory_Site" DisplayName_L1="Site" DisplayName_L2="Site">  <Property Identifier="Op_Directory_Users" DisplayName_L1="Op_Directory_Users" Type="ForeignKey" /></EntityType><EntityType Identifier="Directory_Subsidiary" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale">  <Property Identifier="Op_Directory_Users" DisplayName_L1="Op_Directory_Users" Type="ForeignKey" /></EntityType><EntityType Identifier="Directory_Title" DisplayName_L1="Title" DisplayName_L2="Fonction">  <Property Identifier="Op_Directory_Users" DisplayName_L1="Op_Directory_Users" Type="ForeignKey" /></EntityType><EntityType Identifier="Directory_User" DisplayName_L1="User" DisplayName_L2="Collaborateur">  <Property Identifier="Op_MainRecord_FirstName" DisplayName_L1="Op_MainRecord_FirstName" TargetColumnIndex="90" Type="String" />  <Property Identifier="Op_MainRecord_LastName" DisplayName_L1="Op_MainRecord_LastName" TargetColumnIndex="96" Type="String" />  <Property Identifier="Op_MainRecord_MobileNumber" DisplayName_L1="Op_MainRecord_MobileNumber" TargetColumnIndex="92" Type="String" />  <Property Identifier="Op_MainRecord_Organization" DisplayName_L1="Op_MainRecord_Organization" TargetColumnIndex="130" Type="ForeignKey" />  <Property Identifier="Op_MainRecord_Organization_DisplayName" DisplayName_L1="Op_MainRecord_Organization_DisplayName" Type="String" />  <Property Identifier="Op_MainRecord_Organization_DisplayName_enUS" DisplayName_L1="Op_MainRecord_Organization_DisplayName_enUS" Language="1" NeutralProperty="Op_MainRecord_Organization_DisplayName" TargetColumnIndex="86" Type="String" />  <Property Identifier="Op_MainRecord_Organization_DisplayName_frFR" DisplayName_L1="Op_MainRecord_Organization_DisplayName_frFR" Language="2" NeutralProperty="Op_MainRecord_Organization_DisplayName" TargetColumnIndex="87" Type="String" />  <Property Identifier="Op_MainRecord_PhoneNumber" DisplayName_L1="Op_MainRecord_PhoneNumber" TargetColumnIndex="91" Type="String" />  <Property Identifier="Op_MainRecord_Site" DisplayName_L1="Op_MainRecord_Site" TargetColumnIndex="131" Type="ForeignKey" />  <Property Identifier="Op_MainRecord_Site_DisplayName" DisplayName_L1="Op_MainRecord_Site_DisplayName" Type="String" />  <Property Identifier="Op_MainRecord_Site_DisplayName_enUS" DisplayName_L1="Op_MainRecord_Site_DisplayName_enUS" Language="1" NeutralProperty="Op_MainRecord_Site_DisplayName" TargetColumnIndex="88" Type="String" />  <Property Identifier="Op_MainRecord_Site_DisplayName_frFR" DisplayName_L1="Op_MainRecord_Site_DisplayName_frFR" Language="2" NeutralProperty="Op_MainRecord_Site_DisplayName" TargetColumnIndex="89" Type="String" />  <Property Identifier="Op_MainRecord_Subsidiary" DisplayName_L1="Op_MainRecord_Subsidiary" TargetColumnIndex="132" Type="ForeignKey" />  <Property Identifier="Op_MainRecord_Suspended" DisplayName_L1="Op_MainRecord_Suspended" TargetColumnIndex="93" Type="Bool" />  <Property Identifier="Op_MainRecord_Title" DisplayName_L1="Op_MainRecord_Title" TargetColumnIndex="133" Type="ForeignKey" />  <Property Identifier="Op_MainRecord_Title_DisplayName" DisplayName_L1="Op_MainRecord_Title_DisplayName" Type="String" />  <Property Identifier="Op_MainRecord_Title_DisplayName_enUS" DisplayName_L1="Op_MainRecord_Title_DisplayName_enUS" Language="1" NeutralProperty="Op_MainRecord_Title_DisplayName" TargetColumnIndex="83" Type="String" />  <Property Identifier="Op_MainRecord_Title_DisplayName_frFR" DisplayName_L1="Op_MainRecord_Title_DisplayName_frFR" Language="2" NeutralProperty="Op_MainRecord_Title_DisplayName" TargetColumnIndex="84" Type="String" />  <Property Identifier="Op_MainRecord_UserType" DisplayName_L1="Op_MainRecord_UserType" TargetColumnIndex="134" Type="ForeignKey" />  <Property Identifier="Op_MainRecord_UserType_Category_Id" DisplayName_L1="Op_MainRecord_UserType_Category_Id" TargetColumnIndex="94" Type="Int64" />  <Property Identifier="Op_MainRecord_VIP" DisplayName_L1="Op_MainRecord_VIP" TargetColumnIndex="95" Type="Bool" /></EntityType><EntityType Identifier="Directory_UserType" DisplayName_L1="User Type" DisplayName_L2="Type de collaborateur">  <Property Identifier="Op_Directory_Users" DisplayName_L1="Op_Directory_Users" Type="ForeignKey" /></EntityType><EntityAssociation Identifier="Directory_User_Op_MainRecord_Organization" IsProperty2Collection="true" Property1="Directory_User:Op_MainRecord_Organization" Property2="Directory_Organization:Op_Directory_Users" /><EntityAssociation Identifier="Directory_User_Op_MainRecord_Site" IsProperty2Collection="true" Property1="Directory_User:Op_MainRecord_Site" Property2="Directory_Site:Op_Directory_Users" /><EntityAssociation Identifier="Directory_User_Op_MainRecord_Subsidiary" IsProperty2Collection="true" Property1="Directory_User:Op_MainRecord_Subsidiary" Property2="Directory_Subsidiary:Op_Directory_Users" /><EntityAssociation Identifier="Directory_User_Op_MainRecord_Title" IsProperty2Collection="true" Property1="Directory_User:Op_MainRecord_Title" Property2="Directory_Title:Op_Directory_Users" /><EntityAssociation Identifier="Directory_User_Op_MainRecord_UserType" IsProperty2Collection="true" Property1="Directory_User:Op_MainRecord_UserType" Property2="Directory_UserType:Op_Directory_Users" /><EntityPropertyExpression Identifier="Op_MainRecord_FirstName_Expr" Binding="Directory_User:MainRecord.FirstName" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_FirstName" /><EntityPropertyExpression Identifier="Op_MainRecord_LastName_Expr" Binding="Directory_User:MainRecord.LastName" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_LastName" /><EntityPropertyExpression Identifier="Op_MainRecord_MobileNumber_Expr" Binding="Directory_User:MainRecord.MobileNumber" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_MobileNumber" /><EntityPropertyExpression Identifier="Op_MainRecord_Organization_DisplayName_enUS_Expr" Binding="Directory_User:MainRecord.Organization.DisplayName_enUS" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Organization_DisplayName_enUS" /><EntityPropertyExpression Identifier="Op_MainRecord_Organization_DisplayName_frFR_Expr" Binding="Directory_User:MainRecord.Organization.DisplayName_frFR" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Organization_DisplayName_frFR" /><EntityPropertyExpression Identifier="Op_MainRecord_Organization_Expr" Binding="Directory_User:MainRecord.Organization.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Organization" /><EntityPropertyExpression Identifier="Op_MainRecord_PhoneNumber_Expr" Binding="Directory_User:MainRecord.PhoneNumber" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_PhoneNumber" /><EntityPropertyExpression Identifier="Op_MainRecord_Site_DisplayName_enUS_Expr" Binding="Directory_User:MainRecord.Site.DisplayName_enUS" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Site_DisplayName_enUS" /><EntityPropertyExpression Identifier="Op_MainRecord_Site_DisplayName_frFR_Expr" Binding="Directory_User:MainRecord.Site.DisplayName_frFR" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Site_DisplayName_frFR" /><EntityPropertyExpression Identifier="Op_MainRecord_Site_Expr" Binding="Directory_User:MainRecord.Site.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Site" /><EntityPropertyExpression Identifier="Op_MainRecord_Subsidiary_Expr" Binding="Directory_User:MainRecord.Subsidiary.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Subsidiary" /><EntityPropertyExpression Identifier="Op_MainRecord_Suspended_Expr" Binding="Directory_User:MainRecord.Suspended" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Suspended" /><EntityPropertyExpression Identifier="Op_MainRecord_Title_DisplayName_enUS_Expr" Binding="Directory_User:MainRecord.Title.DisplayName_enUS" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Title_DisplayName_enUS" /><EntityPropertyExpression Identifier="Op_MainRecord_Title_DisplayName_frFR_Expr" Binding="Directory_User:MainRecord.Title.DisplayName_frFR" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Title_DisplayName_frFR" /><EntityPropertyExpression Identifier="Op_MainRecord_Title_Expr" Binding="Directory_User:MainRecord.Title.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_Title" /><EntityPropertyExpression Identifier="Op_MainRecord_UserType_Category_Id_Expr" Binding="Directory_User:MainRecord.UserType.Category.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_UserType_Category_Id" /><EntityPropertyExpression Identifier="Op_MainRecord_UserType_Expr" Binding="Directory_User:MainRecord.UserType.Id" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_UserType" /><EntityPropertyExpression Identifier="Op_MainRecord_VIP_Expr" Binding="Directory_User:MainRecord.VIP" EntityType="Directory_User" Priority="99" Property="Op_MainRecord_VIP" /><DisplayEntityType Identifier="Directory_Organization" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Departments" PluralDisplayName_L2="D�partements">  <Property Identifier="Op_Directory_Users" IsHidden="true" /></DisplayEntityType><DisplayEntityType Identifier="Directory_Site" AutocompleteBinding="Directory_Site:DisplayName" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Sites" PluralDisplayName_L2="Sites">  <Property Identifier="Op_Directory_Users" IsHidden="true" /></DisplayEntityType><DisplayEntityType Identifier="Directory_Subsidiary" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Subsidiaries" PluralDisplayName_L2="Filiales">  <Property Identifier="Op_Directory_Users" IsHidden="true" /></DisplayEntityType><DisplayEntityType Identifier="Directory_Title" AutocompleteBinding="Directory_Title:Identifier" Color="#95c18b" IconCode="Suitcase" MinSearchLength="5" PluralDisplayName_L1="Titles" PluralDisplayName_L2="Fonctions">  <Property Identifier="Op_Directory_Users" IsHidden="true" /></DisplayEntityType><DisplayEntityType Identifier="Directory_User" Color="#79C3D2" D0IsActive="true" D1IsActive="true" D2IsActive="true" D3IsActive="true" D4IsActive="true" D5IsActive="true" D6IsActive="true" D7IsActive="true" IconCode="People" PluralDisplayName_L1="Users" PluralDisplayName_L2="Collaborateurs" Priority="0">  <Property Identifier="Op_MainRecord_FirstName" IsHidden="true" />  <Property Identifier="Op_MainRecord_LastName" IsHidden="true" />  <Property Identifier="Op_MainRecord_MobileNumber" IsHidden="true" />  <Property Identifier="Op_MainRecord_Organization" IsHidden="true" />  <Property Identifier="Op_MainRecord_Organization_DisplayName" IsHidden="true" />  <Property Identifier="Op_MainRecord_Organization_DisplayName_enUS" IsHidden="true" />  <Property Identifier="Op_MainRecord_Organization_DisplayName_frFR" IsHidden="true" />  <Property Identifier="Op_MainRecord_PhoneNumber" IsHidden="true" />  <Property Identifier="Op_MainRecord_Site" IsHidden="true" />  <Property Identifier="Op_MainRecord_Site_DisplayName" IsHidden="true" />  <Property Identifier="Op_MainRecord_Site_DisplayName_enUS" IsHidden="true" />  <Property Identifier="Op_MainRecord_Site_DisplayName_frFR" IsHidden="true" />  <Property Identifier="Op_MainRecord_Subsidiary" IsHidden="true" />  <Property Identifier="Op_MainRecord_Suspended" IsHidden="true" />  <Property Identifier="Op_MainRecord_Title" IsHidden="true" />  <Property Identifier="Op_MainRecord_Title_DisplayName" IsHidden="true" />  <Property Identifier="Op_MainRecord_Title_DisplayName_enUS" IsHidden="true" />  <Property Identifier="Op_MainRecord_Title_DisplayName_frFR" IsHidden="true" />  <Property Identifier="Op_MainRecord_UserType" IsHidden="true" />  <Property Identifier="Op_MainRecord_UserType_Category_Id" IsHidden="true" />  <Property Identifier="Op_MainRecord_VIP" IsHidden="true" /></DisplayEntityType><DisplayEntityType Identifier="Directory_UserType" Color="#95c18b" PluralDisplayName_L1="User Types" PluralDisplayName_L2="Types de collaborateurs">  <Property Identifier="Op_Directory_Users" IsHidden="true" /></DisplayEntityType><Indicator Binding="MainRecord.Suspended" ComparisonOperator="Equal" EntityType="Directory_User" Order="3" />

```

# queries

- #### [TargetResourceReport](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates a ReportQuery with default Query taking all the properties of the entity.- ####
  [UniverseDataModel](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates, within a universe, entity instances and association instances based on a predefined
  template.

# TargetResourceReport

Creates a ReportQuery with default Query taking all the properties of the entity.

The entity must have a displayTable to be able to use this scaffolding.

## Examples

```

  <TargetResourceReport EntityType="LDAP_Entry"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<ReportQuery Identifier="Resources_LDAP_Entry" DisplayName_L1="Resource List - LDAP - Entry" Query="join ResourceAssignedResourceTypes art join art.Role rt join art.Owner o select LDAP_Entry:dn,LDAP_Entry:rdn,LDAP_Entry:displayName,LDAP_Entry:objectClass, o.InternalDisplayName, rt.DisplayName, art.WorkflowState, art.ProvisioningState, art.StartDate, art.EndDate, art.IsDenied" ReturnedEntityType="LDAP_Entry" />

```

# UniverseDataModel

This scaffolding creates, within a universe, entity instances and association instances based on a
predefined template.

The entity instances generated by the scaffolding will have:

- as a display name, the display name of the corresponding navigation property, for example
  `Main Record`;
- as an identifier, the identifier of the corresponding navigation which is made of
  `<EntityType_Id>_<Property_Id>`, for example `Directory_User_MainRecord`.

## Properties

| Property            | Details                                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EntityType required | **Type** String **Description** Identifier of the entity type that we want to represent in the universe (as an entity instance) with all its navigations. |
| Universe required   | **Type** String **Description** Identifier of the universe in which the instances to be generated are going to exist.                                     |

## Child Elements

- [ExcludedProperty](#excludedproperty) (optional) to ignore a given property of the specified
  entity type.
- [RootInstance](#rootinstance) (optional) to rename the core entity instance that is to be
  generated, and to avoid data duplication when using several scaffoldings in one universe.
- [SourceEntityType](#sourceentitytype) (optional) Define the source EntityType
- [UniverseTemplate](#universetemplate) (optional) to use a template different from the default one.

### ExcludedProperty

| Property          | Details                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Property required | **Type** String **Description** Property of the specified entity type that is to be ignored for the generation of entity instances and association instances. |

A scaffolding does not use filters, but a part of the entity model can be excluded with the
`ExcludedProperty` argument.

The following example generates a universe `U8_Users` based on the entity type `Directory_User`,
like our U1 but without the `Guests` property:

```

<Universe Identifier="U8_Users" DisplayName_L1="U8 - Users" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U8_Users" EntityType="Directory_User" >
    <ExcludedProperty Property="Guests"/>
</UniverseDataModel>

```

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (ExcludedProperty)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_excluded.webp)

### RootInstance

| Property          | Details                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Instance required | **Type** String **Description** Identifier of the entity instance generated based on the EntityType property of the universe scaffolding. If not specified, the identifier of the entity instance is the identifier of the entity type. |

The following example generates a universe `U2_UserRecords` based on the entity type
`Directory_UserRecord`, naming the entity instance `REC`:

```

<Universe Identifier="U2_UserRecords" DisplayName_L1="U2 - User Records" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U2_UserRecords" EntityType="Directory_UserRecord" >
    <RootInstance Instance="REC" />
</UniverseDataModel>

```

![Universe (RootInstance)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_rootinstance.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (RootInstance)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_rootinstance.webp)

#### RootInstance for several scaffoldings together

A universe can be made of several scaffoldings which need to be grouped together a specific way. One
universe made of two scaffoldings will generate the two entity instances corresponding to the two
specified entity types, with the entity and association instances corresponding to their navigation
properties. To avoid data duplication in the universe model, we use `RootInstance` to rename one of
the entity instances and follow the existing naming rule explained in the introduction.

**The following example** generates a universe `U3_UserRecords` based on the entity types
`Directory_User` and `Directory_UserRecord` (without `RootInstance`):

```

<Universe Identifier="U3_UserRecords" DisplayName_L1="U3 - User Records" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U3_UserRecords" EntityType="Directory_User" /><UniverseDataModel Universe="U3_UserRecords" EntityType="Directory_UserRecord" />

```

![Universe Schema (Several Scaffoldings with Data Duplication)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_severalduplicationschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Several Scaffoldings with Data Duplication)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_severalduplication.webp)

We see that `Directory_User_Records` and `Directory_UserRecords` represent the same entity
instances.

**The following example** generates a better version of the universe `U3_UserRecords` based on the
entity types `Directory_User` and `Directory_UserRecord`, renaming `Directory_UserRecord` as
`Directory_User_Records` to follow the naming rule, thus building the universe model with
`Directory_User` as the core entity instance:

```

<Universe Identifier="U3_UserRecords" DisplayName_L1="U3 - User Records" ColumnNamesMode="Identifier" /><UniverseDataModel Universe="U3_UserRecords" EntityType="Directory_User" /><UniverseDataModel Universe="U3_UserRecords" EntityType="Directory_UserRecord" >
    <RootInstance Instance="Directory_User_Records" />
</UniverseDataModel>

```

![Universe (Several Scaffoldings without Data Duplication)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_severalnoduplicationschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Several Scaffoldings without Data Duplication)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_severalnoduplication.webp)

Thus we removed the duplicated data, and we understand easily the navigations of the model.

### SourceEntityType

| Property            | Details                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Identifier optional | **Type** String **Description** The identifier's SourceEntityType |

### UniverseTemplate

| Property          | Details                                                        |
| ----------------- | -------------------------------------------------------------- |
| Template required | **Type** String **Description** Represents the argument value. |

#### Default Template

When no template is specified, the scaffolding generates:

- an entity instance based on a given entity type;
- an association instance and an entity instance for each navigation property of the entity type.

**The following example** generates a universe `U1_Users` based on the entity type `Directory_User`:

```

<Universe Identifier="U1_Users" DisplayName_L1="U1 - Users" ColumnNamesMode="Identifier" />
<UniverseDataModel Universe="U1_Users" EntityType="Directory_User" />

```

It generates:

```

<Universe Identifier="U1_Users" DisplayName_L1="U1 - Users" ColumnNamesMode="Identifier" >

  One entity instance for the entity type Directory_User:
  <EntityInstance Identifier="Directory_User" DisplayName_L1="User" EntityType="Directory_User" />

  One association instance and one entity instance per navigation property:
  <AssociationInstance Association="Directory_User_MainCountry" Instance1="Directory_User" Instance2="Directory_User_MainCountry" Direction="From1To2" />  <EntityInstance Identifier="Directory_User_MainCountry" DisplayName_L1="Main Country" EntityType="Directory_Country" />  ...

</Universe>

```

![Universe (No Template)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_notemplateschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (No Template)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_notemplate.webp)

We see here identifiers instead of display names due to `ColumnNamesMode` set to identifiers.

#### OwnedResourceTypes

The following example generates a universe `U4_User` based on the entity type `Directory_User` and
the resources assigned to users:

```

<Universe Identifier="U4_User" DisplayName_L1="U4 - User" ColumnNamesMode="Identifier"/><UniverseDataModel Universe="U4_User" EntityType="Directory_User">
    <UniverseTemplate Template="OwnedResourceTypes"/>
</UniverseDataModel>

```

It generates:

```

<Universe Identifier="U4_User" DisplayName_L1="U4 - User" ColumnNamesMode="Identifier">

  One entity instance for the entity type Directory_User.
  <EntityInstance Identifier="Directory_User" DisplayName_L1="User" EntityType="Directory_User" />

  Association instances and entity instances about the AD_Entry_NominativeUser resource type:

  <EntityInstance Identifier="Directory_User_OwnedAssignedResourceTypes_AD_Entry_NominativeUser" DisplayName_L1="Assigned AD User (nominative)" EntityType="AssignedResourceType" FilterProperty="RoleId" FilterResourceType="AD_Entry_NominativeUser" />  <EntityInstance Identifier="Directory_User_OwnedAssignedResourceTypes_AD_Entry_NominativeUser_Resource" DisplayName_L1="AD User (nominative)" EntityType="AD_Entry" />  <AssociationInstance Association="AssignedResourceType.Resource" Direction="From1To2" Instance1="Directory_User_OwnedAssignedResourceTypes_AD_Entry_NominativeUser" Instance2="Directory_User_OwnedAssignedResourceTypes_AD_Entry_NominativeUser_Resource" />  <AssociationInstance Association="AssignedResourceType.Owner" Direction="From2To1" Instance1="Directory_User_OwnedAssignedResourceTypes_AD_Entry_NominativeUser" Instance2="Directory_User" />

  Same for all resource types.
  ...

</Universe>

```

![Universe (Template Schema: Owned Resource Types)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedresourcetypesschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Template: Owned Resource Types)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedresourcetypes.webp)

#### ResourceResourceTypes

The following example generates a universe `U5_AD` based on the entity type `AD_Entry` and the
owners of AD resources:

```

<Universe Identifier="U5_AD" DisplayName_L1="U5 AD" ColumnNamesMode="Identifier"/><UniverseDataModel Universe="U5_AD" EntityType="AD_Entry">
    <UniverseTemplate Template="ResourceResourceTypes"/>
</UniverseDataModel>

```

The configuration generated by this snippet is similar to the one for `OwnedResourceTypes`.

![Universe (Template Schema: Resource Resource Types)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_resourceresourcetypesschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Template: Resource Resource Types)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_resourceresourcetypes.webp)

#### OwnedSingleRoles

The following example generates a universe `U6_User` based on the entity type `Directory_User` and
the single roles assigned to users:

```

<Universe Identifier="U6_User" DisplayName_L1="U6 - User" ColumnNamesMode="Identifier"/><UniverseDataModel Universe="U6_User" EntityType="Directory_User">
    <UniverseTemplate Template="OwnedSingleRoles"/>
</UniverseDataModel>

```

It generates:

```

<Universe Identifier="U6_User" DisplayName_L1="U6 - User" ColumnNamesMode="Identifier">

  One entity instance for the entity type Directory_User.
  <EntityInstance Identifier="Directory_User" DisplayName_L1="User" EntityType="Directory_User" />

  One entity instance containing data about role assignments, and one association instance linking it to Directory_User:
  <EntityInstance Identifier="Directory_User_OwnedAssignedSingleRoles" DisplayName_L1="Assigned Composite Roles" EntityType="AssignedSingleRole" />  <AssociationInstance Association="AssignedSingleRole.Owner" Direction="From1To2" Instance1="Directory_User" Instance2="Directory_User_OwnedAssignedSingleRoles" />

  One entity instance containing the single roles, and one association instance linking it to the role assignment data:
  <EntityInstance Identifier="Directory_User_OwnedAssignedSingleRoles_Role" DisplayName_L1="Composite Role" EntityType="SingleRole" />  <AssociationInstance Association="AssignedSingleRole.Role" Direction="From1To2" Instance1="Directory_User_OwnedAssignedSingleRoles" Instance2="Directory_User_OwnedAssignedSingleRoles_Role" /></Universe>

```

![Universe (Template Schema: Owned Single Roles)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedsinglerolesschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Template: Owned Single Roles)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedsingleroles.webp)

#### OwnedCompositeRoles

The following example generates a universe `U7_User` based on the entity type `Directory_User` and
the composite roles assigned to users:

```

<Universe Identifier="U7_User" DisplayName_L1="U7 - User" ColumnNamesMode="Identifier"/><UniverseDataModel Universe="U7_User" EntityType="Directory_User">
    <UniverseTemplate Template="OwnedCompositeRoles"/>
</UniverseDataModel>

```

The configuration generated by this snippet is similar to the one for `OwnedSingleRoles`.

![Universe (Template Schema: Owned Composite Roles)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedcompositerolesschema.webp)

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Template: Owned Composite Roles)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_ownedcompositeroles.webp)

## Mixed Example

Scaffoldings can be adjusted with
[universe configuration](/docs/identitymanager/6.1/configuration-reference/xml-configuration/business-intelligence-config.md).

The following example generates a universe `U9_AccessControl` aiming to create reports displaying
users and their profiles. In our situation, profiles are assigned to AD accounts based on a given
context. This is why we base our universe on the entity types `AD_Entry`, `AssignedProfile` and
`ProfileContext`. Plus, there are 10 dimensions in contexts, but only dimensions 0 and 1 are used,
so we exclude the others. We exclude also resource types and single roles that are of no use for us
here.

```

<Universe Identifier="U9_AccessControl" DisplayName_L1="U9_AccessControl" ColumnNamesMode="Identifier">    <EntityInstance EntityType="AD_Entry" Identifier="AssignedProfile_User"/></Universe><UniverseDataModel Universe="U9_AccessControl" EntityType="AssignedProfile"/><UniverseDataModel Universe="U9_AccessControl" EntityType="ProfileContext">    <RootInstance Instance="AssignedProfile_Context"/>    <ExcludedProperty Property="AssignedProfiles"/>    <ExcludedProperty Property="Category"/>    <ExcludedProperty Property="CompositeRole"/>    <ExcludedProperty Property="Dimension2"/>    <ExcludedProperty Property="Dimension3"/>    <ExcludedProperty Property="Dimension4"/>    <ExcludedProperty Property="Dimension5"/>    <ExcludedProperty Property="Dimension6"/>    <ExcludedProperty Property="Dimension7"/>    <ExcludedProperty Property="Dimension8"/>    <ExcludedProperty Property="Dimension9"/>    <ExcludedProperty Property="Dimension10"/>    <ExcludedProperty Property="ResourceType"/>    <ExcludedProperty Property="SingleRole"/></UniverseDataModel>

```

When
[getting Usercube data in Power BI](/docs/identitymanager/6.1/governance/reporting/index.md),
we see the following:

![Universe (Mixed Example)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/queries/universedatamodel/universe_mixedexample.webp)

# ConnectorsAccessControlRules

Gives the permissions to manage the connector pages.

Generates the permissions to access the connectors pages, the policies page, the access roles page,
the access rules page and the job execution page.

Gives access to shortcuts on the dashboard to access these pages.

![Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

The scaffolding generates the following scaffoldings:

- [ConnectorResourceTypeAccessControl](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md):
  Gives the rights to create and update resource types, generate provisioning orders and fulfill
  from the connector screen.
- [JobViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
- [ResourceTypeMappingControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generate rights to launch agent fulfillment.
- [RoleAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the configuration pages and create, update, delete the
  elements of the role model.
- [RunJobRepairAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or
  a synchronization for a given profile.
- [TaskAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates all rights to have the access to job administration page.

## Examples

```

  <ConnectorsAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="ConnectorConnection_Administrator_ActivityTemplateTransition" DisplayName_L1="Administrator - Connection Configuration - ActivityTemplateTransition" DisplayName_L2="Administrator - Configuration d'une connexion - ActivityTemplateTransition" EntityType="ActivityTemplateTransition" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_Connection" DisplayName_L1="Administrator - Connection Configuration - Connection" DisplayName_L2="Administrator - Configuration d'une connexion - Connection" EntityType="Connection" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_ConnectionPackage" DisplayName_L1="Administrator - Connection Configuration - ConnectionPackage" DisplayName_L2="Administrator - Configuration d'une connexion - ConnectionPackage" EntityType="ConnectionPackage" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_Connector" DisplayName_L1="Administrator - Connection Configuration - Connector" DisplayName_L2="Administrator - Configuration d'une connexion - Connector" EntityType="Connector" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_EntityAssociation" DisplayName_L1="Administrator - Connection Configuration - EntityAssociation" DisplayName_L2="Administrator - Configuration d'une connexion - EntityAssociation" EntityType="EntityAssociation" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_EntityProperty" DisplayName_L1="Administrator - Connection Configuration - EntityProperty" DisplayName_L2="Administrator - Configuration d'une connexion - EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorConnection_Administrator_Workflow" DisplayName_L1="Administrator - Connection Configuration - Workflow" DisplayName_L2="Administrator - Configuration d'une connexion - Workflow" EntityType="Workflow" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connection/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connection/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorDashboard_Administrator_Agent" DisplayName_L1="Administrator - Connector Dashboard - Agent" DisplayName_L2="Administrator - Dashboard d'un connecteur - Agent" EntityType="Agent" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connector/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorDashboard_Administrator_Job" DisplayName_L1="Administrator - Connector Dashboard - Job" DisplayName_L2="Administrator - Dashboard d'un connecteur - Job" EntityType="Job" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" /></AccessControlRule><AccessControlRule Identifier="ConnectorDashboard_Administrator_ResourceType" DisplayName_L1="Administrator - Connector Dashboard - ResourceType" DisplayName_L2="Administrator - Dashboard d'un connecteur - ResourceType" EntityType="ResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_ConnectionColumn" DisplayName_L1="Administrator - Entity Type Configuration - ConnectionColumn" DisplayName_L2="Administrator - Configuration d'un type d'entit� - ConnectionColumn" EntityType="ConnectionColumn" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_ConnectionTable" DisplayName_L1="Administrator - Entity Type Configuration - ConnectionTable" DisplayName_L2="Administrator - Configuration d'un type d'entit� - ConnectionTable" EntityType="ConnectionTable" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_Connector" DisplayName_L1="Administrator - Entity Type Configuration - Connector" DisplayName_L2="Administrator - Configuration d'un type d'entit� - Connector" EntityType="Connector" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_DisplayEntityProperty" DisplayName_L1="Administrator - Entity Type Configuration - DisplayEntityProperty" DisplayName_L2="Administrator - Configuration d'un type d'entit� - DisplayEntityProperty" EntityType="DisplayEntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_DisplayEntityType" DisplayName_L1="Administrator - Entity Type Configuration - DisplayEntityType" DisplayName_L2="Administrator - Configuration d'un type d'entit� - DisplayEntityType" EntityType="DisplayEntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityAssociation" DisplayName_L1="Administrator - Entity Type Configuration - EntityAssociation" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityAssociation" EntityType="EntityAssociation" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityAssociationMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityAssociationMapping" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityAssociationMapping" EntityType="EntityAssociationMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityProperty" DisplayName_L1="Administrator - Entity Type Configuration - EntityProperty" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityProperty" EntityType="EntityProperty" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityPropertyMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityPropertyMapping" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityPropertyMapping" EntityType="EntityPropertyMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityType" DisplayName_L1="Administrator - Entity Type Configuration - EntityType" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityType" EntityType="EntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorEntityType_Administrator_EntityTypeMapping" DisplayName_L1="Administrator - Entity Type Configuration - EntityTypeMapping" DisplayName_L2="Administrator - Configuration d'un type d'entit� - EntityTypeMapping" EntityType="EntityTypeMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Create" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Delete" />  <Entry CanExecute="true" Permission="/Connectors/EntityTypeMapping/Update" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Create" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Delete" />  <Entry CanExecute="true" Permission="/Metadata/EntityType/Update" /></AccessControlRule><AccessControlRule Identifier="ConnectorsList_Administrator_Connector" DisplayName_L1="Administrator - Connector List - Connector" DisplayName_L2="Administrator - Liste des connecteurs - Connector" EntityType="Connector" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/Connector/Create" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Delete" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Query" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Reload" />  <Entry CanExecute="true" Permission="/Connectors/Connector/Update" /></AccessControlRule><JobViewAccessControlRules Id="6" Profile="Administrator" /><RunJobRepairAdministrationAccessControlRules Id="12" Profile="Administrator" />

```

# CreateAdministratorProfile

This scaffolding creates the administrator profile with a predefined set of rights.

To create the rights for this profile, a scaffolding list is launched inside the creation of the
administrator profile.

The scaffolding generates the following scaffoldings:

- [AccessReviewAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to administrate campaign creation.
- [AssignProfileAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Gives to a given profile the rights to create, update, delete and query any assigned profile.
- [BasketRulesControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to execute the different requests to display the information in the
  rights basket.
- [ConnectorResourceTypeAccessControl](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md):
  Gives the rights to create and update resource types, generate provisioning orders and fulfill
  from the connector screen.
- [ConnectorsAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Gives the permissions to manage the connector pages.
- [CreateConnectorsJobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Creates all jobs by connector to launched task in the connector page.
- [CreateResourceIncrementalAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the access control rule which gives to a profile the permission to query the resources
  modified incrementally
- [JobExecutionAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Assigns a set of rights to a given profile to execute any job, and view all job instances, task
  instances and logs.
- [ManageAccounts](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
- [ManageSettingAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the access control rule which gives to a profile the permission to query, create, update
  and delete settings from the UM_Settings table.
- [MonitoringAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/monitoring-config.md):
  Generates the access control rule which gives to a profile the permission to query the monitoring
  screen.
- [PerformManualProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.
- [ProfileAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Gives to a given profile the rights to create, update and delete profiles.
- [ProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.
- [ReconciliateResourcesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the resource reconciliation pages for a given entity type and
  profile.
- [ReconciliateRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the role reconciliation pages for a given entity type and
  profile.
- [RedundantAssignmentAccessControlRule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the **Redundant Assignment** page, to analyze and remove
  redundant assignments.
- [ReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the report view.
- [ResourceApiAdministration](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to create/update/delete/query resources from a given entity type, for a
  given profile.
- [ResourcePickerControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates the reading right of the resource picker.
- [ResourceTypeMappingControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generate rights to launch agent fulfillment.
- [ReviewProvisioningAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.
- [ReviewRolesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the role review pages for a given entity type and profile.
- [RisksAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
- [RoleAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the configuration pages and create, update, delete the
  elements of the role model.
- [RoleNamingAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to configure and launch the automatic creation of roles and rules based
  on naming conventions.
- [SettingsAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md):
  Generates the permissions to configure the Workforce Core Solution module and connector settings.
- [SimulationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to configure and launch simulations.
- [SynchronizationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates rights to launch synchronization task.
- [TaskAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates all rights to have the access to job administration page.
- [UniverseAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates an access control rule which gives a profile the permission to access the query page and
  run queries.
- [ViewHistoryResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates an access control rule giving to the specified profile the permission to browse the
  resources history of the specified entity type.
- [WorkflowConfigurationControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
- [WorkflowFulfillmentControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the execution rights to launch Fulfillment workflow for a given profile.
- [WorkflowOverviewControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
  Generates the permissions to access the workflow supervision page.

## Examples

```

    <CreateAdministratorProfile EntityType="Directory_Guest">        <DisplayNameProfile Identifier="en-EN" Value="Administrator" />        <DisplayNameProfile Identifier="fr-FR" Value="Administrateur" />    </CreateAdministratorProfile>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Child Elements

- [DisplayNameProfile](#displaynameprofile) (optional) defines a display name for the administrator
  profile for a given language.

### DisplayNameProfile

| Property             | Details                                                                              |
| -------------------- | ------------------------------------------------------------------------------------ |
| DisplayName required | **Type** String **Description** Display name of the profile in the related language. |
| Identifier required  | **Type** String **Description** Code of the language for the display name.           |

## Generated XML

Our example generates the following configuration:

```

<Profile Identifier="Administrator" DisplayName_L1="Administrator" DisplayName_L2="Administrateur" /><AccessReviewAdministrationAccessControlRules Id="46" Profile="Administrator" /><AssignProfileAccessControlRules Id="47" Profile="Administrator" /><BasketRulesControlRules Id="48" Profile="Administrator" /><ConnectorResourceTypeAccessControl Id="5" Profile="Administrator" /><ConnectorsAccessControlRules Id="49" Profile="Administrator" /><CreateResourceIncrementalAccessControlRules Id="51" Profile="Administrator" /><JobExecutionAccessControlRules Id="212" Profile="Administrator" /><MonitoringAdministrationAccessControlRules Id="215" Profile="Administrator" /><PerformManualProvisioningAccessControlRules Id="216" EntityType="Directory_Guest" Profile="Administrator" /><ProfileAdministrationAccessControlRules Id="218" Profile="Administrator" /><ProvisioningAccessControlRules Id="219" Profile="Administrator" /><ReconciliateResourcesAccessControlRules Id="220" EntityType="Directory_Guest" Profile="Administrator" /><ReconciliateRolesAccessControlRules Id="222" EntityType="Directory_Guest" Profile="Administrator" /><ReportAccessControlRules Id="224" Profile="Administrator" /><ResourceApiAdministration Id="225" EntityType="Directory_Guest" Profile="Administrator" /><ResourcePickerControlRules Id="227" Profile="Administrator" /><ResourceTypeMappingControlRules Id="228" Profile="Administrator" /><ReviewProvisioningAccessControlRules Id="229" EntityType="Directory_Guest" Profile="Administrator" /><ReviewRolesAccessControlRules Id="231" EntityType="Directory_Guest" Profile="Administrator" /><RisksAdministrationAccessControlRules Id="233" Profile="Administrator" /><RoleAdministrationAccessControlRules Id="8" Profile="Administrator" /><RoleNamingAccessControlRules Id="234" Profile="Administrator" /><SimulationAccessControlRules Id="235" Profile="Administrator" /><SynchronizationAccessControlRules Id="236" Profile="Administrator" /><TaskAdministrationAccessControlRules Id="14" Profile="Administrator" /><ViewHistoryResourceTemplate Id="314" EntityType="Directory_Guest" Profile="Administrator" /><WorkflowAspect Id="316" Profile="Administrator" /><WorkflowConfigurationControlRules Id="317" Profile="Administrator" /><WorkflowFulfillmentControlRules Id="335" Profile="Administrator" /><WorkflowOverviewControlRules Id="336" EntityType="Directory_Guest" Profile="Administrator" />

```

# CreateUpdateDeleteTemplate

Creates the three types of workflow for the given entity as well as the execution rights for the
given profile.

The scaffolding generates the following scaffoldings:

- [CreateUpdateDeleteAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
  Generates execution rights for the create, update, delete workflows.
- [CreateUpdateDeleteMenus](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
  Creates creation, update and delete menus for an entity.
- [CreateUpdateDeleteWorkflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
- [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a display table for the given entity.
- [EntityTypeSearchBar](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates the search bar for the entity without criteria.
- [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.
- [WorkflowEntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
  Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```

  <CreateUpdateDeleteTemplate EntityType="Directory_UserType" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<CreateUpdateDeleteAccessControlRules Id="49" EntityType="Directory_UserType" Profile="Administrator" /><CreateUpdateDeleteMenus Id="76" EntityType="Directory_UserType" /><CreateUpdateDeleteWorkflows Id="90" EntityType="Directory_UserType" /><EntityTypeDisplayName Id="108" EntityType="Directory_UserType" /><EntityTypeDisplayTable Id="126" EntityType="Directory_UserType" /><EntityTypeSearchBar Id="140" EntityType="Directory_UserType" /><ViewAccessControlRules Id="15" EntityType="Directory_UserType" Profile="Administrator" /><WorkflowEntityType Id="210" EntityType="Directory_UserType" />

```

# EntityReportDefault

Creates all configuration items to add a ReportQuery for an EntityType and profile.

The scaffolding generates the following scaffoldings:

- [ReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to access the report view.
- [TargetResourceReport](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a ReportQuery with default Query taking all the properties of the entity.
- [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to apply a report for a profile on a given entity.
- [TargetResourceReportMenus](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates the Item menu for the entity's report so that it is displayed in the report view.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

# Templates

- #### [ConnectorsAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Gives the permissions to manage the connector pages.- ####
  [CreateAdministratorProfile](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the profile administrator and all default access control rules.- ####
  [CreateUpdateDeleteTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the three types of workflow for the given entity as well as the execution rights for the
  given profile.- ####
  [EntityReportDefault](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates all configuration items to add a ReportQuery for an EntityType and profile.- ####
  [JobExecutionAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Assigns a set of rights to a given profile to execute any job, and view all job instances, task
  instances and logs.- ####
  [JobViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.- ####
  [SimulationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the permissions to configure and launch simulations.- ####
  [UpdateResourcesTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
- #### [ViewSourceResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the display table, fills in the internal display name of the entity, and gives the
  rights to see the permissions and sources of the entity for a given profile.- ####
  [ViewTargetResourceTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the entity view (designElement = resourceTable), the report and the rights for a given
  profile.- ####
  [ViewTemplate](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the view for the given entity as well as the rights for the given profile.- ####
  [ViewTemplateAdaptable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Implements a default display name for the resources of a given entity type, displays the
  resources in an adaptable table, and give the permissions to view the resources.

# JobExecutionAccessControlRules

This scaffolding assigns a set of rights to a given profile to execute any job, and view all job
instances, task instances and logs.

The scaffolding generates the following scaffoldings:

- [JobViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
- [RunJobAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the permissions to launch jobs from UI for a given profile.
- [RunJobNotificationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates access control to send notification when job finish with an error state.
- [RunJobRepairAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or
  a synchronization for a given profile.
- [RunJobRepairNotificationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates access control to send notification when a relaunch job finish with an error state.

## Examples

The following example assigns to the `Administrator` profile the rights to execute all jobs and view
job instances, task instances and logs:

```

<JobExecutionAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<JobViewAccessControlRules Id="6" Profile="Administrator" /><RunJobAdministrationAccessControlRules Id="10" Profile="Administrator" /><RunJobNotificationAccessControlRules Id="11" Profile="Administrator" /><RunJobRepairAdministrationAccessControlRules Id="12" Profile="Administrator" /><RunJobRepairNotificationAccessControlRules Id="13" Profile="Administrator" />

```

# JobViewAccessControlRules

Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs. This
Scaffolding performs a set of scaffolding rights for Jobs and Tasks.

The scaffolding generates the following scaffoldings:

- [GetJobLogAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the permissions to read task and job instances logs in UI for a given profile.
- [JobAdministrationAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Scaffolding to access the job administration page.
- [PendingAssignedResourceTypesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the access control rules which give to a profile the permissions to call the API Pending
  AssignedResourceTypes.
- [ResourceChangesViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md):
  Generates the access control rules which gives to a profile the permissions to call the API
  ResourceChange, ResourceFileChange and ResourceLinkChange.

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Job_JobViews_Job" DisplayName_L1="Administrator - Management for Job" DisplayName_L2="Administrator - Gestion des Job" EntityType="Job" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_JobInstance" DisplayName_L1="Administrator - Management for JobInstance" DisplayName_L2="Administrator - Gestion des JobInstance" EntityType="JobInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Query" />  <Entry CanExecute="true" Permission="/Jobs/JobInstance/Update" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_Task" DisplayName_L1="Administrator - Management for Task" DisplayName_L2="Administrator - Gestion des Task" EntityType="Task" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/Job/Query" />  <Entry CanExecute="true" Permission="/Jobs/Task/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskEntityType" DisplayName_L1="Administrator - Management for TaskEntityType" DisplayName_L2="Administrator - Gestion des TaskEntityType" EntityType="TaskEntityType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskEntityType/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskInstance" DisplayName_L1="Administrator - Management for TaskInstance" DisplayName_L2="Administrator - Gestion des TaskInstance" EntityType="TaskInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_Job_JobViews_TaskResourceType" DisplayName_L1="Administrator - Management for TaskResourceType" DisplayName_L2="Administrator - Gestion des TaskResourceType" EntityType="TaskResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Jobs/TaskResourceType/Query" /></AccessControlRule><GetJobLogAdministrationAccessControlRules Id="1" Profile="Administrator" /><JobAdministrationAccessControlRules Id="2" Profile="Administrator" /><PendingAssignedResourceTypesAccessControlRules Id="3" Profile="Administrator" /><ResourceChangesViewAccessControlRules Id="4" Profile="Administrator" />

```

# SimulationAccessControlRules

This scaffolding generates the rights to configure and launch simulations.

It also gives access to a shortcut on the dashboard allowing to enter the simulation screen. Through
this screen, simulations can be launched and results can be visualized.

The scaffolding generates the following scaffoldings:

- [PolicySimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
- [RoleAndSimulationControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):

## Examples

```

  <SimulationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<PolicySimulationControlRules Id="7" Profile="Administrator" /><RoleAndSimulationControlRules Id="9" Profile="Administrator" />

```

# UpdateResourcesTemplate

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a display table for the given entity.
- [UpdateResourcesAccessControlRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
- [UpdateResourcesMenus](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
- [UpdateResourcesWorkflows](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
- [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.
- [WorkflowEntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md):
  Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```

  <UpdateResourcesTemplate EntityType="HR_Person" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="301" EntityType="HR_Person" /><EntityTypeDisplayTable Id="325" EntityType="HR_Person" /><UpdateResourcesAccessControlRules Id="390" EntityType="HR_Person" Profile="Administrator" /><UpdateResourcesMenus Id="391" EntityType="HR_Person" /><UpdateResourcesWorkflows Id="392" EntityType="HR_Person" /><ViewAccessControlRules Id="398" EntityType="HR_Person" Profile="Administrator" /><WorkflowEntityType Id="421" EntityType="HR_Person" />

```

# ViewSourceResourceTemplate

Creates the display table, fills in the internal display name of the entity, and gives the rights to
see the permissions and sources of the entity for a given profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

# ViewTargetResourceTemplate

Creates the entity view (designElement = resourceTable), the report and the rights for a given
profile.

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTargetResourceTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a displaytable for the given entity.
- [TargetResourceReport](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a ReportQuery with default Query taking all the properties of the entity.
- [TargetResourceReportAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to apply a report for a profile on a given entity.
- [TargetResourceReportMenus](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates the Item menu for the entity's report so that it is displayed in the report view.
- [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.

## Examples

```

  <ViewTargetResourceTemplate EntityType="SAB_User Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="303" EntityType="SAB_User" /><EntityTypeDisplayTargetResourceTable Id="345" EntityType="SAB_User" /><TargetResourceReportAccessControlRules Id="369" EntityType="SAB_User" Profile="Administrator" /><TargetResourceReportMenus Id="378" EntityType="SAB_User" /><TargetResourceReport Id="385" EntityType="SAB_User" /><ViewAccessControlRules Id="393" EntityType="SAB_User" Profile="Administrator" />

```

# ViewTemplate

Creates the view for the given entity as well as the rights for the given profile.

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates a display table for the given entity.
- [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.

## Examples

The following example implements a default display name for resources from the
`Directory_PresenceState` entity type, displays the resources in a table, and gives to the
`Administrator` profile the permissions to view the resources.

```

<ViewTemplate EntityType="Directory_UserCategory" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="102" EntityType="Directory_UserCategory" /><EntityTypeDisplayTable Id="120" EntityType="Directory_UserCategory" /><ViewAccessControlRules Id="160" EntityType="Directory_UserCategory" Profile="Administrator" />

```

# ViewTemplateAdaptable

Implements a default display name for the resources of a given entity type, displays the resources
in an adaptable table, and give the permissions to view the resources.

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTableAdaptable](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates an adaptable display table for a given entity type.
- [ViewAccessControlRules](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.

## Examples

The following example implements a default display name for resources from the
`Directory_PresenceState` entity type, displays the resources in an adaptable table, and gives to
the `Administrator` profile the permissions to view the resources.

```

<ViewTemplateAdaptable EntityType="Directory_PresenceState" Profile="Administrator" />

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="101" EntityType="Directory_PresenceState" /><EntityTypeDisplayTableAdaptable Id="502" EntityType="Directory_PresenceState" /><ViewAccessControlRules Id="188" EntityType="Directory_PresenceState" Profile="Administrator" />

```

# BootstrapModule

Generates the default settings required to start using Usercube and the Workforce Core Solution
module.

# Workforce

- #### [BootstrapModule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the default settings required to start using Usercube and the Workforce Core Solution
  module.- ####
  [WorkforceModule](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md)
  Generates the workforce repository based on the data filled in the Workforce Core Solution
  module.

# WorkforceModule

Generates the workforce repository based on the data filled in the Workforce Core Solution module.

## Examples

The following example generates the Workforce module in the application:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkforceModule IsEnabled="true">
    <UniqueIdentifierGeneration Strategy="Random" Min="0" Max="89999" />
    <EmailGeneration Strategy="FirstName.LastName" Domain="acme.com" NameSeparator="." />
    <LoginGeneration Strategy="EmailSubject" />
    <NewExternalWorkflow IsReviewRequired="false" />
    <NewInternalWorkflow IsReviewRequired="true" />
    <ModelUsage Binding="Directory_Office" Count="0" />
    <ModelUsage Binding="Directory_Gender" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:JobTitle" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:OfficeNumber" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:AccessesExpirationDate" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:IsMainPosition" Count="0" />
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ManageAccounts" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReconciliateResources" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReconciliateRoles" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReviewProvisioning" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReviewRoles" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_New/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/User" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/ViewResources" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/Self_ResourcesUpdate/Request" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/Self_ResourcesUpdate/Review" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_ManagePositions/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewExternal/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewInternal/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdateResources/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_ManagePositions/Request" ProfileIdentifier="HR" />
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewInternal/Review" ProfileIdentifier="HR" />
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" ProfileIdentifier="HR"/>
</WorkforceModule>
```

## Properties

| Property                      | Type    | Description                                                                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| IsEnabled default value: true | Boolean | True to enable the Worforce module. If set to false, Usercube deletes all existing items computed by the Workforce Core Solution module. |

## Child Elements

Here is a list of child elements:

- CompositeProfile (optional) – Defines the users profiles
- EmailGeneration (optional) – Defines the email generation policy
- HomonymEntityLinkOptions (optional) – Updates/Modifies the HomonymEntityLink of the
  Directory_UserRecord entity of the workforce configuration
- LoginGeneration (optional) – Defines the login generation policy
- ModelUsage (optional) – Defines the entity types/properties that must be ignored from the model
  and customize the pickers for the kept ones
- NewExternalWorkflow (optional) – Enable/disable the review step for the new external workflow
- NewInternalWorkflow (optional) – Enable/disable the review step for the new internal workflow
- UniqueIdentifierGeneration (optional) – Defines the unique identifier generation policy

### CompositeProfile

| Property                      | Type   | Description                                                |
| ----------------------------- | ------ | ---------------------------------------------------------- |
| AreaOfResponsibility required | String | Represents the argument value.                             |
| ProfileDisplayName required   | String | Generic column used to store information for internal use. |
| ProfileIdentifier required    | String | Generic column used to store information for internal use. |
| TargetProfile required        | String | Generic column used to store information for internal use. |

### EmailGeneration

| Property               | Type   | Description                                                                                                                           |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Strategy required      | String | Represents the argument value.                                                                                                        |
| Domain optional        | String | Generic column used to store information for internal use.                                                                            |
| NameSeparator optional | String | Character used to separate users' names and first names in their generated emails and logins (in the Workforce Core Solution module). |

### HomonymEntityLinkOptions

| Property                                        | Type    | Description                                                                                                                                                                                                 |
| ----------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActivatePhoneticComparison default value: false | Boolean | Adds 3 filters in the HomonymEntityLink comparing the first and last names (current workflow) to the phonetic properties corresponding to the first and last names (existing records).                      |
| DisableBirthNameComparison default value: false | Boolean | Deletes the filter in the HomonymEntityLink comparing the last name (current workflow) with the birth name (existing records).                                                                              |
| DisableInversion default value: false           | Boolean | Deletes the filters in the HomonymEntityLink comparing the first name (current workflow) with the last name (existing records) and the last name (current workflow) with the first name (existing records). |

### LoginGeneration

| Property           | Type   | Description                                                |
| ------------------ | ------ | ---------------------------------------------------------- |
| Strategy required  | String | Represents the argument value.                             |
| MaxLength optional | Int32  | Generic column used to store information for internal use. |
| Prefix optional    | String | Generic column used to store information for internal use. |

### ModelUsage

| Property             | Type   | Description                                                                                                                                               |
| -------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required     | String | Generic column used to store information for internal use.                                                                                                |
| Count optional       | Int32  | Generic column used to store information for internal use.                                                                                                |
| ForcedCount optional | Int32  | Number of entries for a given entity or entity's property in the workforce data model. The `ForcedCount` value overwrites the count computed by Usercube. |

### NewExternalWorkflow

| Property                              | Type    | Description                                                                                               |
| ------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| IsReviewRequired default value: false | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |

### NewInternalWorkflow

| Property                             | Type    | Description                                                                                               |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- |
| IsReviewRequired default value: true | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |

### UniqueIdentifierGeneration

| Property               | Type   | Description                                                                                                                           |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Strategy required      | String | Represents the argument value.                                                                                                        |
| Max optional           | Int32  | Upper limit of the range used for the generation of unique identifiers.                                                               |
| Min optional           | Int32  | Lower limit of the range used for the generation of unique identifiers.                                                               |
| NameSeparator optional | String | Character used to separate users' names and first names in their generated emails and logins (in the Workforce Core Solution module). |
| Prefix optional        | String | Prefix used for the generation of unique identifiers.                                                                                 |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EntityType Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="7" Type="String" />
    <Property Identifier="ISOCode" DisplayName_L1="ISO Code" DisplayName_L2="Code ISO" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Regions" DisplayName_L1="Regions" DisplayName_L2="Régions" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_ExternalCompany" DisplayName_L1="External Company" DisplayName_L2="Société externe">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="5" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Map" DisplayName_L2="Carte" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="6" Type="Int64" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_JobCategory" DisplayName_L1="Business Category" DisplayName_L2="Famille de métier">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Titles" DisplayName_L1="Titles" DisplayName_L2="Fonctions" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_Organization" DisplayName_L1="Department" DisplayName_L2="Département">
    <Property Identifier="Assistant" DisplayName_L1="Assistant" DisplayName_L2="Assistant" TargetColumnIndex="130" Type="ForeignKey" />
    <Property Identifier="Children" DisplayName_L1="Nested Departments" DisplayName_L2="Sous départments" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" DisplayName_L2="Chemin" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Manager" DisplayName_L1="Manager" DisplayName_L2="Responsable" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="Parent" DisplayName_L1="Parent Department" DisplayName_L2="Département parent" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="Type" DisplayName_L1="Type" DisplayName_L2="Type" TargetColumnIndex="131" Type="ForeignKey" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_OrganizationType" DisplayName_L1="Department Type" DisplayName_L2="Type de département">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Organizations" DisplayName_L1="Departments" DisplayName_L2="Départements" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_PersonalTitle" DisplayName_L1="Personal Title" DisplayName_L2="Civilité">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_PresenceState" DisplayName_L1="User Status" DisplayName_L2="Etat de présence">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Users" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_Region" DisplayName_L1="Region" DisplayName_L2="Région">
    <Property Identifier="Country" DisplayName_L1="Country" DisplayName_L2="Pays" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Sites" DisplayName_L1="Sites" DisplayName_L2="Sites" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_ReservedEmail" DisplayName_L1="Reserved Email" DisplayName_L2="Email réservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_ReservedIdentifier" DisplayName_L1="Reserved Unique Identifier" DisplayName_L2="Identifiant unique reservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_ReservedLogin" DisplayName_L1="Reserved Login" DisplayName_L2="Login réservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_Site" DisplayName_L1="Site" DisplayName_L2="Site">
    <Property Identifier="DisplayName" DisplayName_L1="Display Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="19" Type="String" />
    <Property Identifier="Floor" DisplayName_L1="Floor" DisplayName_L2="Etage" TargetColumnIndex="10" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Latitude" DisplayName_L1="Latitude" DisplayName_L2="Latitude" TargetColumnIndex="15" Type="Double" />
    <Property Identifier="Longitude" DisplayName_L1="Longitude" DisplayName_L2="Longitude" TargetColumnIndex="14" Type="Double" />
    <Property Identifier="Name" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Map" DisplayName_L2="Carte" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="13" Type="Int64" />
    <Property Identifier="PostalCode" DisplayName_L1="Postal Code" DisplayName_L2="Code postal" TargetColumnIndex="12" Type="String" />
    <Property Identifier="PreferredLanguage" DisplayName_L1="Preferred Language" DisplayName_L2="Langue préférée" TargetColumnIndex="17" Type="String" />
    <Property Identifier="Region" DisplayName_L1="Region" DisplayName_L2="Région" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="StreetName" DisplayName_L1="Street Name" DisplayName_L2="Rue" TargetColumnIndex="8" Type="String" />
    <Property Identifier="StreetNumber" DisplayName_L1="Street Number" DisplayName_L2="Numéro" TargetColumnIndex="7" Type="String" />
    <Property Identifier="StreetType" DisplayName_L1="Street Type" DisplayName_L2="Type de voie" TargetColumnIndex="9" Type="String" />
    <Property Identifier="TimeZone" DisplayName_L1="Time Zone" DisplayName_L2="Fuseau horaire" TargetColumnIndex="18" Type="String" />
    <Property Identifier="Town" DisplayName_L1="Town" DisplayName_L2="Ville" TargetColumnIndex="11" Type="String" />
    <Property Identifier="Url" DisplayName_L1="Url" DisplayName_L2="Url" TargetColumnIndex="16" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_Subsidiary" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="5" Type="String" />
    <Property Identifier="EmailDomain" DisplayName_L1="Email Domain" DisplayName_L2="Domaine de messagerie" TargetColumnIndex="7" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Logo" DisplayName_L2="Logo" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="6" Type="Int64" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_Title" DisplayName_L1="Title" DisplayName_L2="Fonction">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="JobCategory" DisplayName_L1="Business Category" DisplayName_L2="Famille de métier" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_User" DisplayName_L1="User" DisplayName_L2="Collaborateur">
    <Property Identifier="AssistantOf" DisplayName_L1="Assistant of" DisplayName_L2="Assistant de" Type="ForeignKey" />
    <Property Identifier="ConsentPhotoUsage" DisplayName_L1="Consent to Photo Usage" DisplayName_L2="Consentement à l'usage de la photo" TargetColumnIndex="9" Type="Bool" />
    <Property Identifier="DirectReports" DisplayName_L1="Direct Reports" Type="ForeignKey" />
    <Property Identifier="EffectiveIGADirectReports" DisplayName_L1="IGA Direct Reports (effective)" Type="ForeignKey" />
    <Property Identifier="Email" DisplayName_L1="Email" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="11" Type="String" />
    <Property Identifier="IGADirectReports" DisplayName_L1="IGA Direct Reports" Type="ForeignKey" />
    <Property Identifier="Identifier" DisplayName_L1="Unique Identifier" DisplayName_L2="Identifiant unique" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="IsDraft" DisplayName_L1="Record is draft" DisplayName_L2="Fiche en brouillon" TargetColumnIndex="6" Type="Bool" />
    <Property Identifier="LastFirstName" DisplayName_L1="Last/First Name" TargetColumnIndex="10" Type="String" />
    <Property Identifier="MainRecord" DisplayName_L1="Main Record" DisplayName_L2="Fiche principale" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="ManagedOrganizations" DisplayName_L1="Managed Departments" DisplayName_L2="Départements gérés" Type="ForeignKey" />
    <Property Identifier="PhoneticFirstLastName" DisplayName_L1="Phonetic First/Last Name" DisplayName_L2="Prénom/nom phonétiques" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="7" Type="String" />
    <Property Identifier="PhoneticLastFirstName" DisplayName_L1="Phonetic Last/First Name" DisplayName_L2="Nom/prénom phonétiques" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="8" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Photo" DisplayName_L2="Photo" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="5" Type="Int64" />
    <Property Identifier="PresenceState" DisplayName_L1="Status" DisplayName_L2="Etat" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="Records" DisplayName_L1="Records" DisplayName_L2="Fices" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_UserCategory" DisplayName_L1="User Category" DisplayName_L2="Famille de types de collaborateurs">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Types" DisplayName_L1="User Types" DisplayName_L2="Type de collaborateur" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_UserRecord" DisplayName_L1="User Record" DisplayName_L2="Fiche de collaborateur">
    <Property Identifier="BirthDate" DisplayName_L1="Birth Date" DisplayName_L2="Date de naissance" TargetColumnIndex="14" Type="DateTime" />
    <Property Identifier="BirthName" DisplayName_L1="Birth Name" DisplayName_L2="Nom de naissance" TargetColumnIndex="15" Type="String" />
    <Property Identifier="ContractEndDate" DisplayName_L1="Contract End Date" DisplayName_L2="Date de fin de contrat" TargetColumnIndex="21" Type="DateTime" />
    <Property Identifier="ContractIdentifier" DisplayName_L1="Contract Identifier" TargetColumnIndex="36" Type="String" />
    <Property Identifier="ContractStartDate" DisplayName_L1="Contract Start Date" DisplayName_L2="Date de début de contrat" TargetColumnIndex="20" Type="DateTime" />
    <Property Identifier="EffectiveIGAManager" DisplayName_L1="IGA Manager (effective)" DisplayName_L2="Gestionnaire IGA (effectif)" TargetColumnIndex="140" Type="ForeignKey" />
    <Property Identifier="Email" DisplayName_L1="Email" DisplayName_L2="Email" TargetColumnIndex="11" Type="String" />
    <Property Identifier="EmailAliases" DisplayName_L1="Email Aliases" DisplayName_L2="Alias d'email" TargetColumnIndex="31" Type="String" />
    <Property Identifier="EmployeeId" DisplayName_L1="Employee Id" DisplayName_L2="Matricule" TargetColumnIndex="7" Type="String" />
    <Property Identifier="EndDate" DisplayName_L1="End Date" DisplayName_L2="Date de fin de fiche" TargetColumnIndex="6" Type="DateTime" />
    <Property Identifier="ExternalCompany" DisplayName_L1="External Company" DisplayName_L2="Société externe" TargetColumnIndex="132" Type="ForeignKey" />
    <Property Identifier="FirstName" DisplayName_L1="First Name" DisplayName_L2="Prénom" TargetColumnIndex="8" Type="String" />
    <Property Identifier="IGAManager" DisplayName_L1="IGA Manager" DisplayName_L2="Gestionnaire IGA" TargetColumnIndex="139" Type="ForeignKey" />
    <Property Identifier="LastName" DisplayName_L1="Last Name" DisplayName_L2="Nom" TargetColumnIndex="9" Type="String" />
    <Property Identifier="Login" DisplayName_L1="Login" DisplayName_L2="Login" TargetColumnIndex="10" Type="String" />
    <Property Identifier="MainUser" DisplayName_L1="User (main)" DisplayName_L2="Collaborateur (principal)" Type="ForeignKey" />
    <Property Identifier="Manager" DisplayName_L1="Manager" DisplayName_L2="Responsable" TargetColumnIndex="138" Type="ForeignKey" />
    <Property Identifier="MobileNumber" DisplayName_L1="Mobile Number" DisplayName_L2="Mobile" TargetColumnIndex="13" Type="String" />
    <Property Identifier="Organization" DisplayName_L1="Department" DisplayName_L2="Département" TargetColumnIndex="130" Type="ForeignKey" />
    <Property Identifier="PersonalTitle" DisplayName_L1="Personal Title" DisplayName_L2="Civilité" TargetColumnIndex="135" Type="ForeignKey" />
    <Property Identifier="PhoneNumber" DisplayName_L1="Phone Number" DisplayName_L2="Téléphone" TargetColumnIndex="12" Type="String" />
    <Property Identifier="PhoneticFirstLastName" DisplayName_L1="Phonetic First/Last Name" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="32" Type="String" />
    <Property Identifier="PhoneticFirstName" DisplayName_L1="Phonetic First Name" DisplayName_L2="Prénom phonétique" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="34" Type="String" />
    <Property Identifier="PhoneticLastFirstName" DisplayName_L1="Phonetic Last/First Name" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="33" Type="String" />
    <Property Identifier="PhoneticLastName" DisplayName_L1="Phonetic Last Name" DisplayName_L2="Nom phonétique" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="35" Type="String" />
    <Property Identifier="PositionEndDate" DisplayName_L1="Position End Date" DisplayName_L2="Date de fin de poste" TargetColumnIndex="25" Type="DateTime" />
    <Property Identifier="PositionIdentifier" DisplayName_L1="Position Identifier" DisplayName_L2="Identifiant de poste" IsKey="true" TargetColumnIndex="26" Type="String" />
    <Property Identifier="PositionStartDate" DisplayName_L1="Position Start Date" DisplayName_L2="Date de début de poste" TargetColumnIndex="24" Type="DateTime" />
    <Property Identifier="Site" DisplayName_L1="Site" DisplayName_L2="Site" TargetColumnIndex="131" Type="ForeignKey" />
    <Property Identifier="StartDate" DisplayName_L1="Start Date" DisplayName_L2="Date de début de fiche" TargetColumnIndex="5" Type="DateTime" />
    <Property Identifier="Subsidiary" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" TargetColumnIndex="134" Type="ForeignKey" />
    <Property Identifier="Suspended" DisplayName_L1="Suspended" DisplayName_L2="Suspendu" TargetColumnIndex="17" Type="Bool" />
    <Property Identifier="Title" DisplayName_L1="Title" DisplayName_L2="Fonction" TargetColumnIndex="133" Type="ForeignKey" />
    <Property Identifier="User" DisplayName_L1="User" DisplayName_L2="Collaborateur" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="UserIdentifier" DisplayName_L1="User Identifier" DisplayName_L2="Identifiant unique" TargetColumnIndex="4" Type="String" />
    <Property Identifier="UserType" DisplayName_L1="User Type" DisplayName_L2="Type de collaborateur" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="VIP" DisplayName_L1="VIP" DisplayName_L2="VIP" TargetColumnIndex="16" Type="Bool" />
</EntityType>
<EntityType Identifier="Directory_UserType" DisplayName_L1="User Type" DisplayName_L2="Type de collaborateur">
    <Property Identifier="Category" DisplayName_L1="Category" DisplayName_L2="Catégorie" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="14" Type="String" />
    <Property Identifier="EmailSuffix" DisplayName_L1="Email Suffix" DisplayName_L2="Suffixe d'email" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="IsExternal" DisplayName_L1="External" DisplayName_L2="Externe" TargetColumnIndex="13" Type="Bool" />
    <Property Identifier="LoginPrefix" DisplayName_L1="Login Prefix" DisplayName_L2="Préfix de login" TargetColumnIndex="7" Type="String" />
    <Property Identifier="LoginSuffix" DisplayName_L1="Login Suffix" TargetColumnIndex="11" Type="String" />
    <Property Identifier="UniqueIdentifierPrefix" DisplayName_L1="Unique Identifier Prefix" TargetColumnIndex="8" Type="String" />
    <Property Identifier="UniqueIdentifierRangeEnd" DisplayName_L1="Unique Identifier Range End" TargetColumnIndex="10" Type="Int32" />
    <Property Identifier="UniqueIdentifierRangeStart" DisplayName_L1="Unique Identifier Range Start" TargetColumnIndex="9" Type="Int32" />
    <Property Identifier="UniqueIdentifierSuffix" DisplayName_L1="Unique Identifier Suffix" TargetColumnIndex="12" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<AccessControlEntityType Identifier="Directory_Subsidiary">
    <Property Identifier="EmailDomain" VisibilityGroup="Directory_Subsidiary_Administration" />
</AccessControlEntityType>
<AccessControlEntityType Identifier="Directory_UserRecord">
    <Property Identifier="BirthDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="BirthName" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ContractEndDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ContractStartDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="EmployeeId" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ExternalCompany" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="PositionIdentifier" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="Suspended" VisibilityGroup="Directory_UserRecord_Administration" />
    <Property Identifier="UserIdentifier" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="UserType" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="VIP" VisibilityGroup="Directory_UserRecord_Administration" />
</AccessControlEntityType>
<AccessControlEntityType Identifier="Directory_UserType">
    <Property Identifier="EmailSuffix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="LoginPrefix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierPrefix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierRangeEnd" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierRangeStart" VisibilityGroup="Directory_UserType_Administration" />
</AccessControlEntityType>
<EntityAssociation Identifier="Directory_Organization_Assistant" IsProperty2Collection="true" Property1="Directory_Organization:Assistant" Property2="Directory_User:AssistantOf" />
<EntityAssociation Identifier="Directory_Organization_Manager" IsProperty2Collection="true" Property1="Directory_Organization:Manager" Property2="Directory_User:ManagedOrganizations" />
<EntityAssociation Identifier="Directory_Organization_Parent" IsProperty2Collection="true" Property1="Directory_Organization:Parent" Property2="Directory_Organization:Children" />
<EntityAssociation Identifier="Directory_Organization_Type" IsProperty2Collection="true" Property1="Directory_Organization:Type" Property2="Directory_OrganizationType:Organizations" />
<EntityAssociation Identifier="Directory_Region_Country" IsProperty2Collection="true" Property1="Directory_Region:Country" Property2="Directory_Country:Regions" />
<EntityAssociation Identifier="Directory_Site_Region" IsProperty2Collection="true" Property1="Directory_Site:Region" Property2="Directory_Region:Sites" />
<EntityAssociation Identifier="Directory_Title_JobCategory" IsProperty2Collection="true" Property1="Directory_Title:JobCategory" Property2="Directory_JobCategory:Titles" />
<EntityAssociation Identifier="Directory_UserRecord_EffectiveIGAManager" IsProperty2Collection="true" Property1="Directory_UserRecord:EffectiveIGAManager" Property2="Directory_User:EffectiveIGADirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_ExternalCompany" IsProperty2Collection="true" Property1="Directory_UserRecord:ExternalCompany" Property2="Directory_ExternalCompany:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_IGAManager" IsProperty2Collection="true" Property1="Directory_UserRecord:IGAManager" Property2="Directory_User:IGADirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_MainRecord" Property1="Directory_UserRecord:MainUser" Property2="Directory_User:MainRecord" />
<EntityAssociation Identifier="Directory_UserRecord_Manager" IsProperty2Collection="true" Property1="Directory_UserRecord:Manager" Property2="Directory_User:DirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_Organization" IsProperty2Collection="true" Property1="Directory_UserRecord:Organization" Property2="Directory_Organization:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_PersonalTitle" IsProperty2Collection="true" Property1="Directory_UserRecord:PersonalTitle" Property2="Directory_PersonalTitle:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Site" IsProperty2Collection="true" Property1="Directory_UserRecord:Site" Property2="Directory_Site:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Subsidiary" IsProperty2Collection="true" Property1="Directory_UserRecord:Subsidiary" Property2="Directory_Subsidiary:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Title_User_Records" IsProperty2Collection="true" Property1="Directory_UserRecord:Title" Property2="Directory_Title:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_User" IsProperty2Collection="true" Property1="Directory_UserRecord:User" Property2="Directory_User:Records" />
<EntityAssociation Identifier="Directory_UserRecord_UserType" IsProperty2Collection="true" Property1="Directory_UserRecord:UserType" Property2="Directory_UserType:UserRecords" />
<EntityAssociation Identifier="Directory_UserType_Category" IsProperty2Collection="true" Property1="Directory_UserType:Category" Property2="Directory_UserCategory:Types" />
<EntityAssociation Identifier="Directory_User_PresenceState" IsProperty2Collection="true" Property1="Directory_User:PresenceState" Property2="Directory_PresenceState:Users" />
<EntityPropertyExpression Identifier="Directory_ExternalCompany_PhotoTag" Binding="Directory_ExternalCompany:Photo.Id" EntityType="Directory_ExternalCompany" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_Organization_FullName" EntityType="Directory_Organization" Expression="C#:organization:return (organization.Parent == null ? null : (organization.Parent.FullName + " / ")) + organization.DisplayName;" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Organization_InternalDisplayName_L1" Binding="Directory_Organization:FullName" EntityType="Directory_Organization" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Region_FullName" EntityType="Directory_Region" Expression="C#:region:return region.Country == null ? region.DisplayName : (region.Country.DisplayName + " / " + region.DisplayName);" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Region_InternalDisplayName_L1" Binding="Directory_Region:FullName" EntityType="Directory_Region" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Site_FullName" EntityType="Directory_Site" Expression="C#:site:
var path = string.Empty;
if (site.Region != null)
{
if (site.Region.Country != null)
{
path = site.Region.Country.DisplayName + " / ";
}
path += site.Region.DisplayName + " / ";
}
path += site.DisplayName;
return path;" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Site_InternalDisplayName_L1" Binding="Directory_Site:FullName" EntityType="Directory_Site" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Site_PhotoTag" Binding="Directory_Site:Photo.Id" EntityType="Directory_Site" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_Subsidiary_PhotoTag" Binding="Directory_Subsidiary:Photo.Id" EntityType="Directory_Subsidiary" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_UserRecord_EffectiveIGAManager" EntityType="Directory_UserRecord" Expression="C#:record:
var managerId = record.IGAManager?.Id;
if (managerId != default)
{
/* There is an explicit IGA Manager */
return managerId;
}
managerId = record.Manager?.Id;
if (managerId != default)
{
/* There is an explicit Manager */
return managerId;
}
if (record.Organization == null)
{
/* No org => we can't get any manager */
return managerId;
}
managerId = record.Organization.Manager?.Id;
if (managerId == null)
{
/* No org manager => we can't get any manager */
return managerId;
}
if (record.User?.Id != managerId)
{
/* The current user is not his org's manager => we take the org's manager */
return managerId;
}
/* We take the N+2 org's manager */
managerId = record.Organization.Parent?.Manager?.Id;
return managerId;" Property="EffectiveIGAManager" />
<EntityPropertyExpression Identifier="Directory_UserRecord_InternalDisplayName" EntityType="Directory_UserRecord" Expression="C#:record:
var ret = "";
if (record.UserIdentifier != null)
{
ret += record.UserIdentifier + " - ";
}
ret += record.LastName + ' ' + record.FirstName;
return ret;" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticFirstLastName" EntityType="Directory_UserRecord" Expression="C#:record:return (record.FirstName + ' ' + record.LastName).Approximate();" Property="PhoneticFirstLastName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticFirstName" EntityType="Directory_UserRecord" Expression="C#:person:return person.FirstName.Approximate();" Property="PhoneticFirstName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticLastFirstName" EntityType="Directory_UserRecord" Expression="C#:record:return (record.LastName + ' ' + record.FirstName).Approximate();" Property="PhoneticLastFirstName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticLastName" EntityType="Directory_UserRecord" Expression="C#:person:return person.LastName.Approximate();" Property="PhoneticLastName" />
<EntityPropertyExpression Identifier="Directory_User_Email" Binding="Directory_User:MainRecord.Email" EntityType="Directory_User" Property="Email" />
<EntityPropertyExpression Identifier="Directory_User_InternalDisplayName" EntityType="Directory_User" Expression="C#:user:
var ret = "";
if (user.Identifier != null)
{
ret += user.Identifier;
}
if (user.MainRecord != null)
{
if (user.Identifier != null)
{
    ret += " - ";
}
ret += user.MainRecord.LastName + ' ' + user.MainRecord.FirstName;
}
return ret;" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_User_LastFirstName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : (user.MainRecord.LastName + ' ' + user.MainRecord.FirstName);" Property="LastFirstName" />
<EntityPropertyExpression Identifier="Directory_User_MainRecord" EntityType="Directory_User" Expression="C#:user:
/* trivial cases first */
if ((user.Records == null) || (user.Records.Count == 0))
{
return default(long?);
}
if (user.Records.Count == 1)
{
return user.Records[0].Id;
}
var now = DateTime.UtcNow;
var records = new System.Collections.Generic.List<(long? id, bool main, System.DateTime start, System.DateTime end)>();
foreach (var record in user.Records)
{
var id = record.Id;
records.Add((id, false, record.StartDate ?? System.DateTime.MinValue, record.EndDate ?? System.DateTime.MaxValue));
records.Add((id, false, record.ContractStartDate ?? System.DateTime.MinValue, record.ContractEndDate ?? System.DateTime.MaxValue));
records.Add((id, false, record.PositionStartDate ?? System.DateTime.MinValue, record.PositionEndDate ?? System.DateTime.MaxValue));
}
/* all the records are in the future, take the closest one */
if (records.All(r => r.start > now))
{
return records.OrderBy(r => (r.start, r.main, r.id)).First().id;
}
/* all the records are in the past, take the closest one */
if (records.All(r => r.end < now))
{
return records.OrderByDescending(r => (r.end, r.main, r.id.HasValue ? -r.id.Value : long.MinValue)).First().id;
}
/* find the closest current record */
var currentRecord = records.Where(r => (r.start < now) && (r.end > now)).OrderByDescending(r => (r.start, r.main, r.id.HasValue ? -r.id.Value : long.MinValue)).Select(r => r.id).FirstOrDefault();
if (currentRecord == null)
{
/* current record not found : take the first */
currentRecord = records.OrderBy(r => (r.main, r.id)).First().id;
}
return currentRecord;
" Priority="-2" Property="MainRecord" />
<EntityPropertyExpression Identifier="Directory_User_PhoneticFirstLastName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : user.MainRecord.PhoneticFirstLastName;" Property="PhoneticFirstLastName" />
<EntityPropertyExpression Identifier="Directory_User_PhoneticLastFirstName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : user.MainRecord.PhoneticLastFirstName;" Property="PhoneticLastFirstName" />
<EntityPropertyExpression Identifier="Directory_User_PhotoTag" Binding="Directory_User:Photo.Id" EntityType="Directory_User" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_User_PresenceState" EntityType="Directory_User" Expression="C#:user:
if (user.IsDraft.GetValueOrDefault())
{
return -103L;
}
if ((user.Records == null) || (user.Records.Count == 0))
{
return -100L;
}
/* at least of current record */
if (user.Records.Any(r => (!r.ContractStartDate.HasValue || (r.ContractStartDate < DateTime.UtcNow)) && (!r.ContractEndDate.HasValue || (r.ContractEndDate > DateTime.UtcNow))
{
return -101L;
}
/* at least of record in the future */
if (user.Records.Any(r => r.ContractStartDate.HasValue && (r.ContractStartDate > DateTime.UtcNow)
{
return -102L;
}
return -100L;" Property="PresenceState" />
<Dimension Identifier="Country0" DisplayName_L1="Country" DisplayName_L2="Pays" ColumnMapping="3" EntityType="Directory_Country" />
<Dimension Identifier="ExternalCompany0" DisplayName_L1="External Company" DisplayName_L2="Société externe" ColumnMapping="7" EntityType="Directory_ExternalCompany" />
<Dimension Identifier="Organization0" DisplayName_L1="Department" DisplayName_L2="Département" EntityType="Directory_Organization" IsHierarchical="true" ParentProperty="Parent" />
<Dimension Identifier="OrganizationType0" DisplayName_L1="Department Type" DisplayName_L2="Type de département" ColumnMapping="5" EntityType="Directory_OrganizationType" />
<Dimension Identifier="Site0" DisplayName_L1="Site" DisplayName_L2="Site" ColumnMapping="2" EntityType="Directory_Site" />
<Dimension Identifier="Subsidiary0" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" ColumnMapping="6" EntityType="Directory_Subsidiary" />
<Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" ColumnMapping="1" EntityType="Directory_Title" />
<Dimension Identifier="User0" DisplayName_L1="User" DisplayName_L2="Collaborateur" ColumnMapping="8" EntityType="Directory_User" />
<Dimension Identifier="UserCategory0" DisplayName_L1="User Category" DisplayName_L2="Type de collaborateur" ColumnMapping="4" EntityType="Directory_UserCategory" />
<Resource Id="-103" DisplayName_L1="Pending Approval" C4="D" C5="Pending Approval" Type="Directory_PresenceState" />
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" EndProperty="ContractEndDate" InstanceKeyExpression="C#:record:return record.ContractIdentifier;" IsDefaultBoundariesSection="true" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="ContractStartDate">
    <Property Property="ContractIdentifier" />
    <Property Property="ExternalCompany" />
    <Property Property="Subsidiary" />
    <Property Property="UserType" />
</RecordSection>
<RecordSection Identifier="Directory_UserRecord_Default" DisplayName_L1="User Properties" EndProperty="EndDate" InstanceKeyExpression="C#:record:return record.StartDate.HasValue ? record.StartDate.Value.ToString("yyyyMMdd") : string.Empty;" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="StartDate" />
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" EndProperty="PositionEndDate" InstanceKeyExpression="C#:record:return record.PositionIdentifier;" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="PositionStartDate">
    <Property Property="EffectiveIGAManager" />
    <Property Property="IGAManager" />
    <Property Property="Manager" />
    <Property Property="Organization" />
    <Property Property="PositionIdentifier" />
    <Property Property="Site" />
    <Property Property="Title" />
</RecordSection>
<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" B0="Directory_UserRecord:Organization" B1="Directory_UserRecord:Title" B2="Directory_UserRecord:Site" B3="Directory_UserRecord:Site.Region.Country" B4="Directory_UserRecord:UserType.Category" B5="Directory_UserRecord:Organization.Type" B6="Directory_UserRecord:Subsidiary" B7="Directory_UserRecord:ExternalCompany" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" Policy="Default" ResourcesBinding="Directory_User:Records" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" RiskFactorType="Max" SourceEntityType="Directory_User" />
<Connector Identifier="Directory" DisplayName_L1="Directory" Agent="Default" CompleteJob="NotUsed" IncrementalJob="NotUsed" />
<EntityTypeMapping Identifier="Directory_PresenceState" Connector="Directory" />
<EntityTypeMapping Identifier="Directory_UserRecord" ConnectionTable="Directory_UserRecord" Connector="Directory">
    <Property Identifier="UserIdentifier" ConnectionColumn="User" />
</EntityTypeMapping>
<Tile Identifier="Directory_UserRecord_Tile1" DisplayName_L1="User: first/last name" EntityType="Directory_UserRecord" TileDesignElement="picture-text">
    <Item Binding="FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />
    <Item Binding="LastName" LineDisplayOrderIndicator="2" LineNumber="2" />
    <Item Binding="Title.DisplayName" LineNumber="3" />
    <Item Binding="User.Id" LineNumber="5" />
    <Item Binding="User.PhotoTag" LineNumber="6" />
</Tile>
<Tile Identifier="Directory_UserRecord_Tile2" DisplayName_L1="User: dep/loc" EntityType="Directory_UserRecord" TileDesignElement="inline data-icon">
    <Item Binding="Organization.DisplayName" LineNumber="1" />
    <Item Binding="Site.DisplayName" LineNumber="2" />
</Tile>
<Tile Identifier="Directory_UserRecord_Tile3" DisplayName_L1="User: contact" EntityType="Directory_UserRecord" TileDesignElement="inline data-icon">
    <Item Binding="PhoneNumber" LineNumber="1" />
    <Item Binding="MobileNumber" LineNumber="2" />
</Tile>
<Tile Identifier="Directory_User_Tile1" DisplayName_L1="User: first/last name" EntityType="Directory_User" TileDesignElement="picture-text">
    <Item Binding="Id" LineNumber="5" />
    <Item Binding="PhotoTag" LineNumber="6" />
</Tile>
<Tile Identifier="Directory_User_Tile2" DisplayName_L1="User: dep/loc" EntityType="Directory_User" TileDesignElement="inline data-icon" />
<Tile Identifier="Directory_User_Tile3" DisplayName_L1="User: contact" EntityType="Directory_User" TileDesignElement="inline data-icon" />
<DisplayTable Identifier="Directory_ExternalCompany" DisplayTableDesignElement="table" EntityType="Directory_ExternalCompany" IsEntityTypeDefault="true">
    <Column CanBeFiltered="true" ColumnSize="12" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Organization" DisplayTableDesignElement="table" EntityType="Directory_Organization" IsEntityTypeDefault="true" ParentProperty="Parent">
    <Column CanBeFiltered="true" ColumnSize="6" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column DisplayName_L1="Manager" DisplayName_L2="Responsable" ColumnSize="4" DisplayBinding="Manager.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
    <Column DisplayName_L1="Type" DisplayName_L2="Type" ColumnSize="2" DisplayBinding="Type.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Site" DisplayTableDesignElement="table" EntityType="Directory_Site" IsEntityTypeDefault="true">
    <Column DisplayName_L1="Country" DisplayName_L2="Pays" CanBeFiltered="true" ColumnSize="2" DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column DisplayName_L1="State" DisplayName_L2="Région" CanBeFiltered="true" ColumnSize="2" DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column CanBeFiltered="true" ColumnSize="8" DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Subsidiary" DisplayTableDesignElement="table" EntityType="Directory_Subsidiary" IsEntityTypeDefault="true">
<Column CanBeFiltered="true" ColumnSize="12" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_User" DisplayTableDesignElement="list" EntityType="Directory_User" IsEntityTypeDefault="true">
<Column ColumnSize="3" Tile="Directory_User_Tile3" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord" DisplayTableDesignElement="list" EntityType="Directory_UserRecord" IsEntityTypeDefault="true">
<Column ColumnSize="6" DefaultSortPriority="1" IsDisplayInSummaryView="true" SortBinding="LastName" Tile="Directory_UserRecord_Tile1" />
<Column ColumnSize="3" IsDisplayInSummaryView="true" SortBinding="FirstName" Tile="Directory_UserRecord_Tile2" />
<Column ColumnSize="3" Tile="Directory_UserRecord_Tile3" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_Helpdesk" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayName_L1="Title" DisplayName_L2="Fonction" DisplayBinding="Title.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Department" DisplayName_L2="Département" DisplayBinding="Organization.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Site" DisplayName_L2="Site" DisplayBinding="Site.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Date de début" DisplayBinding="StartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Date de fin" DisplayBinding="EndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_Homonym" DisplayTableDesignElement="table" EntityType="Directory_UserRecord" HomonymEntityLink="Directory_UserRecord">
<Column ColumnSize="2" DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column ColumnSize="2" DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column ColumnSize="2" DisplayBinding="BirthName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayName_L1="UserType" DisplayName_L2="Type" ColumnSize="2" DisplayBinding="UserType.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayName_L1="External Company" DisplayName_L2="Société externe" DisplayBinding="ExternalCompany.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_ManageContracts" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayBinding="EmployeeId" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="User Type" DisplayName_L2="Type" DisplayBinding="UserType.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" DisplayBinding="Subsidiary.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Début" DisplayBinding="ContractStartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Fin" DisplayBinding="ContractEndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_ManagePositions" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayBinding="PositionIdentifier" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Title" DisplayName_L2="Fonction" DisplayBinding="Title.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Department" DisplayName_L2="Département" DisplayBinding="Organization.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Site" DisplayName_L2="Site" DisplayBinding="Site.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Début" DisplayBinding="PositionStartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Fin" DisplayBinding="PositionEndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserType" DisplayTableDesignElement="table" EntityType="Directory_UserType" IsEntityTypeDefault="true">
<Column CanBeFiltered="true" ColumnSize="8" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
<Column CanBeFiltered="true" ColumnSize="4" DisplayBinding="Category.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<MenuItem Identifier="Dashboard_Directory" DisplayName_L1="Directory" DisplayName_L2="Référentiel" ParentMenuItem="Dashboard" />
<MenuItem Identifier="Nav_Directory" DisplayName_L1="Directory" DisplayName_L2="Référentiel" ParentMenuItem="Nav">
<MenuItem Identifier="Nav_Directory_User" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" EntityType="Directory_User" />
<MenuItem Identifier="Nav_Directory_Title" DisplayName_L1="Titles" DisplayName_L2="Fonctions" EntityType="Directory_Title" />
<MenuItem Identifier="Nav_Directory_JobCategory" DisplayName_L1="Job Categories" DisplayName_L2="Familles de métier" EntityType="Directory_JobCategory" />
<MenuItem Identifier="Nav_Directory_UserType" DisplayName_L1="User Types" DisplayName_L2="Types de collaborateur" EntityType="Directory_UserType" />
<MenuItem Identifier="Nav_Directory_UserCategory" DisplayName_L1="User Categories" DisplayName_L2="Familles de types de collaborateurs" EntityType="Directory_UserCategory" />
<MenuItem Identifier="Nav_Directory_Subsidiary" DisplayName_L1="Subsidiaries" DisplayName_L2="Filiales" EntityType="Directory_Subsidiary" />
<MenuItem Identifier="Nav_Directory_Organization" DisplayName_L1="Departments" DisplayName_L2="Départements" EntityType="Directory_Organization" />
<MenuItem Identifier="Nav_Directory_OrganizationType" DisplayName_L1="Department Types" DisplayName_L2="Types de département" EntityType="Directory_OrganizationType" />
<MenuItem Identifier="Nav_Directory_ExternalCompany" DisplayName_L1="External Companies" DisplayName_L2="Sociétés externes" EntityType="Directory_ExternalCompany" />
<MenuItem Identifier="Nav_Directory_Country" DisplayName_L1="Countries" DisplayName_L2="Pays" EntityType="Directory_Country" />
<MenuItem Identifier="Nav_Directory_Region" DisplayName_L1="Regions" DisplayName_L2="Régions" EntityType="Directory_Region" />
<MenuItem Identifier="Nav_Directory_Site" DisplayName_L1="Sites" DisplayName_L2="Sites" EntityType="Directory_Site" />
<MenuItem Identifier="Nav_Directory_PersonalTitle" DisplayName_L1="Personal Titles" DisplayName_L2="Civilités" EntityType="Directory_PersonalTitle" />
<MenuItem Identifier="Nav_Directory_UserRecord" DisplayName_L1="User Records" DisplayName_L2="Fiches de collaborateur" EntityType="Directory_UserRecord" />
<MenuItem Identifier="Nav_Directory_PresenceState" DisplayName_L1="Presence States" DisplayName_L2="Etats de présence" EntityType="Directory_PresenceState" />
<MenuItem Identifier="Nav_Directory_ReservedIdentifier" DisplayName_L1="Reserved Identifiers" DisplayName_L2="Identifiants réservés" EntityType="Directory_ReservedIdentifier" />
<MenuItem Identifier="Nav_Directory_ReservedEmail" DisplayName_L1="Reserved Emails" DisplayName_L2="Emails réservés" EntityType="Directory_ReservedEmail" />
<MenuItem Identifier="Nav_Directory_ReservedLogin" DisplayName_L1="Reserved Logins" DisplayName_L2="Logins réservés" EntityType="Directory_ReservedLogin" />
</MenuItem>
<MenuItem Identifier="Reports" DisplayName_L2="Rapports">
<MenuItem Identifier="Reports_Workforce_RoleModel_CompositeRoles" ReportQuery="Workforce_RoleModel_CompositeRoles" />
<MenuItem Identifier="Reports_Workforce_RoleModel_SingleRoles" ReportQuery="Workforce_RoleModel_SingleRoles" />
<MenuItem Identifier="Reports_Workforce_RoleModel_ResourceTypes" ReportQuery="Workforce_RoleModel_ResourceTypes" />
<MenuItem Identifier="Reports_Workforce_Directory_Users" ReportQuery="Workforce_Directory_Users" />
<MenuItem Identifier="Reports_Workforce_Directory_InternalUsers" ReportQuery="Workforce_Directory_InternalUsers" />
<MenuItem Identifier="Reports_Workforce_Directory_ExternalUsers" ReportQuery="Workforce_Directory_ExternalUsers" />
<MenuItem Identifier="Reports_Workforce_Directory_PlannedUserExists" ReportQuery="Workforce_Directory_PlannedUserExists" />
</MenuItem>
<MenuItem Identifier="Search_Directory_User" DisplayName_L1="Menu" DisplayName_L2="Menu">
<MenuItem Identifier="Search_Directory_User_NewInternal" DisplayName_L1="New Employee" DisplayName_L2="Entrée d'un interne" IconCode="AddFriend" Workflow="Directory_User_NewInternal" />
<MenuItem Identifier="Search_Directory_User_NewExternal" DisplayName_L1="New Contractor" DisplayName_L2="Entrée d'un externe" IconCode="AddFriend" Workflow="Directory_User_NewExternal" />
<MenuItem Identifier="Search_Directory_User_Helpdesk_Start" DisplayName_L1="New User (helpdesk)" DisplayName_L2="Nouveau collaborateur (helpdesk)" IconCode="AddFriend" Workflow="Helpdesk_Directory_User_New" />
</MenuItem>
<MenuItem Identifier="Top_Directory_User" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" EntityType="Directory_User" ParentMenuItem="Top" />
<MenuItem Identifier="UserMenu">
<MenuItem Identifier="UserMenu_Directory_User" DisplayName_L1="View My Data" DisplayName_L2="Voir mes données" EntityType="Directory_User" IsSelfForm="true" />
<MenuItem Identifier="UserMenu_Directory_User_Self_ResourcesUpdate" DisplayName_L1="Change My Permissions" DisplayName_L2="Modifier mes permissions" IsSelfForm="true" Workflow="Self_ResourcesUpdate" />
</MenuItem>
<MenuItem Identifier="View_Directory_User" DisplayName_L1="Menu" DisplayName_L2="Menu">
<MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions" DisplayName_L2="Actions">
    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="Menu_Directory_User_Changes_UpdatePersonalData" DisplayName_L1="Update Personal Data" DisplayName_L2="Modifier les informations personnelles" IconCode="Edit" Workflow="Directory_User_UpdatePersonalData" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ManageContracts" DisplayName_L1="Manage Contracts" DisplayName_L2="Gérer les contrats" IconCode="Edit" Workflow="Directory_User_ManageContracts" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ManagePositions" DisplayName_L1="Manage Positions" DisplayName_L2="Gérer les postes" IconCode="Edit" Workflow="Directory_User_ManagePositions" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ResourcesUpdate" DisplayName_L1="Modify Permissions" DisplayName_L2="Modifier les droits" IconCode="Edit" Workflow="Directory_User_UpdateResources" />
    <MenuItem Identifier="Menu_Directory_User_Changes_Suspend" DisplayName_L1="Suspend" DisplayName_L2="Suspendre" IconCode="Edit" Workflow="Directory_User_Suspend" />
    <MenuItem Identifier="Menu_Directory_User_Changes_Reactivate" DisplayName_L1="Reactivate" DisplayName_L2="Réactiver" IconCode="Edit" Workflow="Directory_User_Reactivate" />
    </MenuItem>
</MenuItem>
<MenuItem Identifier="View_Directory_User_Helpdesk" DisplayName_L1="Helpdesk" DisplayName_L2="Helpdesk" IconCode="Phone">
    <MenuItem Identifier="View_Directory_User_Helpdesk_Update" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="View_Directory_User_Helpdesk_FixRecord" DisplayName_L1="Repair Data (helpdesk)" DisplayName_L2="Réparer les données (helpdesk)" IconCode="Edit" Workflow="Helpdesk_Directory_User_FixRecord" />
    </MenuItem>
    <MenuItem Identifier="View_Directory_User_Helpdesk_Delete" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="View_Directory_User_Helpdesk_Directory_User_Delete" DisplayName_L1="Delete User (helpdesk)" DisplayName_L2="Supprimer un collaborateur (helpdesk)" IconCode="Cancel" Workflow="Helpdesk_Directory_User_Delete" />
    </MenuItem>
</MenuItem>
</MenuItem>
<DisplayEntityType Identifier="Directory_Country" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Countries" PluralDisplayName_L2="Pays">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Regions" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ExternalCompany" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Companies" PluralDisplayName_L2="Sociétés">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_JobCategory" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Business Categories" PluralDisplayName_L2="Catégories de métier">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Titles" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Organization" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Departments" PluralDisplayName_L2="Départements">
<Property Identifier="Children" OutputType="BasicCollection" />
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_OrganizationType" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Department Types" PluralDisplayName_L2="Types de départment">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Organizations" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_PersonalTitle" Color="#95c18b" PluralDisplayName_L1="Personal Titles" PluralDisplayName_L2="Civilités">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_PresenceState" PluralDisplayName_L1="User Status" PluralDisplayName_L2="Etats de présence" />
<DisplayEntityType Identifier="Directory_Region" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Regions" PluralDisplayName_L2="Régions">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Sites" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedEmail" PluralDisplayName_L1="Reserved Emails">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedIdentifier" PluralDisplayName_L1="Reserved Unique Identifiers">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedLogin" PluralDisplayName_L1="Reserved Logins">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Site" AutocompleteBinding="Directory_Site:DisplayName" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Sites" PluralDisplayName_L2="Sites">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" InputType="Picker" IsReadOnly="true" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Subsidiary" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Subsidiaries" PluralDisplayName_L2="Filiales">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Title" AutocompleteBinding="Directory_Title:Identifier" Color="#95c18b" IconCode="Suitcase" MinSearchLength="5" PluralDisplayName_L1="Titles" PluralDisplayName_L2="Fonctions">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_User" Color="#79C3D2" D0IsActive="true" D1IsActive="true" D2IsActive="true" D3IsActive="true" D4IsActive="true" D5IsActive="true" D6IsActive="true" D7IsActive="true" IconCode="People" PluralDisplayName_L1="Users" PluralDisplayName_L2="Collaborateurs" Priority="0">
<Property Identifier="AssistantOf" OutputType="BasicCollection" />
<Property Identifier="Identifier" DisplayOrder="-1" />
<Property Identifier="ManagedOrganizations" InputType="Picker" OutputType="BasicCollection" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="Records" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserCategory" Color="#95c18b" PluralDisplayName_L1="User Categories" PluralDisplayName_L2="Familles de types de collaborateurs">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Types" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserRecord" PluralDisplayName_L1="User Records" PluralDisplayName_L2="Fiches de collaborateurs">
<Property Identifier="ContractEndDate" AddedMinutes="1440" />
<Property Identifier="EndDate" AddedMinutes="1440" />
<Property Identifier="FirstName" IsRequired="true" />
<Property Identifier="LastName" IsRequired="true" />
<Property Identifier="PersonalTitle" InputType="Combobox" />
<Property Identifier="PositionEndDate" AddedMinutes="1440" />
<Property Identifier="UserType" InputType="Combobox" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserType" Color="#95c18b" PluralDisplayName_L1="User Types" PluralDisplayName_L2="Types de collaborateurs">
<Property Identifier="Category" InputType="Combobox" />
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Workflow_Directory_User" Color="#79C3D2" Priority="0" />
<Form Identifier="Base_Directory_Organization" EntityType="Directory_Organization">
<Control DisplayName_L1="Organizational Data" DisplayName_L2="Données organisationnelles" Name="Organizational Data" OutputType="LayoutFieldset">
    <Control Binding="Type" />
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="FullName" IsReadOnly="true" />
    <Control Binding="Manager" />
    <Control Binding="Assistant" />
</Control>
<Control DisplayName_L1="Additional Data" DisplayName_L2="Informations complémentaires" Name="Additional Data" OutputType="LayoutFieldset">
    <Control Binding="Parent" />
    <Control Binding="Children" IsReadOnly="true" />
    <Control Binding="UserRecords" IsReadOnly="true" />
</Control>
</Form>
<Form Identifier="Base_Directory_Site" EntityType="Directory_Site">
<Control DisplayName_L1="Address" DisplayName_L2="Adresse" Name="Address" OutputType="LayoutFieldset">
    <Control Binding="Name" />
    <Control Binding="StreetNumber" />
    <Control Binding="StreetName" />
    <Control Binding="StreetType" />
    <Control Binding="Floor" />
    <Control Binding="PostalCode" />
    <Control Binding="Town" />
    <Control Binding="Region" />
    <Control Binding="Region.Country" IsReadOnly="true" />
    <Control Binding="Photo" OutputType="Image" />
</Control>
<Control DisplayName_L1="Additional Data" DisplayName_L2="Informations complémentaires" Name="Additional Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="UserRecords" />
    <Control Binding="Longitude" />
    <Control Binding="Latitude" />
    <Control Binding="Url" />
    <Control Binding="PreferredLanguage" />
    <Control Binding="TimeZone" />
</Control>
</Form>
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" />
    <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="User.Photo" OutputType="Image" />
    <Control Binding="UserIdentifier" ColumnSize="4" />
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="VIP" />
</Control>
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="Suspended" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control DisplayName_L1="Risk" DisplayName_L2="Risk" Name="Risk" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Score" DisplayName_L2="Score" Binding="User.ResourceRiskScore.Score" />
    <Control DisplayName_L1="Rating" DisplayName_L2="Rating" Binding="User.ResourceRiskScore.Rating" />
</Control>
</Form>
<Form Identifier="Directory_UserRecord_ViewPosition" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Organization" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="EffectiveIGAManager" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" />
</Control>
</Form>
<ResourceViewEntityForm Identifier="View_Directory_Organization" EntityType="Directory_Organization" IsDefaultViewForm="true" Menu="View_Directory_Organization">
<Control EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</ResourceViewEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_Site" EntityType="Directory_Site" IsDefaultViewForm="true" Menu="View_Directory_Site">
<Control EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</ResourceViewEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_Subsidiary" EntityType="Directory_Subsidiary" IsDefaultViewForm="true" Menu="View_Directory_Subsidiary">
<Control DisplayName_L1="General Data" DisplayName_L2="Informations générales" Name="General Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="Photo" OutputType="Image" />
    <Control Binding="UserRecords" />
</Control>
<Control DisplayName_L1="Technical Data" DisplayName_L2="Informations techniques" Name="Technical Data" OutputType="LayoutFieldset">
    <Control Binding="EmailDomain" />
</Control>
</ResourceViewEntityForm>
<ResourceViewRecordEntityForm Identifier="View_Directory_User" EntityType="Directory_User" IsDefaultViewForm="true" Menu="View_Directory_User" RecordEndProperty="Directory_UserRecord:EndDate" RecordFilter="All" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:StartDate">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Directory_UserRecord_View" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" OutputType="TransformImport" />
<RecordItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
</ResourceViewRecordEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_UserType" EntityType="Directory_UserType" IsDefaultViewForm="true" Menu="View_Directory_UserType">
<Control DisplayName_L1="General Data" DisplayName_L2="Informations générales" Name="General Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="Category" />
    <Control Binding="UserRecords" />
</Control>
<Control DisplayName_L1="Technical Data" DisplayName_L2="Informations techniques" Name="Technical Data" OutputType="LayoutFieldset">
    <Control Binding="UniqueIdentifierPrefix" />
    <Control Binding="UniqueIdentifierSuffix" />
    <Control Binding="UniqueIdentifierRangeStart" />
    <Control Binding="UniqueIdentifierRangeEnd" />
    <Control Binding="EmailSuffix" />
    <Control Binding="LoginPrefix" />
    <Control Binding="LoginSuffix" />
</Control>
</ResourceViewEntityForm>
<ResourceViewRecordEntityForm Identifier="View_Self" EntityType="Directory_User" FormTitle_L1="My Data" IsDefaultSelfForm="true" RecordEndProperty="Directory_UserRecord:EndDate" RecordFilter="Current" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:StartDate">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Directory_UserRecord_View" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
<RecordItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
</ResourceViewRecordEntityForm>
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Organization_Create" Activity="Directory_Organization_Create:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="New Department" FormTitle_L2="Créer un départment" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</WorkflowCreateEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Organization_Delete" Activity="Directory_Organization_Delete:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="Delete Department" FormTitle_L2="Supprimer un départment" IsDeleteForm="true" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" IsReadOnly="true" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Organization_Update" Activity="Directory_Organization_Update:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="Update Department" FormTitle_L2="Modifier un départment" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Site_Create" Activity="Directory_Site_Create:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="New Site" FormTitle_L2="Créer un site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</WorkflowCreateEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Site_Delete" Activity="Directory_Site_Delete:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="Delete Site" FormTitle_L2="Supprimer un site" IsDeleteForm="true" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" IsReadOnly="true" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Site_Update" Activity="Directory_Site_Update:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="Update Site" FormTitle_L2="Modifier un site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<Form Identifier="Workflow_Directory_UserRecord_Contract_Base" EntityType="Directory_UserRecord">
<Control Binding="EmployeeId" ColumnSize="4" />
<Control Binding="ContractIdentifier" ColumnSize="4" />
<Control Binding="UserType" />
<Control Binding="Subsidiary" />
<Control Binding="ExternalCompany" />
<Control Binding="Suspended" />
<Control Binding="ContractStartDate" />
<Control Binding="ContractEndDate" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Contract_Unique" EntityType="Directory_UserRecord">
<Control Binding="ContractIdentifier" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control HomonymEntityLink="Directory_UserRecord" OutputType="LayoutContainer">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
        <Control Binding="LastName" ColumnSize="6" />
        <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="VIP" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_PersonalData_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
  <Control HomonymEntityLink="Directory_UserRecord" OutputType="LayoutContainer">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
      <Control Binding="LastName" ColumnSize="6" />
      <Control Binding="FirstName" ColumnSize="6" />
    </Control>
  </Control>
  <Control Binding="BirthName" ColumnSize="4" />
  <Control Binding="BirthDate" />
  <Control Binding="PersonalTitle" ColumnSize="3" />
  <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
  </Control>
  <Control Binding="VIP" />
  <Control DisplayName_L1="Photo" OutputType="LayoutRowset" Name="Photo">
    <Control Binding="User.Photo" InputType="Image" />
  </Control>
</Control>
</Form>
<Form Identifier="Workflow_Directory_User_Photo" EntityType="Directory_User">
<Control DisplayName_L1="Photo" OutputType="LayoutRowset" Name="Photo">
  <Control Binding="Photo" InputType="Image" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Position_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Position_Unique" EntityType="Directory_UserRecord">
<Control Binding="PositionIdentifier" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_ReadOnlyData_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" IsReadOnly="true" />
    <Control Binding="FirstName" ColumnSize="6" IsReadOnly="true" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="BirthDate" IsReadOnly="true" />
    <Control Binding="Email" ColumnSize="6" IsReadOnly="true" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" IsReadOnly="true" />
    <Control Binding="MobileNumber" ColumnSize="6" IsReadOnly="true" />
    </Control>
    <Control Binding="UserIdentifier" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="Login" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="VIP" IsReadOnly="true" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Suspend_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_ReadOnlyData_Base" OutputType="TransformImport" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_UpdateResources_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_ReadOnlyData_Base" OutputType="TransformImport" />
</Form>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManageContracts" Activity="Directory_User_ManageContracts:Request" AddRowLabel_L1="Add Contract" AddRowLabel_L2="Ajouter un contrat" EntityType="Workflow_Directory_User" FormTitle_L1="Manage Contracts" FormTitle_L2="Gérer les contrats" MainProperty="Workflow_Directory_User:Directory_User" RecordEndProperty="Directory_UserRecord:ContractEndDate" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:ContractStartDate" RecordTable="Directory_UserRecord_ManageContracts" RemoveRowLabel_L1="Remove Contract" RemoveRowLabel_L2="Supprimer le contrat" TableTitle_L1="Contracts" TableTitle_L2="Contrats" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManagePositions" Activity="Directory_User_ManagePositions:Request" AddRowLabel_L1="Add Position" AddRowLabel_L2="Ajouter un poste" EntityType="Workflow_Directory_User" FormTitle_L1="Manage Positions" FormTitle_L2="Gérer les postes" MainProperty="Workflow_Directory_User:Directory_User" RecordEndProperty="Directory_UserRecord:PositionEndDate" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:PositionStartDate" RecordTable="Directory_UserRecord_ManagePositions" RemoveRowLabel_L1="Remove Position" RemoveRowLabel_L2="Supprimer le poste" TableTitle_L1="Positions" TableTitle_L2="Postes" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewExternal" Activity="Directory_User_NewExternal:Request" EntityType="Workflow_Directory_User" FormTitle_L1="New Contractor" FormTitle_L2="Nouvel externe" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_User_NewExternal_Base" OutputType="TransformImport" />
<RecordUniqueItemControl OutputType="LayoutContainer" />
<MainSummaryControl OutputType="LayoutContainer" />
<RecordSummaryControl EmbeddedForm="Workflow_Directory_User_New_Summary" OutputType="TransformImport" />
</WorkflowCreateRecordEntityForm>
<Form Identifier="Workflow_Directory_User_NewExternal_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base" OutputType="TransformImport" />
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</Form>
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" Activity="Directory_User_NewInternal:Request" EntityType="Workflow_Directory_User" FormTitle_L1="New Employee" FormTitle_L2="Nouvel employé" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_User_NewInternal_Base" OutputType="TransformImport" />
<RecordUniqueItemControl OutputType="LayoutContainer" />
<MainSummaryControl OutputType="LayoutContainer" />
<RecordSummaryControl EmbeddedForm="Workflow_Directory_User_New_Summary" OutputType="TransformImport" />
</WorkflowCreateRecordEntityForm>
<Form Identifier="Workflow_Directory_User_NewInternal_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base" OutputType="TransformImport" />
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</Form>
<Form Identifier="Workflow_Directory_User_New_Summary" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Important Information" DisplayName_L2="Important Information" Name="Important Information" OutputType="LayoutFieldset">
    <Control Binding="UserIdentifier" />
    <Control Binding="Email" />
    <Control Binding="Login" />
</Control>
</Form>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_Reactivate" Activity="Directory_User_Reactivate:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Reactivate" FormTitle_L2="Réactiver" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Suspend_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_Suspend" Activity="Directory_User_Suspend:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Suspend" FormTitle_L2="Suspendre" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Suspend_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_UpdatePersonalData" Activity="Directory_User_UpdatePersonalData:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Update Personal Data" FormTitle_L2="Modifier les informations personnelles" HideRoles="true" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="TransformImport"  EmbeddedForm="Workflow_Directory_User_Photo"/>
<RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" />
<RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_UpdateResources" Activity="Directory_User_UpdateResources:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Modify Permissions" FormTitle_L2="Modifier les permissions" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_UpdateResources_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" />
    <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control Binding="EmailAliases" ColumnSize="8" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="UserIdentifier" ColumnSize="4" />
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="VIP" />
    <Control Binding="StartDate" />
    <Control Binding="EndDate" InputType="Date" />
</Control>
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="ContractIdentifier" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="Suspended" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
</Control>
</Form>
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">
<Control Binding="Id" />
</Form>
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">
<Control Binding="Identifier" />
<Control Binding="IsDraft" />
<Control Binding="Photo" />
<Control Binding="ConsentPhotoUsage" />
</Form>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Helpdesk_Directory_User_Delete" Activity="Helpdesk_Directory_User_Delete:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Delete User" FormTitle_L2="Supprimer le collaborateur" HideRoles="true" IsDeleteForm="true" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" IsReadOnly="true" OutputType="TransformImport" />
<RecordControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" IsReadOnly="true" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_FixRecord" Activity="Helpdesk_Directory_User_FixRecord:Request" AddRowLabel_L1="Add Record" AddRowLabel_L2="Ajouter une fiche" EntityType="Workflow_Directory_User" FormTitle_L1="Repair Data (helpdesk)" FormTitle_L2="Réparer les données (helpdesk)" MainProperty="Workflow_Directory_User:Directory_User" RecordFilter="All" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" RemoveRowLabel_L1="Remove Record" RemoveRowLabel_L2="Supprimer la fiche" TableTitle_L1="Records" TableTitle_L2="Fiches" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" OutputType="TransformImport" />
<RecordControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" Activity="Helpdesk_Directory_User_New:Request" AddRowLabel_L1="Add Record" EntityType="Workflow_Directory_User" FormTitle_L1="New User (helpdesk)" FormTitle_L2="Nouveau collaborateur (helpdesk)" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" RemoveRowLabel_L1="Remove Record" TableTitle_L1="Records" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" OutputType="TransformImport" />
<RecordControl OutputType="LayoutContainer">
    <Control OutputType="LayoutContainer" />
</RecordControl>
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
</WorkflowCreateSeveralRecordsEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Self_ResourcesUpdate" Activity="Self_ResourcesUpdate:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Update My Permissions" FormTitle_L2="Modifier mes permissions" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EntityType="Directory_UserRecord" OutputType="LayoutContainer">
    <Control Binding="LastName" IsReadOnly="true" />
    <Control Binding="FirstName" IsReadOnly="true" />
</RecordControl>
</WorkflowUpdateRecordEntityForm>
<SearchBar EntityType="Directory_User" Menu="Search_Directory_User" SearchBarDesignElement="Inline" />
<AccessControlPropertyGroup Identifier="Directory_Subsidiary_Administration" DisplayName_L1="Subsidiary - Administration Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserRecord_Administration" DisplayName_L1="User Record - Administration Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserRecord_HR" DisplayName_L1="User Record - HR Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserType_Administration" DisplayName_L1="User Type - Administration Properties" />
<Profile Identifier="Workforce/Administration/Directory_User_ManageAccounts" DisplayName_L1="Workforce/Administration/Manage Accounts" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReconciliateResources" DisplayName_L1="Workforce/Administration/Reconciliate Resources" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReconciliateRoles" DisplayName_L1="Workforce/Administration/Reconciliate Roles" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewAccesses" DisplayName_L1="Workforce/Administration/Review Accesses" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewProvisioning" DisplayName_L1="Workforce/Administration/Review Provisioning" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewRoles" DisplayName_L1="Workforce/Administration/Review Roles" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ViewWorkflowOverview" DisplayName_L1="Workforce/Administration/View Requests" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_ViewAllHistory" DisplayName_L1="Workforce/Administration/View All History" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Country/View" DisplayName_L1="Workforce/Directory/View Countries" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ExternalCompany/View" DisplayName_L1="Workforce/Directory/View External Companies" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Gender/View" DisplayName_L1="Workforce/Directory/View Genders" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Office/View" DisplayName_L1="Workforce/Directory/View Offices" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Organization/View" DisplayName_L1="Workforce/Directory/View Organizations" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_OrganizationType/View" DisplayName_L1="Workforce/Directory/View Organization Types" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_PersonalTitle/View" DisplayName_L1="Workforce/Directory/View Personal Titles" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Region/View" DisplayName_L1="Workforce/Directory/View Regions" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedEmail/View" DisplayName_L1="Workforce/Directory/View Reserved Emails" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedIdentifier/View" DisplayName_L1="Workforce/Directory/View Reserved Identifiers" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedLogin/View" DisplayName_L1="Workforce/Directory/View Reserved Logins" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Site/View" DisplayName_L1="Workforce/Directory/View Sites" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Subsidiary/View" DisplayName_L1="Workforce/Directory/View Subsidiaries" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Title/View" DisplayName_L1="Workforce/Directory/View Titles" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/View" DisplayName_L1="Workforce/Directory/View User" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewAdministration" DisplayName_L1="Workforce/Directory/View User (admin)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewHR" DisplayName_L1="Workforce/Directory/View User (HR)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewHistory" DisplayName_L1="Workforce/Directory/View User (history)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewPhoto" DisplayName_L1="Workforce/Directory/View User (photos)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewResources" DisplayName_L1="Workforce/Directory/View User (resources)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_UserCategory/View" DisplayName_L1="Workforce/Directory/View User Categories" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_UserType/View" DisplayName_L1="Workforce/Directory/View User Types" IsComponent="true" />
<Profile Identifier="Workforce/Notifications/Directory_User_ManageContracts" DisplayName_L1="Workforce/Notifications/Manage Contracts" IsComponent="true" />
<Profile Identifier="Workforce/Notifications/Directory_User_New" DisplayName_L1="Workforce/Notifications/New User" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_ExternalUsers" DisplayName_L1="Workforce/Reports/Directory/External Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_InternalUsers" DisplayName_L1="Workforce/Reports/Directory/Internal Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_PlannedUserExists" DisplayName_L1="Workforce/Reports/Directory/Planned User Exits" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_Users" DisplayName_L1="Workforce/Reports/Directory/All Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_CompositeRoles" DisplayName_L1="Workforce/Reports/Role Model/Composite Roles" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_ResourceTypes" DisplayName_L1="Workforce/Reports/Role Model/Resource Types" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_SingleRoles" DisplayName_L1="Workforce/Reports/Role Model/Single Roles" IsComponent="true" />
<Profile Identifier="Workforce/Self/Self_ResourcesUpdate/Request" DisplayName_L1="Workforce/Self/Update My Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Self/Self_ResourcesUpdate/Review" DisplayName_L1="Workforce/Self/Update My Permissions (review)" IsComponent="true" />
<Profile Identifier="Workforce/Self/View" DisplayName_L1="Workforce/Self Service/View My Data" IsComponent="true" />
<Profile Identifier="Workforce/Self/ViewResources" DisplayName_L1="Workforce/Self Service/View My Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Country/Administration" DisplayName_L1="Workforce/Workflows/Administrate Countries" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ExternalCompany/Administration" DisplayName_L1="Workforce/Workflows/Administrate External Companies" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Gender/Administration" DisplayName_L1="Workforce/Workflows/Administrate Genders" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Office/Administration" DisplayName_L1="Workforce/Workflows/Administrate Offices" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Organization/Administration" DisplayName_L1="Workforce/Workflows/Administrate Organizations" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_OrganizationType/Administration" DisplayName_L1="Workforce/Workflows/Administrate Organization Types" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_PersonalTitle/Administration" DisplayName_L1="Workforce/Workflows/Administrate Personal Titles" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Region/Administration" DisplayName_L1="Workforce/Workflows/Administrate Regions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedEmail/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Emails" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedIdentifier/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Identifiers" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedLogin/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Logins" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Site/Administration" DisplayName_L1="Workforce/Workflows/Administrate Sites" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Subsidiary/Administration" DisplayName_L1="Workforce/Workflows/Administrate Subsidiaries" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Title/Administration" DisplayName_L1="Workforce/Workflows/Administrate Titles" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_UserCategory/Administration" DisplayName_L1="Workforce/Workflows/Administrate User Categories" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_UserType/Administration" DisplayName_L1="Workforce/Workflows/Administrate User Types" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_ManageContracts/Request" DisplayName_L1="Workforce/Workflows/Manage Contracts" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_ManagePositions/Request" DisplayName_L1="Workforce/Workflows/Manage Positions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewExternal/Request" DisplayName_L1="Workforce/Workflows/New Contractor" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewInternal/Request" DisplayName_L1="Workforce/Workflows/New Employee" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewInternal/Review" DisplayName_L1="Workforce/Workflows/New Employee (review)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_SuspendReactivate/Request" DisplayName_L1="Workforce/Workflows/Suspend, Reactivate" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" DisplayName_L1="Workforce/Workflows/Update Personal Data" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_UpdateResources/Request" DisplayName_L1="Workforce/Workflows/Update Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" DisplayName_L1="Workforce/Workflows/Delete User (helpdesk)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" DisplayName_L1="Workforce/Workflows/Fix User Data (helpdesk)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_New/Request" DisplayName_L1="Workforce/Workflows/New User (helpdesk)" IsComponent="true" />
<AccessControlRule Identifier="Administrator_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports" DisplayName_L1="Administrator_Reports" EntityType="ReportQuery" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_CompositeRole" DisplayName_L1="Administrator_Reports" EntityType="CompositeRole" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_Directory_UserRecord" DisplayName_L1="Administrator_Reports" EntityType="Directory_UserRecord" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_ResourceType" DisplayName_L1="Administrator_Reports" EntityType="ResourceType" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_SingleRole" DisplayName_L1="Administrator_Reports" EntityType="SingleRole" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Helpdesk_*" DisplayName_L1="Administrator_Workflows_Directory_User_Helpdesk_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_ManageContracts_*" DisplayName_L1="Administrator_Workflows_Directory_User_ManageContracts_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Administrator_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_New_External*" DisplayName_L1="Administrator_Workflows_Directory_User_New_External*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_New_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_New_Internal*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Reactivate_*" DisplayName_L1="Administrator_Workflows_Directory_User_Reactivate_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Suspend_*" DisplayName_L1="Administrator_Workflows_Directory_User_Suspend_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Administrator_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_UpdateResources_*" DisplayName_L1="Administrator_Workflows_Directory_User_UpdateResources_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Self_ViewResources_*" EntityType="AssignedResourceType" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" EntityType="AssignedSingleRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Category_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Self_ViewResources_*" EntityType="Category" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_CompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Self_ViewResources_*" EntityType="CompositeRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*" DisplayName_L1="Composite_Directory_Directory_Country_View_*" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Country/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_ViewAllHistory_*" EntityType="Directory_ExternalCompany" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_*" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Organization_ViewAllHistory_*" EntityType="Directory_Organization" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Organization/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_*" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*" DisplayName_L1="Composite_Directory_Directory_Region_View_*" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Region/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_ReservedEmail/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_ReservedIdentifier/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_ReservedLogin/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Site_ViewAllHistory_*" EntityType="Directory_Site" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Site/View">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_ViewAllHistory_*" EntityType="Directory_Subsidiary" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Title_ViewAllHistory_*" EntityType="Directory_Title" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Title/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_UserCategory/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_UserType_ViewAllHistory_*" EntityType="Directory_UserType" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_UserType/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewAdministration">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAllHistory_*" EntityType="Directory_User" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewHR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewHistory_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHistory_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewPhoto">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Directory_Self_ViewResources_*" EntityType="Directory_User" Profile="Workforce/Self/ViewResources">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*" DisplayName_L1="Composite_Directory_Self_View_*" EntityType="Directory_User" Profile="Workforce/Self/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Self" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Notifications_Directory_User_ManageContracts*" DisplayName_L1="Composite_Notifications_Directory_User_ManageContracts*" EntityType="Directory_User" Profile="Workforce/Notifications/Directory_User_ManageContracts">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_ManageContracts/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Workforce/Notifications/Directory_User_New">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Policy_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Self_ViewResources_*" EntityType="Policy" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_ResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Self_ViewResources_*" EntityType="ResourceType" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_SingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Self_ViewResources_*" EntityType="SingleRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Purged" />
<Filter Binding="Directory_User.Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workforce_Reports_RoleModel_CompositeRoles*" DisplayName_L1="Composite_Workforce_Reports_RoleModel_CompositeRoles*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_CompositeRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workforce_Reports_RoleModel_CompositeRoles_View*" DisplayName_L1="Composite_Workforce_Reports_RoleModel_CompositeRoles_View*" EntityType="CompositeRole" Profile="Workforce/Reports/RoleModel_CompositeRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/ReviewPending" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_ExternalUsers*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_ExternalUsers*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_ExternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_ExternalUsers_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_ExternalUsers_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_ExternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_InternalUsers*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_InternalUsers*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_InternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_InternalUsers_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_InternalUsers_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_InternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_PlannedUserExists*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_PlannedUserExists*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_PlannedUserExists">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_PlannedUserExists_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_PlannedUserExists_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_PlannedUserExists">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_Users*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_Users*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_Users">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_Users_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_Users_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_Users">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_RoleModel_ResourceTypes*" DisplayName_L1="ResourceType_Workforce_Reports_RoleModel_ResourceTypes*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_ResourceTypes">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_RoleModel_ResourceTypes_View*" DisplayName_L1="ResourceType_Workforce_Reports_RoleModel_ResourceTypes_View*" EntityType="ResourceType" Profile="Workforce/Reports/RoleModel_ResourceTypes">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
</AccessControlRule>
<AccessControlRule Identifier="Single_Workforce_Reports_RoleModel_SingleRoles*" DisplayName_L1="Single_Workforce_Reports_RoleModel_SingleRoles*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_SingleRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Single_Workforce_Reports_RoleModel_SingleRoles_View*" DisplayName_L1="Single_Workforce_Reports_RoleModel_SingleRoles_View*" EntityType="SingleRole" Profile="Workforce/Reports/RoleModel_SingleRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" EntityType="AssignedCompositeRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" EntityType="AssignedResourceScalar" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Self_ViewResources_*" EntityType="AssignedResourceType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedSingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" EntityType="AssignedSingleRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Category_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Self_ViewResources_*" EntityType="Category" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_CompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Self_ViewResources_*" EntityType="CompositeRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="User">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Directory_Self_ViewResources_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*" DisplayName_L1="Composite_Directory_Self_View_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Self" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Policy_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Self_ViewResources_*" EntityType="Policy" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_ResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Self_ViewResources_*" EntityType="ResourceType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_SingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Self_ViewResources_*" EntityType="SingleRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" EntityType="Workflow_Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Purged" />
<Filter Binding="Directory_User.Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<HomonymEntityLink Identifier="Directory_UserRecord" FormEntityType="Directory_UserRecord">
<Filter ComparisonProperty1="LastName" ComparisonProperty2="FirstName" Property1="FirstName" Property2="LastName" />
<Filter ComparisonProperty2="BirthName" Property1="FirstName" Property2="LastName" />
<Filter Property1="FirstName" Property2="LastName" />
</HomonymEntityLink>
<Workflow Identifier="Directory_User_ManageContracts" DisplayName_L1="User - Manage Contracts" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_ManagePositions" DisplayName_L1="User - Manage Positions" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_NewExternal" DisplayName_L1="User - New Contractor" DisplayName_L2="Collaborateur - Créer un externe" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_NewInternal" DisplayName_L1="User - New Employee" DisplayName_L2="Collaborateur - Créer un interne" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" DisplayName_L2="Brouillon de création" Template="PersistOnlyResources" WorkflowOverviewDisable="true" />
<Activity Identifier="Review" DisplayName_L1="Review" DisplayName_L2="Validation" Template="ReviewWithFeedback" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_Reactivate" DisplayName_L1="User - Reactivate" DisplayName_L2="Collaborateur - Réactivater" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_Suspend" DisplayName_L1="User - Suspend" DisplayName_L2="Collaborateur - Suspendre" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_UpdatePersonalData" DisplayName_L1="User - Update Personal Data" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_UpdateResources" DisplayName_L1="User - Modify Permissions" DisplayName_L2="Collaborateur - Modifier les droits" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_Delete" DisplayName_L1="User - Delete User (helpdesk)" DisplayName_L2="Collaborateur - Supprimer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_FixRecord" DisplayName_L1="User - Repair data (helpdesk)" DisplayName_L2="Collaborateur - Réparer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_New" DisplayName_L1="User - New (helpdesk)" DisplayName_L2="Collaborateur - Créer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Self_ResourcesUpdate" DisplayName_L1="Self Manager Permissions" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="Action" />
<Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
<PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsNotDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return false;">
<PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_Reactivate_Leave" Binding="Workflow_Directory_User:Directory_User.Records.Suspended" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:person:return false;">
<PointCut Activity="Directory_User_Reactivate:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_Suspend_Leave" Binding="Workflow_Directory_User:Directory_User.Records.Suspended" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:person:return true;">
<PointCut Activity="Directory_User_Suspend:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" Binding="Workflow_Directory_User:Directory_User.Records.Email" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" HistorizeBinding="Workflow_Directory_User:Directory_User.Records.EmailAliases" Priority="80" Expression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
result = result + (record.UserType?.EmailSuffix ?? string.Empty) + '@' + (record.Subsidiary?.EmailDomain ?? "acme.com");
return result;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
return result;" TargetEntityType="Directory_ReservedEmail" TargetExpression="C#:reservedEmail:
if (string.IsNullOrEmpty(reservedEmail.Value))
{
return null;
}
var result = reservedEmail.Value;
var index = result.IndexOf('@');
if(index >=0)
{
result = result.Substring(0, index);
}
return result;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
return result;" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
if (string.IsNullOrEmpty(record.Email))
{
return null;
}
var result = record.Email;
/*Delete Domain*/
var index = result.IndexOf('@');
if(index >= 0)
{
result = result.Substring(0, index);
}
var resources = queryHandler.Select<Directory_UserType>("select EmailSuffix");
foreach (var resource in resources.Where(r => r != null && r.EmailSuffix != null).OrderByDescending(r => r.EmailSuffix!.Length))
{
var foundIndex = result.IndexOf(resource.EmailSuffix!);
if (foundIndex >= 0)
{
    result = result.Substring(0, foundIndex);
    break;
}
}
return result;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Login" Binding="Workflow_Directory_User:Directory_User.Records.Login" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="70" Expression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" TargetEntityType="Directory_ReservedLogin" TargetExpression="C#:reservedLogin:
if (string.IsNullOrEmpty(reservedLogin.Value))
{
return null;
}
return reservedLogin.Value;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
if (string.IsNullOrEmpty(record.Login))
{
return null;
}
return record.Login;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_UserIdentifier" Binding="Workflow_Directory_User:Directory_User.Records.UserIdentifier" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="90" Expression="C#:record:
var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
var prefix = record.UserType?.UniqueIdentifierPrefix ?? "";
var suffix = record.UserType?.UniqueIdentifierSuffix;
return prefix + string.Format("{0:D5}", new Random().Next(min, max)) + suffix;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
return string.Format("{0:D5}", new Random().Next(min, max));" TargetEntityType="Directory_ReservedIdentifier" TargetExpression="C#:reservedIdentifier:
if (string.IsNullOrEmpty(reservedIdentifier.Value))
{
return null;
}
return reservedIdentifier.Value;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
return string.Format("{0:D5}", new Random().Next(min, max));" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
string? result = null;
var resources = queryHandler.Select<Directory_UserType>("select UniqueIdentifierRangeStart,UniqueIdentifierRangeEnd,UniqueIdentifierPrefix,UniqueIdentifierSuffix");
foreach (var resource in resources)
{
result = record.UserIdentifier;
if (result == null)
{
    continue;
}
var prefix = resource.UniqueIdentifierPrefix ?? "";
var suffix = resource.UniqueIdentifierSuffix;
if (!string.IsNullOrEmpty(prefix))
{
    if (!result.StartsWith(prefix))
    {
        continue;
    }
    result = result.Substring(prefix.Length);
}
if (!string.IsNullOrEmpty(suffix))
{
    if (!result.EndsWith(suffix))
    {
        continue;
    }
    result = result.Substring(0, result.Length - suffix.Length);
}
break;
}
return result;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractEndDate" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" Message_L1="The contract end date is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_FirstName" Binding="Workflow_Directory_User:Directory_User.Records.FirstName" Message_L1="The first name is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_LastName" Binding="Workflow_Directory_User:Directory_User.Records.LastName" Message_L1="The last name is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_UserType" Binding="Workflow_Directory_User:Directory_User.Records.UserType" Message_L1="The user type is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AddChangeAspect Identifier="Directory_User_AddChange_Identifier" Binding="Workflow_Directory_User:Directory_User.Identifier" ExpressionBinding="Workflow_Directory_User:Directory_User" Priority="89" Expression="C#:record:return record.Records != null && record.Records.Count > 0 ? record.Records[0].UserIdentifier : null;">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</AddChangeAspect>
<NotificationAspect Identifier="Directory_User_ManageContracts" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
<tr>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
    <!-- START CENTERED WHITE CONTAINER -->
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Usercube.</span>
    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
        <!-- START MAIN CONTENT AREA -->
        <tr>
        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hello,</p>
                <span style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">An update user request needs your attention.</span>
                <table class="workflow_summary" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 25px 0 0; width: 100%;">
                    <caption style="display: table-caption; font-weight: 600; text-transform: uppercase; text-align:left">Summary</caption>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@System.DateTime.Now.ToLocalTime().ToString("dd/MM/yyyy hh:mm", System.Globalization.CultureInfo.InvariantCulture)</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Full Name</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;"><a href="@(new System.Uri(Html.Context.ApplicationUri, $"resources/Directory_User/{@Model.Id}").AbsoluteUri)">@Model.MainRecord.FirstName @Model.MainRecord.LastName</a></span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">User Type</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.UserType.DisplayName</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract Start Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.ContractStartDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract End Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.ContractEndDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Department</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.Organization.DisplayName</span></td></tr>
</table>
                @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: sans-serif, 'Helvetica Neue', Helvetica, sans-serif;" })
                </td>
            </tr>
            </table>
        </td>
        </tr>
        <!-- END MAIN CONTENT AREA -->
    </table>
    <!-- START FOOTER -->
    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">This message was created by an automated workflow in Usercube. Do not reply.</span>
            </td>
        </tr>
        </table>
    </div>
    <!-- END FOOTER -->
    <!-- END CENTERED WHITE CONTAINER -->
    </div>
</td>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
</tr>
</table>
" CssFile="@media only screen and (max-width: 620px) {
table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
}
table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
}
table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
}
table[class=body] .content {
    padding: 0 !important;
}
table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
}
table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
}
table[class=body] .btn table {
    width: 100% !important;
}
table[class=body] .btn a {
    width: 100% !important;
}
table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
}
}
/* -------------------------------------
PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */
@media all {
.ExternalClass {
    width: 100%;
}
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
.apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
}
.btn-primary table td:hover {
    background-color: #34495e !important;
}
.btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
}
}
body {
background-color: #f6f6f6;
font-family: sans-serif;
-webkit-font-smoothing: antialiased;
font-size: 14px;
line-height: 1.4;
margin: 0;
padding: 0;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
">
<PointCut Activity="Directory_User_ManageContracts:Persist" ActivityState="Persist-Invoked" Mode="After" />
<Recipient Type="Profile" />
</NotificationAspect>
<NotificationAspect Identifier="Directory_User_New" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
<tr>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
    <!-- START CENTERED WHITE CONTAINER -->
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Usercube.</span>
    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
        <!-- START MAIN CONTENT AREA -->
        <tr>
        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hello,</p>
                <span style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">A new user request needs your attention.</span>
                <table class="workflow_summary" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 25px 0 0; width: 100%;">
                    <caption style="display: table-caption; font-weight: 600; text-transform: uppercase; text-align:left">Summary</caption>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@System.DateTime.Now.ToLocalTime().ToString("dd/MM/yyyy hh:mm", System.Globalization.CultureInfo.InvariantCulture)</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Full Name</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;"><a href="@(new System.Uri(Html.Context.ApplicationUri, $"resources/Directory_User/{@Model.Id}").AbsoluteUri)">@Model.Records.First().FirstName @Model.Records.First().LastName</a></span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">User Type</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().UserType.DisplayName</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract Start Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().ContractStartDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract End Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().ContractEndDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Department</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().Organization.DisplayName</span></td></tr>
</table>
                @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: sans-serif, 'Helvetica Neue', Helvetica, sans-serif;" })
                </td>
            </tr>
            </table>
        </td>
        </tr>
        <!-- END MAIN CONTENT AREA -->
    </table>
    <!-- START FOOTER -->
    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">This message was created by an automated workflow in Usercube. Do not reply.</span>
            </td>
        </tr>
        </table>
    </div>
    <!-- END FOOTER -->
    <!-- END CENTERED WHITE CONTAINER -->
    </div>
</td>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
</tr>
</table>
" CssFile="@media only screen and (max-width: 620px) {
table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
}
table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
}
table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
}
table[class=body] .content {
    padding: 0 !important;
}
table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
}
table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
}
table[class=body] .btn table {
    width: 100% !important;
}
table[class=body] .btn a {
    width: 100% !important;
}
table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
}
}
/* -------------------------------------
PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */
@media all {
.ExternalClass {
    width: 100%;
}
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
.apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
}
.btn-primary table td:hover {
    background-color: #34495e !important;
}
.btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
}
}
body {
background-color: #f6f6f6;
font-family: sans-serif;
-webkit-font-smoothing: antialiased;
font-size: 14px;
line-height: 1.4;
margin: 0;
padding: 0;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
">
<PointCut Activity="Directory_User_NewExternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
<Recipient Type="Profile" />
</NotificationAspect>
<ReportQuery Identifier="Workforce_Directory_ExternalUsers" DisplayName_L1="Workforce/Directory/External Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  uc.Identifier="External")" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_InternalUsers" DisplayName_L1="Workforce/Directory/Internal Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  uc.Identifier="Internal")" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_PlannedUserExists" DisplayName_L1="Workforce/Directory/Planned User Exits" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  ( uc.Identifier="External" and  ContractEndDate>"2022-05-31T00:00:00Z"))" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_Users" DisplayName_L1="Workforce/Directory/All Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where s.Identifier="P"" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_RoleModel_CompositeRoles" DisplayName_L1="Workforce/Role Model/Composite Roles" Query="join EntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="CompositeRole" />
<ReportQuery Identifier="Workforce_RoleModel_ResourceTypes" DisplayName_L1="Workforce/Role Model/Resource Types" Query="join SourceEntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="ResourceType" />
<ReportQuery Identifier="Workforce_RoleModel_SingleRoles" DisplayName_L1="Workforce/Role Model/Single Roles" Query="join EntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="SingleRole" />
<OptimizeDisplayTable Id="223" DisplayTableIdentifier="Directory_User" />
<BasketRulesControlRules Id="224" Profile="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" />
<BasketRulesControlRules Id="225" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" />
<BasketRulesControlRules Id="226" Profile="Workforce/Self/Self_ResourcesUpdate/Request" />
<BasketRulesControlRules Id="227" Profile="Workforce/Self/Self_ResourcesUpdate/Review" />
<BasketRulesControlRules Id="228" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
<BasketRulesControlRules Id="229" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" />
<BasketRulesControlRules Id="230" Profile="Workforce/Workflows/Directory_User_NewExternal/Request" />
<BasketRulesControlRules Id="231" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request" />
<BasketRulesControlRules Id="232" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request" />
<BasketRulesControlRules Id="233" Profile="HR" />
<BasketRulesControlRules Id="234" Profile="Helpdesk" />
<BasketRulesControlRules Id="235" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request" />
<BasketRulesControlRules Id="236" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request" />
<BasketRulesControlRules Id="237" Profile="Manager" />
<BasketRulesControlRules Id="238" Profile="Workforce/Workflows/Directory_User_NewInternal/Request" />
<BasketRulesControlRules Id="239" Profile="User" />
<BasketRulesControlRules Id="240" Profile="Workforce/Workflows/Directory_User_NewInternal/Review" />
<ConnectorMappings Id="241" Connector="Directory" EntityType="Directory_UserRecord" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="242" Connector="Directory" EntityType="Directory_UserType" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="243" Connector="Directory" EntityType="Directory_ExternalCompany" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="244" Connector="Directory" EntityType="Directory_Title" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="245" Connector="Directory" EntityType="Directory_ReservedEmail" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="246" Connector="Directory" EntityType="Directory_Subsidiary" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="247" Connector="Directory" EntityType="Directory_Region" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="248" Connector="Directory" EntityType="Directory_OrganizationType" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="249" Connector="Directory" EntityType="Directory_ReservedIdentifier" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="250" Connector="Directory" EntityType="Directory_Site" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="251" Connector="Directory" EntityType="Directory_Organization" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="252" Connector="Directory" EntityType="Directory_ReservedLogin" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="253" Connector="Directory" EntityType="Directory_PersonalTitle" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="254" Connector="Directory" EntityType="Directory_User" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="255" Connector="Directory" EntityType="Directory_JobCategory" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="256" Connector="Directory" EntityType="Directory_UserCategory" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="257" Connector="Directory" EntityType="Directory_Country" IsIncremental="true" Package="Usercube.Excel@0000001" />
<CreateAdministratorProfile Id="259" EntityType="Directory_User" />
<CreateUpdateDeleteAccessControlRules Id="260" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_Title/Administration" />
<CreateUpdateDeleteAccessControlRules Id="261" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_Country/Administration" />
<CreateUpdateDeleteAccessControlRules Id="264" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_ReservedLogin/Administration" />
<CreateUpdateDeleteAccessControlRules Id="267" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_OrganizationType/Administration" />
<CreateUpdateDeleteAccessControlRules Id="268" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_Organization/Administration" />
<CreateUpdateDeleteAccessControlRules Id="270" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_ReservedIdentifier/Administration" />
<CreateUpdateDeleteAccessControlRules Id="272" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_ExternalCompany/Administration" />
<CreateUpdateDeleteAccessControlRules Id="273" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_Site/Administration" />
<CreateUpdateDeleteAccessControlRules Id="275" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_Region/Administration" />
<CreateUpdateDeleteAccessControlRules Id="276" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_PersonalTitle/Administration" />
<CreateUpdateDeleteAccessControlRules Id="277" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_Subsidiary/Administration" />
<CreateUpdateDeleteAccessControlRules Id="278" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_ReservedEmail/Administration" />
<CreateUpdateDeleteAccessControlRules Id="279" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_UserCategory/Administration" />
<CreateUpdateDeleteAccessControlRules Id="281" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_UserType/Administration" />
<CreateUpdateDeleteTemplate Id="290" EntityType="Directory_UserType" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="291" EntityType="Directory_ReservedIdentifier" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="292" EntityType="Directory_ExternalCompany" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="293" EntityType="Directory_ReservedLogin" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="294" EntityType="Directory_UserCategory" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="295" EntityType="Directory_Title" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="296" EntityType="Directory_Subsidiary" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="297" EntityType="Directory_Region" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="298" EntityType="Directory_ReservedEmail" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="299" EntityType="Directory_OrganizationType" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="300" EntityType="Directory_Site" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="301" EntityType="Directory_PersonalTitle" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="302" EntityType="Directory_Organization" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="303" EntityType="Directory_JobCategory" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="304" EntityType="Directory_Country" Profile="Administrator" />
<ManageAccounts Id="371" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ManageAccounts" />
<ManageAccounts Id="149" EntityType="Directory_User" Profile="Administrator" />
<ManageAccounts Id="372" EntityType="Directory_User" Profile="Helpdesk" />
<ReconciliateResourcesAccessControlRules Id="373" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReconciliateResources" />
<ReconciliateResourcesAccessControlRules Id="374" EntityType="Directory_User" Profile="Helpdesk" />
<ReconciliateRolesAccessControlRules Id="375" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReconciliateRoles" />
<ReconciliateRolesAccessControlRules Id="376" EntityType="Directory_User" Profile="Helpdesk" />
<ReviewProvisioningAccessControlRules Id="377" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReviewProvisioning" />
<ReviewProvisioningAccessControlRules Id="378" EntityType="Directory_User" Profile="Helpdesk" />
<ReviewRolesAccessControlRules Id="379" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReviewRoles" />
<ReviewRolesAccessControlRules Id="380" EntityType="Directory_User" Profile="Helpdesk" />
<ViewTemplate Id="423" EntityType="Directory_UserRecord" Profile="Administrator" />
<ViewTemplate Id="424" EntityType="Directory_PresenceState" Profile="Administrator" />
<ViewTemplate Id="425" EntityType="Directory_User" Profile="Administrator" />
<WorkflowAccessControlRules Id="426" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Review" />
<WorkflowAccessControlRules Id="427" EntityType="Workflow_Directory_User" Profile="HR" />
<WorkflowAccessControlRules Id="428" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Review" />
<WorkflowAccessControlRules Id="429" EntityType="Workflow_Directory_User" Profile="Administrator" />
<WorkflowAccessControlRules Id="430" EntityType="Workflow_Directory_User" Profile="Manager" />
<WorkflowEntityTypeDisplayTable Id="431" EntityType="Directory_User" />
<WorkflowEntityTypeSearchBar Id="432" EntityType="Directory_User" />
<WorkflowEntityType Id="434" EntityType="Directory_User" />
<WorkflowOverviewControlRules Id="443" EntityType="Directory_User" Profile="HR" />
<WorkflowOverviewControlRules Id="444" EntityType="Directory_User" Profile="Manager" />
<WorkflowOverviewControlRules Id="445" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ViewWorkflowOverview" />
<WorkflowOverviewControlRules Id="446" EntityType="Directory_User" Profile="Helpdesk" />

```
