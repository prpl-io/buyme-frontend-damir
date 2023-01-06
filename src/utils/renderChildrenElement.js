import { isValidElement } from "react";

export const renderChildrenElement = (children) =>
  isValidElement(children) ? children : "Children is not valid element";
