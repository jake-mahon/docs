---
sidebar_position: 5906
title: Azure Active Directory for User Credentials
---

# Azure Active Directory for User Credentials

The information in this topic applies to **Select Account Type** > **Azure Active Directory** in the User Credentials window. This account type is for Microsoft Entra ID, formerly Azure Active Directory.

![User Credentials Window - Azure Active Directory](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/EntraID.png "User Credentials Window - Azure Active Directory")

The required credentials for this account type are:

* Client ID – Application (client) ID of the Access Analyzer application registered with Microsoft Entra ID. See the [Identify the Client ID](../../../../../Config/EntraID/Access#Identify "Identify the Client ID") topic for additional information.
* Password Storage – Application (Uses the configured Profile Security setting as selected at the **Settings** > **Application** node. See the [Application](../../Application/Overview "Application") topic for additional information.)
* Key – The required Key depends on the target environment the Connection Profile is being used for:

  * Entra ID – Client secret value for the Access Analyzer application registered with Microsoft Entra ID. See the [Generate the Client Secret Key](../../../../../Config/EntraID/Access#Generate "Generate the Client Secret Key") topic for additional information.
  * SharePoint Online – The comma delimited string containing the path to the certificate PFX file, certificate password, and the Microsoft Entra ID environment identifier ( `CertPath,CertPassword,AzureEnvironment`). See the [SharePoint Online Credential for a Connection Profile using Modern Authentication](../../../DataCollector/SPAA/ConfigureJob#SharePoi "SharePoint Online Credential for a Connection Profile using Modern Authentication")topic for additional information.