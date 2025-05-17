---
sidebar_position: 1058
title: For Resource Update (Mono Record)
---

# For Resource Update (Mono Record)

This section guides you through the procedure for the creation of a workflow to schedule the replacement of the unique record of an existing resource with a new one.

## Declare a Workflow

This [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is made of two activities:

1. `Action With Refine`: sends the resource's record update request with a possibility of delegation.
2. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../activity-templates/index "Activity Templates") topic for additional information.

The example below creates a workflow to update only the user's name.

```
          

```
:::note
For now, our workflow works with an immediate validation and an immediate effect.
:::

## Create Forms

The XML configuration below represents the creation of a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") that defines the elements to display in the workflow.

Here we just have the full name field to update the corresponding attributes for a given user:

```
            

```
## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a (unique) record's replacement, i.e. `WorkflowAddAndEndRecordEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```


```
A `WorkflowAddAndEndRecordEntityForm` requires the following child elements:

* `MainControl` that defines user's data;

```

  


```
:::note
The MainControl attribute is here an empty container, because it is a mandatory attribute that is not involved in the changes of this workflow.
:::

* `RecordControl` that defines record data, and call the form created previously.

```
  
  


```
![UI Form](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceUpdateMono_form_V603.png)

:::note
End of transition sets the date for the change of records scheduled by this form.
:::

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

To perform a homonymy check on a workflow and thus prevent user duplicates, see the [Configure a Homonym Detection](../configure-homonym-test/index "Configure a Homonym Detection") topic for additional information.

:::note
When using records, the homonym detection displays the list of records and not just the list of users.
:::

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the [Customize Display Tables](../../../ui/how-tos/custom-display-table/index "Customize Display Tables") topic for additional information.