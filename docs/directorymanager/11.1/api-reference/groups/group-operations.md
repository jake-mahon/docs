# Create a Smart Group

Using this API, you can create a Smart Group in the identity store specified in the endpoint URL.
You have to provide the mandatory information for creating a Smart Group in the request syntax.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/DynamicGroup

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "UpdateOption":0,
  "IdentityStoreID": 2,
  "GroupName": "DemoSmartGroup1",
  "Container": "OU=Groups,DC=demo,DC=local",
  "AttributesCollection": {
    "AttributesCollection": {
      "name": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "sAMAccountName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "GroupType": [
        {
          "Value": "8",
          "Action": 0
        }
      ],
      "IMSGManagedGroupType": [
        {
          "Value": "2",
          "Action": 0
        }
      ],
      "XGroupSecurity": [
        {
          "Value": "Semi_Private",
          "Action": 1
        }
      ],
      "description": [
        {
          "Value": "Its the description!",
          "Action": 1
        }
      ],
      "UpdateOptions": [
        {
          "Value": "false",
          "Action": 1
        }
      ],
      "managedBy": [
        {
          "Value": "19a1822e-e7ef-4206-af75-1c2d8b1d15eb",
          "Action": 1
        }
      ],
      "identityStoreId": [
        {
          "Value": "2",
          "Action": 1
        }
      ],
      "IMSGObjectTypes": [
        {
          "Value": "6",
          "Action": 1
        }
      ],
      "IMSGCriteria": [
        {
          "Value": "(department Contains \"engineering\")",
          "Action": 1
        }
      ],
      "IMSGStartPath": [
        {
          "Value": "DC=demo,DC=local",
          "Action": 1,
          "AttributeCollection": {
            "Scope": "2"
          }
        }
      ],
      "SmartGroupMainType": [
        {
          "Value": "X.SmartGroup",
          "Action": 0
        }
      ],
      "info": [
        {
          "Value": "This is an automated group, please do not modify membership. Membership is controlled by GroupID.",
          "Action": 0
        }
      ],
      "mailNickname": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "displayName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "CN": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "objectClass": [
        {
          "Value": "MailEnabledGroup",
          "Action": 0
        }
      ],
      "objectCategory": [
        {
          "Value": "group",
          "Action": 0
        }
      ],
      "ContainerDistinguishedName": [
        {
          "Value": "OU=Groups,DC=demo,DC=local",
          "Action": 0
        }
      ]
    }
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "f8bc4524-fdcb-4b85-9f3f-d6c0af7c58ae",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

# Create an Entra ID Smart Group

Using this API you can create a Smart Group or a dynamic group in a Microsoft Entra ID identity
store. The following table lists the types of Smart Groups you can create using this API.

| Group Type             | Value |
| ---------------------- | ----- |
| Security Groups        | 4     |
| Distribution Groups    | 8     |
| Microsoft Office Group | 16    |
| Teams                  | 32    |

Each group type has its associated value. To create a Smart Group of a specific type, provide its
value in the Value attribute of the GroupType parameter.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/DynamicGroup

## HTTP Method

POST

#### Sample Request Syntax

```
{
    "IdentityStoreID": 3,
    "GroupName": "apiEntraSmart",
    "Container": "DC=5cjshm,DC=onmicrosoft,DC=com",
    "AttributesCollection": {
        "AttributesCollection": {
            "IMSGManagedGroupType": [
                {
                    "IdentityStoreId": 0,
                    "Value": "2",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "displayname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiEntraSmart",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "XGroupSecurity": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Private",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "GroupType": [
                {
                    "IdentityStoreId": 0,
                    "Value": "4",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "description": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiEntraSmart",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "enableofficefeatures": [
                {
                    "IdentityStoreId": 0,
                    "Value": "false",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "members": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {
                        "XMembershipType": ""
                    },
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "owners": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "userprincipalname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "commonname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objectclass": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Group",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objecttype": [
                {
                    "IdentityStoreId": 0,
                    "Value": "group",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "ContainerDistinguishedName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "UpdateOptions": [
                {
                    "Value": "false",
                    "Action": 1
                }
            ],
            "IMSGObjectTypes": [
                {
                    "Value": "6",
                    "Action": 1
                }
            ],
            "IMSGCriteria": [
                {
                    "Value": "(department Contains \"engineering\")",
                    "Action": 1
                }
            ],
            "IMSGStartPath": [
                {
                    "Value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                    "Action": 1,
                    "AttributeCollection": {
                        "Scope": "2"
                    }
                }
            ],
            "SmartGroupMainType": [
                {
                    "Value": "X.SmartGroup",
                    "Action": 0
                }
            ],
            "info": [
                {
                    "Value": "This is an automated group, please do not modify membership. Membership is controlled by GroupID.",
                    "Action": 0
                }
            ]
        },
        "FilePermissionCollection": {},
        "Type": null
    }
}
```

#### Sample Response Syntax

```
{
  "name": null,
  "type": 6,
  "status": 0,
  "message": null,
  "data": "21f7703a-2c74-4f22-8557-3401db64602a",
  "identityStoreObject": {
    "groupClassName": null,
    "name": null,
    "displayName": null,
    "samAccountName": null,
    "groupType": null,
    "groupScope": null,
    "msExchRequireAuthToSendTo": null,
    "hiddenFromAddressListsEnabled": false,
    "emailAddress": null,
    "alias": null,
    "isGroupInExludedContainer": false,
    "dc": null,
    "objectIdFromIdentityStore": "21f7703a-2c74-4f22-8557-3401db64602a",
    "identityStoreId": 6,
    "identityStore": {
      "identityStoreId": 6,
      "storeTypeId": 0,
      "identityStoreName": null,
      "description": null,
      "connectionString": null,
      "serviceAccountUser": null,
      "serviceAccountPassword": null,
      "isEnabled": false,
      "shouldReplicate": false,
      "isNotificationEnabled": false,
      "loginText": null,
      "imageURL": null,
      "storeType": null,
      "clusterConfigurations": null,
      "configurations": null,
      "roles": null,
      "clients": null,
      "links": null,
      "hasChildrenLoaded": false,
      "isMessagingSystemConfigured": false,
      "notification": null,
      "questions": null,
      "schemaBasedQuestions": null,
      "smsConfiguration": null,
      "identityStoreConfigurationValues": {},
      "preventDefaultQuestionCreation": false,
      "profileVerificationCriteria": null,
      "authenticationPolicy": null,
      "currentConnection": null,
      "preferredDomains": null,
      "excludedDomains": null,
      "domainPriortiesList": null,
      "preferredDCFallbackEnabled": null,
      "indexMappingVersion": null,
      "creationDate": 0,
      "qrCodeAuthentication": false
    },
    "objectType": "Group",
    "objectName": "apiEntraSmartNet",
    "objectDisplayName": null,
    "stopNotification": false,
    "attributesBusinessObject": {
      "attributesCollection": {
        "IMSGManagedGroupType": [
          {
            "identityStoreId": 0,
            "value": "2",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "displayname": [
          {
            "identityStoreId": 0,
            "value": "apiEntraSmartNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupSecurity": [
          {
            "identityStoreId": 0,
            "value": "Private",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "GroupType": [
          {
            "identityStoreId": 0,
            "value": "4",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "description": [
          {
            "identityStoreId": 0,
            "value": "apiEntraSmartNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "enableofficefeatures": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "members": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "owners": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "userprincipalname": [
          {
            "identityStoreId": 0,
            "value": "",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "commonname": [
          {
            "identityStoreId": 0,
            "value": "",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "objectclass": [
          {
            "identityStoreId": 0,
            "value": "Group",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "objecttype": [
          {
            "identityStoreId": 0,
            "value": "group",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ContainerDistinguishedName": [
          {
            "identityStoreId": 0,
            "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "UpdateOptions": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGObjectTypes": [
          {
            "identityStoreId": 0,
            "value": "6",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGCriteria": [
          {
            "identityStoreId": 0,
            "value": "(department Contains \"engineering\")",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGStartPath": [
          {
            "identityStoreId": 0,
            "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
            "dn": null,
            "action": 1,
            "attributeCollection": {
              "Scope": "2"
            },
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "SmartGroupMainType": [
          {
            "identityStoreId": 0,
            "value": "X.SmartGroup",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "info": [
          {
            "identityStoreId": 0,
            "value": "This is an automated group, please do not modify membership. Membership is controlled by GroupID.",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupExpirationPolicy": [
          {
            "identityStoreId": 0,
            "value": "0",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupExpirationDate": [
          {
            "identityStoreId": 0,
            "value": "9999 December 31 00:00:00",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ismailbox": [
          {
            "identityStoreId": 0,
            "value": "False",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ismailenabled": [
          {
            "identityStoreId": 0,
            "value": "False",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsExpired": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsDeleted": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGGroupIDVersion": [
          {
            "identityStoreId": 0,
            "value": "11.0",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGCreatedInVersion": [
          {
            "identityStoreId": 0,
            "value": "11.1.25059.04",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ]
      },
      "filePermissionCollection": {},
      "type": null
    },
    "elasticHitScore": 0
  },
  "details": [
    {
      "name": null,
      "type": 0,
      "status": 0,
      "message": "",
      "data": null,
      "identityStoreObject": null,
      "details": [],
      "currentDirectoryServer": null,
      "errorCode": null,
      "exceptionMessagesAttributeWise": null,
      "isResyncAble": true
    }
  ],
  "currentDirectoryServer": null,
  "errorCode": null,
  "exceptionMessagesAttributeWise": {},
  "isResyncAble": true
}
```

# Create a Static Group

Using this API, you can create a normal directory group, also called an unmanaged or static group,
in the given identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/StaticGroup

## HTTP Method

POST

## Sample Request Syntax

```
{
    "GroupName": "DemoGroup",
    "Container": "OU=Groups,DC=demo,DC=local",
    "AttributesCollection": {
        "AttributesCollection": {
            "sAMAccountName": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "name": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "CN": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "objectClass": [{
                "Value": "group",
                "Action": 0
            }],
            "groupType": [{
                "Value": "-2147483640",
                "Action": 0
            }],
            "XGroupScope": [{
                "Value": "Universal Group",
                "Action": 0
            }],
            "XGroupSecurity": [{
                "Value": "Semi_Private",
                "Action": 0
            }],
            "managedBy": [{
                "Value": "CN=Administrator,CN=Users,DC=demo,DC=local",
                "Action": 0
            }]
        }
    }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

# Create an Entra ID Static Group

Using this API you can create a Static Group in a Microsoft Entra ID identity store. The following
table lists the types of Static Groups you can create using this API.

| Group Type             | Value |
| ---------------------- | ----- |
| Security Groups        | 4     |
| Distribution Groups    | 8     |
| Microsoft Office Group | 16    |
| Teams                  | 32    |

Each group type has its associated value. To create a Static Group of a specific type, provide its
value in the Value attribute of the GroupType parameter.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/StaticGroup

## HTTP Method

POST

## Sample Request Syntax

```
{
    "IdentityStoreID": 3,
    "GroupName": "apiSecAzure",
    "Container": "DC=5cjshm,DC=onmicrosoft,DC=com",
    "AttributesCollection": {
        "AttributesCollection": {
            "IMSGManagedGroupType": [
                {
                    "IdentityStoreId": 0,
                    "Value": "1",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "displayname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiSecAzure",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "XGroupSecurity": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Private",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "GroupType": [
                {
                    "IdentityStoreId": 0,
                    "Value": "4",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "description": [
                {
                    "IdentityStoreId": 0,
                    "Value": "apiSecAzure",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "enableofficefeatures": [
                {
                    "IdentityStoreId": 0,
                    "Value": "false",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "members": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {
                        "XMembershipType": ""
                    },
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "owners": [
                {
                    "IdentityStoreId": 0,
                    "Value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
                    "DN": "",
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "userprincipalname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "commonname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objectclass": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Group",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objecttype": [
                {
                    "IdentityStoreId": 0,
                    "Value": "group",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "ContainerDistinguishedName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ]
        },
        "FilePermissionCollection": {},
        "Type": null
    }
}
```

#### Sample Response Syntax

```
{
  "name": null,
  "type": 6,
  "status": 0,
  "message": null,
  "data": "a9eec7fb-8027-4671-99c4-b6a55f8a2db5",
  "identityStoreObject": {
    "groupClassName": null,
    "name": null,
    "displayName": null,
    "samAccountName": null,
    "groupType": null,
    "groupScope": null,
    "msExchRequireAuthToSendTo": null,
    "hiddenFromAddressListsEnabled": false,
    "emailAddress": null,
    "alias": null,
    "isGroupInExludedContainer": false,
    "dc": null,
    "objectIdFromIdentityStore": "a9eec7fb-8027-4671-99c4-b6a55f8a2db5",
    "identityStoreId": 6,
    "identityStore": {
      "identityStoreId": 6,
      "storeTypeId": 0,
      "identityStoreName": null,
      "description": null,
      "connectionString": null,
      "serviceAccountUser": null,
      "serviceAccountPassword": null,
      "isEnabled": false,
      "shouldReplicate": false,
      "isNotificationEnabled": false,
      "loginText": null,
      "imageURL": null,
      "storeType": null,
      "clusterConfigurations": null,
      "configurations": null,
      "roles": null,
      "clients": null,
      "links": null,
      "hasChildrenLoaded": false,
      "isMessagingSystemConfigured": false,
      "notification": null,
      "questions": null,
      "schemaBasedQuestions": null,
      "smsConfiguration": null,
      "identityStoreConfigurationValues": {},
      "preventDefaultQuestionCreation": false,
      "profileVerificationCriteria": null,
      "authenticationPolicy": null,
      "currentConnection": null,
      "preferredDomains": null,
      "excludedDomains": null,
      "domainPriortiesList": null,
      "preferredDCFallbackEnabled": null,
      "indexMappingVersion": null,
      "creationDate": 0,
      "qrCodeAuthentication": false
    },
    "objectType": "Group",
    "objectName": "apiEntraIDNet",
    "objectDisplayName": "apiEntraIDNet",
    "stopNotification": false,
    "attributesBusinessObject": {
      "attributesCollection": {
        "IMSGManagedGroupType": [
          {
            "identityStoreId": 0,
            "value": "1",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "displayname": [
          {
            "identityStoreId": 0,
            "value": "apiEntraIDNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupSecurity": [
          {
            "identityStoreId": 0,
            "value": "Private",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "GroupType": [
          {
            "identityStoreId": 0,
            "value": "4",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "description": [
          {
            "identityStoreId": 0,
            "value": "apiEntraIDNet",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "enableofficefeatures": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "members": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "owners": [
          {
            "identityStoreId": 0,
            "value": "ee3ba6e3-02be-47b2-9892-0510bceabb7b",
            "dn": "",
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "userprincipalname": [
          {
            "identityStoreId": 0,
            "value": "",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "commonname": [
          {
            "identityStoreId": 0,
            "value": "",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "objectclass": [
          {
            "identityStoreId": 0,
            "value": "Group",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "objecttype": [
          {
            "identityStoreId": 0,
            "value": "group",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ContainerDistinguishedName": [
          {
            "identityStoreId": 0,
            "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
            "dn": null,
            "action": 1,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupExpirationPolicy": [
          {
            "identityStoreId": 0,
            "value": "0",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "XGroupExpirationDate": [
          {
            "identityStoreId": 0,
            "value": "9999 December 31 00:00:00",
            "dn": null,
            "action": 0,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ismailbox": [
          {
            "identityStoreId": 0,
            "value": "False",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "ismailenabled": [
          {
            "identityStoreId": 0,
            "value": "False",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsExpired": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMGIsDeleted": [
          {
            "identityStoreId": 0,
            "value": "false",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGGroupIDVersion": [
          {
            "identityStoreId": 0,
            "value": "11.0",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ],
        "IMSGCreatedInVersion": [
          {
            "identityStoreId": 0,
            "value": "11.1.25059.04",
            "dn": null,
            "action": 3,
            "attributeCollection": {},
            "nestedAttributes": {
              "attributesCollection": {},
              "filePermissionCollection": {},
              "type": null
            }
          }
        ]
      },
      "filePermissionCollection": {},
      "type": null
    },
    "elasticHitScore": 0
  },
  "details": [
    {
      "name": null,
      "type": 0,
      "status": 0,
      "message": "",
      "data": null,
      "identityStoreObject": null,
      "details": [],
      "currentDirectoryServer": null,
      "errorCode": null,
      "exceptionMessagesAttributeWise": null,
      "isResyncAble": true
    }
  ],
  "currentDirectoryServer": null,
  "errorCode": null,
  "exceptionMessagesAttributeWise": {},
  "isResyncAble": true
}
```

# Delete a Group

Use this API to delete a group from an identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

# Delete Groups

The Delete Groups API deletes multiple groups from an identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

DELETE

#### Sample Request Syntax

```
[
  "24bda903-2afd-408a-a55c-c18adcfb543e",
  "124b2528-a08a-41a1-9e8e-b1d5e6434153"
]
```

#### sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

# Get a Group

This Get Group API retrieves details of a specified group.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

GET

#### Sample Request Syntax

```
[
    "displayName",
    "ObjectGuid"
  ]
```

#### Sample Response Syntax

```
{
    "groupType": null,
    "attributesBusinessObject": {
        "attributesCollection": {
            "container": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "OU=Groups,DC=demo,DC=local",
                    "identityStoreId": 0
                }
            ],
            "displayName": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "",
                    "identityStoreId": 0
                }
            ],
            "objectClass": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "group",
                    "identityStoreId": 0
                }
            ],
            "name": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "DemoGroup",
                    "identityStoreId": 0
                }
            ],
            "ObjectGuid": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
                    "identityStoreId": 0
                }
            ],
            "CN": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "DemoGroup",
                    "identityStoreId": 0
                }
            ],
            "objectCategory": [
            ]
        },
        "type": null,
        "filePermissionCollection": {
        }
    },
    "hiddenFromAddressListsEnabled": false,
    "objectIdFromIdentityStore": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "displayName": "DemoGroup",
    "samAccountName": null,
    "isGroupInExludedContainer": false,
    "msExchRequireAuthToSendTo": null,
    "objectType": "group",
    "emailAddress": null,
    "groupScope": null,
    "elasticHitScore": 0.0,
    "objectDisplayName": "DemoGroup",
    "name": null,
    "stopNotification": false,
    "alias": "",
    "objectName": null,
    "groupClassName": null,
    "identityStore": null,
    "dc": null,
    "identityStoreId": 2
}
```

# Get Groups

Using this API, you can fetch multiple groups from an identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributes": [
    "displayname",
    "description"
  ],
  "groupIdentities": [
    "24bda903-2afd-408a-a55c-c18adcfb543e",
    "124b2528-a08a-41a1-9e8e-b1d5e6434153"    
  ]
}
```

#### Sample Response Syntax

```
[
    {
        "groupType": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Groups,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayname": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "group",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup1",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup1",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "hiddenFromAddressListsEnabled": false,
        "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
        "displayName": "DemoGroup1",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup1",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    },
    {
        "groupType": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Groups,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayname": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "group",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup2",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup2",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "hiddenFromAddressListsEnabled": false,
        "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
        "displayName": "DemoGroup2",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup2",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    }
]
```

# Update a Group

Using this API, you can update a group's details.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
  "AttributesCollection": {
    "AttributesCollection": {
      "description": [
        {
          "Value": "Its a demo group!",
          "Action": 0
        }
      ],
      "company": [
        {
          "Value": "Imanami - Now part of Netwrix",
          "Action": 0
        }
      ]
    }
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "description",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "company",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "IMSGManagedGroupType",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```

# Update Groups

Using this API, you can update multiple groups.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/

## HTTP Method

PATCH

#### Sample Request Syntax

```
[
  {
    "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup1 description"
          }
        ]
      }
    }
  },
  {
    "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup2 description"
          }
        ]
      }
    }
  }
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "24bda903-2afd-408a-a55c-c18adcfb543e",
            "errorCode": null,
            "details": [
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "description",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                },
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "IMSGManagedGroupType",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                }
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
            "errorCode": null,
            "details": [
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "description",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                },
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "IMSGManagedGroupType",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                }
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

# Update a Smart Group

This API updates a Smart Group, identity of which is provided in the endpoint URL.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/{GroupIdentity}/Update

## HTTP Method

POST

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": 4,
    "identityStoreObject": null,
    "name": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "errorCode": null,
    "details": [
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```

# Update Smart Groups

This API updates multiple Smart Groups whose identities are provided in the request body.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/Update

## HTTP Method

POST

#### Sample Request Syntax

```
[
  "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
  "424eea5a-7781-4c46-851f-28348b597a72"
]
```

#### Sample Response Syntax

```
{
    "clientID": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "details": [
        {
            "groupID": "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
            "message": null,
            "taskID": 8,
            "status": 0
        },
        {
            "groupID": "424eea5a-7781-4c46-851f-28348b597a72",
            "message": null,
            "taskID": 9,
            "status": 0
        }
    ],
    "message": null,
    "status": 0
}
```
