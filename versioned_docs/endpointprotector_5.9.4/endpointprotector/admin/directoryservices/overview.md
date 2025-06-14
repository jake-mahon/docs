# Directory Services

From this section, you can import and synchronize the entities (Users, Computers, and Groups) from the company’s Active Directories.

![Import and synchronize the entities (Users, Computers, and Groups) from the company’s Active Directories](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/directoryservices.png)

## Microsoft Active Directory

You can create and manage connections from the Directory Services, Microsoft Active Directory section. The required information includes the Connection Type, Server, Port, Username, and Password.

![Manage connections from the Directory Services](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/newconnection.png)

__NOTE:__ When having to import a very large number of entities, we recommend using the Base Search Path to get only the relevant information displayed. Due to browser limitations, importing the whole AD structure may impede the display of the import tree if it contains a very large number of entities.

To ensure the information is correct, click Test to test the new connection.

Once a new connection has been created, it is available in the synchronization list and can be further edited, to include the required entities.

For the deﬁned connections, several synchronization options are available. From this section, the connection credentials and synchronization interval can also be changed.

![Change connection credentials and synchronization interval](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/testsync.png)

The Advanced Groups Filter can be used to import and synchronize only speciﬁc groups, ignoring all other entities.

From the Directory Browser section, you can select the entities that need to be synced.

__NOTE:__ You can view only Organizational units (OU) and Groups in the Directory Browser.

![From the Directory Browser section, you can select the entities that need to be synced.](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/directorybrowser.png)

Once the entities have been selected, they can be saved to sync.

![Synchronization Filters](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/synchfilters.png)

## Microsoft Entra ID

You can create and manage connections from the Directory Services, Microsoft Entra ID. From this section, Groups from the Microsoft Entra ID will have their users synchronized with the Endpoint Protector Server. Group membership will be retrieved recursively by the API platform itself.

Example

- Group 1 - User 1, User 2, User 3
- Group 2 - Group 1, User 4
- Group 3 - Group 2, User 5

If Group 3 is selected for the synchronization operation, only Group 3 will be imported and created in the Endpoint Protector Server. User 5 will also be imported and will be added as a member of Group 3. Group 2 and all subsequent groups will be parsed and only the Users will be retrieved and the actual groups will not be added to the server.

After the synchronization is done, it will look like that on the Endpoint Protector server:

- Group 3 - User 5, User 4, User 3, User 2, User 1

### Conﬁgure Microsoft Entra ID

#### Create the Application on Microsoft Entra ID

Follow the steps to create the application on Microsoft Entra ID.

__Step 1 –__ Log in to Azure Portal.

__Step 2 –__ Go to Microsoft Entra ID.

__Step 3 –__ Click App Registrations from the Manage section on the Active Directory menu on the left side, then on New Registration.

![Create the application on Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/appregmsentraid.png)

__Step 4 –__ On the Registration page enter your __Name__.

__Step 5 –__ On the Supported account type select __Default Directory__.

__CAUTION:__ Do not ﬁll in the Redirect URI ﬁeld!

__Step 6 –__ Click __Register__.

![Create the application on Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/appregmsentraidtwo.png)

__Step 7 –__ On the Essentials section save the following information:

- Application (client) ID will be needed for adding it in the Application (client) ID ﬁeld on the Endpoint Protector Server
- Directory (tenant) ID will be needed for adding it in the Tenant ID ﬁeld on the Endpoint ProtectorEndpoint Protector Server

![Create the Application on Azure Active Directory](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/testapplication.png)

#### Create a Secret ID for the Application

The secret ID will be used as an authentication method to gain access to the application via Graph API.

__Step 1 –__ Click __Certiﬁcates & Secrets__ on the side menu from the Manage section.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecrets.png)

__Step 2 –__ Click __New client secret__ on the Certiﬁcates & secrets page.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretestwo.png)

__Step 3 –__ Enter a __Description__ for the secret ID.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsthree.png)

__Step 4 –__ Click __Add__ and __Add a client__ secret section.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfour.png)

__Step 5 –__ Take note of the Secret ID value and make sure to copy it to the clipboard and also to store it safely because it will be needed further on.

__NOTE:__ Notice that when navigating back, the secret ID will be hidden.

![Create a Secret ID for the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfive.png)

#### Create Users/Groups Using Graph API

Follow the steps to create users/groups using Graph API.

__Step 1 –__ Click __Home__ and then Microsoft Entra ID.

![Create Users/Groups Using Graph API](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/certsecretsfivesix.png)

![Azure Home Page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azurehome.png)

__Step 2 –__ Click __Add__ from the Default Directory| Overview page

![Default Directory| Overview page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadoverview.png)

__Step 3 –__ Click __Add User__.

![Overview Add User ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/overviewadduser.png)

- Select __Create User__.
- Enter the __Username__ and select the __Domain__.
- Enter the __Name__.
- Either click __Auto-generate password__ or create one on your own.
- Add the __Department__.
- Click __Create__.

![Azure Active Director Create User](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadnewuser.png)

__Step 4 –__ Repeat Steps 1 and 2, then click __Group__.

- Select group type __security__.
- Enter a __name__ for the group.
- Click __No members selected__ to add membership.
- Search for the newly created user and click __Select__.

![ Default Directory| New Group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadnewgroup.png)

#### Add Permissions to the Application

Permission to be added to our application:

- Directory.Read.All
- Group.Read.All
- User.Read.All

Make sure the created application is open then:

__Step 1 –__ Click __API Permissions__.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionone.png)

__Step 2 –__ Click __Add a Permission__.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissiontwo.png)

__Step 3 –__ Click __Microsoft Graph__.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionthree.png)

__Step 4 –__ Click __Application Permissions__.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionfour.png)

__Step 5 –__ Search for the permissions mentioned above and check each of the permissions. (Directory.Read.All, Group.Read.All, User.Read.All)

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionfive.png)

__Step 6 –__ Click __Add Permissions__.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionsix.png)

__Step 7 –__ Click __Grant admin consent for Default Directory__ from the API Permission page.

![Add Permissions to the Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadapipermissionseven.png)

#### Add Graph Application to Server

Follow the steps to add a graph application to the Endpoint Protector server.

__Step 1 –__ Open the Endpoint ProtectorServer and navigate to __Directory Services__ > __Microsoft Entra ID__.

__Step 2 –__ Click __Add__ to add an API Consumer – One API Consumer can be used for multiple synchronization jobs.

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/azuread.png)

__Step 3 –__ Provide the following details:

- Name
- Description
- Directory (tenant) ID saved earlier on the Tenant ID ﬁeld
- Application (client) ID saved earlier on the Application (Client) ID ﬁeld
- Secret ID saved earlier in the Client Secret Value ﬁeld

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadtwo.png)

__Step 4 –__ Click __Test__ and then __Save__.

![Add Graph Application to Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/azureadthree.png)

#### Create a Synchronization Job on the Server

Follow the steps to create a synchronization job on the Endpoint Protector server.

__Step 1 –__ Click __Create Sync Job__.

![Create a Synchronization Job on the Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/createsynchjob.png)

__Step 2 –__ Provide Synchronization information:

- Name
- Description
- Select the created API Consumer
- Select Sync Interval

__Step 3 –__ Click __Save__.

![Create a Synchronization Job on the Endpoint Protector Server](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/mapon-premisesusers.png)

The __Map on-premises users__ switch in the Microsoft Entra ID connector controls how Endpoint Protector retrieves user names in hybrid environments with both a local Active Directory and Microsoft Entra ID. This switch has two states:

- Unmarked (feature disabled) – Endpoint Protector uses the "userPrincipalName" Azure AD attribute to retrieve user names. This attribute is the primary source for user identiﬁcation and account mapping.
- Marked (feature enabled) – Endpoint Protector uses the "onPremisesSamAccountName" Azure AD attribute to retrieve user names, ensuring accurate synchronization between the local Active Directory and Azure AD.

By utilizing this feature, Endpoint Protector ensures seamless synchronization of user names, preventing duplicate usernames. Enable or disable the "Map on-premises users" feature based on your speciﬁc hybrid environment setup and requirements.
