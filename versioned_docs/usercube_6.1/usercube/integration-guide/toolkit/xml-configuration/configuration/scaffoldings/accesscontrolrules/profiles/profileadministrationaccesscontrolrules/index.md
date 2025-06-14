# ProfileAdministrationAccessControlRules

Gives to a given profile the rights to create, update and delete profiles.

Profiles are listed on the __Profiles__ screen, from __Settings__ in the __Configuration__ section.

![Settings](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/user-profile-configuration/home_settings_v523.png)

![Profiles](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/profiles/profileadministrationaccesscontrolrules/accesscontrol_profiles_v603.png)

[See more details on profiles' APIs](/versioned_docs/usercube_6.1/usercube/integration-guide/api/server/accesscontrol/index.md).

## Examples

The following example gives to the ```Administrator``` profile the rights to create, update and delete profiles.

```

  <ProfileAdministrationAccessControlRules Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Profile_AccessControl_Profile" DisplayName_L1="Administrator - Profile Configuration" DisplayName_L2="Administrator - Configuration des profils" EntityType="Profile" Profile="Administrator">  <Entry CanExecute="true" Permission="/AccessControl/Profile/Create" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Delete" />  <Entry CanExecute="true" Permission="/AccessControl/Profile/Update" /></AccessControlRule>

```
