<template>
  <nav>
    <v-navigation-drawer app text permanent>
      <v-container>
        <mdrender :content="content"/>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import mdrender from '@/components/mdrender'

export default {
    props: ['content'],
    components: {
        mdrender
    }
}

</script>
