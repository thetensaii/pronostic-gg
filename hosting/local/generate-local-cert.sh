#!/bin/bash

CURRENT_SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $CURRENT_SCRIPT_DIR

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx/nginx.key -out ./nginx/nginx.crt -addext "subjectAltName = DNS:prono.tensaii.dev, DNS:www.prono.tensaii.dev, DNS:api.prono.tensaii.dev"