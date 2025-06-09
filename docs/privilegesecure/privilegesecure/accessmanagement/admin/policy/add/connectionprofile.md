# Add Connection Profile

Follow the steps to add a connection profile to the console. See the [Connection Profiles Page](/docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/connectionprofiles.md) topic for detailed descriptions of the fields.

__Step 1 –__ Navigate to the Policy > __Access Policies__ > Connection Profiles page.

__Step 2 –__ In the Connection Profiles list, click the __Plus__ icon.

![Add Connection Profile](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/addconnectionprofile.png)

__Step 3 –__ Enter the desired information to configure a new connection profile.

- Name – Provide a unique name for the connection profile
- Description – Provide an optional description to indicate the purpose of connection profile
- Configure the Proxy settings, which control what proxy server will be used to start the session. When customizing to use a specific proxy RDP (port 4489) and SSH (port 4422) proxy server, only one server can be listed.
- __NOTE:__ If you want to use more than one proxy server, a load balancer must be used in front of the servers.
- Session Control – Configure the Session Control settings to set up session duration and user login parameters for a connection profile.

  __NOTE:__ On this step, you will need to also select a default Activity Token Complexity policy for the connection profile
- Credential Management – Configure the Credential Management settings, which control parameters for the password used for this connection profile
- Website Settings – Configure the Website settings which control cleaning of the website data and allow recording the computer audio, if needed
- Custom Fields – Configure the Custom Fields settings to create additional data entries for the connection profile
- Approval Workflow –Configure the Approval Workflow settings

__Step 4 –__ Click Save to create the new connection profile.

__Step 5 –__ The new connection profile is created. To add an Approval Workflow, see the [Add Approval Workflow](/docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/connectionprofileapproval.md#Add-Approval-Workflow) topic for additional information.

The new connection profile is added to the Connection Profiles list.
