# Job

### /api/Job/Job/RunJob/`{id}`

#### Post

##### Summary:

Run Job.

##### Parameters:

| Name | Description | Required | Type | Reference |
| --- | --- | --- | --- | --- |
| id | Identifier of the Job to run automaton. | True |  |  |
| jobLogLevel | Override the serilog LogLevel. | False |  | [LogLevel](/versioned_docs/usercube_6.1/usercube/integration-guide/api/agent/index.md#loglevel) |
| api-version | The requested API version | True |  |  |

##### Responses:

| Code | Description | Reference |
| --- | --- | --- |
| 200 | The result of the job to run automaton. |  |
