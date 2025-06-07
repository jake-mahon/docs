# Getting Started with Standard Policies

In the following examples, we'll copy and install Notepad++ using Endpoint Policy Manager Remote Work Delivery Manager, using ```\\DC2016\share``` as the share.

__Step 1 –__ Start by downloading Notepad++ from [https://notepad-plus-plus.org/](https://notepad-plus-plus.org/), and put the installer file, which should be named something similar to npp.7.5.6.Installer.exe, in your share.

![getting_to_know_policypak_1](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_1.png)

__Step 2 –__ On your GPMC management station, create a GPO and link it to your users. In this example we have a GPO created and linked to the East Sales Users organizational unit (OU).

![getting_to_know_policypak_2](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_2.png)

__Step 3 –__ Edit the GPO, then go to ```User Configuration > PolicyPak > Remote Work Delivery Manager```, as shown below, and select ```Add ``````>`````` New Standard Policy```.

![getting_to_know_policypak_3](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_3.png)

When you do this, the Endpoint Policy Manager Remote Work Delivery Manager Wizard appears.

![getting_to_know_policypak_4](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_4.png)

__Step 4 –__ Click __Next__ and specify the file from the file path.

![getting_to_know_policypak_5](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_5.png)

__Step 5 –__ Click __Next__ to continue. On the next page, specify the destination directory, which can be any folder you like. Folders that don't exist will be automatically created. In the example below, the folder is located two directories down. At this point, you can also change the destination name of the file.

![getting_to_know_policypak_6](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_6.png)

__Step 6 –__ On the next screen, you can Specify file access settings,. On this screen, you can specify which security context is used for the reading and writing of the files. When reading from the source as User, the user needs read access to the files. When reading from the source as Computer, the computer needs read access to the files. When writing to the destination as User, the files are written with the user's context and ownership. So a user needs to have write access to the location you specify. When writing to the destination as Computer, the files are written as System. As such, files can be replaced where standard users cannot normally go, such as the Program Files folder and other system-restricted locations.

![getting_to_know_policypak_7](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_7.png)

__Step 7 –__ On the next screen you can decide which file attributes will be copied. Note that not all attributes are available, depending on which options have been previously selected.

![getting_to_know_policypak_8](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_8.png)

__Step 8 –__ On the next screen decide when to process the policy.

You typically want to redeliver a file during all Group Policy updates, but the good news is that only files that change are brought down, which saves bandwidth and processing time. Changed files are only brought down when the policy is set to __Always run (recommended)__.

For this example, you can select __Once__.

![getting_to_know_policypak_9](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_9.png)

__Step 9 –__ After the file is copied, we want to run it so that it installs. To do this, select __Run process__ and specify the path and the filename. Note that installation programs typically need to run as System, so be sure to uncheck __Run process or script as user__, which will force it to process as System.

![getting_to_know_policypak_10](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_10.png)

__Step 10 –__ You can also specify what to do when the policy is reverted or no longer applies. For that we can run the Notepad++ uninstall command,

```
"c:\ProgramFiles (x86)\Notepad++\uninstall.exe" /S
```

Additionally, you can specify what to do with the files or folders that are not needed when the policy no longer applies.

![getting_to_know_policypak_11](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_11.png)

__Step 11 –__ The last page of the wizard enables you to provide a Policy Name, enter notes into the Comment field, enable or disable the State field, or use the Item Level Targeting field to specify where this policy should apply (more on this later).

![getting_to_know_policypak_12](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_12.png)

__Step 12 –__ Click __Finish__ to close the wizard and see the entry in the Group Policy Editor . You can also double-click the entry to see all of the settings in a flat list, instead of the wizard.

![getting_to_know_policypak_13](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_13.png)

__Step 13 –__ Finally, on the target machine, run ```GPupdate ```or log on as the user. You will see Notepad++ appear under the Recently added heading.

![getting_to_know_policypak_14](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_14.png)

__Step 14 –__ If you want to test it out, you can un-link enable GPO by removing the checkmark next to Link Enabled, or delete the GPO, and see Notepad++ go away.

![getting_to_know_policypak_15](/static/img/product_docs/policypak/policypak/remoteworkdelivery/gettingstarted/getting_to_know_policypak_15.png)
