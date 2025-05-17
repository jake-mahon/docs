---
sidebar_position: 407
title: Workflow Uses
---

# Workflow Uses

An Identity Manager [Workflow](../../toolkit/xml-configuration/workflows/workflow/index "Workflow") is the sequence of processes that a company has established to manage identities across the organization.
Workflows makes an approval business process more efficient by managing and tracking all of the human tasks involved with the process and by providing a record of the process after it is completed.

The identity management [Workflow](../../toolkit/xml-configuration/workflows/workflow/index "Workflow") can be broken into four key areas:

## 1. Onboarding

The initial creation of the user. This can occur manually within the identity management system or it could be triggered from an HR system.
Here is the xml configuration to create the user onboarding Workflow in Identity Manager :

```
                

```
The *"User\_Onboarding"* Workflow is composed of the following activities:

* *"Request"* to initialize the creation of an user in Identity Manager.
* *"PersistDraft"* to save a preliminary version of the user object.
* *"Review"* to validate or not the requested item.
* *"Persist"* to take into account the requested item.

## 2. User Modifications

After the initial setup of access, there are ongoing changes. Those changes can center in on a user's rights. These rights may need to be expanded or contracted. The user's information may need to be modified.
Here is an example to create the user change name Workflow in Identity Manager :

```
        

```
## 3. IT Resource Modifications

The other area of on-going changes is the addition and removal of various IT resources. These resources can include devices, applications, and networks.
Here is the xml configuration to create the resource modifications Workflow in Identity Manager :

```
        

```
## 4. Offboarding

The end of the identity lifecycle is the offboarding of a user. Credentials are terminated and the user's account access is terminated everywhere.
Here is the xml configuration to create the user offboarding Workflow in Identity Manager:

```
        

```