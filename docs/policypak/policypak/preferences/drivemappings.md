# How to deliver network drive mappings using Group Policy Preferences on the computer side

Normally, when you configure network drive mappings using Group Policy Preferences, this is done on the user side since there is no Drive Maps option on the computer side.

![106_1_img-1](/static/img/product_docs/policypak/policypak/preferences/106_1_img-1.png)

However, there is a way to deliver network drive mappings on the computer side using Group Policy Preferences.

__Step 1 –__ Launch the Microsoft Group Policy Management Console (GPMC) as a user with the necessary rights to create and link GPOs at the OU or Domain level.

__Step 2 –__ Create a new GPO and link it at the Computer OU Level, or Domain level, depending on which computers need to receive these drive mappings.

__Step 3 –__ Edit t the policy and expand``` User Configuration > Preferences > Windows Settings > Drive Maps```.

__Step 4 –__ Right click on Drive Maps and choose ```New > Mapped Drive```

![106_2_img-2](/static/img/product_docs/policypak/policypak/preferences/106_2_img-2.png)

__Step 5 –__ Create the new drive mapping policy as you would normally, but with one difference: be sure to check __Run in logged-on user's security context (user policy option)__ under the Common tab.

![106_3_img-3](/static/img/product_docs/policypak/policypak/preferences/106_3_img-3.png)

__Step 6 –__ Once you have everything configured correctly and the policy item is saved, export the policy item to the desktop. You can just drag it to the desktop.

![106_4_img-4](/static/img/product_docs/policypak/policypak/preferences/106_4_img-4.png)

__Step 7 –__ Once you have successfully exported the policy file to the desktop, go ahead and delete the drive maps policy item under ```User Configuration > Preferences > Windows Settings > Drive Maps```.

![106_5_img-5](/static/img/product_docs/policypak/policypak/preferences/106_5_img-5.png)

__Step 8 –__ Now copy the drive map policy (```H_.xml```) from your desktop to a server share that is accessible by all users, who should all have a minimum of READ access to this share.

![106_6_img-6](/static/img/product_docs/policypak/policypak/preferences/106_6_img-6.png)

__Step 9 –__ Expand ```Computer Configuration > Preferences > Windows Settings > Files ```

![106_7_img-7](/static/img/product_docs/policypak/policypak/preferences/106_7_img-7.png)

__Step 10 –__ Right-click on __Files__ and choose New File, then configure it using the image below as a guide.

- Source = UNC path to the file on the server share (i.e.``` \\Server\share\H_.xml```)
- Destination = ```%ProgramData%\PolicyPak\XmlData\Computer\H_.XML```

  ![106_8_img-8](/static/img/product_docs/policypak/policypak/preferences/106_8_img-8.png)

__Step 11 –__ Run ```gpupdate``` on one of the computers that live in an OU or domain where you applied the policy, to verify that they get the drive mapping.

![106_9_img-9](/static/img/product_docs/policypak/policypak/preferences/106_9_img-9.png)
