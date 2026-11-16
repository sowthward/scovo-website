// TBC guard. Any content value may be the literal 'TBC'.
// Hidden pages show it as a grey chip. A published page must not contain one.

export const TBC = 'TBC';

export const isTbc = (v: unknown): boolean => v === TBC;

/** Returns the path of every 'TBC' value inside a content object. */
export function findTbc(value: unknown, path = ''): string[] {
  if (isTbc(value)) return [path || '(root)'];
  if (Array.isArray(value)) return value.flatMap((v, i) => findTbc(v, `${path}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) => findTbc(v, path ? `${path}.${k}` : k));
  }
  return [];
}

/** Throws (and so fails the build) when a published page holds a TBC value. */
export function assertNoTbc(page: { key: string; published: boolean }): void {
  if (!page.published) return;
  const found = findTbc(page);
  if (found.length) {
    throw new Error(
      `TBC guard: page "${page.key}" is published but has ${found.length} unconfirmed value(s):\n  - ` +
        found.slice(0, 20).join('\n  - ') +
        (found.length > 20 ? `\n  ... and ${found.length - 20} more` : '') +
        `\nReplace every TBC in the content files, or set published: false.`,
    );
  }
}
