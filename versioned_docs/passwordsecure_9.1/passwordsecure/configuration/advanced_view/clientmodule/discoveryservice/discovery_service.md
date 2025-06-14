# Discovery Service

## The problem

__Service accounts__ are used on most networks. These accounts are used, for example, to carry out certain services. It is not uncommon for __one and the same password__ to be used here for multiple accounts. Manually changing these passwords is extremely time consuming. Therefore, this process is often ignored for reasons of convenience.

The result is that the same outdated passwords are often used for many __security-critical access points__. This naturally represents a __severe security risk__ and leaves the door wide open for any attacker who gains access to just one of the passwords!

## The solution

Netwrix Password Secure offers the solution to this problem: The security of the network can be significantly increased using a combination of __Discovery Service__ and __Password Reset__. The complete network can be scanned with the aid of __Discovery Service__. This process searches for both local user accounts and also Active Directory users. In addition, Password Resets are also established via which the passwords for the accounts discovered during the search can be reset.

## Functionality

The __Discovery Service__ process can be split into three logical steps:

- A __Discovery Service Task__ is added that searches for data on the network. This can be executed once or cyclically and runs in the background.
- After the task has been executed successfully, the data discovered during the search is displayed in the __Discovery Service module__ (e.g. Windows users, services, etc.).
- __Passwords__ or __Password Resets__ can then be generated from the data discovered during the search.
