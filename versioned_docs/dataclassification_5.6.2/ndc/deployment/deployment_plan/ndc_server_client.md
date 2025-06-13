# NDC Server

Netwrix Data Classification  __Server__ can be deployed on a physical server or on a virtual machine in the virtualized environment on VMware or Microsoft Hyper-V platform.

When planning for NDC Server, consider a significant CPU load during data processing. Thus, installing NDC Server on a highly-loaded production machine is not recommended. For more information, refer to [Hardware Requirements](/versioned_docs/dataclassification_5.6.2/ndc/deployment/hardware_requirements.md).

__Web-based client__ (management console) is always installed together with the NDC Server, so the IIS server role must be enabled on the target machine. For more information, refer to [Software Requirements](/versioned_docs/dataclassification_5.6.2/ndc/deployment/software_requirements.md).

__NOTE:__ For evaluation and PoC purposes, Netwrix provides a _virtual appliance_ — a virtual machine image with pre-installed Netwrix Data Classification on Generalized Windows Server 2016 (180-day evaluation version) and Microsoft SQL Server 2017 Express. For details, see [Requirements to Deploy Virtual Appliance](/versioned_docs/dataclassification_5.6.2/ndc/appliance/nvap_system_requirments.md).

Remember that for production environments, your NDC Server and database server must meet the [Requirements to Install Netwrix Data Classification](/versioned_docs/dataclassification_5.6.2/ndc/deployment/requirements_intro.md). Virtual appliance configuration is insufficient for production and is not recommended for that purpose.

To balance the load while indexing and classifying data in the large-size and extra-large environments (i.e. with over ≥ 16 mln objects to process), it is strongly recommended to deploy several NDC Servers and configure __Distributed Query Server__ mode for them. [See Configuring NDC Servers Cluster and Load Balancing with DQS Mode for more information.](/versioned_docs/dataclassification_5.6.2/ndc/deployment/distributed_query_server_mode.md)
