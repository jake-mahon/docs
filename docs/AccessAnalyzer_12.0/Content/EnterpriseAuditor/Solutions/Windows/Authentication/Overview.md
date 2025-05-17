---
sidebar_position: 5070
title: Authentication Job Group
---

# Authentication Job Group

The Authentication job group provides information on authentication settings within audited systems to help identify potential security vulnerabilities and reduce risk within the environment.

![Authentication Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/Authentication/JobsTree.png "Authentication Job Group in the Jobs Tree")

The jobs in the Authentication job group are:

* [SG\_LSASettings Job](SG_LSASettings "SG_LSASettings Job") – This job lists LSA settings on all targeted hosts. In particular, the RunAsPPL, RestrictAnonymous, and ValidateKdcPacSignature keys are examined. If these keys are not set to 1, a host is vulnerable to mimikatz and other exploitation tools. See the Microsoft [Configuring Additional LSA Protection](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn408187(v=ws.11) "Configuring Additional LSA Protection") article for additional ininformation.
* [SG\_SecuritySupportProviders Job](SG_SecuritySupportProviders "SG_SecuritySupportProviders Job") – This job identifies security support providers on all targeted hosts, highlighting potentially malicious SSPs
* [SG\_WDigestSettings Job](SG_WDigestSettings "SG_WDigestSettings Job") – This job lists WDigest settings on all targeted hosts. In particular, the UseLogonCredentials key is examined. If the KB is not installed, and this key is not set properly for a given host, cleartext passwords will be stored in memory. See the [Microsoft Security Advisory](https://support.microsoft.com/en-us/help/2871997/microsoft-security-advisory-update-to-improve-credentials-protection-a "Microsoft Security Advisory") article for more information.