---
sidebar_position: 3353
title: Exporting Collections
---

# Exporting Collections

Appendix A: [Using Endpoint Policy Manager with MDM and UEM Tools](../MDM/UEMTools) explains how to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy Manager directive and deliver it using Microsoft Endpoint Manager (SCCM and Intune), KACE, your own MDM service, or Endpoint Policy Manager Cloud. For Endpoint Policy Manager Cloud, you should automatically acquire a license as seen in Figure 50. For Endpoint Policy Manager with an MDM service, the license should come in your MSI license bundle.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_17.png)

Figure 50. Endpoint Policy Manager Cloud customers are licensed for Endpoint Policy Manager Start Screen & Taskbar Manager.

**NOTE:** For a video demonstrating the use of Endpoint Policy Manager Cloud with Endpoint Policy Manager Start Screen & Taskbar Manager, see [Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud](../Video/StartScreenTaskBar/NonDomainJoined).

To export a policy for later use with Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud, right-click the Start Screen Manager node, or a collection, and select "Export Collections as XML," as demonstrated in Figure 51 and Figure 52.

**NOTE:** For a video of exporting Endpoint Policy Manager Start Screen & Taskbar Manager and using Endpoint Policy Manager Exporter with an MDM service, watch [Endpoint Policy Manager and MDM walk before you run](../Video/MDM/TestSample).

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_18.png)

Figure 51. Exporting all collections for later use.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 11 - Start Screen and Taskbar Manager for Windows 10_manual/Collections Policy Settings_19.png)

Figure 52. Exporting the policy for later use.

Note that exported collections or policies maintain any Item-Level Targeting set within them. If you've used items that represent Group Membership in Active Directory, then those items will only function when the machine is domain-joined. For more information about exporting settings and using Endpoint Policy Manager Exporter utility, see Appendix A: [Using Endpoint Policy Manager with MDM and UEM Tools](../MDM/UEMTools).