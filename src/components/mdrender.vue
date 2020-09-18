<template>
    <vue-markdown tile :source="content" @rendered="update"/>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from "prismjs";

export default {
  components: {
    VueMarkdown
  },
  props: ['content'],
  methods: {
    update: function() {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    }
  }
};

</script>
