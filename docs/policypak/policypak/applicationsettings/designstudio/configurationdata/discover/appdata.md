# Configuration Data in %appdata%

If an application writes its configuration data to ```c:\```, ```c:\program files```, or

```c:\program files (x86)``` then do the following:

__Step 1 –__ Log in as a standard user.

__Step 2 –__ Run the application.

__Step 3 –__ Look for configuration data in the three likely locations:

1. ```c:\Users\<username>\AppData\Local\<app>```
2. ```c:\Users\<username>\AppData\Roaming\<app>```
3. ```c:\Users\<username>\AppData\Local\VirtualStore\Program Files (x86)\<app>```

__Step 4 –__ Continue to run Endpoint Policy Manager DesignStudio as a standard user and perform all your configurations.

__Step 5 –__ When you run Endpoint Policy Manager DesignStudio as a standard user, you can select the application's data file within ```%appdata%```, even if you browse using the full path, starting with ```C:\```. Endpoint Policy Manager DesignStudio will automatically detect if you are within ```%appdata%``` or ```%localappdata%``` and substitute the

```%appdata%``` or ```%localappdata%``` variables for you as needed, as shown in Figure 99 and Figure 100.

![discovering_configuration_12](/img/product_docs/policypak/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_12.png)

Figure 99. DesignStudio detecting the data location.

![discovering_configuration_13](/img/product_docs/policypak/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_13.png)

Figure 100. DesignStudio detecting the data location.

__NOTE:__ You will not be able to compile your AppSet to a DLL as standard user unless you change the location using Tools | Options. In the Compilation tab, select a writeable location for "Path for compiled dlls." By default, Endpoint Policy Manager DesignStudio writes its compiled AppSets to ```c:\Program Files\PolicyPak``` by design so non-administrators cannot utilize Endpoint Policy Manager Application Settings Manager .dlls on machines.

Therefore, capture all the data from your application first as a standard user, then test your compiling as a standard user. You can see the preview of your AppSet by selecting "Show test Endpoint Policy Manager when complete" within the Compilation tab, as shown in Figure 101

![discovering_configuration_14](/img/product_docs/policypak/policypak/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_14.png)

Figure 101. Choosing to preview the AppSet.

Then, when ready, switch to an administrative user to move the compiled Endpoint Policy Manager DLL to

```c:\Program Files\PolicyPak\Extensions```

(or ```c:\Program Files(x86)\PolicyPak\Extensions``` on 64-bit machines) and use the Group Policy Editor to see your completed AppSet.
