# Quick Start

This Quickstart of Netwrix Endpoint Policy Manager (formerly PolicyPak) Preferences Manager will introduce the following:

- Deploying Microsoft Group Policy Preference items without Group Policy by using your own on-prem deployment system, such as Microsoft Endpoint Manager (SCCM and Intune), KACE, and so on.
- Keeping Microsoft Group Policy Preferences settings compliant even when the computer goes offline (regardless of how they are deployed).

__NOTE:__ See Appendix E: [Installation Quick Start](/docs/policypak/policypak/gettingstarted/quickstart/overviewinstall.md) and User Guide for additoinal information on Endpoint Policy Manager Preferences Manager in use with Endpoint Policy Manager Cloud

__NOTE:__ To perform these demonstrations, Microsoft Group Policy Preference items must be available. You can use some of our preconfigured items from the Endpoint Policy Manager Portal, or you can create your own using the Group Policy Preferences Editor.

## Option 1 - Downloading Microsoft Group Policy Preference Example Items

Some easy-to-use Microsoft Group Policy Preference items have been previously created and are available inside the Endpoint Policy Manager Portal for download in the Latest Manuals section. Currently the file is called ```ppprefs-shortcut.xml```.  You can get to it by accessing the customer portal and navigating to Latest Manuals.  Then, click on Endpoint Policy Manager Examples (to be used with PP Cloud-MDM-SCCM-etc).zip.

![quickstart_using_policypak](/img/product_docs/policypak/policypak/preferences/quickstart_using_policypak.png)

Inside the download of the Endpoint Policy Manager preferences and Endpoint Policy Manager Cloud XML examples, you'll see a file named ```ppprefs-shortcut.xml```.

![quickstart_using_policypak_1](/img/product_docs/policypak/policypak/preferences/quickstart_using_policypak_1.png)

Remove the file from the ZIP archive, and put it in a handy place for the deployment step.

The Group Policy Preference item has a simple goal: to place a shortcut for www.PolicyPak.com on the desktop. If you wish to create a Group Policy Preference item from scratch, see the next section.

## Option 2 - Using Microsoft Group Policy Preferences Editor

While you can use any combination of Group Policy Preference items, we strongly recommend that you use the Group Policy Preference item shown below, which puts an icon for www.PolicyPak.com on the desktop.

These are the settings used to make the Group Policy Preference item:

- Name: www.PolicyPak.com
- Target Type: URL
- Location: Desktop
- Target URL: www.PolicyPak.com
- Icon file path: ```%SystemRoot%\system32\SHELL32.dll```
- Icon index: 47

![quickstart_using_policypak_2](/img/product_docs/policypak/policypak/preferences/quickstart_using_policypak_2.png)

When you click __OK__, it will save the data within the Group Policy Object (GPO). However, you can drag and drop a Group Policy Preference item to the desktop or a folder, which makes an XML file. Another way to do this is to right-click either the Endpoint Policy Manager or Endpoint Policy Manager Preferences Manager node, as seen below, and use the Group Policy Preference Export wizard, which will export the Group Policy Preference items from the GPO.

__NOTE:__ The Group Policy Preference Export wizard will only export settings for the User side or Computer side, depending on which side on are on.

![quickstart_using_policypak_3](/img/product_docs/policypak/policypak/preferences/quickstart_using_policypak_3.png)

Keep the Group Policy Preference item file you created handy for the next step.
