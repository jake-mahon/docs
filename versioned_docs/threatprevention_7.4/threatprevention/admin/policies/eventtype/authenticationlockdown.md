# Authentication Lockdown Event Type

Based on policy rules, the Authentication Lockdown event type can block specific Kerberos, TGT, TGS and/or NTLM authentication requests. An event is generated for each blocked authentication attempt.

The event filters for the Authentication Lockdown event type are:

- Authenitcation Protocol
- AD Perpetrator
- Hosts (from)
- Hosts (to)
- Rule Preview

![Policy window - Authentication Lockdown Event Type](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/authenticationlockdown.png)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

__CAUTION:__ Lockdown/blocking policies with blank filters result in everything being locked down or blocked.

The Authentication Lockdown event type blocks authentication requests made through Kerberos and NTLM. These requests are used to access resources such as remote shares, establish RDP sessions, interactive logons, etc.

Due to the method used by Windows to establish an RDP session to a computer with the less secure mode (“Allow connections from computers running any version of Remote Desktop (less secure)” option in the System Properties of the target host) Threat Prevention cannot see the ‘from host’ information to block. Therefore, if the target host is configured with the less secure mode, the Hosts (from) filter does not block authentications for these RDP sessions. Since the perpetrator and host to information is available to Threat Prevention with this mode of RDP session, use the AD Perpetrator for lockdown filter and the Hosts (to) filter to block authentications.

__NOTE:__ When the Authentication Monitoring or Lockdown event type is assigned to a policy outside of the Analytic policies, then all collected authentication event data is stored in the database, not in memory as it is for the Analytic policies. However, it does consolidate the authentication events which occur every minute, resulting in up to a one minute delay between the event and the reporting of the event.

## Authentication Protocol Filter

Use the Authentication Protocol filter for lockdown to set the scope of the policy to only lockdown specific authentication event protocols or to exclude specific authentication event protocols from being locked down.

![Policy window - Authentication Protocol filter for lockdown](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/authenticationprotocollockdown.png)

- In the Block These Protocols section, check the __All__ box to include all protocols or select specific protocols::

  - Kerberos (TGT and/or TGS)
  - NTLM

  __CAUTION:__ Saving all TGT and/or TGS authentication data results in the bloating of the Threat Prevention database. Configure policy filters and use Database Maintenance while monitoring these protocols to retain data for the necessary timeframe. See the [Database Maintenance Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/databasemaintenance/overview.md) topic for additional information.

  ___RECOMMENDED:___ Save only a few days' worth of TGT and TGS data at a time.
- The Login Type options apply only to domain controllers. Use them to scope for __All__ login types or only __Local__ or __Remote__ logins to the selected domain controllers.

## AD Perpetrator Filter

__NOTE:__  When the Block filter is used with this event type, it blocks the specified security principals from logging in or gaining access to resources through Active Directory authentication. When the Allow filter is used, it allows only the specified security principals to authenticate.

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific security principals committing changes or to exclude specific security principals committing changes from being locked down.

![AD Perpetrator Protect filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/adperpetratorprotect.png)

Select the __Block__ or __Allow__ option button and then edit the list.

__NOTE:__ For the [Password Enforcement Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/passwordenforcement.md), selecting __Allow__ means that this policy will not validate the new passwords for the accounts listed here. Selecting __Block__ means that this policy will validate the new passwords for the accounts listed here.

Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the [Select Active Directory Perpetrators Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/window/selectactivedirectory/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the [List of Collections Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/collectionmanager/listcollections.md) to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

__NOTE:__ To enable a Dynamic Policy, use the Collection button to select the desired Dynamic Collection. See the [Dynamic Collections](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/collectionmanager/dynamic.md) topic for additional information.

## Hosts (from) Filter

Use the Hosts (from) filter for lockdown to set the scope of the policy to only lockdown specific hosts as originators of an event.

![Policy window - Hosts (from) filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/hostsfromlockdown.png)

Select the __Block__ or __Allow__ option button and then edit the list.

- For the [Password Enforcement Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/passwordenforcement.md), selecting __Allow__ means that this policy will not validate the new passwords for the accounts listed here. Selecting __Block__ means that this policy will validate the new passwords for the accounts listed here.
- For the Authentication Lockdown Event Type, this filter blocks or only allows authentication from the identified host(s).

Use the buttons in the Include Hosts area to edit the list.

- The Hosts Add (+) button opens the [Select Computer Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/window/selectcomputers.md).
- The Remove (x) button deletes the selected item(s) from that box.

## Hosts (to) Filter

Use the Hosts (to) filter for lockdown to set the scope of the policy to only lockdown specific hosts as target hosts of an event.

![Policy window - Hosts (to) filter for lockdown](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/hoststolockdown.png)

Use the buttons in the Include Hosts area to edit the list.

- The Hosts Add (+) button opens the [Select Computer Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/window/selectcomputers.md).
- The Remove (x) button deletes the selected item(s) from that box.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used for troubleshooting.

![Event Type - Rule Preview filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/rulepreview.png)

The text displayed represents the rules created based on the policy’s selected filters. Each row is a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple rows so that all of it is visible.
