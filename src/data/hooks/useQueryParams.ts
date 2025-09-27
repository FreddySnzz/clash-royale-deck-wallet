"use client";

import { useMemo } from "react";

type Params = { [key: string]: string | string[] | undefined };

export function useQueryParams<T extends string = string>(
  searchParams: Params,
  defaults: Partial<Record<T, string>> = {}
) {
  return useMemo(() => {
    const params: Record<T, string> = {} as Record<T, string>;

    (Object.keys(defaults) as T[]).forEach((key) => {
      const value = searchParams[key] ?? defaults[key];
      params[key] = Array.isArray(value) ? value[0] : (value ?? "");
    });

    (Object.keys(searchParams) as T[]).forEach((key) => {
      const value = searchParams[key];
      params[key] = Array.isArray(value) ? value[0] : (value ?? "");
    });

    return params;
  }, [searchParams, defaults]);
}
