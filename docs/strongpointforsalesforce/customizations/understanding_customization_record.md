# Understanding the Customization Record

This topic discusses the new Platform Governance for Salesforce Lightning customization record. It is only available with the Platform Governance for Salesforce Lightning app. Refer to the topic [Old Customization Record](/docs/strongpointforsalesforce/customizations/old_customization_record.md) for the old style customization record.

__NOTE:__ For installed orgs, users must load the Strongpoint Home Page first before opening the __Customization__ tab for the first time after the 6.0 update. The new form assignment happens in the background for the Strongpoint Home page.

The customization detail contains general information about the customization record. The customization name appears in the banner with function buttons:

- __Rescan__: runs the scanner on the record. You are prompted to refresh the page.
- __Go To Record__: loads the customization record for editing or to view additional details.
- __Set Policy__: accesses the inherit policy form for the customization.

Customization record fields include:

- __Owner ID__: Link to the current owner.
- __Description__: Details added to the record. Click __Update Description and Help Text__ to update.
- __Salesforce Type__: Customization type.
- __API Name:__ APIs associated with the record.
- __Help Text__: Helpful information detailing function and use of each customization. Click __Update Description and Help Text__ to update.
- __Related Objects__: Links to related objects.

![Strongpoint Lightning Customization Record](/img/product_docs/strongpointforsalesforce/customizations/customization_record_lightning.webp)

## Customization Record Tabs

These are the tabs inside a customization record:

> Metadata
>
> Custom
>
> DRD
>
> Change Enablement
>
> Clean Up
>
> Related Lists

### Metadata

The Metadata tab provides the metadata information about the customization, including:

- __Customization Name__: name of the customization.
- __Salesforce Type__: Salesforce type of the custom field.
- __Customization Created By__: user who created the customization.
- __Customization Last Modified By__: user who last modified the customization.
- __Package__: indicates the package (if any) of the customization.
- __Active__: indicates whether the customization is a active.
- __Manageable State__: the current state if it is from a managed/unmanaged package.
- __Customization Created Date__: date the customization was created.
- __Customization Last Modified Date__: last date the customization was modified.

### Custom

The __Custom__ tab shows the join, scanner and DLU dates.

- __Last Scanner Date__: last date in which the scanner ran and evaluated the current customization.
- __Make Join Date__: date customization was last passed to Make Join script.
- __Date Last Used__: date the customization was last used. Refer to [DLU](/docs/strongpointforsalesforce/clean_up/date_last_used.md) for more information.

### DRD

The Dependency Relationship Diagram ([DRD](/docs/strongpointforsalesforce/tools/viewing_drd.md)) displays objects, customizations and their relationships and dependencies.

![DRD Example](/img/product_docs/strongpointforsalesforce/customizations/drd.webp)

### Change Enablement

The Change Enablement tab accesses the policy and data tacking settings, and the add to change request feature.

- __Change/Approval Policy__: This field designates the approval policy related to a customization.
- __Add to Change Request__: Lookup tool to associate the clean up to an existing change request.
- Data Change Tracking: tracking status.  
  __Not Tracked__: changes in data records are not tracked.  
  __Tracked, Blocking__: changes in data records are blocked if there is no approved Change Request.  
  __Tracked, Non-Blocking__: changes in data records are logged.

### Clean Up

The Clean Up tab provides information customization clean up:

- __Clean Up Status__: This is the clean-up status of customizations that are to be deleted.
- __Clean-up Classification__: This field shows an overview of the clean-up classification.

### Related Lists

Links to related lists: Change Logs, Notes & Attachments and Customization History.
