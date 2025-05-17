---
sidebar_position: 2889
title: Accounts and Required Permissions
---

Filter: 

* All Files

Submit Search

# Accounts and Required Permissions

Netwrix Data Classification uses the following accounts:

| Account | Description |
| --- | --- |
| **Service Account** | This account is specified during the product setup.  Windows domain account that you plan to use as a service account will need the following:   * Local Administrator rights on the server where Netwrix Data Classification will be installed. * Permissions to run the Windows Services and IIS Application pool. * SQL Server DBO permissions to the NDC SQL database (if using Windows Authentication to access SQL Server).   After installation, this account will be automatically granted the **Logon as a service privilege** on the Netwrix Data Classification server. |
| Crawl content | Ensure the availability of accounts with sufficient permissions to access your content sources:   * SharePoint, SharePoint Online site collection— Site Collection Administrator role. * Exchange mailboxes:  1. **ApplicationImpersonation** —allows the crawling account to impersonate each of the mailboxes / users configured for collection. 2. **Mailbox Search** —allows the crawling account to enumerate mailboxes, i.e. automatic discovery of mailboxes.   See [Configure Microsoft Exchange for Crawling and Classification](../Configuration/ConfigInfrastructure/Exchange) for detailed information on configuring these permissions.   * Outlook Mail Archive (PST file)— **Read** permission. * File System (SMB, NFS) — **Read** permission for the folders and files you need to crawl. * G Suite and Google Drive —service account needs permissions to read data in the individual and shared Drives on behalf of users using the Google Drive API.   See [Configure G Suite and Google Drive for Crawling](../Configuration/ConfigInfrastructure/GDrive) for detailed information.   * Database— **Read** permission for the database schema and data. |
| Apply tagging | To use tagging, i.e. to write classification attributes back to the content file, crawling account will need the appropriate **Modify** permissions on the content source. |