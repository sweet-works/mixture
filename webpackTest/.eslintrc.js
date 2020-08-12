module.exports = {
    "extends": "hwxyz/react",
    rules: {
        "jsx-quotes": 0,
        "no-unused-vars": 1,
        "no-throw-literal": 0,
        "react/prop-types": [
          "enabled",
          { "ignore": "ignore", "customValidators": "customValidator" }
        ]
    }
}
