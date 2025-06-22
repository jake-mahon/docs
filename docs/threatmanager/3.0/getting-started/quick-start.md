# Getting Started with Threat Manager

Once Threat Manager is installed, complete the following configuration to enable users to begin
viewing threat analytics in an organization’s environment.

After installation, configuration is required for many of Threat Manager's additional capabilities.
This includes the option to configure sensitive data from Netwrix Access Analyzer (formerly
Enterprise Auditor). Features such as Active Directory data collection, email notifications, and
SIEM service integration can be enabled in their respective configuration pages.

## Send Data to Threat Manager

Threat Manager threat detection requires file system and/or Active Directory and/or Microsoft Entra
ID activity to be monitored by either the Activity Monitor or Threat Prevention. An agent must be
deployed to the server being monitored, and the products must be configured to stream data to Threat
Manager.

See the [Integration with Other Netwrix Products](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) topic for additional
information.

### File System Activity

File system activity is monitored by the Activity Monitor or the Threat Prevention file system
policy. Deploy an activity agent to every Windows file server to be monitored and/or to Windows
proxy servers for every NAS device to be monitored. The monitored host must be configured to send
events to Threat Manager. See the
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) topic for additional
information.

### Active Directory Activity

Active Directory activity can be monitored by either the Activity Monitor or Threat Prevention.
Deploy an Active Directory agent to domain controllers in order for Threat Manager to receive Active
Directory events:

- Activity Monitor – Monitored domain must be configured to stream data through the domain
  properties > Threat Manager tab
  - See the [Netwrix Activity Monitor Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) topic for
    additional information.
- Threat Prevention – Threat Prevention Admin Console must be configured to stream data through the
  Threat Manager Event Sink feature
  - See the [Netwrix Threat Prevention Integration](/docs/threatmanager/3.0/threatprevention/threatmanager-configuration.md) topic
    for additional information.

### Microsoft Entra ID Activity

Microsoft Entra ID activity can be monitored by Activity Monitor. Deploy an Activity Monitor agent
to a Windows server and configure it to monitor an Microsoft Entra ID tenant to send events to
Threat Manager. The monitored tenant must be configured to send events to Threat Manager. See the
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) topic for additional
information.

### Sensitive Data Discovery

Sensitive data is collected by Access Analyzer. It requires a license for the Access Analyzer File
System Solution with the Sensitive Data Discovery Add-on. Access Analyzer has a custom job which can
be added to the FileSystem > 0.Collection Job Group to stream data after the collection tasks
complete. See the
[Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md) topic
for additional information.

## Enable Features in the Threat Manager Console

The Threat Manager Console has features that require initial configuration to turn them on. These
pages are located under the [Configuration Menu](/docs/threatmanager/3.0/administration/index.md):

- The [Integrations Interface](/docs/threatmanager/3.0/administration/integrations/overview.md) provides the
  ability to add and configure external integrations for Threat Manager including:
  - [Active Directory Sync Page](/docs/threatmanager/3.0/administration/integrations/active-directory.md)
  - [Entra ID Sync Page](/docs/threatmanager/3.0/administration/integrations/entra-id.md)
  - [App Tokens Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md)
  - [Authentication Provider Page](/docs/threatmanager/3.0/administration/integrations/authentication-providers.md)
  - [Credential Profile Page](/docs/threatmanager/3.0/administration/integrations/credential-profiles.md)
  - [Email Page](/docs/threatmanager/3.0/administration/integrations/email-configuration.md)
  - [Folder Settings Page](/docs/threatmanager/3.0/administration/integrations/active-directory.md)
  - [SIEM Page](/docs/threatmanager/3.0/administration/integrations/siem-integration.md)
  - [Netwrix Integrations Page](/docs/threatmanager/3.0/administration/integrations/netwrix-products.md)
  - [Tag Management Page](/docs/threatmanager/3.0/administration/system-configuration/system-settings.md)
- The [Policies Page](/docs/threatmanager/3.0/administration/policies/policy-configuration.md) provides the ability to add
  and configure policies used for threat detection including Honeytoken threats
