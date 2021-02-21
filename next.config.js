const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
    },
    webpack: (config, options) => {
      const { isServer } = options;
      const mfConf = {
        name: "growUmbrella",
        library: { type: config.output.libraryTarget, name: "growUmbrella" },
        filename: "static/runtime/remoteEntry.js",
        remotes: {
          growUmbrellaRemote: isServer
            ? path.resolve(
                __dirname,
                "../grow-umbrella-remote/.next/server/static/runtime/remoteEntry.js"
              )
            : 'growUmbrellaRemote',
        },
        // Components this module exposes so it can be use by a consumer
        exposes: {
        },
        shared: [],
      };
  
      // Configures ModuleFederation and other Webpack properties
      withModuleFederation(config, options, mfConf);
  
      config.plugins.push(new MergeRuntime());
  
      if (!isServer) {
        config.output.publicPath = "http://localhost:3001/_next/";
      }
  
      return config;
    },
  };

