# Monitored Domains Tab

Understanding Active Directory Activity Monitoring

The Activity Monitor can be configured to monitor the following Active Directory changes:

- Success and Failure on Object Create
- Success and Failure on Object Delete
- Success and Failure on Object Rename
- Success and Failure on Object Move
- Success and Failure on Logon
- LDAP Activity Monitoring

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Enterprise Auditor
- Netwrix Threat Manager

It also provides the ability to feed activity data to SIEM products.

Agents

For monitoring an Active Directory domain, the AD Agent must be installed on all domain controllers
within the domain to be monitored.

Tab

Once the AD Agent(s) installation is complete on a domain controller, the domain appear on the
Monitored Domains tab. The tab is not visible within the console until at least one AD Agent has
been deployed.

This tab is comprised of a button bar and a table of domains being monitored. The events stream
output needs to be designated to view data after an activity search has been performed.

## Button Bar

The button bar allows users to take the following actions:

![Monitored Domains Tab in the Activiy Monitor](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/activtymonitorblank.webp)

- Add Output – Select an output from the Add Output dropdown. The outputs are: File, Syslog, and
  StealthDEFEND. See the
  [Output for Monitored Domains](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- Remove – Removes the configured domain from the table of domains being monitored and end
  monitoring. Confirmation of this option will be asked for.
- Edit – Opens the selected AD Monitoring Configuration window to modify monitoring settings. See
  the
  [AD Monitoring Configuration Window](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
  topic for additional information.

## Table

The table of Domains being monitored provides the following information:

![Monitored Domains Tab with Domain Outputs added](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/actiivtymonitordomainoutputsadded.webp)

- Domain – Name or IP Address of the domain being monitored

  **NOTE:** The same domain can be monitored for different outputs. Each output is listed under
  the domain with destination information.

- Master – Name or IP Address of the domain controller where the AD agent is deployed
- Last Event – Date timestamp of the last event

## Monitoring Status

The Error Propagation collapsible section located above the Status Bar of the Activity Monitor
provides visibility into a domain's monitoring state. Domain monitoring status is depicted in the
Monitored Domains table under the Status column. Users can expand the Error Propagation section to
view more information on various status conditions.

![Error Propagation](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/errorpropagation.webp)

Click the **Down Arrow** to expand the Error Propagation section. The information listed is
dependent on which domain is currently selected in the Monitored Domains table.

# Output for Monitored Domains

Once a domain is being monitored the event stream can be sent to multiple outputs.

![Monitored Domains tab with Domain Outputs added](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/actiivtymonitordomainoutputsadded.webp)

Configured outputs are grouped under the domain. You can have multiple outputs configured for a
domain. The domain event outputs are:

- File – Creates an activity log as a JSON file for every day of activity

  **NOTE:** This is required to search event data for Active Directory within the application.

- Syslog – Sends activity events to the configured SIEM server
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Enterprise Auditor

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![Log Files configuration](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/logfiles.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the
[Output Types](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md) topic
for additional information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![Syslog Properties](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/syslogudp.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the
[Output Types](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md) topic
for additional information.

## Add Netwrix Threat Manager Output

**NOTE:** An App Token created by Netwrix Threat Manager is used to authenticate connection between
the applications. See the App Tokens Page topic of the
[Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for
additional information.

Follow the steps to add a Netwrix Threat Manager output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Netwrix Threat Manager (StealthDEFEND)** from the drop-down menu. The Add New
Output window opens.

![StealthDEFEND Properties](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/stealthdefendproperties.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the
[Output Types](/docs/activitymonitor/7.1/administration/outputs-and-logging/log-files.md) topic
for additional information.

# Configure LDAP Monitoring for Netwrix Threat Manager

Follow the steps to configure LDAP monitoring within Netwrix Activity Monitor for Netwrix Threat
Manager.

**NOTE:** LDAP Monitoring is not enabled, it must be enabled in the Monitored Domains tab.

![Activity Monitor with SD Only](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/actiivtymonitordomainsdonly.webp)

**Step 1 –** In the Activity Monitor, click on the **Monitored Domains** tab.

**Step 2 –** Select a domain and click **Edit**.

![LDAP Monitoring Configuration for Threat Manager](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/sdldapmonitoring.webp)

**Step 3 –** Select the **LDAP Monitor** tab.

**Step 4 –** Select the **LDAP** tab.

**Step 5 –** In the “Query” section, double-click the blank line below the last filled in line.

**Step 6 –** Paste the string copied from Threat Manager and press **Enter**.

LDAP monitoring has been configured for Threat Manager.

# AD Monitoring Configuration Window

On the Monitored Domains tab, select the domain and click **Edit** to open the AD Monitoring
Configuration window.

![AD Monitoring Configuration - Global Filters Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/globalfilterstab.webp)

This initially configured when the AD Agent is deployed to a domain controller. However, the
monitoring configuration can be edited after that. Use the following tabs to modify monitoring of AD
events:

- [Global Filters Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- [Changes Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- [Authentication Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- [Replication Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- [LSASS Guardian Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)
- [LDAP Monitor Tab](/docs/activitymonitor/7.1/administration/monitored-resources/domains.md)

# Authentication Tab

The Authentication tab on a domain’s Configuration window allows users to configure communication
with servers.

![AD Monitoring Configuration - Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

After checking the Enable Authentication box, the following event filters can be modified on the
sub-tabs:

- Forged PAC Analytic
- Host (From)
- Host (To)
- IP Addresses (From)
- IP Addresses (To)
- Operations
- Servers
- Users

## Forged PAC Analytic

The Forged Privilege Account Certificate (PAC) analytic type identifies Kerberos tickets with a
modified PAC. By manipulating the PAC, a field in the Kerberos ticket that contains a user’s
authorization data (in Active Directory this is group membership), an attacker is able to grant
themselves additional elevated privileges.

![AD Monitoring Configuration - Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/forgedpac.webp)

Double-click text box to enter specific **RIDs**. Click OK. The AD agent then compares against the
PAC and user’s access token for a mismatch to trigger the incident.

**NOTE:** The Forged PAC analytic is monitoring for when the user is not a member of a group that is
listed in the PAC section of the user’s Kerberos ticket. This analytic can be scoped to monitor
specific groups. To reduce the number of false positives, the AD agent only checks for a mismatch of
sensitive groups as selected in the policy Settings tab.

## Host (From)

The Hosts (from) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from authentication event collection.

## Host (To)

The Hosts (to) option is where the policy can be scoped to only monitor specific hosts as target
hosts of an authentication event or to exclude specific hosts from being monitored as targets of
authentication events.

![Host (To) Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/hostto.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the target host from
authentication event collection.

## IP Addresses (From)

The IP Addresses (from) option is where the policy can be scoped to only monitor specific IP
Addresses as originators of an authentication event or to exclude specific IP Addresses from being
monitored for authentication events.

![IP Addresses (From) Tab in the Authenticatoin Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/ipaddressesfrom.webp)

Underneath each section, there is an additional Address detail:

- Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP Addresses to include or exclude.
Press the Enter or Tab key to add another text box.

## IP Addresses (To)

The IP Addresses (to) option is where the policy can be scoped to only monitor specific IP Addresses
as target hosts of an authentication event or to exclude specific IP Addresses from being monitored
as targets of authentication events.

![IP Addresses (To) Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/ipaddressesto.webp)

Underneath each section, there is an additional Address detail:

Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP Addresses to include or exclude.
Press the Enter or Tab key to add another text box.

## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationstab.webp)

The **Monitor These Attempts** section is where monitoring is set to filter for successful events,
failed events, or both:

- Success – Monitors successful events
- Failure – Monitors failed events

The **Monitor These Protocols** section is where authentication protocols to be monitored are
selected for the policy. Check the box to select the authentication protocol(s) to be monitored:

- All
- Kerberos
- NTLM

**CAUTION:** If Login Type is enabled, authentication events will be received from Domain
Controllers only.

The Login Type options apply only to Domain Controllers. These options provide the choice to monitor
Local Interactive and/or Remote Interactive logins to the Domain Controllers:

- All - Report all authentication activity approved by the Domain Controller which includes any
  local or RDP direct connections to the DC.

  - Local - Report only local login to the Domain Controller - ignore all else
  - Remote - Report only remote/RDP access to the Domain Controller - ignore all else

- Exclude failed authentications with previously valid (N-2) password – If enabled, allows to ignore
  failed authentications that failed due to use of a previously valid, but now expired, password
- Exclude failed authentications with expired password – If enabled, allows to ignore failed
  authentications that failed due to use of still valid, but now expired, password

## Servers

The Servers option targets servers to be included or excluded when filtering for authentication.

![Servers Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users filter is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the Authentication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

  - user – Indicates that selected object is user
  - group – Indicates that selected object is group
  - context – Indicates that selected object is container
  - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath **Type** to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under **Subtree** to
include or exclude child contexts.

# Changes Tab

The Changes tab for AD Monitoring Configuration window provides additional options to monitor
changes made to the domain.

![Operations Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationtab.webp)

After checking the Enable AD Changes box, the following event filters can be modified on the
sub-tabs:

- Attributes
- Classes
- Context
- Host (From)
- IP Addresses (From)
- Objects
- Operations
- Servers
- Users

## Attributes

The Attributes Tab is where monitoring can be scoped to include events with specific attributes
within Active Directory. Further scoping of attributes can enable monitoring to only capture events
based on the new value.

![Attributes Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/attributestab.webp)

Double-click the text box beneath Name to enter the desired attribute to include or exclude.
Double-click the text box beneath Value to enter the desired attribute value to reference. Choose
the Operation to relate the Name and Value with. Press the **Enter** or **Tab** key to add another
textbox.

**NOTE:** Name field must contain Active Directory attribute name.

Scoping the filter captures events when the new value matches with the supplied value. To scope the
filter based on the new value of the attribute, use the Operation drop-down menu.

- AnyValue – No scoping applied for this attribute
- EmptyValue – Blank attribute values
- Equal – Attribute values that are identical to the Value field
- NotEqual – Attribute values that do not match the Value field
- LessThan – Attribute values below the supplied numeric value or before alphabetically
- GreaterThan – Attribute values above the supplied numeric value or after alphabetically
- Contains – Attribute values includes the user supplied string (numbers are treated as strings)
- NotContain – Attribute values do not include the user supplied string (numbers are treated as
  strings)
- Startswith – Attribute values start with the user supplied string

## Classes

The Classes Tab is where the policy can be scoped to only monitor specific classes within Active
Directory or to exclude specific classes from being monitored.

![Classes Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/classestab.webp)

Double-click the text box beneath Name to enter the desired classes to include or exclude. Press the
**Enter** or **Tab** key to add another text box.

**NOTE:** Class must be specified in the form of `objectClass` attribute syntax but must contain
only last value of this multi-valued attribute. For example, for
`top; person; organizationalPerson; user` it must have 'user' value.

## Context

The Context Tab is where the policy can be scoped to only monitor specific contexts (e.g. Containers
and Organizational Units) within Active Directory or to exclude specific contexts from being
monitored.

![Context Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/contexttab.webp)

Underneath each section, there are additional Context details:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`

Double-click the text box beneath Distinguished Name to enter the desired context to include or
exclude. Press the **Enter** or **Tab** key to add another text box. Check the box under Subtree to
include or exclude child contexts.

## Host (From)

The Hosts (from) Tab is where the policy can be scoped to only monitor specific hosts as originators
of an authentication event or to exclude specific hosts from being monitored for authentication
events.

![Host (From) Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details.

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. ex01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. ex01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from change event collection.

## IP Addresses (From)

The IP Addresses (from) Tab is where the policy can be scoped to only monitor specific IP Addresses
as originators of an authentication event or to exclude specific IP Addresses from being monitored
for authentication events.

![IP Addresses (From) Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/ipaddressesfrom.webp)

Underneath each section, there is an additional Address detail.

- Value – Must be provided in IP address format

Double-click the text box beneath **Value** to enter the desired IP addresses to include or exclude.
Press **Enter** or **Tab** key to add another text box.

## Objects

The Objects Tab is where the policy can be scoped to only monitor specific objects within Active
Directory or to exclude specific objects from being monitored.

![Objects Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/objectstab.webp)

Underneath each section, there is an additional Object detail.

- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`

Double-click the text box beneath Distinguished Name to enter the desired objects to include or
exclude. Press the **Enter** or **Tab** key to add another text box.

## Operations

The Operations Tab provides additional configuration filters for AD event collection.

![Operations Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operationtab.webp)

Monitor These Attempts – Filter for successful events, failed events, or both can be selected.

- Success – Monitors successful events
- Failure – Monitors failed events

Operations – Filter for Active Directory events to be monitored.

- Object Added – Monitors for objects being added to Active Directory
- Object Deleted – Monitors for objects being deleted from Active Directory
- Object Modified – Monitors for objects being modified within Active Directory
- Object Moved or Renamed – Monitors for objects being moved or renamed within Active Directory

## Servers

The Servers Tab targets servers to be included or excluded when filtering for changes.

![Servers Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users Tab is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the Changes Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections.

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

  - user –  Indicates that selected object is user
  - group – Indicates that selected object is group
  - context – Indicates that selected object is container
  - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of `distinguishedName` attribute syntax,
  e.g. `CN=Users,DC=Domain,DC=com`. However, for objects with `sidType` type, it must be in the form
  of WellKnownSidType Enum, e.g. `AnonymousSid` or `LocalSid`.

Double-click the text box beneath **Distinguished Name** to enter the desired group types to include
or exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the **Enter** or **Tab** key to add another text box. Check the box under Subtree to
include or exclude child contexts.

# Global Filters Tab

The Global Filters options are for excluding specific Active Directory and Authentication events
from being monitored.

![Global Filters Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/globalfilterstab.webp)

The filter options are grouped by AD Global Pre-Filters, and Authentication Global Pre-Filters.
Check the boxes to activate the filters. To disable for diagnostic purposes, simply uncheck the
option(s) and click OK. All Authentication Global Pre-Filters options require configuration before
they can be enabled.

Enable all of the AD Global Pre-Filters options as well as the Exclude Logins from Machine Accounts
option in the Authentication Global Pre-Filters section.

When activated, the AD Agent(s) filters out the event data according to configuration defined in the
`filters.json` file located in the installation directory.

The configurable options in the Global Filters tab are:

- Exclude ‘Noise’ Events Option
- Exclude AD DNS Events Option
- Exclude Logins from Machine Accounts Option
- Exclude Authentication Events from Selected Hosts Option
- Exclude Authentication Events from Selected Accounts Option

The ‘Help’ icon (**?**) opens a window that explains the type of “noise” events being filtered.

## Exclude ‘Noise’ Events Option

This option is enabled by default to filter out login and internal low level attributes which can be
considered ‘noise’ events. This option can be scoped to include any combination to the following
‘noise’ events:

- Successful AD User Logins – Excludes events with the following attributes where ‘objectClass’ does
  not equal computer:

  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp

- AD User Logins with Bad Password – Excludes events with the following set of attributes where
  ‘objectClass’ does not equal computer:

  - badPwdCount
  - badPasswordTime

- AD Computer Logins – Excludes events with the following set of attributes where ‘objectClass’
  equals computer:

  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp
  - badPasswordTime
  - badPwdCount

- Low Level Attributes – Excludes the following attributes from event:

  - lmPwdHistory
  - dBCSPwd
  - ntPwdHistory

## Exclude AD DNS Events Option

This option is enabled by default to filter out DNS events. They must meet both of the following
conditions to be excluded:

- objectClass = ‘dnsNode’ or ‘dnsZone’
- Contains the ‘dnsRecord’ or ‘dNSTombstoned’ attribute

## Exclude Logins from Machine Accounts Option

This option is enabled by default to filter out machine logins. Click the configure link to open the
Edit Accounts window.

![Edit Accounts window](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/editaccountsexcludeloginsmachineaccounts.webp)

The Exclude Logins from Machine Accounts collection is only accessible for configuration through the
Global Filters tab.

**NOTE:** Only perpetrators with accounts ending in “$” are considered for this filter. Wild cards
(\*) can be used for partial matches to account names.

All machine accounts in the textbox are either included or excluded from event data monitoring by
the AD Agent. Machine accounts not in the list have the unselected property applied.

Repeat the process until all machine accounts to be included or excluded from Authentication event
data have been entered in the list. Then click **OK**.

Usage Tip

Windows Server 2012 introduced gMSA (Group Managed Service Accounts). The account names for gMSA
accounts include
“$” in their names so by default authentication traffic generated by these accounts is filtered out because they ‘look’ like machine accounts, which prior to Server 2012 were the only account names ending in “$”.
The ability to add a list of filter strings to the “Exclude Logins from Machine Accounts” global
filter provides a means to capture activity by gMSA type accounts as this activity is typically of
interest where as true ‘machine accounts’ is not. By supplying either an explicit list of gMSA
account names, or if a naming convention has been adopted, a set of wild card strings such as
“gMSA\*” or “svc\*”, allows capturing authentication activity from such accounts while ignoring the
noisy ‘machine accounts’.

## Exclude Authentication Events from Selected Hosts Option

This option is disabled by default as it requires configuration before it can be enabled. Click the
selected hosts link to open the Edit Hosts window.

![edithostsexcludeselectedhosts](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/edithostsexcludeselectedhosts.webp)

The Exclude Authentication Events from selected hosts collection is only accessible for
configuration through the Global Filters tab. All three methods of identification for a host (IP
Address, NETBIOS host name, or DNS host name) must be known in order to effectively exclude
authentication from the host. Identify the host to be excluded in the textbox of the IP Address
column and press the Enter or Tab to add another row on the grid. Activity Monitor attempts to
discover the NETBIOS host name and the DNS host name associated with the supplied IP Address.

Repeat the process until all hosts for which Authentication event data will not be collected have
been entered in the list. Then click **OK**.

## Exclude Authentication Events from Selected Accounts Option

This option is disabled by default as it requires configuration before it can be enabled. Click the
selected accounts link to open the Edit Accounts window.

![editaccountsexcludeauthenticationselectedaccounts](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/editaccountsexcludeauthenticationselectedaccounts.webp)

The Exclude Authentication Events from selected accounts collection is only accessible for
configuration through the Global Filtering tab. Account names [domain name\account] can also be
typed in the textbox. Wild cards (\*) can be used as part of either the domain name or account. An
asterisk (\*) appearing anywhere other than as the first character or the last character are treated
as a literal character instead of as a wild card.

For example, \*\Service1 would exclude all Service1 accounts whether it is a domain or local
account, and Example\Service\* would exclude all accounts that start with “Service” for the Example
domain.

Repeat the process until all accounts to be excluded from Authentication event data have been
entered in the list. Then click **OK**.

# LDAP Monitor Tab

The LDAP Monitor tab on a domain’s Configuration window allows users to scope monitoring by adding
filters for accounts by name or type.

![Operations Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

After checking the Enable Ldap Monitor box, the following event filters can be modified on the
sub-tabs:

- Host (From)
- LDAP
- Operations
- Servers
- Users

Each filter tab acts like an “AND” statement for the filter. Any filter tab left blank is treated
like an all for that filter set.

## Host (From)

The Hosts (from) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the text boxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from authentication event collection.

## LDAP

The LDAP option is where query and result objects can be monitored by group type.

![LDAP Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/ldap.webp)

The Query section is where monitoring can be scoped to those LDAP queries that contain at least one
of the user-supplied string as a substring in BaseDN or in Query field of the LDAP Search request.
For the Query value, provide the user-supplied string in the text box.

Double-click the text box beneath Value to enter the desired string. Press the Enter or Tab key to
add another text box.

Example Values:

- ‘DC=domain’
- ‘objectClass=’

The Result section is where monitoring can be scoped to those LDAP query results that contain at
least one of the user-supplied string as a substring. For the Result value, provide the
user-supplied string in the text box.

Double-click the text box beneath Value to enter the desired string. Press the Enter or Tab key to
add another text box.

Example Value:

- ‘CN=Domain Admins’

## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

The Monitor These Attempts section is where monitoring is set to filter for successful events,
failed events, or both:

- Success – Monitors successful events
- Failure – Monitors failed events

## Servers

The Servers option targets servers to be included or excluded when filtering for a LDAP changes.

![Servers Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/servers.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the LDAP Monitor Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/users.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

  - user – Indicates that selected object is user
  - group – Indicates that selected object is group
  - context – Indicates that selected object is container
  - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under Subtree to include
or exclude child contexts.

# LSASS Guardian Tab

The LSASS Guardian tab allows users to modify settings that were populated with the information
entered when the host was added to prevent, monitor, or block LSASS code injections.

![Operations Tab in the LSASS Guardian Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

After checking the Enable LSASS Guardian box, the following event filters can be modified on the
sub-tabs:

- Operations
- Processes
- Servers
- Users

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

**_RECOMMENDED:_** Add exclusion process filters for legitimate processes that make changes to
LSASS, e.g. third-party malware applications.

## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the LSASS Guardian Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

The Open Process Flags section is where monitoring can be scoped for requested handles that would
maliciously impact LSASS processes.

Check the box to select the process flag(s) to be monitored:

- PROCESS_VM_WRITE – Writes to memory in a process
- PROCESS_CREATE_THREAD – Creates a thread

## Processes

The Processes option is where legitimate processes, which make changes to LSASS, e.g. third-party
malware applications, can be included/excluded from being monitored by the policy.

![Processes Tab in the LSASS Guardian Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/processes.webp)

Double-click the text box beneath Name to enter the desired processes to include or exclude. Press
the Enter or Tab key to add another text box.

**NOTE:** While a processes inclusion is a filter option, it is not recommended for monitoring
LSASS. Adding a process inclusion filter will limit the scope to only monitor that process. Unknown
malicious processes would not be monitored in this case.

## Servers

The Servers option targets servers to be included or excluded when filtering for LSASS changes.

![Servers Tab in the LSASS Guardian Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/servers.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the textbox beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another textbox.

## Users

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the LSASS Guardian Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

  - user – Indicates that selected object is user
  - group – Indicates that selected object is group
  - context – Indicates that selected object is container
  - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under Subtree to include
or exclude child contexts.

# Replication Tab

The Replication tab on a domain’s Configuration window monitors domain controller syncing and
replication.

![Servers Tab in the Replication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

After checking the Enable Replication box, the following event filters can be modified on the
sub-tabs:

- Host (From)
- Servers
- Users

Each filter tab acts like an “AND” statement for the filter. Any filter tab left blank is treated
like an ALL for that filter set.

Windows cannot detect if a sync request is coming from a legitimate domain controller. This option
is designed to monitor requests from computers that are not ‘excluded’ by the policy. Therefore,
legitimate domain controllers should be identified in the event filters.

## Host (From) Filter

The Hosts (From) option is where the policy can be scoped to only monitor specific hosts as
originators of an authentication event or to exclude specific hosts from being monitored for
authentication events.

![Host (From) Tab in the Replication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/hostfrom.webp)

Underneath each section, there are additional Host details:

- IP – Field must contain IP address, e.g. 123.456.7.890
- DNS – Field must contain a fully qualified domain name of the host, e.g. dc01.nwxtech.com
- Netbios – Field must contain NetBIOS name of the host, e.g. dc01

Double-click the textboxes within the column, then enter all three methods of identification for a
host (IP Address, NETBIOS host name, or DNS host name) to include or exclude the originating host
from replication event collection.

The Threat Manager DC Sync threat is sourced by the Activity Monitor's Replication AD monitoring
configuration. It is necessary for it to be configured to exclude domain controllers on the Host
(From) filter.

## Servers Filter

The Servers option targets servers to be included or excluded when filtering for replication.

![Servers Tab in the Replication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/serverstab.webp)

In both cases, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS Domain
name and SERVER is NetBIOS server name.

Double-click the text box beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another text box.

## Users Filter

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored

![Users Tab in the Replication Tab](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

  - user – Indicates that selected object is user
  - group – Indicates that selected object is group
  - context – Indicates that selected object is container
  - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another textbox. Check the box under Subtree to include
or exclude child contexts.
