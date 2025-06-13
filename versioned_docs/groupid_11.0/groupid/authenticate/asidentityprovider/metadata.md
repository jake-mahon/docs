# Specify Default Metadata Values

You can specify default values for the following GroupID metadata:

- Issuer URL
- Signing certificate

## Specify the Default Issuer URL

1. In GroupID Authenticate, go to the __Settings__ tab.
2. On the __Settings__ page, the __Base URL__ box displays the default Issuer URL, which is displayed in the __Provider Issuer__ box on the __Create Application__ page. See the [GroupID Metadata for Service Provider Configurations](/versioned_docs/groupid_11.0/groupid/authenticate/asidentityprovider/register.md#GroupID-Metadata-for-Service-Provider-Configurations) topic.  
   You may want to change the default base/Issuer URL for any reason, for example, replace it with a sub-domain URL or a load balancer URL.  
   Replace or update the URL in the __Base URL__ box and click __Save__.

## Update the Default Signing Certificate

1. In GroupID Authenticate, go to the __Settings__ tab.
2. On the __Settings__ page, the __Signing Certificate__ box displays the GroupID certificate created in IIS. It displays the certificate along with the private key. This certificate is displayed in the __Provider Signing Certificate__ box on the __Create Application__ page, though without the private key. See the [GroupID Metadata for Service Provider Configurations](/versioned_docs/groupid_11.0/groupid/authenticate/asidentityprovider/register.md#GroupID-Metadata-for-Service-Provider-Configurations) topic.  
   You may choose to use this certificate or create a custom certificate and use that in third-party applications.
3. To use another certificate, do the following:

   1. Create your custom certificate and export it to a PFX file.
   2. On the __Settings__ page, click __Upload PFX__.
   3. On the __Import Windows Exported Certificate File__ dialog box, click __Browse__ to select the exported certificate file. As it is password protected, enter the password and click __Load Certificate File__.
   4. Click __Save__.

   The new certificate is displayed in the __Signing Certificate__ box on the __Settings__ page and also on the __Create Application__ page.
