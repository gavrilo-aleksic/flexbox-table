import { PropsWithChildren } from "react";
import * as React from "react";
import "./Flexbox.scss";

type FlexboxChild = (React.ReactElement<typeof FlexboxItem> | undefined);

interface FlexboxProps {
  spaceBetween?: boolean;
  debug?: boolean;
  className?: string;
  padding?: string;
  children?: FlexboxChild | FlexboxChild[];
  gap?: string;
}

const attributeClasses = {
  spaceBetween: "table-justify-content-space-between",
};

export const Flexbox = ({
  children,
  spaceBetween,
  debug = false,
  className = "",
  padding,
  gap
}: FlexboxProps) => {
  return (
    <table
      className={`flexbox-table ${
        spaceBetween ? attributeClasses.spaceBetween : ""
      } ${debug ? "flexbox-table-debug" : ""} ${className}`}
      cellPadding="0"
      cellSpacing="0"
      style={{borderSpacing:gap}}
    >
      <tbody>
        <tr>
          {React.Children.map(children, (child) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                  padding,
                  ...child.props,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any)
              : child;
          })}
        </tr>
      </tbody>
    </table>
  );
};

interface FlexboxItemProps {
  size?: number;
  className?: string;
  align?: "center";
  padding?: string;
}

export const FlexboxItem = ({
  children,
  size,
  className = "",
  align,
  padding,
}: PropsWithChildren<FlexboxItemProps>) => {
  return (
    <td
      colSpan={size}
      style={{ textAlign: align, padding }}
      className={className}
    >
      {children}
    </td>
  );
};
