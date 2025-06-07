# How to silently install Firefox ESR, Chrome and WinZip 14.5 using Endpoint Policy Scripts Manager

Below are examples on how to use PP Scripts Manager to silently install some commonly used applications.  Please feel free to use and tweak the examples given below to suit your needs.

## Section 1: Silently installing latest 64bit version of Firefox Extended Support Release

__Step 1 –__ Create a new GPO and link it to the OU where the computers live that will need to have Firefox ESR installed.

__Step 2 –__ Edit the GPO.

__Step 3 –__ Select "Computer Configuration > Netwrix Endpoint Policy Manager (formerly PolicyPak) > Scripts Manager".

__Step 4 –__ Click the "ADD NEW COLLECTION" button.

__Step 5 –__ Give the collection a descriptive name, (i.e. Install some commonly used applications using PPScripts), then click "OK".

__Step 6 –__ Next, double-click on the collection to open it.

__Step 7 –__ Click the "ADD NEW POLICY" button, then click "Next", then "Next" again keeping the default option.

__Step 8 –__ At the "On apply action" screen select "PowerShell script" from the dropdown.

__Step 9 –__ In the main text window, paste in the script below and then click "Next".

```
#Script starts here  
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force  
# Set Download variables  
$DownloadFolder = "c:\temp\apps"  
$DownloadURL = "https://download.mozilla.org/?product=firefox-esr-latest&os=win64&lang=en-US"  
$LocalDownloadFile = "c:\temp\apps\FFESR.EXE"  
#Create temp folder if not present  
$tempfolder = "C:\temp"  
if (-not (Test-Path $tempfolder -PathType Container))  
{  
New-Item -ItemType directory U $tempfolder  
}  
# Create apps folder and turn on logging  
New-Item -ItemType directory -Path $DownloadFolder  
start-transcript -path "c:\temp\apps\Firefox_install.log" -append  
# Download and install application  
If ((Test-Path $LocalDownloadFile -PathType Leaf) -eq $False)  
{  
Invoke-WebRequest -Uri $DownloadURL -OutFile $LocalDownloadFile  
}  
c:\temp\apps\FFESR.EXE /SILENT MaintenanceService=false  
#Script ends here
```

__Step 10 –__ Then click "Next" again on the "On revert action" screen.

__Step 11 –__ Select the "Once or when forced" option at the "Specify process mode" screen, then click "Next" again.

__Step 12 –__ Give the policy a descriptive name (i.e. Install latest 64bit version of Firefox ESR), then click "Finish.

## Section 2: Silently installing the latest 64bit version of Chrome

__Step 1 –__ Use the same GPO and PPScripts collection from Section 1 above or create a new GPO if so desired by following steps 1-6 in Section one above, then continue with steps below.

__Step 2 –__ Click the "ADD NEW POLICY" button, then click "Next", then "Next" again keeping the default option.

__Step 3 –__ At the "On apply action" screen select "PowerShell script" from the dropdown.

__Step 4 –__ In the main text window, paste in the script below and then click "Next".

```
#Script starts hereSet-ExecutionPolicy-ScopeProcess-ExecutionPolicyBypass-Force  
# Set Download variables  
$DownloadFolder="c:\temp\apps"  
$DownloadURL="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BD32DD7BD-A4C7-9AF4-614A-F3E4D22C99F9%7D%26lang%3Den%26browser%3D3%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/chrome/install/ChromeStandaloneSetup64.exe"  
$LocalDownloadFile="c:\temp\apps\ChromeStandaloneSetup64.exe"  
#Create temp folder if not present  
$tempfolder="C:\temp"  
if (-not (Test-Path$tempfolder-PathTypeContainer) )  
{  
New-Item-ItemTypedirectory-Path$tempfolder  
}  
# Create apps folder and turn on logging  
New-Item-ItemTypedirectory-Path$DownloadFolder  
start-transcript-path"c:\temp\apps\Chrome64_install.log"-append  
# Download and install application  
If ((Test-Path$LocalDownloadFile-PathTypeLeaf) -eq$False)  
{  
(New-Object  Net.WebClient).DownloadFile($DownloadURL, "$LocalDownloadFile")  
}  
c:\temp\apps\ChromeStandaloneSetup64.exe /SILENT /INSTALL  
#Script ends here   

```

__Step 5 –__ Then click "Next" again on the "On revert action" screen.

__Step 6 –__ Select the "Once or when forced" option at the "Specify process mode" screen, then click "Next" again.

__Step 7 –__ Give the policy a descriptive name (i.e. Install latest 64bit version of Chrome Enterprise), then click "Finish.

## Section 3: Silently installing WinZip 14.5 from MSI package

__Step 1 –__ Use the same GPO and PPScripts collection from Section 1 above or create a new GPO if so desired by following steps 1-6 in Section one above, then continue with steps below.

__Step 2 –__ Click the "ADD NEW POLICY" button, then click "Next", then "Next" again keeping the default option.

__Step 3 –__ At the "On apply action" screen select "PowerShell script" from the dropdown.

__Step 4 –__ In the main text window, paste in the script below and then click "Next".

```
#WinZip 14.5 will be coming from = http://download.winzip.com/winzip145.msi   
#Script starts here  
Set-ExecutionPolicy-ScopeProcess-ExecutionPolicyBypass-Force   
# Set Download variables  
$DownloadFolder="c:\temp\apps"  
$DownloadURL="http://download.winzip.com/winzip145.msi"  
$LocalDownloadFile="c:\temp\apps\winzip145.msi"  
#Create temp folder if not present  
$tempfolder="C:\temp"  
if (-not (Test-Path$tempfolder-PathTypeContainer))  
{  
New-Item-ItemTypedirectory-Path$tempfolder  
}   
# Create apps folder and enable logging  
New-Item-ItemTypedirectory-Path$DownloadFolder  
start-transcript-path"c:\temp\apps\Winzip_PS.log"-append   
# Download and install WinZip  
If ((Test-Path$LocalDownloadFile-PathTypeLeaf) -eq$False)  
{  
Invoke-WebRequest-Uri$DownloadURL-OutFile$LocalDownloadFile  
#install WinZip silently and enable verbose logging  
MSIEXEC/ic:\temp\apps\winzip145.msi/qn/L*VC:\temp\apps\winzip_install.log  
}   
#Script ends here
```

__Step 5 –__ Then click "Next" again on the "On revert action" screen.

__Step 6 –__ Select the "Once or when forced" option at the "Specify process mode" screen, then click "Next" again.

__Step 7 –__ Give the policy a descriptive name (i.e. Install WinZip 14.5), then click "Finish.

Lastly, log into a computer that lives in the OU where this GPO is applied and within a couple minutes you should have ALL THREE APPLICATIONS installed. To watch the process as it is happening, and for troubleshooting logs see the ```"C:\Temp\Apps"``` folder on any computer that receives this GPO after ```GPUPDATE ```has run. If there is no Apps folder present as yet you can run ```GPUPDATE /FORCE``` from a CMD prompt to speed up the process. Chrome and Firefox will create a shortcut on the desktop by default but the WinZip 14.5 MSI does not, to verify that WinZip installed correctly you can try to launch WinZip with the following command:``` "C:\Program Files (x86)\WinZip\WINZIP32.EXE"``` from Start > Run or a CMD prompt.
