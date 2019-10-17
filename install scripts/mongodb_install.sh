# Import the public key used by the package management system
echo 'Import the public key used by the package management system'
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# Create a list file for MongoDB
echo 'Create a list file for MongoDB'
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

# Reload local package database
echo 'Reload local package database'
sudo apt-get update

# Install the MongoDB packages
echo 'Install the MongoDB packages'
sudo apt-get install -y mongodb-org

# Configure MongoDB to start on boot
echo 'Configure Docker to start on boot'
sudo systemctl enable mongod

# Start MongoDB
echo 'sudo service mongod start'
sudo service mongod start && sudo service mongod status | cat

echo 'Begin using MongoDB using command "mongo" in terminal'
