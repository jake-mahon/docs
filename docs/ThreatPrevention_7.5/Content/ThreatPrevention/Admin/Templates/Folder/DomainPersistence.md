---
sidebar_position: 6802
title: Domain Persistence Folder Templates
---

# Domain Persistence Folder Templates

The Domain Persistence folder contains the following templates:

| Template | Description | TAGS |
| --- | --- | --- |
| AD: AdminSDHolder Monitoring | AdminSDHolder is an object located in the System Partition in Active Directory (cn=adminsdholder,cn=system,dc=domain,dc=com) and is used as a security template for objects that are members of certain privileged groups. Objects in these groups are enumerated and any objects with security descriptors that don’t match the AdminSDHolder ACL are flagged for updating. The Security Descriptor propagator (SDProp) process runs every 60 minutes on the PDC Emulator and re-stamps the object Access Control List (ACL) with the security permissions set on the AdminSDHolder. Altering AdminSDHolder is an effective method for an attacker to persist granting the ability to modify the most privileged groups in Active Directory by leveraging a key security component. Even if the permissions are changed on a protected group. | * NEW 5.1 TEMPLATES * Domain Persistence * Privileged Accounts * Privilege Escalation * AD Security * Unauthorized changes |
| AD: Group Policy Objects Security Monitoring | Use this policy to specify a list of AD Group Policy Objects to be monitored. Optionally, add any AD Perpetrators to be included or excluded. Specify the list of AD Group Policy Objects to be monitored. Optionally, add any AD Perpetrators to be included or excluded. | * NEW 5.1 TEMPLATES * GPO Security * AD Security * Unauthorized changes |
| DCShadow detection | This policy will detect when a non-DC adds a SPN value to any computer starting with GC/ for the global catalog service. | * NEW 5.1 TEMPLATES |