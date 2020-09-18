<template>
  <v-container>
    <h1><b>tamburlaine</b> notes</h1>
    <h6>{{getCWD()}}</h6>
    <linkedlist 
      :dirs="dirs" 
      :mds="markdowns"
      @newdir="changedir"
      >
      </linkedlist>
  </v-container>
</template>

<script>
import linkedlist from '@/components/linkedlist'
import { fetch_note_dir } from '@/services/fileio'

const path = require('path')

export default {
  components: {
    linkedlist
  },

  data() {
    return {
      dirs: [],
      markdowns: [], 
    }
  },

  methods: {

    updateCWD(cwd) {
      this.$store.commit("setCWD", cwd);
    },

    getCWD() {
      return this.$store.state.cwd;
    },

    changedir(dir) {
      // modify current path
      if (dir == '..') {
        var temp = this.getCWD().split('/');
        temp.pop();
        this.updateCWD(temp.join('/'));
      }
      else {
        this.updateCWD(path.join(this.getCWD(), dir));
      }
      // update view
      this.updateView();
    },

    updateView() {
      var cwd = this.getCWD();

      fetch_note_dir(cwd).then((result) => {

        this.dirs = result.dirs;
        this.markdowns = result.mds;

        if (this.root != cwd) {
          this.dirs.push('..');
        }

      });
    }
  },

  mounted() {
    this.root = this.$store.state.root;
    this.updateView();
  }

}
</script>
