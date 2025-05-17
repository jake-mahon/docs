---
sidebar_position: 1337
title: Restore Fields
---

# Restore Fields

There is not a direct restore tool for fields, however you can get your archived fields back using **Import Assistant** and the CSV file created for archiving.

## Import Assistant

1. Open **Setup** > **Import/Export** > **Import CSV Records**
2. Under **Import Type**, choose the category of data you plan on restoring. For example: Accounting.
3. Under **Record Type**, choose the record type of data you plan on restoring. For example: Chart of Accounts.
4. Click **Select**

   ![](../../../../static/images/enus/Content/Resources/Images/importassistant-2.png)
5. Select your CSV archive file. and click **Open**
6. Click **Next**

   ![](../../../../static/images/enus/Content/Resources/Images/importoptions.png)
7. Under **Data Handling**, choose **UPDATE**
8. Click **Next**
9. Under **Your Fields**, select **internalid**(Value).
10. Under **NetSuite Fields**, select **Internal ID**.
11. Under **Your Fields**, select the column from your CSV archive file that you want to restore and select the relevant NetSuite Field where you want them restored.

    ![](../../../../static/images/enus/Content/Resources/Images/fieldmapping.png)
12. Click **Next**
13. Click **Run**

    ![](../../../../static/images/enus/Content/Resources/Images/savemapping.png)

    A finished screen appears with a confirmation message and a link to the **Import Job Status**.
14. Click **Import Job Status**.

    ![](../../../../static/images/enus/Content/Resources/Images/jobstatus.png)
15. Click **Refresh** until the import process is completed.

    ![](../../../../static/images/enus/Content/Resources/Images/jobstatus-1.png)