module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error:
          // "Uncaught ReferenceError: require is not defined"
          config.resolve.fallback = {
            fs: false
          }
        }
        return config
      },

    env: {
        JWT_SECRET:'my-secret-key-123',

        SECRET_COOKIE_PASSWORD: 'sec-123-raccoon'
    }

};