---
sidebar_position: 4510
title: Endpoint Privilege Manager + Windows Virtual Desktop
---

# Endpoint Privilege Manager + Windows Virtual Desktop

Sometimes and app won't run unless you're running with local admin rights. NOT a good idea with WVD. Instead, use Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager to elevate applications when needed, and keep Standard Users just that... users and NOT admins. Additionally, users cannot auto-update the Remote Desktop app for Windows Virtual Desktop. With Endpoint Policy Manager though, this is a slam-dunk. See how users on their own laptops can keep the WVD Remote Desktop app updated themselves.