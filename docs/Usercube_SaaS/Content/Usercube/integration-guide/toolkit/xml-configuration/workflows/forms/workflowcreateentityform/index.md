---
sidebar_position: 187
title: WorkflowCreateEntityForm
---

# WorkflowCreateEntityForm

Displays a form to create a new resource, without a record.

## Examples

The following example is a form to create a new site.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
  
  
With the following form for the workflow's content:  
  
      
          
          
          
          
          
          
          
          
          
          
      
  
      
          
          
          
      
  
  
And with the following form for the workflow's summary:  
  
      
          
          
          
          
      
  
      
          
          
      
  

```
The content of `MainControl` is visible during the workflow's execution:

![Form Example - Site Creation](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowCreateEntityForm_V603.png)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Site Creation](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/FormExample_WorkflowCreateEntityForm_summary_V603.png)

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |