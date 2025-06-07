# How do I elevate installers that are classified as Installers but not Applications? Like Ninite, 7z, or Self-Extract?

The problem is when you elevating an application but it keeps giving the UAC prompt.

![723_1_uac](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/723_1_uac.png)

Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager detects Application Installers by searching for default keywords in FileDescription, ProductName, OriginalFileName, InternalName or Comments from File Information.It also searches for keywords in Description section from File Manifest (if exists).

Default keywords are __Setup__, __Installer__, __Install__, __Upgrade__, __Update__, __SFX__, __7zS__, __Self-Extract__.

You can extend this list by enabling the Endpoint Policy Manager ADMX setting and entering required keywords. If you don't know how to enable Endpoint Policy Manager ADMX settings then see this link: [Troubleshooting with ADMX files](/docs/product_docs/policypak/policypak/video/troubleshooting/admxfiles.md)

In this example we are going to show you how to set Ninite installer as an elevated Application Executable.

__Step 1 –__ Open __Properties__ to view Ninite installer File Description keyword.

![723_2_image-20201103180355-1](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/723_2_image-20201103180355-1.png)

__Step 2 –__ Browse the following location under Endpoint Policy Manager ADMX Setting and set it as shown in the screenshot:

- Location:

  ```Computer Configuration\Administrative Templates\PolicyPak ADMX Settings\Client-Side Extension\Least Privilege Manager\```
- Settings name:

  Use additional keywords to detect Application Installers

![723_3_image-20201103180355-2](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/723_3_image-20201103180355-2.png)
