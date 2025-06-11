# How to elevate Print driver installation using Endpoint Privilege Manager? (alternate method)

These directions should only be performed if asked by support. The normal method to elevate print driver installation is to use the Netwrix Endpoint Policy Manager (formerly PolicyPak) Helper tools. The following videos provide you with step by step instructions:

- [Overcome Network Card, Printer, and Remove Programs UAC prompts](/docs/policypak/policypak/video/leastprivilege/uacprompts.md)
- [Endpoint Policy Manager Least Priv Manager Tools Setup](/docs/policypak/policypak/video/leastprivilege/toolssetup.md)
- [Getting the helper tools as desktop shortcuts](/docs/policypak/policypak/video/leastprivilege/helperdesktopshortcut.md)
- [Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog](/docs/policypak/policypak/video/leastprivilege/ntprintdialog.md)
- [Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI](/docs/policypak/policypak/video/leastprivilege/wingui.md)

Printui.dll is the executable file that contains the functions to install a Print driver. Currently Endpoint Policy Manager can elevate a Control Panel applet, and it can be ```.CPL``` or ```.DLL``` files. But we cannot elevate a``` .DLL``` file alone.

In this KB we will demonstrate how a non-admin user can install a print driver on its own, by elevating a``` rundll32.exe``` process using ```PPLPM```.

Using Endpoint Policy Manager , elevate the ```rundll32.exe```, and include a command-line argument to elevate a specific DLL. Just like shown in below screenshot.

![362_1_rundll](/img/product_docs/policypak/policypak/leastprivilege/elevate/362_1_rundll.webp)

Rule to elevate``` rundll32.exe``` by PATH and COMMAND LINE (when ```rundll32.exe ```runs a ```DLL```, the ```DLL ```path is specified on the command line)
