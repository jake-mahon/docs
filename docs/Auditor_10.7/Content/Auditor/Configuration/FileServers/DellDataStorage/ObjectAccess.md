---
sidebar_position: 1880
title: Configure Audit Object Access Policy
---

Filter: 

* All Files

Submit Search

# Configure Audit Object Access Policy

Netwrixrecommends you to avoid linking a GPO to the top level of the domain due to the potential impact. Instead, create a new organization unit for your file servers within your domain and assign GPO there. For detailed instructions on how to create a new OU, refer to the following Microsoft article: [Create a New Organizational Unit](https://technet.microsoft.com/en-us/library/cc771564.aspx "Create a New Organizational Unit").

Follow the steps to configure Audit Object Access Policy:

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools**→ Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest:  → Domains** → ****, right-click  and select **Create a GPO in this domain and Link it here**.

**Step 3 –** Enter the name for the new GPO.

**Step 4 –** Right-click the newly created GPO and select **Edit**.

**Step 5 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration** node on the left and navigate to **Policies → Windows Settings → Security Settings → Local Policies → Audit Policy.**

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| Audit Policy | **Audit object access** | *"Success"* and *"Failure"* |

![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/ManualConfig/ManualConfig_FileServer_AuditPolicy2016.png)

**Step 6 –** To update the group policies, execute the following command:

* For Dell Unity:

  svc\_cifssupport  -gpo -update

  where `` is the name of the target Unity\VNX server.
* For Dell VNX:

  server\_security  -update -policy gpo

  where `` is the name of the target Unity\VNX server.

  To update group policies for Dell VNX you must be logged in as the 'nasadmin' user.

You can configure advanced audit policy to narrow the range of events tracked and recorded by the product, thus preventing your AuditArchive and the Security event log from overfilling. See the [Configure Security Event Log Maximum Size](SecurityEventLog "Configure Security Event Log Maximum Size") topic for additional information.