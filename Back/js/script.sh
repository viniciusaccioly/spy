part=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.9.1.2.1 | cut -d":" -f2)
hdused=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.9.1.8.1 | cut -d":" -f2)
hdtotal=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.9.1.6.1 | cut -d":" -f2)
ramtotal=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.4.5.0 | cut -d":" -f2)
ramused=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.4.6.0 | cut -d":" -f2)
cpuload=$(snmpget -v 1 -c public $1 .1.3.6.1.4.1.2021.10.1.3.2 | cut -d":" -f2)


echo $part $hdtotal $hdused $ramtotal $ramused $cpuload
