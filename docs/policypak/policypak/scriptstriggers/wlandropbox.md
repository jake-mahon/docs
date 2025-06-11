# How to import a WLAN / 802.11 / Wireless profile from Dropbox using Endpoint Policy Scripts Manager

__Step 1 –__ From an elevated PowerShell prompt on a machine where the WiFi profile is setup and working run the following to show all WLAN profiles on the PC:

```netsh wlan show profiles```

__Step 2 –__ Export the profile you need by running the command below - substituting values relevant to your WiFi ```settings/Environment```  
netsh wlan export profile name="Company WiFi " key=clear folder=c:\temp

__NOTE:__  This means the XML file will contain your WiFi password in clear text, this KB uses Dropbox for demonstration purposes only. It is NOT recommended to store your WLAN profile on the internet.

__Step 3 –__ Copy the ```C:\temp\"Company WiFi.xml"``` to Dropbox, then create a Share link. Copy the link address, then replace the [www.dropbox.com](http://www.dropbox.com/) in your shared link with

[dl.dropboxusercontent.com](http://dl.dropboxusercontent.com/) to get a direct download link. Link should look similar to below:

"[https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0](https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0)"

__Step 4 –__ Create the WLAN GPO and apply it to the OU where the Computers live, next use Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager > on the Computer side to create a new policy it

![658_1_img-1](/img/product_docs/policypak/policypak/scriptstriggers/497_1_img-1.webp)

__Step 5 –__ At the "Specify policy target screen be sure to use switched mode for the policy.

![658_2_img-2](/img/product_docs/policypak/policypak/scriptstriggers/497_2_img-2.webp)

__Step 6 –__ For the Apply action use the script below (remember to use the PowerShell Script option from the drop down).

```start-transcript -path "c:\temp\wlan\install.log"```

# Set Download variables

```$WLANDownloadFolder = "c:\temp\wlan"```

#To get a direct download link replace the www.dropbox.com in your shared link with dl.dropboxusercontent.com

```$WLANDownloadURL = "https://dl.dropboxusercontent.com/s/giyj5ei7b3ggyt2/CompanyWiFi.xml?dl=0"$WLANLocalDownloadLocation = "c:\temp\wlan"$WLANLocalDownloadFile = "c:\temp\wlan\CompanyWiFi.xml"```

# Create WLAN folder if not already there

```New-Item -ItemType directory -Path $WLANDownloadFolder ```

```start-transcript -path "c:\temp\wlan\install.log" -appen```

# Download WLAN Profile XML File

```If ((Test-Path $WLANLocalDownloadFile -PathType Leaf) -eq $False) { Invoke-WebRequest -Uri $WLANDownloadURL -OutFile $WLANLocalDownloadFile }```

#Apply WLAN profile

```netsh wlan add profile filename="c:\temp\wlan\CompanyWiFi.xml"```

``` user=all stop-transcript```

__Step 7 –__ Verify that "Run script as user" check box is checked, then click next.

![658_3_img-3_950x601](/img/product_docs/policypak/policypak/scriptstriggers/658_3_img-3_950x601.webp)

__Step 8 –__ For the "Policy process mode configuration" screen specify "Once or when forced", then click save.

![658_4_img-4](/img/product_docs/policypak/policypak/scriptstriggers/658_4_img-4.webp)

__NOTE:__ The same policy will work if applied to user side and user OU as well.

__NOTE:__ If needed you can delete this WLAN profile from a computer using an elevated PowerShell command prompt.

```netsh wlan delete profile name="Company WiFi"```
