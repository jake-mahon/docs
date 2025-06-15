# REST API

## Overview

Netwrix Activity Monitor API gives you access to the most information and functionality available in
the console. You can manage agents, monitored hosts, AD monitoring using API.

The REST-style API is provided by the API Server feature which is a component of the Activity
Monitor Agent (Windows only). It is pre-installed with the Agent, disabled by default.

Like the console, a single API Server can manage many agents. A single API Server can manage the
whole organization. However, one capability requires running the API Server on each and every
Activity Monitor Agent and is the HTTPS access to the log files.

See the following topics for additional information:

- [Security and Access Control](security.md)
- [Schema and Resources](resources.md)

    - [Agent](agent.md)
    - [Domain](domain.md)
    - [Host](host.md)
    - [Output](output.md)
