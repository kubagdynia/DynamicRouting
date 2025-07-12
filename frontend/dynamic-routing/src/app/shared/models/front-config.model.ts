export interface FrontConfigModel {
  chat?: {
    enabled?: boolean;
  };
  url?: {
    portal: string;
  };
  imports?: FrontConfigImport[];
}

export interface FrontConfigImport {
  code: string;
  label: string;
  routerLink: string;
  synchronizationEnabled: boolean;
}
