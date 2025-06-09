# Installing ServiceNow in NetSuite

## Install NetSuite Bundle

1. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__
2. Search for bundle id __311232__
3. Click on bundle name __ServiceNow Integration__
4. When the __Bundle Details__ opens, click __Install__.

   ![servicenowinstall2](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall2.png)
5. When __Preview Bundle__ opens, review the bundle and click __Install__ to finish.
6. Open __Strongpoint__ > __Strongpoint Support__ > __Installation Settings__ > __View__
7. Open the __ServiceNow Integration__ tab.
8. If the __Service Now URL__ is not present:

   1. Click __Edit__.
   2. Add the url. The format is: _https://dev67367.service-now.com/_
   3. Click __Save__.

### Install ServiceNow

1. Open __Connections & Credentials__ > __Credentials__.
2. Click __New__.
3. Select __Basic Auth Credentials__.

   ![Create a Credentials Record](/img/product_docs/strongpointfornetsuite/integrations/servicenow_credentials_record.png)
4. Enter the user credentials:  
   __User Name__: __sp-integrations__  
   __Password__: Contact your Customer Success Manager to receive the password.  
   Click __Submit__ when complete.
5. Open __System Applications__ > __Studio__ or enter __Studio__ in the Menu Search box.

   ![servicenowinstall4](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall4.png)
6. If a pop-up window appears, click __Import From Source Control__.

   ![servicenowinstall5](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall5.png)
     
    Otherwise, open __File__ > __Import From Source Control__.  
   ![servicenowinstall6](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall6.png)
7. Enter the required information:
     
   __URL__: _[https://github.com/StrongpointGit/strongpoint-ns-ssn.git](https://github.com/StrongpointGit/strongpoint-ns-ssn.git)_  
   __Credential__: Select your credential from the drop down list  
   __User Name__: sp-integrations
     
   __Branch__: master

   ![servicenowinstall7](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall7.png)
8. Click __Import__. You see the __Strongpoint NetSuite Integration__.

   ![Select Strongpoint NetSuite Integration](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall7-2.png)
9. Click __Strongpoint NetSuite Integration__ to open the Application Explorer. You use this for the __Configure ServiceNow__ procedure.
10. In NetSuite, open __Strongpoint__ > __Strongpoint Support__ > __Installation Settings__
11. Click __Edit__.
12. Open the __ServiceNow Integration__ tab and enter your credentials.
13. __Save__ your credentials.

### Configure ServiceNow

You can configure ServiceNow for your users:

> [Display Action Buttons Only for Specific Conditions](#Display-Action-Buttons-Only-for-Specific-Conditions)
>
> [Display Push Deployment Record Only Based on State](#Display-Push-Deployment-Record-Only-Based-on-State)
>
> [Display Strongpoint NetSuite Tab for Selected Users](#Display-Strongpoint-NetSuite-Tab-for-Selected-Users)

#### Display Action Buttons Only for Specific Conditions

You can set conditions on NetSuite integration buttons to control when they are displayed on specific change records. If you use ServiceNow, you can set Configuration Items to manage change requests for different platforms, projects or products.

You need to know the IDs of the configuration items to set conditions. Ask your ServiceNow administrator for help.

1. In the ServiceNow Application Explorer for the NetSuite Integration, open __Server Development__ > __UI Action__ > __Select Account__

   ![servicenowinstall8](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall8.png)
     
   To open the Application Explorer, open __System Applications__ > __Studio__ and select __Strongpoint NetSuite Integration__
2. Set the __Condition__ field to restrict display based on specific configuration items. If your company uses a different solution to identify changes for the NetSuite platform, contact your ServiceNow administrator to help determine the conditions to be set. In this example, we set the condition to be:   
   __current.cmdb\_ci == 'configuration\_item\_sys\_id'__

   ![servicenowinstall9](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall9.png)
3. Click __Update__.
4. Repeat these steps to complete the setup on the other UI Actions: __ERD__, __Push Deployment Record__, __Select Customizations__ and __View Impact Analysis__.

#### Display Push Deployment Record Only Based on State

This is an example procedure to display the __Push Deployment Record__ button once a change request has passed the __Authorize__ state. Your organization may have a different approval process.

You can set any other stage (standard or custom) depending on your approval processes.  
 If you need help to determine the correct conditions per your customizations, please contact your Service Now Administrator.

1. In ServiceNow, open __System Applications__ > __Studio__
2. Select __Strongpoint NetSuite Integration__.
3. Open __Server Development__ > __UI Action__ > __Push Deployment Record__
4. Set __Condition__ to __current.state > -3__

   ![servicenowinstall10](/img/product_docs/strongpointfornetsuite/integrations/servicenowinstall10.png)
     
    If you set action button conditions in the [Display Action Buttons Only for Specific Conditions](#Display-Action-Buttons-Only-for-Specific-Conditions) procedure, add this condition to the existing ones. For example,  
   __current.cmdb\_ci == 'configuration\_item\_sys\_id' && current.state > -3__
5. Click __Update__.

#### Display Strongpoint NetSuite Tab for Selected Users

By default, all user can see the Strongpoint NetSuite tab in ServiceNow Change Requests. You can modify this to only allow configured users to see the tab.

![Strongpoint NetSuite tab](/img/product_docs/strongpointfornetsuite/integrations/servicenow_tab.png)

1. Log in to ServiceNow as an administrator to manage your instance.
2. Obtain the system identifiers for each user you want to have access to the Strongpoint NetSuite tab:

   1. Filter for __configuration__
   2. Open __Base Items__ > __Computers__

      ![Open the ServiceNow Configuration items](/img/product_docs/strongpointfornetsuite/integrations/servicenow_tab1.png)
   3. Select the system for the user to grant access to the tab.
   4. Select __Copy sys\_id__ from the drop down menu.

      ![Select Copy sys_id from the drop down menu](/img/product_docs/strongpointfornetsuite/integrations/servicenow_tab2.png)
   5. Paste the identifier in a file where you can access it to add to the script when you are finished locating the system identifiers. An example identifer is _b4fd7c8437201000deeabfc8bcbe5dc1_
3. Filter for __Studio__
4. Select __Strongpoint NetSuite Integration__.
5. Open __Client Development__ > __Client Scripts__ > __Strongpoint Initialize__

   ![Open the Strongpoint Initialize Script](/img/product_docs/strongpointfornetsuite/integrations/servicenow_tab3.png)
6. Add all of your copied System Identifiers to the __allowedCIs__. Separate multiple IDs with a comma (,). For example:  

    ```var allowedCIs = ['fe1cc02c735423002728660c4cf6a7dc','b4fd7c8437201000deeabfc8bcbe5dc1'];```

7. Click __Update__.
