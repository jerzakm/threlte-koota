<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { initEcs } from './ecs/ecs';

	initEcs();
</script>

<T.PerspectiveCamera makeDefault position={[15, 15, 15]} fov={36} target={[0, 0, 0]}>
	<OrbitControls />
</T.PerspectiveCamera>
