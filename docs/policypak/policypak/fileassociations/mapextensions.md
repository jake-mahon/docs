# Quick Start - Mapping Extensions to Applications

__NOTE:__ For some video overviews of Endpoint Policy Manager File Associations Manager, see the [Endpoint Policy Manager Cloud: Managing File Assocations](/docs/product_docs/policypak/policypak/video/fileassociations/cloud.md) topic for additional information.

Even after applications such as Acrobat, Metro Media Player, and Outlook are installed, those applications are not associated by default with the appropriate file extensions.

Using Endpoint Policy Manager File Associations Manager, we want to make the following maps:

- PDF — Acrobat Reader (MSI version)
- MAILTO — Outlook or Claws Mail (MSI version)
- MP4 — Metro Media Player (UWP version)

Follow these steps to associate the extensions:

__Step 1 –__ Create a GPO and link it to where your computers are. For example, a GPO named PPFAM Policies is linked to the East Sales Computers OU.

__Step 2 –__ In __Computer Configuration__ > __PolicyPak__ > __File Associations Manager__, select __Add__ > __New Policy__.

![about_policypak_file_associations_11](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_11.png)

__Step 3 –__ The Endpoint Policy Manager File Associations Manager policy editor displays, showing the most common configuration. For this Quickstart, make the following selections:

- Filter Type: File Type
- File Extension: PDF
- Action Type: Registered application
- Select Program: Since you typed PDF earlier, clicking __Select Program__ automatically show applications on your machine (the one with the Group Policy editor) that are capable of opening PDF files. Since you already installed Adobe Reader, the program is selectable.

__Step 4 –__ The Associated Program (ProgID) and Application Name are automatically filled in.

![about_policypak_file_associations_12](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_12.png)

__Step 5 –__ When you click __OK__ to save the policy, the entry looks like this:

![about_policypak_file_associations_13](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_13.png)

__Step 6 –__ Create another policy to map MAILTO: to Outlook or Claws Mail (your machine must have Outlook or Claws Mail already installed). Go to __Add__  > __New Policy__. For this policy, choose __Network Protocol__ as the filter type, then type in ```mailto``` (using either lowercase or uppercase) in the __Network Protocol__ field. Click __Select Program__ and locate Claws Mail.

![about_policypak_file_associations_14](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_14.png)

You now have two entries, one for PDF and one for MAILTO:

![about_policypak_file_associations_15](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_15.png)

Now we create a map from MP4 to the UWP version of Metro Media Player. You must have the UWP (Windows Universal/Windows store) version of Metro Media Player on your management station for these steps.

__Step 7 –__ Create a new policy to map all videos to the UWP version of Metro Media Player. To do this, click the __Windows 10 Category__ radio button, and then select __Video Player__. Click __Select Program__, find an instance of Metro Media Player (UWP), and select it. When you do, the Associated Program (Progid) and Application Name are automatically filled in.

![about_policypak_file_associations_16](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_16.png)

Now, you'll have a new entry.

![about_policypak_file_associations_17](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_17.png)

Make sure the endpoint has the same programs installed as the management station and also has the Endpoint Policy Manager CSE installed.

__Step 8 –__ Run ```GPupdate```. Note that when settings are applied using Group Policy they do not take effect until that user logs off and then logs on again. Also note that after ```GPupdate ```is run there is no discernible change in the icons of the newly registered file types.

![about_policypak_file_associations_18](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_18.png)

Once you run ```GPupdate``` you should see the PDF icon change. After this, double-clicking on a PDF should open Acrobat Reader, double-clicking on the MP4 should open Metro Media Player, and opening your Wordpad doc, which has a MAILTO: email address, should open Claws Mail (or Outlook).

![about_policypak_file_associations_19](/static/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_19.png)
