---
sidebar_position: 411
title: For Resource Update (No Record)
---

# For Resource Update (No Record)

This section guides you through the procedure for the creation of a workflow to update a simple resource, i.e. to update, within a given resource, properties that do not involve records.

## Declare a Workflow

This [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is made of two activities:

1. `Action With Refine`: sends the resource's update request with a possibility of delegation.
2. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../activity-templates/index "Activity Templates") topic for additional information.

The example below creates a workflow to update only the user's `IsDraft` attribute.

```
    

```
## Create Forms

The XML configuration below represents the creation of a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") that defines the elements to display in the workflow.

Here we just have one field called `IsDraft` to update the corresponding boolean attribute for a given user:

```
        

```
## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a resource's update, i.e. `WorkflowEditEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```


```
A `WorkflowEditEntityForm` requires one child element `MainControl` that defines the actual content of the workflow's form and calls the form created previously:

```

  


```
![UI Form](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/HowTo_ResourceUpdateNo_form_V603.png)

### Add a summary (Optional)

Another child element `SummaryControl` can be added to insert a summary part, i.e. the form used after the workflow execution to show some values, most of the time those affected by the workflow, typically the properties editable in the workflow or generated properties. So in our situation, it displays the `IsDraft` attribute that the user just changed:

```
  
        


```
![UI Summary](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/HowTo_ResourceUpdateNo_summary_V603.png)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right users.
Read about the [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions for the whole update request from the previously created workflow:

```
        

```
## Create Menu Items in the UI

[Menu Item](../../../toolkit/xml-configuration/user-interface/menuitem/index "Menu Item") must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/MenuItems_userView_V603.png)

To create a menu item here for the new workflow, you can add the following XML configuration to the existing menu items list:

```
            ...
      
      

```
## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the [Customize Display Tables](../../../ui/how-tos/custom-display-table/index "Customize Display Tables") topic for additional information.