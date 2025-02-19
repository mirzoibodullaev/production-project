import webpack, { DefinePlugin } from "webpack";
import path from "path";
import { BuildPath } from "../config/build/types/config";
import { buildCssLoader } from "../config/build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "src"),
    };

    if (config.module && config.module.rules) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config.module.rules = config.module.rules.map((rule: any) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    });

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(""),
        })
    );

    return config;
};
