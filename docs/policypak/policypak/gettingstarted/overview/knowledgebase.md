# Knowledge Base

The following topics can help you getting started with Endpoint Policy Manager (Misc).

## Getting Started

- [Endpoint Policy Manager Support and Resources](../fastest.md)
- [Does Endpoint Policy Manager have a Quick Start Guide?](../quickstart/guide.md)
- [Does Endpoint Policy Manager have an Installation Quick Start Guide?](../quickstart/guideinstall.md)
- [How has Endpoint Policy Manager Evolved over the years?](../history.md)
- [How does Endpoint Policy Manager support (and not support) Windows 11?](../../requirements/support/windows11.md)
- [How does Endpoint Policy Manager support (and not support) Windows 7?](../../requirements/support/windows7.md)
- [Endpoint Policy Manager ARM Support Supportability Statement](../../requirements/support/arm.md)
- [How does Endpoint Policy Managerhandle right-click menus in Windows 11 / Why does "Copy with Endpoint Policy Manager SecureCopy™" always show in Windows 11?](../rightclick.md)
- [How must I prepare for my Endpoint Policy Manager QuickStart / Onboarding?](../prepare.md)

## Tips, Tricks, and FAQs

- [How can use Item Level Targeting to apply a Group Policy Preferences or Endpoint Policy Manager item when the user is not a member of Domain Admins and also is not a member of the local Admin group?](../../itemleveltargeting/applypreferences.md)
- [Is the Security Group Item Level Targeting (ILT) option recursive or not?](../../itemleveltargeting/securitygroup.md)
- [Which Endpoint Policy Manager emails can / can't I opt out of ?](../../tips/emailoptout.md)
- [How can I use Item Level Targeting to specify a specific Windows 10 build and/or LTSC/LTSB?](../../itemleveltargeting/windows11.md)
- [How can I fix MMC display problems when my admin console uses high DPI?](../../tips/mmcdisplay.md)
- [How do I make an Item Level Target for Server 2016 or Server 2019 (on-prem, MDM or Endpoint Policy Manager Cloud) ?](../../itemleveltargeting/windowsserver2019.md)
- [How can I use Item Level Targeting to query Azure AD Groups?](../../itemleveltargeting/entraidgroups.md)
- [Can I use both Endpoint Policy ManagerOn Premise mode and Endpoint Policy Manager Cloud simultaneously? Do they clash?](../../tips/onpremisecloud.md)
- [How does Endpoint Policy Manager perform Folder Redirection or OneDrive Known Folder Move (KFM) with Endpoint Policy Manager Group Policy, Endpoint Policy ManagerMDM or Endpoint Policy Manager Cloud?](../../tips/folderredirection.md)
- [Can I embed the Endpoint Policy ManagerClient Side Extension and/or Endpoint Policy Manager Cloud client into a master image for VDI, MDT, Ghost, Citrix, etc?](../../tips/embedclient.md)
- [Which components within the Endpoint Policy Manager product family will work with what operating system?](../../requirements/support/operatingsystem.md)
- [How do I get Azure AD SIDs and use them with Item Level Targeting?](../../itemleveltargeting/entraidsids.md)
- [How does Endpoint Policy Manager handle STIGs and/or CIS Benchmarks and/or other 3rd party Advice?](../../tips/thirdpartyadvice.md)
- [Are the services installed with Endpoint Policy Manager required? Can I disable them if I'm only using a single component?](../../tips/services.md)
- [Which Windows Client and Server are currently supported by Endpoint Policy Manager?](../../requirements/support/windows.md)
- [Windows 10 (and Server) Event Logs to Azure Log Analytics Walkthru](../../tips/eventlogs.md)
- [How can I use Item Level Targeting to specify Windows Virtual Desktops (WVD) Multi-session Windows?](../../itemleveltargeting/virtualdesktops.md)
- [List of Endpoint Policy Manager Event Categories and IDs](../../tips/eventcategories.md)
- [How do I make an Item Level Target for Windows 10 or Windows 11 endpoints](../../itemleveltargeting/windowsendpoint.md)

## Portal Questions

- [How do I create a Secondary (or Accounting) contact within the Portal to enable another person to participate in Endpoint Policy Manager (including downloads, updates, etc.)?](../../cloud/adduser.md)
- [Two-Factor Authentication in the Endpoint Policy Manager Portal](../../cloud/twofactorauthentication.md)
- [Why can't I opt out of Emails when I'm an Endpoint Policy Manager Customer?](../../cloud/emailoptout.md)
- [How can I use a checksum to validate the Endpoint Policy Manager download?](../../cloud/cheksum.md)
- [Portal login troubleshooting](../../troubleshooting/cloud/login.md)
- [Changing a portal users information](../../cloud/profileupdate.md)

## Troubleshooting (General)

- [What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](../../troubleshooting/fastsupport.md)
- [Why does my mail anti-virus service claim that the Endpoint Policy Manager download ISO or ZIP has a virus?](../../troubleshooting/antivirus.md)
- [During CSE installation on a VM the following message is displayed indicating a reboot will be needed](../../troubleshooting/install/clientsideextension.md)
- [What is the processing order of all policies and how are conflicts resolved (and how can I see the final RsOP) of those policies (between GPO, Cloud, XML, etc)?](../../troubleshooting/conflictresolved.md)
- [Why do I get ">Endpoint Policy ManagerBrowser Router couldn't connect to Endpoint Policy Manager extension service. Please contact support"?](../../troubleshooting/browserrouter.md)
- [How do I submit a process dump (PROCDUMP) and Process Monitor (PROCMON) capture of a hanging process?](../../troubleshooting/hangingprocess.md)
- [How do I manually collect logs if PPLOGS as User or Admin does not launch?](../../troubleshooting/log/manual.md)
- [How do I ensure that settings will revert when the policy no longer applies (by Group Policy, File, or Endpoint Policy Manager Cloud)?](../../troubleshooting/settingsrevert.md)
- [What are the services installed by Endpoint Policy Manager?](../../install/services.md)
- [I see many instances of the Endpoint Policy Manager Watcher service running on my clients, is that normal?](../../troubleshooting/watcherservice.md)
- [What CSEs are contained within Endpoint Policy Manager, what are their CSE GUIDs, and in what release did they appear?](../../install/clientsideextension/guids.md)
- [How do I turn on Debug logging if asked?](../../troubleshooting/log/debug.md)
- [How do I turn on Item Level Targeting (ILT) logging if asked by Endpoint Policy Manager Tech Support?](../../troubleshooting/log/itemleveltargeting.md)
- [How can I increase the depth of what Endpoint Policy Manager reports (minidump files).](../../troubleshooting/log/minidumpfiles.md)
- [What are the advanced CSE troubleshooting registry debugging items?](../../troubleshooting/clientsideextension/registrydebug.md)
- [How can I present a custom dialog (or no dialog) if Browser Router (or the CSE) stops working or crashes?](../../troubleshooting/customdialog.md)
- [Troubleshooting Item Level Targeting (ILT) Evaluations when using the Endpoint Policy Manager ILT Engine](../../troubleshooting/itemleveltargeting/evaluations.md)
- [How to use ProcMon to track changes over time to specific registry keys](../../troubleshooting/procmon.md)
- [How can I use Powershell to automatically say yes to the PPLOGS prompt?](../../troubleshooting/powershell/pplogsprompt.md)
- [Why do I get crashes and blue screens when using Endpoint Policy Manager with Forcepoint DLP?](../../troubleshooting/forepointdlp.md)

## Endpoint Policy Manager & Netwrix Auditor

- [How do I configure the MMC snap-in to open GPOs in Netwrix Auditor?](../../integration/auditor/mmcsnapin.md)
- [How can I minimize or eliminate requests to authenticate to Netwrix Auditor (and what permissions are needed to see Endpoint Policy Manager's Netwrix Auditor Reports?)](../../integration/auditor/permissions.md)

## Non-Domain Joined Troubleshooting

- [Which Endpoint Policy Manager items will not work when the computer is non-domain joined (or the computer is NEVER connected to the Internet)?](../../troubleshooting/nondomain/limitations.md)
- [Which items in Chrome will, and will not work when non-domain joined?](../../troubleshooting/nondomain/chrome.md)
- [How to use Scripts Manager to manually install and enable Endpoint Policy Manager Browser Router for new Edge Chromium?](../../troubleshooting/nondomain/edge.md)

## Endpoint Policy Manager & Change Management Utilities

- [Understanding the Difference Between Endpoint Policy Manager and GPO Change Management Tools](../../troubleshooting/changemanagementtools.md)
