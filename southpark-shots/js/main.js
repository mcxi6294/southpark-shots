document.querySelector('button').addEventListener('click', getSouthpark)

function getSouthpark(){
    let episodeNum = document.querySelector('#getAction').value

    fetch(`https://spapi.dev/api/episodes/${episodeNum}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#episode-name').innerText = data.data.name
      document.querySelector('#season').innerText = data.data.season
      document.querySelector('#description').innerText = data.data.description      
      document.querySelector('#wiki').innerText = data.data.wiki_url   
     
      document.querySelector('img').src = data.data.thumbnail_url

      console.log(data.data.thumbnail_url)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
