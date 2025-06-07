# I always use a proxy and the cloud client cannot seem to make contact with the services (see FAQ Item #3 above first.) What else can I try?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) cloud service is running as Local Service. That service might need to be instructed to be used to specify a proxy for the LocalService Account.

The keys you can manipulate are: HKEY\_USERS.DEFAULTSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnectionsDefaultConnectionSettings and SavedLegacySettings.

The ideal way to do this is as follows:

__Step 1 –__ Log on as a local admin to the machine.

__Step 2 –__ Create the right proxy info in your IE browser as your own user.

__Step 3 –__ Find the ```HKEY_Current_UserSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnections```

```"DefaultConnectionSettings"```

__Step 4 –__ Find the ```HKEY_Current_UserSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnections```

```"SavedLegacySettings"```

__Step 5 –__ Copy each one to the path for the .```DEFAULT profile. HKEY_USERS.DEFAULTSoftwareMicrosoftWindowsCurrentVersionInternet SettingsConnectionsDefaultConnectionSettings``` and ``` SavedLegacySettings.```

You should see the proxy information like what is seen here in the binary value.

![373_1_image005sdfggrt](/static/img/product_docs/policypak/policypak/troubleshooting/cloud/373_1_image005sdfggrt.png)
