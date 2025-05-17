---
sidebar_position: 5998
title: "EWSPublicFolder:\_Options"
---

# EWSPublicFolder: Options

The Scan options page provides general scan options. It is a wizard page for all of the categories.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EWSPublicFolder/Options.png)

Select any desired scan options:

* Ignore certificate errors – Ignores certificate errors when connecting to Exchange Web Services
* Match job host against autodiscovered host – Matches the name of the job host against the host name returned from autodiscover

  ***RECOMMENDED:*** Use this option when scanning multiple Exchange environments with a single job and the Connection Profile has multiple credentials in it.
* Authentication – Select an Authentication type from the drop down:

  * Negotiate
  * Basic
  * NTLM
  * Kerberos
  * Digest