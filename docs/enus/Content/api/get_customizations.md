---
sidebar_position: 1421
title: Get Customizations
---

# Get Customizations

Returns a list of customizations using the available user-defined filters.

## Request

**Name**

URL
:   https://.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=customscript\_flo\_int\_customization\_api&deploy=1

HTTP Method
:   POST

### Request Body JSON Object Definition

**Name** / **Value**

actionType
:   retrieveCustomizations

name
:   

scriptId
:   

type
:   

bundleId
:   

modifiedBy
:   

from
:   

to
:   

:::note
Request body names are case sensitive and mandatory. For the actionType parameter, it is always a constant value, in this case retrieveCustomizations.
:::

### Sample Request Body

```
{  
    "actionType": "retrieveCustomizations",  
    "name": "test",  
    "scriptId": "custscript_xxx_123",  
    "type": "1789",  
    "bundleId": "249434",  
    "modifiedBy": "2341"  
    "from": "123456789098",  
    "to": "09876543213465"  
}
```
### Request Headers

This API uses OAuth 1.0 type for its request headers and Token Based Authentication for user credentials. Header tokens should be encoded in HMAC SHA256.

### Format

Authorization: 

### Sample Request Header

`Authorization: OAuth oauth_consumer_key="xxx", oauth_nonce="xxx", oauth_signature="xxx", oauth_signature_method="HMAC-SHA256", oauth_timestamp="1698722057", oauth_token="xxx", oauth_version="1.0",realm="xxx"`

### Response

Returns a JSON format string.

### Object Definition

**Name** / **Type**

status
:   string

message
:   string

data
:   Array of JSON objects

### Data Object Definition

**Name** / **Type**

name
:   string

scriptId
:   string

internalId
:   string

type
:   JSON object

customizationUrl
:   string

### Type Object Definition

**Name** / **Type**

name
:   string

value
:   string

### Response JSON Object

```
{  
    "status": success or failed,  
    "message": Server response message,  
    "data": [  
        {  
            "name": ,  
            "scriptId": ,  
            "internalId": ,  
            "type": {  
                "name": ,  
                "value":   
            },  
            "customizationUrl":                   
        }  
    ]  
}
```
### Response Messages

**Message**

"Customization/s retrieved successfully"
:   Successfully pulled customization with the defined filters

"No Customizations."
:   No customization/s found with the defined filters

### Error Messages

An error message is returned if any exceptions are encountered.

### Sample Response

```
{  
    "status": "success",  
    "message": "Customization/s retrieved successfully",  
    "data": [  
        {  
            "name": "test (Body Field)",  
            "scriptId": "custbody44",  
            "internalId": "15238",  
            "type": {  
                "name": "Body Field",  
                "value": "5"  
            },  
            "customizationUrl": "/app/common/custom/custrecordentry.nl?  
            rectype=1065&id=15238&compid=TSTDRV1715311"  
        }  
    ]  
}
```
## Development

The Customizations API is developed using a RESTlet with API version 2.1.

Script Name
:   Strongpoint Int Customization API

Script ID
:   customscript\_flo\_int\_customization\_api

Filename
:   StrongpointIntegrationCustomizationAPI.js