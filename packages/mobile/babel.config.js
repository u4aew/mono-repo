module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'shared': '../../node_modules/shared/dist',
        }
      }
    ]
  ]
};
