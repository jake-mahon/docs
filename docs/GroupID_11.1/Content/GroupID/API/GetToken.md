---
sidebar_position: 7011
title: Get Token
---

# Get Token

This API generates a token for a user to access the Directory Manager APIs. This API is also used to get a valid token in case the token expires in a session.

## Endpoint

https://machinename:4443/GroupIDSecurityService/connect/token

## HTTP Method

POST

### Parameters Values and Description

Pass the parameters listed in the table in the request body using the following format:

```
application/x-www-form-urlencoded
```
| Name | Description |
| --- | --- |
| grant\_type | password |
| username | Send the username against this parameter to access APIs |
| password | Password of the user |
| client\_Id | Secret of Directory Manager API from the SVC.Client database table |
| client\_secret | Secret of Directory ManagerAPI from the SVC.Client database table |
| identity\_store\_id | The ID of the identity store in which the user exists.  You can get the identity store ID from the SVC.Identitystore database table. |

#### Sample Response Syntax

```
{  
    "access_token":    
    "refresh_token":    
    "scope": "groupid.api groupid_identity offline_access openid profile",  
    "token_type": "Bearer",  
    "expires_in": 1200  
}
```