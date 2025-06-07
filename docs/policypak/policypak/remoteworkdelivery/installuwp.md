# How to Install UWP applications using Endpoint Policy Manager Remote Work Delivery Manager

Using the Azure VPN Client UWP application as an example, this article will cover the steps needed to install the Azure VPN Client using either the Standard Policy (SMB/UNC) Method) or Web Policy Method.

__NOTE:__ It's up to the customer to ensure the UWP applications being used are legitimate Microsoft applications and that the applications are signed by Microsoft.

## Using the Standard Policy (SMB/UNC) Method

__Step 1 –__ Download the UWP application bundle from the Microsoft Store. You can use the Microsoft Store link for the application at this site (use at your own risk) to download the application bundle:  [https://store.rg-adguard.net/](https://store.rg-adguard.net/)

Copy the Microsoft Store link for the UWP Application:  
 [https://www.microsoft.com/en-us/p/azure-vpn-client/9np355qt2sqb?activetab=pivot:overviewtab](https://www.microsoft.com/en-us/p/azure-vpn-client/9np355qt2sqb?activetab=pivot:overviewtab)

![722_1_image-20201105183910-1](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_1_image-20201105183910-1.png)

Then use the link at [https://store.rg-adguard.net/:](https://store.rg-adguard.net/:)

![722_2_image-20201105183910-2](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_2_image-20201105183910-2.png)

__Step 2 –__ Download the UWP application bundle, and store it on a UNC path that is accessible from your endpoint computers, i.e.

```
\\server\share\Microsoft.AzureVpn_1.1069.25.0_neutral___8wekyb3d8bbwe.Msixbundle
```

__Step 3 –__ Then using the Microsoft Group Policy Management Console (GPMC) create a new Netwrix Endpoint Policy Manager (formerly PolicyPak) RWDM Standard Policy on either the Computer or User side.

![722_3_image-20201105183910-3](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_3_image-20201105183910-3.png)

__Step 4 –__ At the Welcome to the Endpoint Policy Manager Remote Work Delivery Manager wizard! screen choose Copy a single file, then click __Next__.

![722_4_image-20201105183910-4](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_4_image-20201105183910-4.png)

__Step 5 –__ At the Specify policy target screen choose __Apply this policy to all users who log on to the computer__ __(switched mode)__, then click __Next__.

![722_5_image-20201105183910-5](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_5_image-20201105183910-5.png)

__Step 6 –__ At the Specify the copy source screen use the UNC path for the UWP application bundle from Step 2 above, then click __Next__.

![722_6_image-20201105183910-6](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_6_image-20201105183910-6.png)

__Step 7 –__ At the Specify the copy destination specify the target folder on the endpoint(s) where you would like the UWP application to be downloaded to, leave the File name field as is, then click __Next__.  The target folder will be created if it does not exist.

![722_7_image-20201105183910-7](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_7_image-20201105183910-7.png)

__Step 8 –__ At the Specify file access settings screen accept the default values and click __Next__.

![722_8_image-20201105183910-8](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_8_image-20201105183910-8.png)

__Step 9 –__ At the Specify when to process this policy screen select __Once__ and click __Next__.

![722_9_image-20201105183910-9](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_9_image-20201105183910-9.png)

__Step 10 –__ At the Post-copy actions" screen select the __Run PowerShell script__, and __Run process or script as user__ options and add the command line below

```
Add-AppPackage -path "C:\Installers\Microsoft.AzureVpn_1.1069.25.0_neutral___8wekyb3d8bbwe.Msixbundle"
```

![722_10_image-20201105183911-10](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_10_image-20201105183911-10.png)

__Step 11 –__ Optional: At the Revert actions screen add a revert action, otherwise click __Next__ to skip.

You are done, give the Policy a descriptive name then click __Finish__.

## Using the Web Policy (Azure Blob storage, Dropbox, etc.) Method:

__Step 1 –__ Download the UWP application bundle from the Microsoft Store. You can use the Microsoft Store link for the application at this site (use at your own risk) to download the application bundle:  [https://store.rg-adguard.net/](https://store.rg-adguard.net/)

Copy the Microsoft Store link for the UWP Application:  
 [https://www.microsoft.com/en-us/p/azure-vpn-client/9np355qt2sqb?activetab=pivot:overviewtab](https://www.microsoft.com/en-us/p/azure-vpn-client/9np355qt2sqb?activetab=pivot:overviewtab)

![722_11_image-20201105183911-11](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_1_image-20201105183910-1.png)

Then use the link at [https://store.rg-adguard.net/:](https://store.rg-adguard.net/:)

![722_12_image-20201105183911-12](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_2_image-20201105183910-2.png)

__Step 2 –__ Download the UWP application bundle, then upload it to a Endpoint Policy Manager supported web storage source. The following web sources are currently supported:

- Amazon S3
- Azure Blob Storage
- Dropbox

__Step 3 –__ Using the Microsoft Group Policy Management Console (GPMC) create a new Endpoint Policy Manager RWDM Web Policy on either the Computer or User side.

![722_13_image-20201105183911-13](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_13_image-20201105183911-13.png)

__Step 4 –__ At the Specify policy target screen select __Apply this policy to all users who log on to the computer (switched mode)__, then click __Next__.

![722_14_image-20201105183911-14](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_5_image-20201105183910-5.png)

__Step 5 –__ At the Specify the copy source window add the direct download link for the UWP application, then click __Next__.

__NOTE:__ In this example, we are using a temporary link created for Dropbox: https://www.dropbox.com/s/gvzushhyu2qz9i/Microsoft.AzureVpn\_1.1069.25.0\_neutral\_\_\_8wekyb3d8bbwe.Msixbundle?dl=1. Do not use this link, it is provided only as an example and will not work, please create a new link to use.

![722_15_image-20201105183911-15](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_15_image-20201105183911-15.png)

__Step 6 –__ Wait for the link to be validated. If it fails, verify that you are using a direct download link, that is, paste the link into a browser to see if the file auto-downloads.

![722_16_image-20201105183911-16](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_16_image-20201105183911-16.png)

__Step 7 –__ In the Specify the copy source window select __File__ and click __Next__.

![722_17_image-20201105183911-17](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_17_image-20201105183911-17.png)

__Step 8 –__ In the Specify the copy destination window, specify the target folder on the endpoint(s) where you would like the UWP application to be downloaded to, leave the File name as is, then click __Next__.  The target folder will be created if it does not exist.

![722_18_image-20201105183911-18](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_7_image-20201105183910-7.png)

__Step 9 –__ In the pecify file access settings window accept the defaults and click __Next__.

![722_19_image-20201105183911-19](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_19_image-20201105183911-19.png)

__Step 10 –__ In the Specify when to process this policy window select __Once__, then click __Next__.

![722_20_image-20201105183911-20](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_9_image-20201105183910-9.png)

__Step 11 –__ In the Post-copy actions window choose the Run PowerShell script, and __Run process or script as user__ options, then add the command line below

```
Add-AppPackage -path "C:\Installers\Microsoft.AzureVpn_1.1069.25.0_neutral___8wekyb3d8bbwe.Msixbundle"
```

![722_21_image-20201105183911-21](/static/img/product_docs/policypak/policypak/remoteworkdelivery/722_10_image-20201105183911-10.png)

__Step 12 –__ Optional: At the Revert actions screen add a revert action, otherwise click __Next__ to skip.

__Step 13 –__ You are done, give the Policy a descriptive name then click __Finish__.
