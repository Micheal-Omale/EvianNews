<script setup>
import { ref } from 'vue'

const search = ref("")
const News = ref([])

const SearchNews = () => {
  if (search != "") {
     fetch(`https://newsapi.org/v2/everything?q=${search.value}&apiKey=31443e5d54d54e4aa81faec9dc4f906f`)
     .then(response => response.json())
     .then(data => {
       News.value = data.articles;
       search.value = "";
     })
    }
}

const truncateText = (text, limit) => {
  if (text && text.length > limit) {
    return text.split(' ').slice(0, limit).join(' ') + '...';
  }
  return text;
};

</script>

<template>
  <div class="container mx-auto ">
    <div class="container mx-auto px-12 text-center my-16">
      <div class="mt-44">
        <h2 class="text-6xl font-bold font-serif"><span class="text-amber-800">Evian</span>News</h2>
      </div>
      <form @submit.prevent="SearchNews()">
        <input type="search" class="w-60 mt-12 mr-4 p-3 rounded-full border border-amber-400 outline-none lg:w-96" id="" placeholder="What Are You Looking For?" v-model="search">
        <input type="submit" value="Search" class="bg-amber-800 w-24 p-2 font-bold text-white rounded-lg sm:mt" />
      </form>
    </div>
    

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
      <div
        v-for="article in News"
        :key="article.title"
        class="mb-7 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img class="w-5/4 rounded-lg" :src="article.urlToImage" :alt="article.title" />
  
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {{ truncateText(article.description, 20) }}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {{ article.title }}
          </p>
          <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-blue-200">
            {{ article.source.name }}
          </span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          ></span>
          <a
            :href="article.url"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-200"
          >Read More</a>
        </div>
      </div>
    </div>
  </div>

  
</template>
