# RADIUS

RADIUS

# RADIUS

## Overview

This covers configuring Privilege Secure with RADIUS.

## Prerequisites

RADUIS setup in environment with the following information available:

- RADIUS Server IP or URL
- RADIUS Port
- RADIUS Secret

## Enter RADIUS Information

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052024333_mceclip0.png)

## Enable RADIUS in Privilege Secure and Login Example

At the bottom of the Configure → Server -> Radius Configuration Panel, enable or disable Radius when
appropriate:

![mceclip1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052024333_mceclip1.png)

For RADIUS Login:

- Enter AD domain\username for account
- Enter AD password for account
- For the Second Factor field, enter any alphanumeric character.
- Click [Sign In] button

While Privilege Secure is awaiting authentication with RADIUS you will see the button display 
"Signing In..."

![mceclip6.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360052024333_mceclip6.png)

Authenticate with your RADIUS 2FA method and you will be logged into Privilege Secure.
