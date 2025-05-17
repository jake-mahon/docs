---
sidebar_position: 3089
title: How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery
  Manager
---

# How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery Manager

**Step 1 –** Zip up the Printer setup files and store on a network share that is accessible to the users that need to have the printer installed.

For Example:

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_1_image-20210320020022-1.png)

**NOTE:** This zip should contain the driver INF file for the printer to be installed.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_2_image-20210320020022-2.png)

**Step 2 –** Using the Microsoft Group Policy Management Console (GPMC), create a new Netwrix Endpoint Policy Manager (formerly PolicyPak) RWDM Standard Policy on either the Computer side (using Switched-Mode), or the User side.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_3_image-20210320020022-3.png)

**Step 3 –** At the Welcome screen select Copy a single file, and click **Next**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_4_image-20210320020022-4.png)

**Step 4 –** Select Apply this policy to all users who log on to the computer (switched mode), then click **Next**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_5_image-20210320020022-5.png)

**Step 5 –** Enter the UNC path to the printer zip file from step 1 above, then click **Next**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_6_image-20210320020022-6.png)

**Step 6 –** Specify the target folder on the endpoint(s) where you would like the zip to be downloaded to, provide the file name for the destination, then click **Next**. 

**NOTE:** The target folder will be created if it does not exist

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_7_image-20210320020022-7.png)

**Step 7 –** Accept the default values and click **Next**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_8_image-20210320020022-8.png)

**Step 8 –** Select **Once** then click **Next**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_9_image-20210320020022-9.png)

At the Post-copy actions screen select the **Run PowerShell script**, and **Run process or script as user** options, then add/edit the command lines below as needed to reflect what is needed for your specific printer model, then click **Next**.

TIP: [Go to https://www.pdq.com/blog/using-powershell-to-install-printers/ for more information on this topic.](https://www.pdq.com/blog/using-powershell-to-install-printers/)

```
Expand-Archive -LiteralPath 'c:\temp\canon.zip' -DestinationPath C:\Temp    pnputil.exe /a "C:\Temp\Canon\Driver\CNS30MA64.INF"    Start-Sleep -s 10    Add-PrinterDriver -Name "Canon Generic Plus PS3"    Add-PrinterPort -Name "IP Port" -PrinterHostAddress "192.168.1.27"    Add-Printer -DriverName "Canon Generic Plus PS3" -Name "Canon Generic Plus PS3" -PortName "IP Port" 
```
![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_10_image-20210320020022-10.png)

**Important**: The Add-PrinterDriver -Name section above the name specified (i.e., "Canon Generic Plus PS3" in this example) must match one of the names in the INF file!

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_11_image-20210320020022-11.png)

**Step 9 –** Skip the Revert actions screen unless you wish to add a revert action.

**Step 10 –** At the Policy settings screen give the policy a descriptive name, then click **Finish**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_12_image-20210320020022-12.png)

**Step 11 –** Run GPUPDATE on an endpoint that receives this policy to test, then verify under Printers & Scanners that you see the printer installed.

**NOTE:** The printer may take around 30 seconds to install.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/RemoteWorkDelivery/571_13_image-20210320020022-13.png)