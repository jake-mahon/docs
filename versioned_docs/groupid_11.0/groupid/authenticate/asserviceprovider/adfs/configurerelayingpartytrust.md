# Configure Relaying Party Trust in AD FS

In AD FS, you have to configure the GroupID client with which you want to set up AD FS. You also have to specify the claim rules for authentication.

## Configure Relaying Party Trust in AD FS

1. Launch the AD FS console. In the left pane, select __AD FS > Trust Relationships__. Right-click __Relying Party Trusts__ and click __Add Relying Party Trust__ on the shortcut menu.  
   The __Add Relying Party Trust__ wizard opens to the __Welcome__ page.
2. Read the welcome message and click __Start__.
3. Use the options on the __Select Data Source__ page to either import relying party trust data from a file, such as a metadata file, or enter the information manually.  
   To enter information manually, select the __Enter data about the relying party manually__ option and click __Next__.
4. On the __Specify Display Name__ page, specify a friendly display name for this configuration in the __Display name__ box. Then enter any additional notes in the __Notes__ box and click __Next__.
5. To use the SAML 2.0 protocol as profile, select the __AD FS profile__ option button on the __Choose Profile__ page and click __Next__.
6. On the __Configure Certificate__ page, click __Next__.
7. On the __Configure URL__ page, select the __Enable support for the SAML 2.0 Web SSO protocol__ option button. Then in the __Relying party SAML 2.0 SSL service URL__ box, provide the consumer URL you generated for the GroupID client. See the [Generate the Consumer URL for a GroupID Client](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/adfs/generateurls.md#Generate-the-Consumer-URL-for-a-GroupID-Client) topic.  
   The consumer URL is the relying party trust URL, used by AD FS to authenticate.  
   Click __Next__.
8. On the __Configure Identifiers__ page, use the __Relying party trust identifier__ box to provide the audience URL you generated for the GroupID client. Click __Add__ next to this box and then click __Next__.  
   See the [Generate Entity ID/Audience URL](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/adfs/generateurls.md#Generate-Entity-IDAudience-URL) topic.
9. Use the __Configure Multi-factor Authentication Now?__ page to configure multi-factor authentication. At present, we will not configure it, so select the __I do not want to configure multi-factor authentications settings for this relying party trust at this time__ option button and click __Next__.
10. Use the __Choose Issuance Authorization Rules__ page to permit all users to get authenticated on the relying party trust using AD FS. User credentials will be parsed with Active Directory.  
    Select the __Permit all users to access this relying party__ option button and click __Next__.
11. Use the tabs on the __Ready to Add Trust__ page to review some preconfigured settings; then click __Next__.
12. Click __Close__ on the __Finish__ page to complete the wizard. The wizard closes and the __Edit Claim Rules__ dialog box is displayed, where you have to specify claim rules for authentication.

__Specify claim rules for authentication:__

13. On the __Edit Claim Rules__ dialog box, the __Issuance Transform Rules__ option correlates to the option of authenticating using an Active Directory attribute. Click __Add Rule__.
14. To add a rule, select _Transform an Incoming Claim_ from the __Claim rule template__ drop-down list on the __Select Rule Template__ page and click __Next__.
15. On the __Configure Rule__ page, specify a rule name in the __Claim rule name__ box.
16. In the __Incoming claim type__ and __Outgoing claim type__ boxes, select an Active Directory attribute for authentication, such as the UPN attribute. The incoming and outgoing claim types should be the same as we will not specify a different text or different data for the logon process. It will be the exact user principal name for authentication.
17. Make sure that the __Pass through all claim values__ option is selected; then click __Finish__. The new rule is configured and displayed on the __Issuance Transform Rules__ tab.
18. Click the __Issuance Authorization Rules__ tab and notice that the issuance authorization rule is already completed.
19. Click the __Delegation Authorization Rules__ tab. We do not need to delegate, so click __Apply__ and then __OK__. The AD FS console is displayed with the new relying party trust added.  
    The next step is to configure the AD FS provider in GroupID. See the [Configure the AD FS Provider In GroupID](/versioned_docs/groupid_11.0/groupid/authenticate/asserviceprovider/adfs/configureadfsingroupid.md) topic.
