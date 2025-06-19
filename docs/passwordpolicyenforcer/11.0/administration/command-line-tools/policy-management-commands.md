# Copy-PPEPolicy

The **CopyPPEPolicy** cmdlet makes a copy of a PPE policy.

SYNTAX

**Copy-PPEPolicy -DestPolicyName** `<_string_>` **-SrcPolicyName** `<_string_>`
[`<_CommonParameters_>`]

PARAMETERS

**-SrcPolicyName** `<_string_>`

Source PPE Policy Name. Can also use **-S** or **-s**.

**-DestPolicyName** `<_string_>`

Destination PPE Policy Name. Can also use **-D** or **-d**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Copy-PPEPolicy -s "Eval Policy" -d "User Policy"

The "User Policy" policy was created based on the "Eval Policy".

# Get-PPEDefaultPolicy

The **Get-PPEDefaultPolicy** cmdlet reports the name of the Password Policy Enforcer default Policy.

SYNTAX

**Get-PPEDefaultPolicy** [`<_CommonParameters_>`]

PARAMETERS

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEDefaultPolicy

Default policy : Eval Policy

# Get-PPEPolicies

The **Get-PPEPolicies** cmdlet returns the Password Policy Enforcer policies.

SYNTAX

**Get-PPEPolicies** [`<_CommonParameters_>`]

PARAMETERS

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEPolicies

Admins Policy

Eval Policy

Test

User Policy

# Get-PPEPolicyEnabled

The **Get-PPEPolicyEnabled** cmdlet returns the enabled/disabled status of a Password Policy
Enforcer policy.

SYNTAX

**Get-PPEPolicyEnabled** **-PolicyName** `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEPolicyEnabled -PolicyName "Eval Policy"

Policy "Eval Policy" is Enabled

# Remove-PPEPolicy

The **Remove-PPEPolicy** cmdlet removes a Password Policy Enforcer policy.

SYNTAX

**Remove-PPEPolicy** **-PolicyName**] `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Remove-PPEPolicy -PolicyName Test

PS C:\>

# Set-PPEDefaultPolicy

The **Set-PPEDefaultPolicy** cmdlet sets the Password Policy Enforcer policy as the default.

SYNTAX

**Set-PPEDefaultPolicy** **-PolicyName**] `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Set-PPEDefaultPolicy -PolicyName "Eval Policy"

Default policy : Eval Policy

# Set-PPEPolicyEnabled

The **Set-PPEPolicyEnabled** cmdlet sets the enabled/disabled status for a Password Policy Enforcer
policy.

SYNTAX

**Set-PPEPolicyEnabled\_\_**-PolicyName** `<_string_>` **-Enable\__]
`<\_int_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

The policy name.

**-Enable** `<_int_>`

Specify **1** to enable the policy, specify **0** to dis -Poliable the policy. Can also use **-E**
or **-e**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLES

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 0

Policy "Eval Policy" is Disabled

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 1

Policy "Eval Policy" is Enabled
