---
sidebar_position: 1113
title: Customize Search Bars
---

# Customize Search Bars

This guide shows how to define a custom way to search from a list of a given entity type's properties.

See the [Search Bar](../../../toolkit/xml-configuration/user-interface/searchbar/index "Search Bar") topic for additional information.

## Default Search Bar

To search on a resource list for an entity, you must enter a SearchBar tag for the given entity.

```
                                      

```
Here is the visualization of this searchbar on the interface:

![SearchBarWithoutFilters](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/SearchBarWithoutFilter.png)

:::tip
Ergonomically, it is recommended to hide the search symbol in a column header (in a list displayed like a table) if a criterion linked to this column is already displayed in a searchbar. This avoids filter duplication.
Thus, the  property can be deleted in the  argument in the display table.
:::

## Create Default Filters

To add a default filter, you must add both of the following properties to a [Search Bar](../../../toolkit/xml-configuration/user-interface/searchbar/index "Search Bar"):

* DefaultValue
* Operator

```


```
Here is the visualization of this criterion on the interface:

![SearchBarFilter](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/SearchBarfilters.png)

## Search Bar Menu

Each menu item is a link to an entity's workflow displayed under the search bar on the visualization page of the entity's resource list.

See the [Create Menu Items](../create-menu-items/index "Create Menu Items")topic for additional information