# Requirements

## Relevant rights

The following options are required to use the discovery service:

### User rights

- Show discovery service module
- Can manage discovery service system tasks

## Discovery Service Requirements

One requirement for the __Discovery Service__ is data about __Active Directory users__, __user accounts__ and __service accounts__. A __Network Scan__ is used to scan the network and collect this data. Before configuring the __Network Scan__, a password needs to be issued that provides __access__ to the corresponding __server/client__ and __services on a network__ for collecting the data. This user should be a member of admin for the corresponding group of domains. Otherwise, you can use a domain administrator.

__CAUTION:__ A corresponding __password__ with __rights__ for the __domains__ must exist before adding a __Network Scan__!

### Password

- Required for the __authentication__ process with the __Active Directory computer__.
- Required for the __authentication__ process with the __WMI (Windows Management Instrumentation)__ on the computer to be scanned.

### Requirements for the network infrastructure

- The computer to be scanned and AD controller must be accessible via the network.
- The service: “Windows Management Instrumentation” must have been started on the computer to be scanned (carried out by Windows as standard).
- Help section for starting the service: [Microsoft Website](https://msdn.microsoft.com/de-de/library/aa826517(v=vs.85).aspx)
- The firewall must not block WMI requests (not blocked as standard).
- Help section for configuring the firewall: [Microsoft Website](https://msdn.microsoft.com/de-de/library/aa822854(v=vs.85).aspx)

NOTE: Only __IPv4 addresses__ can currently be scanned.

### Open ports for the scan (necessary)

LDAP: Port 389(TCP,UDP)
RPC/WMI: Port 135(TCP)
(Windows Server 2008, Windows Vista and higher versions) – port 49152-65535 (TCP) or a static WMI port
(Windows 2000, Windows XP and Windows Server 2003) – port 1025-5000 (TCP) or a static WMI port

### Computer name (Hostname)

1. IP address:
   Indicates the IP address for the element discovered during the scan – meaning where it was found (the IP address of the domain controller in the case of an Active Directory user).
2. Computer name and associated IP address:
   The computer name is first requested on the __DNS server__ for the domain. The computer name returned by the server also contains the domain names as a postfix (e.g. Client01.domain.local).
   If there is no entry on the domain for the requested IP address, the computer name is determined via __NetBIOS__. The domain name is not displayed on the computer (e.g. Client01).
   In Netwrix Password Secure V8, the __DNS request__ is the preferred function for determining the computer name. If no result is delivered, a request via __NetBIOS__ is made.
