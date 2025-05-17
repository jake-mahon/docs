---
sidebar_position: 5193
title: 0.Collection > UX_UsersAndGroups Job
---

# 0.Collection > UX\_UsersAndGroups Job

The UX\_UsersAndGroups job collects user and group information from /etc/passwd, /etc/shadow, and their equivalents in order to provide details on user and group conditions to help pinpoint potential areas of administrative concern.

![0.Collection > UX_UsersAndGroups Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/UsersGroups/CollectionJobsTree.png "0.Collection > UX_UsersAndGroups Job in the Jobs Tree")

The UX\_UsersAndGroups job is located in the 0.Collection job group.

## Queries for the UX\_UsersAndGroups Job

The UX\_UsersandGroups job uses the Unix Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_UsersAndGroups Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/UsersGroups/UsersAndGroupsQueries.png "Queries for the UX_UsersAndGroups Job")

The queries for the UX\_UsersAndGroups job are:

* UX\_LocalUsers – Obtains local user information from /etc/passwd
* UX\_LocalGroups – Obtains local group information from /etc/group
* UX\_LocalGroupMembers – Obtains local group membership information from /etc/group
* UX\_UserPasswords\_AIX – Gets shadow file information on AIX hosts
* UX\_UserPasswords\_Linux – Gets shadow file information on RHEL, CentOS, Debian, SuSE, and Solaris hosts
* UX\_PasswordSettings\_AIX – Gets system password settings from /etc/security/user
* UX\_PasswordSettings\_Linux – Gets system password settings from /etc/login.defs
* UX\_PasswordSettings\_Solaris – Gets system password settings from /etc/default/passwd
* UX\_UserPasswords\_AIX\_LastUpdate – Gets passwd file information on AIX hosts

## Analysis Tasks for the UX\_UsersAndGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **0.Collection** > **UX\_UsersAndGroups** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_UsersAndGroups Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/UsersGroups/UsersAndGroupsAnalysis.png "Analysis Tasks for the UX_UsersAndGroups Job")

The default analysis tasks are:

* Creates UX\_Users from LDAP\_Users, NIS\_Users, and UX\_LocalUsers – Creates the UX\_Users table accessible under the job’s Results node
* Creates UX\_Groups from LDAP\_Groups, NIS\_Groups, and UX\_LocalGroups – Creates the UX\_Groups table accessible under the job’s Results node
* Creates UX\_GroupMembers – Creates the UX\_GroupMembers table accessible under the job’s Results node