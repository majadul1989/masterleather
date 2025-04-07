export default function(providerOptions) {
    // Init provider
  
    return {
      // Absolute path to runtime file
      runtime: require.resolve('./runtime'),
  
      // Public options to use in runtime
      runtimeOptions: providerOptions,
  
    }
  }