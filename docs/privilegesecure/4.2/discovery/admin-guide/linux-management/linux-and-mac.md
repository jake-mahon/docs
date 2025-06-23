# Privilege Secure and Linux

Privilege Secure and Linux

# Privilege Secure and Linux

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

This topic covers the processes surrounding Privilege Secure with Linux systems. Specifically
covering:

- Privilege Secure’s **Linux Registration** process, via API calls, through Postman or QuickStart.
- Privilege Secure’s general **JITA Request for Linux** using the bridged AD accounts
- **Protect Modes** JITA+DENY with the applied modifications to sudoers.d directory
- **“Under the Hood”**, what Privilege Secure is doing with the 3 reference files used for Privilege
  Secure’s inventory and visibility of Linux systems

### Linux Registration Setup

Similar to registering Windows systems, there is some prep work that is needed to allow Privilege
Secure processes to complete on the newly registered Linux machines. Here are the outlined items to
be completed prior registering Linux systems.

- A service account will be required to register/enroll the system within Privilege Secure. This
  account will need to have sudo permissions on the Linux endpoint(s).
- Adding a sudo user:

  - For users experienced with Linux, add line to /etc/sudoers file with the permissions for user,
    ‘example_user’ show here: `example_user ALL=(ALL) NOPASSWD: ALL`
  - [Linux: Add Sudo User to Ubuntu System](/docs/privilegesecure/4.2/discovery/admin-guide/linux-management/linux-add-sudo-user.md)

### Linux Registration - (pre 2.18.0)

The below Zendesk support article, which covers the fields sent during the registration process
including the admin account(s) that will be added to the Linux endpoint and used for JITA access.  
Linux registration can be completed via either of the below methods. The Postman option will allow
for a single system registration and the QuickStart option will allow for bulk systems registration.

- Postman program (used for individual system registration) -
  [Postman Linux Registration](/docs/privilegesecure/4.2/discovery/admin-guide/linux-management/postman-linux-registration.md)
- QuickStart script (used for bulk system registration) -
  [QuickStart Script](/docs/privilegesecure/4.2/discovery/admin-guide/configuration-settings/quickstart-script.md)

## JITA Request for Linux Systems

- Domain Account: This account will be “linked” to the local Linux account on the end point, and
  displayed in the Privilege Secure inventory.
- Local Linux Account: Local account that was added to the Linux system to allow JITA SSH access.

Linux JITA Session Behavior

- User requests JITA for a Linux system.
- If it is the first time a user is requesting access to Linux system, Privilege Secure creates a
  local account on the Linux machine, using AD credentials.

  - Example entry into /etc/passwd for user ‘s1_user’:
    `s1_user:x:1005:1005:PrivilegeSecure AD Bridged Account:/home/s1_user:/bin/sh`
  - User can then SSH to the linux box with just username (case sensitive), no domain required.

- Privilege Secure also create an entry for that account in the `/etc/sudoers/` providing sudo
  capabilities.
- Once the JITA session expires:

  - The entry created for the user in the `/etc/sudoers/` directory is removed, removing sudo
    capability.
  - The password set on the account is scrambled.
  - The AD account created remains in /etc/passwd.

## Protect Modes

Privilege Secure users should be using a provisioned domain account to get JITA access to the linux
system. Protect Modes apply to accounts that have been added locally to the /etc/sudoers file or
/etc/sudoers.d directory.

Always backup the original sudoers file before placing a system into a Protect mode.   Example of
command to use on the system to be protected:

sudo cp /etc/sudoers /etc/sudoers.orig

Protect Mode: JITA

- Permanent access could be granted by setting the account to persistent. This could be done for a
  service account that needs to have access to the system at all times.
- Privilege Secure recognizes newly added local accounts to the /etc/sudoers file or /etc/sudoers.d
  directory
- The accounts recognized are added to Privilege Secure’s inventory, with the policy persistent: No
  and on Host:No.
- The account is removed from the /etc/sudoers file or /etc/sudoers.d directory

Protect Mode: DENY

- The only different from Protect Mode: JITA is the discovered local account is not added
  toPrivilege Secure’s inventory. So these accounts can not be set to persistent.

## Under the Hood

3 files/locations that Privilege Secure focuses on with the associated permission

- /etc/sudoers.d directory- Read and Write
- /etc/passwd file- Read and Write
- /etc/sudoers file- Read and Write

What we are not doing yet is looking at what users are in the “sudo” group. The sudo group is
referenced to the “wheel” group in some flavors of Linux.

```
# Allow members of group sudo to execute any command
%sudo    ALL=(ALL:ALL) ALL

```

Privilege Secure’s visibility of whether an account exist for a Linux system is done via the
/etc/passwd file, this file doesn’t show/define permissions.

Privilege Secure reads the sudoers file, within the /etc directory, to check for user and group
privilege specifications.

During JITA sessions and expirations Privilege Secure will modify the /etc/sudoers file.

# Linux and Mac Lightweight Directory Bridging - JWT and Passwords

Linux and Mac Lightweight Directory Bridging - JWT and Passwords

# Linux and Mac Lightweight Directory Bridging - JWT and Passwords

This purpose of this article is to walk through the underpinnings for Linux and MacOS endpoints in
regards to storing passwords in the JWT access token.

**NOTE:** This is farily technical and any questions or concerns can be addressed with the Support
Team.

## Granting Access to Linux/ MacOS systems

When the user requests access to a system:

An API call is made using the JWT. The encrypted password is extracted from the JWT and
(temporarily) stored in the database in the `queue` collection, along with information about the
computer being accessed and the user making the request.

- When the Privilege Secure worker service picks up the `queue` item for processing, it now has
  access to the user’s active directory username and password. If the bridging mode for the system
  is “Privilege Secure” (lightweight directory bridging), it creates or updates a local user on the
  system with the username and password to match Active Directory. It also adds the user to the
  sudoers file.
- When the worker finishes, it removes the encrypted password from the database `queue` record.
- When the access session ends:

  - The worker or scanner service removes the user’s sudoers permission from the system. In
    certain cases, the user’s password is also scrambled. The created local user and associated
    files are left on the system.

## User’s Active Directory Password is Stored In JWT Access Token

Privilege Secure uses JWT tokens for API authentication. Part of the information embedded in the JWT
may include an encrypted password. The embedded password is encrypted using the key from Docker
secrets.

There are two ways for the user to provide this password:

- If the login method includes submitting an Active Directory domain/ username/ password to
  Privilege Secure, that password is stored when the JWT is first issued.
- Otherwise, when the user performs an action in the Web UI that might require their password, a
  dialog appears prompting for a password. The Web UI then sends the password to the API and obtains
  a new JWT token, which now includes the password. The new JWT can then be used to perform the
  action.

In either case, Privilege Secure does not store this password after issuing / updating the JWT.

## JWT access tokens in Privilege Secure

**CAUTION:** This is just a brief overview. For more information on how the JWT works, see
[jwt.io](https://jwt.io/).

- A obtains an access token by calling an API endpoint on the Privilege Secure API:

  - Example: `/api/v1/login`
  - Example: `/api/v1/login/sso`

- Privilege Secure responds with a signed access token ([JWT](https://jwt.io/introduction)) with
  some embedded information about the user.

  - Privilege Secure does NOT store the access token after the login request finishes.

- The Web UI (or API client) sends the JWT with every API request going forward.
- The JWT remains valid until the expiration date encoded in the JWT.
- The JWT can be decoded by anyone that has access to the user’s browser storage. They might see a
  payload such as:

```
{
"access": {
"date_added": "2019-06-17T22:21:24.395Z",
"ga_enabled": false,
"role": "admin"
},
"distinguishedName": "CN=Admin Integration-Test,CN=Users,DC=rtest,DC=com",
"encpass": "p9wolaWb3BYa5QFIK0FEowmjaWZIaCp1c/ryoWap7RhC6tHX2ZhWHbBEq2hcG49kRTPIH702jybMlT+bQd7cKu",
"exp": "2025-10-21T21:08:13.887746",
"iat": "2023-01-25T21:08:13.888887",
"id": "5d08122657b096e79c12c4cf",
"jti": "7ce3123f-e963-4635-ac90-fef5a80f313f",
"objectSid": "S-1-5-21-1366766991-2637077591-3940904154-210946",
"sAMAccountName": "adminintegrationtest",
"type": "access"
}
```
