# Policy Templates: Local User/Domain Controller Account Tracker

__NOTE:__ This template applicable to Windows OS only.

Netwrix Change Tracker can also be used to track changes to __Local User Account Settings__. Typically local User Accounts should be limited and usage restricted in favor of centralized identity and access management authority such as a Domain Controller. As such the monitoring of local user accounts is a key security consideration.

__NOTE:__ When an Netwrix Change Tracker Agent is used on a Domain Controller, tracking the local user accounts will in effect track the __Domain__ user accounts – in cases where this is not required, uncheck the __Track account information on Domain Controllers__ box to limit tracking to just the Built-In accounts only.

There is minimal configuration required to activate the Change Tracker – just check the __Track local user account settings in this template__ box and define the poll period then save settings to the Template. Any changes to the initial baseline will be alerted and reported.

![PolicyTemplatesAccountsTracker](/static/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/policytemplatesaccountstracker.png)
