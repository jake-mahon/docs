---
sidebar_position: 841
title: Workflow Update Several Records Entity Form
---

# Workflow Update Several Records Entity Form

Displays a form to create, update or delete one or several records.

## Examples

The following example is a form to create, update and/or delete one or several positions for a given user.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
  
  
With the following form for the resource's data:  
  
      
      
  
  
And with the following form for the data shared with all records:  
  
      
      
      
      
      
  
  
And with the following form for the data used to update existing records:  
  
      
          
          
          
          
          
          
          
      
  
  
And with the following form for the data used to add new records:  
  
      
          
          
          
          
          
          
          
          
      
  
  
And with the following form for the data that groups records together:  
  
      
  

```
The contents of `MainControl`, `RecordControl`, `RecordSlaveUniqueItemControl` and `RecordSlaveControl` are visible during the workflow's execution:

![Form Example - Manage a User's Positions](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowUpdateSeveralRecordsEntityForm_V603.png)

When adding a new position, we decide to make `Title` available, in addition to the fields used to update existing records:

![Form Example - Manage a User's Positions - New Record](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowUpdateSeveralRecordsEntityForm_newRecord_V603.png)

:::note
The content of RecordUniqueItemControl is not visible. The user's records that have the same values for all the properties in RecordUniqueItemControl will be displayed, and potentially modified, as one.
:::

## Properties

| Property | Details |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data when adding new records. |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: RecordSlaveUniqueItemControl | Set of fields to collect the data shared with all the resource's records, for example contract information when managing positions. |
| Child Element: RecordSlaveControl | Set of fields to collect data when updating existing records. |