---
sidebar_position: 838
title: Workflow Add Record Entity Form
---

# Workflow Add Record Entity Form

Displays a form to add a new record for an existing resource, by duplicating and adjusting an existing record.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
  
  
With the following form for the resource data's content and summary:  
  
      
      
  
  
And with the following form for the record data's content and summary:  
  
      
          
          
      
      
          
          
          
          
      
  
  
And with the following form for the data that groups records together:  
  
      
  

```
The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Computer Request](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowAddRecordEntityForm_V603.png)

:::note
The content of RecordUniqueItemControl is not visible. The user's records that have the same values for all the properties in RecordUniqueItemControl will be displayed, and potentially modified, as one.
:::

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution:

![Summary Form Example - Computer Request](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowAddRecordEntityForm_summary_V603.png)

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl | Set of fields to sum up the data collected by `MainControl` after the workflow's execution. |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |