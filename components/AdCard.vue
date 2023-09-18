<template>
  <article v-if="currentAd" class="relative overflow-hidden">
    <nuxt-link :to="currentAd.link">
      <div class="aspect-[4/3] relative">
        <nuxt-img
          :src="currentAd.imageUrl"
          :alt="`Billede af annonce ${currentAd.text}`"
          class="object-cover w-full h-full"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        ></div>
      </div>

      <div class="absolute inset-0 flex flex-col justify-start items-start p-7">
        <p class="text-white font-thin mb-4">{{ currentAd.text }}</p>
        <button class="bg-white py-2 px-4">
          <span class="font-thin uppercase">{{ currentAd.cta }}</span>
        </button>
      </div>
    </nuxt-link>
  </article>

  <div class="text-red-600" v-else>Ingen annoncer tilgængelige...</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  ads: Array<{
    id: number;
    imageUrl: string;
    text: string;
    link: string;
    cta: string;
  }>;
}>();

const { ads } = toRefs(props);

const currentAdIndex = ref(0);

const currentAd = computed(() => ads.value[currentAdIndex.value]);

const interval = setInterval(() => {
  currentAdIndex.value = (currentAdIndex.value + 1) % ads.value.length;
}, 3 * 1000);

onUnmounted(() => {
  clearInterval(interval);
});
</script>
