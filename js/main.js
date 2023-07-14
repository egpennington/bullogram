const posts = [
    {
        name: "Vincent van Dogg",
        username: "vincey1853",
        avatar: "https://www.dfordog.co.uk/user/images/funnies/dog-selfies-01.jpg",
        location: "Zundert, Netherlands",
        image: "https://www.dfordog.co.uk/user/images/funnies/dog-selfies-03.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    
    {
        name: "Gustave Courbull",
        username: "gus1819",
        avatar: "https://www.englishbulldognews.com/attachments/272-jpg.66346/",
        location: "Ornans, France",
        image: "https://images.pexels.com/photos/3978352/pexels-photo-3978352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    
        {
        name: "Josephine Dogcreux",
        username: "jd1735",
        avatar: "https://images.unsplash.com/photo-1611611158876-41699b77a059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVsbGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        location: "Paris, France",
        image: "https://i.insider.com/5f44388342f43f001ddfec52?width=700",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    
    {
        name: "Leonardo Bull Vinci",
        username: "lbv2323",
        avatar: "images/baileybugavatar.jpg",
        location: "Dickinson, Texas",
        image: "images/baileybug2.jpg",
        comment: "IMHO, whoever said diamonds are a girl's best friend, never had a dog.",
        likes: 426
    }
]

const containerEl = document.getElementById("container-el")


 for(let i = 0; i < posts.length; i++) {
      let currentPost = posts[i]
      containerEl.innerHTML += `
        <section>
          <div class="top">
            <div>
              <img src="${currentPost.avatar}" class="avatar">
             </div>
            <div>
              <p class="txt-med txt-bold">${currentPost.name}<p>
              <p class="txt-sm">${currentPost.location}</p>
            </div>
          </div>
          <img src = ${currentPost.image}>
          <div class="symbols">
            <i class="fa-regular fa-heart fa-xl"></i>
            <i class="fa-regular fa-comment fa-xl"></i>
            <i class="fa-regular fa-paper-plane fa-xl"></i>
          </div>
          <p class="txt-med txt-bold pd-15">${currentPost.likes} likes</p>
          <div class="bottom">
            <p class="pd-l"><span class="txt-med txt-bold mr-r">${currentPost.username}</span><span class="txt-med">${currentPost.comment}</span></p>
          </div>
        </section>
     `
}
