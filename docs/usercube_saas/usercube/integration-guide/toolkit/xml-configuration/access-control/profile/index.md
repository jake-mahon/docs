# Profile

Profile defines a user profile linked to permissions in Identity Manager. Profiles work with Access Control Rule and Profile Rule to describe who can do what.

## Examples

```

<Profile Identifier="Administrator" DisplayName_L1="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   optional | __Type__    String   __Description__   Display name of the profile in language 1 (up to 16). |
| Identifier   required | __Type__    String   __Description__   Profile identifier |
| IsComponent   default value: false | __Type__    Boolean   __Description__   If true, assess the profile as being a component profile. That means it can be used to build a new profile through the composite profile method. |
