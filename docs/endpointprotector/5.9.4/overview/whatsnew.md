---
title: "What's New"
description: "What's New"
sidebar_position: 20
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netwrix Endpoint Protector in the
[Endpoint Protector](https://community.netwrix.com/c/endpoint-protector/announcements/106) area of
our new community.

The following information highlights the new and enhanced features introduced in Netwrix Endpoint
Protector v5.9.4.

## Endpoint Protector 5.9.4

This release includes the following:

## Product Versions

Versions of components provided with this release:

- Server Version: 5.9.4.0
- Windows Client: 6.2.3.1010
- Mac Client: 3.0.3.1009
- Linux Client: 2.4.3.1007
- Enforced Encryption: 2.1.0.2

## General

Netwrix Endpoint Protector Rebranding

This release marks the beginning of a soft rebranding initiative for Netwrix Endpoint Protector,
which includes its Server, Client, and Enforced Encryption components. The purpose of this change is
to enhance visual consistency and align with Netwrix's overall branding strategy.

New branding cover:

• CoSoSys Endpoint Protector is now Netwrix Endpoint Protector

![eppnetwrixbranding](/img/product_docs/endpointprotector/5.9.4/eppnetwrixbranding.webp)

**NOTE:** All hardcoded e-mail addresses are not changed from CoSoSys.com domain to avoid
misconfiguration issues of any existing firewall filtering configuration.

**NOTE:** Modules abbreviations are not changed.

Customizable Sender Email Address for Alerts

Administrators can now customize the "From" email address used in alert notifications by specifying
a preferred sender address in the Netwrix Endpoint Protector Server Alternative mail method
configuration.

## Device Control (DC)

Enhanced File Rename Tracking on MacOS

You can now capture both source and destination file names during file renames on MacOS for complete
audit trails and accurate shadowing.

## Content Aware Protection (CAP)

Improved Browser Printing Monitoring

Enhancements to Netwrix Endpoint Protector expand monitoring capabilities for web browser printing
beyond print spooler notifications, ensuring broader coverage across various printing methods and
printer types. This upgrade strengthens data loss prevention efforts by enhancing control over
unauthorized or accidental printing.

Defining behavior for not Content Aware Printing

This update introduces new settings that allow you to configure the action triggered when Content
Aware Protection cannot access the content of the printed file.

Strengthened Data Protection with Improved MPIP Integration

This release enhances mobile threat defense for organizations using Microsoft Purview Information
Protection (MPIP), also known as MIP; enabling interception of files based on their MPIP label names
or GUIDs to enforce stricter control over sensitive data access and transfer on mobile devices.
Improved integration in Netwrix Endpoint Protector Server WebUI also offers a more comprehensive
configuration option, strengthening your organization's security strategy.

Enhanced MPIP Encrypted Office Files Label Recognition

Content Aware Protection (CAP) can now detect sensitive metadata within MIP encrypted Microsoft
Office files, ensuring accurate detection and blocking of sensitive content.

Enhanced User Remediation Messaging with Rich Text Editing

Administrators can now format User Remediation messages with bold, italics, underline, text color,
hyperlinks, and different font sizes, enabling them to create clear, visually appealing, and
impactful messages that enhance user comprehension and encourage policy compliance.

Enhanced Control for Hightail Express File Sharing

Hightail Express can now be designated as a controlled application in Content Aware Protection,
allowing you to monitor and regulate file transfers through this popular service.

Expanded Content Aware Protection Policies

The maximum number of Content Aware Protection (CAP) policies has been increased, allowing for more
granular control over sensitive data.

Expanded Content Aware Protection Policies

The maximum number of Content Aware Protection (CAP) policies has been increased from 48 to 300,
allowing for more granular control over sensitive data.

Expanded Deny/Allowlists limits

The maximum number of Deny/Allowlists has been increased up to 1 000 list per category, and each
list limit has been increased to 50 000 entries per list, allowing for more granular control over
sensitive data. Notably, the Allowlist Network Share category is not affected by this change.

Improved Deny/Allowlists Management in CAP and eDiscovery

We have enhanced the ability to create and manage more deny/allowlists and entities per list,
benefiting both Content Aware Protection (CAP) and eDiscovery with improved data filtering and
investigation efficiency.

MyBox File Uploads Now Detectable with CAP

Content Aware Protection (CAP) now identifies and controls file uploads to MyBox, extending security
to popular cloud storage platforms.

More Precise OneDrive Content Inspection

Content Aware Protection (CAP) now extracts text more accurately from OneDrive DOC and DOCX files
via the Chrome extension, reducing false positives and blocking only files containing selected
sensitive data (e.g., SSN US).

Improved Google Docs Text Extraction

Enhanced text extraction in Google Docs ensures accurate content inspection and minimizes false
positives.

Improved Google Sheets Text Extraction

Improved text extraction in Google Sheets reduces false positives for secure content analysis.

Enhanced Mac Monitoring with Microsoft Remote Desktop Support

Content Aware Protection now supports monitoring Microsoft Remote Desktop (MRD) connections on Mac
endpoints, enabling policy definition to detect and control sensitive data transfers during MRD
sessions, enhancing your overall data security.
