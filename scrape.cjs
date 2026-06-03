const https = require('https');

https.get('https://www.bain.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const matches = data.match(/<div class="hero-carousel__content[^>]*>([\s\S]*?)<\/div><\/div>/g);
    if (matches) {
      matches.forEach(m => {
        const title = m.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
        const desc = m.match(/<p[^>]*>(.*?)<\/p>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
        const label = m.match(/<span[^>]*>(.*?)<\/span>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
        console.log(`LABEL: ${label}\nTITLE: ${title}\nDESC: ${desc}\n---`);
      });
    } else {
      console.log("No hero content found");
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
