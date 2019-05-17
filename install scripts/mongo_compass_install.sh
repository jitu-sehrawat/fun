# Download the package
echo 'Download the package'
wget https://downloads.mongodb.com/compass/mongodb-compass_1.15.1_amd64.deb;

# Install Compass
echo 'Install Compass'
sudo dpkg -i mongodb-compass_1.15.1_amd64.deb;

# Start Compass
echo 'Starting Compass'
mongodb-compass;
