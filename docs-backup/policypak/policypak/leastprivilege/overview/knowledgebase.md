# Knowledge Base

See the following Knowledge Base articles for Least Privilege Manager.

## Licensing

- [What is the difference between Endpoint Privilege Manager Standard and Complete licenses?](../license.md)

## Tips (How does PPLPM work?)

- [Which account does an elevated process run within?](../accountelevatedprocess.md)
- [Does Endpoint Privilege Manager block Macro attacks?](../macroattacks.md)
- [How secure is it just to use the digital signature? Can someone spoof a digital signature?](../digitalsignature.md)
- [Is Endpoint Privilege Manager compatible alongside an existing installation of Microsoft Applocker?](../../integration/applocker.md)
- [How can I change the behavior of "Run as Admin" with Endpoint Privilege Manager and how has it changed from previous versions?](../runasadmin.md)

## Tips (Specific Workaround for Apps and Scenarios)

- [How to create an LPM Policy for (SynTPEnh.exe) Synaptics Pointing Device Driver](../synapticspointingdevicedriver.md)
- [Install Windows Fonts for users or Elevate end-users to install fonts themselves](../elevate/installfonts.md)
- [How do I elevate MMC snap ins without granting administrative rights?](../elevate/mmcsnapin.md)
- [How do I use Least Privilege Manager to Elevate .reg files to allow import by standard users](../elevate/registry.md)
- [How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?](../elevate/windowsdefender.md)
- [How do I elevate installers that are classified as Installers but not Applications? Like Ninite, 7z, or Self-Extract?](../elevate/installers.md)
- [Allowing access/edit rights to specific files for standard users](../editrights.md)
- [How to Elevate applications with a .application extension using Least Privilege Manager](../elevate/applicationextension.md)
- [How do I elevate .MSP files such as Adobe Acrobat updates?](../elevate/mspfiles.md)
- [FTK Imager crashes with 'Server Busy' dialog box when "Image Mounting" while running elevated](../../troubleshooting/error/leastprivilege/serverbusy.md)

## Tips (Files, Folders and Dialogs)

- [How can I make all files in a folder, or all files in all recursive folders Elevated, Blocked, or Allow & Log?](../elevate/allfiles.md)

## Tips and SecureRun (TM)

- [How can I allow "Inline commands" blocked by SecureRun when a random path or filename is created each time?](../securerun/allowinlinecommands.md)
- [How do I setup SecureRun when there are so many variables and still ensure my rules work no matter what version of the software I have I installed?](../securerun/setup.md)
- [When Endpoint Policy Manager SecureRun(TM) is turned on, PowerShell won't run. How can I re-enable this?](../securerun/enablepowershell.md)
- [What is the supported list of BLOCKED script types for Endpoint Policy Manager SecureRun™ ?](../securerun/blockedscripttypes.md)
- [How to run WebEx Meeting as regular user when SecureRun is enabled](../securerun/webex.md)
- [How to install and run MYKI Password Manager as regular user when SecureRun is enabled](../securerun/mykipasswordmanager.md)
- [How do I allow a Chrome extension blocked by SecureRun to be installed?](../securerun/chromeextension.md)
- [Least Privilege Manager and SecureRun Implementation Best Practices](../securerun/bestpractices.md)
- [How does the option "Show Admin Approval dialog for untrusted application" in Admin Approval work?](../securerun/adminapprovalwork.md)

## Tips for Admin Approval, Self Elevate, Apply on Demand, SecureCopy and UI Branding

- [Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?](../reduceadminrights.md)
- [I elevated an application, but drag and drop between the elevated and other non-elevated applications isn't working anymore. What can I try?](../elevate/dragdrop.md)
- [How do I use the Filter section in Endpoint Privilege Manager ?](../policyeditor/scope.md)
- [How do I install an Active X control if it is not digitally signed?](../policyeditor/activexcontrol.md)
- [How to Defend against malicious PowerShell attacks (DLLs)?](../powershell/maliciousattacks.md)
- [How can I integrate Endpoint Privilege Manager and Servicenow (or any other help desk) via email?](../../integration/servicenow.md)
- [Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers](../policyeditor/selfelevation.md)
- [How does the "Show Pop-Up" message checkbox work along side "Force user re-authenticate" and "Justification text required" checkboxes?](../policyeditor/optionsshowpopupmessage.md)
- [How does custom menu item text work after builds 23.8 and later?](../custommenuitemtext.md)

## Tips (Old, use only if asked)

- [Endpoint Privilege Manager: How do I elevate single line commands (second batch file method)?](../elevate/singlelinecommands.md)
- [How to elevate Print driver installation using Endpoint Privilege Manager? (alternate method)](../elevate/printerdriverinstall.md)

## Troubleshooting

- [What log can help me determine why an application (MSI, etc.) was ALLOWED, ELEVATED or BLOCKED?](../../troubleshooting/log/leastprivilege/determinewhy.md)
- [Why doesn't Endpoint Privilege Manager work Windows 7 + SHA256 signed.JS and .VBS files ?](../../troubleshooting/leastprivilege/supportedenvironments.md)
- [I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?](../../troubleshooting/leastprivilege/securerun/correctsyntax.md)
- [If multiple Endpoint Privilege Manager rules would apply, which rule takes precedence?](../../troubleshooting/leastprivilege/ruleprecedence.md)
- [How are DRIVE MAPS and UNC paths supported in Endpoint Privilege Manager?](../../troubleshooting/leastprivilege/drivemaps.md)
- [Why does Endpoint Policy Manager SecureRun block "inline commands" and what can I do to overcome or revert the behavior ?](../../troubleshooting/leastprivilege/securerun/inlinecommands.md)
- [How are wildcards supported when used with Path and Command-line arguments in Least Privilege Manager?](../../troubleshooting/leastprivilege/wildcards.md)
- [How do I overcome OneDrive block prompts when SecureRun is on?](../../troubleshooting/leastprivilege/securerun/onedrive.md)
- [Why is my File Info Deny rule for SQL MGMT Studio version 14.x and lower not working?](../../troubleshooting/leastprivilege/fileinfodeny/ssms.md)
- [Why is my File Info Deny rule for WinSCP Setup 17.x and lower not working?](../../troubleshooting/leastprivilege/fileinfodeny/winscp.md)
- [How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx, xlsx, etc.?](../../troubleshooting/leastprivilege/explorercrash.md)
- [Error message The element 'emailSettings' in namespace "…AdminApproval" has incomplete content encountered when editing Admin Approval policy](../../troubleshooting/error/leastprivilege/emailsettings.md)
- [How-to troubleshoot LPM rules for Kaseya Agent Service?](../../troubleshooting/leastprivilege/kaseyaagentservice.md)

## Eventing

- [How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding.](../windowseventforwarding.md)
- [How to use Netwrix Auditor to Report on Endpoint Policy Manager events](../../integration/auditor/reports.md)

## Netwrix Privilege Secure for Access Management Integration

- [How to Resolve Could not establish trust relationship for the SSL or TLS Secure Channel error message](../../troubleshooting/error/leastprivilege/establishtrust.md)
- [How does the Netwrix Privilege Secure MMC UI relate to the Endpoint Policy Manager MMC UI?](../../integration/privilegesecure/mmc.md)
- [How can I create Endpoint Policy ManagerLeast Privilege Manager policies with Netwrix Privilege Secure (even when the Endpoint Policy Manager Client Side Extension is unlicensed?)](../../integration/createpolicies.md)
