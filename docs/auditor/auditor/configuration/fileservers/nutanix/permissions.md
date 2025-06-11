# Permissions for Nutanix Files Auditing

Before you start creating a monitoring plan to audit Nutanix Files, plan for the accounts that will be used for data collection. They should meet the requirements listed below.

## Account for Accessing Nutanix File Server

First, you need an account that Netwrix Auditor will use to access Nutanix File Server. This account requires at least _Read_ permission for the target SMB shares on the Nutanix File Server.

This is the account you will provide in the monitoring plan wizard at the [Create a New Monitoring Plan](/docs/auditor/auditor/admin/monitoringplans/create.md) step; it can be modified in the __General__ tab of the monitored item settings.

![nutanix_item_mp_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/nutanix_item_mp_thumb_0_0.webp)

This account must have a role with sufficient privileges on that server: __File Server Admin__ (recommended) or __Backup Admin__ role.

## Account for Accessing REST API

You will also need an account that will be used to connect to Nutanix File Server REST API.

This account should be provided in the __Nutanix File Server REST API__ tab of the monitored item (_Nutanix SMB shares_) settings.

![nutanix_item_restapi_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/nutanix_item_restapi_thumb_0_0.webp)

This account must be assigned the __REST API access users__ role for Nutanix File Server you want to audit.

See the section below for the instructions on user role assignment.

## Role Assignment Procedure

Before starting the role assignment, make sure your Nutanix File Server is included in the AD domain.

Follow the steps to assign the required roles to the corresponding accounts using Nutanix Prism.

__Step 1 –__ Open Nutanix Prism web portal.

__Step 2 –__ Select __File Server__ category. In the list of servers, select the server you want to audit.

__Step 3 –__ Click __Manage roles__.

__Step 4 –__ In the __Manage roles__ dialog locate the __Add admins__ section and click __+New user__.

__Step 5 –__ 
Enter the AD user account (to be used as data collection account) in the _domain\name_ format and select the __File Server Admin__ or __Backup Admin__ role to assign

__Step 6 –__ Click __Save__ next to these cells to save the settings.

__Step 7 –__ Next, in the __REST API access users__ section click __+New user__.

__Step 8 –__ Enter the local user account and password, then click __Save__ next to these cells to save the settings.

![nutanix_user_thumb_0_0](/img/product_docs/auditor/auditor/configuration/fileservers/nutanix/nutanix_user_thumb_0_0.jpg)

__Step 9 –__ When finished, click __Close__.

See the following topics for additional information.

- [Add Items for Monitoring](/docs/auditor/auditor/admin/monitoringplans/datasources.md#add-items-for-monitoring)
- [Create User Account to Access Nutanix REST API](/docs/auditor/auditor/configuration/fileservers/nutanix/useraccount.md).
