# SPY - Monitor de rede

### Projeto acadêmico da disciplina desenvolvimento Web.
### Equipe:
	* Joab
	* Mateus Pedro
	* Vinicius 

## Descrição:

Ferramenta web com objetivo de monitorar trafego de rede da maquina, uso de processamento, uso de memoria utilizando o protocolo snmp

## Repositório:
[**Repositório oficial**](https://github.com/viniciusaccioly/spy)<br>

## Vídeo de Apresentação:
[**Vídeo de Apresentação**](https://youtu.be/ZcMAWlk2AtY)<br>
[**Vídeo Front End**](https://youtu.be/Yr7W37x2-70)

## Instruções SPY:

### Requisitos:
	- Sistema operacional Debian ou derivados;
	- Ter instalado o snmp em todas as máquinas clientes e servidor;
	- Nas máquinas clientes ter liberado as oids
	- Visual Studio Code, na máquina que vai requisitar os serviços.

## Processo de instalação:

Copiar o arquivo script.sh para o diretório /usr/local/bin

Atribuir permissão de execução com o comando
	# chmod +x /usr/local/bin/script.sh

----------- Configurações do Servidor ---------------

1. Instalação do snmp
	# apt-get install snmp snmpd
2. Configuração snmpd.conf ( está dentro de /etc/snmp/snmpd.conf)
Caso você deseje fazer as consultas externamente comente a linha abaixo:
	#agentAddress udp:127.0.0.1:161
e descomente a linha abaixo:
	agentAddress udp:161,udp6:[::1]:161

3. Reiniciar o serviço snmpd
	/etc/init.d/snmp restart

---------- Configurações PC01 e PC02 ----------------

1. Instalação do snmp
	# apt-get install snmp snmpd
2. Configuração do snmp.conf ( esta dento de /etc/snmp/snmpd.conf)
Caso você deseje fazer as consultas externamente comente a linha abaixo:
#agentAddress udp:127.0.0.1:161
e descomente a linha abaixo:
	agentAddress udp:161,udp6:[::1]:161
3. Libera todas OIDs".1"
	view all included .1
	comente os outros view
	rocommunity public default -V all

4. Reiniciar o serviço snmpd
	/etc/init.d/snmp restart


## Testando

´´´No servidor teste primeiro a conexão ping, depois realize o seguinte comando:

Obtenha a carga do sistema de 1 minuto no host de destino 
snmpget -v 1 -c public 192.168.0.2 .1.3.6.1.4.1.2021.10.1.3.1 | cut -f-4 -d”:”´´´


segue a lista para outros testes

http://www.debianhelp.co.uk/linuxoids.htm

## Referências:

Instalação e configuração em rede snmp

https://blog.remontti.com.br/189

configurando o snmp para liberar todas as OID

https://ti-redes.webnode.com.br/gerenciamento/snmp/snmp-no-linux/

OIDs do Linux para estatísticas de CPU, memória e disco

http://www.debianhelp.co.uk/linuxoids.htm


## Descrição das Funcionalidades do Projeto:
	Após feita as instalações e configurações nescessarias de forma simples basta digitar o ip da maquina que deseja requisitar as informações e clicar em do seguinte Cenário:
Servidor 
	- 192.168.0.1/24
PC01
	- 192.168.0.2/24
PC02
	- 192.168.0.3/24

## Contato:
