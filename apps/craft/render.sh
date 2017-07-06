#!/bin/bash

clear

USERNAME=$(whoami)
WHEREAMI=$(pwd)

clear

zip -r $(sed -n 1p meta.txt).zip *.html *.json img js fonts

echo -e "\n"
echo "DONE!"
echo -e "\n"
