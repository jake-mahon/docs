# Express Agent Troubleshooting

If you experience problem with the Express Agent then please sent the express agent log files found
in `/var/nnt/expressagent` to [Netwrix Support](https://www.netwrix.com/support.html).

There are also a few simple checks that can be done to aid troubleshooting. Check that all the
agent’s dependencies are present using the `ldd` command:

# ldd /opt/nnt/expressagent/expressAgent

/opt/nnt/expressagent/expressAgent needs:

/usr/lib/libc.a(shr.o)

/usr/lib/libpthread.a(shr_xpg5.o)

/opt/freeware/lib/gcc/powerpc-ibm-aix6.1.0.0/4.8.5/../../../libcrypto.a(libcrypto.so.1.0.2)

/usr/lib/libpthread.a(shr_comm.o)

/opt/freeware/lib/gcc/powerpc-ibm-aix6.1.0.0/4.8.5/../../../libssl.a(libssl.so.1.0.2)

/unix

/usr/lib/libcrypt.a(shr.o)

/usr/lib/libpthreads.a(shr_comm.o)

If the details of the user account who made caused a FIM change are not included in the change
information, check that AIX® Event Infrastructure is installed and the aha folder mounted
correctly.

# lslpp -l bos.aha\*

Fileset Level State Description
