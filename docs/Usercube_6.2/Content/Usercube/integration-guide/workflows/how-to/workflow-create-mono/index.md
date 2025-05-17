---
sidebar_position: 1060
title: For Resource Creation (Mono Record)
---

# For Resource Creation (Mono Record)

This section guides you through the procedure for the creation of a [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") to create a new resource with a unique record.

## Declare a Workflow

This [Workflow](../../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is made of four activities:

1. `Action With Refine`: sends the creation request with a possibility of delegation.
2. `Persist Only Resources`: saves the collected data to the repository without triggering provisioning.
3. `Review With Feedback`: reviews the creation request with the possibility of getting feedback from another user.
4. `Persist`: saves the collected data and triggers provisioning.

See the [Activity Templates](../../activity-templates/index "Activity Templates") topic for additional information.

The example below creates a workflow to create a new worker.

```
        

```
## Create Forms

The XML configuration below represents the creation of a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") that defines the elements to display in the workflow.

Here we create two structured forms: the preliminary one is called inside the main one, and the main one is to be called in our final workflow form.

```
Preliminary form for user data:
                                                          

Preliminary form for user's contract data:
                

Preliminary form for user's position data:
                        

Main form for all data:

  Section calling the preliminary form for user data:
  
  Section calling the preliminary form for contract data:
  
  Section calling the preliminary form for position data:
  

```
## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed when launching the workflow. It has the type corresponding to a resource's creation with one record, i.e. `WorkflowCreateRecordEntityForm` and it must specify the workflow's context (the entity type of the involved resources, the main property, the activity when the form is called, etc):

```


```
A `WorkflowCreateRecordEntityForm` requires the following child elements:

* `MainControl` that defines user's data;

```

  


```
:::note
The MainControl attribute is here an empty container because we configure all personal data, contracts and positions as records to be able to anticipate changes for example. The line with the empty MainControl is not mandatory. See the
Position Change via Records
topic for additional information.
:::

* `RecordControl` that defines record data, and calls the form created previously. See the [For Resource Creation (Mono Record)](# "For Resource Creation (Mono Record)")topic for additional information.

```
  
  


```
![UI Form](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceCreationMono_form_V602.png)

### Add a summary (Optional)

Another child element `RecordSummaryControl` can be added to insert a summary part, i.e. the form used after the workflow execution to show some values, most of the time those affected by the workflow, typically the properties editable in the workflow or generated properties. So in our situation, it displays the `EmployeeId` and `Mail` attributes that the workflow just computed:

```
Summary form:
                  
  


```
![UI Summary](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/HowTo_ResourceCreationMono_summary_V602.png)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right users.
See the [Workflows](../../index "Workflows") topic for additional information.

Below is an example of an access control rule where the `Administrator` profile gets the permissions for the whole creation request and review from the previously created workflow:

```


  Permissions for the Request activity:
      

  Permissions for the Review activity:
        

```
## Create Menu Items in the UI

[Menu Item](../../../toolkit/xml-configuration/user-interface/menuitem/index "Menu Item")must be defined to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/MenuItems_usersList_V603.png)

To create a menu item here for the new workflow, you can add the following XML configuration to the existing menu items list:

```
  ...
  

```
## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates see the [Configure a Homonym Detection](../configure-homonym-test/index "Configure a Homonym Detection")topic for additional information.

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