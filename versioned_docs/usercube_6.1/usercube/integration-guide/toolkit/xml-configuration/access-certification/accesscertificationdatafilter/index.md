# AccessCertificationDataFilter

When running an Access Certification Campaign, this object defines the scope of assignments of entitlements to certify for a given Access Certification Campaign. It filters based on the specific entitlements attributes.

## Properties

| Property | Details |
| --- | --- |
| Campaign   required | __Type__    Int64   __Description__   The associated campaign. |
| Category   optional | __Type__    Int64   __Description__   Specifies the category targeted by the filter. |
| IncludeCompositeRoles   default value: false | __Type__    Boolean   __Description__   ```true``` to include the composite roles in the certification. |
| IncludeDeniedPermissions   default value: true | __Type__    Boolean   __Description__   Filters items with denied permissions from Access Certification Campaign. |
| IncludeDoubleValidation   default value: true | __Type__    Boolean   __Description__   ```true``` to include the assignments of entitlements with two validations in the certification. |
| IncludeManualAssignmentNotAllowed   default value: true | __Type__    Boolean   __Description__   ```true``` to include in the certification the resources that cannot be requested manually, i.e. those from [resource types](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) with ```ApprovalWorkflowType``` set to ```ManualAssignmentNotAllowed```. |
| IncludeNestedCategories   default value: false | __Type__    Boolean   __Description__   When a category is used as filter, all its nested categories are also included in the campaign. |
| IncludeNoValidation   default value: true | __Type__    Boolean   __Description__   ```true``` to include the assignments of entitlements without validation in the certification. |
| IncludeResourceNavigations   default value: false | __Type__    Boolean   __Description__   ```true``` to include the resource navigations in the certification. |
| IncludeResourceScalars   default value: false | __Type__    Boolean   __Description__   ```true``` to include the resource scalars in the certification. |
| IncludeResourceTypes   default value: false | __Type__    Boolean   __Description__   ```true``` to include the resource types in the certification. |
| IncludeSimpleValidation   default value: true | __Type__    Boolean   __Description__   ```true``` to include the assignments of entitlements with one validation in the certification. |
| IncludeSingleRoles   default value: false | __Type__    Boolean   __Description__   ```true``` to include the single roles in the certification. |
| IncludeTripleValidation   default value: true | __Type__    Boolean   __Description__   ```true``` to include the assignments of entitlements with three validations in the certification. |
| IncludeWorkflowStateApproved   default value: true | __Type__    Boolean   __Description__   ```true``` to include the manually approved assignments of entitlements in the certification. |
| IncludeWorkflowStateFound   default value: true | __Type__    Boolean   __Description__   ```true``` to include the reconciled assignments of entitlements in the certification. |
| IncludeWorkflowStateHistory   default value: true | __Type__    Boolean   __Description__   ```true``` to include the preexisting approved assignments of entitlements in the certification. |
| IncludeWorkflowStatePolicyApproved   default value: true | __Type__    Boolean   __Description__   ```true``` to include the automatically approved assignments of entitlements in the certification. |
| LatestCertifiedLimitDate   optional | __Type__    DateTime   __Description__   If specified, only assignments of entitlements not certified since. |
| ResourceType   optional | __Type__    Int64   __Description__   Specifies the resource type targeted by the filter. |
| Tags   optional | __Type__    String   __Description__   Tags of the roles targeted by the campaign filter. The tag separator is ```�```. |
| TargetedRisk   optional | __Type__    Int64   __Description__   If set, filters on the owner risk. |
