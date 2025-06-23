---
title: Threat Manager What's New Features
sidebar_label: What's New
description: Latest features in Threat Manager 3.0 including Microsoft Entra ID threat detection, automated response actions, and enhanced RBAC capabilities.
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netwrix Threat Manager in the
[Threat Manager](https://community.netwrix.com/c/threat-manager/announcements/162) area of our new
community.

The following information highlights the new and enhanced features introduced in this Netwrix Threat
Manager version.

## Threat Manager 3.0

New: Microsoft Entra ID Threat Detection & Response

Netwrix Threat Manager 3.0 now safeguards your entire identity infrastructure by extending
protection to Microsoft Entra ID, in addition to on-premises Active Directory

New: Threat Detection for Entra ID

- Application Permission Changes: Modifications to application permissions, potentially granting
  excessive access to Entra ID resources, and Microsoft Entra ID
- Compromised User Activity: Actions performed by an account identified as “Confirmed Compromised”
  within Microsoft Entra ID
- Impossible Travel: User activity detected from multiple geographic locations, suggesting account
  compromise or unauthorized access
- New Application Credential: Creation of a new application credential, potentially indicating a
  compromised application
- Sensitive Role Changes: Modifications to sensitive roles in Microsoft Entra ID, such as Global
  Admins
- Updated Detection for Abnormal User Behavior: Now includes Entra ID activity

New: Automated Response Actions for Entra ID

- Entra ID Group Membership: Modify group memberships for the affected user or perpetrator
- Disable Entra ID User: Temporarily or permanently disable the user account to prevent further
  unauthorized access
- Flag Entra ID User as Confirmed Compromised: Mark the user account as compromised to trigger
  additional security measures and investigations
- Reset Entra ID Password: Resets the perpetrator or affected users password to prevent further
  access
- Revoke Entra ID Sessions: Terminate all active sessions for the perpetrator or affected user to
  prevent unauthorized access

Enhancement: More Granular Role-Based Access Control (RBAC) for Reporting & Investigations

More precise role-based access control for managing reporting and investigations, ensuring that only
authorized users have access to sensitive information

Enhancement: Updated Investigations Interface

Improved interface for a more intuitive user experience
