# Netwrix Privilege Secure

Starting with version 10.7, you can implement the integration between Netwrix Auditor and Netwrix Privilege Secure.

The integration can be configured for the following Auditor data sources:

- Active Directory.

  See the [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account) topic for additional information.
- Group Policy.

  See the [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/grouppolicy/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account) topic for additional information.
- Logon Activity.

  See the [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/logonactivity/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account) topic for additional information.
- Microsoft Entra ID.

  See the [How to Add Microsoft Entra ID Monitoring Plan Using Netwrix Privilege Secure](/docs/auditor/auditor/admin/monitoringplans/microsoftentraid/overview.md#how-to-add-microsoft-entra-id-monitoring-plan-using-netwrix-privilege-secure) topic for additional information.
- Windows File Server.

  See the [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/fileservers/windowsfileserver.md#use-netwrix-privilege-secure-as-a-data-collecting-account) topic for additional information.
- Windows Server.

  See the [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/auditor/admin/monitoringplans/windows/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account) topic for additional information.

## Software Requirements

| Component | Version |
| --- | --- |
| Netwrix Auditor | 10.7+ |
| Netwrix Privilege Secure | 4.2+ |

## Enable and Configure Netwrix Privilege Secure Integration

Follow the steps to enable and configure Netwrix Privilege Secure integration.

__Step 1 –__ In Netwrix Auditor, navigate to Settings in the upper right corner.

__Step 2 –__ Select Netwrix Privilege Secure.

__Step 3 –__ Click __Set up Integration__.

__Step 4 –__ Specify the Privilege Secure URL.

__Step 5 –__ Specify the application name and Netwrix Auditor client certificate. The following two options are available:

- New/Generate certificate – Create a new certificate.
- Select an existing certificate – Select an available certificate from the drop-down list.

![npsclientcertificate](/img/product_docs/auditor/auditor/admin/settings/npsclientcertificate.webp)

__Step 6 –__ Click __Next__.

__Step 7 –__ You need to manually export the Netwrix Auditor server certificate. To do so, follow the steps below:

1. On the machine where Netwrix Auditor is installed, press the Windows key + R to open the Run dialog box. Type "_mmc_" in the box and click __OK__. This will open MMC (Microsoft Management Console).
2. __Click File > Add/Remove Snap-in...__ and locate Certificates icon.
3. In the pop-up window, select the __Computer account__ and click __Next__.
4. Make sure that the __Local Computer__ option is selected in the next window, then click __Finish__. The Certificates menu will appear.
5. Go to __Certificates (Local Computer) > Personal > Certificates > `{Certificate Name}`__ and click __Export__.
6. After successful export, copy the certificate to the machine where Netwrix Privilege Secure is installed.

__Step 8 –__ Install the certificate on the machine where Netwrix Privilege Secure is installed. To do so, follow the steps below:

1. Right-click the imported certificate and select __Install Certificate__ option.
2. In the Certificate Import Wizard, select __Local Machine__ as a Store Location and click __Next__.
3. In the next menu, select __Paste all certificates in the following store__ option, click __Browse__ and select __Trusted Root Certification Authorities__ folder in the pop-up menu.
4. Click __Finish__.

__Step 9 –__ Launch Netwrix Privilege Secure to create an application user for Netwrix Auditor with the Application name and Certificate Serial Number that you received. Refer to the [Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement) documentation for additional instructions.

__Step 10 –__ Provide the security key you got in Netwrix Privilege Secure.

![npsintegrationparameters](/img/product_docs/auditor/auditor/admin/settings/npsintegrationparameters.webp)

__Step 11 –__ Click __Next__.

![npsintegrationfinished](/img/product_docs/auditor/auditor/admin/settings/npsintegrationfinished.webp)

__Step 12 –__ After the validation, click __Finish__.

Integration between Netwrix Auditor and Netwrix Privilege Secure is established. Before using the Netwrix Privilege Secure for data collection in Netwrix Auditor, make sure that you created a dedicated Access Policy and Connection Profile in Netwrix Privilege Secure. Refer to the [Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement) documentation for additional information.
