---
sidebar_position: 189
title: WorkflowCreateRecordEntityForm
---

# WorkflowCreateRecordEntityForm

Displays a form to create a new resource with a record.

## Examples

The following example is a form to create a new user from HR.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
  
  
With the following form for the workflow's content and summary about resource data:  
  
      
          
      
  
  
And with the following form for the workflow's content about record data:  
  
      
      
      
      
      
  
      
      
      
      
  
  
And with the following form for the workflow's summary on record data:  
  
      
          
          
          
          
          
      
  

```
The content of `MainControl` is visible during the workflow's execution:

![Form Example - New User from HR](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowCreateRecordEntityForm_V603.png)

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's execution.

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: MainSummaryControl | Set of fields to sum up the data collected by `MainControl` after the workflow's execution. |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |