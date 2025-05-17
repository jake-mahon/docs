---
sidebar_position: 5285
title: 3.Computers Job Group
---

# 3.Computers Job Group

The 3.Computers Job Group help to pinpoint potential areas of administrative concern related to computer accounts, including stale computers and computers that have been trusted for delegation.

![3.Computers Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Computers/JobsTree.png "3.Computers Job Group in the Jobs Tree")

The following jobs comprise the 3.Computers Job Group:

* [AD\_ComputerDelegation Job](AD_ComputerDelegation "AD_ComputerDelegation Job") – Provides details on computer accounts that have been trusted for delegation. Once this configuration is enabled for a computer, any time an account connects to the computer for any reason, their ticket-granting ticket (TGT) is stored in memory so it can be used later by the computer for impersonation, which exposes a significant security risk in cases where privileged accounts access the computer.  See the [What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/ "What Is Kerberos Delegation?") Netwrix blog article for more information about this configuration and the related security risks.
* [AD\_StaleComputers Job](AD_StaleComputers "AD_StaleComputers Job") – Provides details on stale computers that may be candidates for cleanup