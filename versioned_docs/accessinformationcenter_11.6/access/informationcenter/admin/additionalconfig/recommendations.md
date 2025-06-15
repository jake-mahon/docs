# Activity Days Sample for Recommendations

During a Resource Review, the Access Information Center can provide the owner of a resource with
recommendations based on user activity (providing Netwrix Enterprise Auditor is collecting activity
data). By default, these recommendations are based on a 90-day sample of activity. However, this
configuration can be changed by editing the `AccessInformationCenter.Service.exe.config` file in the
Access Information Center installation directory:

…\STEALTHbits\Access Information Center

Follow the steps to modify the activity days parameter.

**Step 1 –** Open the `AccessInformationCenter.Service.exe.config` file with a text editor, for
example Notepad.

![Activity Days parameter in the config file](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/additionalconfig/configfileactivitydays.png)

**Step 2 –** Locate the `ActivityDays` parameter. By default, the value will be set to 90 days.
Change the value to the desired number of Activity Days for the sample. For example, the parameter
would look like this if set to 120 days:

```
<add key="ActivityDays" value="120" />
```

**Step 3 –** Save and close the `AccessInformationCenter.Service.exe.config` file.

Owner recommendations now use the assigned number of activity days as a sample during an Resource
Review.
