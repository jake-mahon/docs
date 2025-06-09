# Access Review Assistant

The Access Review Assistant creates a comprehensive display of permissions and profiles for a selected __Object__, __User__, or __Profile / PermissionSet__. The results can be exported to Excel. The Access Review Assistant feature is available with the Intelligent Change Enablement and Enterprise Compliance [licenses](/docs/strongpointforsalesforce/installing_strongpoint/features_by_license_type.md).

Run the scanners before you perform comparisons to ensure you have the latest data.

There are three Access Assistance search types:

- [Search By Object](#Search-By-Object)
- [Search By User](#Search-By-User)
- [Search By Profile / Permission Set](#Search-By-Profile-Permission-Set)

## Search By Object

1. Select __Tools__ > __Access Review Assistant__ from the Netwrix Dashboard page. Click the expansion indicator u to expand the __Access Assistance__ panel. Make sure __Search By Object__ is selected.

   ![Open the Access Review Assistant](/img/product_docs/strongpointforsalesforce/tools/access_review_assistant.png)
2. Start typing the name of the __Search Object__. You can pick your object from the displayed completion list.
3. Set the __Permission Type Filters__: __All Permissions__, __Permission Set__, __Permission Set Group__, or __Profile__.
4. Set the __Object Permissions Filters__: __Create__, __Edit__, __Read__, __Delete__, __View All__, and __Modify All__.
5. Click __Search__.

   ![access_assistance](/img/product_docs/strongpointforsalesforce/tools/access_assistance.png)
6. Click __View Details__ to see __System Permissions__ and __User Assignments__ for the object.

   ![Details for the object](/img/product_docs/strongpointforsalesforce/tools/access_assist_view_details_permission.png)

   ![Details for the object](/img/product_docs/strongpointforsalesforce/tools/access_assist_view_details_users.png)
7. Review the permissions and users for the object.
8. Click __Export Data__ to create an Excel file containing the comparison. The __StrongpointObjectPermissionsExport (#).xlsx__ file is saved to your default download directory.

## Search By User

1. Select __Tools__ > __Access Review Assistant__ from the Netwrix Dashboard page. Click the expansion indicator u to expand the __Access Assistance__ panel. Make sure __Search By User__ is selected.

   ![Search By User](/img/product_docs/strongpointforsalesforce/tools/access_assist_user.png)
2. Start typing the user name. Pick from the completion list.
3. Click __Search__.

   ![Search by User](/img/product_docs/strongpointforsalesforce/tools/access_assist_user2.png)
4. Click __View Details__ to see __System Permissions__ and __User Assignments__ for the permission.
5. Review the permissions for the user.
6. Click __Export Data__ to create an Excel file containing the comparison. The __StrongpointUserPermissionsExport (#).xlsx__ file is saved to your default download directory.

## Search By Profile / Permission Set

1. Select __Tools__ > __Access Review Assistant__ from the Netwrix Dashboard page. Click the expansion indicator u to expand the __Access Assistance__ panel. Make sure __Search By Profile / Permission Set__ is selected.

   ![Search by Profile / Permission Set](/img/product_docs/strongpointforsalesforce/tools/access_assist_profile.png)
2. Start typing the Profile / Permission Set name. Pick from the completion list.
3. Click __Search__.

   ![Search by Profile / Permission Set](/img/product_docs/strongpointforsalesforce/tools/access_assist_profile2.png)
4. Review the __System Permissions__ and __User Assignments__.
5. Click __Export Data__ to create an Excel file containing the comparison. The __StrongpointPermissionsExport (#).xlsx__ file is saved to your default download directory.
