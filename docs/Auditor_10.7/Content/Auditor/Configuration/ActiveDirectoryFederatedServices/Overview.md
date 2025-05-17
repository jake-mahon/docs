---
sidebar_position: 1830
title: AD FS
---

Filter: 

* All Files

Submit Search

# AD FS

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and access auditing requires a certain configuration of native audit settings in the audited environment and on the Auditor console computer. Configuring your IT infrastructure may also include enabling certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html "Antivirus Exclusions for Netwrix Auditor") knowledge base article for additional information.

Active Directory Federation Services (AD FS) server role can be assigned:

* to a domain controller
* to a Windows server joined in the domain

Multiple AD FS federation servers can be included in a **farm**, a group of connected servers with configuration replicated between them. The first AD FS federation server you set up in the farm becomes the **primary** server. Other federation servers you add to the farm will become **secondary** servers.

Make sure you have Windows Remote Management properly configured on your Auditor console computer. See the [Software Requirements](../../Requirements/Software "Software Requirements") topic for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

* Automatically through a monitoring plan – This is a recommended method. If you select to automatically configure audit in the target environment, your current audit settings will be checked on each data collection and adjusted if necessary. See the [Configure AD FS farm audit settings automatically](#Configur "Configure AD FS farm audit settings automatically") topic for additional information.
* Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or configure them manually:

  * AD FS audit settings must be configured on the primary AD FS server, i.e. on the first server you have set up in the farm:

    * To configure audit of AD FS 4.0 on Windows Server 2016 or AD FS 5.0 on Windows Server 2019, use the following PowerShell cmdlets:

      ```
Set-AdfsProperties -LogLevel Errors,FailureAudits,Verbose,SuccessAudits,Warnings  
      Set-AdfsProperties –AuditLevel Verbose
      ```
* To configure audit of AD FS 3.0 on Windows Server 2012 R2, use the following PowerShell cmdlet

      ```
Set-AdfsProperties -LogLevel Errors,FailureAudits,Verbose,SuccessAudits,Warnings
      ```
* Windows Audit policy must be configured on each server in the farm. For all Windows server versions Run the *auditpol* utility with the following parameters:

    * `auditpol.exe /set /subcategory:"Application Generated" /failure:enable /success:enable`
  * Adjust log size and retention settings for **Security** log and for **AD FS Admin** log (under **Applications and Service logs**). See [Adjusting Event Log Size and Retention Settings](../WindowsServer/EventLog "Adjusting Event Log Size and Retention Settings") for details.
  * If AD FS Admin logging is disabled, you should enable it.
  * See the [Configure AD FS farm manually](#Configur2 "Configure AD FS farm manually") topic for additional information.

## **Configure AD FS farm audit settings automatically**

Audit settings can be applied automatically if your monitoring plan has the primary AD FS federation server included as an item. If it has only secondary AD FS federation servers included, you will need to configure audit settings manually, as described later in this section.

**Step 1 –** Select the AD FS data source in this monitoring plan (top row under the header), click **Edit data source** to open its settings.

[![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/MonitoringPlans/MP_ADFS_listing_thumb_0_0.png)](../../../Resources/Images/Auditor/MonitoringPlans/MP_ADFS_listing.png)

**Step 2 –** In the **Configure audit settings** section, select **Adjust audit settings automatically** check box.

[![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/MonitoringPlans/MP_data_source_AD_FS_thumb_0_0.png)](../../../Resources/Images/Auditor/MonitoringPlans/MP_data_source_AD_FS.png)

**Step 3 –** Save the settings.

Auditor  will automatically configure audit settings on all servers in the AD FS farm and adjust the necessary log settings on these servers.

## Configure AD FS farm manually

Follow the steps to enable AD FS audit settings and set up Windows audit policy.

**Step 1 –** AD FS audit settings must be configured on the primary AD FS server, i.e. on the first server you have set up in the farm:

* To configure audit of AD FS 3.0 on Windows Server 2012 R2, use the following PowerShell cmdlet:

Set-AdfsProperties -LogLevel Errors,FailureAudits,Verbose,SuccessAudits,Warnings

* To configure audit of AD FS 4.0 on Windows Server 2016 or AD FS 5.0 on Windows Server 2019, use the following PowerShell cmdlets:

Set-AdfsProperties -LogLevel Errors,FailureAudits,Verbose,SuccessAudits,Warnings

Set-AdfsProperties –AuditLevel Verbose

**Step 2 –** Windows Audit policy must be configured on each server in the farm. For all Windows server versions

* Run the *auditpol* utility with the following parameters:

`auditpol.exe /set /subcategory:"Application Generated" /failure:enable /success:enable`

**Step 3 –**  Adjust log size and retention settings for **Security** log and for **AD FS Admin** log (under **Applications and Service logs**). See the [Adjusting Event Log Size and Retention Settings](../WindowsServer/EventLog "Adjusting Event Log Size and Retention Settings") topic for additional information.

If AD FS Admin logging is disabled, you should enable it.

*Remember,* do the following:

* Configure Data Collecting Account as described in the [Permissions for AD FS Auditing](Permissions "Permissions for AD FS Auditing") topic.
* Configure ports as described in the [AD FS Ports](Ports "AD FS Ports") topic.

## AD FS Servers Data Collection

For Active Directory Federation Services (AD FS) servers, Netwrix Auditor can collect audit data on the events and configuration objects listed below.

| Event type | Action | Details |
| --- | --- | --- |
| AD FS logon (intranet) | Failed Logon | Cause (for failed attempts) |
| AD FS logon (extranet) | Successful Logon | Authentication methods (for Successful attempts) |

Configuration information can be collected for the following objects:

* AD FS servers included in the farm
* Application Groups settings
* Authentication Method names
* Relying Party Trusts settings
* Scope Descriptions