export interface taskMapping {
  name: string;
  priority: {
    [key: string]: any;
    Low: number;
    Medium: number;
    High: number;
  };
}
