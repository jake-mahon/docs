# SearchBarPageAccessControl

The Scaffolding giving access to the different views of the pages of the role model do not give access rights to the different navigation elements of the SearchBars of these pages.
This Scaffolding allows you to give these rights per page, profile and EntityType.

## Properties

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    String   __Description__   Identifier of the entity type involved in the scaffolding. |
| Profile   required | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |

## Child Elements

- [SearchBarPage](#searchbarpage) (optional) Adds right for a search bar in a specific page

### SearchBarPage

| Property | Details |
| --- | --- |
| SearchBarPage   default value: None | __Type__    SearchBarPageType   __Description__   For the scaffolding arguments ```SearchBarPage``` and ```SearchBarPageAccessControl```, location of the search bar.   ```0``` - None.   ```1``` - ReviewRoles.   ```2``` - ReconciliateRoles.   ```3``` - ReviewProvisioning.   ```4``` - PerformManualProvisioning.   ```5``` - ReconciliateResources.   ```6``` - WorkflowOverview. |
