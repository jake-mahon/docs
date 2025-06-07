# How to use Scripts Manager Triggers to Map Network Drives when a VPN is Connected

## Prerequisites:

- VPN used must be in the list of supported VPNs in the article below.

  [Which VPN Solutions are currently supported for use with Scripts Manager VPN Triggers?](/docs/product_docs/policypak/policypak/requirements/support/scriptstriggers/vpnsolutions.md)

__Step 1 –__ Create a new policy (Set Launch Folder Windows in a Separate Process to Enabled) using Scripts & Triggers on the computer side, choose switched-mode like in the screenshot below.

![639_1_image-20210424015614-1](/static/img/product_docs/policypak/policypak/scriptstriggers/579_1_image-20190918135807-1.png)

__Step 2 –__ At the "On apply action" screen select "PowerShell script" from the dropdown, then in the main text window, paste in the script below, check the option "Run script as user, then click "Next".

```
# Set Launch Folder Windows in a Separate Process to Enabled  
if((Test-Path -LiteralPath "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced") -ne $true) {  
    New-Item "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -force -ea SilentlyContinue   
};  
New-ItemProperty -LiteralPath 'HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Name 'SeparateProcess' -Value 1 -PropertyType DWord -Force -ea SilentlyContinue;   

```

![639_2_image-20210424015614-2](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_2_image-20210424015614-2.png)

__Step 3 –__ Then click "Next" at the "On revert action" screen to skip that screen, then at the "Specify process mode" screen choose the "Once" option.

![639_3_image-20210424015614-3](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_3_image-20210424015614-3.png)

__Step 4 –__ At the "Policy settings" screen give the policy a descriptive name then click "Finish.

![639_4_image-20210424015614-4](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_4_image-20210424015614-4.png)

__Step 5 –__ Now create another policy (Map drives when VPN connects) using Scripts & Triggers on the computer side, choose switched-mode like in the screenshot below.

![639_5_image-20210424015614-5](/static/img/product_docs/policypak/policypak/scriptstriggers/579_1_image-20190918135807-1.png)

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

![639_6_image-20210424015614-6](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_6_image-20210424015614-6.png)

__Step 7 –__ Click "Next" at the "On revert action" screen to skip that screen, then at the "specify process mode" screen choose the "On trigger" option, then choose "VPN connect" from the drop down before clicking "Next" to continue.

![639_7_image-20210424015614-7](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_7_image-20210424015614-7.png)

__Step 8 –__ At the "Trigger settings" screen enter an asterisk (wildcard, etc.) for the server name, then click "Next".

![639_8_image-20210424015614-8](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_8_image-20210424015614-8.png)

__Step 9 –__ At the "Policy settings" screen give the policy a descriptive name then click "Finish.

![639_9_image-20210424015614-9](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_9_image-20210424015614-9.png)

__NOTE:__  You should have two policies now:

![639_10_image-20210424015614-10](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_10_image-20210424015614-10.png)

__Step 10 –__ Lastly, test the policy by logging into a computer, (or run ```gpupdate ```if already logged in) and then connect to a VPN as a user that should receive the policy. If everything works you should see the network drives show up in File Explorer, you may need to click refresh if you had File Explorer already open to update the window contents.

![639_11_image-20210424015614-11](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_11_image-20210424015614-11.png)

__Step 11 –__ Optionally, create a new Scripts and Triggers policy that disconnects the drives when the VPN disconnects by using the script below and also changing the trigger to "VPN disconnect".

![639_12_image-20210424015614-12](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_12_image-20210424015614-12.png)

![639_13_image-20210424015614-13](/static/img/product_docs/policypak/policypak/scriptstriggers/mappeddrives/639_13_image-20210424015614-13.png)

__Step 12 –__ "On trigger" does not work with Revert action script which is why you need to create a new policy to disconnect the drives.
