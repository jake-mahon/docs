# Knowledge Base

See the following Knowledge Base articles for getting started with Cloud.

## Getting Started

- [How do I transition from Endpoint Policy Managerusing Group Policy or SCCM method to Endpoint Policy Manager Cloud](../transition.md)
- [What are the OS requirements for Endpoint Policy Manager Cloud?](../../requirements/cloud.md)
- [When must I use the Endpoint Policy ManagerCloud Client installer versus the on-prem Endpoint Policy Manager CSE?](../../install/cloud/client.md)
- [Can I use an Endpoint Policy Manager Cloud installer and license for domain-joined and non-domain joined machines?](../../install/cloud/clientdomainnondomain.md)
- [Is there an "Active Directory Connector" to map on-prem OUs and Groups to Endpoint Policy Manager Cloud?](../../install/cloud/activedirectory.md)
- [What editors are there in Endpoint Policy Manager Cloud (and when would I need a "Fake DC" to do editing?)](../fakedc.md)
- [What are the ways I can install the Endpoint Policy Manager Cloud Client on Remote Machines?](../../install/cloud/clientremote.md)
- [How can I best install Endpoint Policy Manager Cloud for remote clients over a slow link/internet connection?](../../install/cloud/slowinternet.md)
- [How do I start credit card billing with Endpoint Policy Manager SaaS Edition?](../creditcard.md)

## Cloud Portal Security

- [What data is stored in Endpoint Policy Manager Cloud, and how is that data safely communicated and stored ?](../security/datasafety.md)
- [Endpoint Policy Manager Cloud Portal - Adding new company admins - Quickstart](../add/administrator.md)

## Cloud Licensing

- [How is Endpoint Policy Manager Cloud usage counted and calculated toward my True-Up?](../../license/cloud/usage.md)

## Client Troubleshooting

- [How can I see the result of Endpoint Policy Manager Cloud inside the Group Policy Editors?](../../troubleshooting/cloud/grouppolicyeditors.md)
- [Troubleshoot communication from the Cloud Client and Cloud Service](../../troubleshooting/cloud/servicecommunication.md)
- [How can I see if an Endpoint Policy Manager Cloud joined computer is syncing in the background, even if PPCLOUD /Sync appears to fail?](../../troubleshooting/cloud/syncfail.md)
- [How do I transition from Endpoint Policy ManagerCloud to Endpoint Policy Manager Group Policy Edition?](../../troubleshooting/cloud/transition.md)
- [How must my Proxy Server be configured to allow Endpoint Policy Manager Cloud communication?](../../troubleshooting/cloud/proxyserver.md)
- [How to resolve error message "Could not sync with cloud…" caused by disabling TLS 1.0](../../troubleshooting/error/cloud/sync.md)
- [I always use a proxy and the cloud client cannot seem to make contact with the services (see FAQ Item #3 above first.) What else can I try?](../../troubleshooting/cloud/proxyservices.md)
- [I get the message "At least one security token in the message could not be validated" during PPCloud client installation. How do I work around this?](../../troubleshooting/error/cloud/securitytoken.md)
- [I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?](../../troubleshooting/error/gpsvcfailed.md)
- [I'm using Cisco Anyconnect and all the computers I register via Endpoint Policy Manager Cloud are being overwritten. Why is this and what can I do?](../../troubleshooting/cloud/integration/ciscoanyconnect.md)
- [My cloud client lost it's join to Endpoint Policy Manager Cloud , and a re-install of the cloud MSI I previously downloaded isn't working / re-syncing. What should I do?](../../troubleshooting/cloud/autoupdates.md)
- [Endpoint Policy Manager Cloud Client: Why are computers appearing in WAITING LIST and how can I fix it?](../../troubleshooting/cloud/waitinglist.md)
- [Endpoint Policy Manager Cloud shows "The license certificate has expired". Why is this?](../../troubleshooting/cloud/expired.md)
- [Two-factor Authentication: You're not receiving code for email-based two-factor authentication](../../troubleshooting/cloud/twofactorauthenticationcode.md)
- [What happens if there is an outage on Endpoint Policy Manager Cloud ?](../../troubleshooting/cloud/outage.md)
- [What is the Endpoint Policy Manager Cloud client installation error "The remote certificate is invalid according to the validation procedure."](../../troubleshooting/error/cloud/invalidcertificate.md)
- [When rolling out Endpoint Policy Manager Cloud, the Client Side Extension does not get installed with the Cloud Client on initial rollout](../../troubleshooting/cloud/install/clientsideextension.md)
- [Why do I see duplicate computer entries in Endpoint Policy Manager Cloud (Or, what is Loose, Strict and Advanced Registration)?](../../troubleshooting/cloud/registrationmode.md)
- [The Incorrect (non-matching) version of PPPUPDATE is installed on a PPC endpoint](../../troubleshooting/cloud/versions.md)
- [How to enable verbose MSIEXEC logging for the installation of Endpoint Policy Manager Cloud Client MSI/Client Side Extension MSI?](../../troubleshooting/cloud/log/verbose.md)
- [Understanding and working within Endpoint Policy Manager Clouds Computer registration limit.](../../troubleshooting/cloud/registrationlimit.md)
- [My Endpoint Policy Manager Cloud Client or Client Side Extension isn't completing the installation; How do I fix it?](../../troubleshooting/cloud/install/incomplete.md)

## Cloud Portal Troubleshooting

- [How do I fully reset my Azure AD connection between Azure and Endpoint Policy Manager Cloud to start over?](../../troubleshooting/cloud/entraid.md)

## Mac Integration

- [What are the step by step instructions to install the MacOS Client for Endpoint Policy Manager Cloud manually?](../install/mac/client.md)
- [How to get signature info from pkg installer?](../install/mac/signature.md)
- [Where are log files for the Endpoint Policy Manager MacOS?](../../troubleshooting/cloud/log/mac.md)
- [How to get SHA of the package](../install/mac/sha.md)
- [How to get SigningID of the package?](../install/mac/signingid.md)

## Client Tips, Tricks, and FAQs

- [What are the most common questions about editing policies using the Endpoint Policy ManagerCloud policy editor (instead of using the MMC to upload to Endpoint Policy Manager Cloud?)](../policy/edit.md)
- [How to remove (unlink) all Example policies at once from the All-Built-in Group](../unlink.md)
- [How to use Remote Work Delivery Manager to apply Firewall policies](../remoteworkdeliverymanager.md)
- [If I want to totally stop using Endpoint Policy ManagerCloud on an endpoint, how would I remove the Endpoint Policy Manager Cloud client pieces remotely?](../../install/cloud/removeendpoint.md)
- [How often does the Endpoint Policy Manager cloud client pull down new or updated directives?](../updatefrequency.md)
- [When does Endpoint Policy Managersync to Endpoint Policy Manager Cloud?](../syncfrequency.md)
- [How do I configure Security Settings | Public Key Policies using Endpoint Policy Manager Cloud?](../security/publickeypoliciessettings.md)
- [Printers won't come back once removed by user](../../troubleshooting/cloud/printers.md)
- [Using Targeting Editor in Endpoint Policy Manager Cloud Settings](../targetingeditor.md)
- [How to install the Endpoint Policy Manager Cloud Client for use in an Azure Virtual Desktop image](../../integration/azurevirutaldesktop.md)
- [How to install and configure the PPC Client for a Non-Persistent VDI Image in VMware Horizon](../../integration/vdisolutions.md)
- [How do I deploy the Endpoint Policy Manager Cloud Client via command line silently?](../../install/cloud/clientsilent.md)
- [Are Endpoint Policy Manager Cloud policies processed on User or Computer side (and why do I only sometimes see User or Computer side ILT?)](../policy/type.md)
- [How can I move a computer from one Endpoint Policy Manager Cloud group to another via command line?](../groups.md)
- [How to find which PPCloud Client version & CSE version a registered computer is running from within the Endpoint Policy Manager Cloud portal](../version.md)

## Event Collection

- [How can I keep the same or specify different parameters for Event Collection for child groups? How does a computer behave if a member of multiple groups?](../eventcollection/childgroups.md)
- [ Endpoint Policy Manager Cloud Event Forwarding to Splunk](../eventcollection/splunk.md)
