# Select Your Source and Destination

You must create required identity providers and data sources before creating a job. They are created in Admin Center under Identity Stores and Data Sources tab respectively. After creating the providers, you need to specify the providers in __Select Your Source and Destination__ page.

Follow these steps to configure the settings for the providers:

1. On the __Select Your Source and Destination__ page, do the following:

   - __Your Source__: Specify the data source or identity store from which to move data.
   - __Your Destination__: Specify the data source or Identity store to move data to.

   Provide the following information for the selected providers:

   - Microsoft Active Directory

     Specify a container. To include sub containers, select the checkbox  __Include Sub Containers__.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination the job will create or update data in the container.
   - Microsoft Entra ID

     Specify a container. To include sub containers, select the checkbox __Include Sub Containers__.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination, the job will create or update data in the container.
   - Generic LDAP

     You do not need to provide any additional information for this provider.
   - Google Workspace

     Specify a container. To include sub containers, select the checkbox __Include Sub Containers__.

     - In case of a source, the job will fetch data from the container.
     - In case of a destination, the job will create or update data in the container.
   - Microsoft Access

     In the __Table Name__ drop-down list, select the table you want to use.

     The list displays the tables in the selected Microsoft Access database.
   - Microsoft Excel

     In the __Select Sheet Name__ drop-down list, select the sheet you want to use.

     The list displays the sheets in the selected Microsoft Excel file.

     1. In case of Excel as destination (with Replace file-discard existing content option selected on the Destination Provider page of the Job wizard), if any sheet name of the Excel file is of two or less character the Synchronize job corrupts all the sheets in that Excel file.

     2. In case of Excel as destination (with Delete option selected on the Create Object page of the Job wizard), If the Excel file schema is of more than 127 columns the job fails.
   - Oracle

     In the __Table or View__ drop-down list, select the database table you want to use.

     The list displays the tables in the Oracle database.

     In case the type column of Oracle database is not set as Datetime then time stamp functionality of Synchronize do not work. The given type needs to be converted into Datetime explicitly while configuring the Synchronize job.
   - ODBC

     In __Table Name__ box, enter the name of the table you want to use.

     Souldn't user select instead of entering the name?
   - Microsoft SQL Server

     In the __Table or View__ drop-down list, select the database table you want to use.

     The list displays the tables in the Microsoft SQL Server database.
   - Text Driver/CSV

     You do not need to provide any additional information for this provider.
2. Click __Next Step__.

__See Also__

- [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md)
- [Create a Job Collection
  ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md)
- [Transform](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md)
