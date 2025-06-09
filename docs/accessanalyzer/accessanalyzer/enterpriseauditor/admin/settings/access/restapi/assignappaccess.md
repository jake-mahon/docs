# Assign Application Access through the Web Service

An application can be assigned to access data remotely through the Web Service. Follow the steps to assign roles in the Console.

![Add Access option on Access page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/addaccess.png)

__Step 1 –__ Navigate to __Settings__ > __Access__ and click __Add Access__. The Access Type wizard opens.

![Access Type page of the Access Role wizard](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/restapi/accesstypeapplication.png)

__Step 2 –__ Select the __An application accessing data remotely through Web Service__ option. Click __Next__. The Application Access window opens.

![Application Access page of the Access Role Wizard](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/restapi/applicationaccess.png)

__Step 3 –__ The Application Access window displays a list of objects available in the database that are available for access. Select the database objects the application will access and click __Add__ to open the Select database objects window.

![Select database objects window](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/restapi/selectdatabaseobjects.png)

__Step 4 –__ Select the database objects to access and then click __OK__ to return to the Application Access page.

- Selecting a parent node in the tree automatically selects all children in addition to the parent
- Selecting a child automatically selects the parent
- Deselecting a child when the parent is selected automatically puts the parent into an indeterminate state
- Selecting any child puts the parent into an intermediate state

Click Next to proceed.

__NOTE:__ Only select items that the application needs to access. Type in the __Filter objects by name__ box to filter the list of objects by the characters entered.

![Application Details page of the Access Role Wizard](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/restapi/applicationdetails.png)

__Step 5 –__ On the Application Details page, define the name of the application and generate the app token.

- Application name – The name of the application accessing that data
- Access Expiration – The expiration for the client secret. Select an option for the desired access expiration:

  - Access expires within – Select a time frame from the drop-down list. The default is 72 hours.
  - Access expires on specified date – Select a date from the drop-down list
- Generate – Click this button to generate the Client ID and Client secret
- Client ID – Copy the Client ID into the application accessing data remotely through the Web Service
- Client secret – Copy the Client secret into the application accessing data remotely through the Web Service

__Step 6 –__ Click __Finish__ to confirm the changes.

The application is added to the table on the Access page.
