# Application server

#### System Components

|                   |                    |                    |
| ----------------- | ------------------ | ------------------ |
| Attribute         | Minimum            | Recommended        |
| OS                | MS Win Server 2019 | MS Win Server 2025 |
| Architecture      | x64                | x64                |
| CPU [# Cores]     | 4                  | 8                  |
| RAM [GB]          | 16                 | 32                 |
| Disk Space [GB]   | 70                 | 100                |
| MS .Net Framework | 4.8                | 4.8.1              |
| MS WMF            | 5.1                | 5.1                |

####

#### Required configuration

- Service User: local admin rights, 'logon as a service' allowed
- PowerShell Execution Policy: RemoteSigned
- Mandatory Ports/firewall rules

  - Port 443 HTTPS for connection to the Netwrix Password Secure license server (outgoing)
  - Port 1433 TCP for communication with SQL Server (outgoing)
  - Port 11011 TCP for communication with windows applications or web server IIS (incoming)
  - Port 11016 TCP for the Web services (incoming; only when using the Web Application)
  - Port 11018 TCP for real-time update (incoming)
  - Port 11014 TCP for the backup service (usually does not need to be unlocked)
  - Port 11015 TCP for Entra ID communication (incoming; only when using the Entra ID
    provisioning)
  - Port 11019 TCP for using Password Secure as Identity Provider (SAML) (incoming)

- (Optional) Server needs to be domain-joined (only when using AD provisioning (not Entra ID))
- (Optional) Provide SMTP-Server details: hostname, port, auth method, protocol (mandatory for a
  variety of features)

# MSP System

To ensure optimal operation, we recommend that the following hardware resources are made available:

## Microsoft SQL Server

The following system requirements are the minimum system requirements and should manage around 10
customers with less than 20 users each.

- Windows Server 2016 (or newer)
- MSSQL Server 2014 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 100 GB HDD

**CAUTION:** Please note, that using a SQL Server with Express edition is not recommended because of
diverse limitations there.

If your customer's count is growing over time, you should add every 200 users a minimum of at least:

- 2 CPU’s
- 8 GB RAM

## Application Server

The following system requirements are the minimum system requirements and should manage around 10
customers with 20 users each.

- Windows Server 2016 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 50 GB HDD
- .NET Framework 4.8

If your customer's count is growing over time, you should add every 200 users a minimum of at least:

- 1 CPU
- 4 GB RAM

RECOMMENDED: Currently, we suggest you use an application server to handle a max of about 100
customers. So if you reach 100 customers, you should set up a second Application Server or use some
sort of load balancing between the application servers.

**CAUTION:** Every additional 1000 users an additional Web-Endpoint - incl. loadbalancing - is
recommended

**CAUTION:** Every additional 100 customers/1000 users an additional Application Server - incl.
loadbalancing - is recommended.

NOTE: Please note that individual variables - like the number of passwords per user - will affect
performance. Especially for MSP-Systems it is required to monitor performance continuously, and add
additional resources on demand.
