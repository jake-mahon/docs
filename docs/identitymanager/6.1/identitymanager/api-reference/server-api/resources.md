# Files

### /files/Report/FromQuery/`{rootEntityType}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| rootEntityType      |                                     | True     |      |           |
| squery              |                                     | False    |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /files/Report/FromQueryId/`{reportQueryId}`

#### Get

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| reportQueryId       |                                     | True     |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description | Reference |
| ---- | ----------- | --------- |
| 200  | Success     |           |

### /files/ResourceFile/`{type}`/`{property}`/`{id}`

#### Get

##### Summary:

Returns a resource file.

##### Parameters:

| Name                | Description                         | Required | Type | Reference |
| ------------------- | ----------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.             | True     |      |           |
| property            | Entity type property.               | True     |      |           |
| tag                 | Defines a tag.                      | False    |      |           |
| id                  | Identifier of the resource.         | True     |      |           |
| Path                | Represents the permission path.     | False    |      |           |
| QueryRootEntityType | Defines the query root entity type. | False    |      |           |
| QueryBinding        | Defines the query binding.          | False    |      |           |
| api-version         | The requested API version           | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The resource. |           |

# Resource

### /api/Resource/`{type}`

#### Get

##### Summary:

Returns all the resources according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| squery              | Query compliant to the API query grammar.            | False    |      |           |
| Path                | Represents the permission path.                      | True     |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                 | Reference |
| ---- | --------------------------- | --------- |
| 200  | The assigned resource list. |           |

#### Post

##### Summary:

Creates a resource.

##### Parameters:

| Name        | Description               | Required | Type | Reference |
| ----------- | ------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.   | True     |      |           |
| api-version | The requested API version | True     |      |           |

##### Responses:

| Code | Description                          | Reference |
| ---- | ------------------------------------ | --------- |
| 200  | The result of the resource creation. |           |

### /api/Resource/Incremental/`{type}`/`{date}`

#### Get

##### Summary:

Returns all the resources that have been modified (created, deleted, updated) after a given date.

Note: If no page size is specified, the default value of 1,000 is taken into consideration. Maximum
allowed value for the page size is of 10,000.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| date                | Date from which to get resources.                    | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | Resources modified from a given date. |           |

### /api/Resource/`{type}`/`{id}`

#### Get

##### Summary:

Returns a resource corresponding to the provided identifier and its information according to the
provided query.

##### Parameters:

| Name                | Description                               | Required | Type | Reference |
| ------------------- | ----------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                   | True     |      |           |
| id                  | Identifier of the resource role.          | True     |      |           |
| squery              | Query compliant to the API query grammar. | False    |      |           |
| Path                | Represents the permission path.           | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.       | False    |      |           |
| QueryBinding        | Defines the query binding.                | False    |      |           |
| api-version         | The requested API version                 | True     |      |           |

##### Responses:

| Code | Description   | Reference |
| ---- | ------------- | --------- |
| 200  | The resource. |           |

#### Put

##### Summary:

Updates a resource.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.               | True     |      |           |
| id          | Identifier of the resource to update. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the resource update. |           |

#### Delete

##### Summary:

Deletes a resource.

##### Parameters:

| Name        | Description                           | Required | Type | Reference |
| ----------- | ------------------------------------- | -------- | ---- | --------- |
| type        | Entity type identifier.               | True     |      |           |
| id          | Identifier of the resource to delete. | True     |      |           |
| api-version | The requested API version             | True     |      |           |

##### Responses:

| Code | Description                        | Reference |
| ---- | ---------------------------------- | --------- |
| 200  | The result of the resource delete. |           |

# ResourceChange

### /api/ResourceChange/`{type}`/`{id}`

#### Get

##### Summary:

Returns all the resource changes according to the provided query.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference                                                                                      |
| ------------------- | ---------------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------------- |
| type                | Entity type identifier.                              | True     |      |                                                                                                |
| id                  | Identifier of the job instance.                      | True     |      |                                                                                                |
| Path                | Represents the permission path.                      | False    |      |                                                                                                |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |                                                                                                |
| QueryBinding        | Defines the query binding.                           | False    |      |                                                                                                |
| PageSize            | Page size.                                           | False    |      |                                                                                                |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |                                                                                                |
| primaryKeyFilter    | Filter on primary key value.                         | False    |      |                                                                                                |
| changeOperationType | Filter on change operation type.                     | False    |      | [ChangeOperation](/docs/identitymanager/6.1/identitymanager/api-reference/server-api/index.md) |
| api-version         | The requested API version                            | True     |      |                                                                                                |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The resource changes list. |           |

# ResourceFileChange

### /api/ResourceFileChange/`{type}`/`{id}`

#### Get

##### Summary:

Returns all the resource file changes according to the provided job instance id.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference                                                                                      |
| ------------------- | ---------------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------------- |
| type                | Entity type identifier.                              | True     |      |                                                                                                |
| id                  | Identifier of the job instance.                      | True     |      |                                                                                                |
| Path                | Represents the permission path.                      | False    |      |                                                                                                |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |                                                                                                |
| QueryBinding        | Defines the query binding.                           | False    |      |                                                                                                |
| PageSize            | Page size.                                           | False    |      |                                                                                                |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |                                                                                                |
| changeOperationType | Filter on change operation type.                     | False    |      | [ChangeOperation](/docs/identitymanager/6.1/identitymanager/api-reference/server-api/index.md) |
| api-version         | The requested API version                            | True     |      |                                                                                                |

##### Responses:

| Code | Description               | Reference |
| ---- | ------------------------- | --------- |
| 200  | The resource file change. |           |

# ResourceLink

### /api/ResourceLink/Incremental/`{type}`/`{property}`/`{date}`

#### Get

##### Summary:

Returns all the non optimized resource navigation links that have been modified (created, deleted,
updated) after a given date.

Note: If no page size is specified, the default value of 1,000 is taken into consideration. Maximum
allowed value for the page size is of 10,000.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference |
| ------------------- | ---------------------------------------------------- | -------- | ---- | --------- |
| type                | Entity type identifier.                              | True     |      |           |
| property            | Identifier of non optimized navigation property.     | True     |      |           |
| date                | Date from which to get resources.                    | False    |      |           |
| Path                | Represents the permission path.                      | False    |      |           |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |           |
| QueryBinding        | Defines the query binding.                           | False    |      |           |
| PageSize            | Page size.                                           | False    |      |           |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |           |
| api-version         | The requested API version                            | True     |      |           |

##### Responses:

| Code | Description                           | Reference |
| ---- | ------------------------------------- | --------- |
| 200  | Resources modified from a given date. |           |

# ResourceLinkChange

### /api/ResourceLinkChange/`{type}`/`{property}`/`{id}`

#### Get

##### Summary:

Returns all the resource link changes according to the provided job instance id.

##### Parameters:

| Name                | Description                                          | Required | Type | Reference                                                                                      |
| ------------------- | ---------------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------------- |
| type                | Entity type identifier.                              | True     |      |                                                                                                |
| property            | Navigation property identifier.                      | True     |      |                                                                                                |
| id                  | Identifier of the job instance.                      | True     |      |                                                                                                |
| Path                | Represents the permission path.                      | False    |      |                                                                                                |
| QueryRootEntityType | Defines the query root entity type.                  | False    |      |                                                                                                |
| QueryBinding        | Defines the query binding.                           | False    |      |                                                                                                |
| PageSize            | Page size.                                           | False    |      |                                                                                                |
| ContinuationToken   | ContinuationToken returned by previous page request. | False    |      |                                                                                                |
| changeOperationType | Filter on change operation type.                     | False    |      | [ChangeOperation](/docs/identitymanager/6.1/identitymanager/api-reference/server-api/index.md) |
| api-version         | The requested API version                            | True     |      |                                                                                                |

##### Responses:

| Code | Description                | Reference |
| ---- | -------------------------- | --------- |
| 200  | The resource link changes. |           |
