import { createWorld, trait } from '@koota/core';

export const initEcs = () => {
	const world = createWorld();
	// Basic trait with default values
	const Position = trait({ x: 0, y: 0 });
	const Velocity = trait({ x: 0, y: 0 });
};
