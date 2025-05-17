---
sidebar_position: 190
title: WorkflowUpdateRecordEntityForm
---

# WorkflowUpdateRecordEntityForm

Displays a form to select an existing record and update it.

## Examples

The following example is a form to update a user's record from helpdesk:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
    
    
    
    
    
  
  
With the following form for the resource's data and summary:  
  
    
    
  
  
And with the following form for the data shared with all records and for the summary:  
  
    
      
        
        
      
      
      
      
      
        
        
      
      
      
      
    
  
    
      
      
      
      
      
    
  
    
      
      
      
      
      
      
      
    
  
  
And with the following form for the data that groups records together:  
  
    
  

```
**NOTE:** `WorkflowUpdateRecordEntity` used in config Delete mode (`IsDelete=True`) will delete systematically the main resource and all the associated records.

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Data](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowUpdateRecordEntityForm_V603.png)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution:

![Summary Form Example - Update Data](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowUpdateRecordEntityForm_summary_V603.png)

## Properties

| Property | Details |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl | Set of fields to sum up the data collected by `MainControl` after the workflow's execution. |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |