# Set a Default Storage Profile

While multiple Storage Profiles can exist, only one profile can be set as the default. A green checkmark next to the profile name indicates the default Storage Profile. Follow the steps to change the default Storage Profile at the global level.

![Set as Default option on Storage page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/storage/default.webp)

__Step 1 –__ Select the profile to be the new default, and click __Set as default__. The Change storage profile window opens.

![Change storage profile window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/changestorageprofile.webp)

__Step 2 –__ There are three options for host management data migration. Select the desired option, choose whether or not to apply the secondary option, and click __OK__.

- Merge your host management data with data in the destination table (Recommended) – This option keeps existing hosts and host discovery tasks in the destination and updates the tasks based on the information found in the source database

  - Use destination value on conflict – If selected, any conflicting information between the destination table and the source database is resolved in favor of the destination table
- Overwrite data in the destination table – This option replaces existing hosts and host discovery tasks with ones found in the source database

  - Also overwrite shared host inventory data – If selected, host inventory data is also replaced with data found in the source database
- Don’t copy your host management data to destination table – This option does not copy, update, or overwrite information between databases

  - Clear data in destination table – If selected, all host management data in the destination table is deleted

![Change storage profile window when transfer is complete](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/storage/changestorageprofilefinish.webp)

__Step 3 –__ When the host management data migration has completed, click __Finish__.

![Storage page with new default storage profile](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/storage/defaultsave.webp)

__Step 4 –__ A blue arrow now points to the new default Storage Profile. However, the arrow is also an indication that the new default is not fully recognized by Access Analyzer. Click __Save__ and then __OK__ to confirm the changes.

__Step 5 –__ Finally, to ensure these changes take effect, exit the Access Analyzer application and relaunch it.

The blue arrow is replaced by the green checkmark, indicating the new default Storage Profile is recognized.
