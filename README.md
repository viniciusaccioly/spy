# SPY - Monitor de rede

### Projeto acadêmico da disciplina desenvolvimento Web.
### Equipe:
	* Joab
	* Mateus Pedro
	* Vinicius 

## Descrição:

Ferramenta web com objetivo de monitorar ativos de rede, uso de processamento, use de memoria e carga de trabalho utilizando o protocolo snmp e mrtg.

## Repositório:
[**Repositorio oficial**](https://github.com/viniciusaccioly/spy)<br>

## Vídeo de Apresentação:
[**Video de Apresentação**](http://link-para-o-video)

## Requisitos mínimos:
	
## Processo de instalação:
---------------- Instalação --------------------------------

apt install snmp snmpd mrtg lynx apache2

--------------- Configuração Apache2 ---------------------
	vim /etc/apache2/sites-available/000-default.conf
Alterar a linha abaixo para:
	 DocumentRoot /var/www/
Reinicia o serviço do apache2:
	systemctl restart apache2
Verificar o status:
	systemctl status apache2

--------------- Configuração do mrtg ---------------------
	vim /etc/mrtg.cfg
Adicionar as linhas abaixo do #Global configuration:

'''Htmldir: /var/www/mrtg
Icondir: Images /
Refresh: 300
Interval: 5
Language: portuguese
RunAsdaemon: yes
WriteExpires: Yes

# SPY
#
Target[enp0s3]: 'cat /proc/net/dev | grep enp0s3 | awk -F':' '{print $2}' | awk '{print $1}'; cat /proc/net/dev | grep enp0s3 | awk -F':' '{print $2}' | awk '{print $9}' ; echo -e echo -e
MaxBytes[enp0s3]: 1250000
Title[enp0s3]: enp0s3 - Utilização enp0s3
PageTop[enp0s3]: <h1>Estatistiaca das interfaces<br>Utilização da Interface externa(enp0s3)</h1>
options[enp0s3]: growright
'''
Salvar, sair.

Criar a pasta /var/www/mrtg 
	mkdir -p /var/www/mrtg

env LANG=C /usr/bin/mrtg
## Inspirações de Funcionalidade e Telas:

## Descrição das Funcionalidades do Projeto:

## Contato:
