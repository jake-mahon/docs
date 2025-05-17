---
sidebar_position: 1111
title: Create Menu Items
---

# Create Menu Items

After creating a workflow as for the EntityTypes, is mandatory to create the MenuItems to create the Navigation to this Workflow.

### Create menu items for a workflow in a resource entity list

To add a link to an entity's workflow displayed under the search bar on the visualization page of the entity's resource list you need to create a menu containing the different workflows and put a link to the entity's searchBar as below.

[See available icons](https://uifabricicons.azurewebsites.net/).

The first MenuItem is the main action displayed on the right.

The other MenuItems are displayed from left to right.

```
                                                          

```
This XML element gives the following result:

![Add workflow link in resource list entity](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/WorkflowInEntityList.png)

### Create menu items for a workflow in a resource view

In the resource view it is also possible to create links to different workflows.

:::warning
These workflows will manipulate the selected resource in the view.
:::

```
                                                                                                                                                                            

```
This XML element gives the following result:

![Workflow in resource view](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/WorkflowInResourceView.png)

![All workflow in resource view*](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AllWorkflowInResourceView.png)