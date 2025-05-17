---
sidebar_position: 1063
title: For Resource Update (Multi Records)
---

# For Resource Update (Multi Records)

This section guides you through the procedure for the creation of a workflow to update an existing resource through its several records.

## Declare a Workflow

This [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is made of three activities:

1. `Action With Refine`: sends the resource's records update request with a possibility of delegation.
2. `Review With Feedback`: reviews the update request with the possibility of getting feedback from another user.
3. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../activity-templates/index "Activity Templates") topic for additional information.

The example below creates a workflow to update the records of an existing user:

```
      

```
## Create Forms

The XML configuration below represents the creation of a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") that defines the elements to display in the workflow.

Here we create three structured forms, all to be called in our final workflow form:

```
First form for the user's record data, shared with all records:
            

Second form for the user's record data, specific to each record individually:
                                          

```
## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a resource's update with several records, i.e. `WorkflowUpdateSeveralRecordEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```


```
`WorkflowUpdateSeveralRecordEntityForm` displays a date picker for the end of transition, to schedule the record replacement.

A `WorkflowUpdateSeveralRecordEntityForm` requires the following child elements:

* `MainControl` that defines user's data;

```

  


```
:::note
The MainControl attribute is here an empty container, because it is a mandatory attribute that is not involved in the changes of this workflow.
:::

* `RecordControl` that defines the record data shared with all records and calls the firstform created previously;

```
  
  


```
* `RecordUniqueItemControl` that defines the record data specific to each record individually, and calls the secondform created previously;

```
    
  


```
* `RecordSlaveControl` that copies an existing record to be the base, i.e. pre-fill the fields, for the update of record data specific to each record individually. Thus it calls the same form as `RecordUniqueItemControl`.

```
      
  


```
* `RecordSlaveUniqueItemControl` that copies an existing record to be the base, i.e. pre-fill the fields, for the update of record data shared with all records. Thus it calls the same form as `RecordControl`.

```
        
  


```
:::note
The RecordSlaveControl attribute calls here the same form as RecordUniqueControl, because it copies part of the main record to pre-fill the fields of RecordUniqueControl.
:::

![UI Form](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceUpdateMulti_form_V603.png)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right users.
Read about [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow")s permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions for the whole update request from the previously created workflow:

```
                

```
## Create Menu Items in the UI

[Menu Item](../../../toolkit/xml-configuration/user-interface/menuitem/index "Menu Item") must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/MenuItems_userView_V603.png)

To create a menu item here for the new workflow, you can add the following XML configuration to the existing menu items list:

```
            ...
      
      

```
## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates,see the [Configure a Homonym Detection](../configure-homonym-test/index "Configure a Homonym Detection") topic for additional information.

:::note
When using records, the homonym detection displays the list of records and not just the list of users.
:::

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the [Customize Display Tables](../../../ui/how-tos/custom-display-table/index "Customize Display Tables") topic for additional information.