---
sidebar_position: 4926
title: Amazon Web Services (AWS) Solution
---

# Amazon Web Services (AWS) Solution

The core components for Netwrix Access Analyzer (formerly Enterprise Auditor) are the Access Analyzer Console server, SQL Server, and Access Information Center. See the [Requirements](../Overview "Requirements") topic for the core requirements.

See the [Target Amazon Web Service Requirements, Permissions, and Ports](../Target/AWS "Target Amazon Web Service Requirements, Permissions, and Ports") topic for target environment requirements.

## AWS Solution Requirements on the Access Analyzer Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large | Medium – Small |
| --- | --- | --- |
| Definition | > 100 Accounts |  100 Accounts | < 100 Accounts |
| RAM | 16+ GB | 16+ GB |
| Cores | 8 CPU | 4 CPU |
| Number of Disks | 4 | 4 |
| Operating System Disk | 160 GB | 160 GB |
| SQL Database Disk | 300 GB | 70-120 GB |
| SQL Transaction Log Disk | 80 GB | 50 GB |
| SQL TEMP DB Disk | 160 GB | 100 GB |