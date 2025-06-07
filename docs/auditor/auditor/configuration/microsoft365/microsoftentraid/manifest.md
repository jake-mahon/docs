# Assign Application Permissions Using Manifest

Follow the steps to assign application permissions using manifest.

__Step 1 –__ Under App registrations, select the newly created app.

__Step 2 –__ Select __Manifest__ on the left.

__Step 3 –__ Locate the __requiredResourceAccess__ property in the manifest and edit it with the following in the square brackets ([]).

__Step 4 –__ Click __Save__.

Optionally, you can select __Download__ to edit the manifest locally, and then use Upload to reapply it to your application.

The following Application permissions will be added:

- Microsoft Graph

  - Directory.Read.All
  - AuditLog.Read.All
- Office 365 Management APIs

  - ActivityFeed.Read

To add the required permissions, do one of the following:

- For the clear installation of Auditor 10.5, add roles as described below.

- If you upgraded Auditor from the version 10.0, replace all existing content under the __requiredResourceAccess__  property.

```
{  
    "resourceAppId": "00000003-0000-0000-c000-000000000000",  
    "resourceAccess": [  
        {  
            "id": "b0afded3-3588-46d8-8b3d-9842eff778da",  
            "type": "Role"  
        },  
        {  
            "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",  
            "type": "Role"  
        }  
    ]  
},  
{  
    "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",  
    "resourceAccess": [  
        {  
            "id": "594c1fb6-4f81-4475-ae41-0c394909246c",  
            "type": "Role"  
        }  
    ]  
}  

```
