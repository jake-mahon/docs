# Common Errors

This section lists the errors common to all APIs. For errors specific to an API, see the topic for
that API.

| Sr. # | Error Code | Error                 | Description                                 |
| ----- | ---------- | --------------------- | ------------------------------------------- |
| 1.    | 400        | Bad request           | Wrong parameters                            |
| 2.    | 401        | Unauthorized          | Wrong or expired token                      |
| 3.    | 404        | Not found             | The URL is incorrect or object is not found |
| 4.    | 405        | Method not allowed    | Wrong HTTP verb is used in the request      |
| 5.    | 500        | Internal server error | An exception or error occurred in API       |
| 6.    | 501        | Not implemented       | Required function is not implemented by API |
| 7.    | 503        | Service unavailable   | API service is not available                |

See Also

- GroupID APIs
- [User APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)
- Group APIs

# Get Token

This API generates a token for a user to access the GroupID APIs. This API is also used to get a
valid token in case the token expires in a session.

## Endpoint

https://demomachine:4443/GroupIDSecurityService/connect/token

## HTTP Method

POST

### Parameters Values and Description

Pass the parameters listed in the table in the request body using the following format:

```
application/x-www-form-urlencoded
```

| Name              | Description                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| grant_type        | Password                                                                                                                            |
| username          | Send the username against this parameter to access APIs                                                                             |
| password          | Password of the user                                                                                                                |
| client_Id         | Secret of GroupID API from the SVC.Client database table                                                                            |
| client_secret     | Secret of GroupID API from the SVC.Client database table                                                                            |
| identity_store_id | The ID of the identity store in which the user exists. You can get the identity store ID from the SVC.Identitystore database table. |

#### Sample Response Syntax

```
{
    "access_token": <token value> 
    "refresh_token": <refresh token value> 
    "scope": "directorymanager.api groupid_identity offline_access openid profile",
    "token_type": "Bearer",
    "expires_in": 1200
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- Get Token
- [User APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)
- [Group APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)

# GroupID APIs

GroupID APIs enable developers to quickly intergrate their applications with GroupID to "perform
actions" such as group creation and lifecycle operations using a relevant GroupID API.

Various GroupID functions can be performed using these APIs. The response can be returned in JSON
format.

These URLs represent various resources — any information or content accessed at that location, which
can be returned in JSON format. Often resources have one or more methods that can be performed on
them over HTTP, like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. The action represented by the
first and last of these is clear, but `POST` and `PATCH` have specific meanings. How they are
defined is confusing, but the general rule is: use `POST` to create resources, `PUT` and `PATCH` to
update resources.

NOTE: All the APIs documented in the API section are for an Active Directory based identity store.
In each API, the **Sample Request Syntax** and the **Sample Response Syntax** sections have
attributes that are supported in an Active Directory based identity store.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
