# Netwrix Threat Manager Honeytoken Threats Use Case

Follow these steps to configure LDAP monitoring.

## Obtain the LDAP Monitoring Configuration String

Follow the steps to obtain the LDAP monitoring configuration string.

__Step 1 –__ From the Threat Manager homepage, navigate to the Configuration menu and select Policies.

__Step 2 –__ On the Policies page, expand the Honeytokens list and select the related Honeytoken policy from the Policies list. Or, select the policy from the Policies table in the Overview box.

![honeytoken](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/honeytoken.png)

__Step 3 –__ On the Configuration tab of the policy, fill in the requested information and click __Copy LDAP Filter__. The Copy LDAP Filter button will automatically copy the exact string that is required for Activity Monitor or Threat Prevention to the clipboard to configure the LDAP events for this Honeytoken.

![ldapfiltercopiedtoclipboard](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/usecase/ldapfiltercopiedtoclipboard.png)

A notification will pop up and the filter will be saved to the clipboard.

## Configure LDAP Monitoring

Follow the steps to configure LDAP monitoring for Threat Manager.

__Step 4 –__ In the Threat PreventionAdministration Console , go to __Templates__ > __Netwrix Threat Manager__ > __Netwrix Threat Manager for AD LDAP__.

__Step 5 –__ Click the __Event Type__ tab.

![Netwrix Threat Manager for AD LDAP template – Event Type tab with LDAP Query filter](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/usecase/ldapmonitoringfortm.png)

__Step 6 –__ Under Event Filters select __LDAP Query__. If the Include LDAP Queries list is empty, select the other __LDAP Monitoring__ event type in the list above.

__Step 7 –__ Scroll to the bottom of the Include LDAP Queries list.

__Step 8 –__ Select the line below the last existing query filter and paste the string copied from Threat Manager.

_Remember,_ the Honeytoken tab of the [Netwrix Threat Manager Configuration Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/threatmanagerconfiguration.md) must be configured in order to successfully send LDAP monitoring data to Threat Manager.
