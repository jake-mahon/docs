---
sidebar_position: 3927
title: A ThinApp throws an "Exception Error". What can I do to fix it?
---

# A ThinApp throws an "Exception Error". What can I do to fix it?

If you encounter the following error (or something like it) when launching a ThinApp packaged application, there is a workaround.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/242_1_image001-2.png)

You can fully isolate PolicyPak from trying to manage a specific ThinApp application, thus working around the exception error.

To do this, you'll need to re-package your application. However, before you click to make it a package, first create a folder in the Thin App Package to the location of where the CSE exists.

So %ProgramFilesDir%PolicyPakApplication ManagerClient then add a new file named ATTRIBUTES.INI and set the file to:

[Isolation]  
DirectoryIsolationMode=FULL

What this does is exclude the PolicyPak CSE files from interacting with the ThinApp application EXE.

*Remember,*  This prevents PolicyPak from managing that application, but, works around any Exception Errors on launch.