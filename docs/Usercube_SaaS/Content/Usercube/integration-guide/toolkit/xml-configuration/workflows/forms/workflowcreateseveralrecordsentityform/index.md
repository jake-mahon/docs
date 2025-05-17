---
sidebar_position: 185
title: WorkflowCreateSeveralRecordsEntityForm
---

# WorkflowCreateSeveralRecordsEntityForm

Displays a form to create a new resource with one or several records.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
  
  
With the following form for the resource's data:  
  
      
      
      
      
  
  
And with the following form for the data shared with all records:  
  
      
          
          
          
          
          
          
          
          
      
  
  
And with the following form for the data specific to each record:  
  
      
          
          
      
  
      
          
          
          
          
          
          
      
  
      
          
          
          
          
          
          
          
      
  

```
The contents of `MainControl`, `RecordControl` and `RecordUniqueItemControl` are visible during the workflow's execution:

![Form Example - New User from Helpdesk](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowCreateSeveralRecordsEntityForm_V603.png)

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: RecordControl | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields to collect data specific to each record. |