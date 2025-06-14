# MSP Usage Example

Consider a situation when a password is reset for a user, computer, or __inetOrgPerson__ account.

After deploying and configuring the add-on as described in this guide, the MSP (Managed Service Providers) staff member enabled Auditor integration feature:

![Integration API Settings](/img/versioned_docs/auditor_10.6/auditor/addon/connectwise/integrations.png)

Also, she enabled the ‘__Password Reset__’ alert from the Auditor predefined set of alerts and specified the add-on launch as response action.

![addon](/img/versioned_docs/auditor_10.6/auditor/addon/connectwise/addon.png)

Then a new ticket is automatically created shortly after any account password is reset.

All necessary details about the case are automatically entered into the ConnectWise ticket (_Initial Description_ ﬁeld), including the name of the workstation, the name of the account in question, and the time when the event occurred:

![serviceboard](/img/versioned_docs/auditor_10.6/auditor/addon/connectwise/serviceboard.png)
