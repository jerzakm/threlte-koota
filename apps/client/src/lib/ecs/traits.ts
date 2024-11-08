import { trait } from '@koota/core';

// Basic trait with default values
export const Position = trait({ x: 0, y: 0 });
export const Team = trait({ team: 0 });
export const Color = trait({ r: 0, g: 0, b: 0 });

// Tag trait (no data)
export const IsSelected = trait();
