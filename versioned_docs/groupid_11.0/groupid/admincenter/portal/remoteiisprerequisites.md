# Prerequisites for Deployments in Remote IIS

To deploy GroupID portals and services (Data service, Security service, and Mobile service) in remote IIS, you must set up the following prerequisites:

- Install the required software
- Create a site in remote IIS for deploying the GroupID portal and services, and assign permissions
- Generate an access key for the Microsoft IIS Administration API

## Prerequisite Software

Before you can deploy GroupID portals and services in remote IIS, make sure the following prerequisite software is installed on the remote IIS machine. Install them in the following order:

1. ASP.NET Core Runtime 6.0.30 (Hosting Bundle)  
   Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.30-windows-hosting-bundle-installer) to
   download.
2. .NET Desktop Runtime 6.0.30  
   Click [here](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.30-windows-x64-installer) to download.
3. ASP.NET Core Runtime 2.1.25 (Hosting Bundle)  
   Click [here](https://dotnet.microsoft.com/download/dotnet/2.1) to download.
4. Microsoft IIS Administration 2.3.0  
   Click [here](https://github.com/microsoft/IIS.Administration/releases/tag/v2.3.0) to download.

## Create a Site in Remote IIS

As a prerequisite to deploying a GroupID application in remote IIS, you need to create a site there and assign appropriate permissions to it. GroupID portals and services should be created within this site.

__To create a site in remote IIS:__

1. Launch Internet Information Services (IIS) Manager (see [Opening IIS Manager](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90))).
2. In the left pane, right-click __Sites__ and select __Add Website__.

   ![Add a website in IIS](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/addsite.jpg)
3. Enter the information as shown below and click __OK__:

   ![Add Website window](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/addwebsite.jpg)

   1. Enter a name for the site in the __Site name__ box.
   2. Create a new folder on the remote machine and bind this site to that folder. Provide the physical path of the newly created folder in the __Physical path__ box. When you create a GroupID application in the site, a sub-folder will be created within this folder and application files will be copied to it.
   3. Provide binding information in the __Binding__ section.

      - Type: HTTPS
      - Port: any available port
   4. Select an SSL certificate from the __SSL certificate__ dropdown list.

### Assign Permissions

The next step is to assign permissions on the physical folder that binds to your site in remote IIS.

1. Go to the physical path of your IIS site folder and provide the full control to a local group IIS\_IUSRS on this folder.   
   To assign these permissions:

   1. Right click the group you created and select __Properties__.
   2. Select the __Security__ tab.
   3. Click __Edit__.
   4. Click __Add__.
   5. Click __Locations__.
   6. Select your machine name from the list in the __Locations__ box. Click __OK__.
   7. In the __Enter the object names__ box type _IIS\_IUSRS_ and click the __Check Names__ button. The group name should appear as follows:

      ```
      <your machine name>\IIS_IUSRS
      ```
   8. Click __OK__.
   9. Allow Full Control to _IIS\_IUSRS_ group.
   10. Click __Apply__ and then click __OK__.
   11. Click __OK__ to close the __Permissions for `<folder name>`__ dialog box.
   12. Click __OK__ to close the __`<folder name>` Properties__ dialog box.
   13. The required permissions have been assigned to the folder.
2. After assigning the permissions, go to the following path

    ```
       C:\Program Files\IIS Administration\2.3.0\Microsoft.IIS.Administration\config\
    ```

3. Open the __appsettings.json__ file and add the highlighted script at the end of the file:

   ![Script for appsettings.json file](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/appsettings-full.png)
4. The script to be added is given below:

    ```
       },  
       "files": {  
           "locations": [  
             {  
               "alias": "<site_name>",  
               "path": "<site_folder_name>",  
               "claims": [  
                 "read",  
                 "write"  
               ]  
             }  
           ]  
         }  
    
    ```

   Remember, to provide values for alias "site name" and path "physical folder location of the site", created in the section
   [Create a Site in Remote IIS](#create-a-site-in-remote-iis).

## Generate an Access Key

Admin Center uses the [Microsoft IIS Administration API](https://docs.microsoft.com/en-us/iis-administration/) to communicate with remote IIS. Make sure this API is instphysical folder location of the site", created in the section [Create a Site in Remote IIS](#create-a-site-in-remote-iis)alled as a Windows service on the remote IIS
machine.

To connect to the API, an access key is required. Follow the steps below to generate it.

1. Go to _https://localhost:55539/_ to launch the Microsoft Administration API interface.  
   Note that this is the default URL. It may change for reasons such as when a different port is used.
2. Click __ACCESS KEYS__.

   ![Access Keys](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/accesskeys.png)
3. Click __Create Access Key__ to generate an access key and provide the following information:

   ![Access Key Purpose window](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/accesskeyspurpose.png)
4. On clicking __Create__, the access key is generated.

   ![Access Token window](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/accesstoken.png)

__See Also__

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [GroupID Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/overview.md)
