---
sidebar_position: 4100
title: My organization doesn't permit me to run the LT (Endpoint Policy Manager Licensing
  Tool) or provide the XML information it produces. What are my other options?
---

# My organization doesn't permit me to run the LT (Endpoint Policy Manager Licensing Tool) or provide the XML information it produces. What are my other options?

Before reading the full answer to this question, please go over this FAQ question and see if that answers your question:

[Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)](../Tool.htm "Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)")

In short, we don't collect any critical information at all. The LT only collects the number of computers and where the licenses are used. Because of this, we recommend you use the LT utility as the best option.

However, if after reading that technote, you still don't wish to run `LT` and provide the XML output, then here is the only alternative:

**Step 1 –** Run these two PowerShell commands to get the a computer count in AD, as seen here. Send us a screenshot. This is the number we will charge you for because it assumes all computers in the whole domain.

*Remember,* If you were to use our Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem Licensing tool, you would be able to pick specific OUs and reduce this number. But if you are unable to use LT, there is a consequence: we must assume the whole domain and therefore assume all computers in it are to be licensed.

We can un-count computers which are Trial , Non-Windows, and Disabled. To provide the count using Powershell:Import-Module ActiveDirectory :

```
Get-ADComputer -filter {(enabled -eq 'True') -and (name -notlike '*computer*') -and (OperatingSystem -like 'windows*')} | measure
```
(Must be typed / copied / pasted on one line)

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/144_1_LT-and-powershell-counts.png)

**Step 2 –** As you can see, this Powershell command simply reports back the same count that LT would report if you were using it.

If you wanted to see how many computers were in a specific OU, you would modify the line above. Assuming your domain was named fabrikam.com, and you had a top level OU namedSales and sub-OU West Sales, you would run the following command to see how many computers are in there (minus TRIAL, Non-Windows, and Disabled.)

Import-Module ActiveDirectory

```
Get-ADComputer -SearchBase 'OU=West Sales,OU=Sales,DC=fabrikam,DC=com' -Filter {(enabled -eq 'True') -and (name -notlike '*computer*') -and (OperatingSystem -like 'windows*')} | measure  

```
(Must be typed / copied / pasted on one line)

## Example PowerShell output:

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/144_2_image001.png)

Run this additional PowerShell command (cut and paste):

`$env:userdnsdomain`

It will then produce the output of the domain name, which we absolutely need to make you a license key. Without this, we cannot cut you a key.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/License/Unlicnese/144_3_get-FQDN-with-powershell.png)

So, to recap:

**Step 1 –** If you use our Endpoint Policy Manager On-Prem Licensing tool (LT), we collect only information about where you want to use it and how much you want to use it. We do not collect usernames, computer names, passwords or anything else. Again, see [Why do I have to run the licensing tool / what information is gathered and sent to Endpoint Policy Manager for my trial (or becoming a customer?)](../Tool)for additional information

**Step 2 –** If you are unable to use our LT, that's fine. The alternative is to use these PowerShell commands which gives us the minimum we need to know:

* Number of computers in the domain (which we must charge you for all of them)
* FQDN of the domain (this is how we cut keys so they cannot be shared or tampered)
* Since we don't know the names of the OUs, we are then required to charge you for all of the domain, even if you don't plan to use it in all places.

**NOTE:**  We still cannot get Number of Terminal Services connections (if any) via the Powershell method. So as per the EULA, you must manually state if you plan to use Endpoint Policy Manager upon Terminal Services sessions and add that number to the computer count.