---
sidebar_position: 3037
title: Data Storages and Sizing
---

Filter: 

* All Files

Submit Search

# Data Storages and Sizing

Netwrix Data Classification utilizes two data storages:

* NDC SQL database — SQL Server database that stores product configuration and metadata for the data sources.
* NDC Index — a full-text search index that comprises a set of files in the proprietary format (.CSE).

### NDC SQL database

Make sure you have NDC Server and **NDC SQL database** deployed on different machines.

It is recommended to create the NDC SQL database on a dedicated SQL Server instance.

* Minimal requirement is SQL Server 2008 R2 Standard Edition.
* Estimate required disk space assuming *10 - 12 KB* per indexed object. For example, for *5, 000, 000* objects, the database size will be approximately *50 GB*.   
  Therefore, SQL Server Express edition will be only suitable for evaluation and PoC environments (up to 1, 000,000 documents to process).

  **TIP:** Netwrix recommends using SSD storage for both: database and Netwrix Data Classification servers.

* If configuring database settings via SQL Server Management Studio, you will need to set **Autogrowth / Maxsize** values for the PRIMARY database files as follows:
  * **File growth**: *128 MB* - recommended value for small to medium environment, *512 MB* - for large environment, i.e. if planning to index data sources containing 16, 000, 000+ objects.
  * **Maximum File Size** - select *Unlimited*.
* Make sure that the **Recovery model** for this database is set to *Simple*. Do not change the recovery model — to avoid log files growth.

### NDC Index

Required disk space for the NDC Index file storage will depend, in particular, on the data processing mode you plan to use (*No Index*, *Keyword* or *Compound Term*).

As a rule of thumb, required space can be calculated as 35% of data you plan to be indexed. For example, if you have 45 GB of files, they will require up to 15 GB for the NDC Index files.

## Scalability and Performance

Scalability and performance testing revealed that based on the number of objects to classify, the environments can be ranged as follows:

| Number of objects to classify | Environment | Comment |
| --- | --- | --- |
| Up to 1, 000, 000 | Proof-of-concept and small-size environment |  |
| Up to 16, 000, 000 | Mid-size environment |  |
| Up to 64, 000, 000 | Large-size environment |  |
| More than 64, 000, 000 | Extra-large environment | System architect's assistance is required for deployment planning requires |

Again, consider that for the large-size and extra-large environments, it is strongly recommended to configure a cluster of several NDC Servers and apply DQS mode to these clustered servers. See [Configuring NDC Servers Cluster and Load Balancing with DQS Mode](../../Requirements/DQSMode) for details.