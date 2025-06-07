# Generate URLs

Generate the consumer URL and audience URL for the Directory Manager client with which you want to configure AD FS. These URLs are required while creating the relying party trust in AD FS.

The consumer URL and audience URL are unique for each Directory Manager client. Clients include:

- Admin Center
- Directory Manager portals (each portal is treated as a separate client)
- Management Shell
- Directory Manager APIs

With multiple instances of Directory Manager, multiple Admin Centers and Management Shells are available as separate clients.

## Generate the Consumer URL for a Directory Manager Client

Follow the steps to generate the consumer URL for a Directory Managerclient.

Step 1 – In Authenticate, click the __Generate URL's__ tab. The Generate URL's page is displayed.   
See the [Launch Authenticate](/docs/product_docs/groupid/groupid/authenticate/overview.md#Launch-Authenticate) section of the [Authenticate](/docs/product_docs/groupid/groupid/authenticate/overview.md) topic for additional information.

Step 2 – In the Select Client to Generate Consumer URL drop-down list, select a Directory Manager client to set up AD FS with it. Let’s suppose you select the Directory Manager portal named _Wizard_.

Step 3 – The URL displayed in the Consumer URL box is a unique identifier for the selected client. It is used to set up relying party trust in AD FS. Click __Copy__ to copy it. Then paste it in a file, preferably a text file, to save it.

NOTE: On upgrade to Directory Manager 11, you must generate the consumer URL again for the Directory Manager client configured with AD FS, and update it in AD FS.

## Generate Entity ID/Audience URL

Follow the steps to generate Entity ID/Audience URL.

Step 1 – In Authenticate, click the __SAML Providers__ tab. The SAML Providers page is displayed.  
See the [Launch Authenticate](/docs/product_docs/groupid/groupid/authenticate/overview.md#Launch-Authenticate) section of the [Authenticate](/docs/product_docs/groupid/groupid/authenticate/overview.md) topic for additional information.

Step 2 – Click __New Provider__.

Step 3 – On the Create New Provider page, the Identity storesdrop-down list displays the identity stores defined in Directory Manager. Select an identity store.

The Client drop-down list displays the Directory Manager clients with respect to the identity store. Select the client with which you want to set up the SAML provider.  
The client you select must be the one for which you generated the consumer URL.   
To continue with the example, select the Directory Manager portal named _Wizard_ in the Client drop-down list.

Step 4 – The Entity ID/Audience box displays a URL. Click __Copy__ to copy it. Then paste it in a file, preferably a text file, to save it.
