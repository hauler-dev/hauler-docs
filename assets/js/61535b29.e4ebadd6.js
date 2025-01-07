"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[8018],{9690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"hauler-usage/store/serve/registry","title":"Hauler Store Serve Registry","description":"Hauler Store Serve Registry Usage Documentation","source":"@site/versioned_docs/version-1.1.x/hauler-usage/store/serve/registry.md","sourceDirName":"hauler-usage/store/serve","slug":"/hauler-usage/store/serve/registry","permalink":"/docs/hauler-usage/store/serve/registry","draft":false,"unlisted":false,"editUrl":"https://github.com/hauler-dev/hauler-docs/edit/main/versioned_docs/version-1.1.x/hauler-usage/store/serve/registry.md","tags":[],"version":"1.1.x","frontMatter":{"title":"Hauler Store Serve Registry","description":"Hauler Store Serve Registry Usage Documentation","sidebar_label":"Registry"},"sidebar":"haulerSidebar","previous":{"title":"Save","permalink":"/docs/hauler-usage/store/save"},"next":{"title":"Fileserver","permalink":"/docs/hauler-usage/store/serve/fileserver"}}');var s=t(4848),o=t(8453);const a={title:"Hauler Store Serve Registry",description:"Hauler Store Serve Registry Usage Documentation",sidebar_label:"Registry"},i=void 0,l={},c=[{value:"Overview",id:"overview",level:3},{value:"Command Overview",id:"command-overview",level:3},{value:"Example Commands for the Hauler Registry",id:"example-commands-for-the-hauler-registry",level:2},{value:"Example Config for the Hauler Registry",id:"example-config-for-the-hauler-registry",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hauler store serve registry"})," serves the OCI Compliant registry."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"An example with available flags..."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"hauler store serve fileserver --port <port> --timeout <timeout> --readonly --tls-cert <cert> --tls-key <key>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store [flags]\n  hauler store [command]\n\nAliases:\n  store, s\n\nAvailable Commands:\n  add         Add content to the store\n  copy        Copy all store content to another location\n  extract     Extract artifacts from the content store to disk\n  info        Print out information about the store\n  load        Load a content store from a store archive\n  save        Save a content store to a store archive\n  serve       Serve the content store via an OCI Compliant Registry or Fileserver\n  sync        Sync content to the content store\n\nFlags:\n  -h, --help           help for store\n  -r, --retries int    Set the number of retries for operations (default 3)\n  -s, --store string   Set the directory to use for the content store\n\nGlobal Flags:\n  -d, --haulerdir string   Set the location of the hauler directory (default $HOME/.hauler)\n      --ignore-errors      Ignore/Bypass errors (i.e. warn on error) (defaults false)\n  -l, --log-level string   Set the logging level (i.e. info, debug, warn) (default "info")\n\nUse "hauler store [command] --help" for more information about a command.\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-commands-for-the-hauler-registry",children:"Example Commands for the Hauler Registry"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# serve registry\nhauler store serve registry\n\n# serve registry on specific port\nhauler store serve registry --port <port>\n\n# serve registry on specific port with custom config\nhauler store serve registry --port <port> --config <path-to-config>\n\n# serve registry in writeable mode\nhauler store serve registry --readonly=false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-config-for-the-hauler-registry",children:"Example Config for the Hauler Registry"}),"\n",(0,s.jsx)(n.p,{children:"These are all configuration options for the registry. Some options in the list are mutually exclusive. Read the detailed reference information about each option before finalizing your configuration."}),"\n",(0,s.jsxs)(n.p,{children:["You can learn more here --\x3e ",(0,s.jsx)(n.a,{href:"https://distribution.github.io/distribution/about/configuration",children:"https://distribution.github.io/distribution/about/configuration"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'version: 0.1\nlog:\n  accesslog:\n    disabled: true\n  level: debug\n  formatter: text\n  fields:\n    service: registry\n    environment: staging\n  hooks:\n    - type: mail\n      disabled: true\n      levels:\n        - panic\n      options:\n        smtp:\n          addr: mail.example.com:25\n          username: mailuser\n          password: password\n          insecure: true\n        from: sender@example.com\n        to:\n          - errors@example.com\nloglevel: debug # deprecated: use "log"\nstorage:\n  filesystem:\n    rootdirectory: /var/lib/registry\n    maxthreads: 100\n  azure:\n    accountname: accountname\n    accountkey: base64encodedaccountkey\n    container: containername\n    rootdirectory: /az/object/name/prefix\n    credentials:\n      type: client_secret\n      clientid: client_id_string\n      tenantid: tenant_id_string\n      secret: secret_string\n    copy_status_poll_max_retry: 10\n    copy_status_poll_delay: 100ms\n  gcs:\n    bucket: bucketname\n    keyfile: /path/to/keyfile\n    credentials:\n      type: service_account\n      project_id: project_id_string\n      private_key_id: private_key_id_string\n      private_key: private_key_string\n      client_email: client@example.com\n      client_id: client_id_string\n      auth_uri: http://example.com/auth_uri\n      token_uri: http://example.com/token_uri\n      auth_provider_x509_cert_url: http://example.com/provider_cert_url\n      client_x509_cert_url: http://example.com/client_cert_url\n    rootdirectory: /gcs/object/name/prefix\n    chunksize: 5242880\n  s3:\n    accesskey: awsaccesskey\n    secretkey: awssecretkey\n    region: us-west-1\n    regionendpoint: http://myobjects.local\n    forcepathstyle: true\n    accelerate: false\n    bucket: bucketname\n    encrypt: true\n    keyid: mykeyid\n    secure: true\n    v4auth: true\n    chunksize: 5242880\n    multipartcopychunksize: 33554432\n    multipartcopymaxconcurrency: 100\n    multipartcopythresholdsize: 33554432\n    rootdirectory: /s3/object/name/prefix\n    usedualstack: false\n    loglevel: debug\n  inmemory:  # This driver takes no parameters\n  tag:\n    concurrencylimit: 8\n  delete:\n    enabled: false\n  redirect:\n    disable: false\n  cache:\n    blobdescriptor: redis\n    blobdescriptorsize: 10000\n  maintenance:\n    uploadpurging:\n      enabled: true\n      age: 168h\n      interval: 24h\n      dryrun: false\n    readonly:\n      enabled: false\nauth:\n  silly:\n    realm: silly-realm\n    service: silly-service\n  token:\n    autoredirect: true\n    realm: token-realm\n    service: token-service\n    issuer: registry-token-issuer\n    rootcertbundle: /root/certs/bundle\n  htpasswd:\n    realm: basic-realm\n    path: /path/to/htpasswd\nmiddleware:\n  registry:\n    - name: ARegistryMiddleware\n      options:\n        foo: bar\n  repository:\n    - name: ARepositoryMiddleware\n      options:\n        foo: bar\n  storage:\n    - name: cloudfront\n      options:\n        baseurl: https://my.cloudfronted.domain.com/\n        privatekey: /path/to/pem\n        keypairid: cloudfrontkeypairid\n        duration: 3000s\n        ipfilteredby: awsregion\n        awsregion: us-east-1, use-east-2\n        updatefrequency: 12h\n        iprangesurl: https://ip-ranges.amazonaws.com/ip-ranges.json\n  storage:\n    - name: redirect\n      options:\n        baseurl: https://example.com/\nhttp:\n  addr: localhost:5000\n  prefix: /my/nested/registry/\n  host: https://myregistryaddress.org:5000\n  secret: asecretforlocaldevelopment\n  relativeurls: false\n  draintimeout: 60s\n  tls:\n    certificate: /path/to/x509/public\n    key: /path/to/x509/private\n    clientcas:\n      - /path/to/ca.pem\n      - /path/to/another/ca.pem\n    letsencrypt:\n      cachefile: /path/to/cache-file\n      email: emailused@letsencrypt.com\n      hosts: [myregistryaddress.org]\n      directoryurl: https://acme-v02.api.letsencrypt.org/directory\n  debug:\n    addr: localhost:5001\n    prometheus:\n      enabled: true\n      path: /metrics\n  headers:\n    X-Content-Type-Options: [nosniff]\n  http2:\n    disabled: false\n  h2c:\n    enabled: false\nnotifications:\n  events:\n    includereferences: true\n  endpoints:\n    - name: alistener\n      disabled: false\n      url: https://my.listener.com/event\n      headers: <http.Header>\n      timeout: 1s\n      threshold: 10\n      backoff: 1s\n      ignoredmediatypes:\n        - application/octet-stream\n      ignore:\n        mediatypes:\n           - application/octet-stream\n        actions:\n           - pull\nredis:\n  addr: localhost:6379\n  password: asecret\n  db: 0\n  dialtimeout: 10ms\n  readtimeout: 10ms\n  writetimeout: 10ms\n  pool:\n    maxidle: 16\n    maxactive: 64\n    idletimeout: 300s\n  tls:\n    enabled: false\nhealth:\n  storagedriver:\n    enabled: true\n    interval: 10s\n    threshold: 3\n  file:\n    - file: /path/to/checked/file\n      interval: 10s\n  http:\n    - uri: http://server.to.check/must/return/200\n      headers:\n        Authorization: [Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==]\n      statuscode: 200\n      timeout: 3s\n      interval: 10s\n      threshold: 3\n  tcp:\n    - addr: redis-server.domain.com:6379\n      timeout: 3s\n      interval: 10s\n      threshold: 3\nproxy:\n  remoteurl: https://registry-1.docker.io\n  username: [username]\n  password: [password]\n  ttl: 168h\nvalidation:\n  manifests:\n    urls:\n      allow:\n        - ^https?://([^/]+\\.)*example\\.com/\n      deny:\n        - ^https?://www\\.example\\.com/\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);