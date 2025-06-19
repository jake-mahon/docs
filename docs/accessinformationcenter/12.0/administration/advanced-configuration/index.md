# Additional Configuration Options

In addition to the settings that are available on the Configuration interface, the following
configurations and customizations can be done by Administrators:

- [Activity Days Sample for Recommendations](/docs/accessinformationcenter/12.0/administration/advanced-configuration/index.md)
- [Alias Server Host Name](/docs/accessinformationcenter/12.0/administration/advanced-configuration/alias-server.md)
- [Commit Active Directory Changes](/docs/accessinformationcenter/12.0/administration/advanced-configuration/commit-changes.md)
- [Email Templates](/docs/accessinformationcenter/12.0/administration/advanced-configuration/email-templates.md)
- [Timeout Parameter](/docs/accessinformationcenter/12.0/administration/advanced-configuration/timeout-parameters.md)
- [Group Managed Service Account (gMSA) Configuration](/docs/accessinformationcenter/12.0/administration/advanced-configuration/gmsa.md)
- [Microsoft Entra ID Single Sign-On](/docs/accessinformationcenter/12.0/administration/advanced-configuration/entra-id-sso.md)

# Activity Days Sample for Recommendations

During a Resource Review, the Access Information Center can provide the owner of a resource with
recommendations based on user activity (providing Netwrix Access Analyzer (formerly Enterprise
Auditor) is collecting activity data). By default, these recommendations are based on a 90-day
sample of activity. However, this configuration can be changed by editing the
`AccessInformationCenter.Service.exe.config` file in the Access Information Center installation
directory:

…\STEALTHbits\Access Information Center

Follow the steps to modify the activity days parameter.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.config` file with a text editor, for
example Notepad.

![Activity Days parameter in the config file](/img/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/configfileactivitydays.webp)

**Step 2 –** Locate the `ActivityDays` parameter. By default, the value will be set to 90 days.
Change the value to the desired number of Activity Days for the sample. For example, the parameter
would look like this if set to 120 days:

```
<add key="ActivityDays" value="120" />
```

**Step 3 –** Save and close the `AccessInformationCenter.Service.exe.config` file.

Owner recommendations now use the assigned number of activity days as a sample during an Resource
Review.
