# What's New

What's New

# What's New

### What's New in this Version?

Netwrix Password Reset v3.3 includes the following improvements:

#### Enhancements

• __Updated branding__ — The product has been updated to reflect the Netwrix brand.

• __Increased protocol requirement to version 9.0 or higher__ — Due to a protocol upgrade, Netwrix Password Reset v3.3 is not compatible with Netwrix Password Policy Enforcer v8.x and earlier versions. If you are using Netwrix Password Reset with any of those older Netwrix Password Policy Enforcer versions, please consider upgrading Netwrix Password Policy Enforcer first to a current version, and only then upgrade Netwrix Password Reset to v3.3 (or later).

Older versions of Netwrix Password Policy Enforcer can still enforce the policy, but Netwrix Password Reset 3.3 will not get the policy and rejection messages or enforce the Similarity rule from Netwrix Password Policy Enforcer versions older than 9.0. See the [General Tab](/docs/product_docs/passwordreset/passwordreset/administration/general_tab.md) topic for more information.

• __Option to enable PPC protocol encryption__ — Due to a protocol upgrade, it is now recommended to enable protocol encryption for clients. To do so, please navigate to PPS Properties in your Netwrix Password Policy Enforcer server configuration, and enable "Only accept encrypted client request".

Please do not enable this option if you are using Netwrix Password Reset v3.3 with Netwrix Password Policy Enforcer v8.x or earlier versions, or with Netwrix Password Policy Enforcer/Web. If you are using Netwrix Password Reset v3.3 with any of those older versions of Netwrix Password Policy Enforcer, please consider upgrading first to a current and supported version. See the [General Tab](/docs/product_docs/passwordreset/passwordreset/administration/general_tab.md) topic for more information.

• __Enabled ‘ServerMayChangeIPAddress’ for PPC queries__ — This ensures that Netwrix Password Reset always displays the policy or rejection message if it queried a domain controller with more than one IP address.

#### Bug Fix List

See the Netwrix Password Reset v3.3 [Bug Fix List PDF](https://helpcenter.netwrix.com/bundle/PasswordReset_3.3_ReleaseNotes/resource/Netwrix_PasswordReset_3.3_BugFixList.pdf) for a list of bugs fixed in this version.

[Open topic with navigation](/docs/product_docs/default.md#Open-topic-with-navigation)
