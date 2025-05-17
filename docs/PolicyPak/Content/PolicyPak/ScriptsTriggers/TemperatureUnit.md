---
sidebar_position: 3320
title: How-to change Temperature Unit from Fahrenheit to Celsius in Microsoft Outlook
  Calendar via Group Policy?
---

# How-to change Temperature Unit from Fahrenheit to Celsius in Microsoft Outlook Calendar via Group Policy?

Pre-requisites (USER ACTION REQUIRE):

**Step 1 –**  Stream\_Weather\_2\_.dat file must be available at: `%userprofile%\AppData\Local\Microsoft\Outlook\RoamCache`

**Step 2 –**  Create it manually by, Clicking on a little drop-down button in the Weather Bar and Add another city. Then change it back to the one you want.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/ScriptsTriggers/438_1_sc-kb-o16.png)

Set Temperature Unit via GPO using PolicyPak Scripts Manager:

You will be able to set Celsius as default temperature (as shown in following screenshot), instead of Fahrenheit.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/ScriptsTriggers/438_2_image-20200626100413-1_950x129.png)

Temperature unit information appears to be controlled via `Stream_Weather_2_.dat` file at this location: `%userprofile%\AppData\Local\Microsoft\Outlook\RoamCache`

We can change the DegreeType to 9-1 to convert it to Celsius. But as filename has a unique GUID for each user so please follow these steps to apply the change via PowerShell Script using PolicyPak Scripts Manager.

**Step 1 –** Right-click and Add Policy for PolicyPak Scripts Manager under User Configuration

![](../../../../../static/images/PolicyPak/Content/Resources/Images/ScriptsTriggers/438_3_image-20200626100413-2.png)

**Step 2 –** Click Next on the Wizard and Select PowerShell script from the drop-down. Insert the following script. Then select both checkboxes, Run script as user and With elevated rights.

```
$Path = "$env:USERPROFILE\AppData\Local\Microsoft\Outlook\RoamCache\*"$FileName   = (Get-Item   -Path   $Path   -Filter   "Stream_Weather*.dat").FullName$Content   =   Get-Content   -path   $FileNameStop-Process   -Name   outlook   -Force -ErrorAction   SilentlyContinueSet-Content   $FileName $content.Replace("DegreeType"" v=""9-1""",   "DegreeType"" v=""9-0""")
```
![](../../../../../static/images/PolicyPak/Content/Resources/Images/ScriptsTriggers/438_4_image-20200626100413-3.png)

**NOTE:**  Outlook has to be closed to make this change, so be sure to add the "stop-process" line before the "set-content".

**Step 3 –** Finally, select an option to apply Once or when forced, and complete the remaining steps on the wizard.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/ScriptsTriggers/438_5_image-20200626100413-4.png)