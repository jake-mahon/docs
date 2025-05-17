---
sidebar_position: 186
title: WorkflowAddandEndRecordEntityForm
---

# WorkflowAddandEndRecordEntityForm

Displays a form to define the end date of an existing record, and replace it with a new record at said date, by duplicating and adjusting the old record.

## Examples

The following example is a form to update a position.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
  
  
With the following form for the resource data's content and summary:  
  
      
      
  
  
And with the following form for the record data's content and summary, and for the data that groups records together:  
  
      
          
          
      
      
          
          
          
          
      
  

```
The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Position](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowAddAndEndRecordEntityForm_V603.png)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution:

![Summary Form Example - Update Position](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowAddAndEndRecordEntityForm_summary_V603.png)

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl | Set of fields to sum up the data collected by `MainControl` after the workflow's execution. |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |