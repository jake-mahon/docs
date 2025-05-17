---
sidebar_position: 1254
title: Finalize the Installation
---

# Finalize the Installation

This guide shows how finalize the installation of the agent.

## Overview

This page describes the last few steps that the production agent needs for Identity Manager to run correctly.

## Finalize the Installation

Finalize the installation of the agent by proceeding as follows:

1. Install [Windows' hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

   :::warning
If the bundle was installed before
   Configure the Pool and Site
   , then IIS might not display the AspNetCore module and Identity Manager will not run. In this case, relaunch the bundle's installation executable to perform a repair.
   :::
2. When using a proxy, adjust the configuration accordingly. See the [Reverse Proxy](../../../../installation-guide/reverse-proxy/index)topic for additional information.

## Next Steps

To continue, follow the instructions to verify the agent's installation. See the [Install the Production Agent](../index "Install the Production Agent")topic for additional information.