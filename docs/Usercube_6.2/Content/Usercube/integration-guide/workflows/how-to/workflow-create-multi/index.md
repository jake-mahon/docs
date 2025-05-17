---
sidebar_position: 1059
title: For Resource Creation (Multi Records)
---

# For Resource Creation (Multi Records)

This section guides you through the procedure for the creation of a workflow to create a new resource with several records.

## Declare a Workflow

This [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is made of four activities:

1. `Action With Refine`: sends the creation request with a possibility of delegation.
2. `Persist Only Resources`: saves the collected data to the repository without triggering provisioning.
3. `Review With Feedback`: reviews the creation request with the possibility of getting feedback from another user.
4. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../activity-templates/index "Activity Templates") topic for additional information.

The example below creates a workflow to create a new helpdesk worker, with the possibility to create several records at once for said worker.

```
        

```
## Create Forms

The XML configuration below represents the creation of a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") that defines the elements to display in the workflow.

Here we create three structured forms, all to be called in our final workflow form.

```
First form for the user's identification data:
                

Second form for the user's data shared with all records:


  Section for user's personal data, here their name and phone numbers:
                                            

  Section for user's contract data, here their contract's type, start and end dates:
                

Third form for the user's data specific to each record individually, so here position information:
                        

```
## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a resource's creation with several records, i.e. `WorkflowCreateSeveralRecordEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```


```
A `WorkflowCreateSeveralRecordEntityForm` requires the following child elements:

* `MainControl` that defines the user's data that never changes so identification data, and calls the firstform created previously;

```

  


```
* `RecordControl` that defines the record data shared with all records, and calls the secondform created previously;

```
  
  


```
:::note
In a situation where users can have several positions but also several contracts, then contract data would be part of the form called by RecordUniqueItemControl instead of RecordControl.
In a situation where positions, contracts and personal data are all configured as records because we want to be able to anticipate changes for example, then there would not be any data shared by all records. Then RecordControl would be empty. See the
Position Change via Records
topic for additional information.
:::

> ```
>
>   ...
>         
>   ...
> 
>
> ```
* `RecordUniqueItemControl` (optional but recommended) that defines the record data specific to each record individually, and calls the thirdform created previously.

```
    
  


```
![UI Form](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceCreationMulti_form_V603.png)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right users.
Read about [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow")s permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions for the whole creation request and review from the previously created workflow:

```


  Permissions for the Request activity:
      

  Permissions for the Review activity:
        

```
## Create Menu Items in the UI

[Menu Item](../../../toolkit/xml-configuration/user-interface/menuitem/index "Menu Item") must be defined to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/MenuItems_usersList_V603.png)

To create a menu item here for the new workflow, you can add the following XML configuration to the existing menu items list:

```
  ...
  


```
## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates see the [Configure a Homonym Detection](../configure-homonym-test/index "Configure a Homonym Detection") topic for additional information.

:::note
When using records, the homonym detection displays the list of records and not just the list of users.
:::

Below is an example where a homonym entity link, based on the user's name, is called in the workflow form:

```
Homonym detection:  

      

Partial form for user data:
...
            ...

```
![UI Homonym Detection](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceCreationMono_homonym_V603.png)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the [Customize Display Tables](../../../ui/how-tos/custom-display-table/index "Customize Display Tables") topic for additional information.

Below is an example of a display table for our situation:

```
          

```