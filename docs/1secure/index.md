---
title: Netwrix 1Secure Security Platform
sidebar_label: Overview
description: Unified command center for hybrid IT security monitoring. Azure-hosted SaaS solution for MSPs to monitor and protect client environments.
---

# Netwrix 1Secure

> **Your unified command center for hybrid IT security monitoring**

Welcome to Netwrix 1Secure — the powerful Microsoft Azure-hosted SaaS solution that transforms how Managed Service Providers (MSPs) monitor and protect their clients' IT environments. Whether your infrastructure spans on-premises data centers or cloud platforms, 1Secure provides a single pane of glass for comprehensive security visibility.

## What is 1Secure?

1Secure is your always-on security sentinel, continuously monitoring critical activities across your entire IT ecosystem:

- **Real-time Activity Tracking** — Instantly detect account creations, deletions, and modifications
- **Group Membership Monitoring** — Track changes to security groups and permissions
- **Organization-wide Visibility** — Monitor configuration changes across all managed environments
- **Intelligent Reporting** — Generate detailed reports to investigate incidents and demonstrate compliance

## Key Benefits

:::tip Why MSPs Choose 1Secure
Transform your security operations with capabilities designed specifically for modern managed service providers.
:::

### Unified Security Management

Eliminate the complexity of juggling multiple monitoring tools. 1Secure consolidates alerts from both on-premises and cloud environments into a single, intuitive dashboard.

### Accelerated Incident Response

- **Instant Alerts** — Get notified immediately when suspicious activities occur
- **Smart Filtering** — Focus on what matters with intelligent alert prioritization
- **Rapid Investigation** — Drill down into incidents with comprehensive audit trails

### Enhanced MSP Productivity

- **Bulk Operations** — Manage multiple client environments efficiently
- **Automated Reporting** — Schedule and deliver compliance reports automatically
- **Self-Service Updates** — Keep agents current without manual intervention

## How It Works

Experience the power of cloud-native architecture combined with on-premises flexibility:

### Architecture Overview

![overview_table](/img/product_docs/1secure/admin/overview_table.webp)

### Key Components

#### 1**Lightweight On-Prem Agent**

Deploy our efficient Windows service in your network:

- 🪶 Minimal resource footprint
  -Collects and aggregates data every 15 minutes
  -Secure HTTPS communication with your cloud tenant

#### 2**Azure-Powered Backend**

Leverage Microsoft Azure's enterprise-grade infrastructure:

- **Token-based Authentication** — Secure verification between agents and API
- **Dual Database Architecture**:
  - **Cosmos DB** — Stores all activity records for lightning-fast queries
  - **Azure SQL** — Manages configurations, sources, and alerts
- **Multi-tenant Isolation** — Complete data segregation between organizations

#### 3**Intuitive Web Portal**

Access your security data from anywhere:

- **Modern Web Interface** — Clean, responsive design
- **Azure AD Integration** — Sign in with corporate credentials (OAuth 2.0)
- **Cross-Platform Access** — Works on any device with a browser

## Getting Started in 2 Simple Steps

:::info Quick Start
Get up and running in minutes with our streamlined deployment process!
:::

### **Step 1** — Add Your Organizations

Configure your managed environments with just a few clicks.
[Learn how to add organizations →](/docs/1secure/administration/organizations/managing-organizations.md)

### **Step 2** — Deploy the Agent

Install our lightweight agent to start collecting security data immediately.
[View installation guide →](/docs/1secure/getting-started/installation.md)

> **That's it!** Once configured, 1Secure automatically begins collecting audit data from:
>
> - Active Directory domains
> - Azure AD/Entra ID
> - Windows computers
> - Exchange Online
> - SharePoint Online

## System Management Features

### Smart Notifications

Stay informed with intelligent, real-time alerts that keep your security operations running smoothly:

:::tip Notification Types

-**Agent Updates** — Know when new versions are available -**Organization Issues** — Immediate alerts for connectivity problems -**Status Updates** — Monitor health across all environments -**Credential Expiry** — Never miss a credential renewal
:::

#### How to Access Notifications

1. **Click the Bell Icon**in the upper right corner
2. **Review Active Alerts** in the notification panel
3. **Take Action** with one-click fixes

![notifications](/img/product_docs/1secure/admin/notifications.webp)

### System Health Dashboard

Monitor the pulse of your entire security infrastructure with our visual status indicators:

![statuses_chart](/img/product_docs/1secure/admin/statuses_chart.webp)

:::info Status Timeline
**New** →**Healthy** transformation occurs automatically after the first successful data collection (typically within minutes to a few hours depending on environment size).
:::

Track real-time health for:

- **Sources** — Monitor connected systems
- **Agents** — View agent connectivity and performance
- **Connectors** — Check integration status

[Learn more about organization management →](/docs/1secure/administration/organizations)

### Automated Agent Updates

Keep your security infrastructure current with our intelligent update system:

:::success Zero Downtime Updates
**Your monitoring continues uninterrupted** during the entire update process!
:::

#### Update Options

- **Self-Update** — Automatic updates with smart scheduling
- **Bulk Updates** — Update multiple agents simultaneously
- **Scheduled Updates** — Define maintenance windows that work for you
- **Real-time Notifications** — Stay informed of available updates

#### Bulk Update Multiple Agents

1. Navigate to **Managed Organizations** → **Bulk Update Agent**
2. Select the agents you want to update
3. Click **Confirm** to update all selected agents simultaneously

![updateagents](/img/product_docs/1secure/admin/updateagents.webp)

#### Configure Update Schedules

Define maintenance windows that align with your business operations:

1. Go to **Managed Organizations** → **Agent Update Settings**
2. Enable scheduled updates
3. Set your preferred update window
4. Save your configuration

![editagentupdatesschedule2](/img/product_docs/1secure/admin/editagentupdatesschedule2.webp)

#### Quick Self-Update

Get the latest features and security enhancements with one-click updates:

1. **Click the Bell Icon**to view available updates
2. **Select Fix** next to agents requiring updates
3. **Confirm** the update to deploy automatically

![selfupdate_panel](/img/product_docs/1secure/admin/selfupdate_panel.webp)

---

## Ready to Transform Your Security Operations?

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

:::tip Need Help?
Our support team is here to ensure your success with 1Secure. Check out our [Getting Started Guide](/docs/1secure/getting-started) or contact your account manager for personalized assistance.
:::
