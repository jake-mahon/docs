---
sidebar_position: 7065
title: Get-UserEnrollment
---

# Get-UserEnrollment

The commandlet Get-UserEnrollment retrieves enrollment information of a user.

## Syntax

```
Get-UserEnrollment  
-Identity   
[-EnrollmentTypes {None | Mobile | SecurityQuestions | Email | Authenticator | LinkAccount | Yubikey | WindowsHello | All | Any}]  
[]
```
## Required Parameter

* Identity

Example 1:

If a user is enrolled, this cmdlet will enlist the authentication type(s) the user is enrolled with.

```
Get-UserEnrollment -Identity euser1
```
Example 2:

Check whether the specified user is enrolled with the specified enrollment type(s).

```
Get-UserEnrollment -Identity euser1 -EnrollmentTypes SecurityQuestions, Email
```
Example 3:

This example gets user enrollment information through the pipeline operator.

```
'euser1', 'euser2' | Get-UserEnrollment
```