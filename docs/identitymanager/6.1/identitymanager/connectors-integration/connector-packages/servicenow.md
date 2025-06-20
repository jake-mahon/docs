# ServiceNow Ticket

Opens tickets in ServiceNow for the manual provisioning.

| Package Characteristics | Value                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| Display Name            | Ticket/ServiceNow                                                                                |
| Identifier              | Usercube.SnowTicket@0000001                                                                      |
| Export                  | NONE                                                                                             |
| Fulfill                 | Usercube-Fulfill-ToServiceNowTicket.dll and Usercube-ServiceNowTicket-UpdateFulfillmentState.dll |
| Has Incremental Mode    | False                                                                                            |
| Publisher               | Usercube                                                                                         |

# ServiceNow

Manages any data in the CMDB, including users and roles. This package supports incremental
synchronization.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | ITSM/ServiceNow                 |
| Identifier              | Usercube.ServiceNow@0000001     |
| Export                  | Usercube-Export-ServiceNow.dll  |
| Fulfill                 | Usercube-Fulfill-ServiceNow.dll |
| Has Incremental Mode    | True                            |
| Publisher               | Usercube                        |
