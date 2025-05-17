---
sidebar_position: 2828
title: Understanding the Customization Record
---

# Understanding the Customization Record

This topic discusses the new Platform Governance for Salesforce Lightning customization record. It is only available with the Platform Governance for Salesforce Lightning app. Refer to the topic [Old Customization Record](old_customization_record "Old Customization Record") for the old style customization record.

**NOTE:** For installed orgs, users must load the Strongpoint Home Page first before opening the **Customization** tab for the first time after the 6.0 update. The new form assignment happens in the background for the Strongpoint Home page.

The customization detail contains general information about the customization record. The customization name appears in the banner with function buttons:

* **Rescan**: runs the scanner on the record. You are prompted to refresh the page.
* **Go To Record**: loads the customization record for editing or to view additional details.
* **Set Policy**: accesses the inherit policy form for the customization.

Customization record fields include:

* **Owner ID**: Link to the current owner.
* **Description**: Details added to the record. Click **Update Description and Help Text** to update.
* **Salesforce Type**: Customization type.
* **API Name:** APIs associated with the record.
* **Help Text**: Helpful information detailing function and use of each customization. Click **Update Description and Help Text** to update.
* **Related Objects**: Links to related objects.

![](../../../../static/images/enus 2/Content/Resources/Images/customization_record_lightning.png "Strongpoint Lightning Customization Record")

## Customization Record Tabs

These are the tabs inside a customization record:

> [Metadata](#Metadata)
>
> [Custom](#Custom "Custom")
>
> [DRD](#DRD)
>
> [Change Enablement](#Change "Change Enablement")
>
> [Clean Up](#Clean "Clean Up")
>
> [Related Lists](#Related)

### Metadata

The Metadata tab provides the metadata information about the customization, including:

* **Customization Name**: name of the customization.
* **Salesforce Type**: Salesforce type of the custom field.
* **Customization Created By**: user who created the customization.
* **Customization Last Modified By**: user who last modified the customization.
* **Package**: indicates the package (if any) of the customization.
* **Active**: indicates whether the customization is a active.
* **Manageable State**: the current state if it is from a managed/unmanaged package.
* **Customization Created Date**: date the customization was created.
* **Customization Last Modified Date**: last date the customization was modified.

### Custom

The **Custom** tab shows the join, scanner and DLU dates.

* **Last Scanner Date**: last date in which the scanner ran and evaluated the current customization.
* **Make Join Date**: date customization was last passed to Make Join script.
* **Date Last Used**: date the customization was last used. Refer to [DLU](../clean_up/date_last_used "Open Date Last Used topic") for more information.

### DRD

The Dependency Relationship Diagram ([DRD](../tools/viewing_drd "Open DRD topic")) displays objects, customizations and their relationships and dependencies.

![](../../../../static/images/enus 2/Content/Resources/Images/drd.png "DRD Example")

### Change Enablement

The Change Enablement tab accesses the policy and data tacking settings, and the add to change request feature.

* **Change/Approval Policy**: This field designates the approval policy related to a customization.
* **Add to Change Request**: Lookup tool to associate the clean up to an existing change request.
* Data Change Tracking: tracking status.  
  **Not Tracked**: changes in data records are not tracked.  
  **Tracked, Blocking**: changes in data records are blocked if there is no approved Change Request.  
  **Tracked, Non-Blocking**: changes in data records are logged.

### Clean Up

The Clean Up tab provides information customization clean up:

* **Clean Up Status**: This is the clean-up status of customizations that are to be deleted.
* **Clean-up Classification**: This field shows an overview of the clean-up classification.

### Related Lists

Links to related lists: Change Logs, Notes & Attachments and Customization History.