# Restore Fields

There is not a direct restore tool for fields, however you can get your archived fields back using __Import Assistant__ and the CSV file created for archiving.

## Import Assistant

1. Open __Setup__ > __Import/Export__ > __Import CSV Records__
2. Under __Import Type__, choose the category of data you plan on restoring. For example: Accounting.
3. Under __Record Type__, choose the record type of data you plan on restoring. For example: Chart of Accounts.
4. Click __Select__

   ![importassistant-2](../../../static/img/product_docs/strongpointfornetsuite/clean_up/importassistant-2.webp)
5. Select your CSV archive file. and click __Open__
6. Click __Next__

   ![importoptions](../../../static/img/product_docs/strongpointfornetsuite/clean_up/importoptions.webp)
7. Under __Data Handling__, choose __UPDATE__
8. Click __Next__
9. Under __Your Fields__, select __internalid__(Value).
10. Under __NetSuite Fields__, select __Internal ID__.
11. Under __Your Fields__, select the column from your CSV archive file that you want to restore and select the relevant NetSuite Field where you want them restored.

    ![fieldmapping](../../../static/img/product_docs/strongpointfornetsuite/clean_up/fieldmapping.webp)
12. Click __Next__
13. Click __Run__

    ![savemapping](../../../static/img/product_docs/strongpointfornetsuite/clean_up/savemapping.webp)

    A finished screen appears with a confirmation message and a link to the __Import Job Status__.
14. Click __Import Job Status__.

    ![jobstatus](../../../static/img/product_docs/strongpointfornetsuite/clean_up/jobstatus.webp)
15. Click __Refresh__ until the import process is completed.

    ![jobstatus-1](../../../static/img/product_docs/strongpointfornetsuite/clean_up/jobstatus-1.webp)
