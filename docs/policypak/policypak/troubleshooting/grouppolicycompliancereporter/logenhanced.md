# How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?

If asked by Netwrix Endpoint Policy Manager (formerly PolicyPak) Support to turn on enhanced logging, follow the steps detailed below.

Enhanced logging is controlled by registry entries. As enhanced logging creates a potentially large amount of data, this allows a quick turn on and off to limit the amount of ‘junk' in the logs.

## Pre-requisites:

Download the .reg update files from [https://www.policypak.com/pp-files/PPGPCR_Logging.zip](https://www.policypak.com/pp-files/PPGPCR_Logging.zip). After downloading, unzip the files and copy them to the required computer(s): GPCR Server, Client (Admin console), and/or Endpoint.

## Get Logs from Server and/or Client

__Step 1 –__ Close Admin Console

__Step 2 –__ Import required ‘Enable' Logging reg files (Admin rights required)

- For Server: PPGPCR Server Enable``` Logging.reg```
- For Client: PPGPCR Client (Admin Console) Enable ```Logging.reg```

__Step 3 –__ If getting server logs, Stop and Start "Endpoint Policy Manager GP Compliance Reporter Server Service"

__Step 4 –__ Open the Admin Console and force the issue – make it do the thing and cause the error

__Step 5 –__ Close the Admin Console

__Step 6 –__ Import required ‘Disable' Logging reg files (Admin rights required)

- For Server: PPGPCR Server Disable ```Logging.reg```
- For Client: PPGPCR Client (Admin Console) Disable ```Logging.reg```

__Step 7 –__ If getting server logs, Stop and Start "Endpoint Policy Manager GP Compliance Reporter Server Service"

__Step 8 –__ Zip the requested logs from the following directories

- For Server:``` %ProgramData%\PolicyPak\PolicyPak ```Group Policy Compliance Reporter ```Server\Diagnostics```
- For Client: ```%LOCALAPPDATA%\PolicyPak\PolicyPak``` Group Policy Compliance ```Reporter\Diagnostics```

__Step 9 –__ If both logs were requested, combine to one zip and rename to reference your ticket number (e.g. ```SRX0000????-gpcr.zip```), otherwise just rename the one zip file

__Step 10 –__ Upload to ShareFile link provided by your support rep.

## Endpoint

__Step 1 –__ Import required ‘Enable' Logging reg files (Admin rights required)

- For Endpoint: PPGPCR Endpoint Enable ```Logging.reg```

__Step 2 –__ Run "```GPUpdate /force```" to trigger the auditor

__Step 3 –__ Wait about 2-5 minutes to allow the trigger to take place and the log collection to complete

__Step 4 –__ Import required ‘Disable' Logging reg files (Admin rights required)

- For Endpoint: PPGPCR Endpoint Disable ```Logging.reg```

__Step 5 –__ Zip the requested logs from the following directories and rename to reference your ticket number (e.g. ```SRX0000????-gpcr.zip```)

- For Endpoint: ```%ProgramData%\PolicyPak\PolicyPak``` Group Policy Compliance Reporter Auditor ```Endpoint\Diagnostics```

  __NOTE:__  If also gathering Server and/or Client logs, add this log to the ```SRX*-gpcr.zip``` file created in the previous section

__Step 6 –__ Upload to ShareFile link provided by your support rep.
