# Download and setup the APT repository add the PGP key to the system’s APT keychain
echo 'Download and setup the APT repository add the PGP key to the system’s APT keychain'
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# Running apt-get to Install Node.js
echo 'Running apt-get to Install Node.js'
sudo apt-get install -y nodejs

# Confirm Node.js was Successfully Installed
echo 'Confirm Node.js was Successfully Installed'
node -v

# Finally, Update Your Version of npm
echo 'Finally, Update Your Version of npm'
sudo npm install npm --global
npm -v
