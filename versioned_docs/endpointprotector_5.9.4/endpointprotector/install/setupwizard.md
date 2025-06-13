# Setup Wizard

The Endpoint Protector Appliance requires incoming traffic for ports 443 inbound to be whitelisted from the firewall. They are used for:

- Endpoint Protector Server and Client communication: 443 inbound
- Live Update (liveupdate.endpointprotector.com): 80 & 443 outbound to this single address (178.63.3.86/32)

Follow the steps to conﬁgure the Endpoint Protector Appliance for the ﬁrst time.

__Step 1 –__ Select __Continue__ when ﬁnished reading the End User License Agreement.

![End User License Agreement](/img/versioned_docs/threatprevention_7.4/threatprevention/install/licenseagreement.png)

__Step 2 –__ Select __Accept__.

![Accepting the term of the license](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/acceptagreement.png)

__Step 3 –__ Select __Networking__.

![Selecting Networking](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/networking.png)

__Step 4 –__ The conﬁguration methods are now available.

__CAUTION:__ We recommend a manual conﬁguration of the network settings.

![Automatic Network configuration for Endpoint Protector Appliance](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/autonetworkconfig.png)

## Manual Conﬁguration

For precise control, use manual configuration to set the IP address and default gateway, ensuring the appliance is correctly set up and accessible.

__Step 1 –__ Select __Conﬁgure Network manually__ (recommended).

![Manual Network configuration for Endpoint Protector Appliance](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/manualnetworkconfig.png)

__Step 2 –__ Set the IP Address, and Default Gateway (in our example we set the IP Address as 192.168.7.94 and the Default Gateway as 192.168.7.1).

![Setting IP and default GateAway](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/setip.png)

__Step 3 –__ Press __Tab__.

![Select tab to move to the apply button](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/netmask.png)

__Step 4 –__ Select __Apply__. The virtual appliance is now accessible from the conﬁgured IP Address. (e.g., https:// 192.168.7.94).

![Virtual appliance is now accessible from the conﬁgured IP Address](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/dhcpmethod.png)

## Automatic Conﬁguration

Select __conﬁgure network automatically__, and click __Enter__.

![ IP Address and Default Gateway conﬁgured automatically](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/install/staticipmethod.png)

The IP Address and Default Gateway will be conﬁgured automatically.
