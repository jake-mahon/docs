# How do I configure the MMC snap-in to open GPOs in Netwrix Auditor?

For a video
overview of this process see [Endpoint Policy Manager and Netwrix Auditor - Setup Steps](../../video/integration/auditorsetup.md)

__NOTE:__  Only
the latest Endpoint Policy Manager MMC console supports the Endpoint Policy Manager → Netwrix Auditor. Make sure to use the Endpoint Policy Manager download and install the latest MMC
console.

## Initial Setup for Netwrix Auditor

__Step 1 –__ In Netwrix Auditor, determine where you Report Manager URL is. The item
is found in Netwrix Auditor under __Settings__ > __Audit Database__ > __Report Manager UR__.

![970_1_image-20231016154007-8_950x412](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_1_image-20231016154007-8_950x412.webp)

__Step 2 –__ Click on the
link to open up Report Manager in SQL Server Reporting
Services (SSRS).

__Step 3 –__ Create
a new SSRS Folder and give it any name you like.

![970_2_image-20231016154007-9_950x454](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_2_image-20231016154007-9_950x454.webp)

__Step 4 –__ Enter the
folder you just created then upload the``` .RDL``` file provided from
the Endpoint Policy Manager Extras Folder.

![970_3_image-20231016154007-10_950x605](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_3_image-20231016154007-10_950x605.webp)

__Step 5 –__ The result after the upload is shown below..

![970_4_image-20231016154007-11](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_4_image-20231016154007-11.webp)

__Step 6 –__ Click the report to get the reference string you'll use
in future steps. This will contain the Netwrix Auditor server, up to and including the specific URL which
expresses just before the report name.

![970_5_image-20231016154007-12_950x839](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_5_image-20231016154007-12_950x839.webp)

As an example, the string should look like this: http://NetwrixAuditorServer/Reports_SQLEXPRESS/report/PolicyPak

__Step 7 –__ Keep this
string handy in Notepad or similar for thenext
steps.

## Using the PolicyPak MMC to Call Netwrix Auditor

__Step 1 –__ Use the
latest Endpoint Policy Manager MMC to configure your management machine to use
Netwrix Auditor . Left click on the Netwrix Endpoint Policy Manager node, then right-click to __Open in Netwrix
Auditor__.  Input the string you collected earlier.

![970_6_image-20231016154007-13_950x582](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_6_image-20231016154007-13_950x582.webp)

## Optional Configuration: Use PolicyPak ADMX to configure the value automatically

__Step 1 –__ If you have
many Endpoint Policy Manager administrators using the MMC snap-in and you
wish to mass-configure this value, you may do so via the Endpoint Policy Manager ```ADMX ```Files.

Always use the latest Endpoint Policy Manager ```
ADMX``` files, are available in the Endpoint Policy Manager download.

Please see [Troubleshooting with ADMX files](../../video/troubleshooting/admxfiles.md) to begin using, or update the Endpoint Policy Manager ADMX
settings

__Step 2 –__ After the
``` ADMX``` files are in place, create a Group Policy Object and target
it for your MMC management stations.

__NOTE:__ Endpoint Policy Manager CSE will ignore this policy because it is exclusively
regarding the MMC snap-in.

![970_7_image-20231016154007-14_950x683](../../../../../static/img/product_docs/policypak/policypak/integration/auditor/970_7_image-20231016154007-14_950x683.webp)

__Step 3 –__ Going
forward, the ADMX setting will command the MMC snap-in and it will
be unconfigurable.
