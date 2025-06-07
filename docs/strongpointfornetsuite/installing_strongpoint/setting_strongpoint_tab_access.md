# Setting Tab Access

Platform Governance for NetSuite tab access is managed like any other tab in NetSuite.

By default, access is granted to the following roles:

- Administrator
- Full Access
- Strongpoint Developer Role

Access to the Strongpoint tab must be granted to other users or roles:

1. Open __Customization__ > __Centers and Tabs__ > __Center Tabs__
2. Click __Edit__ by Strongpoint   
   The __Label__ should be __Strongpoint__.
3. Click the __Audience__ tab.
4. Grant access to the appropriate users and roles. Refer to NetSuite’s Help for more details on __Role and Tab Access__.
5. Click __Save__ > __Save a Copy__

There are two options where to set permissions:

- If the user role is under the __Classic Center__ tab, you can grant access within the __Audience__ tab. However, the access is removed and must be reset after every bundle update. If you choose this option, skip to [Setting the Audience](#Setting-the-Audience)
- If you want to avoid granting access after every bundle update, continue with the __Creating a Copy of Strongpoint Classic Center__ steps before __Setting Permissions__.

## Creating a Copy of Classic Center

This procedure makes a copy of the Strongpoint Classic Center tab that is preserved through bundle updates. After you create the copy, you must add all of the appropriate category links prior to __Setting Permissions__.

1. Open __Customization__ > __Centers and Tabs__ > __Center Tabs__
2. Click __Edit__ by Strongpoint
3. Select a different __Center__
4. Click __Save a Copy__  
   Leave this window open so you can see all of the categories.  
   This example shows __Engineering__ as the new __Center__

   ![Saving to Engineering Center.](/static/img/product_docs/strongpointfornetsuite/installing_strongpoint/engineeringexample.png)
5. Create the Category links:

   1. Open __Customization__ > __Centers and Tabs__ > __Center Categories__ in a new window.  
      Click __Edit__ by the Label of your first category __(Strongpoint Support__ in the example) and your selected __Center Type__ (__Engineering__ in the example).

      ![Select Category for New Center.](/static/img/product_docs/strongpointfornetsuite/installing_strongpoint/copy_categories.png)
   2. Open __Customization__ > __Centers and Tabs__ > __Center Categories__ in a second new window.  
      Click __Edit__ by the Label of the same category and the __Classic Center__ version.
   3. Add each __Link__ and __Label__ in your new __Center__, using the __Classic Center__ version as a guide. A drop down completion list is shown as you type. Click __Add__ after each addition.

      ![Two category windows open to copy links to your new Center.](/static/img/product_docs/strongpointfornetsuite/installing_strongpoint/copy_categories2.png)
   4. When complete, click __Save__ in your new __Center__ and __Cancel__ in the __Classic Center__.
   5. Click __Edit__ by the next __Category__ in your new __Center__ and the corresponding Category in the __Classic Center__ and continue adding the links.
   6. When you are done with all Categories and associated links, continue with __Setting Permissions__.

## Setting the Audience

1. Open __Customization__ > __Centers and Tabs__ > __Center Tabs__
2. Click __Edit__ by Strongpoint and the correct __Center Type__ (__Engineering__ in this example).
3. Open the __Audience__ tab.
4. Assign the audience. This can be role(s) or specific employees.
5. Click __Save__

   ![Assigning permissions.](/static/img/product_docs/strongpointfornetsuite/installing_strongpoint/engineeringexample2.png)

__Next Step:__ [ Setting Role Permissions](/docs/product_docs/strongpointfornetsuite/installing_strongpoint/setting_permissions.md)
