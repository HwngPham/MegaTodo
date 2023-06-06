<script setup lang="ts">
import { provideClient } from "@urql/vue";
import { client } from "./services/graph/client";

provideClient(client);
</script>

<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>
