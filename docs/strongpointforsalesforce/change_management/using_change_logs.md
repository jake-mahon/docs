# Using Change Logs

Change Logs allow you to see the type of change, who made the change and view the system notes of the Salesforce record. Change Logs are accessed from the __Change Logs__ tab or through [Change Enablement Reports](/docs/product_docs/strongpointforsalesforce/change_management/change_management_reports.md).

1. Expand the __Change Logs__ tab.
2. Change the __Recently Viewed__ pinned list to show the types of Change Logs to view. For example__, Data tracking Changes__ or __Profile and PermissionSet__ changes. The __Details__ and __Diff Summary__ differ slightly depending on the selected __Metadata Type__.
3. Click a __Change Log Name__ to open it.

You can also open Change Logs from __Netwrix Dashboard__ > __Reports__ > __Change Enablement__. Select a report, such as __What Changed__ to see a list of Change Logs.

![changelog-1](/static/img/product_docs/strongpointfornetsuite/change_management/changelog-1.png)

Here is an example change log for a __Profile__ Metadata type.

![changelog_details](/static/img/product_docs/strongpointforsalesforce/change_management/changelog_details.png)

## Details Tab

> __Actual Change Date__: Date the Customization was last modified.
>
> __Customization Created By__: User who created the customization.
>
> __Customization Modified By__: User who last modified the customization.
>
> __Customization__: Linked Customization(s) that have changed.
>
> __Metadata Type__: Salesforce metatdata type of the Customization.
>
> __Field Name__: Name of the changed field.
>
> __Active__: Checked if the Customization is active.
>
> __New Customization__: Checked if new customization.
>
> __Package__: Name of the Managed Package if the customizations belong to a managed package.
>
> __Operation__: Flag this field if a change or a new record is created.
>
> __Change Overview__: Overview of the change.
>
> __Data Record Id__: ID of the data record changed. This field is not in all Metadata Types.
>
> __Data Record Name__: Name of the data record changed. This field is not in all Metadata Types.
>
> __Data Record SObject API__: API name of the parent SObject of the data record changed. This field is not in all Metadata Types.
>
> __Related Change Request__: Change request related to the change or used to perform regression analysis of a non-compliant change.
>
> __Compliant Indicator__: Green flag indicates compliant, red flag indicates non-compliant.
>
> __Non-Compliant__: Checked if the change is non-compliant.
>
> __Compliance__: The change status: __Compliant__ or __Non-compliant__.
>
> __Policy__: Policies associated with the Change Log.
>
> __Reason__: Name of the policy violated by the change.
>
> __Filters__: List of filters satisfied for the data record change. If blank, no filters specified. This field is not in all Metadata Types.
>
> __Parent Change Log__: Name of the parent change log if applicable.
>
> __Resolution Description__: Description of any steps taken to bring the change back into compliance. This field is not in all Metadata Types.
>
> __Short Resolution Description__: Summary description of any steps taken to bring the change back into compliance.
>
> __Status__: Current state of the Change Log. This field is manually set.

### Diff Summary

The __Diff Summary__ section displays the differences in the objects that occurred in the change. There is an __Export to PDF__ option.

Example Diff Summary for a Data tracking Change Log:

![Diff Summary for data tracking](/static/img/product_docs/strongpointforsalesforce/change_management/diffsummary_data.png)

Example Diff Summary for a Profile metadata type Change Log:

![Change Log Diff Summary](/static/img/product_docs/strongpointforsalesforce/change_management/changelog_diff.png)

### Values

The __Values__ section displays the __New Value__ and __Old Value__ of each field after the update. The __Created By__ and __Last Modified By__ users and dates are displayed at the end of the list.

![changelog_values](/static/img/product_docs/strongpointforsalesforce/change_management/changelog_values.png)

### Audit

The __Audit__ section displays all fields related to an audit. Click the edit icon to edit the record.

> __Sampled For Audit__: Select __None__, __Internal__ or __External__.
>
> __Audited By__: Auditor selects their user name from the list.
>
> __Internal Audit Comments__: Internal notes added by the Auditor.
>
> __Internal Audit Status__: Select __None__, __Approved__, __Rejected__ or __Under Investigation__.
>
> __Last Internal Audit__: User who made the last change in the Internal Audit fields.
>
> __External Audit Comments__: External notes added by the Auditor.
>
> __External Audit Status__: Select __None__, __Approved__, __Rejected__ or __Under Investigation__.
>
> __Last External Audit__: User who made the last change in the External Audit fields.

## Related Tab

### Change Log History

__Change Log History__ displays the latest history entries by __Date__. The changed __Field__, __User__ making the change, __Original Value__ and __New Value__ are displayed. If there is a __+__ sign by the number in __Change Log History__ header, click __View All__ to see the complete history.

### Notes & Attachments

__Notes & Attachments__ contains uploaded files. Click on a file name to open it. Click __Upload Files__ to add additional files. If there is a __+__ sign by the number in the __Notes & Attachments__ header, click __View All__ to see the complete file list.
