import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'shadcn',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@shadcn-wc/core',
      outputType: 'component',
      directivesProxyFile: '../packages/angular/shadcn/src/lib/dist/components.ts',
      directivesArrayFile: '../packages/angular/shadcn/src/lib/dist/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
