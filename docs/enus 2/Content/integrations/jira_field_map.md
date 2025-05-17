---
sidebar_position: 2843
title: Jira Field Mapping
---

# Jira Field Mapping

The Jira Field Mapping tool maps a Jira field to a Netwrix Change Request. To access the Field Mapping tool:

1. Open Netwrix Dashboard.
2. Click **Configuration and Stats** in the **Resources** section, or open **Settings** > **Configuration and Stats**.
3. Open the **Jira Configuration** tab.
4. Select **Field Mapping**.

## Field Mapping Process

1. [Identify Fields to Map](#Identify "Identify Fields to Map")
2. [Verify Field Creation](#Verify "Verify Field Creation")
3. [Add Fields to Page Layouts](#Add "Add Fields to Page Layout")
4. [Update Values](#Update "Update Status")
5. [Access Mapping Configuration](#Access "Access Mapping Configuration")
6. [Create Mapping Record](#Create "Create New Record")
7. [Verify the Change Request](#Verify2 "Verify the Change Request")

### Identify Fields to Map

Determine the fields you want to map from Jira in the current Netwrix change request. Open the form where you added the custom fields to get the field names. This example maps the **Strongpoint Version** and **Salesforce Version Number** fields, using the fields from the **Details** section in Jira.

![Identify fields to map](../../../../static/images/enus 2/Content/Resources/Images/field_map_id_fields.png "Identify fields to map")

### Verify Field Creation

Ensure the fields are created in Salesforce.

1. Open **Salesforce Setup** > **Object Manager** > **Change Request**
2. Open **Fields & Relationships**

If your fields are not in the list, use the **New** button to add them.

For this example, the **Strongpoint Version** and **SF Version Number** fields have been added.

**NOTE:** You need the Salesforce API names when you create the mapping record. For this example, **Strongpoint Version** is **Strongpoint\_Version\_\_c** and **SF Version Number** is **Salesforce\_Version\_Number\_\_c**.

![Verify fields exist](../../../../static/images/enus 2/Content/Resources/Images/field_map_verify_fields.png "Verify fields exist")

### Add Fields to Page Layouts

Add the fields to the Page Layouts.

1. Open **Salesforce Setup** > **Object Manager** > **Change Request**.
2. Open **Page Layouts**.
3. Select your layout. If your fields are not in the layout, add them. For this example, the **Strongpoint Version** and **SF Version Number** fields have been added to the **Customizations Layout**.

   ![Add to layouts](../../../../static/images/enus 2/Content/Resources/Images/field_map_layouts.png "Add to layouts")
4. Open **Setup** > **Lightning App Builder**.
5. Open your Record Page. This example shows the **Customizations Record** page. Make sure your fields are in the record page and set to visible.

   ![Check record page for fields and visibility](../../../../static/images/enus 2/Content/Resources/Images/field_map_record.png "Check record page for fields and visibility")

### Update Values

In Jira, update the details for the fields. This example sets the **Strongpoint Version** field to **2.2800** and the **Salesforce Version** to **6.1**.

![Update the values](../../../../static/images/enus 2/Content/Resources/Images/field_map_set_values.png "Update the values")

### Access Mapping Configuration

**NOTE:** Make sure your custom fields have values before you start the mapping. The Jira API names are in the format *customfield\_#####*. You need to know the value to locate the Jira API name in the list.

Open the Field Mapping tool:

1. Open Netwrix Dashboard > **Settings** > **Configuration and Stats**.
2. Open the **Jira Configuration** tab.
3. Select **Field Mapping**.
4. Enter the **Jira Ticket Id**.
5. Click **Get Fields**.

   ![Get Fields for mapping](../../../../static/images/enus 2/Content/Resources/Images/field_map_get_fields.png "Get Fields for mapping")
6. Review values in each field to locate the Jira API names. In this example, **Salesforce Version Number** is **6.1**, corresponding to **customfield\_10071**. **Strongpoint Version** is **2.2800** corresponding to **customfield\_10052**.

The Jira API names are required to create the mapping record.

### Create Mapping Record

1. Open the App Launcher.
2. Navigate to **CR CustomFields Mapping**. It is added as a tab on the navigation bar. You can click on the down arrow on the tab and add it to your navigation bar.

   ![Launch CR CustomFields Mapping](../../../../static/images/enus 2/Content/Resources/Images/field_map_launcher.png "Launch CR CustomFields Mapping")
3. Click **New** to create the record.

   ![Create a new mapping record](../../../../static/images/enus 2/Content/Resources/Images/field_map_new_record.png "Create a new mapping record")
4. Enter a name for **CR CustomField Mapping Name**. **Strongpoint Version** is used in this example.
5. Enter the **CR External Field APIName**. This is the Jira API name obtained from the Field Mapping tab for the Jira Configuration tool. Refer to the [Verify Field Creation](#Verify "Verify Field Creation") section for details. **customfield\_10052** is used in this example.
6. Enter the **CR SF Field APIName**. This is the Salesforce API name obtained from **Salesforce Setup** > **Object Manager** > **Change Request** > **Fields & Relationships**. Refer to the [Verify Field Creation](#Verify "Verify Field Creation") section for details. **Strongpoint\_Version\_\_c** is used in this example.
7. Click **Save** or **Save & New** if you have additional mappings.

The mapping is now complete. In the next update, the information is populated in the fields and shows in the Netwrix Change Request.

![Field Map complete](../../../../static/images/enus 2/Content/Resources/Images/field_map_complete.png "Field Map complete")

### Verify the Change Request

Open the Change Request that contains your mapped fields. Verify the information is correct. Here is the example showing the **Strongpoint Version** and **SF Version Number** fields and data appear on the Change Request.

![Verify the Change Request](../../../../static/images/enus 2/Content/Resources/Images/field_map_change_request.png "Verify the Change Request")