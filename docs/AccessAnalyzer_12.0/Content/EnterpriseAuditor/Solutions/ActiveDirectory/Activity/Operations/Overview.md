---
sidebar_position: 5363
title: Operations Job Group
---

# Operations Job Group

The Operations Job Group reports on Active Directory activity events related to operational activity. This group can help report on probable machine owners based on authentications, domain controller traffic and activity, and authentication protocols being used in the environment.

![Operations Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/Operations/JobsTree.png "Operations Job Group in the Jobs Tree")

The following Jobs make up the Operations Job Group:

***RECOMMENDED:*** Schedule these jobs to run with the 0.Collection job group.

* [AD\_AuthenticationProtocol Job](AD_AuthenticationProtocol "AD_AuthenticationProtocol Job") – Shows what protocols are being used to authenticate across the environment and will help to identify what services and computers may be affected when disabling NTLM
* [AD\_DomainControllerTraffic Job](AD_DomainControllerTraffic "AD_DomainControllerTraffic Job") – Provides a summary of the amount of traffic for Changes, Authentication, Replication, and LDAP Queries for each domain controller which can be used to identify issues with load balancing. If the AD\_DCSummary job has been run, the roles for each DC will be provided.
* [AD\_HardcodedDCs Job](AD_HardcodedDCs "AD_HardcodedDCs Job") – Highlight machines that have communicated with only one DC
* [AD\_LoadBalancing Job](AD_LoadBalancing "AD_LoadBalancing Job") – Analyzes each domain controller's traffic to show what percent of all LDAP, Replication, Authentication and Changes are being handled by that particular machine. This helps to highlight domain controllers which are over utilized relative to others within the domain, or unused domain controllers which may be decommissioned.
* [AD\_MachineOwners Job](AD_MachineOwners "AD_MachineOwners Job") – Helps to identify the owner of a particular host