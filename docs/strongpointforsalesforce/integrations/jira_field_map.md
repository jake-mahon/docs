# Jira Field Mapping

The Jira Field Mapping tool maps a Jira field to a Netwrix Change Request. To access the Field Mapping tool:

1. Open Netwrix Dashboard.
2. Click __Configuration and Stats__ in the __Resources__ section, or open __Settings__ > __Configuration and Stats__.
3. Open the __Jira Configuration__ tab.
4. Select __Field Mapping__.

## Field Mapping Process

1. [Identify Fields to Map](#Identify-Fields-to-Map)
2. [Verify Field Creation](#Verify-Field-Creation)
3. [Add Fields to Page Layouts](#Add-Fields-to-Page-Layouts)
4. [Update Values](#Update-Values)
5. [Access Mapping Configuration](#Access-Mapping-Configuration)
6. [Create Mapping Record](#Create-Mapping-Record)
7. [Verify the Change Request](#Verify-the-Change-Request)

### Identify Fields to Map

Determine the fields you want to map from Jira in the current Netwrix change request. Open the form where you added the custom fields to get the field names. This example maps the __Strongpoint Version__ and __Salesforce Version Number__ fields, using the fields from the __Details__ section in Jira.

![Identify fields to map](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_id_fields.png)

### Verify Field Creation

Ensure the fields are created in Salesforce.

1. Open __Salesforce Setup__ > __Object Manager__ > __Change Request__
2. Open __Fields & Relationships__

If your fields are not in the list, use the __New__ button to add them.

For this example, the __Strongpoint Version__ and __SF Version Number__ fields have been added.

__NOTE:__ You need the Salesforce API names when you create the mapping record. For this example, __Strongpoint Version__ is __Strongpoint\_Version\_\_c__ and __SF Version Number__ is __Salesforce\_Version\_Number\_\_c__.

![Verify fields exist](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_verify_fields.png)

### Add Fields to Page Layouts

Add the fields to the Page Layouts.

1. Open __Salesforce Setup__ > __Object Manager__ > __Change Request__.
2. Open __Page Layouts__.
3. Select your layout. If your fields are not in the layout, add them. For this example, the __Strongpoint Version__ and __SF Version Number__ fields have been added to the __Customizations Layout__.

   ![Add to layouts](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_layouts.png)
4. Open __Setup__ > __Lightning App Builder__.
5. Open your Record Page. This example shows the __Customizations Record__ page. Make sure your fields are in the record page and set to visible.

   ![Check record page for fields and visibility](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_record.png)

### Update Values

In Jira, update the details for the fields. This example sets the __Strongpoint Version__ field to __2.2800__ and the __Salesforce Version__ to __6.1__.

![Update the values](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_set_values.png)

### Access Mapping Configuration

__NOTE:__ Make sure your custom fields have values before you start the mapping. The Jira API names are in the format _customfield\_#####_. You need to know the value to locate the Jira API name in the list.

Open the Field Mapping tool:

1. Open Netwrix Dashboard > __Settings__ > __Configuration and Stats__.
2. Open the __Jira Configuration__ tab.
3. Select __Field Mapping__.
4. Enter the __Jira Ticket Id__.
5. Click __Get Fields__.

   ![Get Fields for mapping](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_get_fields.png)
6. Review values in each field to locate the Jira API names. In this example, __Salesforce Version Number__ is __6.1__, corresponding to __customfield\_10071__. __Strongpoint Version__ is __2.2800__ corresponding to __customfield\_10052__.

The Jira API names are required to create the mapping record.

### Create Mapping Record

1. Open the App Launcher.
2. Navigate to __CR CustomFields Mapping__. It is added as a tab on the navigation bar. You can click on the down arrow on the tab and add it to your navigation bar.

   ![Launch CR CustomFields Mapping](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_launcher.png)
3. Click __New__ to create the record.

   ![Create a new mapping record](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_new_record.png)
4. Enter a name for __CR CustomField Mapping Name__. __Strongpoint Version__ is used in this example.
5. Enter the __CR External Field APIName__. This is the Jira API name obtained from the Field Mapping tab for the Jira Configuration tool. Refer to the [Verify Field Creation](#Verify-Field-Creation) section for details. __customfield\_10052__ is used in this example.
6. Enter the __CR SF Field APIName__. This is the Salesforce API name obtained from __Salesforce Setup__ > __Object Manager__ > __Change Request__ > __Fields & Relationships__. Refer to the [Verify Field Creation](#Verify-Field-Creation) section for details. __Strongpoint\_Version\_\_c__ is used in this example.
7. Click __Save__ or __Save & New__ if you have additional mappings.

The mapping is now complete. In the next update, the information is populated in the fields and shows in the Netwrix Change Request.

![Field Map complete](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_complete.png)

### Verify the Change Request

Open the Change Request that contains your mapped fields. Verify the information is correct. Here is the example showing the __Strongpoint Version__ and __SF Version Number__ fields and data appear on the Change Request.

![Verify the Change Request](/static/img/product_docs/strongpointforsalesforce/integrations/field_map_change_request.png)
