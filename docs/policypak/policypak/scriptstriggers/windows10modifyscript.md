# What is the expected behavior on Windows 10 when you MODIFY an existing Endpoint Policy Manager Scripts script?

If you modify a script using the MMC or in-cloud editor, then the compute re-processes the new script, the following will occur:

__Step 1 –__ The  REVERT script is run, if present.

__Step 2 –__ The newly changed script is then run.

Here's an example:

__Step 1 –__ If you used Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts and used it to deploy 7zip from ```\\server\share```

__Step 2 –__ AND you have a REVERT script to Uninstall it...

__Step 3 –__ THEN you change deploy script to change the location of 7Zip to ```\\newserver123\newshare123```

Then the expected behavior should be:

__Step 1 –__ The REVERT script is run (7zip uninstalls).

__Step 2 –__ The newly changed script is then run (7zip reinstalls).

This will all occur in the same processing cycle, and should not take several GPupdates or Endpoint Policy Manager Cloud syncs.
