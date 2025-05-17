---
sidebar_position: 6934
title: Customization Reports
---

# Customization Reports

Flashlight provides a set of useful reports to help you ensure that your account customizations follow NetSuite best practices. It is recommended to regular review these reports and take corrective action so that your customizations are aligned with NetSuite best practices.

The following reports can be accessed from Flashlight main menu under the **Customizations** menu:

* [Customizations with Poor Script Ids](#Customizations_with_Poor_Scriptids)
* [Customizations with Missing Descriptions](#Customizations_with_Missing_Description)
* [Customizations with Missing Active Owner](#Customizations_with_Missing_Active_Owner)
* [Fields with Missing Help](#Fields_with_Missing_Help)
* [Deleted Customizations](#Deleted_Customizations)

## Customizations with Poor Script Ids

It is a best practice to use Script IDs that are unique, short, and descriptive. Users often set Script IDs that do follow these best practices, or they do not set any Script IDs which causes NetSuite to apply a default value.

This report provides a list of all customizations in the system that have Script IDs not aligned with NetSuite's best practices.

![](../../../../static/images/StrongpointNetSuiteFlashlight/Content/Resources/Images/PoorScriptIds_800x284.png "Customizations with Poor Script IDs")

To correct this issue on a specific customization record:

1. Click **Edit** for the customization to fix.
2. Enter an appropriate **SCRIPTID** .
3. Click **Save**

## Customizations with Missing Descriptions

Each object in NetSuite should have a Description that explains what the object is and how it is used in the system. This report provides a list of all customizations in your account that have no description.

![](../../../../static/images/StrongpointNetSuiteFlashlight/Content/Resources/Images/MissingDescriptions_800x339.png "Customizations with Missing Descriptions")

To correct this issue on a specific customization record:

1. Click **Edit** for the customization to fix.
2. Enter an appropriate **DESCRIPTION**
3. Click **Save**

## Customizations with Missing Active Owners

It is very common for a record owner to be inactive in the system due to employees departing from the organization. If an inactive employee is the owner of a field or record in the system, it could be harmful for your account. This report displays a list of all customizations in the system that currently have inactive employees as owners.

![](../../../../static/images/StrongpointNetSuiteFlashlight/Content/Resources/Images/ActiveOwners_800x314.png "Customizations with Missing Active Owner")

To correct this issue on a specific customization record:

1. Click **Go To Record**  to open the actual record in NetSuite.
2. Click **Edit**
3. Select a new **Owner**
4. Click **Save**

## Fields with Missing Help

It is a best practice to include help text on your fields so that your employees can better understand what the field does and how to use it. This report displays a list of all the fields in the system that are missing help text.

![](../../../../static/images/StrongpointNetSuiteFlashlight/Content/Resources/Images/MissingHelp_800x316.png "Customizations with Missing Help")

To correct this issue on a specific customization record:

1. Click **Go To Record**  to open the actual record in NetSuite.
2. Click **Edit**
3. Update the help.
4. Click **Save**

## Deleted Customizations

This report displays a list of all customizations in your account that were deleted. This enables you to easily spot undesired removals and resolve them quickly.

![](../../../../static/images/StrongpointNetSuiteFlashlight/Content/Resources/Images/DeletedCustos_800x309.png "Deleted Customizations")