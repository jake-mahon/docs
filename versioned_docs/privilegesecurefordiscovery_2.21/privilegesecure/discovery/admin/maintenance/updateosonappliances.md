# Update Privilege Secure OS on Appliances

Update Privilege Secure OS on Appliances

# Update Privilege Secure OS on Appliances

The best practice for installing Privilege Secure OS updates is to do so during a scheduled maintenance window, and with all services scaled down. This prevents potential issue should an update require a reboot of the server or Docker service.

There are different options to fit your environment or downtime tolerance.

- Cluster:  No downtime
- Single-Node:  Downtime during reboot

This is a guide to updating the OS on Privilege Secure node with that best practice in mind. Privilege Secure will be offline for 30-60 minutes.

## Requirements

- 30-60 minute scheduled maintenance window with expected downtim
- [Install the S1 CLI Helper Utility ](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/install/s1clihelperutility.md)

## Use Case: Cluster In-Place (1 node at a Time, No Downtime)

Check DB replication status, “stateStr” should be “PRIMARY” or "SECONDARY"; and replication time difference, a few seconds is acceptable:

```
mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONESecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|  
\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset  
mEvl  

```

__NOTE:__  If the database replication is not in healthy state, resolve that before continuing.

Primary node only: Check Privilege Secure services and nodes status:

```
s1 status; s1 nodes
```

Check for the swarm leader:

```
s1 nodes | grep Leader
```

Only if the node being updated has a MANAGER STATUS of leader, run the below command on a different node to change the swarm Leader.  Replace `<hostname>` with the hostname of the node being upgraded and run the command below.

```
HNupg=`<hostname>` ;  sudo docker node demote $HNupg; sleep 10; sudo docker node promote $HNupg
```

Verify swarm leader is no longer the node being updated:

```
s1 nodes | grep Leader  

```

Process one node completely before moving on to another node:

List nodes with:

- s1 nodes

Drain node to be updated:

- sudo docker node update --availability drain `<hostname>`

Verify “Availability” is set to “Drain” with:

- s1 nodes

SSH to the node being updated

__Step 1 –__ Download Update Package Information.

- sudo apt update

__Step 2 –__ Install package updates.

- sudo apt -y upgrade

__NOTE:__ If prompted to replace a configuration file or setting, always use the option to keep the existing configurations, setting, or file.

__Step 3 –__ Reboot if required.

- sudo cat /var/run/reboot-required
- Result if reboot is required:  "\*\*\* System restart required \*\*\*"
- Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
- If required, reboot node:

  - sudo reboot

__Step 4 –__ Once reboot has started, return to the other node.
S

- Set drained node to active from a different node:

  - sudo docker node update --availability active `<hostname>`
- Monitor for the node to complete rebooting with:

  - watch s1 nodes

    - Verify “Availability” is set to “Active” on updated node.
- Once the updated node is reachable, Ctrl+C to get out of the watch command
- Check DB replication status, “stateStr” should be “PRIMARY” or "SECONDARY"; and replication time difference, a few seconds is acceptable:
- ```
  mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset mEvl
  ```

__Step 5 –__ Check Privilege Secure services and nodes status:

- s1 status; s1 node

__Step 6 –__ Move on to next node.

__Step 7 –__ After all nodes completed, check Privilege Secure services and nodes status:

- s1 status; s1 nodes

## Use Case: Single-Node (Downtime During Reboot)

__Step 1 –__ Check Privilege Secure services and nodes status.

- s1 status; s1 nodes

__Step 2 –__ Download Update Package Information.

- sudo apt update

__Step 3 –__ Install package updates.

- sudo apt -y upgrade

- If prompted to replace a configuration file or setting, always use the option to keep the existing configurations, setting, or file.

__Step 4 –__ Reboot if required.

- sudo cat /var/run/reboot-required

  - Result if reboot is required:  "\*\*\* System restart required \*\*\*"
  - Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
  - If required, reboot node:

    - sudo reboot

__Step 5 –__ After reboot complete, log in and check Privilege Secure services and nodes status:

- s1 status; s1 nodes
