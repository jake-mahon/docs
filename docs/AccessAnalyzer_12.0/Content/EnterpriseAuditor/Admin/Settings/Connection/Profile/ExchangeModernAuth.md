---
sidebar_position: 5903
title: Exchange Modern Authentication for User Credentials
---

# Exchange Modern Authentication for User Credentials

The information in this topic applies to **Select Account Type** > **Exchange Modern Authentication** account type in the User Credentials window.

![User Credentials - Exchange Modern Authentication ](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/ExchangeModernAuthentication.png "User Credentials - Exchange Modern Authentication ")

The values for the required credentials for the Exchange Modern Authentication account are:

* Password Storage – Application (Uses the configured Profile Security setting as selected at the **Settings** > **Application** node. See the [Application](../../Application/Overview "Application") topic for additional information.)
* Organization – The primary domain name of the Microsoft Entra tenant being leveraged to make the connection. See the [Identify the Tenant's Name](../../../../../Config/ExchangeOnline/Access#Identify "Identify the Application's Domain Name") topic for additional information.
* Email Address – The email address for the mailbox to be leveraged in Exchange Online environment scans. The mailbox must belong to the primary domain used in the Organization field.
* AppID – Application (client) ID of the Access Analyzer application registered with Microsoft Entra ID. See the [Identify the Client ID](../../../../../Config/ExchangeOnline/Access#Identify2 "Identify the Client ID") topic for additional information.
* Certificate Thumbprint – The thumbprint value of the certificate uploaded to the Microsoft Entra ID application. See the [Upload Self-Signed Certificate](../../../../../Config/ExchangeOnline/Access#Upload "Upload Self-Signed Certificate") topic for additional information.