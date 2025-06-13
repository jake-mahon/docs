# AppDisplaySetting

This setting is used to customize the application display.

## Examples

### Set colors, logos and names

The following example sets:

- "Netwrix Usercube" as name of the application visible on the tabs;
- the logo to be displayed in the top left corner;
- the favicon to be displayed on the tabs;
- the __banner color__, __banner gradient color__, __banner selected tab color__, __banner text color__, __primary color__ and __secondary color__.

```

<AppDisplaySetting ApplicationName="Netwrix Usercube" LogoFile="logo.png" FaviconFile="favicon.ico" BannerColor="#512E5F" BannerGradientColor="#76D7C4" BannerSelectedTabColor="#E74C3C" BannerTextColor="#F1C40F" PrimaryColor="#0E6655" SecondaryColor="#85C1E9" />

```

![AppDisplay - Tab](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_tab_v603.png)

![AppDisplay - Basic Screen](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen2_v603.png)

![AppDisplay - Authentication](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_screen1_v603.png)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

> ![AppDisplay - Without Counters](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_counters_v603.png)

```

<AppDisplaySetting DisableProvisioningCounters="true" />

```

![AppDisplay - Without Counters](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/appdisplaysetting_nocounters_v603.png)

## Properties

| Property | Details |
| --- | --- |
| ApplicationName   optional | __Type__    String   __Description__   Name of the application, visible on the application's tabs. |
| BannerColor   optional | __Type__    String   __Description__   HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerGradientColor   optional | __Type__    String   __Description__   HEX code of the color for the banner's gradient to be visible at the middle of the banner. |
| BannerSelectedTabColor   optional | __Type__    String   __Description__   HEX code of the color for the line that emphasizes the selected tab. |
| BannerTextColor   optional | __Type__    String   __Description__   HEX code of the color for the banner's text. |
| DisableProvisioningCounters   default value: false | __Type__    String   __Description__   ```true``` to disable the counters related to the administration screens: __Role Review__, __Provisioning Review__, __Role Reconciliation__, __Resource Reconciliation__ and __Manual Provisioning__. |
| FaviconFile   optional | __Type__    String   __Description__   Path of the favicon to be displayed in the application's tabs. |
| FaviconMimeType   optional | __Type__    String   __Description__   Mime type of the favicon. |
| FullNameSeparator   default value: � | __Type__    String   __Description__   Separator of the full name. |
| Identifier   default value: AppDisplay | __Type__    String   __Description__   Unique identifier of the setting. |
| LogoFile   optional | __Type__    String   __Description__   Path of the logo to be displayed in the top left corner. |
| LogoMimeType   optional | __Type__    String   __Description__   Mime type of the logo. |
| Preview   optional | __Type__    String   __Description__   Documentation unavailable. |
| PrimaryColor   optional | __Type__    String   __Description__   HEX code of the color for the highlighted buttons. |
| SecondaryColor   optional | __Type__    String   __Description__   HEX code of the color for the background of the authentication screen. |
