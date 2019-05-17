# Adding microsoft gpg
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/

# Creating vscode list
echo 'Creating vscode list to sources list'
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'

# installing dependencies and vscode
echo 'Installing dependencies and vscode'
sudo apt-get install apt-transport-https -y
sudo apt-get update -y
sudo apt-get install code -y


echo 'Successfully Installed'
