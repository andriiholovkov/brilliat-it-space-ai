import * as React from "react";

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

declare type PolymorphicProps<E extends React.ElementType> =
  React.PropsWithChildren<
    React.ComponentPropsWithoutRef<E> & {
      as?: E;
    }
  >;
