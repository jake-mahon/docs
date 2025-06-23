---
title: Content Sources for Data Classification
sidebar_label: Content Sources
description: Configure and manage data repositories for crawling and classification including file systems, SharePoint, databases, and cloud storage.
---

# Content Sources

A _content source_ in terms of Netwrix Data Classification is a repository of data to be crawled and
classified. Each content source has an individual configuration and, where appropriate, credentials.

For adding and managing content sources, use the **Content Configuration**→Sources area of the
Netwrix Data Classification management console.

**IMPORTANT!** To access the **Sources** area, users require sufficient rights. See the
[User Management](/docs/dataclassification/5.7/configuration/security/user-management.md) section for more information.

You can manage the individual content sources or organize them into source groups, which are used as
logical containers.

**NOTE:** You can configure the unlimited number of sources to work with.

See next:

- [Add a Content Source](/docs/dataclassification/5.7/content-sources/add-source.md)
- [Manage Sources and Control Data Processing](/docs/dataclassification/5.7/content-sources/manage-sources.md)

# Narrow Data Collection Scope

Inclusions and exclusions provide a granular way of limiting collection scope to a specific set of
documents within a content source.

This functionality is currently supported for the following source types:

- Exchange
- File System
- Google Drive

See next:

[Exchange Mailbox](/docs/dataclassification/5.7/content-sources/exchange/mailbox.md)

[Manage File System](/docs/dataclassification/5.7/content-sources/file-systems/manage-file-system.md)

[ Google Drive](/docs/dataclassification/5.7/content-sources/cloud-storage/google-drive/manage.md)

# Content Configuration Overview

**Content Configuration** section in Netwrix Data Classification management console includes the
following areas

- To add and manage the content systems you want to index, click Sources .
- To work with the data classification taxonomies, click **Taxonomies**.
- To configure automated workflows that will be triggered upon classification results, click
  **Workflows**.

**IMPORTANT!** To access the **Sources** area, users require sufficient rights. See the
[User Management](/docs/dataclassification/5.7/configuration/security/user-management.md) section for more information.

![content_config_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/sources/content_config_thumb_0_0.webp)

See next:

- [Content Sources](/docs/dataclassification/5.7/content-sources/index.md)
- [Taxonomies](/docs/dataclassification/5.7/taxonomies/index.md)
- [Understanding Workflows](/docs/dataclassification/5.7/workflows/index.md)
