#!/bin/bash
clear

# GITHUB-USER: x283925
# GITHUB-TOKEN: a7f259ca94785e36c7a73e73a35334e7c205c05c
# GITHUB-ORG:  cib-application-test
# GITHUB-REPO: cib-apptest-secrets

echo ""
echo "SSH GITHUB KEYS AGREGATOR"
echo "************************************************************************************"
echo "The follow Script generates an SSH key.
The public part (*.pub) will be deploy in the Deploy-Keys section of the specified
Github repository, and the private part is displayed on the screen in base64 format."
echo "************************************************************************************"

echo "Enter GITHUB-USER:"
read USER

echo ""
echo "Enter GITHUB-TOKEN:"
read GIT_TOKEN

echo ""
echo "Enter GITHUB-ORG:"
read ORG

echo ""
echo "Enter GITHUB-REPO:"
read REPO


echo ""
echo "************************************************************************************"
echo "===== GENERATING SSH KEY ==========================================================="
echo "************************************************************************************"


echo -e "\n\n\n" | ssh-keygen -m PEM -t rsa -N "" -f $REPO-rsa
value=`cat $REPO-rsa | base64`
echo "$value" | tr -d '\n' > base64-PVK


PBK=`cat $REPO-rsa.pub`


generate_post_data()
{
  cat <<EOF
{
  "title": "$REPO",
  "key": "$PBK",
  "read_only": true
}
EOF
}

echo ""
echo "************************************************************************************"
echo "===== DEPLOY-KEY TO GITHUB ========================================================="
echo "************************************************************************************"

curl -i \
-H "Accept: application/json" \
-H "Content-Type:application/json" \
-X POST --data "$(generate_post_data)" -u ${USER}:${GIT_TOKEN} https://github.alm.europe.cloudcenter.corp/api/v3/repos/$ORG/$REPO/keys


pvk="$REPO-rsa"
pbk="$REPO-rsa.pub"

#if [ -f $pvk ] ; then
#    rm $pvk
#fi
#
#if [ -f $pbk ] ; then
#    rm $pbk
#fi

echo ""
echo "***************************************************************************************"
echo "Copy the follow content (private-key in base64 format) and enter it into
environment property (<sensitive_data_key>) of corresponding application in UrbanCode:" 
echo "***************************************************************************************"
echo ""
cat base64-PVK
echo ""
echo "_______________________________________________________________________________________"
echo ""
echo "Check deployed Key in: >> https://github.alm.europe.cloudcenter.corp/$ORG/$REPO/settings/keys"
echo ""
