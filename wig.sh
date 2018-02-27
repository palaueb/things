#!/bin/bash

IP="$(dig $1 +short)"

whois $IP

## Usage:
#   Give +x permisions to wig.sh => chmod +x wig.sh
#   Link it to /usr/local/bin => ln -s ./wig.sh /usr/local/bin/wig
#
#   Just do "wig host" to "whois IP of the host".
#   wig palaueb.com
##
