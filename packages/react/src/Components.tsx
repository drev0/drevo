import React, { useEffect, useState } from "react";
import { version as coreVersion, drevo, AnyDrevo } from "@drevo/core";

import { version } from "./version";

interface DrevoProps {}

type DrevoState = AnyDrevo<number>;

const EXPOSE_META_TO_WINDOW = process.env.NODE_ENV !== "production";

export const Drevo: React.FC<DrevoProps> = ({ children }) => {
  const [_drevo, _setDrevo] = useState<DrevoState | null>(null);

  useEffect(() => {
    if (EXPOSE_META_TO_WINDOW && typeof window !== "undefined") {
      (window as any).__DREVO_REACT__ = {
        version,
        coreVersion,
        drevo
      };
    }
  }, []);

  function createDrevo() {
    _setDrevo(
      drevo({
        root: 450
      })
    );
  }

  return (
    <div>
      <button onClick={createDrevo}>create drevo</button>
      <div>Drevo React {version()}</div>
      <div>{_drevo}</div>
      {children}
    </div>
  );
};
