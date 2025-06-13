# Compliance Mode

You can configure your cluster for monitoring in one of the following ways:

- Using the __configure_ifs.sh__ shell script that comes with Netwrix Auditor. See the [Configure Dell Isilon/PowerScale Cluster in Compliance Mode Via Shell Script](#configure-dell-isilonpowerscale-cluster-in-compliance-mode-via-shell-script) topic for additional information.
- Manual configuration. See the [Configure Dell Isilon/PowerScale Cluster in Compliance Mode Manually](#configure-dell-isilonpowerscale-cluster-in-compliance-mode-manually) topic for additional information.

## Configure Dell Isilon/PowerScale Cluster in Compliance Mode Via Shell Script

Follow the steps to configure Dell Isilon/PowerScale cluster in Compliance mode via the shell script:

__Step 1 –__ On the computer where Auditor Server resides, navigate to _C:\Program Files (x86)\Netwrix Auditor\File Server Auditing_ and copy the configure_ifs.sh shell script to _/ifs/data_ catalog on your cluster.

__Step 2 –__ Navigate to your cluster command prompt through the SSH connection.

__Step 3 –__ Log in to your cluster as a __compadmin__ user.

__Step 4 –__ Run the shell script by executing the following command:

```sh /ifs/data/configure_ifs.sh -z zone1 -a 1```

where

```zone1``` is the name of the audited access zone on your file server.

```1``` is a combination of the bitwise flags. The table below shows the example combination of 4 flags:

|  |  |
| --- | --- |
| ```Successful changes``` | ```1``` |
| ```Failed change attempts``` | ```2``` |
| ```Successful reads``` | ```4``` |
| ```Failed read attempts``` | ```8``` |
| ```Total:``` | ```15``` |

__Step 5 –__ Create a shared folder named netwrix_audit$ on a system zone. This folder points to _/ifs_:

```isi smb shares create --name=netwrix_audit$ --path=/ifs/ --zone=system --browsable=true```

__Step 6 –__ Add the BUILTIN\Administrators group in the share permissions for netwrix_audit$ folder with _"full access"_ rights:

```isi smb shares permission create --share=netwrix_audit$ --group="BUILTIN\Administrators" --permission-type=allow --permission=full --zone=system```

__Step 7 –__ Grant your data collection account the _"read access"_ rights to the catalog _/ifs/.ifsvar/audit_ :

```isi zone modify system --add-user-mapping-rules="Enterprise\Administrator ++ compadmin [group]"```

Where ```Enterprise\Administrator``` is your account name.

## Configure Dell Isilon/PowerScale Cluster in Compliance Mode Manually

Follow the steps to configure Dell Isilon/PowerScale cluster in Compliance mode manually:

__Step 1 –__ Navigate to your cluster command prompt through the SSH connection.

__Step 2 –__ Log in to your cluster as a __compadmin__ user.

__Step 3 –__ Create a shared folder named netwrix_audit$ on a system zone. This folder points to _/ifs_:

```isi smb shares create --name=netwrix_audit$ --path=/ifs/ --zone=system --browsable=true```

__Step 4 –__ Add the BUILTIN\Administrators group in the share permissions for netwrix_audit$ folder with _"full access"_ rights:

```isi smb shares permission create --share=netwrix_audit$ --group="BUILTIN\Administrators" --permission-type=allow --permission=full --zone=system```

__Step 5 –__ Grant your data collecting account the _"read access"_ rights to the catalog _/ifs/.ifsvar/audit_ :

```isi zone modify system --add-user-mapping-rules="Enterprise\Administrator ++ compadmin [group]"```

Where ```Enterprise\Administrator``` is your account name.

__Step 6 –__ Enable protocol auditing for a selected zone (for example, _"zone1"_). Do one of the following, depending on your Dell Isilon/PowerScale version:

| EMC Isilon/PowerScale 7.x | EMC Isilon/PowerScale 8.x |
| --- | --- |
| ```isi audit settings modify ```  ```--add-audited-zones=zone1 --protocol```  ```-auditing-enabled=true``` | ```isi audit settings global modify ```  ```--add-audited-zones=zone1 --protocol```  ```-auditing-enabled=true``` |

Enable filters for auditing protocol operations that succeeded / failed for audited access zones on your cluster.

| EMC Isilon/PowerScale 7.x | EMC Isilon/PowerScale 8.2 and above |
| --- | --- |
| Successful changes |  |
| ```isi zone zones modify ```  ```zone1 --audit-success```  ```=write,delete,set_security,rename``` | ```isi audit settings modify ```  ```--zone=zone1 --audit-success```  ```=write,delete,set_security,rename, create``` |
| Failed change attempts |  |
| ```isi zone zones modify ```  ```zone1 --audit-failure```  ```=create,write,delete,set_security,rename``` | ```isi audit settings modify ```  ```--zone=zone1 --audit-failure```  ```=create,write,delete,set_security,rename,open``` |
| Successful reads |  |
| ```isi zone zones modify ```  ```zone1 --audit-success=read``` | ```isi audit settings modify --```  ```zone=zone1 --audit-success=read``` |
| Failed read attempts |  |
| ```isi zone zones modify ```  ```zone1 ```  ```--audit-failure= create,read``` | ```isi audit settings ```  ```modify --zone=zone1 ```  ```--audit-failure=create,read, open``` |

__Step 7 –__ Create the _"netwrix_audit"_ role and add the required privileges to this role. For example:

```isi auth roles create --name=netwrix_audit
```

```isi auth roles modify netwrix_audit --add-priv-ro="ISI_PRIV_LOGIN_PAPI,ISI_PRIV_AUTH,ISI_PRIV_AUDIT,ISI_PRIV_IFS_BACKUP"
```

```isi auth roles modify netwrix_audit --add-group="BUILTIN\Administrators"```
