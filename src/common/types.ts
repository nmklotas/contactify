export type ClassProp<T = unknown> = T & {
  className?: string;
};

export interface AsyncResult<T = unknown> {
  data?: T;
  loading: boolean;
  error?: unknown;
}
