# Does Endpoint Policy Manager log sub-processes when launched from within CMD or Powershell?

Yes. In the example below, an elevated command prompt (perhaps elevated by Self Elevate), you can
see the command net stop spooler logged in the event log.

![1335_1_3cd9340de297397c581bc79215cfae2d](/img/product_docs/policypak/policypak/leastprivilege/1335_1_3cd9340de297397c581bc79215cfae2d.webp)

**NOTE:** If you are not seeing this be sure to upgrade to latest CSE.

_Remember,_ internal commands like: DIR or SET won't be logged; the command must be an external
command.
