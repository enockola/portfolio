const cssnano = require("cssnano");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
        "cascade-layers": true,
        "custom-properties": false
      }
    }),
    isProduction && cssnano({ preset: "default" })
  ].filter(Boolean)
};
