# DisplayTable

A table displays a collections of entity type data grouped into rows.

## Examples

### DisplayTableDesignElement

#### table

The following example displays sites as a table.

```

<DisplayTable Identifier="Directory_Site" EntityType="Directory_Site" DisplayTableDesignElement="table" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="Country" />    <Column DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" DisplayName_L1="State" />    <Column DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="8" /></DisplayTable>

```

![Example - DisplayTableDesignElement Set to Table](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_table_v602.png)

#### list

The following example displays users as a list.

```

<DisplayTable Identifier="Directory_User" EntityType="Directory_User" DisplayTableDesignElement="list" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" ColumnSize="6" IsDisplayInSummaryView="true" SortBinding="MainRecord.LastName" Tile="Directory_User_Tile1" />    <Column ColumnSize="3" IsDisplayInSummaryView="true" Tile="Directory_User_Tile2" SortBinding="MainRecord.FirstName" />    <Column ColumnSize="3" Tile="Directory_User_Tile3" /></DisplayTable>

```

![Example - DisplayTableDesignElement Set to List](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_list_v602.png)

For resources to be displayed as a list, the display table must also be configured with tiles.

#### resourcetable

The following example displays AD entries as a table, with an "Owner/Type" column.

```

<DisplayTable Identifier="AD_Entry" EntityType="AD_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="5" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" /></DisplayTable>

```

![Example - DisplayTableDesignElement Set to ResourceTable](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/user-interface/displaytable/displaytabledesignelement_resourcetable_v602.png)

## Properties

| Property | Details |
| --- | --- |
| DisplayTableDesignElement   required | __Type__    Enumeration   __Description__   Design of the display table.   ```-1``` - __table__: resources are displayed in a table.   ```-2``` - __list__: resources are displayed in a list.   ```-3``` - __resourcetable__: resources are displayed in a table containing an "Owner/Type" column.   ```-4``` - __adaptable__: resources are displayed in a table with an "Owner/Type" column only if the entity type is the target of a resource type, otherwise the table is without said column. |
| EntityType   required | __Type__    Int64   __Description__   Represents the linked entity type. |
| HomonymEntityLink   optional | __Type__    Int64   __Description__   Defines the homonym display table. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the table. |
| IsEntityTypeDefault   default value: false | __Type__    Boolean   __Description__   Default display table used in the application. |
| LinesPerPage   default value: 15 | __Type__    Int32   __Description__   Defines the maximum lines per page. |
| ParentProperty   optional | __Type__    Int64   __Description__   Property to navigate to the parent level when the table displays a tree of values (for example ```Organization.ParentOrganization```). |

## Child Element: Column

Contains all the display table columns.

### Examples

```

    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userAccountControl" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />    <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />

```

### Properties

| Property | Details |
| --- | --- |
| AddedMinutes   optional | __Type__    Int32   __Description__   Add minutes to the date field with this property.   If the value is not defined, the default value is the one defined for the associated display entity property. |
| CanBeFiltered   default value: false | __Type__    Boolean   __Description__   Can filter the column data. |
| ColumnSize   default value: 1 | __Type__    Int32   __Description__   Defines the column size. |
| DefaultSortPriority   optional | __Type__    Int32   __Description__   Defines the default sort priority. |
| DisplayBinding   optional | __Type__    Int64   __Description__   Represents the linked binding path to a scalar property. |
| DisplayName_L1   optional | __Type__    String   __Description__   Display name of the column in language 1 (up to 16). |
| IsDisplayInDropDownList   default value: false | __Type__    Boolean   __Description__   Is a drop down list column. |
| IsDisplayInSummaryView   default value: false | __Type__    Boolean   __Description__   Is a summary view column. |
| IsResizable   default value: false | __Type__    Boolean   __Description__   Is resizable column. |
| IsSortable   default value: false | __Type__    Boolean   __Description__   Is sortable column. |
| OptimizedDisplayBinding   optional | __Type__    Int64   __Description__   Optimized Binding allows DisplayTables to be faster displayed.   If it is filled in, it takes priority over the DisplayBinding located in the DisplayTableColumn. |
| OptimizedSortBinding   optional | __Type__    Int64   __Description__   An optimized sort binding allows display tables to be faster displayed. If it is filled in, it takes priority over the sort binding located in the display table column. |
| SearchOperator   default value: 0 | __Type__    QueryComparisonOperator   __Description__   Defines the search operator (Equal, NotEqual, Contain, StartWith�). |
| SortBinding   optional | __Type__    Int64   __Description__   Represents the sort binding path to a scalar property. |
| Tile   optional | __Type__    Int64   __Description__   Identifier of the tile. |
