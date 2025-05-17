---
sidebar_position: 834
title: Workflow Edit Entity Form
---

# Workflow Edit Entity Form

Displays a form to update or delete an existing resource, without a record.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
  
  
With the following form for the workflow's content and summary:  
  
      
  

```
The content of `MainControl` is visible during the workflow's execution:

![Form Example - Computer Request](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowEditEntityForm_V603.png)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Computer Request](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/FormExample_WorkflowEditEntityForm_summary_V603.png)

## Properties

| Property | Description |
| --- | --- |
| Child Element: MainControl | Set of fields to collect data about the main resource. |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |