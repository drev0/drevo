import React from "react";

import { version } from "./version";

interface DrevoProps {}

export const Drevo: React.FC<DrevoProps> = ({ children }) => (
  <div>
    <div>Drevo ${version()}</div>
    {children}
  </div>
);
