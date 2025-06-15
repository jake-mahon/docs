# ADInventory: Custom Attributes

The Custom Attributes page provides ability to add Active Directory attributes that are unique to the environment or not collected by default to be gathered. It is a wizard page for the category of Scan Active Directory.

The [Standard Reference Tables & Views for the ADInventory Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/standardtables.md) topic provides information on what is collected by default. Custom attributes added on this page are stored in the __SA_ADInventory_ExtendedAttributes__ table.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributes.png)

The Custom Attribute is defined according to the following three elements:

- Domain Filter – Short or fully qualified name
- Object Class – User, Group, or Computer
- Attribute Name – As listed within Active Directory

Use the __Add__, __Edit__, and __Remove__ buttons at the bottom of the window to configure the custom attributes to be gathered by the scan. See the [Manually Add Custom Attributes](#manually-add-custom-attributes) topic for additional information.

The __Import__ button opens the Custom Attributes Import Wizard. See the [Custom Attributes Import Wizard](#custom-attributes-import-wizard) topic for additional information.

Microsoft Active Directory Schema is detailed in the Microsoft [Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema) article.

#### Manually Add Custom Attributes

The __Add__ and __Edit__ buttons on the Custom Attributes page open the Custom Attribute window. Follow the steps to manually add custom attributes.

__Step 1 –__ On the Custom Attributes page of the Active Directory Inventory DC Wizard, click __Add__. The Custom Attribute window opens.

![Custom Attribute window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributesadd.png)

__Step 2 –__ Enter the __Domain Filter__. This can be entered either as the short domain name or the fully qualified domain name.

__Step 3 –__ Select the checkbox for the desired __Object Class__.

__Step 4 –__ Enter the __Attribute Name__ as it appears in Active Directory.

__Step 5 –__ Click __OK__. The Custom Attribute window closes and the specified attribute is added in the Custom Attributes page.

Repeat this process until all desired Custom Attributes have been included.

#### Custom Attributes Import Wizard

The Custom Attributes Import Wizard is used to import a list of custom attributes into the ADInventory Data Collector configurations. Follow the steps to use the Custom Attributes Import Wizard.

__Step 1 –__ On the Custom Attributes page of the Active Directory Inventory DC Wizard, click __Import__. The Custom Attribute Import Wizard opens.

![Custom Attributes Import Wizard Credentials page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributesimportcredentials.png)

__Step 2 –__ On the Credentials page, identify a domain either by entering one manually or selecting one from the __Domain Name__ drop-down menu which displays a list of domains trusted by the one in which the Enterprise Auditor Console server resides. Then set the credentials for reading the attributes list from the domain:

- Authenticate as the logged in user – Applies the user account running Enterprise Auditor
- Use the following credentials to authenticate – Applies the account supplied in the __User Name__ and __Password__ fields

Click __Next__ to continue.

![Custom Attributes Import Wizard Attributes page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributesimportattributes.png)

__Step 3 –__ The wizard populates available attributes from the domain specified on the Attributes page. Expand the desired object class and select the checkboxes for the custom attributes to be imported. Then click __Next__.

![Custom Attributes Import Wizard Summary page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/customattributesimportsummary.png)

__Step 4 –__ On the Summary page, click __Finish__.

The selected attributes are added on the Custom Attributes page of the Active Directory Inventory DC Wizard.
