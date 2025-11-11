import type { awesum } from '@/awesum';
import type { resources } from '@/resources/Resources';
declare module 'vue' {
    interface ComponentCustomProperties {
      $awesum: typeof awesum;
      $resources: typeof resources;
    }
  }
  
  export {}  // Important! See note.