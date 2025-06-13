# Console Backup

Follow the steps to back up the list of agents managed on the Activity Monitor Console.

__Step 1 –__ Back up the configuration file:

%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\Agents.ini

__Step 2 –__ Back up the license file:

%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\FileMonitor.lic

__Step 3 –__ Back up passwords.

Credentials for the agents are stored in the ```Agents.ini``` file in an encrypted form using PSAPI. They can only be decrypted on the same Windows workstation. To be able to restore the configuration on a different workstation, back up the passwords separately.

All key components necessary for data recovery have now been backed up for the console.
