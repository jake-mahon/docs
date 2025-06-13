# Backup and Recovery

For data recovery purposes, the Enterprise Auditor does not need a complete image back up of the Enterprise Auditor Console server. Rather a standard file level back up of a few key components is all that is necessary. This document contains a step-by-step guide for back up and recovery. The choice of back up utility is left to the Enterprise Auditor user.

__NOTE:__ This does not cover back up of the Enterprise Auditor database.

## Steps to Back Up the Console Server

Follow these steps to back up the key components necessary for data recovery of the Enterprise Auditor Console server.

__Step 1 –__ Obtain or save the installation media for Enterprise Auditor.

__Step 2 –__ Back up the following files and folders from the Enterprise Auditor folder (Typically found at ```C:\Program Files(x86)\STEALTHbits\StealthAUDIT``` and can be more directly found with the built-in environment variable ```%SAINSTALLDIR%```):

- ...\STEALTHbits\StealthAUDIT\Jobs: Contains the jobs from the Enterprise Auditor jobs tree
- … \STEALTHbits\StealthAUDIT\CLU: Contains any CLU parameters
- … \STEALTHbits\StealthAUDIT\ODBCProfiles\Custom: Contains any custom ODBC connect strings
- …\STEALTHbits\StealthAUDIT\SADatabase\Views: Contains the host list definitions
- ...\ STEALTHbits\StealthAUDIT\SecurityMap: Contains all of the Connection Profiles
- ... \STEALTHbits\StealthAUDIT\GlobalOptions.XML: Contains the Global Options
- ...\ STEALTHbits\StealthAUDIT\SPProfiles.XML: Contains the Storage Profiles (SQL connection)
- ...\ STEALTHbits\StealthAUDIT\rba.conf: Contains the Role Based Access Configuration
- ...\ STEALTHbits\StealthAUDIT\StealthAUDIT.LIC: The license key

__Step 3 –__ Back up all Scheduled Tasks. The method of back up is determined by the Enterprise Auditor user. This can be as simple as copying the contents of the tasks folder from the following two locations:

![C:\Windows\Tasks](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/maintenance/maintenance_3.png)

- C:\Windows\Tasks

![C:\Windows\System32\Tasks](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/maintenance/maintenance_4.png)

- C:\Windows\System32\Tasks

All key components necessary for data recovery have now been backed up.

## Steps to Restore the Console Server

Follow these steps for data recovery of the Enterprise Auditor Console server.

__Step 1 –__ Confirm the prerequisites have been met on the Enterprise Auditor Console Server. See the [Requirements](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/overview.md) topic for specific prerequisites.

__Step 2 –__ Install the Enterprise Auditor application. Do not start the Enterprise Auditor application at this time.

__Step 3 –__ Restore all of the backed up files and folders from Step 2 of Steps to Back up the Enterprise Auditor Console Server to their corresponding location.

__Step 4 –__ Restore all of the backed up scheduled tasks from Step 3 of Steps to Back up the Enterprise Auditor Console Server to the corresponding tasks folder of the operating system.

__Step 5 –__ For Host Management and Host List Replication in a new host scenario, run the following code within the SQL Studio on the Enterprise Auditor database.

- Replace ```OldServer``` and ```NewServer``` in the script below with the names of the old and new Enterprise Auditor servers

```
Declare @OHost varchar (128)  
Declare @NHost varchar (128)  
Set @OHost = 'OldServer'  
Set @NHost = 'NewServer'  
Update [HostMaster_SANodeFilter]  
SET SA_Node = @NHost  
Where SA_Node = @OHost;  
Update [HostListsTbl]  
SET SA_Node = @NHost  
Where SA_Node = @OHost  
and ListID not in (Select ListID from [HostListsTbl] where SA_Node = @NHost);  
Update [QueryTbl]  
SET SA_Node = @NHost  
Where SA_Node = @OHost;
```

__Step 6 –__ Start Enterprise Auditor and confirm all settings and jobs have been restored.

__Step 7 –__ Enable Role Based Access to write the necessary registry keys:

![Role Based Access](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/maintenance/maintenance_5.png)

- Navigate to the __Settings__ > __Access__ node in the Enterprise Auditor Console and select __Access__
- Use the __Add Access__, __Edit Member Role__, and __Delete Member Role__ buttons to add, remove, and edit roles
- See the [Role Based Access](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/access/rolebased/overview.md) topic for more information

The Enterprise Auditor Console Server is now restored.
