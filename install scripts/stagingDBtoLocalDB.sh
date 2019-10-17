#! /bin/bash
echo '*****************************************************************************************************************************************'
echo 'Deleting Fms Db on local machine'
mongo <<EOF
show dbs
use Fms
db.dropDatabase()
quit()
EOF


echo '*****************************************************************************************************************************************'
echo 'Removing Older backup of Fms'
sudo rm -rf /opt/backup/mongodump

echo '*****************************************************************************************************************************************'
echo 'Creating a New Dump'
sudo mongodump --host 13.71.86.188 -d Fms --port 27017 --username fmsOwner --password "fmsOwnerPass123" --authenticationDatabase Fms --out /opt/backup/mongodump

echo '*****************************************************************************************************************************************'
echo 'Restoring staging DB to Local DB'
sudo mongorestore --host localhost:27017 /opt/backup/mongodump
