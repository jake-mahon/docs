# How can I manage a version of Java inside a ThinApp package ?

You can use Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager to manage the Java on the real machine and also the (different) Java inside a ThinApp package.

To do this, it takes several steps.

__Step 1 –__ Create a Pak for your ThinApp application or use an existing Pak. In this example, we'll use the pre-configured Pak for OpenOffice 4.0 that we provide.

__Step 2 –__ Know and note what version of Java is inside the ThinApp package. In the case of OpenOffice 4.0, the version is 8u40.

__Step 3 –__ Copy the existing Java Pak XML to a new file to be used.

__Step 4 –__ Add the application ID from the OpenOffice pak to the Java Pak as seen below using Notepad. Note the AppID in the might be different than what is in this screenshot and/or have multiple AppIDs. Simply preserve the existing ID, and append as seen here.

![147_1_image0052](/img/product_docs/policypak/policypak/applicationsettings/147_1_image0052.webp)

__Step 5 –__ Open the Java Pak XML in the Endpoint Policy Manager DesignStudio. Update the Project name so it's clear what it's doing. Then recompile.

![147_2_image003](/img/product_docs/policypak/policypak/applicationsettings/147_2_image003.webp)

__Step 6 –__ Give the Pak a new DLL name and Recompile the Pak

![147_3_image004](/img/product_docs/policypak/policypak/applicationsettings/147_3_image004.webp)

__Step 7 –__ Use the new Pak in Endpoint Policy Manager Application Settings Manager . Your ThinApp package's Java will automatically be configured at this point with the settings you dictate.

![147_4_image0061](/img/product_docs/policypak/policypak/applicationsettings/147_4_image0061.jpg)
