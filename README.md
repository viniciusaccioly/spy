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
[**Vídeo Apresentação Final**](https://youtu.be/KgHyu8TP4HA)

## Instruções SPY:

### Requisitos:
	- Sistema operacional Debian ou derivados;
	- Ter instalado o snmp em todas as máquinas clientes e servidor;
	- Nas máquinas clientes ter liberado as oids
	- Visual Studio Code, na máquina que vai requisitar os serviços.

## Processo de instalação:

Copiar o arquivo script.sh para o diretório /usr/local/bin

Atribuir permissão de execução com o comando
```sh
#chmod +x /usr/local/bin/script.sh
```

----------- Configurações do Servidor ---------------

1. Instalação do snmp

```sh
#apt-get install snmp snmpd
```

2. Configuração snmpd.conf ( está dentro de /etc/snmp/snmpd.conf)
Caso você deseje fazer as consultas externamente comente a linha abaixo:
```sh
#agentAddress udp:127.0.0.1:161
```

e descomente a linha abaixo:
```sh
agentAddress udp:161,udp6:[::1]:161
```

3. Reiniciar o serviço snmpd
```sh
/etc/init.d/snmp restart
```

---------- Configurações PC01 e PC02 ----------------

1. Instalação do snmp
```sh
#apt-get install snmp snmpd
```
2. Configuração do snmp.conf ( esta dento de /etc/snmp/snmpd.conf)
Caso você deseje fazer as consultas externamente comente a linha abaixo:
```sh
#agentAddress udp:127.0.0.1:161
```
e descomente a linha abaixo:
```sh
agentAddress udp:161,udp6:[::1]:161
```
3. Libera todas OIDs".1"
```sh
view all included .1
comente os outros view
rocommunity public default -V all
```
4. Reiniciar o serviço snmpd
```sh
/etc/init.d/snmp restart
```

--------- Vscode -------------
1. Abrir o Vscode 
2. No terminal do vscode executar o comando para o express ficar em modo de "listen"
```sh
node fetch.js
```

## Referências:

Instalação e configuração em rede snmp

https://blog.remontti.com.br/189

configurando o snmp para liberar todas as OID

https://ti-redes.webnode.com.br/gerenciamento/snmp/snmp-no-linux/

OIDs do Linux para estatísticas de CPU, memória e disco

http://www.debianhelp.co.uk/linuxoids.htm


## Descrição das Funcionalidades do Projeto:
```
Após feita as instalações e configurações nescessarias de forma simples basta digitar o ip da maquina que deseja requisitar as informações e clicar no botão de pesquisar.
```

```
Cenário:
Servidor 
	- 192.168.0.1/24
PC01
	- 192.168.0.2/24
PC02
	- 192.168.0.3/24
```
	
