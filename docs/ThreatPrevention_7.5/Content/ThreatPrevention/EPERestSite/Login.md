---
sidebar_position: 6650
title: Login to EPE REST Service APIs
---

# Login to EPE REST Service APIs

You can use APIs to login to the EPE REST Service:

* POST api/account/login (Digest)
* POST api/account/logoff (Digest)
* POST Token (Bearer)

## POST api/account/login (Digest)

This API is used to login under a specified account.

This operation returns a session hash value in the body of the response, that can be used for api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in the header of the request.

Authentication required – No

Required Input Parameters

```
{  
"username":"username",  
"password":"password"  
}
```
Example

![POST api/account/login (Digest)](../../Resources/Images/ThreatPrevention/EPERestSite/Login/Login.png "POST api/account/login (Digest)")

## POST api/account/logoff (Digest)

This API is used to log off from a specified session.

This operation makes session for the specified account and the hash value is not valid anymore.

Authentication required – Digest

Required Header Input Parameters

```
"User”:   
"Authorization”:”Hash”  
"Hash": 
```
Example

![POST api/account/logoff (Digest)](../../Resources/Images/ThreatPrevention/EPERestSite/Login/LogOff.png "POST api/account/logoff (Digest)")

## POST Token (Bearer)

This API is used to login under a specified account.

This operation returns an access\_token value in the body of the response, that can be used for api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in the header of the request.

Authentication required – Bearer

Required Input Parameters (TEXT Format)

```
userName=&password=&grant_type=password&client_Id=self
```
Example

![POST Token (Bearer)](../../Resources/Images/ThreatPrevention/EPERestSite/Login/Token.png "POST Token (Bearer)")