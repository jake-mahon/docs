---
title: "SIEM Folder Templates"
description: "SIEM Folder Templates"
sidebar_position: 100
---

# SIEM Folder Templates

The SIEM folder contains the following templates:

| Template                      | Description                                                                                                                                                                                                                                                            | TAGS |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Domain Admin Activity         | Monitors for all activity performed by objects that have Domain Admin privileges. Utilizes the built-in “Domain Administrators” – Perpetrator Collection. Add accounts with domain administrator rights to be monitored to this collection                             | None |
| Enabled and Disabled Accounts | Monitors when accounts are enabled or disabled. No customizations required                                                                                                                                                                                             | None |
| Failed Authentications        | Monitors for all Failed Authentications. No customizations required                                                                                                                                                                                                    | None |
| GPO Setting Changes           | Monitors all GPO setting changes. No customizations required                                                                                                                                                                                                           | None |
| OU Moved or Renamed           | Monitors for all OU moves or renames. No customizations required                                                                                                                                                                                                       | None |
| Password Changes              | Monitors for password changes. No customizations required                                                                                                                                                                                                              | None |
| Sensitive Group Modifications | Gathers Successful AD Authentications. Utilizes built-In “Successful Authentications” – Include Perpetrators Collection to define which accounts will be monitored for successful authentications. Add desired accounts to be monitored to this collection             | None |
| Successful Logons             | To minimize database growth, this policy is not set to send events to the reporting database, IT ONLY SENDS its information to SIEM. Make sure the Configuration > Event Filtering > Exclude 'Noise' Events option is Off for this policy. No customizations required. | None |
| SYSVOL Tampering              | Monitors for changes to critical files under SYSVOL. Specify the SYSVOL folders for all the servers to be monitored.                                                                                                                                                   | None |
| User Lockouts                 | Monitors for user lockouts. No customizations required.                                                                                                                                                                                                                | None |
