export async  function keycloak()
{

  const KeycloakAdminClient = await  require('@keycloak/keycloak-admin-client')

  const keycloakConfig = {
    realm: 'V1_Realm',
    baseUrl: 'http://localhost:8080/auth',
  };
  
  const keycloakAdminClient = async function () {

    
    const kcAdminClient = new KeycloakAdminClient({
      baseUrl: keycloakConfig.baseUrl,
      realmName: keycloakConfig.realm,
    });
  
    await kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'nest-app',
    });
  
    return kcAdminClient;
  };



  return { keycloakConfig ,keycloakAdminClient};

}
