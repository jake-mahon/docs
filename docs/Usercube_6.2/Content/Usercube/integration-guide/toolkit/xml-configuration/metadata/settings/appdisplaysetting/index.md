---
sidebar_position: 766
title: App Display Setting
---

# App Display Setting

This setting is used to customize the application display.

## Examples

Here are some examples of display settings that can be customized:

### Set colors, logos and names

The following example sets:

* Netwrix Identity Manager (formerly Usercube) as name of the application visible on the tabs;
* The logo to be displayed in the top left corner;
* The favicon to be displayed on the tabs;
* The **banner color**, **banner gradient color**, **banner selected tab color**, **banner text color**, **primary color** and **secondary color**.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
Colors, logo and name customization:

![AppDisplay - Basic Screen](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AppDisplaySetting_screen2_V603.png)

Display colors customization:

![AppDisplay - Authentication](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AppDisplaySetting_screen1_V603.png)

### Disable counters

The following example disables the counters that are usually visible on the dashboard:

![AppDisplay - Without Counters](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AppDisplaySetting_counters_V603.png)

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
![AppDisplay - Without Counters](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AppDisplaySetting_noCounters_V603.png)

### Features

The feature **Only allow approving and refusing on access certifications items** gives the administrator the option to limit the user's option to either **Approve** or **Deny** the Access Certification items while making the **More** button unavailable.

![](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AllowApprovingDenyingAccessCertificationItems.png)

The following example disables the **More** button that is usually visible on certification screen:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
 
```
If the feature **Only allow approving and denying on access certification items** is set to **Yes**, the **More** button is disabled.

![](../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/AccessCertificationOnlyApproveDeny-disabled.png)

See the [Configure Global Settings](../../../../../../user-guide/set-up/configure-global-settings/index "Configure Global Settings") topic for additional information.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| ApplicationName (optional) | String | Name of the application, visible on the application's tabs. |
| AccessCertificationOnlyApproveDeny (optional) | Boolean | True to hide the **More** button on the access certification screens, only allowing **Approve** and **Deny** actions.  The default value is **false**. |
| BannerColor (optional) | String | HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerGradientColor (optional) | String | HEX code of the color for the banner's gradient to be visible at the middle of the banner. |
| BannerSelectedTabColor (optional) | String | HEX code of the color for the line that emphasizes the selected tab. |
| BannerTextColor (optional) | String | HEX code of the color for the banner's text. |
| DisableProvisioningCounters (default value: false | String | True to disable the counters related to the administration screens: **Role Review**, **Provisioning Review**, **Role Reconciliation**, **Resource Reconciliation** and **Manual Provisioning**. |
| FaviconFile (optional) | String | Path of the favicon to be displayed in the application's tabs. |
| FaviconMimeType (optional) | String | Mime type of the favicon. |
| FullNameSeparator (default value: �) | String | Separator of the full name. |
| Identifier (default value: AppDisplay) | String | Unique identifier of the setting. |
| LogoFile (optional) | String | Path of the logo to be displayed in the top left corner. |
| LogoMimeType (optional) | String | Mime type of the logo. |
| Preview (optional) | String | Documentation unavailable. |
| PrimaryColor (optional) | String | HEX code of the color for the highlighted buttons. |
| SecondaryColor (optional) | String | HEX code of the color for the background of the authentication screen. |