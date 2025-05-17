---
sidebar_position: 2430
title: Getting Started with Threat Manager
---

# Getting Started with Threat Manager

Once Threat Manager is installed, complete the following configuration to enable users to begin viewing threat analytics in an organization’s environment.

After installation, configuration is required for many of Threat Manager's additional capabilities. This includes the option to configure sensitive data from Netwrix Access Analyzer (formerly Enterprise Auditor). Features such as Active Directory data collection, email notifications, and SIEM service integration can be enabled in their respective configuration pages.

## Send Data to Threat Manager

Threat Manager threat detection requires file system and/or Active Directory and/or Microsoft Entra ID activity to be monitored by either the Activity Monitor or Threat Prevention. An agent must be deployed to the server being monitored, and the products must be configured to stream data to Threat Manager.

See the [Integration with Other Netwrix Products](Install/Integration/Overview "Integration with Other Netwrix Products") topic for additional information.

### File System Activity

File system activity is monitored by the Activity Monitor or the Threat Prevention file system policy. Deploy an activity agent to every Windows file server to be monitored and/or to Windows proxy servers for every NAS device to be monitored. The monitored host must be configured to send events to Threat Manager. See the [Netwrix Activity Monitor Integration](Install/Integration/ActivityMonitor "Netwrix Activity Monitor Integration") topic for additional information.

### Active Directory Activity

Active Directory activity can be monitored by either the Activity Monitor or Threat Prevention. Deploy an Active Directory agent to domain controllers in order for Threat Manager to receive Active Directory events:

* Activity Monitor – Monitored domain must be configured to stream data through the domain properties > Threat Manager tab
  * See the [Netwrix Activity Monitor Integration](Install/Integration/ActivityMonitor "Netwrix Activity Monitor Integration") topic for additional information.
* Threat Prevention – Threat Prevention Admin Console must be configured to stream data through the Threat Manager Event Sink feature
  * See the [Netwrix Threat Prevention Integration](Install/Integration/ThreatPrevention "Threat Prevention Integration") topic for additional information.

### Microsoft Entra ID Activity

Microsoft Entra ID activity can be monitored by Activity Monitor. Deploy an Activity Monitor agent to a Windows server and configure it to monitor an Microsoft Entra ID tenant to send events to Threat Manager. The monitored tenant must be configured to send events to Threat Manager. See the [Netwrix Activity Monitor Integration](Install/Integration/ActivityMonitor "Netwrix Activity Monitor Integration") topic for additional information.

### Sensitive Data Discovery

Sensitive data is collected by Access Analyzer. It requires a license for the Access Analyzer File System Solution with the Sensitive Data Discovery Add-on. Access Analyzer has a custom job which can be added to the FileSystem > 0.Collection Job Group to stream data after the collection tasks complete. See the [Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](Install/Integration/EnterpriseAuditor) Integration") topic for additional information.

## Enable Features in the Threat Manager Console

The Threat Manager Console has features that require initial configuration to turn them on. These pages are located under the [Configuration Menu](Administration/Configuration/Overview "Configuration Menu"):

* The [Integrations Interface](Administration/Configuration/Integrations/Overview "Integrations Interface") provides the ability to add and configure external integrations for Threat Manager including:
  * [Active Directory Sync Page](Administration/Configuration/Integrations/ActiveDirectorySync "Active Directory Sync Page")
  * [Entra ID Sync Page](Administration/Configuration/Integrations/EntraIDSync "Entra ID Sync Page")
  * [App Tokens Page](Administration/Configuration/Integrations/AppToken "App Tokens")
  * [Authentication Provider Page](Administration/Configuration/Integrations/AuthenticationProvider/Page "Authentication Provider")
  * [Credential Profile Page](Administration/Configuration/Integrations/CredentialProfile "Credential Profile Page")
  * [Email Page](Administration/Configuration/Integrations/Email "Email Page")
  * [Folder Settings Page](Administration/Configuration/Integrations/FolderSettings "Folder Settings Page")
  * [SIEM Page](Administration/Configuration/Integrations/SIEM "SIEM Page")
  * [Netwrix Integrations Page](Administration/Configuration/Integrations/NetwrixIntegrations "Netwrix Integrations Page")
  * [Tag Management Page](Administration/Configuration/Integrations/TagManagement "Tag Management")
* The [Policies Page](Administration/Configuration/Policies/Overview "Policies Page") provides the ability to add and configure policies used for threat detection including Honeytoken threats