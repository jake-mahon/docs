# Analyzing Script Performance

In order for Script Monitoring to function effectively:

- Scripts must be deployed with a log status that supports Audit tag logging (for example, DEBUG or AUDIT)
- Script must be unlocked.
- Log level AUDIT is preferred since it is more efficient. DEBUG is not required for released code. It can be left in place on locked but not hidden code to permit some monitoring to occur.

Scripts that are not in AUDIT mode can be found using the search __Strongpoint__ > __Script Management__ > __Active Script Deployments Not in Audit Log Status__. You can change the criteria to exclude scripts set to DEBUG.

## Add Audit Start Tags

Do not use this Mass Update if you share files between your User Event Scripts and Client Scripts.

The __Add Audit Tags Mass Update__ inserts audit __Start Tags__ into the scripts to enable the capture of script performance data. Script Monitoring calculates execution speed based on the difference between successive Start and End tags. Multiple tags can cause inaccuracy. The mass update backs up your scripts so you can access the older version through the Customization Record. Platform Governance for NetSuite has an Archive folder to store the original versions, and this folder must be set on the mass update when adding audit tags.

Audit tags cannot be automatically added for Client Scripts due to the NetSuite Client Script execution flow. They can be manually added, as described in this topic. These procedures only apply to unlocked scripts.

1. Open __Documents__ > __Files__ > __File Cabinet__
2. Expand __SuiteBundles__ > __Bundle 294336__
3. Look for __Archive__ under __FLODocs Enterprise__ or __FLODocs Enterprise (2)__
4. Click on folder containing __Archive__, and copy the __Internal ID__ of the Archive folder. If the __Internal ID__ column is not displayed:

   1. Open __NetSuite Home__ > __Set Preferences__
   2. Under __Defaults__, make sure __Show Internal IDs__ is checked on the __General__ tab.
   3. Click __Save__
5. Open __Lists__ > __Mass Update__ > __Mass Updates__
6. Click on __Custom Updates__ > __Customization__ > __Strongpoint Add Audit Tag__
7. Enter __Strongpoint Add Audit Tag__ for Name.
8. Paste the __Internal ID__ of the __Archive__ folder.

   ![Add Audit Tag Mass Update](/img/product_docs/strongpointfornetsuite/script_management/audittag.webp)
9. Click __Preview__ to review the actions. Click __Perform Update__ to add the Start tags.
10. End tags are used to measure script average run time. In many cases, there is no systematic way of identifying where the end of the script is. Our recommended approach is to use the script metrics, such as __# of daily executions__ to prioritize which scripts you want to measure the average run time. Then add the end tag manually to the end of the script.

## Adding Audit Tags Manually

Include the __NetSuite N/log Module__. Refer to the [NetSuite N/log help](https://tstdrv1643032.app.netsuite.com/app/help/helpcenter.nl?fid=section_4574548135.html) for more information.

__FLOStart__ and __FLOEnd__ Tags are NetSuite Audit tags inserted using standard syntax:

SuiteScript 2.0 syntax:  
```log.audit({title: 'FLOStart', details: '' });```

__SuiteScript 1.0 syntax:__
  
```FLOStart: nlapiLogExecution(“Audit”,”FLOStart”,new Date().getTime())```

- First line of server code
- Inside relevant function of client code
- Not required for __Date Last Used__ or __Employees / Departments Using__

__SuiteScript 2.0 syntax:__
  
```log.audit({title: 'FLOEnd', details: '' });```

__SuiteScript 1.0 syntax:__
  
```FLOEnd: nlapiLogExecution(“Audit”,”FLOEnd”,new Date().getTime())```

- Inside last line of relevant function
- Only required for execution speed logging

Refer to the [NetSuite log.audit help](https://tstdrv1643032.app.netsuite.com/app/help/helpcenter.nl?fid=section_4430384449.html) for more information on SuiteScript 2.0.

## Validate the Tags

The audit tag information is updated in the documentation once the Script Parser runs (daily). You can validate the audit tags are in place by:

- Running __Strongpoint__ > __Script Management__ > __Scripts with No Audit Tags__
- Open the customization record for script and look at the __Audit Tag__ field on the __Detailed Metadata__ tab.
