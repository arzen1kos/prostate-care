// src/components/types.ts
export interface Position {
  x: number;
  y: number;
}

export interface NodeInfo extends Position {
  description: string;
}
