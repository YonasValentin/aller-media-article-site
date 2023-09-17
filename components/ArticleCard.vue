<template>
  <article :class="classes.article">
    <nuxt-link :to="link">
      <div :class="classes.imageContainer">
        <nuxt-img
          :class="classes.image"
          :src="imageUrl"
          :alt="`Billede af artiklen ${title}`"
        />
      </div>
      <div
        class="flex flex-col items-center gap-y-2 bg-white rounded-b-lg p-5 text-center"
      >
        <div class="flex items-center gap-x-2">
          <p class="uppercase text-md font-semibold text-red-600">
            {{ category }}
          </p>

          <icon
            v-if="video"
            size="18px"
            name="material-symbols:smart-display-rounded"
          />
        </div>
        <h3 class="text-xl font-bold max-w-lg">{{ title }}</h3>
      </div>
    </nuxt-link>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  link: string;
  video: boolean;
  variant: "featured" | "normal";
}>();

const { variant } = toRefs(props);

const classes = computed(() => {
  const base = {
    article: "h-full flex flex-col",
    imageContainer: "aspect-[4/3]",
    image: "w-full h-full object-cover",
  };

  if (variant.value === "featured") {
    base.article += " col-span-2";
  } else {
    base.article += " col-span-1";
  }

  return base;
});
</script>
