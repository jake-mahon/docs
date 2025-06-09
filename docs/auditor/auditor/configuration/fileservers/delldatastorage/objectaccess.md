# Configure Audit Object Access Policy

Netwrixrecommends you to avoid linking a GPO to the top level of the domain due to the potential impact. Instead, create a new organization unit for your file servers within your domain and assign GPO there. For detailed instructions on how to create a new OU, refer to the following Microsoft article: [Create a New Organizational Unit](https://technet.microsoft.com/en-us/library/cc771564.aspx).

Follow the steps to configure Audit Object Access Policy:

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools__→ Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: <forest\_name> → Domains__ → __<domain\_name>__, right-click <OU\_name> and select __Create a GPO in this domain and Link it here__.

__Step 3 –__ Enter the name for the new GPO.

__Step 4 –__ Right-click the newly created GPO and select __Edit__.

__Step 5 –__ In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies → Windows Settings → Security Settings → Local Policies → Audit Policy.__

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| Audit Policy | __Audit object access__ | _"Success"_ and _"Failure"_ |

![manualconfig_fileserver_auditpolicy2016](/img/product_docs/auditor/auditor/configuration/fileservers/delldatastorage/manualconfig_fileserver_auditpolicy2016.png)

__Step 6 –__ To update the group policies, execute the following command:

- For Dell Unity:

  svc\_cifssupport <NAS Server Name> -gpo -update

  where ```<NAS Server Name>``` is the name of the target Unity\VNX server.
- For Dell VNX:

  server\_security <NAS Server Name> -update -policy gpo

  where ```<NAS Server Name>``` is the name of the target Unity\VNX server.

  To update group policies for Dell VNX you must be logged in as the 'nasadmin' user.

You can configure advanced audit policy to narrow the range of events tracked and recorded by the product, thus preventing your AuditArchive and the Security event log from overfilling. See the [Configure Security Event Log Maximum Size](/docs/auditor/auditor/configuration/fileservers/delldatastorage/securityeventlog.md) topic for additional information.
