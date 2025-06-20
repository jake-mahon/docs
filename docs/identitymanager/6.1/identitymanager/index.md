# A software solution to match your IGA needs

To learn about Netwrix Usercube and build the solution you need, explore our guides.

The present documentation mentions the Netwrix Usercube application as simply Usercube.

**Usercube's guides** include:

- An [Introduction Guide](/docs/identitymanager/6.1/identitymanager/index.md) if you
  are new to Usercube.
- A [User Guide](/docs/identitymanager/6.1/identitymanager/index.md) to configure Usercube
  from scratch via the UI.
- An [Integration Guide](/docs/identitymanager/6.1/identitymanager/getting-started/index.md) to
  complete Usercube's configuration in XML according to your needs.
- An [Installation Guide](/docs/identitymanager/6.1/identitymanager/installation-setup/index.md) to
  install Usercube in a production environment.
- A [Migration Guide](/docs/identitymanager/6.1/identitymanager/index.md) to upgrade to
  a new version of Usercube.
- [Release Notes](/docs/identitymanager/6.1/identitymanager/index.md) to get details about
  specific changes in Usercube's updates.

# Create Menu Items

After creating a workflow as for the EntityTypes, is mandatory to create the MenuItems to create the
Navigation to this Workflow.

### Create menu items for a workflow in a resource entity list

To add a link to an entity's workflow displayed under the search bar on the visualization page of
the entity's resource list you need to create a menu containing the different workflows and put a
link to the entity's searchBar as below.

[See available icons](https://uifabricicons.azurewebsites.net/).

The first MenuItem is the main action displayed on the right.

The other MenuItems are displayed from left to right.

```

  <SearchBar EntityType="Directory_User" Menu="Menu_Search_Directory_User" SearchBarDesignElement="Inline">    <Criterion Binding1="MainRecord.EmployeeId" PlaceHolderText_L1="Employee Id" PlaceHolderText_L2="Matricule" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.LastName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.FirstName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.Organization" PlaceHolderText_L1="Department" PlaceHolderText_L2="D�partement" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="PresenceState" InputType="ComboboxMultiSelection" ColumnSize="2" DefaultValue="-101;-102" Operator="Equal" />    <Criterion Binding1="MainRecord.Location" PlaceHolderText_L1="Site" PlaceHolderText_L2="Site" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.Company" PlaceHolderText_L1="Company" PlaceHolderText_L2="Soci�t�" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.Title" PlaceHolderText_L1="Title" PlaceHolderText_L2="Fonction" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.EmployeeType.Category" PlaceHolderText_L1="User Type" PlaceHolderText_L2="Cat�gorie de collaborateur" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />  </SearchBar>  <MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">    <MenuItem Identifier="Menu_Search_Directory_User_StartInternal" DisplayName_L1="New Employee" DisplayName_L2="Entr�e d'un interne" IconCode="AddFriend" Workflow="Directory_User_StartInternal" />    <MenuItem Identifier="Menu_Search_Directory_User_StartExternal" DisplayName_L1="New Contractor" DisplayName_L2="Entr�e d'un externe" IconCode="AddFriend" Workflow="Directory_User_StartExternal" />    <MenuItem Identifier="Menu_Search_Directory_User_AdvancedStartInternal" DisplayName_L1="New Multi-Positions User" DisplayName_L2="Entr�e multipostes" IconCode="AddFriend" Workflow="Directory_User_AdvancedStartInternal" />    <MenuItem Identifier="Menu_Search_Directory_User_Helpdesk_Start" DisplayName_L1="New User (helpdesk)" DisplayName_L2="Entr�e (support)" IconCode="AddFriend" Workflow="Helpdesk_Directory_User_Start" />  </MenuItem>

```

This XML element gives the following result:

![Add workflow link in resource list entity](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/create-menu-items/workflowinentitylist.webp)

### Create menu items for a workflow in a resource view

In the resource view it is also possible to create links to different workflows.

These workflows will manipulate the selected resource in the view.

```

  <ResourceViewRecordEntityForm Identifier="Directory_User_View" EntityType="Directory_User" Menu="Menu_Directory_User" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:ContractStartDate" RecordEndProperty="Directory_UserRecord:ContractEndDate" RecordFilter="All" IsDefaultViewForm="true">    <MainControl OutputType="LayoutContainer"></MainControl>    <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_UserRecord_View" />    <RecordItemControl OutputType="TransformImport" EmbeddedForm="Directory_UserRecord_ViewPosition" />    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_UserRecord_ViewPosition" />  </ResourceViewRecordEntityForm>  <MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">    <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions" DisplayName_L2="Actions">      <MenuItem Identifier="Menu_Directory_User_Changes_Add" DisplayName_L1="Section">        <MenuItem Identifier="Menu_Directory_User_Changes_AddRecord" DisplayName_L1="Add a new Position" DisplayName_L2="Ajouter un poste" IconCode="Add" Workflow="Directory_User_AddRecord" />        <MenuItem Identifier="Menu_Directory_User_Changes_AddContract" DisplayName_L1="Add a new Contract" DisplayName_L2="Ajouter un contrat" IconCode="Add" Workflow="Directory_User_AddContract" />      </MenuItem>      <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">        <MenuItem Identifier="Menu_Directory_User_Changes_ChangePosition" DisplayName_L1="Schedule a Job Change" DisplayName_L2="Mouvement � date" IconCode="Edit" Workflow="Directory_User_ChangePosition" />        <MenuItem Identifier="Menu_Directory_User_Changes_ManageContract" DisplayName_L1="Manage Contract" DisplayName_L2="Gestion du contrat" IconCode="Edit" Workflow="Directory_User_ManageContract" />        <MenuItem Identifier="Menu_Directory_User_Changes_ChangeName" DisplayName_L1="Update Name" DisplayName_L2="Changer le nom" IconCode="Edit" Workflow="Directory_User_ChangeName" />        <MenuItem Identifier="Menu_Directory_User_Changes_ResourcesUpdate" DisplayName_L1="Modify Permissions" DisplayName_L2="Demander des droits" IconCode="Edit" Workflow="Directory_User_ResourcesUpdate" />        <MenuItem Identifier="Menu_Directory_User_Changes_Suspend" DisplayName_L1="Suspend" DisplayName_L2="Suspendre" IconCode="Edit" Workflow="Directory_User_Suspend" />        <MenuItem Identifier="Menu_Directory_User_AdvancedUpdate" DisplayName_L1="Multi-position Update" DisplayName_L2="Modification multipostes" IconCode="Edit" Workflow="Directory_User_AdvancedUpdate" />      </MenuItem>      <MenuItem Identifier="Menu_Directory_User_Changes_Directory_User_End" DisplayName_L1="Schedule the Exit" DisplayName_L2="Planifier le d�part" IconCode="Cancel" Workflow="Directory_User_End" />    </MenuItem>    <MenuItem Identifier="Menu_Directory_User_Helpdesk" DisplayName_L1="Helpdesk" DisplayName_L2="Support" IconCode="Phone">      <MenuItem Identifier="Menu_Directory_User_Helpdesk_Update" DisplayName_L1="Section">        <MenuItem Identifier="Menu_Directory_User_Helpdesk_FixRecord" DisplayName_L1="Repair Data (helpdesk)" DisplayName_L2="Corriger des donn�es (support)" IconCode="Edit" Workflow="Helpdesk_Directory_User_FixRecord" />      </MenuItem>      <MenuItem Identifier="Menu_Directory_User_Helpdesk_Delete" DisplayName_L1="Section">        <MenuItem Identifier="Menu_Directory_User_Helpdesk_Directory_User_Delete" DisplayName_L1="Delete User (helpdesk)" DisplayName_L2="Supprimer (support)" IconCode="Cancel" Workflow="Helpdesk_Directory_User_Delete" />      </MenuItem>    </MenuItem>  </MenuItem>

```

This XML element gives the following result:

![Workflow in resource view](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/create-menu-items/workflowinresourceview.webp)

![All workflow in resource view*](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/create-menu-items/allworkflowinresourceview.webp)

# Customize Display Tables

This part shows how to define a custom way to display entity types' data.

[Read more about display tables](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Table

This display table with `DisplayTableDesignElement` set to `table` will display the list of
resources as a simple table filled with several columns.

```

    <DisplayTable Identifier="Referentiel_Guest" DisplayTableDesignElement="table" EntityType="Referentiel_Guest" IsEntityTypeDefault="true">        <Column CanBeFiltered="true" DisplayBinding="Referentiel_Guest:Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />        <Column CanBeFiltered="true" DefaultSortPriority="0" DisplayBinding="Referentiel_Guest:LastName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />        <Column CanBeFiltered="true" DisplayBinding="Referentiel_Guest:FirstName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />        <Column CanBeFiltered="false" DisplayBinding="Referentiel_Guest:PhoneNumber" DisplayName_L1="T�l�phone" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />    </DisplayTable>

```

Here is the visualization of this display table on the interface:

![DisplayTable(Table)](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/custom-display-table/displaytablestable.webp)

Ergonomically, it is recommended to hide the search symbol in a column header (in a list displayed
like a table) if a criterion linked to this column is already displayed in a searchbar. This avoids
filter duplication. Thus, the `<CanBeFiltered>` property can be deleted in the `<Column>` argument.

## Resource Table

The property `DisplayTableDesignElement` set to `resourcetable` allows you to create a table similar
to the display table with `DisplayTableDesignElement` set to `table` but adds a column containing
the owner of the resource.

```

  <DisplayTable Identifier="AD_Entry" EntityType="AD_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />    <Column DisplayBinding="userPrincipalName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="userAccountControl" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="1" />    <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="objectCategory" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />  </DisplayTable>

```

Here is the visualization of this resource table on the interface:

![ResourceTable](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/custom-display-table/displaytablesresourcetable.webp)

## Display Table with Tiles

[Read more about tiles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

Instead of creating a table, it is possible to create tiles to give another rendering of the user
interface. It is therefore necessary to create the different tiles first. After creating the tiles,
they must be imported into the display table with `DisplayTableDesignElement` set to `list`.

If the display table uses tiles, then you can't use bindings.

```

  <Tile Identifier="Directory_User_Tile1" DisplayName_L1="User: first/last name" DisplayName_L2="Collaborateur : nom, pr�nom" EntityType="Directory_User" TileDesignElement="picture-text">    <Item Binding="MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />    <Item Binding="MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />    <Item Binding="MainRecord.Title.DisplayName" LineNumber="3" />    <Item Binding="Id" LineNumber="5" />    <Item Binding="PhotoTag" LineNumber="6" />  </Tile>  <Tile Identifier="Directory_User_Tile2" DisplayName_L1="User: dep/loc" DisplayName_L2="Collaborateur : orga/site" EntityType="Directory_User" TileDesignElement="inline data-icon">    <Item Binding="MainRecord.Organization.DisplayName" LineNumber="1" />    <Item Binding="MainRecord.Location.DisplayName" LineNumber="2" />  </Tile>  <Tile Identifier="Directory_User_Tile3" DisplayName_L1="User: contact" DisplayName_L2="Collaborateur : contact" EntityType="Directory_User" TileDesignElement="inline data-icon">    <Item Binding="MainRecord.PhoneNumber" LineNumber="1" />    <Item Binding="MainRecord.MobileNumber" LineNumber="2" />  </Tile>  <DisplayTable Identifier="Directory_User" EntityType="Directory_User" DisplayTableDesignElement="list" IsEntityTypeDefault="true">    <Column DefaultSortPriority="1" ColumnSize="6" IsDisplayInSummaryView="true" SortBinding="MainRecord.LastName" Tile="Directory_User_Tile1" />    <Column ColumnSize="3" IsDisplayInSummaryView="true" Tile="Directory_User_Tile2" />    <Column ColumnSize="3" Tile="Directory_User_Tile3" />  </DisplayTable>

```

Here is the visualization of this display table on the interface:

![DisplayTable with Tiles](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/custom-display-table/displaytablestiles.webp)

# Customize Forms

This guide shows how to define a custom way to display the input fields to be filled in a given
workflow.

[Read more about forms](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Create a View Template for Entities Using Scaffoldings

Two scaffoldings generate the view, the display table and the rights to access the entity's
resources.

- [View template](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md):
  Creates the display table, the default view and access rights to the entity.
- [Entity template:](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md)
  Creates the entity view (designElement = ResourceTable), the report and the rights for a given
  profile.

These scaffoldings are not enough to access resources. You must add a menu item to define the
navigation in the view in the user interface.

## Create an Entity View

To create the entity view, you must manipulate a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

The view form doesn't give access to the view in the interface or the rights to access the
interface.

The following elements must be in place:

- [MenuItem](/docs/identitymanager/6.1/identitymanager/index.md)
- [Entity accessControl](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md)

To create the view, you can manipulate one or more forms. The example below shows how to create a
view from several different forms. This will allow you to reuse some forms in workflows.

```

    <Form Identifier="View_Referentiel_Guest_PersonnalData_Base" EntityType="Referentiel_Guest">        <Control DisplayName_L1="Perosnnal Data" OutputType="LayoutFieldset">            <Control DisplayName_L1="Complete Name" OutputType="LayoutRowset">                <Control Binding="LastName" IsRequired="true"/>                <Control Binding="FirstName" IsRequired="true"/>            </Control>            <Control Binding="Mail" ColumnSize="8" IsRequired="true"/>            <Control Binding="PhoneNumber" ColumnSize="8" />        </Control>    </Form>    <Form Identifier="View_Referentiel_Guest_AdditionalData_Base" EntityType="Referentiel_Guest">        <Control DisplayName_L1="Additional information" OutputType="LayoutFieldset">            <Control Binding="Contact" />            <Control Binding="StartDate" />            <Control Binding="EndDate" />        </Control>    </Form>    <Form Identifier="View_Referentiel_Guest_Base" EntityType="Referentiel_Guest" FormType="ResourceViewEntity" Menu="View_Referentiel_Guest"
        IsDefaultViewForm="true">        <Control OutputType="TransformImport" EmbeddedForm="View_Referentiel_Guest_PersonnalData_Base" />        <Control OutputType="TransformImport" EmbeddedForm="View_Referentiel_Guest_AdditionalData_Base" />    </Form>

```

It is also possible to create only one form that contains all the information:

```

  <Form Identifier="View_Directory_Guest" EntityType="Directory_Guest" FormType="ResourceViewEntity" Menu="View_Directory_Guest" IsDefaultViewForm="true">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset">      <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">        <Control Binding="LastName" />        <Control Binding="FirstName" />      </Control>      <Control Binding="Mail" ColumnSize="8" />      <Control Binding="PhoneNumber" ColumnSize="8" />    </Control>    <Control DisplayName_L1="Additional Data" DisplayName_L2="Informations compl�mentaires" OutputType="LayoutFieldset">      <Control Binding="Contact" />      <Control Binding="Company" />      <Control Binding="StartDate" />      <Control Binding="EndDate" />      <Control Binding="Comments" />    </Control>  </Form>

```

### Create an Entity View Using Records

Some entities may have entity records. To view the entity in question with all the records attached
to it, it is necessary to fill in forms that will load the record data as well as forms for the
parent entity.

The view form doesn't give access to the view in the interface or the rights to access it.

The following elements must be in place:

- [MenuItem](/docs/identitymanager/6.1/identitymanager/index.md)
- [Entity accessControl](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md)

In the example below, the view form will display all records. To change the filter on the record
display, you must change the
[record filter](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

```

    <Form Identifier="Referentiel_UserRecord_View" EntityType="Referentiel_UserRecord">        <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">            <Control Binding="LastName" IsReadOnly="true"/>            <Control Binding="FirstName" IsReadOnly="true"/>        </Control>        <Control DisplayName_L1="Country" OutputType="LayoutFieldset">            <Control Binding="Country" IsReadOnly="true"/>        </Control>        <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">            <Control Binding="Supervisor" IsReadOnly="true" />            <Control Binding="Category" IsReadOnly="true"/>            <Control Binding="ContractStartDate" IsReadOnly="true"/>            <Control Binding="ContractEndDate" IsReadOnly="true"/>        </Control>    </Form>    <Form Identifier="Referentiel_UserRecord_ViewPosition" EntityType="Referentiel_UserRecord">        <Control DisplayName_L1="Poste" OutputType="LayoutFieldset">            <Control Binding="Site" />            <Control Binding="Service" />            <Control Binding="StartDate" />            <Control Binding="EndDate" />        </Control>    </Form>    <Form Identifier="Referentiel_User_ViewManagement" EntityType="Referentiel_User">        <Control DisplayName_L1="Management" OutputType="LayoutFieldset">            <Control Binding="Guests" />            <Control Binding="ManagedPeople" />        </Control>    </Form>    <Form Identifier="Referentiel_User_View" EntityType="Referentiel_User" FormType="ResourceViewRecordEntity"
      Menu="Menu_Referentiel_User" RecordProperty="Referentiel_User:Records" IsDefaultViewForm="true"
      RecordStartProperty="Referentiel_UserRecord:StartDate" RecordEndProperty="Referentiel_UserRecord:EndDate" RecordFilter="All" >        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_User_ViewManagement" />        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_UserRecord_View" />        <Control OutputType="TransformImport" EmbeddedForm="Referentiel_UserRecord_ViewPosition" />    </Form>

```

The record filter not only changes the display options of the record, but also changes the display
of the rights associated with this record.

# Customize Search Bars

This guide shows how to define a custom way to search from a list of a given entity type's
properties.

[Read more about searchbars](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Default Search Bar

To search on a resource list for an entity, you must enter a SearchBar tag for the given entity.

```

  <SearchBar EntityType="Directory_User" Menu="Menu_Search_Directory_User" SearchBarDesignElement="Inline">    <Criterion Binding1="MainRecord.EmployeeId" PlaceHolderText_L1="Employee Id" PlaceHolderText_L2="Matricule" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.LastName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.FirstName" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="MainRecord.Organization" PlaceHolderText_L1="Department" PlaceHolderText_L2="D�partement" InputType="Auto" ColumnSize="2" />    <Criterion Binding1="PresenceState" InputType="ComboboxMultiSelection" ColumnSize="2" />    <Criterion Binding1="MainRecord.Location" PlaceHolderText_L1="Site" PlaceHolderText_L2="Site" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.Company" PlaceHolderText_L1="Company" PlaceHolderText_L2="Soci�t�" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.Title" PlaceHolderText_L1="Title" PlaceHolderText_L2="Fonction" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />    <Criterion Binding1="MainRecord.EmployeeType.Category" PlaceHolderText_L1="User Type" PlaceHolderText_L2="Cat�gorie de collaborateur" InputType="Auto" ColumnSize="2" IsVisibleInAdvancedView="true" />  </SearchBar>

```

Here is the visualization of this searchbar on the interface:

![SearchBarWithoutFilters](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/custom-search-bar/searchbarwithoutfilter.webp)

Ergonomically, it is recommended to hide the search symbol in a column header (in a list displayed
like a table) if a criterion linked to this column is already displayed in a searchbar. This avoids
filter duplication. Thus, the `<CanBeFiltered>` property can be deleted in the `<Column>` argument
in the display table.

## Create Default Filters

To add a default filter, you must add both of the following properties to a
[criterion](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md):

- DefaultValue
- Operator

```

  <Criterion Binding1="PresenceState" InputType="ComboboxMultiSelection" ColumnSize="2" DefaultValue="-101;-102" Operator="Equal" />

```

Here is the visualization of this criterion on the interface:

![SearchBarFilter](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/ui/how-tos/custom-search-bar/searchbarfilters.webp)

## Search Bar Menu

Each menu item is a link to an entity's workflow displayed under the search bar on the visualization
page of the entity's resource list.

For more information, see
[Create Menu Item for Workflow in Resource Entity List](/docs/identitymanager/6.1/identitymanager/index.md).

# How-Tos

These guides will help you configure various UI settings with practical step-by-step procedures.

- #### [Import Product Translations into Usercube](/docs/identitymanager/6.1/identitymanager/index.md)
  Write the JSON file containing the translations of Usercube's components (buttons, etc.) and
  deploy them.- ####
  [Create Menu Items](/docs/identitymanager/6.1/identitymanager/index.md)
  Create the menu items required to access the workflow in the UI.- ####
  [Customize Display Tables](/docs/identitymanager/6.1/identitymanager/index.md)
  Define a custom way to display entity types' data.- ####
  [Customize Search Bars](/docs/identitymanager/6.1/identitymanager/index.md)
  Define a custom way to search from a list of a given entity type's properties.- ####
  [Customize Forms](/docs/identitymanager/6.1/identitymanager/index.md)
  Define a custom way to display the input fields to be filled in a given workflow.

# Import Product Translations into Usercube

This topic shows how to import product translations into Usercube. A product translation means a
translation of a Usercube's component, for example a button display message, not the translation of
a configured component.

## JSON Translation File

The translations are given to Usercube in a JSON file, through the configuration deployment tool.
This section first explains how to write the JSON file, then how to use it with the deployment tool.

JSON translation file format

Example with the translation keys`accessCertificationReview.recommendation.manuallyAuthorized`,
`app.common.button.create.label` and `app.common.labels.whenCreated`:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
{
    "accessCertificationReview.recommendation.manuallyAuthorized": "<Manually authorized>",
    "app.common.button.create.label": "<Create>",
    "app.common.labels.whenCreated": "<Request Date>"
}
```

The JSON file must only contain string properties: no object, array or number.

The properties' name must match the wanted translation keys.

Find the translation keys

A translation key is an identifier for a given translation: Usercube uses those keys to find the
translation it needs in the interface.

To find these keys, go on [Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html)
, download the SDK of your product version and unzip the folder.

The Translations folder contains two JSON files: en-US.json and fr-FR.json. These files both contain
all the translation keys and respectively contain English (US) and french translations.

The configuration tool throws an error only when the format is wrong, not the keys: if you do not
write correct keys, the file will be imported anyway without a warning. Netwrix strongly recommends
to copy paste the keys from the JSON files in Translations.

### Key overriding

There is no need to rewrite all the keys if you do not want to modify all the translations: in your
JSON file, put only the keys of the translations you need to modify.

For languages other than french and English (US), when you do not override a given translation,
Usercube uses the English (US) one.

### JSON translation file name

Product translations must be linked to a defined Language in the configuration. For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Language Code="en-US" IndicatorNumber="1" JsonPath="translation.en-US.json" />
```

A translation file must be named: `translation.<language code>.json`.

For example, for en-US, the translation file must be named translation.en-US.json.

## Use the Configuration Tool to Import the JSON Translation File

Place the JSON file described in the previous part in your XML configuration folder: you can place
it anywhere in it, but the root is recommended.

Deploy your configuration as usual but add the --product-translation argument to your command line.

The custom product translations are now imported and usable by Usercube.

## Export the Translation File

If you need to export the custom product translations of your languages, export your configuration
as usual but add the --product-translation argument to your command line.

It will generate the translation files at the root of your XML configuration folder.

# User Interface

[See how to customize Usercube's User Interface](/docs/identitymanager/6.1/identitymanager/index.md).

# Activity Templates

This section describes the activities that constitute and model a
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).
Each activity is assigned a template, made of states and transitions.

## Overview

Going through an activity means going through [states](#states) and [transitions](#transitions).

![Activity Template - Example](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_example.webp)

By default, Usercube's workflow engine implements the following activity templates:

- [`Action`](#action)
- [`ActionWithRefine`](#actionwithrefine)
- [`Review`](#review)
- [`ReviewWithFeedback`](#reviewwithfeedback)
- `ContinueWith`
- [`Persist`](#persist)
- [`PersistOnlyResources`](#persistonlyresources)

## Activity Templates

### Action

Awaits user modifications without another user's intervention.

![Activity Template - Action](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_action.webp)

### ActionWithRefine

Awaits user modifications with the possibility to delegate the action to another user.

![Activity Template - ActionWithRefine](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_actionwithrefine.webp)

The `ActionWithRefine` activity can be translated into the following form:

![ActionWithRefine in the UI](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activity_actionwithrefine_v602.webp)

### Review

Awaits user approval without another user's intervention.

![Activity Template - Review](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_review.webp)

### ReviewWithFeedback

Awaits user approval with the possiblity of getting feedback from another user before taking the
action.

![Activity Template - ReviewWithFeedback](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_reviewwithfeedback.webp)

The `ReviewWithFeedback` activity can be translated into the following form:

![ReviewWithFeedback in the UI](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/activity-templates/activity_reviewwithfeedback_v602.webp)

### Persist

Saves the workflow's collected data to the repository and triggers dependent processes (i.e.
computation of the role model and provisioning). This activity has only the transition
`Persist-Invoked-Invoke` and the state `Persist-Invoked`. It has no user interaction, and hence no
need for permissions.

### PersistOnlyResources

Saves the workflow's collected data to the repository without triggering the dependent processes
(i.e. computation of the role model and provisioning). This activity has only the transition
`PersistOnlyResources-Invoked-Invoke` and the state `PersistOnlyResources-Invoked`. It has no user
interaction, and hence no need for permissions.

> For example, `PersistOnlyResources` can be used in a workflow to add a new user, as we first
> create a user sheet but without any account, etc.

## States

By default, Usercube's workflow engine implements the following state templates:

- `Action-ActionPending`
- `Action-Executed`
- `Action-Aborted`
- `Action-Purged`
- `ActionWithRefine-ActionPending`
- `ActionWithRefine-Executed`
- `ActionWithRefine-RefinePending`
- `ActionWithRefine-Aborted`
- `ActionWithRefine-Purged`
- `Review-ReviewPending`
- `Review-Declined`
- `Review-Approved`
- `Review-Aborted`
- `Review-Purged`
- `ReviewWithFeedback-ReviewPending`
- `ReviewWithFeedback-Approved`
- `ReviewWithFeedback-Declined`
- `ReviewWithFeedback-RefinePending`
- `ReviewWithFeedback-Aborted`
- `ReviewWithFeedback-Purged`
- `ContinueWith-Invoked`
- `Persist-Invoked`
- `PersistOnlyResources-Invoked`

## Transitions

By default, Usercube's workflow engine implements the following transition templates:

- `Action-ActionPending-Save`
- `Action-ActionPending-Execute`
- `Action-ActionPending-Abort`
- `Action-Aborted-Purge`
- `ActionWithRefine-ActionPending-Save`
- `ActionWithRefine-ActionPending-Execute`
- `ActionWithRefine-ActionPending-Delegate`
- `ActionWithRefine-ActionPending-Abort`
- `ActionWithRefine-RefinePending-Save`
- `ActionWithRefine-RefinePending-Delegate`
- `ActionWithRefine-RefinePending-Execute`
- `ActionWithRefine-RefinePending-Abort`
- `ActionWithRefine-Aborted-Purge`
- `Review-ReviewPending-Save`
- `Review-ReviewPending-Approve`
- `Review-ReviewPending-Decline`
- `Review-ReviewPending-Abort`
- `Review-Aborted-Purge`
- `ReviewWithFeedback-ReviewPending-Save`
- `ReviewWithFeedback-ReviewPending-Approve`
- `ReviewWithFeedback-ReviewPending-Decline`
- `ReviewWithFeedback-ReviewPending-Refine`
- `ReviewWithFeedback-ReviewPending-Abort`
- `ReviewWithFeedback-Aborted-Purge`
- `ReviewWithFeedback-RefinePending-Save`
- `ReviewWithFeedback-RefinePending-Delegate`
- `ReviewWithFeedback-RefinePending-Execute`
- `ContinueWith-Invoked-Invoke`
- `Persist-Invoked-Invoke`
- `PersistOnlyResources-Invoked-Invoke`

# Configure a Homonym Detection

In this section we configure the homonym search that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A
[homonym entity link](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
defines a new homonym search to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the search for homonyms is performed
according to the homonym control form. See section below.

### With customized filters

[Homonym entity link filters](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
allow to define customized filters for a homonym search.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the search for homonyms is performed by comparing the
values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input search value is retrieved directly from the property value

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
           Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
           Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
       /></HomonymEntityLink>

   ```

Here, `Property1` is set, so the search for homonyms is performed by comparing the `LastName` value,
entered by the user in the workflow form, with the phonetic value of existing resources stored as
the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input search value is deducted

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
       />    <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
       /></HomonymEntityLink>

   ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the search value is computed by
  applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + &#x27; &#x27; + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the search value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The search for homonyms is performed by comparing the search values computed based on each filter
with the values stored in the database and retrieves all resources that match any of the filters.

#### Filter on a language property

If a filter is set on a language property, the search for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym">    <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the search for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A
[display table](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is used to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

For more options, read
[how to configure display tables](/docs/identitymanager/6.1/identitymanager/index.md).

## Define the Homonym Control in the Workflow Form

The
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
where the homonyms are to be checked must contain a layout fieldset control where:

- the properties to check are represented;
- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties, see
[filter definition](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```

# How To Create a Workflow

This guide shows how to create a
[workflow](/docs/identitymanager/6.1/identitymanager/index.md) through the
XML configuration.

## Process

1. Declare a new
   [workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
   with given activities following Usercube's
   [activity templates](/docs/identitymanager/6.1/identitymanager/index.md).
2. Configure the input
   [form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
   with the right output type according to the purpose of the workflow.
3. Assign the adequate permissions via an
   [access control rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md).
4. Add
   [menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).
5. Add
   [aspects](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md),
   according to the purpose of the workflow.
6. Add optional elements if needed:
   [summaries](/docs/identitymanager/6.1/identitymanager/index.md); a
   [homonym detection](/docs/identitymanager/6.1/identitymanager/index.md);
   a
   [display table](/docs/identitymanager/6.1/identitymanager/index.md)
   different from Usercube's default one.

## Examples

You can also find configuration examples for several types of workflow:

- #### [For Resource Creation (Mono Record)](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create a workflow to create a new resource with a unique record.- ####
  [For Resource Creation (Multi Records)](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create a workflow to create a new resource with several records.- ####
  [For Resource Update (No Record)](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create a workflow to update an existing simple resource, i.e. to update, within a given
  existing resource, properties that do not involve records.- ####
  [For Resource Update (Mono Record)](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create a workflow to schedule the replacement of the unique record of an existing
  resource with a new one.- ####
  [For Resource Update (Multi Records)](/docs/identitymanager/6.1/identitymanager/index.md)
  Create a workflow to update an existing resource through its several records.- ####
  [Configure a Homonym Detection](/docs/identitymanager/6.1/identitymanager/index.md)
  How to configure the homonym search that checks if a resource already exists in the system,
  preventing duplicates.

# For Resource Creation (Mono Record)

This section guides you through the procedure for the creation of a workflow to create a new
resource with a unique record.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is made of four activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/identitymanager/index.md#actionwithrefine):
   sends the creation request with a possibility of delegation.
2. [`PersistOnlyResources`](/docs/identitymanager/6.1/identitymanager/index.md#persistonlyresources):
   saves the collected data to the repository without triggering provisioning.
3. [`ReviewWithFeedback`](/docs/identitymanager/6.1/identitymanager/index.md#reviewwithfeedback):
   reviews the creation request with the possibility of getting feedback from another user.
4. [`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to create a new worker.

```

<Workflow Identifier="Directory_User_NewInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" />  <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />  <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that defines the elements to display in the workflow.

Here we create two structured forms: the preliminary one is called inside the main one, and the main
one is to be called in our final workflow form.

```

Preliminary form for user data:
<Form Identifier="Workflow_Directory_User_NewInternal_PersonalData" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">      <Control Binding="LastName" IsRequired="true" />      <Control Binding="FirstName" IsRequired="true" />    </Control>    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset">      <Control Binding="PhoneNumber" />      <Control Binding="MobileNumber" />    </Control>    <Control DisplayName_L1="Photo" OutputType="LayoutRowset">      <Control Binding="User.Photo" InputType="Image" />    </Control>  </Control>

Preliminary form for user's contract data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Contract" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">    <Control Binding="UserType" IsRequired="true" />    <Control Binding="ContractStartDate" IsRequired="true" />    <Control Binding="ContractEndDate" InputType="Date" AddedMinutes="1440" />  </Control></Form>

Preliminary form for user's position data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Position" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Position" OutputType="LayoutFieldset">    <Control Binding="Title" />    <Control Binding="Organization" />    <Control Binding="Site" />    <Control Binding="PositionStartDate" />    <Control Binding="PositionEndDate" />  </Control></Form>

Main form for all data:
<Form Identifier="Workflow_Directory_User_NewInternal" EntityType="Directory_UserRecord">
  Section calling the preliminary form for user data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_PersonalData" />
  Section calling the preliminary form for contract data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Contract" />
  Section calling the preliminary form for position data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Position" /></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's creation with one record,
i.e. `WorkflowCreateRecordEntityForm` and it must specify the workflow's context (the entity type of
the involved resources, the main property, the activity when the form is called, etc.
[see more details](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)):

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>

```

A `WorkflowCreateRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>
  <MainControl OutputType="LayoutContainer"></MainControl>
</WorkflowCreateRecordEntityForm>

```

The `MainControl` attribute is here an empty container because we configure all personal data,
contracts and positions as
[records](/docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/position-changes.md)
to be able to anticipate changes for example. The line with the empty `MainControl` is not
mandatory.

- `RecordControl` that defines record data, and calls the form created previously.

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee">  <MainControl OutputType="LayoutContainer" />
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal" />
</WorkflowCreateRecordEntityForm>

```

![UI Form](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_form_v602.webp)

### Add a summary (Optional)

Another child element `RecordSummaryControl` can be added to insert a summary part, i.e. the form
used after the workflow execution to show some values, most of the time those affected by the
workflow, typically the properties editable in the workflow or generated properties. So in our
situation, it displays the `EmployeeId` and `Mail` attributes that the workflow just computed:

```

Summary form:
<Form Identifier="Workflow_Directory_User_New_Summary" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Important Information" OutputType="LayoutFieldset">    <Control Binding="UserIdentifier" />    <Control Binding="Email" />    <Control Binding="Login" />  </Control></Form><WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee">  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_Base" />
  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_New_Summary">
</WorkflowCreateRecordEntityForm>

```

![UI Summary](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_summary_v602.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole creation request and review from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*">

  Permissions for the Request activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" CanExecute="true" />

  Permissions for the Review activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
must be defined to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/identitymanager/index.md):

```

<MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">  ...
  <MenuItem Identifier="Menu_Search_Directory_User_NewInternal" DisplayName_L1="New Employee" IconCode="AddFriend" Workflow="Directory_User_NewInternal" /></MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/identitymanager/index.md#aspects)
according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, read
[how to configure a homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

When using records, the homonym detection displays the list of records and not just the list of
users.

Below is an example where a homonym entity link, based on the user's name, is called in the workflow
form:

```

Homonym detection:
<HomonymEntityLink Identifier="Homonym_Directory_UserRecord" FormEntityType="Directory_UserRecord">
  <Filter
    Property1="FirstName"
    Property2="LastName"
  />  <Filter
    Property1="FirstName" ComparisonProperty1="LastName"
    Property2="LastName" ComparisonProperty2="FirstName"
  />  <Filter
    Property1="FirstName"
    Property2="LastName" ComparisonProperty2="BirthName"
  /></HomonymEntityLink>

Partial form for user data:
...
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Directory_UserRecord">  <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">    <Control Binding="LastName" IsRequired="true" />    <Control Binding="FirstName" IsRequired="true" />  </Control></Control>...

```

![UI Homonym Detection](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmono_homonym_v603.webp)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

# For Resource Creation (Multi Records)

This section guides you through the procedure for the creation of a workflow to create a new
resource with several records.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is made of four activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/identitymanager/index.md#actionwithrefine):
   sends the creation request with a possibility of delegation.
2. [`PersistOnlyResources`](/docs/identitymanager/6.1/identitymanager/index.md#persistonlyresources):
   saves the collected data to the repository without triggering provisioning.
3. [`ReviewWithFeedback`](/docs/identitymanager/6.1/identitymanager/index.md#reviewwithfeedback):
   reviews the creation request with the possibility of getting feedback from another user.
4. [`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to create a new helpdesk worker, with the possibility to create
several records at once for said worker.

```

<Workflow Identifier="Helpdesk_Directory_User_New" DisplayName_L1="User - New Employee (multi record)" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" />  <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />  <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that defines the elements to display in the workflow.

Here we create three structured forms, all to be called in our final workflow form.

```

First form for the user's identification data:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">  <Control DisplayName_L1="User Information" OutputType="LayoutFieldset">    <Control Binding="Identifier" />    <Control Binding="EmployeeId" />    <Control Binding="IsDraft" />  </Control></Form>

Second form for the user's data shared with all records:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Shared" EntityType="Directory_UserRecord">

  Section for user's personal data, here their name and phone numbers:
  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset">    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">      <Control Binding="LastName" IsRequired="true" />      <Control Binding="FirstName" IsRequired="true" />    </Control>    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset">      <Control Binding="PhoneNumber" />      <Control Binding="MobileNumber" />    </Control>  </Control>

  Section for user's contract data, here their contract's type, start and end dates:
  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">    <Control Binding="UserType" IsRequired="true" />    <Control Binding="ContractStartDate" IsRequired="true" />    <Control Binding="ContractEndDate" InputType="Date" AddedMinutes="1440" />  </Control></Form>

Third form for the user's data specific to each record individually, so here position information:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Position" OutputType="LayoutFieldset">    <Control Binding="Title" />    <Control Binding="Organization" />    <Control Binding="Site" />    <Control Binding="StartDate"/>    <Control Binding="EndDate" InputType="Date" AddedMinutes="1440" />  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's creation with several
records, i.e. `WorkflowCreateSeveralRecordEntityForm` and it must specify the workflow's context
(the entity type of the involved resources, the main property, the activity when the form is called,
etc.
[see more details](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)):

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)"/>

```

A `WorkflowCreateSeveralRecordEntityForm` requires the following child elements:

- `MainControl` that defines the user's data that never changes so identification data, and calls
  the firstform created previously;

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)">
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

- `RecordControl` that defines the record data shared with all records, and calls the secondform
  created previously;

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)">  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

In a situation where users can have several positions but also several contracts, then contract data
would be part of the form called by `RecordUniqueItemControl` instead of `RecordControl`.

In a situation where positions, contracts and personal data are all configured as
[records](/docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/position-changes.md)
because we want to be able to anticipate changes for example, then there would not be any data
shared by all records. Then `RecordControl` would be empty. See the configuration example below this
note.

> ```
>
> <WorkflowCreateSeveralRecordsEntityForm ... >  ...
>   <RecordControl OutputType="LayoutContainer">    <Control OutputType="LayoutContainer" />  </RecordControl>
>   ...
> </WorkflowCreateSeveralRecordsEntityForm>
>
> ```

- `RecordUniqueItemControl` (optional but recommended) that defines the record data specific to each
  record individually, and calls the thirdform created previously.

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)">  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

![UI Form](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmulti_form_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole creation request and review from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Helpdesk_Directory_User_New*" DisplayName_L1="Administrator_Workflows_Helpdesk_Directory_User_New*">

  Permissions for the Request activity:
  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" CanExecute="true" />

  Permissions for the Review activity:
  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/ReviewPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
must be defined to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/identitymanager/index.md):

```

<MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">  ...
  <MenuItem Identifier="Menu_Search_Directory_User_Helpdesk_New" DisplayName_L1="New User (helpdesk)" IconCode="AddFriend" Workflow="Helpdesk_Directory_User_New" />
</MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/identitymanager/index.md#aspects)
according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, read
[how to configure a homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

When using records, the homonym detection displays the list of records and not just the list of
users.

Below is an example where a homonym entity link, based on the user's name, is called in the workflow
form:

```

Homonym detection:
<HomonymEntityLink Identifier="Homonym_Directory_UserRecord" FormEntityType="Directory_UserRecord">
  <Filter
    Property1="FirstName"
    Property2="LastName"
  />  <Filter
    Property1="FirstName" ComparisonProperty1="LastName"
    Property2="LastName" ComparisonProperty2="FirstName"
  />  <Filter
    Property1="FirstName"
    Property2="LastName" ComparisonProperty2="BirthName"
  /></HomonymEntityLink>

Partial form for user data:
...
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Directory_UserRecord">  <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">    <Control Binding="LastName" IsRequired="true" />    <Control Binding="FirstName" IsRequired="true" />  </Control></Control>...

```

![UI Homonym Detection](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmono_homonym_v603.webp)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of a display table for our situation:

```

<DisplayTable Identifier="Directory_UserRecord_SeveralRecords" EntityType="Directory_UserRecord" DisplayTableDesignElement="table">  <Column DisplayBinding="Title.InternalDisplayName" DisplayName_L1="Title" IsDisplayInSummaryView="true" ColumnSize="1" />  <Column DisplayBinding="Organization.InternalDisplayName" DisplayName_L1="Department" IsDisplayInSummaryView="true" ColumnSize="1" />  <Column DisplayBinding="Location.InternalDisplayName" DisplayName_L1="Site" IsDisplayInSummaryView="true" ColumnSize="1" />  <Column DisplayBinding="StartDate" DisplayName_L1="Start Date" IsDisplayInSummaryView="true" ColumnSize="1" />  <Column DisplayBinding="EndDate" DisplayName_L1="End Date" IsDisplayInSummaryView="true" ColumnSize="1" /></DisplayTable>

```

# For Resource Update (Mono Record)

This section guides you through the procedure for the creation of a workflow to schedule the
replacement of the unique record of an existing resource with a new one.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is made of two activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/identitymanager/index.md#actionwithrefine):
   sends the resource's record update request with a possibility of delegation.
2. [`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to update only the user's name.

```

  <Workflow Identifier="Directory_User_ChangeName" DisplayName_L1="User - Update Name" VariablesType="Workflow_Directory_User">    <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />    <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />  </Workflow>

```

For now, our workflow works with an immediate validation and an immediate effect.

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that defines the elements to display in the workflow.

Here we just have the full name field to update the corresponding attributes for a given user:

```

<Form Identifier="Workflow_Directory_User_ChangeName_Base" EntityType="Workflow_Directory_User">  <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" EntityType="Directory_UserRecord">    <Control Binding="LastName" />    <Control Binding="FirstName" />  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a (unique) record's replacement, i.e.
`WorkflowAddAndEndRecordEntityForm` and it must specify the workflow's context (the entity type of
the involved resources, the main property, the activity when the form is called, etc.
[see more details](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)):

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name"></WorkflowAddAndEndRecordEntityForm>

```

A `WorkflowAddAndEndRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName_Base" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name">
  <MainControl OutputType="LayoutContainer"/>
</WorkflowAddAndEndRecordEntityForm>

```

The `MainControl` attribute is here an empty container, because it is a mandatory attribute that is
not involved in the changes of this workflow.

- `RecordControl` that defines record data, and call the form created previously.

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name" >  <MainControl OutputType="LayoutContainer"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeName_Base" />
</WorkflowAddAndEndRecordEntityForm>

```

![UI Form](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/howto_resourceupdatemono_form_v603.webp)

`End of transition` sets the date for the change of records scheduled by this form.

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_*" DisplayName_L1="Administrator_Workflows_Directory_User_*">  <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/identitymanager/index.md):

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">  <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions">    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">      ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ChangeName" DisplayName_L1="Update Name" IconCode="Edit" Workflow="Directory_User_ChangeName" />
    </MenuItem>  </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/identitymanager/index.md#aspects)
according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, read
[how to configure a homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

When using records, the homonym detection displays the list of records and not just the list of
users.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

# For Resource Update (Multi Records)

This section guides you through the procedure for the creation of a workflow to update an existing
resource through its several records.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is made of three activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/identitymanager/index.md#actionwithrefine):
   sends the resource's records update request with a possibility of delegation.
2. [`ReviewWithFeedback`](/docs/identitymanager/6.1/identitymanager/index.md#reviewwithfeedback):
   reviews the update request with the possibility of getting feedback from another user.
3. [`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to update the records of an existing user:

```

<Workflow Identifier="Directory_User_UpdateSeveralRecords" DisplayName_L1="User - Manage positions" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request"  DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="Review"  DisplayName_L1="Review" Template="ReviewWithFeedback" />  <Activity Identifier="Persist"  DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that defines the elements to display in the workflow.

Here we create three structured forms, all to be called in our final workflow form:

```

First form for the user's record data, shared with all records:
<Form Identifier="Directory_User_UpdateSeveralRecords_Shared" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset">    <Control Binding="ContractStartDate" />    <Control Binding="ContractEndDate" AddedMinutes="1440" />  </Control></Form>

Second form for the user's record data, specific to each record individually:
<Form Identifier="Directory_User_UpdateSeveralRecords_Base" EntityType="Workflow_Directory_User">  <Control OutputType="LayoutContainer" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Position" OutputType="LayoutFieldset">      <Control Binding="Title" IsRequired="true" />      <Control Binding="Department" />      <Control Binding="Site" DefaultValueBinding="Department.Manager.MainRecord.Site" />      <Control Binding="StartDate" />      <Control Binding="EndDate" />    </Control>  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update with several
records, i.e. `WorkflowUpdateSeveralRecordEntityForm` and it must specify the workflow's context
(the entity type of the involved resources, the main property, the activity when the form is called,
etc.
[see more details](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)):

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"></WorkflowUpdateSeveralRecordsEntityForm>

```

`WorkflowUpdateSeveralRecordEntityForm` displays a date picker for the end of transition, to
schedule the record replacement.

A `WorkflowUpdateSeveralRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">
  <MainControl OutputType="LayoutContainer" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `MainControl` attribute is here an empty container, because it is a mandatory attribute that is
not involved in the changes of this workflow.

- `RecordControl` that defines the record data shared with all records and calls the firstform
  created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordUniqueItemControl` that defines the record data specific to each record individually, and
  calls the secondform created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveControl` that copies an existing record to be the base, i.e. pre-fill the fields, for
  the update of record data specific to each record individually. Thus it calls the same form as
  `RecordUniqueItemControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveUniqueItemControl` that copies an existing record to be the base, i.e. pre-fill the
  fields, for the update of record data shared with all records. Thus it calls the same form as
  `RecordControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">  <MainControl OutputType="LayoutContainer"/>  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />  <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `RecordSlaveControl` attribute calls here the same form as `RecordUniqueControl`, because it
copies part of the main record to pre-fill the fields of `RecordUniqueControl`.

![UI Form](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-multi/howto_resourceupdatemulti_form_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_*" DisplayName_L1="Administrator_Workflows_Directory_User_*">  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Purged" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/ReviewPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/identitymanager/index.md):

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">  <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions">    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">      ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ManagePositions" DisplayName_L1="Manage Positions" IconCode="Edit" Workflow="Directory_User_UpdateSeveralRecords" />
    </MenuItem>  </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/identitymanager/index.md#aspects)
according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, read
[how to configure a homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

When using records, the homonym detection displays the list of records and not just the list of
users.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

# For Resource Update (No Record)

This section guides you through the procedure for the creation of a workflow to update a simple
resource, i.e. to update, within a given resource, properties that do not involve records.

## Declare a Workflow

This
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is made of two activities:

1. [`ActionWithRefine`](/docs/identitymanager/6.1/identitymanager/index.md#actionwithrefine):
   sends the resource's update request with a possibility of delegation.
2. [`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist):
   saves the collected data and triggers provisioning.

The example below creates a workflow to update only the user's `IsDraft` attribute.

```

<Workflow Identifier="Directory_User_ChangeIsDraft" DisplayName_L1="User - Update IsDraft" VariablesType="Workflow_Directory_User">  <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />  <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that defines the elements to display in the workflow.

Here we just have one field called `IsDraft` to update the corresponding boolean attribute for a
given user:

```

<Form Identifier="Workflow_Directory_User_ChangeIsDraft_Base" EntityType="Workflow_Directory_User">  <Control DisplayName_L1="IsDraft" OutputType="LayoutRowset" EntityType="Directory_User">    <Control Binding="IsDraft" />  </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update, i.e.
`WorkflowEditEntityForm` and it must specify the workflow's context (the entity type of the involved
resources, the main property, the activity when the form is called, etc.
[see more details](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)):

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft"/>

```

A `WorkflowEditEntityForm` requires one child element `MainControl` that defines the actual content
of the workflow's form and calls the form created previously:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft">
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
</WorkflowEditEntityForm>

```

![UI Form](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_form_v603.webp)

### Add a summary (Optional)

Another child element `SummaryControl` can be added to insert a summary part, i.e. the form used
after the workflow execution to show some values, most of the time those affected by the workflow,
typically the properties editable in the workflow or generated properties. So in our situation, it
displays the `IsDraft` attribute that the user just changed:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft">  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
  <SummaryControl OutputType="LayoutContainer" EntityType="Directory_User">    <Control Binding="IsDraft" />  </SummaryControl>
</WorkflowEditEntityForm>

```

![UI Summary](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_summary_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about
[workflows' permissions](/docs/identitymanager/6.1/identitymanager/index.md).

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*">  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/ActionPending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/RefinePending" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Aborted" CanExecute="true" />  <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
must be defined to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing
[menu items list](/docs/identitymanager/6.1/identitymanager/index.md):

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu">  <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions">    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section">      ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ChangeIsDraft" DisplayName_L1="Change IsDraft" IconCode="Edit" Workflow="Directory_User_ChangeIsDraft" />
    </MenuItem>  </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add
[aspects](/docs/identitymanager/6.1/identitymanager/index.md#aspects)
according to the workflow's purpose.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Usercube, read
[how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

# Workflows

In software business, a
[workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is a series of specific actions taken by specific people to accomplish specific tasks. For Usercube,
workflows are models of business workflows, processes or procedures.

## Overview

Workflows model business processes and update data within Usercube, they handle managed systems only
indirectly through Usercube. They are engaged in order to complete a task, assigning rights for
instance. It is a way of getting work done, a series of steps that are required to be completed
sequentially. Most of the time, Usercube's workflows are made for:

1. manual entitlement requests = request / send notification(s) / approve / assign entitlement.
2. addition/update/deletion of resources (used in practice for identities) = create / give basic
   entitlements / review / apply changes.

Workflows are very configurable objects with many available options. However, the most efficient way
to use workflows in IGA is to keep them simple. Usercube's demo workflows constitute effective
examples.

A workflow is made of several elements:

- a series of [activities](#activities) that constitutes the workflow;
- a form that collects input data;
- [permissions](#permissions) required to realize the workflow's activities;
- [menu items](#menu-items) that make the workflow and its activities accessible;
- [aspects](#aspects) that allow specific actions to be performed;
- a summary(optional) of the workflow's results;
- a homonym detection(optional) that prevents duplicates in resources;
- a display table(optional) that replaces Usercube's default table displaying the data of the
  created/modified resource.

### Technical principles

- A workflow is linked to
  one[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  and concerns only resources from said entity type. For example, a workflow can be linked to
  `Directory_User` or `Directory_Department` according to the workflow's purpose, but not both
  together.
- The aim of a workflow is to get input data (either a form or just an approval) from users involved
  in the workflow, then build a change set, and finally apply said change set to the relevant
  resource.
- Starting a workflow means starting its first activity.

## Activities

A workflow is made of successive activities, each of which is assigned an
[activity template](/docs/identitymanager/6.1/identitymanager/index.md)
that defines how transitions occur from a workflow step to another.

Activities never run in parallel in a workflow. Each activity can start once the previous one
reached its final state.

## Forms

Workflows use
[forms](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to collect input data through the UI.

A form is a set of fields, configured with
[controls](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).
A control can define a field to fill, a fields set, call an existing form, etc. depending on its
output type. To be displayed in the UI, and potentially filled by a given user with the appropriate
data, a form must have a type.

Forms without a type can be created in order to be called in other forms with a type. It can be
useful to structure your forms, and to avoid rewriting a part of form that is needed in most forms
for example.

### Form types

Usercube provides a few form types. Each form type implies the necessity of specific controls as
child elements with specific purposes.

The following table presents the required child controls required for each form type applicable to a
workflow's input form:

- **M** for `MainControl`(required) groups resource data apart from record data;
- **Su** for `SummaryControl`(optional when no/mono record) sums up resource data, mostly computed
  properties, after the workflow's execution;
- **R** for `RecordControl`(required when handling records) groups the record data shared with all
  records;
- **RUI** for `RecordUniqueItemControl`(recommended when handling records) groups the record data
  specific to each record individually;
- **RSUI** for `RecordSlaveUniqueItemControl`(optional when updating multi records) appoints an
  existing record to be the base of the fields' pre-filling, before the update of the record data
  shared with all records;
- **RS** for `RecordSlaveControl`(recommended when updating multi records) appoints an existing
  record to be the base of the fields' pre-filling, before the update of the record data specific to
  each record individually;
- **RSu** for `RecordSummaryControl`(optional when handling mono record) sums up record data, mostly
  computed properties, after the workflow's execution.

| Form Type                                 | M    | Su   | R    | RUI   | RSUI  | RS   | RSu  |
| ----------------------------------------- | ---- | ---- | ---- | ----- | ----- | ---- | ---- |
| Workflow**Create**EntityForm              | Req. | Opt. |      |       |       |      |      |
| Workflow**Edit**EntityForm                | Req. | Opt. |      |       |       |      |      |
| Workflow**UpdateRecord**EntityForm        | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**AddRecord**EntityForm           | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**AddAndEndRecord**EntityForm     | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**CreateRecord**EntityForm        | Req. | Opt. | Req. |       |       |      | Opt. |
| Workflow**CreateSeveralRecord**EntityForm | Req. |      | Req. | Reco. |       |      |      |
| Workflow**UpdateSeveralRecord**EntityForm | Req. |      | Req. | Reco. | Reco. | Opt. |      |
| Workflow**UpdateRecord**Entit**ies**Form  | Req. | Opt. | Req. | Reco. |       |      | Opt. |

## Permissions

For each workflow, some permissions must be assigned to specific
[profiles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
so that said profiles are entitled to realize the workflow's actions.

While assigning the specific permissions of a workflow, it is necessary to assign the involved
profiles a few essential rights via the
[`WorkflowAccessControlRules`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
scaffolding.

A workflow needs a permission for each of all its activity states involving user interaction. This
means that, for example, the activities following the templates
[`Persist`](/docs/identitymanager/6.1/identitymanager/index.md#persist)
and
[`PersistOnlyResources`](/docs/identitymanager/6.1/identitymanager/index.md#persistonlyresources)
do not require any permission. This also means that, in the example of the
[`Action`](/docs/identitymanager/6.1/identitymanager/index.md#action)
template, a workflow would need permissions for the states `ActionPending`, `Aborted` and `Purged`
(because deletion requires an authorization), but not for the state `Executed` that does not involve
user interaction or special authorization.

All these permissions can be shared and distributed among several profiles, according to the purpose
of the workflow.

Usercube's permissions are assigned through
[access control rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
and follow the naming rule:
`/Custom/workflows/{workflow_identifier}/{activity_identifier}/{activityTemplateState_shortIdentifier}`.

> For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request/ActionPending"`
> gives the right to act from the state `ActionPending` (so save, execute, etc.), inside a
> previously created activity `Request`, inside the workflow `Directory_User_StartInternal`.

A permission specifying the activity without the activity state gives the permissions for all
activity states in this activity.

For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request"`  
**Caution**: this way of writing permissions is unsafe in case of a modification in the activity. So
use it only for a "super admin" kind of profile if you are certain you want to give all rights.

## Menu Items

[Menu items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
make workflows accessible from the UI.

Usercube's UI is configured so that workflows are accesible from:

- the list of users accessible from the **Directory** section on the home page;
  ![Workflow Menu Items - Users List](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)
- the view page of a given user. In this case, the workflows manipulate the selected user.
  ![Workflow Menu Items - User's Page](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

## Aspects

An
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
definition allows an action to be performed at a specific point in a workflow. Usercube provides a
few
[aspect templates](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
that give the opportunity to delegate administration, to notify people of a request's progress and
to compute special values like unique logins or email addresses.

## Summaries (Optional)

A summary can be displayed at the end of a workflow to sum up the collected information. The
displayed data is configured through the `SummaryControl` or `RecordSummaryControl` introduced
previously. A summary is particularly useful for workflows that compute properties like the
`EmployeeId` or the email address. Thus calculated fields can be displayed after the workflow's
execution.

## Homonym Detections (Optional)

A homonym search checks if a resource already exists in the system before creating/modifying it,
preventing duplicates. It is configured through a
[homonym entity link](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

[Read how to configure a homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

## Display Tables (Optional)

Usercube provides a default
[display table](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to show the created/modified resource's data, but you can configure your own.

[Read how to configure a display table](/docs/identitymanager/6.1/identitymanager/index.md).

# Workflow Uses

An Usercube
[Workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
is the sequence of processes that a company has established to manage identities across the
organization. Workflows makes an approval business process more efficient by managing and tracking
all of the human tasks involved with the process and by providing a record of the process after it
is completed.

The identity management
[Workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
can be broken into four key areas:

## 1. Onboarding

The initial creation of the user. This can occur manually within the identity management system or
it could be triggered from an HR system. Here is the xml configuration to create the user onboarding
Workflow in Usercube :

```

<Workflow Identifier="User_Onboarding" DisplayName_L1="User - New Employee" VariablesType="Workflow_User">    <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />    <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" />    <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />    <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

The _"User_Onboarding"_ Workflow is composed of the following activities:

- _"Request"_ to initialize the creation of an user in Usercube.
- _"PersistDraft"_ to save a preliminary version of the user object.
- _"Review"_ to validate or not the requested item.
- _"Persist"_ to take into account the requested item.

## 2. User Modifications

After the initial setup of access, there are ongoing changes. Those changes can center in on a
user's rights. These rights may need to be expanded or contracted. The user's information may need
to be modified. Here is an example to create the user change name Workflow in Usercube :

```

<Workflow Identifier="User_ChangeName" DisplayName_L1="Collaborateur - Changement du nom" VariablesType="Workflow_User">    <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />    <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## 3. IT Resource Modifications

The other area of on-going changes is the addition and removal of various IT resources. These
resources can include devices, applications, and networks. Here is the xml configuration to create
the resource modifications Workflow in Usercube :

```

<Workflow Identifier="User_ResourcesUpdate" DisplayName_L1="Collaborateur - G�rer les droits" VariablesType="Workflow_Directory_User">    <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />    <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## 4. Offboarding

The end of the identity lifecycle is the offboarding of a user. Credentials are terminated and the
user's account access is terminated everywhere. Here is the xml configuration to create the user
offboarding Workflow in Usercube :

```

<Workflow Identifier="User_Offboarding" DisplayName_L1="D�part d'un collaborateur" VariablesType="Workflow_User">    <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />    <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

# Workflow Homonym

In this section we configure the homonym detection that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A
[homonym entity link](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
defines a new homonym detection to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the detection for homonyms is performed
according to the homonym control form. See section below.

### With customized filters

[Homonym entity link filters](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
allow to define customized filters for a homonym detection.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the detection for homonyms is performed by comparing
the values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Filters on several entities

A homonym entity link can contain filters on the properties from several distinct entity types.

> The following example searches for homonyms among usual workers (from `Directory_UserRecord`) but
> also the guests (from `Directory_Guest`):
>
> ```
>
> <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord">  <Filter
>       Property1="LastName"
>       Property2="FirstName"
>   />
>   <Filter
>       Property1="LastName" ComparisonProperty1="Directory_Guest:LastName"
>       Property2="FirstName" ComparisonProperty2="Directory_Guest:FirstName"
>    />
> </HomonymEntityLink>
>
> ```

In this case, a display table is required for the additional entity. See the section below.

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input detection value is retrieved directly from the property value

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
           Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
           Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
       /></HomonymEntityLink>

   ```

Here, `Property1` is set, so the detection for homonyms is performed by comparing the `LastName`
value, entered by the user in the workflow form, with the phonetic value of existing resources
stored as the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input detection value is deducted

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
       />    <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
       /></HomonymEntityLink>

   ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the detection value is computed
  by applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + ' ' + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the detection value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The detection for homonyms is performed by comparing the detection values computed based on each
filter with the values stored in the database and retrieves all resources that match any of the
filters.

#### Filter on a language property

If a filter is set on a language property, the detection for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym">    <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the detection for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A
[display table](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is used to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" />    <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />    <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

## Define the Homonym Control in the Workflow Form

The
[form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
where the homonyms are to be checked must contain a layout fieldset control where:

- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.
- the properties to check (defined in the homonym filters) are represented in the control bindings.
- the bindings are all represented in the homonym filters.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties, see
[filter definition](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```

If a filter is declared with a `ComparisonProperty` attribute (and so without a `Property`), then
the properties used in the `Expression` (whether defined in the filter or elsewhere in the
configuration) to compute the `ComparisonProperty` must also be represented in the control bindings.

In the example below, the properties used in the `Expression1` attribute that must be represented in
the control bindings are `LastName` and `FirstName`.

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym">    <Filter
        ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
    /></HomonymEntityLink>

```

# Architecture

Usercube is built to work via a specific architecture made of a server, an agent and a database.

## Server, Agent and Database

Usercube works via:

- a server which operates computation, stores all applicative data in the database, and serves a web
  User Interface;
- at least one agent which operates data flows to/from the managed systems.

  The managed systems' credentials are used only by the agent and are never disclosed to the
  server.

The agent can call the server, but the server cannot call the agent. The data flows' initiatives are
always from the agent.

## Installation Types

Usercube can be installed:

- SaaS so that the server dwells in the cloud and is provided as a service;

  ![Architecture: SaaS](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/architecture/saas/architecture_saas.webp)

- on-premises so that the server is installed on an isolated network within the company.

  ![Architecture: On-Premises](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/architecture/on-prem/architecture_onprem.webp)

## Next Steps

Let's learn about
[Usercube's configuration](/docs/identitymanager/6.1/identitymanager/index.md).

## Learn More

[Learn more on Usercube's architecture](/docs/identitymanager/6.1/identitymanager/core-concepts/architecture/index.md).

[Learn more on network configuration](/docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md).

# Configuration

There are several options for configuring Usercube.

## Application Configuration

### User Interface

NETWRIX strongly recommends that Usercube be configured, as much as possible, via the UI.

### XML files

For advanced users, if the UI is not enough, Usercube can also be configured via XML files. These
XML files should be placed in a `Conf` folder directly inside the working directory.

### Database

Usercube's application configuration, whether it is made from the UI or the XML files, is stored in
a database which should never be modified manually.

## Network Configuration

Usercube's server and agent(s) are configured via JSON files, mainly `appsettings.json` and
`appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

- the [User Guide](/docs/identitymanager/6.1/identitymanager/index.md) to configure Usercube
  from scratch via the UI, following the step-by-step procedures;
- the [Integration Guide](/docs/identitymanager/6.1/identitymanager/getting-started/index.md) to
  complete Usercube's configuration in XML according to your needs;
- the [Installation Guide](/docs/identitymanager/6.1/identitymanager/installation-setup/index.md) to
  install Usercube in a production environment.

## Learn More

[Learn more on the working directory](/docs/identitymanager/6.1/identitymanager/installation-setup/working-directory-setup.md).

[See how to configure Usercube from scratch via the UI](/docs/identitymanager/6.1/identitymanager/index.md).

[See how to export the UI configuration to XML files](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/configuration-tools.md).

[See how to (re)deploy the XML configuration](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/configuration-tools.md).

[Learn more about the XML configuration schema](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

[Learn more about network configuration](/docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md).

# Introduction Guide

This guide is designed to give a complete overview of Usercube's principles, main objectives and
capabilities.

NETWRIX strongly recommends starting here to fully benefit from the
[Integration Guide](/docs/identitymanager/6.1/identitymanager/getting-started/index.md)'s or the
[User Guide](/docs/identitymanager/6.1/identitymanager/index.md)'s contents.

## Target Audience

This guide is meant to be read by:

- integrators who configure Usercube to match their projects' needs;
- IGA project managers who want to get a better understanding of Usercube.

## Prior Knowledge

A basic knowledge of Identity and Access Management (IAM) and Identity Governance and Administration
(IGA) is required to understand this guide.

## First Steps

Let's dive in with an
[overview of IGA and Usercube](/docs/identitymanager/6.1/identitymanager/index.md).

# More Information

The documentation is not yet available for this page and will be completed in the near future.

# Entitlement Management

Managing identities' entitlements requires managing entitlements and assigning them to identities.
This page is about the role model.

## Role Model Overview

A managed system's entitlements can have many forms. They authorize identities to access certain
data on a given system, or a physical location.

> For example, entitlements in the Active Directory are usually group memberships. For example, to
> have administrator rights in the Iris application, a user must be part of the members of the group
> `SG_APP_IT/Development/Iris/Administrator`.

Usercube is designed to help establish an exhaustive and reliable catalog of the entitlements
available in the managed systems, and assign the right entitlements to the right users.

![Role Catalog and Users](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_rolecatalogusers.webp)

Thus, the role model contains:

- the entitlements, as roles, for all managed systems;
- the rules that trigger the assignment of entitlements to identities, and more broadly manage the
  systems' resources. Some of them act as link between Usercube's roles and the systems' accounts
  and permissions. Some of them are linked to, and thus apply only to, specific resource types.

![Role Model](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_rolemodel.webp)

The role model is a subset of a policy that also includes
[governance](/docs/identitymanager/6.1/identitymanager/index.md)
data such as risk definition. So, at a higher level, distinct policies can be used to implement
distinct behaviors.

## A Role Catalog

Usercube intends to represent IGA-related access right mechanisms by a
[role-based](https://en.wikipedia.org/wiki/Role-based_access_control) model. The goal of the role
catalog is contain an exhaustive list of entitlements from all managed systems.

Entitlements from the managed systems are modeled by roles. For each entitlement, NETWRIX advises
creating a single role, with an easily understandable name, more functional than technical, so that
everyone knows what the role is for.

![Single Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarole.webp)

Each individual entitlement should usually be modeled by a single role, and single roles can be
grouped together into composite roles to be closer to real job positions.

![Composite Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_compositeroles.webp)

## A Rule Set

Roles alone are not enough to give identities the systems' technical entitlements. We need rules to
have Usercube write users' entitlements in the managed systems. Rules are further used to
automatically assign roles to users, or to categorize users and accounts, etc.

### Provisioning rules

Just like identities, accounts are represented in Usercube by an
[entity-relationship model](/docs/identitymanager/6.1/identitymanager/index.md).
So Usercube manages entitlements as resources' attribute values.

> For example, giving specific Active Directory permissions to a new user means not only creating a
> new AD account, but also setting values for certain account properties like `cn`,
> `sAMaccountName`, `userAccountControl` or `dn`, etc.

Provisioning rules write the actual entitlements to the managed systems, most often based on users'
roles.

> For example, to give an AD entitlement to a user, we usually need to give them a group membership.
> Thus, we should have a rule that, when a user is assigned a specific role, adds the user to the
> member list of a specific AD group.

![Provisioning Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_provisioningrules.webp)

Even when a role is manually assigned, provisioning rules will determine which account (and
permission groups) are given as entitlements.

Usercube's provisioning rules are:

- scalar rules to compute simple string properties;
- navigation rules and query rules to compute properties that act as foreign keys in a database;
- resource type rules to automatically create resources.

### Assignment rules

While the role catalog and provisioning rules are together enough to manually give users their
access rights, we often want Usercube to do this automatically. Assignment rules automatically
assign roles to identities based on specific criteria.

> For example, we can choose to assign the role `Benefits Manager - FR` to any user whose job title
> is benefits manager and whose location is in France.

![Assignment Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_assignmentrules.webp)

Once all assignment rules are created, Usercube is able to spot existing assignments that are not
supported by any rule, marking them as non-conforming.
[See more details on governance](/docs/identitymanager/6.1/identitymanager/index.md).

Usercube's assignment rules are:

- single role rules and composite role rules to assign single and composite roles;
- resource type rules to assign accounts.

### Categorization rules

Different resources can be managed through different rules, by being part of different resource
types. So a resource type is a group a resources that have the same IGA-related purposes.
Categorization rules categorize resources into resource types and link identities to the accounts
they own.

> For example, we might need to differentiate AD's standard accounts from administration accounts.
> This way, we can configure different email addresses for privileged accounts, for example
> [adm.john.smith@contoso.com](mailto:adm.john.smith@contoso.com). We can also add more approval
> steps in the workflows related to privileged accounts, for more security than for standard
> accounts.

![Categorization Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_categorizationrules.webp)

Usercube's categorization rules are:

- correlation rules to link identities to the accounts they own;
- classification rules to categorize resources into resource types.

### More rules

Usercube provides more kinds of rules for optimization purposes, for example role naming conventions
to help build the role catalog by generating roles and navigation rules based on the entitlements'
names, or automation rules to help with governance by automating the review of the assignments that
do not comply with the configured rules.

### Dimensions

Rules can be triggered based on users' assigned roles, but also based on user data.

The
[identity model](/docs/identitymanager/6.1/identitymanager/index.md)
can be refined by configuring dimensions: criteria from among resources'
[attributes](https://en.wikipedia.org/wiki/Attribute-based_access_control) that will trigger the
application of the rules. Then Usercube applies the rule for any resource whose value for a given
attribute matches the reference value specified in the rule.

> For example, a user can be assigned the role `Benefits Manager - FR` only if their job title is
> benefits manager and their location is in France. In this case, users' attributes "job title" and
> "location" are the dimensions that trigger the assignment rule.

In a nutshell, dimensions determine who should be assigned the entitlements.

Usercube's name and logo are based on this dimension concept: entitlement assignment is governed by
users' attributes defined as dimensions. Let's schematize users around these dimensions:

- The schema for this with one dimension would be a line with all available values for the
  dimension, and identities are distributed along the line.
- The schema with two dimensions would be a table, a square.
- The schema with three dimensions would be a 3D cube. And you can imagine 4D or 5D hypercubes, etc.

![Dimensions - 1D](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension1.webp)

#### 1D

![Dimensions - 2D](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension2.webp)

#### 2D

![Dimensions - 3D](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension3.webp)

## Next Steps

Let's learn about
[governance](/docs/identitymanager/6.1/identitymanager/index.md).

## Learn More

[Learn more on the role model](/docs/identitymanager/6.1/identitymanager/core-concepts/role-model.md).

[Learn how to build the single role catalog](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on composite roles](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on role assignment](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md).

[Learn more on provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on assignment rules](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on resource categorization rules](/docs/identitymanager/6.1/identitymanager/index.md).

# Governance

Usercube not only gives the right entitlements to the right identities, but also makes sure that,
over time, every assignment still complies with the configured policy.

## Enforcing the Policy

By reading entitlement data from the managed systems, Usercube builds an exhaustive list of existing
assignments for all identities in all managed systems.

Rules and roles define a policy. By definition, assignments not supported by a rule do not comply
with the policy. These assignments are identified as non-conforming in order to be acted upon by
knowledgeable users who can decide whether the assignment is warranted, such as security officers.

![Non-Conforming Assignments](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/role-assignment/assignments-of-entitlements/governance_nonconforming.webp)

A non-conforming assignment must be reviewed in Usercube by a knowledgeable user, and is therefore:

- either removed if Usercube correctly spotted it and the owner should indeed not possess this
  permission;
- or kept as an exception if the configured rules do not apply to this particular case.

## Other Governance Tools

Usercube provides a set of governance tools to help enforce the policy, like access certification
campaigns, risk management or reporting.

## Next Steps

Let's read some
[use case stories](/docs/identitymanager/6.1/identitymanager/index.md).

## Learn More

[Learn more on governance](/docs/identitymanager/6.1/identitymanager/governance/index.md).

[Learn more on reporting](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on access certification](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on risk management](/docs/identitymanager/6.1/identitymanager/index.md).

# Identity Management

Managing identities' entitlements requires starting by managing identities themselves.

## A Central Repository

A company involves many sorts of identities: obviously employees, but also external workers like
contractors who are usually not tracked in the company's systems except for billing purposes, bots,
softwares, etc. All identity types that need to be assigned entitlements to work within the company
must be represented.

Companies often use about one system for each identity type. Usercube capitalizes on information
from several source systems in order to build a central repository meant to contain all the data
necessary to manage all identities throughout their whole lifecycle.

![Usercube's Repository](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/identity-management/identities_repository.webp)

Usercube's central repository acts as an intermediary between the systems that provide data, for
example the HR system, and those that receive data, for example the Active Directory. This greatly
reduces the complexity in the links between all systems.

Without an intermediary, adding one system to a set of n systems requires up to n sets of rules, one
for each reading/writing relationship that this system has with the others. The complexity is
quadratic.

Now with the central repository as an intermediary, implementing a new system requires only one more
set of rules. The complexity becomes linear.

![identities_complexityquadratic](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/identity-management/identities_complexityquadratic.webp)

#### Quadratic Complexity

![identities_complexitylinear](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/identity-management/identities_complexitylinear.webp)

#### Linear Complexity

## An Entity Relationship Model

Identities, along with any IGA-related data, are modeled in Usercube by an
[entity-relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model?featherlight=true).

All this data is organized and modeled by entities. This concept is quite similar to a database: an
entity is a set of properties, some are scalar so "simple" properties, and others are navigation
properties which make links between entities, quite like foreign keys in a database.

> For example, consider an entity `Directory_User` with properties like `Name`, `Email`, `JobTitle`,
> `Department`.
>
> Another entity could be `Directory_Department`, linked to `Directory_User` through a navigation
> property.
>
> Another entity could be `SAB_User` to model SAB accounts owned by users from `Directory_User`. The
> accounts from `SAB_User` could be related to groups from another entity `SAB_Group`.

![Entity Type - Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

These entities' instances are called resources in Usercube. A resource can be the digital identity
of a user (human or bot), or an AD account or any other account, or an entry from the HR system, or
the representation of a department of the company, etc.

> Consider once more the `Directory_User` entity with properties like `Name`, `Email`, `JobTitle`,
> `Department`. Then a resource could be the digital identity of an employee whose name is John
> Smith, with the email address [john.smith@contoso.com](mailto:john.smith@contoso.com) and working
> as an assistant manager in the accounting department.

While Usercube provides a predefined model that should fit most organizations, it can still be
adjusted to your exact needs. Thus, Usercube provides a customizable model to organize a company's
data according to its IGA-related needs, which is also most reliable because it is kept up-to-date.

## Connectors

Each entity is related to a managed system, for example the Active Directory or SAB or ServiceNow,
etc. The reading/writing data between the system and Usercube are ensured by connectors. So Usercube
can be configured with one connector for each managed system.

![Connector Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

For a given system, a connector contains:

- the technology which enables data flows between the system and Usercube;
- the related entities which model the system's resources;
- the categories which group the system's resources together according to the rules that we want to
  apply to manage entitlement assignment for this system.

Thus, a connector enables synchronization, i.e. Usercube reading from a managed system via an
[extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load) process.

![Synchronization](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_synchronization.webp)

> A typical example is the synchronization of the HR system's data to retrieve employees' personal
> information.

It also enables provisioning, i.e. Usercube writing to a managed system, but that is something we
will dig into
[later](/docs/identitymanager/6.1/identitymanager/index.md).

![Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_provisioning.webp)

## Repository Updates

Once Usercube is configured, with not only connectors but also
[roles and rules, etc.](/docs/identitymanager/6.1/identitymanager/index.md)
(which constitute a different topic), changes can be made to the repository through:

- synchronization, when changes were made in the managed systems and then synchronized, so copied,
  to Usercube;
- manual input, mostly used for a few resources/properties that rarely change such as contractors'
  identities;
- workflows which contain approval steps to complete before the changes are actually applied;
- the
  [policy's rules](/docs/identitymanager/6.1/identitymanager/index.md)
  that trigger changes to the repository directly, and those that trigger changes to managed systems
  and impact the repository indirectly after the next synchronization.

## Next Steps

Let's learn about
[entitlement management](/docs/identitymanager/6.1/identitymanager/index.md).

## Learn More

[Learn more on identity management](/docs/identitymanager/6.1/identitymanager/identity-management/index.md).

[See how to create the workforce repository](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on connectors](/docs/identitymanager/6.1/identitymanager/connectors-integration/index.md).

[See how to create a connector](/docs/identitymanager/6.1/identitymanager/index.md).

[Learn more on synchronization](/docs/identitymanager/6.1/identitymanager/automation/synchronization/index.md).

[Learn more on workflows](/docs/identitymanager/6.1/identitymanager/index.md).

# IGA and Usercube

Usercube is a powerful tool for Identity Governance and Administration (IGA) automation.

## Identity Governance and Administration (IGA)

Identity Governance and Administration (IGA) is a combination of Identity Access Management (IAM)
and Identity Access Governance (IAG).

- IAM is about allowing the right identities to have the right permissions at the right time for the
  right reasons.
- IAG is about providing visibility regarding identities, user access, and for monitoring
  compliance.

[See Gartner's documentation on IGA](https://www.gartner.com/en/documents/3885381).

## Why Usercube

We could explain Usercube's purpose like this:

**Typically, Usercube manages entitlements automatically according to a user's needs, for example
Active Directory group memberships.**

---

**First, we need to manage identities.**

To do so, Usercube capitalizes on information from several source systems in order to build a
central repository. This repository should contain all the organizational data relevant for access
management for all users, meaning not only employees but also contractors, bots, or any kind of
identity.

![Synchronization](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_synchronization.webp)

**This implies involving external systems.**

Access management requires reading/writing data to/from varied systems and applications, like the
Active Directory. Usercube provides an expanded set of connectors which contain the technology
required for IGA-related data flows.

![Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_connectors.webp)

[See more details on identity management and connection between systems](/docs/identitymanager/6.1/identitymanager/index.md).

---

**Then, we need to manage entitlements, in other words access rights, or permissions.**

Usercube helps you build a role catalog that lists all entitlements from all managed systems. The
technical entitlements can then associated with new, functional names that more clearly represent a
business-oriented view point.

In addition, Usercube helps you determine identities' expected entitlements by building a role
model. This model contains different kinds of rules that will suggest entitlement assignments, or
even assign them directly, based on the imported organizational data.

As each working environment has its own particularities, you will be able to refine the identity
model by defining dimensions, i.e. criteria from among organizational data that will trigger the
rules.

![Calculation](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_calculation.webp)

---

**Finally, we need to actually give identities their entitlements and then govern them.**

Usercube can be configured to provision the managed systems in order to apply the changes dictated
by the role model. This provisioning can be done either directly, with automatic provisioning, or by
notifying system administrators of the needed changes. Thus, identities finally get their
entitlements.

![Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/introduction-guide/overview/overview_provisioning.webp)

Furthermore, Usercube provides a few workflows for entitlement request or user data modification,
which often include approval from a third party, hence identities get their entitlements securely.

[See more details on entitlement management](/docs/identitymanager/6.1/identitymanager/index.md).

Thanks to the role model and data flows between Usercube and the managed systems, Usercube ensures
the compliance of existing permission assignments with the policy, pointing out non-conforming
assignments.

[See more details on governance](/docs/identitymanager/6.1/identitymanager/index.md).

## Examples

[Find use case stories](/docs/identitymanager/6.1/identitymanager/index.md).

# Use Case Stories

Here is a basic use case story to explain how Usercube manages IGA.

## Use Case

Mr. James was just hired to join the Contoso company as a mechanical engineer. He will need access
to some of the company's most sensitive data, such as confidential blueprints, mechanical design
software licenses, and source files.

### Identity management

The central repository already exists, containing all workers, all departments, etc.

Mr. James' manager uses one of Usercube's workflows to add Mr. James as a new employee, filling in
his first name, last name, job title ("Mechanical Engineer"), his contract type ("permanent") and
his start date.

The rest of Mr. James' personal information, such as his birth date, etc., can be filled later by
someone from the HR department.

### Entitlement management

As Mr. James is not the first mechanical engineer in Contoso, Usercube already contains a composite
role named "R&D Mechanical Engineer". This role is meant to give its owners access to the company's
sensitive data useful for mechanical engineers. Assigning this role will trigger the assignment of
several single roles, each one giving one access right.

Technically speaking, each access right is granted via a membership to a specific Active Directory
group. Thus Usercube also contains a navigation rule that gives this group membership to any user
owning this single role.

In our example, each access right corresponds to an AD group membership, but it could be any
entitlement in any external system.

For Mr. James to get the access rights that he needs, there are several options:

- either Mr. James' manager manually assigns the "R&D Mechanical Engineer" role to him via a
  workflow before his arrival, for example setting the start date to two weeks after Mr. James'
  first day as he will be in training before then;
- or there may be an assignment rule that automatically assigns the role to any user with the job
  title "Mechanical Engineer", so Mr. James will get the role on his first day.

As the needed access rights involve the AD, Mr. James also needs to own an AD account which will be
linked to its identity in Usercube via correlation rules.

Once the requests for the role and the account are approved, Usercube can connect to the Active
Directory and create Mr. James' account and add it to the proper groups, via provisioning rules.

### Governance

Once the role model is well underway, Usercube can compare existing access rights to expected access
rights. Thus, Usercube makes sure that Mr. James always has all the entitlements he needs in order
to work, but not more to prevent security breaches.

## Next Steps

Let's learn about
[Usercube's architecture](/docs/identitymanager/6.1/identitymanager/index.md).

# 5.0.X to 5.1

## 1. Jobs

For any information about Jobs or Tasks:

- [Data model: Jobs](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
- [Execute Jobs](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)
- [information about all Tasks](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
- [Information about Jobs](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)

#### a. Powershell

In the old configuration, the Tasks needed to have an InstanceIdentifier (-i) to be launched. This
argument no longer exists today.

**Old powershell:**

```

    & $exeSynchronizationJob -j AzureAD_Synchronization -i 'Synchronizing AzureAD' -s $sqlConnectionString -p $pathTempSynchronization -u $apiUri -a $jobSecret -c $jobClientId -t AzureAD

```

**New powershell:**

```

    & $exeSynchronizationJob -j AzureAD_Synchronization -s $sqlConnectionString -p $pathTempSynchronization -u $apiUri -a $jobSecret -c $jobClientId -t AzureAD

```

**Other change:**

There are not openIdClient in all Synchronization. A new property is necessary to launch a
synchronization with a command:

```

    [Required]
    "-o|--cacheFilePath ", "Specifies the cache file directory to reload provisioning cache." (SingleValue)

```

There are not OpenIdclient for manualProvisioning.

In FulfillLDAPTask, the property Port doesn't exist in 5.1. The Server property write with this rule
: "Host:Port"

#### b. Configuration XML

In old configuration the task was named Job. All Jobs in 5.0.X are called Tasks in 5.1. The
Executable "Usercube-Upgrade-ConfigurationVersion" writes correctly Job in Task and Use the
scaffolding type. But the migrated tasks are not configured. it's necessary to check all Tasks and
connectors too before importing configuration.

**old Task configuration:**

```

    <Job DisplayName_L1="HR - Synchronization" Identifier="HR_Synchronization" Connector="HR" OpenIdClient="Job" JobType="Synchronization"/>

```

**New Task configuration:**

```

    <SynchronizeTask Identifier="HR_Synchronization" DisplayName_L1="HR - Synchronization" DisplayName_L2="RH - Synchronisation" Connector="HR" OpenIdClient="Job" />

```

#### c. Api RunJob

This API no longer exists in version 5.1. To launch a Task on the server side you must use either:

- The automaton (by creating a Job and linking the Tasks you want to launch)
- The [RunTask API](/docs/identitymanager/6.1/identitymanager/api-reference/server-api/jobs.md)

#### d. Information system appsettings

All the information of the information system is on this file:
[appsettings.ConnectionInformation.json](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).
To launch Tasks that need to connect to this system and that are launched with the automaton, you
must enter this information in this file.

#### f. Encryption appsettings.ConnectionInformation.json

All data from external systems is in a JSON that can be encrypted with an RSA key. Encrypt this with
[Usercube-Protect-X509JsonFile](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/security-tools.md)

# New Task Name Convention

| Old Name                                  | New Name                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Usercube.UpdateDirty                      | [Usercube-Set-RecentlyModifiedFlag](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                        |
| Usercube.RBACMining                       | [Usercube-Get-RoleMining](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                  |
| Usercube.Provisioner.Download             | [Usercube-Fulfill-ToFile](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                  |
| Usercube.Provisioner.LDAP.Job             | [Usercube-Fulfill-LDAP](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                    |
| Usercube.Provisioner.AzureAd              | [Usercube-Fulfill-AzureAd](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                 |
| Usercube.Provisioner.Manual.Job           | Usercube-Update-FulfillmentSates                                                                                                                                                                                                                                                                                               |
| Usercube.Provisioner.Workflow             | [Usercube-Fulfill-InternalWorkflows](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                       |
| Usercube.Provisioner.Job                  | Usercube-Fulfill-InternalResources                                                                                                                                                                                                                                                                                             |
| Usercube.ProfileAssignment.Job            | [Usercube-Set-InternalUserProfiles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                        |
| Usercube.PreExistingAssignment            | [Usercube-Save-PreExistingAccessRights](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                    |
| Usercube.OpenIdClient.Generator           | [Usercube-New-OpenIDSecret](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)                                                                                                                                                                                                                  |
| Usercube.UpgradeXml                       | Usercube-Upgrade-ConfigurationVersion                                                                                                                                                                                                                                                                                          |
| Usercube.MigrateDatabase                  | Usercube-Upgrade-DatabaseVersion                                                                                                                                                                                                                                                                                               |
| Usercube.CreateResourceViews              | [Usercube-Create-DatabaseViews](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                            |
| Usercube.ApiCall                          | [Usercube-Invoke-API](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                      |
| Usercube.Anonymizer                       | Usercube-Anonymize                                                                                                                                                                                                                                                                                                             |
| Usercube.ResourceClassification           | [Usercube-Update-Classification](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                           |
| Usercube.EntityProperties.Expressions.Job | [Usercube-Update-EntityPropertyExpressions](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                |
| Usercube.Provisioning.Job                 | [Usercube-Generate-ProvisioningOrders](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                     |
| Usercube.ProvisioningPolicy.Job           | [Usercube-Compute-RoleModel](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                               |
| Usercube.Synchronization.ADDirSync.Job    | [Usercube-Synchronize-ActiveDirectory](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                     |
| Usercube.Synchronization.Change.Job       | [Usercube-Synchronize-Changes](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                             |
| Usercube.Synchronization.Job              | [Usercube-Synchronize](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                                     |
| Usercube.Synchronization.Validation.Job   | Usercube-Synchronize-Validation                                                                                                                                                                                                                                                                                                |
| Usercube.DirSyncCollector                 | [Usercube-Export-ActiveDirectory](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportActiveDirectoryTask/)                                                                                                                                     |
| Usercube.Exports.AzureAD                  | [Usercube-Export-AzureAD](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportAzureADTask/)                                                                                                                                                     |
| Usercube.Exports.RACF                     | [Usercube-Export-RACF](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportRACFTask)                                                                                                                                                            |
| Usercube.Exports.SHAREPOINT               | [Usercube-Export-SharePoint](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportSharePointTask/)                                                                                                                                               |
| Usercube.Exports.TSS                      | [Usercube-Export-TSS](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportTSSTask)                                                                                                                                                              |
| Usercube.Client                           | Usercube-Server                                                                                                                                                                                                                                                                                                                |
| Usercube.LdapCmd                          | [Usercube-Export-LDAP](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/ExportLDAPTask/)                                                                                                                                                           |
| Usercube.SqlCmd                           | [Usercube-Invoke-SqlCommandAgent](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/InvokeSqlCommandTask/) / [Usercube-Invoke-SqlCommandServer](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md) |
| Usercube.Collectors.ADDirSync.Job         | [Usercube-Prepare-SynchronizationActiveDirectory](https://extranet.usercube.com/5.1/5.1.7.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exports/preparesynchronizationtask/)                                                                                                                    |
| Usercube.Collectors.Change.Job            | [Usercube-Prepare-SynchronizationChange](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                   |
| Usercube.Collectors.Job                   | [Usercube-Prepare-Synchronization](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)                                                                                                                                                                                         |
| Usercube.Notification.Job                 | Usercube-Send-Notification                                                                                                                                                                                                                                                                                                     |
| Usercube.Configuration import             | Usercube-Deploy-Configuration                                                                                                                                                                                                                                                                                                  |
| Usercube.Configuration export             | Usercube-Export-Configuration                                                                                                                                                                                                                                                                                                  |
| Usercube.Configuration generate           | Usercube-Generate-Configuration                                                                                                                                                                                                                                                                                                |

# 5.1.0 to 5.1.1

## Migrate Server Settings

#### TestUserStore And LocalLogin

The sections `TestUserStore` and `AllowLocalLogin` are moved from IdentityServer to Authentication.

Old Settings:

                    ```

"IdentityServer": { "AllowLocalLogin": true, "TestUserStore": { "Enabled": "true", "Password":
"secret" }

````


New Settings:

                    ```

  "Authentication": {
    "AllowLocalLogin": true,
    "TestUserStore": {
      "Enabled": "true",
      "Password": "secret"
    }

````

#### External Loggin

All ExternalLogin are modified and now use a list of elements:

#### [WsFed](/docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md) Authentication

Old Settings:

                    ```

"WsFederation": { "Enabled": "True", "MetadataAddress":
"https:///FederationMetadata/2007-06/FederationMetadata.xml", "Wtrealm": "https://localhost:44307/"
}

````


New Settings:

                    ```

  "WsFederation": {
    "Enabled": "True",
    "WsFederation1": {
        "AuthenticationScheme": "WsFederation scheme 1",
        "DisplayName": "Active Directory displayName",
        "MetadataAddress": "https:///FederationMetadata/2007-06/FederationMetadata.xml",
        "Wtrealm": "https://localhost:44307/"
        }
    }

````

#### [OpenId](/docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md) Authentication

Old Settings:

                    ```

"OpenId": { "Enabled": "True", "ClientId": "clientID", "ClientSecret": "secret", "Authority":
"https://login.microsoftonline.com/" }

````


New Settings:

                    ```

  "OpenId": {
    "Enabled": "True",
    "OpenId1": {
        "AuthenticationScheme": "AzureAD",
        "DisplayName": "Microsoft Entra ID Connection",
        "ClientId": "clientID",
        "ClientSecret": "secret",
        "Authority": "https://login.microsoftonline.com/"
        }
    }

````

#### [Active Directory](/docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md) Authentication

Old Settings:

                    ```

"ActiveDirectoryUserStore": { "Enabled": true, "Server": "ServerUri", "Domain": "DomainName",
"Prefix": "Prefix", "Postfix": "Postfix" }

````


New Settings:

                    ```

"ActiveDirectoryUserStore": {
    "Enabled": true,
    "Forest1": {
      "Server": "ServerUri",
      "Domain": "DomainName",
      "Prefix": "Prefix",
      "Postfix": "Postfix"
    }
  }

````

#### [Optional Settings](/docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md)

All working directories are optional in 5.1.1

## Agent Settings

#### [Optional Settings](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)

All working directories are optional in 5.1.1

## [Logger Settings](/docs/identitymanager/6.1/identitymanager/troubleshooting-support/monitoring/index.md)

In server/Agent and logger Setting the configuration are changes.

Old Settings:

                    ```

"Logging": { "IncludeScopes": false, "LogLevel": { "Default": "Error", "Usercube": "Information" },
"Serilog": { "WriteTo": [ { "Name": "Console" } ] } }

````


New Settings:

                    ```

  "Serilog": {
    "WriteToConsole": true,
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    }
  }

````

# Migration Guide

### Migrating from 5.1.1 (or any newer version) to 5.1.7

Since version 5.1.1, migrating your Usercube installation to a newer version is as simple as
following these steps.

These steps must absolutely be followed in the given order.

1. Stop server
2. Rename the existing Runtime folder to

   `RuntimeOld`

3. Install the new runtime from

   `Runtime_XXXX.zip`

4. Migrate the database

   Example:
   `./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;"`

5. Migrate the

   `appSettings`

   Example:
   `./identitymanager-Upgrade-Appsettings.exe --version 5.X.X --input-path "C:/identitymanagerDemo/RuntimeOld/" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;"`

   where 5.X.X is the _MigrateFrom_ version

6. Migrate the configuration

   Example:
   `./identitymanager-Upgrade-ConfigurationVersion.exe --version 5.X.X --xml-path "C:/identitymanagerDemo/ConfOld/" --output "C:/identitymanagerDemo/Conf/"`

   where 5.X.X is the _MigrateFrom_ version

7. Deploy-Configuration (optional) This allows new features to be taken into account, if relevant.
8. Start server

# Migration Guide

### Migrating from 5.1.7 to 5.2.3

**IMPORTANT: BEFORE YOU BEGIN, PLEASE NOTE**:  
The file paths in the appsettings.agent.json file must correspond with the file paths that are in
the version of the configuration that is currently loaded into the database in order to undertake a
migration. Additionally, if any files use relative paths, a warning will be displayed asking that
the `--runtime-path` argument be used.  
If your installation has several agents, the "InformationSystems" section should be concatenated
into one appsettings.agent.json that is used when the instructions below indicate that the agent's
appsettings.agent.json should be copied into a new temporary folder.  
The starting version for this migration must be a version 5.1.7.X.  
CyberArk and Azure Key Vault integrations cannot be automatically migrated.  
SAP and SharePoint connectors cannot be automatically migrated.

In the following migration examples, `--version` always refers to the starting version. In this case
it will be 5.1.7.

**Choose the set(s) of instructions that correspond to your installation type:**

- Upgrade Server and Agent (Integrated Agent Installation)
- Upgrade Server Only (Remote Agent Installation)
- Upgrade Agent Only (Remote Agent Installation)

## Upgrade Server and Agent (Integrated Agent Installation)

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop server
3. Backup and Install

   1. Backup the database.
   2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine

4. Migrate the database

   1. Backup the existing database
   2. Create a temporary folder accessible by the Usercube server. Example:
      `C:/identitymanagerExamplePath/AppSettingsFolder`
   3. Copy all the old appsettings (appsettings.agent.json, appsettings.encrypted.agent.json,
      appsettings.json) and paste them into the newly created folder.
   4. Copy all the old appsettings (appsettings.agent.json, appsettings.encrypted.agent.json,
      appsettings.json) and paste them into the new Runtime folder.
   5. Start the database upgrade utility:  
      Example 1:

      ```
      ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"
      ```

      Example 2:

      ```
      ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path C:/identitymanagerExampleAgent/Runtime
      ```

5. Move File Locations

   1. Optional: If you don't want to locate the Temp and Work folders in the default location
      (example: C:/identitymanagerExamplePath"), add the following arguments to the original
      appsettings.json file and update the two folder values with the desired locations instead of
      the default values shown here:
      - "TempFolderPath": `"_../Temp_"`,
      - "WorkFolderPath": `"_../Work_"`
   2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
   3. Run the move files utility.

      If encryption is activated in your Usercube then add the settings corresponding to your
      certificate (see Usercube-Encrypt-File
      [generic arguments](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/security-tools.md)).

      Example with encryption
      deactivated:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent`Example with
      certificate:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-file "certificateFile" --file-cert-password "certificatePassword"`or```
      ./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-thumbprint
      "certificateThumbprint" --file-cert-store-location "certificateStoreLocation"
      --file-cert-store-name "certificateStoreName"

      ```

      ```

6. Prepare the appsettings migration

   1. Start the Usercube _server_ with the new 5.2 version and the original appsettings files.
   2. Run the appsettings preparation tool to create a new files named "520.json" and "522.json"
      inside the temporary appsettings folder which is output path.  
      Example 1:

      ```
      ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder"
      ```

      or, if the database is available and/or the agent identifer is not the default value of
      "Local", use a variation of

      Example 2:

      ```
      ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --agent-identifier "Remote"
      ```

7. Migrate the appsettings.agent.json

   1. From the server's `Work` folder (by default it's located at the same level as the `Runtime`
      folder) , copy the newly created `appsettings.connection.json` to the output path used in the
      previous step.
   2. Migrate the `appSettings` agent file.  
      Example:

      ```
      ./identitymanager-Upgrade-Appsettings.exe --version "5.1.7" --input-path "C:/identitymanagerExamplePath/AppSettingsFolder/" --migrate-only-agent
      ```

   3. The new appsettings files should now already be copied to the current Runtime folder.

8. Restart the server
9. Optional: Migrate the configuration (This allows new features to be taken into account.)

   1. Rename the Conf folder to create a backup, for example `ConfOld`.
   2. Make sure the temporary appsettings folder still has the old, pre-migration
      appsettings.agent.json.
   3. Run the utility to migrate the configuration.  
      Example 1:`./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"`Example
      2:``` ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path
      "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path
      "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path
      "C:/identitymanagerExamplePath/Runtime"

      ```

      ```

   4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
      nothing else in the configuration except what is needed for the migration. The newly migrated
      conf should be the functional equivalent of the one already in the database.**
   5. Execute these three delete queries in the database:

      ```sql
      DELETE  FROM UJ_TaskResourceTypes
      DELETE  FROM UJ_JobSteps
      ```

   6. Deploy the configuration. Since the new configuration import tool is smarter:
      - Errors may be shown indicating that xml attributes are unknown. This simply means that
        they should be deleted from the xml tag because they are not used.
      - Errors may be shown indicating that permissions do not exist. In most cases, this will be
        because a state was added at the end of the permission that is no longer necessary. For
        example: `/Custom/WorkflowsNotifications/Self_ChangeName/Review/Approved` should become
        `/Custom/WorkflowsNotifications/Self_ChangeName/Review`
   7. Restart the server
   8. To use the new Connector pages, go to each connector and click `Refresh all schemas`

## Upgrade Server Only (Remote Agent Installation)

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop server and remote agent(s)
3. Backup and Install

   1. Backup the database.
   2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
   4. Copy all the original appsettings\* files from `RuntimeOld` to the new `Runtime`

4. Migrate the Database

   1. Backup the existing database
   2. Obtain the appsettings.agent.json file from the agent
   3. Create a temporary folder accessible by the Usercube server. Example:
      `C:/identitymanagerExamplePath/AppSettingsFolder`
   4. Copy the agent's appsettings.agent.json (and the appsettings.encrypted.agent.json if it
      exists) to the newly created folder.
   5. Copy the server's old appsettings.json into the new Runtime folder.
   6. Start the database upgrade utility:  
      Example 1:`./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"`Example
      2:``` ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data
      source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --appsettings-path
      "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path
      "C:/identitymanagerExampleAgent/Runtime"

      ```

      ```

5. Move File Locations

   1. Optional: If you don't want to locate the Temp and Work folders in the default location
      (example: C:/identitymanagerExamplePath"), add the following arguments to the original
      appsettings.json file and update the two folder values with the desired locations instead of
      the default values shown here:
      - "TempFolderPath": `"_../Temp_"`,
      - "WorkFolderPath": `"_../Work_"`
   2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
   3. Run the move files utility.

      ```
        This case represents a Server Only migration so encryption settings are never required because encrypted agent files will not be migrated.

      ```

      Example:``` ./identitymanager-Upgrade-Files.exe --version "5.1.7"

      ```

      ```

6. Restart the server.
7. Restart the remote agent(s).
8. **Do not upgrade or deploy the configuration until the agent has also been upgraded.**

## Upgrade Agent Only (Remote Agent Installation)

This installation should be performed only after the server has been upgraded.

1. Verify your starting version, if it's not already 5.1.7.X, please migrate to the most recent
   5.1.7 before proceeding.
2. Stop the agent.
3. Backup and Install

   1. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   2. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine

4. Move File Locations

   1. Optional: If you don't want to locate the Temp and Work folders in the default location
      (example: C:/identitymanagerExamplePath"), add the following arguments to the original
      appsettings.json file and update the two folder values with the desired locations instead of
      the default values shown here:
      - "TempFolderPath": `"_../Temp_"`,
      - "WorkFolderPath": `"_../Work_"`
   2. Delete the folder C:/identitymanagerExamplePath/Temp/Collect
   3. Run the move files utility.

      ```
        If encryption is activated in your Usercube then add the settings corresponding to your certificate (see Usercube-Encrypt-File [generic arguments](/integration-guide/executables/references/encrypt-file/index.html#generic-argument)).

      ```

      Example with encryption
      deactivated:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent`Example with
      certificate:`./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-file "certificateFile" --file-cert-password "certificatePassword"`or```
      ./identitymanager-Upgrade-Files.exe --version "5.1.7" --migrate-agent --file-cert-thumbprint
      "certificateThumbprint" --file-cert-store-location "certificateStoreLocation"
      --file-cert-store-name "certificateStoreName"

      ```

      ```

   4. Copy the file(s) "./tracked-accounts-`{system-identifier}`.csv" from the old Runtime (if they
      exist) to the new `WorkFolderPath` location (the default is "../Work")

5. Prepare appsettings migration

   1. Create a new temporary folder for the appsettings files, for example `AppSettingsFolder`
   2. Copy all the appsettings files from the old (agent) runtime to the newly created folder and
      to the new Runtime
   3. If you use IIS, copy the web.config from the old (agent) runtime to the new Runtime
   4. Start the server (with the new runtime)
   5. Run the appsettings preparation tool to create a new files named "520.json" and "522.json"
      inside the output path.  
      Example 1:``` ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path
      "C:/identitymanagerExamplePath/AppSettingsFolder"
      ````or, if the database is available and/or the agent identifier is not the default value of "Local", use a variation of
      Example 2:```
      ./identitymanager-Prepare-UpgradeAppsettings.exe --version "5.1.7" --output-path "C:/identitymanagerExamplePath/AppSettingsFolder" --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;" --agent-identifier "Remote"
      ````

6. Migrate the appsettings

   1. From the `Work` folder (by default it's located at the same level as the `Runtime` folder) ,
      copy the `appsettings.connection.json` to the temporary appsettings folder.
   2. Migrate the `appSettings` agent file.  
      Example:

      ```
      ./identitymanager-Upgrade-Appsettings.exe --version "5.1.7" --input-path "C:/identitymanagerExamplePath/AppSettingsFolder/" --migrate-only-agent
      ```

   3. The new appsettings files should now already be copied to the current Runtime folder.

7. Restart the agent.
8. Optional: Migrate the configuration (This allows new features to be taken into account.)

   1. Rename the Conf folder to create a backup, for example `ConfOld`.
   2. Make sure the temporary appsettings folder still has the old, pre-migration
      appsettings.agent.json.
   3. Run the utility to migrate the configuration. Example 1:

      ```
      ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json"
      ```

      Example 2:

      ```
      ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.7" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/" --appsettings-path "C:/identitymanagerExamplePath/AppSettingsFolder/appsettings.agent.json" --runtime-path "C:/identitymanagerExampleAgent/Runtime"
      ```

   4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
      nothing else in the configuration except what is needed for the migration. The newly migrated
      conf should be the functional equivalent of the one already in the database.**
   5. Execute these three delete queries in the database:

      ```sql
      DELETE  FROM UJ_TaskEntityTypes
      DELETE  FROM UJ_TaskResourceTypes
      DELETE  FROM UJ_JobSteps
      ```

   6. Deploy the configuration. Since the new configuration import tool is smarter:

      - Errors may be shown indicating that xml attributes are unknown. This simply means that
        they should be deleted from the xml tag because they are not used.
      - Errors may be shown indicating that permissions do not exist. In most cases, this will be
        because a state was added at the end of the permission that is no longer necessary. For
        example: `/Custom/WorkflowsNotifications/Self_ChangeName/Review/Approved` should become
        `/Custom/WorkflowsNotifications/Self_ChangeName/Review`

   7. Restart the server
   8. To use the new Connector pages, go to each connector and its connections and refresh each
      schema

# 5.2.X to 6.0

These instructions are for migrating from 5.2.1 (or higher) to version 6.0. If migrating from a
version older than 5.2.1, see the instructions at the bottom of this page. Note that the
configuration and the agent can be migrated independently of one another.

In the following migration examples `--version` always refers to the _starting_ version. Make sure
to reference either 5.2.1, 5.2.2 or 5.2.3 as is appropriate.

**Choose the set(s) of instructions that correspond to your installation type:**

For SaaS environments, choose:

- [Upgrade Agent Only](#upgrade-agent-only)

For On Premises integrated environments, choose :

- [Upgrade Server and Integrated Agent](#upgrade-server-and-integrated-agent)

For On Premises separated/remote environments, the server should be upgraded before the agent. Use
the following instructions:

- [Upgrade Server Only](#upgrade-server-only)
- [Upgrade Agent Only](#upgrade-agent-only)

## Upgrade Server and Integrated Agent

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop server
3. Backup and Install

   1. Backup the database.
   2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
   4. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`
   5. In the appsettings.json file, at the end of the connection string add `;Encrypt=false` or
      `;Encrypt=true` depending on the database configuration.
      > For example:
      >
      > ```
      >
      > "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
      >
      > ```

4. Migrate the database

   1. Backup the existing database
   2. Start the database upgrade utility:
      > For example:
      >
      > ```
      >
      > ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
      >
      > ```

5. Recompute all property expressions and correlation keys by using the
   [`Update-EntityPropertyExpressions`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)
   and
   [`Compute-CorrelationKeys`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)
   executables from the `Runtime` folder.

   > For example:
   >
   > ```
   >
   > ./identitymanager-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
   > ./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
   >
   > ```

6. Restart the server
7. Optional: Migrate the configuration (This allows new features to be taken into account.)

   1. Make sure the XML configuration has already been imported to the database. If not, import the
      configuration with the old Runtime into the database.
   2. Rename the Conf folder to create a backup, for example `ConfOld`.
   3. Run the utility to migrate the configuration.
      > For example:
      >
      > ```
      >
      > ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.2.3" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/"
      >
      > ```
   4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
      nothing else in the configuration except what is needed for the migration. The newly migrated
      conf should be the functional equivalent of the one already in the database.**
   5. Deploy the configuration, correcting any warnings or new errors (that appear because the
      configuration import tool is smarter).
   6. Restart the server

## Upgrade Server Only

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop server and remote agent(s)
3. Backup and Install

   1. Backup the database.
   2. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   3. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
   4. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`
   5. In the appsettings.json file, at the end of the connection string add `;Encrypt=false` or
      `;Encrypt=true` depending on the database configuration.
      > For example:
      >
      > ```
      >
      > "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
      >
      > ```

4. Migrate the Database

   1. Backup the existing database
   2. Start the database upgrade utility:
      > For example:
      >
      > ```
      >
      > ./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
      >
      > ```

5. Recompute all property expressions and correlation keys by using the
   [`Update-EntityPropertyExpressions`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)
   and
   [`Compute-CorrelationKeys`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md)
   executables from the `Runtime` folder.

   > For example:
   >
   > ```
   >
   > ./identitymanager-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
   > ./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a
   >
   > ```

6. Restart the server.
7. Restart the remote agent(s).
8. **Do not upgrade or deploy the configuration until the agent has also been upgraded.**

## Upgrade Agent Only

This installation should be performed only after the server has been upgraded.

1. Install the new .NET 6.0 Framework hosting bundle from
   [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
2. Stop the agent.
3. Backup and Install

   1. Rename the Runtime folder to create a backup, for example `RuntimeOld`
   2. Install the new runtime from `Runtime_XXXX.zip` on the Usercube server machine
   3. Copy all the original appsettings json files from `RuntimeOld` to the new `Runtime`

4. Restart the agent.
5. Optional: Migrate the configuration (This allows new features to be taken into account.)

   1. Make sure the XML configuration has already been imported to the database. If not, import the
      configuration with the old Runtime into the database.
   2. Rename the Conf folder to create a backup, for example `ConfOld`.
   3. Run the utility to migrate the configuration.
      > For example:
      >
      > ```
      >
      > ./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.2.3" --xml-path "C:/identitymanagerExamplePath/ConfOld/" --output "C:/identitymanagerExamplePath/Conf/"
      >
      > ```
   4. Optional: update the configuration version now that it has been migrated. **NOTE: Change
      nothing else in the configuration except what is needed for the migration. The newly migrated
      conf should be the functional equivalent of the one already in the database.**
   5. Deploy the configuration, correcting any warnings or new errors (that appear because the
      configuration import tool is smarter).
   6. Restart the server

## Migrating from a version older than 5.2.1?

Because of breaking changes introduced in 5.2.0, migration from older versions can't be handled by
the process described above.

Please follow these guides to handle migrations from older versions.

- [5.1.0 to 5.1.1](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.0 to 5.1](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.1.1 to 5.1.7](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.1.7 to 5.2.3](/docs/identitymanager/6.1/identitymanager/index.md)

# Migration Guide

This guide is designed to provide step-by-step procedures in order to migrate Usercube from your
current version to the latest one.

This page will guide you through a migration to a more recent version with no major changes.

For example from 6.0.215 to 6.0.216.  
For a migration between versions with major changes, check this guide's subsections.

For example see the
[ 5.2.X to 6.0 ](/docs/identitymanager/6.1/identitymanager/index.md) topic
for additional information on migration.

## Upgrade the Server Only for a Minor Migration

In order to upgrade only the sever do the following:

**Step 1 –** Download the new runtime from the expected version from
[Netwrix portal](https://extranet.usercube.com/).

**Step 2 –** Stop the server.

**Step 3 –** Rename the `Runtime` folder to create a backup, for example `RuntimeOld`.

![Extranet Artifacts](/img/versioned_docs/identitymanager_6.1/identitymanager/migration-guide/extranet_v601.webp)

**Step 4 –** Extract the content of the new runtime to the same folder as `RuntimeOld`, inside a new
`Runtime` folder.

**Step 5 –** Copy the original `appsettings.json` and `appsettings-agent.json` files from
`RuntimeOld` to the new `Runtime`.

**Step 6 –** Restart the server.

## Migrate from Older Versions

- [5.2.X to 6.0](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.1.7 to 5.2.3](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.1.1 To 5.1.7](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.1.0 to 5.1.1](/docs/identitymanager/6.1/identitymanager/index.md)
- [5.0.X to 5.1](/docs/identitymanager/6.1/identitymanager/index.md)

# Execute a Certification Campaign

How to execute access certification campaigns, i.e. review specific entitlement assignments and
deprovision inappropriate access.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Once certification campaigns are scheduled, the assigned reviewers must decide for all relevant
assignments if they ought to be deleted or not.

## Participants and Artifacts

The execution part should be performed in cooperation with the staff who review access in the
campaign scheduling.  
 The monitoring part should be performed in cooperation with the staff in charge of campaign
scheduling.

| Input                                                                                             | Output           |
| ------------------------------------------------------------------------------------------------- | ---------------- |
| [Scheduled certification campaign](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Certified access |

## Execute Certification

Execute certification by proceeding as follows:

1. Access the ongoing campaigns by clicking on the **Access Certification** section on the home
   page.

   ![Home - Access Certification](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/home_accesscertification_v523.webp)

   On this page, all assignments to be reviewed are listed.

   ![Access Certification](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_accesscertification_v602.webp)

   Each assignment can be commented by clicking on the corresponding icon.

   ![Comment Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

2. Choose one of the three possibilities to verify all assignments one by one:

   In order to help reviewers in the decision-making process, each assignment shows a
   recommendation icon, indicating whether said assignment complies with the role model.

   See the icons below this note.

   The Recommended icon indicates that the entitlement has been automatically granted according to
   the security policy. You can approve it because it is compliant.  
   The Not Recommended icon indicates that the entitlement does not comply with the security
   policy. It is recommended to refuse it, unless the user really needs it.

   An absence of any icon indicates that the entitlement does not comply with the security policy.
   However, it has been manually granted or denied. Thus there is no recommendation, please review
   this entitlement carefully.

   ![Recommendation Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconrecommendation_v522.svg)

   ![Discouragement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_icondiscouragement_v522.svg)

   - Either click on the approval icon to confirm that this entitlement is necessary for this
     identity.

   ![Approval Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconapproval_v522.svg)

   - Or click on the decline icon to confirm that this entitlement is not necessary for this
     identity.

   ![Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

   - Or click on the three dots icon to highlight that this entitlement is not part of your scope
     of responsibility and forward it to the adequate person.

   ![Forward Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconforward_v522.svg)

3. Click on **Confirm Decisions** on the left of the page.

   If you've made an erroneous decision, exiting the page before confirming offers the possibility
   to quit without saving and start over from the last confirm.

## Monitor a Certification Campaign

Existing certification campaigns are listed on the page accessible via the **Access Certification
Campaigns** button on the home page in the **Administration** section.

![Home - Access Certification Campaigns](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

![Campaigns Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_campaigns_v602.webp)

### Get reports

A **Download** button is available for each campaign. It downloads a CSV report that lists all the
entitlement assignments to be reviewed, the corresponding reviewers and their decisions.

![Report Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_decisions_v522.webp)

### Send notifications

The notification icon on the line of a given campaign offers the possibility to send reminder
notifications to the staff who has not finished processing the campaign.

### Generate provisioning orders

Once entitlement assignments have been reviewed, the final step is to apply these decisions.

An **Apply Decisions** button is available for each campaign. It shows all the decisions made in the
campaign. The campaign administrator can then decide to actually apply said decisions and generate
the appropriate provisioning orders for deprovisioning unjustified entitlements. Said orders will be
considered during the next provisioning job.

![Apply Decisions](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_applydecisions_v602.webp)

# Schedule a Certification Campaign

How to create and schedule access certification campaigns, defining their scope.

## Overview

The aim of an access certification campaign is to review specific access and entitlements for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Here, you will learn how to create and schedule a certification campaign, defining its scope, via
the filters specifying the reviewers and items to be reviewed.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they
know what entitlements need to be reviewed.

| Input                                                                                                                                                                                                                                     | Output                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (optional) [Risks](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Scheduled certification campaign(s) |

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1.  Click on **Access Certification Campaigns** in the **Administration** section on the home page.

    ![Home - Access Certification Campaigns](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2.  Click on the addition button at the top right and fill in the fields.

    ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![New Certification Campaign](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

    - `Identifier`: must be unique among certification campaigns and without any whitespace.
    - `Name`: will be displayed in the UI to identify the campaign.
    - `Start Date`: date for the campaign beginning and display on the reviewers' **Access
      Certification** screen. The access reviewed during the campaign are those existing at the
      start date. Any change in the permissions after the start date won't be reviewed in the
      campaign.
    - `End Date`: date for the campaign deadline.
    - `Target Entity Type`: entity type targeted by the campaign.
    - `Target Reviewers`: set of identities in charge of the access review. Available target
      reviewers are configured via
      [certification policies](/docs/identitymanager/6.1/identitymanager/governance/access-certification/index.md).
    - `Target Specificities`:
      [data filters](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-certification-config.md)
      that specify the campaign scope, i.e. the permissions to include by object type, category,
      approval state, etc. A campaign is based on the union of all specificities. See the detailed
      fields below.

      ![Target Specificities](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

      The certification campaign will target the permissions that meet the intersection (AND) of
      all criteria.

      When giving a list of role tags, the targeted roles will be those having at least one of the
      tags (OR).

    - `Target Owners`:
      [owner filters](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-certification-config.md)
      on the dimensions of the identities that are subject to the certification campaign. A campaign
      is based on the intersection of all filters. See the detailed fields below.

      ![Target Owner Filters](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

      According to the target entity type, additional filters can be available.

      ![Target Owner Additional Filters](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

      - `Individual Owner`: single identity whose accesses are to be certified by the campaign.
      - `Active Target`: the identities to be certified will be those for which a given property
        (here from `Directory_UserRecord`) was modified since a given date.

                      Only properties that are not calculated by Usercube can be used here to filter the target owners of the certification campaign.

        > The following campaign creates certification orders aimed at all the assigned single
        > roles of two specific users.
        >
        > ![Campaign Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3.  Click on **Create** and see a line added on the campaigns page.

    ![Campaigns Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4.  Apply the changes by clicking on **Launch**, thus running the
    [access certification job](/docs/identitymanager/6.1/identitymanager/governance/access-certification/index.md).

    This job's logs are accessible from the **Job Results** button.

    > For example:
    >
    > ![Execute Access Reviews Job](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

Any field of a certification campaign can be changed before its start date. Once a given
certification campaign has started, it is possible to modify only its name, identifier and end date.
It can be deleted at any time.

## Verify Campaign Scheduling

In order to verify the process, check on the **Access Certification Campaigns** page that the
created certification campaign has the right parameters.

# Perform Access Certification

How to certify existing access by reviewing a specific range of assigned permissions for auditing
purposes.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity. So, for all relevant permissions, the idea is to specify if these assignments ought to be
deleted or not.

There are several ways to arrange an access certification campaign. Among others, through filters
you can choose to focus on:

- a certain category of roles;
- a certain type of assignment;
- assignments not certified since a certain date;
- assignments presenting a certain level of
  [risk](/docs/identitymanager/6.1/identitymanager/index.md).

Certification campaigns can be
[configured with XML](/docs/identitymanager/6.1/identitymanager/governance/access-certification/index.md)
but the UI described in this guide can be enough on its own.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they
know which entitlements need to be reviewed.

| Input                                                                                                                                                                                                                                     | Output           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (optional) [Risks](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Certified access |

## Perform Access Certification

Perform access certification by proceeding as follows:

1. [Schedule a certification campaign](/docs/identitymanager/6.1/identitymanager/index.md).
2. [Execute a certification campaign](/docs/identitymanager/6.1/identitymanager/index.md).

# Administrate

- #### [Generate Reports](/docs/identitymanager/6.1/identitymanager/index.md)

  How to use Usercube's reporting modules to produce IGA reports for auditing and governance
  purposes.

- #### [Review Orphaned and Unused Accounts](/docs/identitymanager/6.1/identitymanager/index.md)

  How to remediate license and security issues caused by orphaned and/or unused accounts.

- #### [Provision](/docs/identitymanager/6.1/identitymanager/index.md)

  How to write to a managed system

- #### [Review Provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
  How to review provisioning orders before generation.- ####
  [Provision Manually](/docs/identitymanager/6.1/identitymanager/index.md)
  How to use Usercube to manually write to the managed systems.- ####
  [Provision Automatically](/docs/identitymanager/6.1/identitymanager/index.md)
  How to make Usercube automatically write to the managed systems.
- #### [Review Non-conforming Assignments](/docs/identitymanager/6.1/identitymanager/index.md)

  How to review non-conforming assignments, i.e. approve or decline the suggestions made by
  Usercube after every synchronization. The aim is to handle the differences between the values
  from the managed systems and those computed by Usercube's role model.

- #### [Reconcile a Role](/docs/identitymanager/6.1/identitymanager/index.md)
  How to review non-conforming permissions, i.e. approve or decline the role suggestions made by
  Usercube after every synchronization. The aim is to handle the differences between the
  navigation values from the managed systems and those computed by Usercube according to the role
  catalog.- ####
  [Reconcile a Property](/docs/identitymanager/6.1/identitymanager/index.md)
  How to review unreconciled properties. The aim is to handle the differences between the property
  values from the managed systems and those computed by Usercube according to provisioning
  rules.- ####
  [Review an Unauthorized Account](/docs/identitymanager/6.1/identitymanager/index.md)
  How to remediate unauthorized accounts. The aim is to review the accounts whose assignments
  don't comply with the rules of the role model.
- #### [Perform Access Certification](/docs/identitymanager/6.1/identitymanager/index.md)

  How to certify existing access by reviewing a specific range of assigned permissions for
  auditing purposes.

- #### [Schedule a Certification Campaign](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create and schedule access certification campaigns, defining their scope.- ####
  [Execute a Certification Campaign](/docs/identitymanager/6.1/identitymanager/index.md)
  How to execute access certification campaigns, i.e. review specific entitlement assignments and
  deprovision inappropriate access.
- #### [Request Entitlement Assignment](/docs/identitymanager/6.1/identitymanager/index.md)
  How to send a manual request to add, update or remove an entitlement for an identity.

# Request Entitlement Assignment

How to send a manual request to add, update or remove an entitlement for an identity.

## Overview

Changes in an identity's entitlements can be handled using Usercube's predefined workflows to:

- view the list of the identity's entitlements, with Usercube's suggestions according to the
  identity's position;
- modify the identity's entitlements (add, update, remove).

## Participants and Artifacts

An assignment can be requested for a user sometimes by said user themselves, most often by their
manager, and on some occasions by the involved application owner.

| Input                                                                                                                                                              | Output               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Updated entitlements |

## View Identity's Entitlements

View the identity's entitlements by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be checked.

   ![Workflow - User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **View Permissions** to access the entitlement list.

   ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

## Modify Identity's Entitlements

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

   ![Workflow - User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** > **Modify Permissions** to launch the workflow for a manual entitlement
   request.

   ![Workflow - Modify Permissions](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions to select entitlements and the action to be performed. You
   can:

   - select entitlements to add;
   - modify the potential options of the entitlements you are adding;
   - delete entitlements which were assigned or declined manually;
   - deny entitlements which were assigned automatically;
   - allow denied entitlements by assigning them back manually.

   If the request is about assigning an entitlement via a role which requires at least one
   approval, then sending the request triggers the display of said request on the **Role Review**
   screen.

   ````
   <img
     src="/buttons/Home_roleReview_V523.webp"  alt="Home Page - Role Review"  style=""/>

   ```In this case, the requested entitlement will be displayed in the user's \*\*View Permissions\*\* tab only after the request is reviewed.
   ````

## Verify Entitlement Request

In order to verify the process, check that the change you made in the user's entitlements is
displayed in their **View Permissions** tab in the directory.

![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review Non-conforming Assignments

How to review non-conforming assignments, i.e. approve or decline the suggestions made by Usercube
after every synchronization. The aim is to handle the differences between the values from the
managed systems and those computed by Usercube's role model.

## Overview

Integrators must review three main types of non-conforming entitlement assignments:

- Non-conforming roles: Usercube finds roles assigned to users in the managed systems that no rule
  in the role model can justify.
- Unreconciled properties: Usercube's role model computes property values that are different from
  the values in the managed systems.
- Unauthorized accounts: no rule from the role model can justify their actual assignment to an
  identity.

Unreconciled properties, unauthorized accounts and non-conforming roles are part of
[non-conforming assignments](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md).
The global aim of the review is to handle the gaps between the
[existing assignments](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
(real values) and the
[conforming assignments](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md)
(theoretical values computed by Usercube from the role model rules).

A high number of non-conforming assignments can come from an issue in configuration rules.

Non-conforming roles and unauthorized accounts can be mass reviewed through
[automation rules](/docs/identitymanager/6.1/identitymanager/index.md).

# Participants and Artifacts

This operation should be performed in cooperation with application owners who are in charge of
applications' entitlements (technical side), and/or managers who know their team's entitlements
(functional side).

| Input                                                                         | Output                |
| ----------------------------------------------------------------------------- | --------------------- |
| [Provisioning](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Complying assignments |

### Pre-existing assignments vs. non-conforming assignments

The assignments specified as non-conforming during the very first execution of the role model are
called pre-existing assignments. Pre-existing assignments are tagged differently from other
non-conforming assignments by the
[`SavePreExistingAccessRightsTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
because they can indicate that:

- The rules are not optimal yet.
- Data in the managed system needs more cleanup.

Obviously, pre-existing assignments can also prove to be exceptions to the rules, like
non-conforming assignments, and need to be validated as such.

## Review Non-conforming Assignments

While there can be dependencies between the review of non-conforming roles and unreconciled
properties, there are no absolute requirements regarding the sequential order of the non-conforming
assignment review:

- [Review non-conforming roles](/docs/identitymanager/6.1/identitymanager/index.md).
- [Review unreconciled properties](/docs/identitymanager/6.1/identitymanager/index.md).
- [Review unauthorized accounts](/docs/identitymanager/6.1/identitymanager/index.md).

[Risks](/docs/identitymanager/6.1/identitymanager/index.md) can be
defined to highlight the most sensitive accounts/permissions, in order to establish a priority order
in the review of non-conforming assignments.

# Reconcile a Property

How to review unreconciled properties. The aim is to handle the differences between the property
values from the managed systems and those computed by Usercube according to
[provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md).

## Overview

Unreconciled properties are considered as non-conforming assignments because Usercube's role model
has computed property values that are different from the values in the managed systems.

### Property reconciliation with role reconciliation

For some managed systems, roles are tightly linked to navigation properties.

> For example, the AD hosts groups for various applications, and a role is assigned through a group
> membership. An entitlement can be assigned to an identity by adding said identity's DN to the
> `member` property of the appropriate group. Usercube translates it by editing the identity's
> `memberOf` property with the new group.

In this case, when a role is assigned in the managed system without an existing rule that justifies
the role, then new items appear on the **Role Reconciliation**and the **Resource Reconciliation**
screens.

> In the case of the AD example, consider that we want to assign a specific role in SAP. Then, we
> find the corresponding group in the AD and add the identity's DN to its `member` property.
>
> The result is a new item on the **Role Reconciliation** screen for said SAP role, plus an item on
> the **Resource Reconciliation** screen for the new `memberOf` property for said identity.
>
> If the identity didn't have an AD account yet, then it is automatically created, and the item on
> the **Resource Reconciliation** screen displays also a modification of the `accountExpires`
> property.

As roles and navigation properties are technically bonded together, their reviews are linked too:

- If the role is reviewed (approved/declined), then the corresponding property is automatically
  reconciled accordingly.
- If the property is reviewed (approved/declined), then the corresponding role is automatically
  reviewed too, its
  [workflow state](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
  transitioned to `Manual` (if approved) or `Cancellation` (if declined, then a deprovisioning order
  is sent).

> So let's say we add `C�dric Blanc` to the list of members of the SAP groups `SG_APP_SAP_1` and
> `SG_APP_SAP_211`. Then, after the next synchronization, Usercube displays one item for each role
> on the **Role Reconciliation** screen, and one item for all changes in the AD account on the
> **Resource Reconciliation** screen:
>
> ![Example - Role Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_examplerole_v602.webp)
>
> ![Example - Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresource_v602.webp)
>
> ![Example - Resource Reconciliation - Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresourceprop_v602.webp)

## Participants and Artifacts

This operation should be performed in cooperation with application owners in charge of applications'
entitlements.

| Input                                                                         | Output               |
| ----------------------------------------------------------------------------- | -------------------- |
| [Provisioning](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Complying properties |

## Review an Unreconciled Property

Review an unreconciled property by proceeding as follows:

1. Ensure that the task for the computation of the role model was launched recently, through the
   complete job on the **Job Execution** page�

   ![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   � Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. Get to the **Resource Reconciliation** page, accessible from the corresponding section on the
   home page.

   ![Home Page - Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

3. Select `Unreconciled properties` as a `Workflow State`.

   ![Unreconciled Property](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewprop_unreconciled_v522.webp)

4. Choose the default resource view or the property view with the top right toggle.
5. Select a property to review.

   > In the following example, the user `Nicolas Faure` is the owner of a given resource, here a
   > nominative SAB account associated with his email address. In the **Resource Properties to be
   > Verified** frame, there is one unreconciled property that happens to be `Group`.
   >
   > ![Unreconciled Property Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewprop_example_v602.webp)

   - `Name`: unreconciled property name.
   - `Proposed Value`: value proposed by Usercube.
   - `Current Value`: value currently in the managed system.
   - `Provisioning State`:
     [provisioning state](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md).
   - `Start Date`: date for the beginning of the property value existence.
   - `End Date`: date for the end of the property value existence.

   The **Other Resource Properties** frame shows the complying properties associated with the
   resource.

6. Choose one of the three possibilities to verify the property:

   Decisions must be made with caution as they cannot be undone.

   - Either click on the approval icon to update the property with the proposed value. It discards
     the whole property history.

     ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

     ![Deletion Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/reviewrole_icondelete_v602.svg)

     Automatic changes are essential for frequently-changing attributes. However, saving history
     information can sometimes be important for some attributes such as logins and emails.

   - Or click on the decline icon to not update the property and keep the resource value. In the
     future, this property will no longer be changed automatically.

     ![Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

     Retaining manual control of changes for sensitive data (i.e. `SAMAccountName`) can be of
     interest. Usercube won't be able to change this data and the service account manager will
     avoid authentication errors. It can be interesting to keep manual some sensitive data
     changes like `SAMAccountName` for example, so that Usercube does not change it and the
     service account manager does not risk problems in authentication.

   - Or click on the postponement icon to delay the decision. An unreconciled property is ignored
     by Usercube, and therefore cannot be modified.

     ![Postponement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

7. Click on **Confirm Property Values**.
8. Trigger
   [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
   by launching, on the appropriate connector's overview page, **Jobs** > **Generate Provisioning
   Orders**, then, after this first task is done, **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

![Bulk Reconcile](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

## Verify Property Reconciliation

In order to verify the process, check that the changes you ordered appear on the corresponding
user's page in the directory.

# Reconcile a Role

How to review non-conforming permissions, i.e. approve or decline the role suggestions made by
Usercube after every synchronization. The aim is to handle the differences between the navigation
values from the managed systems and those computed by Usercube according to the role catalog.

## Overview

Non-conforming roles are considered as non-conforming assignments because no rule from Usercube's
model can justify their actual assignment to an identity.

### Role reconciliation with property reconciliation

For some managed systems, roles are tightly linked to navigation properties.

> For example, the AD hosts groups dedicated to various applications, and a role is assigned through
> group membership. An entitlement can be assigned to an identity by adding said identity's DN to
> the `member` property of the appropriate group. Usercube translates it by editing the identity's
> `memberOf` property with the new group.

In this case, when a role is assigned in the managed system without an existing rule that justifies
the role, then new items appear on the **Role Reconciliation**and the **Resource Reconciliation**
screens.

> In the case of the AD example, consider that we want to assign a specific role in SAP. Then, we
> find the corresponding group in the AD and add the identity's DN to its `member` property.
>
> The result is a new item on the **Role Reconciliation** screen for said SAP role, plus an item on
> the **Resource Reconciliation** screen for the new `memberOf` property for said identity.
>
> If the identity didn't have an AD account yet, then it is automatically created, and the item on
> the **Resource Reconciliation** screen displays also a modification of the `accountExpires`
> property.

As roles and navigation properties are technically bonded together, their reviews are linked too:

- If the role is reviewed (approved/declined), then the corresponding property is automatically
  reconciled accordingly.
- If the property is reviewed (approved/declined), then the corresponding role is automatically
  reviewed too, its
  [workflow state](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
  transitioned to `Manual` (if approved) or `Cancellation` (if declined, then a deprovisioning order
  is sent).

> So let's say we add `C�dric Blanc` to the list of members of the SAP groups `SG_APP_SAP_1` and
> `SG_APP_SAP_211`. Then, after the next synchronization, Usercube displays one item for each role
> on the **Role Reconciliation** screen, and one item for all changes in the AD account on the
> **Resource Reconciliation** screen:
>
> ![Example - Role Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_examplerole_v602.webp)
>
> ![Example - Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresource_v602.webp)
>
> ![Example - Resource Reconciliation - Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresourceprop_v602.webp)

## Participants and Artifacts

This operation should be performed in cooperation with managers who know their team's expected
entitlements.

| Input                                                                         | Output          |
| ----------------------------------------------------------------------------- | --------------- |
| [Provisioning](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Complying roles |

## Review a Non-conforming Permission

Review a non-conforming permission by proceeding as follows:

1. Ensure that the
   [`ComputeRoleModelTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
   was launched recently, through the complete job on the **Job Execution** page�

   ![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   � Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. On the home page, click on the entity type that you want to manage in the **Role Reconciliation**
   section, to get to the non-conforming permissions page.

   ![Home Page - Role Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/home_rolereconciliation_v523.webp)

   ![Role Reconciliation Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliation_v603.webp)

   Each non-conforming permission can be commented by clicking on the corresponding icon.

   ![Comment Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

3. Choose one of the two possibilities to verify the permission:

   Contrary to resources, reviewed roles are then displayed on the **Role Review** page accessible
   from the home page, and can be reviewed again.

   - Either click on the approval icon to keep the non-conforming permission.

   ![Approval Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_iconapprove_v602.svg)

   - Or click on the decline icon to delete the non-conforming permission.

   ![Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_icondecline_v522.svg)

4. Trigger
   [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
   by launching, on the appropriate connector's overview page, **Jobs** > **Generate Provisioning
   Orders**, then, after this first task is done, **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use bulk provisioning

Several roles can be reconciled simultaneously by clicking on **Bulk Reconcile Roles**.

![Bulk Reconcile Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliationbulk_v603.webp)

## Verify Role Reconciliation

In order to verify the process, check that the changes you ordered appear on the corresponding
user's **View Permissions** tab.

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review an Unauthorized Account

How to remediate unauthorized accounts. The aim is to review the accounts whose assignments don't
comply with the rules of the role model.

## Overview

Unauthorized accounts are considered as non-conforming assignments because no rule from Usercube's
model can justify their actual assignment to an identity.

## Participants and Artifacts

This operation should be performed in cooperation with application owners in charge of applications'
entitlements.

| Input                                                                         | Output             |
| ----------------------------------------------------------------------------- | ------------------ |
| [Provisioning](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Complying accounts |

## Review an Unauthorized Account

Review an unauthorized account by proceeding as follows:

1. Ensure that the
   [`ComputeRoleModelTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
   was launched recently, through the complete job on the **Job Execution** page�

   ![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   � Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. Get to the **Resource Reconciliation** page, accessible from the corresponding section on the
   home page.

   ![Home Page - Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

3. Select `Unauthorized account` as the `Workflow State`. Orphaned accounts appear with no owner.

   ![Resource Reconciliation Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/unauth_unauthorizedaccounts_v602.webp)

4. Choose the default resource view or the property view with the top right toggle.
5. Click on the line of an account with an owner.

   In the following example, the nominative LDAP account linked to the resource
   `U40897 / Internal Users / acme / com` has the owner `Maxime Guillot` with an 80% confidence
   rate.

   ![Select Decision](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/unauth_reviewunauthorized_v602.webp)

   The displayed confidence rate means that a rule actually assigned the account to the identity,
   but with a
   [confidence rate](/docs/identitymanager/6.1/identitymanager/index.md)
   too low to imply full automatic assignment. Approval will be required.

   The **Resource Properties** frame shows all the properties of the resources. They can be
   [updated](/docs/identitymanager/6.1/identitymanager/index.md)
   by clicking on the edit button.

   ![Edit Button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/unauth_updateprop_v522.webp)

6. Select the appropriate decision.

   Decisions must be made with caution as they cannot be undone.

7. Click on **Confirm Account Deletion** or **Authorize Account** according to the previous
   decision.
8. Trigger
   [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
   by launching, on the appropriate connector's overview page, **Jobs** > **Generate Provisioning
   Orders**, then, after this first task is done, **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

![Bulk Reconcile](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

Bulk keeping non-authorized accounts, by clicking on **Bulk Reconcile** then **Approve Current
Values**, does not approve their unreconciled properties which will still be displayed on this
screen.

## Verify Review

In order to verify the process, check that the changes you ordered appear on the corresponding
user's **View Permissions** tab.

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review Orphaned and Unused Accounts

How to remediate license and security issues caused by orphaned and/or unused accounts.

## Overview

The review of unused and orphaned accounts is essential to solve security and license management
issues. Orphan accounts are without an owner, while unused accounts remain open without any
activity.

### Orphaned accounts list

A list of all orphaned accounts can be found on some entity type pages. Said pages can be accessed
through the menu items on the left of the home page, in the **Connectors** section.

![Home - Entity Types](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

These entity type pages can be
[configured via XML](/docs/identitymanager/6.1/identitymanager/index.md) to
customize all displayed columns and available filters, especially the **Orphan** filter that spots
uncorrelated resources, and the **Owner / Resource Type** column that shows the owner of each
resource.

![Owner / Resource Type Column](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

In the `Orphan` field, select `Yes` to see all existing resources without an owner.

In addition, filters can be configured in the
[reporting module](/docs/identitymanager/6.1/identitymanager/index.md)
to list orphaned accounts. Choose to display `User` and `AD User (nominative)` with a filter on void
user's display names.

The orphaned accounts detected by Usercube are not all legitimate. Some accounts are considered
orphaned because of an error in the account data or assignment rule.

### Unused accounts list

The way to identify activity in a managed system is highly dependent on said system. Thus, activity
identification cannot be generalized, and the absence of activity in accounts isn't recognizable
with the configuration as is. Integrators must configure a specific property fulfilling this
purpose.

> For example in the AD, we can compute a Boolean property `isUnused` based on other AD accounts'
> properties. Below is an example that you can use and adjust to your specific configuration:
>
> ```
>
> Here we write an expression for isUnused based on the bits of userAccountControl, the value of accountExpires and the value of LastLogonTimeStamp:
>
> <EntityPropertyExpression Identifier="AD_Entry_isUnused" Expression="C#:resource:
>
>   if (resource.userAccountControl == null) {
>       return false;
>       }
>   if ((int.Parse(resource.userAccountControl) &amp; 2) != 0) {
>       return false;
>       }
>
>   if (resource.accountExpires != null &amp;&amp; resource.accountExpires != &quot;0&quot; &amp;&amp; resource.accountExpires != &quot;9223372036854775807&quot; &amp;&amp; Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.accountExpires) &lt; DateTime.UtcNow) {
>       return false;
>       }
>
>   return ((resource.lastLogonTimestamp == null) || (Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.lastLogonTimestamp) &lt; DateTime.UtcNow.AddMonths(-6);
>
>   " EntityType="AD_Entry" Property="isUnused" />
>
> ```

Once this "unused" property is created, a list of all unused accounts can be displayed thanks to the
filters in the
[query module](/docs/identitymanager/6.1/identitymanager/index.md),
based on said property.

> The previous example about the AD's `isUnused` property can be complemented in the query module by
> displaying this property alongside users' `EmployeeId`.
>
> ![Query of Unused Accounts](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_unusedquery_v602.webp)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                                                                           | Output                               |
| ------------------------------------------------------------------------------- | ------------------------------------ |
| [Categorization](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Removed orphaned and unused accounts |

## Review an Orphaned Account

Review an orphaned account by proceeding as follows:

1. Get to the **Resource Reconciliation** page, accessible from the corresponding section on the
   home page.

   ![Home Page - Resource Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

2. Select `Unauthorized account` as the `Workflow State`. Orphaned accounts are those appearing with
   no owner.

   ![Resource Reconciliation Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/unauth_unauthorizedaccounts_v602.webp)

3. Choose the default resource view or the property view with the top right toggle.
4. Click on the line of an account without an owner.

   > In the following example, the nominative AD account linked to the email address
   > `nathan.smith@acme.com` has no owner.
   >
   > ![Select Owner](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans_v602.webp)
   >
   > ![Owners List](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans-owners_v602.webp)

5. Answer the following questions in order to understand the situation.

   - Has the account been used recently?
   - Why is it orphan?
   - Who is it supposed to belong to?
   - If it is a service account, is it useful? Has it been used recently?

     - A used account must be connected to its rightful owner.
     - An unused account must be deleted.

   - If this account belongs to a person, is the user still in the organization or did they leave?

     - If the owner has left for more than XXX (time period defined by the security officer's
       rules), the account must be deleted.
     - If the owner has left for less than XXX, the account must be connected to its owner and
       deactivated.
     - If the owner is still in the organization, the account must be connected to its owner. Is
       there a rule to change?

   We said that useful service accounts must be connected to their owners due to the fact that an
   orphaned account cannot be
   [certified](/docs/identitymanager/6.1/identitymanager/index.md).
   But a service account must not be linked to a person, for the departure of said person from the
   company may trigger the loss of the service account.  
   This is why we create identities with `Application` as their `UserType`, each
   application-identity linked to a person supposed to manage it. Thus, service accounts must be
   connected to application identities, themselves owned by people. That way, if the owner of the
   application leaves, the application-identity is not deleted, and the service accounts it owns
   are not deprovisioned.

   See the schema below this note.

   ![Schema - Service Accounts](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_serviceaccounts.webp)

6. Select the appropriate owner or no owner at all, according to the previous analysis.

   Decisions must be made with caution as they cannot be undone.

   When binding an orphaned account to an existing owner, properties might need to be reconciled.

7. Click on **Confirm Account Deletion** or **Authorize Account** according to the previous
   decision.

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

![Bulk Reconcile](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

## Verify Review

In order to verify the process, check that the line for your reviewed item has been removed from the
**Resource Reconciliation** screen.

In addition, if you reconciled an orphaned account with an owner, check the user's permissions to
see said account.

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Provision Automatically

How to make Usercube automatically write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.),
automated provisioning is used to minimize human intervention and trust Usercube with role model
enforcement in external systems.

### Provisioning states

In an assignment request's lifecycle, provisioning automation implies skipping the `Transmitted`
state as Usercube no longer waits for a user to make changes anymore. For this reason, an assignment
request goes through the following provisioning states:

![Provisioning State Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/automatic-provisioning/provauto_states_v523.webp)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                                                                                                                                                                                   | Output                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [Provisioning orders](/docs/identitymanager/6.1/identitymanager/index.md) (required) automated provisioning [connection](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Updated managed systems |

## Implement Automated Provisioning

automated provisioning is performed through a connection using a
[package](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md)
for fulfilling external systems (e.g., the
[Active Directory package](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/active-directory.md)).

## Perform Automated Provisioning

There is no procedure to perform automated provisioning, for it is automatic and thus handled by
Usercube in daily jobs.

Make sure that the task used to compute and generate provisioning orders was launched after the
request (or the provisioning review, if any), through the complete job in the **Job Execution**
page.

![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

## Verify Automated Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the
   [manual assignment workflow](/docs/identitymanager/6.1/identitymanager/index.md)
   to make a change in one of their permissions, which involves automated provisioning.
3. Perform automated provisioning and check in Usercube that the change was effectively made.

# Provision

How to write to an externally managed system.

**A word about terminology** — Let's clarify the concept of writing to a managed system.

There are two notions involved:

- Fulfillment — writing to a managed system, manually or automatically
- Provisioning — writing automatically as provisioning is automated fulfillment

But in everyday conversation, in the interface and in this documentation, we use the term
provisioning instead of fulfillment.

## Overview

When modeling your connectors, you had to decide what data you wanted Usercube to manage within the
external systems. You configured your connectors, and among other things you chose the appropriate
connections and packages, to manage identities and their entitlements by writing directly to the
managed systems. This is done through said connectors' provisioning capabilities. See the
[ Model the Data ](/docs/identitymanager/6.1/identitymanager/index.md)
and
[ Create a Connection ](/docs/identitymanager/6.1/identitymanager/index.md)
topics for additional information.

When changes are performed on identity data, entitlements or the role model inside Usercube,
provisioning orders are generated in order to actually write said changes to the external systems.
These changes can be written automatically or manually. Manual provisioning is used to involve
humans and make them act on the external systems, instead of Usercube. Automatic provisioning is
used to minimize human intervention and trust Usercube with role model enforcement in external
systems. See the
[ Provision Manually ](/docs/identitymanager/6.1/identitymanager/index.md)
and
[ Provision Automatically ](/docs/identitymanager/6.1/identitymanager/index.md)topics
for additional information.

### Provisioning states

Usercube handles provisioning by assigning a provisioning state to assignment requests.

Here is the list of provisioning states and their description:

| Provisioning state  | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| 0—None              | Used for Usercube's internal computation.                                 |
| 1—Pending           | The order is ready for provisioning but not sent to the agent.            |
| 2—Transmitted       | The agent has collected this order but no feedback has been received yet. |
| 3—Errored           | The agent returned errors.                                                |
| 4—Verified          | The order is provisioned in the synchronized data.                        |
| 5—Awaiting Approval | The order is blocked until a review is performed.                         |
| 6—Inactive          | The order is blocked as it is considered as useless (order in the past).  |
| 7—Error             | The role model threw an exception while evaluating the order.             |
| 8—Executed          | The agent returned OK.                                                    |

These states are detailed with their transitions on the individual pages specific to provisioning
review, manual provisioning and automated provisioning. See the
[ Entitlement Assignment ](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
and
[ Review Provisioning ](/docs/identitymanager/6.1/identitymanager/index.md)
topics for additional information.

### Provisioning review

For security purposes, provisioning orders sometimes need to be reviewed before being propagated to
the managed system. Then, a user with the right entitlements accesses the **Provisioning Review**
page. Users can either approve provisioning orders that will then be unblocked and finally
propagated, or they can decline orders that will subsequently be ignored. See the
[ Configure a User Profile ](/docs/identitymanager/6.1/identitymanager/index.md)topic
for additional information.

The review prior to the provisioning of entitlement assignments is usually performed based on the
resource type of given identities. For example, the assignment of sensitive entitlements will
require a review before being provisioned, whereas basic rights can be assigned at once. Therefore,
resources must be carefully classified beforehand. See the
[ Classify Resources ](/docs/identitymanager/6.1/identitymanager/index.md)
topic for additional information.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems.

| Input                                                                                                                   | Output             |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Connector's data model (required) Classified resources (required) Provisioning Rules (required) Role catalog (required) | Provisioned system |

See the
[ Model the Data ](/docs/identitymanager/6.1/identitymanager/index.md),
[ Classify Resources ](/docs/identitymanager/6.1/identitymanager/index.md),
[ Create a Provisioning Rule ](/docs/identitymanager/6.1/identitymanager/index.md),
and
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.1/identitymanager/index.md)
topics for additional information.

## Perform Provisioning

In order to perform the provisioning you have to:

- Choose whether to adjust your resource types to implement provisioning review
- Choose whether to adjust your connections to implement manual and/or automated provisioning

## Verify Provisioning

In order to verify the process:

![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

**Step 1 –** Select a test user in the directory, accessible from the home page.

**Step 2 –** Follow the manual assignment workflow to make a change in one of their entitlements,
which involves the type of provisioning that you want to test.

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

**Step 3 –** Check the provisioning state of the requested entitlement at every step, in the user's
**View Permissions** tab.

![Provisioning State Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/prov_stateschema_v523.webp)

Whether your provisioning workflows trigger provisioning review, or whether they trigger manual or
automated provisioning, below is the global state schema.

# Provision Manually

How to use Usercube to manually write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.),
manual provisioning is used to make humans intervene and act on the external systems, instead of
Usercube.

### Provisioning states

In its lifecycle, an assignment request goes through the following provisioning states:

![Provisioning State Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems as
write permissions are required.

| Input                                                                                                                                                                                | Output                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| [Provisioning orders](/docs/identitymanager/6.1/identitymanager/index.md) (required) Manual provisioning [connection](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Updated managed systems |

## Implement Manual Provisioning

Manual provisioning is performed through a connection using the
[manual ticket package](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md).
Besides, for a resource to be manually provisioned, the corresponding resource type must be
configured with the manual connection set to `Provisioning Connection` in the **Fulfill Settings**.

## Perform Manual Provisioning

Perform manual provisioning by proceeding as follows:

1. Ensure that the task to compute or generate provisioning orders was launched after the request
   (or the provisioning review, if any), through the complete job in the **Job Execution** page.

   ![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   ![Manual Provisioning Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_page_v603.webp)

2. Access the manual provisioning orders page by clicking on the entity type that you want to manage
   in the **Manual Provisioning** section.

   ![Home Page - Manual Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

3. Choose a line to handle the corresponding provisioning order.
4. Creation, edition and deletion orders follow the same process: read Usercube's suggestions and
   create, edit or delete the appropriate resource directly in the managed system (outside
   Usercube).

   ![Creation Provisioning Order](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_createresource_v522.webp)

   ![Creation Provisioning Order](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_editresource_v522.webp)

5. Choose to confirm or report an error.

### Use bulk provisioning

Several orders can be provisioned simultaneously by clicking on **Bulk Provision**.

![Bulk Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/provmanual_bulk_v603.webp)

## Verify Manual Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the
   [manual assignment workflow](/docs/identitymanager/6.1/identitymanager/index.md)
   to make a change in one of their permissions, which involves manual provisioning.
3. Perform manual provisioning and check the provisioning state of the requested entitlement at
   every step, in the user's **View Permissions** tab.

![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Check in your managed system that the change was effectively made.

# Review Provisioning

How to review provisioning orders before generation.

## Overview

For security purposes, provisioning orders sometimes need to be reviewed before being computed and
actually generated. Then, a user with
[the right permissions](/docs/identitymanager/6.1/identitymanager/index.md)
accesses the **Provisioning Review** page. They can either approve provisioning orders that will
then be computed, generated and finally ready for actual provisioning, or they can decline orders
that will subsequently be ignored.

### Provisioning states

In an assignment request's lifecycle, provisioning review adds a few steps between the moment when
the request is issued and when provisioning orders are computed:

![Provisioning State Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems.

| Input                                                                                                                                                             | Output              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [Provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Provisioning orders |

## Implement Provisioning Review

Provisioning review is configured for a given resource type. Therefore, you can decide to force the
review of provisioning orders when
[configuring a resource type](/docs/identitymanager/6.1/identitymanager/index.md).
You can choose to:

- Set the number of required approvals by a
  [role officer](/docs/identitymanager/6.1/identitymanager/index.md),
  via the `Approval Workflow` option.
- Enable a technical approval by the application owner, via the `Block provisioning orders` option.

Provisioning review can also be triggered when a
[fulfillment](/docs/identitymanager/6.1/identitymanager/index.md)
error occurs.

## Review Provisioning Orders

Review provisioning orders by proceeding as follows:

1. On the home page, click on the entity type that you want to manage in the **Provisioning Review**
   section.

   ![Home Page - Provisioning Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/home_provisioningreview_v523.webp)

   ![Provisioning Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_provreview_v602.webp)

2. Click on a line to access details and handle addition, association, update or deletion orders.

   Once reviewed, provisioning orders are to be executed by Usercube during the next **Fulfill**
   task, accessible from the corresponding connector's overview page, in the **Resource Types**
   frame.

   Automatic provisioning orders are directly executed, while manual provisioning orders are listed
   on the **Manual Provisioning** page.

   ![Fulfill Task](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Handle an addition order

Usercube shows all the properties of the new resource to be created:

![Addition Order Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewaddition_v602.webp)

- `Proposed Value`: value proposed by Usercube.
- [`Provisioning State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- [`Workflow State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md):
  describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding
  [query rule](/docs/identitymanager/6.1/identitymanager/index.md).

Handle an addition order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to order the property creation with the proposed value.

   ![Addition - Approval Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

   - Or click on the decline icon to refuse the property creation.

   ![Addition - Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

   ![Addition - Postponement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or ignore the creation.

### Handle an association order

Usercube displays a given owner and a given resource to be associated with a given
[confidence rate](/docs/identitymanager/6.1/identitymanager/index.md)
and all resource properties to be verified:

![Association Order Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewassociation_v602.webp)

- `Confidence rate of proposed resource`: rate expressing the confidence in this
  [correlation](/docs/identitymanager/6.1/identitymanager/index.md).
- `Proposed Value`: value proposed by Usercube.
- `Current Value`: value currently in the managed system.
- [`Provisioning State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- [`Workflow State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md):
  describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding
  [query rule](/docs/identitymanager/6.1/identitymanager/index.md).

Handle an association order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to validate the proposed property value.

     ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

     ![Deletion Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/reviewrole_icondelete_v602.svg)

   - Or click on the decline icon to refuse the property association.

     ![Addition - Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

     ![Addition - Postponement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or deny the association.

### Handle an update order

Usercube shows a given resource and all resource properties to be verified:

![Edition Order Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewedition_v602.webp)

- `Proposed Value`: value proposed by Usercube.
- `Current Value`: value currently in the managed system.
- [`Provisioning State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- [`Workflow State`](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md):
  describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding
  [query rule](/docs/identitymanager/6.1/identitymanager/index.md).

Handle an update order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to order the property update with the proposed value.

     ![Edition - Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

   - Or click on the decline icon to refuse the property update.

     ![Addition - Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

     ![Addition - Postponement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Click on **Confirm Property Values**.

### Handle a deletion order

Usercube shows a given owner and their resources to be deleted:

![Deletion Order Review](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewdeletion_v602.webp)

Handle a deletion order by choosing either to confirm the deletion or to keep the resource.

### Use property view

By default, provisioning orders are listed by resource. It is possible to click on a resource and
then access the list of all provisioning orders for that resource.

![Resource View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_resourceview_v603.webp)

In addition, using resource view enables bulk unblocking for provisioning orders with errors.

![Bulk Unblock](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_bulkunblock_v603.webp)

It can be helpful to have the provisioning orders regrouped by property, as some of the changes can
be similar, so very likely to be validated by the same user. This is why a property view can be
enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all provisioning orders linked to that resource
type. In addition, select a property to display only the provisioning orders linked to these
resource type and property.

![Property View](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_propertyview_v603.webp)

The review process is similar on both views. However with property view, reviewers don't click on a
given line, but choose a decision directly on the left of the property line.

## Verify Provisioning Review

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the
   [manual assignment workflow](/docs/identitymanager/6.1/identitymanager/index.md)
   to make a change in one of their permissions, which involves provisioning review.
3. Check that the provisioning state is `Pending` in the user's **View Permissions** tab.

   ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Click on **Jobs** > **Fulfill** on the corresponding connector's overview page, in the **Resource
   Types** frame, to execute the provisioning orders.

   ![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

5. The orders using automated provisioning should be
   [automatically handled](/docs/identitymanager/6.1/identitymanager/index.md)
   with their state switching to `Executed`, while those using manual provisioning should appear on
   the
   [**Manual Provisioning**](/docs/identitymanager/6.1/identitymanager/index.md)
   page with their state switching to `Transmitted`.

![Home Page - Manual Provisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

# Generate Reports

How to use Usercube's reporting modules to produce IGA reports for auditing and governance purposes.

## Overview

Reporting features help users produce reports for auditing and performance evaluation. The aim is to
be aware of the whole assignment landscape, display it for analysis, and act upon it if needed.
Governance also helps produce audit-ready reports. You can start to set up governance features
relatively early in your Usercube journey and measure your progress from the very start.

A few reporting tools are already available in Usercube, used in other parts of your IGA project,
for example:

- the list of entitlements for a given user in their **View Permissions** tab;

  ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

- the list of all requests that you are authorized to see in **Workflow Overview** accessible from
  the home page in the **Administration** section;

  ![Home - Workflow Overview](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

- the
  [list of orphaned accounts](/docs/identitymanager/6.1/identitymanager/index.md).

  ![Orphaned Account List](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

Usercube puts users in control of their reporting. Rich features help produce customizable reports
that can be used to check the assignment policy results, or gather information for an audit.

Usercube provides several different levels of reporting according to your needs and technical tools.
You can:

- [download predefined reports](#download-predefined-reports) for simple needs;
- add new reports to the predefined ones through XML configuration, for recurring needs that aren't
  met by available reports (this requires XML configuration knowledge);
- [create customized reports](#create-customized-reports) with the Query module and its universes
  configured beforehand, to meet specific needs (this requires certain technical knowledge);
- create customized graphic reports with PowerBI, to meet specific needs (this requires certain
  technical knowledge).

## Participants and Artifacts

This operation can be performed by any user interested in producing IGA reports.

| Input              | Output  |
| ------------------ | ------- |
| Entries (required) | Reports |

## Download Predefined Reports

Usercube provides a selection of predefined reports available in the solution. They represent the
most common use cases.

The accessibility of these predefined reports was configured during
[profile configuration](/docs/identitymanager/6.1/identitymanager/index.md).

Download predefined reports by proceeding as follows:

1. Click on **Reports** on the left of the home page to access the list of predefined reports.

   ![Home Page - Reports](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/home_reports_v602.webp)

   ![Reports](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/reporting_predefinedreports_v602.webp)

2. Choose the appropriate report and click on **Download** to get an Excel report. The
   downward-pointing arrow provides additional report formats.

## Add New Reports to the List

When facing frequent reporting requirements outside the scope of predefined reports, new reports can
be configured with XML via
[`ReportQuery`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
and
[specific query grammar](/docs/identitymanager/6.1/identitymanager/api-reference/squery.md).

## Create Customized Reports

When facing a one-time need for producing specific reports, Usercube's Query module helps display
attributes chosen from the data which is already
[synchronized](/docs/identitymanager/6.1/identitymanager/index.md) and
[classified](/docs/identitymanager/6.1/identitymanager/index.md).
This module offers the possibility to customize reports and download them.

The Query module is based on predefined
[universes](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md)
that can be adjusted later on in
[XML configuration](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md),
just like the list of available query models.

Create a custom report by proceeding as follows:

1. Click on **Query** in the **Administration** section on the home page.

   ![Home Page - Query](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/home_query_v602.webp)

   ![Query Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/reporting_querypage_v602.webp)

2. Choose a query model from among the list.
3. Click on **Fields to Display** and select the appropriate fields from among the database
   [universe](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md)
   and click on **Confirm**.

   ![Fields to Display](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/reporting_fieldstodisplay_v522.webp)

   In cases where Usercube doesn't display correctly the information you need, you must try to
   understand the
   [entity instances](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md)
   and
   [association instances](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md)
   that constitute the
   [universe](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md)
   that you are working with. Perhaps the fields that you chose cannot be properly correlated.

4. Click on **Filters**, write the appropriate condition and click on **Confirm**.

   ![Filters](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/reporting_filters_v602.webp)

   For example, a report could list user names and identifiers � but only those with their
   `Contract end date` less than today's date � so that we will see all the workers who have left
   the organization and are still stored in Usercube.

5. Once all report settings are defined, click on **Download** to get a CSV report.

## Create Customized Graphic Reports with Power BI

When facing a periodic need for producing specific reports, especially when a visual presentation is
required, Usercube offers the possibility to connect to the
[Power BI](https://powerbi.microsoft.com/en-us/what-is-power-bi) application. This application will
allow you to create customized reports with a vast range of display options (such as graphs, charts,
matrixes, etc.) using Usercube's universes.

[See how to analyze Usercube's data with Power BI](/docs/identitymanager/6.1/identitymanager/governance/reporting/index.md).

# Set Up User Authentication

How to allow end-users to authenticate and use the Usercube application. See the
[ End-User Authentication ](/docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md)
topic for additional information.

# Plan Change Management

How to anticipate the deep changes in the organization's applications and processes due to Usercube
installation as a new IGA tool.

Change management is not only part of any IGA project. It is a full project in itself that requires
its own project officer, objectives, success indicators, etc. It starts on the very first day with
the project kickoff, and runs alongside the technical project.

## Overview

The applications and processes of the organization are about to change deeply. Change management is
crucial because it determines the future proper use of the solution and the gain that can be
achieved by the organization. It requires an upstream impact analysis in order to define the
strategy to adopt.

### Process

A digital project follows two parallel processes:

- The organizational and digital process used to design, build and deploy the solution.
- The human process urging staff to accept the solution, familiarize themselves with it, join and
  interact with the project.

Change management aims to support the teams throughout the human process.

![Process of Change Management](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/change-management/changemanagement_process.webp)

These processes include mandatory steps that all staff members have to go through, but not
necessarily at the same pace. For that reason, change managers can benefit from the use of personas,
i.e. creating characters that represent key populations.

## Participants and Artifacts

![Actors of Change Management](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/change-management/changemanagement_actors.webp)

The aim of a Project Management Officer concerning critical stakeholders is to enable:

- Decision makers to trigger holistic change in response to recurring factors in daily issues. This
  can be translated into promoting efforts towards the broader enterprise strategy, focusing on
  recurring challenges, identifying common denominators, not exceeding Project Management Office's
  capacity and promoting PMO's shifting value proposition.
- Managers to grow maturity and confidence in change management because they allow responsibility
  distribution throughout the organization. They need support in self-assessment and change
  management at varying degrees according to the strategic importance and complexity level of
  change. This can be translated into DIY change supports like templates, change coaches for
  tailored guidance, or change drivers for end-to-end execution.
- The employees impacted by change to enter the decision-making process at an early stage, thus
  improving change absorption. They must be engaged as active participants in shaping change
  decisions, in order to avoid extreme leader-dictated or consensus-based strategies.

| Input                               | Output                   |
| ----------------------------------- | ------------------------ |
| Upstream impact analysis (required) | Business ready to change |

## Run Change Management for Usercube

In order to profitably handle change management, any project should start with the question: **in
three years from now, what will be the (three to five) main facts attesting the success of this
project?** The answer will shape the strategy.

Whether Usercube replaces manual processes or an existing IGA tool, change management methods are
going to be the same. Only the analysis of impacted populations and the effort made to onboard them
can define the appropriate response.

IGA impact is based on data quality. Therefore, change management must encompass everything and
everyone that consumes and/or feeds data. All three population segments (decision makers, managers
and employees) are involved in data quality in one way or another. Hence, it is essential that they
understand IGA as an advantage instead of a constraint.

Run change management by proceeding as follows:

1. Identify the populations impacted by change. Below is an example of impacted populations that can
   vary enormously.

   ![Usual Populations](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/change-management/changemanagement_populations.webp)

2. For all listed populations, estimate their size and the expected impact on them, through
   indicators like the frequency of their future use of the solution. Use personas to represent key
   population members, such as VIP users that don't use the application much, or users not feeling
   comfortable with computers.
3. According to the previous impact analysis, implement adjusted change management methods. You can
   get inspiration from the following examples.

|     | Population  | Size | Impact                 | Possible Actions                                                                                     |
| --- | ----------- | ---- | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | All         | 500  | Low                    | Introduction email Public video Information article                                                  |
| 2   | End-Users   | 50   | High                   | Coffee corner: coffee break with the local support team offering tutorials and exercises on Usercube |
| 3a  | HR/Managers | 10   | High (daily use)       | Tutorials and exercises with a support team to get started quickly with Usercube                     |
| 3b  | HR/Managers | 10   | Medium (bimonthly use) | Step-by-step procedure video or flyer                                                                |

##### Example 1

Informing relevant populations is essential. For large populations (ex.: 500 employees), an
introduction email can be sent to everyone or a video published on a public website or played on
screens visible in the workplace.

##### Example 2

A medium or large population (i.e. the size of a department in your organization) might be receptive
to informal meetings such as a coffee break with the local support team offering tutorials and
exercises on Usercube.

##### Example 3

Let us consider HR teams and managers which have a change impact depending on their frequency of use
of the application.

###### Example 3a

If they frequently use the application (i.e. daily use), they will benefit from tutorials and
exercises with a support team to get started quickly with Usercube.

###### Example 3b

If they infrequently use the application (i.e. bimonthly use), they may rather benefit from training
materials such as a step-by-step procedure video or flyer.

## Verify Change Management

In order to verify the process, change managers can rely on implemented indicators, in the same way
as for any project management situation.

# Implement Usercube

How to actually implement Usercube solution.

The documentation is not yet available for this page and will be completed in the near future.

# Deploy

- #### [Plan Change Management](/docs/identitymanager/6.1/identitymanager/index.md)

  How to anticipate the deep changes in the organization's applications and processes due to
  Usercube installation as a new IGA tool.

- #### [Install the Production Agent](/docs/identitymanager/6.1/identitymanager/index.md)

  How to install a local agent for production environment.

- #### [Configure the Agent's Settings](/docs/identitymanager/6.1/identitymanager/index.md)
  How to configure the agent's application settings via the `web.config`, `appsettings.json` and
  `appsettings.agent.json` files.- ####
  [Install IIS via Server Manager](/docs/identitymanager/6.1/identitymanager/index.md)
  How to configure the local server to install IIS via Server Manager.- ####
  [Configure the Pool and Site](/docs/identitymanager/6.1/identitymanager/index.md)
  How to configure the application pool and website via IIS.- ####
  [Set the Working Directory's Permissions](/docs/identitymanager/6.1/identitymanager/index.md)
  How to assign to the pool the right permissions on the working directory.- ####
  [Finalize the Installation](/docs/identitymanager/6.1/identitymanager/index.md)
  How to finalize the installation of the agent.
- #### [Set Up User Authentication](/docs/identitymanager/6.1/identitymanager/index.md)

  How to allow end-users to authenticate and use the Usercube application.

- #### [Implement Usercube](/docs/identitymanager/6.1/identitymanager/index.md)
  How to actually implement Usercube solution.

# Set the Working Directory's Permissions

This guide shows how to assign to the pool the right permissions on the working directory.

## Overview

For Usercube to work correctly, the pool of the production agent must be configured with specific
permissions on the working directory.

This page describes the optimal configuration of the pool's permissions on the working directory to
prepare the production agent's installation.

## Set the Working Directory's Permissions

Set the working directory's permissions by proceeding as follows:

1. Right-click on the working directory, for example `C:/identitymanager`, to select **Properties**, and in
   the **Security** tab, click on **Advanced**.

   ![Working Directory Properties: Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties1.webp)

2. In the **Permissions** tab, click on **Add**, and in the pop-up window click on **Select a
   principal**.

   ![Working Directory Properties: Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties2.webp)

3. Click on **Locations�** to choose the current computer, and in the text area enter
   `iis apppool/identitymanager` (`Usercube` being the name of the previously created pool).

   ![Working Directory Properties: Step 3](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties3.webp)

   An error at this point should come either from a mistake in the pool's name or in the selected
   location.

4. Click on **OK** and make sure that only the **Read and execute**, **List folder contents** and
   **Read** permissions are selected.

   ![Working Directory Properties: Step 4](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties4.webp)

5. Click on **OK** in the windows until they are all closed.
6. Right-click on the `Temp` folder to select **Properties**, and in the **Security** tab, click on
   **Edit**.

   ![Temp Folder Properties: Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties1.webp)

7. Select the user corresponding to the pool and give them `Full control`.

   ![Temp Folder Properties: Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties2.webp)

8. Click on **OK** in the windows until they are all closed.
9. Repeat the last few steps (those concerning the `Temp` folder) to apply them to the `Work` and
   `Mails` folders.

## Next Steps

To continue,
[finalize the installation in a few steps](/docs/identitymanager/6.1/identitymanager/index.md).

# Finalize the Installation

This guide shows how finalize the installation of the agent.

## Overview

This page describes the last few steps that the production agent needs for Usercube to run
correctly.

## Finalize the Installation

Finalize the installation of the agent by proceeding as follows:

1. Install
   [Windows' hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

   If the bundle was installed before
   [IIS configuration](/docs/identitymanager/6.1/identitymanager/index.md),
   then IIS might not display the AspNetCore module and Usercube will not run. In this case,
   relaunch the bundle's installation executable to perform a repair.

2. When using a proxy,
   [adjust the configuration accordingly](/docs/identitymanager/6.1/identitymanager/installation-setup/reverse-proxy-setup.md).

## Next Steps

To continue, follow the instructions to
[verify the agent's installation](/docs/identitymanager/6.1/identitymanager/index.md).

# Configure the Pool and Site

This guide shows how to configure the application pool and website via IIS.

## Overview

IIS provides a platform for hosting and managing websites.
[See more details](https://learn.microsoft.com/fr-fr/iis/get-started/introduction-to-iis/introduction-to-iis-architecture).

To install the production agent, a website must be created and configured correctly, as part of an
application pool.

This page describes the optimal configuration in IIS to prepare the production agent's installation.

## Configure the Application Pool and Site

Configure the application pool and site by proceeding as follows:

1. Open IIS and remove the default site and pool.

   IIS can usually be found in Windows' search menu, or from Server Manager by accessing the
   **Tools** menu.

   ![IIS: Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis1.webp)

2. Right-click on **Application Pools** to add a new pool named `Usercube`.

   ![IIS: Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis2.webp)

3. Right-click on **Sites** to add a new site named `Usercube<Organization>`, make sure that the
   selected application pool is `Usercube` and set the `path` field to the `Runtime` folder.

   ![IIS: Step 3](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis3.webp)

4. Right-click on the application pool to open its advanced settings and make sure that the
   following parameters are set as such:

   ![IIS: Step 4](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis4.webp)

   ![IIS: Step 5](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis5.webp)

5. Make sure that IIS contains an SSL certificate, by accessing the home page of IIS server and
   double-clicking on **Server Certificates**.

   If the certificate is not ready yet, generate an auto-signed certificate.

   ![IIS Server Certificate: Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate1.webp)

   If the certificate is not there yet, import it by clicking on **Import�** in the right-side
   menu, and specify the certificate's path and password.

   ![IIS Server Certificate: Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate2.webp)

6. Add the certificate's URL to the site by right-clicking on the site, selecting **Edit Bindings�**
   and clicking on **Add**, then choosing `https` as type, `443` as port, specifying the server's
   URL (without the `https` part) as host name, and finally selecting the server certificate.

   ![IIS Server Certificate: Step 3](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate3.webp)

   Click on **OK**.

   If the server's certificate is not available at this point, then make sure it was correctly
   imported in the previous step.

## Next Steps

To continue,
[set the right permissions on the working directory](/docs/identitymanager/6.1/identitymanager/index.md).

# Install IIS via Server Manager

This guide shows how to configure the local server to install IIS via Server Manager.

## Overview

When running on Windows Server, Server Manager makes available parameters to configure the local
server at will.
[See more details](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/manage-the-local-server-and-the-server-manager-console).

This page describes the optimal configuration of the local server to install IIS in order to prepare
the production agent's installation.

## Install IIS via Server Manager

Install IIS via Server Manager by proceeding as follows:

1. Open the Server Manager program and click on **Add roles and features**.

   ![Server Manager: Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager1.webp)

2. Click on **Next**, then in **Installation Type** make sure that **Role-based or feature-based
   installation** is selected and click on **Next**.

   ![Server Manager: Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager2.webp)

3. In **Server Selection** tick **Select a server from the server pool** and click on **Next**.

   ![Server Manager: Step 3](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager3.webp)

4. In **Server Roles** tick **Web Server (IIS)**.

   ![Server Manager: Step 4](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager4.webp)

5. In **Features** select **Remote Server Administration Tools** > **Role Administration Tools** >
   **AD DA and AD LDS Tools** > **AD DS Tools** > **AD DS Snap-Ins and Command-Line Tools**.

   ![Server Manager: Step 5](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager5.webp)

6. In **Confirmation** click on **Install**.

   ![Server Manager: Step 6](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager6.webp)

## Next Steps

To continue,
[configure the application pool and website via IIS](/docs/identitymanager/6.1/identitymanager/index.md).

# Install the Production Agent

This guide shows how to install an
[agent](/docs/identitymanager/6.1/identitymanager/index.md)separated
from the server, for production environment.

## Overview

Like all [agents](/docs/identitymanager/6.1/identitymanager/index.md),
the production agent aims to extract data from a given managed system, and transmit said data to the
Usercube server. If necessary, the agent also enables the managed system's provisioning according to
the orders computed by the Usercube server.

Usercube solution can use several agents, each of them manages a given system. This section is about
installing the agent managing the production environment.

Once agents are configured in addition to the default one provided by SaaS, you need to think about
what agent to choose during each
[connector declaration](/docs/identitymanager/6.1/identitymanager/index.md).
The appropriate agent has access to the managed system.

## Requirements

Ensure that all
[agent requirements](/docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md)
can be met before starting the installation of the production agent.

Requirements for the agent installation can change over the course of the project, according to the
project purpose.

### Encryption certificates

Ensure that your encryption certificates are valid by checking their: expiration date; signatory;
key size exceeding 2048; sha256 and not sha-1.

### Server Manager

Ensure that the device used for the installation has the Server Manager program.

## Participants and Artifacts

Integrators should have all the elements they need to operate.

| Input                                                                                                              | Output           |
| ------------------------------------------------------------------------------------------------------------------ | ---------------- |
| [Agent prerequisites](/docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md) (required) | Production agent |

## Install the Production Agent

Install the production agent by proceeding as follows:

1. [Create the working directory](/docs/identitymanager/6.1/identitymanager/installation-setup/working-directory-setup.md)
   and make sure it contains the folders: `Mails`; `Sources`; `Temp`; `Work`.
2. [Configure the agent's application settings](/docs/identitymanager/6.1/identitymanager/index.md)
   via the `web.config`, `appsettings.json` and `appsettings.agent.json` files.
3. [Configure the local server to install IIS](/docs/identitymanager/6.1/identitymanager/index.md)
   via Server Manager.
4. [Configure the application pool and website](/docs/identitymanager/6.1/identitymanager/index.md)
   via IIS.
5. [Set the right permissions on the working directory](/docs/identitymanager/6.1/identitymanager/index.md).
6. [Finalize the production agent's installation](/docs/identitymanager/6.1/identitymanager/index.md).

## Verify Agent Installation

In order to verify the process:

- make sure the website is accessible from IIS by clicking on **Browse** (in the menu on the right),
  and from your browser;
- if logs are enabled, then stop the pool to make sure that no error is thrown;
- perform from a local device agent-side actions such as sending test emails, reading and/or writing
  inside working folders, or launching/scheduling agent-side tasks.

# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the `web.config`,
`appsettings.json` and `appsettings.agent.json` files.

## Overview

Usercube provides JSON files to configure varied application settings, named
[`appsettings.json`](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
and
[`appsettings.agent.json`](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the `Runtime/Agent` folder, copy the files `appsettings.json`, `appsettings.agent.json` and
   `web.config` and paste them in the `Runtime` folder, thus replacing the pre-existing ones.
2. Open `web.config` and make sure that, in the `aspNetCore` tag, the value of `arguments` is set to
   `./identitymanager-Agent.dll`.

   When needing to get the agent's logs, set also `stdoutLogEnabled` to `true`. See more details in
   [Microsoft's documentation](https://learn.microsoft.com/fr-fr/aspnet/core/host-and-deploy/iis/logging-and-diagnostics?view=aspnetcore-7.0).

   ```

    web.config

    ...
    <aspNetCore processPath="dotnet" arguments="./identitymanager-Agent.dll" stdoutLogEnabled="true" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">     ...
    </aspNetCore> ...

   ```

3. Open `appsettings.json` and make sure that:

   - **License** contains a valid license;
   - **IdentityServer** contains the encryption certificate's path and password provided by
     NETWRIX' team, in order to secure agent/server identification;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "IdentityServer": {
     >   "X509KeyFilePath": "./identitymanager.pfx",
     >   "X509KeyFilePassword": "secret"
     > }
     >
     > ```

   - you get an encryption certificate which will be used to encrypt specific files such as logs or
     temporary files, and that **EncryptionCertificate** contains its path and password;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "EncryptionCertificate": {
     >   "File": "./identitymanager-Files.pfx",
     >   "Password": "secret",
     >   "EncryptFile": true
     > }
     >
     > ```

     **EncryptFile** can stay set to `false` while verifying the agent installation, but for
     security reasons it must be set to `true` afterwards.

     If the certificates' passwords contain `@`, then they must be escaped via the `@` as first
     character of the strings.

   - **ApplicationUri** contains the server's address, provided by NETWRIX' team when working in a
     SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "ApplicationUri": "http://localhost:5000"
     >
     > ```

     Do not write a `/` character at the end of the string.

   - **Cors** > **AllowAnyHeader**, **AllowAnyMethod** and **AllowCredentials** are set to `true`;

     ```

       appsettings.json

       "Cors": {
           "AllowAnyHeader": "true",
           "AllowAnyMethod": "true",
           "AllowCredentials": "true"
       }

     ```

4. Open `appsettings.agent.json` and make sure that:

   - **OpenId** > **AgentIdentifier** specifies the agent's name which must match the XML
     configuration.
     [See more details](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).

     > For example:
     >
     > ```
     >
     >         appsettings.agent.json
     >
     >         "OpenId": {
     >           "AgentIdentifier": "MyAgent"
     >           }
     >
     > ```
     >
     > With the following configuration:
     >
     > ```
     >
     >         <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />
     >
     > ```

   - **OpenId** > **OpenIdClients** > **Job** contains the non-hashed value of the password of
     "Job-Remote" provided by NETWRIX' team�

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   }
     > }
     >
     > ```

     � and add the hashed value of this password to the `OpenIdClient` named `Job` from the XML
     configuration;

     > For example:
     >
     > ```
     >
     > <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ConsolidationMode="Merge" />
     >
     > ```

   - **OpenId** > **DefaultOpenIdClient** is set to `Job`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   },
     >   "DefaultOpenIdClient": "Job"
     > }
     >
     > ```

   - **PasswordResetSettings** > **TwoFactorSettings** > **ApplicationUri** contains the server's
     address, provided by NETWRIX' team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **EncryptionCertificate** contains contains the path and password
     of the certificate used to secure password tokens;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../identitymanager.pfx",
     >       "Password": "secret"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **MailSettings** > **PickupDirectory** is set to the `Mails`
     folder and **FromAddress** to `no-reply@<organization>.com`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../identitymanager.pfx",
     >       "Password": "secret"
     >   },
     >   "MailSettings": {
     >       "PickupDirectory": "../Mails",
     >       "FromAddress": "no-reply@contoso.com"
     >   }
     > }
     >
     > ```

   - **SourcesRootPaths** contains the path to the `Sources` folder.

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "SourcesRootPaths": [
     >   "C:/identitymanager/Sources"
     > ]
     >
     > ```

## Next Steps

To continue,
[configure the local server to install IIS via Server Manager](/docs/identitymanager/6.1/identitymanager/index.md).

# How to Maintain the Workforce Directory

How to keep the workforce directory up to date.

## Overview

![Process Schema - How to Implement a New System](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/global-process/howto-maintaindirectory/globalprocess_schemamaintain.webp)

## Process Details

Be aware that the integration of an IGA tool is an iterative process. Thus, after
[following the starting process](/docs/identitymanager/6.1/identitymanager/index.md)
and creating the workforce directory, you can come back at any time and complete the directory that
you started,
[updating identity data](/docs/identitymanager/6.1/identitymanager/index.md).

# How to Implement a New System

How to add a new system to the solution.

## Overview

When connecting Usercube to a new system, several process paths can be taken according to your
strategy. There is no option fundamentally better than the others, your decision must depend on your
needs.

The **option A** leads quickly to
[the implementation in production environment](/docs/identitymanager/6.1/identitymanager/index.md),
i.e. a new application in Usercube's scope. With this, you can
[review orphan and unused accounts](/docs/identitymanager/6.1/identitymanager/index.md),
[provision the AD](/docs/identitymanager/6.1/identitymanager/index.md),
[reconcile properties](/docs/identitymanager/6.1/identitymanager/index.md),
and
[generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
for example the list of profiles assigned to users.

The **option B** takes more time as it goes through the creation of the role model based on the
system's entitlements, but it leads to even more gain as you can also
[reconcile roles](/docs/identitymanager/6.1/identitymanager/index.md),
perform
[access certification](/docs/identitymanager/6.1/identitymanager/index.md)
and
[request entitlement assignment](/docs/identitymanager/6.1/identitymanager/index.md),
and also
[generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
for example the list of assigned single roles.

The option B is more complicated and time-consuming than the option A, but leads to more gain. Be
aware that you can go through the process options simultaneously.

![Process Schema - How to Implement a New System](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/global-process/howto-newsystem/globalprocess_schemaconnectsyst.webp)

## Process Details

### Common starting steps

1. [Connect Usercube to the system](/docs/identitymanager/6.1/identitymanager/index.md):
   create the appropriate connector with its connections and entity types.
2. [Synchronize the system's data](/docs/identitymanager/6.1/identitymanager/index.md)
   into Usercube.

   Based on this, you can
   [generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
   for example the list of resources in the system. A few predefined reports are available from the
   start, you can generate any report from this list as soon as it makes sense according to the
   integration progress.

3. [Categorize resources](/docs/identitymanager/6.1/identitymanager/index.md)
   in order to classify them according to their intent, and correlate these resources with their
   owners.
4. [Create provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md)
   to write to the system in order to update the resources' properties directly in the system.
5. [Adjust the rules by reconciling resources](/docs/identitymanager/6.1/identitymanager/index.md),
   i.e. analyze the differences spotted between the reality of resources' properties and those
   computed by the previously established rules. Especially, verify that accounts are correlated to
   the right owners and that their properties have the right values.

   Either the integrator handles the customization of the rules and the review of non-conforming
   resources, or they can assign an application administrator profile to a given user to perform
   it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Usercube to an external system, two process options are available according to your
needs: either aim directly to the implementation in production environment, or first build the role
model in order to enable more administration activities. Both options can be started simultaneously.

### Option A: Straight to production implementation

Go directly to the common final steps (step 8).

### Option B: First build the role model

6. [Create roles in the role catalog](/docs/identitymanager/6.1/identitymanager/index.md)
   for applications managed by the system.
7. [Automate role assignments](/docs/identitymanager/6.1/identitymanager/index.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

8. Perform tests.
9. Deploy the pre-production configuration to the production environment.

# How to Start

How to start integrating Usercube with your own needs.

## Overview

When starting with Usercube, several process paths can be taken according to your strategy. There is
no option fundamentally better than the others, your decision must depend on your needs.

The **option 1** leads quickly to
[identity management](/docs/identitymanager/6.1/identitymanager/index.md),
i.e. users' on-boarding/movement/off-boarding without needing a periodic synchronization.

The **option 2A** takes more time as it requires the installation of an agent on your network in
order to connect Usercube to the system and use the AD's data, but it leads to more gain as you can
also
[review orphan and unused accounts](/docs/identitymanager/6.1/identitymanager/index.md),
[provision the AD](/docs/identitymanager/6.1/identitymanager/index.md),
[reconcile properties](/docs/identitymanager/6.1/identitymanager/index.md),
and
[generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
for example the list of profiles assigned to users.

The **option 2B** takes even more time as it goes through the creation of the role model based on
the system's entitlements, but it leads to even more gain as you can also
[reconcile roles](/docs/identitymanager/6.1/identitymanager/index.md),
perform
[access certification](/docs/identitymanager/6.1/identitymanager/index.md)
and
[request entitlement assignment](/docs/identitymanager/6.1/identitymanager/index.md),
and also
[generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
for example the list of assigned single roles.

The options 2A and 2B are more complicated and time-consuming than the option 1, but lead to more
gain. Be aware that you can go through the process options simultaneously.

NETWRIX recommends the option 1 to be able to start IGA without waiting for the installation of an
agent in your network, and go through the option 2 simultaneously.

![Process Schema - How to Start with Usercube](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/global-process/howto-start/globalprocess_schemastart.webp)

## Process Details

### Common starting steps

1. [Install the development environment](/docs/identitymanager/6.1/identitymanager/index.md).
2. [Create the workforce directory](/docs/identitymanager/6.1/identitymanager/index.md):
   configure the generation of unique properties; load workforce identities to Usercube; adjust the
   data model.

After these first steps, two process options are available according to your needs: either aim
directly to identity management and the opening of Usercube to end-users, or first connect Usercube
to an external system in order to enable more administration activities. Both options can be started
simultaneously.

### Option 1: Based on the workforce directory

Starting with the workforce directory does not require the installation of a local agent.

Go directly to the common final steps (step 10).

### Option 2: Based on an external system

Starting with an external system requires the installation of a local agent.

3. [Connect Usercube to the system by creating a connector](/docs/identitymanager/6.1/identitymanager/index.md).
4. [Synchronize the system's data](/docs/identitymanager/6.1/identitymanager/index.md)
   into Usercube.

   Based on this, you can
   [generate reports](/docs/identitymanager/6.1/identitymanager/index.md),
   for example the list of resources in the system. A few predefined reports are available from the
   start, you can generate any report from this list as soon as it makes sense according to the
   integration progress.

5. [Categorize resources](/docs/identitymanager/6.1/identitymanager/index.md)
   in order to classify them according to their intent, and correlate these resources with their
   owners.
6. [Create provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md)
   to write to the system in order to update the resources' properties directly in the system.
7. [Adjust the rules by reconciling resources](/docs/identitymanager/6.1/identitymanager/index.md),
   i.e. analyze the differences spotted between the reality of resources' properties and those
   computed by the previously established rules. Especially, verify that accounts are correlated to
   the right owners and that their properties have the right values.

   Either the integrator handles the customization of the rules and the review of non-conforming
   resources, or they can assign an application administrator profile to a given user to perform
   it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Usercube to an external system, two process options are available according to your
needs: either aim directly to identity management and the opening of Usercube to end-users, or first
build the role model in order to enable more administration activities. Both options can be started
simultaneously.

### Option 2A: Straight to identity management

Go directly to the common final steps (step 10).

### Option 2B: First build the role model

8. [Create roles in the role catalog](/docs/identitymanager/6.1/identitymanager/index.md)
   for applications managed by the system.
9. [Automate role assignments](/docs/identitymanager/6.1/identitymanager/index.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

10. Adjust HR workflows to keep the workforce directory updated (only in XML configuration).
11. [Define the permissions for your user profiles](/docs/identitymanager/6.1/identitymanager/index.md).
12. Define the authentication mode by configuring `SelectUserByIdentityQueryHandlerSetting` (only in
    XML configuration), and
    [assign profiles to users](/docs/identitymanager/6.1/identitymanager/index.md)
    to open the application to end-users.

# Global Process

How do the process activities success each other.

NETWRIX recommends working with a SaaS installation and with the User Interface as long as possible,
because identity management is optimized by mastering identities inside Usercube.

Be aware that the integration of an IGA tool is an iterative process. There is no simple linear
process. This user guide provides the following processes that can follow one another and
intertwine.

- #### [How to Start](/docs/identitymanager/6.1/identitymanager/index.md)
  How to start integrating Usercube with your own needs.- ####
  [How to Maintain the Workforce Directory](/docs/identitymanager/6.1/identitymanager/index.md)
  How to keep the workforce directory up to date.- ####
  [How to Implement a New System](/docs/identitymanager/6.1/identitymanager/index.md)
  How to add a new system to the solution.

# User Guide

Usercube's User Guide leads the reader through all the necessary steps to autonomously build an IGA
solution based on Usercube, either from scratch or using Usercube's IGA Core Solution, with the aim
of quickly delivering value.

## Target Audience

This guide is intended to be read by Usercube administrators, i.e. power users who configure
Usercube to match their company's needs.

## Prior Knowledge

This guide presumes some knowledge of Usercube on the part of the reader who should have previously
read the [Introduction Guide](/docs/identitymanager/6.1/identitymanager/index.md) in
order to be aware of the main purposes, principles and capabilities of Usercube.

Using this guide does not require any advanced IT skills. All the configuration steps take place
through Usercube's UI or MS Excel files.

NETWRIX strongly recommends starting from the
[Introduction Guide](/docs/identitymanager/6.1/identitymanager/index.md) to fully
benefit from the User Guide's content.

## Overview

This guide is made of step-by-step procedures that take the reader through setting up Usercube from
scratch and creating IGA value as quickly as possible.

The procedures are meant to guide the reader through a standard setup, based on Usercube's IGA Core
Solution, and with NETWRIX' suggestions and recommendations. Any advanced configuration can be
performed later using the content of the
[Integration Guide](/docs/identitymanager/6.1/identitymanager/getting-started/index.md).

Thus, even when having very specific needs, NETWRIX still recommends starting the project with the
basics presented in this guide. The IGA solution can be enhanced later on with the help of NETWRIX'
experts. This way, IGA value can already be delivered while the project continues for optimization
purposes.

## Content

This guide is organized into activities, each activity containing an overview, the input, output,
and participants as well as step-by-step procedures and a way to verify the outcome.

Some activities are grouped together when they depend on each other to create value or when they
contribute to a same goal.

While some activities must be carried out before others for technical and/or functional reasons, the
order is not absolute. Please follow the instructions and recommendations detailed with the
[global process](/docs/identitymanager/6.1/identitymanager/index.md).

All activities are organized into bigger sections which are distinguishable by their functional
intent: set up; administrate; optimize; deploy and maintain.

### Set up

Learn how to configure a working environment, how to set up identity lifecycles, and how to build a
catalog of roles for entitlement management, in order to configure the Minimum Viable Product.

### Administrate

Learn how to enforce your security policies through access certification, or resource/role
reconciliation, provisioning review, etc.

### Optimize

Learn how to enhance the IGA solution through automation and model optimization.

> For example, learn how to adjust the identity model and the role model in order to make them
> resemble the company's reality, learn how to improve the data quality by automating entitlement
> assignment decisions, or by automatically provisioning assignments to the managed systems. Learn
> how to push the automation wall thanks to Usercube's AI with role mining.

### Deploy

Learn how to deploy the solution to a production environment.

### Maintain

Learn how to maintain the solution, because the project is iterative. Learn how to keep the data
model up to date according to the company's changes, or how to add new systems to the loop, while
Usercube is already running in production.

## How to Use this Guide

Start by studying the
[global process](/docs/identitymanager/6.1/identitymanager/index.md) that
details every activity in their respective sections and how they relate to one another. You will get
a good view of the steps to take from start to finish.

Follow the path, stop at each activity, and go check out the details on the matching page of the
guide, in the corresponding section. There you will find recommendations and practical steps to
complete the activity and test it. Then you can resume following the path.

At any step along the way, once you feel comfortable, you can decide to take another direction than
the recommended process, as long as you take into account the input artifacts specified in each
activity page, which represent actual technical dependencies. You can start an activity only if all
the previous technical dependencies are met.

Keep in mind that completing sections one by one is the quickest way to deliver value. Nevertheless,
they are not rigorously dependent on each other. You do not have to complete one entirely in order
to go to the next. But they are not rigorously independent either. There are some activities in the
first one that are required for activities in the second. Read the input artifacts to choose the
correct order.

> For example, if you are looking forward to fixing non authorized account (from the
> **Administrate** section) you do not have to complete the **Set Up** section entirely. You just
> have to complete the **Categorize Resources** activity, and all the activities connected to it
> upstream . You do not have to complete other activities such as the **Create Roles in the Role
> Catalog** activity.

# Update Identity Data

How to perform modifications in the identity repository, to manage onboarding, offboarding and
position changes.

This part is not about changing the data model, but data itself.

## Overview

After the identity repository is initiated, you will need to modify it for many possible reasons.
Among them:

- update all identities with new attributes because you didn't have the required information during
  the repository creation, or because it wasn't a priority for you then;
- perform onboarding: add new identities as new workers arrive in the company;
- modify identities' attributes to fix existing errors, or to reflect a real change in users' data,
  or model a position change;
- remove identities' attributes, as they are no longer required to manage entitlements;
- perform offboarding: remove identities with all their attributes, as users leave the company.

## Participants and Artifacts

Integrators are able to perform an identity update if they master the new data.

| Input                                                                                                             | Output                      |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) New identity data (required) | Updated identity repository |

## Modify Identity Data

Modify identity data by proceeding as follows, according to the changes to be made:

- either
  [update data individually](/docs/identitymanager/6.1/identitymanager/index.md)
  by using predefined workflows in the UI;
- or
  [perform a same change on several identities simultaneously](/docs/identitymanager/6.1/identitymanager/index.md)
  by using Usercube's predefined workflow in the UI;
- or
  [update data on a massive scale](/docs/identitymanager/6.1/identitymanager/index.md)
  by uploading an external file into Usercube, as an incremental version of the identity repository.

# Update an Individual Identity

How to manage onboarding, position changes and offboarding through the UI, for a single identity.

This part is not about changing the data model, but data itself.

## Overview

Individual changes in identity data can be handled using Usercube's predefined workflows to:

- [declare a new identity](#declare-a-new-identity) (for an internal as well as an external worker);
- act on existing identities, including modify their data, manage their contract and/or positions,
  suspend all accounts linked to them, or reactivate them, repair some data, or delete these
  identities.

## Participants and Artifacts

A given user's data can be updated occasionally by their manager, but most often by the HR
department.

| Input                                                                                                             | Output                      |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) New identity data (required) | Updated identity repository |

## Declare a New Identity

Declare a new worker by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. According to the type of the user to be declared, click on the corresponding button.

   ![Workflow - New User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_newuser_v602.webp)

3. Follow the workflow's instructions to fill the form with the user's data, choose the user's
   entitlements from your
   [role catalog](/docs/identitymanager/6.1/identitymanager/index.md)
   and send the request.

## Act on an Existing Identity

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

   ![Workflow - User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** or **Helpdesk** to select the action to perform.

   ![Workflow - Modify Permissions](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions.

   If the workflow has been configured in this way, the update request may require a review. In
   this case, sending the request triggers the display of said request on the **My Tasks** screen
   for the reviewer, while the state of the request is pending. In this case, the requested updates
   will be displayed in Usercube only after the request has been reviewed.

   ![Request - Review Pending](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process, check that the right data is displayed in the directory for the
involved user.

![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

# Update Identities in Bulk

How to perform a mass change in identity data, by uploading an incremental version of the identity
repository.

This part is not about changing the data model, but data itself.

Here we describe the incremental update of identities, but the update of any other
[File/CSV](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
works the same.

## Overview

When the number of changes gets high, identity data update through the UI becomes tedious.
Therefore, Usercube offers the possibility to fill a predefined file with data to be modified, in
order to perform all changes simultaneously.

Data update can be performed in complete mode or incremental mode.

## Participants and Artifacts

Identity data can be updated most often in cooperation with the HR department.

| Input                                                                                                             | Output                      |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) New identity data (required) | Updated identity repository |

## Update Data in Complete Mode

Mass update identity data (in complete mode) by proceeding as follows:

1. Access the directory connector from **Connectors** on the home page, in the **Configuration**
   section.

   ![Home - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, choose the connection corresponding to identities.
3. In the connection's settings, download the Excel template full of the data from your database.

   ![Download Full Template](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/mass-update/datamodif_downloadtemplatedata_v602.webp)

4. Update the data that needs change.
5. Ensure that the field `Path (Complete mode)` is filled with the path of the source file.
6. Click on **Upload** and choose the file you modified with new data.

   ![Upload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/mass-update/connection_upload_v602.webp)

7. Click on **Check Connection** to verify the path.

   ![Check Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

8. Click on **Save & Close**.
9. Back on the connector's page,
   [launch synchronization](/docs/identitymanager/6.1/identitymanager/index.md).

   Be cautious about
   [thresholds](/docs/identitymanager/6.1/identitymanager/index.md).

## Update Data in Incremental Mode

Mass update identity data (in incremental mode) by proceeding as follows:

1. Access the directory connector from **Connectors** on the home page, in the **Configuration**
   section.

   ![Home - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, choose the connection corresponding to identities.
3. In the connection's settings, download the empty Excel template.

   ![Download Full Template](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/mass-update/datamodif_downloadtemplateempty_v602.webp)

4. Fill only the data to be modified, specify the unique identifier for each entry (for correlation
   purposes), and fill the column `Command`, which can take a few available inputs:

   - `Add` to incorporate new attributes;
   - `Modify` to change existing attributes;

     Attributes can be emptied using the value `NULL_NULL`.

   - `Delete` to remove attributes from the datamodel;

     Instead of using `Delete`, you can
     [scan the data model](/docs/identitymanager/6.1/identitymanager/index.md)
     to exclude unused attributes.

   - `Merge` to input an identity's data and modify the corresponding attributes if said identity
     already exists, create a new identity otherwise.
     > For example, if a few users switch working sites, then the modification is performed by
     > filling the file only with said users' identifiers and new sites. Fill the column
     > `Command` with `Modify`. The rest will not be changed.

5. Ensure that the field `Path (Incremental mode)` is filled with the path of the source file.
6. Click on **Upload** and choose the file you modified with new data.

   ![Upload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/mass-update/connection_upload_v602.webp)

7. Click on **Check Connection** to verify the path.

   ![Check Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

8. Click on **Save & Close**.
9. Back on the connector's page,
   [launch synchronization](/docs/identitymanager/6.1/identitymanager/index.md).

   Be cautious about
   [thresholds](/docs/identitymanager/6.1/identitymanager/index.md).

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets for your hierarchy.

  ![Home - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory accessible from the home page.

  ![Home - Directory Department](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains many organizations, then it is also possible to list them with their
  managers through the
  [Query module](/docs/identitymanager/6.1/identitymanager/index.md).

- [Create reports](/docs/identitymanager/6.1/identitymanager/index.md)
  with indicators on the workers number per type or per organization for example (through Usercube'
  predefined reports, the Query module or Power BI), in order to ensure that Usercube's content
  sticks to reality.

# Update Multiple Identities

How to perform a same change in data for several identities simultaneously.

This part is not about changing the data model, but data itself.

## Overview

When a same change is needed by a high number of users, then Usercube provides a UI workflow to
perform this change for all selected identities simultaneously.

> For example, if a whole department in the company is moved to a new working site, then all users
> working in said department must have their `Site` attribute updated.

## Participants and Artifacts

Given users' data can be updated occasionally by their managers, but most often by the HR
department.

| Input                                                                                                             | Output                      |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) New identity data (required) | Updated identity repository |

## Update

Perform multiple updates by proceeding as follows:

1. Click on **Multiple Updates**, accessible from the directory on the home page.

   ![Home Page - Multiple Updates](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/multiple-update/home_multipleupdates_v523.webp)

2. Follow the workflow's instructions to perform the change, assign new entitlements if needed, and
   send the request.

   ![Multiple Updates Form](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/multiple-update/datamodif_multipleform_v602.webp)

   If the workflow has been configured in this way, the update request may require a review. In
   this case, sending the request triggers the display of said request on the **My Tasks** screen
   for the reviewer, while the state of the request is pending. In this case, the requested updates
   will be displayed in Usercube only after the request has been reviewed.

   ![Request - Review Pending](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets assigned to your hierarchy.

  ![Home - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory on the home page.

  ![Home - Directory Department](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains numerous organizations, it is also possible to list them with their
  managers through the
  [Query module](/docs/identitymanager/6.1/identitymanager/index.md).

- [Create reports](/docs/identitymanager/6.1/identitymanager/index.md)
  with indicators, for example, on the number of workers per type or per organization (through
  Usercube's predefined reports, the Query module or Power BI), to ensure that Usercube's content
  sticks to reality.

# Maintain

- #### [Update Identity Data](/docs/identitymanager/6.1/identitymanager/index.md)

  How to perform modifications in the identity repository, to manage onboarding, offboarding and
  position changes.

- #### [Update an Individual Identity](/docs/identitymanager/6.1/identitymanager/index.md)
  How to perform changes in data for a single identity, through the UI.- ####
  [Update Multiple Identities](/docs/identitymanager/6.1/identitymanager/index.md)
  How to perform a same change in data for several identities simultaneously, through the
  UI.- ####
  [Update Identities in Bulk](/docs/identitymanager/6.1/identitymanager/index.md)
  How to perform a mass change in identity data, by uploading a complete or incremental version of
  the identity repository.
- #### [Troubleshoot](/docs/identitymanager/6.1/identitymanager/index.md)
  How to troubleshoot Usercube when facing technical issues.

# Troubleshoot

How to troubleshoot Usercube when facing technical issues.

## Overview

Daily technical issues can lead to some unexpected results in Usercube. This page is meant to give
some clues and use cases in order to solve usual issues.

> For example, the issues described below can happen when there is a network cut, or an application
> IP address is being changed, or an important password is being modified.

[See troubleshooting instructions concerning connector jobs](/docs/identitymanager/6.1/identitymanager/troubleshooting-support/common-issues/connector-troubleshooting.md).

### Prerequisites

In order to troubleshoot Usercube efficiently, the user, usually an application administrator, must
have access to:

- the connector screens, especially the jobs available there;

  ![Connector Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_connectorjobs_v603.webp)

- the resource screens (identities, accounts, etc.) with their data, and especially their history
  and sources;

  ![User Data](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_userdata_v603.webp)

- basic workflows, for example the usual helpdesk workflow, that give access to users' entitlements
  and enable data modification and repair.

  ![Helpdesk Workflow](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_helpdesk_v603.webp)

## Participants and Artifacts

Here integrators give way to managers to handle the solution by themselves.

| Input                                                                               | Output              |
| ----------------------------------------------------------------------------------- | ------------------- |
| [Implemented system](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Working environment |

## Troubleshoot Synchronization Issues

### Errored export task

If the export task ends with an error, then you should:

- check the task's logs;
- check the export files' dates in the `Temp/ExportOutput` folder;
- if there was an external problem, then relaunch the export in complete mode.

### Missing data after incremental synchronization

If the data is incomplete after incremental synchronization, then you should relaunch
synchronization in complete mode.

NETWRIX recommends scheduling an incremental synchronization approximately every 15 minutes, and a
complete synchronization once a day.

### Exceeded thresholds

If a synchronization threshold is exceeded, then check whether the threshold is legitimate. If not,
it means that the warning comes from a change in the managed system, so you should fix the data
directly in the managed system.

[See more details on synchronization thresholds](/docs/identitymanager/6.1/identitymanager/index.md).

## Troubleshoot Provisioning Issues

### Blocked provisioning orders

If provisioning orders are blocked while expected to be automatic, it can come from:

- the **Require Provisioning Review** option being enabled in the related resource type;
- the role model being computed through the
  [`ComputeRoleModelTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
  or the corresponding executable, with the block provisioning option;
- a provisioning order being already blocked for the same resource due to a prior operation;
- a correlation/classification rule with a confidence rate below 100%, which means that either
  important data is missing or the rule is not right.

**Verify:** After debugging the blocked-order situation, the related blocked orders must be reviewed
on the **Provisioning Review** screen to be unblocked.

### Errored provisioning orders

> For example, consider a provisioning task supposed to delete 150 accounts, while the relevant
> service account does not have the relevant writing rights. Thus it ends up with 150 errored
> provisioning orders.

If provisioning orders end up with an error, then you should check the errors' details in
**Provisioning Review** to determine where the error comes from.

**Verify:** After debugging the errored-order situation, unblock one provisioning order and relaunch
provisioning to make sure the fix gives the expected result. Only then, unblock all related errored
orders and relaunch provisioning.

If the error comes from miscalculated properties, for example missing parent dn or duplicated
logins, then you should review scalar and/or query rules.

**Verify:** After debugging the situation, recompute the role model for only one user to make sure
the fix gives the expected result. Only then, recompute the role model for all users through the
**Compute Role Model** job of connector screens.

To recompute the role model for only one user, you can use the helpdesk workflow. It will give you
access to the user's entitlements via the workflow's **Access Permissions** step, where you can
check the changes without having to validate.

### Incorrect provisioned values

If provisioning orders produce incorrect values, then it can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

  **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
  the changes for only one user to make sure the fix gives the expected result. Only then,
  recompute the role model for all users through the **Compute Role Model** job of connector
  screens. See more details on how to use the helpdesk workflow for debug purposes.

> For example, if identity data has changed and HR data has not, then it must come from the rules.

### Exceeded thresholds

If a provisioning threshold is exceeded, then check whether the threshold is legitimate. If not, it
means that the warning can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

  **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
  the changes for only one user to make sure the fix gives the expected result. Only then,
  recompute the role model for all users through the **Compute Role Model** job of connector
  screens. See more details on how to use the helpdesk workflow for debug purposes.

## Troubleshoot Entitlement Issues

If users have unexpected entitlements, then you should click on an entitlement and/or access
**Workflow Overview** to see the entitlements' details, for example who requested them, etc.

# Automate Role Assignments

How to manually build rules to automate the assignment of
[roles](/docs/identitymanager/6.1/identitymanager/index.md)
to identities.

## Overview

Single role rules and composite role rules are assignment rules. Assignment rules are designed to
automatically assign respectively
[single roles](/docs/identitymanager/6.1/identitymanager/index.md)
and
[composite roles](/docs/identitymanager/6.1/identitymanager/index.md)
(based on specific criteria) to identities. One rule must be created for every role to assign.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                         | Output                |
| ----------------------------------------------------------------------------- | --------------------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Role assignment rules |

## Create a Role Assignment Rule

Create a role assignment rule by proceeding as follows:

1. Access the rules page by clicking on **Access Rules** on the home page in the **Configuration**
   section.

   ![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future scalar rule.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Composite Roles** or **Single Roles** tab and on the addition button at the top
   right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create an Assignment Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automate-role-assignment/assignmentrules_newsrolerule_v602.webp)

   - `Single Role`: single role to be automatically assigned in a single role rule.
     `Composite Role` for a composite role rule.
   - `Type`: assignment type that can be: `Suggested` so that the role is listed among suggested
     permissions in the permission basket of users matching the criteria during an entitlement
     request, suggested assignments must be selected manually to be requested; or `Automatic` so
     that the role is automatically assigned to users matching the criteria; or
     `Automatic but with validation` so that the role is listed in the permission basket of new
     workers, these assignments can still be modified.

     The rule's type can be `Suggested` only if the related role is allowed to be requested
     manually.

   - `Single role denied`: option that forbids the assignment instead of applying it.
   - **Criteria**: conditions that, if met, trigger the single role automatic assignment.

   Role assignment rules can be based on identity dimensions. Moreover, single role rules can be
   based on composite roles.

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a role assignment rule is taken into account when the next
[`ComputeRoleModelTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
runs to compute new assignments. Therefore, if a given rule's criterion is modified, then all
corresponding assignments are computed again. If a role was assigned automatically to an identity by
a role assignment rule, and if this assignment doesn't comply with the new version of the rule, then
the corresponding role is automatically removed.

A modification in a role assignment rule can trigger the removal of a role only on the Usercube
side. There are several barriers to cross before said role is removed from the managed system.

> For example, consider a single role rule that assigns the single role
> `Business role: electronic banking` to all users in the `Tours` department. Let's say that we
> replace `Tours` with `Orleans`. Then, after the next launch of the complete job, all users in the
> `Orleans` department get said role, while the users in the `Tours` department are deprived of said
> role.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in role
assignment rules.

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically.

NETWRIX recommends removing redundant assignments after any assignment rule is created or updated.

NETWRIX recommends
[removing redundant assignments](/docs/identitymanager/6.1/identitymanager/index.md)
after any assignment rule is created or updated.

## Verify Rule Creation

In order to verify the process, start by checking the rule's details on the **Access Rules** page.
Then, you can:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Create a role assignment rule for a role that said user doesn't already have, and based on
   criteria which the selected user satisfies.
3. Trigger the computation of the role model through the complete job on the **Job Execution** page
   in the **Administration** section.

   ![Home - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

4. See the new permission in the user's **View Permissions** tab.

   ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Automate Assignments

How to automate entitlement assignment.

## Overview

Once you are able to assign manually the right entitlements to the right identities for the right
reasons, you realize how tedious and error-prone entitlement assignment is, and you want to automate
it.

The strategy for the automation of entitlement assignment lies in the automatic making of assignment
decisions, based on several automation levels provided by Usercube:

1. Automation of the creation of the role model, i.e. both roles and navigation rules that represent
   entitlements in the managed systems, through
   [role naming rules](/docs/identitymanager/6.1/identitymanager/index.md)
   based on resources' naming conventions in the managed systems.
2. Automation of entitlement assignment through
   [assignment rules](/docs/identitymanager/6.1/identitymanager/index.md),
   which use identity criteria (called
   [dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions),
   like identities' department or work location, etc.) to decide what entitlements to assign
   automatically to identities.
3. Automation of the creation of said assignment rules through
   [Role Mining](/docs/identitymanager/6.1/identitymanager/index.md),
   based on existing data analysis.

![Automation Concept](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_schema.webp)

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically.

NETWRIX recommends removing redundant assignments after any assignment rule is created or updated.

NETWRIX recommends
[removing redundant assignments](/docs/identitymanager/6.1/identitymanager/index.md)
after any assignment rule is created or updated.

The main goal of automation is to reach the optimal cost, playing on assignment efficiency, quality
and quantity.

### Assessment of manual assignment

So far, Usercube's configuration has enabled users to use workflows to add and remove entitlements
to/from identities. These assignments can be
[fulfilled](/docs/identitymanager/6.1/identitymanager/index.md)
manually or automatically, but the decision-making process that defines who gets what entitlement is
still manual. Manual assignment poses the following risks:

- Delay can happen: on the day a worker joins an organization, they rely on a manual action to get
  all the entitlements required for them to start working. Even with
  [roles](/docs/identitymanager/6.1/identitymanager/index.md)
  aiming to help managers to understand actual entitlements, delay happens.
- Errors can happen: human mistakes are expected in role distribution, even though largely mitigated
  by the
  [role review process](/docs/identitymanager/6.1/identitymanager/index.md)
  and
  [certification campaigns](/docs/identitymanager/6.1/identitymanager/index.md).
- It is time-consuming.

The entitlement management cost mainly varies according to the number of managed entitlements.
Manual processing for entitlement requests implies a linear growth of the management cost according
to the number of managed entitlements.

![Optimal Cost Chart - Manual Assignments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_manual.webp)

### Automation benefits

There is a high potential gain coming with the automation of assignment decisions:

- Machine Learning masters the error rate, as it is used as a parameter for Role Mining, i.e.
  masters false positive assignments (entitlements assigned to a user while they ought not to) which
  constitute a security breach, and false negative assignments (entitlements not assigned to a user
  who needs it) which are functionnaly blocking;
- Machine Learning achieves lower error rates than people;
- Machine Learning can compute the role model way faster than a person. Consequently, the model can
  be computed more frequently and thus sticks closer to reality.

![Optimal Cost Chart - Automation Benefits](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_automationbenefits.webp)

Automation helps integrators find basic assignment rules and face the previous risks, thus reducing
cost.

### Automation precautions

Assignments do not have to be automated all at once.

On the one hand, before being automatically assigned, entitlements can be merely suggested by
Usercube and assigned manually.

On the other hand, a distinction can be made between assignments according to their sensitivity, for
example using different error rates, or using
[simulation](/docs/identitymanager/6.1/identitymanager/index.md), or
automating the assignment of basic entitlements while suggesting sensitive entitlements, etc.

This way, security can be improved for example by making certification target only the sensitive
entitlements that cannot be processed by Machine Learning. There is no need anymore to certify
automatic assignments.

Plus, you can also use attributes as additional precautions, such as a grace period during which,
after the application of a rule revoking a resource/entitlement, managers can decide for each user
individually whether they need to keep said entitlement.

In a way, maturity with Machine Learning in IGA is much like a GPS: once we traveled using only
paper maps, before the first navigation tools were commercialized. Then we learned how to use these
tools, while keeping a map to be able to verify the GPS instructions. We found secure methods to
navigate through all GPS evolutions, until we trusted GPS enough to guide us completely.

### Automation limits

However, automation implies an increasing number of rules. And a high number of rules implies a
certain complexity in rule model understanding, and consequently hiring expensive expert contractors
to write the right rules. It drives up costs considerably and draws you near the automation wall.

![Optimal Cost Chart - Automation Limits](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_automationlimits.webp)

The automation wall represents the automation threshold that cannot be overcome. It mostly comes
from the fact that with limited data, automation capabilities are also limited. Everything cannot be
automated.

### Automation strategy

The idea is to stop automation when the automatic cost curve increases faster than the manual cost
curve. The optimal profitability is represented on the chart and can be achieved via the optimal mix
of automatic and manual assignments.

![Optimal Cost Chart](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost.webp)

Automation strategy consists in using Machine Learning through Role Mining to get closer to the
automation wall. And, as Role Mining doesn't enable overcoming said wall, the goal is to move the
wall further away by improving data quality and quantity.

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                                                                         | Output                       |
| ----------------------------------------------------------------------------- | ---------------------------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Ideally automated role model |

## Automate Entitlement Assignment

The process of assignment automation is the following:

1. [Perform Role Mining](/docs/identitymanager/6.1/identitymanager/index.md)
   to approach the automation wall.

   Role Mining covers more use cases than writing assignment rules manually. It diminishes the
   error rate and implies a lower execution cost. And thus, it brings the optimal cost closer to
   the automation wall.

   ![Optimal Cost Chart - Role Mining](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_rolemining.webp)

   **Enlarge the number of managed entitlements by tolerating errors:**

   Automation reduces the error rate by avoiding human mistakes. Errors can still occur such as
   "[false positives](https://en.wikipedia.org/wiki/Binary_classification)", i.e. users receiving
   inappropriate entitlements, thus creating security issues. However, experience shows that a
   slight error tolerance in Role Mining can highly benefit automation.

   NETWRIX recommends trying Role Mining with **1%** tolerated false positives, and **99.5%**
   expected precision. Then adapt to your situation according to the reports.

   For example, suppose an organization working with many distinct departments. If you see that the
   automation rate skyrockets when the error rate reaches the number of workers in one department,
   then it probably means that Usercube misses data concerning one of the departments. Thus the
   error rate allows Usercube to "ignore" one of the departments in the organization, and optimize
   automation.

2. Generate and analyze
   [reports](/docs/identitymanager/6.1/identitymanager/index.md) with
   tools like
   [Power BI](/docs/identitymanager/6.1/identitymanager/index.md) to
   assess the automation wall and identify improvement areas.

   > For example in the following Power BI chart, automation is, on average, highly implemented
   > except for `SharePoint Projects`. This fact reveals a low level of awareness among the workers
   > about their respective projects. This is a typical area for improvement in data quality.
   >
   > ![Data Quality Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex.webp)

   > For example, if charts show a high number of identities in the category `No Position`,
   > integrators understand that the data model must be completed for role mining to be efficient.
   >
   > ![Data Quantity Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex2.webp)

   > For example, if charts show a high number of unused roles, integrators understand that the
   > role model needs further improvement because roles are not adequate.
   >
   > ![Data Quality Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex3.webp)

   > For example, if charts show low automation rate per department, integrators will understand
   > that many identities may have switched departments while keeping their previous entitlements.
   >
   > ![Data Quality Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex4.webp)

3. Improve data quality and quantity to move the automation wall.

   Whether automatic or manual, assignment decisions are based on existing data analysis. Data
   quantity and quality therefore define the position of the wall.

   Improvement in existing data quantity and quality entails the possibility of managing a higher
   number of entitlements.

   ![Optimal Cost Chart - Improved Data](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_data.webp)

   A high quantity of data simplifies data analysis and inferences in assignment rules.

   A high quality of data also simplifies data analysis and enables better accuracy in assignment
   rules.

   > For example, contractors' data is often less familiar to HR departments. Efforts can be made
   > in this direction to enhance automation.

   Moreover, focus must be directed on actual and correct entitlements, using Usercube's
   [access certification](/docs/identitymanager/6.1/identitymanager/index.md).

   Data reliability prevents integrators from easy extrapolation mistakes.

   > For example, consider the NETWRIX team in Marseilles mostly composed of R&D workers. If
   > integrators miss information, they might inadvertently create a rule giving `R&D` group
   > membership to all workers in Marseilles, while there are also workers from other departments.

4. Repeat.

# Remove Redundant Assignments

How to remove redundant assignments, i.e.
[manual](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md)
assignments of roles and resource types that are assigned by a rule too.

## Overview

[Assignment rules](/docs/identitymanager/6.1/identitymanager/index.md)
can sometimes give to users an entitlement that they had already received manually. Hence, new
assignment rules can imply redundancies between the entitlements assigned manually and approved, and
those calculated by a rule and assigned automatically.

NETWRIX recommends removing redundant assignments after any assignment rule is created or updated.

This guide is about switching the manual assignments, which are allowed by the role model, into
calculated automatic entitlements handled by the role model. Once automatic, an entitlement is fully
part of the role model and stops constituting an exception.

### Assignment validity period

All entitlements are assigned on a given validity period, i.e. from a given start date to a given
end date:

- When assigning an entitlement to a user manually, the start and end dates are specified
  explicitly.
- When assigning entitlements to users via assignment rules, the start and end dates are based on
  the owner's data, for example their contract or position start/end dates. These assignments are
  automatic.

NETWRIX recommends always preferring calculated assignments over manual ones, because calculated
assignments follow the changes in their owners' data and are consequently more secure.

For example, consider a user Jean who starts working as an architect with a given role.  
When assigning the role manually, when Jean changes her job, her manager will have to remove the
role manually. When assigning the role via a rule, when Jean changes a job, the role will be removed
automatically.

### Process

This process is an optimization of the role model. It is part of the "compute role model" process
where all rules of the role model are applied.

The classic behavior gives priority to approved manual entitlements over calculated automatic ones.
A manual assignment stays as is, even if the entitlement is also assigned by a rule.

> For example, consider a user who has a given entitlement which was assigned to them manually on
> several distinct time periods. When creating a rule that assigns the same entitlement to them
> automatically on a given time period, then we have:
>
> ![Schema - Compute Role Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_examplewithout.webp)

The redundant assignment analysis gives priority to the rules inside the role model and the policy.
When an entitlement is assigned via a rule, it is stated as calculated, even if it is also assigned
manually. Thus, manual assignments whose start and end dates overlap with the validity period are to
be truncated or deleted.

> For example, consider the same situation as before. Using the redundant assignments analysis, then
> we have:
>
> ![Schema - Redundant Assignment Analysis](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_examplewith.webp)

Redundant assignments can be removed by Usercube only when the corresponding assigned items are
tagged as redundant and displayed in the most recent report. The manual assigned items that are not
tagged are still kept as discretionary entitlements and will not be removed.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                             | Output                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role assignment rules](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role mining](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Minimized derogations |

## Remove Redundant Assignments

Remove redundant assignments by proceeding as follows:

1. Click on **Redundant Assignments** on the home page in the **Administration** section.

   ![Home Page - Redundant Assignments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/home_redundantassignments_v602.webp)

2. Click on **Analyze** to tag the manual roles and resource types from all policies eligible for
   conversion to an automatic state.

   ![Redundant Assignments - Buttons](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_buttons_v602.webp)

   Previous tags are cleared at each instance of this tagging process.

3. Click on **Download Excel** to download a dedicated XLSX report which contains one tab per entity
   type representing identities.

   > The following example states that in the entity type `Directory_User`, the user Nicholas
   > Acosta had the single role `Banking/Sales/Eunomia/Administrator` starting from February 28th
   > 2023 (dateA) until May 16th (dateD). A new single role rule assigns him this role from April
   > 14th (dateB) until 25th 2023 (dateC).
   >
   > ![Redundant Assignments - Report Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_reportexample_v602.webp)
   >
   > It means that Nicholas Acosta will have the role in the calculated state from dateB to dateC,
   > and he will keep the role in the approved state from dateA to dateB and from dateC to dateD.

4. If the report's content is satisfying, then click on **Apply** to actually switch eligible manual
   roles to calculated.

## Verify Redundant Assignment Removal

In order to verify the process:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. For one of the users mentioned in the report, access their permissions.

   ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

3. Check that their roles (mentioned in the report) have actually switched from approved to
   calculated.

   > When removing redundant assignments based on the previous report example, we can see:
   >
   > ![Redundant Assignments - Result](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_reportexampleverif_v602.webp)

# Perform Role Mining

How to use role mining to suggest role assignment rules based on existing assignments, in order to
push the
[automation wall](/docs/identitymanager/6.1/identitymanager/index.md)
further.

## Overview

After the role catalog is established, the
[Compute-RoleModel](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
task is able to assign single roles to users according to their attributes which are used as
assignment criteria.

> For example, in the AD, entitlements are given through group membership. Integrators create a
> navigation rule to assign each group to the users who have the corresponding single role. Then,
> the Compute-RoleModel task is able to assign single roles to users according to their existing
> group membership.
>
> In addition to group membership, the assignment of an entitlement to users could also depend on
> users' attributes like their location, position title, etc.

Now that users received their roles, the role mining tool can analyze these assignments and deduce
[single role rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
which will assign single roles to certain users matching given criteria.

![Schema - Role Mining](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_schema.webp)

Role mining is a Machine Learning process. It is a statistic tool used to emphasize the
[dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions)
that constitute the key criteria for existing role assignments. It detects the most probable links
between identities dimensions and their roles in order to suggest the appropriate entitlement
assignment rules.

> For example, suppose that 80% of NETWRIX workers in Marseilles have access to an application
> "App". Then, role mining is most likely to recognize the working site as a relevant dimension, and
> suggest to create a rule that gives the "App" access to users whose site is Marseilles.

Role mining being a statistic tool based on existing entitlement assignments, it appears useless if
the role model contains fewer than 2,000 role assignments. Then, start by reinforcing the
[role catalog](/docs/identitymanager/6.1/identitymanager/index.md).

### Technical Principles

Role mining works through
[mining rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that Usercube applies with the
[`GetRoleMiningTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md).

### Entitlement differentiation with rule types

Mining rules can be configured to generate:

1. automatic rules, i.e. rules which assign roles automatically with or without a validation;
2. suggested rules, i.e. rules which don't assign roles directly, but suggest them during an
   entitlement request for a user.

   ![Suggested](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_suggested_v602.webp)

You can generate both automatic and suggested rules for the same role, with different precision
levels and different approval workflows.

> Consider an organization where an unknown ratio of users have a given role. Using the precision
> settings, we can create a mining rule to generate automatic assignment rules when the ratio is
> above 95% and a second mining rule to generate suggested assignment rules when the ratio is
> between 75% and 95%.
>
> ![Rule Types](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype.webp)

You can also differentiate entitlements according to their sensitivity, for example require
additional reviews following the request of a sensitive entitlement:

![Rule Types - Sensitivity](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype-sensitivity.webp)

The automation of entitlement assignments according to sensitivity brings greater confidence in
basic entitlements assignment which won't need to be certified anymore. Thus, automation lets
certification campaigns focus on more sensitive entitlements.

Role mining should be performed first for automatic rules as they are stricter precision-wise. Thus,
automatic rules should always have priority over suggested rules (via the `Priority` setting).

[See more details about role mining](/docs/identitymanager/6.1/identitymanager/governance/role-mining.md).

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                                                                         | Output            |
| ----------------------------------------------------------------------------- | ----------------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Single role rules |

## Create a Mining Rule

Create a mining rule by proceeding as follows:

1. On the home page in the **Configuration** section, click on the **Role Mining** button.

   ![Home page - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/home_rolemining_v60.webp)

   You will see all existing mining rules.

2. Click on the addition button at the top right and fill in the fields.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Mining Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_miningrule_v602.webp)

   - `Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     in which the mining rule exists.
   - `Entity Type`:
     [entity type](/docs/identitymanager/6.1/identitymanager/index.md)
     on which the mining rule is applied, i.e. the entity type targeted by role mining's
     entitlement analysis.
   - `Category`:
     [category](/docs/identitymanager/6.1/identitymanager/index.md)
     containing the roles targeted by role mining's analysis.
   - `Include roles with specific validations`: includes in role mining's analysis the roles
     requiring zero and/or one and/or two and/or three validations.
   - `Exclude Role from Mining`: ignores the specified roles during the mining process triggered by
     the next mining rules (in terms of priority).
   - `Rule Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     in which the single role rules will be generated.

     NETWRIX recommends using a policy dedicated to role mining in order not to remove existing
     assignment rules.

   - `Rule Type`: type of the generated single role rules, which defines the type of role
     assignment that can be: `Suggested` so that the resource type is listed among suggested
     permissions in the permission basket of users matching the criteria during an entitlement
     request, suggested assignments must be selected manually to be requested; or `Automatic` so
     that the resource type is automatically assigned to users matching the criteria; or
     `Automatic but with validation` so that the resource type is listed in the permission basket
     of new workers, these assignments can still be modified.
   - `Priority`: priority order of the mining rule. Usercube applies mining rules one after the
     other in descending order.
   - `Minimum Precision`: minimum authorized percentage of correct role assignments, considering
     both the roles that are assigned to users who should have them, and the roles that are not
     assigned to users who should not have them.

     NETWRIX recommends around 99.5%, to be lowered when working on a sensitive application
     and/or a large user population, and vice versa.

   - `Maximum Allowed False Positives`: maximum authorized percentage of false positive
     assignments, i.e. roles that are assigned to users who should not have them.

     NETWRIX recommends around 1%, to be lowered when working on a sensitive application and/or a
     large user population, and vice versa.

   **Enlarge the number of managed entitlements by tolerating errors:**

   Automation reduces the error rate by avoiding human mistakes. Errors can still occur such as
   "[false positives](https://en.wikipedia.org/wiki/Binary_classification)", i.e. users receiving
   inappropriate entitlements, and thus creating security issues. However, experience shows that a
   slight error tolerance in role mining can highly benefit automation.

3. Click on **Create** and see a line added on the rules page.
4. Click on **Simulate** to perfom role mining in a
   [simulation](/docs/identitymanager/6.1/identitymanager/index.md).

   ![Role Mining Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/assignment-automation/role-mining/rolemining_launchjob_v602.webp)

   If you need to bypass the simulation process, clicking on **Launch** will perform role mining
   and apply its results directly. NETWRIX recommends always performing role mining in simulation.

## Impact of Modifications

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically.

NETWRIX recommends removing redundant assignments after any assignment rule is created or updated.

NETWRIX recommends
[removing redundant assignments](/docs/identitymanager/6.1/identitymanager/index.md)
after any assignment rule is created or updated.

## Verify Role Mining

In order to verify the process, access the rule list from the home page.

![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select **Single Roles** and check that the single role rules are created with the right parameters.

# Create a Composite Role

How to define
[composite roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
in order to create sets of
[single roles](/docs/identitymanager/6.1/identitymanager/index.md)
easy to assign.

## Overview

A
[composite role](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is a set of single roles that are usually assigned together, because they revolve around the same
application, or the same job, etc. Composite roles are aggregates of single roles, they can help
organize the role catalog.

![Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_applicativeroles.webp)

A composite role is a business role comprehensible by managers. It provides an additional layer of
abstraction above existing entitlements and single roles. We can say that if a single role allows a
user to perform a task, a composite role allows them to perform a job.

### Composite roles and Role Mining

Composite roles can also be created based on the rules provided by
[Role Mining](/docs/identitymanager/6.1/identitymanager/index.md).
Rules link roles to dimensions.

The following example shows single roles from `A` to `F`. Role Mining suggested the rules on the
schema, linking these single roles to the organizations `R&D` and `Project` as well as to the
functions `developer`, `writer`, `contractor` and `project manager`. The idea is to use these rules
to create composite roles. Here, we clearly have one role for `R&D-developer`, one for `R&D-writer`,
`Project-contractor` and `Project-project manager`. Thus, it is clear here that composite roles add
an abstraction layer.

![Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_schema.webp)

[Single role rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
link composite roles to
[single roles](/docs/identitymanager/6.1/identitymanager/index.md):
a single role rule states that specific single roles are assigned according to specific criteria,
particularly composite roles. Thus, a composite role assignment can imply specific single role
assignments.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                         | Output          |
| ----------------------------------------------------------------------------- | --------------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Composite roles |

## Create a Composite Role

Create a composite role by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Roles** to access the roles
   page.

   ![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. On the roles page, click on the adequate category and create a role by clicking on **+ New** at
   the top right corner.
3. Fill in the fields.

   ![Create a Composite Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_newcrole_v602.webp)

   - `Identifier`: must be unique among roles and without any whitespace.
   - `Name`: will be displayed in the UI to identify the single role.
   - `Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     in which the role exists.
   - `Entity Type`: entity type targetted by the role.
   - `Category`: category assigned to the role.
   - `Secondary Categories`: other potential categories assigned to the role.
   - `Approval Workflow`: represents the number of validations required to assign the role.
   - `Approve Role Implicitly`: needs at least a simple approval workflow. `Implicit` mode bypasses
     the approval step(s) if the person who issues the role request is also the
     [role officer](/docs/identitymanager/6.1/identitymanager/index.md).
     `Explicit` refuses said bypass. `Inherited` follows the
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     decision to approve roles implicitly or not.
   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Comment Management on Permission Review`: to change if different from the role policy.
   - `Maximum Duration`: duration (in minutes) after which the role will be automatically revoked,
     if no earlier end date is specified. It impacts only the roles which are manually assigned
     after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set
     on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is
     set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it.

4. Click on **Create** and see a line added on the roles page.
5. Create at least one
   [single role rule](/docs/identitymanager/6.1/identitymanager/index.md)
   with the composite role as a criterion.

## Impact of Modifications

When deleting a composite role, caution must be used when deleting the corresponding single role
rules. Indeed, these rules thus lose their criteria and may be applied to far too many people after
that.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in roles
and single role rules.

## Verify Composite Role Creation

In order to verify the process, check that the role and rule are created with the right parameters.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select composite roles and find the role you created inside the right category and with the right
parameters.

![Access Composite Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_testroles_v602.webp)

For rules, follow the instructions about
[assignment rules](/docs/identitymanager/6.1/identitymanager/index.md).

# Create an HR Connector

How to create a
[connector](/docs/identitymanager/6.1/identitymanager/index.md)
dedicated to the automation of identity management (creation, update, deletion), via the
[synchronization](/docs/identitymanager/6.1/identitymanager/index.md)
of HR data into Usercube and internal
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

## Overview

### HR connector in the global process

The HR connector is no priority but rather an optimization, handled at the end of the configuration
cycle.

The HR connector is sometimes the first created connector, used to develop the identity repository.

However, the HR connector requires a specific IT infrastructure (agent, proxy, Virtual Machine,
etc.) which can take time to implement, and delay the project's progress.

Moreover, in the long run it poses a few problems as HR data usually misses crucial information such
as contractor data, or the projects employees are working on. This can mean that:

- the identity repository is filled using several sources. And when creating identities
  automatically from HR data and other sources, you need to specify which properties of each
  identity can be overwritten by a change in HR and which cannot. This is to avoid manually changed
  attributes being overwritten by the HR data by mistake. This is very tedious.
- the HR data is rarely up to date early enough to be really useful as a trigger for identity
  creation and deletion. As a result, identities end up being created manually through workflows
  most of the time.

Hence we choose to build the first iteration of the project upon a manual data upload to
[create the initial identity repository](/docs/identitymanager/6.1/identitymanager/index.md).

This way, we do not have to wait for the agent's implementation to create the first profiles and
start connecting systems (AD, SAB, SAP, etc.). Thus value is created faster and we can focus on IGA
activities such as the review of orphaned and unused accounts, eliminating risk earlier in the
process.

We can still connect HR data, later on, to check consistency between our identity repository and HR
data, through a certification-like process.

### Technical details

An HR connector is considered an inbound connector, as it writes to the central identity repository
inside Usercube.

![Inbound System=](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/connectorcreation_inbound.webp)

As Usercube is able to feed all managed systems, it can also feed itself thanks to specific
connections such as the
[InternalWorkflow](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
connection. It means that the corresponding connector is able to launch workflows within Usercube
and keep track.

Typically, an HR connector with such a connection would be able to launch workflows inside Usercube
for identity creation, update and deletion, based on HR files.

## Participants and Artifacts

This operation should be performed in cooperation with HR staff who can access HR data.

| Input                                                                                | Output       |
| ------------------------------------------------------------------------------------ | ------------ |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) | HR connector |

## Create an HR Connector

Create an HR connector by proceeding as follows:

1. Outside Usercube,
   [model your connector](/docs/identitymanager/6.1/identitymanager/index.md).
2. [Declare an HR connector](/docs/identitymanager/6.1/identitymanager/index.md)
   using your local agent.

   ![HR Connector Declaration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/hr_connectordeclaration_v602.webp)

3. [Create an Export CSV connection](/docs/identitymanager/6.1/identitymanager/index.md)
   for each HR file to connect.

   ![HR Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/hr_connection_v602.webp)

4. [Create the entity types](/docs/identitymanager/6.1/identitymanager/index.md)
   corresponding to your model. For example:

   ![HR Entity Type - Scalar Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/hr_entitytypes_v602.webp)

   ![HR Entity Type - Navigation Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/hr_entitytypen_v602.webp)

5. Don't forget to
   [reload](/docs/identitymanager/6.1/identitymanager/index.md)
   and
   [synchronize](/docs/identitymanager/6.1/identitymanager/index.md)
   to access HR data within Usercube.

   ![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

   ![Synchronize Job](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs_v602.webp)

## Verify HR Connector Creation

In order to verify the process:

1. Launch synchronization.
2. Access the connector's logs (from **Job Results** on the connector's dashboard) to ensure that
   synchronization completed successfully.

   ![Jobs Results](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_results_v603.webp)

3. Check that the entity types have been added to the left menu of the home page.

   ![Test Entity Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/hr-connector-creation/hr_validatemenu_v600.webp)

4. Access the relevant entity types (from the menu items on the left of the home page) to check
   synchronized resources, by navigating in the UI from the accounts through a sample of
   associations, via the Eye icon:

   ![Eye Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

   You should seek configuration validation, not validation of the actual data being synchronized.

# Modify the Identity Data Model

How to make data model properties evolve according to the organization's needs.

## Overview

The identity data model must contain all the information needed to manage identities and their
permissions, and only the information strictly required for this purpose.

You already considered the data needed for identity management during:

- the
  [initial identities loading](/docs/identitymanager/6.1/identitymanager/index.md)
  and the creation of the identity repository;
- [connector modeling](/docs/identitymanager/6.1/identitymanager/index.md)
  which is the analysis phase before connector creation;
- [entity type creation](/docs/identitymanager/6.1/identitymanager/index.md)
  which is the technical implementation of the connector model.

The data model established during these steps might change to evolve alongside the needs of the
connected systems, the management strategy, and any change in the organization such as a change of
structure, a new division, etc.

This part is about integrating these changes in the existing data model.

### Dimensions

Usercube calls
[dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions)
the attributes that assignment rules rely on. They are essential criteria that differentiate users
in order to give them the appropriate roles.

### Personal data security

Only professional data should be used in the identity data model, not personal data.

## Participants and Artifacts

Integrators are able to perform an identity update if they master the new data model.

| Input                                                                                                                          | Output                      |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| [Initial identities loading](/docs/identitymanager/6.1/identitymanager/index.md) (required) New identity data model (required) | Updated identity data model |

## Add or Modify Properties

The data model can be updated in the UI via a feature scanning the data model. This scan performs an
analysis on the data previously imported through the Excel file. It detects properties which are
always empty and suggests to remove them from the data model, for clarity purposes.

> For example, some systems don't store phone numbers. Then, scanning the data model will allow
> Usercube to suggest removing the property about phone numbers. Note that Usercube only provides
> suggestions but makes no decision. You could choose to keep the phone number property anyway in
> order to fill it later.

NETWRIX recommends updating the data model through the scan feature, as this feature is driven by
Usercube's suggestions.

However, the identity data model can also be updated through the directory's entity types, following
the previously given
[instructions for entity type creation](/docs/identitymanager/6.1/identitymanager/index.md).

### Through a data model scan

Add or modify properties within the identity data model by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. Access the data model on the **Workforce** > **Data Model** page.
3. Change the display option to show or hide properties in the identity repository.

   ![Scan Data Model - Display Option](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/identity-datamodel-modification/datamodelmodif_scan_v600.webp)

4. After your changes are complete, click on the Save icon at the top.

   ![Save Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

5. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Delete Properties

Integrators should keep in mind that the fields that they want to delete might be used in connectors
or other places they didn't think about. Existing assignments might be impacted.

Usercube suggests the removal only of empty fields. In this case, there is nothing to worry about.

## Verify Data Model Modification

In order to verify the process:

- Check manually a sample in the user directory accessible from the home page. You should verify at
  least your own sheet and the sheets assigned to your hierarchy.

  ![Home - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the department
  directory accessible from the home page.

  ![Home - Directory Department](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains numerous organizations, it is also possible to list them with their
  managers through the
  [Query module](/docs/identitymanager/6.1/identitymanager/index.md).

- [Create reports](/docs/identitymanager/6.1/identitymanager/index.md)
  with indicators, for example, on the number of workers per type or per organization (through
  Usercube's predefined reports, the Query module or Power BI), to ensure that Usercube's content
  sticks to reality.

# Optimize

- #### [Modify the Identity Data Model](/docs/identitymanager/6.1/identitymanager/index.md)

  How to make data model properties evolve according to the organization's needs.

- #### [Create an HR Connector](/docs/identitymanager/6.1/identitymanager/index.md)

  How to create a connector dedicated to the automation of identity management (creation, update,
  deletion), via the synchronization of HR data into Usercube and internal provisioning.

- #### [Manage Risks](/docs/identitymanager/6.1/identitymanager/index.md)

  How to use the risk management module to identify entitlement assignments that pose a security
  risk, especially about segregation of duties and high privileges.

- #### [Create a Policy](/docs/identitymanager/6.1/identitymanager/index.md)

  How to define policies to organize roles and rules.

- #### [Automate the Review of Non-conforming Assignments](/docs/identitymanager/6.1/identitymanager/index.md)

  How to automate the review of non-conforming assignments through automation rules.

- #### [Automate Assignments](/docs/identitymanager/6.1/identitymanager/index.md)

  How to automate entitlement assignment.

- #### [Automate Role Assignments](/docs/identitymanager/6.1/identitymanager/index.md)
  How to manually build rules to automate the assignment of roles to identities.- ####
  [Perform Role Mining](/docs/identitymanager/6.1/identitymanager/index.md)
  How to use role mining to suggest role assignment rules based on existing assignments, in order
  to push the automation wall further.- ####
  [Remove Redundant Assignments](/docs/identitymanager/6.1/identitymanager/index.md)
  How to remove redundant assignments, i.e. manual assignments of roles and resource types that
  are assigned by a rule too.
- #### [Create a Composite Role](/docs/identitymanager/6.1/identitymanager/index.md)

  How to define composite roles in order to create sets of single roles easy to assign.

- #### [Configure a Parameterized Role](/docs/identitymanager/6.1/identitymanager/index.md)

  How to reduce the number of roles in the model by configuring roles with parameters.

- #### [Perform a Simulation](/docs/identitymanager/6.1/identitymanager/index.md)
  How to assess the impact of a modification on the role model, including the role catalog, role
  assignment rules and resource correlation rules, using a dedicated policy.

# Automate the Review of Non-conforming Assignments

How to automate the review of non-conforming assignments through automation rules. See the
[ Review Non-conforming Assignments ](/docs/identitymanager/6.1/identitymanager/index.md)
and
[Automation Rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
topics for additional information.

## Overview

Non-conforming assignments can't be reviewed entirely automatically because this type of review
sometimes needs the intervention of a knowledgeable user. However, automation rules can help by
making automatic decisions (in place of the reviewer) on assignments that need to be reviewed after
a given waiting period.

This type of rule is useful for example, when integrators intend to:

- Decline all non-conforming assignments after X days to avoid accumulation. The waiting time can be
  null if they need to delete non-conforming assignments as soon as they are detected;
- Automatically approve or decline discretionary requests if there is no validation after X days;
- Send notifications to validators before declining or approving pending approval assignments;
- Get information in order to deactivate an AD account if it hasn't been used in the past X days,
  before deleting it.

Integrators must show caution with pending approval assignments because this type of rule could
short-circuit the whole approval process.

## Participants and Artifacts

This operation should be performed in cooperation with managers who know the organization and their
team's entitlements.

| Input                                                                                | Output                      |
| ------------------------------------------------------------------------------------ | --------------------------- |
| Mastered non-conforming assignment review (required) Categorized accounts (optional) | Automated assignment review |

See the
[ Review Non-conforming Assignments ](/docs/identitymanager/6.1/identitymanager/index.md)
and
[ Categorize Resources ](/docs/identitymanager/6.1/identitymanager/index.md)
topics for additional information.

## Create an Automation Rule

Create an automation rule by proceeding as follows:

![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 1 –** On the home page in the **Configuration** section, click on **Access Rules**.

![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 2 –** In the dropdown menu at the top left, choose the entity type to which the future rule
will be applied.

![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

**Step 3 –** Click on the **Automations** tab and on the addition button at the top right corner.

![New Automation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_newrulefields_v602.webp)

**Step 4 –** Fill in the fields.

- Decision — Action to be taken on the described assignments.
- Criteria — Conditions that, if met, trigger the rule.  
  Currently, the criteria are used to match the context of an assignment and not the user data.  
  For example, if a single role is assigned based on a specific Department, then the context of the
  assignment has the information about the Department. In that case, an automation rule having in
  its dimensions that given Department will match this assignment and could Deny/Accept it.
- However, if a single role is assigned without any context on the Department (for example, a manual
  assignment with no parameter on the role), the automation rule will never match this assignment.
- **NOTE:** No context will never be present for non-conforming or pre-existing roles
- Type — Assignment type concerned by the new rule. Once filled, a new field is displayed to select
  precisely an object from the existing objects belonging to this type.
- Workflow State — Workflow state of the assignments that need a decision.
- Waiting Period — Time period since the last change in the assignments' workflow states.

_Remember,_ in a nutshell, this rule applies Decision to all assignments of Type (and matching all
criteria), whose workflow state has been set to Workflow State for more than Waiting Period.

## Impact of Modifications

A modification in an automation rule doesn't impact the assignments affected by the previous version
of the rule.

## Verify Review Automation

In order to verify the process:

**Step 1 –** On the **Role Review** or **Role Reconciliation** screen, spot an entitlement
assignment.

**Step 2 –** Create an automation rule matching said assignment.

![Home Page - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

**Step 3 –** Compute the role model through the complete job on the **Job Execution** page.

**Step 4 –** Check on the **Role Review** page that the assignment's workflow state changed
according to the rule's settings.

![New Automation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_rulemessage_v522.webp)

Any role affected by an automation rule shows a specific message on the **Role Review** page.

# Configure a Parameterized Role

How to reduce the number of roles in the model by configuring roles with parameters.

## Overview

The assignment of a role to a user gives them an entitlement, usually a group membership, thanks to
a navigation rule.
[See more details on roles and navigation rules](/docs/identitymanager/6.1/identitymanager/index.md).

![Simple Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_simplerole.webp)

To enable the assignment of all existing entitlements, the role model usually contains numerous
roles.

> For example, the SAP role can be given with slight differences according to the users'
> subsidiaries:
>
> ![Role Matrix](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_numerousroles.webp)

In order to reduce the number of roles, we can configure roles with parameters by inserting a
criterion in the navigation rules. Thus, instead of having as many roles as entitlements (left on
the schema), we can have way fewer roles (right on the schema).

![With/Without Parameters](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameters.webp)

> In the previous example, with a parameter on the subsidiary, the number of roles would be divided
> by three.

By extension, a composite role that assigns a parameterized single role is parameterized too.

This way, when assigning a parameterized role, a popup window is displayed where the parameter must
be specified.

The same thing goes with type rules instead of navigation rules when we want to assign resource
types instead of entitlements.

## Configure a Parameterized Role

Configure a parameterized role by proceeding as follows:

1. Create in XML a
   [dimension](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
   corresponding to the parameter that will affect the role.

   > For example, let's consider that we have many roles available on three different time slots: 8
   > hours a day, 12 hours a day, or 24 hours a day. We create a dimension for these time slots.
   >
   > ```
   >
   > <Dimension Identifier="TimeSlot" DisplayName_L1="Time Slot" EntityType="Access_TimeSlot" ColumnMapping="10" IsExcludedFromRoleMining="true" />
   >
   > ```

2. In the UI,
   [create a single role](/docs/identitymanager/6.1/identitymanager/index.md#create-a-single-role).

   > For example:
   >
   > ![Example - Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerole_v603.webp)

3. [Create one navigation rule](/docs/identitymanager/6.1/identitymanager/index.md)
   linked to the role for each available value of the parameter.

   > Here we have three navigation rules, one for each distinct time slot (dimension A). For
   > example:
   >
   > ![Example - Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerule_v603.webp)

   Make sure that the corresponding dimension is specified in the right `DisplayEntityType` in XML
   to be displayed in the UI.

4. Go back to the roles page to edit the single role from step 2, if needing to set the parameter
   required.

   > For example:
   >
   > ![Example - Role Parameter Required](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_exampleroleparameter_v603.webp)

5. If you want Usercube to provide suggestions to set the parameter's value, then make sure that
   users'
   [context rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
   specifies the dimension.

   > For example, with the `Title` dimension:
   >
   > ```
   >
   > <ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" B0="Directory_UserRecord:Organization" B1="Directory_UserRecord:Title" B2="Directory_UserRecord:Site" B3="Directory_UserRecord:Site.Region.Country" B4="Directory_UserRecord:UserType.Category" ... Policy="Default" SourceEntityType="Directory_User" />
   >
   > ```

## Verify the Parameterized Role

In order to verify the process,
[request manually](/docs/identitymanager/6.1/identitymanager/index.md)
the parameterized role for a test user. Some additional pop-ups are displayed to set a value for the
role's parameter.

> In our example:
>
> ![Example - Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep1_v603.webp)
>
> ![Example - Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep2_v603.webp)

If the dimension is specified in the users' context rule, then Usercube will provide suggestions.

> For example, concerning the `Title` dimension mentioned above:
>
> ![Example - Suggestion](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerolesuggestion_v603.webp)

# Create a Policy

How to define
[policies](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to organize roles and rules.

## Overview

A
[policy](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is a subgroup of the role model. It defines an ensemble of
[roles](/docs/identitymanager/6.1/identitymanager/index.md)
and
[assignment rules](/docs/identitymanager/6.1/identitymanager/index.md)
that apply to specific identities. So policies are used to handle separately several sets of
identities, based on
[dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions)
with different permissions and workflows.

Integrators must minimize the number of policies because it segments identities, and segmentation
implies high maintenance. NETWRIX recommends using one policy per population. A population is a
group of people that can be managed following the same rules, role model, workflows, etc. This
means, for example, one policy for workers (meaning employees and contractors), another one for
partners, another one for clients. But sometimes partners are included in the same policy as
workers, it depends on the organization.

Usercube provides a default policy. Only when the project is mature enough should integrators think
about creating additional policies.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards identity management.

| Input                                                                          | Output |
| ------------------------------------------------------------------------------ | ------ |
| [Resource type](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Policy |

## Create a Policy

Create a policy by proceeding as follows:

1. Access the policies screen by clicking on **Access Policies** on the home page in the
   **Configuration** section.

![Home - Access Policies](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/policy-creation/home_accesspolicies_v602.webp)

2. Click on **+ New policy** at the top right corner.

![New Policy](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/policy-creation/policycreation_policies_v602.webp)

3. Fill in the information fields.

   ![New Policy Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/policy-creation/policycreation_newpolicy_v602.webp)

   - `Identifier`: must be unique among policies and without any whitespace.
   - `Name`: will be displayed in the UI to identify the resource type.
   - `Provisioning`: allows
     [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
     for the policy.
   - `Simulation`: allows
     [simulation](/docs/identitymanager/6.1/identitymanager/index.md)
     creation for the policy.
   - `Approve Roles Implicitly`: can be enabled to bypass approval steps if the person who issues a
     given role request is also the
     [role officer](/docs/identitymanager/6.1/identitymanager/index.md).
   - `Roles can be prolonged without a new approval workflow`: enables the policy's roles and
     resource types to have their assignment's end dates postponed without any validation.
   - `Is Managed by External Source`: can be enabled only during policy creation to indicate that
     its permissions are managed by another IGA tool and are to be ignored by Usercube's role model
     computation.
   - `Maximum Duration`: duration (in minutes) after which the policy's roles and resource types
     will be automatically revoked, if no earlier end date is specified. It impacts only the roles
     and resource types which are manually assigned after the maximum duration is set. Pre-assigned
     items are not impacted.
   - `Grace Period`: duration (in minutes) for which a lost automatic role or resource type is
     prolonged. A review will be required to validate or decline the entitlement prolongation.
     Inferred entitlements won't be lost unless the end of the grace period is reached or the
     prolongation is declined.
   - **Dimensions**: criteria that, if met, trigger the membership of given identities to the
     policy.

   What we call _another IGA tool_ can be another application or even another version of Usercube.

4. Click on **Create**.

## Verify Policy Creation

In order to verify the process, check that the policy has been added with the right options to the
list on the **Access Policies** page.

# Manage Risks

How to use the
[risk management](/docs/identitymanager/6.1/identitymanager/governance/risks.md)
module to identify entitlement assignments that pose a security risk, especially about segregation
of duties and high privileges.

## Overview

A
[risk](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
describes a sensitive situation in which entitlement assignments need to be monitored for security
purposes. Examples include:

- Segregation of duties: a situation where at least two entitlements pose a risk when assigned to
  the same identity.
- High privilege: a particularly sensitive entitlement.

[Risk management](/docs/identitymanager/6.1/identitymanager/governance/risks.md)
is essential to auditing. Among other things, it allows auditors to:

- Identify the identities representing the highest security risk.
- Compute the corresponding
  [risk score](/docs/identitymanager/6.1/identitymanager/governance/risks.md#risk-score).
- Schedule
  [access certification campaigns](/docs/identitymanager/6.1/identitymanager/index.md)
  accordingly.

Using risks involves three steps:

1. Create a risk: declare the nature of the risk.
2. Create risk rules: create the rules that assign risks to identities, depending on identities'
   entitlement assignments.
3. Monitor risks: via the **Identified Risks** screen or certification campaigns.

## Participants and Artifacts

Integrators may need the help of the application owner, security manager and role model officers to
assess risks inherent to entitlements.

| Input                                                                                                                                                              | Output        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Risks catalog |

## Create a Risk

Create a risk by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Risks**.

   ![Home Page - Risks](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/home_risks_v602.webp)

2. On the risks page, click on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the fields.

   ![New Risk](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/riskmanagement_newrisk_v602.webp)

   - `Identifier`: must be unique among risks and without any whitespace.
   - `Name`: will be displayed in the UI to identify the risk.
   - `Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     in which the risk exists.
   - `Entity Type`:
     [entity type](/docs/identitymanager/6.1/identitymanager/index.md)
     targetted by the risk.
   - `Description`: explanation of the risk that will be displayed with the exemption policy
     message.
   - `Remediation`: potential alternative solutions that will be displayed with the exemption
     policy message.
   - [`Exemption Policy`](/docs/identitymanager/6.1/identitymanager/governance/risks.md)
   - [`Type`](/docs/identitymanager/6.1/identitymanager/governance/risks.md)
   - `Level`: risk level that is used to compute
     [risk scores](/docs/identitymanager/6.1/identitymanager/governance/risks.md).
   - `Rules`: a risk is based on the union of
     [rules](/docs/identitymanager/6.1/identitymanager/governance/risks.md),
     themselves based on the intersection of rule items. A rule item specifies the risk-triggering
     resource(s). A high-privilege risk must contain at least one rule with one rule item. A
     segregation-of-duties risk must contain at least two rule items in the same rule. Read below
     how to write risk rules.

   When risks are based on the exemption policy called **Approval required**, the corresponding
   role requests appear on the
   [**Role Review**](/docs/identitymanager/6.1/identitymanager/index.md)
   screen with a specific workflow state. See below this note.

   ![Risk Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/riskmanagement_workflowstate_v523.webp)

   ### Write risk rules

   A risk rule is simply the condition that triggers the assignment of a risk to an identity,
   depending on the identity's entitlements.

   Within Usercube, an entitlement assigned to an identity is represented by the value of a given
   [navigation property](/docs/identitymanager/6.1/identitymanager/index.md),
   in a resource owned by said identity.

   > For example, imagine that we want to grant unlimited Internet access to the administrator
   > profile of an identity. This entitlement won't be assigned directly to the identity but to
   > their AD administration account. In our Active Directory, there is a resource called
   > `DL-INTERNET-Restricted` identified from among AD entries as a group. Therefore, we need to
   > add this group membership to the properties of the identity's AD account, using
   > `DL-INTERNET-Restricted` as a value of the `memberOf` property.

4. Choose the
   [resource type](/docs/identitymanager/6.1/identitymanager/index.md)
   to be targetted by the risk.

   > We choose `AD User (administration)` to prevent this situation from happening in our example.

5. Choose the navigation property that corresponds to the situation.

   > `memberOf` in our example.

6. Choose a value for this navigation property. The value would be a resource from the unified
   [resource repository](/docs/identitymanager/6.1/identitymanager/index.md).

   > The group `DL-INTERNET-Restricted` in our example.

   ![Risk Item Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/riskmanagement_newriskitem_v602.webp)

   This final value is an entitlement, linked to the owner identity through the navigation property
   and the ownership relationship.

   This final value is an entitlement, linked to the owner identity through the navigation property
   and the ownership relationship.

   > In our example, a risk is identified for a person as soon as their administration AD account
   > is part of the `DL-INTERNET-Restricted` group.

7. Click on **Create**.

   Risks are taken into account from the moment the `Compute Resource Risk Scores` task runs (or
   the
   [complete job](/docs/identitymanager/6.1/identitymanager/index.md)
   which contains said task).

   The `Compute Resource Risk Scores` task doesn't need to be launched right away, but new risks
   can't be identified before it runs at least once.

## Monitor Identified Risks

After creating at least one risk and computing risk scores, identified risks are listed on the
**Identified Risks** screen, accessible from the home page in the **Administration** section.

![Home Page - Identified Risks](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/home_identifiedrisks_v602.webp)

![Identified Risks](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/risk-management/riskmanagement_identifiedrisks_v522.webp)

For a given identity in the list, user information can be viewed and accessed by clicking
respectively on the eye and arrow buttons on the right-hand side.

## Impact of Modifications

Modifications in a risk are taken into account only after running the `Compute Risk Scores` task.
Therefore, risk scores are computed according to the new parameters.

**After a modification:** while risk scores are computed for all identities and assignments
(pre-existing and newly created), a modified
[exemption policy](/docs/identitymanager/6.1/identitymanager/governance/risks.md)
is applied only to future entitlement assignments. For example, changing the exemption policy of a
risk from warning to blocking won't remove entitlements from the identities who already have them.
But future assignments are going to be blocked.

The deletion of a risk simply triggers the computation of risk scores during the next
`Compute Risk Scores` task, and removes any exemption policy steps in an assignment request.

## Verify Risk Management

In order to verify the process, assign to a fake identity a permission that is supposed to trigger
the created risk, and check the consequences:

- The message displayed at the end of the entitlement request must correspond to the configuration
  of the
  [exemption policy](/docs/identitymanager/6.1/identitymanager/governance/risks.md).
- Once the entitlement is assigned, a line must appear on the **Identified Risks** page.

# Perform a Simulation

How to assess the impact of a modification on the role model, including the
[role catalog](/docs/identitymanager/6.1/identitymanager/index.md),
[role assignment rules](/docs/identitymanager/6.1/identitymanager/index.md)
and
[resource correlation rules](/docs/identitymanager/6.1/identitymanager/index.md),
using a dedicated
[policy](/docs/identitymanager/6.1/identitymanager/index.md).

## Overview

Usercube's simulations gather roles and rules which are to be created, modified or deleted, without
being inserted in the actual role model straight away. More specifically, a simulation can involve:

- [correlation rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  and
  [classification rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [scalar rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  and
  [navigation rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [resource type rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [single roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  and
  [composite roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [single role rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  and
  [composite role rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

A simulation can also be created by the
[role mining tool](/docs/identitymanager/6.1/identitymanager/index.md)
for the automation of role assignments.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

   Only one simulation can be active per policy.

2. observe via simulation reports the impact on the whole system, i.e. both assignments and
   provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

NETWRIX recommends using simulation whenever performing an action (creation/modification/deletion)
on the role model.

## Participants and Artifacts

Integrators are able to perform simulation if they master the new role model.

| Input                                                                                                                                                                                                                                                       | Output             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (optional) [Role assignment rules](/docs/identitymanager/6.1/identitymanager/index.md) (optional) [Categorized resources](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Updated role model |

## Launch a Simulation

Launch a simulation by proceeding as follows:

1. Access the simulation list by clicking on **Simulations** on the home page, in the
   **Configuration** section.

   ![Home - Simulations](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/home_simulations_v600.webp)

   ![Simulation List](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_list_v602.webp)

2. Create a new simulation by clicking on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the fields.

   ![Simulation List](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_new_v602.webp)

4. Click on **+ Create**.
5. Perform changes through the **Roles Changes** and **Rules Changes** tabs and the following icons,
   respectively for addition, modification and deletion:

   ![Edition - Approval Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![Recommendation Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_iconedit_v600.svg)

   ![Discouragement Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_icondelete_v600.svg)

   At any time, you can click on the line of a previously made change to access its description,
   even click on **Cancel** to erase it.

   ![Cancel Change](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_cancel_v602.webp)

6. Click on **Start** to launch the simulation.

   ![Start Simulation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_start_v602.webp)

7. After a few seconds, click on **Refresh** to display the simulation results.
8. Observe the results in the overview and in the Excel report available via the Download button.

   ![Download Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/icondownload_v602.svg)

## Shift from Simulation to Production

After all needed changes have been simulated, you can decide to apply or cancel them.

![Apply or Cancel Changes](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/optimize/simulation/simulation_decision_v600.webp)

Then, the simulation is no longer active.

Clicking on **Apply** applies the simulated changes to the role model. You need to launch the
[Compute-RoleModel](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
task to observe the actual changes in users' entitlements.

## Impact of Modifications

Once you've applied or canceled the changes of a simulation, said simulation is no longer active. If
you still need to simulate changes on the same policy, you can create a new simulation.

Deleting a simulation doesn't impact the role model. It simply undoes the simulated changes which
haven't been applied yet.

## Verify Modification

In order to verify the process, check that the roles and rules are created with the right
parameters.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select the type of role that you want to check, and find the roles you created inside the right
category and with the right parameters.

![Select Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/categorycreation_test_v602.webp)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select the type of rule that you want to check, and find the rules you created with the right
parameters.

# Classify Resources

How to define
[classification rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
in order to classify remaining uncorrelated resources, assigning them
[resource types](/docs/identitymanager/6.1/identitymanager/index.md).

## Overview

### Classification purpose

Classification is the process of putting on an existing resource a label called resource type, to
show its intent and/or purpose within the managed system.
[Read more about the purpose of classification](/docs/identitymanager/6.1/identitymanager/index.md).

Every resource type can be assigned a set of classification rules.

### About the confidence rate

As the aim here is to classify uncorrelated resources in a given managed system, classification
rules are going to rely on the patterns in resources' attributes, such as naming conventions.

Sometimes, the managed system doesn't use rigorous rules and thus data quality isn't enough to allow
the creation of a single infallible correlation/classification rule for all resources. Hence, you
may need to create several correlation/classification rules.

Each rule is configured with a confidence rate to express its reliability, according to data quality
and sensitivity.

In our case, correlation/classification can be based on a first rule applicable to quality data
resources with a high confidence rate, and a second rule applicable to resources with a lower data
quality. This second rule is going to have a lower confidence rate, thus a lower priority, because
the strategy is to apply the first rule as much as possible. But the second rule is essential in
case the first one doesn't apply, though it cannot be trusted as much as the first rule.

Hence correlation/classification rules are configured with a confidence rate:

- from 100 to 150% to correlate resources automatically without a manual validation;
- from 0 to 99% to impose that a resource manager reviews the correlation/classification. See more
  details in the section below.

Usercube considers the rules in descending order of confidence rate. The first matching rule is
applied.

In other words:

- if there is at least one matching rule with a confidence rate above 100%, then the one with the
  highest rate is applied;
- if there isn't and there is at least one matching rule with a confidence rate below 100%, then the
  one with the highest rate is suggested.

There is no predefined priority order between two rules with the same confidence rate.

### Focus on reviews

When the confidence rate is below 100%, correlation and classification reviews are to be done:

- on the **Provisioning Review** page when the owned resource is allowed by the role model, i.e.
  requested manually or assigned automatically by a resource type rule;

  ![Correlation Review - Provisioning Review Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsprovisioningreview_v603.webp)

- on the **Resource Reconciliation** page when the owned resource is not allowed by the role model,
  i.e. not requested manually nor assigned by a resource type rule. For example, the creation of a
  correlation rule without a resource type rule triggers unauthorized accounts on the **Resource
  Reconciliation** page.

  ![Correlation Review - Resource Reconciliation Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsresourcereconciliation_v603.webp)

Broadly speaking, the **Resource Reconciliation** page displays non-conforming assignments/values
(gaps), i.e. resources and property values from the managed systems that are not allowed by a rule
in Usercube. The **Provisioning Review** page displays the resource and property changes whose
workflows require a manual approval.

### Classification rule example

Classification rules are commonly based on logins or organizational units. Account types are usually
assigned specific strings to be easily recognized, such as for example `adm` for administrator
accounts. They can also include the employee identifier which includes specific digits according to
the account type.

Consider an organization that places basic users in organizational units `Users` and `Locations`
with a CN starting with `U`. This means that a basic user should have a `dn` attribute different
from zero, containing `OU=Users` and `OU=Locations`, and starting with `CN=U`. Then, a
classification rule could take as a target expression:

```

return resource.dn != null && resource.dn.Contains("OU=Users,") && resource.dn.Contains("OU=Locations,") && resource.dn.StartsWith("CN=U");

```

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                   | Output               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [Resource type](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Correlation rules](/docs/identitymanager/6.1/identitymanager/index.md) (recommended) | Classification rules |

## Create a Classification Rule

The principle of a classification rule is to use the expression of the target object, to assign (or
not), the resource type to said object.

Fill a resource type with a classification rule by proceeding as follows:

1. On the relevant resource type's page, click on **Classification Rules** and the addition icon.

   ![New Classification Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/resourcetype_newclassifrule_v602.webp)

   Classification rules can also be created through the **Access Rules** screen (accessible from
   the home page, in the **Configuration** section), clicking on the **Classifications** tab and
   the addition button at the top right corner.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

2. Fill in the fields.

   ![New Classification Rule Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/resourcetype_newclassifrulefields_v602.webp)

   - **Target Object** > `Expression`: C# expression based on the resource that needs to be
     classified.
   - `Confidence Rate`: rate expressing the rule's reliability, and its priority order. See the
     detailed explanation.
     > Our overview example would look like:
     >
     > ![Classification Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/classification_example_v602.webp)

3. Click on **Create** and see a line added on the rules page.
4. On the connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Classify
   Resource Types** to apply the new classification rules.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Impact of Modifications

An action (addition/modification/deletion) on a classification rule doesn't trigger a new
computation of classification for the resources that are already categorized, i.e. both classified
and correlated. The new version of said classification rule will be applied only to new resources
along with the existing resources whose correlation and/or classification was not yet reviewed (as
unauthorized accounts on the **Resource Reconciliation** screen).

Thus only non-conforming resources (unauthorized accounts on the **Resource Reconciliation** screen)
can have their correlation and classification re-computed.

Even without selecting an owner, reviewing unauthorized accounts on the **Resource Reconciliation**
screen "blocks" correlation and classification "as is". Neither will be re-computed.

This also means that only non-conforming resources (displayed on the **Resource Reconciliation**
screen) can have their classification questioned and re-computed.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in
classification rules.

Any modification in classification rules is taken into account via the classification job: on the
connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Classify Resource
Types**.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Verify Classification

In order to verify the process, analyze samples and check that all objects are classified, and well
classified. To do so, click on the target entity type(s) affected by your rule(s) in the left menu
of the home page.

![Test Entity Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

The entity type's page can be
[configured via XML](/docs/identitymanager/6.1/identitymanager/index.md) to
customize all displayed columns and available filters, especially the **Uncategorized** filter that
spots unclassified resources, and the **Owner / Resource Type** column that shows the resource type
assigned to each resource.

![Owner / Resource Type Column](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/classification_test_v522.webp)

Therefore, check that all resources show here a resource type. Moreover, a knowledgeable person must
analyze a few samples to ensure that resources are classified in the right resource type.

## Troubleshooting

#### If a resource is not classified (or not correctly), then�

![Unclassified Resource](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/classification_unclassified_v600.webp)

- If the resource is correlated, check whether the corresponding correlation rule is in the right
  resource type.
- If the resource is not correlated, check the validity of the classification rules.
- Check the resource's data quality.

# Correlate Resources

How to define
[correlation rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to match up resources across systems, usually accounts with their owner.

## Overview

### Correlation purpose

Correlation is the process of establishing an ownership relationship between a source resource
(usually an identity) and a target resource (usually an account). It is the basis of the link
between an identity and their fine-grained entitlements.
[Read more about the purpose of correlation](/docs/identitymanager/6.1/identitymanager/index.md).

Every resource type can be assigned a set of correlation rules.

Correlation rules must be created with caution as an error in the correlated attributes may result
in the unwanted assignment of a given account to an existing user.

Correlation should be based on immutable attributes, for example codes that don't change during the
resource's lifecycle rather than display names that can vary in time. This method prevents
integrators from losing the history of the changes made to a resource after a correction.

> In addition to display names, counter-examples for correlation properties are: positions; marital
> names; locations�

### About the confidence rate

As the aim here is to correlate all resources in a given resource type, correlation rules are going
to rely on the patterns in resources' attributes, such as naming conventions.

Sometimes, the managed system doesn't use rigorous rules and thus data quality isn't enough to allow
the creation of a single infallible correlation/classification rule for all resources. Hence, you
may need to create several correlation/classification rules.

Each rule is configured with a confidence rate to express its reliability, according to data quality
and sensitivity.

In our case, correlation/classification can be based on a first rule applicable to quality data
resources with a high confidence rate, and a second rule applicable to resources with a lower data
quality. This second rule is going to have a lower confidence rate, thus a lower priority, because
the strategy is to apply the first rule as much as possible. But the second rule is essential in
case the first one doesn't apply, though it cannot be trusted as much as the first rule.

Hence correlation/classification rules are configured with a confidence rate:

- from 100 to 150% to correlate resources automatically without a manual validation;
- from 0 to 99% to impose that a resource manager reviews the correlation/classification. See more
  details in the section below.

Usercube considers the rules in descending order of confidence rate. The first matching rule is
applied.

In other words:

- if there is at least one matching rule with a confidence rate above 100%, then the one with the
  highest rate is applied;
- if there isn't and there is at least one matching rule with a confidence rate below 100%, then the
  one with the highest rate is suggested.

There is no predefined priority order between two rules with the same confidence rate.

### Focus on reviews

When the confidence rate is below 100%, correlation and classification reviews are to be done:

- on the **Provisioning Review** page when the owned resource is allowed by the role model, i.e.
  requested manually or assigned automatically by a resource type rule;

  ![Correlation Review - Provisioning Review Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsprovisioningreview_v603.webp)

- on the **Resource Reconciliation** page when the owned resource is not allowed by the role model,
  i.e. not requested manually nor assigned by a resource type rule. For example, the creation of a
  correlation rule without a resource type rule triggers unauthorized accounts on the **Resource
  Reconciliation** page.

  ![Correlation Review - Resource Reconciliation Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsresourcereconciliation_v603.webp)

Broadly speaking, the **Resource Reconciliation** page displays non-conforming assignments/values
(gaps), i.e. resources and property values from the managed systems that are not allowed by a rule
in Usercube. The **Provisioning Review** page displays the resource and property changes whose
workflows require a manual approval.

### Correlation rule examples

Consider AD accounts (target) and their owners (source). A classic example is to try and correlate
identities and AD accounts based on the first name and last name. We can write a correlation rule
that states that, for a given identity, Usercube looks for all AD accounts that bear the same first
name and the same last name. All AD accounts that match this description are said to be correlated
to the identity. The identity becomes the owner of the accounts.

A set of correlation rules for a resource type could be:

- a rule with 100% confidence on login + name + first name;
- a rule with 90% confidence on login only.

Usual rules can also be made, for example, on:

- name + first name using phonetics to avoid typos;
- first name + name + entry date if the entry date is known in the source systems;
- email address;
- Windows login.

Correlation rules don't have to compare equivalent properties from Usercube and from the managed
system. A rule can compare for example users' `Login` from Usercube with their `sAMAccountName` from
the AD, even using C# expressions if needed.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                  | Output            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Resource type](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Correlation rules |

## Create a Correlation Rule

The principle of a correlation rule is to compare the expressions of the source and target objects.

Fill a resource type with a correlation rule by proceeding as follows:

1. On the relevant resource type's page, click on **Correlation Rules** and **+ New**.

   ![New Correlation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrule_v602.webp)

   Correlation rules can also be created through the **Access Rules** screen (accessible from the
   home page, in the **Configuration** section), clicking on the **Correlations** tab and the
   addition button at the top right corner.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

2. Fill in the fields.

   ![New Correlation Rule Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrulefields_v602.webp)

   - **Source Object**: at least one property from the source system that is going to be linked to
     a given target object. Can be defined by a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
   - **Target Object**: one property from the managed system that is going to be linked to a given
     source object. Can be defined by a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
   - `Confidence Rate`: rate expressing the rule's reliability, and its priority order. See the
     detailed explanation.
     > In this example, a person via their login and name, is the owner of a nominative AD
     > account via its `sAMAccountName` attribute and display name:
     >
     > ![Correlation Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/correlation/correlation_example_v602.webp)

3. Click on **Create** and see a line added on the rules page.
4. On the connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare
   Correlation Keys** to compute the expressions used in the new correlation rule(s), and click on
   **Jobs** > **Compute Role Model** to apply all correlation rules.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Impact of Modifications

An action (addition/modification/deletion) on a correlation rule doesn't trigger a new computation
of correlation for the resources that are already correlated. The new version of said correlation
rule will be applied only to new resources, along with the existing resources whose correlation was
not yet reviewed (as unauthorized accounts on the **Resource Reconciliation** screen).

Thus only non-conforming resources (unauthorized accounts on the **Resource Reconciliation** screen)
can have their correlation and classification re-computed.

Even without selecting an owner, reviewing unauthorized accounts on the **Resource Reconciliation**
screen "blocks" correlation and classification "as is". Neither will be re-computed.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in
correlation rules.

Any modification in correlation rules is taken into account via the following jobs: on the connector
dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare Correlation Keys**, and
then on **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Verify Correlation

In order to verify the process, check the list of
[orphaned accounts](/docs/identitymanager/6.1/identitymanager/index.md)
and analyze them to look for patterns revealing correlation issues. To do so, click on the target
entity type(s) affected by your rule(s) in the left menu of the home page.

![Test Entity Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

The entity type's page can be
[configured via XML](/docs/identitymanager/6.1/identitymanager/index.md) to
customize all displayed columns and available filters, especially the **Orphan** filter that spots
resources without an owner, and the **Owner / Resource Type** column that shows the owner assigned
to each resource.

![Owner / Resource Type Column](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/correlation/correlation_test_v522.webp)

A knowledgeable person must analyze a few samples to ensure that resources' owners can all
[be justified](/docs/identitymanager/6.1/identitymanager/index.md),
meaning that orphaned accounts are supposed to be so, and that correlated resources are matched with
the right owner.

Another possibility of correlation validation is to compare the number of AD accounts to the number
of users. However, keep in mind that several accounts are sometimes assigned to a single user.

## Troubleshooting

#### If a resource is not correlated (or not correctly), then�

![Uncorrelated Resource](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/correlation/correlation_uncorrelated_v600.webp)

- Check the validity of correlation rules.
- Check the resource's data quality.

# Categorize Resources

How to correlate managed systems' resources with identities, classifying resources into
[resource types](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Overview

Managing resources can quickly become chaotic when the number of resources increases significantly.
You will need to manage orphaned (without an owner) and unused accounts through resource reviews,
and make sure that all accounts follow their owner's lifecycle. To do so, resources can be
categorized, which for our purposes means two things. They are:

- correlated with their owners, so that accounts follow the corresponding identity's lifecycle.
  > For example, if a user leaves the company, then their account is deactivated accordingly.
- classified according to their intents, in other words you need to specify resources' functions or
  goals within the managed system, especially in terms of security;
  > For example, a basic user account (low-privileged) and an administrator account
  > (high-privileged) have different intents. These two distinct account types are handled in
  > different ways security-wise, and they represent different entitlements with different
  > security measures applied.

Categorization is designed to help resource managers to easily identify a resource's owner and
purpose.

> For example, when Usercube spots an orphaned account, resource managers must be able to determine
> whether the account should have an owner, or if it is a service/technical account and thus does
> not need an owner.

### Technical principles

Technically, Usercube uses the notion of resource types to categorize resources. A resource type is,
in fact, a way to gather similar resources under one meaningful name, because they have the same
intent.

> Our example above would use a resource type `AD User (administration)` to group all AD
> administrator accounts, and `AD User (nominative)` to group all AD basic user accounts.

Thus, a resource type is a name that informs users about the intent of a resource. As stated above,
it serves to implement our two elements of categorization. This happens with two distinct sets of
rules, one for correlation, and the other for classification.

[**Classification**](/docs/identitymanager/6.1/identitymanager/index.md)
is a process that simply aims to assign a resource type to specific resources. A specific resource
can only be assigned a single resource type.

![Classification Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_classifschema.webp)

Any resource that is unclassified will not be available for review.

[**Correlation**](/docs/identitymanager/6.1/identitymanager/index.md)
is a process that aims to establish an ownership relationship between two resources. In most cases,
an identity resource that becomes the owner of an account resource.

![Correlation Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_correlschema.webp)

While an owner can possess several resources, a resource can have only one owner.

Some resources are orphaned (without an owner) for good reasons. For example service/technical
accounts are often used by applications to access data held in Usercube or other managed systems and
don't belong to a specific user.

As stated previously, both classification and correlation work through sets of rules.

> For basic users, we have in Usercube:
>
> ![Example - Basic Users in Usercube](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_examplebasicuser.webp)
>
> For basic users, we have in the AD:
>
> ![Example - Basic Users in AD](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_examplebasicad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Users | 1. mail (from AD) = user's email
> franck.antoine@acme.com = franck.antoine@acme.com 2. displayName = user's last name + user's first
> name Antoine Franck = Antoine + Franck |

> For administrators, we have in Usercube:
>
> ![Example - Basic Users in Usercube](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_exampleadminuser.webp)
>
> For administrators, we have in the AD:
>
> ![Example - Admin Users in AD](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_exampleadminad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Administrators | 1. sAMAccountName = "A" + user's employee id
> A28022 = A + 28022 2. displayName = "ADM" + user's last name + user's first name ADM Colin Jean =
> ADM + Colin + Jean |

Sometimes you may not know if your rules are always going to apply. Therefore, each rule expresses a
certain level of confidence. Usercube will establish a priority order between rules based on the
confidence rate, and will also act differently depending on whether the confidence rate is above or
below 100%.
[Find more details](/docs/identitymanager/6.1/identitymanager/index.md).

A resource type can have zero correlation rules, since accounts can be without owners. But a
resource type with neither correlation nor classification rules serves no purpose.

**Correlation triggers classification:** a matching correlation rule for a given resource type will
perform both actions of categorization: both correlating a resource with its owner, and classifying
the resource at the same time.

See below this note.

Hence, integrators should start with correlation rules, and then write classification rules for any
remaining uncorrelated resources.

In the same way, Usercube will apply correlation rules before classification rules.

![Categorization Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/categorization_categschema.webp)

Now that you have created resource types and their correlation/classification rules, you have
created the first elements for your
[role model](/docs/identitymanager/6.1/identitymanager/index.md).
The role model contains all the roles and rules which drive the entitlement assignment logic inside
Usercube.

A role model is made up of
[policies](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
which contain roles, rules and resource types. Most often the default policy is enough. However, in
more complex situations,
[additional policies can be created](/docs/identitymanager/6.1/identitymanager/index.md)
to separate groups of roles, rules and resource types.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                              | Output                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Connector](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Categorized resources Correlated accounts Orphaned account list |

## Categorize Resources

Categorize resources by proceeding as follows:

1. Create at least one
   [resource type](/docs/identitymanager/6.1/identitymanager/index.md);
2. Create the appropriate
   [correlation rules](/docs/identitymanager/6.1/identitymanager/index.md);
3. Create the appropriate
   [classification rules](/docs/identitymanager/6.1/identitymanager/index.md)
   for accounts that do not have an owner.

NETWRIX recommends creating/modifying/deleting correlation and classification rules using
[simulations](/docs/identitymanager/6.1/identitymanager/index.md) in
order to previsualize changes.

## Next Steps

Once accounts are categorized, integrators can start
[creating provisioning rules](/docs/identitymanager/6.1/identitymanager/index.md).

Categorization also enables the
[review of orphaned and unused accounts](/docs/identitymanager/6.1/identitymanager/index.md).

# Create a Resource Type

How to create the container for future correlation and classification rules inside a given managed
system.

## Overview

A
[resource type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is created to highlight differences in intent between resources. It materializes the organization's
profiles. In a given managed system, different types of resources have different security needs.

> For example, can usually be found:
>
> - nominative accounts for basic user accounts with low privileges;
> - administrator accounts for accounts with higher privileges, on several administration
>   entitlements levels;
> - generic accounts, i.e. shared by a group of users (often for testing use);
> - old in opposition to new accounts because of potentially evolving naming conventions;
> - service accounts owned by applications instead of users.

In practice, a specific resource type is created for a given resource when there are differences in:

- the owner type (for example worker, partner, customer, application, robot, etc.);
- the required set of
  [classification](/docs/identitymanager/6.1/identitymanager/index.md)
  and/or
  [correlation](/docs/identitymanager/6.1/identitymanager/index.md)
  rules;
- the approval circuit for a resource's modification or assignment, i.e. the number of required
  approvals, validators, etc.;
- the type of
  [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
  (manual or automatic).

### Source vs. target resource

Resource types are the vessel for ownership relationships. They involve the definition of source and
target objects chosen from among the properties of existing
[entity types](/docs/identitymanager/6.1/identitymanager/index.md).
The source (usually identities) is the owner of the target (usually resources from your managed
systems, such as a nominative AD account). This relationship is the basis for
[correlation](/docs/identitymanager/6.1/identitymanager/index.md)
as much as for future
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

[Read more about ownership relationships](/docs/identitymanager/6.1/identitymanager/index.md).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                     | Output        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (optional) [Target connector](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Synchronized data](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Resource type |

## Create a Resource Type

A new resource type requires an existing
[entity type](/docs/identitymanager/6.1/identitymanager/index.md).

Create a resource type by proceeding as follows:

1. On the relevant connector page, click on the addition button in the **Resource Types** frame.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   Resource types can also be created through the **Access Roles** screen (accessible from the home
   page, in the **Configuration** section), using the **+ New** button and selecting
   `Resource Type` in the first field called `Type`.

   ![Home - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. Fill in the fields.

   ![New Resource Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/resourcetype_newresourcet_v603.webp)

   - `Identifier`: must be unique among resource types, without any whitespace, and be
     C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
   - `Name`: will be displayed in the UI to identify the resource type.
   - `Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     in which the resource type exists.
   - `Source Entity Type`: entity type (from any existing connector) used to fill the target entity
     type.
   - `Target Entity Type`: entity type (part of the connector) to be filled with the source entity
     type.
   - `Category`: category assigned to the resource type. It can be chosen from among the existing
     categories or
     [created](/docs/identitymanager/6.1/identitymanager/index.md)
     directly from the categories list by clicking on the **+ Category** button.
   - `Approval Workflow`: represents the number of validations required to assign a resource from
     this type to an identity.
   - `Approve Role Implicitly`: relevant only for workflows with at least a simple approval
     process. `Implicit` mode bypasses the approval step(s) if the person who issues the role
     request is also the
     [role officer](/docs/identitymanager/6.1/identitymanager/index.md).
     `Explicit` refuses said bypass. `Inherited` follows the
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     decision to approve role implicitly or not.
   - `Prolongation without a new approval workflow`: enables the resource type to have its
     assignment's end date postponed without any validation. `Inherited` follows the
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     decision to enable this option or not.
   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Arguments Expression`: when using a connection for automatic provisioning, C# expression used
     to compute a dictionary of strings in order to compute the arguments of
     [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
     orders, such as the identifier of the workflow to launch within Usercube, or the identifier of
     the user's record to copy.
     [Find examples](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).
   - `Allow Addition`: enables Usercube to automatically create new resources in the managed system
     when their owners are given the right entitlements. Otherwise, resource managers must create
     resources manually directly in the managed system.

     > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
     > accounts are configured with `Allow Addition` disabled. In this case, if we give the role
     > `SAP` to a user, then said user doesn't automatically receive an SAP account. The relevant
     > resource manager must create an account for said user in the SAP application.

   - `Allow Removal`: enables Usercube to automatically deprovision resources in the managed system
     when their owners are deprived of the right entitlements. Otherwise, Usercube is able to
     delete resources in the managed system only with a manual approval on the **Resource
     Reconciliation** screen.

     > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
     > accounts are configured with `Allow Removal` disabled. Finally, consider a given user who
     > has the role `SAP` and the corresponding SAP account. In this case, if we deprive said
     > user from the role `SAP`, then the SAP account isn't automatically deleted. Usercube
     > displays this assignment as non-conforming on the **Resource Reconciliation** page, and
     > the relevant resource manager must confirm the account deletion.

     **Allow Addition / Allow Removal:**

     These options set to `No` are interesting especially in testing mode when the role model
     isn't entirely reliable yet.

   - `Remove If Orphaned`: enables Usercube to automatically deprovision resources when their owner
     is deleted. Otherwise, said resources are displayed on the
     [**Resource Reconciliation**](/docs/identitymanager/6.1/identitymanager/index.md)
     screen. Can be activated only if `Allow Removal` is activated too.
   - `Require Provisioning Review`: forces an additional mandatory review of all
     [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
     orders for the resource type (on the
     [**Provisioning Review**](/docs/identitymanager/6.1/identitymanager/index.md)
     screen).

     > Consider AD accounts. While nominative accounts can be provisioned without specific
     > precautions (option set to `No`), administrator accounts sometimes require an additional
     > review (option set to `Yes`).

     This option can be bypassed when computing the role model by clicking on the **Compute Role
     Model, no provisioning review** job in the **Resource Type** frame on the connector's
     overview page.

   - `Discard Manual Assignments`: allows the provisioning of a new value computed by a
     provisioning rule for a property, based on a change in the source data, no matter the
     property's current workflow state.

     Set to `No`, any manual change of a property's value made directly in the target system will
     be "protected" (only after the change is approved in Usercube in **Resource
     Reconciliation**). It means that a future change in the source data will not trigger the
     provisioning of the new value. Instead, Usercube will keep the value of the manual change,
     and state the value as `Questioned`.

     > Consider an HR system (source) whose data isn't often synchronized into Usercube. Let's
     > say that a user marries and changes their name. In this case, the value in Usercube needs
     > to be updated (via workflows) so that all managed systems are updated too with the new
     > name. However, `Discard Manual Assignments` should be enabled because the HR system should
     > still be the authoritative source in case of another change.
     >
     > [See a full example](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

   - `Correlate Multiple Resources`: enables Usercube to link a single owner to several existing
     target objects from this resource type.

     > Consider records, representing users' positions in the resource type
     > `User Record (from HR)`. In some organizations, one user can have several records at once,
     > or have several records that overlap, and these records can be created either via
     > Usercube's workflows or via the upload of an HR file. Thus, on the one hand it is complex
     > to anticipate the number of records created for an identity, on the other hand there
     > shouldn't be records without an owner. In other words, when creating a new record via a
     > workflow, we want the record to be linked to the right user, whether or not a record is
     > already linked to the user's HR sheet. Therefore, the correlation of multiple resources
     > (of the same resource type) to a single owner should be permitted.

   - `Transmitted State Validity`: The period in minutes during which fulfillment orders can stay
     in Transmitted/Executed state. When the time is exceeded the orders are set in error state.
   - `Depends On Resource Type`: potential resource type (other than the one presently created)
     which must be provisioned for a given identity before this resource type can be created for
     said identity.

     > This option can be used so that a user must have an AD account before they can own an
     > Exchange account, because the Exchange account needs the AD account's address.
     > [Find a full example](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

   - `Depends On Owner Property`: potential properties which must be filled for a given identity
     before this resource type can be created for said identity.

     > This option can be used so that a user must have a ServiceNow identifier before they can
     > own an AD administrator account, because the AD administrator account needs this random
     > identifier computed by ServiceNow in order to be able to perform manual provisioning in
     > ServiceNow.
     > [Find a full example](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

3. Fill the **Fulfill Settings** arguments according to the selected
   [package](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md).

   Integrators need to know the required
   [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
   connection, especially whether the connection is about manual or automated provisioning.
   Automatic provisioning means that Usercube writes in the managed system. Manual provisioning
   means that Usercube isn't allowed to write directly inside the managed system, and thus it
   creates tickets so that resource managers perform the needed changes.

4. Click on **+ Create & Close** > **Create**.

## Verify Resource Type Creation

In order to verify the process, check that the resource type has been added with the right options
to the list on the **Access Roles** page, accessible from the home page in the **Administration**
section.

![Home - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

![Test Connector](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/resourcetype_test_v602.webp)

# Configure Onboarding Workflows

How to adjust the validation process and homonym detection of onboarding
[workflows](/docs/identitymanager/6.1/identitymanager/index.md).

## Overview

Onboarding workflows are the processes that users follow in order to add in Usercube a new user, as
a new employee has arrived in the company.

The most common situation consists in having two onboarding workflows: one for employees and one for
contractors. The Workforce Core Solution module provides these two workflows.

Usually, using one of these workflows means:

1. filling a form containing the new user's information, such as their name, first name, contract
   type, job title, etc;
2. if needed, sending the request of user creation for review by a knowledgeable user.

[See how to create a new worker in Usercube](/docs/identitymanager/6.1/identitymanager/index.md).

### User Creation Review

Usercube provides the review step as optional, for its necessity depends on the situation.

To perform the review of a user creation, one should have the right permissions.

![Review Permissions](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/workflows_reviewpermissions_v601.webp)

When a review is needed, a notification appears on the **MY TASKS** tab at the top.

![My Tasks Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_topbar_v601.webp)

The reviewer can then complete the creation request and finally approve it.

### Homonym Detection

User creation often benefits from a homonym detection that checks if the resource already exists in
the system, preventing duplicates.

Usercube provides a homonym detection, whose parameters can be adjusted.

[See more information about homonym detection](/docs/identitymanager/6.1/identitymanager/index.md).

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the expected validation
process and homonym detection during users' onboarding.

| Input                                                                                | Output                        |
| ------------------------------------------------------------------------------------ | ----------------------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Adjusted Onboarding Workflows |

## Configure Onboarding Workflows

Configure onboarding workflows by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **Workforce** >
   **Onboarding Workflows** in the left menu.

   ![Home - Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. For each workflow, choose whether a review step is required.

   ![Workflows Review Steps](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/workflows_reviewsteps_v601.webp)

   NETWRIX recommends enabling the review for the onboarding of employees, and disabling the review
   for contractors.

   From experience, in most use cases, the onboarding of new workers is done by their managers, and
   HR people review the creation of employees and not contractors. It also happens that HR people
   are in full charge of employees, in which case they do the onboarding and don't need a review.

3. Configure the homonym detection.

   ![Workflows Homonym Detection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/workflows_homonyms_v601.webp)

   NETWRIX recommends enabling the birth name comparison to detect user duplicates due to name
   changes, when the GDPR supports it.

   The other parameters for homonym detection should be enabled/disabled according to your needs.

4. Click on **Save** at the top of the page.

   ![Save Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Workflow Configuration

Validate the process by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Execute the workflows for a new employee and a new contractor.
3. Make sure that the homonym detection works in accordance with the specified options.

   > For example, if the inversion comparison is enabled between the first and last names:
   >
   > ![Workflows Homonym Detection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/workflows_verifyhomonyms_v601.webp)

4. Make sure that the potential validation steps are in accordance with the specified options.

## Next Steps

Once onboarding workflows are configured, integrators can start
[configuring a connector](/docs/identitymanager/6.1/identitymanager/index.md).

# Create a Connection

How to create a
[connection](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
inside a [connector](/docs/identitymanager/6.1/identitymanager/connectors-integration/index.md)
and choose the appropriate package.

## Overview

A connection is the information that allows to connect to a managed system, which includes
credentials and path.

There is a minimum of one connection per connector. In many cases, there is one connection for
[synchronization](/docs/identitymanager/6.1/identitymanager/index.md)
and one connection for
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

A connection is associated with a package, representing the technology to use for the data transfer.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                                                                                                                                 | Output        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [Connector container](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Connector model](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Connection(s) |

## Create a Connection

Create a connection by proceeding as follows:

1. Click on the addition button in the **Connections** frame on the connector's summary page.

   ![Add a New Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connection_newconnection_v602.webp)

2. Fill in the connection information fields on the left, then [select a package](#select-a-package)
   (AD, CSV, etc.) and fill the associated agent settings on the right.

   ![Connection Creation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_connectioncreation_v602.webp)

   - `Identifier`: must be unique among connections, without any whitespace, start with a letter,
     and contain only letters, numbers, `.` and/or `-`.
   - `Name`: will be displayed in the UI to identify the connection.
   - `Package`: the technology that enables the connection. Choose the package that fits best the
     managed system. See details below.
   - `Agent Settings`: depends on the selected package.

   Then click on **Create & Close**.

### Select a package

A package is chosen according to the following constraints:

- What kind of technologies do we need?

  > An Active Directory, a plain CSV file, etc.

- Do we need
  [incremental or complete](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)[synchronizations](/docs/identitymanager/6.1/identitymanager/index.md),
  or both?

  [Incremental synchronizations](/docs/identitymanager/6.1/identitymanager/automation/synchronization/upward-data-sync.md),
  usually launched approximatively every two hours, are to be performed for real-time needs, while
  [complete synchronizations](/docs/identitymanager/6.1/identitymanager/automation/synchronization/upward-data-sync.md),
  scheduled no more than once a day, will recover any changes that may have slipped through the
  cracks of the incremental synchronizations.

- Do we need
  [provisioning](/docs/identitymanager/6.1/identitymanager/index.md)?
  If so, should provisioning be performed manually or automatically by Usercube?

NETWRIX recommends starting by creating a connector that only does synchronization, and do not worry
yet about provisioning. It allows Usercube to read data from your managed system, without writing to
the system.

One connector can contain several connections, and each connection contains one package.

> For example, an `AD` connector, that will handle synchronization and provisioning between Usercube
> and an AD, would generally use the `Directory/Active Directory` package which can do
> synchronization and automated provisioning. A second package for manual provisioning,
> `Ticket/identitymanager` could be added to request manual provisioning of administration accounts that
> need more security.

Each type of package needs its own settings, and
[secured options](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/connections.md#secured-options)
can be used to store sensitive connection information.

## Refresh Schemas

A schema is a snapshot of the data structure (metadata) retrieved by a connection. It needs to be
refreshed to enable the configuration of entity types and resource types.

Usercube refreshes a connection's schema:

- after the connection creation;
- when clicking on **Refresh Schema** on the connection's page: only the schema of the current
  connection is refreshed;

  ![Refresh Schema of One Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshschema_v522.webp)

- when clicking on **Refresh all schemas** on the connector's page: all schemas of the connector are
  refreshed.

  ![Refresh all Schemas](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshall_v602.webp)

In the **Connections** frame, either the last successful schema update is indicated or an icon is
shown if the refresh schema failed.

![Failed Refresh Schemas](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_failedindicator_v602.webp)

Some packages don't generate a schema. For these packages, the **Refresh Schema** button isn't
displayed on the connection's page. On the connector's page, a connection without schema is
indicated by the sentence "_There is no schema for this connection_".

![No Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_noschema_v522.webp)

The connections' schemas must be refreshed before editing the connector's entity types via the UI,
whether the connections were created via the UI or XML configuration. Otherwise, there will be no
connection table available in the `Source` dropdown, so you will not be able to save anything.

## Impact of Modifications

Changes on a connection may imply changes in the connector's entity types. When a connection schema
changes, a warning may appear in the entity type screen indicating that a mapped property doesn't
exist anymore.

## Verify the Connection

In order to verify the process:

1. click on **Check Connection** to ensure that Usercube can reach the managed system;

   ![Check Connection](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

   Some connectors have both
   [incremental and complete](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)
   setting modes. They are relatively independent so they both need to be tested.

2. check that the connection appears in the **Connections** frame with the right options, and
   without the Failed icon.

![Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

## Troubleshooting

#### If the Failed icon appears, then�

![Decline Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

Ensure that the schema of the connection is refreshed.

#### If the schema couldn't be recovered, then�

![Schema Not Recovered](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connection-creation/connection_notrecovered_v523.webp)

- Ensure that the managed system is properly connected.
- Check the connection's settings.

  > Example: For a CSV connection, ensure that the file paths are written correctly in full, such
  > as `C:/identitymanagerDemo/Sources/Directory.xlsx`.

You may have a schema that could not be recovered if you work with a system without a direct access
to the agent. In this case, schema refreshment will fail but that does not mean that there
necessarily is a problem.

Try again from a system that can access the agent.

# Create the Connector

How to declare the technical container of a
[connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md).

## Overview

Here, you will learn how to create a connector: the shell that harbors entity types and connections
related to a single managed system.

Keep in mind that a Usercube installation can have more than one
[agent](/docs/identitymanager/6.1/identitymanager/index.md). Connectors
should be created with a specific agent in mind since the agent needs to physically connect to the
managed system's data. Fortunately, you don't need to worry about that right now, since you are
starting with the agent provided with Usercube's SaaS environment.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input | Output          |
| ----- | --------------- |
| -     | Empty connector |

## Create a Connector Container

Create a connector container by proceeding as follows:

1. On the home page in the **Configuration** section, click on the **Connectors** button.

   ![Home page - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

   You will see all existing connectors.

2. Click on the addition icon and fill in the information fields.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![Connector creation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_declaration_v602.webp)

   - `Identifier`: must be unique among connectors, without any whitespace, start with a letter,
     and contain only letters, numbers, `.` and/or `-`.
   - `Name`: will be displayed in the UI to identify the connector.
   - `Agent`:
     [agent](/docs/identitymanager/6.1/identitymanager/index.md) that
     the connector is supposed to use.

     NETWRIX recommends choosing the provided SaaS agent.

   - `Complete Job`:
     [job](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)
     scheduled to perform a set of tasks, including
     complete[synchronization and/or provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
     for all the connectors, for which you selected the corresponding checkbox.
   - `Incremental Job`:
     [job](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)
     scheduled to perform frequently a set of tasks, including
     incremental[synchronization and/or provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
     for all the connectors, for which you selected the corresponding checkbox.

3. Click on **+ Create** to get on the connector's overview page:

   ![Connector page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_connectorpage_v602.webp)

## Verify the Connector Declaration

In order to verify the process, check that the connector has been added to the connectors list with
the right name and identifier.

![Test Connector](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_test_v602.webp)

# Model the Data

How to choose the appropriate model for a connector's data.

## Overview

In this part, you work outside Usercube to define the model that is going to be used in the next
steps to represent a managed system's resources and entitlements inside Usercube, as a connector.

This page is no technical procedure, but rather a guide aiming to give a global view on connectors
(with their components and their purpose), in order to help integrators choose the most appropriate
way to model the managed system in the form of a connector later inside Usercube.

The aim is to think about said managed system in order to specify:

- what data you need to import into Usercube;
- how you are going to organize this data together, and model it as a connector inside Usercube.

### Useful data

Modeling the connector is a matter of identifying what data you want to get into Usercube. You
should not retrieve all the data from the managed system, but only two kinds of useful data:

1. data that represents how the authorization system works in the managed system, i.e. data that
   composes entitlements and their assignments;
2. data that you want to watch and/or control and/or fulfill.

The model must take both into account. So both kinds of data must be extracted from the managed
system.

> Let's take an example. An Active Directory manages authorization through group membership (using
> the user-group paradigm).
>
> So first we need to retrieve both groups and accounts, in order to manage the AD's assignments of
> entitlements for our users (in the AD language: manage their accounts and group memberships).
>
> Secondly, we want to control attributes such as the name or e-mail of the account, and ensure they
> are consistent with the correlated identity. Thus these attributes are the second kind of
> information that we want to retrieve.

### Data models

Fortunately, you won't have to design your connector model from scratch. NETWRIX has done a little
work ahead, and you are presented here with four model templates that have proven to work so far.
Experience shows that most managed systems can be shaped using one or a mix of the following:

- the User model is the most simple model for a connector, where a user is directly associated with
  a list of entitlements;
- the [User-Group](#user-group) model represents typical
  [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) mechanisms,
  where the ability to perform an action is granted through accounts' membership to a specific group
  (also called role or profile according to the system);
- the [Account-Profile-Transaction](#account-profile-transaction) model represents a system, where
  the ability to perform an action is granted through the assignment of fine-grained entitlements
  (called transactions) which are packaged into profiles;
- the [Star](#star) model represents a system, where the ability to perform an action is granted
  through the assignment of entitlements which are based on at least two variable parameters.

Each template presents a few objects and the relationships between them. To become the model of the
actual managed system, these objects must be renamed and their attributes defined according to the
reality of said managed system.

This sheet guides you through choosing the right model template for your connector. The actual
technical implementation of the model will be tackled in the last part of the connector
configuration:
[entity type creation](/docs/identitymanager/6.1/identitymanager/index.md).

**Connector model and roles:**

The design of a model must take into account what is really going on inside the managed system in
terms of entitlements, and be flexible enough to express it as roles in the context of the
[role model](/docs/identitymanager/6.1/identitymanager/index.md).
The role model is the universal RBAC/ABAC language used by Usercube to express all entitlements.

You don't have to worry about this "role" part right now. It is going to be tackled during
[single role catalog creation](/docs/identitymanager/6.1/identitymanager/index.md).
At this point, you will take a look at the way roles are defined and linked to resources to
represent entitlements. But the work starts here, by modeling the resources that exist in the
managed system. Some of those resources, such as Active Directory groups, include interesting
information about entitlements.

Right now, you can see the connector's model as a precise description of the shape of the technical
resources and entitlements of the managed system. And, you can see roles as the higher-order
universal language in which entitlements and their assignments are expressed in Usercube for all
managed systems.

**Connector model and provisioning**:

After defining the [useful data](#useful-data) that you need to model a given system, you also have
to decide what data you need Usercube to write to the managed system. Usercube writing to an
external system is called
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input | Output          |
| ----- | --------------- |
| -     | Connector model |

## Define the Connector Model

Define your connector model by proceeding as follows:

1. Use the advice and examples given about each model template to find the template that most
   closely matches your use case.
2. Adapt the template to the reality of your managed system by renaming and adjusting the model's
   objects.
3. Define your [useful data](#useful-data), and thus the attributes of each object according to the
   reality of the data in your managed system.
4. Ensure that all objects have at least one attribute that can serve as a key to be uniquely
   identified within Usercube. You will get more details about keys during
   [entity type creation](/docs/identitymanager/6.1/identitymanager/index.md).
5. Ensure the following guidelines' enforcement:

   **Keep it simple**

   The model must stay as simple as possible. Embed just enough information.

   **Keep it readable for most users**

   The model must be easy to understand. For this, adopt a business approach, i.e. make the model
   user-friendly and close to real activities. This functional approach is essential to the
   efficiency of data flows
   ([synchronization](/docs/identitymanager/6.1/identitymanager/index.md)/[provisioning](/docs/identitymanager/6.1/identitymanager/index.md)
   loop). Keep in mind that the aim is to define a model close to the reality of the system.

   **Keep it open to changes**

   The model is going to change and evolve during the life of the application, to account for new
   needs or changes. This must be considered too in the initial model to make future changes less
   painful.

Find at the bottom a procedure example about modeling the Active Directory.

## Model Templates

All templates are detailed with examples and schemas with the following key:

![Schemas' Key](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_key.webp)

During the technical modeling inside Usercube, these objects will become entity types, their
attributes will become scalar properties, the links between them will become navigation properties.

### User

#### Authorization mechanisms

The User template is the most simple model for a connector, and used to represent a user directly
associated with a list of entitlements.

Users are represented by the accounts they own, and entitlements are represented by resources.

Permissions can be managed:

- by resource, with a list of authorized accounts for each resource;
- by account, with a list of authorized resources for each account.

#### Model

![User Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user.webp)

Thus you need to create one entity type to represent either accounts or other resources.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are the
[keys](/docs/identitymanager/6.1/identitymanager/index.md)
and the property holding entitlements. It means that:

- if entitlements are managed by resource, then the entity type representing resources must have an
  attribute (scalar property) containing the list of authorized accounts;
- if entitlements are managed by account, then the entity type representing accounts must have an
  attribute (scalar property) containing the list of authorized resources.

**Recommendation: categorize accounts in types**

Some of the managed systems following this model offer predefined types of accounts, with a
pre-packaged set of authorizations (such as the `basic` user with read/write permissions on
non-sensitive resources, or the `admin` with higher privileges).

Account types make modeling easier, as they bring another level of information about the
entitlements they contain. So we can embed more useful information in the model, thanks to an
attribute that represents the account type.

In further steps, you will be able to define one
[resource type](/docs/identitymanager/6.1/identitymanager/index.md) per
account type and map each one to a
[role](/docs/identitymanager/6.1/identitymanager/index.md)
for assignment and
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

#### Example - Canteen badges

Canteen badges are a simple system handled with the User model. Indeed users can simply have among
their attributes the access authorization for a given building and a given time. Or also, instead of
creating an entity type for users, we can create an entity type for the badges. They would have in
their attributes their respective access location and time, and an attribute listing authorized
users.

![User Model - Canteen Badges Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user-canteen.webp)

#### Example - Mailboxes

Mailboxes constitute a complex system, but IGA purposes require little information (only accounts)
so this system can too be handled with the User model, either through users and their entitlement
lists, or through mailbox entitlements and their lists of authorized users.

![User Model - Mailboxes Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user-mailbox.webp)

### User-Group

#### Authorization mechanisms

The User-Group template is better suited to represent typical Role-Based Access Control
authorization mechanisms, where a user is authorized to perform an action according to their
account's membership to a specific group. Instead of groups, some systems talk about roles or
profiles: users are authorized to perform an action through a given role or profile which they are
assigned, instead of a group membership. It is all the same idea, and the User-Group template is
perfect for them too.

Groups can also be categorized and grouped into larger groups.

Users are represented by the accounts they own.

#### Model

![User-Group Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_usergroup.webp)

Thus you need to create one entity type to represent groups (or roles or profiles) and one for
accounts.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are those constituting the link between both entity
types, i.e. the navigation properties representing the group membership.

**Recommendation: categorize accounts in types**

Many of the managed systems following this model, just like the User model, distinguish between
several types of accounts.

In further steps, you will be able to define one
[resource type](/docs/identitymanager/6.1/identitymanager/index.md) per
account type and map each one to a
[role](/docs/identitymanager/6.1/identitymanager/index.md)
for assignment and
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

#### Example - SAB

The SAB system handles authorizations using users and groups. A user is authorized to perform an
action according to their group membership.

We define two entity types `SAB - User` and `SAB - Group`. We fill them with a few attributes useful
to manage entitlements in the SAB application. Finally, we add a navigation property in both entity
types in order to link `User` with `Group` with an "n-to-n" relationship.

![User-Group Example - SAB](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_sab.webp)

#### Example - RACF

The [RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) connector is used to
manage critical entitlements on the mainframe. RACF is a complex system, but IGA purposes only
require information about accounts and groups, as entitlements are given by group membership. Thus
the system can be simplified to be managed by Usercube following the User-Group model.

![User-Group Example - RACF](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_racf.webp)

For RACF, Usercube provisions only the link between accounts and groups.

#### Example - TSS

The TSS connector is similar to RACF in its use, but manages fine-grained entitlements at a higher
level than RACF. TSS is at least as complex as RACF, and its connector follows a similar
simplification as RACF's.

Usercube manages users (with their accounts) and groups called here profiles. Both users and
profiles are grouped into departments, themselves grouped into partitions. Entitlements are called
authorizations, and are linked to users through group (profile) membership.

![User-Group Example - TSS](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_tss.webp)

For TSS, Usercube provisions only the link between users and profiles.

Usercube receives a write access for users and profiles, only a read access for the rest of the
model. It is interesting to keep the whole model for query goals such as listing a given user's
entitlements.

**Recommendation: categorize accounts in types**

Many of the managed systems following this model, just like the User model, distinguish between
several types of accounts.

In further steps, you will be able to define one
[resource type](/docs/identitymanager/6.1/identitymanager/index.md) per
account type and map each one to a
[role](/docs/identitymanager/6.1/identitymanager/index.md)
for assignment and
[provisioning](/docs/identitymanager/6.1/identitymanager/index.md).

**Roles:** During the
[creation of the role catalog](/docs/identitymanager/6.1/identitymanager/index.md)
in the next steps, for this connector you can build roles based on the group-membership system
represented by users and profiles. Thus you will create
[navigation rules](/docs/identitymanager/6.1/identitymanager/index.md)
to represent the link between users and profiles.

#### Example - SDGE

The SDGE connector is used not to manage people but positions, so the application screens depend on
the user's position. In other words, Usercube is going to manage users' entitlements in SDGE through
their positions.

The object `User` or `Account` from the template, which contains users' accounts, is called here
`Worker`.

The object `Group` from the template is called here `Position` (grouped into organizations,
themselves grouped into organization types). It contains the way an entitlement is given, here
through a given position and wallet.

![User-Group Example - SDGE](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_sdge.webp)

For SDGE, Usercube provisions only workers and the link between workers and positions.

### Account-Profile-Transaction

#### Authorization mechanisms

The Account-Profile-Transaction model is better suited to represent a system, with the following
basic characteristics:

- To be able to perform an action or read a piece of data, a user must be granted one or several
  transactions. Transactions represent fine-grained entitlements. They can be associated to a type
  and conditions that restrict their use, such as a maximum per day or a context of validity.
- Transactions are not assigned directly to an account, but are packaged into profiles, which are
  then assigned to accounts, which are owned by users.
- Profiles can sometimes be classified into categories representing the sensitivity of the
  transactions they contain.
  > For example, profile categories can be `Privilege Profiles` for high privilege transactions on
  > sensitive data, and `Technical Profiles` for technical transactions related to system
  > administration.

#### Model

![Account-Profile-Transaction Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_profiletransaction.webp)

Thus you need to create one entity type to represent accounts, one for profiles, and one for
transactions.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are those constituting the link between entity types,
i.e. the navigation properties representing the packaging of transactions into profiles on the one
hand, and the assignment of profiles to accounts on the other hand. You can potentially add a
navigation property in the `Profile` entity type in order to categorize profiles within larger
profiles.

Instead of creating as many `Profile` objects as there are categories of profile, NETWRIX recommends
shaping the `Profile` object with a `category` attribute. Indeed, a multiple-object model
complexifies the addition of new profiles in the future. And as new profiles can be created in the
future though, then you must plan for it.

For example, instead of modeling two artificial types of profiles called `PP` for "Privilege
Profile" and `TP` for "Technical Profile", prefer a single object `P` that represents all profiles
using a specific attribute to differenciate technical from privilege profiles. This way, the model
sticks to the real capacity of the technical tool and all use-cases are considered.

See the schema below this note.

![Profiles Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_profiles.webp)

Transactions are not mandatory in a model. Most of the time, the profile packages are predefined
once and for all, or are the responsibility of the application owner. Then Usercube doesn't need to
manage the specific transactions for a profile directly inside the managed system. You can hence
avoid modeling transactions altogether. In this case, you fall back on the User-Group model with a
twist: if profile categories are relevant in the system's authorization mechanism, then you must
take them into account.

#### Example - TSS

The TSS connector is actually a mix of the [User-Group](#user-group) and Account-Profile-Transaction
models. The User-Group part is explained above.

![User-Group Example - TSS](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_tss-prof-trans.webp)

Transactions are called here authorizations.

For TSS, Usercube provisions only the link between users and profiles. Transactions (and the rest of
the model) are only readable.

### Star

#### Authorization mechanisms

The Star model is better suited to represent a system, where the ability to perform an action is
granted through the assignment of entitlements, based on several variable parameters, most often the
combination of a profile and at least one user data criteria.

> For example, you might want to give certain entitlements only to users who have an administrator
> profile and work in Marseilles.

As the parameter combination is not predetermined, the whole system can become highly complex with
the addition of data criteria.

Users are represented by the accounts they own.

**Comparison with other models:** while the [User-Group](#user-group) model grants an entitlement
via a group membership, the Star model grants said entitlement via a special authorization linking
the right criteria altogether (i.e. the right profile and other user parameters).

#### Model

![Star Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_star.webp)

Thus you need to create one entity type to represent accounts, one for each criterion, and another
one to represent the object linking acounts to criteria.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The difficulty of this model is to map everything to
[roles](/docs/identitymanager/6.1/identitymanager/index.md)
in the role model. In Usercube's role model, one assignment is always one role. But in this case, in
the managed system, an assignment is a tuple of things.

To map the tuple of things on a role, we have several choices:

1. Create a role per possible combination of tuple of things. This can quickly get out of hand as
   far as the number of created roles is concerned.
2. Use parametrized roles. The number of roles will be contained, but it is a little more
   complicated to configure.

The flexibility generated by parameters is particularly interesting for roles that incorporate
entitlements in a more complex way than application roles. If the information contained in a role is
complicated to deduce, then parameters can bring some clarity in the configuration. The objective is
always to minimize the number of distinct roles, and the number of roles that are assigned to one
given identity.

#### Example

Consider an application which manages entitlement assignment with different rules, according to
users' profiles, attachment areas and sites. Our example shows 4 profiles, 4 attachment areas and 3
sites. So a user may be assigned a given entitlement for a given profile, attachment area and site.

![Star Model Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_starmodel.webp)

For this connector, Usercube provisions only the links between accounts and linking objects, and the
links between linking objects and each criterion.

Concerning roles, integrators have two options:

- either create a specific role for `Profile_i` with `AttachmentArea_j` and `Site_k` for all
  available profiles, attachment areas and sites, which makes a total of 48 roles (for a quite
  simple example);
- or create a single role with parameters for profiles, attachment areas and sites.

## Procedure Example

**Step 1: choose the connector model.**

Let's say we are modeling an Active Directory, which handles authorization through the group
memberships of accounts. In other words, to assign an entitlement to an identity, we make the AD
account of said identity member of the corresponding AD group. That is exactly what the User-Group
template is designed to handle.

![User-Group Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_usergroup.webp)

**Step 2: adapt the model to your reality.**

We start by renaming the `Account` object as `AD_User` and the `Group` object as `AD_Group`.

![AD Example - Step 1](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_ad-step1.webp)

**Step 3: define useful data close to your reality.**

We shape these objects with the following attributes:

![AD Example - Step 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_ad.webp)

**Step 4: ensure that all objects have unique keys.**

Indeed we defined `objectGuid` as a key for both accounts and groups.

**Step 5: ensure the guidelines' enforcement.**

We could content ourselves with this model. The main benefit of this model is to closely mimic the
reality of the AD authorization mechanism. But we'd like to go a bit further, applying a "keep it
open to changes" approach.

Observe the similarities between `AD_User` and `AD_Group`. There are many attributes repeating
between the two entity types.

We can simplify: prefer a single object `AD_Entry` that can represent both users and groups. The
difference between the two types of object will be made clear via specific properties like
`objectCategory`, `member` and `memberOf`.

Beyond avoiding repetition, this makes the model easily adaptable if new elements pop up.

> For example, we could want to include computers or organizational units in the model in the
> future. Instead of creating two new additional objects `AD_Computer` and `AD_OU`, the existing
> object `AD_Entry` can represent them both at no additional modeling cost. Even though we could add
> `AD_Computer` and `AD_OU` without merging groups with entries, designing `AD_Entry` with all these
> attributes provides the means to add objects without creating new entity types.
>
> ![AD_Entry Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_adentry.webp)

# Organize Resources' Datasheets

How to change the default display of the resource data from this entity type, by creating display
groups.

## Overview

Here you will learn how to change how a resource's data is organized in the UI, by creating display
groups.

If you do not add display groups, Usercube displays the data of this entity type's resources in
alphabetic order.

> For example, for an HR user without any display groups:
>
> ![Without Display Groups](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_without_v603.webp)

## Organize Resources' Datasheets

Organize resources' datasheets by proceeding as follows:

1. Start by creating the entity type with its
   [scalar properties](/docs/identitymanager/6.1/identitymanager/index.md)
   and
   [keys](/docs/identitymanager/6.1/identitymanager/index.md).
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the
   top right corner.
3. On the entity type's definition page, click on the **Display** tab.

   ![Display Groups](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_v603.webp)

4. Click on the arrow to see the entity type's properties listed in the alphabetical order, and drag
   and drop the properties to customize the order.

   > For example:
   >
   > ![Display Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example1_v603.webp)

5. When needing to group properties together, click on **Add Display Group**, fill in the fields and
   select from the pop-up window the properties to be grouped.

   ![Display Group Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_fields_v603.webp)

   - `Identifier`: must be unique among display groups, without any whitespace, and be
     C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
   - `Name`: will be displayed in the UI to indicate the property group.
     > For example:
     >
     > ![Display Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example2_v603.webp)
     >
     > The entity type's resources would look like:
     >
     > ![Display Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example2results_v603.webp)

6. Click on **Save & Close**.

   Changes in display groups won't take effect until the next
   [`Update-EntityPropertyExpressionsTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
   runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

# Set Resources' Display Names

How to change the value of the
[display name](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
for resources of an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Overview

Here you will learn how to change a resource's display name, which is the name used by the UI to
identify a resource of an entity type. Its value is computed from existing properties. For example
for the entity type `HR - User`, integrators may set the display name to:  
`<Employee_Id> - <Last_name> <First_name>`.

![Display Name - Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displaynameexample_v600.webp)

If you do not set your own display name, Usercube provides a default value based on the first scalar
property after alphabetizing all the properties whose name contains `name`.

## Set the Resource's Display Name

Set the resource's display name by proceeding as follows:

1. Start by creating the entity type with its
   [scalar properties](/docs/identitymanager/6.1/identitymanager/index.md)
   and
   [keys](/docs/identitymanager/6.1/identitymanager/index.md).
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the
   top right corner.
3. On the entity type's definition page, click on the **Settings** tab.

   ![Display Name - Property Path](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displayname_v603.webp)

4. Set the display name. As a display name, you can use either the value of an existing property, or
   compute an
   [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md)
   based on existing properties.

   > A resource from `AD - Entry` can be displayed using its `userPrincipalName` with predefined
   > functions.
   >
   > ![AD Entity Type - Display Name](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4_v602.webp)
   >
   > ![AD Entity Type - Display Name Result](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4-result_v602.webp)

   > Another example from the HR connector (User entity type):
   >
   > ![HR User Entity Type - Display Name](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr_v602.webp)
   >
   > ![HR User Entity Type - Display Name Result](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr-result_v602.webp)

5. Click on **Save & Close**.

   Changes inside connectors won't take effect until the next
   [synchronization](/docs/identitymanager/6.1/identitymanager/index.md).
   More specifically, changes in display names won't take effect until the next
   [`Update-EntityPropertyExpressionsTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
   runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Troubleshooting

#### If no property appears in the display name auto-completion, then�

![No Property](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_troubleprop_v602.webp)

Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top
right corner of the screen.

# Create the Entity Type

How to create the technical container of an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Overview

Here, you will learn how to create an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md):
the shell that harbors the (scalar and navigation) properties which describe a given set of
resources related to one managed system.

## Create the Entity Type

Create the entity type by proceeding as follows:

1. Access the connector's page by clicking on the **Connectors** button on the home page in the
   **Configuration** section, then on the relevant connector.

   ![Home page - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, in the **Entity Types** frame, click on the addition button.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the information fields.

   ![Entity type creation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_entitytypecreation_v602.webp)

   - `Identifier`: must be unique among entity types, without any whitespace, and be C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
     NETWRIX recommends using `<connector>_<notion>` in the singular.
   - `Name`: will be displayed in the UI to identify the entity type.
   - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
     will be displayed with the entity type in the left menu of the home page.
   - `Auto Complete in Pickers`: can be set once properties are created (and saved) so that, when
     using a searchbar for selected properties, Usercube suggests existing entries.

4. In the entity type's **Properties** section, choose a source so that the connection provides the
   source's data structure.

   ![Properties' source](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

   > Let's use the example of an AD connector. We create an entity type `AD - Entry` to gather the
   > valuable information from the AD, i.e. all the AD entries (groups and accounts) which we want
   > to classify, with the properties that are useful for assignment management.
   >
   > The AD connector uses as a source `Connection Active Directory - entries`. Its structure was
   > retrieved when we
   > [refreshed the schemas](/docs/identitymanager/6.1/identitymanager/index.md)
   > of the `Active Directory` connection, thus retrieving the attributes from the Active Directory
   > and storing them temporarily on the agent side, inside CSV files.

## Next Steps

To continue,
[define at least one scalar property](/docs/identitymanager/6.1/identitymanager/index.md)
for this entity type.

## Troubleshooting

#### If there are no connection tables available in the **Source** dropdown list of an entity type, then�

![Properties' source](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

Ensure that there are existing connections:

- if this is the case, then click on
  [**Refresh all schemas**](/docs/identitymanager/6.1/identitymanager/index.md)
  on the connector page, and verify that there is no error.
- if not, then you must
  [create at least one connection](/docs/identitymanager/6.1/identitymanager/index.md).

#### If there is a message stating to refresh the connection's schema, then�

![No Connection Table Error](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_troubleshootingschema_v603.webp)

Start by making sure that the connection's schema is refreshed by clicking on
[**Refresh all schemas**](/docs/identitymanager/6.1/identitymanager/index.md)
on the connector page, and verify that there is no error.

If the message is still displayed, then it means that the previously selected connection table no
longer exists in the managed system. In this case, either the table's name simply changed, or the
table is not relevant anymore. Then you should find a relevant table in the **Source** dropdown
list.

# Create an Entity Type

How to create an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated
resources (instances of said model) and not the intent (that would be a
[resource type](/docs/identitymanager/6.1/identitymanager/index.md)).
It defines a set of
[properties](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md#properties)
describing said resources and linking them together.

In other words, an entity type is supposed to model the representation of a certain group of
resources inside Usercube. It is a relational model, made of properties
([scalar properties](/docs/identitymanager/6.1/identitymanager/index.md))
and links between entity types
([navigation properties](/docs/identitymanager/6.1/identitymanager/index.md)),
both described later.

![Entity Type - Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

The configuration of entity types depends entirely on the
[previously established model](/docs/identitymanager/6.1/identitymanager/index.md).

Entity types will impact the import of the managed system's resources, and the way said resources
are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                                                                                                                                                                                                                  | Output      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [Connection](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Refreshed schemas](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Connector's data model](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Entity type |

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [Create the entity type](/docs/identitymanager/6.1/identitymanager/index.md).
2. [Define the scalar properties](/docs/identitymanager/6.1/identitymanager/index.md)
   to be used in the entity type.
3. [Choose the primary key and key properties](/docs/identitymanager/6.1/identitymanager/index.md)
   which will identify resources.
4. [Define navigation properties](/docs/identitymanager/6.1/identitymanager/index.md)
   if applicable.
5. [Customize the display names](/docs/identitymanager/6.1/identitymanager/index.md)
   for the entity type's resources.
6. [Organize the datasheets](/docs/identitymanager/6.1/identitymanager/index.md)
   for the entity type's resources in Usercube.

For some connectors, Usercube provides a template to automatically create a basic configuration. See
below this note.

> For example, the Active Directory template automatically creates an AD entity type and two
> resource types for a standard AD connector. The template is available for a connector with an AD
> connection but no entity types.
>
> ![Entity Type - AD Template](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytype_template_v602.webp)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the
process, follow the
[verification procedure indicated for a synchronization](/docs/identitymanager/6.1/identitymanager/index.md).

# Select Primary Keys

How to choose
[key properties](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
and a
[mapping key](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
in order to uniquely identify the
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)'s
resources at different points in a resource's lifecycle.

## Overview

Here you will learn how to select keys from among the entity type's scalar properties, in order to
ensure the unique identification of resources at different times.

It is important to show caution when choosing the mapping key and key properties for a set of data.
Every extracted resource must have unique keys in order to be uniquely identified in all IGA actions
performed by Usercube.

### Key properties

The key property of an entity type is a property chosen from among scalar properties. A key property
is used only in the XML configuration, but required when working both from the UI or from the XML
configuration.

The purpose of key properties is to uniquely identify a resource from the entity type in the XML
configuration. In particular, some rules need to fetch a resource, by querying the key property's
column in Usercube's database.

> For example a navigation rule involving an AD group can be written:
>
> ```
>
> <NavigationRule Property="memberOf" Resource="CN=SG_APP_AG002,OU=Applications,DC=acme,DC=internal" SingleRole="AG002" />
>
> ```
>
> Usercube needs to know what column to query to find the right resource via `CN=SG_APP_AG002...`.
> In this example we must choose `dn` as a key property because it is the `dn` property we use to
> represent the AD resource.

Key properties must be unique and immutable. They do not have to be immutable but they must enable
resources to be uniquely identifiable at t time.

> The `dn` attribute of a resource in the Active Directory usually depends on the resource's
> position, which often changes during the resource's lifecycle. However, `dn` is unique at a given
> time, and rather useful to define for example
> [query rules](/docs/identitymanager/6.1/identitymanager/index.md)
> for `parentdn`.

Only one key property is required, but using several key properties can sometimes help with the
rules in the XML configuration. Usercube will search the columns of each key property, one by one,
until a corresponding resource is found.

> For example, the AD's unique identifier is `objectGuid`. However, integrators may prefer to use
> `dn` because it constitutes a clearer group identification from a user's point of view. Plus,
> `objectGuid` is environment-specific so using it can complexify a situation where we want to move
> the configuration from an environment to another.
>
> Since an `objectGuid` can still be an interesting identifier, we want to have both the `dn` and
> the `objectGuid` as key properties. In this case, Usercube will be able to fetch a resource in a
> rule using said resource's `dn` or `objectGuid`.

### Mapping key

The mapping key is also chosen from among scalar properties, and serves to uniquely identify any
resource during
[synchronization](/docs/identitymanager/6.1/identitymanager/index.md).
It must be unique and immutable, i.e. must not change during the whole lifecycle of the resource.

> A mapping key cannot be based on properties subject to change, such as the display name of any
> object, or users' title which could be renamed.
>
> For example, resources from the AD are usually identified through the `objectGuid` attribute which
> is therefore specified as mapping key.

Commonly used mapping keys are:

- `objectGuid` for the Active Directory
- `objectid` for Microsoft Entra ID
- `entryUuid` for LDAP
- `Identifier` for the directory
- `Login` for SAB
- `sapid` for SAP
- `sys_id` for ServiceNow
- `EmployeeId` for the HR

Since the mapping is able to uniquely identify any resource, NETWRIX recommends that your mapping
key is always part of your key properties.

## Select the Entity Type's Keys

Create an entity type by proceeding as follows:

1. Start by
   [defining the entity type's scalar properties](/docs/identitymanager/6.1/identitymanager/index.md).

   ![Keys](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_keys_v522.webp)

2. In the entity type's **Properties** section, choose the key properties.
3. Choose the mapping key.
4. Click on **Create & Close** > **Create** to save your changes.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

After the entity type is created with its scalar properties and keys, you can
[define navigation properties](/docs/identitymanager/6.1/identitymanager/index.md)
and/or
[set the resources' display name](/docs/identitymanager/6.1/identitymanager/index.md).

# Define Navigation Properties

How to define the properties which describe the
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)'s
relationships to other entity types.

## Overview

Here you will learn to define navigation properties, which contain scalar values just like
[scalar properties](/docs/identitymanager/6.1/identitymanager/index.md),
but which are also linked to and point to other properties, from the same entity type or to another
entity type.

> For example, `memberOf` can contain a list of groups thus linking a user to groups, and a group to
> other groups. In the UI, `memberOf` is displayed just like scalar properties, but you can click on
> its values to access each group in the list. Here for the AD entry `ADM Vidal Pierre`:
>
> ![Navigation Property - memberOf](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_memberof_v600.webp)
>
> Clicking on one of these groups will display said group's properties including the other side of
> the `memberOf` property, called `member`, which contains the list of users and groups which are
> members of the group. Here for the AD group `SG_APP_RAY_0_LDAP_READLDSFEDE`:
>
> ![Navigation Property - member](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_member_v600.webp)

> As another example, a department needs to be linked to a manager who is an existing user. So the
> user identifier is used in the `Manager` property to create the link between the department and
> the manager/user. In the UI, when looking at a given department data, `Manager` is displayed just
> like scalar properties, but you can click on its value to access the page of the department's
> manager.
>
> ![Navigation Property - Manager](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_manager_v600.webp)
>
> Clicking on the manager will display said user's properties including the `Department` property,
> which points back to the managed department.
>
> ![Navigation Property - Managed Department](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_managerof_v600.webp)

Navigation properties can create a link:

- inside an entity type;
- between two entity types from the same connector;
- between two entity types from different connectors.

Inside Usercube, a navigation property has a flip side, one for each linked element.

For example in the AD, the group membership of a user is represented by the properties `member` for
groups (containing a list of users) and `memberOf` for users (containing a list of groups).  
However, some managed systems only have one of these two sides.

The AD only uses `member` from among groups' properties. Users don't have a `memberOf` property.  
But, as Usercube uses and links both sides, it is able to "translate" the information, so that a
navigation property, which actually exists in the managed system, can be linked to the two
corresponding navigation properties in Usercube.

When importing data to Usercube, the `member` property from the AD will update the `member` property
in Usercube, and Usercube will update the `memberOf` property accordingly.

Most often, properties inside Usercube are each linked to a property from the managed system. This
way, data from the managed system can be imported into Usercube and stored in the corresponding
property. These properties are mapped from the source (see step 3).

If the property to be created does not exist in the external source, it is impossible to map the
property, but it can still be created with **+ Add a navigation property**.

This can be used to store data needed for assignment management, but which you cannot write to the
connected system. Since these properties do not exist in the connected system, they cannot be
written or read.

[See the example for scalar properties](/docs/identitymanager/6.1/identitymanager/index.md).

## Define the Entity Type's Navigation Properties

Define the entity type's navigation properties by proceeding as follows:

1.  Start by
    [declaring the entity type](/docs/identitymanager/6.1/identitymanager/index.md).
2.  In the entity type's **Properties** section, click on **Navigation Properties** tab.
3.  Click on **Map a navigation property** to display existing columns from the external source, and
    select the properties to be used as navigations in the entity type.
4.  Fill in the information fields.

    ![Navigation Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_navigationproperties_v602.webp)

    If you map a column from the source, then the first line of the navigation property is about
    said column. The second line is about the new property to be linked to the first one, always of
    the entity type.

    - **APPLICATION METADATA**: fields about the display of the properties inside Usercube.

      - `Identifier`: must be unique among properties, without any whitespace, and be
        C#-compatible.
        [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
      - `Entity Type`: always the entity type for the second property, but the first property can
        be mapped from any existing entity type in the application.
      - `Storage Indicator`: describes the association that can be **mono-valued** (meaning 1-to-1
        or many-to-1) or **multi-valued** (meaning 1-to-many or many-to-many).

        For one entity type, Usercube can store up to 25 optimized mono-valued navigation
        properties. For performance purposes, NETWRIX recommends choosing
        `optimized mono-valued` as a storage indicator as often as possible.

        If the entity type contains more than 25 mono-valued properties, then a priority must be
        established, choosing to optimize:

        1. properties displayed in forms and search bars;
        2. properties used for the computation of expressions and the role model;
        3. other properties.

      - `Name`: will be displayed in the UI to identify the property.

        **Names and identifiers**:

        A mono-valued property is supposed to be written in the singular, a multi-valued
        property is supposed to be plural. This convention facilitates maintenance.

        Entity properties' names and identifiers cannot be "Id".

    - **EXTERNAL SYSTEM**: fields about the corresponding properties inside the connected
      application.

      - `Source`: connection that leads to the source file(s).

        You can **choose the source** of a new navigation property by:

        - mapping the property from source so that the connection table is automatically
          selected as the table from this entity type;
        - opening the dropdown list to choose a connection table from among the other entity
          types from this connector;
        - clicking on the search icon to choose a connection table from among all other
          connectors.

      - `Source Column`: column in the external system where the property data comes from.
      - `Column Content`: property of the source column used to identify any resource in the
        association.

                      > For example, the source column ```manager``` contains the ```dn``` of users to make the association, thus we choose ```dn``` as the source content.

        > For example, `AD - Entry` uses the following navigation properties:
        >
        > `Entries`; `assistant`; `assistantOf`; `manager`; `directReports`; `memberOf`;
        > `member`; `parentdn`; `children`.
        >
        > ![AD Entity Type - Navigation Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_examplead3_v603.webp)

5.  Click on the Gear symbol to add advanced settings if needed.

    ![Advanced Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

    - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
      will be displayed with the property among users' data.
    - **Source Expression**: expression that defines the property based on at least one source
      object. Can be defined by a property path and/or an
      [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).

      > For example, the scalar property `isUnused` is created to spot unused accounts via a
      > combination of `accountExpires` and `lastLogonTimestamp`:
      >
      > ![Advanced Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

    - `Flexible Comparison Expression`: expression that inserts adaptable
      [comparison flexibility](/docs/identitymanager/6.1/identitymanager/index.md)
      when using a searchbar for the property.
    - `History Precision`: time period over which Usercube historically records only one value.

      > For example, the scalar property `lastLogonTimestamp` of an AD resource is modified every
      > time the user connects to the application. Every modification triggers the historization
      > of all properties for said resource inside the database. Hence, the database can quickly
      > become full of data. In order to lighten the database, we can set the `History Precision`
      > option to one week (10080 minutes) so that resources are historized once a week at most
      > (concerning changes on `lastLogonTimestamp`). In the meantime, in case of a change,
      > instead of historizing resources with all their properties, only `lastLogonTimestamp` is
      > updated with the new value.

    Clicking on **Continue** closes the pop-up window so that you can continue the configuration of
    the entity type. But it does not save anything.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

After the entity type is created with its scalar properties and keys, and navigation properties, you
can
[set the resources' display names](/docs/identitymanager/6.1/identitymanager/index.md).

# Define Scalar Properties

How to define the simple, or scalar, properties of an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)'s
resources.

## Overview

Here you will learn how to define scalar properties, which contain scalar values, mostly based on
the properties from the corresponding managed system.

> For example: `DisplayName`; `Email`; `Identifier`; `StartDate`; etc.
>
> ![Scalar Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarex_v600.webp)

Most often, properties inside Usercube are each linked to a property from the managed system. This
way, data from the managed system can be imported into Usercube and stored in the corresponding
property. These properties are mapped from the source (see step 2).

If the property to be created does not exist in the external source, it is impossible to map the
property, but it can still be created with **+ Add a scalar property**.

This can be used to store data needed for assignment management, but which you cannot write to the
connected system. Since these properties do not exist in the connected system, they cannot be
written or read.

For example, we may need to create in the AD the property `isUnused` to spot unused accounts. It
would be configured with a C# expression based on other properties from the same entity type. These
properties, such as `accountExpires` and `lastLogonTimestamp`, are each linked to a property from
the AD, while `isUnused` is for governance and surveying AD accounts.

Such properties do not exist in the AD, and thus will never be written to the AD, nor overwritten by
any property from the AD, but will be recalculated based on the other properties.

## Define the Entity Type's Scalar Properties

Define the entity type's scalar properties by proceeding as follows:

1. Start by
   [declaring the entity type](/docs/identitymanager/6.1/identitymanager/index.md).
2. In the entity type's **Properties** section, click on **Map scalar properties** to display
   existing columns from the external source, and select the properties to be used in the entity
   type.

   ![Map from source](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertiesmap_v602.webp)

   You need to configure at least one property to be able to define primary keys later, and thus
   create an entity type.

3. Fill in the information fields.

   ![Scalar properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarproperties_v603.webp)

   - **APPLICATION METADATA**: fields about the future display of the properties inside Usercube.

     - `Identifier`: must be unique among properties, without any whitespace, and be
       C#-compatible.
       [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
     - `Name`: will be displayed in the UI to indicate the property.

       Entity properties' names and identifiers cannot be "Id".

     - `Format`: format used for the property's display in Usercube, for search tools and
       computation based on said property. Do not keep the default string format if the property
       is not a string.
       [See more details on available formats](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/entity-property-mapping.md).

       > For example, dates, booleans, integers, etc.

       For one entity type, Usercube can store up to 128 scalar properties of any format, and
       an unlimited number of binaries which are stored differently. Among these 128
       properties, only 4 can be formatted as more-than-443-character strings (with a limit of
       4,000 characters), and 124 as less-than-443-character strings.

   - **EXTERNAL SYSTEM**: fields about the corresponding properties inside the connected system.

     - `Source Column`: column in the external system where the property data comes from.
       Advanced settings can be configured according to the description below.
     - `Format`: for mapped properties, format used to convert a value during export and fulfill
       from Usercube to the connected system, whenever different from a string.
       > To continue with the `AD - Entry` entity type, we map all the properties we need:
       >
       > `accountExpires`; `c`; `cn`; `comment`; `company`; `department`; `description`;
       > `displayName`; `division`; `dn`; `employeeId`; `employeeNumber`; `employeeType`;
       > `extensionAttribute10`; `extensionAttribute11`; `givenName`; `groupType`;
       > `homeDirectory`; `homeDrive`; `initials`; `l`; `lastLogonTimestamp`; `mail`; `mobile`;
       > `objectCategory`; `objectGuid`; `objectSid`; `ou`; `pwdLastSet`; `rdn`;
       > `sAMAccountName`; `scriptPath`; `sn`; `st`; `telephoneNumber`; `thumbnailPhoto`;
       > `title`; `uid`; `userAccountControl`; `userPrincipalName`; `whenCreated`.
       >
       > We create the properties that do not exist in the external system: `AppName`;
       > `businessCategory`; `isUnused`; `thumbnailPhotoTag`.
       >
       > Some of them have a specific format in case of provisioning to the managed AD like
       > `thumbnailPhoto` of format `Binary` or `objectCategory` as `RDN` or `pwdLastSet` as
       > `1601 Date`.
       >
       > ![AD Entity Type - Scalar Properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_examplead2_v602.webp)

4. Click on the Gear symbol to add advanced settings if needed.

   ![Advanced Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

   - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
     will be displayed with the property among users' data.
   - **Source Expression**: expression that defines the property based on at least one source
     object. Can be defined by a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).

     > For example, `isUnused` is created to spot unused accounts via a combination of
     > `accountExpires` and `lastLogonTimestamp`:
     >
     > ![Advanced Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

   - `Flexible Comparison Expression`: expression that inserts adaptable
     [comparison flexibility](/docs/identitymanager/6.1/identitymanager/index.md)
     when using a searchbar for the property.
   - `History Precision`: time period over which Usercube historically records only one value.

     > For example, the `lastLogonTimestamp` property of an AD resource is modified every time
     > the user connects to the application. Every modification triggers the historization of all
     > properties for said resource inside the database. Hence, the database can quickly become
     > full of data. In order to lighten the database, we can set the `History Precision` option
     > to one week (10080 minutes) so that resources are historized once a week at most
     > (concerning changes on `lastLogonTimestamp`). In the meantime, in case of a change,
     > instead of historizing resources with all their properties, only `lastLogonTimestamp` is
     > updated with the new value.

   Clicking on **Continue** closes the pop-up window so that you can continue the configuration of
   the entity type. But it does not save anything.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

Before saving, you must first
[choose the entity type's keys](/docs/identitymanager/6.1/identitymanager/index.md)
from among scalar properties.

## Troubleshooting

#### If the Format column is not displayed in the External System part, then�

![Scalar properties](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertieswithoutformat_v522.webp)

Refresh the connections' schemas.

# Connect to a Managed System

How to create a new
[connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
using the provided SaaS
[agent](/docs/identitymanager/6.1/identitymanager/index.md).

Usercube provides demo applications
([Banking](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/index.md)
and
[HR](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/index.md))
to help set up connectors, test them, and understand Usercube's abilities towards external systems.

## Overview

Connectors are the mechanisms that enable Usercube to read and write data to/from your
organization's systems. The
[feedback](/docs/identitymanager/6.1/identitymanager/index.md) mechanism
ensures Usercube's reliability.

In this documentation, we talk about managed systems (sometimes called external systems) to refer to
third-party applications, i.e. the applications used in your organization, such as Active Directory,
ServiceNow, EasyVista, SAP, SharePoint, etc.

A connector, therefore, acts as an interface between Usercube and a managed system.

![Connector Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

NETWRIX strongly recommends the creation of one connector for one application.

> For example, integrators may create an `AD` connector with the goal of importing an Active
> Directory's data into Usercube, and writing to the Active Directory from Usercube, either manually
> for administration accounts, or automatically for basic accounts.
>
> Integrators may create a `SharePoint` connector in order to manage read and write entitlements for
> users in SharePoint.

### Data Flows

In the early steps of a project, we'll consider most of our connectors to be outbound, i.e. Usercube
will feed data into connected managed systems.

![Outbound System=](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connectorcreation_outbound.webp)

In this case, data flows between Usercube and the managed system are also called:

- [synchronization](/docs/identitymanager/6.1/identitymanager/automation/synchronization/index.md)
  in the "managed system-to-Usercube" direction;
- [provisioning](/docs/identitymanager/6.1/identitymanager/identity-management/provisioning/index.md) in
  the "Usercube-to-managed system" direction.

For a connector's synchronization, Usercube provides tools to perform a basic extraction of the
system's data in the form of CSV files. These files are cleaned and loaded into Usercube. In other
words, synchronizing means taking a snapshot of the managed system's data and loading into Usercube.

For provisioning, Usercube generates provisioning orders and the connector provides tools to either
automatically write these orders to the managed system or to create a ticket for manual
provisioning.

> For example, we can use the data from Usercube's
> [identity repository](/docs/identitymanager/6.1/identitymanager/index.md)
> to fill in later the AD's fields, such as users' display names based on their first names and last
> names from the repository.

Usercube can also benefit from inbound connectors, that will write data to Usercube's central
identity repository. While both inbound and outbound connectors allow data to flow both ways, they
do not work in the same manner.
[See more details about this advanced topic](/docs/identitymanager/6.1/identitymanager/index.md).

### Technical principles

Usercube's connectors all operate on the same basic principles. Technically speaking:

> For example, let's say that we want to connect Usercube to our Active Directory, or AD.

- a
  [connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  must be created, first as a named container which will include the connections and entity types
  related to one managed system;

  > We create a connector named `AD` (so far, an empty shell).

- a connector is linked to an
  [agent](/docs/identitymanager/6.1/identitymanager/index.md) which acts
  as the go-between for Usercube's server and the managed system;

  > Our `AD` connector uses the provided SaaS agent.

- a
  [connection](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  describes the technology used that enables data to flow back and forth between Usercube and the
  managed system;

  > We want to use a connection `Directory/Active Directory` to perform synchronization and
  > automated provisioning, and a second connection `Ticket/identitymanager` to perform manual
  > provisioning through Usercube.

  You can find standard connections dedicated to one application (AD, Microsoft Entra ID, etc.),
  and generic connections to communicate with any application (CSV, Powershell, RobotFramework,
  SQL, etc.).

- the shape of the extracted managed system's data is modeled by
  [entity types](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  (we will use the term resource to refer to an entity type that has been instantiated);

  > We create a single entity type `AD - Entry` which contains all the attributes that will
  > describe its resources, i.e. AD groups and users. The attributes include the department, the
  > employee identifier, the manager, the group membership (`member`/`memberOf`), the dn, the
  > parent dn, etc.

- the intent of resources within the managed system is made clear by categorizing resources into
  [resource types](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).
  More details are given when tackling
  [categorization](/docs/identitymanager/6.1/identitymanager/index.md).

  > We categorize AD resources into distinct resource types: `AD User (nominative)` for basic
  > accounts, which we want Usercube to provision automatically; `AD User (administration)` for
  > sensitive administration accounts, which we want to provision manually through Usercube.

![Connector Technical Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/connect-system/connectorcreation_connectortechnicalschema.webp)

A connector requires at least one connection and one entity type.

When provisioning a managed system, the corresponding connector also needs at least one resource
type.

**Local vs. Saas agents:** To simplify things, Usercube has made it possible to start configuring
connectors without installing a local
[agent](/docs/identitymanager/6.1/identitymanager/index.md) in your
organization's network. Instead, you can use the agent integrated with Usercube's server in the
Cloud (SaaS agent).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
functional and technical details of the application.

| Input                                                                                                                                                                                                                                                                                      | Output                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Administrator account for the [development environment](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) [User profiles](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Connector Connected System |

## Create a Target Connector

For one managed system, create a connector by proceeding as follows:

1. Outside Usercube,
   [model](/docs/identitymanager/6.1/identitymanager/index.md)
   the system's data structure.
2. [Create a connector](/docs/identitymanager/6.1/identitymanager/index.md)
   for said managed system.
3. Enable the technical transfer of data by
   [creating and configuring connections](/docs/identitymanager/6.1/identitymanager/index.md).
4. [Set up entity types](/docs/identitymanager/6.1/identitymanager/index.md)
   to represent the data model decided upon in step 1.

**Connector modification:** The process for modifying a connector is not so different from the
process for creating a connector, as you mainly modify the fields specified during creation.
However, keep in mind that a connector must be deactivated before modification, in order to withdraw
the connector's synchronization- and provisioning-related tasks from any jobs. See below this note.

You can activate the connector again at any time using the same button.

![Jobs Results Dashboard](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_dashboard_v522.webp)

## Next Steps

Once the connector has been created, you can start
[configuring synchronization](/docs/identitymanager/6.1/identitymanager/index.md).

# Install the Development Environment

How to connect to Usercube's SaaS environment to set up the development environment.

When using Usercube's on-premise option, follow the procedure of
[installation of the bootstrap version](/docs/identitymanager/6.1/identitymanager/getting-started/quick-start.md).

## Overview

The installation of Usercube's production environment usually takes time, while we want to start
configuring at once.

This is why Usercube offers a bootstrap version of the application, useful as a development
environment.

## Participants and Artifacts

Integrators must be in contact with NETWRIX to be able to get infos about the SaaS tenant URL and
authentication.

| Input | Output                  |
| ----- | ----------------------- |
| -     | Development environment |

## Install the Development Environment

The documentation is not yet available for this part and will be completed in the near future.

## Verify Environment Installation

In order to verify the process, try to authenticate to Usercube server, and access the configuration
screens.

## Next Steps

Once the development environment is ready, integrators can start
[creating the workforce directory](/docs/identitymanager/6.1/identitymanager/index.md).

# Set Up

- #### [Install the Development Environment](/docs/identitymanager/6.1/identitymanager/index.md)

  How to connect to Usercube's SaaS environment to set up the development environment.

- #### [Create the Workforce Repository](/docs/identitymanager/6.1/identitymanager/index.md)

  How to initiate the repository for workforce identities by loading identities into Usercube with
  the right attributes.

- #### [Configure Unique Property Generation](/docs/identitymanager/6.1/identitymanager/index.md)
  How to configure Usercube to generate unique identifiers, mails and logins for any user who does
  not have them already.- ####
  [Load Identities to Usercube](/docs/identitymanager/6.1/identitymanager/index.md)
  How to load identities into Usercube for the first time using a basic data model in the form of
  a template MS Excel file.- ####
  [Template Description](/docs/identitymanager/6.1/identitymanager/index.md)
  Description of the MS Excel template for the creation of the identities repository.- ####
  [Adjust the Workforce Data Model](/docs/identitymanager/6.1/identitymanager/index.md)
  How to select the properties to be part of the data model for the workforce repository
  (therefore displayed in the UI), and choose their optimal displaying mode.
- #### [Configure a User Profile](/docs/identitymanager/6.1/identitymanager/index.md)

  How to tweak the permissions for actions within Usercube, for a standard set of basic Usercube
  profiles.

- #### [Configure Onboarding Workflows](/docs/identitymanager/6.1/identitymanager/index.md)

  How to adjust the parameters of onboarding workflows.

- #### [Connect to a Managed System](/docs/identitymanager/6.1/identitymanager/index.md)

  How to create a new connector using the provided SaaS agent.

- #### [Model the Data](/docs/identitymanager/6.1/identitymanager/index.md)
  How to choose the appropriate model for a connector's data.- ####
  [Create the Connector](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create the technical container of a connector.- ####
  [Create a Connection](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create a connection inside a connector and choose the appropriate package.- ####
  [Create an Entity Type](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create an entity type that corresponds to the connector model.
- #### [Synchronize Data](/docs/identitymanager/6.1/identitymanager/index.md)

  How to launch data synchronization, i.e. read managed systems' data and load it into Usercube.

- #### [Categorize Resources](/docs/identitymanager/6.1/identitymanager/index.md)

  How to correlate managed systems' resources with identities, classifying resources into resource
  types.

- #### [Create a Resource Type](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create the container for future correlation and classification rules inside a given
  managed system.- ####
  [Correlate Resources](/docs/identitymanager/6.1/identitymanager/index.md)
  How to define correlation rules to match up resources across systems, usually accounts with
  their owner.- ####
  [Classify Resources](/docs/identitymanager/6.1/identitymanager/index.md)
  How to define classification rules in order to classify remaining uncorrelated resources,
  assigning them resource types.
- #### [Create a Provisioning Rule](/docs/identitymanager/6.1/identitymanager/index.md)

  How to define scalar rules, navigation rules and/or query rules to compute and provision target
  resources values from source resources values.

- #### [Create Resources](/docs/identitymanager/6.1/identitymanager/index.md)
  How to define resource type rules to create new (target) resources for given users, computing
  and provisioning their properties based on source resources.- ####
  [Compute a Scalar Property](/docs/identitymanager/6.1/identitymanager/index.md)
  How to define scalar rules to compute and provision the values of scalar properties for target
  resources based on source resources.- ####
  [Compute a Navigation Property](/docs/identitymanager/6.1/identitymanager/index.md)
  How to define navigation rules and/or query rules to compute and provision the values of
  navigation properties for target resources based on source resources.
- #### [Create Roles in the Role Catalog](/docs/identitymanager/6.1/identitymanager/index.md)

  How to define single roles to model entitlements, and organize them inside the role catalog,
  basis of the role model.

- #### [Create Roles in Bulk](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create role naming rules, which create single roles using existing naming conventions
  from the managed system.- ####
  [Create a Category](/docs/identitymanager/6.1/identitymanager/index.md)
  How to structure roles into categories.- ####
  [Create a Role Manually](/docs/identitymanager/6.1/identitymanager/index.md)
  How to create single roles manually.
- #### [Assign Users a Profile](/docs/identitymanager/6.1/identitymanager/index.md)

  How to assign Usercube's access permissions to users through profiles.

- #### [Manage Role Officers](/docs/identitymanager/6.1/identitymanager/index.md)
  How to manage role officers in order to ensure the approval for entitlement assignments.

# Adjust the Workforce Data Model

How to select the properties to be part of the data model for the workforce repository (therefore
displayed in the UI), and choose their optimal displaying mode.

## Overview

After you created the initial version of the workforce repository, Usercube provides an easy method
to optimize the structure of the data model, for example preventing empty fields in the UI.

According to the number of resources in the organization, Usercube's analysis of the data model's
usage suggests:

- to remove unused entity types (country, site, gender, subsidiary, etc.) from the data model and
  from the UI;
- to remove unused properties (phone number of a user, position end date, town of a site, etc.) from
  fields to fill in the workflows for entity creation, except for properties that are essential to
  Usercube's operation and thus ensured to be part of the data model (e.g. the contract's start
  date);
- an optimized display mode in the UI for all entity types, and for the fields which link to another
  entity (manager of a department, contract type of a user, gender of a user, etc.) and thus require
  a query tool (dropdown box, search bar, etc.).

You can then make your own choice about activating/deactivating/re-activating any property, and you
will be able to make modifications at any time.

## Participants and Artifacts

Integrators may need the help of the HR department who know the organization.

| Input                                                                                                                                                                            | Output                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [Usercube's server](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Initial workforce repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Adjusted workforce repository |

## Adjust the Data Model

Adjust the data model by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Data Model** page, click on the following icon to adjust the data model
   to your specific situation.

   ![Scan Data Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/iconscandatamodel_v602.svg)

   ![Scan Data Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel_v60.webp)

   Usercube counts the entries for each attribute and suggests a quantification:

   - Empty attributes are deactivated as they should be excluded to simplify the data model.
   - Non-empty attributes are quantified (e.g. small, large, etc.) to be displayed in the UI's
     forms optimally (e.g. dropdown list, search tool, etc.).

   ![Scan Data Model - Result](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel-result_v523.webp)

3. Observe the result and adjust manually the data model if needed, by clicking on the properties.

   While Usercube suggests a structure for the data model, the choice is yours to
   activate/deactivate any property.

   > For example, empty attributes should be excluded to simplify the data model. However, you can
   > choose to keep an empty property anyway if you know that you want to fill it in later.

   Note that Usercube stays authoritative to activate some properties that are mandatory for
   Usercube's operation.

   For example the contract's start date is necessary for Usercube's workflows.

   [Modifications can be performed](/docs/identitymanager/6.1/identitymanager/index.md)
   later, decisions can be reconsidered.

4. Click on the Save icon at the top.

   ![Save Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

5. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Identities Loading

In order to validate the process:

1. Choose a test field and note its displaying mode.

   > For example, our `Region` field in `Site` is sized as `large`.
   >
   > ![Scan Data Model - Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example_v523.webp)

2. Navigate within Usercube to find a workflow using the test field. Observe the displaying mode in
   the UI.

   > Our `State` field must be filled in during the creation of a new site. It can be filled by
   > opening a pop-up and choosing the region in the list.
   >
   > ![Scan Data Model - Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example2_v523.webp)
   >
   > ![Scan Data Model - Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example3_v523.webp)

3. Back on the scanning feature, change the displaying mode of your test field and save.

   > We change `large` to `extra small`.

4. Verify the test field's displaying mode.

# Configure Unique Property Generation

How to configure Usercube to generate unique identifiers, mails and logins for any user who does not
have them already.

## Overview

All users need to:

- be uniquely identifiable through an identifier, for example in order to link all accounts to their
  owners;
- have a reserved unique email address, even if they do not need a mailbox;
- have a unique login that can be used as a seed for all users' accounts.

For each unique property, Usercube provides a set of generation rules. You are free to choose the
most adequate method regarding your actual approach.

An identifier/email/login suffix can be specified later according to users' contract types, when
[loading identities](/docs/identitymanager/6.1/identitymanager/index.md)
through an Excel template.

For example, contractors can get `-ext` added automatically to their email addresses.  
The unicity checks performed for identifiers/emails/logins do not consider prefixes nor suffixes.

For example, `john.doe@acme.com` and `john.doe-ext@acme.com` cannot exist simultaneously.

## Participants and Artifacts

Integrators may need the help of the HR department to understand the actual approach of the
organization to compute these unique properties.

| Input                                                                              | Output                                 |
| ---------------------------------------------------------------------------------- | -------------------------------------- |
| [Usercube's server](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Generation rules for unique properties |

## Configure Unique Property Generation

Configure the generation of unique properties by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Identifiers, Mails & Logins** page, you can follow Usercube's
   instructions to configure the generation of a unique identifier for new workers (if needed),
   based on one of the available options.

   ![Unique Identifier Generation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueidentifier_v602.webp)

   - `Based on Full Name`: replaces all diacritics by the non-accentuated variants; removes all
     special characters; can add a separator between the first name and the last name if needed
     (such as `.` most often); in case of homonyms, appends a sequence number to the full name.
   - `Based on Last Name`: uses the first letter of the first name; in case of homonyms, uses more
     letters of the first name up to the whole first name; in case of homonyms still, appends a
     sequence number to the full name.
   - `Random Number`: uses a random number with a default prefix which is used when no specific
     prefix is specified on the user's contract type.

     NETWRIX recommends using random numbers, as they have the advantage of not containing any
     personal information nor giving any hint about the users' seniority.

   - `Sequence`: uses a sequence with a default prefix which is used when no specific prefix is
     configured on the user's contract type.

3. Follow Usercube's instructions to configure the generation of a unique email address for all
   users (who do not have one), based on one of the available options.

   ![Unique Email Generation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueemail_v602.webp)

   - `Based on Full Name`: replaces all diacritics by the non-accentuated variants; removes all
     special characters; can add a separator between the first name and the last name if needed
     (such as `.` most often); in case of homonyms, appends a sequence number to the full name.
   - `Based on Last Name`: uses the first letter of the first name; in case of homonyms, uses more
     letters of the first name up to the whole first name; in case of homonyms still, appends a
     sequence number to the full name.
   - `Based on Unique Identifier`: uses a combination of the unique identifier (defined on the same
     page) and the email domain.

     No matter the strategy:

     - the default email domain is used when no specific domain is specified on the user's
       subsidiary;
     - emails are generated in a way that lets users keep their email address, even if they move
       from contractors to employees, or change to another subsidiary.

4. Follow Usercube's instructions to configure the generation of a unique login for new workers (who
   do not have one), based on one of the available options.

   ![Unique Login Generation](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniquelogin_v602.webp)

   - `Based on Email`: uses the local part of the email, i.e. before `@`.
   - `Based on Full Email`: uses the full email.
   - `Based on Unique Identifier`: uses the unique identifier (defined on the same page) prepended
     with the default prefix when no specific prefix is specified on the user's contract type.

5. Click on the Save icon at the top.

   ![Save Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

6. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Property Generation

In order to verify the process, add a fictitious employee through the workflows from the UI.

![Home - New Employee](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/home_newemployee_v600.webp)

Verify in the directory that the employee's sheet displays the expected values for the configured
unique properties.

![Home - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

# Create the Workforce Repository

How to initiate the repository for workforce identities by loading identities into Usercube with the
right attributes.

## Overview

Loading the digital identities into Usercube is the very first task you have to perform, once you
installed the development environment.

The identity repository is supposed to contain the list of all kinds of identities in the company.
Each identity will be represented by a set of properties that are to be used in the calculations for
entitlement assignments.

> For example, a user can be represented by an identifier and linked to their position which
> includes the user's employee id, last name and first name, email, user type, organization, etc.
>
> ![Identity Repository Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository-example.webp)

> In Usercube, the identity repository can look like the following:
>
> ![Identity Repository Result](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository_v602.webp)
>
> ![Identity Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository-person_v602.webp)

[See more information about the identity repository](/docs/identitymanager/6.1/identitymanager/identity-management/identity-repository.md).

The initial workforce repository is going to be the first version of a comprehensive repository
containing all users in the organization. This repository is crucial in setting up the identity
lifecycle management features and managing assignments of entitlements.

### Creation strategy for the workforce repository

In a nutshell, Usercube has made it as easy as a copy-paste from employee and contractor HR files
into an MS Excel file.

#### Special properties generation

First, you have to choose rules about how email, login, and internal identifiers are going to be
built for new identities, and for existing identities who do not have these unique properties yet.

#### Organizational model creation

Then, you are going to need a model of the organization's structure where the identities fit in.
This model is supposed to provide valuable information for automation and governance features later.

The model is where you are going to identify for example the type of identities you want to manage
(such as employees and contractors), the hierarchical relationships between them, the geographical
areas they work in, and so on.

Usercube has already built a template model for you, in the form of an Excel file. This basic model
is customizable and will be adaptable to most organizations. You can customize it simply by writing
information from your organization into said Excel file.

Even if you have more specific or exotic needs that aren't met by this model, it is still a good
starting point and a good way to quickly start delivering value. We recommend that you start
building your project using this model, identify its limits along the way, and
[enhance it](/docs/identitymanager/6.1/identitymanager/index.md)
down the road to make it fit your needs more accurately.

#### Organizational model filling

Then, you write down the actual identities information, still using the same Excel file, using data
from HR extractions or other records of contractors and temporary workers. As simple as a
copy-paste.

The data you are going to load is analyzed by the engine and some simplifications will be suggested.

**HR synchronization is not enough:**

Another way of handling a part of the initial data loading is to set up an automated synchronization
of HR data with Usercube.

While it seems to be a good idea, it poses a few problems. Among them:

- a specific IT infrastructure is required and its implementation is likely to delay the project's
  progress;
- HR data usually misses crucial information (for example contractor data) and is rarely up to date
  early enough to be really useful.

Hence, in order to rather focus on awaited IGA activities, we choose to build the first iteration of
the project upon a manual data upload to create the initial workforce repository.

[Read more about why you should postpone connecting your HR data](/docs/identitymanager/6.1/identitymanager/index.md).

## Participants and Artifacts

Integrators may need the help of the HR department and its assistants who know the organization in
order to get the identity and organizational data. After the initial loading, the HR department can
review the data to confirm its accuracy.

| Input                                                                                                                                                                    | Output                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| [Usercube's server](/docs/identitymanager/6.1/identitymanager/index.md) (required) Organizational chart (required)) HR data (required) Third-party staff data (optional) | Initial workforce repository |

## Create the Workforce Repository

Create the workforce repository by proceeding as follows:

1. [Configure the generation of unique properties](/docs/identitymanager/6.1/identitymanager/index.md)
   for all users, pre-existing and new, who do not have them yet.
2. [Load identities to Usercube](/docs/identitymanager/6.1/identitymanager/index.md)
   based on the recommended attributes from the provided
   [organizational model template](/docs/identitymanager/6.1/identitymanager/index.md).
3. [Adjust the identity data model](/docs/identitymanager/6.1/identitymanager/index.md)
   following Usercube's suggestions.
4. Continue with the next steps of this guide, and come back later to fill the organizational model
   with additional data.

## Next Steps

Once the initial identities are loaded, integrators can start the
[user profile configuration](/docs/identitymanager/6.1/identitymanager/index.md).

From there you will be able to keep your repository up to date:

- [concerning identity data](/docs/identitymanager/6.1/identitymanager/index.md)
  through workflows;
- [concerning the data model](/docs/identitymanager/6.1/identitymanager/index.md)

The initial identities loading also enables:

- [HR connector creation](/docs/identitymanager/6.1/identitymanager/index.md).

# Load Identities to Usercube

How to load identities into Usercube for the first time using a basic data model in the form of a
template MS Excel file.

## Overview

Loading the digital identities into Usercube is the very first task you have to perform, once you
installed the development environment.

The initial workforce repository is going to be the first version of a comprehensive directory
containing all users in the organization. This directory is crucial in setting up the identity
lifecycle management features and managing assignments of entitlements.

Usercube contains a template model, downloadable as an Excel file. Below is an example of a part of
the `UserRecord` tab, used in Usercube's demo:

![Template Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_templateexample_v602.webp)

### Useful data

Not all data is useful for identity governance and administration. Thus, to start designing the
repository, you must be aware of which data is necessary and which is unhelpful. Useful data is the
data that:

- needs to be provisioned to the managed applications;

  > For example, if you need to provision users' phone numbers in a given application, then you
  > should fill in the workforce repository's `Phone Number` property.

- is needed to manage identities' lifecycles;

  > For example, consider that internal employees must be managed by HR officers only, then you'll
  > need to identify whether users are internal employees or external contractors. Then you should
  > make sure that you fill an `Employee Type` property with at least two values: one for internal
  > employees, and one for external contractors.

- is needed to automatically grant permissions.

  > For example, if a user's position title ("manager" for instance), defines what users currently
  > do, and thus what permissions they need, then you should make sure to fill in a property
  > storing the position's title in the workforce repository.

## Participants and Artifacts

Integrators may need the help of the HR department who knows the organization in order to get the
identity and organizational data. After the initial loading, the HR department can review the data
to confirm its accuracy.

| Input                                                                                                                                   | Output                       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [Usercube's server](/docs/identitymanager/6.1/identitymanager/index.md) (required) HR data (required) Third-party staff data (optional) | Initial workforce repository |

## Load Identities

Load identities for the first time by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Data Upload** page, download the empty Excel template.

   ![Upload Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/icondownload_v602.svg)

3. Collect identity and organizational data.

   If you don't know where to start, identities most often include long-term employees, temporary
   employees (such as interns and temps) and external contractors. The template contains a
   `UserType` tab that lists all the types of workers that you want to include, i.e. the usual
   identities listed just before, but also partners, clients, even applications.

   Workforce should include obviously all current workers, but also incoming workers, and those who
   left the organization in the past XXX (time period defined by the rules of the security
   officer). It is interesting to have past workers in order to understand
   [orphaned accounts](/docs/identitymanager/6.1/identitymanager/index.md)
   and ensure that they are supposed to be orphaned.

   **Employees**

   The workers that are directly employed by the organization usually have their data stored in the
   HR system.

   **Contractors**

   Often third-party workers like contractors are not part of the HR system. Then, there are a few
   possible solutions to get their data:

   - through purchasing department if it doesn't imply any personal data security breach;
   - manually with knowledgeable people, for example department managers and assistants;
   - through a filter on data from available directories, for example on the email address if it
     contains a specific string like `.ext@`;
   - through an Active Directory extraction with a filter on an attribute that works with a
     specific part, for example on the employee identifier.

4. Fill said template with the data you collected.

   The Excel file contains several tabs which organize data, but not all tabs and columns are
   mandatory. You can find
   [**more details about the template's description**](/docs/identitymanager/6.1/identitymanager/index.md).
   Below are the minimum recommended attributes (mandatory in orange):

   ![Template Recommendations](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_templatereco_v600.webp)

   [**Click here to download a template example**](/files/identitymanager/user-guide/set-up/initial-identities-loading/Directory_example_V602.xlsx).

   Every object (so every tab) of the directory must have a **key**, which is an attribute:

   - unique, i.e. designed to uniquely identify an object/resource, one key can't be shared;
   - immutable, i.e. must not change during the whole lifecycle of the object/resource, even for
     renaming for example;
   - consistent, i.e. identical everywhere the object/resource is specified.

   Among other things, a consistent key allows identities to use the same login in all
   applications. A consistent key is also essential to form the link between identities and the
   other objects (organizations, titles, etc.).

   **Create your initial workforce repository with only recommended attributes.**

   As we aim to quickly enable Identity Governance and Administration (IGA) actions (like the
   review of orphaned and unused accounts, or access certification, etc.), NETWRIX recommends
   loading identities with only necessary data. The model can be completed later.

   Moreover, Usercube's
   [Query module](/docs/identitymanager/6.1/identitymanager/index.md)
   can help gather data from other systems.

   For example, let's say that contractors' phone numbers are found only in the AD. Then we can
   wait for the connection of Usercube to the AD, and finally use the Query module to collect
   missing data. In this case:

   1. Upload the `Directory.xlsx` file with only recommended data, validate and synchronize as
      explained on this page.
   2. Connect the AD,
      [synchronize](/docs/identitymanager/6.1/identitymanager/index.md)
      AD data, update
      [correlation and classification](/docs/identitymanager/6.1/identitymanager/index.md).
   3. Follow
      [the usual query procedure](/docs/identitymanager/6.1/identitymanager/index.md)
      to request phone numbers from the AD.
   4. Ensure you display a key (for example `EmployeeId` or `email`) to master the order of the
      displayed data.
   5. Download the report.
   6. Copy the report's columns one by one to paste them into the Directory.xlsx file.
   7. Synchronize directory data.

5. Back on the **Workforce** > **Data Upload** page, upload the filled Excel file to the server in
   order to feed the data back to Usercube.

   ![Upload Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/iconupload_v602.svg)

   The latest uploaded file overwrites the previous one.

6. Click on **Verify and Synchronize** to check the file's consistency and import its data into
   Usercube.

   ![Verify and Synchronize](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_dataupload-synchronize_v602.webp)

   Now you are able to view users' pages in the directory.

   ![Directory - Users](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_directoryusers_v602.webp)

## Verify Identities Loading

In order to validate the process:

- Check manually a sample in the user directory accessible from the home page. You should verify at
  least your own sheet and the sheets for your hierarchy.

  ![Home - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization includes a manager. Organizations are accessible from the department
  directory on the home page.

  ![Home - Directory Department](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains many organizations, then it is also possible to list each organization
  with its manager through the
  [Query module](/docs/identitymanager/6.1/identitymanager/index.md).

- [Create reports](/docs/identitymanager/6.1/identitymanager/index.md)
  with indicators on the number of workers per type or per organization for example (through
  Usercube' predefined reports, the Query module or Power BI), in order to ensure that Usercube's
  content sticks to reality.

# Template Description

Description of the MS Excel template for the creation of the identities repository.

[Click here to download a template example](/files/identitymanager/user-guide/set-up/initial-identities-loading/Directory_example_V602.xlsx).

![Template Model](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/initial-identities-loading/template-description/initialload_templatemodel_v603.webp)

All tabs contain a column `Command` only used at a later stage to
[modify (massively) identity data](/docs/identitymanager/6.1/identitymanager/index.md).

## User - Required

[An identity is split into two parts](/docs/identitymanager/6.1/identitymanager/identity-management/index.md),
the first one being the parent resource called `User` which represents the user's identity card. It
contains the few attributes which shall not change during the identity's lifecycle.

| Attribute                    | Type    | Description |
| ---------------------------- | ------- | ----------- |
| Identifier (required)        | String  |             |
| ConsentPhotoUsage (optional) | Boolean |             |
| IsDraft (optional)           | Boolean |             |

## UserRecord - Required

[An identity is split into two parts](/docs/identitymanager/6.1/identitymanager/identity-management/index.md),
the second one being the one or several child resources called `UserRecord` which represent the
user's positions. Records belong to users and help materialize:

- several positions at once;
- validity periods for positions/assignments unrelated to the user itself;
- position changes.

In other words, records represent the lifecycle of a user inside the company, i.e. multiple
contracts, mutation, etc.

Thus, the `UserRecord` tab usually holds users' information that might change over time, while the
`User` tab groups all records of a given user around its identifier.

| Attribute                                                                                | Type       | Description                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RecordIdentifier (recommended)                                                           | String     | Identifier of the [record](/docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/position-changes.md). **Note:** it can be the same as `PositionIdentifier` when users can have no more than one contract simultaneously. **Note:** required when using records. |
| User (required)                                                                          | ForeignKey | `Identifier` from the `User` tab.                                                                                                                                                                                                                                                               |
| EmployeeId (recommended)                                                                 | String     |                                                                                                                                                                                                                                                                                                 |
| Gender (optional)                                                                        | ForeignKey | `Identifier` from the [`Gender`](#gender) tab.                                                                                                                                                                                                                                                  |
| PersonalTitle (optional)                                                                 | ForeignKey | `Identifier` from the [`PersonalTitle`](#personaltitle) tab.                                                                                                                                                                                                                                    |
| FirstName (recommended)                                                                  | String     |                                                                                                                                                                                                                                                                                                 |
| LastName (recommended)                                                                   | String     |                                                                                                                                                                                                                                                                                                 |
| BirthName (optional)                                                                     | String     |                                                                                                                                                                                                                                                                                                 |
| BirthDate (optional)                                                                     | DateTime   |                                                                                                                                                                                                                                                                                                 |
| Email (recommended)                                                                      | String     |                                                                                                                                                                                                                                                                                                 |
| EmailAliases (optional)                                                                  | String     | Outdated, or any other email address associated with the user. This is used to prevent the re-assignment of a previously used address.                                                                                                                                                          |
| Login (optional)                                                                         | String     |                                                                                                                                                                                                                                                                                                 |
| PhoneNumber (optional)                                                                   | String     |                                                                                                                                                                                                                                                                                                 |
| MobileNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                 |
| VIP (optional)                                                                           | Boolean    | `True` to specify that the user is special/important.                                                                                                                                                                                                                                           |
| ContractIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                 |
| ContractStartDate (required)                                                             | DateTime   | Start date of the user's contract in the company.                                                                                                                                                                                                                                               |
| ContractEndDate (recommended for permanent contracts, required for fixed-term contracts) | DateTime   | End date of the user's contract in the company.                                                                                                                                                                                                                                                 |
| AccessesExpirationDate (optional)                                                        | DateTime   | Date when the user will be deprived of their access rights.                                                                                                                                                                                                                                     |
| UserType (required)                                                                      | ForeignKey | `Identifier` from the `UserType` tab.                                                                                                                                                                                                                                                           |
| Subsidiary (optional)                                                                    | ForeignKey | `Identifier` from the [`Subsidiary`](#subsidiary) tab.                                                                                                                                                                                                                                          |
| ExternalCompany (optional)                                                               | ForeignKey | `Identifier` from the [`ExternalCompany`](#externalcompany) tab.                                                                                                                                                                                                                                |
| PositionIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                 |
| PositionStartDate (optional)                                                             | DateTime   |                                                                                                                                                                                                                                                                                                 |
| PositionEndDate (optional)                                                               | DateTime   |                                                                                                                                                                                                                                                                                                 |
| Organization (recommended)                                                               | ForeignKey | `Identifier` from the [`Organization`](#organization) tab.                                                                                                                                                                                                                                      |
| Manager (recommended)                                                                    | String     | Line manager. `Identifier` from the `User` tab.                                                                                                                                                                                                                                                 |
| IGAManager (optional)                                                                    | String     | Validator of IGA requests. `Identifier` from the `User` tab.                                                                                                                                                                                                                                    |
| JobTitle (optional)                                                                      | String     |                                                                                                                                                                                                                                                                                                 |
| Title (optional)                                                                         | ForeignKey | `Identifier` from the [`Title`](#title) tab.                                                                                                                                                                                                                                                    |
| Site (optional)                                                                          | ForeignKey | `Identifier` from the [`Site`](#site) tab.                                                                                                                                                                                                                                                      |
| Office (optional)                                                                        | ForeignKey | `Identifier` from the [`Office`](#office) tab.                                                                                                                                                                                                                                                  |
| OfficeNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                 |
| IsMainPosition (optional)                                                                | Boolean    |                                                                                                                                                                                                                                                                                                 |
| Suspended (optional)                                                                     | Boolean    |                                                                                                                                                                                                                                                                                                 |
| StartDate (optional)                                                                     | DateTime   | Start date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                       |
| EndDate (optional)                                                                       | DateTime   | End date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                         |

**Recommendations**:

- There is no absolute need for a unique identifier, because Usercube can compute one in the next
  steps.
- Be aware of the difference between a hierarchical manager and an IGA manager who approves
  entitlement requests. They aren't necessarily the same person.

## UserType - Required

User types represent users' contract types, such as permanent contract, fixed term contract,
interim, contractor, trainee, etc.

| Attribute                             | Type       | Description                                                                                                                                            |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier (required)                 | String     |                                                                                                                                                        |
| DisplayName (recommended)             | String     |                                                                                                                                                        |
| Category (required)                   | ForeignKey | `Identifier` from the [`UserCategory`](#usercategory) tab.                                                                                             |
| EmailSuffix (optional)                | String     | Suffix to concatenate to the email string (immediately before the `@` character).                                                                      |
| IsExternal (required)                 | Boolean    |                                                                                                                                                        |
| LoginPrefix (optional)                | String     |                                                                                                                                                        |
| LoginSuffix (optional)                | String     |                                                                                                                                                        |
| UniqueIdentifierPrefix (optional)     | String     |                                                                                                                                                        |
| UniqueIdentifierRangeEnd (optional)   | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeEnd` set to 9999 means that no unique identifier should be greater than 9999. |
| UniqueIdentifierRangeStart (optional) | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeStart` set to 1000 means that no unique identifier should be less than 1000.  |
| UniqueIdentifierSuffix (optional)     | String     |                                                                                                                                                        |

## UserCategory

Categories constitute an additional layer to organize users who can be sorted by types and then
further by categories, and categories can be transverse or not.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Subsidiary

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| EmailDomain (optional)    | String |             |

## ExternalCompany

Including external workers into the workforce repository requires listing external companies.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Organization

A company is divided into organizations, also called departments, such as the board of directors,
corporate banking, call center, USA operations, France operations, treasury, etc.

| Attribute                 | Type       | Description                                                        |
| ------------------------- | ---------- | ------------------------------------------------------------------ |
| Identifier (required)     | String     |                                                                    |
| DisplayName (recommended) | String     |                                                                    |
| Manager (recommended)     | ForeignKey | `Identifier` from the `User` tab.                                  |
| Assistant (optional)      | ForeignKey | `Identifier` from the `User` tab.                                  |
| Parent (optional)         | ForeignKey | `Identifier` of another organization.                              |
| Type (optional)           | ForeignKey | `Identifier` from the [`OrganizationType`](#organizationtype) tab. |

## OrganizationType

Organizations can be categorized into organization types, if relevant.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Title

Each position can be represented by a title which names said position, such as architect, CEO,
purchasing manager, recruiter, etc.

| Attribute                 | Type       | Description                                              |
| ------------------------- | ---------- | -------------------------------------------------------- |
| Identifier (required)     | String     |                                                          |
| DisplayName (recommended) | String     |                                                          |
| JobCategory (optional)    | ForeignKey | `Identifier` from the [`JobCategory`](#jobcategory) tab. |

## JobCategory

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Country

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| ISOCode (optional)        | String |             |

## Region

| Attribute                 | Type       | Description                                      |
| ------------------------- | ---------- | ------------------------------------------------ |
| Identifier (required)     | String     |                                                  |
| DisplayName (recommended) | String     |                                                  |
| Country (optional)        | ForeignKey | `Identifier` from the [`Country`](#country) tab. |

## Site

All positions specify a working site.

| Attribute                    | Type       | Description                                    |
| ---------------------------- | ---------- | ---------------------------------------------- |
| Identifier (required)        | String     |                                                |
| DisplayName (recommended)    | String     |                                                |
| Name (optional)              | String     |                                                |
| StreetNumber (optional)      | Int32      |                                                |
| StreetName (optional)        | String     |                                                |
| StreetType (optional)        | String     |                                                |
| Floor (optional)             | Int32      |                                                |
| PostalCode (optional)        | Int32      |                                                |
| City (optional)              | String     |                                                |
| Region (optional)            | ForeignKey | `Identifier` from the [`Region`](#region) tab. |
| PreferredLanguage (optional) | String     |                                                |
| TimeZone (optional)          | Int32      |                                                |
| Latitude (optional)          | Int64      |                                                |
| Longitude (optional)         | Int64      |                                                |
| Url (optional)               | String     |                                                |

## Office

| Attribute                 | Type       | Description                                |
| ------------------------- | ---------- | ------------------------------------------ |
| Identifier (required)     | String     |                                            |
| DisplayName (recommended) | String     |                                            |
| Site (recommended)        | ForeignKey | `Identifier` from the [`Site`](#site) tab. |

## PersonalTitle

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Gender

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## ReservedEmail

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedIdentifier

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedLogin

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

# Create a Provisioning Rule

How to define
[scalar rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md),
[navigation rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
and/or
[query rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to compute and provision target resources values from source resources values.

## Overview

[Categorization](/docs/identitymanager/6.1/identitymanager/index.md)
led to the grouping of resources into resource types (classification), and the establishment of
source-to-target relationships between these resources (correlation).

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of
[scalar and navigation properties](/docs/identitymanager/6.1/identitymanager/index.md)
for the target resources used in entitlement management, based on source resources. We are going to
[provision](/docs/identitymanager/6.1/identitymanager/index.md)
these properties, i.e. write them to the managed system.

The right tools for the job are provisioning rules: scalar rules, navigation rules, query rules.

These provisioning rules are designed to:

1. retrieve the input data in source objects;
2. compute the output value for target objects;
3. provision the corresponding properties in the managed system with the computation result.

Another kind of provisioning rule is called resource type rule. Instead of computing existing
properties, resource type rules create automatically target resources to be owned by given source
resources (identities).

In testing mode, the impacted resource types can be
[configured to block provisioning](/docs/identitymanager/6.1/identitymanager/index.md),
by adding a mandatory review before actually writing to the managed system.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                           | Output                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------- |
| [Categorization](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Scalar rules Navigation rules Query rules |

## Create Provisioning Rules

- [Create resource type rules](/docs/identitymanager/6.1/identitymanager/index.md)
  to automatically create resources.
- [Create scalar rules](/docs/identitymanager/6.1/identitymanager/index.md)
  to compute scalar properties;
- [Create navigation and/or query rules](/docs/identitymanager/6.1/identitymanager/index.md)
  to compute navigation properties.

NETWRIX recommends creating/modifying/deleting provisioning rules using
[simulations](/docs/identitymanager/6.1/identitymanager/index.md) in
order to anticipate changes.

## Next Steps

Once provisioning rules are created, integrators can start
[creating the single role catalog](/docs/identitymanager/6.1/identitymanager/index.md).

# Compute a Navigation Property

How to define
[navigation rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
and/or
[query rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to compute and provision the values of navigation properties for target resources based on source
resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of
[navigation properties](/docs/identitymanager/6.1/identitymanager/index.md)
for the target resources used in entitlement management, based on source resources. We are going to
[provision](/docs/identitymanager/6.1/identitymanager/index.md)
these properties, i.e. write them to the managed system.

The right tools for the job are navigation and query rules.

A navigation property's value can be computed by a navigation rule or a query rule, assigning a
given resource from the entity type pointed by the navigation property (which can be the target
entity type itself). Let's call this entity type the "other" one.

- A navigation rule assigns a fixed resource, which is chosen from among the "other" entity type's
  resources during the rule's creation. The assigned resource is the same for all impacted accounts.
  **Use a navigation rule when a given resource must be assigned, regardless of users' attributes.**
- A query rule assigns a resource from the "other" entity type too. However, the resource is chosen
  according to a query via a C# expression with conditions, based on the attributes of the source
  objects (usually users). Hence, contrary to a navigation rule, a query rule can assign a different
  resource for each impacted account, based on the attributes of the account's owner. **Use a query
  rule when there is the need to use variables from among users' attributes to select the resource
  to assign.**

![Schema - Scalar Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_schemanavigation.webp)

> A **navigation rule** could add the AD group `SG_APP_SQL` to the `memberOf` navigation property to
> all AD nominative accounts provided that the user has the single role `SQL Server Administration`.

> A **query rule** could compute the value of the `department` navigation property for ServiceNow
> nominative accounts (entity type `ServiceNow_User`), with a query from among resources from the
> `ServiceNow_Department` entity type, where the name of the resource would match the display name
> of the organization specified for the user (owner of the ServiceNow account).
>
> We need here to query the `ServiceNow_Department` entity type in order to find the right
> department to update the value of `department`, which is specific to each ServiceNow account.
>
> Thus, each user owning a ServiceNow account will see the value of `department` in their account
> updated with the resource from `ServiceNow_Department` which corresponds to the department
> specified for this user.

> Another **query rule** could compute the `parentdn` attribute for AD nominative accounts, with a
> query from among AD entries, where the `dn` attribute of the resource would match a complex
> expression based on the user's (owner of the AD account) presence state, employee type, location,
> etc.
>
> We need here to query the `AD - Entry` entity type in order to find the right dn to update the
> value of `parentdn`, which is specific to each AD nominative account.
>
> Thus, each AD nominative account will have the value of its `parentdn` set according to its
> owner's attributes (presence state, employee type, location, etc.).

The application of a navigation rule can depend on the assignment of a
[single role](/docs/identitymanager/6.1/identitymanager/index.md),
and/or user
[dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions).

A query rule does not use criteria as it is designed to compute a given navigation property for all
existing resources in a given resource type. However, in case of several query rules on a same
property, the application of a query rule depends on its
[confidence rate](/docs/identitymanager/6.1/identitymanager/index.md)
and the corresponding priority it receives compared to other query rules.

While both navigation and query rules compute navigation properties, the value of one navigation
property should be computed by either navigation or query rules, not both.

In Usercube, a navigation property has two "sides", one for each linked element.

For example in the AD, the group membership of a user is represented by the properties `member` for
groups (containing a list of users) and `memberOf` for users (containing a list of groups).  
However, some managed systems only have one of these two sides.

The AD only uses `member` from among groups' properties. Users do not have a `memberOf` property.  
But, as Usercube uses and links both sides, it is able to "translate" the information, so that the
corresponding navigation property, which actually exists in the managed system, is modified by the
navigation/query rule.

Usercube assigns an entitlement to a user by assigning a group-membership to an account. Thus we can
create a navigation rule which adds a group to the `memberOf` property of given accounts. Usercube
will update the `member` property of groups accordingly (in Usercube), and then provision the
`member` property of said groups in the AD, adding the impacted accounts.

A navigation rule will trigger the creation of a target resource for all impacted source resources
(so all users), which are not yet correlated with a resource of this resource type.

A query rule does not create resources, and only computes the navigation properties of existing
resources.

## Guidelines

### Expression code must not contain too much data

Once configured, a rule is a complicated object to modify. Therefore, you must keep business data in
the resource and out of the expression. It is easier to change data than to change a rule.

> For example, consider an organization that manages email addresses according to the site with
> `.fr` for France and `.be` for Belgium.
>
> A working option could be to write an expression with a condition `if` on the site to assign the
> domain name. However, if the organization expands and needs to consider an additional country,
> then the rule requires change in the expression code.
>
> A better solution is to change the identity data model by adding a field `Domain Name` to describe
> the object `Site`, and to be used in the rule expression. In this case, if there is an additional
> country, then a new field is added in the data model for `Site` and `Domain Name`. Thus, the rule
> expression remains simple by using the new objects, for example
> `Email = FirstName + "." + LastName + "@" + Company + "." + DomainName`.

### Priority between navigation/query rules

It means that:

- several rules computing the same property with different criteria should not coexist;
- the only reason to have several rules to compute a single property is when changing the property
  value over time, via
  [time offsets](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                           | Output                       |
| ------------------------------------------------------------------------------- | ---------------------------- |
| [Categorization](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Navigation rules Query rules |

## Create a Navigation Rule

Fill an entity type with a navigation rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future navigation
   rule.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Navigations** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Navigation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createnavrule_v602.webp)

   - `Join`: navigation property from the target entity type, whose value is to be impacted.
   - `Resource`: resource from the entity type pointed by the `Join`, which is to be added to the
     `Join` property.
   - `Navigation denied`: option that forbids the resource assignment.
   - `Offset of effective date`: time period that defines the actual effective date for property
     computation according to the value's start and/or end date.

     > For example, account activation and deactivation can be managed according to the start
     > and/or end dates.

   - **Criteria**: conditions that, if met, trigger the rule application.
     > Our example would look like:
     >
     > ![Scalar Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplenav_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Create a Query Rule

Fill an entity type with a query rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future query rule.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Queries** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create Query Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrule_v522.webp)

   Once the `Resource Type` is provided, more fields appear.

   ![Query Rule Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrulefields_v602.webp)

   - **Target Object** > `Property to fill`: navigation property from the target entity type, whose
     value is to be impacted.
   - **Target Object**: property (or expression of properties) from the entity type pointed by the
     `Property to fill`, which will be the value of the `Property to fill` if it matches the source
     object. Can be defined by a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
   - **Source Object**: property (or expression of properties) from the source entity type, which
     TODO:. Can be defined by a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
   - `Offset of effective date`: time period that defines the actual effective date according to
     the value's start and/or end date. An offset of effective date can be useful for some
     attributes. For example, account activation and deactivation can be managed according to the
     start and/or end dates.
   - `Confidence Rate`: rate expressing the confidence in this link, and its priority order.
     [See the detailed explanation](/docs/identitymanager/6.1/identitymanager/index.md).
     > Our examples would look like:
     >
     > ![Query Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequery_v602.webp)
     >
     > ![Query Rule Example 2](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequerybis_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a navigation or query rule is taken into account when launching the role model
computation task, in the **Resource Types** frame of the corresponding connector's overview page,
via **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new properties. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity through a navigation rule (and its criteria), and if the user's
criteria do not comply with the new version of the rule, then the corresponding resource is
automatically deleted.

A modification in a provisioning rule can trigger the removal of a resource only on the Usercube
side. There are several barriers to cross before said resource is removed from the managed system.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in
navigation and query rules.

## Verify Rule Creation

In order to verify the process:

1. On the corresponding connector's overview page, in the **Resource Types** frame click on
   **Jobs** > **Compute Role Model** to apply all rules.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. Review
   [unauthorized accounts](/docs/identitymanager/6.1/identitymanager/index.md)
   (on the **Resource Reconciliation** screen) and
   [roles](/docs/identitymanager/6.1/identitymanager/index.md)
   (on the **Role Reconciliation** screen) to help check query rules: if there are numerous
   properties to be reconciled following the same pattern, then there may be a rule that needs to be
   changed.

# Create Resources

How to define
[resource type rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to create new (target) resources for given users, computing and provisioning their properties based
on source resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to create target resources and assign them to given users. We are going to
[provision](/docs/identitymanager/6.1/identitymanager/index.md)
these resources, i.e. write them to the managed system.

The right tools for the job are resource type rules.

The application of a resource type rule can depend on the assignment of a
[single role](/docs/identitymanager/6.1/identitymanager/index.md),
and/or user
[dimensions](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md#dimensions).

> A resource type rule could assign a SAP account to users working in Germany, and who already have
> the role `SAP: manager access`.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                           | Output              |
| ------------------------------------------------------------------------------- | ------------------- |
| [Categorization](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Resource type rules |

## Create a Resource Type Rule

Create a resource type rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future scalar rule.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Resource Types** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Resource Type Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_typerule_v602.webp)

   - `Resource Type`: resource type to be automatically assigned.
   - `Type`: assignment type that can be: `Suggested` so that the resource type is listed among
     suggested permissions in the permission basket of users matching the criteria during an
     entitlement request, suggested assignments must be selected manually to be requested; or
     `Automatic` so that the resource type is automatically assigned to users matching the
     criteria; or `Automatic but with validation` so that the resource type is listed in the
     permission basket of new workers, these assignments can still be modified.
   - `Resource type denied`: option that forbids the assignment.
   - `Offset of effective date`: time period that defines the actual effective date for resource
     creation/deletion according to the value's start and/or end date.
   - **Criteria**: conditions that, if met, trigger the resource creation.
     > Our example would look like:
     >
     > ![Resource Type Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_exampletype_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a resource type rule is taken into account when launching the role model
computation task, in the **Resource Types** frame of the corresponding connector's overview page,
via **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new assignments. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity by a resource type rule, and if the user's criteria do not comply with
the new version of the rule, then the corresponding resource is automatically deleted.

A modification in a resource type rule can trigger the removal of a resource only on the Usercube
side. There are several barriers to cross before said resource is removed from the managed system:
first before the creation of an `AssignedResourceType` in Usercube's database, and again before the
actual action in the managed system.

> In our example, let's say that we replace the country criterion `Germany` with `France`. Consider
> a user who had a SAP account assigned through this rule. Now that the country criterion has
> changed, our user working in Germany would be deprived of their account.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in resource
type rules.

## Verify Rule Creation

In order to verify the process, start by checking the rule's details on the **Access Rules** page.
Then, you can:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Create a resource type rule involving an account that said user doesn't already have, based on
   criteria which the selected user satisfies.
3. Trigger the computation of the role model by clicking, on the corresponding connector's overview
   page, in the **Resource Types** frame, on **Jobs** > **Compute Role Model** to apply all rules.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

4. See the new account in the user's **View Permissions** tab.

   ![View Permissions Tab](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

   If the type rule uses a single role as a criterion, and the user has said role, then both the
   resource type and the role will be displayed in the user's permissions, but only if the role is
   related to a
   [navigation rule](/docs/identitymanager/6.1/identitymanager/index.md).
   Otherwise, only the resource type will be visible.

# Compute a Scalar Property

How to define
[scalar rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to compute and provision the values of scalar properties for target resources based on source
resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of
[scalar properties](/docs/identitymanager/6.1/identitymanager/index.md)
for the target resources used in entitlement management, based on source resources. We are going to
[provision](/docs/identitymanager/6.1/identitymanager/index.md)
these properties, i.e. write them to the managed system.

The right tools for the job are scalar rules.

A scalar property's value can be computed by a scalar rule, based on at least one scalar property
from the source entity type, possibly writing a C# expression.

![Schema - Scalar Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_schemascalar.webp)

> A scalar rule could define the scalar property `displayName` of nominative AD accounts based on
> its owner's name with the expression:
>
> `return person.LastName + " " + person.FirstName;`

The application of a scalar rule can depend on the assignment of a
[single role](/docs/identitymanager/6.1/identitymanager/index.md).

Sometimes we create in Usercube properties which are not directly linked to any real property in the
managed system. A scalar rule on this kind of property will not find a property to provision in the
managed system, and thus will not produce any result.

For example, we may need to create in the AD the property `isUnused` (to spot unused accounts) with
a C# expression based on other properties from the same entity type. These properties, such as
`accountExpires` and `lastLogonTimestamp`, are each linked to a property from the AD, while
`isUnused` is for Usercube's use only. This scalar property `isUnused` does not exist in the AD,
thus **will never be provisioned to the AD**, and thus **will not be computed by a scalar rule**.

Also some properties, like `lastLogonTimestamp` in the AD or identifiers from ServiceNow, must be
changed only by their application. Usercube can/must not change these properties, thus **no
provisioning rule is appropriate for them**.

A scalar rule using a single role as criterion will trigger the creation of a target resource for
all impacted source resources (so all users), which are not yet correlated with a resource of this
resource type.

Without a criterion, a scalar rule does not create resources, and only computes the scalar
properties of existing resources.

## Guidelines

### Expression code must not contain too much data

Once configured, a rule is a complicated object to modify. Therefore, you must keep business data in
the resource and out of the expression. It is easier to change data than to change a rule.

> For example, consider an organization that manages email addresses according to the site with
> `.fr` for France and `.be` for Belgium.
>
> A working option could be to write an expression with a condition `if` on the site to assign the
> domain name. However, if the organization expands and needs to consider an additional country,
> then the rule requires change in the expression code.
>
> A better solution is to change the identity data model by adding a field `Domain Name` to describe
> the object `Site`, and to be used in the rule expression. In this case, if there is an additional
> country, then a new field is added in the data model for `Site` and `Domain Name`. Thus, the rule
> expression remains simple by using the new objects, for example
> `Email = FirstName + "." + LastName + "@" + Company + "." + DomainName`.

### Priority between scalar rules

A scalar rule with a role as a criterion has a higher priority than a rule without a role criterion.

> For example, consider the situation where we want the login `A` for users with the single role
> `RA`, and the login `B` for the others. In this case, we can write two distinct scalar rules where
> the first one has the role `RA` as a criterion. This rule will be applied before the other.

Other than that, there should not be more than one rule meant to provision a given property on a
given time period.

It means that:

- several rules computing the same property with different criteria should not coexist;
- the only reason to have several rules to compute a single property is when changing the property
  value over time, via
  [time offsets](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                           | Output       |
| ------------------------------------------------------------------------------- | ------------ |
| [Categorization](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Scalar rules |

## Create a Scalar Rule

Fill an entity type with a scalar rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

   ![Home - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future scalar rule.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Scalars** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create Scalar Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_scalarrule_v522.webp)

   Once the `Resource Type` is provided, more fields appear.

   ![Scalar Rule Fields](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_scalarrulefields_v602.webp)

   - **Source Object**: scalar property (or expression of scalar properties) from the source entity
     type, which constitutes the input for the computation of the target object. Can be defined by
     a property path and/or an
     [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
   - **Target Object**: scalar property from the target entity type, whose value is to be impacted.
   - `Offset of effective date`: time period that defines the actual effective date for property
     computation according to the value's start and/or end date.

     > For example, account activation and deactivation can be managed according to the start
     > and/or end dates.

   - `Applicable`: `Create & Update` to use this computation to both provision the managed system
     and synchronize the property back to Usercube; `Create Only` to use this computation to only
     provision the managed system and ignore this property during synchronization, this way the
     property can never be displayed as non-conforming.

     > `CreateOnly` is usually set to adapt the configuration to the constraints of the managed
     > system, when Usercube does not retrieve and/or update the property value.
     >
     > For example, consider a system, that we want to connect to Usercube (let's call it `SYST`)
     > using a `title` property. Consider also that `SYST` needs to be provisioned with the value
     > of `title`, but does not allow any other system to retrieve said value.
     >
     > In this case, we use `CreateOnly` so that Usercube sends the adequate provisioning order
     > when needed, and then is able to change the
     > [provisioning state](/docs/identitymanager/6.1/identitymanager/index.md)
     > to `Verified` without
     > [synchronization](/docs/identitymanager/6.1/identitymanager/index.md).

   - `Comparison type`:
     [comparison type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
     between the value of the target object computed by the rule and its value from the managed
     system. Non-conforming values are displayed on the **Provisioning Review** screen.
   - **Criteria**: conditions that, if met, trigger the rule application.
     > Our example would look like:
     >
     > ![Scalar Rule Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_examplescalar_v522.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a scalar rule is taken into account when launching the role model computation
task, in the **Resource Types** frame of the corresponding connector's overview page, via **Jobs** >
**Compute Role Model**.

![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new properties. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity through a scalar rule (and its single role criterion), and if the
user's criteria do not comply with the new version of the rule, then the corresponding resource is
automatically deleted.

A modification in a provisioning rule can trigger the removal of a resource only on the Usercube
side. There are several barriers to cross before said resource is removed from the managed system.

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in scalar
rules.

## Verify Rule Creation

In order to verify the process:

1. On the corresponding connector's overview page, in the **Resource Types** frame click on
   **Jobs** > **Compute Role Model** to apply all rules.

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. [Review unreconciled properties](/docs/identitymanager/6.1/identitymanager/index.md)
   (on the **Resource Reconciliation** screen) to help check scalar rules: if there are numerous
   properties to be reconciled following the same pattern, then there may be a rule that needs to be
   changed.

# Manage Role Officers

How to manage role officers in order to ensure the approval for entitlement assignments.

The documentation is not yet available for this page and will be completed in the near future.

# Create a Category

How to structure roles into
[categories](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

## Overview

A
[category](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is usually created to:

- reflect the validation process, i.e. represent groups of roles that follow the same validation
  process with the same validator(s);
- help users find intuitively the entitlement that they are looking for.

> For example, creating one category per application often fulfills both requirements.

There is usually one
[validator](/docs/identitymanager/6.1/identitymanager/index.md)
per category.

There can be several category levels. For example, integrators can choose to create one category per
department, then one per position, and finally one per application. They usually gather roles by
application. Here are a few examples of categories: `AD`, `HR` , `SAP`, `IT Administration`,
`Test Environments`, etc. Some of these "application categories" are gathered into larger categories
by theme as long as their role owner is identical.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                         | Output     |
| ----------------------------------------------------------------------------- | ---------- |
| [Role catalog](/docs/identitymanager/6.1/identitymanager/index.md) (optional) | Categories |

## Create a Category

Categories are not mandatory to create roles, but they are highly recommended to organize single
roles.

Create a category by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Roles** to access the roles
   page.

   ![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. All existing
   [categories](/docs/identitymanager/6.1/identitymanager/index.md)
   are shown in the menus on the left. To create a new category, click on **+**.

   ![Add a New Category](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_newcategory_v602.webp)

3. Fill in the fields.

   ![Create a Category](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_createcategory_v602.webp)

   - `Identifier`: must be unique among categories and without any whitespace.
   - `Name`: will be displayed in the UI to identify the created category.
   - `Collapsed in the role tree`: option that enables a collapsed view of the category in the role
     tree.
   - `Parent category`: optional link to an existing category that would contain the created
     category.

4. Click on **Create** and see the category added in the menus.

   When creating a category, you must be cautious about the associated
   [validators](/docs/identitymanager/6.1/identitymanager/index.md)
   that are not yet defined.

## Verify Category Creation

In order to verify the process, check on the **Access Roles** screen that the category is created
with the right parameters.

![Verify Category](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/categorycreation_test_v602.webp)

# Create Roles in the Role Catalog

How to define
[single roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
to model entitlements, and organize them in the role catalog, basis of the
[role model](/docs/identitymanager/6.1/identitymanager/index.md).

The creation of the role catalog is a time-consuming part, with an important workload concerning the
description of the internal processes for all applications. Actors here need to really understand
the useful permissions within managed applications.

## Overview

The aim here is to establish and create the exhaustive list of
[roles](/docs/identitymanager/6.1/identitymanager/core-concepts/role-model.md#roles) needed by
the organization. Roles are a way to represent entitlements which are assigned to identities, so
that said identities are able to work with the managed systems.

![Schema - Single Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarole.webp)

In other words, establishing the role catalog aims to list exhaustively and explicitly all the roles
in the organization, hiding the technical complexity of entitlements behind the business vision of
user-friendly names and categories, in order to:

- assign roles to users, by
  [requesting them manually](/docs/identitymanager/6.1/identitymanager/index.md),
  or using
  [rules that assign roles automatically](/docs/identitymanager/6.1/identitymanager/index.md)
  based on users' attributes;
- simplify the implementation of Segregation of Duties (SoD);
- simplify the implementation and execution of access certification campaigns.

Roles are not chosen at random as they must correspond to the way entitlements were modeled during
[connector modeling](/docs/identitymanager/6.1/identitymanager/index.md).

### Technical Principles

Usercube's roles are all built the same way. Technically speaking:

- a role is part of a policy which is a subgroup of the role model.
  [Read more about the concept of role model](/docs/identitymanager/6.1/identitymanager/index.md).

  > Let's take the example of the unlimited Internet access, part of the default policy.

- a role is created to be owned by users represented by a given entity type;

  > We choose users from `Directory_User`.

- roles need to be structured so
  [categories](/docs/identitymanager/6.1/identitymanager/index.md)
  are created to:

  - represent groups of roles that follow the same validation process with the same validator(s);
  - help users find intuitively the entitlement that they are looking for.

  NETWRIX recommends creating one category per application, as this method often fulfills both
  requirements.

  Then single roles can be grouped together through
  [composite roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  for applicative purposes, allowing users to be assigned several entitlements simultaneously.
  Leave composite roles for later, when the system runs as is and would benefit from an additional
  layer in the
  [role model](/docs/identitymanager/6.1/identitymanager/index.md).

  > This role is part of the previously created `Internet` category.

- a role is created with a given approval workflow according to the entitlement's sensitivity;

  ![Schema - Approval Workflow](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemaapprovals.webp)

  > We choose to require one manual validation from a knowledgeable user before the Internet role
  > is assigned to a user.

- to be effective, roles must be linked to actual entitlements in the managed systems. Technically
  speaking, this means that for each entitlement that you want to assign through a given role, you
  must create a
  [navigation rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
  to build said link. A navigation rule is specific to one
  [resource type](/docs/identitymanager/6.1/identitymanager/index.md).

  ![Schema - Single Role with Navigation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarolerule.webp)

  > We link the role to the entitlement named `SG_APP_DL-INTERNET-ALL` in the AD, via a navigation
  > rule that assigns this entitlement to the `memberOf` property of AD nominative accounts, for
  > all users having the role.

  This part is about
  [single roles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md),
  dealing with entitlements one-to-one. The idea is to associate one single role with one
  fine-grained entitlement.

  ![Schema - Roles and Identities](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarolesidentities.webp)

  > For example, an accountant needs read access to the accounting software, a project manager to
  > their billable hours for their projects on SAP, etc.

  When roles are well-defined, one entitlement request must lead to the direct functional
  entitlement assignment. No more, no less.

## Strategy for Role Creation

### Role structuring

Functionally speaking, the main benefit of roles is to give entitlements user-friendly names, easily
understandable by managers. And to be understandable, roles must be structured.

The strategy for role creation and structuring varies according to the
[model established](/docs/identitymanager/6.1/identitymanager/index.md)
for a given system. Here, we will take as example the common use-case that organizes and categorizes
roles by application. Then, the strategy varies whether the system hosts a single application (like
SAB or SAP) or several (like the AD or LDAP).

In any case, role creation and maintenance are made easier by entitlements' naming conventions.
Thus, no matter the kind of system that you are working with, if the system uses no naming
conventions, then you should start by creating some. They will be the basis for role structure in
Usercube, and will really simplify role creation.

#### One system for one application

A common and intuitive case is when a system is simply one application. Then, integrators can create
one role per entitlement in said application, and one category for the application.

> The SAP application is about entitlements only for itself. Then, we create a single role per
> entitlement in SAP inside a category called `SAP`:
>
> ![Roles Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymono_v602.webp)

#### One system hosting several applications with existing naming conventions

If a given system is used to manage entitlements for several applications, then building categories
becomes more complicated.

> For example, the Active Directory usually hosts many groups used to manage entitlements in several
> distinct applications.
>
> ![AD Groups](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymulti_v522.webp)

The goal here is to find a way to clarify the link between each entitlement and the corresponding
application.

If the system uses naming conventions for entitlements, then it is possible to deduce the
application it corresponds to, from the entitlements' names.

> For example, a group is called `SG_APP_banking/digital/haumea/reader` in the AD. The membership to
> this group gives an entitlement. Knowing the organization, integrators understand that this
> entitlement is about the department `banking`, the position `digital`, the application `haumea`
> and the access right `reader`.

Roles can be created accordingly, with one role per entitlement and a category per application.

#### One system hosting several applications without existing naming conventions

However, in the case of a connector for several applications, sometimes no information can be
deduced from the entitlements' names. It is still necessary to find a way to clarify the link
between each entitlement and the corresponding application.

Then, the solution is to add information inside the managed system, creating a specific field or
filling an empty field.

> For example in the Active Directory, integrators can modify the field called `description` to
> specify the application name (such as Outlook in this example).
>
> ![Appropriated Field](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymultinoname_v522.webp)

Thus, the needed information is added to the managed system. After the execution of synchronization,
said data is accessible inside Usercube database and can be used as a naming convention.

In some cases, integrators are not allowed to create/modify fields in the external systems. Then,
the information can be added on Usercube side only. As the new field doesn't exist in the external
systems, it can't be overwritten.

### Automation of role creation

The UI provides tools to create single roles
[manually](/docs/identitymanager/6.1/identitymanager/index.md),
working top-down from abstraction (role name) to the technical aspects (navigation rule and
technical entitlement). Most projects use thousands of single roles, which makes role creation a
long, tedious and repetitive process.

![Schema - Role Creation Top-Down](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schematopdown.webp)

Roles can also be created bottom-up via
[role naming rules](/docs/identitymanager/6.1/identitymanager/index.md).
Instead of the previous process, you can use the name of said entitlement in your managed system to
create automatically the corresponding single role and rule (and category if it does not already
exist). In other words, Usercube's naming rules are to be based on your existing naming conventions
for entitlements.

![Schema - Role Creation Top-Down](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemabottomup.webp)

One naming rule can generate many roles, so a few automatic rules can easily and faster create the
single role catalog. Naming rules prove particularly useful when you need to add multiple new
permissions in your external system. You won't have to create manually the corresponding categories,
roles and rules as long as said permissions are created with properties matching the conditions from
the rules.

NETWRIX recommends starting the role catalog with as many naming rules as possible before creating
roles manually.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                                       | Output              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [Connector's data model](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Provisioning Rules](/docs/identitymanager/6.1/identitymanager/index.md) (required) [Classification](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Single role catalog |

## Create the Single Role Catalog

Create the single role catalog by proceeding as follows:

1. Create as many single roles as possible (with their navigation rules and categories) via
   [role naming rules](/docs/identitymanager/6.1/identitymanager/index.md).
2. Complete the role catalog if needed by creating manually additional
   [categories](/docs/identitymanager/6.1/identitymanager/index.md)
   and
   [single roles with their navigation rules](/docs/identitymanager/6.1/identitymanager/index.md).
3. Add
   [composite roles](/docs/identitymanager/6.1/identitymanager/index.md)
   to the single role catalog only if the project is mature enough. Composite roles are more complex
   than single roles and they are not mandatory.

## Impact of Modifications

[Simulations](/docs/identitymanager/6.1/identitymanager/index.md) are
available in order to anticipate the changes induced by a creation/modification/deletion in roles
and navigation rules.

## Next Steps

Once the role catalog is established, integrators can start
[role officer management](/docs/identitymanager/6.1/identitymanager/index.md).

The role catalog is also a prerequisite for
[risk management](/docs/identitymanager/6.1/identitymanager/index.md).

# Create a Role Manually

How to create single roles manually.

## Overview

A
[single role](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
is a way to represent an entitlement that is to be assigned to an identity. It brings a layer of
abstraction through a user-friendly name, close to the business view.

To be effective, roles must be linked to actual entitlements in the managed systems. Within
Usercube, an entitlement assigned to an identity is in fact represented by the value of a given
[navigation property](/docs/identitymanager/6.1/identitymanager/index.md),
in a resource owned by said identity. Thus, each role is linked to one
[navigation rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
per entitlement.

> For example, imagine that we want to grant unlimited Internet access to the administrator profile
> of an identity. This entitlement won't be assigned directly to the identity but to its AD
> administration account. In our Active Directory, there is a resource called
> `DL-INTERNET-Restricted` identified from among AD entries as a group. So we need to add this group
> membership to the properties of the identity's AD account, using `DL-INTERNET-Restricted` as a
> value of the `memberOf` property.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                           | Output       |
| ------------------------------------------------------------------------------- | ------------ |
| [Classification](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Single roles |

## Create a Single Role

Create a single role by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Roles** to access the roles
   page.

   ![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. On the roles page, click on the adequate category and create a role by clicking on **+ New** at
   the top right corner.
3. Fill in the fields.

   ![Create a Single Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createsinglerole_v602.webp)

   - `Identifier`: must be unique among roles and without any whitespace.
   - `Name`: will be displayed in the UI to identify the created single role.
   - `Tags`: label(s) that can later be used to filter the target roles of
     [access certification campaigns](/docs/identitymanager/6.1/identitymanager/index.md).

     NETWRIX recommends using role tags when you want to perform an access certification on a set
     of roles that are from several categories.

   - `Category`: category which is to contain the created role.
   - `Secondary Categories`: other potential categories which are to contain the created role.
   - `Approval Workflow`: represents the number of validations required to assign the created role.
   - `Approve Role Implicitly`: needs at least simple approval workflow. `Implicit` mode bypasses
     the approval step(s) if the person who makes the role request is also the
     [role officer](/docs/identitymanager/6.1/identitymanager/index.md).
     `Explicit` refuses said bypass. `Inherited` follows the
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     decision to approve roles implicitly or not.
   - `Allow Manual Assignment`: allows the role to be requested manually.

     Set to `No`, the role can be assigned only via automatic rules. Therefore, the associated
     [single role rules](/docs/identitymanager/6.1/identitymanager/index.md)
     cannot have their `Type` set to `Suggested`.

   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Maximum Duration`: duration (in minutes) after which the role will be automatically revoked,
     if no earlier end date is specified.

     The maximum duration impacts only the roles which are manually assigned after the maximum
     duration is set. Pre-assigned roles are not impacted.

     - If no duration is set on the role, the maximum duration of the associated policy is
       applied.
     - If the duration is set to 0 on the role, it prevents the associated policy from applying
       its maximum duration to it.

   - `Grace Period`: duration (in minutes) for which a lost automatic single role is prolonged. A
     review will be required to validate or decline the entitlement prolongation. Inferred
     entitlements won't be lost unless the end of the grace period is reached or the prolongation
     is declined.

     The grace period is only applied if the loss of the entitlement is due to a change in the
     rules, i.e. rule deletion or criteria changes.

     If the grace period is not defined, the value is inherited from the policy.

4. Click on **Create** and see a line added on the roles page.
5. Create at least one navigation rule with the single role as a criterion.

## Create a Navigation Rule

Navigation rules aim to assign given resources to identities based on specific criteria. A
navigation rule sets the value of the navigation property on a specific resource, if a given
condition is met. It is linked to a parent resource type that sets the target entity type. One rule
creates one navigation.

Create a navigation rule by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Rules** to access the rules
   page.

   ![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the entity type to which the future navigation rule
   will be applied.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Navigations** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Navigation Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createnavrule_v602.webp)

   - `Join`: target property whose value is impacted by the created rule.
   - `Resource`: value to be set on the JOIN.
   - `Navigation denied`: option that forbids the resource assignment.
   - `Offset of effective date`: time period that defines the actual effective date according to
     the value's start and/or end date. An offset of effective date can be useful for some
     attributes. For example, account activation and deactivation can be managed according to the
     start and/or end dates.
   - **Criteria**: conditions that, if met, trigger the created navigation.

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

When deleting a single role, caution must be used when deleting the corresponding navigation rules.
Indeed, these rules thus lose their criteria and may be applied to far too many people after that.

## Verify Single Role Creation

In order to verify the process, check that the role and rule are created with the right parameters.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select single roles and find the role you created inside the right category and with the right
parameters.

![Access Single Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.webp)

> Our example would look like:
>
> ![Example - Generated Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.webp)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select navigation rules and find the rule(s) you created with the right parameters.

![Access Navigation Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.webp)

> Our example would look like:
>
> ![Example - Generated Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.webp)

# Create Roles in Bulk

How to create
[role naming rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md),
which create single roles using existing naming conventions from the managed system.

## Overview

A
[role naming rule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
automatically creates single roles and the corresponding navigation rules based on the name of the
corresponding entitlements in the managed system.

Role naming rules replace the tedious process of manual role creation. Instead of creating roles
individually with their navigation rules, you can use role naming rules to generate roles in bulk
and thus faster create the single role catalog.

> For example, consider a naming convention in our organization that states that AD groups have
> their cn: `SG_APP_<applicationName>`. Then, we can create a naming rule that indicates that for
> all AD groups starting with `SG_APP_`, we create a role that gives the adequate user the
> corresponding group membership, with `<applicationName>` as a name. For example, we have the
> application Contoso and the group `SG_APP_Contoso`.

Roles created via role naming rules can still be modified later in the UI, if needed.

A role naming rule, for a given resource type, creates roles and rules only for resources which are
not yet linked to a role, nor a navigation rule of this resource type. This implies that:

- role naming rules do not overwrite manual changes;
- role naming rules cannot link more than one resource (so one entitlement) to one role.

If a role naming rule is supposed to create a role that already exists, then a corresponding
navigation rule is created only if the existing role has the same policy and category as specified
in the role naming rule.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                               | Output                                                    |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Provisioning Rules](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Role naming rule Single roles Navigation rules Categories |

## Create a Role Naming Rule

Create a role naming rule by proceeding as follows:

1. On the home page, click on **Access Rules** in the **Configuration** section.

   ![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the entity type to which the future naming rule will
   be applied.

   ![Entity Type Choice](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Role Naming Conventions** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Naming Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_newrule_v602.webp)

   - `Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
     in which the rule exists.
   - `Property`: navigation property which will define the actual entitlement in the future
     [navigation rule](/docs/identitymanager/6.1/identitymanager/index.md).
   - `Identifier`: must be unique among rules and without any whitespace.
   - **+ New Rule**: a naming rule is based on the union of
     [rules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md),
     themselves based on the intersection of
     [rule items](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).
     A rule item specifies one of the conditions that will trigger the enforcement of the naming
     rule.
   - `Where Expression`: C# expression returning a boolean to condition the application of the
     rule.
     [See a full example](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md).

     NETWRIX recommends using this option only when the options available in the rule items do
     not suffice.

   - **Single Role**:
     [single role(s)](/docs/identitymanager/6.1/identitymanager/index.md)
     to be created.

     - `Identifier`: must be unique among roles and without any whitespace. If the defined
       identifier is already used, then neither the role nor the rule is created. Can be defined
       by a property path and/or an
       [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md)
       (mandatory).
     - `Name`: will be displayed in the UI to identify the future single role. Can be defined by
       a property path and/or an
       [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).

   - **Category**:
     [category](/docs/identitymanager/6.1/identitymanager/index.md)
     for the future role(s).

     - `Identifier`: either matches an existing category and selects it, or doesn't match and
       therefore a new category is created. Can be defined by a property path and/or an
       [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
     - `Name`: will be displayed in the UI to identify the category. Ignored if the `Identifier`
       attribute matches an existing category's identifier. Can be defined by a property path
       and/or an
       [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
     - ` Parent Identifier`: for a potential parent category. Must match an existing category's
       identifier. Can be defined by a property path and/or an
       [expression](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).
     - `Default Category`: category for the future role(s) if the category's `Identifier`
       attribute isn't filled in or doesn't compute.

   - `Role Policy`:
     [policy](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
     in which the future roles exist.
   - `Approval Workflow`: represents the number of validations required to assign the future
     role(s).
   - `Approve Role Implicitly`: needs at least a simple approval workflow. `Implicit` mode bypasses
     the approval step(s) if the person who issues the role request is also the
     [role officer](/docs/identitymanager/6.1/identitymanager/index.md).
     `Explicit` refuses said bypass. `Inherited` follows the
     [policy](/docs/identitymanager/6.1/identitymanager/index.md)
     decision to approve roles implicitly or not.
   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Comment Management on Permission Review`: to change if different from the role policy.
     > Our example would look like:
     >
     > ![Example - Naming Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_example_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

As naming rules are applied only to resources that aren't already linked to a role or a navigation
rule, neither deletion nor modification in a naming rule can affect the previously created roles and
rules.

## Verify Naming Convention

In order to verify the process:

1. to take the changes into account, on the appropriate connector's overview page click on
   **Jobs** > **Apply Naming Conventions**;

   ![Resource Type Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. check that the correct roles and rules were created.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select single roles and find the role(s) you created inside the right category and with the right
parameters.

![Access Single Roles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.webp)

> Our example would look like:
>
> ![Example - Generated Role](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.webp)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select navigation rules and find the rule(s) you created with the right parameters.

![Access Navigation Rules](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.webp)

> Our example would look like:
>
> ![Example - Generated Rule](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.webp)

# Synchronize Data

How to launch data synchronization, i.e. read managed systems' data and load it into Usercube.

## Overview

Data synchronization is a data flow from the managed systems into Usercube.

### Process

A [connector](/docs/identitymanager/6.1/identitymanager/index.md)'s
main purpose is to read and export the data
[previously mapped with entity types](/docs/identitymanager/6.1/identitymanager/index.md)
in order to synchronize it with Usercube. Connectors provide tools to perform a basic extraction of
the system's data in the form of CSV/XLSX files. These files are cleansed and loaded into Usercube.
Synchronization is a three-step ETL process going through export, synchronization preparation and
the synchronization itself.

![Synchronization Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_schema.webp)

#### Export

The
[`Export` task](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
creates extractions, a snapshot of the managed system's data, used to insert and/or refresh the data
that is inside Usercube. Extractions are accessible when there is at least one connection with an
export-enabled
[package](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md).
Extracted data becomes meaningful when it is loaded into resources as specified by the
[entity type](/docs/identitymanager/6.1/identitymanager/index.md)
structure.

Exported data is stored inside CSV files in the folder `/{InstallationFolder}/Temp/ExportOutput`.

#### Prepare synchronization

The
[`Prepare Synchronization` task](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
performs a preparatory data cleansing to spot errors and list them in a generated file in the
`/{InstallationFolder}/Work/Synchronization` folder.

> For example, this task spots an identity if it is linked to an organization code which doesn't
> exist.

#### Synchronize

The
[`Synchronize` task](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
loads data into Usercube's database.

[**Read more about the synchronization process**](/docs/identitymanager/6.1/identitymanager/automation/synchronization/upward-data-sync.md).

### Prerequisites

#### Extracted data must have keys

Every extracted resource must have an attribute that serves as a primary key so that Usercube can
uniquely identify the resource to be added/updated/deleted during synchronization. You must have
defined keys during
[entity type creation](/docs/identitymanager/6.1/identitymanager/index.md).

#### Extractions must not be modified before synchronization

Extractions must not be modified manually, for it may induce synchronization issues.

> For example, saving an XLSX file implies an automatic modification of format.

Also, synchronization must not be disturbed by a change in the source format, such as the deletion
of a column in the middle of the file.

#### **Thresholds must never be deactivated**

Thresholds are essential safety guards that control all changes, for example preventing the
overwriting of important data by mistake. Thresholds are by default activated to warn users when
synchronization or provisioning triggers too many modifications. If the number of modifications
exceeds the specified threshold, Usercube stops the synchronization and displays a warning
_"Threshold Exceeded"_ on the log page described below.

Once the changes have been reviewed, the blocked job can be resumed (or not).

Thresholds are configured with default values using the following
[`Connector` attributes](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md):

- `MaximumDeletedLines`, `MaximumInsertedLines` and `MaximumUpdatedLines` for scalar properties;
- `MaxPercentageDeletedLines`, `MaxPercentageInsertedLines` and `MaxPercentageUpdatedLines` for
  scalar properties by percentage;
- `MaximumLinkDeletedLines`, `MaximumLinkInsertedLines` and `MaximumLinkUpdatedLines` for navigation
  properties;
- `MaxLinkPercentageDeletedLines`, `MaxLinkPercentageInsertedLines` and
  `MaxLinkPercentageUpdatedLines` for navigation properties by percentage.

## Participants and Artifacts

At this point, integrators should have all the elements they need to perform synchronization.

| Input                                                                                            | Output            |
| ------------------------------------------------------------------------------------------------ | ----------------- |
| [Connector with its entity types](/docs/identitymanager/6.1/identitymanager/index.md) (required) | Synchronized data |

## Launch Synchronization

Launch synchronization for a given managed system by proceeding as follows:

1. Access the list of connectors by clicking on **Connectors** on the home page in the
   **Configuration** section.

   ![Home - Connectors](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the relevant connector page, in the **Entity Types** frame, click on **Jobs**.

   Here are all the tasks available for synchronization. They synchronize all connections and
   entity types for only this connector. It is possible to launch them individually in order to
   test them and debug a situation, or all together with **All Tasks**. According to the created
   [connection(s) and package(s)](/docs/identitymanager/6.1/identitymanager/index.md),
   all these tasks can be launched either in
   [incremental or complete](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md)
   mode.

   ![Synchronize Job](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs_v602.webp)

   - `Update Expressions`: computes the expressions used in the entity type mapping.
   - `All Tasks`: launches all previous tasks in a row.

   Notice that some connectors, depending on their connections and packages, can't be synchronized
   in incremental mode. As a consequence, when clicking on the **Jobs** button, you wouldn't have a
   choice between `Complete` and `Incremental`. See below this note.

   ![Synchronize Job (Only Complete)](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs-complete_v602.webp)

## Manage Synchronization Automation

Export and synchronization are executed manually from the connector screens. By default, they are
also part of scheduled
[jobs](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md) provided by
Usercube:

- the
  [complete job](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/index.md)
  is scheduled to launch a synchronization once a day of all resources, modified or not;
- the
  [incremental job](/docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/index.md)
  is scheduled to launch a synchronization several times a day only of the resources modified since
  the last synchronization.

Scheduling the jobs avoids manually triggering them everyday.

However, you can choose to withdraw a given connector from both the complete and incremental jobs by
clicking on **Deactivate** on the connector's dashboard. This is particularly useful when modifying
a connector. You can also re-insert it at any time with the same button which is now named
**Activate**.

![Jobs Results Dashboard](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_dashboard_v522.webp)

You can fine-tune the synchronization and/or provisioning of the connector by clicking on the
**Edit** button.

![Edit button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_edit_v600.webp)

Click on **Job Results** to access the progress of this connector's jobs.

All jobs are accessible on the **Job Execution** page in the **Administration** section.

![Home - Job Execution](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

## Verify an Entity Type's Synchronization

In order to verify both the synchronization configuration and
[entity types](/docs/identitymanager/6.1/identitymanager/index.md):

1. Launch synchronization.
2. Access the connector's logs (from **Job Results** on the connector's dashboard) to ensure that
   synchronization completed successfully.

   ![Jobs Results](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_results_v603.webp)

3. Check that the entity types have been added to the left menu of the home page.

   ![Test Entity Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

4. Access the relevant entity types (from the menu items on the left of the home page) to check
   synchronized resources, by navigating in the UI from the accounts through a sample of
   associations, via the eye icon:

   ![Eye Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

   You should first look for configuration validation, and only later validation of the actual data
   being synchronized.

   > For example, let's say we created a connector for SAB that contains two entity types called
   > `SAB - Users` and `SAB - Groups`. Then, the home page shows them on the left.
   >
   > ![SAB Example - Home Page](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_examplesab_v522.webp)
   >
   > Clicking on `SAB - Users` displays the list of all synchronized resources.
   >
   > ![SAB Example - Data List](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_examplesab2_v602.webp)
   >
   > Clicking on any resource displays its detailed attributes, for example `Abbott Mark`:
   >
   > ![SAB Example - Resource Attributes](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_examplesab3_v602.webp)
   >
   > Clicking on any eye icon displays the corresponding resource. SAB was created here with a
   > simple
   > [user-group schema](/docs/identitymanager/6.1/identitymanager/index.md)
   > that links n users to n groups. So here, we can check these links by navigating from a given
   > user to one of their groups, to one of said group's users, to one of said user's groups, etc.

## Troubleshooting

Make sure you followed the prerequisite guidelines for synchronization.

Keep in mind that a problem observed in synchronized data might also come from a mistake made
previously in the
[connector's configuration](/docs/identitymanager/6.1/identitymanager/index.md).
Therefore, logs can give more details. Logs are accessible from the **Job Results** button on the
dashboard of a given connector.

Don't hesitate to launch synchronization-related tasks individually and observe the corresponding
logs in order to debug a situation.

#### If the connector and/or entity type doesn't appear in the menu items, then�

![Test Entity Type](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

Access the relevant connector's page and click on the
[**Reload**](/docs/identitymanager/6.1/identitymanager/index.md)
button to take into account the last changes in the entity type mappings.

#### If a newly added property doesn't appear in users' data, then�

Access the relevant connector's page to click on the
[**Reload**](/docs/identitymanager/6.1/identitymanager/index.md)
button to take into account the most recent changes in the entity type mappings.

#### If a synchronization is blocked by an exceeded threshold, then�

![Threshold warning](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_threshold_v603.webp)

Find out the reasons to decide whether or not to bypass the threshold. Proceed as follows:

1. On the logs page (accessible from the **Job Results** button), click on the line of a task
   instance to see its logs.
2. Study synchronization counters and the list of all synchronization changes. These tools help you
   make a decision about whether to bypass synchronization thresholds.

   ![Job progress](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_thresholdlog_v603.webp)

   In most cases, the first synchronization exceeds thresholds because no data exists in Usercube
   yet. Thus, a high quantity of modifications is expected and the synchronization is to be
   resumed.

   Numerous modifications can also be triggered by:

   - a change in date format;
   - the input of blank files by mistake, because it would overwrite and erase all existing data;
   - a swap of two headers in an input file.

3. If, after verifying, all changes are legitimate, click on the **Resume** button at the top of the
   job progress page. This will restart the job and allow the changes to be synchronized.

   Be cautious, check twice for mistakes before resuming.

   ![Resumed Job](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/synchro_thresholdresumed_v602.webp)

#### If an export doesn't complete, then�

- Check the connection's settings.
- If you manually typed the source column of a property in the entity types, then make sure that the
  source column exists in the corresponding managed system.

  ![Source Column](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/entitytype_sourcecolumn_v602.webp)

#### If a given property from users' data is displayed in an unexpected way, then�

Check the format of both the application metadata and the external system.

![Property Format](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/synchronization/entitytype_format_v523.webp)

> For example, if you find that a given date doesn't comply with what you set, then maybe the format
> in the External System section wasn't correctly selected, thus inducing a conversion error during
> the export computation.

# Assign Users a Profile

How to assign Usercube's access permissions to users through profiles.

## Overview

All the permissions to access items in Usercube, and to perform given actions, are managed by
assigning profiles to users and permissions to profiles. See the
[ AssignedProfile ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
and
[ References: Permissions ](/docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/permissions-reference.md)
topics for additional information.

![Schema - Profile Assignment](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/profiles_schema.webp)

For example, the access to the list of users with their personal data is usually restricted to HR
people, and the possibility to modify personal data restricted to HR managers.

We define here a permission as an entitlement within Usercube. See the
[ Configure a User Profile ](/docs/identitymanager/6.1/identitymanager/index.md)
topic for additional information.

Users are assigned profiles according to the permissions they need to work, at least one profile per
user. A user without a profile cannot access the application. Experience shows that most users have
one profile, sometimes two, and rare case have maximum three, or more.

The goal here is to link users to basic profiles.

The right time to assign profiles to users is just before they need it, so it depends on the
deployment strategy.  
For example, we connected a given application and now we want to list orphaned accounts. Then we
need to assign a role officer.

The priority is often about resource managers who will review orphaned and unused accounts.

## Participants and Artifacts

Integrators must have the knowledge of who must be able to access what within Usercube.

| Input                          | Output            |
| ------------------------------ | ----------------- |
| Configured profiles (required) | Assigned profiles |

See the
[ Configure a User Profile ](/docs/identitymanager/6.1/identitymanager/index.md)
topic for additional information.

## Assign a Profile to an Account

In the following section you will read about how to assign a profile to an account.

Manual assignment

Assign manually a profile to a user by proceeding as follows:

![Home Page - Assigned Profiles](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-assignment/home_assignedprofiles_v602.webp)

**Step 1 –** Access the **Assigned Profiles** screen from the home page in the **Administration**
section.

![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

**Step 2 –** Click on the addition button at the top right corner.

![New Profile](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-assignment/roleofficers_newprofile_v602.webp)

**Step 3 –** Fill in the fields.

- **Profile**: Profile chosen from among existing profiles.
- **Resource**: Identity chosen from among entries to be assigned said profile.
- **Profile's Email**: Email created in order to receive the corresponding approval requests.
- **Deny this Profile**: Option that forbids the profile assignment instead of applying it.
- **Start Date** and **End Date**: Particularly useful for profile delegation.

**NOTE:** If filters are defined in the Access Rules, and are assigned to the profile, a
**Criteria** section will appear containing them. Filters are conditions that, if met, trigger the
Access Control Rule Application.  
The only filters which can be displayed in this section are filters related to dimensions or hard
coded criteria (Single Role, Composite Role, Resource Type and Category).  
The filters are defined in the XML configuration on the access control rules. The criteria displayed
are a fusion of the filters of all the rules associated with the profile. See the
[AccessControlRule](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
topic for additional information.

Automatic assignment

The largest profiles with the most basic permissions (like a simple access to the application)
concern many identities and are low-privileged. Thus integrators can set up profile assignment rules
through the XML configuration in order to assign profiles automatically, based on accounts' resource
type and potentially specific criteria. See the
[ProfileRuleContext](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
topic for additional information.

![Launch Button](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-assignment/launch_v603.webp)

Click on **Launch** to apply these profile rules.

**NOTE:** Profile rules can also be applied through the same button on the **Profiles** page, by
clicking on **Settings** in the **Configuration** section, then on **General** > **Profiles** in the
left menu.

## Delegate a Profile

Sometimes, users need to lend their entitlements, while on leave for example. In this case, it is
interesting to create new profiles, identical to the initial ones but without the right to delegate
the corresponding entitlements.

For example, let us consider the Manager profile which we appointed as request validator per
department. In order to ensure the presence of all validators at all times, we choose to create a
Assistant Manager profile which is to be assigned occasionally to another user by a manager. A user
with the Assistant Manager profile will receive exactly the same entitlements as someone with the
Manager profile, except for the ability to assign the Assistant Manager to another user.

Thus no workflow in Usercube can be blocked by the absence of the workflow's actors, and security is
ensured by preventing unwanted entitlement delegation.

## Verify Profile Configuration and Assignment

In order to verify both profile configuration and assignment, check that a sample of users can
effectively perform the actions allowed by their profiles. See the
[ Configure a User Profile ](/docs/identitymanager/6.1/identitymanager/index.md)
topic for additional information.

A functioning and well-assigned profile must not trigger 403 errors in the server logs, nor in the
UI in the form of a red notification at the bottom right corner of the application. This kind of
error appears if an entitlement is incomplete, i.e. giving access to a button but not to the page
said button leads to.

For example, you can check whether an ordinary user can access another user's personal data from the
**Directory** tile.

# Configure a User Profile

How to tweak the
[permissions](/docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/permissions-reference.md)
for actions within Usercube, for a set of basic
[profiles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md).

## Overview

All the permissions for accessing items and performing actions in Usercube are managed by assigning
[profiles](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md)
to users and
[permissions](/docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/permissions-reference.md)
to profiles.

![Schema - Profile Assignment](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/profiles_schema.webp)

> For example, access to user lists with personal data is usually restricted to HR staff, and the
> modification of personal data would be restricted to HR managers.

We define here a permission as an entitlement within Usercube.

Permissions can be about:

- administration, which gives access to
  [administration](/docs/identitymanager/6.1/identitymanager/index.md) actions,
  accessible in the **Administration** section on the home page;
- directory, which gives access to users' data (with several available levels of access), and also
  any other data accessible in the **Directory** section on the home page;
- workflows, which gives access to actions for users' lifecycle (onboarding-movement-offboarding),
  through the workflows provided by Usercube within the **Directory** pages;
- reports, which gives access to Usercube's
  [predefined reports](/docs/identitymanager/6.1/identitymanager/index.md)
  about workforce.
- notifications, which enables notification reception when specific workflows are launched.

NETWRIX recommends creating and using the following profiles:

- `Administrator` for requesting entitlements, performing potential additional role reviews, and
  updating user data, the role model and the settings;
- `Helpdesk` for requesting entitlements and updating user data only, not for updating the role
  model or other settings;
- `HR` for managing internal users, i.e. creating, updating and deleting them;
- `Manager` for requesting their teams' entitlements and managing their external users, like
  contractors;
- `RoleOfficer` for reviewing and approving roles;
- `User` for basic viewing of user and organizational information.

A user can have up to 10 assigned profiles.

The goal here is to create profiles and link specific permissions to the profiles, in order to build
a set of typical profiles that will later be
[assigned to power users](/docs/identitymanager/6.1/identitymanager/index.md).
Instead of assigning permissions one by one to users, you will assign them sets of permissions (i.e.
profiles).

### Responsibility scopes

Each permission can be assigned a responsibility scope, which represents the scope of action of
users with said permission.

> For example, managers can be assigned the `View Requests` and `Manage Accounts` permissions, but
> only for the teams in which they have the manager title. In this case they will handle the
> entitlement requests within the team they manage, having their scope of responsibility defined as
> their team. It means that the manager cannot see or do anything outside the identities included in
> their team.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the IGA project.

| Input                                                                                | Output        |
| ------------------------------------------------------------------------------------ | ------------- |
| [Identity repository](/docs/identitymanager/6.1/identitymanager/index.md) (required) | User profiles |

## Configure a User Profile

Configure a user profile by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **General** >
   **Profiles** in the left menu.

   ![Home - Configuration](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. Check whether the profile to configure is part of the provided list. If not, create it by
   clicking on the addition button at the top right and fill in the fields.

   ![Addition Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Profile](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/profiles_creation_v602.webp)

   - `Identifier`: must be unique among profiles and without any whitespace.
   - `Name`: will be displayed in the UI to identify the profile.

   Click on **Create**.

3. Access the page for profile configuration by clicking on **Workforce** > **Profiles &
   Permissions** in the left menu.
4. Follow Usercube's instructions for assigning permissions to the profile by clicking on the
   appropriate permissions, one by one, selecting if needed their responsibility scope.

   ![Profile Configuration Example](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/profiles_example_v603.webp)

5. Click on **Save** at the top of the page.

   ![Save Icon](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Profile Configuration

Before you can see the profile in action, it needs to be assigned to a user.

[See these instructions for assigning profiles to users](/docs/identitymanager/6.1/identitymanager/index.md).

## Next Steps

Once user profiles are configured, integrators can start
[configuring onboarding workflows](/docs/identitymanager/6.1/identitymanager/index.md).

# What's New

## New Netwrix Community!

All Netwrix product announcements and bug fix lists have moved to the new Netwrix Community. See
announcements for Netwrix Usercube in the
[Usercube](https://community.netwrix.com/c/identitymanager/announcements/150) area of our new community.

The following information highlights the new and enhanced features introduced in this Netwrix
Usercube version.

## Netwrix Usercube v6.1 Released 8-Apr-2024

Major Highlights

- New bulk features are available for the administration screens listed below. To use, filter to
  select the desired elements, click on the new **Bulk** button, and choose from the presented
  options.
  - Provisioning Review, in the case of errored provisioning orders
  - Role Review
  - Resource Reconciliation
  - Manual Provisioning
- The technical base has been upgraded and will last for the next few years. Concretely, the Runtime
  and the Agent prerequisites have changed: the .NET 8.0 runtime is now required instead of dotnet
  6.0.

- Access Control and Workflows
  - On workflows the "Save" button label has been changed to "Save Draft".
- Certifications and Risks
  - Certification campaign targets are now more clearly described on the campaign summary screen.
- Logs / Performance / Security
  - Improved error messages.

Other Enhancements

- The Usercube-Manage-History.exe now handles large databases when the `purge-before-date` and the
  `purge-before-months` parameters are used.
- For the SaaS environment, certain restrictions for the quantity of sent emails have been put into
  place.

# Usercube v5.x Release Notes

## Version 5.2.3.19

Release date 10-Oct-2022

#### Enhancements

- Connectors and Integrations
  - New option to specify the filter column by EntityType in Cyberark/SCIM to mitigate export
    errors due to extraction limits.

#### Fixed Bugs

- Jobs and Policy
  - For security, when assigned resource types are canceled due to inconsistent data, they are now
    blocked despite the block provisioning attribute being set to false.
  - The naming conventions task no longer fails with an "EMPTY" error message when a naming rule
    uses only indirect properties of the mapped group (instead of direct properties).
- Logs / Performance / Security
  - The database history will no longer grow indefinitely when there are navigation rules
    targeting deleted groups/profiles. Previously, the history was increased after each role model
    evaluation.
- UI / UX
  - Enhanced performance when displaying the Workflow Overview page.
- Other
  - The custom links feature now allows the targeting of a URI outside the Usercube application
    not only from the dashboard, but also from the left menu.

## Version 5.2.3.17

Release date 27-Sep-2022

#### Fixed Bugs:

- Access Control and Workflows
  - Unauthorized errors will no longer occur in specific cases where certain dependent data is
    modified in a workflow.
  - When using Usercube's Workflow connector for an HR synchronization, error messages are now
    stored in the database as well as in the log files.
  - In addition, the workflow connector's package could handle only provisioning orders for
    identities with multiple records. Now, the connector also works for identities without
    records.  NOTE: The agent needs to be upgraded to benefit from this correction.
- Connectors and Integrations
  - For a SCIM/Salesforce connector, under certain conditions permissions were deleted and created
    at each synchronization.  This has been corrected.
  - New option to specify the filter column by EntityType in Cyberark/SCIM to mitigate export
    errors due to extraction limits.
- Jobs and Policy
  - New hierarchical dimensions are now immediately calculated without needing to restart the
    Usercube server.
  - Resources could be correlated using rules from other types. Now, the correlations are computed
    using only the rules of the expected resource type.
- Logs / Performance / Security
  - Improved role query performance when filtering by category (on the Access Roles screen and in
    the catalog of the role permission basket).
- Other
  - Is it now possible to use `--product-translations` to import product translation files when
    deploying the configuration to the SaaS environment.

## Version 5.2.3.16

Release date 12-Sep-2022

#### Enhancements:

- Connectors and Integrations
  - Some systems using the LDAP protocol require some attributes for creation and/or update
    requests. If these attributes are not synchronized in Usercube, they cannot be provided by
    scalar rules or navigation rules. Now, these attributes can be given as arguments in the
    provisioning order, using the ResourceType's ArgumentsExpression. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md).
  - For the PowerBI integration, a new configuration parameter permits choosing between showing
    the identifier or the display name for columns in PowerBI. After the changing the parameter
    and deploying the configuration, the PowerBI cache must be fully emptied.
- Jobs and Policy
  - The configuration deployment tool now throws an error if two different tasks use the same
    identifier. (To add the same task to more than one job the `step` tag can be used.)
- Logs / Performance / Security
  - More coherence checks are made when importing with the configuration deployment tool.
  - The server now gives more detailed information about PowerBI errors.
- Other
  - When the server is launched, the database is now upgraded to the latest version.
- UI / UX
  - A new custom menu link feature has been added. It enables the configuration of custom links
    that let the user navigate to a custom static HTML pages. At this time, only two custom link
    settings can be configured. Two examples have been added to the Usercube demo configuration
    with URLs : /LegalNotice & /TermsService. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md)
    for more information.

#### Fixed Bugs:

- Access Control and Workflows
  - The deploy configuration tool now correctly reads languages 9 to 16 for email notification
    templates.
  - Notification emails are no longer sent multiple times to the same group and/or generic email
    address.
- Jobs and Policy
  - Corrected an issue where, occasionally, the first user that opens the permission basket after
    a server restart could get a runtime error.
  - Corrected an issue where manual assignments were lost when updating owner information.
  - Assigned resource types are no longer canceled when the resource type grouping parameters are
    changed (P0, etc.).
  - All group memberships are now retrieved when using an Active Directory connection. Previously,
    restored objects (that had been previously deleted) were excluded.
- Logs / Performance / Security
  - Performance issues have been corrected when using the View History feature for an identity.
- Other
  - The option `--product-translation` has been fixed, allowing the export of the product
    translations.
- UI / UX
  - Top menu bar links now refresh correctly when a list, without default value for the top menu
    bar, is opened.
  - Column headers on generic list pages are now displayed in the correct language.
  - Search bar filters now properly take into account the `AddedMinutes` for date values.

## Version 5.2.3.12

Release date 28-Jul-2022

#### Enhancements:

- Access Control and Workflows
  - For homonym filters, bindings from different entity types can now be used. For example, it is
    possible to verify that a new user does not an already exist as employee **or** a guest.
- Connectors and Integrations
  - Fulfill capabilities have been added to the EasyVista connector: employees can be created,
    updated and archived (to the extent allowed by the EasyVista API).
  - The SCIM connector, when used with Salesforce, was limited to 2000 users. It is now able to
    export all users.
  - The SCIM connector also had some issues when provisioning attributes from extension schemas.
    It is now able to provision any attribute in any SCIM-compatible instance.
- Jobs and Policy
  - When FulfillWorkflow is used with the ResourceIdToCopy parameter, the provisioning order
    didn't set null values for null navigations. Now, a cloned record can have navigation
    properties that are null.
- Logs / Performance / Security
  - New verbose logs show the data source paths (CSV or PowerShell script paths) that are allowed
    by the agent as specified in the connections settings file.
- UI / UX
  - On the dashboard, it was not possible to add MenuItem with URI targeting a page outside the
    Usercube application. Now, any link is allowed in the MenuItem.URI property.
- Other
  - A new API retrieves entity type data that has been updated (creation, modification or
    deletion), in an incremental mode, from a given date. See the [documentation]
    (/integration-guide/api/server/resource/index.html#apiresourceincrementaltypedate).
  - When the server is launched, the database is now upgraded to the latest version if necessary

#### Fixed Bugs:

- Access Control and Workflows
  - If a property is in a VisibilityGroup and a user without permissions wants to query it with
    the Query Module, an empty column will be returned instead of the real values.
  - Previously, a browser's cache had to be cleared after updating a UI form's configuration. Now,
    simply re-opening the browser will take the new changes into account.
  - The RemoveDiacritics method now replaces special characters like � or � with their non
    accentuated equivalent (oe and sh for these examples).
  - The Workflow Overview screen is shown without error when a record is added during a workflow
    request step and subsequently removed in the review step.
  - At the end of a workflow, mandatory drop-down lists that had only one pre-filled value no
    longer generate validation errors.
  - In workflow forms, the combo box items are now systematically sorted in alphabetical order.
  - Fixed an issue where 500 errors appeared in workflows or in the permissions basket after a
    property had been removed by a configuration change.
- Certifications and Risks
  - In certain cases, AccessControlRules for AccessCertificationItems were not respecting a single
    filter. Now a single filter is respected.
- Connectors and Integrations
  - When an unplugged connection is used in a connector already containing synchronization
    connection(s), the prepare synchronization no longer fails.
  - On the connector screen, labels for Active Directory and LDAP resource type settings have been
    clarified.
  - The Excel connector can now properly do exports when date columns also contain the time.
- Jobs and Policy
  - During a new composite role's validation, linked single roles that were "pre-existing" are no
    longer temporarily deleted.
  - Correction for an issue where, under certain circumstances, a denied role could stay on the
    role review screen.
  - Navigation rules are now properly taken into account when created via the UI.
  - Canceled assigned resource types are now correctly deleted once the target resource is
    deprovisioned.
  - Denying a role linked to a non-conforming account is now correctly handled so that the deny
    decision will be remembered and the role will no longer appear for validation.
  - Role model computation results are now always the same whether executed via a workflow or
    executed via the executable.
  - Corrected a regression where, while manually running jobs with a remote agent, the job
    initiator was empty.
  - All single roles related to parameterized navigations in a non-conforming state are shown as
    non-conforming. Previously, only a few were shown.
- Logs / Performance / Security
  - Corrected certain SQL deadlocks that were happening when workflow changes were persisted while
    the Usercube-Generate-ProvisioningOrders was running.
  - The bindings required for each workflow step are now stored in a cache in the Temp/Cache
    folder. This enhances cold start server performance.
  - The SetRecentlyModifiedFlag task has been optimized.
  - Performance enhancements for screen loading times.
  - The workflow summary has been optimized to load more quickly.
  - Submitting a workflow request could trigger hundreds of small database queries when many roles
    and accounts were added or removed to the user. Now, the database queries are batched together
    to reduce the workflow execution duration.
  - The dashboard counters are updated less frequently to enhance the application's performance.
  - Correction for an issue where, after a server restart, if many workflow requests were executed
    immediately, some could fail with a 500 error.
- UI / UX
  - Navigating through certain workflows no longer incorrectly affects the filter on the Access
    Roles page, so roles linked to a disabled policy are now correctly displayed.
  - When a workflow was initiated from a top level menu, sometimes the URL path was incorrectly
    built using an incorrect origin. Now the path is correctly built.
  - On pop-up windows, the action buttons are displayed if the window height has been changed, for
    example after resizing a page or zooming.
  - To avoid date confusion, if an incorrect number of digits are typed into a date field, an
    error is now displayed.
  - On lists of entity types, display indicators now correctly update depending on the chosen
    language.
- Other
  - The configuration export is now more reliable when a connector is created via the UI.

## Version 5.2.3.03

Release date 3-Jun-2022

#### Fixed Bugs:

- Connectors and Integrations
  - When verifying permissions for new schema objects in an Azure AD, service account permission
    verifications could fail and the synchronization job would also fail. Now a lack of
    permissions for new schema objects does not block the entire synchronization. NOTE: This
    requires that the agent be upgraded.
  - When writing to LDAP directories, the LDAP connections were not reused when there were a very
    large number of provisioning orders. Now, the LDAP connections are pooled correctly to
    optimize job performance. NOTE: This requires that the agent be upgraded.
- Jobs and Policy
  - Corrected a regression where certain custom emails, sent via a job, caused an error.

## Version 5.2.3.02

Release date 31-May-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/identitymanager/6.1/identitymanager/index.md) section must therefore
be followed.

For licensing reasons, the Oracle and MySQL dlls have been removed from the Runtime. If these
connectors are used, please refer to the documentation for
[MySQL](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
and
[Oracle](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
for more information.

#### Fixed Bugs:

- Access Control and Workflows
  - Previously, clicking on a link in a Usercube email worked only when the user was already
    authenticated. Now the link is correctly reached even if an authentication detour is required.
- Connectors and Integrations
  - On connections with secured options, corrected an issue when saving values if no secured
    option is specified.
  - The `CreateAgentSynchroIncremental` scaffolding now verifies the connection types so that only
    connectors with incremental synchronizations are included.
  - Correction for an issue when loading certain entities with PowerBI.
- Jobs and Policy
  - The Usercube-Set-RecentlyModifiedFlag task performance could be degraded in large databases.
    The task is now optimized.
  - Offsets are correctly applied when there are overlapping positions for an assigned resource
    type that is given by a single role.
  - When deleting a resource using the fulfill internal workflow with an Exclusion Expression in
    the Context Rule for the corresponding entityType, if the Exclude Expression doesn't evaluate
    correctly at runtime then the owner is now automatically excluded and a message is logged.
    Also, the task now ends in a warning state.
  - Scalars and navigations are correctly computed when an assigned resource type is given
    manually.
  - Emails configured to be sent when jobs end in a specific state, now indicate the job's
    identifier (instead of the database id) and the state (error, warning, etc.) of the job.
  - The permissions for `ProvisioningPolicy/Policy/Query` and `ProvisioningPolicy/Policy` have now
    been removed from the BasketRulesControlRules scaffolding. They give access to the dashboard
    icon "Policies" which should not be part of this scaffolding. If this scaffolding is in use,
    the permissions won't be modified immediately in the database, but will be removed after a
    configuration deployment. If preserving them after a configuration deployment is necessary,
    they should be added in manually for the appropriate profiles or configuration migration can
    be performed.
  - When the case of an AD attribute is changed, it's now correctly taken into account in the
    provisioning order.
- Logs / Performance / Security
  - Corrected an issue where multiple updates created a database dead lock.
  - Exceptions related to asynchronous SQL executions are now logged.
- UI / UX
  - On the Assigned Profiles screen, edit and delete buttons are visible only when the user has
    the right to perform such an action.
- Other
  - When there is only one universe in a query module, the query is now correctly retrieved when
    reloading the page or copying/pasting the URL.

## Version 5.2.3.01 - Release Candidate

Release date 17-May-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/identitymanager/6.1/identitymanager/index.md) section must therefore
be followed.

For licensing reasons, the Oracle and MySQL dlls have been removed from the Runtime. If these
connectors are used, please refer to the documentation for
[MySQL](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
and
[Oracle](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
for more information.

#### Enhancements:

- Access Control and Workflows
  - Homonym searches are now more customizable. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/index.md)
    for more information.
  - Improvements to the ToSoundex method used in expressions: now, all diacritics glyphs are
    replaced by simple letter to get the Soundex value.
- Certifications and Risks
  - The certification campaign page has been simplified to facilitate the review of access items:
    suggestions are provided based on the role model and a help dialog has been added.
    ![Certification](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.certification.webp)
- Connectors and Integrations
  - The PowerBI report generated by the Role Mining tool has new tabs with metrics about the
    generated rules.
  - Two new connectors are now available for EasyVista in the Usercube marketplace. One allows the
    synchronization of users and the other allows the provisioning of tickets. For more
    information see the documentation, for
    [users](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
    and
    [tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md).
    Please contact your customer success manager for information about licensing. NOTE: This
    feature requires that the agent be upgraded.
  - On the connector screens, source columns are now modifiable by the user even without a schema
    refresh.
  - For the ServiceNow package and the ServiceNow ticket package, client id and secret have been
    transformed as secured options.
    ![SecureOptions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.servicenowsecureoptions.webp)
  - For the AzureAD connector, exporting the extension attributes is now allowed.
- Jobs and Policy
  - When a job is blocked due to exceeding a synchronization threshold, a "Synchronization
    Changes" tab is displayed on the job detail page and entity types can be selected to see all
    changed resources
    ![DepassedThresholdCounters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.depassedthresholdcounters.webp)![DepassedThresholdChanges](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.depassedthresholdchanges.webp)
  - Integrated a new "Literal" expression option, reducing the need for C# code for simple cases.
    The "Literal" expression is available for ResourceScalarRule expressions, ResourceQueryRule
    source expressions and EntityPropertyExpression expressions for creation and update. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md)
    for more information.
  - The role model simulation has been redesigned and has more fonctionality.
    ![SimulationAddDelete](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.simulationadddelete.webp)![SimulationResults](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.simulationresults.webp)
  - Resource Types have a new option, "Depends On" which assures that resource types are created
    in the correct order. For example, an Exchange Account would be created after the Active
    Directory account.
    ![ResourceTypeDependsOn](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.resourcetypedependson.webp)
  - The Usercube-Set-RecentlyModifiedFlag tool now propagates "dirty" flag on users to their
    associated records.
- UI / UX
  - The dashboard has been enhanced. Icons are now color-customizable and administration icons are
    split by entity type and the counters for administrative actions have been re-introduced.
    ![Dashboard](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.dashboard.webp)
  - A setting has been introduced to disable dashboard counters related to the provisioning
    screens (Role Review, Provisioning Review, Role Reconciliation, Resource Reconciliation and
    Manual Provisioning. This can help with performance issues. See `DisableProvisioningCounters`
    in the
    [documentation](/docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md).
  - Entity histories are now available. Browse an entity's history and view all the events related
    to that entity. Events of the same type can be compared in order to see differences between
    dates.
    ![ViewHistory](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.viewhistory.webp)
  - An entity's data can now be viewed as of a specific date.
    ![DataAsOfDate](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.dataasofdate.webp)
  - Enhancements have been made to the Resource Type screens so that the correct flow of actions
    is encouraged.
  - On the Assigned Profiles screen, the search operator on the Profile column now uses a
    "Contain" filter instead of "StartWith".
  - The screen for defining automation rules has been improved for clarity.
    ![AutomationRules](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.3.automationrules.webp)
- Other
  - When exporting the configuration, the option �mark-for-export will now flag all items created
    via the UI so that they will also export. A second execution of the task is no longer
    necessary.
  - Additionally, there is a new option that will mark certain elements of the Role Model for
    export (�mark-rolemodel-for-export). Currently this includes the following items created via
    the UI:
    - Single Roles
    - Composite Roles
    - Single Role Rules
    - Composite Role Rules
    - Pending Approval Rules
  - Improvements have been made to the deploy configuration tool to catch more configuration
    syntax problems.
  - The list of keys for English and French translations have been added to the SDK.
  - Product translations can now be imported with the configuration deployment tool.
  - Role Mapping feature allows to automatically create roles and rules corresponding to an
    external system permission based on a set of naming conventions.

#### Fixed bugs:

- Access Control and Workflows
  - Workflows with a `ContinueWith` activity now correctly find all email recipients without
    throwing an error.
  - Homonym verifications that are applied in an update workflow now ignore the current resource's
    record(s) so as not to propose the same resource as a homonym.
- Connectors and Integrations
  - Synchronized values with spaces are no longer trimmed, correctly representing an exact copy of
    the incoming data. This change may generate extra reconciliation tasks.
  - The scaffolding `ConnectorMappings` now works correctly when, for entity associations,
    `IsProperty1Collection` is true. Previously it only worked if `IsProperty2Collection` was
    true.
  - In the case of a remote agent, using "Account Management" and choosing "Reset Password (by
    email)", the email is now sent correctly.
  - On the connector screens, adding a final backslash to a connection parameter (for example, a
    folder path) is now properly handled.
  - Corrected a problem where, for CSV connector synchronizations, multiple encoded quotation
    marks were causing problems.
  - On the Connector Entity Type pages, error messages have been downgraded to warning messages
    and are better placed to communicate the real issue.
- Jobs and Policy
  - When a job has an errored task and a task blocked because of an exceeded threshold, the
    "Relaunch" option is no longer available.
  - On the Resource Reconciliation page, mono-valued properties could be listed, but shown as
    unchanged. Now, they are now longer listed.
  - The `CreateInitializationJob` scaffolding's task sequencing has been corrected.
  - In certain cases, with `CorrelateMultipleResoruces` as true, `AssignedResourceScalars` could
    be duplicated in the database, blocking the compute role model. This has been corrected.
  - During internal provisioning, corrections were made when deleting resources linked to other
    resources. This case wasn't always handled correctly, causing performance difficulties.
  - When performing an RH synchronization with an associated fulfill internal workflow and when,
    for the same user, a position was added and deleted at the same time, both the add and the
    delete are now taken into account.
- UI / UX
  - When a user navigates from one entity to another, the links on the actions bar are now
    correctly reloaded based on the user's permissions.
  - Specifying a control InputType as hidden now works correctly for ForeignKey properties
  - Display tables with searchable/sortable headers are now easier to use. The search and filter
    buttons are now always displayed instead of requiring a column resize in order to access them.
  - On the connection screens, the connection identifier is now read-only after creation.
  - Corrected errors that were sometimes thrown when creating query or scalar roles via the UI.
  - Occasionally, on some browsers, elements based on the page height weren't correctly calculated
    and caused a blank page. This issue has been fixed.
  - In a workflow that manages several positions, a deleted position would move to the top of the
    list. Now it stays in its original location.
  - Now, in a layout row set, the checkbox's label is displayed next to the checkbox.
- Other
  - When updated in the configuration, two ContextRule calculated properties
    `ResourcesStartExpression` and `ResourcesEndExpression` are now correctly updated when the
    configuration is imported.
  - The configuration export tool now exports the resource key reference instead of the id for:
    SingleRoleRules, CompositeRoleRules, ResourceNavigationRules, and ResourceTypeRules.
  - The deployment configuration tool now blocks the display table column SearchOperators that are
    "FlexibleContain" since this configuration is not allowed.

## Version 5.2.2.7

Release date 12-Apr-2022

#### Fixed bugs:

- Connectors and Integrations
  - When the PrepareSynchronization finishes in error, the synchronization is now closed, so the
    next synchronizations are no longer blocked.
  - The PassworResetSetting now correctly generates a password using the `GeneratedLength`,
    `GeneratedUpperCaseCharsCount`, `GeneratedDigitCharsCount`, `GeneratedSymbolCharsCount`,
    `GeneratedLowerCaseCharsCount` options.
  - Link values in an LDAP export were written both to their own files and to the entries file.
    Now there are no duplicate lines in the entries file. NOTE: This feature requires that the
    agent be upgraded.
  - For the SCIM connector's export, the output file name for association mappings is now correct.
    NOTE: This feature requires that the agent be upgraded.
- Jobs and Policy
  - In a situation where a ResourceType can be inferred by several single roles, some of which can
    be inferred by several composite roles, giving a composite role could result in the
    ResourceType's disappearance during the approval phase. This has been corrected.
  - The ComputeRoleModel task could fail if a scalar rule value was longer than 4,000 characters.
    Now, only the specific value is tagged as an error instead of the whole task.
  - The provisioning calculation can better handle dates far into the future or the past.
  - For resources imported via XML, primary key columns are now automatically calculated.
  - Running simultaneous correlation key calculations is now blocked, in order to avoid primary
    key violation constraints.
  - Certain SQL deadlocks are now prevented when running a FulfillInternalResources task.
  - Deactivating a connector no longer removes too many tasks from scaffolded multi-connector
    jobs.
  - The Compute Role Model now correctly detects when a hierarchical dimension is cyclical and
    stack overflow errors are no longer thrown.
  - Offsets defined at the TypeRule level are now correctly applied to all properties of an
    AssignedResourceType.
- Logs / Performance / Security / Other
  - Indexed view names are now shorter (using hexa encoding) because very long names could cause
    errors while importing the configuration.
  - The Usercube-Manage-History tool now cleans the history with smaller batches to reduce the SQL
    server memory/disk usage.
  - Menus protected with dynamic filters by profile were checked for all the possible profiles
    instead of only the needed one(s). This has been optimized and now, administrators get their
    menus faster.
  - When viewing an entity, menus displayed slowly when their permissions were protected with
    complex filters. Now, the response times are greatly optimized.
  - The complexity of SQL queries performed in jobs and workflows has been greatly reduced,
    enhancing overall performance.
  - The permission basket response time has been reduced.
  - More index optimizations.
- UI / UX
  - Correction for a regression where the date selection component gave errors when the language
    was French.
  - An XML configuration with an OptimizeDisplayTable scaffolding can now be deployed if one of
    the columns is the resource's InternalDisplayName property.
  - Corrected a regression where, on the view page of an entity with records, the "View More"
    button no longer existed.
  - The job duration time is now correctly displayed when a job takes longer than one day.
  - Automation rules created by the UI and XML were displayed differently on the Automations
    screen when viewing by ResourceType. This display has now been harmonized.
  - On the workflow supervision screen, navigation bindings in display elements no loner generate
    a blank page for deleted users.

## Version 5.2.2.1 - Commercial Release

Release date 24-Feb-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/identitymanager/6.1/identitymanager/index.md) section must therefore
be followed.

#### Enhancements:

- Connectors and Integrations
  - The Export-ActiveDirectory tool has a new argument `--request-timeout` that configures the
    LDAP client-side timeout when synchronizing the Active Directory.
- Jobs and Policy
  - On the Access Rule pages, hours and minutes can now be defined for time offsets.
- Other
  - The configuration can now be deployed remotely via an HTTP post request. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)
    for more information.

#### Fixed bugs:

- Access Control and Workflows
  - A cache issue with QueryHandler queries has been corrected.
  - Profiles with filters that concern multiple records are now correctly calculating based on all
    records instead of only one.
  - Building SQL queries on complex entity models that have more than one multi-valued navigation
    no longer throws an error.
  - When synchronizing from an HR source with multiple positions, and when existing positions have
    end dates, an added position's end date is now also being taken into account.
  - When synchronizing an HR source, the triggered workflows' subjects are no longer partially
    empty for employees with positions that were added and removed at the same time.
- Other
  - For APIs, when a query specifies a multi-valued join the continuation token is now correct.

## Version 5.2.2.0 - Release Candidate

Release date 10-Feb-2022

#### Enhancements:

- Access Control and Workflows

  - Workflows that are in process or have been previously saved, can now be aborted. Once aborted,
    a purge option is now available on the Workflow Overview screen to completely remove the
    workflow.
    ![WorkflowAbort](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.workflowabort.webp)![WorkflowPurge](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.workflowpurge.webp)
  - A user can now re-forward tasks from the Workflow Overview screen:
    - If the ActivityTemplate is `ActionWithRefine`, only the previous performer can re-forward
      (the one from which originates the previous forward/re-forward).
    - If the ActivityTemplate is `ReviewWithFeedback`, only the original reviewer(s) or
      performer can re-forward.
  - Drop-down lists can now be automatically populated based on previously chosen values. In the
    following example, choosing a manager will automatically fill the �Organization' and
    �Location' fields with the manager's respective values:

    ```xml
    <Control DisplayName_L1="Position" DisplayName_L2="Poste" OutputType="LayoutFieldset">      <Control Binding="Title" />      <Control Binding="Manager" />      <Control Binding="Organization" DefaultValueBinding="Manager.MainOrganization" />      <Control Binding="Location" DefaultValueBinding="Manager.MainLocation" />    </Control>
    ```

- Certifications and Risks
  - Added performance optimizations for recertification campaigns.
  - On the Access Certification Review screen, the green pop-up confirmation notification is no
    longer displayed.
  - On the risk warning pop-up screen, a description field is now visible in addition to the
    remediation field.
- Connectors and Integrations
  - A new button on the connector screen refreshes all the connector's schemas.
    ![ConnectorRefreshAllSchemas](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.connectorrefreshallschemas.webp)
  - On the connector screens, when using the SQL Connection Package, errors thrown by fetch schema
    operations are displayed near the appropriate field.
  - The RACF connector now extracts account/group associations in a 0203.csv file.
  - On the SQL connection screens, the packages now have dedicated fields for User ID and Password
    so they can be encrypted in the storage system.
  - The two original CSV packages have been merged into one, that can do complete and/or
    incremental synchronizations according to the Path and PathIncremental attributes. NOTE: This
    feature requires that the agent be upgraded.
  - For the Excel connection package, different file paths can now be specified for complete
    and/or incremental synchronizations. NOTE: These corrections require upgrading the agent.
    ![ExcelSynchroPaths](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.excelsynchropaths.webp)
  - On the entity mapping screen, a mapped column is no longer removed from the mapping selection
    screen, so that several properties can now be defined on the same connection column.
    ![RemapColumns](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.remapcolumns.webp)
  - Updated the default web.config file to automatically start the scheduler when IIS starts.
  - For connection packages that manage an incremental synchronization mode, the jobs button now
    allows the choice between complete and incremental synchronizations.
    ![JobCompleteAndIncremental](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.virtualjobcompleteandincremental.webp)
  - The Robot Framework connector is now able to generate a secure password.
- Jobs and Policy
  - _Behavior modification_: When reconciliating a composite role, the application will not assign
    a composite role unless all linked single roles are also assigned. Previously, only one
    non-ambiguous linked single role would be enough to assign the composite role. This prevents a
    mix of allowed and denied single roles displayed on the users' permission lists.
  - When deploying the configuration, the `CronTabExpression` is now checked and an error will be
    thrown if it is invalid.
  - On the provisioning review and resource reconciliation screens, we are now able to postpone
    the decision on an individual property.
    ![PostponDecision](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.postponedecision.webp)
  - The permission assignment pop-up has been enhanced.
    - dates and comments can be directly modified
    - an item can be deleted with the button on each line
      ![PermissionsPopup](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.permissionpopup.webp)
  - Added ability to see the role requester's comment on the role review screen and in the role
    review notification email.
    ![RoleReviewComment](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.rolereviewcomment.webp)
  - On the provisioning review screen, it is now possible to filter by resource type and by
    specific properties.
    ![ProvisioningReviewWithPropertyView](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.provisioningreviewwithpropertyview.webp)
  - On the provisioning review screen, it is now possible to filter on properties once a resource
    type has been chosen.
  - An error indicator is now displayed on a ResourceType's assigned properties when the
    ProvisioningState equals RuntimeErrored.
  - Jobs from the connector screens are now moved to a dedicated category on the job execution
    screen so they are no longer intermixed with other jobs.
- Logs / Performance / Security

  - The resource identity property can now be overridden in appsettings.json, allowing different
    environments to use different settings:

    ```json
    "SelectUserByIdentityQueryHandler": \{
       "ResourceIdentityProperty": "AD_Entry:objectSid"\}

    ```

  - An agent scheduler will now wait for the lock file to be released before starting. Previously,
    it would start and immediately fail, unable to recover.
  - When C# expressions are compiled, the line number and the C# error identifier are now given.
  - C# tuples can now be used in C# expressions.
  - The complete job scaffolding now contains a new task that updates configuration-related
    database indexes.
  - For added security, the file paths used in a connector's connections are now checked against a
    list of authorized file paths located in the appsettings.agent.json under the SourcesRootPaths
    attribute. More information is available in the
    [documentation](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).
  - Added encryption support for appsettings.json agent and server files. More information is
    available in the documentation for the
    [agent](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
    and for the
    [server](/docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md).

- UI / UX
  - When creating or modifying an element that can have an offset date (`Navigation Rule`,
    `Query Rule`, `Resource Type` or `Scalar Rule`), there is now a possibility to choose "Never"
    so that the element will never expire and will display as "No End Date".
  - New customization options for the top bar/banner (background color as well as font color) are
    available by specifying the colors in the `appsettings` or in the config - using `BannerColor`
    and `BannerTextColor`. If no color is specified in the appsettings, the colors specified in
    the configuration are used. If no colors are specified in the configuration, the default
    colors are used. This allows easy configuration of color differentiation by environment.
  - On the connector screens, it is now possible to configure an EntityType's Internal Display
    Name expression.
  - When several records are changed in a workflow, the Workflow Overview screen now gives a
    position summary to indicate which position was modified.
    ![WorkflowOverviewSeePositions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.workflowoverviewseepositions.webp)
  - In workflows, child component labels are now displayed when using the `LayoutRowSet` component
    ![ChildLabels](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.childlabelsonlayoutrowset.webp)
  - In the UI only, Pending Approval Rules have been renamed as Automation Rules.
  - Automation Rules (formerly Pending Approval Rules) can now be created via the Access Rules
    screen.
    ![AutomationRules](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.automationrules.webp)
  - It's now possible to use URIs in menu items that are up to 2048 characters in length.
  - On the connector screens, specific errors are now displayed near the associated fields instead
    of as general, global errors.
  - An indicator is now displayed in the connection list when the last schema update failed.
    ![RefreshSchemaFailIndicator](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.2.refreshschemafailindicator.webp)
- Other
  - The Configuration Deployment tool has been completely re-written. New performance enhancements
    make the import faster and error and warning messages are clearer.
  - The Configuration Export tool has also been completely re-written and is now functional. With
    `--mark-for-export`, items created by the connector pages can now be exported (other areas of
    the application are coming soon). An exported configuration can now also be re-imported.
  - A new option, `--reset-database`, has been added to the Configuration Deployment tool. It
    enables a full re-set of the Usercube database using the files ResetDatabase.sql and
    Usercube.sql (they are now in the Runtime package). This allows for a new, clean Usercube
    instance, and works both locally and remotely.
  - A new literal option is available for expressions. This expression now works for
    `RessourceScalarRules` expressions, `ResourceQueryRules` source expressions, and
    `EntityPropertyExpression` expressions. Examples of the first two types of rules have been
    added to the demo configuration.
  - Two new utility functions for C# expressions: `BuildUsername` and `BuildUsernameWithInitials`.
    See the
    [C# utility functions section](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/csharp-functions.md)
    of the documentation.
  - Two demo applications representing a Banking and an HR system have been added to the SDK to
    illustrate interactions with managed systems.
  - InvokeSqlCommands can now be overridden in the agent appsettings file. More information is
    available in the
    [documentation](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)

#### Fixed bugs:

- Access Control and Workflows
  - Assigned profiles can no longer be given to users who do not possess the required resource for
    authentication and logging into Usercube.
  - In a workflow without a persist step, the last activity can now be completed from the UI.
    Previously, the message "This task has already been handled." was displayed prematurely.
  - Access review campaigns are now started based on UTC time instead of the system time.
  - In a workflow with a required photo (using AssertValueRequiredAspect) where the photo is
    missing, the assert message is now clearly visible on the missing photo's frame.
  - When the �Message' field on the �Finalize' step of a workflow contains more than 4000
    characters, a clear error messages is now displayed.
  - When an automatically assigned profile is manually denied, it will no longer be recreated.
- Certifications and Risks
  - The job that processes certification campaigns no longer tries to assign certification items
    after a campaign's end date.
- Connectors and Integrations
  - In some cases, deleted AD entries were not detected by the incremental synchronization. Now,
    the entries are always correctly removed from the database by the synchronization.
  - When creating an entity type, an error was thrown when trying to use the same identifier as
    one that had been previously deleted. Now a previously deleted identifier can be re-used.
  - A clearer error message is now presented if an incremental synchronization fails because a
    prior set of data for comparison is not available.
- Jobs and Policy
  - The "Automatic, but with validation" role option can now be used in all types of workflows.
    Before, it required the user to pass through a workflow's permissions page to function
    properly.
  - Assigned resource types' offsets are now taken account if they are inferred from a manually
    approved single role.
  - The `SetRecentlyModifiedFlagTask` no longer deletes changes generated during a blocked
    synchronization.
  - For mono-valued application permissions waiting for approval on the provisioning review
    screen, navigations are no longer staying blocked after initially being unlocked/sent or
    errored.
  - The search filters on the job page are working again.
  - After exceeding a threshold in a job and then relaunching the job, the task line now shows the
    number of entities added, deleted, and updated. Before, the counters were staying at the zero
    values from when the job was blocked.
- Logs / Performance / Security
  - When an SQL exception occurred, only the SQL error message was logged and the specific query
    was logged only if the log level was Verbose. Now, the query is logged in all cases.
- UI / UX
  - The job task "Provisioning Orders Generation" is now named "Compute Role Model" for clarity.
  - Entering an incorrect format in a date field will now give clearer error messages.
- Other
  - The PowerBI API connector now supports properties having the same name.
  - Using the Query UI or the PowerBI plugin, when displaying the resources of a given resource
    type, like "AD admin accounts", only resources of the correct type are returned. Previously,
    all resources were returned.
  - The C# expressions for the role mapping are now recompiled by the XML tool. Previously, they
    were only compiled when the -c argument was explicitly provided.

## Version 5.2.1.3

Release date 26-Jan-2022

#### Fixed bugs:

- Connectors and Integrations
  - Creating an EntityType using the UI with a plural display name no longer throws an error.
  - The connector generator tool has been re-enabled.
- Jobs and Policy
  - Removed incorrect associations with existing records when deleting resources via a
    synchronization job. This was causing problems with multi-position synchronizations.
  - For Resource Types with `DiscardManualAssignements`=true, changes needing reconciliation could
    not be manually kept as they were immediately discarded. Now, only manual values impacted by
    workflow changes are discarded.
  - When running a compute role model on an entity type having a resource type where correlate
    multiple resources was enabled, a unique key violation has been corrected.
  - Mono-valued navigations are now deprovisioned when they are deleted in source files.
- UI
  - Correction for a regression where, on multiple position workflows, the "Delete the selected
    position" button disappears when clicked.
- Other
  - Added the possibility to specify a minimum authentication algorithm for SAML configuration
    using `MinIncomingSigningAlgorithm`. More information is available in the documentation's
    [�End User Authentication' section](/docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md).
  - Correction for a situation where, when two UI controls were linked together with a
    LinkedBinding, the generated query could be incorrect when the LinkedBinding and the
    FilterBinding values differed.
  - It is now possible to configure a path to public certificates in the appsettings.json using
    the attribute ValidationKeys in the section IdentityServer. These public keys can be used by
    Usercube to validate tokens generated by external applications.

## Version 5.2.1.1

Release date 14-Jan-2022

#### Fixed bugs:

- Connectors and Integrations

  - Corrections for SCIM export and provisioning. NOTE: These corrections require upgrading the
    agent.
  - For a password reset settings:
    - The `StrengthCheck` regex can now be used to verify the auto-generated password
    - If the `MustChange` attribute is set to true, the user will now be forced to change the
      password at the first connection. NOTE: This correction requires upgrading the agent.
  - For CSV Connector packages, ANSI encoding can now be specified as "windows-1252". Previously,
    only "iso-8859-1" was working.

- Jobs and Policy

  - Correction for a regression where role parameters weren't displayed in the permissions list.
  - If an existing assigned resource property is non-conforming or pre-existing, the workflow
    state no longer changes.
  - Changed properties are now filtered based on current resource Ids. This prevents the modifying
    of linked entities' pre-existing/non-conforming permissions, for example Person.Manager.
  - Manual provisioning tasks for generated assigned resource types now respect the start date and
    the `FulfillHoursAheadOftime`
  - When values are modified in an external system, AssignedResourceNavigations are now in the
    correct state so that non-conforming navigations from query rules are now indicated as
    cancelled instead of non-conforming.
  - Fixed a bug where unmapped scalar properties were considered "verified" before the execution
    of the corresponding provisioning order.
  - When a `RecordSection` is configured, outdated records are now ignored in the Compute Role
    Model if there is an up-to-date record present.
  - Correction for offset calculations when no end date exists.
  - New permissions with effective dates that are included in, or overlapping with, dates of an
    existing permission are now correctly handled.
  - When verified assigned resource navigations are deleted in an external system, they are now
    correctly marked as missing.
  - Running the compute role model task twice without any rule changes no longer triggers any
    updates.
  - Correction for an error on the provisioning review page when requesting the creation of a new
    resource.
  - For some resource type assignments that are awaiting correlation review, the properties were
    not computed. Now, all relevant properties are correctly computed.
  - If a permission assignment is non-conforming, a TimeOffset will no longer try to modify the
    assignment.
  - Corrected an error related to checks for job cancellations during server-side tasks.
  - A policy's `IsExternal` property can no longer be updated. It can only be set when the Policy
    is created.
  - On the provisioning screen, corrected an issue when trying to assign a different resource to a
    provisioning order.
  - Modifying values of applied mono-valued navigations no longer changes the state, incorrectly,
    to non-conforming.
  - Corrected the infinite queries requests during a connector synchronization when two entity
    properties use the `Option` type.

- UI

  - On a given ResourceType, when `AllowAdd` is set to false, the ResourceType will not be an
    option when choosing new permissions. However, it will remain an option for other types of
    actions (risk or rules, for example).

- Workflows and Access Control

  - Spaces can no longer be inserted before or after values in workflow forms, such as first name
    or last name. Now, all whitespace characters are trimmed when submitting a workflow.

- Other

  - The query module no longer throws "join not found" errors when designing a query for a deep
    data model.
  - Fixed the problem with the query module that occasionally resulted in a null reference error.
  - Corrected a configuration deployment error when several `IndirectResourceRules` were
    configured with the same property.
  - Corrected a problem where encodings for `EntityTypeMappings` were lost when migrating from
    older versions to 5.2 versions.

## Version 5.1.7.17

Release date 22-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
  - During a connector synchronization, corrected a problem where a time-out was caused when two
    entity properties use the `Option` type.

## Version 5.1.7.16

Release date 09-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
  - Fixed a ComputeRoleModel regression for ResourceTypeRules using dimensions or parameters.

## Version 5.1.7.15

Release date 06-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
  - Scalars for ResourceTypes with `CorrelateMultipleResources` set to true, are no longer
    duplicated when the provisioning policy is run.

## Version 5.1.7.14

Release date 29-Nov-2021

#### Fixed Bugs:

- Jobs and Policy

  - When an existing navigation value is different from the one suggested by the role model, the
    assigned resource navigation is now marked as "Non-conforming". Previously, the state was
    incorrectly indicated as "Cancellation".

- Connectors and Integrations

  - To prevent password constraint errors, a new configuration setting,
    "PasswordGenerationSetting", permits a whitelist of allowed symbol characters for password
    generation called "AllowedSymbolChars". When provided, the white list will override the
    default symbol character list: "!;.,?()[]-\_&%$+{}@". More information is provided in the
    documentation's
    [�References' section](/docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md).

## Version 5.1.7.13

Release date 10-Nov-2021

#### Fixed Bugs:

- Jobs and Policy

  - Provisioning policy: keep the same workflow state when the existing assigned resource property
    is found or historic.
  - Provisioning policy: filter changed properties based on current resource ids (to prevent
    modifying linked entities found/historic permissions: Person.Manager).
  - Fix offset computing when there is no end date.

- Connectors and Integrations

  - Password Reset : Use the "StrengthCheck" regex to verify if the auto-generated password is
    matching.

## Version 5.1.7.12

Release date 27-Oct-2021

#### Fixed Bugs:

- Jobs and Policy
  - During the Compute Rule Model, calculating offsets on minimum and maximum date values no
    longer throws an error.
  - Fixed a SQL timeout on the Workflow Overview screen that could appear for workflows where a
    role was manually modified.
  - When a RecordSection is configured, outdated records are now ignored in the Compute Role Model
    if there is an up-to-date record present.

## Version 5.2.1.0

Release date 21-Oct-2021

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/identitymanager/6.1/identitymanager/index.md) section must therefore
be followed.

#### Enhancements:

- Certifications and Risks
  - "Declined" labels have been changed to "Refused" to keep vocabulary clear and consistent.
- Connectors and Integrations
  - The CSV Connector can now properly refresh the schema when reading files that have extensions
    different than "csv", such as "txt".
  - PowerShell sensitive options are now hidden when passing them to the API.
  - Add secured options fields for sensitive data in the PowerShell connection settings.
    ![Secured Options](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.securedoptions.webp)
- Jobs and Policy
  - Azure AD binary properties can now be provisioned.
  - Indirect permissions can now be displayed on user permission screens. See the
    [documentation](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/indirect-permissions.md)
    for more information.
    ![Indirect Permissions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.indirectpermissions.webp)
- Logs/Performance/Security
  - The new `Usercube-Manage-History` tool manages the data history stored in the database. It can
    purge old data or consolidate the history.
  - The `Usercube-Manage-ConfigurationDependantIndexes` tool has a new option "�auto" to
    automatically generate database indexes based on the specific configuration. This improves the
    database performances for the directory pages and all the review screens.
  - Just after login, the first display of the dashboard was slow because of missing SQL indexes.
    The database schema and the SQL index management tool have new indexes to optimize these first
    connections.
  - Enhanced system verifications before running the initialization job.
- Other
  - The XSD for LdapResourceTypeMapping has been corrected.
  - Using the XSD, resources can be referenced by Id, so we now propose these attributes, for
    example D0Id.
  - Added a new Report Query Universe including identified Risks.
  - The Role Mining utility now gives a better results summary, showing the percentage of existing
    permissions that are taken into account by new rules and the number of exceptions that still
    remain.
- UI
  - When multiple languages are configured, the indicator number is now used to identify the
    language in the front-end (instead of the index in the table).
  - On the Fulfill Internal Workflow connection screen, the transition list selection field is now
    pre-filtered based on the selected workflow type.
  - Search bar items that a user is not allowed to modify are now hidden.
  - Priorities can now be set on DisplayEntityTypes so that the highest priority EntityTypes will
    be selected by default on administration screens. Priorities are selected based on
    ContextRules during the migration. In most cases, these will need adjusting.
  - On the Jobs screen, progress indicators for Provisioning Policy tasks are now displayed.
  - Orphan and Uncategorized filters on resource screens have been improved.
    ![Orphan and Uncategorized filters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.orphanuncat.webp)
  - AddedMinutes is now configurable for Display Entity Properties, Form Controls and Display
    Tables (column and tile items). The value set on the Display Entity Property is the default
    value used if no specific value is set for a form control or the display table.  
    Note that the current behavior does not change for WorkflowUpdateSeveralRecordsEntity forms.
    When a property is displayed in a display table without a set value for AddedMinutes (on the
    column or tile item and therefore not on the display property either), but the property is
    displayed in the form, then the AddedMinutes set on the form control is used to display the
    property value in the display table.
  - Optimized language-related property bindings for neutral properties in DisplayTables are now
    handled.
  - New links to owners on Reconciliation and Provisioning Review screens.
    ![Links on Reconciliation](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.linksfromresourcerec.webp)![Links on Provisioning Review](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.linksfromprovreview.webp)
  - New fields for existing options are now configurable on the ResourceType creation screens:
    - Remove Orphans
    - Block Provisioning Orders
    - Discard Manual Assignments
    - Correlate Multiple Resources
      ![New Options Resource Types](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.resourcetypenewoptions.webp)
  - Errors on the EntityType configuration screen are now detected and displayed on each concerned
    field.
  - Improved the workflow state filter on the Role Review page: all "Pending approval" workflow
    states, except PendingRiskApproval, have now been grouped under one generic option "Pending
    Approval" instead of split into the different phases of approval.
    ![Pending Approval Filters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.pendingapprovalsimplification.webp)
- Workflows and Access Control
  - On the "My Tasks" screen, it is now possible to attribute tasks to a member of a review team.
    ![Assign Tasks 1](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.assignedto1.webp)![Assign Tasks 2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.1.assignedto2.webp)

#### Fixed bugs:

- Certifications and Risks
  - When creating and updating a Certification Campaign, risk options and filters are no longer
    visible in the Target Specificities or Owner filters if no risks have been created.
  - Correction for active target filters in access certification campaigns for situations where
    identity changes were planned ahead of time.
- Connectors and Integrations
  - On the Connector Connection screen, the button "Check Connection" is disabled if the "Filters"
    field is empty. This harmonizes the behavior with other connection packages and avoids a
    notification error.
  - There is now a default DataTypeConverter for the Generic SQL Package. NOTE: This correction
    requires upgrading the agent.
  - Two connections can no longer have the same name; the comparison is now case-insensitive.
- Jobs and Policy
  - Force tasks to periodically evaluate the overall job state: if the job state is finished, the
    task will now finish as well.
  - Correction for the use of `ContinueOnError` for server side tasks.
  - After deleting a resource and then synchronizing, the provisioning state is now correctly set
    to executed instead of verified.
  - The TransmittedStateValidityPeriod is now taken into account for existing provisioning orders
    and duration periods greater than one day.
  - `CommentActivation` for Role Reviews can now be set on the Policy in the XML configuration.
- Logs/Performance/Security
  - Add colors in the `Usercube-Get-JobSteps` output to make it easier to differentiate the tasks.
  - The anonymization tool now completes without exceeding the time out.
  - Added an error message when running `Usercube-Get-JobSteps` with an incorrect job identifier.
  - AzureAD cookie files are now encrypted. This is handled during migration.
  - The OpenIdClient is now retrieved and saved when workflows re-created or reviewed via the API.
- Other
  - Certain special characters are no longer removed during configuration migrations.
  - CSV report columns are now generated in the same order as they are expressed in the report
    configuration.
- UI
  - The counter refresh has been improved on the �My Tasks' dashboard icon.
  - Error notifications are now always displayed when the API returns an error 403 (unauthorized)
    when retrieving resources for a dropdown.
  - Search filters are smarter when passing from one type of filter to another.
  - Default values in search bars are now taken into account in a list displayed like a table.
  - In search fields, placeholders were incorrect when they moved from inside the field to the top
    label. For example, in a User search bar, the placeholder on the empty field Name was "Name"
    but once a value was defined in the field, the top label was "Phonetic First/Last Name"
    instead of "Name".
  - Autocomplete pickers outside of Form Controls are now displayed properly.
  - A regression was fixed so that, on the Role Review and Role Reconciliation pop-up screens, the
    link to the owner has been re-established.
  - The record display on the Workflow Overview screen now groups records properly even if their
    changes are identical.
  - Filters on boolean properties are smarter: when "No" is selected, resources with property
    value equals to "False" or "Null" are returned instead of only "False".
  - Entity Property Identifier names are now verified on the connector pages. They can't be a
    reserved word, must start with a letter, can't contain accents, must contain only letters and
    digits.
  - In workflows, RecordSortProperties defined in the configuration were previously unused. Now, a
    record list in a workflow is sortable by:
    - The RecordSortProperty, if it is defined
    - The sort defined for the DisplayTable, if it is defined
    - The first column, if the defined DisplayTable is a "table" or the ResourceId if it's a
      "list"
  - On the permission modification page, corrected a regression where the "Allow" button was
    activated when the selected permission was already allowed.
  - Harmonize the usage of data filters on primary screens and pop-up screens.
- Workflows and Access Control
  - When changes are applied during a workflow validation step, all records are now correctly
    updated instead of only one record being updated.
  - ResourceFiles are now deleted when the associated resource is deleted
  - In a multiple-step workflow with photo changes, the photo is now visible in intermediary steps
    and only the last image is persisted.
  - Added necessary permissions to the `CreateAdministratorProfile` scaffolding so that
    administrators can use the basic Risk Module.
  - The configuration deployment tool no longer permits the creation of two aspects that point to
    the same binding on the same workflow.

## Version 5.2.0.8

Release date 12-Oct-2021

#### Fixed Bugs:

- Certifications and Risks
  - Database query optimization for the Access Certification review items.
  - When no photo property is set and an access review item has been forwarded, an issue with
    nulls has been fixed.
- Connectors and Integrations
  - The AD refresh schema mechanism has been modified to require fewer permissions and therefore
    avoid "unauthorized" errors. NOTE: This correction requires upgrading the agent.
  - Corrections for the SCIM export mechanism. NOTE: This correction requires upgrading the agent.
  - The "Manage Accounts" menu was displayed for users having matching permissions on all
    identities. Access to this menu is no longer denied for users with a filtered scope of
    responsibility.
  - Corrected a random error, "Cannot compare files with a different header", on incremental CSV
    file synchronizations. NOTE: This correction requires upgrading the agent.
- Jobs and Policy
  - A cancelled assigned resource navigation is now kept when the provisioning state is
    "executed".
  - Corrected a case where automatic roles weren't removed when the user's end date arrived.
  - Corrected certain primary key conflicts when trying to merge property changes while using the
    Fulfill Internal Workflow.
  - When a single role gives permissions that are forbidden by a Segregation of Duties blocking
    risk, the Compute-RoleModel calculation no longer fails.
  - For manual provisioning modifications, when only one permission assignment is changed all the
    other provisioning states now stay as they were instead of reverting to an "executed" state.
  - All linked resources are now updated when `CorrelateMultipleResources` is activated.
- Logs/Performance/Security
  - If the ActiveDirectoryUserStore was used with the login form, the credentials submitted are
    taken into account instead of constantly reusing the credentials of the first logged in user.
    NOTE: This correction requires upgrading the agent.
  - The `Usercube-Get-JobSteps` tool now displays the tasks sorted by level and launch order
    instead of simply by launch order.
  - The selection fields on resource entities are now faster.
- UI
  - Dates using the language 'en-GB' in date selection fields now allow a date in the European
    format to be typed in, instead of forcing an American format.
- Workflows and Access Control
  - Custom email notifications with filters used in the `QueryFilterExpression` no longer throw an
    occasional "Index was outside the bounds of the array" exception that prevented emails from
    being sent.
  - Fixed an SQL timeout on the Workflow Overview screen that could appear for workflows in which
    a role was manually modified.
- Other
  - The Role Mining tool now uses less memory with huge datasets.
  - Reports generated by scaffoldings are displayed on the dedicated menu.

## Version 5.1.7.11

Release date 24-Sep-2021

#### Fixed Bugs:

- Certifications and Risks

  - When no photo property is set and an access review item has been forwarded, an issue with
    nulls has been fixed.

- Jobs and Policy

  - When an assigned resource navigation is pending deletion, the state will now stay as
    cancellation, rather than reverting to non-conforming.
  - An orphaned account that had recently been correlated is now no longer be considered an
    orphan, preventing incorrect account deletions.
  - When computed permission assignments are null, a null reference exception is no longer thrown.
  - Corrected a case where automatic roles weren't removed when the user's end date arrived.
  - All linked resources are now updated when `CorrelateMultipleResources` is activated.

- Workflows and Access Control

  - Added a new, optional, expression to `AddChangeAspect`: `AcceptNullValueExpression` is a C#
    expression that must return a boolean value in order to specify whether `Null` is a taken into
    account as the changed value when it's returned by `Expression` parameter. By default, the
    value of `AcceptNullValueExpression` is false.
  - Custom email notifications with filters used in the `QueryFilterExpression` could sometimes
    have an "Index was outside the bounds of the array" exception that prevented emails from being
    sent. This has been corrected.

- Other

  - For OpenId Connect authentication, the response_mode and response_type settings can now be
    switched from code flow with PKCE to implicit flow.

## Version 5.2.0.6

Release date 30-Aug-2021

### **Migration notice:**

This release includes updated instructions for migrating from the version 5.1.7. The migration steps
in the documentation's [Migration](/docs/identitymanager/6.1/identitymanager/index.md)
section must therefore be followed.

There is no migration to be done from version 5.2.0.2.

#### Fixed Bugs:

- Certifications and Risks
  - Corrected the generation of Certification reports: in the case of an owner's DisplayName that
    is null, we now show the Id of the owner.
- Connectors and Integrations
  - When deploying an XML configuration, a SequenceException will no longer occur when a
    ResourceTypeMapping is not linked to the correct connection.
  - The Connection used by Fulfill tasks can now be overridden. Previously, these tasks were
    always using their ResourceTypes' Connections.
  - The Salesforce connector in 5.1 agents will no longer throw a System.NullReferenceException
    when calling a 5.2 server during the provisioning of user accounts.
  - For an Oracle database connection, the IsolationLevel parameter has changed for the
    InvokeSQLTask to prevent database locks.
- Jobs and Policy
  - Deploying the XML configuration no longer deletes navigation rules that were configured from
    the UI.
  - Fixed a runtime exception that could cause ChannelClosedExceptions when launching
    ComputeRoleModel.
  - When an assigned resource navigation is pending deletion, the state will now stay cancelled,
    rather than reverting to non-conforming.
  - An orphaned account that had recently been correlated is no longer be considered an orphan,
    preventing incorrect account deletions.
  - The ComputeRoleModel task now runs successfully after the deletion of a ResourceType.
  - When computed permission assignments are null, a null reference exception is no longer thrown.
  - Null reference error should no longer be thrown by the FulfillInternalWorkflow task.
  - Multi-valued dimensions are properly taken into account during the initialization phase.
- Migration from 5.1
  - The migration to 5.2 considered a CSV file shared by several entity types from the same
    connector as an error. Now, the migration automatically creates a CSV connection shared by all
    the entity types that need it.
  - The XML generated by the 5.2 migration tool is now indented correctly.
  - When migrating the XML configuration, redundant elements are no longer generated when the same
    CSV files are used in several mappings.
  - The XML migration now sets the Manual connector package for ResourceTypeMappings that had a
    Manual fulfillment in 5.1.
  - Certain ResourceTypeMappings now migrate properly with their connection information.
  - FulfillDatabase connectors now properly migrate to FulfillWorkflow.
  - Various additional improvements to the migration tool.
- Other
  - For OpenId Connect authentication, the response_mode and response_type settings can now be
    switched from code flow with PKCE to implicit flow.
  - For clustered server installations, the appSettings.json now has a new DataProtection section
    to configure a shared certificate for generating anti-forgery tokens and protecting
    authentication cookies.
  - The generate configuration tool now also generates CSV Connections.
- UI
  - The "OptimizeDisplayTable" scaffolding now properly handles simple columns (columns not
    containing tiles).
- Workflows and Access Control
  - The "OnlyIfNew" attribute is now taken into account for "BuildUniqueValue" aspects.

## Version 5.1.7.10

Release date 4-Aug-2021

#### Fixed Bugs:

- Certifications and Risks

  - When defining a campaign, the ResourceType's data filter compliance check regarding the
    campaign's specified EntityType is now performed correctly.

- Connectors and Integrations

  - Added two new parameters to fix OAuth 2.0 settings:
    - "Scope" in OAuth 2.0 Settings
    - "SubClaimType"

- Jobs and Policy

  - Fixed lost correlations for resource types without any property rules (Scalar, Navigation,
    Query).
  - Fixed issues with provisioning orders that had empty content in the UI for Manual
    Provisioning.
  - In specific circumstances, the `FulfillInternalWorkflowTask` is now better able to calculate
    the workflow that should be used.
  - During the synchronization process, a double quote was appended to values that already
    contained double quotes. Now, the synchronization parser correctly takes this character into
    account.

- Logs/Performance/Security

  - Agent log settings are now independent of server log settings for jobs.
  - If the server was down and an agent's authentication token had expired, it could no longer
    execute jobs when the server came back online. Now, the agent can correctly refresh the
    authentication token as needed.
  - Logs will be shown in debug level when, because of a context rule exclude expression, an owner
    is excluded from the Role Model computation.

- UI

  - `DislpayTables` (of type "table") shown on the "Provisioning review" and "Role reconciliation"
    screens can now be filtered by the scalar properties that exist in search criterion and in
    column headers as well.
  - Multi-valued properties are no longer automatically duplicated when adding a new record in a
    multi-record record workflow form.
  - On the Role Reconciliation and Role Review pages, a wait spinner now exists to prevent a user
    from clicking (quickly) on a decision button more than once.
  - Pop-up value-selection screens will now show the correct number of lines/value options.
  - Fixed a bug where the Workflow Supervision page was giving an empty display for modified
    fields when the `RecordSlaveForm` was not defined.

- Workflows and Access Control

  - Correction for the generic email reminder calculation so that no empty emails are sent, and
    that each email contains one reminder.
  - Workflows with multi-records and multi-valued properties no longer give errors during workflow
    validations.
  - Added a new, optional, expression to `AddChangeAspect`: `AcceptNullValueExpression` is a C#
    expression that must return a boolean value in order to specify whether `null` is taken into
    account as the changed value if/when it's returned by the `Expression` parameter. By default,
    the value of `AcceptNullValueExpression` is false.
  - The Policy.Identifier property can now be used in `AccessControlRule` filters. An HTTP 500
    error is no longer returned on the permissions page when this property is used.
  - Roles can now be correctly reviewed when the configuration contains a Profile targeting both
    Roles and Categories at the same time.

- Other

  - Configuration Export/Import no longer throws an error because of policy roles that have been
    partially deleted.

## Version 5.2.0.2

Release date 23-Jul-21

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/identitymanager/6.1/identitymanager/index.md) section must therefore
be followed.

#### Enhancements:

- Connectors and Integrations

  - New connector configuration screens
    ![ConnectorHomePage](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.connectorhomepage.webp)
    - Connector marketplace with packages for existing connectors and integrations:
      - CRM/Salesforce
      - Custom/JSON
      - Custom/PowerShell
      - Database/Generic SQL
      - Database/MySQL
      - Database/ODBC
      - Database/Oracle
      - Database/PostgreSQL
      - Database/SQL Server
      - Usercube/Workflow
      - Directory/Active Directory
      - Directory/Apache Directory
      - Directory/Azure Active Directory
      - Directory/Generic LDAP
      - Directory/LDIF
      - Directory/Open LDAP
      - Directory/Red Hat Directory Server
      - ERP/SAP
      - ERP/Workday
      - File/CSV
      - File/CSV delta
      - ITSM/ServiceNow
      - Mainframe/RACF
      - Mainframe/Top Secret
      - PAM/CyberArk
      - Storage/Shared Folders
      - Storage/SharePoint
      - Ticket/ServiceNow
      - Ticket/identitymanager
      - Ticket/identitymanager And Create/Update/Delete resources
      - Usercube/Database
      - Usercube/Workflow
    - New Connectors
      - Custom/Robot Framework
      - Database/MySQL
      - Database/ODBC
      - Database/Oracle
      - Database/PostgreSQL
      - Database/SQL Server
      - Database/SQL Server Entitlements
      - File/Excel
      - File/Excel delta
      - Server/Microsoft Exchange
      - Storage/Home Folders
        ![MarketPlace](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.marketplace.webp)
    - Connector overview page: view information of each connector in a dashboard format.
      ![ADConnectorPage.webp](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.adconnectorpage.webp)
    - Connections: view and edit a connection, specifying the connection package and the agent
      settings.
      ![ConnectorConnection.webp](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.connectorconnection.webp)
    - Connector EntityTypes: manage the meta data of the entity type, its display, its mapping
      and its properties (metadata, mapping, association).
      ![ConnectorSABEntityType.webp](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.connectorsabentitytype.webp)![ConnectorSABEntityTypeNav.webp](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.connectorsabentitytypenav.webp)
  - Correlation and classification rules can be created inside the application.
    ![CorrelationClassification](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.connectorcorrelationclassification.webp)
  - Connector Agent Settings: The section InformationSystems in the appsettings.agent.json has
    been renamed as "Connections." This is handled by the migration utility.
  - A binary property (like photos) can now be updated via synchronization.
  - Added two new parameters for OAuth 2.0 settings:
  - "Scope" in OAuth 2.0 Settings
  - "SubClaimType"
  - Azure AD can now export any entity.
  - LDAP has been refactored, and one connection will now export the entries and the links.
  - Output files name are changed for all connectors that were using prefixes. Now, instead of the
    prefix, we have: export*name + "*" + connection_identifier. For example, for an AD where the
    connection identifier is ADExportFulfillment, the entry file will be named
    "ad_ADExportFulfillment_entries.csv".
  - PowerBI plugin to retrieve data from Usercube.

- Certifications and Risks

  - During or at the end of a certification campaign, reviewed items with a "Refused" decision can
    now be queued for immediate deprovisioning.
    ![CertificationDecisions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.certificationdecisions.webp)
  - Denied permissions can be filtered out when creating and/or modifying an Access Certification
    campaign.
  - Risks are now displayed with their remediation message.
  - The new permissions /ProvisioningPolicy/Risk/OverrideBlocking and
    /ProvisioningPolicy/Risk/OverrideApproval allow a user profile to override the risk settings.
    As an example, for an administrator with these permissions, a blocking risk becomes one
    requiring special approval or a risk with only a warning.

- Jobs and Policy

  - A new parameter "DeactivationExportFulfill" disables Export or Fulfill in a Connection that is
    linked to a package having a Fulfill or an Export. Consequently, with this parameter, a
    connection that no longer implements Fulfill cannot be implemented in a ResourceTypeMapping
    and a connection with Export disabled will no longer be used by Scaffoldings to create Export
    Tasks in jobs.
  - A new type of rule, `PendingApprovalRule`, allows an �Allow' or �Deny' decision to
    automatically be made for pending Roles or ResourceTypes after a specified time period.
  - A task's progress display on the job detail page has now been adapted according to the type of
    task.
  - Multi-valued dimensions for the role model are now supported.
  - Non-conforming permissions for departed and archived users are now canceled.
  - Removal of all export task types and update of a single export task type, "ExportTask" that
    replaces all other exports.
  - The Roles, Rules and Risks dialogs now show the author and date of the last change.
    ![RoleModelHistory](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.rolemodelhistory.webp)
  - On the Access Rules page, there is a new filter on the Type for Single/Composite roles and
    Resource Types
    ![RuleFilter](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.rulefilter.webp)

- Logs/Performance/Security

  - Corrected a typo in the appSettings files where PageResult should be PagedResult. The
    migration tool will update these settings.
  - Fix LDAP error messages when a dn can't be found.
  - Parsing errors related to json files now indicate the name of the errored file.
  - TempFolderPath and WorkFolderPath are two new settings defined in the appsettings.json. They
    allow the definition of the Temp path, whose default location is `../Temp`and whose content
    can be deleted, before restarting the server, without altering the behavior of Usercube and
    the Work path, whose content shouldn't be removed or altered.
  - The cookies used for incremental exports are now stored in /ExportCookies
  - The SQL zz\_\* views for reading and updating custom entities have been enhanced. There are no
    longer views for the optimized associations as their values were already available in the
    mono-valued side entity type's view. Furthermore, the SQL views for non-optimized associations
    now have the `_type` column, allowing the direct insertion of rows with SQL statements.

- Other

  - All the CSV files stored in the Temp folder now use a comma "," as column separator instead of
    semicolumn ";". These files are therefore fully CSV compliant.

- UI

  - Enhancements to the auto-complete functionality of selection fields in workflows.
  - In entity type configuration UI, if the identifier of the entity type or its properties are
    not C#-compliant, the creation/update of the entity type is forbidden and error messages are
    displayed on each corresponding field.
  - Identifiers of EntityTypes or their properties must be C#-compliant. In the new Connector
    screens, errors are presented to the user if this constraint is not respected.
  - On the Resource Type definition screen, the addition and removal of associated permissions is
    now configurable (corresponding to AllowAdd and AllowRemove in the xml configuration).
  - Role descriptions are now visible throughout the application:

    - On the Access Roles screen (description column + tooltip if more than 30 characters),
    - On a user's page, when adding permissions:
      - On the dialog where the permissions are selected (column + tooltip)
      - On the summary screen, when hovering over the permission a tooltip is displayed
    - While viewing the permissions of a user (View Permissions screen), when clicking on a
      permission, a dialog opens, the description has been added below the role name)
    - When reviewing a permission

  - The number of configurable languages has increased from 8 to 16.
  - When creating policy rules, a role's FullName (with categories) is now displayed instead of
    the simple DisplayName.
  - When data can be saved, the button label has been changed from "Edit" to "Save" on the
    following pages:

    - Access Certification Campaigns,
    - Assigned Profiles,
    - Access Policies,
    - Access Roles,
    - Access Rules,
    - Risks
    - Connectors

- Workflows and Access Control

  - A new workflow type has been created that allows mass updates:
    `WorkflowUpdateRecordEntitiesForm`![5.2.0.UpdateMultipleUsers](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.2.0.updatemultipleusers.webp)
  - On CompositeRoles and SingleRoles, the new "Approve Role Implicitly" setting allows users with
    profiles for requesting _and_ reviewing permissions to request roles and then skip the review
    steps. By default, all the roles must be explicitly reviewed.

#### Fixed Bugs:

- Connectors and Integrations

  - A default value was added for the attribute MicrosoftGraphPathApi for the Azure AD connector.
  - Display an explicit error when trying to reset password of non-existent resources (deleted
    resources or those awaiting creation).
  - Fixed a bug where access control filters were not taken into account for password reset
    operations (from the agent API).
  - Fixed the KeyVault configuration loading which did not consider a variable depth greater
    than 1.
  - The executables Usercube.Fulfill.SharePoint.exe and Usercube.Export.Workday.exe were renamed
    respectively as Usercube-Fulfill-SharePoint.exe and Usercube-Export-Workday.exe.
  - TSS, RACF and SAP exports now have a prefix for their output, which is the connection
    identifier, similar to other connectors.

- Certifications and Risks

  - The executable Usercube-Update-AccesCertificationCampaign is now named
    Usercube-Update-AccessCertificationCampaign
  - When defining a campaign, the compliance check of the data filter on the ResourceType compared
    to the target entity type of the campaign is now performed correctly.

- Jobs and Policy

  - "Pre-existing" resource types with a confidence rate of less than 100 percent are now properly
    shown on the Provisioning Review screen in the "Correlation" section instead of the Resource
    Reconciliation screen.
  - A double quote was appended to values containing a double quote during the synchronization
    process. Now, the synchronization parser correctly takes this character into account.
  - A scaffolded job based on a connector without any EntityTypeAssociations will no longer try to
    create PrepareSynchronisation and Synchronisation tasks.
  - Added an updating job on Agent scheduler, which periodically refreshes the job list, in cases
    of the database has been updated.
  - An EntityType is now forced to have only one related context rule.
  - During an AD synchronization, records are now compared correctly between CSV file and database
    so changes will not be detected with the exact same files.
  - For added security, the default Approval Workflow Type for new roles now Simple (one approval)
    instead of zero approvals.
  - For Usercube-Update-EntityPropertyExpressions and Usercube-Update-Classification the argument
    has been changed from `--diry` to `--dirty`.
  - In computing delta synchronizations, a resource shouldn't have multiple owners.
  - The Entity Property of type "Option" has been changed to "ForeignKey", so
    `<Property Identifier="Categories" DisplayName_L1="Categories" Type="Option" />` becomes
    `<Property Identifier="Categories" DisplayName_L1="Categories" Type="ForeignKey" />`
  - The InvokeAspectsTask's progress state is now correctly passed on to the job running the task.
    The possible values are Completed, Aborted, or Errored.
  - The scaffolding for the correlation calculations now takes into account all source EntityTypes
    that are relevant to a given ResourceType.

- Logs/Performance/Security

  - Add Logger service to help debug C# Expressions. Example:
    `C#:resource:logger.LogDebug("Name={0}", resource.Name); return resource.Name;`
  - Added a verification to the Deploy-Configuration tool that prevents two or more dimensions
    from having the same SQL column index.
  - Agent log settings are now independent of server log settings for jobs.
  - Corrected certain silent errors when deploying configuration to the SaaS environment.
  - Fixed a bug in the login process causing page links to be redirected to the home page after
    login, if a login was necessary, rather than the page specified.
  - If the server was down and an agent's authentication token had expired, it could no longer
    execute jobs when the server came back online. Now, the agent can correctly refresh the
    authentication token as needed.
  - Logs for unauthorized access give better information about missing permissions.
  - Nullable checks for C# expressions have been added during configuration deployment to prevent
    runtime exceptions. They will be displayed as warnings.
  - The Access Certification report now generates more quickly.
  - The attribute FilesAreNotEncrypted no longer exists. The encryption is now only retrieved from
    the EncryptFile attribute in the appsettings.json. This change is handled by the migration.
  - When loading the configuration indicated with the appsettings files, the precedence has been
    corrected so that the encrypted appsettings (appsettings.encrypted.agent.json) override the
    normal appsettings (appsettings.agent.json).

- Other

  - A bookmark from the Universes queries can be copied from one environment to another.
  - Calls to a non-existent API now return a 404 Not Found error instead of the index page.
  - In `AccessCertificationDataFilter` and `AccessCertificationOwnerFilter`, the property
    `TargettedRisk` was changed to `TargetedRisk`.

- UI

  - DisplayTables (of type "table") shown on the "Provisioning review" and "Role reconciliation"
    screens can now be filtered by the Last Name and First Name columns.
  - Fixed incorrect top menu bar translations when the language is changed.
  - Fixed selection screens that were occasionally showing the wrong number of lines.
  - In Campaign Reviews, items are now always visible even when the name of the permission is a
    long string.
  - Multi-valued properties are no longer automatically duplicated when adding a new record in a
    multi-record record workflow form.
  - On the permissions page, removal of a conflict message when a new assignment corresponds to
    one that is already in a process of deletion.
  - On the Role Reconciliation and Role Review pages a wait spinner now exists to prevent a user
    from clicking on a decision button more than once.
  - Pagination buttons on the Workflow Overview screen no longer shift to the vertical center of
    the page.
  - Provisioning Review UI: Take into account the case where the resource has not yet been
    synchronized and correctly display a screen title of "Update" instead of "New".
  - Upgrade the Index manager tool in search fields so it will handle Display Tables that don't
    use Tiles (for example, the ResourceTables)
  - When no values are displayed on a screen, the actions "Next page" and "Previous page" now
    return coherence results.

- Workflows and Access Control

  - Correction for the generic email reminder calculation so that no empty emails are sent and
    each email contains one reminder.
  - On an Entity with records workflow, changes were wrong when a field in the record section
    tried to update a property of the main entity. Now, there is no error and an updated field in
    the record section will correctly update the main entity property. For example: a Photo field
    in the record section updates the property Photo of Directory_User.
  - On notification aspects with recipients as a specific profile, a filter on ValueId is now
    correctly handled.
  - Roles can now be correctly reviewed when the configuration contains a Profile targeting both
    Roles and Categories at the same time.
  - Rules of type "Automatic, with validation" are now only given automatically during new user
    workflows. This prevents a situation where all future permission modifications would
    continually generate validation requests.
  - The ContinueWith Activity to merge workflows now functions properly.
  - The Policy.Identifier property can now be used in AccessControlRule filters. An HTTP 500 error
    is no longer returned on the permissions page when this property is used.
  - The scaffolding ViewAccessControlRules no longer gives the wide-reaching "/" permission.
  - When processing notification aspects for the same permission using the "Profile" recipient
    type, certain access rules are no longer skipped.
  - Workflows with multi-records and multi-valued properties no longer give errors during the
    workflow validations.

## Version 5.1.7.9

Release date 24-Jun-2021

#### Fixed Bugs:

- Connectors and Integrations
  - Correction for a problem with the initialization of the password reset services, where the
    encryption certificate was used instead of the password reset certificate when Usercube was
    installed on-premises.
  - Correction for time-consuming Azure AD exports which were ending too soon due to an expired
    token.
  - Fixed mail settings password handling for SMTP servers.
  - Passwords with fewer than 12 characters can now be generated for new accounts.
- Jobs and Policy
  - Expression assemblies are now loaded when evaluating expressions for provisioning rules. This
    avoids potential incompatibilities between the DLL and the C# expressions.
  - Non-Conforming single roles are now correctly detected when a ResourceType does not have any
    scalar rules.
  - To prevent certain timeouts, a new, optional, parameter, JobLaunchTimeout, can now be added to
    the appsettings to override the current default for starting jobs. The default value is 7500
    milliseconds. See the documentation for more details.
- Logs/Performance/Security
  - New clearer, error messages are thrown when RecordStartProperty or RecordEndProperty are not
    correctly specified on Forms based on records.
  - More logs have been added to the scheduler:
    - when a job has stopped (with its execution time)
    - when sleeping, with the sleep time
    - the execution/sleep time ratio
    - the full list of scheduled jobs
  - Correction for the task logs when a job is stopped or errors out.
- Workflows and Access Control
  - Corrected an error that prevented standard users from seeing their permissions or sources and
    from making requests, even if allowed by the configuration.
  - When new records are added in a review step, the navigation properties are now correctly
    duplicated.
  - Correction for some missing parent workflow permissions.

## Version 5.1.7.8

Release date 7-Jun-2021

#### Mini migration:

Before migrating the agent, if the file `tracked-accounts-{system-identifier}.csv` exists inside the
(old) runtime, it should be moved to Usercube's Temp folder. If this setting was previously
configured in the appsettings, no change is necessary. See the first bug below for more information.

#### Enhancements:

Connectors and Integrations

- The Usercube-Discover-ActiveDirectory tool has been enhanced to determine the domain controller
  closest to the agent.

Logs/Performance/Security

- Certain, less important, "Warning" messages displayed in the logs have been downgraded to the
  debug level.

#### Fixed Bugs:

- Connectors and Integrations

  - To prevent a loss of tracking abilities for resetting passwords, the default appsettings has
    been changed from: `./tracked-accounts-{system-identifier}.csv` to
    `Temp/tracked-accounts-{system-identifier}.csv`
  - The Export-ActiveDirectory tool now tries several times to synchronize an AD's content, even
    in cases of server-side timeouts.

- Jobs and Policy

  - In certain cases, blocked provisioning orders were not disappearing from the Provisioning
    Review screen once they were unblocked. This has been corrected by removing
    AssignedResourceNavigations that were linked to deleted resources.
  - Sometimes, the same resource would have two consecutive provisioning review tasks. Now, the
    provisioning reviews are fused together.
  - In a case where a ResourceType is updated by a navigation rule and the role review is still
    pending, the resource will now no longer appear on the list of pending provisioning review
    items.
  - Correction for authorized resources with correlation confidence levels of 100%, that under
    certain conditions, were being considered as unauthorized.
  - In some cases, where a resource is inferred only indirectly by roles instead of by a direct
    rule, a role waiting for approval could trigger the resource deprovisioning.
  - Sometimes, when several jobs are scheduled at exactly the same time, only one of the jobs was
    executed. Now, each job is executed one after the other.
  - The job locking mechanism which prevented manual jobs from being executed at the same time has
    been removed.

- UI

  - Previously, the ResourceType attributes, AllowAdd and AllowRemove, were only taken into
    account when the ResourceTypes were controlled by automatic assignments. Now, they are also
    taken into account with manual assignments in the UI. Specifically,
  - On the permissions screen when the associated resource type has `AllowRemove="false"`:
    - For manually assigned resource types: the Delete and Deny buttons are disabled
    - For automatically assigned resource type: the Deny button is disabled
  - On the "Add Permissions" screen, resource types that have `AllowAdd="false"` are not displayed

- Workflows and Access Control

  - In multi-position HR systems, new positions for an existing user are now generating an update
    workflow instead of incorrectly re-creating the user. -In the Identity Server, the public
    origin parameter has been reintroduced to assist with authentications using proxies and a mix
    of http and https.

- Other

  - When importing the configuration, the error message "An item with the same key has already
    been added." was sometimes shown. Now, these duplicate key exceptions are handled better.

## Version 5.1.7.7

Release date: 18-May-2021

#### Fixed Bugs:

- Connectors and Integrations
  - Optimizations for LDAP exports and AD synchronizations.
- Jobs and Policy
  - The scheduler now works properly with the `CronTimeZone` attribute set to `ServerTime`.
  - The end date for a pre-existing assignment now updates when the user's end date is updated.
  - Manually-given composite roles can now be removed without any issues.
  - An agent can now execute only one job at a time, preventing conflicts. A second job that
    starts while one is already active, will quickly end in an error state.
  - The job scaffolding now correctly interprets the `FulfillInternalWokflow` command.
- Logs/Performance/Security
  - Logging out now functions correctly when an external login has been used.
  - Corrected the logout problem for Okta authentication with Open ID Connect
  - Added new Option for OpenID section to save the ID_Token
  - When the certificate password contains an `@`, and the password is unencrypted in the
    appsettings file, it is now interpreted correctly as long as the `P@ssword` is introduced with
    an `@`. Example: `"Password": "@P@ssword"`
  - Added a home page for Usercube-Agent, to verify the correct setup.
- UI
  - Date formats are now correctly displayed in DisplayTable Tiles
  - The Collection property can now only be displayed if the output/input type is
    collection-compliant according to the property's current read/write mode:
    - if the form is read-only or the control associated to the property is read-only or the
      property itself is read-only: the collection property must have the �BasicCollection'
      output type to be displayed.
    - if the form is in write mode and the control associated to the property is not read-only
      and the property itself is not read-only: the collection property must have the �Picker'
      input type to be displayed and editable.
  - Multi-valued properties are now displayed as added or deleted on the Workflow Overview page.
- Workflows and Access Control
  - Fixed a bug where the password reset notification email for Active Direcotry accounts was
    displaying the DN instead of the sAMAccountName
  - Corrected an error on Access Policies, Access Roles, Access Rules and Risk pages when the user
    had only read-only permissions.
- Other
  - When recuperating Access Certification Campaign filters, empty result sets are now properly
    handled.
  - With API calls related to resources, it is now possible to set a null value.

## Version 5.1.7.6

Release date: 20-Apr-2021

#### Fixed Bugs:

- Connectors and Integrations
  - The agent now sends compressed data to the server when synchronizing a connector, thus
    reducing the upload time and the bandwidth usage.
- Jobs and Policy
  - Inferred navigations are now in an automatic state after reconciling a resource with the role
    model.
  - Pre-existing resource type reconciliation now correctly passes the state to automatic when the
    role model value is chosen.
  - On the resource reconciliation screen, a recategorized resource with no owner now correctly
    has a �Verified' provisioning state and a �Manual' workflow state.
  - For permissions, an assignment in a cancellation state is now correctly overridden by a new,
    automatic assignment.
  - Fixed a regression in the Compute-Role-Model algorithm so that properties are no longer marked
    as non-conforming.
- UI
  - Read-only multi-valued collections can now be displayed in:
    - workflows/activities for simple resources without records (Location, Company for example)
    - workflows/activities for resources with records: only in the main resource section
  - Correction made to multi-valued pickers so that all elements are properly deleted when
    unselected.
- Workflows and Access Control
  - The password reset notification emails for AD Accounts were sometimes displaying the DN. Now,
    the sAMAccountName is shown.
  - Emails for password reset now correctly show accented characters in the subject line.

## Version 5.1.7.5

Release date: 30-Mar-2021

#### Enhancements:

New - Mono-Profile Application Management feature: A new property `GroupByProperty_Id` has been
added to support this feature. It is used to regroup navigation resources (resources used in
navigation rules) by value. When defined, the Evaluate policy will enforce that one and only one
item of a group can be assigned to an identity for a given date range.

Whenever the value of this property changes for a resource used in the defined navigation rules, the
**Server** needs to be restarted in order for the changes to be taken into account.

#### Fixed bugs:

- Connectors and Integrations
  - During certain large synchronization jobs, the error "Unable to read data from the transport
    connection: An existing connection was forcibly closed by the remote host" should no longer
    appear.
- Jobs and Policy
  - On the job screens, the counters are now correctly calculated. Additionally when a job has
    been re-started and finished, the counters correctly indicate all the steps of full job.
  - When the database is initialized, missing accounts had their navigations marked as
    "Pre-existing" but not the accounts themselves. As such, they could not be reviewed in the
    Provisioning Review. Now, all of these accounts can be fully reviewed.
  - Binaries are now correctly handed by the SavePreExistingAccessRights task.
  - The Resource Reconciliation screen was displaying accounts with unchanged groups for some
    pre-existing memberships. Now, the role model evaluation correctly clears theses cases.
  - Correction made to the SavePreExistingAccessRightsTask when custom SQL queries are used to
    refine the permission set that needs to be updated.
  - Non-conforming navigations now start on the detection date instead of on the owner's start
    date.
  - On non-conforming accounts, all scalar properties that were different from computed ones were
    marked as non-conforming except for those without a value. Now, all differences are marked as
    non-conforming.
  - Correction made to fix SQL deadlock issues when cleaning orphan assignments.
  - Mark source scalar/navigation properties as "Manual" when the target is updated from
    workflows.
- Logs/Performance/Security
  - Logging out now functions correctly when an external login has been used.
  - Correction made to the quantity of historical data that was being saved in the UP_Assigned\*
    tables.
- UI
  - On the "View Permissions" workflow page, in simplified view, declined permissions are now
    hidden.
  - When selecting permissions, previously declined permissions are now indicated with an "X" and
    the tool tip message has changed to indicate that the role has been previously declined.
  - At the end of a review step of a workflow, after adding someone in the "CC" field and then
    returning to the permissions page, an error was thrown. This situation was corrected.
  - Correction for errors that were occasionally appearing while loading a user's permission page.
- Workflows and Access Control
  - When assigning a profile, a different email address can be specified for notifications. This
    address is now taken into consideration for Role/Provisioning review notifications.
  - The aspect, `AssertValueRequired`, now correctly manages multi-valued navigation properties
    during modification.
  - An error is no longer thrown when an actor who receives a forwarded workflow tries to delete a
    manual role.
  - Any data search, with a filter on a sensitive property, was directly denied to prevent any
    information leaks. Now, the motor queries to see if the filter is a superset of the sensitive
    property access filter, in which case it will allow access.
  - If a record's end date is set to the past in the request step of workflow, and the record
    filter is `CurrentAndFuture`, the modified record was not shown in future workflow steps. This
    has been corrected, so modified records will be visible in all steps of a workflow despite the
    record filter.
  - If a workflow reviewer's email address is an empty string, an error was thrown when finishing
    the workflow's request step. Now, nulls and empty strings are handled without errors.
  - Assigned profile contexts will now be correctly emptied when values are deleted.

## Version 5.1.7.4

Release date: 16-Mar-2021

#### Fixed bugs:

- Correction for an error message "default value cannot be null" when running certain executables.

## Version 5.1.7.3

Release date: 12-Mar-2021

#### Fixed bugs:

- Connectors and Integrations
  - Corrected English/French language confusion in the password reset/initialization notification
    template.
  - Correction for a concurrent process issue when doing TSS Exports.
  - Correction for a null reference exception in the LDAP Export Task when it is configured
    manually and not all required arguments are provided.
  - Correction in the calculation of the ExportRACF task identifier that generated an error when
    adjusting a scaffolded job by adding a new task before or after ExportRACF.
- Jobs and Policy
  - Canceling pre-existing role assignments after an owner's departure now works correctly.
  - Correction for a regression where agent-specific tasks could not be scheduled by the agent
    that is included in the on premises server. Jobs were still executed correctly when run from
    the UI or another agent.
  - In QueryRules with a C# TargetExpression, the correlation keys are now correctly fetched using
    a better SQL filter.
  - Non-conforming group membership was not cleaned up once a rule assign had automatically given
    a group to an account. Now, these memberships are marked as Automatic and are no longer
    displayed in the Resource Reconciliation.
- Logs/Performance/Security
  - Included a better error message in the configuration import tool when an added task is not
    present in the configuration.
  - Improvements to database locking mechanism to prevent errors during jobs
  - Some of the LDAP requests sent when creating a new AD account and initializing its password
    were not logged.
  - General performance enhancements
- UI
  - Fixed an incorrect BasicCollection display while viewing resources with records.
  - On the Workflow Overview page, active changes to past records are still shown even when the
    RecordFilter is set to Current or CurrentAndFuture.
  - When opening an existing QueryRule, all the QueryRule properties are now visible
- Workflows and Access Control
  - Access control filters are now correctly applied in all steps of a workflow.
  - In a Review workflow step where the workflow was transferred, the problem with the
    recalculation of the actors has been fixed.
  - Review notifications, for both role reviews and provisioning reviews, are now correctly sent
    to second or third level reviewers.
  - On role review emails, the subject line no longer shows HTML encoded characters.

## Version 5.1.7.2

Release date: 26-Feb-2021

#### Fixed bugs:

- Connectors and Integrations
  - In an Active Directory for a complete synchronization, all group members are now retrieved.
- Jobs and Policy
  - Addition of a new API version guarantees backward compatibility between older agents and a
    5.1.7.X server.
  - Restarting multiple blocked synchronization tasks now works correctly.
  - Corrected a problem where, when starting a job, the agent didn't have enough visibility about
    server actions to correctly report the status.
- Workflows and Access Control
  - It is again possible to save a workflow from the first tab/step.
  - Review Provisioning/Roles notifications: assignment start and end dates are now accessible in
    the AssignedItem model.
  - Certain bindings from aspects/expressions were not handled correctly, now the correct
    properties will be loaded for the UI.

## Version 5.1.7.1

Release date: 19-Feb-2021

#### Fixed bugs:

- Connectors and Integrations

  - On the Manage Account screen, clearer messages have been introduced when password related and
    unlock problems occur.
  - On the Manage Account screen, a default regex expression for measuring password strength is
    now used when the configuration lacks the setting "PasswordTests".

- Errors/Logs/Security

  - Correction for a regression where the agent could not start when `EncryptFile` was set to
    `false`.
  - For RoleReview and RoleReconciliation, permissions are now also verified server-side.

- Jobs and Policy

  - Confirming an "Unreconciled property" now performs the correct operation.
  - Correction for a deadlock issue when running the Compute-Role-Model executable.
  - Correction for a situation where the scheduler was periodically stopping.
  - Correction for the primary key constraint violation when computing the role model.
  - Correction to the provisioning policy where found or historical assignments, with a
    correlation score of less than 100, gave errors.
  - Correction where the creation of a new nested entity threw an exception.
  - Entity Property Expression will now correctly delete the link between two entities.
  - In the Provisioning policy, found resource properties are no longer marked as Auto, instead
    they are now marked as Found in order to reflect the workflow state of the resource.
  - Manual roles are no longer deleted until all the inferred roles are obsolete.
  - Removal of the button "Retry" in Jobs and JobInstance screens that could cause data
    duplication.
  - The argument, WorkflowIdentifier, was not taken into account by the ProvisionerWorkflow.
  - The Provisioning Policy now removes links between entities if the data does not, or no longer,
    exists.
  - Correction made to the AddTask instruction that now permits adding a Task in the first
    position of a job.

- UI

  - Adding a multi-valued property to a record no longer produces an error.
  - Correction made on the creation of a new entity where the "Picker" input type was not properly
    working.
  - Fixed an inversion of FilterBinding and LinkedBinding that caused an error in some situations.
  - On the Role Review screen, an issue was corrected for mismatched lines.
  - On the workflow supervision page, a regression has been fixed when viewing a deleted entity.
  - The screen pagination on no longer ignores some items.
  - Tool-tip result explanations in French were missing for certain job tasks.
  - Many similar SQL queries were executed each time the permission page was opened and when a
    workflow request was submitted. The UI could display "Timeout" error messages occasionally.
    Now, these duplicate queries have been removed.

- Workflows and Access Control

  - During a workflow review, the position table is now refreshed when updating/selecting values.
  - When submitting a workflow, the access control layer could prevent changes computed by
    expressions or generated by aspects. Now, only the user changes (from the UI) are checked.
  - A role added in a workflow request step can now be deleted in the review step without error.
  - Correction for the situation where, when using the `WorkflowNotification` permission with a
    specific email address added to a profile assignment, notifications were ignoring the specific
    address and still going to the user's normal address.
  - To correct a problem in the BuildUniqueValueAspect where it was impossible to obtain Entity
    information from an associated Record, a new key "ResourceIdToCopy" was added in the
    configurable argument dictionary, in the ArgumentExpression of the ResourceType attribute. The
    value of this key must be a long in a string format. If this value is present in the
    dictionary, the resource created by the workflow provisioner will be a copy of the resource
    with the ID of the value.

    Configuration example:

    ```
    <ResourceType Identifier="HR_Contract_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de         collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" BlockProvisioning="0"         SourceEntityType="HR_Contract" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
      if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone() {
        return null;
      }

      var arguments = new System.Collections.Generic.Dictionary&lt;string, string&gt;();
      var workflowIdentifier = &quot;Directory_User_Update_Several_Records&quot;;
      arguments.Add(&quot;WorkflowIdentifier&quot;, workflowIdentifier);

      if (provisioningOrder.TryGetScalar(&quot;EmployeeId&quot;, out var employeeId) &amp;&amp; (employeeId != null))
      {
        var resources = queryHandler.Select&lt;Directory_UserRecord&gt;(&quot;Select Id Where EmployeeId=\&quot;&quot; + employeeId.        ToString() + &quot;\&quot;&quot;);

        if (resources.Any())
        {
          arguments.Add(&quot;ResourceIdToCopy&quot;, resources.FirstOrDefault().Id.ToString());
    }
      }

      return arguments;" >

    ```

- Other

  - A correction was made for the date serialization.
  - For the query module, the command timeout has now been set to 20 seconds to avoid server
    problems.
  - Query module: SQL optimization to reduce FULL joins.

## Version 5.1.7

Release date: 14-Jan-2021

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](https://extranet.usercube.com/5.1/5.1.7/Documentation/migration-guide/) section must
therefore be followed IN THE ORDER INDICATED.

#### Enhancements:

- Connectors and Integrations
  - New attribute types are available for Active Directory, LDAP, OpenLDAP and ServiceNow Exports.
  - If any export fails (because an exception occurs or a task is stopped), the output files are
    deleted to prevent corrupted and/or incomplete data.
  - Microsoft Exchange Export functionality for incremental and complete synchronizations is now
    available.
  - Orphan associations can now be exported to a CSV file using a new `Orphans` attribute on the
    `SynchronizationTask`. See the
    [documentation](https://extranet.usercube.com/5.1/5.1.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/server/SynchronizeTask)
    for more information.
  - Added a NoSigning option to the Export-LDAP which deactivates the Kerberos encryption when
    using the �Negotiate' authentication type.
  - Binary properties can now be synchronized and provisioned.
  - Added the ability to select the NameId format in the Saml2 Settings
- Errors/Logs/Security
  - Improved error messages during AD synchronization.
  - Improved error messages when parameters passed to an API method are invalid.
  - New database maintenance and diagnostic tools have been created.
- Other

  - The risk management module has been improved. When creating a risk, an Exemption Policy must
    be chosen. Available options are:

    - _Warning_: A simple warning is displayed when adding a new role creating the risk. The
      user can choose to continue or cancel the action.
    - _Blocking_: The role creating the risk cannot be added. The user can only cancel the
      action.
    - _Approval Required_: The role creating the risk must be approved before continuing on with
      the classic role approval workflow, if any. (NOTE: this option is only available if the
      risk module has been purchased.)
      ![RiskCreation](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.7.riskcreation.webp)

      On the "Add permissions" page, the "Risk" popup has been reworked to display all risks
      and their exemption policies.

      ![RiskPermissionPopup](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.7.riskpermissionpopup.webp)

      On the "Role review" page, if the risk module has been purchased, it is now possible to
      filter on roles with a risk that are waiting for approval.

      ![RiskFilterOnProvisioningReview](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.7.riskfilteronprovisioningreview.webp)

  - A new task now exists to determine if any workflow instances have been executed, and if so,
    the agent can execute a PowerShell script accordingly.

    Here are several examples:

    ```
    <InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/identitymanagerDemo/aspect.ps1">    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />  </InvokeScriptAspect>

    ```

    and / or

    ```
      <Job Identifier="InvokeAspects" DisplayName_L1="00: Invoke Aspects" Agent="Local">    <InvokeAspectsTask Agent="Local" DisplayName_L1="Execute Powershell for aspects" OutputPath="C:/identitymanagerDemo/Temp" OpenIdClient="Job" />  </Job>

    ```

  - Retrieval of many of the entity types used by the UI has been optimized:

    - Rules
    - Role Review
    - Role Reconciliation
    - Provisioning Review
    - Resource Reconciliation
    - Manual Provisioning
    - Workflow Review
    - Workflow Supervision
    - Access Certification Campaign (edit dialog box)
    - Identified Risks

  - Performance enhancements for front-end queries related to role parameters.
  - The tool �Usercube-Create-ConfigurationIndexes' has been renamed as
    �Usercube-Manage-ConfigurationDependantIndexes' and includes the maintenance and deletion of
    indexes according to configuration changes.
  - All API methods based on a �squery' have two new optional parameters:

    - `PageSize`
    - `ContinuationToken` If `PageSize` is specified (`top` must not be specified in the
      squery), the response will contain a `ContinuationToken` which can be used to get next
      items

  - The subject prefix indicated at the end of a Workflow is predefined, but is now also
    modifiable.
  - Improvements in managing UI translations:

    - activity template state: is the display name used in Workflow Overview
    - default access certification campaign policy: is the display name used in Access
      Certification Campaign
    - InternalDisplayName property: is shared by all custom entity types, and used in the table
      view list when no display table is defined. The header displayed for the unique table
      column is the identifier "InternalDisplayName" because no display names are defined for
      this property.

    When deploying the configuration, if the languages have been changed (or if the update is
    forced using the corresponding option), the display names are updated according to the
    configured languages.

    For now only two languages are supported, English and French. If there are no translations
    defined for one of the configured languages:

    - in the case of the primary language, the display name is set to the default translation
      (English).
    - otherwise the display name is empty

    To update the database, deploy the configuration with the `--force-translations` option.

#### Fixed bugs:

- Connectors and Integrations

  - When using the scaffolding to create a job with the FulfillToServiceNowTicket task, a
    ServiceNowUpdateFulfillmentState task is now added. If the resource is created internally an
    UpdateExpressionTask is also added. This corrects a problem where the correlation task wasn't
    started and so synchronized resources could not pass to a verified state.
  - Synchronization will no longer be blocked by duplicated unique keys, the first one will be
    used.
  - Improvements when parsing CSV files
  - OpenId: added a new attribute to the "OpenIdSetting" to set the requested scopes.
  - SCIM: the provisioning of booleans has been fixed.

- Errors/Logs/Security

  - Display a warning if a scalar property, which is not a neutral definition, does not have a
    correct TargetColumnIndex
  - When importing the configuration, a new verification on `Indicator` checks if the `Item`
    values are coherent with respect to the property to which the `Indicator` is bound.
  - When a scaffolding configuration is incorrect, the file and line number are now displayed in
    error messages.
  - An exported configuration that is re-imported now respects menu items and form control
    hierarchies.
  - The typo QueryHander has been fixed and is now correctly QueryHandler.
  - When importing the configuration, an improved error message is given when a role is not found.
  - Reintroduced an option, where when deploying the configuration, we could choose to replace
    Language1 by Language2: `--use-l2`.

- Jobs and Policy

  - TimeOffsetReference "After" now works correctly to keep a single role until the end date of an
    entitlement that is inferred by it.
  - When running a job, the log instance can now be opened without errors.
  - The Update-TreeDimensionHierarchies Task has been moved inside the motor and has been deleted
    as it no longer needs to be called explicitly. **Warning**: If this task has been manually
    added to a scaffolding with the `AddTask` instruction, the automatic migration doesn't work
    for this case and will need to be deleted manually.
  - On review and reconcile pages, the "Keep Current value" option now works correctly for AD
    resources when a change to the parentDN is proposed.
  - The policy repository now loads correctly with the automatic roles that required validation.
  - With large role models, ComputeRoleModel manages memory usage better.
  - QueryRule expression values are now case sensitive on the permission modification page,
    previously there were inconsistencies in case comparisons between the simulation presented on
    the permission page and the real provisioning.
  - Correction for the creation and update of a resource for a simple entity in Fulfill Internal
    workflow.
  - Correction for a problem where, during a provisioning review with a resource correlated at
    less than 100 percent, choosing to create a new resource gave an error.
  - Fixed an exception thrown by FulfillInternalResources with sent orders previously created.
  - Enable the AssignedProfile task in the Complete Job's scaffolding.
  - Corrected a problem where ambiguous correlations (multiple accounts matching the same rule)
    were not properly handled.
  - Corrected the CreateInitializationJob scaffolding when two agents are present in the
    configuration. The scaffolding now takes the agent specified instead of the first agent.
  - The alias �force-synchronization has been changed to �force-synchronization-provisioning for
    Usercube-Invoke-Job and Usercube-Invoke-ServerJob. **Warning**: This is currently a rupture,
    but only for PowerShell scripts. It will be handled for ascending compatibility in the planned
    5.1.7.1 release.

- UI

  - In search bar filters, true/false filters now correctly return true/false and not "undefined".
  - An aspect error on a read only field is now correctly displayed in the user interface.
  - On the Workflow Summary and Workflow Overview pages, an incorrect display of the owner under
    certain circumstances was fixed.
  - On the Query page, corrected a blank page error when the universes had not been correctly
    fetched.
  - Dates with a value of 0 are now displayed as �Never (0)'.
  - Fixed the display of declined inferred roles on the permissions page.
  - There is no longer an error raised after selecting a user, viewing their permissions,
    selecting a resource type and then clicking on the overview section to see the history.
  - Pagination in Access Certification Review screen has been fixed.

- Workflows and Access Control

  - Improved behavior of Workflow AddAndEndRecordEntity: now, according to date changes, records
    can be copied, updated or deleted instead of ending all records and creating only one record.
  - On the WorkflowAddRecordEntityForm, the first record is now selected by default
  - The HideRecordRemoveButton on workflows has been updated:

    - "false" (the default value) indicates that any record can be deleted (as long as at least
      one exists).
    - "true" indicates that records from previously completed workflows should not be removed,
      so the button is hidden for these older records but is still available for records
      manipulated in the current workflow.

  - Correction for an error when CC'ing someone at the end of a workflow.
  - Multiple `<Recipient>` of type "Expression" can now be defined in an notification aspect.
  - Fixed a bug where deleting a user before completing the user entry workflow gave an error.
  - Improvements that take into account changes induced by Aspects.
  - Correction for `<AssignedProfile>` tag now permits configurations such as

    ```
    <ProfileContext Id="-2" /><AssignedProfile Id="-2" Profile="Administrator" ContextId="-2" AccessState="Approved" User="CN=xxxx,OU=Comptes,DC=interne,DC=regioncentre,DC=fr" />

    ```

    to replace the SQL scripts used in the Initialization jobs, among other uses.

- Other

  - Correction for a date issue where a certification campaign ended a day too soon.
  - Correction for the QueryHandler method which prevented the use of dynamic values in squeries.
  - SQL fragmentation by the Provisioning Policy has been reduced.

## Version 5.1.6.2

Release date: 9-Feb-2021

#### Fixed bugs:

- On the Role Review screen, an issue was corrected where the lines were mismatched.
- Correction for a regression where the agent could not start when `EncryptFile` was set to `false`.
- The agent scheduler can now correctly interpret the workaround permitting its use with a Usercube
  certificate.
- For the query module, the command timeout has now been set to 20 seconds to avoid server problems.
- The argument, `WorkflowIdentifier`, was not taken into account by the Provisioner Workflow.

## Version 5.1.6.1

Release date: 8-Jan-2021

#### Fixed bugs:

- Correction for the CreateConnectorJob scaffolding where the NoSynchronization argument was
  ignored.
- Fixed a problem with resetting the password from the user interface in a distributed installation.
- Synchronization compatibility for older agents has been restored.
- Fixed a bug in Compute-Role-Model that was causing LoadWith to throw an unauthorized exception.
- The provisioning policy now correctly overrides correlated resources with the most recent changes.
- Assigned resource scalars and types were incorrectly updated when Compute-RoleModel was run twice
  in a row.
- Correction for the situation where rules with dimensions were no longer loaded when initializing
  RoleRecovery (only rules without any dimensions were taken into account).
- Filters on Categories with AccessControlRule for AccessCertification now function properly.
- The WorkflowState is now correctly updated when a 'non-conforming' scalar/navigation finally
  matches the role model rules.
- General security fixes.

## Version 5.1.6

Release date: 16-Nov-2020

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[�Migration' section](/docs/identitymanager/6.1/identitymanager/index.md) must therefore
be followed IN THE ORDER INDICATED.

For enhanced security, we are now checking to see if a custom SSL certificate is being used. In the
case that the Usercube certificate provided in the SDK is still is being used, there will be an
error when starting the server.

To continue to use the Usercube certificate in non-production environments, add
`"AuthorizeUsercubeCertificate": true,` to appsettings.json files at the root.

#### Enhancements:

- UI

  - Improved the view for the manual provisioning screen so that it clearly shows the actions to
    be taken.
    ![ManualProvisioning](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.manualprovisioning.webp)
  - Added a filter in Reconciliation Review screen in order to filter by inferred / not-inferred
    permissions. Leaving the filter at its default "not-inferred" setting shows only permissions
    that were NOT automatically mapped to roles (so that permissions mapped to roles can be
    handled on the Role Reconciliation screen).
    ![InferredFilter](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.inferredfilter.webp)
  - The screen for reviewing assigned resources type has been improved. Now, when a user opens the
    dialog for an unauthorized account, all properties to be verified are in read-only mode
    because the recommended action is the deletion of the account. If instead, the user chooses
    "Authorize Account", a pop-up warns that there are properties to be verified. Once verified,
    the choice "Confirm Account Authorization" is available.
    ![UnauthorizedAccount](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.unauthorizedacct.webp)![UnauthorizedAccountProperties](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.unauthorizedacctproperties.webp)
  - Previously, a user could not add permissions if another, exactly identical permission with the
    same dates existed. Now, the dates are not simply compared, but the date ranges and conflicts
    or overlaps between permissions are displayed as permissions are added.
    ![ConflictingDates](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.conflictingdates.webp)
  - On the permissions page, if an assigned resource type or its properties are pre-existing or
    non-conforming, the consolidated state column now adds the information in the tooltip message
    and the icon also shows the status as either pre-existing or non-conforming.
  - Display a minimum amount of information when a resource processed in the workflow has not yet
    been created or no longer exists in the database.
    ![ChangeSummaryDeletion](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.6.changesummarydelete.webp)

- Workflows and Access Control

  - Emails related to Role Model notifications can now be filtered based on Access Control
    Entries. In an AccessControlEntry, we have an existing flag, `Notify`. By default, this value
    is set to true, and the user is notified when a task corresponding to this permission needs to
    be performed. It can be set to false to prevent the user from receiving notification mails.
    See the following example which prevents role review emails from going to the
    "RoleOfficerSpecific" profile.

  ```xml
  <AccessControlRule Identifier="RoleOfficerSpecific_AssignedSingleRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Role Officer - Review Roles " DisplayName_L2="Gestionnaire de r�les - Revue des r�les" EntityType="AssignedSingleRole" Profile="RoleOfficerSpecific">  <Filter Binding="Role.Id" SingleRole="true" />  <Entry CanExecute="true" Notify="false" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>
  ```

  - Enhancements to the FulfillInternalWorkflow:
    - correction made for deleted provisioning orders that weren't working.
    - when multiple records change for the same entity, all changed records are now taken into
      account, not simply the first one found.
    - a new case is handled for deletions: if an entity and all of the entity's records are in
      delete mode and no kind of "deletion date" is detected in the fulfill configuration, the
      resources will be deleted and not updated.
  - Workflow notification e-mail subjects are now prefixed with information about the relevant
    resource:
    - In case of a creation workflow, the prefix is a pseudo-display name, computed from the
      form's raw data, of the resource to be created.
    - In case of an update workflow, the prefix is the internal display name of the resource
      being modified.
    - A workflow's subtitle now also displays the same prefix.
  - Added a possibility to filter on Categories with AccessControlRules for AccessCertification.

- Connectors and Integrations

  - New Workday connector for exports. The two modes, incremental and complete, take into account
    all entities (workers, locations ,job positions etc�).
  - The SCIM connector can now do a partial incremental synchronization. With this new
    functionality comes a new optional attribute, SyncCookiesFile. SyncCookiesFile specifies the
    path of the cookie file used for incremental synchronization. Example:
    "C:/identitymanagerDemo/Sources/example_cookie.bin" See more information in the documentation: Home
    Page > Integration Guide > Connectors > SCIM
  - Password Reset Improvements
    - Added the ability to set a static CC recipient email address for password reset
      notifications (per resource type).
    - In password reset notification emails, the resource type name is now displayed.
  - The SharePoint connector now synchronizes multiple SharePoint sites and provisions account
    membership modifications.
  - The connector generator can now handle larger CSV files.
  - SSL is now available for OpenLDAP Exports (with new attributes in the OpenLDAPSetting).
  - Usercube can now use certificates with CyberArk AAM to secure the password retrieval.
  - New Azure Key Vault configuration for appsettings.json on both the Server and Agent sides.

- Jobs / Policy

  - Two new options for the Invoke-Job command:
    - option `--task-type`: Tasks of this type are launched first.
    - option `--task-string-contains`: Launches all of the tasks having an identifier containing
      the given value.
  - A new argument, `PrincipalDataConnector`, for the InitializationJob scaffolding has been
    introduced. If this argument is used, the last ComputeRoleModel and
    UpdateEntityPropertyExpressionsTask of the initialization job will contain all the entities of
    the specified connector. See the documentation for more information.
  - On the jobs screen, a new button "Retry" exists if an incremental job finishes with warning
    state or in an errored state. This button will relaunch the incremental job in complete mode.
  - Added a file format encoding attribute for InvokeSqlCommandTask. See the documentation for
    more information: Home > Integration Guide > References > Tasks > Server > Export >
    Usercube-Invoke-SqlCommand.

- Optimizations

  - Added a new scaffolding type, `OptimizeDisplayTable` that optimizes a DisplayTable's
    performance (using computed expressions instead of navigation bindings). See the documentation
    for more information.
  - Added a new attribute to use the SQL resource governor for all jobs and tasks,
    `ConnectionStringGovernor`. See the documentation for more information.
  - A new method for storing historical data that reduces the index fragmentation of the Resource
    table has been introduced.
  - A new tool, `Usercube-Create-ConfigurationIndexes`, has been created for optimizing the
    database by analyzing a specific configuration and adding the related and necessary SQL
    indexes and statistics
  - UI back-end queries have been optimized on the following screens:
    - Role Review and Reconciliation
    - Provisioning Review and Resource Reconciliation
    - My Tasks
    - Queries
    - Identified Risks
    - Access Certification
    - Manual Provisioning
    - Job Execution
    - Access Policies, Roles and Rules
    - API calls when starting the application

- Tools

  - The generate configuration tool can now read encrypted data files. See the documentation:
    Home > Integration Guide > References > Tasks > Server > Tools > Generate Configuration
  - The Export configuration tool now has a new attribute `--use-resource-key` (or `-rk`). If
    used, a resource reference will now be exported as a key (the resource used corresponds to the
    property marked `IsKey` in the entity model) instead as an internal id. (This makes importing
    the exported configuration into another database possible, but it is not the default setting
    to avoid performance issues.) Ex: `<SingleRoleRule D0="XXX"...` instead of
    `<SingleRoleRule D0Id="xxx"... `

- Other

  - Added the possibility to encrypt the MailSettings' secret in the appsettings files.
  - Added a BlockAllResourceTypeProvisioning attribute in the ComputeRoleModelTask to allow
    provisioning blocks on all ResourceTypes for certain situations. This attribute is now set to
    True for the last policy in the Initialization Job.

#### Fixed bugs:

- UI

  - The Workflow Overview page, for deletion workflows, now displays information about deleted
    resources which was not previously available.
  - Correction for the DateTime parser on the Workflow Overview page that was occasionally
    generating errors when accessing workflows with added positions.
  - Correction for the permissions page, where manual assignments could not be deleted under
    certain conditions.
  - On the Access Certification Review page, the owner search bar is no longer pre-filled.
  - On the Provisioning Review screen, in the review dialog box for non-conforming/pre-existing
    provisioning orders that not related to a resource, the "Other Resource Properties" list has
    been corrected to show only the resource properties that do not need to be verified.
  - Improved translation capabilities for Access Certification Campaign policies.
  - The Query page now returns null values, if they exist, even on the main entity.
  - For correlation rules and access certification campaigns, the pop-up window used to define
    bindings now correctly reflects selected values.
  - On the Role Reconciliation screen, for a given Resource, if the type and then the owner is
    changed, no error is now presented.
  - Fixed an error on the assigned properties lists where, after a user scrolls for a little
    while, the properties are no longer displayed.
  - Fixed the risk warning message that was too intrusive under certain conditions.
  - When suggesting parameters, duplicate sets of suggestions have now been deleted.
  - Previously, links from on the dashboard were only visible to users if a user had permissions
    to create and update the elements in the section. Now, a user can still click and view while
    simply having read-only access (indicated by the `*/Query` permission).
  - On the Query screen, corrected two issues related to management of null-valued resource
    fields:
    - the row is now correctly displayed in the result table even if some values are null
    - the filter to find null value has been fixed.
  - Correction for certain cases where a user didn't have delete or update permissions, but the
    buttons were shown and clickable in certain views.

- Access Control and Workflows

  - In workflow access control rules, filtering bindings by hard-coded Ids now works correctly.
  - Correction so that the agent-side task, ActivityInstanceActor, correctly updates the workflow
    instances in a job. See the documentation for more information: Home > Integration Guide >
    References > Tasks > Agent > Tools > Usercube-Update-ActivityInstanceActor.
  - When processing notification aspects for the same permission using the "Profile" recipient
    type, certain access rules are no longer skipped.
  - Dates displayed in emails sent for Access Reviews now show the UTC value (which corresponds to
    what is visible on the Access Review screens).

- Connectors

  - Correction for a problem where csv values exported from RACF were incorectly mapped to user
    information.
  - A binary property (like photos) can now be updated via synchronization.
  - Correction for an exceeded size limit error when synchronizing with a big data sample
  - Job scaffoldings have been fixed for a situation where a connector that used two different
    information systems for two different task types did not correctly attribute the parent.
  - When loading a CSV file, values exceeding the database column length limit are now truncated,
    and a warning is displayed.
  - Safety levels have been reduced when performing inserts, deletions or updates on lines or
    links with synchronization and provisioning. The new values are described in the
    documentation: Home Page > Integration Guide > References > Data model > Connectors >
    Connector.
  - Fixed a bug where the password initialization fails on LDAP connections when using the
    "TwoWay" Mode
  - The ActiveDirectoryUseStore section of appSettings.agent.json has been moved to the
    Authentication section to harmonize setting locations. This change will be applied with the
    migration tool.
  - The ServiceNow connector can now write fulfillment tickets to ServiceNow's incident table.
    `ServiceNowTicketUpdateFulfillmentStateTask` has been added to the scaffolding with a
    following `UpdateEntityPropertyExpressionsTask`.

- Jobs / Policy

  - Correction for the AddTask argument when two or more tasks have been added before or after
    same task.
  - Added an optional flag `Dirty` which provides the possibility of using a "dirty" (or modified)
    attribute with the FulfillInternalResourceTask in the configuration.
  - Invoke-SQL, when exporting to a CSV file, now correctly formats data types.
  - When a job finishes with a blocked state and when two or more tasks are blocked, the Relaunch
    button now re-starts all blocked tasks and not only the first task.
  - When a non-conforming single role is found, the AssignedResourceType is now set properly.
  - The UpdateParametersContextDisplayNames task now manages configurations with either zero or
    one dimension.
  - The Policy gives more predictable results when correlating resources in the cases where users
    have several types of resources that could belong to them.
  - Correction where the IndirectResourceRule was not generating the appropriate role
    reconciliation tasks.
  - Provisioning orders are now only generated for Applied, Executed, Sent, or Pending assignments
    and not for Errored or Blocked assignments.
  - Corrected a problem where non-conforming permissions didn't correctly pass to conforming when
    the appropriate rules were added.
  - A provisioning order will no longer be generated when a resource does not have any properties.
  - The Classification Job was updated to clean assignments correlated by the Provisioning Policy,
    preventing multiple assignments of the same resource.
  - The Provisioning Policy now refreshes correlated resources that have been found and updates
    the correlation score accordingly.
  - Assigned roles with missing parameters are now correctly handled and computed if/when the
    parameters are provided.
  - Deleting a policy now properly deletes all its corresponding items (after a warning message).
  - For identified risks, the owner filter definition has been clarified.

- Configuration Deployment / Error handling / Logs

  - The configuration deployment tool is more robust. It now verifies
    - that all agents are the same inside a job and inside a task.
    - that an EntityType's name is not a reserved name.
    - the xml attributes for SelectUserByIdentityQueryHandlerSetting and
      SelectPersonasByFilterQueryHanderSetting
    - whether entity types and entity properties have spaces and if found, a clear error message
      is given.
    - ResourceViewRecordEntityForms to make sure that the RecordSortProperty attribute is a
      scalar property.
    - if an element has a property defined more than once (with same identifier)
    - that TileItems and DisplayTablesColumns reference mono-valued column bindings.
    - that a main language is specified.
  - Better messages or error handling for
    - situations where role approvers don't have email addresses.
    - when files used for synchronization have a bad encoding.
    - the InvokeSQLCommand task errors, thereby forcing the corresponding job to end in an
      error.
    - problems during Prepare-Synchronization: the filename is now displayed.
    - a situation where RessourceType is detected as being in a cyclic graph in scaffolded jobs.
    - missing permissions when a user's authorization fails for a certain action.
  - Error management has been enhanced in the configuration deployment tool: multiple errors can
    now be displayed.
  - In job logs, the arguments related to passwords (certificates, password, secret�) are now
    hidden.
  - Mail settings information is now displayed when the Usercube server starts.

- Other

  - Correction for an LDAP authentication timeout issue after a long idle period between
    connections
  - The base32hex naming convention now has a dedicated page in the documentation. See Home Page >
    Integration Guide > Applicative Configuration > Miscellaneous
  - Increased security for photo uploads.
  - Renamed SelectUserByIdentityQueryHanderSetting to SelectUserByIdentityQueryHandlerSetting.
    This is handled in the migration tool.

## Version 5.1.5.1

Release date 2020-10-05

#### Fixed bugs:

- For LDAP connectors, the objectClass filter can now correctly handle multiple values.
- For a connector typed as ActiveDirectory, we now check for the existence of the
  PrepareSynchronizationTask and SynchronizeTask.
- Correction for a case where, in an installation scenario with a remote agent, the agent attempted
  to query the database directly instead of querying the Usercube server's APIs.
- Correction so that the agent-side task, ActivityInstanceActor, updates the workflow instances in a
  job.
- The incremental synchronization now correctly ignores changes made to attributes that are not
  specified in the configuration.
- Correction to correct the quantity of historical data being saved in the UP_Assigned\* tables.
- To prevent synchronization errors, attributes that are too long are now truncated at the size of
  the column.
- Correction for incorrectly interpreted empty values when, under certain conditions, the Review
  tasks for the WorkflowUpdateSeveralRecordsEntityForm with no PersistDraft Activity, was giving a
  blank page.
- For a ResourceType, the ArgumentsExpression now evaluates the correct target entity type.

## Version 5.1.5

Release date: 2020-09-15

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed IN THE ORDER INDICATED.

#### Migration steps:

1. Stop server
2. Rename the existing Runtime folder to �RuntimeOld'
3. Install the new runtime from �Runtime_XXXX.zip'
4. Migrate the database:

   `Usercube-Upgrade-DatabaseVersion --connection-string "database connection string"`

5. Migrate the appSettings:
   `Usercube-Upgrade-AppSettings --input-path "old runtime directory" --version 5.X.X -�connection-string "database connection string"`
   (where 5.X.X is the "MigrateFrom" version)
6. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion --version 5.X.X --xml-path "source conf path" --output "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
7. Optional: Deploy-Configuration:
   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e` (Without
   redeploying the configuration new features will not be taken into account.)
8. Start server

> Note:
>
> - Risk scores are included in our new Risk Management Module. Only Segregation of Duties risks are
>   present with the basic license.
> - For SaaS installations, the agent must be upgraded to benefit from a bug correction related to
>   password resets of existing accounts.
> - For API calls, make sure to enter the new versioning attribute mentioned lower down in the
>   release notes: �api-version'=v where v is the API version. Currently all API verions are at 1.0.

#### Enhancements:

New UI features

- New display indicators are available to indicate certain resource attributes (for example: VIP,
  External, High Risk etc).
  ![DisplayIndicator1](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.displayindicator1.webp)![DisplayIndicator2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.displayindicator2.webp)![DisplayIndicator3](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.displayindicator3.webp)
  Each indicator is configurable:

```
   <Indicator EntityType="Directory_User" Binding="MainRecord.EmployeeType.Category.Id" ComparisonOperator="Equal" Order="2">    <Item Value="-201" Color="#2B758F" DisplayName_L1="External" DisplayName_L2="Externe" />   </Indicator>

```

- Role parameters are now suggested based on a user's existing permissions and job specificities.
  ![RoleParamterSuggestions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.roleparamsuggestions.webp)
- Introduction of a new page that lists all identified risks.
  ![IdentifiedRisks](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.identifiedrisks.webp)
- Approval comments can now be set at the access policy level. The default values are:
  - for approvals: Optional
  - for rejections: Required
  - for deleting a non-conforming permission: Optional
  - for keeping a non-conforming permission: Required These access policy comment requirements can
    also be overridden at the role level. On the policy configuration screen:
    ![CommentMgmt.Policy](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.commentmgmt.policy.webp)
    On the role configuration screen:
    ![CommentMgmt.Role](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.commentmgmt.role.webp)
- Secondary categories are now displayed in the role detail dialog.
  ![SecondaryCategory](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.secondarycategory.webp)
- In the role reconciliation list view, a new column with the date of detection has been introduced.
  By default this column is used for sorting the page.
  ![DetectionDate](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.detectiondate.webp)
- A new refresh button has been added for the following screens:
  - My Tasks
  - Workflow Overview
  - Role Review
  - Role Reconciliation
  - Provisioning Review
  - Resource Reconciliation
  - Manual Provisioning
  - Assigned Profiles
  - Access Rules
  - Access Roles
  - Policies
    ![Refresh](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.refresh.webp)
- On Resource Review and Resource Reconciliation dialogs, an asterisk is now displayed to show if
  the property is required. If the DisplayEntityProperty has IsRequired="true", an asterisk is be
  displayed.
  ![Asterisks](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.5.asterisks.webp)
- On screens with pagination, the page number is now saved. This allows a user who clicks on a
  resource and then closes the popup, to return to the same page as before.
- On the Resource Reconciliation page, when the resource type is changed and parameters are needed,
  Usercube now prompts for parameter values.

New Job features

- Within a job, multiple tasks with the same level indication can now be executed at the same time.
  See the documentation for more information Home > Integration Guide > References > Data model >
  Jobs > Task.
- Usercube-Get-JobSteps and Usercube-Invoke-Job tools now provide more detailed information about
  each task.
- For the scaffolding jobs, resourceTypes are now sorted as a tree to make sure fulfillments are
  performed in the correct order. (For example, in the case of multiple data sources or more than
  one data master.)
- New, smarter job execution logic which runs tasks or not depending on previous results. For
  example, if a Data Collect returns zero lines, the dependent synchronization task does not need to
  run. In the documentation, see examples on the page Home Page > Integration Guide > How-Tos >
  Configure Usercube Jobs > Synchronization Complete or search for the attribute `TaskDependsOnTask`
  for more information.

Other new items

- Because mail settings are unique to each environment, mailSettings have been moved from the
  database to the appsettings configuration. In order to migrate and preserve existing mailSettings,
  you must follow the migration instructions above in these Release Notes.
- A new C# expression can be added to the Provisioning Policy to compute the provisioning order
  arguments like "WorkflowIdentifier". See more information in the documentation: Home Page >
  Integration Guide > References > Data model > Provisioning > ResourceType.
- Scalar and query rule expressions: there is a new implicit variable called "assignment" that
  contains the assigned resource type start date, end date and parameter values. More information
  can be found in the documentation: Home Page > Integration Guide > References > Data model >
  Provisioning > ResourceScalarRule
- The mono-valued association property TargetColumnIndex limit has been extended. An index can now
  be defined between 128 and 152.
- All of Usercube's API are now versioned. The new required parameter "api-version", facilitates the
  choice of the API version, allowing scripts, tools and agents to be backwards-compatible with the
  newer versions of Usercube.
- Added missing error notifications after failed API requests.
- Enhancement of role parameter reconciliation based on fine-grained permissions.
- Dependences have now been created between computed expressions allowing, on a given EntityType,
  the use of the result of a first computed property to compute a second one. For example, on a
  Directory_User, the MainRecord can now be used in Bindings/Expressions of other Directory_User
  properties. This is managed with a Priority setting.
- The scheduler has a new parameter allowing it to be based either on Universal Time (UMT -
  Greenwich Meridian) or the server's local time zone.

#### Fixed bugs:

UI Corrections

- In email notifications, the password font has been changed so the characters are clearer.
- When a login is incorrect, better error messages are now shown.
- Correction for a refresh problem when a photo taken with the webcam was updated.
- The language of authentication form can now be configured to languages other than English.
- On the workflow activities pages, the EntityType selection list is now based on access control
  rules, only showing entities for which a user has permissions.
- Fixed a bug encountered when requesting a resource creation on the Manual Provisioning page.
- Improve management of incoherent dates in the UI, restricting certain dates from being entered in
  the past and correctly handling dates on assigned roles that have just been requested.
- In the query and correlation rule dialog boxes, a correction was made for editing the bindings.
- Query Page: Fixed a blank page error while adding a field after a query reset.
- On the Role Review page, review buttons are hidden for the pre-existing and non-conforming
  assigned roles which should be managed on the Role Reconciliation screen.
- Dates related to a DatePicker with "AddedMinutes" now changes correctly on rendering (for example,
  after closing the view permissions dialog box).
- When creating or modifying a new assigned profile, the list of available profiles are now sorted
  in alphabetical order.
- Access Certification: Improved message when there is nothing to review.
- On the permissions page, for a manual assignment, the �Deny' option is only available when the
  permission is being first added and is not available in any other situation. (In other situations,
  the only option is �Delete'.)
- Fixed a 400 error when the displayName of an access certification in progress is updated.
- Fixed an error in workflow simplified views, where permissions being added could not be deleted.
- On the Role Review screen, for approved or declined permissions:
  - hide the comment button if no comment was previously added
  - disable the comment button when there are existing comments
- Certain variables incorrectly displayed by Internet Explorer have been corrected.
- Fixed some incorrect behavior when a user creates or updates role categories.
- Improved the display of resource values. All values displayed in the application (in lists and on
  the resource page) must have the same display. If a "format" is defined for a
  displayEntityProperty, this format is applied. Otherwise, the value is displayed according to the
  type of the EntityProperty.
- Fixed an error on shared forms where, in an activity, the form was not displayed and on the
  workflow overview page, the changes in the form were not displayed.
- On workflow finalization screens, the placeholder values for the "CC" and "At the request of"
  fields have been corrected.
- In resource views, the display of a collection property with an intermediary mono-valued binding
  (for example, person.User.OwnedApplications) is now allowed.
- On the Resource Reconciliation page: buttons are now clickable when the user changes the resource
  type, selects a resource with a different entity type, and then re-selects the proposed entity
  type.
- On the Query page, the action buttons are now disabled if a user has made no selections.
- On the role review page, the hovering for a permission's history was replaced by a button to make
  sure it was always accessible.
- Fixed an incorrect arrow display for offset dates in navigation and scalar rule dialogs.
- A new warning message has been added when deleting access policies: "Warning: all objects linked
  to this policy will be deleted".
- Using a dropdown list to select a resource that doesn't have a display name no longer throws an
  error.
- Jobs that are blocked because a security threshold has been exceeded are now clearly indicated.
- Composite and single role metadata have been added to the access review module which permits,
  among other things, the filtering of access review items.

Security and performance corrections

- The InvokeSQLCommandTask now correctly interprets the LogLevel that has been indicated.
- A series of optimizations have been made for connector synchronizations.
- Certain tasks, such as Compute Role Model, no longer fail after a timeout and have been optimized.
- New, tightened security on API calls.
- Optimizations for the loading of the user directory pages.
- Upgrades for error and warning logs for the Usercube-Invoke-Job and Usercube-Invoke-ServerJob
  tools.
- The ComputeCorrelationKeyTasks in job scaffolding have been optimized.
- Change the default value for the BlockProvisioning attribute of ComputeRoleModelTask, from false
  to true in order to prevent unexpected fulfillments.

Configuration Deployment

- When deploying the conf, if the arguments �configuration-directory and �database-connection-string
  are missing, the exception is now thrown correctly.
- During the configuration deployment, scaffoldings now check a connector's existence.
- Errors are now thrown when multiple tasks are declared with the same identifier.
- Error messages during configuration deployment no longer show unnecessary information.
- Giving an incorrect identifier for a job, now gives a clear error.
- Added new error checking to prevent conflicting aspects.
- Harmonization of similar attributes: FilesAreEncrypted in the MappingPath scaffolding argument has
  been switched to FilesAreNotEncrypted.

Other corrections

- Correction for regression in Windows SSO authentication
- The InvokeSQLServer jobs now correctly abort when the user clicks on the �Stop' button during a
  job's execution.
- Transactions are no longer blocked when several resource types are provisioned at the same time.
- Exporting the configuration to XML files now also exports default values.
- Usercube-Get-JobSteps now returns a clear description of the error if the job identifier is wrong.
- In Usercube-Anonymize a new argument to specify the delimiter is available: "�csv-separator" (or
  its short alias "-s").
- In Usercube-Update-FulfillmentStates, the short alias "-h" for the input path was removed because
  it conflicted with the help alias.
- Date filters have been modified to take advantage of database partitioning, if it has been
  enabled.
- Fixed the Export-LDAP timeout argument which wasn't accepting values other than 0.
- The AD Export tool now correctly extracts CNs containing special characters (for example, a
  comma).
- The tool Usercube-Anonymize.exe now anonymises columns with empty values.
- Incremental AD synchronizations, when run after a long period of time, are no longer giving
  errors.
- Improvements for handling of deleted objects/entities and their dependent objects.
- Fulfillment orders are now generated when an assignment state is Pending (add or delete) or
  Applied (modify).
- A job that was twice blocked for exceeding security thresholds can now be properly re-started
  after the second blockage.
- The data anonymization tool can better handle empty attributes, invalid DNs or invalid email
  addresses. It can also now handle multi-valued attributes.
- Correction for the LDIF export where attributes from distinct entities were getting interchanged.
- Fixed a regression where the argument FilesAreNotEncrypted was not taken into account for all
  exports.
- In appSettings, in the EncryptionSettings section, when UseEncryption and EncryptFile were both
  false, there was still an error for a missing certificate.
- The Initialization scaffolding job is now always created with UserStartDenied, so it cannot be
  re-executed.
- Correction made to Usercube-Fulfill-InternalWorkflows concerning entities without records.
- For fulfillment simulation, the simulation file is now correctly created.
- For the SCIM connector a new OAuth2Url attribute for retrieving tokens has been added, in order to
  handle a situation where the system cannot determine this information.
- Corrected a bug on certification review items when managers change.
- Corrected some regressions for Export-LDAP.
- When using the ActiveDirectoryUserStore, the Domain setting is required, and we now verify its
  existence at startup.
- Display names are now computed for all provisioning contexts.
- Fixed a bug where the ad/ldap provisioner was not properly tracking the account's activation to
  trigger the password reset mechanism.

#### Known issues:

Workflow task counters were causing performance issues and so they have been temporarily removed
from the home page for Role Review, Provisioning Review, Role Reconciliation and Resource
Reconcilation. They will be back in version 5.1.6.

## Version 5.1.4.2

Release date: 2020-08-12

#### Fixed bugs:

- Reduce the manual assignments end dates based on the new end date (if it is smaller) and the
  offsets.
- Improved scheduler error handling.
- Tasks such as Compute Role Model failed on timeout and needed to be optimized.

## Version 5.1.4.1

Release date: 2020-07-31

#### Fixed bugs:

- Added the namespace System.Globalization for the C# expression white list. It is now possible to
  use .ToTitle() and culture info.
- Correction for a regression in the agent scheduler.
- Adaptations made allowing the execution of server-side scripts on Linux.

## Version 5.1.4

Release date: 2020-07-24

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Rename the existing Runtime folder to �RuntimeOld'
3. Install the new runtime from �Runtime_XXXX.zip'
4. Migrate the database:

   `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

5. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion -s 5.X.X -c "source conf path" -o "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
6. Migrate the appSettings:
   `Usercube-Upgrade-AppSettings --input-path "old runtime directory" --version 5.X.X` (where 5.X.X
   is the "MigrateFrom" version)
7. Optional: Deploy-Configuration:

   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

8. Start server

#### Enhancements:

- New Account management functionality for changing or re-initializing passwords as well as
  unlocking accounts is now available.
  ![PasswordReset](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.4.passwordreset.webp)
- Role Parameters are now displayed in all views with permissions (lists and dialog).
  ![Parameters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.4.parameters.webp)
- Improvements on manual provisioning screens:

  - Add start and end date columns in the list of properties
  - Add request number, start and end assignment dates
  - Added the possibility of clicking on the request number
  - Other general improvements
    ![ManualProvisiong](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.4.manualprovisioning.webp)

- The Usercube Documentation has been significantly improved.

  - The content has been reorganized in four Guides: introduction, integration, installation, and
    migration.
  - The Introduction has been extended
  - The Installation Guide has been reviewed and improved
  - The Technical Configuration and Connectors documentation, now in the Integration Guide, have
    been reviewed and improved.
  - Look and feel has been improved.

- On the provisioning review page when the pending orders filter is enabled, a filter now exists for
  the action type.
  ![ProvisioningFilter](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.4.provisioningfilter.webp)
- On screens that show the cancellation of resources, the edit icon is replaced by a cancel icon on
  to avoid confusion.
  ![CancellationIcon](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.4.cancellationicon.webp)
- Active Directory forests are now natively supported.
- ServiceNow ticketing

  - Added new Task `FulfillToServiceNowTicketTask` to create tickets in ServiceNow requesting
    creation, update or deletion of any resource. Upon creation of the ticket, the
    AssignedResource state will be in a Transmitted state.
  - Added new Task `ServiceNowTicketUpdateFulfillmentStateTask` to retrieve canceled and closed
    tickets. When retrieving tickets, AssignedResources states will be set to executed or errored.
  - New xml fields in ResourceTypeMapping:
    - `TicketCallerIdIdentifier` The name of the attribute to get the id of the user (in the
      ticketing system) for whom the ticket will be created.
    - `TicketCategory` and `TicketSubCategory` Information indicating in which category the
      ticket should be created.
    - `TicketImpact` and `TicketUrgency` For prioritizing
    - `TicketAdditionalInformation` Additional textual information that will appear in the
      ticket.

- The back-end is now capable of calculating a simple "risk score" for each user. This will be more
  visible in the UI in upcoming versions.
- Other new UI features:

  - The auto-complete in drop-down lists is now optional. The list has auto-complete only if the
    auto-complete binding is defined for the display property or for the associated display entity
    type. The auto-complete binding defined for the display property overrides the auto-complete
    binding defined for the display entity type. If not specified otherwise, the minimum length of
    search characters is four.
  - In the dialog box of the Resource Review and Resource Reconciliation screens, the "Value"
    column header has been renamed to "Proposed Value" to clarify the meaning.
  - On the Job Execution page, several new filters allow the user to filter all Job Instances by
    date range. A filtered view will show all types of Job Instances and will not be restricted to
    the one chosen in the left-hand menu.
  - Improve auto-complete drop-down lists:
    - display "No results" when no results are found
    - display "Enter at least N characters to start the search" when the number of characters
      entered is less than minSearchLength
    - display waiting spinner when results are being requested

- New security features:

  - Added security for job instance API calls, including security that locks or unlocks API calls
    and launches or blocks specific tasks depending on the license purchased.
  - Usercube-Protect-X509JsonFile is a new tool that encrypts each value in a JSON file.
  - Added protection against unwanted uses of C# functions in the configuration files.

- Other new items

  - AppSettings.json files have been restructured
  - Multiple records are now taken into account for internal workflow fulfillment.
  - In the configuration files, link properties used in EntityAssociations are now declared as
    Type ForeignKey, instead of Int64.
  - A new package was integrated for AD/LDAP export and fulfillment allowing this functionality
    from non-Windows servers.
  - For command line tools, all the parameters can now be passed as regular arguments or through
    stdin. Reading the parameters from stdin is enabled by the �stdin argument. This is especially
    useful for securely sending passwords and other sensitive information to the tools. The
    Usercube-Invoke-Job tool leverages this mechanism for all the jobs' tasks.
  - The `Usercube-Deploy-Configuration` tool has been modified to error out for configuration
    errors like invalid query rule target bindings, giving clear indications of how the
    configuration files should be corrected.
  - Arguments are now harmonized for `Usercube-Invoke-API`.

#### Fixed bugs:

- UI corrections

  - UI font optimizations.
  - Fixed the display of breadcrumb in permission name columns: now the last item is displayed.
  - Fix picker to avoid unnecessary API requests and to filter from the previous search only if
    the character is added at the end
  - Fix the display of drop-down options (search results and disabled options)
  - The text of the disabled options ("Enter at least [n] characters[�]" / "No results") must not
    fill out the input text of the drop-down list
  - Fix focus on multi-selection picker.
  - Fix error in a single selection picker with search where the second selection was not taken
    into account.
  - Auto-complete picker now manages search on bindings with more than one property.
  - On the job screen, the duration for a task that is "Pending Launch" is no longer shown with an
    incorrect value.
  - In Job view, jobs instance state icons are no longer cut off on the left side. We can now see
    all of state icons.
  - On the Query page, certain navigation properties that should not have been displayed were
    removed.
  - Now, if Usercube is configured without dimensions, the home dashboard is still displayed and
    features that previously needed dimensions are no longer broken.
  - On pages with permission lists, sorting now works correctly.
  - Fixed error in UI selection component: multiple selections are now correctly handled.
  - When displaying the same entity type for two different dimensions we now display the dimension
    labels instead of entity labels (which were then repeated).
  - Fix for left and right navigation keys that couldn't be used to type something in a filter
    research bar.
  - Enhancements to UI for role deletions
  - For the user's circle logo, if there are more than two initials, their size in image is
    automatically reduced and if there are more than five initials, they are truncated to display
    a maximum of five characters.
  - Currently, a pre-existing permission cannot be deleted or updated from the permissions page:
    the element cannot be selected (no checkmark) and a tool-tip is displayed to explain "This
    permission cannot be modified."
  - On the Workflow Overview page, when owner information is not available (for example when user
    has been deleted or when a new user creation is still in draft form), a simple dash ("-") is
    now displayed instead of a user icon with no information.
  - Agent-side jobs can now be started from the UI.

- Security and log corrections

  - Correction for a security vulnerability that prevents usage of forbidden properties in query
    filters.
  - Correction to minor security issue where passwords were being saved in browsers. Auto-complete
    is now set to off for password fields.
  - With the InvokeExpression function (agent and server) logs generated inside the PowerShell
    script are now taken into account in the task instance logs.
  - Unclear logs about workflows and data are now more explicit.
  - HttpClient error detail is now written to the logs.
  - Solution for an intermittent problem where encrypted logs were truncated, preventing
    decryption.

- Other corrections

  - For AD provisioning, if the service account doesn't have proper write permissions, errors are
    now correctly thrown when a new group membership cannot be created.
  - Correction for the duplication of workflows after the launch of FulfillInternalWorkflow.
  - Corrections to the enforcement of scopes of responsibility during API calls.
  - Improvements in the detection of existing permissions with parameters.
  - For LDAP provisioning, a connection is made to the LDAP server only in the case where there
    are fulfilment orders to be executed.
  - Password notification mails did not take into account the culture settings in the appSettings
    files and were always in English.
  - For an export AD or LDAP, we now verify if the logins or passwords are null or empty and show
    an error if necessary.
  - In searching for existing permissions mono-valued properties were not taken into account.
  - Corrections to regressions in the role mining tool related to the new encryption settings.
  - Corrected the Re-launch Job to handle the case where a task warning is present in job before a
    blocked task. Now the job can be relaunched instead of being blocked.
  - Corrections made to the task override feature for all Property Enumerator values,
    TaskResourceTypes, TaskEntityTypes, and TaskDimensions.
  - Correction for server-side timeout issues, including a new parameter in appSettings.json
    (agent side) `TaskTimeoutSupplement` that adds an optional timeout supplement for the
    execution of server tasks in Invoke-Job.
  - Category hierarchy is now taken into account when evaluating access control rules.
  - Role parameter functionality has been added to all 128 available dimensions. Previously, only
    the first eight could be used with parameters.
  - Scalar and query rules are now evaluated correctly when an assigned resource type has a
    non-deducible parameter.
  - Fix a blocked state for Job Instances where the job also contains a warning instance.
  - Corrected arguments used in the SharePoint connector
  - Corrected configuration migration of the GroupByDimension configuration attribute.
  - The Role Model now sets the resource type classification confidence rate to 100% even if the
    correlated owner is not at 100%. The Resource Classification now targets only resources
    without owners to prevent any interaction between the correlations and the classification.
  - Correction to the Invoke-Server-SQL tool for AzureAD authentication
  - Both Export Invoke Sql commands (agent and server) now delete the resultant half-finished CSV
    file when they are stopped in the UI and the UI properly shows an aborted state.
  - Fix made to Negotiate Authentication in LDAP Fulfillment.
  - In the Provisioning Review, the Current Value column is now correctly calculated and
    displayed.
  - Several ResourceTypes can now be provisioned at the same time.
  - Correction for provisioning review errors where occasionally, the button was not available to
    unblock and retry.
  - Correction for AD authentication problem over SSL.
  - Fixed regression errors in the PowerShell fulfillment.
  - Differences on manually overridden scalar property values (i.e. an AD attribute) are now
    correctly detected.
  - Correction for the Workflow States that were incorrect when approving a declined role.
  - Shared Folder improvements:
    - New task available for the SharedFolder export.
    - New option for logging in with a service account.

## Version 5.1.3.1

Release date: 2020-06-15

#### Fixed bugs:

- Agent-side jobs can now be started from the UI.
- Correction for provisioning review errors where occasionally, the button was not available to
  unblock and retry.
- Differences on manually overridden scalar property values (i.e. an AD attribute) are now correctly
  detected.
- Enhancements to UI for role deletions
- Fixed error in UI selection component: multiple selections are now correctly handled.
- HttpClient error detail is now written to the logs.
- In the Provisioning Review, the Current Value column is now correctly calculated and displayed.
- On pages with permission lists, sorting now works correctly.
- On the provisioning review page when the pending orders filter is enabled, a filter now exists for
  the action type.
- Several ResourceTypes can now be provisioned at the same time.
- Solution for an intermittent problem where encrypted logs were truncated, preventing decryption.

Release date: 2020-06-02

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

   `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion -s 5.X.X -c "source conf path" -o "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
5. Deploy-Configuration:

   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

6. Start server

#### Enhancements:

- Performance enhancements in the database and the front-end
- In both modes (SaaS and On-Premises) all work files, whether on the agent or the server, can be
  encrypted. Encryption is optional but is enabled by default with the DataSourceIsEncrypted
  parameter. The encryption includes logs, temporary files generated by the synchronization, the
  provisioning, the reports and the provisioners (like pending password re-sets). More information
  is available in the documentation: References > Data model > Connectors > EntityTypeMapping and
  EntityTypeAssociationMapping. Also, in Technical configuration > Agent configuration > Encryption
  Certificate section.
- CyberArk Integration: Login and passwords can now be retrieved from CyberArk Vault for real-time
  use in synchronization and/or provisioning.
- New connector SCIM for services implementing SCIM endpoints. More information available in the
  documentation:
  - Technical configuration > Information System Settings > SCIM Settings
  - References > Tasks > Agent > Exports > Usercube-Export-SCIM
  - References > Tasks > Agent > Fulfillment > Usercube-Fulfill-SCIM
- ServiceNow improvements:
  - Exports and Fulfillment now support OAuth2 authentication with new optional arguments
    available in the settings.
  - Export now supports Date, Boolean, Int32, Int64 formats and can export multiple tables at
    once.
  - Provisioning of many-to-many tables: the name of the table corresponding to the association
    must be given in the new XML field EntityAssociationMapping:DatasourceName.
  - New XML field "DatasourceName" for EntityAssociationMapping: this field is optional and
    specifies mapping for n-n relations. Currently it is only be used for ServiceNow provisioning.
  - More information is available in the documentation: References > Tasks > Agent > Fulfilment >
    Usercube-Fulfill-ServiceNow and References > Data model > EntityAssociationMapping
- AppInsights integration
- Parallel user workflows are now possible.
- New Query page:
  - Columns can be chosen and rearranged
    ![UnivQuery2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.universequery1.webp)
  - According to type of property selected, the filtered value field is changed correspondingly
    ![UnivQuery2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.universequery2.webp)
  - Display fields are easily searchable
    ![UnivQuery2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.universequery3.webp)
  - Queries can be bookmarked
    ![UnivQuery2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.universequery4.webp)
- New functionality for managing risks.
  ![RiskMgmt1](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.riskmanagement1.webp)![RiskMgmt2](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.riskmanagement2.webp)![RiskMgmt3](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.riskmanagement2.webp)![RiskMgmt4](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.riskmanagement4.webp)![RiskMgmt5](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.riskmanagement5.webp)
- Review Comments can now be configured for each role and for each review type: pending and
  non-conforming role permissions. There are three values to choose from:
  - Disabled
  - Optional (set by default on the approval of a pending role permission and on delete a
    non-conforming role permission)
  - Required (set by default on the refusal of a pending role permission and on keep a
    non-conforming role permission)
    ![CommentMgmt](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.commentmgmt.webp)
- In role review/reconciliation comment dialogs, add informational data about the permission being
  approved/denied.
- In the roles catalog, instead of a generic column title, the second column title now displays the
  of type of object being shown: single rules for single rules, etc.
  ![RolesCatalog](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.rolescatalog.webp)
- Implement two views to display permissions lists:
  - view grouped by categories, with the name column filtering on role and/or category name
    ![PermissionTree](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.permissionstree.webp)
  - view list where all columns can be sorted
    ![PermissionList](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.permissionslist.webp)
- On the workflow overview page, a new list of permissions shows the permissions impacted by the
  workflow with their workflow states and provisioning states, clearly indicating the state of all
  validations related to the workflow.
  ![OverviewStates](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.overviewstates.webp)
- Allow filter on the workflow overview list by "Completed" or "Pending".
  ![OverviewListFilter](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.overviewlistfilter.webp)
- On the Job Execution screen, a new search bar has been added permitting sorting by "State" of the
  job instances.
- UI enhancements aligning fields and their labels.
- New step in InitializationJob: initialize history tables by setting each entity's first record
  ValidFrom value to 0001-01-01 00:00:00.00.
- Improve clarity on Provisioning Review and Resource Reconciliation screens.
  - Add action indication (create, update, delete) in the list of assigned resource types to
    review or reconcile
    ![RoleReviewActions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.rolereviewactions.webp)
  - In dialogs, dynamic button labels indicating the action that will be performed based on user
    choices.
    ![DynamicLabels](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.dynamiclabels.webp)
- Added a new filter when running an access certification campaign: it is now possible to target all
  entities having a property modified since a given date.
  ![CertificationTargetDate](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.certificationtargetdate.webp)
- New indicators in workflow overview to display records added, modified, or deleted.
  ![WorkflowOverviewIndicators](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.workflowoverviewindicators.webp)
- On the workflow overview page, all translation modifications are now shown as well.
  ![Translations](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.3.overviewlanguage.webp)
- Enhance scalar rule expressions with a new argument that provides basic information about the
  assigned resource type: Id, StartDate, EndDate. More information in the documentation:
  References > Data model > Provisioning > ResourceScalarRule
- Provisioning policy: extend the QueryRule/CorrelationRule to match multiple resources
- In Request Summaries, more information has been added: the workflow state, and a link to the
  Request and the Workflow owner.
- Enhancements to sorting capabilities on Workflow Overview page.
- Enhancements to error messages regarding invalid XML when deploying configuration.
- In the UI, field value selections can now be typed, instead of always needing to click.
- The notification aspect has new recipient type, "Expression", where the email address is built by
  a C# expression.
- The execution of an aspect can now be determined by an expression (IfExpression attribute). (For
  migration: the P12 attribute in v5.0.x for the BuildUniqueValue aspect are now migrated to the
  IfExpression attribute.)
- Modification of the job repair mode: the starting order is now calculated in the Invoke Job and
  the Invoke Server Job and has been removed from the front end.
- Simplification when executing any task in debug mode: The TaskIdentifier and TaskID are no longer
  necessary and the task can be launched with only the name of the json object from the
  appSettings.ConnectionInformation.json. Example:
  `./identitymanager-Fulfill-AzureAD.exe --AzureAD_Setting "AzureAD_Export_Fulfillment" -t "-2"`
- Addition of the attribute option "�force" to the jobs: Invoke-Job and Invoke-ServerJob. These jobs
  can now be forced in order to avoid a blocked situation. More information in the documentation
  References > Jobs > Server Side > Invoke Job.
- Improved security features to prevent unauthorized or diverted use of the application by iframe
  elements.
- Improvements to reports with historical information.
- Restrictions and securing of API calls
- FulfillmentType and InformationSystemIdentifier parameters have been moved from the connector
  level to the ResourceTypeMapping level allowing different types of fulfillment on different types
  of accounts. For example, nominative accounts can be automatically provisioned, and administrator
  accounts can be manually provisioned. Accordingly, a new information system Identifier
  Fulfill-InternalWorkflow is available for the appsettings.ConnectionInformation.json file. More
  information is available in the documentation: References > Data model > Connectors >
  ResourceTypeMapping and Technical configuration > Information System Settings

#### Fixed bugs:

- Better sequencing was introduced for the password reset phase of an AD account when the
  creation/modification of the account fails.
- Fixed an error on resource lists: the resource displayed above the "See more" button must be
  filtered by the default filters configured in search bar of the entity type.
- Fixed a bug where the workflow overview displayed the wrong photo in some workflow steps
- The photo no longer disappears after a workflow is saved or forwarded.
- A problem with the scaffolding for ServiceNow and incremental synchronizations was resolved.
- Under certain conditions, there were issues releasing LDAP connection pools during
  synchronizations.
- Correction to some consistency problems in the UX related to the resource type counters.
- Resource display names on the permissions page are now truncated if too long. Hovering over the
  truncated string will display the full name.
- During synchronization, an exception is no longer thrown when more than one entity property has
  the same source column.
- A number of Usercube migration issues were fixed.
- Fixed inconsistencies in ConsolidatedWorkflowBlockedState and ConsolidatedWorkflowBlockedCount
  related to pre-existing permissions.
- Role Parameter contexts are now automatically set if the values can be deduced from the owner.
- Corrections to Usercube-Export-RACF tool related to duplicate columns.
- The synchronization job was, on rare occasions, executing the process twice for the same entity
  type.
- The role access management dialog, when opened via URL, now correctly loads all data.
- The start date field is now taken into account in a UsercubeWorkflowAddAndEndRecordEntity workflow
  form.
- A warning is now presented to the user when creating an access rule without criteria warning about
  creating a rule applicable for all users/entities.
- On the role review and role reconciliation screens, the button now no longer disappears if the
  screen width is too small.
- On the Certification review page, a new column shows a denied icon if the permissions have been
  denied to the user.
- Corrections made to the reviewing and reconciliation of composite roles.
- Homonym warning now correctly shows only one resource instead of all related resource records.
- Allow sorting and filtering of the records table in a workflow according to the configuration
  definition. The table is now sorted by default according to the DefaultSortPriority.
- In a scheduled job change, the transition end date now allows the definition of an end of position
  before the start date of a new position.
- On the permissions page, an assignment is now in its correct category after closing the
  view-detail modal.
- For workflows with several records, the workflow overview display page now correctly shows the
  shared section and all positions and the relevant position for the workflow.
- Alignment of the contents on the request summary and workflow overview pages. Start date and end
  date were added in request summary and resource of assigned resource type is displayed in workflow
  overview.
- If one dimension is not defined, or has been deleted (for example, dimensions 0, 1, 3, and 4 are
  defined but not dimension 2), the UI should not request values for the missing dimension in the
  parameter modal.
- Job ToolTip placement modified so as not to interfere with buttons.
- On the permissions page, a permission added manually during an earlier step of the same workflow
  cannot be changed. To change it, it should be deleted and then reintroduced with the desired
  modifications.
- The BuildUniqueValue aspect can be managed by the new attribute OnlyIfNew="True" so the value will
  only be built if the resource is new.
- A configuration containing scaffolding elements can now be exported without errors.
- The access context rules now correctly filter "type" column for optimized associations.
- On the role reconciliation screen: selecting "Delete" for a pre-existing item now correctly
  removes the associated line.
- Corrected a problem where certification campaigns with filters on owners couldn't be started.
- Corrections to server availability behind a reverse proxy.
- Generalized the pending activities counter so it will work across different time zones.
- Correction to the AddTask argument in the job scaffolding where a compared task is calculated more
  than once in the same job.
- In the pagination of entity type display tables, boolean properties are properly managed.
- Correction to the agent-side Swagger implementation.
- On the workflow overview page, enhancements in displaying Review Pending and Refine Pending:
  - Potential actors are displayed before the action is completed.
  - Once the action is completed, the interface shows who performed the action.
- Improved records displayed by default when no records match with the record filter for the form,
  most often seen in the case when a user is archived.
  - If the record filter is set to "CurrentAndFuture" and there are no present or future records,
    the most recent of the past records is displayed by default.
  - If the record filter is set to "Current" and there are no present records:
    - If there are future any records, the first of the future records is displayed by default.
    - If there are no future records, the most recent of the past records is displayed by
      default.
- Correction regarding an occasional authentication errors when running the compute properties
  expressions.
- Documentation enhancements and corrections.
- If the log information is missing in appSettings, a default serilog section is now created.
- The clean database job schedule was deleted to allow for more flexibility in the configuration
  layer.
- Correction to the linkDependTasks argument in the job scaffolding.
- Occasionally, a job launched via the UI errored too quickly and no message was sent to the front
  end. Now a jobInstance is systematically created so any error message will be visible.
- In encryption appSettings, the private key is no longer required.
- Remove links on the workflow overview page when the active user does not have permissions to reach
  these pages.
- Correction made related to the execution of the InvokeSqlCommand on both server and agent side.
- No longer check for login and password if the Authentication Type is Negotiate.
- Send a better error when the ConnectionInformation appsettings is not correctly defined.
- The initialization scaffolding now includes the UpdateTreeDimensionTask after the
  DeployConfiguration, to correctly calculate tree dimensions.
- The workflow overview page now correctly displays deleted positions.
- For synchronization jobs, if the connector key information is not present in the json settings, a
  TaskInstance error is now presented on the job screen.
- Fix progress "Completed" for Server Tasks.
- A single update of a "one to many" relationship that is stored in resoucelinks tables now works
  properly.
- In computing delta synchronizations: a resource should not have multiple owners.
- Corrected an internal error when performing a workflow on a user with multiple positions.
- Corrected a bug related to jobs blocked multiple times which appeared in certain cases.

## Version 5.1.2

Release date: 2020-04-10

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

   `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:

   `Usercube-Upgrade-ConfigurationVersion -s 5.1.0 -c "source conf path" -o "target conf path"`

5. Deploy-Configuration:

   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

6. Start server

#### Enhancements:

- New UI for login and logout pages
  ![Login](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.login.webp)
- Improvements to font and layouts.
- New connector for ServiceNow with options for incremental or complete synchronizations.
- The SAML2 protocol can now be used for authentication. See the documentation: Technical
  configuration > Server configuration > Section 1.2.4
- New integration avec QRadar
- Workflow overview has been improved:
  - new design elements
  - shows workflows added, updated or deleted
  - shows assignments added, updated or deleted
  - the page title is now the subject of the last activity instance and not simply the workflow's
    name
  - the state is highlighted
  - a link to the owner has been added
  - an optional parameter in the activity configuration can hide a workflow from the overview
    screen (WorkflowOverviewDisable).
    ![WorkflowOverview](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.workflowoverview.27635.webp)
- The title of the bottom section on the Request Summary is no longer hard coded in the product. It
  is configurable and displayed in workflow overview.
  ![ImpInfoBlock](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.workflowoverview.impinfo.webp)
- In the detail screens of My Tasks and in workflow summary screens, a new eye icon is shown next to
  the Request ID which links to a summary of the entire request.
- In the Jobs UI, the task logs are now colored like they would be if executed from the command
  line, so warnings and errors are now easier to identify.
  ![ColoredErrors](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.colorederrors.webp)
- When running a certification campaign and choosing what to certify, it is now possible to filter
  by specific users.
  ![CertifByOwner](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.certifbyuser.webp)
- Display the type of Approval Workflow in the role catalog and in the list of suggested
  permissions.
  ![ApprovalWorkflowSuggestions](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.approvalworkflowsuggestions.webp)
- On the Role Review screen, new improvements show the history of the request including any comments
  previously made.
- New filters have been added to resource lists shown in DisplayTables with
  DisplayTableDesignElement="resourcetable":
  - Display uncategorized resources
  - Display orphaned resources
  - Display resources linked to a specific resource type
  - Filter by resource owner's name
    ![ResourceFilters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.2.resourcefilters.webp)
- A new job, UsercubeCleanDatabase, is available that resets the all TaskInstance and JobInstance
  that haven't responded in over 2 hours. Overriding this task is possible with the setting
  SchedulingCleanDataBaseSetting.
- A new job now exists, Usercube-Invoke-ServerJob, to execute tasks server-side without the need for
  an agent. See documentation: References > Jobs > Jobs On Server Side
- New optional arguments have been introduced for the Usercube-Invoke-Job that specify the
  encryption certificate (with file or certificate store). See documentation: References > Jobs >
  Jobs On Agent Side
- Agent-side tasks now have two new optional arguments, CertificateFilePath and
  CertificateFilePassword, for encrypting service account connection information.
- Job task dependence has been introduced which will prevent a child task from launching if a parent
  task didn't complete successfully. See the documentation: References > Jobs > "Link two tasks in a
  job"
- The confidence rate of query and correlation rules can now be set between 0 and 150. In the
  Provisioning Review and Resource Reconciliation screens, if the confidence rate is greater than
  100%, the user will see 100% displayed, indicating simply that the correlation exists. A value
  greater than 100% is used only to prioritize multiple rules with a confidence rate of 100%, not to
  approve a permissions assignment.
- In the configuration, a new flag "Hide on simplified view" is available for use on roles and
  resource types that should not be visible on the user's permissions screen's simplified view.
- Normalize, clean up and add increase the number of possible dimensions from 8 to 128 for
  profilecontexts, profilerules and contextrules.

#### Fixed bugs:

- Fixed a bug in which Chrome, in rare cases, was rejecting some cookies and preventing
  authentication.
- Fixed inconsistent date parsing using the timezone syntax (IANA id)
- Correction made to the provisioning tool that was requesting account password resets, although the
  password reset was disabled.
- Correction that allows the modification of a photo in update workflows.
- Fixed some hardcoded entity types in some frontend URIs
- The "Usercube-Deploy-Configuration" tool now checks that photo properties are completed with their
  tag properties.
- Fixed an issue where the password reset settings were not taken into account when the server is
  also considered as agent (On Premises setup).
- Photos now delete properly if the user chooses to remove an existing photo.
- Query rule errors are now in log files and no longer in the database.
- The command Usercube-Invoke-Expression can now return more errors.
- When importing a configuration, display table bindings are now checked and if necessary, a clear
  error is presented.
- The InvokeAPITask now verifies the existence of the three required properties when creating the
  HttpClient for all agent tasks.
- Unnecessary processing and unnecessary server requests from the UI were removed to improvement
  application performance.
- English translations for Access Certification were improved.
- The wording was improved on the user permissions and the modify permissions screens.
- In the TileItem configuration element, the display order indicator is now taken into account with
  "LineDisplayOrderIndicator".
- Added a default filter from the URL in resource lists with the �resourcetable' DesignElement
  attribute.
- In resource lists with a �resourcetable' DesignElement attribute, the resource type picker now
  displays only resource types with a target entity type matching the resource's entity type.
- To enhance clarity, on the Access Rules screen, rule types have been renamed.
  - Automatic (instead of Requested)
  - Automatic with validation (instead of Requested Automatically)
- In the "modify permission screen" for a resource, when selecting a new resource type, a modal
  opens to select the target resource to be associated with the selected entity type. The drop-down
  in the modal now displays only resources whose type is the same as the resource type's target.
- On the Reports screen, Report Name filtering was fixed.
- LDAP connections now close properly.
- Correction to the Active-Directory full export that was not working when the "WhenCreated"
  attribute was not in the list of attributes to fetch.
- Synchronization exceptions are more explicit.
- During Prepare-Synchronization, if multiple values (lines) are detected for a mono valued
  attribute (column) only the first one in the ordered list is taken into account.
- In the new single role rule dialog, �Automatic' is pre-selected as the default role type value.
- The Request Number search field in the Workflow Overview screen is now case-insensitive.
- Corrections in the cleanup when an entity, used as a dimension in an access rule, is deleted,
- Search bar values now better retain the default values across the application.
- Improvements on pagination when filters change on the "My Tasks", "Role Review", "Workflow
  Overview" and "Manual Provisioning" pages.
- The record filter in a form is now correctly managed when it is equal to "Current".
- Set the default value of the record filter in a form to filter on current and future records.
- Correction to badly placed pagination buttons in a list when the third tile has more rows than the
  second.
- When adding or updating an access certification campaign, if a user starts modifying and then
  clicks outside the window, a warning now pops up to indicate that changes are in progress.
- Deny icons on permission assignments if the assignment is non-conforming or historic have been
  removed. Conversely, the possibility of denying a non-conforming or historic permission assignment
  is blocked.
- In Role Review, the workflow state filters are now kept when changing between entities.
- Disable the complete refresh of the page when user clicks on links on an account button. Now, only
  the new content of the page is loaded, not the entire page.
- A new workflow label "Cancellation" has been introduced to clarify misunderstandings.
- On the Resource Reconciliation page, unnecessary sorting options were removed where filters are
  more relevant.
- Deleted hardcoded entity type in creation workflow. The real entity type is now retrieved.
- Correction of a search error on generic tables where the configured search operator was not taken
  into account.
- The CreateSeveralRecordsEntity workflow no longer gives a blank screen when the first record is
  deleted. Now, the last record is shown, as in the UpdateSeveralRecordsEntity workflow.
- Fix incorrect translation values in the new role dialog.
- Correction for an �undefined' workflow error when RecordStartProperty and RecordEndProperty
  weren't defined.
- In the Resource Reconciliation detail screen, the column lengths in the data tables are now
  adjustable.
- Warning messages used to confirm deletions are now red instead of orange.
- Opening the provisioning review modal, a user with the appropriate permissions can click on the
  eye icon and be correctly taken to the original request.
- In the Assigned Role view, when a role is in the awaiting approval state, the icon at the left of
  a role name more clearly indicates an awaiting status.
- A reviewer on the Access Campaign page, can no longer possible to make the same choice repeatedly.
- On the Access Certification screen, the counter is now updated when choices are confirmed.
- Now, in Access Certification a certification item review assignment incorporates start and end
  dates specified on assigned profiles.
- In the BuildUniqueValue aspect, a new variable "iteration" allowed in the SQL query permits the
  creation of unique values over the same type of object. For example, a unique value for each
  UserRecord.
- In a RecordEntityForm, input modifications in the MainControl section are now correctly taken into
  account.
- WorkflowAddRecordEntity form containing read-only fields no longer causes an error when
  submitting.
- While the AzureAD connector was directly creating guests, new options allow guests to be invited
  via the standard Azure AD mechanism. To enable this new feature, the guests' ResourceTypeMapping
  must be updated as in the following example:
  `<ResourceTypeMapping Identifier="AzureAD_DirectoryObject_Guest" DNProperty="AzureAD_DirectoryObject:objectid" DefaultObjectClass="users" DisplayNameProperty="AzureAD_DirectoryObject:displayName" MailProperty="AzureAD_DirectoryObject:mail" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://www.usercube.com" />`
- The XML configuration tool now gives a clear and detailed error message when a configured object
  has an invalid reference to another one, for example, a Pointcut towards a non-existing Workflow.
- The configuration deployment tool was crashing when a CorrelationRule had an incorrect
  ResourceType reference. Now, a clear error message is displayed.
- QueryRules that had both a Source and Target expression were not compiled when deploying the
  configuration. Now, the role model is applied correctly for these properties.
- Errors are now returned when certain incorrect values are found in
  appsettings.ConnectionInformation.json.
- The Configuration argument is now optional in the scaffolding CreateInitializationJob.
- Correction to the calculation of pre-existing values by adding a provisioning block in the last
  calculated ComputeRoleModel for Initialization Job Scaffolding.
- Correction to identifier generation for ServiceNow and PowerShell Task in all scaffolding to
  prevent conflicts.
- Fix English Grammar in JobLogs view.
- In the File Access tool, correction was made for a null pointer exception in an optional argument.
- Correction to path information that was truncated in the File Access module.
- If a user receives a forwarded task, even if they normally do not have access for this type of
  task, they will be given the proper permissions to act on the forwarded task.
- Fix to provide the correct application URL in email notifications.
- When clicking on a task from an email, if the task has been treated, the progress of the task and
  a message are now displayed instead of an error.
- Deleting a role/resource type is blocked while it is assigned to a user or used in a rule.
- The provisioning policy is now applied correctly for mono-valued fields that don't have a target
  column index.
- If the ResourceType attribute "AllowRemove" flag is false, the provisioning policy keeps this
  resource type even if it is no longer needed according to permission rules.

## Version 5.1.1

Release date: 2020-03-03

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

   `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:

   `Usercube-Upgrade-ConfigurationVersion -s 5.1.0 -c "source conf path" -o "target conf path"`

5. Update appSettings files according instructions in the Usercube documentation: "Migration
   Usercube configuration > 5.1.0 to 5.1.1"
6. Deploy-Configuration:

   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

7. Start server

#### Minor Enhancements:

- The dashboard has new icons for task badges.
  ![Dasboard](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.dashboard.webp)
- Role reconciliation icons have been updated to more clearly indicate their use and subsequent
  consequences to the roles.
  ![RoleReconciliationIcons](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.rolereconciliationicons.webp)
- The new image picker allows the possibility for uploading an existing photo or using the webcam to
  take a photo.
  ![TakeAPhoto](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.takephoto.webp)
- All roles are now displayed in the same section including suggested roles.
  ![RolesTogether](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.rolestogether.webp)
- The role details page now displays the request and certification histories.
  ![RoleHistories](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.rolehistories.webp)
- The role catalog displays the type of approval workflow.
  ![ApprovalTypesDisplayed](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.approvaltypesdisplayed.webp)
- A given certification campaign can now filter roles to be certified by their number of approvals
  and by their last certification date.
  ![CertifyCriterion](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.certifycriterion.webp)
- A new certification report linked to each campaign allows the extraction of real-time results to
  an Excel file.
  ![CertificationReportButton](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.certificationreportbutton.webp)
  ![CertificationReportResults](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.1.certificationreportresults.webp)

#### Fixed bugs:

- A resource type with an end date in the past now has a �Blocked' state once the provisioning
  policy is executed (instead of �Pending').
- The Active Directory data collect could hang when an entry was moved to the AD basket and then
  purged from the AD logs. Now, these entries are considered as completely deleted.
- Configuration deployment now correctly handles the situation when the EntityType, ResourceType or
  Dimension lists are empty.
- Correction to InvokeExpression tool on the agent side.
- Cumulate the list of missing propertyMappings during the synchronization preparation instead of
  having separate errors for each one.
- Permits the stack trace to be displayed in the logs.
- In the daily synchronization job, correction to the SendNotification task.
- Before executing AD or LDAP server calls, the connection is now verified.
- A synchronization in incremental mode empties previously filled fields that currently have a null
  value.
- Correction related to incorrect arguments in the synchronization preparation.
- The AD provisionner can now handle the modification of an account when the password is not yet
  set.
- Correction related to Windows authentication
- Record filters set for workflow record forms are now properly taken into account (property
  RecordFilter of a Form with options for displaying: All, Current only or Current and Future only).
- Logging in with a form-based ActiveDirectory authentication can now avoid timeout issues using the
  fastBind option. Logs are also more explicit on login failures at the Debug level.
- Better logs for the LDAP provisioner which now indicate the attribute concerned by an error
- A search bar defined without advanced criterion no longer throws errors.
- Workflow management pagination is more robust.
- Increased allowable length in the InputPath parameter of InvokeExpressionTask from 442 characters
  to 4000.
- For data extractions, new check to test the existence of the data source file.
- New option to deprovision a resource when the owner is deleted: RemoveOrphans attribute has been
  added in the ReourceType entity.
- Deploy-Configuration tool now returns an error when EntityAssociationMapping configuration is
  inconsistent.
- Corrected error in search view of page of roles which prevented changing the value approval
  workflow levels.
- Increased robustness in the synchronization process:
  - Prevent synchronization errors when multiple properties use the same column in the source
    file.
  - A binary property cannot have a target column index.
  - A synchronized column cannot be defined more than once in the source file.
- Adding a record to an existing multi-record entity no longer throws SQL errors.
- ComputeCorrelationKeys now uses correct binding for query rules.

## Version 5.1.0

Release date: 2020-01-20

### **Compatibility notice:**

This is a major upgrade. The migration steps below must be followed.

#### Migration steps:

1. If necessary, upgrade to .NetCore to version 3.1 or later.
2. Install the new runtime: a. Copy the new runtime.zip b. Modify the ApplicationUri and the
   ConnectionString c. Add the client license (send an email to
   [sales@usercube.com](mailto:sales@usercube.com))
3. Migrate the database: a. `Usercube-Upgrade-DatabaseVersion -s "database name"` b. Execute the
   last part of the file �Usercube.sql' starting with the line
   `DELETE "ua_accesscontrolpermissions"`
4. Migrate the configuration: a.
   `Usercube-Upgrade-ConfigurationVersion -s 5.0.0 -c "conf source" -o "conf cible"` b.
   `Usercube-Deploy-Configuration -d � conf � -s � base � -e`

#### Major Enchancements:

- Certification: Roles, accounts and groups can now be certified. Certfication campaigns can be
  defined on different levels of roles and each certification item can be transfered elsewhere if
  necessary.
  - Campaign creation
    ![CampaignCreation](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.0.campaigncreation.webp)
  - Campaigns lists
    ![Campaigns](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.0.campaigns.webp)
- Jobs: Jobs can now be executed on the server as well as the agent, with detail of each job step
  including direct access to execution logs.
  ![Jobs](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.0.jobs.webp)
- Historisation: Historisation is now active for the metadata tables, resoure tables et most
  provisioning tables (tables UM*, UR* et UP\_). For optimal performance, the SQL server needs table
  partitioning capabilities.
- The permissions page now displays access rights in a tree layout.
- Suggested roles are now possible. They can be defined with access rules where the type is
  �Suggested'.
  ![SuggestedRoles](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.0.suggestedroles.webp)
- Dashboard counters are now visible indicating actionable tasks since last time.
  ![Counters](/img/versioned_docs/identitymanager_6.1/identitymanager/whatsnew/olderversions/5.1.0.counters.webp)
- New notifictions for provisioning reviews, role reviews, provisioining summaries, role summaries,
  and certification requests needing treatment.

#### Minor Enhancements:

- The agent containts a new SAP Connector. This connector requires SAP Netweaver for Java with at
  least the following versions: SAP NetWeaver '04 SPS 14 or SAP NetWeaver 7.0 SPS 05. The connector
  can
  - synchronize users, groups and roles
  - fulfill users and group/role memberships
  - initialize users' passwords
- New ldif connector. This connector will read ldif files as source for synchronization.
- A new OpenLDAP Connector can handle incremental OpenLDAP exports
- The Access Rules page now permits the creation/modification/deletion of QueryRules
- Encryption now possible in json files to secure connection settings. See the documentation:
  References > Tools > Usercube-Protect-ConnectorSettings.
- Values coming from authoritative sources can be overridden by changing them in the User Interface
  and Workflows. The forced values are then locked and can no longer be changed by the authoritative
  source. Now, if the source changes, a special warning tracks that the forced values should be
  reviewed, and reset if needed.
- Product licensing is now translated into a product setting. A license key must be provided for
  each server installation. The license key defines the available features and usage limits.
- When synchronization or provisioning safety limits are triggered, the exact cause is now logged by
  the server (count or percentage of inserted/updated/deleted rows or links).
- A new approval workflow with three steps is now available for composite roles, single roles and
  resource types.
- The unncessary attribute DisplayOrder has been removed from MenuItem children, SearchCriterion and
  DisplayTables.
- 26043: On the assigned profiles page and roles pages, search now returns results where the string
  is contained in the title (not simply starting with).
- IsUniqueKey is a new attribute of an Entity Association Mapping.
- TransformExpression has been renamed to FlexibleComparisonExpression (the migration script will
  update the configuration).
- Harmonization of URLs and page titles.
- Simplification of Role and ResourceType pickers.
- Activity state in the UI now reflects the name defined in the database.
- 23094, 23095: Updated UI components.
- Remove unncessary cancel button on login page.
- Size of photo on the resource page reduced.
- In the provisioning policy, can define a query rule with a target expression.
- Permissions page now takes into account aspects and computed expressions.
- Resource correlation keys are precalculated for better provisioning policy performance.
- Enhanced mechanism for calculating recipients of workflow notifications
- Attribute ComparisonType for resource scalar rules has new possible values (see documentation)
- Optional comments can now be added in role review, when a role is declined and in role
  reconciliation, when a role is kept.

#### Fixed bugs:

- A data line with many caracters is now word-wrapped to a second line instead of being truncated.
- Provisioning orders are now generated with correct commands when a linked assignment has not been
  correlated.
- Add a category picker that wasn't available when assigning a profile.
- Fix correcting problem related to deletion/modification of validity dates when assigning a
  profile.

# Usercube 6.1
