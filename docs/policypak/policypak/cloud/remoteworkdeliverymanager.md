# How to use Remote Work Delivery Manager to apply Firewall policies

__Step 1 –__ Using a Windows 10 computer configure the Firewall Rules as desired.

__Step 2 –__ Use the command below from an elevated CMD window to export the Firewall policy to a (```.wfw```) file.

```
netsh advfirewall export "C:\Temp\firewall-rules.wfw"
```

__Step 3 –__ Upload the firewall policy (```firewall-rules.wfw```) to an external hosting site such as Azure, Amazon S3, or Dropbox. For this example, we are using Dropbox.

__Step 4 –__ Create a public link that points to the file you uploaded; this link should automatically download the file when used in a browser, note if your public link ends in a "0" you may need to change the "0" to "1" for testing in a browser.

![788_1_image-20210309203819-1](/static/img/product_docs/policypak/policypak/cloud/788_1_image-20210309203819-1.png)

__Step 5 –__ From your Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud portal go to the __File Box__ tab, then click __Add external link__. Fill out the following fields with the relevant info for your public link, lastly, click __Validate Link__. If the link is valid you will see a message stating __Link is valid__".

__NOTE:__ Clicking __Validate Link__ also updates the "0" in your public download link to a "1" if needed.

![788_2_image-20210309203819-2](/static/img/product_docs/policypak/policypak/cloud/788_2_image-20210309203819-2.png)            ![788_3_image-20210309203819-3](/static/img/product_docs/policypak/policypak/cloud/788_3_image-20210309203819-3.png)

__Step 6 –__ Once you receive the message __Link is valid__, click __Save__ and move onto the next step of creating the RWDM policy.

__Step 7 –__ Create a new RWDM policy, give the policy a descriptive name, and click the __+Policy__ dropdown then select __+Delivery__ to define the policy.

![788_4_image-20210309203819-4](/static/img/product_docs/policypak/policypak/cloud/788_4_image-20210309203819-4.png)
  
![788_5_image-20210309203819-5](/static/img/product_docs/policypak/policypak/cloud/788_5_image-20210309203819-5.png)

![788_6_image-20210309203819-6](/static/img/product_docs/policypak/policypak/cloud/788_6_image-20210309203819-6.png)

__Step 8 –__ Under the __General__ tab click the folder icon next to __Source File__ to select the external link to the firewall policy file you defined earlier, then fill out the rest of the tab with your desired settings. See the example below and pay special attention to the __Destination File Path__. This value must be the full path, including the destination file name and extension.

![788_7_image-20210309203819-7](/static/img/product_docs/policypak/policypak/cloud/788_7_image-20210309203819-7.png)

__Step 9 –__ Under the __Post-copy actions__ tab choose __Run PowerShell script__ and paste in the following command line before optionally defining a __Revert action__ and saving the policy.

```
netsh advfirewall import "C:\Temp\firewall-rules.wfw"
```

__Step 10 –__ Since it is only one command, you could have alternatively used the __Run Process__ field and pasted in the same single command line.

![788_8_image-20210309203819-8](/static/img/product_docs/policypak/policypak/cloud/788_8_image-20210309203819-8.png)

__Step 11 –__ That's it, you are all done. Now apply the policy to a computer group in PPC and test the policy on a PPC joined machine by running "```ppcloud /sync```" from a CMD prompt. You should see your RWDM policy in the list of applied policies and, after the successful import, your new Firewall rules should be reflected in the Advanced Firewall GUI. See below for examples.

The policy shows as applied after running "```PPCLoud /sync```" from CMD:

![788_9_image-20210309203819-9](/static/img/product_docs/policypak/policypak/cloud/788_9_image-20210309203819-9.png)

Endpoint Firewall settings BEFORE import:

![788_10_image-20210309203819-10](/static/img/product_docs/policypak/policypak/cloud/788_10_image-20210309203819-10.png)

Endpoint Firewall settings AFTER import:

![788_11_image-20210309203819-11](/static/img/product_docs/policypak/policypak/cloud/788_11_image-20210309203819-11.png)
