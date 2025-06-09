# How can I use Item Level Targeting to specify Windows Virtual Desktops (WVD) Multi-session Windows?

![642_1_1](/img/product_docs/policypak/policypak/itemleveltargeting/642_1_1.png)

The query you want is:

__Step 1 –__ The Operating System is Windows 10

__Step 2 –__ and the WMI Query:select \* from Win32\_OperatingSystem, where OperatingSystemSKU = 175

The result will look like this:

![642_2_2](/img/product_docs/policypak/policypak/itemleveltargeting/642_2_2.png)

__NOTE:__ For other unusual SKUs and information on how to get the ID, see the Microsoft article on [OperatingSystemSKU Enum.](https://learn.microsoft.com/en-us/dotnet/api/microsoft.powershell.commands.operatingsystemsku?view=powershellsdk-1.1.0)
