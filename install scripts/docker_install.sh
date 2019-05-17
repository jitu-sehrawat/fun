#!/bin/sh
echo 'Installing Docker CE for Ubuntu'
echo '*****************************************************************************************************************************************'
echo 'OS requirements'
echo 'To install Docker CE, you need the 64-bit version of one of these Ubuntu versions:

 - Cosmic 18.10
 - Bionic 18.04 (LTS)
 - Xenial 16.04 (LTS)'

echo '*****************************************************************************************************************************************'
echo 'Stopping all docker services'
sudo service docker stop

echo 'Uninstall old versions'
sudo apt-get remove docker docker-engine docker.io containerd runc

echo '*****************************************************************************************************************************************'
echo 'Install using the repository method'
echo ''
echo 'Update the apt package index'
sudo apt-get update

echo '*****************************************************************************************************************************************'
echo 'Install packages to allow apt to use a repository over HTTPS'
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y

echo '*****************************************************************************************************************************************'
echo 'Add Docker’s official GPG key'
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo '*****************************************************************************************************************************************'
echo 'Setting up the stable repository'
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

echo '*****************************************************************************************************************************************'
echo 'INSTALLING DOCKER CE'
echo '*****************************************************************************************************************************************'
echo 'Update the apt package index'
sudo apt-get update
echo 'Install the latest version of Docker CE '
sudo apt-get install docker-ce docker-ce-cli containerd.io -y

echo '*****************************************************************************************************************************************'
echo 'Starting docker service'
sudo service docker start && sudo service docker status | cat

echo '*****************************************************************************************************************************************'
echo 'Verify that Docker CE is installed correctly by running the hello-world image'
sudo docker run hello-world

echo '*****************************************************************************************************************************************'
echo 'Manage Docker as a non-root user'
sudo groupadd docker

echo '*****************************************************************************************************************************************'
echo 'Add your user to the docker group'
sudo usermod -aG docker $USER

echo '*****************************************************************************************************************************************'
echo 'Configure Docker to start on boot'
sudo systemctl enable docker

echo '*****************************************************************************************************************************************'
echo 'Restarting the system'
sudo reboot

