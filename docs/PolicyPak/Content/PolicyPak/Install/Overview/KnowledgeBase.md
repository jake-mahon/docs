---
sidebar_position: 4230
title: Knowledge Base
---

# Knowledge Base

See the following Knowledge Base articles for all things installation and upkeep.

## Method GPO: Initial Install

* [Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?](../AdminConsole)?")
* [I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?](../Node "I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?")
* [What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?](../Methods) machine?")
* [When I edit the GPO, the settings don't seem to "stick"](../../Troubleshooting/SaveSettings.htm "When I edit the GPO, the settings don't seem to /"stick/"")

## Method SCCM: Initial Install (or other systems)

* [How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?](../SCCM) ?")

## Method PDQ Deploy (recommended)

* [Managing Group Policy using Endpoint Policy Manager and PDQ Deploy](../../Integration/PDQDeploy "Managing Group Policy using Endpoint Policy Manager and PDQ Deploy")

## AntiVirus and other System Software

* [I want to use Endpoint Policy Managerwith Citrix App Layering (aka Unidesk). At which layer should I implement the Endpoint Policy Manager Client Side Extension?](../CitrixAppLayering). At which layer should I implement the Endpoint Policy Manager Client Side Extension?")
* [How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](../AntiVirus "How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?")
* [Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?](../../Troubleshooting/Install/DigitallySignedDriver)?")
* [Why won't the Endpoint Policy Manager services start, with an error like (or similar to) "Verify that you have sufficient privileges to start system services."?](../../Troubleshooting/Error/Install/SufficientPrivileges) \"Verify that you have sufficient privileges to start system services.\"?")

## Performance Related Questions

* [I see many instances of the Endpoint Policy Manager Watcher (ppWatcher) service running on my clients, is that normal? And how can I check memory usage?](../../Troubleshooting/WatcherServiceMemoryUsage) service running on my clients, is that normal? And how can I check memory usage?")
* [How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?](../../Troubleshooting/CPUSlowdown "How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?")

## Install and Upgrade Troubleshooting

* [The CSE won't uninstall or allow in-place upgrade. What should I do?](../../Troubleshooting/Install/Uninstall "The CSE won't uninstall or allow in-place upgrade. What should I do?")
* [How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?](../../Troubleshooting/SlowLogins), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?")
* [What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)](../../Troubleshooting/Install/NewVersionIssues)")
* [How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?](../../Troubleshooting/ComputerSideRsOP "How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?")
* [I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?](../../Troubleshooting/Error/GPSVCFailed.htm "I am getting an error about /"GPSVC failed at sign-in/". This error occurs exactly one time. What does this mean?")
* [The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed](../../Troubleshooting/AssignmentRemovalFailed) from policy failed")

## Misc Installation questions

* [What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?](../../Troubleshooting/BitVersion "What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?")
* [Why does Endpoint Policy Manager require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.](../ClientSideExtension/Why "Why does Endpoint Policy Manager require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.")
* [How can I fix Outlook To-Do bar flashing when GP or Endpoint Policy Manager does a background refresh?](../../Troubleshooting/Outlook "How can I fix Outlook To-Do bar flashing when GP or Endpoint Policy Manager does a background refresh?")
* [What must I install on Windows 7 to make Endpoint Policy Manager work as expected?](../../Requirements/Windows7 "What must I install on Windows 7 to make Endpoint Policy Manager work as expected?")

## Best Practices / Keeping up to Date with releases

* [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](../Rings.htm "Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)")
* [What are the Endpoint Policy Manager Build and Version numbers?](../../Troubleshooting/Versions "What are the Endpoint Policy Manager Build and Version numbers?")
* [When should I upgrade or not upgrade the Endpoint Policy Manager CSE?](../Upgrade/Frequency "When should I upgrade or not upgrade the Endpoint Policy Manager CSE?")
* [How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?](../Update/Frequency "How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?")
* [How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition](../Update/CommandLine) Edition")

## Updating Endpoint Policy Manager with Active Directory / GPOs

* [How can I roll out the latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?](../RingsUpgrade "How can I roll out latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?")
* [CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)](../Update/Config.htm "CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)")
* [How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?](../../Troubleshooting/PowerShell/DataDirectives "How can I use the Endpoint Policy Manager PowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?")

## Backup and Restore

* [Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?](../../Troubleshooting/RestoreDetails "Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?")

## Uninstallation or Rollback of Endpoint Policy Manager

* [How do I uninstall Endpoint Policy Manager?](../Uninstall "How do I uninstall Endpoint Policy Manager?")
* [How to Rollback CSE version from newer to older using PowerShell](../../Troubleshooting/ClientSideExtension/Rollback "How to Rollback CSE version from newer to older using PowerShell")
* [How can I uninstall the Least Privilege Manager client for MacOS?](../../Troubleshooting/LeastPrivilege/Uninstall "How can I uninstall the Least Privilege Manager client for MacOS?")