# Set Resources' Display Names

How to change the value of the [display name](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md#display-name) for resources of an [entity type](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

## Overview

Here you will learn how to change a resource's display name, which is the name used by the UI to identify a resource of an entity type. Its value is computed from existing properties. For example for the entity type ```HR - User```, integrators may set the display name to:  
```<Employee_Id> - <Last_name> <First_name>```.

![Display Name - Example](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displaynameexample_v600.png)

If you do not set your own display name, Usercube provides a default value based on the first scalar property after alphabetizing all the properties whose name contains ```name```.

## Set the Resource's Display Name

Set the resource's display name by proceeding as follows:

1. Start by creating the entity type with its [scalar properties](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md) and [keys](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/key-selection/index.md).
2. Ensure that the created properties are saved by clicking on __Save & Close__ > __Save__ at the top right corner.
3. On the entity type's definition page, click on the __Settings__ tab.

   ![Display Name - Property Path](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displayname_v603.png)
4. Set the display name. As a display name, you can use either the value of an existing property, or compute an [expression](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md) based on existing properties.

   > A resource from ```AD - Entry``` can be displayed using its ```userPrincipalName``` with predefined functions.
   >
   > ![AD Entity Type - Display Name](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4_v602.png)
   >
   > ![AD Entity Type - Display Name Result](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4-result_v602.png)

   > Another example from the HR connector (User entity type):
   >
   > ![HR User Entity Type - Display Name](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr_v602.png)
   >
   > ![HR User Entity Type - Display Name Result](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr-result_v602.png)
5. Click on __Save & Close__.

   Changes inside connectors won't take effect until the next [synchronization](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/synchronization/index.md). More specifically, changes in display names won't take effect until the next [```Update-EntityPropertyExpressionsTask```](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask/index.md) runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you should reload the schema to implement the changes. You do not need to click on the button every time. It is essential though to reload after the final changes are made.

![Reload](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.png)

The __Reload__ button mostly enables your changes to appear in the menu items, which configure the left menu links on the UI's home page.

You can find the __Reload__ button either on the green warning, or on the connector's dashboard.

## Troubleshooting

#### If no property appears in the display name auto-completion, then�

![No Property](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_troubleprop_v602.png)

Ensure that the created properties are saved by clicking on __Save & Close__ > __Save__ at the top right corner of the screen.
