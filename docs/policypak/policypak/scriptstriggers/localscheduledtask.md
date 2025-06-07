# How to Create a Local Scheduled Task to Reboot a PC every day at 9 AM

__Step 1 –__ Create a Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts policy on the computer side.

![879_1_image-20220916231626-1](/static/img/product_docs/policypak/policypak/scriptstriggers/879_1_image-20220916231626-1.png)

__Step 2 –__ When creating the Policy choose the option to Apply this policy to computer (default).

![879_2_image-20220916231626-2](/static/img/product_docs/policypak/policypak/scriptstriggers/879_2_image-20220916231626-2.png)

__Step 3 –__ Choose PowerShell from the dropdown.

![879_3_image-20220916231626-3](/static/img/product_docs/policypak/policypak/scriptstriggers/879_3_image-20220916231626-3.png)

__Step 4 –__ Then paste in the following script to the text field.

```
# Create task action  
$taskAction = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument 'Restart-Computer -Force'  
# Create a trigger (Daily at 9 AM)  
$taskTrigger = New-ScheduledTaskTrigger -Daily -At 9am  
# The user to run the task  
$taskUser = New-ScheduledTaskPrincipal -UserID "NT AUTHORITY\SYSTEM" -LogonType ServiceAccount -RunLevel Highest  
$settings = New-ScheduledTaskSettingsSet -MultipleInstances Parallel  
# The name of the scheduled task.  
$taskName = "Daily 9AM Reboot"  
# Describe the scheduled task.  
$description = "Forcibly reboot the computer at 9 AM Daily"  
# Register the scheduled task  
Register-ScheduledTask -TaskName $taskName -Action $taskAction -Trigger $taskTrigger -Settings $settings -Principal $taskUser -Description $description
```

Your policy should look similar to the one below:

![879_4_image-20220916231626-4_950x517](/static/img/product_docs/policypak/policypak/scriptstriggers/879_4_image-20220916231626-4_950x517.png)

__Step 5 –__ Skip the on revert action screen by clicking next.

![879_5_image-20220916231626-5](/static/img/product_docs/policypak/policypak/scriptstriggers/879_5_image-20220916231626-5.png)

__Step 6 –__ At the Specify process mode screen choose "Once or when forced" and then click next to continue.

![879_6_image-20220916231626-6](/static/img/product_docs/policypak/policypak/scriptstriggers/879_6_image-20220916231626-6.png)

__Step 7 –__ You're done, lastly, test your policy to ensure it runs as expected.

__NOTE:__  This policy will create a local scheduled task that will reboot the PC daily at 9 AM even if no one is logged into the PC.
