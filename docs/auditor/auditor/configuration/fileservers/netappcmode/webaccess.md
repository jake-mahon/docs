# Configure ONTAPI\RESTAPI Web Access

Netwrix Auditor uses ONTAPI to obtain the current CIFS audit configuration and force the audit data flush from the internal filer format to an MS Event Viewer compatible format. Netwrix Auditor supports both the SSL and non-SSL HTTP access, trying HTTPS first, and falling back to HTTP if it is unavailable.

Follow the steps to configure ONTAPI\RESTAPI Web Access.

__Step 1 –__ Navigate to your cluster management command prompt through the SSH/Telnet connection.

__Step 2 –__ Log in as a cluster administrator and review your current web access settings. Make sure that External Web Services are allowed. For example:

|  |  |
| --- | --- |
| ``` cluster1::>  system  services  web show ```  where ```'cluster1```' is the name of your NetApp ONTAP cluster. |  |
| External Web Services: | true |
| Status: | online |
| HTTP Protocol Port: | 80 |
| HTTPs Protocol Port: | 443 |
| TLSv1 Enabled: | true |
| SSLv3 Enabled: | true |
| SSLv2 Enabled: | false |

If the result of the``` External Web Services``` command is '```false```', execute the following:

```
cluster1::> system services web modify -external true
```

__Step 3 –__ Enable ONTAPI access on the 'Storage VM' (SVM) where CIFS server is installed. Run the following command where svm1 is the name of your SVM:

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true  
cluster1::> vserver services web show -vserver svm1.
```

| Vserver | Type | Service Name | Description | Enabled |
| --- | --- | --- | --- | --- |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```Remote Administrative API``` | ```true``` |
|  |  |  | Support |  |
| svm1 | data | rest | Remote Administrative API | true |
|  |  |  | ```Support``` |  |

To display the current settings of web services for SVM svm1, use the following command:

```
cluster1::> vserver services web show -vserver svm1
```

__Step 4 –__ Review the [Permissions for NetApp Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/netappcmode/permissions.md) topic for additional information on how to create the role and enable AD user access.

__Step 5 –__ Enable HTTP/HTTPS access. For example:

ONTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true
```

RESTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name rest -enabled true
```

__Step 6 –__ Enable only SSL access (HTTPS in Netwrix Auditor). For example:

ONTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true -ssl-only true
```

RESTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name rest -enabled true -ssl-only true
```

__Step 7 –__ Make sure that the custom role (e.g., netwrix\_role for ONTAPI or netwrix\_rest\_role for RESTAPI) assigned to your account specified for data collection can access ONTAPI or RESTAPI. See [Permissions for NetApp Auditing](/docs/product_docs/auditor/auditor/configuration/fileservers/netappcmode/permissions.md) topic for additional information.

```
cluster1::> vserver services web access show -name ontapi -vserver svm1  
cluster1::> vserver services web access show -name rest -vserver svm1
```

|  |  |  |  |
| --- | --- | --- | --- |
| ```Vserver``` | ```Type``` | ```Service Name``` | ```Role``` |
| ```--------------``` | ```-------``` | ```------------``` | ```---------------``` |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```netwrix_role``` |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```vsadmin``` |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```vsadmin-protocol``` |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```vsadmin-readonly``` |
| ```svm1``` | ```data ``` | ```ontapi ``` | ```vsadmin-volume``` |
| ```5 entries were displayed.``` |  |  |  |
