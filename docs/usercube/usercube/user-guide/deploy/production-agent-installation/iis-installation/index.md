# Install IIS via Server Manager

This guide shows how to configure the local server to install IIS via Server Manager.

## Overview

When running on Windows Server, Server Manager makes available parameters to configure the local server at will. [See more details](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/manage-the-local-server-and-the-server-manager-console).

This page describes the optimal configuration of the local server to install IIS in order to prepare the production agent's installation.

## Install IIS via Server Manager

Install IIS via Server Manager by proceeding as follows:

1. Open the Server Manager program and click on __Add roles and features__.

   ![Server Manager: Step 1](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager1.webp)
2. Click on __Next__, then in __Installation Type__ make sure that __Role-based or feature-based installation__ is selected and click on __Next__.

   ![Server Manager: Step 2](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager2.webp)
3. In __Server Selection__ tick __Select a server from the server pool__ and click on __Next__.

   ![Server Manager: Step 3](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager3.webp)
4. In __Server Roles__ tick __Web Server (IIS)__.

   ![Server Manager: Step 4](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager4.webp)
5. In __Features__ select __Remote Server Administration Tools__ > __Role Administration Tools__ > __AD DA and AD LDS Tools__ > __AD DS Tools__ > __AD DS Snap-Ins and Command-Line Tools__.

   ![Server Manager: Step 5](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager5.webp)
6. In __Confirmation__ click on __Install__.

   ![Server Manager: Step 6](/img/product_docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager6.webp)

## Next Steps

To continue, [
Configure the Pool and Site
](/docs/usercube/usercube/user-guide/deploy/production-agent-installation/iis-configuration/index.md)the application pool and website via IIS.
