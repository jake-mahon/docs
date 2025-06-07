# Get Customizations

Returns a list of customizations using the available user-defined filters.

## Request

__Name__

URL
:   https://<account\_id\_xxx>.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=customscript\_flo\_int\_customization\_api&deploy=1

HTTP Method
:   POST

### Request Body JSON Object Definition

__Name__ / __Value__

actionType
:   retrieveCustomizations

name
:   <customization\_name>

scriptId
:   <script\_id>

type
:   <type>

bundleId
:   <bundle\_id>

modifiedBy
:   <employee\_id>

from
:   <date\_in\_milliseconds\_in\_string\_format>

to
:   <date\_in\_milliseconds\_in\_string\_format>

Request body names are case sensitive and mandatory. For the __actionType__ parameter, it is always a constant value, in this case __retrieveCustomizations__.

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

Authorization: <_encoded authentication code_>

### Sample Request Header

```Authorization: OAuth oauth_consumer_key="xxx", oauth_nonce="xxx", oauth_signature="xxx", oauth_signature_method="HMAC-SHA256", oauth_timestamp="1698722057", oauth_token="xxx", oauth_version="1.0",realm="xxx"```

### Response

Returns a JSON format string.

### Object Definition

__Name__ / __Type__

status
:   string

message
:   string

data
:   Array of JSON objects

### Data Object Definition

__Name__ / __Type__

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

__Name__ / __Type__

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
            "name": <customization name>,  
            "scriptId": <script id>,  
            "internalId": <internal id>,  
            "type": {  
                "name": <customization type name>,  
                "value": <customization type id>  
            },  
            "customizationUrl": <customization url link>                  
        }  
    ]  
}
```

### Response Messages

__Message__

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
