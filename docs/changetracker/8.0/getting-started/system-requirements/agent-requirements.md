---
title: Agent System Requirements
sidebar_label: Agent Requirements
description: System requirements for Express Agent, Gen 7 Agent for Linux and Windows including dependencies and platform-specific configuration details.
---

# Express Agent

Requirements

- The Express agent is a single binary less than 10MBs in size and capable of running on any
  operating system with zero dependencies.

# Gen 7 Agent for Linux

Requirements

The Gen 7 agent's dependencies for Linux devices are:

- libicu
- Sysdig to capture Who Made The Change data. The Gen 7 agent will work without it, but will not be
  able to capture the names of the users who are modifying files.

# Gen 7 Agent for Windows

Requirements

- The Gen 7 agent has no dependencies on Windows operating systems.
