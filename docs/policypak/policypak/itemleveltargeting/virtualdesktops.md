# How can I use Item Level Targeting to specify Windows Virtual Desktops (WVD) Multi-session Windows?

![642_1_1](../../../../static/img/product_docs/policypak/policypak/itemleveltargeting/642_1_1.webp)

The query you want is:

**Step 1 –** The Operating System is Windows 10

**Step 2 –** and the WMI Query:select \* from Win32_OperatingSystem, where OperatingSystemSKU = 175

The result will look like this:

![642_2_2](../../../../static/img/product_docs/policypak/policypak/itemleveltargeting/642_2_2.webp)

**NOTE:** For other unusual SKUs and information on how to get the ID, see the Microsoft article on
[OperatingSystemSKU Enum.](https://learn.microsoft.com/en-us/dotnet/api/microsoft.powershell.commands.operatingsystemsku?view=powershellsdk-1.1.0)
