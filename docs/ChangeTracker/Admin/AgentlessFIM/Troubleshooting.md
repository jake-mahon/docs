---
id: troubleshooting
title: Common Troubleshooting Tips
---

# Common Troubleshooting Tips

## Permission Denied

```
[root`@IP141`-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64
-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: Permission denied
[root`@IP141`-Oracle-Linux-7 ~]#
```

## No File or Directory

```
[root`@IP141`-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64
-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: No such file or directory
[root`@IP141`-Oracle-Linux-7 ~]#
```

## Error While Loading Shared Libraries

```
[[root`@IP141`-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64
NNT_FILEHASH_LINUX_X64: error while loading shared libraries: libstdc++.so.6: cannot open shared object file: No such file or directory
[root`@IP141`-Oracle-Linux-7 ~]#
```

Check dependencies of NNT Filehash using a ldd NNT_FILEHASH_LINUX_X64

```
[root`@IP141`-Oracle-Linux-7 bin]# ldd NNT_FILEHASH_LINUX_X64
 linux-vdso.so.1 => (0x00007ffdca7f1000)
 libstdc++.so.6 => not found
 libm.so.6 => /lib64/libm.so.6 (0x00007ff4efd3a000)
 libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007ff4efb24000)
 libc.so.6 => /lib64/libc.so.6 (0x00007ff4ef762000)
 /lib64/ld-linux-x86-64.so.2 (0x000055e3dd177000)
```

Here the libstdc++.so.6 file is reported as ‘not found’, while all other dependencies have been located OK.

- Check if libstdc++.* is present on the platform to be monitored using command find / -name libstdc++.*
- If the file is located then it will be necessary to either copy the file to the standard default path, e.g. /usr/bin, or at least create a link from the path to the file
- If the libstdc file is not located on this host, please run the find command on any other similar servers, especially any with compiler capabilities. If located, please take a copy of the file, move it to all other servers and place it on the /usr/bin path
- if libstdc++ does not exist anywhere within your server estate, then it will be necessary to get the binary from the Manufacturer repo or contact [Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support")