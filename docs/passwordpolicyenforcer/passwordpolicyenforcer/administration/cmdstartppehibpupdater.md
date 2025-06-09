# Start-PPEHibpUpdater

The __Start-PPEHibpUpdater__ cmdlet starts an update of the Hibp database.

SYNTAX

__Start-PPEHibpUpdater__ [[__-Web__] `<_SwitchParameter_>`] __-Folder__ `<_string_>` [__-File__ `<_string_>`] __[-Inc__ `<_SwitchParameter_>`]

[`<_CommonParameters_>`]

PARAMETERS

__-Web__ `<_SwitchParameter_>`

Specify the update uses the NTLM Hashes file from the netwrix website.

__-Folder__ `<_string_>`

Folder with the HIBP database. Can also use __-D__ or __-d__.

__-Inc__ `<_SwitchParameter_>`

Type of update. Specify __full__ to update the entire database or __incremental__to add new entries to the existing database. Can also use __-I__ or __-i__.

__-File__ `<_string_>`

File with list of NTLM hashes. Can also use __-S__ or __-s__.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Start-PPEHibpUpdater -Folder "C:\HIBP\DB" -File "C:\Users\Administrator\Desktop\db for HIBP Updater not real small\stealthintercept-hibp-database-1.0.0.zip

![HIBP Update](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletstartppehibpupdater.png)
