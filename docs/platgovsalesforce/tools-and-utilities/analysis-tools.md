# Access Review Assistant

The Access Review Assistant creates a comprehensive display of permissions and profiles for a
selected **Object**, **User**, or **Profile / PermissionSet**. The results can be exported to Excel.
The Access Review Assistant feature is available with the Intelligent Change Enablement and
Enterprise Compliance [licenses](/docs/platgovsalesforce/getting-started/features-and-licensing.md).

Run the scanners before you perform comparisons to ensure you have the latest data.

There are three Access Assistance search types:

- Search By Object
- Search By User
- Search By Profile / Permission Set

## Search By Object

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By Object**
   is selected.

   ![Open the Access Review Assistant](/img/product_docs/platgovsalesforce/tools/access_review_assistant.webp)

2. Start typing the name of the **Search Object**. You can pick your object from the displayed
   completion list.
3. Set the **Permission Type Filters**: **All Permissions**, **Permission Set**, **Permission Set
   Group**, or **Profile**.
4. Set the **Object Permissions Filters**: **Create**, **Edit**, **Read**, **Delete**, **View All**,
   and **Modify All**.
5. Click **Search**.

   ![access_assistance](/img/product_docs/platgovsalesforce/tools/access_assistance.webp)

6. Click **View Details** to see **System Permissions** and **User Assignments** for the object.

   ![Details for the object](/img/product_docs/platgovsalesforce/tools/access_assist_view_details_permission.webp)

   ![Details for the object](/img/product_docs/platgovsalesforce/tools/access_assist_view_details_users.webp)

7. Review the permissions and users for the object.
8. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointObjectPermissionsExport (#).xlsx** file is saved to your default download directory.

## Search By User

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By User** is
   selected.

   ![Search By User](/img/product_docs/platgovsalesforce/tools/access_assist_user.webp)

2. Start typing the user name. Pick from the completion list.
3. Click **Search**.

   ![Search by User](/img/product_docs/platgovsalesforce/tools/access_assist_user2.webp)

4. Click **View Details** to see **System Permissions** and **User Assignments** for the permission.
5. Review the permissions for the user.
6. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointUserPermissionsExport (#).xlsx** file is saved to your default download directory.

## Search By Profile / Permission Set

1. Select **Tools** > **Access Review Assistant** from the Netwrix Dashboard page. Click the
   expansion indicator u to expand the **Access Assistance** panel. Make sure **Search By Profile /
   Permission Set** is selected.

   ![Search by Profile / Permission Set](/img/product_docs/platgovsalesforce/tools/access_assist_profile.webp)

2. Start typing the Profile / Permission Set name. Pick from the completion list.
3. Click **Search**.

   ![Search by Profile / Permission Set](/img/product_docs/platgovsalesforce/tools/access_assist_profile2.webp)

4. Review the **System Permissions** and **User Assignments**.
5. Click **Export Data** to create an Excel file containing the comparison. The
   **StrongpointPermissionsExport (#).xlsx** file is saved to your default download directory.

# User Activity

The User Login Activity creates a comprehensive display of user activity for the past 60 days. It
can be run for all users or a selected user. The data can be used to ensure continuity of roles
prior to deactivating a user.

The User Login Activity feature is available with the Intelligent Change Enablement and Enterprise
Compliance [licenses](/docs/platgovsalesforce/getting-started/features-and-licensing.md).

Run the scanners before you perform comparisons to ensure you have the latest data.

Select **Tools** > **User Activity** from the Netwrix Dashboard page.

There is a collapsible menu pane available. Click the u arrow on the left to expand/collapse the
menu. Refer to [Package Usage](/docs/platgovsalesforce/tools-and-utilities/analysis-tools.md) for details on the Package Usage tool.

![User Activity tool](/img/product_docs/platgovsalesforce/tools/user_activity.webp)

## User Login Activity

Displays key details for All users or a selected user:

- Default Case Setting
- Sole Email Alert Recipient
- Process Builder Owner
- Customer Portal Admin
- Is Account Owner
- Is Opportunity Owner
- Last Login Time
- Last Login Status
- Safe to Deactivate

## Activity Last 60 Days

Displays **Yes** or **No** for All users or a selected user. The display can be filtered by **Has
Activity**: **All**, **Yes**, or **No**.

## User Activity Last 60 Days Detail

1. Select a **User**.
2. Click **Export to Excel**. The **StrongpointUserActivityHistoryDetail (#).xlsx** file is saved to
   your default download directory.

# Package Usage

The Package Usage tool provides administrators real-time insights into the usage and allocation of
additional product licenses across the organization. This tool enables them to identify potential
cost savings. Used in conjunction with the existing [User Activity](/docs/platgovsalesforce/tools-and-utilities/analysis-tools.md) tool, it
provides a comprehensive overview of who is accessing the environment and for what purpose.

The Package Usage tool is available with the Intelligent Change Enablement and Enterprise Compliance
[licenses](/docs/platgovsalesforce/getting-started/features-and-licensing.md).

Run the scanners first to ensure you have the latest data.

Once you have run the scanner, you filter and export the data:

- Filter by package
- Filter by usage
- Filter by user
- Export results to Excel

To open the Package Usage tool:

1. Select **Tools** > **User Activity** from the Netwrix Dashboard page.

   ![User Activity tool](/img/product_docs/platgovsalesforce/tools/user_activity.webp)

2. Click the arrow in the left margin to expand the menu pane.
3. Click **Package Usage Tool** in the menu.

   ![Package Usage tool](/img/product_docs/platgovsalesforce/tools/package_usage.webp)

4. Click **Run Scanner** to ensure you have the latest data.

You can filter by package, usage and user. Use **Export Details** to generate a **.xlsx** file.

# Finder

Platform Governance for Salesforce's **Finder** searches and finds standard and customized objects
created by the scanner.

To use the Finder:

1. Open **Netwrix Dashboard** > **Tools** > **Finder**
2. Enter the Filters information for your search.
3. Click **Find**.

The **Results** are displayed. Click on the linked **Name** to view details about each record.

Use the Export to XLS option to export your results to an XLS file where you can sort, reorder, and
analyze your information using the full power of Excel. You can then update your records using
Salesforce tools like Import Wizard and Data Loader to save time and effort.

![finder](/img/product_docs/platgovsalesforce/tools/finder.webp)

# Dependency Relationship Diagram

Platform Governance for Salesforce's Dependency Relationship Diagram (DRD) displays objects,
customizations and their relationships and dependencies including scripts, reports and workflows in
a graphical diagram.

To use the entity diagram:

1. Open **Netwrix Dashboard** > **Tools** > **Dependency Relationship Diagram**
2. Select the object to view.
3. The diagram displays the object and customizations under it. Use **Show/Hide Standard Fields** to
   toggle the display of Standard Fields for easier searching of non-standard fields.
4. Click on any item to expand the graphical representation of objects, dependencies and associated
   relationships. If there are more than 10 entries, a **Next** option is available at the end to
   expand the results. **Next** loads the next 10 entries, **Back** loads the previous list.
5. Click **Open Record** to open the customization record for the item.

![entity_diagram](/img/product_docs/platgovsalesforce/tools/entity_diagram.webp)

Here is an example showing the Next feature for **Account (StandardObject)** > **Test 1
(Parent:Account)**.

![DRD entry showing Next option if there are more than 10 entries](/img/product_docs/platgovsalesforce/tools/drd_next.webp)
