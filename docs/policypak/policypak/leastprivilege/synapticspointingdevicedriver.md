# How to create an LPM Policy for (SynTPEnh.exe) Synaptics Pointing Device Driver

Problem: The application Synaptics Pointing Device Driver (SynTPEnh.exe) is reported by the Global Settings (Audit) policy in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Event log as needing elevation.

![703_1_image-20210206004430-1](/static/img/product_docs/policypak/policypak/leastprivilege/703_1_image-20210206004430-1.png)

SynTPEnh.exe does not actually need to be elevated, but since it is considered a driver it is assumed to require elevation.

To work around this issue you should use __Allow and log__ instead of __Run with elevated privileges__ when creating a Least Privilege Manager rule for this application to pass safely through SecureRun.

![703_2_image-20210206004430-2](/static/img/product_docs/policypak/policypak/leastprivilege/703_2_image-20210206004430-2.png)

__NOTE:__ This policy (SYNAPTICS-Allow-AND-log.xml ) is provided in the [https://portal.policypak.com/downloads/guidance](https://portal.policypak.com/downloads/guidance) download, and can be found in the extracted contents under the PolicyPak Least Privilege Manager XMLs folder.

![703_3_image-20210206004430-3](/static/img/product_docs/policypak/policypak/leastprivilege/703_3_image-20210206004430-3.png)
