---
sidebar_position: 6779
title: Event Type Tab
---

# Event Type Tab

The Event Type tab enables you to define the objects and events that Threat Prevention monitors/blocks.

![Template – Event Type Tab](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Templates/EventTypeTab.png "Template – Event Type Tab")

Each event type represents what is monitored or blocked. Event filters are used to either narrow or broaden the scope of the monitoring/blocking as desired. Click **Add** (+) to open the Event Selection window. Your licensed modules determine what event types are available. Event types that are not available or not licensed are grayed-out but visible in the Event Selection window. See the [License Manager Window](../Navigation/LicenseManager "License Manager Window") topic for information.

## Event Selection Window

![Event Type tab - Event Selection window](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Policies/EventType/EventSelection.png "Event Type tab - Event Selection window")

Check the box for the desired event type and click **OK**. The corresponding event filters show at the bottom of the Event Type tab. Multiple event types can be assigned to a policy.

***RECOMMENDED:*** Create different policies for different event types for reporting purposes. Otherwise, one report will have a mix of different types of data. There are a few exceptions to this feature.

Once the event type to be monitored by the policy is selected, use the filters to scope the policy.

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

Save all changes made to a policy or a template before leaving the configuration interface.

See the following topics for additional details:

* [Active Directory Changes Event Type](../Policies/EventType/ActiveDirectoryChanges "Active Directory Changes Event Type")
* [Active Directory Lockdown Event Type](../Policies/EventType/ActiveDirectoryLockdown "Active Directory Lockdown Event Type")
* [Active Directory Read Monitoring Event Type](../Policies/EventType/ActiveDirectoryReadMonitoring "Active Directory Read Monitoring Event Type")
* [AD Replication Monitoring Event Type](../Policies/EventType/ADReplicationMonitoring "AD Replication Monitoring Event Type")
* [AD Replication Lockdown Event Type](../Policies/EventType/ADReplicationLockdown "AD Replication Lockdown Event Type")
* [Authentication Monitoring Event Type](../Policies/EventType/AuthenticationMonitoring "Authentication Monitoring Event Type")
* [Authentication Lockdown Event Type](../Policies/EventType/AuthenticationLockdown "Authentication Lockdown Event Type")
* [Effective Group Membership Event Type](../Policies/EventType/EffectiveGroupMembership "Effective Group Membership Event Type")
* [Exchange Changes Event Type](../Policies/EventType/ExchangeChanges "Exchange Changes Event Type")
* [Exchange Lockdown Event Type](../Policies/EventType/ExchangeLockdown "Exchange Lockdown Event Type")
* [File System Changes Event Type](../Policies/EventType/FileSystemChanges "File System Changes Event Type")
* [File System Lockdown Event Type](../Policies/EventType/FileSystemLockdown "File System Lockdown Event Type")
* [File System Enterprise Auditor Event Type](../Policies/EventType/FileSystemEnterpriseAuditor "File System Enterprise Auditor Event Type")
* [FSMO Role Monitoring Event Type](../Policies/EventType/FSMORoleMonitoring "FSMO Role Monitoring Event Type")
* [GPO Setting Changes Event Type](../Policies/EventType/GPOSettingChanges "GPO Setting Changes Event Type")
* [GPO Setting Lockdown Event Type](../Policies/EventType/GPOSettingLockdown "GPO Setting Lockdown Event Type")
* [LSASS Guardian – Monitor Event Type](../Policies/EventType/LSASSGuardianMonitor "LSASS Guardian – Monitor Event Type")
* [LSASS Guardian – Protect Event Type](../Policies/EventType/LSASSGuardianProtect "LSASS Guardian – Protect Event Type")
* [Password Enforcement Event Type](../Policies/EventType/PasswordEnforcement "Password Enforcement Event Type")
* [LDAP Monitoring Event Type](../Policies/EventType/LDAPMonitoring "LDAP Monitoring Event Type")
* [LDAP Lockdown Event Type](../Policies/EventType/LDAPLockdown "LDAP Lockdown Event Type")
* [LDAP Bind Monitoring Event Type](../Policies/EventType/LDAPBindMonitoring "LDAP Bind Monitoring Event Type")

## Event Filters Overview

Policies are scoped using the Event Filters tabs ascribed to the policy on the basis of the event type selected on the [Event Selection Window](#Event "Event Selection Window").

The filters appear on the Event Type tab when an event type is selected.

Several filters allow for both an Include and an Exclude list to be set together. The Exclude list takes precedence over the Include list. If an item is part of both lists, then when an event comes through with that item, it is excluded.

When using a Lockdown Event Type, it is necessary to decide between Block or Allow for the filter.

* Block – Blocks all items added to the list, or if the list is left blank, it blocks all items for that filter category
* Allow – Only allows items added to the list and blocks all others. If the list is left blank, it allows all items for that filter category.