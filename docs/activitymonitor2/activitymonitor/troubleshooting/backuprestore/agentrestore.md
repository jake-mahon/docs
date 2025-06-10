# Agent Restoration

Follow the steps to restore the configuration, Active Directory configuration file, and activity log files for Activity Monitor Agents deployed on file system servers, SharePoint servers, and domain controllers.

__CAUTION:__ Restore the agent before restoring the console to ensure connectivity and monitoring functionality

__Step 1 –__ Reinstall the Activity Monitor Agents.

__Step 2 –__ Replace the ```SBFileMon.ini``` file with the backed up configuration file.

__Step 3 –__ Replace the ```SAMConfig.xml``` file with the backed up Active Directory event data file.

__Step 4 –__ Disable all activity monitoring on the Monitored Hosts and Monitored Domains page.

__Step 5 –__ Use the Console to update the passwords if the agent is restored on a different server.

__Step 6 –__ Use the Console to update the archive password, or the archive location if the location is moved.

__Step 7 –__ Restore the log files with the backed up activity log files.

__Step 8 –__ Enable all activity monitoring.

The configuration, Active Directory event data file, and activity log files are now restored on the Activity Monitor Agents.
