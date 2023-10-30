const ldap = require('ldapjs');

const ldapClient = ldap.createClient({
  url: 'ldap://IPESAUDE.INTRA.RS.GOV.BR:389',
});

module.exports = ldapClient;
