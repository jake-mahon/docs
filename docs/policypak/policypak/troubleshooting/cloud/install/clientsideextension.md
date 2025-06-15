# When rolling out Endpoint Policy Manager Cloud, the Client Side Extension does not get installed with the Cloud Client on initial rollout

When rolling out a new installation of the Netwrix Endpoint Policy Manager (formerly PolicyPak) cloud endpoint software, the CSE may not get installed following the manual installation of the Cloud Client software. Any further attempts to re-install the Cloud Client have the same results.

## Reason

One reason for this issue is a corrupt, incomplete, or otherwise malformed MSI of the Client Side Extension (CSE) cached on the client system. The file being present prevents it from re-downloading. The file being malformed prevents it from installing.

## Verification

Review cached CSE installation file

__Step 1 –__ In Windows Explorer, browse to folder "```C:\ProgramData\PolicyPak\Downloaded Installations\PolicyPak ClientSide Extension\xx.xx.xxxx"``` (where xx.xx.xxxx represents the version of CSE being installed)

__Step 2 –__ Compare size of file "Endpoint Policy Manager ClientSide Extension, xx.xx.xxxx.msi" to the same file on other computers

__NOTE:__ The Install```*.log``` file will only be approximately 6 KB instead of Usual 900+ KB

- There will sometimes be multiple logs files for each attempt

![608_1_image-20201029193618-1](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/cloud/install/608_1_image-20201029193618-1.webp)

## Resolution

To resolve this scenario:

### Option 1:

Delete the malformed file and re-run the installation

__Step 1 –__ Delete the malformed MSI ```(C:\ProgramData\PolicyPak\Downloaded Installations\PolicyPak ClientSide Extension\xx.xx.xxxx\ PolicyPak Client-Side Extension, xx.xx.xxxx.msi"```

__Step 2 –__ Uninstall the "Endpoint Policy Manager Cloud Client"

![608_2_image-20201029193618-2](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/cloud/install/608_2_image-20201029193618-2.webp)

__Step 3 –__ Rerun the installation of the Cloud Client

__Step 4 –__ Verify both Cloud Client and Client Side Extension are installed

### Option 2:

Manually install the Client Side Extension.

Download the CSE from the Endpoint Policy Manager Portal

__Step 1 –__ Browse to the portal and sign in

- [https://portal.policypak.com](https://portal.policypak.com)

__Step 2 –__ On the Home page, download the "Latest Bits" in the form of either a ZIP or ISO file

![608_3_image-20201029193618-3](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/cloud/install/608_3_image-20201029193618-3.webp)

- Follow the prompts to complete the download.

__Step 3 –__ Once downloaded, open or mount the file, open the "Client Side Extension (CSE)" folder and copy out the "Endpoint Policy Manager Client Side Extension x??.msi"

__Step 4 –__ Run the new MSI to install the CSE

__NOTE:__ Can be run from anywhere, does not have to be in the cached install folder above
