---
sidebar_position: 1411
title: Integration Mapping
---

# Integration Mapping

The Integration Mapping tool maps customizations between External Systems and NetSuite.

Here is the basic process. You can click on any of the steps to jump to the section.

[Step 1](#create_ext_sys "Integration Mapping Tool"): Create the External System Customization record. (optional)

[Step 2](#create_csv "Integration Mapping Tool"): Create a **.csv** file.

[Step 3](#open_map_tool "Integration Mapping Tool"): Open Integration Mapping tool.

[Step 4](#select_ext_sys "Integration Mapping Tool"): Select or Enter the External System.

[Step 5](#upload_csv "Integration Mapping Tool"): Upload your **.csv** file.

[Step 6](#review "Integration Mapping Tool"): Review and Finish.

[Step 7](#summary "Integration Mapping Tool"): View the Summary and ERD.

## Step 1: Create the External System Customization Record

You can create the External System before using the mapping tool. If you do not create the External System, it can be automatically created by the tool.

1. Open **Strongpoint** > **Customizations** > **Customization** > **New**
2. Enter a **Name** for the External System, for example: *Salesforce*. (External System) is appended to the Name. For example, *Salesforce (External System)*.
3. Enter a **Description**.
4. Select **External System** from the **Type** list.
5. Click **Save**.

## Step 2: Create a .csv file

The **.csv** file is where you specify the customization mapping between the External System and NetSuite. The file is uploaded when you run the tool. You can create a file with the specified headings, or download the template with the link on the first page of the Integration Mapping tool. Do not change the specified headings. Here is the template:

![](../../../../static/images/enus/Content/Resources/Images/int_map_csv_template.png)

* **External Name** is the Object’s **Name** in the external system.
* **External Script ID** is the Object’s **Identifier** in the external system.
* **External Type** is the Object’s **Customization Type** in the external system.
* **Relationship(DataSource or Dependent Object)** specifies where the object originates. **DataSource** indicates an object from the external system translates into NetSuite. **Dependent** indicates the object translates from NetSuite to the external system.
* **Target Object Name or ScriptID** is the Object’s **Name** or **ScriptID** in NetSuite.
* **NS Parent** is the **Parent** of the **Target Object** in NetSuite.

## Step 3: Open Integration Mapping tool

:::note
The Mapping Tool menu item is hidden by default. If you do not see the option in your menu, refer to the Managing Menus topic for information on making it available.
:::

Open **Strongpoint** > **Integrations** > **Mapping Tool**

**![](../../../../static/images/enus/Content/Resources/Images/int_mapping_menu.png)**

## Step 4: Select or Enter the External System

1. Select an existing External System from the list if you created it during [Step 1](#create_ext_sys "Integration Mapping Tool"), or Enter a new name to have the tool automatically create a new External System, for example: *Salesforce*. Strongpoint appends (External System) to the Name. For example, *Salesforce (External System)*.

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_ext_sys.png)
2. You can use the link to download the **.csv** template if you have not already created the file.
3. Click **Next** to continue.

## Step 5: Upload your .csv file

1. Click **Choose File**.

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_upload_csv.png)
2. Navigate to the**.csv file** containing your mappings.
3. Click **Next** to continue.

## Step 6: Review and Finish

1. Review customization mappings. If you entered a **ScriptID** in your **.csv**, the associated **Link Object** is shown.

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_map_cust.png)
2. Click **Search** to open the search form and select or research additional **Link Objects**.

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_search.png)
3. Search by all or part of a **Name**, **Type** or all or part of a **ScriptID**. For example, enter *cust* for **Name** and click **Search** to find all customizations containing the search term:

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_search_results.png)

   * Click in the **Add** column to select one or more objects.
   * Click **Select**.
   * Close the form when complete.
4. Click [X] to remove a **Link Object**.
5. Click **Finish** to begin the mapping.

## Step 7: View the Summary and ERD

1. Check the Summary for any **Import Errors**.

   ![](../../../../static/images/enus/Content/Resources/Images/int_map_summary.png)
2. Click the linked **Internal ID** to display the ERD for each mapped customization.

Here is an example of an expanded ERD showing **Integrations**, **Sources**, and **External Dependent Fields**. Note the **External Dependent Fields** is highlighted with a green header.

![](../../../../static/images/enus/Content/Resources/Images/int_mapping_ext_ERD.png)