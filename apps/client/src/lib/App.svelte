<!-- Just this works -->
<!-- <script>
	import { initEcs } from './ecs/ecs';

	initEcs();
</script> -->

<script>
	import { Canvas, T } from '@threlte/core';
	import { Grid, Gizmo } from '@threlte/extras';

	import Scene from './Scene.svelte';
</script>

<div>
	<Canvas>
		<Gizmo horizontalPlacement="left" size={70} paddingX={10} paddingY={10} />
		<Grid />

		<Scene />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
	}
</style>
