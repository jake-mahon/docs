# Preparing Your Endpoint Policy Manager Creation Station

To use Endpoint Policy Manager DesignStudio, you will need the following components installed on your Endpoint Policy Manager creation station.

__NOTE:__  It's best if the Endpoint Policy Manager creation station is a machine that you can use and reuse. We suggest you use a virtual machine loaded with the following components. You can then restore to go back to this original configuration before creating each AppSet. This idea is borrowed from creating MSI or App-V packages. You want a clean machine with only the Endpoint Policy Manager creation station utilities on it before installing your package and producing an AppSet.

__Step 1 –__ The ```.NET``` Framework can be introduced through ```Add/Remove programs```, as shown in Figure 1.

![policypak_application_settings](/img/product_docs/policypak/policypak/applicationsettings/designstudio/quickstart/policypak_application_settings.png)

Figure 1. Installing the``` .NET ```Framework for Windows 10.

__Step 2 –__ Next, install Visual Studio Express Edition or later on your Endpoint Policy Manager creation station. Any edition later than 2008 will work; you only need one.

- Get C++ 2008 Express Edition by visiting [https://www.microsoft.com/en-US/download/details.aspx?id=29](https://www.microsoft.com/en-US/download/details.aspx?id=29). Figure 2 shows the installation options for Visual C++ 2008 Express Edition.
- Get C++ 2015, 2017, or 2019 Visual Studio Express Desktop Edition by visiting [https://visualstudio.microsoft.com/vs/express/](https://visualstudio.microsoft.com/vs/express/). Figure 3 shows the installation options.

![policypak_application_settings_1](/img/product_docs/policypak/policypak/applicationsettings/designstudio/quickstart/policypak_application_settings_1.png)

Figure 2. The installation options for Visual C++ 2008 Express Edition.

![policypak_application_settings_2](/img/product_docs/policypak/policypak/applicationsettings/designstudio/quickstart/policypak_application_settings_2.png)

Figure 3. The installation options for 2019 Visual Studio Express Desktop Edition.

__Step 3 –__ For this demonstration, we have gone with the C++ 2008 Express Edition. You will see whichever version you choose to install in your Start menu once installed, as shown in Figure 4.

![policypak_application_settings_3](/img/product_docs/policypak/policypak/applicationsettings/designstudio/quickstart/policypak_application_settings_3.png)

Figure 4. Visual Studio will appear in your Start menu once installed.

Follow the on-screen instructions to install the edition with the latest service packs and prerequisites onto your admin workstation. Note that this can take a long time. Also, if prompted, you do not need to install Silverlight, nor do you need the SQL Express Edition.

Sometimes, on some computers, the web-install version of Visual C++ Express Edition fails to complete. In those rare cases, you can download the full ISO of all the Express Edition products and then install it from there. The download of the full ISO is very large and can take a long time. Be sure to install only the C++ from the download and not the wrong package such as C#, which is not needed.

__Step 1 –__ After Microsoft C++ 2008 or later is installed, install Endpoint Policy Manager Design ```Studio.msi```. This file contains Endpoint Policy Manager DesignStudio. This tool allows you to create AppSets quickly. Users familiar with Visio tools will feel at home with DesignStudio.

__Step 2 –__ (Optional) If you wish to create and deploy GPOs from your Endpoint Policy Manager Application Settings Manager creation station, be sure that the GPMC is installed and the Endpoint Policy Manager Admin ```Console.msi``` is also loaded.

__Step 3 –__ After installation is complete, your Start menu should have both the Microsoft Visual C++ Express Edition node and Endpoint Policy Manager DesignStudio node (see Figure 5).

![policypak_application_settings_4](/img/product_docs/policypak/policypak/applicationsettings/designstudio/quickstart/policypak_application_settings_4.png)

Figure 5. Endpoint Policy Manager DesignStudio appears in the Start menu once installed.
