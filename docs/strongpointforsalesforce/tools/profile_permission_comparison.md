# Profile Permission Comparison

The Profile / Permission Set Comparison enables you to efficiently clean up and secure your Orgs.

- _Clean Up Efficiency_: Identify inactive, unused, or excessive permissions, ensuring your Org is streamlined and efficient.
- _Enhanced Security_: Uncover potential security risks by identifying permission sets that grant access to more than intended, providing an added layer of protection for your organization.

Comparison tool features include:

- _Native Salesforce Components_: Enjoy a seamless experience within your Salesforce environment.
- _Compare up to three Profiles / Permission Sets_: Gain a comprehensive view of your Org's permissions.
- _Export Results to Excel_: Share and analyze comparison results.

Run the scanners before you perform comparisons to ensure you have the latest data.

## System Permission Comparison

To perform a __System Permission__ comparison:

1. Select __Tools__ > __Permissions Comparison__ from the Netwrix Dashboard page. Click the expansion indicator u to expand the __Comparison__ panel. Make sure __System Permission__ is selected.

   ![Open the Profile / Permission Comparison](/static/img/product_docs/strongpointforsalesforce/tools/permission_comparison.png)
2. Select at least two __Profile / Permission Sets__. For each item:

   - Enter part of the __Profile or Permission Set__ name
   - Check the __View__ box for the item to compare.

   ![Select a Profile or Permission Set to compare](/static/img/product_docs/strongpointforsalesforce/tools/permission_comparison_select.png)
3. Select the __System Permissions Category__: __All__, __API__, __Create__, __Edit__, __Manage__, __Modify__, __User__, or __View__.

   ![System Permission Comparison](/static/img/product_docs/strongpointforsalesforce/tools/permission_comparison_display.png)
4. Review the comparison. If the permissions are identical, you can research whether one or more can be removed.
5. Click __Export Data__ to create an Excel file containing the comparison. The __StrongpointSystemPermissionsComparison (#).xlsx__ file is saved to your default download directory.

## Object Permission Comparison

To perform an __Object Permission__ comparison:

1. Select __Tools__ > __Permissions Comparison__ from the Netwrix Dashboard page. Click the expansion indicator u to expand the __Comparison__ panel. Make sure __Object Permission__ is selected.

   If you ran a __System Permission__ comparison before switching to __Object Permission__, your selected items are used by default. You can select different items to compare.
2. Select at least two __Profile / Permission Sets__. For each item:

   - Enter part of the __Profile or Permission Set__ name
   - Check the __View__ box for the item to compare.

   ![Select a Profile or Permission Set to compare](/static/img/product_docs/strongpointforsalesforce/tools/permission_comparison_select.png)
3. Set the optional __Filter__ for object permissions: __Create__, __Edit__, __Read__, __Delete__, __View All__, and __Modify All__. You can use the __Select All__ and __Clear All__ shortcuts to set the __Filter__.

   ![Object Permission Comparison](/static/img/product_docs/strongpointforsalesforce/tools/permission_comparison_display_object.png)
4. Review the comparison. If the permissions are identical, you can research whether one or more can be removed.
5. Click __Export Data__ to create an Excel file containing the comparison. The __StrongpointObjectComparison (#).xlsx__ file is saved to your default download directory.
