<template>
  <header class="Header">
    <div class="links">
      <NuxtLink :to="$i18n.path('')">
        {{ $t('links.home') }}
      </NuxtLink>
      <NuxtLink v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath">
        <!-- $route.fullPathでルート以下のパスが取れるので、/enを加えて英語用の絶対パスへ飛ばす -->
        {{ $t('links.en')}}
      </NuxtLink>
      <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
        {{ $t('links.ja') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('about')">
        {{ $t('links.about') }}
      </NuxtLink>
    </div>
  </header>
</template>
<script>
  export default {

  }
</script>
<style scoped>

</style>
