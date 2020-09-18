<template>
  <v-container>
    <v-layout row wrap>

      <v-flex>
        <ul v-if="dirs.length">
          <p v-for="c in dirs" :key="c">
            <a class="directories" @click="change_dir(c)">{{c}}/</a>
          </p>
        </ul>
      </v-flex>

      <v-flex>
        <ul v-if="mds.length">
          <p v-for="c in mds" :key="c">
            <a class="markdown" @click="markdown(c)">{{c}}</a>
          </p>
        </ul>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  
export default {
  props: {
    dirs: {
      default: () => []
    },
    mds: {
      default:() => []
    }
  },

  methods: {
    change_dir(dir) {
      this.$emit('newdir', dir);
    },

    markdown(md) {
      this.$router.push(
        {'name': 'Note', params: { path: md }}
      );
    },

  }
}
</script>

<style scoped>
a:hover {
  color: white !important;
  -webkit-transform: scale(1.2); 
}

a.markdown {
  color: #6994bf;
}

</style>
