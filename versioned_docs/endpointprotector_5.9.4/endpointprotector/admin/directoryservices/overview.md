# Directory Services

From this section, you can import and synchronize the entities (Users, Computers, and Groups) from
the company’s Active Directories.

![Import and synchronize the entities (Users, Computers, and Groups) from the company’s Active Directories](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/directoryservices.png)

## Microsoft Active Directory

You can create and manage connections from the Directory Services, Microsoft Active Directory
section. The required information includes the Connection Type, Server, Port, Username, and
Password.

![Manage connections from the Directory Services](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/newconnection.png)

**NOTE:** When having to import a very large number of entities, we recommend using the Base Search
Path to get only the relevant information displayed. Due to browser limitations, importing the whole
AD structure may impede the display of the import tree if it contains a very large number of
entities.

To ensure the information is correct, click Test to test the new connection.

Once a new connection has been created, it is available in the synchronization list and can be
further edited, to include the required entities.

For the deﬁned connections, several synchronization options are available. From this section, the
connection credentials and synchronization interval can also be changed.

![Change connection credentials and synchronization interval](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/testsync.png)

The Advanced Groups Filter can be used to import and synchronize only speciﬁc groups, ignoring all
other entities.

From the Directory Browser section, you can select the entities that need to be synced.

**NOTE:** You can view only Organizational units (OU) and Groups in the Directory Browser.

![From the Directory Browser section, you can select the entities that need to be synced.](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/directorybrowser.png)

Once the entities have been selected, they can be saved to sync.

![Synchronization Filters](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/synchfilters.png)

## Microsoft Entra ID

You can create and manage connections from the Directory Services, Microsoft Entra ID. From this
section, Groups from the Microsoft Entra ID will have their users synchronized with the Endpoint
Protector Server. Group membership will be retrieved recursively by the API platform itself.

Example

- Group 1 - User 1, User 2, User 3
- Group 2 - Group 1, User 4
- Group 3 - Group 2, User 5

If Group 3 is selected for the synchronization operation, only Group 3 will be imported and created
in the Endpoint Protector Server. User 5 will also be imported and will be added as a member of
Group 3. Group 2 and all subsequent groups will be parsed and only the Users will be retrieved and
the actual groups will not be added to the server.

After the synchronization is done, it will look like that on the Endpoint Protector server:

- Group 3 - User 5, User 4, User 3, User 2, User 1

### Conﬁgure Microsoft Entra ID

#### Create the Application on Microsoft Entra ID

Follow the steps to create the application on Microsoft Entra ID.

**Step 1 –** Log in to Azure Portal.

**Step 2 –** Go to Microsoft Entra ID.

**Step 3 –** Click App Registrations from the Manage section on the Active Directory menu on the
left side, then on New Registration.

![Create the application on Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/appregmsentraid.png)

**Step 4 –** On the Registration page enter your **Name**.

**Step 5 –** On the Supported account type select **Default Directory**.

**CAUTION:** Do not ﬁll in the Redirect URI ﬁeld!

**Step 6 –** Click **Register**.

![Create the application on Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/appregmsentraidtwo.png)

**Step 7 –** On the Essentials section save the following information:

- Application (client) ID will be needed for adding it in the Application (client) ID ﬁeld on the
  Endpoint Protector Server
- Directory (tenant) ID will be needed for adding it in the Tenant ID ﬁeld on the Endpoint
  ProtectorEndpoint Protector Server

![Create the Application on Azure Active Directory](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/testapplication.png)

#### Create a Secret ID for the Application

The secret ID will be used as an authentication method to gain access to the application via Graph
API.

**Step 1 –** Click **Certiﬁcates & Secrets** on the side menu from the Manage section.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecrets.png)

**Step 2 –** Click **New client secret** on the Certiﬁcates & secrets page.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretestwo.png)

**Step 3 –** Enter a **Description** for the secret ID.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsthree.png)

**Step 4 –** Click **Add** and **Add a client** secret section.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfour.png)

**Step 5 –** Take note of the Secret ID value and make sure to copy it to the clipboard and also to
store it safely because it will be needed further on.

**NOTE:** Notice that when navigating back, the secret ID will be hidden.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfive.png)

#### Create Users/Groups Using Graph API

Follow the steps to create users/groups using Graph API.

**Step 1 –** Click **Home** and then Microsoft Entra ID.

![Create Users/Groups Using Graph API](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfivesix.png)

![Azure Home Page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azurehome.png)

**Step 2 –** Click **Add** from the Default Directory| Overview page

![Default Directory| Overview page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadoverview.png)

**Step 3 –** Click **Add User**.

![Overview Add User ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/overviewadduser.png)

- Select **Create User**.
- Enter the **Username** and select the **Domain**.
- Enter the **Name**.
- Either click **Auto-generate password** or create one on your own.
- Add the **Department**.
- Click **Create**.

![Azure Active Director Create User](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadnewuser.png)

**Step 4 –** Repeat Steps 1 and 2, then click **Group**.

- Select group type **security**.
- Enter a **name** for the group.
- Click **No members selected** to add membership.
- Search for the newly created user and click **Select**.

![ Default Directory| New Group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadnewgroup.png)

#### Add Permissions to the Application

Permission to be added to our application:

- Directory.Read.All
- Group.Read.All
- User.Read.All

Make sure the created application is open then:

**Step 1 –** Click **API Permissions**.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionone.png)

**Step 2 –** Click **Add a Permission**.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissiontwo.png)

**Step 3 –** Click **Microsoft Graph**.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionthree.png)

**Step 4 –** Click **Application Permissions**.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionfour.png)

**Step 5 –** Search for the permissions mentioned above and check each of the permissions.
(Directory.Read.All, Group.Read.All, User.Read.All)

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionfive.png)

**Step 6 –** Click **Add Permissions**.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionsix.png)

**Step 7 –** Click **Grant admin consent for Default Directory** from the API Permission page.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionseven.png)

#### Add Graph Application to Server

Follow the steps to add a graph application to the Endpoint Protector server.

**Step 1 –** Open the Endpoint ProtectorServer and navigate to **Directory Services** > **Microsoft
Entra ID**.

**Step 2 –** Click **Add** to add an API Consumer – One API Consumer can be used for multiple
synchronization jobs.

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/azuread.png)

**Step 3 –** Provide the following details:

- Name
- Description
- Directory (tenant) ID saved earlier on the Tenant ID ﬁeld
- Application (client) ID saved earlier on the Application (Client) ID ﬁeld
- Secret ID saved earlier in the Client Secret Value ﬁeld

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadtwo.png)

**Step 4 –** Click **Test** and then **Save**.

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadthree.png)

#### Create a Synchronization Job on the Server

Follow the steps to create a synchronization job on the Endpoint Protector server.

**Step 1 –** Click **Create Sync Job**.

![Create a Synchronization Job on the Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/createsynchjob.png)

**Step 2 –** Provide Synchronization information:

- Name
- Description
- Select the created API Consumer
- Select Sync Interval

**Step 3 –** Click **Save**.

![Create a Synchronization Job on the Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/mapon-premisesusers.png)

The **Map on-premises users** switch in the Microsoft Entra ID connector controls how Endpoint
Protector retrieves user names in hybrid environments with both a local Active Directory and
Microsoft Entra ID. This switch has two states:

- Unmarked (feature disabled) – Endpoint Protector uses the "userPrincipalName" Azure AD attribute
  to retrieve user names. This attribute is the primary source for user identiﬁcation and account
  mapping.
- Marked (feature enabled) – Endpoint Protector uses the "onPremisesSamAccountName" Azure AD
  attribute to retrieve user names, ensuring accurate synchronization between the local Active
  Directory and Azure AD.

By utilizing this feature, Endpoint Protector ensures seamless synchronization of user names,
preventing duplicate usernames. Enable or disable the "Map on-premises users" feature based on your
speciﬁc hybrid environment setup and requirements.
