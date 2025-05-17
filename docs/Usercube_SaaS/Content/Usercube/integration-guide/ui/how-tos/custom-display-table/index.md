---
sidebar_position: 462
title: Customize Display Tables
---

# Customize Display Tables

This part shows how to define a custom way to display entity types' data.

## Table

This display table with DisplayTableDesignElement set to table will display the list of resources as a simple table filled with several columns.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
                                    
```
Here is the visualization of this display table on the interface:

![DisplayTable(Table)](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/DisplayTablesTable.png)

:::tip
Ergonomically, it is recommended to hide the search symbol in a column header (in a list displayed like a table) if a criterion linked to this column is already displayed in a search bar. This avoids filter duplication.
Thus, the  property can be deleted in the  argument.
:::

## Resource Table

The property DisplayTableDesignElement set to resourcetable allows you to create a table similar to the display table with DisplayTableDesignElement set to table but adds a column containing the owner of the resource.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
                          
```
Here is the visualization of this resource table on the interface:

![ResourceTable](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/DIsplayTablesResourceTable.png)

## Display Table with Tiles

.

Instead of creating a table, it is possible to create tiles to give another rendering of the user interface. It is therefore necessary to create the different tiles first. After creating the tiles, they must be imported into the display table with  set to . Display tables with other values of  cannot display tiles.

See the[Tile](../../../toolkit/xml-configuration/user-interface/tile/index "Tile") topic for additional information.

*Remember,* if the display table uses tiles, then you can't use bindings.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
                                                              
```
Here is the visualization of this display table on the interface:

![DisplayTable with Tiles](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/DisplayTablesTiles.png)

See the [Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index) topic for additional information.