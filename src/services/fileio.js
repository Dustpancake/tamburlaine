const fs = require("fs");
const path = require("path");

export { get_markdown, fetch_note_dir };

function get_markdown(root, file) {
    var mdpath = path.join(root, file);

    return new Promise((resolve, reject) => {
        fs.readFile(mdpath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                var head, toc;
       
                try { 
                    head = data.split("<!--BEGIN TOC-->");
                    data = head[1].split("<!--END TOC-->");
                    toc = data[0];
                    data = head[0] + data[1];
                } catch {
                    toc = "";
                }
                
                resolve({content: data, toc: toc});
            }
        });
    });
}

function get_ext(file) {
    // https://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
    return (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
}

function is_directory(root, file) {
    return fs.lstatSync(path.join(root, file)).isDirectory();
}

function fetch_note_dir(root) {
    /* fetch markdown files, and directories in the 'root' directory */
    return new Promise((resolve, reject) => {
        fs.readdir(root, (err, files) => {
            if (err) {
                reject(err);
            } else {

                var markdowns, dirs = [];

                markdowns = files.filter(file => {
                    var ext = get_ext(file);
                    if (ext == 'md') {
                        return true;
                    } else {
                         if (is_directory(root, file)) {
                            dirs.push(file);
                        }
                        return false;
                    }
                });

                resolve({dirs: dirs, mds: markdowns});
            }
        });
    });
}
