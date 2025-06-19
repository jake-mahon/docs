# Archive Fields

When cleaning up your account with Platform Governance for NetSuite clean up tools, you may find
fields that are no longer in use and you want to delete them. To do this you need to create a Change
Request and add the fields you want to delete.

## Create a Change Request to Archive Fields

To create a change request:

1. Open Strongpoint > **Change Management** > **Change Request**
2. Fill out all relevant fields and include all the customization you want to delete in the
   **Customizations** field, add the customizations you want to delete.
3. Click **Save**.
4. Click the **Impact Analysis** button.
5. Under the **Impact Analysis tab**, the customizations you selected are listed under one or more
   tabs:

- Can Be Safely Deleted or Modified
- Cannot Be Safely Deleted or Modified or
- Inactive Customizations (Already Deleted)

![archivefields1](/img/product_docs/platgovnetsuite/clean_up/archivefields1.webp)6.
Click on the **Archive Customizations** if you find your customizations under **Cannot Be Safely
Deleted or Modified** and under **Warning it says Not Archived**
![archivefields2](/img/product_docs/platgovnetsuite/clean_up/archivefields2.webp)7.
Once your customizations are processed and archived, your customizations are listed under **Can be
Safely Deleted or Modified**. Your [archive folder](/docs/platgovnetsuite/operations/maintenance/archiving-fields.md) has the CSV file you
can download. The file name has the field type and the script ID.

# Restore Fields

There is not a direct restore tool for fields, however you can get your archived fields back using
**Import Assistant** and the CSV file created for archiving.

## Import Assistant

1. Open **Setup** > **Import/Export** > **Import CSV Records**
2. Under **Import Type**, choose the category of data you plan on restoring. For example:
   Accounting.
3. Under **Record Type**, choose the record type of data you plan on restoring. For example: Chart
   of Accounts.
4. Click **Select**

   ![importassistant-2](/img/product_docs/platgovnetsuite/clean_up/importassistant-2.webp)

5. Select your CSV archive file. and click **Open**
6. Click **Next**

   ![importoptions](/img/product_docs/platgovnetsuite/clean_up/importoptions.webp)

7. Under **Data Handling**, choose **UPDATE**
8. Click **Next**
9. Under **Your Fields**, select **internalid**(Value).
10. Under **NetSuite Fields**, select **Internal ID**.
11. Under **Your Fields**, select the column from your CSV archive file that you want to restore and
    select the relevant NetSuite Field where you want them restored.

    ![fieldmapping](/img/product_docs/platgovnetsuite/clean_up/fieldmapping.webp)

12. Click **Next**
13. Click **Run**

    ![savemapping](/img/product_docs/platgovnetsuite/clean_up/savemapping.webp)

    A finished screen appears with a confirmation message and a link to the **Import Job Status**.

14. Click **Import Job Status**.

    ![jobstatus](/img/product_docs/platgovnetsuite/clean_up/jobstatus.webp)

15. Click **Refresh** until the import process is completed.

    ![jobstatus-1](/img/product_docs/platgovnetsuite/clean_up/jobstatus-1.webp)

# Set Up the Archive Folder

Advanced Change Management allows data within customization to be archived during the Clean Up
process. An archive folder must be created before the Clean Up process.

## Create the Archive Folder

1. Open **NetSuite Home** > **Set Preferences**
2. Under **Defaults**, make sure **Show Internal IDS** is checked on the **General** tab.
3. Click **Save**
4. Open **Documents** > **Files** > **File Cabinet** > **New**
5. Name the folder **Strongpoint Archived Data Files**.
6. Enter **Documents and Files** in **Sub-Folder Of**
7. Best practice is to add a meaningful description.
8. Click **Save**
9. Note the **Internal ID** for your new **Strongpoint Archived Data Files** folder. **48783** in
   this example.

   ![Finding the Internal ID of the Archive Folder](/img/product_docs/platgovnetsuite/clean_up/internal_id.webp)

## Assign the Internal ID to the Deployed Script

To assign the internal ID to a deployed script:

1. Open **Customization** > **Scripting** > **Scripts**
2. Change the **Type** Filter to **Scheduled** and **From Bundle** to **294336**
3. Click **View** by the **Strongpoint Auto Archive**

![scripts-1](/img/product_docs/platgovnetsuite/clean_up/scripts-1.webp)

4. Open the **Deployments** tab.
5. Click on **Strongpoint Auto Archive – OD**.

   ![scripts-2](/img/product_docs/platgovnetsuite/clean_up/scripts-2.webp)

6. Click **Edit**
7. Open the **Parameters** tab, add the internal ID of your **Archive Folder**
8. Click Save

   ![scripts-3](/img/product_docs/platgovnetsuite/clean_up/scripts-3.webp)

The archiving function on Change Requests is now set up and ready to use.
