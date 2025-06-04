---
id: billableaccounts
title: Billableaccounts
---

**NOTE:** To view the numbers of the column, your organization should add the Active Directory/Microsoft Entra ID sources and connectors.

You can review the Active Directory/Microsoft Entra ID users on the following dashboards:

- Managing Organization

![](/img/1secure/admin/Tabs.png)

- Managed Organization

## Calculation of the Numbers

Netwrix 1Secure calculates and dedupes the users that are synced across AD and Microsoft Entra ID.

The system calculates:

- a total number of on-prem AD users
- a total number of Microsoft Entra ID native users (not synced with on-prem)
- a total number of synced users from on-prem Microsoft Entra ID (or hybrid users)

The number of synced users from on-prem is registered against the on-prem tenant reference. Netwrix 1Secure uses the highest number out of on-prem users reported by the Agent and the number of hybrid users reported by the Microsoft Entra ID connector as the on-prem total. Then the Microsoft Entra ID users, which are not synced with on-prem envinronment, are added.

**Example:**

|  |  |  |
| --- | --- | --- |
| Company has: | The numbers provided to Netwrix 1Secure: | The numbers given by Netwrix 1Secure in the app: |
| **On-prem AD**: 200 users | **Agent**  On-prem: 200 | User Counts  **On-prem**: Max (200, 150) = 200 |
| **Microsoft Entra ID**: 250 users (150 users synced from on-prem + 100 Azure AD only users) | **Microsoft Entra ID**  o 150 from on-prem domain  o 100 Azure AD | **Microsoft Entra ID**: 100 |
|  |  | **Total**: 300 |

The percentage is calculated as follows:

percentage = users calculated in the environment / users for which the license is purchased

- *\System\Policies\{*}*
- *\Configuration\Deleted Objects\CRUpdate*
- *\Configuration\LostAndFoundConfig*
- *System\BCKUPKEY\*
- *System\IP Security\*
- *System\FileLinks\VolumeTable\*
- *\Deleted Objects*
- *\Configuration\Extended-Rights\ms-Exch-*
- *\Microsoft Exchange System Objects\SystemMailbox*
- *\HealthMailbox*