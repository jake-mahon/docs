---
sidebar_position: 842
title: Workflow Update Record Entities Form
---

# Workflow Update Record Entities Form

Displays a form to update data for several resources simultaneously.

## Examples

The following example is a form to update users' positions in bulk.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
  
  
With the following form for the workflow's content and summary about resource data:  
  
      
  
  
And with the following form for the workflow's content and summary about record data:  
  
          
      
          
          
          
          
          
          
          
      
  
  
And with the following form for the data that groups records together:  
  
      
  

```
The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Mass Update](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowUpdateRecordEntitiesForm_V603.png)

:::note
The content of RecordUniqueItemControl is not visible. The user's records that have the same values for all the properties in RecordUniqueItemControl will be modified as one.
:::

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution:

## Properties

| Property | Details |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl | Set of fields to sum up the data collected by `MainControl` after the workflow's execution. |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |