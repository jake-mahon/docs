# Persuading Users to Enroll

The Web Interface includes a REST API which your web sites and applications can query to determine if a user is enrolled. Your web site or application can take appropriate action to encourage the user to enroll. This could be anything from displaying a discreet message to denying access until the user enrolls.

## Enabling the API

The API is disabled by default. If an attacker sends many queries to the API, they could try to guess the domain and user names of enrolled users. They could get the same information by sending many requests to the Web Interface.API is the more attractive target because API responds faster and API queries are not logged to the Audit Log.

If you do not want to enable the API because your Web Interface is accessible from the Internet, then you could leave the API disabled on your Internet-facing Web Interface and set up an internal Web Interface for API queries. Use the ServerIP registry value to point both Web Interfaces to the same NPR Server, and enable the API only on the internal server. See the [Multiple Server Installation](/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/installation.md#multiple-server-installation) topic for more information.

Follow the steps below to enable the API.

__Step 1 –__ Start the Registry Editor (regedit.exe).

__Step 2 –__ Expand the __HKEY\_LOCAL\_MACHINE__, __SOFTWARE__, __ANIXIS__, __ANIXIS Password Reset__, and __3.0__ registry keys.

__Step 3 –__ Create a new __DWORD__ value called __WebAPIState__, and set it to 1.

![persuading_users_to_enroll](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/administration/persuading_users_to_enroll.jpg)

## Querying the API

Send a GET request with the user's Active Directory domain and user name like:

GET https://[server]/pwreset/apr.dll/api/enrollments/__[domain]__/__[user]__

You can also use the User Principal Name (UPN):

GET https://[server]/pwreset/apr.dll/api/enrollments/upn/__[user@domain]__

## Interpreting the Response

There are three possible responses:

| Response | Meaning |
| --- | --- |
| ``{"isEnrolled": true}`` | User is enrolled |
| ``{"isEnrolled": false}`` | User is not enrolled or does not exist |
| ```{}``` | System maintenance is running |

The API may also return one of these HTTP errors:

| Error | Reason |
| --- | --- |
| 400 Bad Request | Invalid request path |
| 403 Forbidden | API disabled, or cannot read configuration |
| 500 Internal Server Error | Other error |

## Performance and Caching

API performance is dependent on many factors. Synchronous queries will suffice in most cases, but asynchronous queries are recommended to avoid delays.

Avoid unnecessary calls to the API as they can overload the server. Try to call the API only once after users logon.

Caching improves performance and increases capacity. When the API sends a __user is enrolled__ response, it requests caching for up to two weeks. The web browser should cache the response and use it for the next two weeks before querying the server again. No caching is requested for other responses.

__NOTE:__ You may get a __user is enrolled__ response after deleting an enrolled user when testing the API. Clearing the browser cache may fix this, but not if other HTTP caches have cached the response.
