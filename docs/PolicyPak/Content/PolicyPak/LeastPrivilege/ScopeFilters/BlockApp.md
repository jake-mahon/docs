---
sidebar_position: 4131
title: 'Scenario 2: Specific Rule to Block an App from Being Run, Even as Local System'
---

# Scenario 2: Specific Rule to Block an App from Being Run, Even as Local System

**NOTE:**  For an overview of this scenario, see the [Block PowerShell in General, Open up for specific items](../../Video/LeastPrivilege/BestPractices/PowerShellBlock "Block PowerShell in General, Open up for specific items") video demo.

You might want to explicitly block attack vectors such as PSEXEC (which was used in WannaCry) or entirely block PowerShell.  If you specify to do this only on the User side (or set Computer side scope to User processed only), then only user processes will be affected.

[![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/ProcessScopeFilters/Scenario 2 Specific Rule to.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/e1c74ed9-8e5c-4a74-9a8c-262a7ff5077b/faq-img-06.png)

You can shore up this attack vector by making the explicit deny rule on the Computer side.

[![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/ProcessScopeFilters/Scenario 2 Specific Rule to_1.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/7c29bc26-5137-4a5b-bcab-1e1c1b38f8d3/faq-img-07.png)

When you do, PowerShell is blocked for Standard and System.

[![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/ProcessScopeFilters/Scenario 2 Specific Rule to_2.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/e339be0f-65f7-4d0c-a0a3-4e5d4e0f2273/faq-img-08.png)