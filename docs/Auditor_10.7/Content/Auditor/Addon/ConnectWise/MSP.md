---
sidebar_position: 1652
title: MSP Usage Example
---

Filter: 

* All Files

Submit Search

# MSP Usage Example

Consider a situation when a password is reset for a user, computer, or **inetOrgPerson** account.

After deploying and configuring the add-on as described in this guide, the MSP (Managed Service Providers) staff member enabled Auditor integration feature:

[![Integration API Settings](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Settings/Integrations_thumb_0_0.png "Integration API Settings")](../../../Resources/Images/Auditor/Settings/Integrations.png)

Also, she enabled the ‘**Password Reset**’ alert from the Auditor predefined set of alerts and specified the add-on launch as response action.

![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Alerts/ResponseAction/Addon.png)

Then a new ticket is automatically created shortly after any account password is reset.

All necessary details about the case are automatically entered into the ConnectWise ticket (*Initial Description* ﬁeld), including the name of the workstation, the name of the account in question, and the time when the event occurred:

![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Addon/ConnectWise/ServiceBoard.png)