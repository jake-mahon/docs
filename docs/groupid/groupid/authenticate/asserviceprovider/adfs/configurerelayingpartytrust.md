# Configure Relaying Party Trust in AD FS

In AD FS, you have to configure the Directory Manager client with which you want to set up AD FS. You also have to specify the claim rules for authentication.

## Configure Relaying Party Trust in AD FS

Follow the steps to configure relaying party trust in AD FS.

Step 1 – Launch the AD FS console. In the left pane, select __AD FS > Trust Relationships__. Right-click __Relying Party Trusts__ and click __Add Relying Party Trust__ on the shortcut menu.  
The Add Relying Party Trust wizard opens to the Welcome page.

Step 2 – Read the welcome message and click __Start__.

Step 3 – Use the options on the Select Data Source page to either import relying party trust data from a file, such as a metadata file, or enter the information manually.  
To enter information manually, select the __Enter data about the relying party manually__ option and click __Next__.

Step 4 – On the Specify Display Name page, specify a friendly display name for this configuration in the Display name box. Then enter any additional notes in the Notes box and click __Next__.

Step 5 – To use the SAML 2.0 protocol as profile, select the __AD FS profile__ option button on the Choose Profile page and click __Next__.

Step 6 – On the Configure Certificate page, click __Next__.

Step 7 – On the Configure URL page, select the __Enable support for the SAML 2.0 Web SSO protocol__ option button. Then in the Relying party SAML 2.0 SSL service URL box, provide the consumer URL you generated for the Directory Manager client. See the [Generate the Consumer URL for a Directory Manager Client](/docs/groupid/groupid/authenticate/asserviceprovider/adfs/generateurls.md#Generate-the-Consumer-URL-for-a-Directory-Manager-Client) topic.  
The consumer URL is the relying party trust URL, used by AD FS to authenticate. Click __Next__.

Step 8 – On the Configure Identifiers page, use the Relying party trust identifier box to provide the audience URL you generated for the Directory Manager client. Click __Add__ next to this box and then click __Next__.  
See the [Generate Entity ID/Audience URL](/docs/groupid/groupid/authenticate/asserviceprovider/adfs/generateurls.md#Generate-Entity-IDAudience-URL) topic.

Step 9 – Use the Configure Multi-factor Authentication Now? page to configure multi-factor authentication. At present, we will not configure it, so select the __I do not want to configure multi-factor authentications settings for this relying party trust at this time__ option button and click __Next__.

Step 10 – Use the Choose Issuance Authorization Rules page to permit all users to get authenticated on the relying party trust using AD FS. User credentials will be parsed with Active Directory.  
Select the __Permit all users to access this relying party__ option button and click __Next__.

Step 11 – Use the tabs on the Ready to Add Trust page to review some preconfigured settings; then click __Next__.

Step 12 – Click __Close__ on the Finish page to complete the wizard. The wizard closes and the Edit Claim Rules dialog box is displayed, where you have to specify claim rules for authentication.

Step 13 – On the Edit Claim Rules dialog box, the Issuance Transform Rules option correlates to the option of authenticating using an Active Directory attribute. Click __Add Rule__.

Step 14 – To add a rule, select __Transform an Incoming Claim__ from the Claim rule template drop-down list on the Select Rule Template page and click __Next__.

Step 15 – On the Configure Rule page, specify a rule name in the Claim rule name box.

Step 16 – In the Incoming claim type and Outgoing claim type boxes, select an Active Directory attribute for authentication, such as the UPN attribute. The incoming and outgoing claim types should be the same as we will not specify a different text or different data for the logon process. It will be the exact user principal name for authentication.

Step 17 – Make sure that the __Pass through all claim values__ option is selected; then click __Finish__. The new rule is configured and displayed on the Issuance Transform Rules tab.

Step 18 – Click the __Issuance Authorization Rules__ tab and notice that the issuance authorization rule is already completed.

Step 19 – Click the __Delegation Authorization Rules__ tab. We do not need to delegate, so click __Apply__ and then __OK__. The AD FS console is displayed with the new relying party trust added.

The next step is to configure the AD FS provider in Directory Manager. See the [Configure the AD FS Provider In Directory Manager](/docs/groupid/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md) topic.
