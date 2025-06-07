# AzureADInventory: Custom Attributes

Use the Custom Attributes wizard page to define custom attributes that will be used in the Microsoft Entra ID scan.

![Entra ID Inventory Data Collector Wizard Custom Attributes page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/customattributes.png)

Configuration options for Custom Attributes include:

- Collect Open Extensions – If enabled, data collector will perform a full scan and collect all extension attributes for Microsoft Entra ID objects

  - Enabling this option will increase the time it takes for the data collector to complete the scan. Disabling this option will configure the data collector run a differential scan, which will only scan changes since the last scan was performed.

  __CAUTION:__ A full scan is required when new attributes are added or removed.
- Add – Adds a manually entered attribute that is included in the scan. This option opens the Custom Attribute window.
- Edit – Make changes to a previously added attribute. This option opens the Custom Attribute window.
- Remove – Deletes the attribute from the table and therefore the scan
- Import – Use the Azure Connection Profile credentials or manually inputted credentials to import custom attributes for the scan using a valid tenant name. This option opens up the Custom Attributes Import Wizard.

Use the __Add__, __Edit__, and __Remove__ buttons at the bottom of the window to configure the custom attributes to be gathered by the scan. Use the __Add__ button to open the [Custom Attribute Window](#Custom-Attribute-Window). The __Import__ button opens the [Custom Attributes Import Wizard](#Custom-Attributes-Import-Wizard).

#### Custom Attribute Window

Input custom attributes from Microsoft Entra ID environments using the Custom Attribute pop-up window.

![Custom Attribute Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributewindow.png)

The options on the Custom Attributes window are:

- Tenant Filter – Use a Tenant Name or wildcard to target the desired environment. Wildcards (\*) can be used.
- Object Class – One or more object class for the attribute can be selected:
  - User
  - Group
  - Contact
- Attribute Name – Microsoft Entra ID attribute name
- Collect all sub-attributes – Allows the collection of sub-attributes
  - Sub-Attribute Name – Define the sub-attribute name. Wildcards (\*) can be used.

Repeat this process until all desired Custom Attributes have been included. Click __OK__ to save the attribute.

#### Custom Attributes Import Wizard

The Custom Attributes Import wizard adds a list of custom schema and application attributes from the targeted tenant environment into the AzureADInventory Data Collector configurations. Follow the steps to use this window:

__Step 1 –__ On the Custom Attributes page of the Entra Inventory DC wizard, click __Import__. The Custom Attributes Import Wizard opens.

![Custom Attributes Import Wizard](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributesimportwizard.png)

__Step 2 –__ On the Connection page, enter the Tenant Name of the instance of Microsoft Entra ID to be targeted, and then select the method of supplying credentials for the specified tenant instance:

- Use the following connection profile entry – Select an Azure Connection Profile from the dropdown list
- Use the following credentials to authenticate – Enter the credentials to use
  - App Id –Client ID
  - App key – Client Secret Key

___RECOMMENDED:___ Add a valid Azure Connection Profile to the __Jobs__ > __.Entra ID Inventory__ > __Settings__ > __Connection__ settings as a user defined profile. This ensures the connection profile displays in the dropdown menu.

See the [Microsoft Entra ID Auditing Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/config/entraid/access.md) or the [Microsoft Entra ID Connection Profile & Host List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/configurejob.md) topics for additional information.

__Step 3 –__ Click __Test Connection__ in order to connect to the tenant with the supplied credentials. If they are correct, the Schema Attributes and Application Attributes pages become available. Click __Next__ to navigate to them.

|  |  |
| --- | --- |
| ![customattributesimportwizardschema](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributesimportwizardschema.png) | ![customattributesimportwizardapplication](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/customattributesimportwizardapplication.png) |
| Schema Extended Attributes page | Application Extended Attributes page |

__Step 4 –__ On the Schema and Application Attributes pages, the wizard populates with the available attributes from the Azure tenant. Expand the object classes and select the checkboxes next to the required attributes to import the custom attributes. Click Next to continue.

- Load More – Adds additional object classes from the Microsoft Entra ID tenant environment that are not located in the current list
- Refresh Nodes – Wipes selections from all object class folders

__Step 5 –__ On the Summary page, review your selections and click __Finish__.

The selected attributes display on the Custom Attributes page of the Entra ID Inventory DC wizard.
