# How to use Scripts Manager Event Log Triggers to Map Network Drives when a VPN is Connected

___RECOMMENDED:___  Netwrix Endpoint Policy Manager (formerly PolicyPak) version 2791 or higher must be used.

__Step 1 –__ Create a new Scripts & Triggers policy on the computer side, choose switched mode like in the screenshot below.

![848_1_image-20210801230156-1](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_1_image-20210801230156-1.png)

__Step 2 –__ At the "On apply action" screen select "PowerShell script" from the dropdown, then in the main text window, paste in the script below, check the option "Run script as user, then click "Next".

```
# Set Launch Folder Windows in a Separate Process to Enabled  
if((Test-Path -LiteralPath "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced") -ne $true) {  
    New-Item "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -force -ea SilentlyContinue  
};  
New-ItemProperty -LiteralPath 'HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Name 'SeparateProcess' -Value 1 -PropertyType DWord -Force -ea SilentlyContinue;
```

![848_2_image-20210801230156-2](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_2_image-20210424015614-2.png)

__Step 3 –__ Then click "Next" at the "On revert action" screen to skip that screen, then at the "Specify process mode" screen choose the "Once" option.

![848_3_image-20210801230156-3](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_3_image-20210424015614-3.png)

__Step 4 –__ At the "Policy settings" screen give the policy a descriptive name then click "Finish".

![848_4_image-20210801230156-4](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_4_image-20210424015614-4.png)

__Step 5 –__ Now create another policy (Map drives when VPN Connect Event ID is Detected) using Scripts & Triggers on the computer side, choose switched-mode like in the screenshot below.

![848_5_image-20210801230156-5](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_1_image-20210801230156-1.png)

__Step 6 –__ At the "On apply action" screen select "PowerShell script" from the dropdown, then in the main text window, paste in the script below then change the drive mappings to match the settings needed for your environment, check the option "Run script as user, then click "Next".

```
# Wait for DNS to settle after VPN connects  
Start-Sleep -s 10  
# Map G Drive  
if (-not(get-psdrive -name "G" -ErrorAction SilentlyContinue)) {  
    New-PSDrive -name "G" -PSProvider FileSystem -Root \\Server\share1 -Persist  
}  
# Map H Drive  
if (-not(get-psdrive -name "H" -ErrorAction SilentlyContinue)) {  
    New-PSDrive -name "H" -PSProvider FileSystem -Root \\Server\Share2 -Persist  
}
```

![848_6_image-20210801230156-6](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_6_image-20210424015614-6.png)

__Step 7 –__ Click "Next" at the "On revert action" screen to skip that screen, then at the "Specify process mode" screen choose the "On trigger" option, then choose "Event log" from the drop down before clicking "Next" to continue.

![848_7_image-20210801230156-7](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_7_image-20210801230156-7.png)

__Step 8 –__ Before continuing Connect to the VPN then open the Windows application log and locate the successful VPN Connection event, take note of the Level, the source, and the Event ID number for that event as you will need them in the next step.

For this example I used an Azure Point-to-Site VPN connection, and the successful connection Event ID number is 20225

![848_8_image-20210801230156-8](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_8_image-20210801230156-8.png)

__Step 9 –__ Now continue onward from Step 7 above using the information you gathered in Step 8, ensure your Trigger settings look similar to mine below, before clicking "Next".

![848_9_image-20210801230156-9](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_9_image-20210801230156-9.png)

__Step 10 –__ At the next Trigger settings screen click "Next" without editing the query.

![848_10_image-20210801230156-10](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_10_image-20210801230156-10.png)

__Step 11 –__ 
At the Policy Settings screen provide a descriptive name for the policy and then click "Finish".

![848_11_image-20210801230156-11](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_11_image-20210801230156-11.png)

__NOTE:__  You should have two policies now:

![848_12_image-20210801230156-12](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_12_image-20210801230156-12.png)

__Step 12 –__ Lastly, test the policy by logging into a computer, (or run gpupdate if already logged in) and then connect to a VPN as a user who should receive the policy. If everything
works you should see the network drives show up in File Explorer

![848_13_image-20210801230156-13](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_11_image-20210424015614-11.png)

__Step 13 –__ 
Optionally, create a new Scripts and Triggers policy that disconnects the drives when the VPN disconnects by using the script below and also changing the trigger to "Event log", and configuring the correct settings for the successful VPN disconnect event. Please see below for a VPN disconnect example using Azure Point-to-Site VPN.

![848_14_image-20210801230156-14](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_12_image-20210424015614-12.png)

![848_15_image-20210801230156-15](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_7_image-20210801230156-7.png)

VPN disconnect example using Azure Point-to-Site VPN

![848_16_image-20210801230156-16](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_16_image-20210801230156-16.png)

![848_17_image-20210801230156-17](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/848_17_image-20210801230156-17.png)

__NOTE:__ "On trigger" does not work with Revert action script which is why you need to create a new policy to disconnect the drives.
