const fetch = require('node-fetch');

let pageNum = 0;

fetch("https://fgvi612dfz-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.32.1%3Binstantsearch.js%20(3.4.0)%3BVue%20InstantSearch%20(2.0.1)%3BJS%20Helper%20(2.27.0)&x-algolia-application-id=FGVI612DFZ&x-algolia-api-key=M2Y0NjU3MWVhZjY2YTczODFjYzc3MjFhZGIwZTlmNzJlMWZlZjgxMDliMTRhZThhN2QwNjNiNDQwNDFkNzczMXZhbGlkVW50aWw9MTU1NzQ3NzgzMg%3D%3D", {"credentials":"omit","headers":{"accept":"application/json","content-type":"application/x-www-form-urlencoded"},"referrer":"https://www.fragrantica.com/search/?spol=male","referrerPolicy":"no-referrer-when-downgrade","body":"{\"requests\":[{\"indexName\":\"fragrantica_perfumes\",\"params\":\"query=&hitsPerPage=80&maxValuesPerFacet=10&page=" + pageNum + "&attributesToRetrieve=%5B%22naslov%22%2C%22dizajner%22%2C%22godina%22%2C%22url.EN%22%2C%22thumbnail%22%5D&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%22spol%22%2C%22dizajner%22%2C%22godina%22%2C%22ingredients.EN%22%2C%22rating%22%2C%22nosevi%22%2C%22osobine.EN%22%2C%22collection%22%2C%22designer_meta.country%22%2C%22designer_meta.category%22%2C%22designer_meta.parent_company%22%2C%22designer_meta.main_activity%22%5D&tagFilters=&facetFilters=%5B%5B%22spol%3Amale%22%5D%5D\"},{\"indexName\":\"fragrantica_perfumes\",\"params\":\"query=&hitsPerPage=1&maxValuesPerFacet=10&page=0&attributesToRetrieve=%5B%22naslov%22%2C%22dizajner%22%2C%22godina%22%2C%22url.EN%22%2C%22thumbnail%22%5D&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=spol\"}]}","method":"POST","mode":"cors"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
