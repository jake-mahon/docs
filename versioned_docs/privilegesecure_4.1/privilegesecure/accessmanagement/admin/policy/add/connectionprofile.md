# Add Connection Profile

Follow the steps to add a connection profile to the console. See the [Connection Profiles Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/connectionprofiles.md) topic for detailed descriptions of the fields.

__Step 1 –__ Navigate to the Policy > __Access Policies__ > Connection Profiles page.

__Step 2 –__ In the Connection Profiles list, click the __Plus__ icon.

![Add Connection Profile](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/connection/profile/addconnectionprofile.png)

__Step 3 –__ Enter the desired information to configure a new connection profile.

- Provide a unique name
- Provide an optional __Description__ to indicate the purpose of connection profile
- Configure the Proxy settings, which control what proxy server will be used to start the session. When customizing to use a specific proxy RDP (port 4489) and SSH (port 4422) proxy server, only one server can be listed.
- __NOTE:__ If you want to use more than one proxy server, a load balancer must be used in front of the servers.
- Configure the __Session__ __Control__ settings to set up session duration and user logons parameters for a connection profile.

  __NOTE:__ On this step, you will need to also select a default Activity Token Complexity policy for the connection profile.
- Configure the __Credential Management__ settings, which control parameters for the password used for this connection profile.
- Configure the __Website__ settings which control cleaning of the website data and allow recording the computer audio, if needed.
- Configure the __Approval Workflow__ settings.

__Step 4 –__ Click Save to create the new connection profile.

__Step 5 –__ The new connection profile is created. __NOTE:__ To configure a Request Approval workflow, click the Configure Approval Workflow button in the left sidebar. See the [Add Approval Workflow](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/connectionprofileapproval.md) topic for additional information.

__Step 6 –__ Click __Create__ to save the new connection profile.

The new connection profile is added to the Connection Profiles list.
