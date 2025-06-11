# The CSE auto-updater feature appears to not be working. What can I do?

The auto-update feature is described in Appendix A of the Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager guide.

There are some known bugs and workarounds with the auto-updater feature, depending on what build you have installed on client machines already deployed.

In all cases, the goal is to get your endpoints updated to CSE build 721 or later.

Depending on which version you have installed, follow these steps to upgrade:

If you have CSE builds 605-703:

__Step 1 –__ Download the Endpoint Policy Manager bits (721 or later) and locate the files named Endpoint Policy Manager __Client-Side Extension x86.MSI__ and Endpoint Policy Manager __Client-Side Extension x64.msi__.

__Step 2 –__ Copy / rename these files to the names that these build will recognize: Endpoint Policy Manager __CSE Setup x64.MSI__ and Endpoint Policy Manager __CSE Setup x86.msi__.

__Step 3 –__ Place the now-renamed 721-or-later CSE and put in default SYSVOL location ( `\sysvolsysvol<domain name>policiesPolicyPakCSE`). This should force the build 605-703 CSEs to upgrade to version 712 (or later) CSE.

If you have 704-711:

__Step 1 –__ Download the Endpoint Policy Manager bits (721 or later) and locate the file named Endpoint Policy Manager __Client-Side Extension x86.MSI__ and Endpoint Policy Manager __Client-Side Extension x64.msi__.

__Step 2 –__ Copy / rename these files to the names that these build will recognize: Endpoint Policy Manager __Application Manager CSE x86.msi__ and Endpoint Policy Manager __Application Manager CSE x64.msi__.

__Step 3 –__ You must still use the default SYSVOL location ( `\sysvolsysvol<domain name>policiesPolicyPakCSE`). This should force the build 704-708 CSEs to upgrade to the 712 version (or later) CSE.

If you have build 712:

Option 1: Rename the files and use the default update location in SYSVOL

__Step 1 –__ Download the Endpoint Policy Manager bits (721 or later) and locate the file named Endpoint Policy Manager __Client-Side Extension x86.MSI__ and Endpoint Policy Manager __Client-Side Extension x64.msi__.

__Step 2 –__ Copy / rename these files to the names that these build will recognize:Endpoint Policy Manager Application Manager CSE x86.msi and Endpoint Policy Manager Application Manager CSE x64.msi.

__Step 3 –__ File placement: After renaming the file, you must put these renamed files in default SYSVOL location ( `\sysvolsysvol<domain name>policiesPolicyPakCSE`)

Option 2: Use the update.config file and specify the precise filename to use)

__Step 1 –__ Download the Endpoint Policy Manager bits (721 or later) and locate the file named Endpoint Policy Manager __Client-Side Extension x86.MSI__ and Endpoint Policy Manager Client-Side Extension x64.msi.

__Step 2 –__ Don't rename the files.

__Step 3 –__ Place them anywhere you like.

__Step 4 –__ Use the update.config file and specify the precise filename to use (See example below)

Once your clients are at build 721 and later, the auto-updater is then looking for files files named Endpoint Policy Manager __Client-Side Extension x86.MSI__ and Endpoint Policy Manager __Client-Side Extension x64.msi__.

This is an example of and update.config to upgrade using a precise file name:

```
<?xml version="1.0" encoding="UTF-8"?>  
<PolicyPak>  
<CSE>  
<Updates>  
<Enabled>True</Enabled>  
<MsiRoot>\\Server\Share</MsiRoot>  
<CSE32FileName>PolicyPak Client-Side Extension x86.MSI</CSE32FileName>  
<CSE64FileName>PolicyPak Client-Side Extension x64.msi</CSE64FileName>  
</Updates>  
</CSE>  
</PolicyPak>
```
