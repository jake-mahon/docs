# Internet Explorer: I'm trying to use IE 11's Enterprise Mode, but it doesn't appear to be working?

Here are the troubleshooting steps:

__Step 1 –__ First, verify your Endpoints actually have IE 11 AND you can see Enterprise Mode like what's seen here. If your machines don't have Enterprise mode from the Tools options: Stop. Figure this out FIRST. For instance, on Windows 7 and IE 11 you might need to update and patch using KB2929437 .

![162_1_image0012](/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/internetexplorer/162_1_image0012.png)

__Step 2 –__ When trying Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager and the IE Pak's Enterprise Mode, you should decide if you want to use it on the USER or COMPUER side.

Everything has to match up. In this first example, you're delivering Endpoint Policy Manager IE Explorer Maintenance settings using the USER side. Check for the existence of HKCUSoftwarePoliciesMicrosoftInternet ExplorerMainEnterpriseModeEnable. Unless the enable key exists, you won't see Enterprise Mode on the menu or on the F12 emulation tab's "browser profile" section.

![162_2_image0031](/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/internetexplorer/162_2_image0031.jpg)

In this section example, you're delivering Endpoint Policy Manager IE Explorer Maintenance settings using the COMPUTER side.

Check for the existence of HKCUSoftwarePoliciesMicrosoftInternet ExplorerMainEnterpriseModeEnable. Unless the enable key exists, you won't see Enterprise Mode on the menu or on the F12 emulation tab's "browser profile" section.

![162_3_image007](/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/internetexplorer/162_3_image007.jpg)
