#!/bin/bash

clear

USERNAME=$(whoami)
WHEREAMI=$(pwd)

clear

sensible-browser --new-tab="file:///home/$USERNAME/Desktop/apollonian/index.html" &
