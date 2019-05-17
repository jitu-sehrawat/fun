# Download the latest Google Chrome
echo 'Download the latest Google Chrome'
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# Install the Google Chrome .deb package
echo 'Install the Google Chrome .deb package'
sudo dpkg -i google-chrome-stable_current_amd64.deb

# Starting Google Chrome
echo 'Starting Google Chrome'
google-chrome
