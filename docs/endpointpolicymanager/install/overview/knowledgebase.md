# Knowledge Base

See the following Knowledge Base articles for all things installation and upkeep.

## Method GPO: Initial Install

- [Does Endpoint Policy Manager admin console need to be installed on Domain Controller (DC)?](/docs/endpointpolicymanager/installation-and-deployment/adminconsole.md)
- [I installed the Admin Console MSI, but I don't see the Endpoint Policy Manager node when I go to edit a GPO. Why?](/docs/endpointpolicymanager/installation-and-deployment/node.md)
- [What are the two ways that can I install the GPMC on my Admin Station (Server or Windows 10) machine?](/docs/endpointpolicymanager/installation-and-deployment/methods.md)
- [When I edit the GPO, the settings don't seem to "stick"](/docs/endpointpolicymanager/troubleshooting/savesettings.md)

## Method SCCM: Initial Install (or other systems)

- [How do I deploy the Endpoint Policy Manager CSE via SCCM (or other systems management system) ?](/docs/endpointpolicymanager/installation-and-deployment/sccm.md)

## Method PDQ Deploy (recommended)

- [Managing Group Policy using Endpoint Policy Manager and PDQ Deploy](/docs/endpointpolicymanager/integrations/third-party-integrations/pdqdeploy.md)

## AntiVirus and other System Software

- [I want to use Endpoint Policy Managerwith Citrix App Layering (aka Unidesk). At which layer should I implement the Endpoint Policy Manager Client Side Extension?](/docs/endpointpolicymanager/installation-and-deployment/citrixapplayering.md)
- [How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/installation-and-deployment/antivirus.md)
- [Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?](/docs/endpointpolicymanager/troubleshooting/install/digitallysigneddriver.md)
- [Why won't the Endpoint Policy Manager services start, with an error like (or similar to) "Verify that you have sufficient privileges to start system services."?](/docs/endpointpolicymanager/troubleshooting/error/install/sufficientprivileges.md)

## Performance Related Questions

- [I see many instances of the Endpoint Policy Manager Watcher (ppWatcher) service running on my clients, is that normal? And how can I check memory usage?](/docs/endpointpolicymanager/troubleshooting/watcherservicememoryusage.md)
- [How would I verify if Endpoint Policy Manager Client Side Extension is / is not causing high or CPU disk slowdowns?](/docs/endpointpolicymanager/troubleshooting/cpuslowdown.md)

## Install and Upgrade Troubleshooting

- [The CSE won't uninstall or allow in-place upgrade. What should I do?](/docs/endpointpolicymanager/troubleshooting/install/uninstall.md)
- [How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?](/docs/endpointpolicymanager/troubleshooting/slowlogins.md)
- [What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)](/docs/endpointpolicymanager/troubleshooting/install/newversionissues.md)
- [How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?](/docs/endpointpolicymanager/troubleshooting/computersidersop.md)
- [I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?](/docs/endpointpolicymanager/troubleshooting/error/gpsvcfailed.md)
- [The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed](/docs/endpointpolicymanager/troubleshooting/assignmentremovalfailed.md)

## Misc Installation questions

- [What if I accidentally install the 32 bit version of Endpoint Policy Manager on a 64 bit machine or vice versa?](/docs/endpointpolicymanager/troubleshooting/bitversion.md)
- [Why does Endpoint Policy Manager require a CSE / client installation piece? I want to do it all using what Microsoft ships in the box but don't want to install anything else.](/docs/endpointpolicymanager/installation-and-deployment/clientsideextension/why.md)
- [How can I fix Outlook To-Do bar flashing when GP or Endpoint Policy Manager does a background refresh?](/docs/endpointpolicymanager/troubleshooting/outlook.md)
- [What must I install on Windows 7 to make Endpoint Policy Manager work as expected?](/docs/endpointpolicymanager/platform-specific/windows-requirements/windows7.md)

## Best Practices / Keeping up to Date with releases

- [Using Rings to Test and Update the Endpoint Policy Manager Client-Side Extension and/or Cloud Client (And How to Stay Supported)](/docs/endpointpolicymanager/installation-and-deployment/rings.md)
- [What are the Endpoint Policy Manager Build and Version numbers?](/docs/endpointpolicymanager/troubleshooting/versions.md)
- [When should I upgrade or not upgrade the Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/installation-and-deployment/upgrade/frequency.md)
- [How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?](/docs/endpointpolicymanager/installation-and-deployment/update/frequency.md)
- [How to trigger an update of the Endpoint Policy ManagerClient Side Extension and Cloud Client via command line using Endpoint Policy Manager Cloud versus Group Policy (OnPrem) Edition](/docs/endpointpolicymanager/installation-and-deployment/update/commandline.md)

## Updating Endpoint Policy Manager with Active Directory / GPOs

- [How can I roll out the latest Endpoint Policy Manager CSE with Active Directory in a controlled manner using Rings ?](/docs/endpointpolicymanager/installation-and-deployment/ringsupgrade.md)
- [CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)](/docs/endpointpolicymanager/installation-and-deployment/update/config.md)
- [How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?](/docs/endpointpolicymanager/troubleshooting/powershell/datadirectives.md)

## Backup and Restore

- [Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?](/docs/endpointpolicymanager/troubleshooting/restoredetails.md)

## Uninstallation or Rollback of Endpoint Policy Manager

- [How do I uninstall Endpoint Policy Manager?](/docs/endpointpolicymanager/installation-and-deployment/uninstall.md)
- [How to Rollback CSE version from newer to older using PowerShell](/docs/endpointpolicymanager/troubleshooting/clientsideextension/rollback.md)
- [How can I uninstall the Least Privilege Manager client for MacOS?](/docs/endpointpolicymanager/troubleshooting/leastprivilege/uninstall.md)
