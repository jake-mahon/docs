# MenuItem

A menu item displays grouped navigation actions.

## Examples

```

    <MenuItem Identifier="View_AD_Entry" DisplayName_L1="AD Entry">        <MenuItem Identifier="View_AD_Entry_ResetPassword" DisplayName_L1="Reset Password" IconCode="Edit" Workflow="AD_Entry_ResetPassword" />    </MenuItem>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   optional | __Type__    String   __Description__   Display name of the menu item in language 1 (up to 16). |
| EntityType   optional | __Type__    Int64   __Description__   Represents the linked entity type. |
| IconCode   optional | __Type__    String   __Description__   Code of one of [Microsoft's fabric icons](https://uifabricicons.azurewebsites.net/) to be displayed with the menu item.   __Note:__ on Microsoft page, see the icons' codes by moving the mouse over the icons, or using the detailed view. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the item. |
| IsExpandedByDefault   default value: true | __Type__    Boolean   __Description__   Is an expanded by default menu item. |
| IsSelfForm   default value: false | __Type__    Boolean   __Description__   Is a self form menu item. |
| ParentMenuItem   optional | __Type__    Int64   __Description__   Defines the parent menu item. Five ParentMenuItem are hard coded:   - Dashboard: Allow to display MenuItem in dashboard (Home page)   - Nav: Allow to display MenuItem in navigation section (the left part in dashboard)   - UserMenu: Allow to display MenuItem in links list on click on user account in the top right corner   - Reports: Define all the reports downloadable in the application   - Top: Allow to display MenuItem in top bar of the application, between "Home" and "My tasks" |
| ReportQuery   optional | __Type__    Int64   __Description__   Represents the linked report query. |
| URI   optional | __Type__    String   __Description__   Represents the menu URI. |
| Workflow   optional | __Type__    Int64   __Description__   Represents the linked workflow. |
