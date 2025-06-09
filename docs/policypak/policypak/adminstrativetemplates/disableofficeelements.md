# How do I disable elements in Office (Outlook, etc.) using Endpoint Policy Manager and ADMX files?

First, download the Microsoft Office ADMX templates and disable any command from any group using their IDs.

The detailed spreadsheet of the commands and corresponding IDs are listed in [Microsoft's Office 2013 Help Files: Office Fluent User Interface Control Identifiers](https://www.microsoft.com/en-us/download/details.aspx?id=36798) excel spreadsheet.

![493_1_image-20201229221751-1](/img/product_docs/policypak/policypak/adminstrativetemplates/493_1_image-20201229221751-1.png)

In this example we are disabling the __Page Color__ command of the Themes group from the __Options__ tab. As such, we are showing only those steps.

![493_2_image-20201229221751-2_950x415](/img/product_docs/policypak/policypak/adminstrativetemplates/493_2_image-20201229221751-2_950x415.png)

Here we can see the __Policy__ ID for the Page Color command.

- Name of the Excel spreadsheet: ```OutlookMailComposeItemControls.xlsx```
- Page Color command: ```PageColorPicker```
- Page Color Policy ID: 13927
- Use Netwrix Endpoint Policy Manager (formerly PolicyPak) Administrative Templates Manager to deliver this ADMX settings to a targeted audience using Item-level Targeting filters
- __User Configuration__ > __Policies__ > __Administrative Templates__ > __Microsoft Outlook 2016__ > __Disable Items in User Interface__ > __Custom__

Follow the steps to disable the command bar buttons and menu items.

![493_3_image-20201229221751-3_950x434](/img/product_docs/policypak/policypak/adminstrativetemplates/493_3_image-20201229221751-3_950x434.png)

__Step 1 –__ Configure the setting inthe Endpoint Policy Manager Administrative Templates Manager.

![493_4_image-20201229221751-4](/img/product_docs/policypak/policypak/adminstrativetemplates/493_4_image-20201229221751-4.png)

__Step 2 –__ Set the command ID in this setting to disable ```any/ Page Color``` command.

__NOTE:__  Use Item Level Targeting filter to control the scope of this setting.

__Step 3 –__ Run ```gpupdate``` at the client end to enable the changes you just made.

__Step 4 –__ Click __OK__ to save the changes made.

The command bar buttons and menu items are now disabled.
