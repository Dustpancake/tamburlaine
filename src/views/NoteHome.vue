<template>
  <v-container>
    <h1><b>tamburlaine</b> notes</h1>
    <h6>{{this.current}}</h6>
    <linkedlist 
      :dirs="dirs" 
      :mds="markdowns" 
      @newdir="changedir"
      @rendermd="rendermd"
      >
      </linkedlist>
  </v-container>
</template>

<script>
import linkedlist from '@/components/linkedlist';

const fs = require('fs')
const path = require('path')

export default {
  components: {
    linkedlist
  },

  props: {
    path: {
      default: "/Users/cosroe/Developer/Notes/Dust-Notes"
    }
  },

  data() {
    return {
      dirs: [],
      markdowns: [], 
      current: ""
    }
  },

  methods: {
    changedir(dir) {
      if (dir == '..') {
        var temp = this.current.split('/');
        temp.pop();
        this.current = temp.join('/');
          
      }
      else {
        this.current = path.join(this.current, dir);
      }
      console.log(this.current);
      this.updateView();
    },


    rendermd(md) {
      var mdpath = path.join(this.current, md);
      this.$router.push(
        {'name': 'Note', params: { path: mdpath }}
      );
    },


    updateView() {
      fs.readdir(this.current, (err, files) => {
      files = files.filter(file => !(file[0] == '.'||file[0]=='_'));

      var dirs = [];
      var markdowns = files.filter(file => {
        /* extract markdown files and store rest in dir array */

        // get file extension 
        // https://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
        var ext = (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
        if (ext == 'md') {
          return true;
        } else {
          if (fs.lstatSync(path.join(this.current,file)).isDirectory()) {
            dirs.push(file)
          }
          return false;
        }
      });
      if (this.path != this.current) {
        dirs.push("..");
      }
      this.dirs = dirs;
      this.markdowns = markdowns;
    });
    }
  },

  mounted() {
    this.current = this.path;
    this.updateView();
  }

}
</script>
