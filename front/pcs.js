export default pc
function pc(ip){
    const PC1=[{"ip":"192.168.1.1",
    "mask":"255.255.255.0",
    "hostname":"servidor",
    },
    {
    "cputemp":"75º",
    "cpu":"i5 2500",
    "cpuclock":"3.7"},
    {
    "hdtotal":"500gb",
    "hduso":"300gb",
    "hdtemp":"35º"},
    
    {"memuso":"4860",
    "memclock":"2666",
    "memtemp":"30"}]
    
   const PC2=[{"ip":"192.168.1.2",
    "mask":"255.255.255.0",
    "hostname":"pc1",
    },
    {
    "cputemp":"63",
    "cpu":"i7",
    "cpuclock":"3.3"},
    {
    "hdtotal":"1tb",
    "hduso":"323gb",
    "hdtemp":"37º"},
    {"memuso":"5",
    "memclock":"2133",
    "memtemp":"33",}]

  if (PC1[0].ip==ip){
    return PC1}
  else if (PC2[0].ip==ip){
      return PC2
  }


}
//console.log(pc("192.168.1.1"))