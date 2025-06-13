# Configure Synology File Servers for Audit

Follow the steps to configure your Synology NAS devices to transmit the local system logs for monitoring.

__Step 1 –__ Navigate to __Control Panel > File Services > SMB > Log Settings__. Please note that all audit types should be enabled.

__Step 2 –__ Log in to the Synology Web Administration Console.

__Step 3 –__ Navigate to __Log Center > Log Sending__ and configure the following:

- Server – Provide the IP address or the computer listened by Syslog. It should be a running Netwrix Syslog service or a third-party Syslog forward service.
- Port – Use the default value (514).
- Transfer protocol – select TCP or __UDP__.
- Log format – Set to "IETF (RFC 5424)".
- Enable secure connection – Use the default value.
- Import certificate – Use the default value.

__Step 4 –__ Click Apply.

__NOTE:__ Currently, Netwrix Auditor cannot collect activities using a local Synology user.
Data collection only supported via a domain user with the necessary access privileges to the Synology file server.
