---
title: Hauler Store Serve Registry
description: Hauler Store Serve Registry Usage Documentation
sidebar_label: Registry
---

### Overview

`hauler store serve registry` serves the OCI Compliant registry.

**An example with available flags...**

```bash
hauler store serve fileserver --port <port> --timeout <timeout> --readonly --tls-cert <cert> --tls-key <key>
```

### Command Overview

```yaml
Usage:
  hauler store serve registry [flags]

Flags:
  -c, --config string      (Optional) Location of config file (overrides all flags)
      --directory string   (Optional) Directory to use for backend. Defaults to $PWD/registry (default "registry")
  -h, --help               help for registry
  -p, --port int           (Optional) Set the port to use for incoming connections (default 5000)
      --readonly           (Optional) Run the registry as readonly (default true)
      --tls-cert string    (Optional) Location of the TLS Certificate to use for server authenication
      --tls-key string     (Optional) Location of the TLS Key to use for server authenication

Global Flags:
  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)
      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)
  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")
  -r, --retries int        Set the number of retries for operations (default 3)
  -s, --store string       Set the directory to use for the content store
```

## Example Commands for the Hauler Registry

```bash
# serve registry
hauler store serve registry

# serve registry on specific port
hauler store serve registry --port <port>

# serve registry on specific port with custom config
hauler store serve registry --port <port> --config <path-to-config>

# serve registry in writeable mode
hauler store serve registry --readonly=false
```

## Example Config for the Hauler Registry

These are all configuration options for the registry. Some options in the list are mutually exclusive. Read the detailed reference information about each option before finalizing your configuration.

You can learn more here --> https://distribution.github.io/distribution/about/configuration

```bash
version: 0.1
log:
  accesslog:
    disabled: true
  level: debug
  formatter: text
  fields:
    service: registry
    environment: staging
  hooks:
    - type: mail
      disabled: true
      levels:
        - panic
      options:
        smtp:
          addr: mail.example.com:25
          username: mailuser
          password: password
          insecure: true
        from: sender@example.com
        to:
          - errors@example.com
loglevel: debug # deprecated: use "log"
storage:
  filesystem:
    rootdirectory: /var/lib/registry
    maxthreads: 100
  azure:
    accountname: accountname
    accountkey: base64encodedaccountkey
    container: containername
    rootdirectory: /az/object/name/prefix
    credentials:
      type: client_secret
      clientid: client_id_string
      tenantid: tenant_id_string
      secret: secret_string
    copy_status_poll_max_retry: 10
    copy_status_poll_delay: 100ms
  gcs:
    bucket: bucketname
    keyfile: /path/to/keyfile
    credentials:
      type: service_account
      project_id: project_id_string
      private_key_id: private_key_id_string
      private_key: private_key_string
      client_email: client@example.com
      client_id: client_id_string
      auth_uri: http://example.com/auth_uri
      token_uri: http://example.com/token_uri
      auth_provider_x509_cert_url: http://example.com/provider_cert_url
      client_x509_cert_url: http://example.com/client_cert_url
    rootdirectory: /gcs/object/name/prefix
    chunksize: 5242880
  s3:
    accesskey: awsaccesskey
    secretkey: awssecretkey
    region: us-west-1
    regionendpoint: http://myobjects.local
    forcepathstyle: true
    accelerate: false
    bucket: bucketname
    encrypt: true
    keyid: mykeyid
    secure: true
    v4auth: true
    chunksize: 5242880
    multipartcopychunksize: 33554432
    multipartcopymaxconcurrency: 100
    multipartcopythresholdsize: 33554432
    rootdirectory: /s3/object/name/prefix
    usedualstack: false
    loglevel: debug
  inmemory:  # This driver takes no parameters
  tag:
    concurrencylimit: 8
  delete:
    enabled: false
  redirect:
    disable: false
  cache:
    blobdescriptor: redis
    blobdescriptorsize: 10000
  maintenance:
    uploadpurging:
      enabled: true
      age: 168h
      interval: 24h
      dryrun: false
    readonly:
      enabled: false
auth:
  silly:
    realm: silly-realm
    service: silly-service
  token:
    autoredirect: true
    realm: token-realm
    service: token-service
    issuer: registry-token-issuer
    rootcertbundle: /root/certs/bundle
  htpasswd:
    realm: basic-realm
    path: /path/to/htpasswd
middleware:
  registry:
    - name: ARegistryMiddleware
      options:
        foo: bar
  repository:
    - name: ARepositoryMiddleware
      options:
        foo: bar
  storage:
    - name: cloudfront
      options:
        baseurl: https://my.cloudfronted.domain.com/
        privatekey: /path/to/pem
        keypairid: cloudfrontkeypairid
        duration: 3000s
        ipfilteredby: awsregion
        awsregion: us-east-1, use-east-2
        updatefrequency: 12h
        iprangesurl: https://ip-ranges.amazonaws.com/ip-ranges.json
  storage:
    - name: redirect
      options:
        baseurl: https://example.com/
http:
  addr: localhost:5000
  prefix: /my/nested/registry/
  host: https://myregistryaddress.org:5000
  secret: asecretforlocaldevelopment
  relativeurls: false
  draintimeout: 60s
  tls:
    certificate: /path/to/x509/public
    key: /path/to/x509/private
    clientcas:
      - /path/to/ca.pem
      - /path/to/another/ca.pem
    letsencrypt:
      cachefile: /path/to/cache-file
      email: emailused@letsencrypt.com
      hosts: [myregistryaddress.org]
      directoryurl: https://acme-v02.api.letsencrypt.org/directory
  debug:
    addr: localhost:5001
    prometheus:
      enabled: true
      path: /metrics
  headers:
    X-Content-Type-Options: [nosniff]
  http2:
    disabled: false
  h2c:
    enabled: false
notifications:
  events:
    includereferences: true
  endpoints:
    - name: alistener
      disabled: false
      url: https://my.listener.com/event
      headers: <http.Header>
      timeout: 1s
      threshold: 10
      backoff: 1s
      ignoredmediatypes:
        - application/octet-stream
      ignore:
        mediatypes:
           - application/octet-stream
        actions:
           - pull
redis:
  addr: localhost:6379
  password: asecret
  db: 0
  dialtimeout: 10ms
  readtimeout: 10ms
  writetimeout: 10ms
  pool:
    maxidle: 16
    maxactive: 64
    idletimeout: 300s
  tls:
    enabled: false
health:
  storagedriver:
    enabled: true
    interval: 10s
    threshold: 3
  file:
    - file: /path/to/checked/file
      interval: 10s
  http:
    - uri: http://server.to.check/must/return/200
      headers:
        Authorization: [Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==]
      statuscode: 200
      timeout: 3s
      interval: 10s
      threshold: 3
  tcp:
    - addr: redis-server.domain.com:6379
      timeout: 3s
      interval: 10s
      threshold: 3
proxy:
  remoteurl: https://registry-1.docker.io
  username: [username]
  password: [password]
  ttl: 168h
validation:
  manifests:
    urls:
      allow:
        - ^https?://([^/]+\.)*example\.com/
      deny:
        - ^https?://www\.example\.com/
```
