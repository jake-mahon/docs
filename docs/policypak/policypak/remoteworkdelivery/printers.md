# How To deploy a TCP/IP Printer using Endpoint Policy Manager Remote Work Delivery Manager

__Step 1 –__ Zip up the Printer setup files and store on a network share that is accessible to the users that need to have the printer installed.

For Example:

![571_1_image-20210320020022-1](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_1_image-20210320020022-1.png)

__NOTE:__ This zip should contain the driver INF file for the printer to be installed.

![571_2_image-20210320020022-2](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_2_image-20210320020022-2.png)

__Step 2 –__ Using the Microsoft Group Policy Management Console (GPMC), create a new Netwrix Endpoint Policy Manager (formerly PolicyPak) RWDM Standard Policy on either the Computer side (using Switched-Mode), or the User side.

![571_3_image-20210320020022-3](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_3_image-20201105183910-3.png)

__Step 3 –__ At the Welcome screen select Copy a single file, and click __Next__.

![571_4_image-20210320020022-4](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_4_image-20201105183910-4.png)

__Step 4 –__ Select Apply this policy to all users who log on to the computer (switched mode), then click __Next__.

![571_5_image-20210320020022-5](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_5_image-20210320020022-5.png)

__Step 5 –__ Enter the UNC path to the printer zip file from step 1 above, then click __Next__.

![571_6_image-20210320020022-6](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_6_image-20210320020022-6.png)

__Step 6 –__ Specify the target folder on the endpoint(s) where you would like the zip to be downloaded to, provide the file name for the destination, then click __Next__. 

__NOTE:__ The target folder will be created if it does not exist

![571_7_image-20210320020022-7](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_7_image-20210320020022-7.png)

__Step 7 –__ Accept the default values and click __Next__.

![571_8_image-20210320020022-8](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_8_image-20210320020022-8.png)

__Step 8 –__ Select __Once__ then click __Next__.

![571_9_image-20210320020022-9](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_9_image-20210320020022-9.png)

At the Post-copy actions screen select the __Run PowerShell script__, and __Run process or script as user__ options, then add/edit the command lines below as needed to reflect what is needed for your specific printer model, then click __Next__.

TIP:[ Go to https://www.pdq.com/blog/using-powershell-to-install-printers/ for more information on this topic.](https://www.pdq.com/blog/using-powershell-to-install-printers/)

```
Expand-Archive -LiteralPath 'c:\temp\canon.zip' -DestinationPath C:\Temp    pnputil.exe /a "C:\Temp\Canon\Driver\CNS30MA64.INF"    Start-Sleep -s 10    Add-PrinterDriver -Name "Canon Generic Plus PS3"    Add-PrinterPort -Name "IP Port" -PrinterHostAddress "192.168.1.27"    Add-Printer -DriverName "Canon Generic Plus PS3" -Name "Canon Generic Plus PS3" -PortName "IP Port" 
```

![571_10_image-20210320020022-10](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_10_image-20210320020022-10.png)

__Important__: The Add-PrinterDriver -Name section above the name specified (i.e., "Canon Generic Plus PS3" in this example) must match one of the names in the INF file!

![571_11_image-20210320020022-11](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_11_image-20210320020022-11.png)

__Step 9 –__ Skip the Revert actions screen unless you wish to add a revert action.

__Step 10 –__ At the Policy settings screen give the policy a descriptive name, then click __Finish__.

![571_12_image-20210320020022-12](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_12_image-20210320020022-12.png)

__Step 11 –__ Run GPUPDATE on an endpoint that receives this policy to test, then verify under Printers & Scanners that you see the printer installed.

__NOTE:__ The printer may take around 30 seconds to install.

![571_13_image-20210320020022-13](/static/img/product_docs/policypak/policypak/remoteworkdelivery/571_13_image-20210320020022-13.png)
