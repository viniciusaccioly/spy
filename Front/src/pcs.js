export default pc;
function pc(ip) {
  const PC1 = [
    { hostname: "server1", OS: "Debian9", memtotal: "8Gb" },
    {
      cputemp: "75º",
      cpu: "i5 2500",
      cpuclock: "3.7"
    },
    {
      hdtotal: "500gb",
      hduso: "300gb",
      hdtemp: "35º"
    },

    { memuso: "4860", memclock: "2666", memtemp: "30" },

    { netint: "enp0s3", netip: "192.168.1.1", netstatus: "active" }
  ];

  const PC2 = [
    { hostname: "pc1", OS: "CentOS", memtotal: "16Gb" },
    {
      cputemp: "63",
      cpu: "i7",
      cpuclock: "3.3"
    },
    {
      hdtotal: "1tb",
      hduso: "323gb",
      hdtemp: "37º"
    },

    { memuso: "5", memclock: "2133", memtemp: "33" },

    { netint: "enp0s8", netip: "192.168.1.2", netstatus: "active" }
  ];

  if (PC1[4].netip == ip) {
    return PC1;
  } else if (PC2[4].netip == ip) {
    return PC2;
  }
}
//console.log(pc("192.168.1.1"))
