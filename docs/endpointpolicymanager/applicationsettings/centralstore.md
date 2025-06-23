---
title: Using Central Store with PolicyPak
sidebar_label: Central Store
description: Integrate Netwrix Endpoint Policy Manager with the central store by creating a PolicyPak folder in SYSVOL and copying DLL files from local storage.
---

# How can I use the Endpoint Policy ManagerCentral store (if I was already using the Endpoint Policy Manager Local store?)

Netwrix Endpoint Policy Manager (formerly PolicyPak) should be integrated with the central store in
most cases.To do this, simply create a folder in the SYSVOL directory on any one of your replicating
domain controllers within your network called "PolicPak". Then copy the Endpoint Policy Manager dll
files that currently reside in your local storage and paste them into that folder.

Here is the how-to video:
[Working with Others and using the Central Store](/docs/endpointpolicymanager/video/applicationsettings/centralstorework.md)
