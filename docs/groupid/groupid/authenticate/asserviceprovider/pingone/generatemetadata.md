# Generate the Consumer URL and Metadata File

In Directory Manager Authenticate, you can generate a metadata file for the Directory Manager client with which you want to set up the PingOne identity provider.

When you import this file into PingOne, it populates all Directory Manager-related configurations into the provider.

In Authenticate, you have to:

- Generate the consumer URL for the Directory Manager client you want to set up the PingOne identity provider with
- Generate the metadata file

## Generate Consumer URL

To generate the consumer URL, see the [Generate URLs](../adfs/generateurls.md) topic. Replace references to AD FS with PingOne.

## Generate the Metadata File

In Authenticate, use the __Metadata__ section on the __Generate URLs__ page to generate the metadata file for the Directory Manager client with which you want to set up PingOne for single sign-on.

Since we generated the consumer URL for the _Wizard_ portal, we should generate the metadata file for this same portal.

__To generate the file:__

1. In Authenticate, click the __Generate URL's__ tab. The __Generate URL's__ page is displayed.
2. In the __Metadata__ section, select an identity store in the __Identity store__ drop-down list.  
   Users will be authenticated in this identity store when they use PingOne for single sign-on.
3. The __Client__ drop-down list displays the Directory Manager clients for the identity store. Select the client for which you have already generated the consumer URL.
4. Click __Download__ to download the metadata file to your machine.
