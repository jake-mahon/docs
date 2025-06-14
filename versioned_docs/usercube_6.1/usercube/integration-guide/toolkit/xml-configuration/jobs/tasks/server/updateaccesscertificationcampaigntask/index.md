# UpdateAccessCertificationCampaignTask

Starts or stops the access certification campaigns according to their ```StartDate``` and ```EndDate```. The task also computes the Access Certification Items to certify (applying [Access Certification Data Filter](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter/index.md) and [Access Certification Owner Filter](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationownerfilter/index.md)), and fill the database with them.

## Examples

```

  <<UpdateAccessCertificationCampaignTask Identifier="UpdateAccessCertificationCampaign" DisplayName_L1="Starts/Stops access certification campaigns"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
