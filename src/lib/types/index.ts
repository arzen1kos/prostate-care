// Not imported by any file
export interface BlobParameters {
  name: string;
  seed: number;
  extraPoints: number;
  randomness: number;
  size: number;
// Not referenced by any file
// Type definitions for the application
}
// Blob shape properties
export interface BlobProps {
  parameters?: {
    name: string;
    color: string;
    complexity: number;
    contrast: number;
    seed: number;
  };
  path?: string;
  
}

// Legacy types kept for compatibility
export type BlobParameterProps = {
  seed: number;
  size: number;
  edges: number;
  growth: number;
  name: string;
  colors: string[];
};

export type LegacyBlobProps = {
  svgPath: string;
  parameters: BlobParameterProps;
};
