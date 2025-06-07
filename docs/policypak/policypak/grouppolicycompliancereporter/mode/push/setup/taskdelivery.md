# Set Up Task Delivery

__Step 1 –__ At this point, you're ready to create the scheduled task. The easiest method is to create a new GPO and deliver a Group Policy Preference scheduled task item, as shown in Figure 51.

![gpcr_server_with_push_mode_15](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_15.png)

Figure 51. Creating a new GPO to deliver a Group Policy Preference scheduled task item.

__Step 2 –__ Click "Next," then provide a new name for the new GPO. When you do, a new GPO is created in the Group Policy Objects node within the GPMC, as shown in Figure 52. In this example, the GPO is called "\_PPGPCR Auditor Scheduled Task."

![gpcr_server_with_push_mode_16](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_16.png)

Figure 52. The newly created GPO.

__Step 3 –__ Then, take note of the Group Policy Settings Report of the GPO. You can see that the scheduled task will run as SYSTEM when Group Policy events occur. It will run PPGPCR.Auditor.exe one minute after Group Policy processes and will send results to the server, as shown in Figure 53.

![gpcr_server_with_push_mode_17](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_17.png)

Figure 53. The Group Policy Settings Report.

__Step 4 –__ The quickest way to link the GPO would be by linking it to the whole domain, but you can link it to any level (or multiple levels) if you want. The only requirements for endpoints are that they are (a) licensed and (b) contained within the security group specified in the Audited group, as covered in the previous section, "Select Audited Computers."
