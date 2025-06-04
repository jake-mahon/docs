---
id: gmsa
title: Gmsa
---

## Checking for KDS root key

Follow the steps to check whether the root key exists in your domain.

**Step 1 –** Open the **Active Directory Sites and Services** Console, select **View** → **Show Services Node**.

**Step 2 –** Browse to **Services** →**Group Key Distribution Services** →**Master Root Keys**.

**Step 3 –** Alternatively, you can run the `Get-KdsRootKey` cmdlet. If the key does not exist, it will not return any output.

If the KDS key does not exist, then you can create is as described below, or contact your Active Directory administrator.

To create a KDS key (on a domain controller running Windows Server 2012 or later)

1. On the domain controller, run Windows PowerShell.
2. In the command prompt of Windows PowerShell Active Directory module, run the following cmdlet:

   `Add-KdsRootKey -EffectiveImmediately`

Alternatively, you can use the following cmdlet:

`Add-KdsRootKey -EffectiveTime MM/DD/YYYY`

This cmdlet generates a KDS root key that will take effect on the specified date. Use the *mm/dd/yyyy* format, for example: `Add-KdsRootKey -EffectiveTime 02/27/21`

This approach, however, should be used with care.

## Creating a gMSA

When creating a new gMSA, you will need to specify:

1. Your Netwrix Cloud Agent host
2. If you are going to collect data using the network traffic compression (see the following section for more information: [Network Traffic Compression](../../../Configuration/NetworkTrafficCompression.md "Network Traffic Compression")), provide the following:

   - For Logon Activity — domain controllers of the monitored domain

Make sure you specify a valid computer object in this attribute.

To create a new gMSA in the root domain using PowerShell:

- Run the command as follows:

  here:

  - *name* — new gMSA name, here **ncagmsa**. Make sure the name refers to a valid computer objects.
  - *PrincipalsAllowedToRetrieveManagedPassword* — your Netwrix Cloud Agent host NETBIOS name ended with $, here **NCASrv$**