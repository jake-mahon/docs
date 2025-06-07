# Opportunistic Clearance

Many non-compliant change logs are generated due to one or more related objects not being included in a Change Request. You can set up to automatically clear low risk non-compliant changes that meet specific criteria. By default, opportunistic clearance is not enabled. To enable it:

1. Open __Strongpoint__ > __Strongpoint____Support__ >__Installation Settings__
2. Click __Edit__ to open __Configuration and Stats__.
3. Select the __Change Management__ tab.
4. Select __Enable Opportunistic Clearance__.

Automatic clearance applies in these cases:

- Deployment or Library Script changes related to an Approved Script Change.
- Field changes related to an Approved Record Change.
- Record changes related to an Approved Field Change.
- Search changes related to an Approved Workflow Change.
- Help or Description text updates. These changes are always compliant. This object change is reported in the Change Log as __Documentation Change__ for the __Change Type__ and the __Resolution__ set to _Automatically cleared documentation change. Only Help or Description changed_. The Change Log is closed.

### Deployment or Library Script Changes related to an Approved Script Change

Deployment or library script changes must meet these rules to be automatically cleared:

- Customization is a deployment or library script with one of the following:
  - Script has an Open Approved Change Request.
  - Main script has an Open Approved Change Request.
- Change Request __Stage__ meets the required [Policy Change Level](/docs/product_docs/strongpointfornetsuite/change_management/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The __Resolution Description__ in the Change Log is set to __Automatically cleared in existing Open Approved CR via related customization [___Object Name_ __(___ScriptID___)]__. The _Object Name_ and _ScriptID_ are inserted from the original Change Request. The deployment or library script does not need to be present in any Open Approved Change Request. [Example Script Use Case](/docs/product_docs/strongpointfornetsuite/change_management/example_deploy_script_related_approved_change.md)

### Field Changes related to an Approved Record Change

Field changes must meet these rules to be automatically cleared:

- Customization is a field with one of the following:
  - Field has an Open Approved Change Request
  - Field has no script or workflow dependencies and the parent record has an Open Approved Change Request.
- Change Request __Stage__ meets the required [Policy Change Level](/docs/product_docs/strongpointfornetsuite/change_management/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The __Resolution Description__ in the Change Log is set to __Automatically cleared in existing Open Approved CR via related customization [___Field Name___]__. The _Field Name_ is inserted from the original Change Request. The field does not need to be present in any Open Approved Change Request. [Example Field Change Use Case](/docs/product_docs/strongpointfornetsuite/change_management/example_field_changes_related_approved_change.md)

### Record Changes related to an Approved Field Change

Record changes must meet these rules to be automatically cleared:

- Customization is a record with one of the following:
  - Record has an Open Approved Change Request
  - Record has no script __or__ workflow dependencies and any field that has the record as a parent has an Open Approved Change Request.
- Change Request __Stage__ meets the required [Policy Change Level](/docs/product_docs/strongpointfornetsuite/change_management/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The __Resolution Description__ in the Change Log is set to __Automatically cleared in existing Open Approved CR via related customization [___Record Name___]__. The _Record Name_ is inserted from the original Change Request. The record does not need to be present in any Open Approved Change Request. [Example Record Change Use Case](/docs/product_docs/strongpointfornetsuite/change_management/example_record_changes_related_approved_change.md)

### Search Changes related to an Approved Workflow Change

Approved Workflow changes must meet these rules to be automatically cleared:

- Customization is a search with an Open Approved Change Request, or __all__ of the following:
  - Search is used in a workflow.
  - Search is not used by any script.
  - Related Workflow has an Open Approved Change Request.
- Change Request __Stage__ meets the required [Policy Change Level](/docs/product_docs/strongpointfornetsuite/change_management/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The __Resolution Description__ in the Change Log is set to __Automatically cleared in existing Open Approved CR via related customization__ __[___Search Name___]__. The _Search Name_ is inserted from the original Change Request.The search does not need to be present in any Open Approved Change Request.[ Example Search Change Use Case](/docs/product_docs/strongpointfornetsuite/change_management/example_search_changes_related_approved_change.md)
