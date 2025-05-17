---
sidebar_position: 820
title: Tile
---

# Tile

A tile displays customizable data in one block. This block is displayed in display table. There are two types of tiles: multilines with optional icons and multilines with photo (or failing this, the initials of a defined data).

## Examples

```
                                                    

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the tile in language 1 (up to 16). |
| EntityType required | **Type**  Int64  **Description** Identifier of the entity type. |
| Identifier required | **Type**  String  **Description** Unique identifier of the tile. |
| TileDesignElement required | **Type**  Enumeration  **Description** Defines the design element ("inline data-icon" or "picture-text"). |

## Child Element: Item

One data to display in a tile.

### Examples

```
        

```
### Properties

| Property | Details |
| --- | --- |
| AddedMinutes optional | **Type**  Int32  **Description** Add minutes to the date field with this property. If the value is not defined, the default value is the one defined for the associated display entity property. |
| Binding required | **Type**  Int64  **Description** Defines the binding path to a scalar property. |
| LineDisplayOrderIndicator required | **Type**  Int32  **Description** Defines the display position of the data in the row. |
| LineNumber required | **Type**  Int32  **Description** Defines the number of the line in which the data is displayed. When the tileDesignElement of the tile is "picture-text", four lines are customizable, and 2 lines are hard coded: - 5: id of the resource to navigate on click - 6: photoTag |
| OptimizedBinding optional | **Type**  Int64  **Description** Optimized Binding allows DisplayTables to be faster displayed. If it is filled in, it takes priority over the binding located in the TileItem. |