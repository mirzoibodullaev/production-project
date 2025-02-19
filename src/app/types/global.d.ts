declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: ''

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
