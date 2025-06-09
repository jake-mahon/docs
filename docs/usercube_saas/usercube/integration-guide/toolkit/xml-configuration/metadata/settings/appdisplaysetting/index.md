# App Display Setting

This setting is used to customize the application display.

## Examples

Here are some examples of display settings that can be customized:

### Set colors, logos and names

The following example sets:

- Netwrix Identity Manager (formerly Usercube) as name of the application visible on the tabs;
- The logo to be displayed in the top left corner;
- The favicon to be displayed on the tabs;
- The __banner color__, __banner gradient color__, __banner selected tab color__, __banner text color__, __primary color__ and __secondary color__.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
<AppDisplaySetting ApplicationName="Netwrix Usercube" LogoFile="logo.png" FaviconFile="favicon.ico" BannerColor="#512E5F" BannerGradientColor="#76D7C4" BannerSelectedTabColor="#E74C3C" BannerTextColor="#F1C40F" PrimaryColor="#0E6655" SecondaryColor="#85C1E9" />
```

Colors, logo and name customization:

![AppDisplay - Basic Screen](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen2_v603.png)

Display colors customization:

![AppDisplay - Authentication](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen1_v603.png)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

![AppDisplay - Without Counters](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_counters_v603.png)

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
<AppDisplaySetting DisableProvisioningCounters="true" />
```

![AppDisplay - Without Counters](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_nocounters_v603.png)

### Features

The feature __Only allow approving and refusing on access certifications items__ gives the administrator the option to limit the user's option to either __Approve__ or __Deny__ the Access Certification items while making the __More__ button unavailable.

![allowapprovingdenyingaccesscertificationitems](/img/product_docs/usercube/usercube/user-guide/set-up/configure-global-settings/allowapprovingdenyingaccesscertificationitems.png)

The following example disables the __More__ button that is usually visible on certification screen:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
<AccessCertificationOnlyApproveDeny="true"/> 
```

If the feature __Only allow approving and denying on access certification items__ is set to __Yes__, the __More__ button is disabled.

![accesscertificationonlyapprovedeny-disabled](/img/product_docs/usercube/usercube/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedeny-disabled.png)

See the [Configure Global Settings](/docs/usercube_saas/usercube/user-guide/set-up/configure-global-settings/index.md) topic for additional information.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| ApplicationName   (optional) | String | Name of the application, visible on the application's tabs. |
| AccessCertificationOnlyApproveDeny   (optional) | Boolean | True to hide the __More__ button on the access certification screens, only allowing __Approve__ and __Deny__ actions.  The default value is __false__. |
| BannerColor   (optional) | String | HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerGradientColor   (optional) | String | HEX code of the color for the banner's gradient to be visible at the middle of the banner. |
| BannerSelectedTabColor   (optional) | String | HEX code of the color for the line that emphasizes the selected tab. |
| BannerTextColor   (optional) | String | HEX code of the color for the banner's text. |
| DisableProvisioningCounters   (default value: false | String | True to disable the counters related to the administration screens: __Role Review__, __Provisioning Review__, __Role Reconciliation__, __Resource Reconciliation__ and __Manual Provisioning__. |
| FaviconFile   (optional) | String | Path of the favicon to be displayed in the application's tabs. |
| FaviconMimeType   (optional) | String | Mime type of the favicon. |
| FullNameSeparator   (default value: �) | String | Separator of the full name. |
| Identifier   (default value: AppDisplay) | String | Unique identifier of the setting. |
| LogoFile   (optional) | String | Path of the logo to be displayed in the top left corner. |
| LogoMimeType   (optional) | String | Mime type of the logo. |
| Preview   (optional) | String | Documentation unavailable. |
| PrimaryColor   (optional) | String | HEX code of the color for the highlighted buttons. |
| SecondaryColor   (optional) | String | HEX code of the color for the background of the authentication screen. |
