var app = new Vue({
    el: '#downloads',
    template: `
        <table>
        <thead>
            <tr>
                <th>Version</th>
                <th>Flavor</th>
                <th>Features</th>
                <th>Size</th>
                <th>Download</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="img in images">
                <td>{{ img.version }}</td>
                <td>{{ img.flavor }}</td>
                <td><a v-for="feature in img.features.split(' ')" style="margin-right:0.4rem;" :href="'/documentation/image-features/#' + feature">{{ feature }}</a></td>
                <td>{{ img.size }}</td>
                <td><a :href="img.url">{{ img.filename }}</a></td>
            </tr>
            <tr v-if="!images.length">
                <td colspan="5" style="text-align:center; font-style:italic;">not available</td>
            </tr>
        </tbody>
        </table>
        `,
	data: {
        images: {}
	},
    mounted() { // when the Vue app is booted up, this is run automatically.
      var self = this // create a closure to access component in the callback below
      $.getJSON(document.getElementById("download-title").getAttribute("url")+".content.json", function(data) {
        self.images = data;
      });
    }
})
