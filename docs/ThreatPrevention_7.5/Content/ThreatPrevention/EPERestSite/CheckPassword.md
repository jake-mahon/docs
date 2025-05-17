---
sidebar_position: 6647
title: Check Password APIs
---

# Check Password APIs

You can use APIs to check a candidate password against the EPE rules defined on the [EPE Settings Window](../Admin/Configuration/EPESettings "EPE Settings Window").

* POST api/Epe/CheckPassword (Basic)
* POST api/Epe/CheckPassword (Digest)
* POST api/Epe/CheckPassword (Bearer)

Create a JSON file with a request. This file should contain the account name and the password you want to test.

**NOTE:** The EPE Rest service only checks the password; it does not change it.

## POST api/Epe/CheckPassword (Basic)

This API verifies the password value.

Authentication required – Yes

Authentication Type – Basic

Input Parameters

```
{  
"username":"domain\\account",  
"password":"password",  
"server":"DC_DNS_Name"  
}
```
The “username” and “password” parameters are required. The “server” parameter is optional.

Example

![POST api/Epe/CheckPassword (Basic)](../../Resources/Images/ThreatPrevention/EPERestSite/Password/Basic.png "POST api/Epe/CheckPassword (Basic)")

## POST api/Epe/CheckPassword (Digest)

This API verifies the password value.

Authentication required – Yes

Authentication Type – Digest

Input Parameters

```
{  
"username":"domain\\account",  
"password":"password",  
"server":"DC_DNS_Name"  
}
```
The “username” and “password” parameters are required. The “server” parameter is optional.

Required Header Input Parameters

```
"User”:   
"Authorization”:”Hash”  
"Hash": 
```
Example

![POST api/Epe/CheckPassword (Digest)](../../Resources/Images/ThreatPrevention/EPERestSite/Password/Digest.png "POST api/Epe/CheckPassword (Digest)")

## POST api/Epe/CheckPassword (Bearer)

This API verifies the password value.

Authentication required – Yes

Authentication Type – Bearer

Input Parameters

```
{  
"username":"domain\\account",  
"password":"password",  
"server":"DC_DNS_Name"  
}
```
The “username” and “password” parameters are required. The “server” parameter is optional.

Required Header Input Parameters

```
"User”:   
"Authorization”:”Bearer ”
```
Example

![POST api/Epe/CheckPassword (Bearer)](../../Resources/Images/ThreatPrevention/EPERestSite/Password/Bearer.png "POST api/Epe/CheckPassword (Bearer)")