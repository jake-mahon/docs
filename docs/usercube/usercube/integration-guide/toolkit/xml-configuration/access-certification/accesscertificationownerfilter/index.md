# AccessCertificationOwnerFilter

When running an Access Certification Campaign, this object defines the scope of assignments of entitlements to certify for a given Access Certification Campaign. It filters based on the attributes of entitlements owner.

## Properties

| Property | Details |
| --- | --- |
| Campaign   required | __Type__    Int64   __Description__   The associated campaign. |
| D0   optional | __Type__    Int64   __Description__   Identifier of the dimension 0 (up to 3V in the [ Base32 Parameter Names ](../../../parameter-names/index.md)) that filters the owners targeted by the access certification campaign. |
| IndividualOwner   optional | __Type__    Int64   __Description__   If set, filters on the owner. |
| L0   default value: false | __Type__    Boolean   __Description__   ```true``` to include all the hierarchy beneath the dimension 0.   __Note:__ this setting can be used only if the corresponding [ Dimension ](../../metadata/dimension/index.md) was declared with ```IsHierarchical``` set to ```true``` and with a ```ParentProperty```. |
| MinimalRiskScore   optional | __Type__    Int32   __Description__   If set, filters only owners above given risk. |
| OwnerLastModificationDate   optional | __Type__    DateTime   __Description__   Date such that the identities to be certified will be those for which the value of the ```OwnerLastModificationDateBinding``` property was modified since then.   __Note:__ must be set together with ```OwnerLastModificationDateBinding```. |
| OwnerLastModificationDateBinding   optional | __Type__    Int64   __Description__   Binding of the property whose owner will be part of the campaign's targets, if the property's value was modified since ```OwnerLastModificationDate```.   __Note:__ must be set together with ```OwnerLastModificationDate```.   __Note:__ the properties calculated by Identity Manager cannot be used. |
| TargetedRisk   optional | __Type__    Int64   __Description__   If set, filters on the owner risk. |
