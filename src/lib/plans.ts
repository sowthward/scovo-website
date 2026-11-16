import type { PlansContent, PlanRow } from '../content/types';

/**
 * Fills every missing cell with 'TBC', so a plan added in the content file
 * shows up everywhere and the TBC guard sees what is still unconfirmed.
 */
export function normalizePlans(raw: PlansContent): PlansContent {
  const keys = raw.plans.map((p) => p.key);
  const fill = (row: PlanRow): PlanRow => ({
    ...row,
    cells: Object.fromEntries(keys.map((k) => [k, row.cells[k] ?? 'TBC'])),
  });
  return {
    ...raw,
    includesTable: { ...raw.includesTable, rows: raw.includesTable.rows.map(fill) },
    featureGroups: raw.featureGroups.map((g) => ({ ...g, rows: g.rows.map(fill) })),
  };
}

export const hasAnnual = (plans: PlansContent): boolean => plans.plans.some((p) => p.priceAnnual !== undefined);

/** Offer data for SoftwareApplication. Empty unless every paid price is a confirmed number. */
export function offers(plans: PlansContent, url: string): object[] {
  const paid = plans.plans.filter((p) => !p.trial);
  if (!paid.length || paid.some((p) => typeof p.price !== 'number')) return [];
  return paid.map((p) => ({ '@type': 'Offer', name: p.name, price: p.price, priceCurrency: 'EUR', url }));
}
