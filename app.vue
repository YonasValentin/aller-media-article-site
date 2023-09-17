<template>
  <div class="mx-auto max-w-7xl py-5 min-h-screen bg-cream">
    <category-banner category-name="skæbner" />

    <main class="grid grid-cols-12 p-5">
      <section class="col-span-8 grid grid-cols-2 gap-5">
        <div v-if="articlesError" class="col-span-2 text-red-600">
          Der opstod en fejl under hentning af artikler. Prøv igen senere.
        </div>

        <template v-else>
          <article-card
            v-if="featuredArticle"
            v-bind="featuredArticle"
            variant="featured"
          />

          <article-card
            v-for="article in otherArticles"
            :key="article.id"
            v-bind="article"
            variant="normal"
          />
        </template>
      </section>

      <aside class="col-start-10 col-span-3">
        <ad-card v-if="ads.length" :ads="ads" />
      </aside>
    </main>
  </div>
</template>
<script setup lang="ts">
interface Article {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  link: string;
  video: boolean;
}

interface ArticlesResponse {
  record: {
    articles: Article[];
  };
}

interface Ad {
  id: number;
  imageUrl: string;
  link: string;
  text: string;
  cta: string;
}

interface AdResponse {
  record: {
    ads: Ad[];
  };
}

const featuredArticle = computed(() => articles.value[0]);
const otherArticles = computed(() => articles.value.slice(1));

const { data: articlesData, error: articlesError } = useFetch<ArticlesResponse>(
  "https://api.jsonbin.io/v3/b/6506238fd972192679c50f33"
);

const { data: adsData } = useFetch<AdResponse>(
  "https://api.jsonbin.io/v3/b/650705e12639b33ebfa7ce97"
);

const articles = ref<Article[]>([]);
const ads = ref<Ad[]>([]);

if (articlesData?.value?.record?.articles) {
  articles.value = articlesData.value.record.articles;
}

if (adsData?.value?.record.ads) {
  ads.value = adsData.value.record.ads;
}
</script>
