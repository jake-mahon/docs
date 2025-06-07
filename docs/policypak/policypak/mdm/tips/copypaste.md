# Copying and Pasting Valid Endpoint Policy Manager Items

When using the Endpoint Policy Manager Exporter, you can select Add Existing Files to bring in files to an MSI. In addition to this option, you can also select Paste XMLdata from Clipboard instead of first exporting items as files from the MMC editor. You can see the general steps for this option below.

![policypak_exporter_tips_tricks_3](/static/img/product_docs/policypak/policypak/mdm/tips/policypak_exporter_tips_tricks_3.png)

__Step 1 –__ As for Group Policy Preference item content, you can right-click the content inside the Group Policy Preferences editor, and select Display XML. As shown below, the first line must always be ```<?xml version="1.0" encoding="utf-8"?>```

__Step 2 –__ Click to the end of that line, and then click Enter.

__Step 3 –__ Paste your Group Policy Preference item, omitting the initial dash that Internet Explorer includes in order to make it easier to read.

__Step 4 –__ Click __Validate__. If successful, the __Validate__ button will change to Save.

![policypak_exporter_tips_tricks_4](/static/img/product_docs/policypak/policypak/mdm/tips/policypak_exporter_tips_tricks_4.png)
