# Tile

A tile displays customizable data in one block. This block is displayed in display table. There are two types of tiles: multilines with optional icons and multilines with photo (or failing this, the initials of a defined data).

## Examples

```

    <Tile Identifier="Referentiel_User_Tile1" DisplayName_L1="Collaborateur : pr�nom, nom" EntityType="Referentiel_User" TileDesignElement="picture-text">        <Item Binding="MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />        <Item Binding="MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />        <Item Binding="Id" LineNumber="5" />    </Tile>    <Tile Identifier="Referentiel_User_Tile2" DisplayName_L1="Collaborateur : organisation, site" EntityType="Referentiel_User" TileDesignElement="inline data-icon">        <Item Binding="MainRecord.Site.Label" LineNumber="1" />        <Item Binding="MainRecord.Service.Label" LineNumber="2" />    </Tile>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the tile in language 1 (up to 16). |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the tile. |
| TileDesignElement   required | __Type__    Enumeration   __Description__   Defines the design element ("inline data-icon" or "picture-text"). |

## Child Element: Item

One data to display in a tile.

### Examples

```

    <Item Binding="MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />    <Item Binding="MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />    <Item Binding="MainRecord.EmployeeId" LineDisplayOrderIndicator="2" LineNumber="3" />

```

### Properties

| Property | Details |
| --- | --- |
| AddedMinutes   optional | __Type__    Int32   __Description__   Add minutes to the date field with this property.   If the value is not defined, the default value is the one defined for the associated display entity property. |
| Binding   required | __Type__    Int64   __Description__   Defines the binding path to a scalar property. |
| LineDisplayOrderIndicator   required | __Type__    Int32   __Description__   Defines the display position of the data in the row. |
| LineNumber   required | __Type__    Int32   __Description__   Defines the number of the line in which the data is displayed.   When the tileDesignElement of the tile is "picture-text", four lines are customizable, and 2 lines are hard coded:   - 5: id of the resource to navigate on click   - 6: photoTag |
| OptimizedBinding   optional | __Type__    Int64   __Description__   Optimized Binding allows DisplayTables to be faster displayed.   If it is filled in, it takes priority over the binding located in the TileItem. |
