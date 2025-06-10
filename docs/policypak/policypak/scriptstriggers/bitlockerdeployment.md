# How do I automate BitLocker deployment for my enterprise with Group Policy and Endpoint Policy Manager?

Many organizations want to protect the data on the end-user's computers from prying eyes. Especially laptops that may be virtually anywhere. BitLocker is an encryption feature built into computers running Window 10 Professional, Enterprise and Education that creates a secure environment for your data.

Deploying BitLocker to an enterprise can be a daunting task. Group Policy in combination with Netwrix Endpoint Policy Manager (formerly PolicyPak) can automate the entire process with one GPO.

This document assumes the following

- Compatible version of Windows 10
- TPM present and enabled on the computer (TPM uses hardware level encryption to store BitLocker keys allowing zero-touch deployment and computer start-up)

## Implement BitLocker

The instructions below will configure BitLocker to encrypt the used space on the SystemDrive with 256-bit encryption and save the Recovery Password and key to Active Directory. There are many more options that can be configured either through additional policies or customized script if so required.

__Step 1 –__ Create a Group Policy on the desired Domain / OU and Edit

__Step 2 –__ Expand Computer Configuration -> Endpoint Policy Manager and click on Administrative Templates Manager

__Step 3 –__ Add a new collection

![66_1_image-20200725154035-1](/img/product_docs/policypak/policypak/scriptstriggers/66_1_image-20200725154035-1.webp)

__Step 4 –__ Give the Collection a descriptive name and, if required, set Item Level Targeting (ILT can filter the policy based on many different criteria including computer type (e.g. laptops), Operating System (e.g. Windows 10) or Security Group (e.g. Sales))

__Step 5 –__ Double-click to open the collection

__Step 6 –__ Add a new Policy

![66_3_image-20200725154035-2_626x151](/img/product_docs/policypak/policypak/scriptstriggers/66_3_image-20200725154035-2_626x151.webp)

__Step 7 –__ Browse to Windows Components and click on BitLocker Drive Encryption

__Step 8 –__ Open "Store BitLocker recovery information in Active Directory Domain Services (Windows Server 2008 and Windows Vista)" and set the following configuration

1. Select "Enable"
2. Check "Require BitLocker Backup to AD DS"
3. Set Select BitLocker recovery information to store: "Recovery passwords and key packages"
4. Click OK

   ![66_5_image-20200725154035-3_493x143](/img/product_docs/policypak/policypak/scriptstriggers/66_5_image-20200725154035-3_493x143.webp)

__Step 9 –__ In the same location, open "Choose drive encryption method and cipher strength (Windows 10 [version 1511] and later) and set the following configuration

1. Select "Enable"
2. Set the encryption method for drive type (CBC-AES is recommended for drives that may connect to non-Windows 10 computers)
3. Click OK

   ![66_7_image-20200725154035-4](/img/product_docs/policypak/policypak/scriptstriggers/66_7_image-20200725154035-4.webp)

__Step 10 –__ Click CLOSE

![66_9_image-20200725154035-5](/img/product_docs/policypak/policypak/scriptstriggers/66_9_image-20200725154035-5.webp)

__NOTE:__  If deploying different BitLocker configurations for different groups of users or computers, repeat steps 4 through 10 for each different configuration, setting the ILT on the collection to target your desired groupings.

__Step 11 –__ Still under Endpoint Policy Manager, click on Scripts Manager

__Step 12 –__ Add a new policy to start the Scripts Manager wizard

1. Click NEXT
2. Select "Apply this policy to computer (default) and click NEXT

   ![66_11_image-20200725154035-6_489x65](/img/product_docs/policypak/policypak/scriptstriggers/66_11_image-20200725154035-6_489x65.webp)
3. Configure "On apply action"

   1. On the dropdown that says "(None)", select "Batch Script" and type in the following text

      ```Manage-bde -on %systemdrive% -Used```

      ![66_13_image-20200814161653-2](/img/product_docs/policypak/policypak/scriptstriggers/66_13_image-20200814161653-2.webp)
   2. Click NEXT
4. Configure "On revert action"

   1. On the dropdown that says "(None)", select "Batch Script" and type in the following text

      ```Manage-bde -off %systemdrive%```

      ![66_14_image-20200725154035-8](/img/product_docs/policypak/policypak/scriptstriggers/66_14_image-20200725154035-8.webp)
   2. Click NEXT
5. Select either "Once" or "Once or when forced" and click NEXT

   ![66_16_image-20200725154035-9](/img/product_docs/policypak/policypak/scriptstriggers/66_16_image-20200725154035-9.webp)
6. Give the policy a descriptive name and set Item Level Targeting if required
7. Click FINISH

__Step 13 –__ Close Group Policy Management Editor

When the policy has been deployed to the user, they will receive a notification that a reboot will be required. It is not necessary that it be one immediately. Upon reboot BitLocker will automatically start to encrypt the drive with no input required from the user.
